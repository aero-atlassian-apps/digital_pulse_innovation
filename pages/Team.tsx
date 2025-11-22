import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';

const Team: React.FC = () => {
  const { t } = useTranslation();

  // Using high quality image assets as placeholders for the team
  const team = [
    { name: "Alex Chen", role: "Founder & CEO", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu2DMgtzjjMV5I-6NsYxZzFHFdCA_kqXwxDFZE_muzXZhAVh9ZaJ9vrI2G7mGOrkEMZ_QJK-Q7ZJ0_ZpeC_8AZYDi9EMw48ey7nmIRMfU7uK4DwvtCfUuL7ia8nxO4CkQFq1Rz1yQCbOUNR3iYbT6G3RGcKc3YpMVAkDlbc2n1cOHrVfVyGe38It4OIKfr4V3Q9FiNqwxS505smpYIvf5fLTNmSsJoNUWJPXnhFIhZlXD46tamGBIOUvWYJeh3OmSvq8oilKc1SXk", tags: ["Digital Transformation"] },
    { name: "Brenda Smith", role: "Lead Agile Coach", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHQczwXHdZtnmPdjHNpca96yEvTUTq2PAkdZDQmxAx0DB9XTHDOwh3XYWV0y29554rasbtncO_kRDr9FuYwtYvDWjZtKaSZ1K1zoBGbkAV20WcV6bbwdQwsEBGWvbHQxbz3LgcaNh1FUDEUHq_l18L0Kr55Hc4z5c7AHZ71bCuIJzsR-a3Wa_hXFRrizusMTDgMX7BjE5CHXqpfAirgZJN_bz2woBgikP4bN-IGNTsZVtmXZXHU819JtA1-lebBmhEzB7x215AhkY", tags: ["Agile", "Innovation"] },
    { name: "Charles Miller", role: "Principal Software Craftsman", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIRNgBNWDNK1KfxhtrtFDwFKZiuHiS299zmL6UKhB8Q3UsbTrmeKgzHXHQhBVyWu-sIKD_oZfhulFqiDDbTEu-FMpMxbfvdrRN1bSHKj1W9eH1ertK6oM7XK2d2OkUblQH-jzcUGvjA0_vB8KddC6mRXZ5G6KFfc8Oah37GfRtOzAYVRIq_Ap0s9ZiCo3t_jXHYfDz6zDVBaU9eB0WYEYITREcH6_n8qflzOXRJTs4o1FD9QbxsRodnkBO4GTlAGKCnDpDW0_ectE", tags: ["Software Craftsmanship"] },
    { name: "Diana Ross", role: "Innovation Strategist", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfFKcwfLTrINQRj-zcqmeDuM1nGCSJ1vaXd1WrjFwms9ji7Im7tSUtJ4s9bLbz-XlYMcqlxUh_D-3z5UFub8jan7VFvVbDHmd4x5IHDaYFnBLwbHzEkda9a-v84agCfrIzbaoysTWbPfatJFWfLwFAurqYe6TqJMxke0rx3kan5FYxPxSxQCbE2WSmDiwQgfxfgDl6RQiDTPj6VCodhSUvQ26cBJSipv_XYphDK-7HCby3Zg2Bc4_uBhyFwKz6ca1n6HA1o991ZGs", tags: ["Innovation", "Strategy"] },
    { name: "Edward King", role: "Lead Vibe Coder", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABnohoFQ2DPAeTCenwvlJN9iM5gdbFSYXLupOLwPL67cHzHXiD7oALPS7-jz1O9Dij3pWW_fvYrTk2WTy1nnlWZwVU_oOWhUmRVlZpqobk_i4ygc_L4vP1Zf3hUTUh0FBWUbmDuJL5nYeVZ-d5gQC3gglXLCo3zsSo3Q5DE9CC4z1IidJn8G6dyViT8PBbs3YapYka9QYJQFZK8d5VeQDEbcy-RN9glu_WqfxEtIiRIaxR_xYSVmd-PPuSSIqDLNG7baLzLIJ-DJ4", tags: ["Vibe Coding"] },
    { name: "Fiona Clark", role: "Digital Transformation Consultant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5AzCSsPQY-WNZE2OU7HG7crZvMZQ68tSEvVyWH6QyJG6pc5k7ZExXkS35U7AgDQtwQKrWXCNcMqj0nCdtMg32pbblkvY7gb6BLxp7t0hSEetpZfCIyWPDc1iRLnRGO1ebzmEfttKWQHq2hzuA3BXduJKDTdL6dcn38AIYUGpBr88TwFbjTSit4ZaG69rPqkvROMqMS616yIpiJOkdcYJlNq5po12NIVlumnonlxbyfy5KD25nW_396_X14LndOjwUEne2ygd8fFU", tags: ["Transformation"] }
  ];

  return (
    <>
      <SEO 
        title={t('nav.team')}
        description="Meet the experts driving your transformation at Digital Pulse Innovation."
      />
      <div className="py-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-display font-black text-primary mb-4">The Experts Driving Your Transformation</h1>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    We are a dedicated team of experts, united by a passion for driving digital transformation. We foster a culture of innovation and excellence to deliver unparalleled results for our clients.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((member, i) => (
                    <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100">
                        <div className="h-96 overflow-hidden relative">
                            <OptimizedImage 
                              src={member.img} 
                              alt={member.name} 
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                              width={400}
                              height={600}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="font-bold text-lg">{member.role}</p>
                                    <p className="text-sm text-slate-200 mt-1">Passionate about delivering excellence.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 text-center relative bg-white z-10">
                            <h3 className="text-2xl font-bold text-primary mb-1">{member.name}</h3>
                            <p className="text-secondary font-medium mb-4">{member.role}</p>
                            <div className="flex flex-wrap justify-center gap-2 mt-4">
                                {member.tags.map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </>
  );
};

export default Team;