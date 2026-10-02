---
title: "SettlementVisualManager"
description: "SettlementVisualManager 的自动生成类参考。"
---
# SettlementVisualManager

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public class SettlementVisualManager : EntityVisualManagerBase<PartyBase> `
**Base:** EntityVisualManagerBase<PartyBase>
**Source:** SandBox.View/Map/Managers/SettlementVisualManager.cs

## 概述

`SettlementVisualManager` 的自动生成类参考页面。声明来自 `SandBox.View/Map/Managers/SettlementVisualManager.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnTick
`public override void OnTick(float realDt,float dt) `

### OnVisualIntersected
`public override bool OnVisualIntersected(Ray mouseRay,UIntPtr[] intersectedEntityIDs,Intersection[] intersectionInfos,int entityCount,Vec3 worldMouseNear,Vec3 worldMouseFar,Vec3 terrainIntersectionPoint,ref MapEntityVisual hoveredVisual,ref MapEntityVisual selectedVisual) `

### OnFrameTick
`public override void OnFrameTick(float dt) `

### OnMouseClick
`public override bool OnMouseClick(MapEntityVisual visualOfSelectedEntity,Vec3 intersectionPoint,PathFaceRecord mouseOverFaceIndex,bool isDoubleClick) `

### GetVisualOfEntity
`public override MapEntityVisual<PartyBase> GetVisualOfEntity(PartyBase partyBase) `

### GetSettlementVisual
`public SettlementVisual GetSettlementVisual(Settlement settlement) `

### OnInitialize
`protected override void OnInitialize() `

### OnFinalize
`protected override void OnFinalize() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
