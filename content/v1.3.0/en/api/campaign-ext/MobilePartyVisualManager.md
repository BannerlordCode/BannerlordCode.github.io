---
title: "MobilePartyVisualManager"
description: "Auto-generated class reference for MobilePartyVisualManager."
---
# MobilePartyVisualManager

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public class MobilePartyVisualManager : EntityVisualManagerBase<PartyBase>`
**Base:** `EntityVisualManagerBase<PartyBase>`
**File:** `SandBox.View/Map/Managers/MobilePartyVisualManager.cs`

## Overview

`MobilePartyVisualManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MobilePartyVisualManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static MobilePartyVisualManager Current { get; }` |

## Key Methods

### OnTick
`public override void OnTick(float realDt, float dt)`

**Purpose:** Invoked when the `tick` event is raised.

```csharp
// Obtain an instance of MobilePartyVisualManager from the subsystem API first
MobilePartyVisualManager mobilePartyVisualManager = ...;
mobilePartyVisualManager.OnTick(0, 0);
```

### OnVisualTick
`public override void OnVisualTick(MapScreen screen, float realDt, float dt)`

**Purpose:** Invoked when the `visual tick` event is raised.

```csharp
// Obtain an instance of MobilePartyVisualManager from the subsystem API first
MobilePartyVisualManager mobilePartyVisualManager = ...;
mobilePartyVisualManager.OnVisualTick(screen, 0, 0);
```

### OnVisualIntersected
`public override void OnVisualIntersected(Ray mouseRay, UIntPtr intersectedEntityIDs, Intersection intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, float closestDistanceSquared, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)`

**Purpose:** Invoked when the `visual intersected` event is raised.

```csharp
// Obtain an instance of MobilePartyVisualManager from the subsystem API first
MobilePartyVisualManager mobilePartyVisualManager = ...;
mobilePartyVisualManager.OnVisualIntersected(mouseRay, intersectedEntityIDs, intersectionInfos, 0, worldMouseNear, worldMouseFar, terrainIntersectionPoint, 0, hoveredVisual, selectedVisual);
```

### GetVisualOfEntity
`public override MapEntityVisual<PartyBase> GetVisualOfEntity(PartyBase partyBase)`

**Purpose:** Reads and returns the `visual of entity` value held by the current object.

```csharp
// Obtain an instance of MobilePartyVisualManager from the subsystem API first
MobilePartyVisualManager mobilePartyVisualManager = ...;
var result = mobilePartyVisualManager.GetVisualOfEntity(partyBase);
```

### GetPartyVisual
`public MobilePartyVisual GetPartyVisual(PartyBase partyBase)`

**Purpose:** Reads and returns the `party visual` value held by the current object.

```csharp
// Obtain an instance of MobilePartyVisualManager from the subsystem API first
MobilePartyVisualManager mobilePartyVisualManager = ...;
var result = mobilePartyVisualManager.GetPartyVisual(partyBase);
```

## Usage Example

```csharp
var manager = MobilePartyVisualManager.Current;
```

## See Also

- [Area Index](../)