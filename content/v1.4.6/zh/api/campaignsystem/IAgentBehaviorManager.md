---
title: "IAgentBehaviorManager"
description: "IAgentBehaviorManager：TaleWorlds.CampaignSystem 的 public 接口；公开成员 13 个（方法 13、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/IAgentBehaviorManager.cs。"
---
# IAgentBehaviorManager

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IAgentBehaviorManager`
**File:** `TaleWorlds.CampaignSystem/IAgentBehaviorManager.cs`

## 概述

IAgentBehaviorManager 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/IAgentBehaviorManager.cs。它是一个 public 接口，继承链为 IAgentBehaviorManager。public/protected 成员共 13 个：13 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IAgentBehaviorManager 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 IAgentBehaviorManager。成员构成以方法为主（方法 13/13，属性 0/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/IAgentBehaviorManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddQuestCharacterBehaviors` | `void AddQuestCharacterBehaviors(IAgent agent);` | 方法 |
| `AddWandererBehaviors` | `void AddWandererBehaviors(IAgent agent);` | 方法 |
| `AddOutdoorWandererBehaviors` | `void AddOutdoorWandererBehaviors(IAgent agent);` | 方法 |
| `AddIndoorWandererBehaviors` | `void AddIndoorWandererBehaviors(IAgent agent);` | 方法 |
| `AddFixedCharacterBehaviors` | `void AddFixedCharacterBehaviors(IAgent agent);` | 方法 |
| `AddPatrollingThugBehaviors` | `void AddPatrollingThugBehaviors(IAgent agent);` | 方法 |
| `AddStandGuardBehaviors` | `void AddStandGuardBehaviors(IAgent agent);` | 方法 |
| `AddFixedGuardBehaviors` | `void AddFixedGuardBehaviors(IAgent agent);` | 方法 |
| `AddStealthAgentBehaviors` | `void AddStealthAgentBehaviors(IAgent agent);` | 方法 |
| `AddPatrollingGuardBehaviors` | `void AddPatrollingGuardBehaviors(IAgent agent);` | 方法 |
| `AddCompanionBehaviors` | `void AddCompanionBehaviors(IAgent agent);` | 方法 |
| `AddBodyguardBehaviors` | `void AddBodyguardBehaviors(IAgent agent);` | 方法 |
| `AddFirstCompanionBehavior` | `void AddFirstCompanionBehavior(IAgent agent);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
