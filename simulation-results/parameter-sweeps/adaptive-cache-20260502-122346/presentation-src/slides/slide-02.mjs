import { base, bullet, colors, rect, text } from "./common.mjs";

export function slide02(presentation, ctx) {
  const slide = presentation.slides.add();
  base(slide, ctx, "Problem", "DSR cache reuse is valuable until mobility turns cached routes stale.", "02");
  rect(slide, ctx, 70, 134, 460, 430, "#FFFFFF", { line: ctx.line(colors.line, 1) });
  text(slide, ctx, "Why the cache can hurt", 100, 162, 360, 24, { size: 22, bold: true, color: colors.navy });
  bullet(slide, ctx, 105, 224, "DSR avoids repeated route discovery by keeping learned source routes and link state.");
  bullet(slide, ctx, 105, 296, "In RandomWaypoint mobility, a route that worked earlier can point through a now-broken link.");
  bullet(slide, ctx, 105, 386, "Long cache lifetimes can keep stale state alive long enough to drop packets before repair.");
  rect(slide, ctx, 620, 158, 500, 300, "#F4F8FC", { line: ctx.line(colors.line, 1) });
  text(slide, ctx, "Adapt cache trust to movement", 660, 196, 390, 30, { size: 25, bold: true, color: colors.ink });
  text(slide, ctx, "The experiment keeps the default MANET scenario and metrics, but computes cache timers from node speed before installing DSR.", 660, 250, 380, 80, { size: 18, color: colors.soft });
  text(slide, ctx, "Higher node speed -> shorter route and link stability timers", 660, 362, 380, 42, { size: 20, bold: true, color: colors.blue });
  return slide;
}
