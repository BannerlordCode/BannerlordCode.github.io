---
title: "EditableTextWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EditableTextWidget`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EditableTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class EditableTextWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/EditableTextWidget.cs`

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

**用途 / Purpose:** 处理 `input` 事件或回调。

### SetAllText
`public virtual void SetAllText(string text)`

**用途 / Purpose:** 设置 `all text` 的值或状态。

## 使用示例

```csharp
var widget = new EditableTextWidget(context);
```

## 参见

- [完整类目录](../catalog)