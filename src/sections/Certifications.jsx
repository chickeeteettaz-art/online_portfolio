import TitleHeader from "../components/TitleHeader";

const certifications = [

    {
        title: "National Diploma in Information Technology",
        issuer: "Rosebank College",
        year: "2025",
        logo: "/images/ri_logo.png",
    },
    {
        title: "Top achiever in Diploma of Information Technology in Software Development",
        issuer: "Rosebank College",
        year: "2025",
        logo: "/images/ri_logo.png",
    },
    {
        title: "Overall Top achiever in the Faculty of ICT",
        issuer: "Rosebank College",
        year: "2025",
        logo: "/images/ri_logo.png",
    },
    {
        title: "National Senior Certificate",
        issuer: "South African School Certificate",
        year: "2019",
        logo: "/images/school.png",
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="w-full px-5 py-20 md:px-20 md:py-32">
            <div className="mx-auto max-w-7xl">


                <div className="mx-auto mt-12 max-w-3xl text-center">
                    <TitleHeader
                        title="Certifications & Achievements"
                        sub="🏅 Proof of continuous learning"
                    />
                    <p className="mx-auto max-w-2xl text-lg leading-8 text-white-50">
                        A selection of qualifications and achievements earned throughout my
                        learning journey. Each one reflects consistent effort, curiosity,
                        and a commitment to growing as a developer.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {certifications.map((certification) => (
                        <article
                            key={certification.title}
                            className="card-border flex min-h-52 items-center gap-6 rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1 md:p-8"
                        >
                            <div className="flex size-20 flex-none items-center justify-center rounded-full border border-black-50 bg-black-200 p-4 md:size-24">
                                <img
                                    src={certification.logo}
                                    alt=""
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-[0.18em] text-blue-50">
                                    {certification.year}
                                </p>
                                <h3 className="mt-2 text-xl font-semibold md:text-2xl">
                                    {certification.title}
                                </h3>
                                <p className="mt-3 text-white-50">{certification.issuer}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;