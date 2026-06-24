<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementVisualManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementVisualManager

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public class SettlementVisualManager : EntityVisualManagerBase<PartyBase>`
**Base:** `EntityVisualManagerBase<PartyBase>`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map.Managers/SettlementVisualManager.cs`

## Overview

`SettlementVisualManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `SettlementVisualManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnTick
`public override void OnTick(float realDt, float dt)`

**Purpose:** Called when the `tick` event is raised.

### OnVisualIntersected
`public override bool OnVisualIntersected(Ray mouseRay, UIntPtr intersectedEntityIDs, Intersection intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)`

**Purpose:** Called when the `visual intersected` event is raised.

### OnFrameTick
`public override void OnFrameTick(float dt)`

**Purpose:** Called when the `frame tick` event is raised.

### OnMouseClick
`public override bool OnMouseClick(MapEntityVisual visualOfSelectedEntity, Vec3 intersectionPoint, PathFaceRecord mouseOverFaceIndex, bool isDoubleClick)`

**Purpose:** Called when the `mouse click` event is raised.

### GetVisualOfEntity
`public override MapEntityVisual<PartyBase> GetVisualOfEntity(PartyBase partyBase)`

**Purpose:** Gets the current value of `visual of entity`.

### GetSettlementVisual
`public SettlementVisual GetSettlementVisual(Settlement settlement)`

**Purpose:** Gets the current value of `settlement visual`.

## Usage Example

```csharp
var manager = SettlementVisualManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)