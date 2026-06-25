---
title: "MapWeatherVisual"
description: "MapWeatherVisual 的自动生成类参考。"
---
# MapWeatherVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public class MapWeatherVisual : MapEntityVisual<WeatherNode>`
**Base:** `MapEntityVisual<WeatherNode>`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map.Visuals/MapWeatherVisual.cs`

## 概述

`MapWeatherVisual` 位于 `SandBox.View.Map.Visuals`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map.Visuals` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PrefabSpawnOffset` | `public Vec2 PrefabSpawnOffset { get; }` |
| `MaskPixelIndex` | `public int MaskPixelIndex { get; }` |

## 主要方法

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 MapWeatherVisual 实例
MapWeatherVisual mapWeatherVisual = ...;
var result = mapWeatherVisual.ToString();
```

### Tick
`public void Tick()`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MapWeatherVisual 实例
MapWeatherVisual mapWeatherVisual = ...;
mapWeatherVisual.Tick();
```

### OnMapClick
`public override bool OnMapClick(bool followModifierUsed)`

**用途 / Purpose:** **用途 / Purpose:** 在 map click 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapWeatherVisual 实例
MapWeatherVisual mapWeatherVisual = ...;
var result = mapWeatherVisual.OnMapClick(false);
```

### OnHover
`public override void OnHover()`

**用途 / Purpose:** **用途 / Purpose:** 在 hover 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapWeatherVisual 实例
MapWeatherVisual mapWeatherVisual = ...;
mapWeatherVisual.OnHover();
```

### OnOpenEncyclopedia
`public override void OnOpenEncyclopedia()`

**用途 / Purpose:** **用途 / Purpose:** 在 open encyclopedia 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapWeatherVisual 实例
MapWeatherVisual mapWeatherVisual = ...;
mapWeatherVisual.OnOpenEncyclopedia();
```

### IsVisibleOrFadingOut
`public override bool IsVisibleOrFadingOut()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 visible or fading out 状态或条件。

```csharp
// 先通过子系统 API 拿到 MapWeatherVisual 实例
MapWeatherVisual mapWeatherVisual = ...;
var result = mapWeatherVisual.IsVisibleOrFadingOut();
```

### GetVisualPosition
`public override Vec3 GetVisualPosition()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 visual position 的结果。

```csharp
// 先通过子系统 API 拿到 MapWeatherVisual 实例
MapWeatherVisual mapWeatherVisual = ...;
var result = mapWeatherVisual.GetVisualPosition();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapWeatherVisual mapWeatherVisual = ...;
mapWeatherVisual.ToString();
```

## 参见

- [本区域目录](../)