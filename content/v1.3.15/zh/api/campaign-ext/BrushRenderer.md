---
title: "BrushRenderer"
description: "BrushRenderer 的自动生成类参考。"
---
# BrushRenderer

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushRenderer`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushRenderer.cs`

## 概述

`BrushRenderer` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `LastUpdatedFrameNumber` | `public ulong LastUpdatedFrameNumber { get; }` |
| `ForcePixelPerfectPlacement` | `public bool ForcePixelPerfectPlacement { get; set; }` |
| `CurrentStyle` | `public Style CurrentStyle { get; set; }` |
| `Brush` | `public Brush Brush { get; set; }` |
| `CurrentState` | `public string CurrentState { get; set; }` |

## 主要方法

### Update
`public void Update(ulong frameNumber, float globalAnimTime, float dt)`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 BrushRenderer 实例
BrushRenderer brushRenderer = ...;
brushRenderer.Update(0, 0, 0);
```

### IsUpdateNeeded
`public bool IsUpdateNeeded()`

**用途 / Purpose:** 判断当前对象是否处于 「update needed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 BrushRenderer 实例
BrushRenderer brushRenderer = ...;
var result = brushRenderer.IsUpdateNeeded();
```

### Render
`public void Render(TwoDimensionDrawContext drawContext, in Rectangle2D rect, float scale, float contextAlpha, Vector2 overlayOffset = default(Vector2), Vector2 overlaySize = default(Vector2))`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BrushRenderer 实例
BrushRenderer brushRenderer = ...;
brushRenderer.Render(drawContext, rect, 0, 0, default(Vector2), default(Vector2));
```

### CreateTextMaterial
`public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)`

**用途 / Purpose:** 构建一个新的 「text material」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 BrushRenderer 实例
BrushRenderer brushRenderer = ...;
var result = brushRenderer.CreateTextMaterial(drawContext);
```

### RestartAnimation
`public void RestartAnimation()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BrushRenderer 实例
BrushRenderer brushRenderer = ...;
brushRenderer.RestartAnimation();
```

### SetSeed
`public void SetSeed(int seed)`

**用途 / Purpose:** 为 「seed」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BrushRenderer 实例
BrushRenderer brushRenderer = ...;
brushRenderer.SetSeed(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BrushRenderer brushRenderer = ...;
brushRenderer.Update(0, 0, 0);
```

## 参见

- [本区域目录](../)