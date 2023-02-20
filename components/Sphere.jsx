import { useEffect } from "react";
import Script from "next/script";

const tech = [
    { name: "CSS", image: "css.png" },
    { name: "Figma", image: "figma.png" },
    { name: "Electron", image: "electron.png" },
    { name: "git", image: "git.png" },
    { name: "GitHub", image: "github.png" },
    { name: "HTML", image: "html.png" },
    { name: "JavaScript", image: "javascript.png" },
    { name: "JetBrains", image: "jetbrains.png" },
    { name: "JSON", image: "json.png" },
    { name: "MongoDB", image: "mongodb.png" },
    { name: "MySQL", image: "mysql.png" },
    { name: "Node.js", image: "nodejs.png" },
    { name: "NPM", image: "npm.png" },
    { name: "Photoshop", image: "photoshop.png" },
    { name: "React.js", image: "react.png" },
    { name: "SASS", image: "sass.png" },
    { name: "Tailwind", image: "tailwind.png" },
    { name: "Vue", image: "vue.png" },
    { name: "XD", image: "xd.png" },
    // TODO next, astro, prisma
]

export default function Sphere({ style }) {

    useEffect(() => {
        try {
            TagCanvas.Start("sphere", "sphere-tags", {
                maxSpeed: 0.05,
                wheelZoom: false,
                freezeActive: true,
                shuffleTags: true,
                shape: "sphere",
                noSelect: true,
                freezeDecel: true,
                fadeIn: 3000,
                initial: [0.3, -0.1],
                depth: 1.1,
                imageMode: "both"
            });
        } catch (error) {
            console.log("Sphere Error: ", error)
        }
    }, []);

    return (
        <>
            <Script type="text/javascript" src="/tagcanvas.min.js" strategy="beforeInteractive" />
            <canvas id="sphere" style={style} width={500} height={500} />
            <div id="sphere-tags">
                <ul>
                    {tech.map(stack => (
                        <li key={stack.name}>
                            <a>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={`/images/sphere/${stack.image}`}
                                    width={60}
                                    height={60}
                                    alt={stack.name}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
