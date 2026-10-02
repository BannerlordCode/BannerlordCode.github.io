---
title: "MissionAIActivationDeactivationEventListenerLogic"
description: "MissionAIActivationDeactivationEventListenerLogic：SandBox 的 public 类，继承 MissionLogic；公开成员 4 个（方法 1、属性 0、字段 2）。源文件 SandBox/Missions/MissionEvents/MissionAIActivationDeactivationEventListenerLogic.cs。"
---
# MissionAIActivationDeactivationEventListenerLogic

**Namespace:** `SandBox.Missions.MissionEvents`
**Module:** `SandBox`
**Type:** `public class MissionAIActivationDeactivationEventListenerLogic : MissionLogic`
**File:** `SandBox/Missions/MissionEvents/MissionAIActivationDeactivationEventListenerLogic.cs`

## 概述

MissionAIActivationDeactivationEventListenerLogic 位于 SandBox 模块，源文件 SandBox/Missions/MissionEvents/MissionAIActivationDeactivationEventListenerLogic.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 MissionAIActivationDeactivationEventListenerLogic → MissionLogic。public/protected 成员共 4 个：1 方法、2 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionAIActivationDeactivationEventListenerLogic 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.MissionEvents），继承链 MissionAIActivationDeactivationEventListenerLogic → MissionLogic。成员构成以方法为主（方法 1/4，属性 0/4），对外主要以操作入口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionEvents/MissionAIActivationDeactivationEventListenerLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionAIActivationDeactivationEventListenerLogic` | `public MissionAIActivationDeactivationEventListenerLogic()` | 构造函数 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |
| `ActivationEventId` | `public const string ActivationEventId` | 字段 |
| `DeactivationEventId` | `public const string DeactivationEventId` | 字段 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 OpenInventoryWithGivenItemsEventListenerLogic](../OpenInventoryWithGivenItemsEventListenerLogic)
- [同命名空间 ShowQuickInformationEventListenerLogic](../ShowQuickInformationEventListenerLogic)
