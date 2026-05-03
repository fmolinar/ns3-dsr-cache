import { base, chart, colors, image, rect, text } from "./common.mjs";

export async function slide07(presentation, ctx) {
  const slide = presentation.slides.add();
  base(slide, ctx, "Time Series", "Packet delivery starts after traffic begins and differs mainly during active seconds.", "07");
  await image(slide, ctx, chart("receive-rate-over-time"), 50, 118, 760, 430);
  rect(slide, ctx, 858, 148, 280, 330, "#FFFFFF", { line: ctx.line(colors.line, 1) });
  text(slide, ctx, "How to read it", 892, 184, 200, 26, { size: 22, bold: true, color: colors.navy });
  text(slide, ctx, "Rows are one simulated second. Traffic starts around 100 s, so the first half of each metrics file is intentionally zero. The comparisons use total packets and average kbps across the full 200 s for consistency with the default ns-3 example.", 892, 236, 204, 190, {
    size: 16,
    color: colors.ink,
  });
  return slide;
}
