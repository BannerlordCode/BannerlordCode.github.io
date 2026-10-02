---
title: "CampaignEntityVisualComponent"
description: "CampaignEntityVisualComponent 的自动生成类参考。"
---
# CampaignEntityVisualComponent

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class CampaignEntityVisualComponent : IEntityComponent `
**Base:** IEntityComponent
**Source:** SandBox.View/Map/CampaignEntityVisualComponent.cs

## 概述

`CampaignEntityVisualComponent` 的自动生成类参考页面。声明来自 `SandBox.View/Map/CampaignEntityVisualComponent.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnVisualTick
`public virtual void OnVisualTick(MapScreen screen,float realDt,float dt) `

### OnMouseClick
`public virtual bool OnMouseClick(MapEntityVisual visualOfSelectedEntity,Vec3 intersectionPoint,PathFaceRecord mouseOverFaceIndex,bool isDoubleClick) `

### OnVisualIntersected
`public virtual bool OnVisualIntersected(Ray mouseRay,UIntPtr[] intersectedEntityIDs,Intersection[] intersectionInfos,int entityCount,Vec3 worldMouseNear,Vec3 worldMouseFar,Vec3 terrainIntersectionPoint,ref MapEntityVisual hoveredVisual,ref MapEntityVisual selectedVisual) `

### OnFrameTick
`public virtual void OnFrameTick(float dt) `

### OnGameLoadFinished
`public virtual void OnGameLoadFinished() `

### OnTick
`public virtual void OnTick(float realDt,float dt) `

### ClearVisualMemory
`public virtual void ClearVisualMemory() `

### OnInitialize
`protected virtual void OnInitialize() `

### OnFinalize
`protected virtual void OnFinalize() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
