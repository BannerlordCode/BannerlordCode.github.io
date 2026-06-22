<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerArmoryCosmeticsSectionWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerArmoryCosmeticsSectionWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerArmoryCosmeticsSectionWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerArmoryCosmeticsSectionWidget.cs`

## Overview

`MultiplayerArmoryCosmeticsSectionWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsTauntAssignmentActive` | `public bool IsTauntAssignmentActive { get; set; }` |
| `TauntAssignmentStateAnimationDuration` | `public float TauntAssignmentStateAnimationDuration { get; set; }` |
| `TauntAssignmentStateAlpha` | `public float TauntAssignmentStateAlpha { get; set; }` |
| `TopSectionParent` | `public Widget TopSectionParent { get; set; }` |
| `BottomSectionParent` | `public Widget BottomSectionParent { get; set; }` |
| `SortControlsParent` | `public Widget SortControlsParent { get; set; }` |
| `CategorySeparatorWidget` | `public Widget CategorySeparatorWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerArmoryCosmeticsSectionWidget (Widget)
// 声明/访问一个 MultiplayerArmoryCosmeticsSectionWidget
var widget = root.GetChild("multiplayerArmoryCosmeticsSectionWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)