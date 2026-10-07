---
title: "BaseNetworkComponentData"
description: "Auto-generated class reference for BaseNetworkComponentData."
---
# BaseNetworkComponentData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BaseNetworkComponentData : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `TaleWorlds.MountAndBlade/BaseNetworkComponentData.cs`

## Overview

`BaseNetworkComponentData` is a `UdpNetworkComponent` that carries one piece of replicated state between a
multiplayer client and the server: which battle in a multi-battle scenario the client has just finished
loading. The value lives in `CurrentBattleIndex`, a get-only property with a private setter
(`BaseNetworkComponentData.cs:11`), and the only write path is `UpdateCurrentBattleIndex(int)`
(`BaseNetworkComponentData.cs:14`).

The base class is where the network plumbing lives: the `UdpNetworkComponent` constructor builds a
`NetworkMessageHandlerRegistererContainer` and immediately calls `AddRemoveMessageHandlers` and
`RegisterMessages` on it (`UdpNetworkComponent.cs:9`). This subclass adds no message handlers of its own —
it overrides nothing.

The single consumer in the base game is `MissionState.TickMission`, which on a client's *first tick after
loading* of a continuing mission reads the index and reports it to the server with a `FinishedLoading`
message (`MissionState.cs:146`). It is a load-completion acknowledgement, not battle state.

## Mental Model

Read it as a one-field server-confirmation channel, not as general mission network data. Four boundaries:

- **The write method has no managed caller.** Searching the 1.3.15 C# tree for `UpdateCurrentBattleIndex`
  finds only its own declaration; the value arrives over the network path rather than from game code. If you
  are wiring this yourself in a mod, do not expect anything in the base game to start populating it.
- **`MaxIntermissionStateTime` is dead in this version.** The `const float` at
  `BaseNetworkComponentData.cs:20` (`240f`) has no reader anywhere in the tree. Anything you read into it —
  "the intermission between battles times out after four minutes" — is not enforced by any code you can see
  in 1.3.15.
- **`CurrentBattleIndex` is only read on a client.** The read site is inside a condition requiring
  `GameNetwork.IsClient`, `FirstMissionTickAfterLoading`, and `Mission.State.Continuing`
  (`MissionState.cs:144`). On a server or on the first mission of a session the value is never consulted, so
  setting it has no observable effect outside that one window.
- **It is a network component, so it is resolved by generic lookup, not by construction.**
  `GameNetwork.GetNetworkComponent<BaseNetworkComponentData>()` is the access path, and the registration
  that makes that lookup succeed happens in `GameNetwork`'s component table — not in this file.

## How to use

**Getting one.** Do not `new` it. Register the component with `GameNetwork` during network startup the way
the other `UdpNetworkComponent`s are registered, then read it through the generic lookup inside mission
code. `BaseNetworkComponentData` itself gives you no factory and no constructor beyond the protected base
one (`UdpNetworkComponent.cs:9`).

**Typical use** — a behaviour that acknowledges which battle segment just finished, using the same access
path the base game does:

```csharp
public class MultiBattleLoadAck : MissionLogic
{
    public override void OnMissionTick(int tick)
    {
        if (!GameNetwork.IsClient) { return; }
        if (Mission.Current == null || Mission.Current.CurrentState != Mission.State.Continuing) { return; }

        // Same read path as MissionState.cs:146
        int battleIndex = GameNetwork.GetNetworkComponent<BaseNetworkComponentData>().CurrentBattleIndex;

        GameNetwork.BeginModuleEventAsClient();
        GameNetwork.WriteMessage(new FinishedLoading(battleIndex));
        GameNetwork.EndModuleEventAsClient();
    }
}
```

**The mistake that bites.** Treating `MaxIntermissionStateTime` as a live timeout and writing intermission
logic against it. The constant is declared in 1.3.15 and read by nothing, so a mod that gates a
four-minute timer on it is relying on a value no engine code enforces — and if a later version does start
reading it, the behaviour will change without anything in your mod. Use your own timer.



## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentBattleIndex` | `public int CurrentBattleIndex { get; }` |

## Key Methods

### UpdateCurrentBattleIndex
`public void UpdateCurrentBattleIndex(int currentBattleIndex)`

**Purpose:** Recalculates and stores the latest representation of current battle index.

```csharp
// Obtain an instance of BaseNetworkComponentData from the subsystem API first
BaseNetworkComponentData baseNetworkComponentData = ...;
baseNetworkComponentData.UpdateCurrentBattleIndex(0);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
BaseNetworkComponentData entry = ...;
```

## See Also

- [Area Index](../)
- [MissionState](../MissionState)
- [BattleEndLogic](../BattleEndLogic)
- [BattleSpawnModel](../BattleSpawnModel)
- [中文页面](../../../../zh/api/mission-ext/BaseNetworkComponentData)