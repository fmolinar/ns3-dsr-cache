export const RESULT_DIR =
  "/Users/fmolinar/Documents/school/csci256-wireless-spring26/ns3-dsr/simulation-results/parameter-sweeps/adaptive-cache-20260502-122346";

export const colors = {
  ink: "#142033",
  soft: "#647085",
  faint: "#EEF3F8",
  panel: "#FFFFFF",
  line: "#D9E2EC",
  blue: "#2F80ED",
  green: "#00A676",
  orange: "#F59E0B",
  red: "#DC2626",
  navy: "#1F4E79",
};

export function chart(name) {
  return `${RESULT_DIR}/graphs-png/${name}.png`;
}

export function text(slide, ctx, value, x, y, w, h, opts = {}) {
  return ctx.addText(slide, {
    text: String(value ?? ""),
    left: x,
    top: y,
    width: w,
    height: h,
    fontSize: opts.size ?? 18,
    color: opts.color ?? colors.ink,
    bold: Boolean(opts.bold),
    typeface: opts.face ?? "Aptos",
    align: opts.align ?? "left",
    valign: opts.valign ?? "top",
    fill: opts.fill ?? "#00000000",
    line: opts.line ?? ctx.line(),
    insets: opts.insets ?? { left: 0, right: 0, top: 0, bottom: 0 },
  });
}

export function rect(slide, ctx, x, y, w, h, fill, opts = {}) {
  return ctx.addShape(slide, {
    left: x,
    top: y,
    width: w,
    height: h,
    geometry: opts.geometry ?? "rect",
    fill,
    line: opts.line ?? ctx.line(),
  });
}

export function line(slide, ctx, x, y, w, color = colors.line, weight = 2) {
  rect(slide, ctx, x, y, w, weight, color);
}

export function base(slide, ctx, kicker, title, page) {
  rect(slide, ctx, 0, 0, 1280, 720, "#F7FAFD");
  rect(slide, ctx, 0, 0, 1280, 86, "#FFFFFF");
  line(slide, ctx, 54, 86, 1172, colors.line, 1);
  rect(slide, ctx, 54, 34, 5, 28, colors.blue);
  text(slide, ctx, kicker.toUpperCase(), 74, 31, 260, 18, {
    size: 10,
    color: colors.soft,
    bold: true,
  });
  text(slide, ctx, title, 74, 50, 970, 30, {
    size: 18,
    color: colors.ink,
    bold: true,
  });
  text(slide, ctx, `Adaptive DSR route cache | ${page}`, 980, 626, 240, 18, {
    size: 9,
    color: colors.soft,
    align: "right",
  });
}

export function metric(slide, ctx, x, y, value, label, note, color = colors.blue) {
  rect(slide, ctx, x, y, 4, 72, color);
  text(slide, ctx, value, x + 16, y - 2, 170, 34, {
    size: 28,
    color: colors.ink,
    bold: true,
  });
  text(slide, ctx, label.toUpperCase(), x + 16, y + 38, 170, 16, {
    size: 9,
    color: colors.soft,
    bold: true,
  });
  text(slide, ctx, note, x + 16, y + 56, 190, 26, {
    size: 9,
    color: colors.soft,
  });
}

export function bullet(slide, ctx, x, y, textValue, color = colors.blue) {
  rect(slide, ctx, x, y + 8, 8, 8, color, { geometry: "ellipse" });
  text(slide, ctx, textValue, x + 22, y, 445, 42, {
    size: 15,
    color: colors.ink,
  });
}

export async function image(slide, ctx, path, x, y, w, h, fit = "contain") {
  return ctx.addImage(slide, {
    path,
    left: x,
    top: y,
    width: w,
    height: h,
    fit,
  });
}
