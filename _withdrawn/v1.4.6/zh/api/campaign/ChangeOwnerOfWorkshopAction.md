---
title: "ChangeOwnerOfWorkshopAction"
description: "ChangeOwnerOfWorkshopAction：TaleWorlds.CampaignSystem.Actions 的 public 类；公开成员 5 个（方法 5、属性 0、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfWorkshopAction.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ChangeOwnerOfWorkshopAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class ChangeOwnerOfWorkshopAction`
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfWorkshopAction.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

ChangeOwnerOfWorkshopAction 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfWorkshopAction.cs。它是一个 public 类，继承链为 ChangeOwnerOfWorkshopAction。public/protected 成员共 5 个：5 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ChangeOwnerOfWorkshopAction 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.Actions`，继承链 ChangeOwnerOfWorkshopAction。成员构成以方法为主（方法 5/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfWorkshopAction.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ApplyByBankruptcy` | `public static void ApplyByBankruptcy(Workshop workshop, Hero newOwner, WorkshopType workshopType, int cost)` | 方法 |
| `ApplyByPlayerBuying` | `public static void ApplyByPlayerBuying(Workshop workshop)` | 方法 |
| `ApplyByPlayerSelling` | `public static void ApplyByPlayerSelling(Workshop workshop, Hero newOwner, WorkshopType workshopType)` | 方法 |
| `ApplyByDeath` | `public static void ApplyByDeath(Workshop workshop, Hero newOwner)` | 方法 |
| `ApplyByWar` | `public static void ApplyByWar(Workshop workshop, Hero newOwner, WorkshopType workshopType)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AddCompanionAction](../AddCompanionAction/)
- [同命名空间 AddHeroToPartyAction](../AddHeroToPartyAction/)
- [同命名空间 AdoptHeroAction](../AdoptHeroAction/)
- [同命名空间 ApplyHeirSelectionAction](../ApplyHeirSelectionAction/)
