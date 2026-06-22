<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentParticipantBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentParticipantBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TournamentParticipantBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentParticipantBrushWidget.cs`

## Overview

`TournamentParticipantBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `NameTextWidget` | `public TextWidget NameTextWidget { get; set; }` |
| `MatchState` | `public int MatchState { get; set; }` |
| `IsDead` | `public bool IsDead { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `MainHeroTextBrush` | `public Brush MainHeroTextBrush { get; set; }` |
| `NormalTextBrush` | `public Brush NormalTextBrush { get; set; }` |
| `OnMission` | `public bool OnMission { get; set; }` |

## Usage Example

```csharp
// Typical usage of TournamentParticipantBrushWidget (Widget)
// 声明/访问一个 TournamentParticipantBrushWidget
var widget = root.GetChild("tournamentParticipantBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)