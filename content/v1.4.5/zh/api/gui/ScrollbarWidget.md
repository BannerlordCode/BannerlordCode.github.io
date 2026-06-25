---
title: "ScrollbarWidget"
description: "ScrollbarWidget 的自动生成类参考。"
---
# ScrollbarWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ScrollbarWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/ScrollbarWidget.cs`

## 概述

`ScrollbarWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ScrollbarWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsDiscrete` | `public bool IsDiscrete { get; set; }` |
| `Locked` | `public bool Locked { get; set; }` |
| `AlignmentAxis` | `public AlignmentAxis AlignmentAxis { get; set; }` |
| `ReverseDirection` | `public bool ReverseDirection { get; set; }` |
| `ValueFloat` | `public float ValueFloat { get; set; }` |
| `ValueInt` | `public int ValueInt { get; set; }` |
| `MinValue` | `public float MinValue { get; set; }` |
| `MaxValue` | `public float MaxValue { get; set; }` |
| `DoNotUpdateHandleSize` | `public bool DoNotUpdateHandleSize { get; set; }` |
| `Handle` | `public Widget Handle { get; set; }` |
| `ScrollbarArea` | `public Widget ScrollbarArea { get; set; }` |

## 主要方法

### SetValueForced
`public void SetValueForced(float value)`

**用途 / Purpose:** 为 「value forced」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ScrollbarWidget 实例
ScrollbarWidget scrollbarWidget = ...;
scrollbarWidget.SetValueForced(0);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
ScrollbarWidget widget = ...;
```

## 参见

- [本区域目录](../)