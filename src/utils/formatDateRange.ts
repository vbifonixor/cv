import date from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

date.extend(duration);
date.extend(relativeTime);

export const formatDateRange = (
  start: Date,
  end?: Date,
  noMonths?: boolean,
) => {
  const s = date(start);
  const e = end ? date(end) : date();

  const totalMonths = e.diff(s, "month");
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const rangeStr =
    !totalMonths || (noMonths && !years)
      ? s.format(noMonths ? "YYYY" : "MMMM YYYY")
      : `${s.format(noMonths ? "YYYY" : "MMMM YYYY")} — ${
          end ? e.format(noMonths ? "YYYY" : "MMMM YYYY") : "Present"
        }`;

  const parts = [];
  if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} month${months > 1 ? "s" : ""}`);

  const durationStr = parts.length > 0 ? parts.join(", ") : "less than a month";

  return { rangeStr, durationStr };
};
