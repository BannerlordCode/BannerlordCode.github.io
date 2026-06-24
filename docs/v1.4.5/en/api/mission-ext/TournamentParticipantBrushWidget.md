<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentParticipantBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentParticipantBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TournamentParticipantBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament/TournamentParticipantBrushWidget.cs`

## Overview

`TournamentParticipantBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TournamentParticipantBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
var widget = new TournamentParticipantBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)