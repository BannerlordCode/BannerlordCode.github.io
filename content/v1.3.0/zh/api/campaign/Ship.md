---
title: "Ship"
description: "Ship 的自动生成类参考。"
---
# Ship

**Namespace:** TaleWorlds.CampaignSystem.Naval
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Ship : IShipOrigin, IRandomOwner`
**Base:** `IShipOrigin`
**File:** `TaleWorlds.CampaignSystem/Naval/Ship.cs`

## 概述

`Ship` 位于 `TaleWorlds.CampaignSystem.Naval`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Naval` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Figurehead` | `public Figurehead Figurehead { get; }` |
| `IsInvulnerable` | `public bool IsInvulnerable { get; }` |
| `IsTradeable` | `public bool IsTradeable { get; }` |
| `IsUsedByQuest` | `public bool IsUsedByQuest { get; }` |
| `RandomValue` | `public int RandomValue { get; }` |
| `ReservedUpgradePieces` | `public MBReadOnlyList<ShipUpgradePiece> ReservedUpgradePieces { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `VersionNo` | `public int VersionNo { get; }` |
| `Owner` | `public PartyBase Owner { get; set; }` |
| `HitPoints` | `public float HitPoints { get; set; }` |
| `MaxHitPoints` | `public float MaxHitPoints { get; }` |
| `SailHitPoints` | `public float SailHitPoints { get; set; }` |
| `TotalCrewCapacity` | `public int TotalCrewCapacity { get; }` |
| `MaxSailHitPoints` | `public float MaxSailHitPoints { get; }` |
| `SeaWorthiness` | `public int SeaWorthiness { get; }` |
| `Tierf` | `public float Tierf { get; }` |
| `FlagshipScore` | `public float FlagshipScore { get; }` |
| `MainDeckCrewCapacity` | `public int MainDeckCrewCapacity { get; }` |
| `InventoryCapacity` | `public float InventoryCapacity { get; }` |
| `SkeletalCrewCapacity` | `public int SkeletalCrewCapacity { get; }` |
| `CrewCapacityBonusFactor` | `public float CrewCapacityBonusFactor { get; }` |
| `ShipWeightFactor` | `public float ShipWeightFactor { get; }` |
| `ForwardDragFactor` | `public float ForwardDragFactor { get; }` |
| `CrewShieldHitPointsFactor` | `public float CrewShieldHitPointsFactor { get; }` |
| `AdditionalAmmo` | `public int AdditionalAmmo { get; }` |
| `MaxOarPowerFactor` | `public float MaxOarPowerFactor { get; }` |
| `MaxOarForceFactor` | `public float MaxOarForceFactor { get; }` |
| `SailForceFactor` | `public float SailForceFactor { get; }` |
| `CrewMeleeDamageFactor` | `public float CrewMeleeDamageFactor { get; }` |
| `AdditionalArcherQuivers` | `public int AdditionalArcherQuivers { get; }` |
| `AdditionalThrowingWeaponStack` | `public int AdditionalThrowingWeaponStack { get; }` |
| `SailRotationSpeedFactor` | `public float SailRotationSpeedFactor { get; }` |
| `FurlUnfurlSpeedFactor` | `public float FurlUnfurlSpeedFactor { get; }` |
| `RudderSurfaceAreaFactor` | `public float RudderSurfaceAreaFactor { get; }` |
| `MaxRudderForceFactor` | `public float MaxRudderForceFactor { get; }` |
| `CanEquipFigurehead` | `public bool CanEquipFigurehead { get; }` |
| `CampaignSpeedBonusFactor` | `public float CampaignSpeedBonusFactor { get; }` |

## 主要方法

### ChangeFigurehead
`public void ChangeFigurehead(Figurehead figurehead)`

**用途 / Purpose:** 处理与 「change figurehead」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Ship 实例
Ship ship = ...;
ship.ChangeFigurehead(figurehead);
```

### GetPieceAtSlot
`public ShipUpgradePiece GetPieceAtSlot(string slotTag)`

**用途 / Purpose:** 读取并返回当前对象中 「piece at slot」 的结果。

```csharp
// 先通过子系统 API 拿到 Ship 实例
Ship ship = ...;
var result = ship.GetPieceAtSlot("example");
```

### SetPieceAtSlot
`public void SetPieceAtSlot(string slotTag, ShipUpgradePiece upgradePiece)`

**用途 / Purpose:** 为 「piece at slot」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Ship 实例
Ship ship = ...;
ship.SetPieceAtSlot("example", upgradePiece);
```

### HasSlot
`public bool HasSlot(string slotTag)`

**用途 / Purpose:** 判断当前对象是否已经持有 「slot」。

```csharp
// 先通过子系统 API 拿到 Ship 实例
Ship ship = ...;
var result = ship.HasSlot("example");
```

### SetName
`public void SetName(TextObject name)`

**用途 / Purpose:** 为 「name」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Ship 实例
Ship ship = ...;
ship.SetName(name);
```

### GetCampaignSpeed
`public float GetCampaignSpeed()`

**用途 / Purpose:** 读取并返回当前对象中 「campaign speed」 的结果。

```csharp
// 先通过子系统 API 拿到 Ship 实例
Ship ship = ...;
var result = ship.GetCampaignSpeed();
```

### AddToAvailablePieces
`public void AddToAvailablePieces(ShipUpgradePiece upgradePiece)`

**用途 / Purpose:** 将 「to available pieces」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Ship 实例
Ship ship = ...;
ship.AddToAvailablePieces(upgradePiece);
```

### RemoveFromAvailablePieces
`public void RemoveFromAvailablePieces(ShipUpgradePiece upgradePiece)`

**用途 / Purpose:** 从当前容器或状态中移除 「from available pieces」。

```csharp
// 先通过子系统 API 拿到 Ship 实例
Ship ship = ...;
ship.RemoveFromAvailablePieces(upgradePiece);
```

### GetSiegeEngines
`public MBList<SiegeEngineType> GetSiegeEngines()`

**用途 / Purpose:** 读取并返回当前对象中 「siege engines」 的结果。

```csharp
// 先通过子系统 API 拿到 Ship 实例
Ship ship = ...;
var result = ship.GetSiegeEngines();
```

### ResetReservedUpgradePieces
`public void ResetReservedUpgradePieces()`

**用途 / Purpose:** 将 「reserved upgrade pieces」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Ship 实例
Ship ship = ...;
ship.ResetReservedUpgradePieces();
```

### UpdateVersionNo
`public void UpdateVersionNo()`

**用途 / Purpose:** 重新计算并更新 「version no」 的最新表示。

```csharp
// 先通过子系统 API 拿到 Ship 实例
Ship ship = ...;
ship.UpdateVersionNo();
```

### GetCombatFactor
`public float GetCombatFactor()`

**用途 / Purpose:** 读取并返回当前对象中 「combat factor」 的结果。

```csharp
// 先通过子系统 API 拿到 Ship 实例
Ship ship = ...;
var result = ship.GetCombatFactor();
```

### OnShipDamaged
`public void OnShipDamaged(float rawDamage, out float modifiedDamage)`

**用途 / Purpose:** 在 「ship damaged」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Ship 实例
Ship ship = ...;
ship.OnShipDamaged(0, modifiedDamage);
```

### GetShipVisualSlotInfos
`public List<ShipVisualSlotInfo> GetShipVisualSlotInfos()`

**用途 / Purpose:** 读取并返回当前对象中 「ship visual slot infos」 的结果。

```csharp
// 先通过子系统 API 拿到 Ship 实例
Ship ship = ...;
var result = ship.GetShipVisualSlotInfos();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Ship ship = ...;
ship.ChangeFigurehead(figurehead);
```

## 参见

- [本区域目录](../)