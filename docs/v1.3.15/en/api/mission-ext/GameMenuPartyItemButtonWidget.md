<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuPartyItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuPartyItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameMenuPartyItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/GameMenuPartyItemButtonWidget.cs`

## Overview

`GameMenuPartyItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `GameMenuPartyItemButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PartyBackgroundBrush` | `public Brush PartyBackgroundBrush { get; set; }` |
| `CharacterBackgroundBrush` | `public Brush CharacterBackgroundBrush { get; set; }` |
| `BackgroundImageWidget` | `public ImageWidget BackgroundImageWidget { get; set; }` |
| `Relation` | `public int Relation { get; set; }` |
| `Location` | `public string Location { get; set; }` |
| `Power` | `public string Power { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `Profession` | `public string Profession { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IsMergedWithArmy` | `public bool IsMergedWithArmy { get; set; }` |
| `IsPartyItem` | `public bool IsPartyItem { get; set; }` |
| `ContextMenu` | `public Widget ContextMenu { get; set; }` |
| `CurrentCharacterImageWidget` | `public ImageIdentifierWidget CurrentCharacterImageWidget { get; set; }` |

## Usage Example

```csharp
var widget = new GameMenuPartyItemButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)