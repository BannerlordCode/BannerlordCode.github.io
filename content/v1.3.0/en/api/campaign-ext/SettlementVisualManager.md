---
title: "SettlementVisualManager"
description: "Auto-generated class reference for SettlementVisualManager."
---
# SettlementVisualManager

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public class SettlementVisualManager : EntityVisualManagerBase<PartyBase>`
**Base:** `EntityVisualManagerBase<PartyBase>`
**File:** `SandBox.View/Map/Managers/SettlementVisualManager.cs`

## Overview

`SettlementVisualManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `SettlementVisualManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static SettlementVisualManager Current { get; }` |

## Key Methods

### OnTick
`public override void OnTick(float realDt, float dt)`

**Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of SettlementVisualManager from the subsystem API first
SettlementVisualManager settlementVisualManager = ...;
settlementVisualManager.OnTick(0, 0);
```

### OnVisualIntersected
`public override void OnVisualIntersected(Ray mouseRay, UIntPtr intersectedEntityIDs, Intersection intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, float closestDistanceSquared, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)`

**Purpose:** Invoked when the visual intersected event is raised.

```csharp
// Obtain an instance of SettlementVisualManager from the subsystem API first
SettlementVisualManager settlementVisualManager = ...;
settlementVisualManager.OnVisualIntersected(mouseRay, intersectedEntityIDs, intersectionInfos, 0, worldMouseNear, worldMouseFar, terrainIntersectionPoint, 0, hoveredVisual, selectedVisual);
```

### OnFrameTick
`public override void OnFrameTick(float dt)`

**Purpose:** Invoked when the frame tick event is raised.

```csharp
// Obtain an instance of SettlementVisualManager from the subsystem API first
SettlementVisualManager settlementVisualManager = ...;
settlementVisualManager.OnFrameTick(0);
```

### OnMouseClick
`public override bool OnMouseClick(MapEntityVisual visualOfSelectedEntity, Vec3 intersectionPoint, PathFaceRecord mouseOverFaceIndex, bool isDoubleClick)`

**Purpose:** Invoked when the mouse click event is raised.

```csharp
// Obtain an instance of SettlementVisualManager from the subsystem API first
SettlementVisualManager settlementVisualManager = ...;
var result = settlementVisualManager.OnMouseClick(visualOfSelectedEntity, intersectionPoint, mouseOverFaceIndex, false);
```

### GetVisualOfEntity
`public override MapEntityVisual<PartyBase> GetVisualOfEntity(PartyBase partyBase)`

**Purpose:** Reads and returns the visual of entity value held by the this instance.

```csharp
// Obtain an instance of SettlementVisualManager from the subsystem API first
SettlementVisualManager settlementVisualManager = ...;
var result = settlementVisualManager.GetVisualOfEntity(partyBase);
```

### GetSettlementVisual
`public SettlementVisual GetSettlementVisual(Settlement settlement)`

**Purpose:** Reads and returns the settlement visual value held by the this instance.

```csharp
// Obtain an instance of SettlementVisualManager from the subsystem API first
SettlementVisualManager settlementVisualManager = ...;
var result = settlementVisualManager.GetSettlementVisual(settlement);
```

## Usage Example

```csharp
var manager = SettlementVisualManager.Current;
```

## See Also

- [Area Index](../)