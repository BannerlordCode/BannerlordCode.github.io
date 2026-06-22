<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationNarrativeStageScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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

## Key Properties

| Name | Signature |
|------|-----------|
| `NextButton` | `public ButtonWidget NextButton { get; set; }` |
| `PreviousButton` | `public ButtonWidget PreviousButton { get; set; }` |
| `ItemList` | `public ListPanel ItemList { get; set; }` |

## Usage Example

```csharp
// Typical usage of CharacterCreationNarrativeStageScreenWidget (Widget)
// 声明/访问一个 CharacterCreationNarrativeStageScreenWidget
var widget = root.GetChild("characterCreationNarrativeStageScreenWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)