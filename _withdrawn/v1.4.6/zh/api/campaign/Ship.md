---
title: "Ship"
description: "Ship：TaleWorlds.CampaignSystem.Naval 的 public 类，继承 IShipOrigin、IRandomOwner；公开成员 52 个（方法 13、属性 38、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/Naval/Ship.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Ship

**Namespace:** `TaleWorlds.CampaignSystem.Naval`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class Ship : IShipOrigin, IRandomOwner`
**File:** `TaleWorlds.CampaignSystem/Naval/Ship.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

Ship 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Naval/Ship.cs。它是一个 public 类（sealed），实现/继承 IShipOrigin、IRandomOwner，继承链为 Ship → IShipOrigin。public/protected 成员共 52 个：13 方法、38 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Ship 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.Naval`，继承链 Ship → IShipOrigin。成员构成以属性为主（属性 38/52，方法 13/52），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Naval/Ship.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Figurehead` | `public Figurehead Figurehead` | 属性 |
| `IsInvulnerable` | `public bool IsInvulnerable` | 属性 |
| `IsTradeable` | `public bool IsTradeable` | 属性 |
| `IsUsedByQuest` | `public bool IsUsedByQuest` | 属性 |
| `RandomValue` | `public int RandomValue` | 属性 |
| `CustomSailPatternId` | `public string CustomSailPatternId` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<ShipUpgradePiece>UnlockedUpgradePieces` | 属性 |
| `Name` | `public TextObject Name` | 属性 |
| `VersionNo` | `public uint VersionNo` | 属性 |
| `Owner` | `public PartyBase Owner` | 属性 |
| `HitPoints` | `public float HitPoints` | 属性 |
| `MaxHitPoints` | `public float MaxHitPoints` | 属性 |
| `MaxFireHitPoints` | `public float MaxFireHitPoints` | 属性 |
| `SailHitPoints` | `public float SailHitPoints` | 属性 |
| `TotalCrewCapacity` | `public int TotalCrewCapacity` | 属性 |
| `MaxSailHitPoints` | `public float MaxSailHitPoints` | 属性 |
| `SeaWorthiness` | `public int SeaWorthiness` | 属性 |
| `FlagshipScore` | `public float FlagshipScore` | 属性 |
| `MainDeckCrewCapacity` | `public int MainDeckCrewCapacity` | 属性 |
| `InventoryCapacity` | `public float InventoryCapacity` | 属性 |
| `SkeletalCrewCapacity` | `public int SkeletalCrewCapacity` | 属性 |
| `CrewCapacityBonusFactor` | `public float CrewCapacityBonusFactor` | 属性 |
| `ShipWeightFactor` | `public float ShipWeightFactor` | 属性 |
| `ForwardDragFactor` | `public float ForwardDragFactor` | 属性 |
| `CrewShieldHitPointsFactor` | `public float CrewShieldHitPointsFactor` | 属性 |
| `AdditionalAmmo` | `public int AdditionalAmmo` | 属性 |
| `MaxOarPowerFactor` | `public float MaxOarPowerFactor` | 属性 |
| `MaxOarForceFactor` | `public float MaxOarForceFactor` | 属性 |
| `SailForceFactor` | `public float SailForceFactor` | 属性 |
| `CrewMeleeDamageFactor` | `public float CrewMeleeDamageFactor` | 属性 |
| `AdditionalArcherQuivers` | `public int AdditionalArcherQuivers` | 属性 |
| `AdditionalThrowingWeaponStack` | `public int AdditionalThrowingWeaponStack` | 属性 |
| `SailRotationSpeedFactor` | `public float SailRotationSpeedFactor` | 属性 |
| `FurlUnfurlSpeedFactor` | `public float FurlUnfurlSpeedFactor` | 属性 |
| `RudderSurfaceAreaFactor` | `public float RudderSurfaceAreaFactor` | 属性 |
| `MaxRudderForceFactor` | `public float MaxRudderForceFactor` | 属性 |
| `CanEquipFigurehead` | `public bool CanEquipFigurehead` | 属性 |
| `ChangeFigurehead` | `public void ChangeFigurehead(Figurehead figurehead)` | 方法 |
| `GetPieceAtSlot` | `public ShipUpgradePiece GetPieceAtSlot(string slotTag)` | 方法 |
| `EquipUpgradePiece` | `public void EquipUpgradePiece(string slotTag, ShipUpgradePiece newUpgradePiece)` | 方法 |
| `HasSlot` | `public bool HasSlot(string slotTag)` | 方法 |
| `CampaignSpeedBonusFactor` | `public float CampaignSpeedBonusFactor` | 属性 |
| `SetName` | `public void SetName(TextObject name)` | 方法 |
| `Ship` | `public Ship(ShipHull shipHull)` | 构造函数 |
| `GetCampaignSpeed` | `public float GetCampaignSpeed()` | 方法 |
| `MBList` | `public MBList<SiegeEngineType>GetSiegeEngines()` | 方法 |
| `UpdateVersionNo` | `public void UpdateVersionNo()` | 方法 |
| `GetCombatFactor` | `public float GetCombatFactor()` | 方法 |
| `OnShipDamaged` | `public void OnShipDamaged(float rawDamage, IShipOrigin rammingShip, out float modifiedDamage)` | 方法 |
| `List` | `public List<ShipVisualSlotInfo>GetShipVisualSlotInfos()` | 方法 |
| `List` | `public List<ShipSlotAndPieceName>GetShipSlotAndPieceNames()` | 方法 |
| `OnPlayerCharacterChanged` | `public void OnPlayerCharacterChanged()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IShipOrigin](../../core-extra/IShipOrigin/)
- [基类/接口 IRandomOwner](../IRandomOwner/)
- [同命名空间 AnchorPoint](../AnchorPoint/)
- [同命名空间 DefaultFigureheads](../DefaultFigureheads/)
- [同命名空间 Figurehead](../Figurehead/)
