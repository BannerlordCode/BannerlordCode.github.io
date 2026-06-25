---
title: "MultiplayerAdminComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerAdminComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerAdminComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerAdminComponent.cs`

## Overview

`MultiplayerAdminComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MultiplayerAdminComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnSelectPlayerToKickDelegate
`public delegate void OnSelectPlayerToKickDelegate(bool banPlayer)`

**Purpose:** Called when the `select player to kick delegate` event is raised.

### OnSetAdminMenuActiveStateDelegate
`public delegate void OnSetAdminMenuActiveStateDelegate(bool showMenu)`

**Purpose:** Called when the `set admin menu active state delegate` event is raised.

### OnMissionStateActivated
`public override void OnMissionStateActivated()`

**Purpose:** Called when the `mission state activated` event is raised.

### ChangeAdminMenuActiveState
`public void ChangeAdminMenuActiveState(bool isActive)`

**Purpose:** Handles logic related to `change admin menu active state`.

### KickPlayer
`public void KickPlayer(NetworkCommunicator peerToKick, bool banPlayer)`

**Purpose:** Handles logic related to `kick player`.

### GlobalMuteUnmutePlayer
`public void GlobalMuteUnmutePlayer(NetworkCommunicator peerToMute, bool unmute)`

**Purpose:** Handles logic related to `global mute unmute player`.

### EndWarmup
`public void EndWarmup()`

**Purpose:** Handles logic related to `end warmup`.

### ChangeWelcomeMessage
`public void ChangeWelcomeMessage(string newWelcomeMessage)`

**Purpose:** Handles logic related to `change welcome message`.

### AdminAnnouncement
`public void AdminAnnouncement(string message, bool isBroadcast)`

**Purpose:** Handles logic related to `admin announcement`.

### ChangeClassRestriction
`public void ChangeClassRestriction(FormationClass classToChangeRestriction, bool newValue)`

**Purpose:** Handles logic related to `change class restriction`.

### AdminEndMission
`public void AdminEndMission()`

**Purpose:** Handles logic related to `admin end mission`.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### MPAdminAnnouncement
`public static string MPAdminAnnouncement(List<string> strings)`

**Purpose:** Handles logic related to `m p admin announcement`.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### MPAdminKickPlayer
`public static string MPAdminKickPlayer(List<string> strings)`

**Purpose:** Handles logic related to `m p admin kick player`.

### MPAdminBanPlayer
`public static string MPAdminBanPlayer(List<string> strings)`

**Purpose:** Handles logic related to `m p admin ban player`.

### MPAdminChangeWelcomeMessage
`public static string MPAdminChangeWelcomeMessage(List<string> strings)`

**Purpose:** Handles logic related to `m p admin change welcome message`.

### MPAdminChangeClassRestriction
`public static string MPAdminChangeClassRestriction(List<string> strings)`

**Purpose:** Handles logic related to `m p admin change class restriction`.

### MPHostRestartGame
`public static string MPHostRestartGame(List<string> strings)`

**Purpose:** Handles logic related to `m p host restart game`.

### MPAdminChangeServerSlots
`public static string MPAdminChangeServerSlots(List<string> strings)`

**Purpose:** Handles logic related to `m p admin change server slots`.

## Usage Example

```csharp
var component = agent.GetComponent<MultiplayerAdminComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)