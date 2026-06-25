---
title: "MultiplayerFactionBanVoteUIHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerFactionBanVoteUIHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerFactionBanVoteUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerFactionBanVoteUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.View/TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews/MultiplayerFactionBanVoteUIHandler.cs`

## Overview

`MultiplayerFactionBanVoteUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MultiplayerFactionBanVoteUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MultiplayerFactionBanVoteUIHandler());
```

## See Also

- [Complete Class Catalog](../catalog)