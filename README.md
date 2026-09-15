<div align="center">

# 🚀 Main Project

### Admin • Backend • Mobile

A full-stack project repository containing the administrative web application,
backend services, and mobile application in a single monorepo.

<br />

![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)
![Admin](https://img.shields.io/badge/Admin-React%20%2B%20Vite-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Enabled-3178C6?style=for-the-badge&logo=typescript)
![Mobile](https://img.shields.io/badge/Mobile-React%20Native-61DAFB?style=for-the-badge&logo=react)
![Status](https://img.shields.io/badge/Status-In%20Development-orange?style=for-the-badge)

</div>

---

## 📖 Overview

This repository contains the different parts of the application in a single
place.

The project is divided into three main applications:

- **Admin** — Web-based administrative interface
- **Backend** — Backend services, APIs, and business logic
- **Mobile** — Mobile application built with React Native

Keeping the applications inside a single repository makes it easier to manage
shared development, versioning, documentation, and deployment workflows.

---

# 🏗️ Project Architecture

```text
                    ┌─────────────────────┐
                    │      Mobile App     │
                    │   React Native      │
                    └──────────┬──────────┘
                               │
                               │ API Requests
                               ▼
                    ┌─────────────────────┐
                    │       Backend       │
                    │  APIs / Business    │
                    │      Logic          │
                    └──────────┬──────────┘
                               │
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Database       │
                    │   / External APIs   │
                    └─────────────────────┘
                               ▲
                               │
                               │ API Requests
                               │
                    ┌──────────┴──────────┐
                    │       Admin         │
                    │  React + Vite + TS  │
                    └─────────────────────┘
