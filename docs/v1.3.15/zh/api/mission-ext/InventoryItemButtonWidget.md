<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InventoryItemButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class InventoryItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryItemButtonWidget.cs`

## 概述

`InventoryItemButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsRightSide` | `public bool IsRightSide { get; set; }` |
| `ItemType` | `public string ItemType { get; set; }` |
| `EquipmentIndex` | `public int EquipmentIndex { get; set; }` |
| `ScreenWidget` | `public InventoryScreenWidget ScreenWidget { get; }` |

## 使用示例

```csharp
// InventoryItemButtonWidget (Widget) 的典型用法
// 声明/访问一个 InventoryItemButtonWidget
var widget = root.GetChild("inventoryItemButtonWidget");;
```

## 参见

- [完整类目录](../catalog)