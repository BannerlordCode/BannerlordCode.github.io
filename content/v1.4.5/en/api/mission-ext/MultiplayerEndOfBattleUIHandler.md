---
title: "MultiplayerEndOfBattleUIHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerEndOfBattleUIHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerEndOfBattleUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerEndOfBattleUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.View/TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews/MultiplayerEndOfBattleUIHandler.cs`

## Overview

`MultiplayerEndOfBattleUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MultiplayerEndOfBattleUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MultiplayerEndOfBattleUIHandler());
```

## See Also

- [Complete Class Catalog](../catalog)