---
title: "AnimationInterpolation"
description: "AnimationInterpolation 的自动生成类参考。"
---
# AnimationInterpolation

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class AnimationInterpolation`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AnimationInterpolation.cs`

## 概述

`AnimationInterpolation` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Ease
`public static float Ease(AnimationInterpolation.Type type, AnimationInterpolation.Function function, float ratio)`

**用途 / Purpose:** 调用 Ease 对应的操作。

```csharp
// 静态调用，不需要实例
AnimationInterpolation.Ease(type, function, 0);
```

### Ease
`public float Ease(AnimationInterpolation.Function function, float t)`

**用途 / Purpose:** 调用 Ease 对应的操作。

```csharp
// 先通过子系统 API 拿到 AnimationInterpolation 实例
AnimationInterpolation animationInterpolation = ...;
var result = animationInterpolation.Ease(function, 0);
```

### Ease
`public float Ease(AnimationInterpolation.Function function, float t)`

**用途 / Purpose:** 调用 Ease 对应的操作。

```csharp
// 先通过子系统 API 拿到 AnimationInterpolation 实例
AnimationInterpolation animationInterpolation = ...;
var result = animationInterpolation.Ease(function, 0);
```

### Ease
`public float Ease(AnimationInterpolation.Function function, float t)`

**用途 / Purpose:** 调用 Ease 对应的操作。

```csharp
// 先通过子系统 API 拿到 AnimationInterpolation 实例
AnimationInterpolation animationInterpolation = ...;
var result = animationInterpolation.Ease(function, 0);
```

## 使用示例

```csharp
AnimationInterpolation.Ease(type, function, 0);
```

## 参见

- [本区域目录](../)