---
title: "TrackVisual"
description: "TrackVisual 的自动生成类参考。"
---
# TrackVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public class TrackVisual : MapEntityVisual<Track>`
**Base:** `MapEntityVisual<Track>`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map.Visuals/TrackVisual.cs`

## 概述

`TrackVisual` 位于 `SandBox.View.Map.Visuals`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map.Visuals` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetVisualPosition
`public override Vec3 GetVisualPosition()`

**用途 / Purpose:** 读取并返回当前对象中 「visual position」 的结果。

```csharp
// 先通过子系统 API 拿到 TrackVisual 实例
TrackVisual trackVisual = ...;
var result = trackVisual.GetVisualPosition();
```

### IsVisibleOrFadingOut
`public override bool IsVisibleOrFadingOut()`

**用途 / Purpose:** 判断当前对象是否处于 「visible or fading out」 状态或条件。

```csharp
// 先通过子系统 API 拿到 TrackVisual 实例
TrackVisual trackVisual = ...;
var result = trackVisual.IsVisibleOrFadingOut();
```

### OnHover
`public override void OnHover()`

**用途 / Purpose:** 在 「hover」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TrackVisual 实例
TrackVisual trackVisual = ...;
trackVisual.OnHover();
```

### OnMapClick
`public override bool OnMapClick(bool followModifierUsed)`

**用途 / Purpose:** 在 「map click」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TrackVisual 实例
TrackVisual trackVisual = ...;
var result = trackVisual.OnMapClick(false);
```

### OnOpenEncyclopedia
`public override void OnOpenEncyclopedia()`

**用途 / Purpose:** 在 「open encyclopedia」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TrackVisual 实例
TrackVisual trackVisual = ...;
trackVisual.OnOpenEncyclopedia();
```

### ReleaseResources
`public override void ReleaseResources()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TrackVisual 实例
TrackVisual trackVisual = ...;
trackVisual.ReleaseResources();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TrackVisual trackVisual = ...;
trackVisual.GetVisualPosition();
```

## 参见

- [本区域目录](../)