---
title: "ScreenFadeController"
description: "ScreenFadeController 的自动生成类参考。"
---
# ScreenFadeController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ScreenFadeController`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ScreenFadeController.cs`

## 概述

`ScreenFadeController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `ScreenFadeController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsFadeActive` | `public static bool IsFadeActive { get; }` |
| `IsFadingOut` | `public static bool IsFadingOut { get; }` |
| `IsFadingIn` | `public static bool IsFadingIn { get; }` |
| `IsFadedOut` | `public static bool IsFadedOut { get; }` |

## 主要方法

### RegisterHandler
`public static void RegisterHandler(IScreenFadeHandler handler)`

**用途 / Purpose:** 将「handler」注册到当前系统，以便后续监听或分发。

```csharp
// 静态调用，不需要实例
ScreenFadeController.RegisterHandler(handler);
```

### BeginFadeOutAndIn
`public static void BeginFadeOutAndIn(float fadeOutDuration = 0.5f, float blackOutDuration = 0.5f, float fadeInDuration = 0.5f)`

**用途 / Purpose:** 处理与 「begin fade out and in」 相关的逻辑。

```csharp
// 静态调用，不需要实例
ScreenFadeController.BeginFadeOutAndIn(0, 0, 0);
```

### BeginFadeOut
`public static void BeginFadeOut(float fadeOutDuration = 0.5f)`

**用途 / Purpose:** 处理与 「begin fade out」 相关的逻辑。

```csharp
// 静态调用，不需要实例
ScreenFadeController.BeginFadeOut(0);
```

### BeginFadeIn
`public static void BeginFadeIn(float fadeInDuration = 0.5f)`

**用途 / Purpose:** 处理与 「begin fade in」 相关的逻辑。

```csharp
// 静态调用，不需要实例
ScreenFadeController.BeginFadeIn(0);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<ScreenFadeController>();
```

## 参见

- [本区域目录](../)