<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignEntityVisualComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignEntityVisualComponent

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class CampaignEntityVisualComponent : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `SandBox.View/Map/CampaignEntityVisualComponent.cs`

## Overview

`CampaignEntityVisualComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `CampaignEntityVisualComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnVisualTick
`public virtual void OnVisualTick(MapScreen screen, float realDt, float dt)`

**Purpose:** Called when the `visual tick` event is raised.

### OnMouseClick
`public virtual bool OnMouseClick(MapEntityVisual visualOfSelectedEntity, Vec3 intersectionPoint, PathFaceRecord mouseOverFaceIndex, bool isDoubleClick)`

**Purpose:** Called when the `mouse click` event is raised.

### OnVisualIntersected
`public virtual void OnVisualIntersected(Ray mouseRay, UIntPtr intersectedEntityIDs, Intersection intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, float closestDistanceSquared, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)`

**Purpose:** Called when the `visual intersected` event is raised.

### OnFrameTick
`public virtual void OnFrameTick(float dt)`

**Purpose:** Called when the `frame tick` event is raised.

### OnGameLoadFinished
`public virtual void OnGameLoadFinished()`

**Purpose:** Called when the `game load finished` event is raised.

### OnTick
`public virtual void OnTick(float realDt, float dt)`

**Purpose:** Called when the `tick` event is raised.

## Usage Example

```csharp
var component = agent.GetComponent<CampaignEntityVisualComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)