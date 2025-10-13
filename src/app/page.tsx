'use client';
import StyledTest from "../components/StyledTest";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-4 items-center justify-center bg-gray-100">
      <StyledTest />
      <Button variant="contained" color="primary">MUI Button 🚀</Button>
    </main>
  );
}