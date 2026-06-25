---
title: "CampaignEntityVisualComponent"
description: "CampaignEntityVisualComponent 的自动生成类参考。"
---
# CampaignEntityVisualComponent

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class CampaignEntityVisualComponent : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `SandBox.View/Map/CampaignEntityVisualComponent.cs`

## 概述

`CampaignEntityVisualComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `CampaignEntityVisualComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnVisualTick
`public virtual void OnVisualTick(MapScreen screen, float realDt, float dt)`

**用途 / Purpose:** 在 visual tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEntityVisualComponent 实例
CampaignEntityVisualComponent campaignEntityVisualComponent = ...;
campaignEntityVisualComponent.OnVisualTick(screen, 0, 0);
```

### OnMouseClick
`public virtual bool OnMouseClick(MapEntityVisual visualOfSelectedEntity, Vec3 intersectionPoint, PathFaceRecord mouseOverFaceIndex, bool isDoubleClick)`

**用途 / Purpose:** 在 mouse click 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEntityVisualComponent 实例
CampaignEntityVisualComponent campaignEntityVisualComponent = ...;
var result = campaignEntityVisualComponent.OnMouseClick(visualOfSelectedEntity, intersectionPoint, mouseOverFaceIndex, false);
```

### OnVisualIntersected
`public virtual void OnVisualIntersected(Ray mouseRay, UIntPtr intersectedEntityIDs, Intersection intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, float closestDistanceSquared, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)`

**用途 / Purpose:** 在 visual intersected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEntityVisualComponent 实例
CampaignEntityVisualComponent campaignEntityVisualComponent = ...;
campaignEntityVisualComponent.OnVisualIntersected(mouseRay, intersectedEntityIDs, intersectionInfos, 0, worldMouseNear, worldMouseFar, terrainIntersectionPoint, 0, hoveredVisual, selectedVisual);
```

### OnFrameTick
`public virtual void OnFrameTick(float dt)`

**用途 / Purpose:** 在 frame tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEntityVisualComponent 实例
CampaignEntityVisualComponent campaignEntityVisualComponent = ...;
campaignEntityVisualComponent.OnFrameTick(0);
```

### OnGameLoadFinished
`public virtual void OnGameLoadFinished()`

**用途 / Purpose:** 在 game load finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEntityVisualComponent 实例
CampaignEntityVisualComponent campaignEntityVisualComponent = ...;
campaignEntityVisualComponent.OnGameLoadFinished();
```

### OnTick
`public virtual void OnTick(float realDt, float dt)`

**用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEntityVisualComponent 实例
CampaignEntityVisualComponent campaignEntityVisualComponent = ...;
campaignEntityVisualComponent.OnTick(0, 0);
```

## 使用示例

```csharp
var component = agent.GetComponent<CampaignEntityVisualComponent>();
```

## 参见

- [本区域目录](../)