---
title: "TwoDimensionDrawContext"
description: "TwoDimensionDrawContext 的自动生成类参考。"
---
# TwoDimensionDrawContext

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class TwoDimensionDrawContext`
**Base:** 无
**File:** `TaleWorlds.TwoDimension/TwoDimensionDrawContext.cs`

## 概述

`TwoDimensionDrawContext` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ScissorTestEnabled` | `public bool ScissorTestEnabled { get; }` |
| `CircularMaskEnabled` | `public bool CircularMaskEnabled { get; }` |
| `CircularMaskCenter` | `public Vector2 CircularMaskCenter { get; }` |
| `CircularMaskRadius` | `public float CircularMaskRadius { get; }` |
| `CircularMaskSmoothingRadius` | `public float CircularMaskSmoothingRadius { get; }` |
| `CurrentScissor` | `public ScissorTestInfo CurrentScissor { get; }` |

## 主要方法

### Reset
`public void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 TwoDimensionDrawContext 实例
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.Reset();
```

### CreateSimpleMaterial
`public SimpleMaterial CreateSimpleMaterial()`

**用途 / Purpose:** 构建一个新的 「simple material」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 TwoDimensionDrawContext 实例
TwoDimensionDrawContext twoDimensionDrawContext = ...;
var result = twoDimensionDrawContext.CreateSimpleMaterial();
```

### CreateTextMaterial
`public TextMaterial CreateTextMaterial()`

**用途 / Purpose:** 构建一个新的 「text material」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 TwoDimensionDrawContext 实例
TwoDimensionDrawContext twoDimensionDrawContext = ...;
var result = twoDimensionDrawContext.CreateTextMaterial();
```

### PushScissor
`public void PushScissor(in Rectangle2D newScissorRectangle)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TwoDimensionDrawContext 实例
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.PushScissor(newScissorRectangle);
```

### PopScissor
`public void PopScissor()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TwoDimensionDrawContext 实例
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.PopScissor();
```

### IsDiscardedByAnyScissor
`public bool IsDiscardedByAnyScissor(in Rectangle2D rect)`

**用途 / Purpose:** 判断当前对象是否处于 「discarded by any scissor」 状态或条件。

```csharp
// 先通过子系统 API 拿到 TwoDimensionDrawContext 实例
TwoDimensionDrawContext twoDimensionDrawContext = ...;
var result = twoDimensionDrawContext.IsDiscardedByAnyScissor(rect);
```

### SetCircualMask
`public void SetCircualMask(Vector2 position, float radius, float smoothingRadius)`

**用途 / Purpose:** 为 「circual mask」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TwoDimensionDrawContext 实例
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.SetCircualMask(position, 0, 0);
```

### ClearCircualMask
`public void ClearCircualMask()`

**用途 / Purpose:** 清空当前对象中的「circual mask」。

```csharp
// 先通过子系统 API 拿到 TwoDimensionDrawContext 实例
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.ClearCircualMask();
```

### DrawTo
`public void DrawTo(TwoDimensionContext twoDimensionContext)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TwoDimensionDrawContext 实例
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.DrawTo(twoDimensionContext);
```

### DrawSprite
`public void DrawSprite(Sprite sprite, SimpleMaterial material, in Rectangle2D rectangle, float scale)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TwoDimensionDrawContext 实例
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.DrawSprite(sprite, material, rectangle, 0);
```

### Draw
`public void Draw(SimpleMaterial material, in ImageDrawObject drawObject)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TwoDimensionDrawContext 实例
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.Draw(material, drawObject);
```

### Draw
`public void Draw(TextMaterial material, in TextDrawObject drawObject)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TwoDimensionDrawContext 实例
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.Draw(material, drawObject);
```

### Draw
`public void Draw(Text text, TextMaterial materialOriginal, in Rectangle2D parentRectangle, in Rectangle2D rectangle)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TwoDimensionDrawContext 实例
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.Draw(text, materialOriginal, parentRectangle, rectangle);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.Reset();
```

## 参见

- [本区域目录](../)