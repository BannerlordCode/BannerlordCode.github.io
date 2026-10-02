---
title: "SiegeAftermathAction"
description: "SiegeAftermathAction：TaleWorlds.CampaignSystem 的 public 类；公开成员 3 个（方法 1、属性 1、字段 0）。源文件 TaleWorlds.CampaignSystem/Actions/SiegeAftermathAction.cs。"
---
# SiegeAftermathAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class SiegeAftermathAction`
**File:** `TaleWorlds.CampaignSystem/Actions/SiegeAftermathAction.cs`

## 概述

SiegeAftermathAction 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Actions/SiegeAftermathAction.cs。它是一个 public 类，继承链为 SiegeAftermathAction。public/protected 成员共 3 个：1 方法、1 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SiegeAftermathAction 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Actions），继承链 SiegeAftermathAction。成员构成以方法为主（方法 1/3，属性 1/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Actions/SiegeAftermathAction.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ApplyAftermath` | `public static void ApplyAftermath(MobileParty attackerParty, Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, Clan previousSettlementOwner, Dictionary<MobileParty, float>partyContributions)` | 方法 |
| `SiegeAftermath` | `public enum SiegeAftermath` | 属性 |
| `SiegeAftermath` | `public enum SiegeAftermath` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AddCompanionAction](../AddCompanionAction)
- [同命名空间 AddHeroToPartyAction](../AddHeroToPartyAction)
- [同命名空间 AdoptHeroAction](../AdoptHeroAction)
- [同命名空间 ApplyHeirSelectionAction](../ApplyHeirSelectionAction)
