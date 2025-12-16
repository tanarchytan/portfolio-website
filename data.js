// Portfolio content data
const portfolioData = {
    asciiArt: {
        'Security Architect': `  ███████╗███████╗ ██████╗██╗   ██╗██████╗ ██╗████████╗██╗   ██╗
  ██╔════╝██╔════╝██╔════╝██║   ██║██╔══██╗██║╚══██╔══╝╚██╗ ██╔╝
  ███████╗█████╗  ██║     ██║   ██║██████╔╝██║   ██║    ╚████╔╝ 
  ╚════██║██╔══╝  ██║     ██║   ██║██╔══██╗██║   ██║     ╚██╔╝  
  ███████║███████╗╚██████╗╚██████╔╝██║  ██║██║   ██║      ██║   
  ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝   ╚═╝      ╚═╝   
                                                                  
   █████╗ ██████╗  ██████╗██╗  ██╗██╗████████╗███████╗ ██████╗████████╗
  ██╔══██╗██╔══██╗██╔════╝██║  ██║██║╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝
  ███████║██████╔╝██║     ███████║██║   ██║   █████╗  ██║        ██║   
  ██╔══██║██╔══██╗██║     ██╔══██║██║   ██║   ██╔══╝  ██║        ██║   
  ██║  ██║██║  ██║╚██████╗██║  ██║██║   ██║   ███████╗╚██████╗   ██║   
  ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝ ╚═════╝   ╚═╝   `,

        'Senior Engineer': `  ███████╗███████╗███╗   ██╗██╗ ██████╗ ██████╗ 
  ██╔════╝██╔════╝████╗  ██║██║██╔═══██╗██╔══██╗
  ███████╗█████╗  ██╔██╗ ██║██║██║   ██║██████╔╝
  ╚════██║██╔══╝  ██║╚██╗██║██║██║   ██║██╔══██╗
  ███████║███████╗██║ ╚████║██║╚██████╔╝██║  ██║
  ╚══════╝╚══════╝╚═╝  ╚═══╝╚═╝ ╚═════╝ ╚═╝  ╚═╝
                                                 
  ███████╗███╗   ██╗ ██████╗ ██╗███╗   ██╗███████╗███████╗██████╗ 
  ██╔════╝████╗  ██║██╔════╝ ██║████╗  ██║██╔════╝██╔════╝██╔══██╗
  █████╗  ██╔██╗ ██║██║  ███╗██║██╔██╗ ██║█████╗  █████╗  ██████╔╝
  ██╔══╝  ██║╚██╗██║██║   ██║██║██║╚██╗██║██╔══╝  ██╔══╝  ██╔══██╗
  ███████╗██║ ╚████║╚██████╔╝██║██║ ╚████║███████╗███████╗██║  ██║
  ╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝  ╚═╝`,

        'Ethical Hacker': `  ███████╗████████╗██╗  ██╗██╗ ██████╗ █████╗ ██╗     
  ██╔════╝╚══██╔══╝██║  ██║██║██╔════╝██╔══██╗██║     
  █████╗     ██║   ███████║██║██║     ███████║██║     
  ██╔══╝     ██║   ██╔══██║██║██║     ██╔══██║██║     
  ███████╗   ██║   ██║  ██║██║╚██████╗██║  ██║███████╗
  ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝
                                                       
  ██╗  ██╗ █████╗  ██████╗██╗  ██╗███████╗██████╗ 
  ██║  ██║██╔══██╗██╔════╝██║ ██╔╝██╔════╝██╔══██╗
  ███████║███████║██║     █████╔╝ █████╗  ██████╔╝
  ██╔══██║██╔══██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗
  ██║  ██║██║  ██║╚██████╗██║  ██╗███████╗██║  ██║
  ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝`,

        'Wannabe Electrical Engineer': `  ██╗    ██╗ █████╗ ███╗   ██╗███╗   ██╗ █████╗ ██████╗ ███████╗    ███████╗███╗   ██╗ ██████╗ ██╗███╗   ██╗███████╗███████╗██████╗ 
  ██║    ██║██╔══██╗████╗  ██║████╗  ██║██╔══██╗██╔══██╗██╔════╝    ██╔════╝████╗  ██║██╔════╝ ██║████╗  ██║██╔════╝██╔════╝██╔══██╗
  ██║ █╗ ██║███████║██╔██╗ ██║██╔██╗ ██║███████║██████╔╝█████╗      █████╗  ██╔██╗ ██║██║  ███╗██║██╔██╗ ██║█████╗  █████╗  ██████╔╝
  ██║███╗██║██╔══██║██║╚██╗██║██║╚██╗██║██╔══██║██╔══██╗██╔══╝      ██╔══╝  ██║╚██╗██║██║   ██║██║██║╚██╗██║██╔══╝  ██╔══╝  ██╔══██╗
  ╚███╔███╔╝██║  ██║██║ ╚████║██║ ╚████║██║  ██║██████╔╝███████╗    ███████╗██║ ╚████║╚██████╔╝██║██║ ╚████║███████╗███████╗██║  ██║
   ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═════╝ ╚══════╝    ╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝  ╚═╝
                                                                                                                                         
  ███████╗██╗     ███████╗ ██████╗████████╗██████╗ ██╗ ██████╗ █████╗ ██╗     
  ██╔════╝██║     ██╔════╝██╔════╝╚══██╔══╝██╔══██╗██║██╔════╝██╔══██╗██║     
  █████╗  ██║     █████╗  ██║        ██║   ██████╔╝██║██║     ███████║██║     
  ██╔══╝  ██║     ██╔══╝  ██║        ██║   ██╔══██╗██║██║     ██╔══██║██║     
  ███████╗███████╗███████╗╚██████╗   ██║   ██║  ██║██║╚██████╗██║  ██║███████╗
  ╚══════╝╚══════╝╚══════╝ ╚═════╝   ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝`
    },

    whoami: {
        name: "DAVID GILLOT",
        titles: [
            "Security Architect",
            "Senior Engineer", 
            "Ethical Hacker",
            "Wannabe Electrical Engineer"
        ],
        subtitle: "Security Architect | Purple Team | IT/OT Security Specialist | CISSP",
        tagline: "Pragmatic technical architect bridging offensive validation and defensive hardening"
    },
    
    certifications: {
        title: "// CERTIFICATIONS",
        content: `
            <div>
                <span class="cert-badge">[✓] CISSP</span>
                <span class="cert-badge">[✓] BSc Cyber Security</span>
                <span class="cert-badge">[✓] INE eCPPT</span>
                <span class="cert-badge">[✓] INE eJPT</span>
                <span class="cert-badge">[✓] Cisco CCNA</span>
                <span class="cert-badge">[✓] Microsoft MS-100</span>
                <span class="cert-badge">[✓] CompTIA A+</span>
            </div>
            <p class="output" style="margin-top: 15px;">
                <span class="prompt">></span> Currently pursuing: PNPT, OSCP
            </p>
        `
    },
    
    experience: {
        title: "// CAREER TIMELINE",
        content: `
            <div class="timeline-item">
                <div class="timeline-date">[2025-11 → PRESENT]</div>
                <div class="timeline-role">Security Architect</div>
                <div class="timeline-company">Logius (via Watchmen)</div>
                <p class="output">DDoS protection architecture • Application-level optimization planning • Anti-DDoS infrastructure roadmap</p>
            </div>

            <div class="timeline-item">
                <div class="timeline-date">[2025-10 → PRESENT]</div>
                <div class="timeline-role">Senior Engineer</div>
                <div class="timeline-company">Watchmen - The Zero Trust Collective</div>
                <p class="output">Zero Trust architecture • Purple Team operations • Enterprise security consulting</p>
            </div>

            <div class="timeline-item">
                <div class="timeline-date">[2023-02 → 2025-10]</div>
                <div class="timeline-role">Cybersecurity Consultant</div>
                <div class="timeline-company">ACA-IT Solutions</div>
                <p class="output">CIS Controls V3 implementation • Active Directory hardening • IT/OT segmentation • Network security design</p>
            </div>

            <div class="timeline-item">
                <div class="timeline-date">[2022-10 → 2023-02]</div>
                <div class="timeline-role">Security Specialist</div>
                <div class="timeline-company">Eshgro</div>
                <p class="output">Security portfolio redesign • SOC/SIEM strategy • HPE, Cisco, Fortigate, NetApp environments</p>
            </div>

            <div class="timeline-item">
                <div class="timeline-date">[2022-02 → 2022-10]</div>
                <div class="timeline-role">Connectivity & Security Consultant</div>
                <div class="timeline-company">Eshgro</div>
                <p class="output">Datacenter redesigns • Security policy advisory • IT/OT integration • Team lead Connectivity</p>
            </div>

            <div class="timeline-item">
                <div class="timeline-date">[2020-10 → 2022-01]</div>
                <div class="timeline-role">Senior Project Engineer</div>
                <div class="timeline-company">e-Quest Projecten B.V.</div>
                <p class="output">Large-scale migrations • Ransomware incident response • IT/OT segmentation • Team lead</p>
            </div>

            <div class="timeline-item">
                <div class="timeline-date">[2019-01 → 2020-10]</div>
                <div class="timeline-role">Senior Technical Specialist / IT Engineer</div>
                <div class="timeline-company">e-Quest Projecten B.V.</div>
                <p class="output">Network implementations • Cisco Firepower, Catalyst, Meraki • Hyperconvergence • OT/IT segmentation</p>
            </div>

            <div class="timeline-item">
                <div class="timeline-date">[2014-01 → 2018-12]</div>
                <div class="timeline-role">Senior Technical Engineer</div>
                <div class="timeline-company">Cube IT B.V.</div>
                <p class="output">SMB network design & management • Domain architecture • Break-fix solutions</p>
            </div>

            <div class="timeline-item">
                <div class="timeline-date">[2009-07 → 2013-12]</div>
                <div class="timeline-role">Network Administrator</div>
                <div class="timeline-company">Cube IT B.V.</div>
                <p class="output">PC/laptop repair • Network installations • Hardware diagnostics</p>
            </div>
        `
    },
    
    projects: {
        title: "// PROJECT HIGHLIGHTS",
        content: `
            <div class="project-card">
                <div class="project-title"><span class="prompt">[INCIDENT-RESPONSE]</span> Ransomware Recovery Operations</div>
                <ul class="project-list">
                    <li>Team lead for multidisciplinary ransomware restore team (collaboration with Fox-IT)</li>
                    <li>Forensic analysis and breach investigation with NCC Group</li>
                    <li>On-site incident response and technical leadership during active attacks</li>
                    <li>Emergency recovery procedures and "wash machine" implementations</li>
                </ul>
                <div>
                    <span class="tag">Incident Response</span>
                    <span class="tag">Forensics</span>
                    <span class="tag">Team Leadership</span>
                </div>
            </div>

            <div class="project-card">
                <div class="project-title"><span class="prompt">[IT/OT-SECURITY]</span> Industrial Network Segmentation</div>
                <ul class="project-list">
                    <li>IT/OT segmentation for petroleum and chemical industries</li>
                    <li>SCADA security implementations with Nozomi and ThousandEyes</li>
                    <li>OT security hardening for manufacturing environments</li>
                    <li>Vulnerability management for operational technology</li>
                </ul>
                <div>
                    <span class="tag">IT/OT</span>
                    <span class="tag">SCADA</span>
                    <span class="tag">Nozomi</span>
                    <span class="tag">Siemens PLC</span>
                </div>
            </div>

            <div class="project-card">
                <div class="project-title"><span class="prompt">[ACTIVE-DIRECTORY]</span> Enterprise Hardening Projects</div>
                <ul class="project-list">
                    <li>Active Directory hardening using PingCastle assessments</li>
                    <li>ANSSI level 1 compliance implementation</li>
                    <li>PKI environment redesigns</li>
                    <li>Attack vector remediation and security posture improvements</li>
                </ul>
                <div>
                    <span class="tag">Active Directory</span>
                    <span class="tag">PingCastle</span>
                    <span class="tag">ANSSI</span>
                    <span class="tag">PKI</span>
                </div>
            </div>

            <div class="project-card">
                <div class="project-title"><span class="prompt">[SOC/SIEM]</span> Security Operations Center Setup</div>
                <ul class="project-list">
                    <li>Multi-company SOC establishment and team formation</li>
                    <li>SIEM implementations (Microsoft Defender, Azure Sentinel)</li>
                    <li>SOC, SIEM, SOAR solution deployment for IT and OT environments</li>
                    <li>Security Awareness training programs</li>
                </ul>
                <div>
                    <span class="tag">SOC</span>
                    <span class="tag">SIEM</span>
                    <span class="tag">Microsoft Defender</span>
                    <span class="tag">Azure Sentinel</span>
                </div>
            </div>

            <div class="project-card">
                <div class="project-title"><span class="prompt">[CLOUD-MIGRATION]</span> Azure & Hybrid Infrastructure</div>
                <ul class="project-list">
                    <li>Large-scale cloud migrations to Microsoft Azure</li>
                    <li>Azure security segmentation and DLP implementation (Microsoft Purview)</li>
                    <li>Hybrid network implementations between cloud and on-premise</li>
                    <li>Multi-cloud security monitoring across AWS, Azure, and GCP</li>
                </ul>
                <div>
                    <span class="tag">Azure</span>
                    <span class="tag">AWS</span>
                    <span class="tag">Hybrid Cloud</span>
                    <span class="tag">DLP</span>
                </div>
            </div>

            <div class="project-card">
                <div class="project-title"><span class="prompt">[NETWORK-REDESIGN]</span> Enterprise Network Architecture</div>
                <ul class="project-list">
                    <li>Datacenter redesigns to Spine-Leaf topology</li>
                    <li>MPLS to SD-WAN migrations for healthcare and logistics</li>
                    <li>International network rollouts (25+ countries)</li>
                    <li>Network segmentation with security-by-design principles</li>
                </ul>
                <div>
                    <span class="tag">Cisco</span>
                    <span class="tag">Fortinet</span>
                    <span class="tag">SD-WAN</span>
                    <span class="tag">Network Design</span>
                </div>
            </div>

            <div class="project-card">
                <div class="project-title"><span class="prompt">[COMPLIANCE]</span> ISO 27001/27002 & Risk Assessments</div>
                <ul class="project-list">
                    <li>Technical and pragmatic approach to ISO27001/ISO27002 GAP analysis</li>
                    <li>Internal security assessments and risk analysis</li>
                    <li>BIO compliance advisory for government organizations</li>
                    <li>Monthly vulnerability assessments and remediation</li>
                </ul>
                <div>
                    <span class="tag">ISO 27001</span>
                    <span class="tag">Risk Assessment</span>
                    <span class="tag">Compliance</span>
                </div>
            </div>
        `
    },
    
    skills: {
        title: "// TECHNICAL ARSENAL",
        content: `
            <div class="skill-grid">
                <div class="skill-item">
                    <div><span class="prompt">[+]</span> <strong>Security Architecture</strong></div>
                    <div class="output">IT/OT Segmentation | Active Directory Hardening | Zero Trust</div>
                </div>
                <div class="skill-item">
                    <div><span class="prompt">[+]</span> <strong>Network Security</strong></div>
                    <div class="output">Cisco ASA | Firepower | Fortinet | Meraki | SD-WAN</div>
                </div>
                <div class="skill-item">
                    <div><span class="prompt">[+]</span> <strong>OT Security</strong></div>
                    <div class="output">SCADA | Siemens PLC | Nozomi | Rockwell | ThousandEyes</div>
                </div>
                <div class="skill-item">
                    <div><span class="prompt">[+]</span> <strong>SOC/SIEM</strong></div>
                    <div class="output">Microsoft Defender | Azure Sentinel | SOAR | Threat Hunting</div>
                </div>
                <div class="skill-item">
                    <div><span class="prompt">[+]</span> <strong>Cloud Security</strong></div>
                    <div class="output">Azure | AWS | Hybrid Cloud | Microsoft Purview</div>
                </div>
                <div class="skill-item">
                    <div><span class="prompt">[+]</span> <strong>Scripting</strong></div>
                    <div class="output">PowerShell | Python | Bash | Automation | CI/CD</div>
                </div>
                <div class="skill-item">
                    <div><span class="prompt">[+]</span> <strong>Infrastructure</strong></div>
                    <div class="output">VMware | Cisco UCS | HPE | Dell EMC | NetApp</div>
                </div>
                <div class="skill-item">
                    <div><span class="prompt">[+]</span> <strong>Incident Response</strong></div>
                    <div class="output">Forensics | Ransomware Recovery | Team Leadership</div>
                </div>
                <div class="skill-item">
                    <div><span class="prompt">[+]</span> <strong>Compliance</strong></div>
                    <div class="output">ISO 27001/27002 | CIS Controls | BIO | ANSSI</div>
                </div>
                <div class="skill-item">
                    <div><span class="prompt">[+]</span> <strong>Security Tools</strong></div>
                    <div class="output">PingCastle | Metasploit | Burp Suite | Nmap</div>
                </div>
            </div>
        `
    },
    
    contact: {
        title: "// ESTABLISH CONNECTION",
        content: `
            <p class="output">Ready to discuss cybersecurity projects or potential collaboration?</p>
            <div class="contact-links">
                <a href="mailto:admin@tanarchy.org" class="contact-link">
                    <span class="prompt">[EMAIL]</span> admin@tanarchy.org
                </a>
                <a href="https://linkedin.com/in/dkvgillot" target="_blank" class="contact-link">
                    <span class="prompt">[LINKEDIN]</span> /in/dkvgillot
                </a>
            </div>
        `
    }
};