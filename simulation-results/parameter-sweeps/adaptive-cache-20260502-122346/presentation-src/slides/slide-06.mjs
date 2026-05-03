import { base, chart, colors, image, metric } from "./common.mjs";

export async function slide06(presentation, ctx) {
  const slide = presentation.slides.add();
  base(slide, ctx, "Fixed Comparison", "Adaptive tuning beat fixed cache behavior at 50%, 110%, and 150%.", "06");
  await image(slide, ctx, chart("adaptive-vs-fixed-total-packets"), 54, 124, 700, 420);
  metric(slide, ctx, 800, 158, "+173", "50% packet delta", "adaptive vs fixed", colors.green);
  metric(slide, ctx, 800, 278, "+327", "110% packet delta", "largest improvement", colors.blue);
  metric(slide, ctx, 800, 398, "-95", "10% packet delta", "low-end clamp loses", colors.red);
  return slide;
}
