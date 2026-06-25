---
title: "CanvasLine"
description: "CanvasLine 的自动生成类参考。"
---
# CanvasLine

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CanvasLine : CanvasObject`
**Base:** `CanvasObject`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/CanvasLine.cs`

## 概述

`CanvasLine` 位于 `TaleWorlds.GauntletUI.Canvas`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.Canvas` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Alignment` | `public CanvasLineAlignment Alignment { get; set; }` |

## 主要方法

### LoadFrom
`public void LoadFrom(XmlNode lineNode)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 from。

```csharp
// 先通过子系统 API 拿到 CanvasLine 实例
CanvasLine canvasLine = ...;
canvasLine.LoadFrom(lineNode);
```

### GetHorizontalPositionOf
`public float GetHorizontalPositionOf(int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 horizontal position of 的结果。

```csharp
// 先通过子系统 API 拿到 CanvasLine 实例
CanvasLine canvasLine = ...;
var result = canvasLine.GetHorizontalPositionOf(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CanvasLine canvasLine = ...;
canvasLine.LoadFrom(lineNode);
```

## 参见

- [本区域目录](../)