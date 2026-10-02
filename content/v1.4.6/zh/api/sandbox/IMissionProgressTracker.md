---
title: "IMissionProgressTracker"
description: "IMissionProgressTracker：SandBox 的 public 接口；公开成员 1 个（方法 0、属性 1、字段 0）。源文件 SandBox/Missions/MissionLogics/IMissionProgressTracker.cs。"
---
# IMissionProgressTracker

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public interface IMissionProgressTracker`
**File:** `SandBox/Missions/MissionLogics/IMissionProgressTracker.cs`

## 概述

IMissionProgressTracker 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/IMissionProgressTracker.cs。它是一个 public 接口，继承链为 IMissionProgressTracker。public/protected 成员共 1 个：1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IMissionProgressTracker 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.MissionLogics），继承链 IMissionProgressTracker。成员构成以属性为主（属性 1/1，方法 0/1），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/IMissionProgressTracker.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentProgress` | `float CurrentProgress` | 属性 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BattleAgentLogic](../BattleAgentLogic)
- [同命名空间 BattleSurgeonLogic](../BattleSurgeonLogic)
- [同命名空间 CampaignMissionComponent](../CampaignMissionComponent)
- [同命名空间 CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
