"use client";

interface TeamMemberProps {
  name: string;
  image: string;
  borderColor?: string;
}

export default function TeamMember({ name, image, borderColor }: TeamMemberProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "#444",
          borderRadius: "50%",
          marginBottom: "0.5em",
          overflow: "hidden",
          position: "relative",
          border: borderColor ? `4px solid ${borderColor}` : "none",
          boxSizing: "border-box",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
      </div>
      <small>{name}</small>
    </div>
  );
}
