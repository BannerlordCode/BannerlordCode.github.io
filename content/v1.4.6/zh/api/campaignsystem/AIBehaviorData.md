---
title: "AIBehaviorData"
description: "AIBehaviorData：TaleWorlds.CampaignSystem 的 public 结构体，继承 IEquatable<AIBehaviorData>；公开成员 8 个（方法 5、属性 0、字段 1）。源文件 TaleWorlds.CampaignSystem/AIBehaviorData.cs。"
---
# AIBehaviorData

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public struct AIBehaviorData : IEquatable<AIBehaviorData>`
**File:** `TaleWorlds.CampaignSystem/AIBehaviorData.cs`

## 概述

AIBehaviorData 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/AIBehaviorData.cs。它是一个 public 结构体，实现/继承 IEquatable<AIBehaviorData>，继承链为 AIBehaviorData → IEquatable。public/protected 成员共 8 个：5 方法、1 字段、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AIBehaviorData 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 AIBehaviorData → IEquatable。成员构成以方法为主（方法 5/8，属性 0/8），对外主要以操作入口暴露。继承链上的 IEquatable 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/AIBehaviorData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AIBehaviorData` | `public AIBehaviorData(IMapPoint party, AiBehavior aiBehavior, MobileParty.NavigationType navigationType, bool willGatherArmy, bool isFromPort, bool isTargetingPort)` | 构造函数 |
| `AIBehaviorData` | `public AIBehaviorData(CampaignVec2 position, AiBehavior aiBehavior, MobileParty.NavigationType navigationType, bool willGatherArmy, bool isFromPort, bool isTargetingPort)` | 构造函数 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `Equals` | `public bool Equals(AIBehaviorData other)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |
| `Invalid` | `public static readonly AIBehaviorData Invalid` | 字段 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
- [同命名空间 BattleResultPartyData](../BattleResultPartyData)
