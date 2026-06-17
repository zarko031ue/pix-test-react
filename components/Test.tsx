'use client'

export default function TestCard() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-white">
      <div className="flex flex-col gap-[10px] w-full max-w-[1405px]">
        <div
          className="w-full h-[145px] rounded-[var(--radius-lg)]"
          style={{ background: "var(--accent)", border: "1px solid var(--accent)" }}
        />
        <div
          className="w-full h-[155px] rounded-[var(--radius-lg)]"
          style={{ background: "var(--primary)", border: "1px solid var(--primary)" }}
        />
      </div>
    </div>
  )
}