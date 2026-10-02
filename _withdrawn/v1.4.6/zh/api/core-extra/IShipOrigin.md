---
title: "IShipOrigin"
description: "IShipOrigin：TaleWorlds.Core 的 public 接口；公开成员 32 个（方法 4、属性 28、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/IShipOrigin.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IShipOrigin

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IShipOrigin`
**File:** `TaleWorlds.Core/IShipOrigin.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

IShipOrigin 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/IShipOrigin.cs。它是一个 public 接口，继承链为 IShipOrigin。public/protected 成员共 32 个：4 方法、28 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IShipOrigin 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 IShipOrigin。成员构成以属性为主（属性 28/32，方法 4/32），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/IShipOrigin.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Hull` | `ShipHull Hull` | 属性 |
| `Name` | `TextObject Name` | 属性 |
| `OriginShipId` | `string OriginShipId` | 属性 |
| `IsPlayerShip` | `bool IsPlayerShip` | 属性 |
| `HitPoints` | `float HitPoints` | 属性 |
| `MaxHitPoints` | `float MaxHitPoints` | 属性 |
| `MaxFireHitPoints` | `float MaxFireHitPoints` | 属性 |
| `SailHitPoints` | `float SailHitPoints` | 属性 |
| `MaxSailHitPoints` | `float MaxSailHitPoints` | 属性 |
| `TotalCrewCapacity` | `int TotalCrewCapacity` | 属性 |
| `MainDeckCrewCapacity` | `int MainDeckCrewCapacity` | 属性 |
| `SkeletalCrewCapacity` | `int SkeletalCrewCapacity` | 属性 |
| `DefaultFormationGroupIndex` | `int DefaultFormationGroupIndex` | 属性 |
| `ForwardDragFactor` | `float ForwardDragFactor` | 属性 |
| `ShipWeightFactor` | `float ShipWeightFactor` | 属性 |
| `RudderSurfaceAreaFactor` | `float RudderSurfaceAreaFactor` | 属性 |
| `RandomValue` | `int RandomValue` | 属性 |
| `CustomSailPatternId` | `string CustomSailPatternId` | 属性 |
| `MaxRudderForceFactor` | `float MaxRudderForceFactor` | 属性 |
| `MaxOarForceFactor` | `float MaxOarForceFactor` | 属性 |
| `SailForceFactor` | `float SailForceFactor` | 属性 |
| `MaxOarPowerFactor` | `float MaxOarPowerFactor` | 属性 |
| `SailRotationSpeedFactor` | `float SailRotationSpeedFactor` | 属性 |
| `FurlUnfurlSpeedFactor` | `float FurlUnfurlSpeedFactor` | 属性 |
| `CrewShieldHitPointsFactor` | `float CrewShieldHitPointsFactor` | 属性 |
| `CrewMeleeDamageFactor` | `float CrewMeleeDamageFactor` | 属性 |
| `AdditionalArcherQuivers` | `int AdditionalArcherQuivers` | 属性 |
| `AdditionalThrowingWeaponStack` | `int AdditionalThrowingWeaponStack` | 属性 |
| `OnShipDamaged` | `void OnShipDamaged(float rawDamage, IShipOrigin rammingShip, out float modifiedDamage);` | 方法 |
| `OnSailDamaged` | `void OnSailDamaged(float rawDamage, float inflictedDamage);` | 方法 |
| `List` | `List<ShipVisualSlotInfo>GetShipVisualSlotInfos();` | 方法 |
| `List` | `List<ShipSlotAndPieceName>GetShipSlotAndPieceNames();` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
