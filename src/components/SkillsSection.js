import React from 'react';
import './SkillSection.css';

const SkillsSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 mt-5 md:p-0 __web-inspector-hide-shortcut__">
      <div className="col-span-2 p-6 md:col-span-2 lg:col-span-3">
        <h1 className="text-2xl font-medium mt-2 text-white mb-5">What I know</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Frontend */}
          <div class="flex-1 flex flex-col gap-8 bg-[#1c1b23] p-4 rounded-md shadow-lg">
  <div class="text-zinc-400 font-medium text-2xl tracking-wider">Frontend</div>
  <div class="flex flex-wrap gap-2">
    <div class="rounded-md bg-[#14131a] text-xs text-zinc-400 p-2">HTML</div>
    <div class="rounded-md bg-[#14131a] text-xs text-zinc-400 p-2">CSS</div>
    <div class="rounded-md bg-[#14131a] text-xs text-zinc-400 p-2 border border-blue-500/60">Tailwind</div>
    <div class="rounded-md bg-[#14131a] text-xs text-zinc-400 p-2 border border-yellow-500/60">Javascript</div>
    <div class="rounded-md bg-[#14131a] text-xs text-zinc-400 p-2">Typescript</div>
    <div class="rounded-md bg-[#14131a] text-xs text-zinc-400 p-2 border border-blue-500/60">React Js</div>
    <div class="rounded-md bg-[#14131a] text-xs text-zinc-400 p-2 border border-black/60">Angular</div>
  </div>
</div>
          
          {/* Backend */}
          <div class="flex-1 flex flex-col gap-8 bg-[#1c1b23] p-4 rounded-md shadow-lg">
  <div class="text-zinc-400 font-medium text-2xl tracking-wider">Backend</div>
  <div class="flex flex-wrap gap-2">
    <div class="rounded-md bg-[#14131a] text-xs text-zinc-400 p-2">Flask</div>
    <div class="rounded-md bg-[#14131a] text-xs text-zinc-400 p-2 border border-green-500/60">Node Js</div>
    <div class="rounded-md bg-[#14131a] text-xs text-zinc-400 p-2 border border-yellow-500/60">Express Js</div>
  </div>
</div>

          {/* Database */}
          <div class="flex-1 flex flex-col gap-8 bg-[#1c1b23] p-4 rounded-md shadow-lg">
  <div class="text-zinc-400 font-medium text-2xl tracking-wider">Database</div>
  <div class="flex flex-wrap gap-2">
    <div class="rounded-md bg-[#14131a] text-xs text-zinc-400 p-2 border border-blue-500/60">MySql</div>
    <div class="rounded-md bg-[#14131a] text-xs text-zinc-400 p-2 border border-green-500/60">MongoDB</div>
    <div class="rounded-md bg-[#14131a] text-xs text-zinc-400 p-2 border border-blue-500/60">PostgreSQL</div>
  </div>
</div>

          {/* Devops */}
          <div class="flex-1 flex flex-col gap-8 bg-[#1c1b23] p-4 rounded-md shadow-lg">
  <div class="text-zinc-400 font-medium text-2xl tracking-wider">Devops</div>
  <div class="flex flex-wrap gap-2">
    <div class="rounded-md bg-[#14131a] text-xs text-zinc-400 p-2 border border-orange-500/60">GIT</div>
    <div class="rounded-md bg-[#14131a] text-xs text-zinc-400 p-2 border border-yellow-500/60">AWS</div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;