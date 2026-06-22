<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerEndOfBattleScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerEndOfBattleScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerEndOfBattleScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerEndOfBattleScreenWidget.cs`

## Overview

`MultiplayerEndOfBattleScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsShown` | `public bool IsShown { get; set; }` |
| `FadeInDuration` | `public float FadeInDuration { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerEndOfBattleScreenWidget (Widget)
// 声明/访问一个 MultiplayerEndOfBattleScreenWidget
var widget = root.GetChild("multiplayerEndOfBattleScreenWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)