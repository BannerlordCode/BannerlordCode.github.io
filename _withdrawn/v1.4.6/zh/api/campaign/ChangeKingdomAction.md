---
title: "ChangeKingdomAction"
description: "ChangeKingdomAction：TaleWorlds.CampaignSystem.Actions 的 public 类；公开成员 16 个（方法 9、属性 1、字段 5）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/Actions/ChangeKingdomAction.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ChangeKingdomAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class ChangeKingdomAction`
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeKingdomAction.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

ChangeKingdomAction 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Actions/ChangeKingdomAction.cs。它是一个 public 类，继承链为 ChangeKingdomAction。public/protected 成员共 16 个：9 方法、1 属性、5 字段、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ChangeKingdomAction 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.Actions`，继承链 ChangeKingdomAction。成员构成以方法为主（方法 9/16，属性 1/16），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Actions/ChangeKingdomAction.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ApplyByJoinToKingdom` | `public static void ApplyByJoinToKingdom(Clan clan, Kingdom newKingdom, CampaignTime shouldStayInKingdomUntil = default(CampaignTime), bool showNotification = true)` | 方法 |
| `ApplyByJoinToKingdomByDefection` | `public static void ApplyByJoinToKingdomByDefection(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, CampaignTime shouldStayInKingdomUntil = default(CampaignTime), bool showNotification = true)` | 方法 |
| `ApplyByCreateKingdom` | `public static void ApplyByCreateKingdom(Clan clan, Kingdom newKingdom, bool showNotification = true)` | 方法 |
| `ApplyByLeaveByKingdomDestruction` | `public static void ApplyByLeaveByKingdomDestruction(Clan clan, bool showNotification = true)` | 方法 |
| `ApplyByLeaveKingdom` | `public static void ApplyByLeaveKingdom(Clan clan, bool showNotification = true)` | 方法 |
| `ApplyByLeaveWithRebellionAgainstKingdom` | `public static void ApplyByLeaveWithRebellionAgainstKingdom(Clan clan, bool showNotification = true)` | 方法 |
| `ApplyByJoinFactionAsMercenary` | `public static void ApplyByJoinFactionAsMercenary(Clan clan, Kingdom newKingdom, CampaignTime shouldStayInKingdomUntil = default(CampaignTime), int awardMultiplier = 50, bool showNotification = true)` | 方法 |
| `ApplyByLeaveKingdomAsMercenary` | `public static void ApplyByLeaveKingdomAsMercenary(Clan mercenaryClan, bool showNotification = true)` | 方法 |
| `ApplyByLeaveKingdomByClanDestruction` | `public static void ApplyByLeaveKingdomByClanDestruction(Clan clan, bool showNotification = true)` | 方法 |
| `PotentialSettlementsPerNobleEffect` | `public const float PotentialSettlementsPerNobleEffect` | 字段 |
| `NewGainedFiefsValueForKingdomConstant` | `public const float NewGainedFiefsValueForKingdomConstant` | 字段 |
| `LordsUnitStrengthValue` | `public const float LordsUnitStrengthValue` | 字段 |
| `MercenaryUnitStrengthValue` | `public const float MercenaryUnitStrengthValue` | 字段 |
| `MinimumNeededGoldForRecruitingMercenaries` | `public const float MinimumNeededGoldForRecruitingMercenaries` | 字段 |
| `ChangeKingdomActionDetail` | `public enum ChangeKingdomActionDetail` | 属性 |
| `ChangeKingdomActionDetail` | `public enum ChangeKingdomActionDetail` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AddCompanionAction](../AddCompanionAction/)
- [同命名空间 AddHeroToPartyAction](../AddHeroToPartyAction/)
- [同命名空间 AdoptHeroAction](../AdoptHeroAction/)
- [同命名空间 ApplyHeirSelectionAction](../ApplyHeirSelectionAction/)
