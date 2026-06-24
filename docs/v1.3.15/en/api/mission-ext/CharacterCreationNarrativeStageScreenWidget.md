<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationNarrativeStageScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationNarrativeStageScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterCreationNarrativeStageScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/CharacterCreationNarrativeStageScreenWidget.cs`

## Overview

`CharacterCreationNarrativeStageScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CharacterCreationNarrativeStageScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NextButton` | `public ButtonWidget NextButton { get; set; }` |
| `PreviousButton` | `public ButtonWidget PreviousButton { get; set; }` |
| `ItemList` | `public ListPanel ItemList { get; set; }` |

## Usage Example

```csharp
var widget = new CharacterCreationNarrativeStageScreenWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)