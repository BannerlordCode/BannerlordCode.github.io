---
title: "IReadOnlyPerkObject"
description: "IReadOnlyPerkObject：TaleWorlds.MountAndBlade 的 public 接口；公开成员 14 个（方法 5、属性 9、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/IReadOnlyPerkObject.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IReadOnlyPerkObject

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IReadOnlyPerkObject`
**File:** `TaleWorlds.MountAndBlade/IReadOnlyPerkObject.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

IReadOnlyPerkObject 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/IReadOnlyPerkObject.cs。它是一个 public 接口，继承链为 IReadOnlyPerkObject。public/protected 成员共 14 个：5 方法、9 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IReadOnlyPerkObject 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 IReadOnlyPerkObject。成员构成以属性为主（属性 9/14，方法 5/14），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/IReadOnlyPerkObject.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `TextObject Name` | 属性 |
| `Description` | `TextObject Description` | 属性 |
| `List` | `List<string>GameModes` | 属性 |
| `PerkListIndex` | `int PerkListIndex` | 属性 |
| `IconId` | `string IconId` | 属性 |
| `HeroIdleAnimOverride` | `string HeroIdleAnimOverride` | 属性 |
| `HeroMountIdleAnimOverride` | `string HeroMountIdleAnimOverride` | 属性 |
| `TroopIdleAnimOverride` | `string TroopIdleAnimOverride` | 属性 |
| `TroopMountIdleAnimOverride` | `string TroopMountIdleAnimOverride` | 属性 |
| `GetExtraTroopCount` | `int GetExtraTroopCount(bool isWarmup);` | 方法 |
| `EquipmentElement>>GetAlternativeEquipments` | `List<ValueTuple<EquipmentIndex, EquipmentElement>>GetAlternativeEquipments(bool isWarmup, bool isPlayer, List<ValueTuple<EquipmentIndex, EquipmentElement>>alternativeEquipments, bool getAllEquipments = false);` | 方法 |
| `GetDrivenPropertyBonusOnSpawn` | `float GetDrivenPropertyBonusOnSpawn(bool isWarmup, bool isPlayer, DrivenProperty drivenProperty, float baseValue);` | 方法 |
| `GetHitpoints` | `float GetHitpoints(bool isWarmup, bool isPlayer);` | 方法 |
| `Clone` | `MPPerkObject Clone(MissionPeer peer);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
