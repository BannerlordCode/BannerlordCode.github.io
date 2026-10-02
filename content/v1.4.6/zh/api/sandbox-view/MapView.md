---
title: "MapView"
description: "MapView：SandBox.View 的 public 类，继承 SandboxView；公开成员 22 个（方法 19、属性 2、字段 1）。源文件 SandBox.View/Map/MapView.cs。"
---
# MapView

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public abstract class MapView : SandboxView`
**File:** `SandBox.View/Map/MapView.cs`

## 概述

MapView 位于 SandBox.View 模块，源文件 SandBox.View/Map/MapView.cs。它是一个 public 类（abstract），实现/继承 SandboxView，继承链为 MapView → SandboxView。public/protected 成员共 22 个：19 方法、2 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapView 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.Map），继承链 MapView → SandboxView。成员构成以方法为主（方法 19/22，属性 2/22），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Map/MapView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapScreen` | `public MapScreen MapScreen` | 属性 |
| `MapState` | `public MapState MapState` | 属性 |
| `CreateLayout` | `protected internal virtual void CreateLayout()` | 方法 |
| `OnResume` | `protected internal virtual void OnResume()` | 方法 |
| `OnHourlyTick` | `protected internal virtual void OnHourlyTick()` | 方法 |
| `OnStartWait` | `protected internal virtual void OnStartWait(string waitMenuId)` | 方法 |
| `OnMainPartyEncounter` | `protected internal virtual void OnMainPartyEncounter()` | 方法 |
| `OnDispersePlayerLeadedArmy` | `protected internal virtual void OnDispersePlayerLeadedArmy()` | 方法 |
| `OnArmyLeft` | `protected internal virtual void OnArmyLeft()` | 方法 |
| `IsEscaped` | `protected internal virtual bool IsEscaped()` | 方法 |
| `IsOpeningEscapeMenuOnFocusChangeAllowed` | `protected internal virtual bool IsOpeningEscapeMenuOnFocusChangeAllowed()` | 方法 |
| `OnOverlayCreated` | `protected internal virtual void OnOverlayCreated()` | 方法 |
| `OnOverlayClosed` | `protected internal virtual void OnOverlayClosed()` | 方法 |
| `OnMenuModeTick` | `protected internal virtual void OnMenuModeTick(float dt)` | 方法 |
| `OnMapScreenUpdate` | `protected internal virtual void OnMapScreenUpdate(float dt)` | 方法 |
| `OnIdleTick` | `protected internal virtual void OnIdleTick(float dt)` | 方法 |
| `OnMapTerrainClick` | `protected internal virtual void OnMapTerrainClick()` | 方法 |
| `OnSiegeEngineClick` | `protected internal virtual void OnSiegeEngineClick(MatrixFrame siegeEngineFrame)` | 方法 |
| `OnMapConversationStart` | `protected internal virtual void OnMapConversationStart()` | 方法 |
| `OnMapConversationOver` | `protected internal virtual void OnMapConversationOver()` | 方法 |
| `GetTutorialContext` | `protected internal virtual TutorialContexts GetTutorialContext()` | 方法 |
| `ContextAlphaModifier` | `protected const float ContextAlphaModifier` | 字段 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 SandboxView](../SandboxView)
- [同命名空间 BattleSimulationMapView](../BattleSimulationMapView)
- [同命名空间 BlockadePositionScript](../BlockadePositionScript)
- [同命名空间 CampaignEntityVisualComponent](../CampaignEntityVisualComponent)
- [同命名空间 DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider)
