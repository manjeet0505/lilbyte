type ClassValue = string | number | null | undefined | false;

type ClassInput = ClassValue | ClassInput[] | Record<string, boolean>;

export function cn(...inputs: ClassInput[]): string {
  const classes: string[] = [];

  const visit = (value: ClassInput) => {
    if (!value) return;

    if (typeof value === "string" || typeof value === "number") {
      classes.push(String(value));
      return;
    }

    if (Array.isArray(value)) {
      for (const v of value) visit(v);
      return;
    }

    for (const [k, v] of Object.entries(value)) {
      if (v) classes.push(k);
    }
  };

  for (const input of inputs) visit(input);

  return classes.join(" ");
}
