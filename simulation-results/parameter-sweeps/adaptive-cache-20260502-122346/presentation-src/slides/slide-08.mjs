import { base, bullet, colors, metric, rect, text } from "./common.mjs";

export function slide08(presentation, ctx) {
  const slide = presentation.slides.add();
  base(slide, ctx, "Takeaways", "Adaptive cache timing looks promising, but it needs seed and scenario sweeps next.", "08");
  rect(slide, ctx, 80, 136, 500, 392, "#FFFFFF", { line: ctx.line(colors.line, 1) });
  text(slide, ctx, "What the experiment suggests", 112, 166, 380, 28, { size: 22, bold: true, color: colors.navy });
  bullet(slide, ctx, 116, 230, "A moderate effective timeout outperformed both very short and long-lived cache assumptions.", colors.green);
  bullet(slide, ctx, 116, 314, "The adaptive policy helped most when fixed DSR would otherwise keep stale cache state too long.", colors.blue);
  bullet(slide, ctx, 116, 398, "The 10% case exposes the impact of clamp bounds, so low-end tuning deserves separate attention.", colors.orange);
  rect(slide, ctx, 664, 136, 480, 392, "#F4F8FC", { line: ctx.line(colors.line, 1) });
  text(slide, ctx, "Future work", 700, 166, 260, 28, { size: 22, bold: true, color: colors.navy });
  text(slide, ctx, "Repeat runs across random seeds\nSweep cacheReferenceSpeed independently\nCompare LinkCache and PathCache\nSweep node speed and node density\nTrack routing overhead alongside delivery", 700, 226, 360, 220, {
    size: 19,
    color: colors.ink,
  });
  metric(slide, ctx, 104, 578, "3/4", "adaptive wins", "against fixed comparator", colors.blue);
  metric(slide, ctx, 404, 578, "50%", "best sweep point", "1261 packets received", colors.green);
  metric(slide, ctx, 704, 578, "next", "variance testing", "multi-seed validation", colors.orange);
  return slide;
}
