<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InventoryScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryScreenWidget.cs`

## 概述

`InventoryScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `TransferInputKeyVisualWidget` | `public InputKeyVisualWidget TransferInputKeyVisualWidget { get; set; }` |
| `PreviousCharacterInputVisualParent` | `public Widget PreviousCharacterInputVisualParent { get; set; }` |
| `NextCharacterInputVisualParent` | `public Widget NextCharacterInputVisualParent { get; set; }` |
| `TradeLabel` | `public RichTextWidget TradeLabel { get; set; }` |
| `InventoryTooltip` | `public Widget InventoryTooltip { get; set; }` |
| `ItemPreviewWidget` | `public InventoryItemPreviewWidget ItemPreviewWidget { get; set; }` |
| `TransactionCount` | `public int TransactionCount { get; set; }` |
| `EquipmentMode` | `public int EquipmentMode { get; set; }` |
| `TargetEquipmentIndex` | `public int TargetEquipmentIndex { get; set; }` |
| `OtherInventoryListWidget` | `public ScrollablePanel OtherInventoryListWidget { get; set; }` |
| `PlayerInventoryListWidget` | `public ScrollablePanel PlayerInventoryListWidget { get; set; }` |
| `IsFocusedOnItemList` | `public bool IsFocusedOnItemList { get; set; }` |
| `IsBannerTutorialActive` | `public bool IsBannerTutorialActive { get; set; }` |
| `BannerTypeName` | `public string BannerTypeName { get; set; }` |
| `ScrollToItem` | `public bool ScrollToItem { get; set; }` |
| `ScrollItemId` | `public string ScrollItemId { get; set; }` |

## 主要方法

### ItemWidgetDragBegin
```csharp
public void ItemWidgetDragBegin(InventoryItemButtonWidget itemWidget)
```

### ItemWidgetDrop
```csharp
public void ItemWidgetDrop(InventoryItemButtonWidget itemWidget)
```

## 使用示例

```csharp
// InventoryScreenWidget (Widget) 的典型用法
// 声明/访问一个 InventoryScreenWidget
var widget = root.GetChild("inventoryScreenWidget");;
```

## 参见

- [完整类目录](../catalog)