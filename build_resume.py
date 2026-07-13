"""Builds VamshiKrishna-resume.pdf in the style of the original LaTeX resume."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_RIGHT, TA_JUSTIFY
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    Image,
    HRFlowable,
)

OUT = "VamshiKrishna-resume.pdf"

PAGE_W, PAGE_H = A4
MARGIN = 0.5 * inch
CONTENT_W = PAGE_W - 2 * MARGIN

# ---------------------------------------------------------------- styles
base = dict(fontName="Times-Roman", fontSize=10, leading=11.8, textColor=colors.black)

s_name = ParagraphStyle("name", fontName="Times-Bold", fontSize=17, leading=20)
s_contact = ParagraphStyle("contact", fontName="Times-Bold", fontSize=10.5, leading=14)
s_links = ParagraphStyle("links", fontName="Times-Bold", fontSize=10.5, leading=14)
s_body = ParagraphStyle("body", **base, alignment=TA_JUSTIFY)
s_line = ParagraphStyle("line", **base)
s_school = ParagraphStyle("school", fontName="Times-Bold", fontSize=10.5, leading=12.5)
s_degree = ParagraphStyle("degree", fontName="Times-Italic", fontSize=9.5, leading=11.5)
s_right = ParagraphStyle("right", fontName="Times-Roman", fontSize=10, leading=12.5, alignment=TA_RIGHT)
s_right_i = ParagraphStyle("right_i", fontName="Times-Italic", fontSize=9.5, leading=11.5, alignment=TA_RIGHT)
s_bullet = ParagraphStyle(
    "bullet", **base, leftIndent=14, bulletIndent=4, spaceAfter=1
)


def smallcaps(text, big=11.5, small=9):
    """Emulate LaTeX small-caps section headings."""
    out = []
    for word in text.split(" "):
        if not word:
            continue
        first, rest = word[0], word[1:]
        out.append(
            f'<font size="{big}">{first.upper()}</font>'
            f'<font size="{small}">{rest.upper()}</font>'
        )
    return " ".join(out)


s_section = ParagraphStyle(
    "section", fontName="Times-Bold", fontSize=11.5, leading=14, spaceBefore=0
)


def section(title):
    return [
        Spacer(1, 6),
        Paragraph(smallcaps(title), s_section),
        HRFlowable(width="100%", thickness=0.7, color=colors.black, spaceBefore=2, spaceAfter=4),
    ]


story = []

# ---------------------------------------------------------------- header
links = (
    '<a href="https://www.linkedin.com/in/vamshi-krishna-emmadi/">LinkedIn</a>'
    " | "
    '<a href="https://github.com/heyvamshii">GitHub</a>'
    " | "
    '<a href="https://heyvamshii.vercel.app">Portfolio</a>'
)

left_cell = [
    Paragraph("VAMSHI KRISHNA EMMADI", s_name),
    Spacer(1, 3),
    Paragraph("vamshikris25@gmail.com | +91 8688086325", s_contact),
    Spacer(1, 2),
    Paragraph(links, s_links),
]

photo = Image("photo_0.jpg", width=0.9 * inch, height=0.9 * inch)

header = Table(
    [[left_cell, photo]],
    colWidths=[CONTENT_W - 1.0 * inch, 1.0 * inch],
)
header.setStyle(
    TableStyle(
        [
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("ALIGN", (1, 0), (1, 0), "RIGHT"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ]
    )
)
story.append(header)

# ---------------------------------------------------------------- summary
story += section("Summary")
story.append(
    Paragraph(
        "Recent B.Tech graduate in Computer Science (AI/ML) with hands-on experience "
        "shipping real products &ndash; a live full-stack Django food-delivery platform with "
        "Real OTP verification, payments and GPS tracking, an agentic voice AI assistant, "
        "and deep-learning models for medical imaging. Seeking a Python/AI developer role "
        "where I can apply strong fundamentals and AI-Agentic workflows to build scalable, "
        "real-world applications.",
        s_body,
    )
)

# ---------------------------------------------------------------- education
story += section("Education")


def edu(school, degree, date, score):
    t = Table(
        [
            [Paragraph(school, s_school), Paragraph(date, s_right)],
            [Paragraph(degree, s_degree), Paragraph(score, s_right_i)],
        ],
        colWidths=[CONTENT_W * 0.68, CONTENT_W * 0.32],
    )
    t.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
            ]
        )
    )
    return t


story.append(edu(
    "CMR College of Engineering &amp; Technology",
    "B.Tech, Computer Science and Engineering (AIML)",
    "June 2026",
    "CGPA: 7.01",
))
story.append(Spacer(1, 4))
story.append(edu("SR Edu Centre", "Intermediate (MPC)", "August 2022", "Percentage: 78.9%"))
story.append(Spacer(1, 4))
story.append(edu(
    "Srinivasa Ramanujan Concept School",
    "10th Standard (CBSE)",
    "June 2020",
    "Percentage: 72.8",
))

# ---------------------------------------------------------------- skills
story += section("Skills")
skills = [
    ("Languages", "Python, HTML, PostgreSQL"),
    ("Frameworks &amp; Libraries", "Django, TensorFlow, Streamlit"),
    ("Databases", "PostgreSQL"),
    ("APIs &amp; Integrations", "Firebase API, Google Maps API, Razorpay"),
    ("Tools &amp; Version Control", "Git, GitHub"),
]
for label, items in skills:
    story.append(Paragraph(f"<b>{label}:</b> {items}", s_line))
    story.append(Spacer(1, 2))

# ---------------------------------------------------------------- projects
story += section("Projects")


def project(title, tech, link_label, link_url, bullets, last=False):
    if link_url:
        link = f' | <a href="{link_url}">{link_label}</a>'
    elif link_label:
        link = f" | {link_label}"
    else:
        link = ""
    story.append(Paragraph(f"<b>{title}</b> &ndash; <i>{tech}</i>{link}", s_line))
    story.append(Spacer(1, 2.5))
    for b in bullets:
        story.append(Paragraph(b, s_bullet, bulletText="–"))
    if not last:
        story.append(Spacer(1, 5))


project(
    "Food on Fire &ndash; Full-Stack Food-Delivery Platform",
    "Django, PostgreSQL, Razorpay, Firebase",
    "Live: foodonfire.in",
    "https://www.foodonfire.in/",
    [
        "Built and deployed an end-to-end production platform: customer ordering, restaurant "
        "dashboard, delivery-agent tracking, and admin panel.",
        "Integrated Razorpay payments, Firebase OTP-only authentication, and live GPS order "
        "tracking via the Google Maps API.",
        "Diagnosed and fixed a production Razorpay webhook signature mismatch, securing the "
        "live payment flow.",
    ],
)

project(
    "Jerry &ndash; Agentic Voice AI Assistant",
    "Python, Whisper, LLM Tool Use",
    "GitHub",
    "https://github.com/heyvamshii/hey-jerry",
    [
        "Built an always-on Windows voice agent with &ldquo;Hey Jerry&rdquo; wake-word "
        "detection and Whisper speech-to-text.",
        "Designed an LLM-powered tool-use loop that launches apps, drives the browser, and "
        "performs desktop tasks from voice commands.",
    ],
)

project(
    "LeadGen AI &ndash; B2B Lead Discovery Tool",
    "Python, Flask",
    "GitHub",
    "https://github.com/heyvamshii/leadgen-ai",
    [
        "Developed an end-to-end AI lead-generation tool with user authentication and session "
        "management for personalized data storage.",
        "Built a Python backend that turns user parameters (service, target audience, region) "
        "into structured, high-accuracy leads with one-click Excel export.",
    ],
)

project(
    "Cervical Spine Fracture Detection",
    "Python, TensorFlow, Streamlit",
    "Team: 3",
    "",
    [
        "Built an AI model using MobileNetV2 and EfficientNetB4 to detect cervical spine "
        "fractures from CT scans with high accuracy.",
        "Implemented Grad-CAM for explainable AI, enabling precise fracture localization and "
        "vertebra identification (C1&ndash;C7).",
        "Enhanced diagnostic reliability by mapping results to a medical knowledge base "
        "detailing symptoms, causes, and treatments of each vertebra.",
    ],
    last=True,
)

# ---------------------------------------------------------------- achievements
story += section("Achievements")
achievements = [
    "Led the organizing committee of &ldquo;Nexus&rdquo; E-Summit, a flagship entrepreneurship "
    "event featuring top startup founders, industry speakers, with 700+ participants and "
    "competitions with a Rs.25,000 prize pool.",
    "Represented E-Cell IIT Bombay at CMRCET, promoting entrepreneurship and innovation "
    "through workshops, coding events, and startup-focused initiatives.",
    "Supported coding events, technical sessions, and student-led tech projects as part of "
    "the Innovation and Entrepreneurship Board.",
]
for a in achievements:
    story.append(Paragraph(a, s_bullet, bulletText="–"))

# ---------------------------------------------------------------- build
doc = SimpleDocTemplate(
    OUT,
    pagesize=A4,
    leftMargin=MARGIN,
    rightMargin=MARGIN,
    topMargin=MARGIN,
    bottomMargin=MARGIN,
    title="Vamshi Krishna Emmadi - Resume",
    author="Vamshi Krishna Emmadi",
)
doc.build(story)
print(f"Wrote {OUT}")
