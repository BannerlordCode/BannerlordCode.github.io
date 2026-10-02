---
title: "VisualShipFactory"
description: "VisualShipFactory：TaleWorlds.MountAndBlade 的 public 类；公开成员 5 个（方法 5、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/VisualShipFactory.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# VisualShipFactory

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class VisualShipFactory`
**File:** `TaleWorlds.MountAndBlade/VisualShipFactory.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

VisualShipFactory 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/VisualShipFactory.cs。它是一个 public 类，继承链为 VisualShipFactory。public/protected 成员共 5 个：5 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：VisualShipFactory 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 VisualShipFactory。成员构成以方法为主（方法 5/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/VisualShipFactory.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InitializeShipEntityCache` | `public static void InitializeShipEntityCache(Scene scene)` | 方法 |
| `DeregisterVisualShipCache` | `public static void DeregisterVisualShipCache()` | 方法 |
| `CreateVisualShip` | `public static GameEntity CreateVisualShip(string shipPrefab, Scene scene, List<ShipVisualSlotInfo>upgrades, int shipSeed, float hitPointRatio, uint sailColor1 = 4294967295U, uint sailColor2 = 4294967295U, bool createPhysics = false)` | 方法 |
| `CreateVisualShipForCampaign` | `public static GameEntity CreateVisualShipForCampaign(string shipPrefab, Scene scene, List<ShipVisualSlotInfo>upgrades, int shipSeed, string shipCustomSailPatternId, uint sailColor1 = 4294967295U, uint sailColor2 = 4294967295U)` | 方法 |
| `RefreshUpgrades` | `public static void RefreshUpgrades(WeakGameEntity shipEntity, List<ShipVisualSlotInfo>upgrades)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
