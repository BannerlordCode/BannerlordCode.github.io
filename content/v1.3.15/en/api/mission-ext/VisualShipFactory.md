---
title: "VisualShipFactory"
description: "Auto-generated class reference for VisualShipFactory."
---
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

**Purpose:** Prepares the resources, state, or bindings required by `ship entity cache`.

```csharp
// Static call; no instance required
VisualShipFactory.InitializeShipEntityCache(scene);
```

### DeregisterVisualShipCache
`public static void DeregisterVisualShipCache()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
VisualShipFactory.DeregisterVisualShipCache();
```

### CreateVisualShip
`public static GameEntity CreateVisualShip(string shipPrefab, Scene scene, List<ShipVisualSlotInfo> upgrades, int shipSeed, float hitPointRatio, uint sailColor1 = 4294967295U, uint sailColor2 = 4294967295U, bool createPhysics = false)`

**Purpose:** Constructs a new `visual ship` entity and returns it to the caller.

```csharp
// Static call; no instance required
VisualShipFactory.CreateVisualShip("example", scene, upgrades, 0, 0, 0, 0, false);
```

### CreateVisualShipForCampaign
`public static GameEntity CreateVisualShipForCampaign(string shipPrefab, Scene scene, List<ShipVisualSlotInfo> upgrades, int shipSeed, string shipCustomSailPatternId, uint sailColor1 = 4294967295U, uint sailColor2 = 4294967295U)`

**Purpose:** Constructs a new `visual ship for campaign` entity and returns it to the caller.

```csharp
// Static call; no instance required
VisualShipFactory.CreateVisualShipForCampaign("example", scene, upgrades, 0, "example", 0, 0);
```

### RefreshUpgrades
`public static void RefreshUpgrades(WeakGameEntity shipEntity, List<ShipVisualSlotInfo> upgrades)`

**Purpose:** Keeps the display or cache of `upgrades` in sync with the underlying state.

```csharp
// Static call; no instance required
VisualShipFactory.RefreshUpgrades(shipEntity, upgrades);
```

## Usage Example

```csharp
VisualShipFactory.InitializeShipEntityCache(scene);
```

## See Also

- [Area Index](../)