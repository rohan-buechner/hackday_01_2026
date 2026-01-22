import RevealPresentation from "@/components/RevealPresentation";
import TeamMember from "@/components/TeamMember";
import ReviewSlide from "@/components/ReviewSlide";

export default function Home() {
    const teamMembers = [
        {name: "Nikola", image: "/team/nikola.png", squad: "Squad A"},
        {name: "Stefan", image: "/team/stefan.png", squad: "Squad A"},
        {name: "Dominika", image: "/team/dominika.png", squad: "Squad A"},
        {name: "Nico", image: "/team/nico.png", squad: "Squad A"},
        {name: "Selda", image: "/team/selda.png", squad: "Squad A"},
        {name: "Linda", image: "/team/linda.png", squad: "Squad A"},
        {name: "Rohan", image: "/team/rohan.png", squad: "Squad A"},
        {name: "Milan", image: "/team/milan.png", squad: "Squad B"},
        {name: "Yves", image: "/team/yves.png", squad: "Squad B"},
        {name: "Victor", image: "/team/victor.png", squad: "Squad B"},
        {name: "Didier", image: "/team/didier.png", squad: "Squad B"},
        {name: "Blue", image: "/team/blue.png", squad: "Squad C"},
    ];

    const squadColors: { [key: string]: string } = {
        "Squad A": "#70e7cd", // Blue
        "Squad B": "#e0b63e", // Red
        "Squad C": "#3a6be8", // Red
    };

    return (
        <RevealPresentation>
            {/* Title Slide */}
            <section>
                <h1>Hackday January 2026</h1>
                <div style={{
                    width: "400px",
                    margin: "1em auto",
                    borderRadius: "12px",
                    border: "4px solid transparent",
                    background: "linear-gradient(#222, #222) padding-box, linear-gradient(45deg, #3ea9a3, #5ffbf1, #3ea9a3) border-box",
                    overflow: "hidden"
                }}>
                    <img
                        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWVldDk0cGEyNHFncmt3YmNrYTMyNDRiYjBoMXB0eDUxaTY2MnFtMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2YWmJXKo7imjqhxu/giphy.gif"
                        alt="English do you speak it"
                        style={{width: "100%", display: "block"}}
                    />
                </div>
            </section>

            {/* Final Slide */}
            <section>
                <ReviewSlide />
            </section>

            {/* Overview Slide 1 */}
            <section data-auto-animate>
                <h2 data-id="overview-title">Original Goal</h2>
                <ul>
                    <li>English as a supported language on the UI.</li>
                    <li>Ability to translate user generated content dynamically.</li>
                    <li style={{textDecorationLine: 'line-through'}}>Cross language search.</li>
                </ul>
            </section>

            {/* Overview Slide 1 */}
            <section data-auto-animate>
                <h2 data-id="overview-title">Original Goal</h2>
                <ul>
                    <li>English as a supported language on the UI.</li>
                    <li>Ability to translate user generated content dynamically.</li>
                    <li>Dark Mode 🌑</li>
                </ul>
            </section>

            {/* Overview Slide 2 */}
            <section data-auto-animate>
                <h2 data-id="overview-title">The elephant in the room 🐘</h2>
                <ul>
                    <li>Our local environments just are not able to support these hack topics</li>
                    <li>We only have 2 pre-prod environments which are currently shared with other hack teams, as well
                        as current business.
                    </li>
                </ul>
            </section>

            {/* Overview Slide 2 */}
            <section data-auto-animate>
                <h2 data-id="overview-title">Ok... lets do both?</h2>
                <div style={{
                    width: "400px",
                    margin: "1em auto",
                    borderRadius: "12px",
                    border: "4px solid transparent",
                    background: "linear-gradient(#222, #222) padding-box, linear-gradient(45deg, #3ea9a3, #5ffbf1, #3ea9a3) border-box",
                    overflow: "hidden"
                }}>
                    <img
                        alt="Split Up"
                        src="https://i-enlisted.cdn.gaijin.net/original/3X/8/2/82acf9bfd419ddb6e2327efd08737e40683655ef.gif"
                        style={{width: "100%", display: "block"}}
                    />
                </div>
            </section>

            {/* Overview Slide 2 */}
            <section data-auto-animate>
                <h2 data-id="overview-title">Separate but not apart</h2>
                <ul>
                    <li style={{color: "#70e7cd"}}>Language</li>
                    <li style={{color: "#e0b63e"}}>Classifieds Backend Deployment</li>
                </ul>
            </section>


            {/* Team Slide */}
            <section>
                <h2>The Team</h2>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gap: "1.5rem",
                    marginTop: "1em",
                    justifyItems: "center"
                }}>
                    {teamMembers.map((member, index) => (
                        <TeamMember
                            key={index}
                            name={member.name}
                            image={member.image}
                            borderColor={squadColors[member.squad]}
                        />
                    ))}
                </div>
            </section>


            {/* Team Slide */}
            <section>
                <h2>Demo Time</h2>
            </section>

            {/* ML Kit on Apps */}
            <section>
                <h2>Google ML Kit on Apps</h2>
                <ul>
                    <li>On-device machine learning</li>
                    <li>Offline translation capabilities</li>
                    <li>Low latency responses as translations happen locally on user devices</li>
                    <li>Free</li>
                </ul>
            </section>

            {/* Google Translate on Web */}
            <section>
                <h2>Ricardo Translate</h2>
                <ul>
                    <li>Real-time translation API integration</li>
                    <li>Using GemmaX2</li>
                    <li><span style={{textDecorationLine: 'line-through'}}>Free?</span> Already paid for 😉 </li>
                </ul>
            </section>

            {/* ML Kit on Apps */}
            <section>
                <h2>Exploration on new deployment way</h2>
                <ul>
                    <li>Deployment without HELM to reduce complexity</li>
                    <li>Usage of CUE language for data validation and data templating</li>
                    <li>Reduction of configuration file size for backend application</li>
                </ul>
            </section>

            {/* What Went Well */}
            <section>
                <h2>What Went Well ✅</h2>
                <ul>
                    <li className="fragment">
                        <strong>Existing system translations discovered</strong>
                        <br/>
                        <small>Many translations existed but were never connected or used</small>
                    </li>
                    <li className="fragment">
                        <strong>Ml Kit & Existing in house services where a massive time saver</strong>
                        <br/>
                        <small>While not full EN support, we achieved 80% of the way</small>
                    </li>
                    <li className="fragment">
                        <strong>We managed to tackle some Developer QOL Challenges too</strong>
                    </li>
                </ul>
            </section>

            {/* What Went Well */}
            <section>
                <h2>Where are we now</h2>
                <ul>
                    <li className="fragment">
                        <strong>English is available internally only for now</strong>
                        <br/>
                        <small>...some parts still need some engineering love ❤️</small>
                        <small>But to be production ready, there are a handful of additional steps needed if we wanted to roll this out to the public</small>
                    </li>
                    <li className="fragment">
                        <strong>We improved our build pipeline 💪</strong>
                        <br/>
                        <small>...and took a major step to enabling the same environment locally as what we have on our servers</small>
                    </li>
                </ul>
            </section>

            {/* Thank You Team */}
            <section>
                <h2>Thank You! 🎉</h2>
                <p style={{fontSize: "1.2em", lineHeight: "1.8"}}>
                    To the entire team for bringing their A-game<br/>
                    and making this hackday an enjoyable<br/>
                    & successful one.
                </p>
            </section>

            <section>
                <h1 style={{fontSize: "5em"}}>Fin.</h1>
            </section>
        </RevealPresentation>
    );
}
