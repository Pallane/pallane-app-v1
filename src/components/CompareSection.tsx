import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Sparkles } from 'lucide-react';

export default function CompareSection() {
  return (
    <section className="bg-[#0B3251] py-16">
      <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
        <div className="bg-[#87BBBA] rounded-3xl p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0B3251]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
          
          {/* Content */}
          <div className="relative">
            <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-8 rounded-2xl bg-[#0B3251]/10">
                <BarChart3 className="w-8 h-8 text-[#0B3251]" />
              </div>

              <h2 className="text-4xl font-bold text-[#0B3251] mb-6">
                Trouvez la solution parfaite pour votre entreprise
              </h2>
              
              <p className="text-[#0B3251]/80 text-lg mb-12 max-w-2xl">
                Comparez nos différentes solutions et trouvez celle qui correspond le mieux à vos besoins. 
                Notre outil de comparaison vous permet d'analyser en détail les fonctionnalités, les prix et les avantages de chaque solution.
              </p>

              <Link 
                to="/compare"
                className="inline-flex items-center gap-3 bg-[#0B3251] text-white px-8 py-4 rounded-2xl hover:bg-[#0B3251]/90 transition-all transform hover:scale-105 group"
              >
                <span className="font-medium">Comparer les solutions</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Decorative icons */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
              <Sparkles className="w-12 h-12 text-[#0B3251]/20" />
            </div>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
              <Sparkles className="w-12 h-12 text-[#0B3251]/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}