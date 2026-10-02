---
title: "PlayerSiege"
description: "PlayerSiege：TaleWorlds.CampaignSystem.Siege 的 public 类；公开成员 9 个（方法 5、属性 4、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/Siege/PlayerSiege.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerSiege

**Namespace:** `TaleWorlds.CampaignSystem.Siege`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class PlayerSiege`
**File:** `TaleWorlds.CampaignSystem/Siege/PlayerSiege.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

PlayerSiege 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Siege/PlayerSiege.cs。它是一个 public 类，继承链为 PlayerSiege。public/protected 成员共 9 个：5 方法、4 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PlayerSiege 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.Siege`，继承链 PlayerSiege。成员构成以方法为主（方法 5/9，属性 4/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Siege/PlayerSiege.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerSiegeEvent` | `public static SiegeEvent PlayerSiegeEvent` | 属性 |
| `BesiegedSettlement` | `public static Settlement BesiegedSettlement` | 属性 |
| `PlayerSide` | `public static BattleSideEnum PlayerSide` | 属性 |
| `IsRebellion` | `public static bool IsRebellion` | 属性 |
| `StartSiegePreparation` | `public static void StartSiegePreparation()` | 方法 |
| `OnSiegeEventFinalized` | `public static void OnSiegeEventFinalized(bool besiegerPartyDefeated)` | 方法 |
| `StartPlayerSiege` | `public static void StartPlayerSiege(BattleSideEnum playerSide, bool isSimulation = false, Settlement settlement = null)` | 方法 |
| `FinalizePlayerSiege` | `public static void FinalizePlayerSiege()` | 方法 |
| `StartSiegeMission` | `public static void StartSiegeMission(Settlement settlement = null)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 BesiegerCamp](../BesiegerCamp/)
- [同命名空间 DefaultSiegeStrategies](../DefaultSiegeStrategies/)
- [同命名空间 ISiegeEventSide](../ISiegeEventSide/)
- [同命名空间 ISiegeEventVisual](../ISiegeEventVisual/)
