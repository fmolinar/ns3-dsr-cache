import { base, chart, colors, image, metric } from "./common.mjs";

export async function slide05(presentation, ctx) {
  const slide = presentation.slides.add();
  base(slide, ctx, "Adaptive Sweep", "The 50% adaptive setting delivered the strongest packet count in this run.", "05");
  await image(slide, ctx, chart("total-packets"), 60, 126, 660, 396);
  metric(slide, ctx, 780, 162, "1261", "best packet count", "50% adaptive run", colors.green);
  metric(slide, ctx, 780, 282, "3.228", "avg kbps", "full 200-second average", colors.blue);
  metric(slide, ctx, 780, 402, "37.5s", "effective timeout", "50% base after scaling", colors.orange);
  return slide;
}
