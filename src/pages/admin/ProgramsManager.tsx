import { useState } from "react";
import { Pencil, Eye, BarChart3 } from "lucide-react";
import { programs } from "@/data/programs";

const ProgramsManager = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-xl font-bold text-foreground">Programs Management</h1>
        <p className="font-body text-sm text-muted-foreground">Manage your {programs.length} programs</p>
      </div>

      <div className="grid gap-4">
        {programs.map((program) => (
          <div key={program.slug} className="bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <img src={program.heroImage} alt={program.title} className="w-full sm:w-24 h-20 sm:h-16 object-cover rounded-lg" />
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-sm font-semibold text-foreground">{program.title}</h3>
              <p className="font-body text-xs text-muted-foreground line-clamp-1 mt-0.5">{program.description}</p>
              <div className="flex items-center gap-3 mt-2">
                {program.stats.map((stat) => (
                  <span key={stat.label} className="font-body text-[10px] text-muted-foreground">
                    <span className="font-semibold text-foreground">{stat.number}</span> {stat.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors" title="Edit">
                <Pencil className="w-4 h-4" />
              </button>
              <a href={`/programs/${program.slug}`} target="_blank" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors" title="View">
                <Eye className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsManager;
