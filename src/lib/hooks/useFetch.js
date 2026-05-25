"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Minimal data-fetching hook with loading, error, and refetch.
 *
 * Intentionally dependency-free — no SWR / React Query. When the app grows
 * beyond this (caching, revalidation, mutations), swap this hook's internals
 * for SWR; the return shape is compatible.
 *
 * @param {() => Promise<T>} fetcher  Must be memoised (e.g. wrapped in useCallback)
 *                                    so the effect doesn't run every render.
 * @param {any[]} deps                Triggers a refetch when changed.
 */
export function useFetch(fetcher, deps = []) {
  const [state, setState] = useState({
    data: null,
    error: null,
    isLoading: true,
  });

  const latestRequestId = useRef(0);

  const run = useCallback(async () => {
    const reqId = ++latestRequestId.current;
    setState((s) => ({ ...s, isLoading: true, error: null }));

    try {
      const data = await fetcher();
      if (reqId !== latestRequestId.current) return; // superseded
      setState({ data, error: null, isLoading: false });
    } catch (err) {
      if (reqId !== latestRequestId.current) return;
      setState({ data: null, error: err, isLoading: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    run();
    return () => { latestRequestId.current++; }; // cancel in-flight on unmount
  }, [run]);

  return { ...state, refetch: run };
}
