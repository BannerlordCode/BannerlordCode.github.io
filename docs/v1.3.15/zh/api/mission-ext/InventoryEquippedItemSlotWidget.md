<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InventoryEquippedItemSlotWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryEquippedItemSlotWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryEquippedItemSlotWidget : InventoryItemButtonWidget`
**Base:** `InventoryItemButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryEquippedItemSlotWidget.cs`

## 概述

`InventoryEquippedItemSlotWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ImageIdentifier` | `public ImageIdentifierWidget ImageIdentifier { get; set; }` |
| `Background` | `public Widget Background { get; set; }` |
| `TargetEquipmentIndex` | `public int TargetEquipmentIndex { get; set; }` |

## 使用示例

```csharp
// InventoryEquippedItemSlotWidget (Widget) 的典型用法
// 声明/访问一个 InventoryEquippedItemSlotWidget
var widget = root.GetChild("inventoryEquippedItemSlotWidget");;
```

## 参见

- [完整类目录](../catalog)