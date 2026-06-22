<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RichTextWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RichTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class RichTextWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/RichTextWidget.cs`

## 概述

`RichTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `AutoHideIfEmpty` | `public bool AutoHideIfEmpty { get { return this._autoHideIfEmpty; }` |
| `LinkHoverCursorState` | `public string LinkHoverCursorState { get { return this._linkHoverCursorState; }` |
| `Text` | `public string Text { get { return this._richText.Value; }` |
| `CanBreakWords` | `public bool CanBreakWords { get { return this._canBreakWords; }` |

## 主要方法

### OnBrushChanged
```csharp
public override void OnBrushChanged()
```

## 使用示例

```csharp
// RichTextWidget (Widget) 的典型用法
// 声明/访问一个 RichTextWidget
var widget = root.GetChild("richTextWidget");;
```

## 参见

- [完整类目录](../catalog)