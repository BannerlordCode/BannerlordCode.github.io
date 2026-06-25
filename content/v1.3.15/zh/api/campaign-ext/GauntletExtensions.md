---
title: "GauntletExtensions"
description: "GauntletExtensions 的自动生成类参考。"
---
# GauntletExtensions

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class GauntletExtensions`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletExtensions.cs`

## 概述

`GauntletExtensions` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetGlobalAlphaRecursively
`public static void SetGlobalAlphaRecursively(this Widget widget, float alphaFactor)`

**用途 / Purpose:** 为 global alpha recursively 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GauntletExtensions.SetGlobalAlphaRecursively(widget, 0);
```

### SetAlpha
`public static void SetAlpha(this Widget widget, float alphaFactor)`

**用途 / Purpose:** 为 alpha 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GauntletExtensions.SetAlpha(widget, 0);
```

### RegisterBrushStatesOfWidget
`public static void RegisterBrushStatesOfWidget(this Widget widget)`

**用途 / Purpose:** 将brush states of widget注册到当前系统，以便后续监听或分发。

```csharp
// 静态调用，不需要实例
GauntletExtensions.RegisterBrushStatesOfWidget(widget);
```

### GetFullIDPath
`public static string GetFullIDPath(this Widget widget)`

**用途 / Purpose:** 读取并返回当前对象中 full i d path 的结果。

```csharp
// 静态调用，不需要实例
GauntletExtensions.GetFullIDPath(widget);
```

### ApplyActionForThisAndAllChildren
`public static void ApplyActionForThisAndAllChildren(this Widget widget, Action<Widget> action)`

**用途 / Purpose:** 将 action for this and all children 的效果应用到当前对象。

```csharp
// 静态调用，不需要实例
GauntletExtensions.ApplyActionForThisAndAllChildren(widget, action);
```

## 使用示例

```csharp
GauntletExtensions.SetGlobalAlphaRecursively(widget, 0);
```

## 参见

- [本区域目录](../)