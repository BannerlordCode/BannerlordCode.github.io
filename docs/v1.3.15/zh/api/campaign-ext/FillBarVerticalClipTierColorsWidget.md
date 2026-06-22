<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FillBarVerticalClipTierColorsWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FillBarVerticalClipTierColorsWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FillBarVerticalClipTierColorsWidget : FillBarVerticalWidget`
**Base:** `FillBarVerticalWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipTierColorsWidget.cs`

## 概述

`FillBarVerticalClipTierColorsWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxedColor` | `public string MaxedColor { get { return this._maxedColor; }` |
| `HighColor` | `public string HighColor { get { return this._highColor; }` |
| `MediumColor` | `public string MediumColor { get { return this._mediumColor; }` |
| `LowColor` | `public string LowColor { get { return this._lowColor; }` |

## 使用示例

```csharp
// FillBarVerticalClipTierColorsWidget (Widget) 的典型用法
// 声明/访问一个 FillBarVerticalClipTierColorsWidget
var widget = root.GetChild("fillBarVerticalClipTierColorsWidget");;
```

## 参见

- [完整类目录](../catalog)