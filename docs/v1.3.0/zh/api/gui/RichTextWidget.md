<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RichTextWidget`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RichTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class RichTextWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/RichTextWidget.cs`

## 概述

`RichTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `RichTextWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AutoHideIfEmpty` | `public bool AutoHideIfEmpty { get; set; }` |
| `LinkHoverCursorState` | `public string LinkHoverCursorState { get; set; }` |
| `Text` | `public string Text { get; set; }` |
| `CanBreakWords` | `public bool CanBreakWords { get; set; }` |

## 主要方法

### OnBrushChanged
`public override void OnBrushChanged()`

**用途 / Purpose:** 当 `brush changed` 事件触发时调用此方法。

## 使用示例

```csharp
var widget = new RichTextWidget(context);
```

## 参见

- [完整类目录](../catalog)