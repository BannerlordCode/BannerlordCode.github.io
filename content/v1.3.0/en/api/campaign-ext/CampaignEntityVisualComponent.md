---
title: "CampaignEntityVisualComponent"
description: "Auto-generated class reference for CampaignEntityVisualComponent."
---
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

**Purpose:** Invoked when the visual tick event is raised.

```csharp
// Obtain an instance of CampaignEntityVisualComponent from the subsystem API first
CampaignEntityVisualComponent campaignEntityVisualComponent = ...;
campaignEntityVisualComponent.OnVisualTick(screen, 0, 0);
```

### OnMouseClick
`public virtual bool OnMouseClick(MapEntityVisual visualOfSelectedEntity, Vec3 intersectionPoint, PathFaceRecord mouseOverFaceIndex, bool isDoubleClick)`

**Purpose:** Invoked when the mouse click event is raised.

```csharp
// Obtain an instance of CampaignEntityVisualComponent from the subsystem API first
CampaignEntityVisualComponent campaignEntityVisualComponent = ...;
var result = campaignEntityVisualComponent.OnMouseClick(visualOfSelectedEntity, intersectionPoint, mouseOverFaceIndex, false);
```

### OnVisualIntersected
`public virtual void OnVisualIntersected(Ray mouseRay, UIntPtr intersectedEntityIDs, Intersection intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, float closestDistanceSquared, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)`

**Purpose:** Invoked when the visual intersected event is raised.

```csharp
// Obtain an instance of CampaignEntityVisualComponent from the subsystem API first
CampaignEntityVisualComponent campaignEntityVisualComponent = ...;
campaignEntityVisualComponent.OnVisualIntersected(mouseRay, intersectedEntityIDs, intersectionInfos, 0, worldMouseNear, worldMouseFar, terrainIntersectionPoint, 0, hoveredVisual, selectedVisual);
```

### OnFrameTick
`public virtual void OnFrameTick(float dt)`

**Purpose:** Invoked when the frame tick event is raised.

```csharp
// Obtain an instance of CampaignEntityVisualComponent from the subsystem API first
CampaignEntityVisualComponent campaignEntityVisualComponent = ...;
campaignEntityVisualComponent.OnFrameTick(0);
```

### OnGameLoadFinished
`public virtual void OnGameLoadFinished()`

**Purpose:** Invoked when the game load finished event is raised.

```csharp
// Obtain an instance of CampaignEntityVisualComponent from the subsystem API first
CampaignEntityVisualComponent campaignEntityVisualComponent = ...;
campaignEntityVisualComponent.OnGameLoadFinished();
```

### OnTick
`public virtual void OnTick(float realDt, float dt)`

**Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of CampaignEntityVisualComponent from the subsystem API first
CampaignEntityVisualComponent campaignEntityVisualComponent = ...;
campaignEntityVisualComponent.OnTick(0, 0);
```

## Usage Example

```csharp
var component = agent.GetComponent<CampaignEntityVisualComponent>();
```

## See Also

- [Area Index](../)