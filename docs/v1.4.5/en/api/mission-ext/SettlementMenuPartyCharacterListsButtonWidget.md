<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementMenuPartyCharacterListsButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementMenuPartyCharacterListsButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SettlementMenuPartyCharacterListsButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu/SettlementMenuPartyCharacterListsButtonWidget.cs`

## Overview

`SettlementMenuPartyCharacterListsButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SettlementMenuPartyCharacterListsButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
var widget = new SettlementMenuPartyCharacterListsButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)