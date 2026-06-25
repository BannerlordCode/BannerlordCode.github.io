---
title: "VisualShipFactory"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VisualShipFactory`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VisualShipFactory

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VisualShipFactory`
**Area:** mission-ext

## Overview

`VisualShipFactory` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### InitializeShipEntityCache
`public static void InitializeShipEntityCache(Scene scene)`

**Purpose:** Initializes the state, resources, or bindings for `ship entity cache`.

### DeregisterVisualShipCache
`public static void DeregisterVisualShipCache()`

**Purpose:** Handles logic related to `deregister visual ship cache`.

### CreateVisualShip
`public static GameEntity CreateVisualShip(string shipPrefab, Scene scene, List<ShipVisualSlotInfo> upgrades, int shipSeed, float hitPointRatio, uint sailColor1 = 4294967295U, uint sailColor2 = 4294967295U, bool createPhysics = false)`

**Purpose:** Creates a new `visual ship` instance or object.

### CreateVisualShipForCampaign
`public static GameEntity CreateVisualShipForCampaign(string shipPrefab, Scene scene, List<ShipVisualSlotInfo> upgrades, int shipSeed, string shipCustomSailPatternId, uint sailColor1 = 4294967295U, uint sailColor2 = 4294967295U)`

**Purpose:** Creates a new `visual ship for campaign` instance or object.

### RefreshUpgrades
`public static void RefreshUpgrades(WeakGameEntity shipEntity, List<ShipVisualSlotInfo> upgrades)`

**Purpose:** Refreshes the display or cache of `upgrades`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
VisualShipFactory.InitializeShipEntityCache(scene);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
