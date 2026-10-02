---
title: "ICampaignBehaviorManager"
description: "ICampaignBehaviorManager：TaleWorlds.CampaignSystem 的 public 接口；公开成员 8 个（方法 8、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/ICampaignBehaviorManager.cs。"
---
# ICampaignBehaviorManager

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ICampaignBehaviorManager`
**File:** `TaleWorlds.CampaignSystem/ICampaignBehaviorManager.cs`

## 概述

ICampaignBehaviorManager 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ICampaignBehaviorManager.cs。它是一个 public 接口，继承链为 ICampaignBehaviorManager。public/protected 成员共 8 个：8 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ICampaignBehaviorManager 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 ICampaignBehaviorManager。成员构成以方法为主（方法 8/8，属性 0/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ICampaignBehaviorManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `void RegisterEvents();` | 方法 |
| `GetBehavior` | `T GetBehavior<T>();` | 方法 |
| `IEnumerable` | `IEnumerable<T>GetBehaviors<T>();` | 方法 |
| `AddBehavior` | `void AddBehavior(CampaignBehaviorBase campaignBehavior);` | 方法 |
| `RemoveBehavior` | `void RemoveBehavior<T>() where T : CampaignBehaviorBase;` | 方法 |
| `ClearBehaviors` | `void ClearBehaviors();` | 方法 |
| `LoadBehaviorData` | `void LoadBehaviorData();` | 方法 |
| `InitializeCampaignBehaviors` | `void InitializeCampaignBehaviors(IEnumerable<CampaignBehaviorBase>inputComponents);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
