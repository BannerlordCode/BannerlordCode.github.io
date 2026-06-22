<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FillBarWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FillBarWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FillBarWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/FillBarWidget.cs`

## 概述

`FillBarWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentAmount` | `public int CurrentAmount { get { return (int)this._currentAmount; }` |
| `MaxAmount` | `public int MaxAmount { get { return (int)this._maxAmount; }` |
| `InitialAmount` | `public int InitialAmount { get { return (int)this._initialAmount; }` |
| `MaxAmountAsFloat` | `public float MaxAmountAsFloat { get { return this._maxAmount; }` |
| `CurrentAmountAsFloat` | `public float CurrentAmountAsFloat { get { return this._currentAmount; }` |
| `InitialAmountAsFloat` | `public float InitialAmountAsFloat { get { return this._initialAmount; }` |
| `CompletelyFillChange` | `public bool CompletelyFillChange { get { return this._completelyFillChange; }` |
| `ShowNegativeChange` | `public bool ShowNegativeChange { get { return this._showNegativeChange; }` |
| `CustomChangeColor` | `public bool CustomChangeColor { get { return this._customChangeColor; }` |
| `FillWidget` | `public Widget FillWidget { get { return this._fillWidget; }` |
| `ChangeWidget` | `public Widget ChangeWidget { get { return this._changeWidget; }` |
| `DividerWidget` | `public Widget DividerWidget { get { return this._dividerWidget; }` |

## 使用示例

```csharp
// FillBarWidget (Widget) 的典型用法
// 声明/访问一个 FillBarWidget
var widget = root.GetChild("fillBarWidget");;
```

## 参见

- [完整类目录](../catalog)