import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function PhotoPage() {
  const router = useRouter();
  const { src, title } = router.query;

  if (!src) return null;

  return (
    <div className="photo-page">
      <Link href="/" className="photo-close" aria-label="Back to site">
        ← Back
      </Link>
      <div className="photo-wrapper">
        <img src={src} alt={title || "Photo"} className="photo-img" />
      </div>
    </div>
  );
}
