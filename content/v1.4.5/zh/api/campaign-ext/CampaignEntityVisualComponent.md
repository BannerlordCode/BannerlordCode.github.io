---
title: "CampaignEntityVisualComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignEntityVisualComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignEntityVisualComponent

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class CampaignEntityVisualComponent : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map/CampaignEntityVisualComponent.cs`

## 概述

`CampaignEntityVisualComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `CampaignEntityVisualComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnVisualTick
`public virtual void OnVisualTick(MapScreen screen, float realDt, float dt)`

**用途 / Purpose:** 当 `visual tick` 事件触发时调用此方法。

### OnMouseClick
`public virtual bool OnMouseClick(MapEntityVisual visualOfSelectedEntity, Vec3 intersectionPoint, PathFaceRecord mouseOverFaceIndex, bool isDoubleClick)`

**用途 / Purpose:** 当 `mouse click` 事件触发时调用此方法。

### OnVisualIntersected
`public virtual bool OnVisualIntersected(Ray mouseRay, UIntPtr intersectedEntityIDs, Intersection intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)`

**用途 / Purpose:** 当 `visual intersected` 事件触发时调用此方法。

### OnFrameTick
`public virtual void OnFrameTick(float dt)`

**用途 / Purpose:** 当 `frame tick` 事件触发时调用此方法。

### OnGameLoadFinished
`public virtual void OnGameLoadFinished()`

**用途 / Purpose:** 当 `game load finished` 事件触发时调用此方法。

### OnTick
`public virtual void OnTick(float realDt, float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### ClearVisualMemory
`public virtual void ClearVisualMemory()`

**用途 / Purpose:** 处理 `clear visual memory` 相关逻辑。

## 使用示例

```csharp
var component = agent.GetComponent<CampaignEntityVisualComponent>();
```

## 参见

- [完整类目录](../catalog)