export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f2f0]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-full border-4 border-teal-100 border-t-teal-500 animate-[spin_.75s_linear_infinite]" />
        <p className="text-teal-700 text-sm font-semibold">Loading eMazingira…</p>
      </div>
    </div>
  );
}
