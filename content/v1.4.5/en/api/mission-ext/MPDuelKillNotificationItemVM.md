---
title: "MPDuelKillNotificationItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPDuelKillNotificationItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPDuelKillNotificationItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPDuelKillNotificationItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed/MPDuelKillNotificationItemVM.cs`

## Overview

`MPDuelKillNotificationItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEndOfDuel` | `public bool IsEndOfDuel { get; set; }` |
| `ArenaType` | `public int ArenaType { get; set; }` |
| `FirstPlayerScore` | `public int FirstPlayerScore { get; set; }` |
| `SecondPlayerScore` | `public int SecondPlayerScore { get; set; }` |
| `FirstPlayerName` | `public string FirstPlayerName { get; set; }` |
| `SecondPlayerName` | `public string SecondPlayerName { get; set; }` |
| `FirstPlayerCompassElement` | `public MPTeammateCompassTargetVM FirstPlayerCompassElement { get; set; }` |
| `SecondPlayerCompassElement` | `public MPTeammateCompassTargetVM SecondPlayerCompassElement { get; set; }` |

## Key Methods

### InitProperties
`public void InitProperties(MissionPeer firstPlayerPeer, MissionPeer secondPlayerPeer)`

**Purpose:** Initializes the state, resources, or bindings for `properties`.

### ExecuteRemove
`public void ExecuteRemove()`

**Purpose:** Executes the `remove` operation or workflow.

## Usage Example

```csharp
var value = new MPDuelKillNotificationItemVM();
value.InitProperties(firstPlayerPeer, secondPlayerPeer);
```

## See Also

- [Complete Class Catalog](../catalog)