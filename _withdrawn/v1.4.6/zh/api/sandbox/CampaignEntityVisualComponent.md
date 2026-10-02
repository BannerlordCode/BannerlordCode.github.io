---
title: "CampaignEntityVisualComponent"
description: "CampaignEntityVisualComponent：SandBox.View.Map 的 public 类，继承 IEntityComponent；公开成员 10 个（方法 9、属性 1、字段 0）。canonical 桶 sandbox。源文件 SandBox.View/Map/CampaignEntityVisualComponent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CampaignEntityVisualComponent

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public class CampaignEntityVisualComponent : IEntityComponent`
**File:** `SandBox.View/Map/CampaignEntityVisualComponent.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

CampaignEntityVisualComponent 位于 SandBox.View 模块，源文件 SandBox.View/Map/CampaignEntityVisualComponent.cs。它是一个 public 类，实现/继承 IEntityComponent，继承链为 CampaignEntityVisualComponent → IEntityComponent。public/protected 成员共 10 个：9 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CampaignEntityVisualComponent 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.View.Map`，继承链 CampaignEntityVisualComponent → IEntityComponent。成员构成以方法为主（方法 9/10，属性 1/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Map/CampaignEntityVisualComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnVisualTick` | `public virtual void OnVisualTick(MapScreen screen, float realDt, float dt)` | 方法 |
| `OnMouseClick` | `public virtual bool OnMouseClick(MapEntityVisual visualOfSelectedEntity, Vec3 intersectionPoint, PathFaceRecord mouseOverFaceIndex, bool isDoubleClick)` | 方法 |
| `OnVisualIntersected` | `public virtual bool OnVisualIntersected(Ray mouseRay, UIntPtr[]intersectedEntityIDs, Intersection[]intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)` | 方法 |
| `OnFrameTick` | `public virtual void OnFrameTick(float dt)` | 方法 |
| `OnGameLoadFinished` | `public virtual void OnGameLoadFinished()` | 方法 |
| `OnTick` | `public virtual void OnTick(float realDt, float dt)` | 方法 |
| `ClearVisualMemory` | `public virtual void ClearVisualMemory()` | 方法 |
| `OnInitialize` | `protected virtual void OnInitialize()` | 方法 |
| `OnFinalize` | `protected virtual void OnFinalize()` | 方法 |
| `Priority` | `public virtual int Priority` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IEntityComponent](../../core-extra/IEntityComponent/)
- [同命名空间 BattleSimulationMapView](../BattleSimulationMapView/)
- [同命名空间 BlockadePositionScript](../BlockadePositionScript/)
- [同命名空间 DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider/)
- [同命名空间 HeirSelectionPopupView](../HeirSelectionPopupView/)
