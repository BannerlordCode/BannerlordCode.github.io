---
title: "Canvas"
description: "Canvas 的自动生成类参考。"
---
# Canvas

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public class Canvas`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/Canvas.cs`

## 概述

`Canvas` 位于 `TaleWorlds.GauntletUI.Canvas`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.Canvas` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Root` | `public CanvasObject Root { get; }` |

## 主要方法

### LoadFrom
`public void LoadFrom(XmlNode canvasNode)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 from。

```csharp
// 先通过子系统 API 拿到 Canvas 实例
Canvas canvas = ...;
canvas.LoadFrom(canvasNode);
```

### Update
`public void Update(float scale)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 Canvas 实例
Canvas canvas = ...;
canvas.Update(0);
```

### DoMeasure
`public void DoMeasure(bool fixedWidth, bool fixedHeight, float width, float height)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DoMeasure 对应的操作。

```csharp
// 先通过子系统 API 拿到 Canvas 实例
Canvas canvas = ...;
canvas.DoMeasure(false, false, 0, 0);
```

### DoLayout
`public void DoLayout()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DoLayout 对应的操作。

```csharp
// 先通过子系统 API 拿到 Canvas 实例
Canvas canvas = ...;
canvas.DoLayout();
```

### DoRender
`public void DoRender(Vector2 globalPosition, TwoDimensionDrawContext drawContext)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DoRender 对应的操作。

```csharp
// 先通过子系统 API 拿到 Canvas 实例
Canvas canvas = ...;
canvas.DoRender(globalPosition, drawContext);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Canvas canvas = ...;
canvas.LoadFrom(canvasNode);
```

## 参见

- [本区域目录](../)