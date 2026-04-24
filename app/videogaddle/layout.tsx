import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videogaddle — Word Ladder Game for Gamers",
  description:
    "A daily videogame-themed word transformation game. Transform the word, climb the ladder, earn your score.",
};

export default function VideogaddleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
