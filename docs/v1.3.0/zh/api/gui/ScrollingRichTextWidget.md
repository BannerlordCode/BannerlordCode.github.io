<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScrollingRichTextWidget`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ScrollingRichTextWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ScrollingRichTextWidget : RichTextWidget`
**Base:** `RichTextWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/ScrollingRichTextWidget.cs`

## 概述

`ScrollingRichTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ScrollingRichTextWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ActualText` | `public string ActualText { get; }` |
| `ScrollOnHoverWidget` | `public Widget ScrollOnHoverWidget { get; set; }` |
| `IsAutoScrolling` | `public bool IsAutoScrolling { get; set; }` |
| `ScrollPerTick` | `public float ScrollPerTick { get; set; }` |
| `InbetweenScrollDuration` | `public float InbetweenScrollDuration { get; set; }` |
| `DefaultTextHorizontalAlignment` | `public TextHorizontalAlignment DefaultTextHorizontalAlignment { get; set; }` |

## 主要方法

### OnBrushChanged
`public override void OnBrushChanged()`

**用途 / Purpose:** 当 `brush changed` 事件触发时调用此方法。

## 使用示例

```csharp
var widget = new ScrollingRichTextWidget(context);
```

## 参见

- [完整类目录](../catalog)