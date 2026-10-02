---
title: "ChangeShipOwnerAction"
description: "ChangeShipOwnerAction：TaleWorlds.CampaignSystem 的 public 类；公开成员 7 个（方法 5、属性 1、字段 0）。源文件 TaleWorlds.CampaignSystem/Actions/ChangeShipOwnerAction.cs。"
---
# ChangeShipOwnerAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class ChangeShipOwnerAction`
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeShipOwnerAction.cs`

## 概述

ChangeShipOwnerAction 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Actions/ChangeShipOwnerAction.cs。它是一个 public 类，继承链为 ChangeShipOwnerAction。public/protected 成员共 7 个：5 方法、1 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ChangeShipOwnerAction 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Actions），继承链 ChangeShipOwnerAction。成员构成以方法为主（方法 5/7，属性 1/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Actions/ChangeShipOwnerAction.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ApplyByTransferring` | `public static void ApplyByTransferring(PartyBase newOwner, Ship ship)` | 方法 |
| `ApplyByTrade` | `public static void ApplyByTrade(PartyBase newOwner, Ship ship)` | 方法 |
| `ApplyByLooting` | `public static void ApplyByLooting(PartyBase newOwner, Ship ship)` | 方法 |
| `ApplyByProduction` | `public static void ApplyByProduction(PartyBase newOwner, Ship ship)` | 方法 |
| `ApplyByMobilePartyCreation` | `public static void ApplyByMobilePartyCreation(PartyBase newOwner, Ship ship)` | 方法 |
| `ShipOwnerChangeDetail` | `public enum ShipOwnerChangeDetail` | 属性 |
| `ShipOwnerChangeDetail` | `public enum ShipOwnerChangeDetail` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AddCompanionAction](../AddCompanionAction)
- [同命名空间 AddHeroToPartyAction](../AddHeroToPartyAction)
- [同命名空间 AdoptHeroAction](../AdoptHeroAction)
- [同命名空间 ApplyHeirSelectionAction](../ApplyHeirSelectionAction)
