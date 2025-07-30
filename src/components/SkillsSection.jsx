import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    {name: "JavaScript", level: "Advanced", category: "Programming", percent: "80"},
    {name: "React", level: "Intermediate", category: "Framework", percent: "75"},
    {name: "CSS", level: "Advanced", category: "Styling", percent: "85"},
    {name: "TypeScript", level: "Intermediate", category: "Programming", percent: "70"},
    
    { name: "Node.js", level: "Intermediate", category: "Backend", percent: "75" },
    {name: "Python", level: "Advanced", category: "Programming", percent: "80"},
    {name: "Django", level: "Intermediate", category: "Framework", percent: "70"},
    {name: "SQL", level: "Advanced", category: "Database", percent: "85"},
    
    {name: "Git", level: "Advanced", category: "Version Control", percent: "80"},
    { name: "GraphQL", level: "Intermediate", category: "API", percent: "70" },
    {name: "Docker", level: "Intermediate", category: "DevOps", percent: "60"},
    {name: "AWS", level: "Intermediate", category: "Cloud", percent: "65"},
    {name: "HTML", level: "Advanced", category: "Markup", percent: "90"},
    {name: "Redux", level: "Intermediate", category: "State Management", percent: "75"},
];

const categories = ['all', 'frontend', 'backend']



export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('all')
    const filteredSkills = skills.filter((skill) => activeCategory === 'all' || skill.category.toLowerCase() === activeCategory);

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-primary/80")}>
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-(grow_1.5s_ease-out" style={{ width: skill.percent + '%' }}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="">{skill.level}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
}