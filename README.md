# WISP Web Interface

> <img src="https://www.wisp.tools/assets/favicon/favicon.svg" align="right" width="120px" />

**The Web Interface for the Simple Programs**

> We don't talk about the F in "for", because Wisp sounds better than Wifsp

![NextJS](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![GPL-3.0](https://img.shields.io/badge/GPL--3.0-red?style=for-the-badge)

---

## 🌟 Introduction

**WISP** is an open-source hub for lightweight web tools, offering converters, generators, and utilities in one clean interface. Built for both users and developers:

- **For Users**: Instant access to simple tools without ads, trackers, or complexity.
- **For Developers**: A modular framework with ready-to-use templates and a development kit to create new tools effortlessly.

## 🗂 Repository Structure

This project consists of two core repositories:

| Repository                                                    | Purpose                                                      | Contribution Focus                  |
| ------------------------------------------------------------- | ------------------------------------------------------------ | ----------------------------------- |
| **[wisp-modules](https://github.com/WispTools/wisp-modules)** | Hosts all tools (converters, generators, etc.)               | Add/edit tools, create new modules  |
| **This Repository**                                           | Main website UI, module integration, and deployment pipeline | Layout, optimization, documentation |

**⚠️ Contributor Note**: Most contributions belong in `wisp-modules` unless you're modifying the website's core infrastructure.

## 🛠 How This Repo Works

### Tech Stack

- Built with **Next.js** for server-side rendering and performance.
- Automated via **GitHub Actions** for seamless module updates.

### Deployment Workflow

1. **Module Sync**: Clones the latest tools from `wisp-modules` into `/public/raw-mod`.
2. **Data Compilation**: Generates a cached database in `/dist-data` (module metadata, slugs, configs) to eliminate external API calls.
3. **Static Build**: Generates a production-ready static site for fast loading.

## 🤝 Contributions Welcome!

We encourage contributions of all sizes! Here’s how you can help:

**High-Priority Needs**:

- 📚 Improved documentation for core website setup
- ⚡ Performance optimizations (caching, bundle size reduction)

**Getting Started**:

1. Fork the repo and clone to your local machine
2. For major changes, open an issue first to discuss scope.

## 🚀 Local Development Setup

### Prerequisites

- Node.js v18+
- Git

### Installation

```bash
# 1. Clone this repository
git clone https://github.com/WispTools/wisp.git
cd wisp

# 2. Install dependencies
npm install

# 3. Clone modules from wisp-modules & generate metadata
npm run clone

# 4. Start dev server (http://localhost:3000)
npm run dev
```

## 📜 License

This project is licensed under **GPL-3.0** - see the [full license text](https://www.gnu.org/licenses/gpl-3.0.en.html). All derived works must remain open-source.

## 🔒 Privacy Policy

We value your privacy:

- **No Tracking**: Only basic Vercel Analytics (page views, country) are collected.
- **Zero PII**: We never store emails, IPs, or identifiable data.

Read our full policy at [wisp.tools/privacy-policy](https://wisp.tools/privacy-policy).

## 📬 Contact

Have questions or ideas? Reach out!

- **GitHub**: [Open an Issue](https://github.com/WispTools/wisp/issues)
- **Email**: [contact@ehazel.com](mailto:contact@ehazel.com)
- **Community**: Join our [Discussions](https://github.com/WispTools/wisp/discussions)
