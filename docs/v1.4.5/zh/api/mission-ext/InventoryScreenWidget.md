<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InventoryScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# InventoryScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryScreenWidget`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory/InventoryScreenWidget.cs`

## 概述

`InventoryScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `InventoryScreenWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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

### InventoryScreenWidget
`public class InventoryScreenWidget(UIContext context)`

**用途 / Purpose:** 处理 `inventory screen widget` 相关逻辑。

### ItemWidgetDragBegin
`public void ItemWidgetDragBegin(InventoryItemButtonWidget itemWidget)`

**用途 / Purpose:** 处理 `item widget drag begin` 相关逻辑。

### ItemWidgetDrop
`public void ItemWidgetDrop(InventoryItemButtonWidget itemWidget)`

**用途 / Purpose:** 处理 `item widget drop` 相关逻辑。

## 使用示例

```csharp
var widget = new InventoryScreenWidget(context);
```

## 参见

- [完整类目录](../catalog)