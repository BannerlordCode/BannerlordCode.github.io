---
title: "ChangeOwnerOfSettlementAction"
description: "ChangeOwnerOfSettlementAction：TaleWorlds.CampaignSystem.Actions 的 public 类；公开成员 10 个（方法 8、属性 1、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfSettlementAction.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ChangeOwnerOfSettlementAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class ChangeOwnerOfSettlementAction`
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfSettlementAction.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

ChangeOwnerOfSettlementAction 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfSettlementAction.cs。它是一个 public 类，继承链为 ChangeOwnerOfSettlementAction。public/protected 成员共 10 个：8 方法、1 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ChangeOwnerOfSettlementAction 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.Actions`，继承链 ChangeOwnerOfSettlementAction。成员构成以方法为主（方法 8/10，属性 1/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfSettlementAction.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ApplyByDefault` | `public static void ApplyByDefault(Hero hero, Settlement settlement)` | 方法 |
| `ApplyByKingDecision` | `public static void ApplyByKingDecision(Hero hero, Settlement settlement)` | 方法 |
| `ApplyBySiege` | `public static void ApplyBySiege(Hero newOwner, Hero capturerHero, Settlement settlement)` | 方法 |
| `ApplyByLeaveFaction` | `public static void ApplyByLeaveFaction(Hero hero, Settlement settlement)` | 方法 |
| `ApplyByBarter` | `public static void ApplyByBarter(Hero hero, Settlement settlement)` | 方法 |
| `ApplyByRebellion` | `public static void ApplyByRebellion(Hero hero, Settlement settlement)` | 方法 |
| `ApplyByDestroyClan` | `public static void ApplyByDestroyClan(Settlement settlement, Hero newOwner)` | 方法 |
| `ApplyByGift` | `public static void ApplyByGift(Settlement settlement, Hero newOwner)` | 方法 |
| `ChangeOwnerOfSettlementDetail` | `public enum ChangeOwnerOfSettlementDetail` | 属性 |
| `ChangeOwnerOfSettlementDetail` | `public enum ChangeOwnerOfSettlementDetail` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AddCompanionAction](../AddCompanionAction/)
- [同命名空间 AddHeroToPartyAction](../AddHeroToPartyAction/)
- [同命名空间 AdoptHeroAction](../AdoptHeroAction/)
- [同命名空间 ApplyHeirSelectionAction](../ApplyHeirSelectionAction/)
