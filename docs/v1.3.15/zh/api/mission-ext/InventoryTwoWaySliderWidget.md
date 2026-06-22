<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InventoryTwoWaySliderWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryTwoWaySliderWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryTwoWaySliderWidget : TwoWaySliderWidget`
**Base:** `TwoWaySliderWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryTwoWaySliderWidget.cs`

## 概述

`InventoryTwoWaySliderWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsExtended` | `public bool IsExtended { get; set; }` |
| `IncreaseStockButtonWidget` | `public ButtonWidget IncreaseStockButtonWidget { get; set; }` |
| `DecreaseStockButtonWidget` | `public ButtonWidget DecreaseStockButtonWidget { get; set; }` |
| `IsRightSide` | `public bool IsRightSide { get; set; }` |

## 使用示例

```csharp
// InventoryTwoWaySliderWidget (Widget) 的典型用法
// 声明/访问一个 InventoryTwoWaySliderWidget
var widget = root.GetChild("inventoryTwoWaySliderWidget");;
```

## 参见

- [完整类目录](../catalog)