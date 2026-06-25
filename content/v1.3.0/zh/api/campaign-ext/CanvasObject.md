---
title: "CanvasObject"
description: "CanvasObject 的自动生成类参考。"
---
# CanvasObject

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CanvasObject`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/CanvasObject.cs`

## 概述

`CanvasObject` 位于 `TaleWorlds.GauntletUI.Canvas`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.Canvas` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Parent` | `public CanvasObject Parent { get; }` |
| `Children` | `public List<CanvasObject> Children { get; }` |
| `Scale` | `public float Scale { get; }` |
| `LocalPosition` | `public Vector2 LocalPosition { get; }` |
| `Width` | `public float Width { get; }` |
| `Height` | `public float Height { get; }` |
| `FontFactory` | `public FontFactory FontFactory { get; }` |
| `SpriteData` | `public SpriteData SpriteData { get; }` |

## 主要方法

### Update
`public virtual void Update(float scale)`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 CanvasObject 实例
CanvasObject canvasObject = ...;
canvasObject.Update(0);
```

### BeginMeasure
`public void BeginMeasure(bool fixedWidth, bool fixedHeight, float width, float height)`

**用途 / Purpose:** 处理与 「begin measure」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CanvasObject 实例
CanvasObject canvasObject = ...;
canvasObject.BeginMeasure(false, false, 0, 0);
```

### DoMeasure
`public void DoMeasure()`

**用途 / Purpose:** 处理与 「do measure」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CanvasObject 实例
CanvasObject canvasObject = ...;
canvasObject.DoMeasure();
```

### DoLayout
`public void DoLayout()`

**用途 / Purpose:** 处理与 「do layout」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CanvasObject 实例
CanvasObject canvasObject = ...;
canvasObject.DoLayout();
```

### GetMarginSize
`public virtual Vector2 GetMarginSize()`

**用途 / Purpose:** 读取并返回当前对象中 「margin size」 的结果。

```csharp
// 先通过子系统 API 拿到 CanvasObject 实例
CanvasObject canvasObject = ...;
var result = canvasObject.GetMarginSize();
```

### DoRender
`public void DoRender(Vector2 globalPosition, TwoDimensionDrawContext drawContext)`

**用途 / Purpose:** 处理与 「do render」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CanvasObject 实例
CanvasObject canvasObject = ...;
canvasObject.DoRender(globalPosition, drawContext);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CanvasObject canvasObject = ...;
canvasObject.Update(0);
```

## 参见

- [本区域目录](../)