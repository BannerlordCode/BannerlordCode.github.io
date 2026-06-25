---
title: "Ship"
description: "Auto-generated class reference for Ship."
---
# Ship

**Namespace:** TaleWorlds.CampaignSystem.Naval
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Ship : IShipOrigin, IRandomOwner`
**Base:** `IShipOrigin`
**File:** `TaleWorlds.CampaignSystem/Naval/Ship.cs`

## Overview

`Ship` lives in `TaleWorlds.CampaignSystem.Naval` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Naval` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Figurehead` | `public Figurehead Figurehead { get; }` |
| `IsInvulnerable` | `public bool IsInvulnerable { get; }` |
| `IsTradeable` | `public bool IsTradeable { get; }` |
| `IsUsedByQuest` | `public bool IsUsedByQuest { get; }` |
| `RandomValue` | `public int RandomValue { get; }` |
| `CustomSailPatternId` | `public string CustomSailPatternId { get; set; }` |
| `UnlockedUpgradePieces` | `public MBReadOnlyList<ShipUpgradePiece> UnlockedUpgradePieces { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `VersionNo` | `public uint VersionNo { get; }` |
| `Owner` | `public PartyBase Owner { get; set; }` |
| `HitPoints` | `public float HitPoints { get; set; }` |
| `MaxHitPoints` | `public float MaxHitPoints { get; }` |
| `MaxFireHitPoints` | `public float MaxFireHitPoints { get; set; }` |
| `SailHitPoints` | `public float SailHitPoints { get; set; }` |
| `TotalCrewCapacity` | `public int TotalCrewCapacity { get; }` |
| `MaxSailHitPoints` | `public float MaxSailHitPoints { get; }` |
| `SeaWorthiness` | `public int SeaWorthiness { get; }` |
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

## Key Methods

### ChangeFigurehead
`public void ChangeFigurehead(Figurehead figurehead)`

**Purpose:** Executes the ChangeFigurehead logic.

```csharp
// Obtain an instance of Ship from the subsystem API first
Ship ship = ...;
ship.ChangeFigurehead(figurehead);
```

### GetPieceAtSlot
`public ShipUpgradePiece GetPieceAtSlot(string slotTag)`

**Purpose:** Reads and returns the piece at slot value held by the this instance.

```csharp
// Obtain an instance of Ship from the subsystem API first
Ship ship = ...;
var result = ship.GetPieceAtSlot("example");
```

### EquipUpgradePiece
`public void EquipUpgradePiece(string slotTag, ShipUpgradePiece newUpgradePiece)`

**Purpose:** Executes the EquipUpgradePiece logic.

```csharp
// Obtain an instance of Ship from the subsystem API first
Ship ship = ...;
ship.EquipUpgradePiece("example", newUpgradePiece);
```

### HasSlot
`public bool HasSlot(string slotTag)`

**Purpose:** Determines whether the this instance already holds slot.

```csharp
// Obtain an instance of Ship from the subsystem API first
Ship ship = ...;
var result = ship.HasSlot("example");
```

### SetName
`public void SetName(TextObject name)`

**Purpose:** Assigns a new value to name and updates the object's internal state.

```csharp
// Obtain an instance of Ship from the subsystem API first
Ship ship = ...;
ship.SetName(name);
```

### GetCampaignSpeed
`public float GetCampaignSpeed()`

**Purpose:** Reads and returns the campaign speed value held by the this instance.

```csharp
// Obtain an instance of Ship from the subsystem API first
Ship ship = ...;
var result = ship.GetCampaignSpeed();
```

### GetSiegeEngines
`public MBList<SiegeEngineType> GetSiegeEngines()`

**Purpose:** Reads and returns the siege engines value held by the this instance.

```csharp
// Obtain an instance of Ship from the subsystem API first
Ship ship = ...;
var result = ship.GetSiegeEngines();
```

### UpdateVersionNo
`public void UpdateVersionNo()`

**Purpose:** Recalculates and stores the latest representation of version no.

```csharp
// Obtain an instance of Ship from the subsystem API first
Ship ship = ...;
ship.UpdateVersionNo();
```

### GetCombatFactor
`public float GetCombatFactor()`

**Purpose:** Reads and returns the combat factor value held by the this instance.

```csharp
// Obtain an instance of Ship from the subsystem API first
Ship ship = ...;
var result = ship.GetCombatFactor();
```

### OnShipDamaged
`public void OnShipDamaged(float rawDamage, IShipOrigin rammingShip, out float modifiedDamage)`

**Purpose:** Invoked when the ship damaged event is raised.

```csharp
// Obtain an instance of Ship from the subsystem API first
Ship ship = ...;
ship.OnShipDamaged(0, rammingShip, modifiedDamage);
```

### GetShipVisualSlotInfos
`public List<ShipVisualSlotInfo> GetShipVisualSlotInfos()`

**Purpose:** Reads and returns the ship visual slot infos value held by the this instance.

```csharp
// Obtain an instance of Ship from the subsystem API first
Ship ship = ...;
var result = ship.GetShipVisualSlotInfos();
```

### GetShipSlotAndPieceNames
`public List<ShipSlotAndPieceName> GetShipSlotAndPieceNames()`

**Purpose:** Reads and returns the ship slot and piece names value held by the this instance.

```csharp
// Obtain an instance of Ship from the subsystem API first
Ship ship = ...;
var result = ship.GetShipSlotAndPieceNames();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Ship ship = ...;
ship.ChangeFigurehead(figurehead);
```

## See Also

- [Area Index](../)