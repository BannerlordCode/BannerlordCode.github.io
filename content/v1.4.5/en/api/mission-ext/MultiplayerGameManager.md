---
title: "MultiplayerGameManager"
description: "Auto-generated class reference for MultiplayerGameManager."
---
# MultiplayerGameManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGameManager : MBGameManager`
**Base:** `MBGameManager`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerGameManager.cs`

## Overview

`MultiplayerGameManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MultiplayerGameManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnLoadFinished
`public override void OnLoadFinished()`

**Purpose:** **Purpose:** Invoked when the load finished event is raised.

```csharp
// Obtain an instance of MultiplayerGameManager from the subsystem API first
MultiplayerGameManager multiplayerGameManager = ...;
multiplayerGameManager.OnLoadFinished();
```

### OnAfterCampaignStart
`public override void OnAfterCampaignStart(Game game)`

**Purpose:** **Purpose:** Invoked when the after campaign start event is raised.

```csharp
// Obtain an instance of MultiplayerGameManager from the subsystem API first
MultiplayerGameManager multiplayerGameManager = ...;
multiplayerGameManager.OnAfterCampaignStart(game);
```

### OnNewCampaignStart
`public override void OnNewCampaignStart(Game game, object starterObject)`

**Purpose:** **Purpose:** Invoked when the new campaign start event is raised.

```csharp
// Obtain an instance of MultiplayerGameManager from the subsystem API first
MultiplayerGameManager multiplayerGameManager = ...;
multiplayerGameManager.OnNewCampaignStart(game, starterObject);
```

### OnSessionInvitationAccepted
`public override void OnSessionInvitationAccepted(SessionInvitationType sessionInvitationType)`

**Purpose:** **Purpose:** Invoked when the session invitation accepted event is raised.

```csharp
// Obtain an instance of MultiplayerGameManager from the subsystem API first
MultiplayerGameManager multiplayerGameManager = ...;
multiplayerGameManager.OnSessionInvitationAccepted(sessionInvitationType);
```

### OnPlatformRequestedMultiplayer
`public override void OnPlatformRequestedMultiplayer()`

**Purpose:** **Purpose:** Invoked when the platform requested multiplayer event is raised.

```csharp
// Obtain an instance of MultiplayerGameManager from the subsystem API first
MultiplayerGameManager multiplayerGameManager = ...;
multiplayerGameManager.OnPlatformRequestedMultiplayer();
```

## Usage Example

```csharp
var manager = MultiplayerGameManager.Current;
```

## See Also

- [Area Index](../)