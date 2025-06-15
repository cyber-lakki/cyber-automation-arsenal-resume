import React from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    title: "VAPT Report Generator",
    description: "An automation suite that generates comprehensive quarterly overall and unique vulnerability reports from raw scan data.",
    result: "Reduced reporting time from 10 hours to just 30 minutes."
  },
  {
    title: "SOC Email Automation",
    description: "A smart script that segregates SOC emails based on predefined logic and automates distribution, drastically improving incident response time.",
    result: "Cut notable sending time from 3 hours to 5 minutes."
  },
  {
    title: "Public IP Scanner",
    description: "A custom-built ICMP & TCP packet-based scanner used to discover and validate reachable assets across the network infrastructure.",
    result: "Streamlined asset discovery for penetration tests."
  },
  {
    title: "Data Normalizer & Mapper",
    description: "A collection of scripts that clean, format, and map vulnerability data, enabling accurate quarter-over-quarter trend analysis.",
    result: "Ensured data integrity for security analytics."
  },
  {
    title: "IPv6 Notation Converter",
    description: "A utility to instantly transform full IPv6 notations into the correct shorthand as per RFC 5952 standards.",
    result: "Eliminated manual conversion errors and saved time."
  },
  {
    title: "Centralized GUI",
    description: "A full-fledged Python GUI-based application that automates report preparation, normalization, consolidation, and segregation of reports under one roof.",
    result: "Unified all automation tools into a single, efficient interface."
  }
];

const skills = {
  "Vulnerability Management": "Tenable.sc, Nessus, Acunetix, VAPT Lifecycle, Remediation Strategy.",
  "Penetration Testing": "Burp Suite, OWASP ZAP, Metasploit, Kali Linux, Web App & API Testing.",
  "Automation & Scripting": "Python, Bash, Regex, Excel VBA, Custom Tool Development.",
  "Security Analytics & BI": "Power BI, Data Visualization, QoQ Trend Analysis, Executive Reporting.",
  "Network & Endpoint Security": "Wireshark, NMAP, CrowdStrike, Cisco Meraki, Routing & Switching."
};

const experience = [
  {
    role: "Security Vulnerability Management Engineer",
    company: "Nokia",
    date: "Jan 2024 - Present",
    highlight: "Leading vulnerability assessments for Airtel's critical infrastructure and driving VAPT efficiency up by over 90% through automation."
  },
  {
    role: "Information Security Analyst",
    company: "Seamless Infotech",
    date: "Sep 2023 - Jan 2024",
    highlight: "Managed user access for 13 Max Healthcare hospitals and authored SOPs for CrowdStrike EDR deployment."
  },
  {
    role: "Cybersecurity Analyst",
    company: "Risk Bricks Solutions",
    date: "Jan 2021 - Oct 2023",
    highlight: "Delivered daily vulnerability assessments for NSE/BSE clients and conducted penetration tests for government agencies."
  }
];

const certifications = [
  "Certified Ethical Hacker (CEH)",
  "Certified AppSec Practitioner (CAP)",
  "Penetration Tester (Nokia)",
  "5G Fundamentals (Nokia)",
  "Penetration Testing (TCM Security)",
  "B.C.A from Subharti University"
];


const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        {/* Hero Section */}
        <Section id="home" className="pt-24 md:pt-32 lg:pt-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl !text-primary">
              Lakki Chauhan: Architecting Digital Defense
            </h1>
            <h2 className="mt-4 text-lg md:text-xl lg:text-2xl text-muted-foreground !text-white">
              Cybersecurity Specialist at Nokia, transforming security operations through intelligent automation.
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-muted-foreground">
              A results-driven Security Analyst with over 4.4 years of experience fortifying digital assets across the telecom, finance, and government sectors. I don't just identify threats—I build the tools to neutralize them efficiently.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,255,156,0.6)]">
                <a href="#projects">View My Work</a>
              </Button>
            </div>
            <div className="mt-8 flex justify-center items-center gap-6">
              <a href="mailto:officiallakki@gmail.com" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="font-mono">officiallakki@gmail.com</span>
              </a>
              <a href="tel:+919690290293" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-mono">+91 9690290293</span>
              </a>
            </div>
          </div>
        </Section>

        {/* My Automation Arsenal Section */}
        <Section id="projects">
          <SectionTitle>My Automation Arsenal</SectionTitle>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            I specialize in building custom scripts that eliminate manual tasks, enhance accuracy, and save hundreds of hours. Here are a few highlights.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card/50 border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="!text-primary">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <p className="text-secondary font-bold font-mono">
                    <span className="text-white">Key Result:</span> {project.result}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Core Competencies Section */}
        <Section id="skills">
          <SectionTitle>Core Competencies</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xl font-bold mb-3 !text-primary">{category}</h3>
                <p className="text-muted-foreground">{items}</p>
              </div>
            ))}
          </div>
        </Section>
        
        {/* Professional Experience Section */}
        <Section id="experience">
          <SectionTitle>My Journey</SectionTitle>
          <div className="relative max-w-3xl mx-auto pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border"></div>
            {experience.map((job, index) => (
              <div key={index} className="relative mb-12">
                <div className="absolute left-[-33px] top-1.5 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_theme(colors.primary)]"></div>
                <p className="text-sm text-muted-foreground">{job.date}</p>
                <h3 className="text-xl font-bold mt-1 !text-white">{job.role}</h3>
                <p className="text-lg text-primary">{job.company}</p>
                <p className="mt-2 text-muted-foreground">{job.highlight}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications Section */}
        <Section id="certifications">
          <SectionTitle>Certifications & Education</SectionTitle>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {certifications.map((cert, index) => (
              <div key={index} className="border border-border p-4 rounded-lg bg-card/50 backdrop-blur-sm">
                <p className="font-medium text-white">{cert}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact">
          <SectionTitle>Let's Connect</SectionTitle>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            I'm always open to discussing new opportunities, projects, or ideas in the cybersecurity space. Feel free to reach out.
          </p>
          <form className="max-w-xl mx-auto space-y-4">
            <Input type="text" placeholder="Name" className="bg-card/50 backdrop-blur-sm" />
            <Input type="email" placeholder="Email" className="bg-card/50 backdrop-blur-sm" />
            <Textarea placeholder="Message" className="bg-card/50 backdrop-blur-sm" />
            <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,255,156,0.6)]">
              Send Message <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </Section>
      </main>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Lakki Chauhan. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="mailto:officiallakki@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
