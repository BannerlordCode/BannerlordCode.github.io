---
title: "IntegerInputTextWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IntegerInputTextWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IntegerInputTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class IntegerInputTextWidget : EditableTextWidget`
**Base:** `EditableTextWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/IntegerInputTextWidget.cs`

## 概述

`IntegerInputTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `IntegerInputTextWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `EnableClamp` | `public bool EnableClamp { get; set; }` |
| `IntText` | `public int IntText { get; set; }` |
| `MaxInt` | `public int MaxInt { get; set; }` |
| `MinInt` | `public int MinInt { get; set; }` |

## 主要方法

### HandleInput
`public override void HandleInput(IReadOnlyList<int> lastKeysPressed)`

**用途 / Purpose:** 处理 `input` 事件或回调。

### SetAllText
`public override void SetAllText(string text)`

**用途 / Purpose:** 设置 `all text` 的值或状态。

## 使用示例

```csharp
var widget = new IntegerInputTextWidget(context);
```

## 参见

- [完整类目录](../catalog)