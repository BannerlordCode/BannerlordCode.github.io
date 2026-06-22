<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScrollingTextWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScrollingTextWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ScrollingTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/ScrollingTextWidget.cs`

## 概述

`ScrollingTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ScrollOnHoverWidget` | `public Widget ScrollOnHoverWidget { get { return this._scrollOnHoverWidget; }` |
| `IsAutoScrolling` | `public bool IsAutoScrolling { get { return this._isAutoScrolling; }` |
| `ScrollPerTick` | `public float ScrollPerTick { get { return this._scrollPerTick; }` |
| `InbetweenScrollDuration` | `public float InbetweenScrollDuration { get { return this._inbetweenScrollDuration; }` |
| `DefaultTextHorizontalAlignment` | `public TextHorizontalAlignment DefaultTextHorizontalAlignment { get { return this._defaultTextHorizontalAlignment; }` |

## 主要方法

### OnBrushChanged
```csharp
public override void OnBrushChanged()
```

## 使用示例

```csharp
// ScrollingTextWidget (Widget) 的典型用法
// 声明/访问一个 ScrollingTextWidget
var widget = root.GetChild("scrollingTextWidget");;
```

## 参见

- [完整类目录](../catalog)