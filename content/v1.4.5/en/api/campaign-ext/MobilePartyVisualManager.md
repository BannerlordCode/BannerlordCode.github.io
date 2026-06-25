---
title: "MobilePartyVisualManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MobilePartyVisualManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MobilePartyVisualManager

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public class MobilePartyVisualManager : EntityVisualManagerBase<PartyBase>`
**Base:** `EntityVisualManagerBase<PartyBase>`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map.Managers/MobilePartyVisualManager.cs`

## Overview

`MobilePartyVisualManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MobilePartyVisualManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnTick
`public override void OnTick(float realDt, float dt)`

**Purpose:** Called when the `tick` event is raised.

### ClearVisualMemory
`public override void ClearVisualMemory()`

**Purpose:** Handles logic related to `clear visual memory`.

### OnVisualTick
`public override void OnVisualTick(MapScreen screen, float realDt, float dt)`

**Purpose:** Called when the `visual tick` event is raised.

### OnVisualIntersected
`public override bool OnVisualIntersected(Ray mouseRay, UIntPtr intersectedEntityIDs, Intersection intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)`

**Purpose:** Called when the `visual intersected` event is raised.

### GetVisualOfEntity
`public override MapEntityVisual<PartyBase> GetVisualOfEntity(PartyBase partyBase)`

**Purpose:** Gets the current value of `visual of entity`.

### GetPartyVisual
`public MobilePartyVisual GetPartyVisual(PartyBase partyBase)`

**Purpose:** Gets the current value of `party visual`.

## Usage Example

```csharp
var manager = MobilePartyVisualManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)