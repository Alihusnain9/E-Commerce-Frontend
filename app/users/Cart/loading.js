import { CircularProgress } from "@mui/material";
export default function Loading() {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <CircularProgress />
    </div>
  );
}
