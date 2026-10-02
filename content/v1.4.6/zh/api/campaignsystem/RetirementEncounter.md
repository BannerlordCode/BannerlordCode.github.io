---
title: "RetirementEncounter"
description: "RetirementEncounter：TaleWorlds.CampaignSystem 的 public 类，继承 LocationEncounter；公开成员 2 个（方法 1、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/Encounters/RetirementEncounter.cs。"
---
# RetirementEncounter

**Namespace:** `TaleWorlds.CampaignSystem.Encounters`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class RetirementEncounter : LocationEncounter`
**File:** `TaleWorlds.CampaignSystem/Encounters/RetirementEncounter.cs`

## 概述

RetirementEncounter 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Encounters/RetirementEncounter.cs。它是一个 public 类，实现/继承 LocationEncounter，继承链为 RetirementEncounter → LocationEncounter。public/protected 成员共 2 个：1 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RetirementEncounter 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Encounters），继承链 RetirementEncounter → LocationEncounter。成员构成以方法为主（方法 1/2，属性 0/2），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Encounters/RetirementEncounter.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RetirementEncounter` | `public RetirementEncounter(Settlement settlement) : base(settlement)` | 构造函数 |
| `CreateAndOpenMissionController` | `public override IMission CreateAndOpenMissionController(Location nextLocation, Location previousLocation = null, CharacterObject talkToChar = null, string playerSpecialSpawnTag = null)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 LocationEncounter](../LocationEncounter)
- [同命名空间 CampaignBattleResult](../CampaignBattleResult)
- [同命名空间 CastleEncounter](../CastleEncounter)
- [同命名空间 HideoutEncounter](../HideoutEncounter)
- [同命名空间 LocationEncounter](../LocationEncounter)
