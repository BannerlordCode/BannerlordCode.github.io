---
title: "EncounterManager"
description: "EncounterManager：TaleWorlds.CampaignSystem 的 public 类；公开成员 5 个（方法 4、属性 1、字段 0）。源文件 TaleWorlds.CampaignSystem/EncounterManager.cs。"
---
# EncounterManager

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class EncounterManager`
**File:** `TaleWorlds.CampaignSystem/EncounterManager.cs`

## 概述

EncounterManager 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/EncounterManager.cs。它是一个 public 类，继承链为 EncounterManager。public/protected 成员共 5 个：4 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncounterManager 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 EncounterManager。成员构成以方法为主（方法 4/5，属性 1/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/EncounterManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncounterModel` | `public static EncounterModel EncounterModel` | 属性 |
| `Tick` | `public static void Tick(float dt)` | 方法 |
| `HandleEncounterForMobileParty` | `public static void HandleEncounterForMobileParty(MobileParty mobileParty, float dt)` | 方法 |
| `StartPartyEncounter` | `public static void StartPartyEncounter(PartyBase attackerParty, PartyBase defenderParty)` | 方法 |
| `StartSettlementEncounter` | `public static void StartSettlementEncounter(MobileParty attackerParty, Settlement settlement)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
