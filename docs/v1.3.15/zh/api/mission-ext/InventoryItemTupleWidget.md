<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InventoryItemTupleWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryItemTupleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryItemTupleWidget : InventoryItemButtonWidget`
**Base:** `InventoryItemButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryItemTupleWidget.cs`

## 概述

`InventoryItemTupleWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ItemImageIdentifier` | `public InventoryImageIdentifierWidget ItemImageIdentifier { get; set; }` |
| `ItemID` | `public string ItemID { get; set; }` |
| `NameTextWidget` | `public TextWidget NameTextWidget { get; set; }` |
| `CountTextWidget` | `public TextWidget CountTextWidget { get; set; }` |
| `CostTextWidget` | `public TextWidget CostTextWidget { get; set; }` |
| `ProfitState` | `public int ProfitState { get; set; }` |
| `MainContainer` | `public BrushListPanel MainContainer { get; set; }` |
| `ExtendedControlsContainer` | `public InventoryTupleExtensionControlsWidget ExtendedControlsContainer { get; set; }` |
| `Slider` | `public InventoryTwoWaySliderWidget Slider { get; set; }` |
| `SliderParent` | `public Widget SliderParent { get; set; }` |
| `SliderTextWidget` | `public TextWidget SliderTextWidget { get; set; }` |
| `IsTransferable` | `public bool IsTransferable { get; set; }` |
| `EquipButton` | `public ButtonWidget EquipButton { get; set; }` |
| `TransactionCount` | `public int TransactionCount { get; set; }` |
| `ItemCount` | `public int ItemCount { get; set; }` |
| `IsCivilian` | `public bool IsCivilian { get; set; }` |
| `IsStealth` | `public bool IsStealth { get; set; }` |
| `IsGenderDifferent` | `public bool IsGenderDifferent { get; set; }` |
| `IsEquipable` | `public bool IsEquipable { get; set; }` |
| `IsNewlyAdded` | `public bool IsNewlyAdded { get; set; }` |
| `CanCharacterUseItem` | `public bool CanCharacterUseItem { get; set; }` |
| `DefaultBrush` | `public Brush DefaultBrush { get; set; }` |
| `CantUseInSetBrush` | `public Brush CantUseInSetBrush { get; set; }` |
| `CharacterCantUseBrush` | `public Brush CharacterCantUseBrush { get; set; }` |

## 使用示例

```csharp
// InventoryItemTupleWidget (Widget) 的典型用法
// 声明/访问一个 InventoryItemTupleWidget
var widget = root.GetChild("inventoryItemTupleWidget");;
```

## 参见

- [完整类目录](../catalog)