<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FillBarVerticalWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FillBarVerticalWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FillBarVerticalWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalWidget.cs`

## 概述

`FillBarVerticalWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `FillBarVerticalWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsDirectionUpward` | `public bool IsDirectionUpward { get; set; }` |
| `CurrentAmount` | `public int CurrentAmount { get; set; }` |
| `MaxAmount` | `public int MaxAmount { get; set; }` |
| `InitialAmount` | `public int InitialAmount { get; set; }` |
| `MaxAmountAsFloat` | `public float MaxAmountAsFloat { get; set; }` |
| `CurrentAmountAsFloat` | `public float CurrentAmountAsFloat { get; set; }` |
| `InitialAmountAsFloat` | `public float InitialAmountAsFloat { get; set; }` |
| `FillWidget` | `public Widget FillWidget { get; set; }` |
| `ChangeWidget` | `public Widget ChangeWidget { get; set; }` |
| `DividerWidget` | `public Widget DividerWidget { get; set; }` |
| `ContainerWidget` | `public Widget ContainerWidget { get; set; }` |

## 使用示例

```csharp
var widget = new FillBarVerticalWidget(context);
```

## 参见

- [完整类目录](../catalog)