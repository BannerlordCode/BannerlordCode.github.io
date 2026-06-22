<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FillBarVerticalClipWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FillBarVerticalClipWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FillBarVerticalClipWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipWidget.cs`

## 概述

`FillBarVerticalClipWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsDirectionUpward` | `public bool IsDirectionUpward { get { return this._isDirectionUpward; }` |
| `CurrentAmount` | `public int CurrentAmount { get { return (int)this._currentAmount; }` |
| `MaxAmount` | `public int MaxAmount { get { return (int)this._maxAmount; }` |
| `InitialAmount` | `public int InitialAmount { get { return (int)this._initialAmount; }` |
| `MaxAmountAsFloat` | `public float MaxAmountAsFloat { get { return this._maxAmount; }` |
| `CurrentAmountAsFloat` | `public float CurrentAmountAsFloat { get { return this._currentAmount; }` |
| `InitialAmountAsFloat` | `public float InitialAmountAsFloat { get { return this._initialAmount; }` |
| `FillWidget` | `public Widget FillWidget { get { return this._fillWidget; }` |
| `ChangeWidget` | `public Widget ChangeWidget { get { return this._changeWidget; }` |
| `DividerWidget` | `public Widget DividerWidget { get { return this._dividerWidget; }` |
| `ContainerWidget` | `public Widget ContainerWidget { get { return this._containerWidget; }` |
| `ClipWidget` | `public Widget ClipWidget { get { return this._clipWidget; }` |

## 使用示例

```csharp
// FillBarVerticalClipWidget (Widget) 的典型用法
// 声明/访问一个 FillBarVerticalClipWidget
var widget = root.GetChild("fillBarVerticalClipWidget");;
```

## 参见

- [完整类目录](../catalog)