// import { useEffect, useState } from "react";

const getData = async (slug: string) => {
  const res = await fetch(`http://localhost:8000/book/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  return data;
};

export async function generateStaticParams() {
  const posts = await fetch("http://localhost:8000/book/").then((res) =>
    res.json()
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = params;
  const book = await getData(slug);
  return (
    <div>
      <div>{book.title}</div>
      <div>{book.description}</div>
    </div>
  );
}
type Params = {
  id: string;
};

type Props = {
  params: Params;
};

type BookData = {
  title: string;
};
