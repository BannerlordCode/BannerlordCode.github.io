---
title: "Ship"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Ship`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Ship

**Namespace:** TaleWorlds.CampaignSystem.Naval
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Ship : IShipOrigin, IRandomOwner`
**Base:** `IShipOrigin`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Naval/Ship.cs`

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
| `MainDeckCrewCapacity` | `public int MainDeckCrewCapacity { get; }` |
| `InventoryCapacity` | `public float InventoryCapacity { get; }` |
| `RudderSurfaceAreaFactor` | `public float RudderSurfaceAreaFactor { get; }` |
| `MaxRudderForceFactor` | `public float MaxRudderForceFactor { get; }` |

## Key Methods

### ChangeFigurehead
`public void ChangeFigurehead(Figurehead figurehead)`

**Purpose:** Handles logic related to `change figurehead`.

### GetPieceAtSlot
`public ShipUpgradePiece GetPieceAtSlot(string slotTag)`

**Purpose:** Gets the current value of `piece at slot`.

### EquipUpgradePiece
`public void EquipUpgradePiece(string slotTag, ShipUpgradePiece newUpgradePiece)`

**Purpose:** Handles logic related to `equip upgrade piece`.

### HasSlot
`public bool HasSlot(string slotTag)`

**Purpose:** Checks whether the current object has/contains `slot`.

### SetName
`public void SetName(TextObject name)`

**Purpose:** Sets the value or state of `name`.

### GetCampaignSpeed
`public float GetCampaignSpeed()`

**Purpose:** Gets the current value of `campaign speed`.

### GetSiegeEngines
`public MBList<SiegeEngineType> GetSiegeEngines()`

**Purpose:** Gets the current value of `siege engines`.

### UpdateVersionNo
`public void UpdateVersionNo()`

**Purpose:** Updates the state or data of `version no`.

### GetCombatFactor
`public float GetCombatFactor()`

**Purpose:** Gets the current value of `combat factor`.

### OnShipDamaged
`public void OnShipDamaged(float rawDamage, IShipOrigin rammingShip, out float modifiedDamage)`

**Purpose:** Called when the `ship damaged` event is raised.

### GetShipVisualSlotInfos
`public List<ShipVisualSlotInfo> GetShipVisualSlotInfos()`

**Purpose:** Gets the current value of `ship visual slot infos`.

### GetShipSlotAndPieceNames
`public List<ShipSlotAndPieceName> GetShipSlotAndPieceNames()`

**Purpose:** Gets the current value of `ship slot and piece names`.

### OnPlayerCharacterChanged
`public void OnPlayerCharacterChanged()`

**Purpose:** Called when the `player character changed` event is raised.

## Usage Example

```csharp
var value = new Ship();
value.ChangeFigurehead(figurehead);
```

## See Also

- [Complete Class Catalog](../catalog)