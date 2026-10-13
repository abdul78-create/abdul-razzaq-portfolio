import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch

def generate_resume(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )
    
    styles = getSampleStyleSheet()
    
    # Custom styles
    primary_color = colors.HexColor("#1D4ED8")
    dark_color = colors.HexColor("#111827")
    gray_color = colors.HexColor("#4B5563")
    light_blue = colors.HexColor("#EFF6FF")
    
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=primary_color,
        alignment=0,
        spaceAfter=2
    )
    
    headline_style = ParagraphStyle(
        'Headline',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14,
        textColor=dark_color,
        spaceAfter=3
    )
    
    contact_style = ParagraphStyle(
        'Contact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=gray_color,
        spaceAfter=8
    )
    
    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=15,
        textColor=primary_color,
        spaceBefore=6,
        spaceAfter=3
    )
    
    item_title = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=dark_color
    )
    
    item_sub = ParagraphStyle(
        'ItemSub',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=12,
        textColor=gray_color
    )
    
    item_right = ParagraphStyle(
        'ItemRight',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=gray_color,
        alignment=2
    )
    
    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=dark_color
    )
    
    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=dark_color,
        leftIndent=12,
        spaceAfter=2
    )

    story = []
    
    # Header
    story.append(Paragraph("ABDUL RAZZAQ", title_style))
    story.append(Paragraph("B.Tech Computer Science & Engineering | Full-Stack Developer | AI & DevOps Enthusiast", headline_style))
    contact_text = "Phagwara, Punjab, India &nbsp;|&nbsp; <b>Email:</b> abdulrazzaq080806@gmail.com &nbsp;|&nbsp; <b>GitHub:</b> github.com/abdul78-create &nbsp;|&nbsp; <b>LinkedIn:</b> linkedin.com/in/abdulrazzaq78"
    story.append(Paragraph(contact_text, contact_style))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#CBD5E1"), spaceAfter=6))
    
    # Education
    story.append(Paragraph("EDUCATION", section_heading))
    edu_data = [
        [
            Paragraph("<b>Lovely Professional University</b> — B.Tech in Computer Science and Engineering", item_title),
            Paragraph("June 2024 – June 2028 | <b>CGPA: 6.3</b>", item_right)
        ],
        [
            Paragraph("<b>STAR Junior College</b> — Intermediate (Class XII)", item_title),
            Paragraph("July 2022 – April 2024 | <b>82.0%</b>", item_right)
        ],
        [
            Paragraph("<b>Narayana e-Techno School</b> — Secondary School Certificate (Class X)", item_title),
            Paragraph("April 2021 – May 2022 | <b>89.0%</b>", item_right)
        ]
    ]
    t_edu = Table(edu_data, colWidths=[380, 160])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_edu)
    story.append(Spacer(1, 4))
    
    # Technical Skills
    story.append(Paragraph("TECHNICAL SKILLS", section_heading))
    skills_data = [
        [Paragraph("<b>Programming Languages:</b>", item_title), Paragraph("Python, C, SQL", body_style)],
        [Paragraph("<b>Web Technologies:</b>", item_title), Paragraph("HTML5, CSS3, JavaScript, React.js, Next.js, Node.js, NestJS", body_style)],
        [Paragraph("<b>Databases & ORM:</b>", item_title), Paragraph("PostgreSQL, MongoDB, Supabase, Prisma ORM, Redis", body_style)],
        [Paragraph("<b>Cloud & DevOps:</b>", item_title), Paragraph("AWS (EC2, S3, RDS, VPC, ALB, CloudWatch), Docker, Prometheus, Grafana, GitHub Actions", body_style)],
        [Paragraph("<b>Developer Tools:</b>", item_title), Paragraph("Git, GitHub, VS Code, Postman, Render, Antigravity IDE", body_style)],
        [Paragraph("<b>Core CS Fundamentals:</b>", item_title), Paragraph("Object-Oriented Programming (OOP), DBMS, Computer Networks, Operating Systems, DSA", body_style)],
        [Paragraph("<b>Professional Strengths:</b>", item_title), Paragraph("Problem-solving, Team Collaboration, Adaptability, Technical Documentation, Attention to Detail", body_style)],
    ]
    t_skills = Table(skills_data, colWidths=[140, 400])
    t_skills.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_skills)
    story.append(Spacer(1, 4))
    
    # Projects
    story.append(Paragraph("FEATURED PROJECTS", section_heading))
    
    # OpsPilot
    story.append(Table([
        [Paragraph("<b>OpsPilot</b> | Autonomous AI DevOps & CI/CD Platform", item_title), Paragraph("Next.js, NestJS, Docker, Redis, Postgres", item_right)]
    ], colWidths=[380, 160], style=[('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 1), ('BOTTOMPADDING', (0,0), (-1,-1), 1)]))
    story.append(Paragraph("• Engineered an autonomous DevOps platform with visual DAG pipeline builder, compiling graphs to YAML with cycle detection (Kahn's algorithm).", bullet_style))
    story.append(Paragraph("• Implemented isolated Docker worker execution, HMAC-SHA256 webhook verification with Redis idempotency, and AES-256-GCM secret encryption.", bullet_style))
    story.append(Paragraph("• Delivered real-time job log streaming via Server-Sent Events (SSE) and Prometheus telemetry; verified with 160/160 passing test suites.", bullet_style))
    story.append(Spacer(1, 3))
    
    # ViralVerse
    story.append(Table([
        [Paragraph("<b>ViralVerse</b> | High-Availability Cloud Infrastructure", item_title), Paragraph("AWS EC2, ALB, RDS, S3, CloudWatch", item_right)]
    ], colWidths=[380, 160], style=[('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 1), ('BOTTOMPADDING', (0,0), (-1,-1), 1)]))
    story.append(Paragraph("• Architected a multi-AZ AWS cloud infrastructure designed to handle sudden viral traffic spikes with zero single points of failure.", bullet_style))
    story.append(Paragraph("• Deployed Application Load Balancer with health-check routing fronting an Auto Scaling Group of EC2 instances with least-privilege IAM roles.", bullet_style))
    story.append(Paragraph("• Configured Amazon RDS MySQL multi-AZ failover, Amazon S3 media asset storage, and automated CloudWatch alarms for operational visibility.", bullet_style))
    story.append(Spacer(1, 3))

    # StockFlow
    story.append(Table([
        [Paragraph("<b>StockFlow</b> | Containerized Inventory Platform & CI/CD", item_title), Paragraph("React, Node.js, Prisma, Docker, GitHub Actions", item_right)]
    ], colWidths=[380, 160], style=[('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 1), ('BOTTOMPADDING', (0,0), (-1,-1), 1)]))
    story.append(Paragraph("• Built full-stack inventory platform featuring real-time stock alerts and full CRUD operations with Prisma ORM and PostgreSQL.", bullet_style))
    story.append(Paragraph("• Containerized all microservices with Docker Compose for local reproducibility and created an automated GitHub Actions CI/CD pipeline.", bullet_style))
    story.append(Spacer(1, 4))

    # Training & Certifications
    story.append(Paragraph("TRAINING & CERTIFICATIONS", section_heading))
    cert_data = [
        [Paragraph("• <b>DevOps Fundamentals: Building Skills from Code to Deployment</b> (Associated with StockFlow project)", body_style), Paragraph("June – July 2026", item_right)],
        [Paragraph("• <b>Oracle Certified Foundations Associate – Agentic AI</b> (Oracle)", body_style), Paragraph("September 2026", item_right)],
        [Paragraph("• <b>Oracle AI Database Certified Foundations Associate</b> (Oracle)", body_style), Paragraph("September 2026", item_right)],
        [Paragraph("• <b>Computer Programming – 72 Hours</b> (iamneo)", body_style), Paragraph("May 2024", item_right)],
    ]
    t_cert = Table(cert_data, colWidths=[420, 120])
    t_cert.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1.5),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_cert)
    story.append(Spacer(1, 4))
    
    # Achievements
    story.append(Paragraph("HONORS & ACHIEVEMENTS", section_heading))
    ach_data = [
        [Paragraph("• <b>Ranked 181st — Apti-SPHERE:</b> Ranked 181st among 4,000+ national participants in aptitude competition.", body_style), Paragraph("August 2026", item_right)],
        [Paragraph("• <b>Selected — Bharatiya Antariksh Hackathon 2025:</b> ISRO × Hack2skill national hackathon (Team BhuAgni).", body_style), Paragraph("August 2025", item_right)],
        [Paragraph("• <b>Top 10 Finalist — HackTheBlock × LPU Hackathon:</b> Placed in top 10 for building innovative Web3 solution.", body_style), Paragraph("March 2024", item_right)],
    ]
    t_ach = Table(ach_data, colWidths=[440, 100])
    t_ach.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1.5),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_ach)

    doc.build(story)
    print(f"Resume generated at: {output_path}")

if __name__ == "__main__":
    out = os.path.abspath("public/Abdul_Razzaq_Resume.pdf")
    generate_resume(out)
