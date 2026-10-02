---
title: "BeHostileAction"
description: "BeHostileAction：TaleWorlds.CampaignSystem 的 public 类；公开成员 4 个（方法 4、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/Actions/BeHostileAction.cs。"
---
# BeHostileAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class BeHostileAction`
**File:** `TaleWorlds.CampaignSystem/Actions/BeHostileAction.cs`

## 概述

BeHostileAction 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Actions/BeHostileAction.cs。它是一个 public 类，继承链为 BeHostileAction。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BeHostileAction 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Actions），继承链 BeHostileAction。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Actions/BeHostileAction.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ApplyHostileAction` | `public static void ApplyHostileAction(PartyBase attackerParty, PartyBase defenderParty, float value)` | 方法 |
| `ApplyMinorCoercionHostileAction` | `public static void ApplyMinorCoercionHostileAction(PartyBase attackerParty, PartyBase defenderParty)` | 方法 |
| `ApplyMajorCoercionHostileAction` | `public static void ApplyMajorCoercionHostileAction(PartyBase attackerParty, PartyBase defenderParty)` | 方法 |
| `ApplyEncounterHostileAction` | `public static void ApplyEncounterHostileAction(PartyBase attackerParty, PartyBase defenderParty)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AddCompanionAction](../AddCompanionAction)
- [同命名空间 AddHeroToPartyAction](../AddHeroToPartyAction)
- [同命名空间 AdoptHeroAction](../AdoptHeroAction)
- [同命名空间 ApplyHeirSelectionAction](../ApplyHeirSelectionAction)
