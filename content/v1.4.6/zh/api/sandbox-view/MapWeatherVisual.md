---
title: "MapWeatherVisual"
description: "MapWeatherVisual：SandBox.View 的 public 类，继承 MapEntityVisual<WeatherNode>；公开成员 13 个（方法 7、属性 5、字段 0）。源文件 SandBox.View/Map/Visuals/MapWeatherVisual.cs。"
---
# MapWeatherVisual

**Namespace:** `SandBox.View.Map.Visuals`
**Module:** `SandBox.View`
**Type:** `public class MapWeatherVisual : MapEntityVisual<WeatherNode>`
**File:** `SandBox.View/Map/Visuals/MapWeatherVisual.cs`

## 概述

MapWeatherVisual 位于 SandBox.View 模块，源文件 SandBox.View/Map/Visuals/MapWeatherVisual.cs。它是一个 public 类，实现/继承 MapEntityVisual<WeatherNode>，继承链为 MapWeatherVisual → MapEntityVisual。public/protected 成员共 13 个：7 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapWeatherVisual 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.Map.Visuals），继承链 MapWeatherVisual → MapEntityVisual。成员构成以方法为主（方法 7/13，属性 5/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Map/Visuals/MapWeatherVisual.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Position` | `public Vec2 Position` | 属性 |
| `PrefabSpawnOffset` | `public Vec2 PrefabSpawnOffset` | 属性 |
| `MaskPixelIndex` | `public int MaskPixelIndex` | 属性 |
| `InteractionPositionForPlayer` | `public override CampaignVec2 InteractionPositionForPlayer` | 属性 |
| `AttachedTo` | `public override MapEntityVisual AttachedTo` | 属性 |
| `ToString` | `public override string ToString()` | 方法 |
| `MapWeatherVisual` | `public MapWeatherVisual(WeatherNode weatherNode) : base(weatherNode)` | 构造函数 |
| `Tick` | `public void Tick()` | 方法 |
| `OnMapClick` | `public override bool OnMapClick(bool followModifierUsed)` | 方法 |
| `OnHover` | `public override void OnHover()` | 方法 |
| `OnOpenEncyclopedia` | `public override void OnOpenEncyclopedia()` | 方法 |
| `IsVisibleOrFadingOut` | `public override bool IsVisibleOrFadingOut()` | 方法 |
| `GetVisualPosition` | `public override Vec3 GetVisualPosition()` | 方法 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MapEntityVisual](../MapEntityVisual)
- [同命名空间 MapEntityVisual](../MapEntityVisual)
- [同命名空间 MapEntityVisual](../MapEntityVisual__1)
- [同命名空间 MobilePartyVisual](../MobilePartyVisual)
- [同命名空间 SettlementVisual](../SettlementVisual)
