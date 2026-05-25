<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Key Next 16 gotchas that apply to this codebase

- **Dynamic route `params` is a Promise.** In `app/api/foo/[id]/route.js`:
  ```js
  export async function GET(_req, { params }) {
    const { id } = await params;   // <-- must await
  }
  ```
- **`error.js` gets `unstable_retry`**, not `reset` (as in older Next).
- **Route handlers** use the Web `Request` / `Response.json()` API — no `NextResponse` needed for simple JSON.
