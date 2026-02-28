import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { getPins } from "../services/pinService";
import MasonryGrid from "../components/MasonryGrid";

export default function Board() {
  const { id } = useParams();
  const sectionId = id; // for simplicity
  const [pins, setPins] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  useEffect(() => {
    loadPins();
  }, [offset]);

  async function loadPins() {
    const newPins = await getPins(sectionId, limit, offset);
    setPins((prev) => [...prev, ...newPins]);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setOffset((prev) => prev + limit);
        }
      },
      { threshold: 1 }
    );

    const el = document.getElementById("load-trigger");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <h1>Section {sectionId}</h1>
      <MasonryGrid pins={pins} />
      <div id="load-trigger" style={{ height: "20px" }}></div>
    </div>
  );
}