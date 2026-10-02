---
title: "GauntletMapEventVisual"
description: "GauntletMapEventVisual：SandBox.GauntletUI 的 public 类，继承 IMapEventVisual；公开成员 7 个（方法 3、属性 3、字段 0）。源文件 SandBox.GauntletUI/Map/GauntletMapEventVisual.cs。"
---
# GauntletMapEventVisual

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapEventVisual : IMapEventVisual`
**File:** `SandBox.GauntletUI/Map/GauntletMapEventVisual.cs`

## 概述

GauntletMapEventVisual 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/Map/GauntletMapEventVisual.cs。它是一个 public 类，实现/继承 IMapEventVisual，继承链为 GauntletMapEventVisual → IMapEventVisual。public/protected 成员共 7 个：3 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletMapEventVisual 是 SandBox.GauntletUI 的顶层类型，命名空间与模块目录不同（SandBox.GauntletUI.Map），继承链 GauntletMapEventVisual → IMapEventVisual。成员构成以方法为主（方法 3/7，属性 3/7），对外主要以操作入口暴露。继承链上的 IMapEventVisual 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/Map/GauntletMapEventVisual.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapEvent` | `public MapEvent MapEvent` | 属性 |
| `WorldPosition` | `public Vec2 WorldPosition` | 属性 |
| `IsVisible` | `public bool IsVisible` | 属性 |
| `GauntletMapEventVisual` | `public GauntletMapEventVisual(MapEvent mapEvent, Action<GauntletMapEventVisual>onInitialized, Action<GauntletMapEventVisual>onVisibilityChanged, Action<GauntletMapEventVisual>onDeactivate)` | 构造函数 |
| `Initialize` | `public void Initialize(CampaignVec2 position, bool isVisible)` | 方法 |
| `OnMapEventEnd` | `public void OnMapEventEnd()` | 方法 |
| `SetVisibility` | `public void SetVisibility(bool isVisible)` | 方法 |

## 参见

- [↑ sandbox-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView)
- [同命名空间 GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer)
- [同命名空间 GauntletMapBarView](../GauntletMapBarView)
- [同命名空间 GauntletMapBasicView](../GauntletMapBasicView)
