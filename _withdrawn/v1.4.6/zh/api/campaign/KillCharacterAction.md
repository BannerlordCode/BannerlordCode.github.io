---
title: "KillCharacterAction"
description: "KillCharacterAction：TaleWorlds.CampaignSystem.Actions 的 public 类；公开成员 13 个（方法 11、属性 1、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/Actions/KillCharacterAction.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KillCharacterAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class KillCharacterAction`
**File:** `TaleWorlds.CampaignSystem/Actions/KillCharacterAction.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

KillCharacterAction 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Actions/KillCharacterAction.cs。它是一个 public 类，继承链为 KillCharacterAction。public/protected 成员共 13 个：11 方法、1 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KillCharacterAction 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.Actions`，继承链 KillCharacterAction。成员构成以方法为主（方法 11/13，属性 1/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Actions/KillCharacterAction.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ApplyByOldAge` | `public static void ApplyByOldAge(Hero victim, bool showNotification = true)` | 方法 |
| `ApplyByWounds` | `public static void ApplyByWounds(Hero victim, bool showNotification = true)` | 方法 |
| `ApplyByBattle` | `public static void ApplyByBattle(Hero victim, Hero killer, bool showNotification = true)` | 方法 |
| `ApplyByMurder` | `public static void ApplyByMurder(Hero victim, Hero killer = null, bool showNotification = true)` | 方法 |
| `ApplyInLabor` | `public static void ApplyInLabor(Hero lostMother, bool showNotification = true)` | 方法 |
| `ApplyByExecution` | `public static void ApplyByExecution(Hero victim, Hero executer, bool showNotification = true, bool isForced = false)` | 方法 |
| `ApplyByExecutionAfterMapEvent` | `public static void ApplyByExecutionAfterMapEvent(Hero victim, Hero executer, bool showNotification = true, bool isForced = false)` | 方法 |
| `ApplyByRemove` | `public static void ApplyByRemove(Hero victim, bool showNotification = false, bool isForced = true)` | 方法 |
| `ApplyByDeathMark` | `public static void ApplyByDeathMark(Hero victim, bool showNotification = false)` | 方法 |
| `ApplyByDeathMarkForced` | `public static void ApplyByDeathMarkForced(Hero victim, bool showNotification = false)` | 方法 |
| `ApplyByPlayerIllness` | `public static void ApplyByPlayerIllness()` | 方法 |
| `KillCharacterActionDetail` | `public enum KillCharacterActionDetail` | 属性 |
| `KillCharacterActionDetail` | `public enum KillCharacterActionDetail` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AddCompanionAction](../AddCompanionAction/)
- [同命名空间 AddHeroToPartyAction](../AddHeroToPartyAction/)
- [同命名空间 AdoptHeroAction](../AdoptHeroAction/)
- [同命名空间 ApplyHeirSelectionAction](../ApplyHeirSelectionAction/)
