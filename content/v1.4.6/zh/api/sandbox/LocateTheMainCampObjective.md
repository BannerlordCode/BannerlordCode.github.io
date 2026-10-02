---
title: "LocateTheMainCampObjective"
description: "LocateTheMainCampObjective：SandBox 的 public 类，继承 MissionObjective；公开成员 4 个（方法 0、属性 3、字段 0）。源文件 SandBox/Missions/MissionLogics/Hideout/Objectives/LocateTheMainCampObjective.cs。"
---
# LocateTheMainCampObjective

**Namespace:** `SandBox.Missions.MissionLogics.Hideout.Objectives`
**Module:** `SandBox`
**Type:** `public class LocateTheMainCampObjective : MissionObjective`
**File:** `SandBox/Missions/MissionLogics/Hideout/Objectives/LocateTheMainCampObjective.cs`

## 概述

LocateTheMainCampObjective 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/Hideout/Objectives/LocateTheMainCampObjective.cs。它是一个 public 类，实现/继承 MissionObjective，继承链为 LocateTheMainCampObjective → MissionObjective。public/protected 成员共 4 个：3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LocateTheMainCampObjective 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.MissionLogics.Hideout.Objectives），继承链 LocateTheMainCampObjective → MissionObjective。成员构成以属性为主（属性 3/4，方法 0/4），对外主要以状态读取接口暴露。继承链上的 MissionObjective 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/Hideout/Objectives/LocateTheMainCampObjective.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UniqueId` | `public override string UniqueId` | 属性 |
| `Name` | `public override TextObject Name` | 属性 |
| `Description` | `public override TextObject Description` | 属性 |
| `LocateTheMainCampObjective` | `public LocateTheMainCampObjective(Mission mission) : base(mission)` | 构造函数 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ClearTheMainCampObjective](../ClearTheMainCampObjective)
