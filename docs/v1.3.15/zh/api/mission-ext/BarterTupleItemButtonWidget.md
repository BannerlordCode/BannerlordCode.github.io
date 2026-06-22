<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BarterTupleItemButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BarterTupleItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BarterTupleItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterTupleItemButtonWidget.cs`

## 概述

`BarterTupleItemButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `SliderParentList` | `public ListPanel SliderParentList { get; set; }` |
| `CountText` | `public TextWidget CountText { get; set; }` |
| `IsMultiple` | `public bool IsMultiple { get; set; }` |
| `IsOffered` | `public bool IsOffered { get; set; }` |

## 使用示例

```csharp
// BarterTupleItemButtonWidget (Widget) 的典型用法
// 声明/访问一个 BarterTupleItemButtonWidget
var widget = root.GetChild("barterTupleItemButtonWidget");;
```

## 参见

- [完整类目录](../catalog)