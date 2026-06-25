---
title: "CanvasWidget"
description: "CanvasWidget 的自动生成类参考。"
---
# CanvasWidget

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CanvasWidget : Widget, ILayout`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/CanvasWidget.cs`

## 概述

`CanvasWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `CanvasWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CanvasAsString` | `public string CanvasAsString { get; set; }` |
| `CanvasNode` | `public XmlElement CanvasNode { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
CanvasWidget widget = ...;
```

## 参见

- [本区域目录](../)