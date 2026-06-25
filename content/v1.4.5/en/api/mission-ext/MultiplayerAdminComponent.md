---
title: "MultiplayerAdminComponent"
description: "Auto-generated class reference for MultiplayerAdminComponent."
---
# MultiplayerAdminComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerAdminComponent.cs`

## Overview

`MultiplayerAdminComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MultiplayerAdminComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnSelectPlayerToKickDelegate
`public delegate void OnSelectPlayerToKickDelegate(bool banPlayer)`

**Purpose:** Invoked when the `select player to kick delegate` event is raised.

```csharp
// Obtain an instance of MultiplayerAdminComponent from the subsystem API first
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.OnSelectPlayerToKickDelegate(false);
```

### OnSetAdminMenuActiveStateDelegate
`public delegate void OnSetAdminMenuActiveStateDelegate(bool showMenu)`

**Purpose:** Invoked when the `set admin menu active state delegate` event is raised.

```csharp
// Obtain an instance of MultiplayerAdminComponent from the subsystem API first
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.OnSetAdminMenuActiveStateDelegate(false);
```

### OnMissionStateActivated
`public override void OnMissionStateActivated()`

**Purpose:** Invoked when the `mission state activated` event is raised.

```csharp
// Obtain an instance of MultiplayerAdminComponent from the subsystem API first
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.OnMissionStateActivated();
```

### ChangeAdminMenuActiveState
`public void ChangeAdminMenuActiveState(bool isActive)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerAdminComponent from the subsystem API first
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.ChangeAdminMenuActiveState(false);
```

### KickPlayer
`public void KickPlayer(NetworkCommunicator peerToKick, bool banPlayer)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerAdminComponent from the subsystem API first
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.KickPlayer(peerToKick, false);
```

### GlobalMuteUnmutePlayer
`public void GlobalMuteUnmutePlayer(NetworkCommunicator peerToMute, bool unmute)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerAdminComponent from the subsystem API first
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.GlobalMuteUnmutePlayer(peerToMute, false);
```

### EndWarmup
`public void EndWarmup()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerAdminComponent from the subsystem API first
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.EndWarmup();
```

### ChangeWelcomeMessage
`public void ChangeWelcomeMessage(string newWelcomeMessage)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerAdminComponent from the subsystem API first
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.ChangeWelcomeMessage("example");
```

### AdminAnnouncement
`public void AdminAnnouncement(string message, bool isBroadcast)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerAdminComponent from the subsystem API first
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.AdminAnnouncement("example", false);
```

### ChangeClassRestriction
`public void ChangeClassRestriction(FormationClass classToChangeRestriction, bool newValue)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerAdminComponent from the subsystem API first
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.ChangeClassRestriction(classToChangeRestriction, false);
```

### AdminEndMission
`public void AdminEndMission()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerAdminComponent from the subsystem API first
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.AdminEndMission();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of MultiplayerAdminComponent from the subsystem API first
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.OnBehaviorInitialize();
```

### MPAdminAnnouncement
`public static string MPAdminAnnouncement(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MultiplayerAdminComponent.MPAdminAnnouncement(strings);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the `remove behavior` event is raised.

```csharp
// Obtain an instance of MultiplayerAdminComponent from the subsystem API first
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.OnRemoveBehavior();
```

### MPAdminKickPlayer
`public static string MPAdminKickPlayer(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MultiplayerAdminComponent.MPAdminKickPlayer(strings);
```

### MPAdminBanPlayer
`public static string MPAdminBanPlayer(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MultiplayerAdminComponent.MPAdminBanPlayer(strings);
```

### MPAdminChangeWelcomeMessage
`public static string MPAdminChangeWelcomeMessage(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MultiplayerAdminComponent.MPAdminChangeWelcomeMessage(strings);
```

### MPAdminChangeClassRestriction
`public static string MPAdminChangeClassRestriction(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MultiplayerAdminComponent.MPAdminChangeClassRestriction(strings);
```

### MPHostRestartGame
`public static string MPHostRestartGame(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MultiplayerAdminComponent.MPHostRestartGame(strings);
```

### MPAdminChangeServerSlots
`public static string MPAdminChangeServerSlots(List<string> strings)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MultiplayerAdminComponent.MPAdminChangeServerSlots(strings);
```

## Usage Example

```csharp
var component = agent.GetComponent<MultiplayerAdminComponent>();
```

## See Also

- [Area Index](../)