---
title: "BrushAnimation"
description: "BrushAnimation 的自动生成类参考。"
---
# BrushAnimation

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushAnimation`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimation.cs`

## 概述

`BrushAnimation` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `Duration` | `public float Duration { get; set; }` |
| `Loop` | `public bool Loop { get; set; }` |
| `InterpolationType` | `public AnimationInterpolation.Type InterpolationType { get; set; }` |
| `InterpolationFunction` | `public AnimationInterpolation.Function InterpolationFunction { get; set; }` |
| `StyleAnimation` | `public BrushLayerAnimation StyleAnimation { get; set; }` |

## 主要方法

### AddAnimationProperty
`public void AddAnimationProperty(BrushAnimationProperty property)`

**用途 / Purpose:** 将 animation property 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 BrushAnimation 实例
BrushAnimation brushAnimation = ...;
brushAnimation.AddAnimationProperty(property);
```

### RemoveAnimationProperty
`public void RemoveAnimationProperty(BrushAnimationProperty property)`

**用途 / Purpose:** 从当前容器或状态中移除 animation property。

```csharp
// 先通过子系统 API 拿到 BrushAnimation 实例
BrushAnimation brushAnimation = ...;
brushAnimation.RemoveAnimationProperty(property);
```

### FillFrom
`public void FillFrom(BrushAnimation animation)`

**用途 / Purpose:** 调用 FillFrom 对应的操作。

```csharp
// 先通过子系统 API 拿到 BrushAnimation 实例
BrushAnimation brushAnimation = ...;
brushAnimation.FillFrom(animation);
```

### GetLayerAnimation
`public BrushLayerAnimation GetLayerAnimation(string name)`

**用途 / Purpose:** 读取并返回当前对象中 layer animation 的结果。

```csharp
// 先通过子系统 API 拿到 BrushAnimation 实例
BrushAnimation brushAnimation = ...;
var result = brushAnimation.GetLayerAnimation("example");
```

### GetLayerAnimations
`public IEnumerable<BrushLayerAnimation> GetLayerAnimations()`

**用途 / Purpose:** 读取并返回当前对象中 layer animations 的结果。

```csharp
// 先通过子系统 API 拿到 BrushAnimation 实例
BrushAnimation brushAnimation = ...;
var result = brushAnimation.GetLayerAnimations();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BrushAnimation brushAnimation = ...;
brushAnimation.AddAnimationProperty(property);
```

## 参见

- [本区域目录](../)