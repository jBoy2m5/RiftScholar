import luxAcademia from './Gameknowledge-img/Lux-battle-academia.webp'
import ezealTech from './Gameknowledge-img/EzrealTechnology.webp'
import kindredBlossom from './Gameknowledge-img/Kindred_Spiral.webp'

function GameKnowledge() {
    return(
        <div>
            <section className="text-center mb-40 w-8/10 mx-auto lg:w-6/10">
                <h1 className="font-heading font-extrabold text-[#F2D18B] text-4xl mb-6">Game Knowledge</h1>
                <p>Looking to improve your understanding of the game? Explore core concepts and fundamentals designed to help you perform more consistently in every match.</p>
            </section>
            <div className="bg-[rgba(124,255,58,0.14)] my-15 lg:w-7/10 mx-auto flex flex-row justify-between rounded-lg">
                <img src={luxAcademia} alt="Lux Battle Academia" className="w-3/10" />
                <div className="flex flex-col w-7/10 text-center px-15 py-5">
                    <h1 className="font-roboto font-extrabold text-3xl mb-5">BEGINNER GUIDE</h1>
                    <p>New to League or coming back after a break? Start here to build a clean foundation—from controls and game flow to the first habits that actually win you matches. No overload, just the essentials that make the game feel playable and consistent.</p>
                </div>
            </div>
            <div className="bg-[rgba(47,212,255,0.16)] my-15 lg:w-7/10 mx-auto flex flex-row justify-between rounded-lg">
                <div className="flex flex-col w-7/10 text-center px-15 py-5">
                    <h1 className="font-roboto font-extrabold text-3xl mb-5">CORE KNOWLEDGE</h1>
                    <p>This is where fundamentals turn into results. Learn the universal concepts that decide games—tempo, objectives, teamfight structure, and how to play around win conditions—so you’re not just reacting, you’re controlling the pace.</p>
                </div>
                <img src={ezealTech} alt="Ezeal Technology" className="w-3/10" />
            </div>
            <div className="bg-[rgba(124,77,255,0.18)] my-15 lg:w-7/10 mx-auto flex flex-row justify-between rounded-lg">
                <img src={kindredBlossom} alt="Kindred Blossom" className="w-3/10" />
                <div className="flex flex-col w-7/10 text-center px-10 py-5">
                    <h1 className="font-roboto font-extrabold text-3xl">ROLE-SPECIFIC</h1>
                    <h1 className="font-roboto font-extrabold text-3xl mb-5">KNOWLEDGE</h1>
                    <p>Lock in your main role and level it up. Get focused playbooks for Top, Jungle, Mid, ADC, and Support—each built around what that role must do to carry fights, control the map, and convert leads into wins.</p>
                </div>
            </div>

        </div>
    )
}

export default GameKnowledge;