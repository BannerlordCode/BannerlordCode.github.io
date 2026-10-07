---
title: "MultiplayerGameNotificationsComponent"
description: "Auto-generated class reference for MultiplayerGameNotificationsComponent."
---
# MultiplayerGameNotificationsComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGameNotificationsComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerGameNotificationsComponent.cs`

## Overview

`MultiplayerGameNotificationsComponent` is the multiplayer mission's toast-and-sound bus: it turns gameplay events ("flag captured", "player kicked", "poll rejected") into a brief on-screen message with an optional sound, and synchronises that across the session. It derives from `MissionNetwork` (`MultiplayerGameNotificationsComponent.cs:13`), so it is a networked mission behaviour, not an agent component. `MissionMultiplayerGameModeBase` caches one instance at initialisation (`MissionMultiplayerGameModeBase.cs:59`) into a `protected` field (`MissionMultiplayerGameModeBase.cs:413`), and `MissionMultiplayerGameModeBaseClient` exposes its own copy read-only (`MissionMultiplayerGameModeBaseClient.cs:28`).

The public surface is a flat list of event methods — `WarmupEnding`, `GameOver`, `PreparationStarted`, `FlagsXRemoved`, `FlagXRemaining`, `FlagsWillBeRemovedInXSeconds`, `FlagXCapturedByTeamX`, `GoldCarriedFromPreviousRound`, `PlayerIsInactive`, `FormationAutoFollowEnforced`, `PollRejected`, `PlayerKicked` — plus one public constant-like property, `NotificationCount`, which returns the literal `18` (`MultiplayerGameNotificationsComponent.cs:17`, `MultiplayerGameNotificationsComponent.cs:21`).

## Mental Model

`NotificationCount` is not a computed count — it is a **hard-coded literal that must match the wire protocol**, and the tree tells you so. `CompressionMission` builds a compression table from it: `new CompressionInfo.Integer(0, MultiplayerGameNotificationsComponent.NotificationCount, true)` (`CompressionMission.cs:185`). So the value is a protocol bound. And the enum it counts is `private enum MultiplayerNotificationEnum` (`MultiplayerGameNotificationsComponent.cs:365`) — so a mod **cannot** add a member to it from outside. That closes the door on extending the set from C# entirely: the notifications are fixed at 18, the count is fixed at 18, and the compression table is built from the count. Your only lever is calling the existing methods.

The dispatch order in `HandleNewNotification` is peer-first, then team, then everyone (`MultiplayerGameNotificationsComponent.cs:142`, `MultiplayerGameNotificationsComponent.cs:147`, `MultiplayerGameNotificationsComponent.cs:152`), and the first non-null target wins with an early `return`. So passing both a team and a peer silently drops the team.

Only the **server** is supposed to call these methods, and the send paths enforce that by target shape rather than by checking a role flag. `SendNotificationToPeer` shows locally and stops if the target *is* the server peer (`MultiplayerGameNotificationsComponent.cs:189`) — otherwise it writes a `NotificationMessage`. `SendNotificationToEveryone` shows locally first and then broadcasts (`MultiplayerGameNotificationsComponent.cs:176` through `MultiplayerGameNotificationsComponent.cs:183`). `ShowNotification` is the one place a dedicated server is excluded, by an explicit `if (!GameNetwork.IsDedicatedServer)` (`MultiplayerGameNotificationsComponent.cs:158`) — so a headless server never tries to render a toast.

Rendering is **reflection-driven off the enum member name**. `ShowNotification` looks up the enum member's field, takes its `NotificationProperty` attributes with `.Single<object>()` (`MultiplayerGameNotificationsComponent.cs:160`), and bails if there is none (`MultiplayerGameNotificationsComponent.cs:161`). `.Single` means an enum member carrying two `[NotificationProperty]` attributes throws `InvalidOperationException` at message time, not at load time — and each shipped member carries three positional arguments, a text id then one or two sound ids (`MultiplayerGameNotificationsComponent.cs:368`). Then parameters equal to `-1` are filtered out before formatting (`MultiplayerGameNotificationsComponent.cs:163`), which is why every method defaults its params to `-1`: `-1` means "no value for this placeholder".

`ToSoundString` picks between up to two sound ids based on the notification and, for the flag-capture family, on which team is involved (`MultiplayerGameNotificationsComponent.cs:232`, `MultiplayerGameNotificationsComponent.cs:236` through `MultiplayerGameNotificationsComponent.cs:240`). So the same notification has a different sound depending on team relationship — copying a notification method without copying its two-sided sound logic gives you a message with the wrong audio.

`PollRejected` is worth reading for a different reason: it does **not** go through `HandleNewNotification`. The first branch calls `ShowNotification` directly with `Array.Empty<int>()` (`MultiplayerGameNotificationsComponent.cs:106`) — no `BeginBroadcastModuleEvent`, no `NotificationMessage`. A rejected poll is therefore shown locally only, on the peer that tried to open it, and never reaches the network. Copying that shape for your own rejection feedback is the correct model if the message is peer-local; the `HandleNewNotification` path is for facts everyone should see.

## How to use

**Getting it.** Look it up from the live mission — the game-mode base does exactly that — and only call it on the server.

```csharp
MultiplayerGameNotificationsComponent notes =
    Mission.GetMissionBehavior<MultiplayerGameNotificationsComponent>();
if (notes != null && GameNetwork.IsServer)
{
    notes.PreparationStarted();               // broadcasts to everyone
    notes.PlayerIsInactive(peer);             // notifies that one peer
    notes.GoldCarriedFromPreviousRound(500, peer);
}
```

You cannot add a notification from a mod: `MultiplayerNotificationEnum` is `private` (`MultiplayerGameNotificationsComponent.cs:365`) and `ShowNotification` resolves the `[NotificationProperty]` by reflecting over that enum's fields by name (`MultiplayerGameNotificationsComponent.cs:160`). Your extension point is the **call site**, not the message set — call the existing methods from your game-mode override and let the component own the text, the sound and the sync:

```csharp
public class MyGameMode : MissionMultiplayerGameModeBase
{
    public override void OnMissionTick(float dt)
    {
        base.OnMissionTick(dt);
        if (NotificationsComponent != null && GameNetwork.IsServer && /* your condition */)
        {
            NotificationsComponent.PreparationStarted();
        }
    }
}
```

If you need a message that is genuinely not in the set, do not fake it through this component — raise your own `MBInformationManager.AddQuickInformation` on the clients, because the compression table at `CompressionMission.cs:185` is sized from a literal you cannot influence.

**The mistake that makes your notification appear on your machine and nowhere else.** Calling `ShowNotification` directly — as `PollRejected` does for its first branch (`MultiplayerGameNotificationsComponent.cs:106`) — instead of going through `HandleNewNotification`. `ShowNotification` only renders locally (`MultiplayerGameNotificationsComponent.cs:156`); the network copy comes from the `NotificationMessage` written by `SendNotificationToEveryone` (`MultiplayerGameNotificationsComponent.cs:182`). Calling the private renderer is impossible from outside, and calling a public method that happens to be local-only gets you a toast your peers never see, with no error to indicate the message was not broadcast.

## Key Properties

| Name | Signature |
|------|-----------|
| `NotificationCount` | `public static int NotificationCount { get; }` |

## Key Methods

### WarmupEnding
`public void WarmupEnding()`

**Purpose:** Executes the WarmupEnding logic.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.WarmupEnding();
```

### GameOver
`public void GameOver(Team winnerTeam)`

**Purpose:** Executes the GameOver logic.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.GameOver(winnerTeam);
```

### PreparationStarted
`public void PreparationStarted()`

**Purpose:** Executes the PreparationStarted logic.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.PreparationStarted();
```

### FlagsXRemoved
`public void FlagsXRemoved(FlagCapturePoint removedFlag)`

**Purpose:** Executes the FlagsXRemoved logic.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.FlagsXRemoved(removedFlag);
```

### FlagXRemaining
`public void FlagXRemaining(FlagCapturePoint remainingFlag)`

**Purpose:** Executes the FlagXRemaining logic.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.FlagXRemaining(remainingFlag);
```

### FlagsWillBeRemovedInXSeconds
`public void FlagsWillBeRemovedInXSeconds(int timeLeft)`

**Purpose:** Executes the FlagsWillBeRemovedInXSeconds logic.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.FlagsWillBeRemovedInXSeconds(0);
```

### FlagXCapturedByTeamX
`public void FlagXCapturedByTeamX(SynchedMissionObject flag, Team capturingTeam)`

**Purpose:** Executes the FlagXCapturedByTeamX logic.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.FlagXCapturedByTeamX(flag, capturingTeam);
```

### GoldCarriedFromPreviousRound
`public void GoldCarriedFromPreviousRound(int carriedGoldAmount, NetworkCommunicator syncToPeer)`

**Purpose:** Executes the GoldCarriedFromPreviousRound logic.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.GoldCarriedFromPreviousRound(0, syncToPeer);
```

### PlayerIsInactive
`public void PlayerIsInactive(NetworkCommunicator peer)`

**Purpose:** Executes the PlayerIsInactive logic.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.PlayerIsInactive(peer);
```

### FormationAutoFollowEnforced
`public void FormationAutoFollowEnforced(NetworkCommunicator peer)`

**Purpose:** Formats ion auto follow enforced into a string suitable for display or storage.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.FormationAutoFollowEnforced(peer);
```

### PollRejected
`public void PollRejected(MultiplayerPollRejectReason reason)`

**Purpose:** Executes the PollRejected logic.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.PollRejected(reason);
```

### PlayerKicked
`public void PlayerKicked(NetworkCommunicator kickedPeer)`

**Purpose:** Executes the PlayerKicked logic.

```csharp
// Obtain an instance of MultiplayerGameNotificationsComponent from the subsystem API first
MultiplayerGameNotificationsComponent multiplayerGameNotificationsComponent = ...;
multiplayerGameNotificationsComponent.PlayerKicked(kickedPeer);
```

## Usage Example

```csharp
The `agent.GetComponent<MultiplayerGameNotificationsComponent>()` line previously on this page could never work for this type: it is a `MissionNetwork`, not an `AgentComponent`, so it cannot satisfy `Agent.GetComponent<T>()`'s `where T : AgentComponent` constraint (`Agent.cs:3107`). It is a mission behaviour:

```csharp
var notes = Mission.Current.GetMissionBehavior<MultiplayerGameNotificationsComponent>();
```
```

## See Also

- [MissionNetworkComponent — the other large networked mission behaviour](../MissionNetworkComponent)
- [MultiplayerMissionAgentVisualSpawnComponent — the sibling component the game mode also caches](../MultiplayerMissionAgentVisualSpawnComponent)
- [LobbyNetworkComponent — the lobby-phase counterpart of this toast bus](../LobbyNetworkComponent)
- [Area Index](../)