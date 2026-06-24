<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerGameManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerGameManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGameManager : MBGameManager`
**Base:** `MBGameManager`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerGameManager.cs`

## Overview

`MultiplayerGameManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MultiplayerGameManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnLoadFinished
`public override void OnLoadFinished()`

**Purpose:** Called when the `load finished` event is raised.

### OnAfterCampaignStart
`public override void OnAfterCampaignStart(Game game)`

**Purpose:** Called when the `after campaign start` event is raised.

### OnNewCampaignStart
`public override void OnNewCampaignStart(Game game, object starterObject)`

**Purpose:** Called when the `new campaign start` event is raised.

### OnSessionInvitationAccepted
`public override void OnSessionInvitationAccepted(SessionInvitationType sessionInvitationType)`

**Purpose:** Called when the `session invitation accepted` event is raised.

### OnPlatformRequestedMultiplayer
`public override void OnPlatformRequestedMultiplayer()`

**Purpose:** Called when the `platform requested multiplayer` event is raised.

## Usage Example

```csharp
var manager = MultiplayerGameManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)