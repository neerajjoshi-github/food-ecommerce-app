import { cn } from "../utils/tailwindFunction";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-300/50", className)}
      {...props}
    />
  );
}

export { Skeleton };
