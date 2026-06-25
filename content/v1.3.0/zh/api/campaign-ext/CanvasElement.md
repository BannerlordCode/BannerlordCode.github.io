---
title: "CanvasElement"
description: "CanvasElement 的自动生成类参考。"
---
# CanvasElement

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class CanvasElement : CanvasObject`
**Base:** `CanvasObject`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/CanvasElement.cs`

## 概述

`CanvasElement` 位于 `TaleWorlds.GauntletUI.Canvas`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.Canvas` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PositionX` | `public float PositionX { get; set; }` |
| `PositionY` | `public float PositionY { get; set; }` |
| `RelativePositionX` | `public float RelativePositionX { get; set; }` |
| `RelativePositionY` | `public float RelativePositionY { get; set; }` |
| `PivotX` | `public float PivotX { get; set; }` |
| `PivotY` | `public float PivotY { get; set; }` |

## 主要方法

### LoadFrom
`public virtual void LoadFrom(XmlNode canvasImageNode)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 from。

```csharp
// 先通过子系统 API 拿到 CanvasElement 实例
CanvasElement canvasElement = ...;
canvasElement.LoadFrom(canvasImageNode);
```

### GetMarginSize
`public override Vector2 GetMarginSize()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 margin size 的结果。

```csharp
// 先通过子系统 API 拿到 CanvasElement 实例
CanvasElement canvasElement = ...;
var result = canvasElement.GetMarginSize();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
CanvasElement instance = ...;
```

## 参见

- [本区域目录](../)