---
title: "指南"
description: "骑马与砍杀2：霸主 v1.4.5 模组开发指南——环境搭建、UI、任务、战役、存档、资源、本地化和常见模式。"
---

# 指南

本节收集面向《骑马与砍杀2：霸主》v1.4.5 的实操性模组开发指南。

> v1.4.5 的指南仍在整理中。当前 v1.4.5 与 v1.3.15 的工作流基本一致，可先阅读 [v1.3.15 指南](../../../v1.3.15/zh/guide/) 中的详细教程。

## 指南分类

- **环境搭建** — 依赖、模块目录结构、加载顺序
- **Gauntlet UI** — Movie、Widget、ViewModel 与 Prefab 工作流
- **任务系统** — MissionLogic、Agent/Formation/Team 生命周期
- **战役系统** — 部队、聚落、王国、Behaviors、Actions
- **存档系统** — SaveableField/Property、升级迁移
- **资源管线** — XML、场景、资源
- **本地化** — 文本字符串、TextProcessor、语言文件
- **常见模式** — 模组入口点、事件钩子、GameModel 覆盖
- **故障排除** — 崩溃边界、Native 互操作限制

## 从哪里开始

如果你刚接触霸主模组开发，建议先阅读 [v1.3.15 SDK 总览](/v1.3.15/zh/architecture/sdk-overview/) 和 [模组工作流](/v1.3.15/en/guide/mod-workflow/) 指南；待本节内容补充后再回到此处查看 v1.4.5 的差异。
