<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyTroopTupleButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyTroopTupleButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyTroopTupleButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyTroopTupleButtonWidget.cs`

## Overview

`PartyTroopTupleButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

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

## Usage Example

```csharp
// Typical usage of PartyTroopTupleButtonWidget (Widget)
// 声明/访问一个 PartyTroopTupleButtonWidget
var widget = root.GetChild("partyTroopTupleButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)