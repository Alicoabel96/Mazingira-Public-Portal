import Image from "next/image";

/**
 * Thin top strip with the Tanzania flag faintly visible behind a green→blue
 * gradient. Matches the PDF: flag at ~80% opacity, gradient ~75% over top,
 * italic white text.
 */
export default function AnnouncementBar({ message }) {
  return (
    <div className="relative w-full h-9 overflow-hidden">
      {/* Flag layer (80% opacity) */}
      <Image
        src="/images/tz-flag.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-80"
      />

      {/* Gradient overlay (green → blue) at ~75% so flag shows through */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(13,111,99,0.82) 0%, rgba(14,111,106,0.78) 45%, rgba(17,92,184,0.82) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Text — italic, centered */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <p className="text-white text-[12px] md:text-[14px] font-medium italic text-center">
          {message}
        </p>
      </div>
    </div>
  );
}
