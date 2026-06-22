<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementMenuPartyCharacterListsButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementMenuPartyCharacterListsButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SettlementMenuPartyCharacterListsButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/SettlementMenuPartyCharacterListsButtonWidget.cs`

## Overview

`SettlementMenuPartyCharacterListsButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `PartyListButtonBrush` | `public Brush PartyListButtonBrush { get; set; }` |
| `CharacterListButtonBrush` | `public Brush CharacterListButtonBrush { get; set; }` |
| `CharactersList` | `public ContainerPageControlWidget CharactersList { get; set; }` |
| `PartiesList` | `public ContainerPageControlWidget PartiesList { get; set; }` |
| `MaxNumOfVisuals` | `public int MaxNumOfVisuals { get; set; }` |
| `ChildCharactersList` | `public ListPanel ChildCharactersList { get; set; }` |
| `ChildPartiesList` | `public ListPanel ChildPartiesList { get; set; }` |

## Usage Example

```csharp
// Typical usage of SettlementMenuPartyCharacterListsButtonWidget (Widget)
// 声明/访问一个 SettlementMenuPartyCharacterListsButtonWidget
var widget = root.GetChild("settlementMenuPartyCharacterListsButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)