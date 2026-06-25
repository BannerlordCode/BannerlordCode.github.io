---
title: "Screen"
description: "Screen 的自动生成类参考。"
---
# Screen

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class Screen`
**Base:** 无
**File:** `TaleWorlds.Engine/Screen.cs`

## 概述

`Screen` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RealScreenResolutionWidth` | `public static float RealScreenResolutionWidth { get; }` |
| `RealScreenResolutionHeight` | `public static float RealScreenResolutionHeight { get; }` |
| `RealScreenResolution` | `public static Vec2 RealScreenResolution { get; }` |
| `AspectRatio` | `public static float AspectRatio { get; }` |
| `DesktopResolution` | `public static Vec2 DesktopResolution { get; }` |
| `ScreenScale` | `public static Vec2 ScreenScale { get; }` |

## 主要方法

### GetMouseVisible
`public static bool GetMouseVisible()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mouse visible 的结果。

```csharp
// 静态调用，不需要实例
Screen.GetMouseVisible();
```

## 使用示例

```csharp
Screen.GetMouseVisible();
```

## 参见

- [本区域目录](../)