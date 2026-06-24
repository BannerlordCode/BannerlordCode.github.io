<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionBattleScoreUIHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionBattleScoreUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBattleScoreUIHandler : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionBattleScoreUIHandler.cs`

## Overview

`MissionBattleScoreUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionBattleScoreUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionBattleScoreUIHandler());
```

## See Also

- [Complete Class Catalog](../catalog)