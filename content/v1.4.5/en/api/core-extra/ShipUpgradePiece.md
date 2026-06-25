---
title: "ShipUpgradePiece"
description: "Auto-generated class reference for ShipUpgradePiece."
---
# ShipUpgradePiece

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class ShipUpgradePiece : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ShipUpgradePiece.cs`

## Overview

`ShipUpgradePiece` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `LightValue` | `public int LightValue { get; }` |
| `MediumValue` | `public int MediumValue { get; }` |
| `HeavyValue` | `public int HeavyValue { get; }` |
| `SlotPrefabChildTagId` | `public string SlotPrefabChildTagId { get; }` |
| `NotMerchandise` | `public bool NotMerchandise { get; }` |
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

## Key Methods

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** **Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of ShipUpgradePiece from the subsystem API first
ShipUpgradePiece shipUpgradePiece = ...;
shipUpgradePiece.Deserialize(objectManager, node);
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of ShipUpgradePiece from the subsystem API first
ShipUpgradePiece shipUpgradePiece = ...;
var result = shipUpgradePiece.ToString();
```

### GetName
`public override TextObject GetName()`

**Purpose:** **Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of ShipUpgradePiece from the subsystem API first
ShipUpgradePiece shipUpgradePiece = ...;
var result = shipUpgradePiece.GetName();
```

### DoesPieceMatchSlot
`public bool DoesPieceMatchSlot(ShipSlot slot)`

**Purpose:** **Purpose:** Returns a boolean answer to whether piece match slot is true for the this instance.

```csharp
// Obtain an instance of ShipUpgradePiece from the subsystem API first
ShipUpgradePiece shipUpgradePiece = ...;
var result = shipUpgradePiece.DoesPieceMatchSlot(slot);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ShipUpgradePiece shipUpgradePiece = ...;
shipUpgradePiece.Deserialize(objectManager, node);
```

## See Also

- [Area Index](../)