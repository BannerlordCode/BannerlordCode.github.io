<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentMatchWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentMatchWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TournamentMatchWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentMatchWidget.cs`

## Overview

`TournamentMatchWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `State` | `public int State { get; set; }` |

## Usage Example

```csharp
// Typical usage of TournamentMatchWidget (Widget)
// 声明/访问一个 TournamentMatchWidget
var widget = root.GetChild("tournamentMatchWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)