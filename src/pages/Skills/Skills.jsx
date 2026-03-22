import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Database, Cpu, Layout } from "lucide-react";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode } from "react-icons/bs";
import PropTypes from 'prop-types';

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-xl bg-gray-800/50 ${color}`}>
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} className="bg-gray-800 text-white">
            {skill.icon} {skill.name}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

SkillCard.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.object),
  color: PropTypes.string,
};

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "text-blue-400",
      skills: [
        { name: "C++", icon: <BsFileEarmarkCode /> },
        { name: "JavaScript", icon: <BsFileEarmarkCode /> },
        { name: "Python", icon: <FaPython /> },
        { name: "C", icon: <BsFileEarmarkCode /> },
        { name: "PHP", icon: <BsFileEarmarkCode /> },
      ],
    },
    {
      icon: Layout,
      title: "Frontend Development",
      color: "text-purple-400",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "HTML", icon: <BsFileEarmarkCode /> },
        { name: "CSS", icon: <BsFileEarmarkCode /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      icon: Database,
      title: "Backend & Database",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <FaNodeJs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMongodb /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGitAlt /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "VS Code", icon: <TbBrandVscode /> },
      ],
    },
    {
      icon: Code2,
      title: "Core Concepts",
      color: "text-yellow-400",
      skills: [
        { name: "Data Structures", icon: <BsFileEarmarkCode /> },
        { name: "Algorithms", icon: <BsFileEarmarkCode /> },
        { name: "Problem Solving", icon: <BsFileEarmarkCode /> },
      ],
    },
    {
      icon: Layout,
      title: "Soft Skills",
      color: "text-orange-400",
      skills: [
        { name: "Team Player", icon: <BsFileEarmarkCode /> },
        { name: "Time Management", icon: <BsFileEarmarkCode /> },
        { name: "Adaptability", icon: <BsFileEarmarkCode /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;