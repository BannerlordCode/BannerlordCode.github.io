---
title: "FloatInputTextWidget"
description: "FloatInputTextWidget 的自动生成类参考。"
---
# FloatInputTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FloatInputTextWidget : EditableTextWidget`
**Base:** `EditableTextWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/FloatInputTextWidget.cs`

## 概述

`FloatInputTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `FloatInputTextWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `EnableClamp` | `public bool EnableClamp { get; set; }` |
| `FloatText` | `public float FloatText { get; set; }` |
| `MaxFloat` | `public float MaxFloat { get; set; }` |
| `MinFloat` | `public float MinFloat { get; set; }` |

## 主要方法

### HandleInput
`public override void HandleInput(IReadOnlyList<int> lastKeysPressed)`

**用途 / Purpose:** 执行与 「input」 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 FloatInputTextWidget 实例
FloatInputTextWidget floatInputTextWidget = ...;
floatInputTextWidget.HandleInput(lastKeysPressed);
```

### SetAllText
`public override void SetAllText(string text)`

**用途 / Purpose:** 为 「all text」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 FloatInputTextWidget 实例
FloatInputTextWidget floatInputTextWidget = ...;
floatInputTextWidget.SetAllText("example");
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
FloatInputTextWidget widget = ...;
```

## 参见

- [本区域目录](../)