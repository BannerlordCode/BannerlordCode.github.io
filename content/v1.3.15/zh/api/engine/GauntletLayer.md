---
title: "GauntletLayer"
description: "GauntletLayer 的自动生成类参考。"
---
# GauntletLayer

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine
**Type:** `public class GauntletLayer : ScreenLayer`
**Base:** `ScreenLayer`
**File:** `TaleWorlds.Engine.GauntletUI/GauntletLayer.cs`

## 概述

`GauntletLayer` 位于 `TaleWorlds.Engine.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GamepadNavigationContext` | `public IGamepadNavigationContext GamepadNavigationContext { get; }` |
| `UIContext` | `public UIContext UIContext { get; }` |

## 主要方法

### OnResourceRefreshBegin
`public void OnResourceRefreshBegin(out List<GauntletMovieIdentifier> previouslyLoadedMovies)`

**用途 / Purpose:** 在 「resource refresh begin」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletLayer 实例
GauntletLayer gauntletLayer = ...;
gauntletLayer.OnResourceRefreshBegin(previouslyLoadedMovies);
```

### OnResourceRefreshEnd
`public void OnResourceRefreshEnd(List<GauntletMovieIdentifier> previouslyLoadedMovies)`

**用途 / Purpose:** 在 「resource refresh end」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletLayer 实例
GauntletLayer gauntletLayer = ...;
gauntletLayer.OnResourceRefreshEnd(previouslyLoadedMovies);
```

### GetMovieIdentifier
`public GauntletMovieIdentifier GetMovieIdentifier(string movieName)`

**用途 / Purpose:** 读取并返回当前对象中 「movie identifier」 的结果。

```csharp
// 先通过子系统 API 拿到 GauntletLayer 实例
GauntletLayer gauntletLayer = ...;
var result = gauntletLayer.GetMovieIdentifier("example");
```

### LoadMovie
`public GauntletMovieIdentifier LoadMovie(string movieName, ViewModel dataSource)`

**用途 / Purpose:** 从持久化存储或流中读取 「movie」。

```csharp
// 先通过子系统 API 拿到 GauntletLayer 实例
GauntletLayer gauntletLayer = ...;
var result = gauntletLayer.LoadMovie("example", dataSource);
```

### ReleaseMovie
`public void ReleaseMovie(GauntletMovieIdentifier identifier)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GauntletLayer 实例
GauntletLayer gauntletLayer = ...;
gauntletLayer.ReleaseMovie(identifier);
```

### ProcessEvents
`public override void ProcessEvents()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GauntletLayer 实例
GauntletLayer gauntletLayer = ...;
gauntletLayer.ProcessEvents();
```

### HitTest
`public override bool HitTest(Vector2 position)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GauntletLayer 实例
GauntletLayer gauntletLayer = ...;
var result = gauntletLayer.HitTest(position);
```

### HitTest
`public override bool HitTest()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GauntletLayer 实例
GauntletLayer gauntletLayer = ...;
var result = gauntletLayer.HitTest();
```

### FocusTest
`public override bool FocusTest()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GauntletLayer 实例
GauntletLayer gauntletLayer = ...;
var result = gauntletLayer.FocusTest();
```

### IsFocusedOnInput
`public override bool IsFocusedOnInput()`

**用途 / Purpose:** 判断当前对象是否处于 「focused on input」 状态或条件。

```csharp
// 先通过子系统 API 拿到 GauntletLayer 实例
GauntletLayer gauntletLayer = ...;
var result = gauntletLayer.IsFocusedOnInput();
```

### OnOnScreenKeyboardDone
`public override void OnOnScreenKeyboardDone(string inputText)`

**用途 / Purpose:** 在 「on screen keyboard done」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletLayer 实例
GauntletLayer gauntletLayer = ...;
gauntletLayer.OnOnScreenKeyboardDone("example");
```

### OnOnScreenKeyboardCanceled
`public override void OnOnScreenKeyboardCanceled()`

**用途 / Purpose:** 在 「on screen keyboard canceled」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletLayer 实例
GauntletLayer gauntletLayer = ...;
gauntletLayer.OnOnScreenKeyboardCanceled();
```

### UpdateLayout
`public override void UpdateLayout()`

**用途 / Purpose:** 重新计算并更新 「layout」 的最新表示。

```csharp
// 先通过子系统 API 拿到 GauntletLayer 实例
GauntletLayer gauntletLayer = ...;
gauntletLayer.UpdateLayout();
```

### GetIsAvailableForGamepadNavigation
`public bool GetIsAvailableForGamepadNavigation()`

**用途 / Purpose:** 读取并返回当前对象中 「is available for gamepad navigation」 的结果。

```csharp
// 先通过子系统 API 拿到 GauntletLayer 实例
GauntletLayer gauntletLayer = ...;
var result = gauntletLayer.GetIsAvailableForGamepadNavigation();
```

### DrawDebugInfo
`public override void DrawDebugInfo()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GauntletLayer 实例
GauntletLayer gauntletLayer = ...;
gauntletLayer.DrawDebugInfo();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GauntletLayer gauntletLayer = ...;
gauntletLayer.OnResourceRefreshBegin(previouslyLoadedMovies);
```

## 参见

- [本区域目录](../)