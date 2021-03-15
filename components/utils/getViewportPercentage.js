export function calculateVerticalPercentage(
  bounds,
  threshold = 0,
  root = window
) {
  if (!root || !bounds) return 0;
  const vh =
    (root instanceof Element ? root.clientHeight : root.innerHeight) || 0;
  const offset = threshold * bounds.getBoundingClientRect().height;
  const percentage =
    (bounds.getBoundingClientRect().bottom - offset) /
    (vh + bounds.getBoundingClientRect().height - offset * 2);

  return 1 - Math.max(0, Math.min(1, percentage));
}

export function calculateHorizontalPercentage(
  bounds,
  threshold = 0,
  root = window
) {
  if (!root || !bounds) return 0;
  const vw =
    (root instanceof Element ? root.clientWidth : root.innerWidth) || 0;
  const offset = threshold * bounds.getBoundingClientRect().width;
  const percentage =
    (bounds.getBoundingClientRect().right - offset) /
    (vw + bounds.getBoundingClientRect().width - offset * 2);

  return 1 - Math.max(0, Math.min(1, percentage));
}
