---
title: "EditableTextWidget"
description: "EditableTextWidget 的自动生成类参考。"
---
# EditableTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class EditableTextWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/EditableTextWidget.cs`

## 概述

`EditableTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `EditableTextWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxLength` | `public int MaxLength { get; set; }` |
| `IsObfuscationEnabled` | `public bool IsObfuscationEnabled { get; set; }` |
| `DefaultSearchText` | `public string DefaultSearchText { get; set; }` |
| `RealText` | `public string RealText { get; set; }` |
| `KeyboardInfoText` | `public string KeyboardInfoText { get; set; }` |
| `Text` | `public string Text { get; set; }` |

## 主要方法

### HandleInput
`public override void HandleInput(IReadOnlyList<int> lastKeysPressed)`

**用途 / Purpose:** 执行与 「input」 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 EditableTextWidget 实例
EditableTextWidget editableTextWidget = ...;
editableTextWidget.HandleInput(lastKeysPressed);
```

### SetAllText
`public virtual void SetAllText(string text)`

**用途 / Purpose:** 为 「all text」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EditableTextWidget 实例
EditableTextWidget editableTextWidget = ...;
editableTextWidget.SetAllText("example");
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
EditableTextWidget widget = ...;
```

## 参见

- [本区域目录](../)