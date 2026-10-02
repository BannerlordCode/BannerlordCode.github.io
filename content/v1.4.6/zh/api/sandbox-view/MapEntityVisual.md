---
title: "MapEntityVisual"
description: "MapEntityVisual：SandBox.View 的 public 类；公开成员 18 个（方法 11、属性 7、字段 0）。源文件 SandBox.View/Map/Visuals/MapEntityVisual.cs。"
---
# MapEntityVisual

**Namespace:** `SandBox.View.Map.Visuals`
**Module:** `SandBox.View`
**Type:** `public abstract class MapEntityVisual`
**File:** `SandBox.View/Map/Visuals/MapEntityVisual.cs`

## 概述

MapEntityVisual 位于 SandBox.View 模块，源文件 SandBox.View/Map/Visuals/MapEntityVisual.cs。它是一个 public 类（abstract），继承链为 MapEntityVisual。public/protected 成员共 18 个：11 方法、7 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapEntityVisual 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.Map.Visuals），继承链 MapEntityVisual。成员构成以方法为主（方法 11/18，属性 7/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Map/Visuals/MapEntityVisual.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapScreen` | `public MapScreen MapScreen` | 属性 |
| `InteractionPositionForPlayer` | `public abstract CampaignVec2 InteractionPositionForPlayer` | 属性 |
| `AttachedTo` | `public abstract MapEntityVisual AttachedTo` | 属性 |
| `IsMobileEntity` | `public virtual bool IsMobileEntity` | 属性 |
| `CircleLocalFrame` | `public virtual MatrixFrame CircleLocalFrame` | 属性 |
| `IsMainEntity` | `public virtual bool IsMainEntity` | 属性 |
| `BearingRotation` | `public virtual float BearingRotation` | 属性 |
| `OnMapClick` | `public abstract bool OnMapClick(bool followModifierUsed);` | 方法 |
| `OnHover` | `public abstract void OnHover();` | 方法 |
| `OnOpenEncyclopedia` | `public abstract void OnOpenEncyclopedia();` | 方法 |
| `IsVisibleOrFadingOut` | `public abstract bool IsVisibleOrFadingOut();` | 方法 |
| `GetVisualPosition` | `public abstract Vec3 GetVisualPosition();` | 方法 |
| `ReleaseResources` | `public virtual void ReleaseResources()` | 方法 |
| `OnHoverEnd` | `public virtual void OnHoverEnd()` | 方法 |
| `OnTrackAction` | `public virtual void OnTrackAction()` | 方法 |
| `IsEnemyOf` | `public virtual bool IsEnemyOf(IFaction faction)` | 方法 |
| `IsAllyOf` | `public virtual bool IsAllyOf(IFaction faction)` | 方法 |
| `IsInSameFaction` | `public virtual bool IsInSameFaction(IFaction faction)` | 方法 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MapEntityVisual](../MapEntityVisual__1)
- [同命名空间 MapWeatherVisual](../MapWeatherVisual)
- [同命名空间 MobilePartyVisual](../MobilePartyVisual)
- [同命名空间 SettlementVisual](../SettlementVisual)
