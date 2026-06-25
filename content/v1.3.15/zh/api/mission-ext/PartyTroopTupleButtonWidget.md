---
title: "PartyTroopTupleButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyTroopTupleButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyTroopTupleButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyTroopTupleButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyTroopTupleButtonWidget.cs`

## 概述

`PartyTroopTupleButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `PartyTroopTupleButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CharacterID` | `public string CharacterID { get; set; }` |
| `ScreenWidget` | `public PartyScreenWidget ScreenWidget { get; }` |
| `IsTupleLeftSide` | `public bool IsTupleLeftSide { get; set; }` |
| `TransferSlider` | `public InventoryTwoWaySliderWidget TransferSlider { get; set; }` |
| `IsTransferable` | `public bool IsTransferable { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `IsPrisoner` | `public bool IsPrisoner { get; set; }` |
| `TransferAmount` | `public int TransferAmount { get; set; }` |
| `ExtendedControlsContainer` | `public InventoryTupleExtensionControlsWidget ExtendedControlsContainer { get; set; }` |
| `Main` | `public Widget Main { get; set; }` |
| `UpgradesPanel` | `public Widget UpgradesPanel { get; set; }` |

## 使用示例

```csharp
var widget = new PartyTroopTupleButtonWidget(context);
```

## 参见

- [完整类目录](../catalog)