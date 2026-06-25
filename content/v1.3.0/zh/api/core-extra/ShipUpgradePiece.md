---
title: "ShipUpgradePiece"
description: "ShipUpgradePiece 的自动生成类参考。"
---
# ShipUpgradePiece

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class ShipUpgradePiece : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/ShipUpgradePiece.cs`

## 概述

`ShipUpgradePiece` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TargetSlots` | `public MBReadOnlyList<ShipSlot> TargetSlots { get; }` |
| `LightValue` | `public int LightValue { get; }` |
| `MediumValue` | `public int MediumValue { get; }` |
| `HeavyValue` | `public int HeavyValue { get; }` |
| `SlotPrefabChildTagId` | `public string SlotPrefabChildTagId { get; }` |
| `CombatFactor` | `public float CombatFactor { get; }` |
| `CrewCapacityBonusMultiplier` | `public float CrewCapacityBonusMultiplier { get; }` |
| `RequiredPortLevel` | `public int RequiredPortLevel { get; }` |
| `ShipWeightBonusMultiplier` | `public float ShipWeightBonusMultiplier { get; }` |
| `RequiredCulture1` | `public BasicCultureObject RequiredCulture1 { get; }` |
| `DecreaseForwardDragMultiplier` | `public float DecreaseForwardDragMultiplier { get; }` |
| `CampaignSpeedBonusMultiplier` | `public float CampaignSpeedBonusMultiplier { get; }` |
| `MaxHitPointsBonusMultiplier` | `public float MaxHitPointsBonusMultiplier { get; }` |
| `MaxSailHitPointsBonusMultiplier` | `public float MaxSailHitPointsBonusMultiplier { get; }` |
| `SeaWorthinessBonus` | `public int SeaWorthinessBonus { get; }` |
| `CrewShieldHitPointsBonusMultiplier` | `public float CrewShieldHitPointsBonusMultiplier { get; }` |
| `InventoryCapacityBonusMultiplier` | `public float InventoryCapacityBonusMultiplier { get; }` |
| `AdditionalAmmoBonus` | `public int AdditionalAmmoBonus { get; }` |
| `MaxOarPowerBonusMultiplier` | `public float MaxOarPowerBonusMultiplier { get; }` |
| `MaxOarForceBonusMultiplier` | `public float MaxOarForceBonusMultiplier { get; }` |
| `SailForceBonusMultiplier` | `public float SailForceBonusMultiplier { get; }` |
| `CrewMeleeDamageBonusMultiplier` | `public float CrewMeleeDamageBonusMultiplier { get; }` |
| `ArcherQuiverBonus` | `public int ArcherQuiverBonus { get; }` |
| `ThrowingWeaponStackBonus` | `public int ThrowingWeaponStackBonus { get; }` |
| `SailRotationSpeedBonusMultiplier` | `public float SailRotationSpeedBonusMultiplier { get; }` |
| `FurlUnfurlSpeedBonusMultiplier` | `public float FurlUnfurlSpeedBonusMultiplier { get; }` |
| `RudderSurfaceAreaBonusMultiplier` | `public float RudderSurfaceAreaBonusMultiplier { get; }` |
| `MaxRudderForceBonusMultiplier` | `public float MaxRudderForceBonusMultiplier { get; }` |
| `RequiredCulture2` | `public BasicCultureObject RequiredCulture2 { get; }` |
| `SiegeEngine` | `public SiegeEngineType SiegeEngine { get; }` |

## 主要方法

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** **用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 ShipUpgradePiece 实例
ShipUpgradePiece shipUpgradePiece = ...;
shipUpgradePiece.Deserialize(objectManager, node);
```

### DoesPieceMatchSlot
`public bool DoesPieceMatchSlot(ShipSlot slot)`

**用途 / Purpose:** **用途 / Purpose:** 返回piece match slot对当前对象是否成立的布尔结果。

```csharp
// 先通过子系统 API 拿到 ShipUpgradePiece 实例
ShipUpgradePiece shipUpgradePiece = ...;
var result = shipUpgradePiece.DoesPieceMatchSlot(slot);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ShipUpgradePiece shipUpgradePiece = ...;
shipUpgradePiece.Deserialize(objectManager, node);
```

## 参见

- [本区域目录](../)