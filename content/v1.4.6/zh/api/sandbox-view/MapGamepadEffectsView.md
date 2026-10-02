---
title: "MapGamepadEffectsView"
description: "MapGamepadEffectsView：SandBox.View 的 public 类，继承 MapView；公开成员 3 个（方法 3、属性 0、字段 0）。源文件 SandBox.View/Map/MapGamepadEffectsView.cs。"
---
# MapGamepadEffectsView

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public class MapGamepadEffectsView : MapView`
**File:** `SandBox.View/Map/MapGamepadEffectsView.cs`

## 概述

MapGamepadEffectsView 位于 SandBox.View 模块，源文件 SandBox.View/Map/MapGamepadEffectsView.cs。它是一个 public 类，实现/继承 MapView，继承链为 MapGamepadEffectsView → MapView → SandboxView。public/protected 成员共 3 个：3 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapGamepadEffectsView 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.Map），继承链 MapGamepadEffectsView → MapView → SandboxView。成员构成以方法为主（方法 3/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Map/MapGamepadEffectsView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateLayout` | `protected internal override void CreateLayout()` | 方法 |
| `OnFinalize` | `protected internal override void OnFinalize()` | 方法 |
| `OnFrameTick` | `protected internal override void OnFrameTick(float dt)` | 方法 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MapView](../MapView)
- [同命名空间 BattleSimulationMapView](../BattleSimulationMapView)
- [同命名空间 BlockadePositionScript](../BlockadePositionScript)
- [同命名空间 CampaignEntityVisualComponent](../CampaignEntityVisualComponent)
- [同命名空间 DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider)
