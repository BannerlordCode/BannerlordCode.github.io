<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VisualShipFactory`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VisualShipFactory

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VisualShipFactory`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/VisualShipFactory.cs`

## Overview

`VisualShipFactory` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### InitializeShipEntityCache
`public static void InitializeShipEntityCache(Scene scene)`

**Purpose:** Initializes the state, resources, or bindings for `ship entity cache`.

### CreateVisualShip
`public static GameEntity CreateVisualShip(string shipPrefab, Scene scene, List<ShipVisualSlotInfo> upgrades, int shipSeed, float hitPointRatio, uint sailColor1 = 4294967295U, uint sailColor2 = 4294967295U, bool createPhysics = false)`

**Purpose:** Creates a new `visual ship` instance or object.

### CreateVisualShipForCampaign
`public static GameEntity CreateVisualShipForCampaign(string shipPrefab, Scene scene, List<ShipVisualSlotInfo> upgrades, int shipSeed, uint sailColor1 = 4294967295U, uint sailColor2 = 4294967295U)`

**Purpose:** Creates a new `visual ship for campaign` instance or object.

### RefreshUpgrades
`public static void RefreshUpgrades(WeakGameEntity shipEntity, List<ShipVisualSlotInfo> upgrades)`

**Purpose:** Refreshes the display or cache of `upgrades`.

## Usage Example

```csharp
VisualShipFactory.InitializeShipEntityCache(scene);
```

## See Also

- [Complete Class Catalog](../catalog)