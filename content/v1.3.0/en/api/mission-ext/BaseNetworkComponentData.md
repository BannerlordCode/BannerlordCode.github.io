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

`BaseNetworkComponentData` is the small state carrier at the bottom of the multiplayer UDP network component hierarchy. It derives from `UdpNetworkComponent` (`BaseNetworkComponentData.cs:6`) and adds exactly one mutable field, `CurrentBattleIndex` (`BaseNetworkComponentData.cs:11`), plus a constant, `MaxIntermissionStateTime = 240f` (`BaseNetworkComponentData.cs:20`). There are no methods of its own beyond the one that writes the field.

It is not a mission behaviour. It lives in `GameNetwork.NetworkComponents`, a flat per-process list of `UdpNetworkHandler` instances, not in the mission behaviour list. That distinction is the single most common source of confusion about this class. The base constructor already wires itself into the network: it builds a `NetworkMessageHandlerRegistererContainer`, calls the virtual `AddRemoveMessageHandlers`, and calls `RegisterMessages()` (`UdpNetworkComponent.cs:13`) — all from the constructor, which is why registration is not something you have to remember to do.

Where it is actually read is worth knowing: `MissionState.TickMission` fetches it by type and puts the index straight into a `FinishedLoading` message to the server, but only on the client's very first mission tick after loading finishes and only when the mission is in the `Continuing` state (`MissionState.cs:146`, `MissionState.cs:149`). If either condition fails, the index is never sent and the server is never told which battle this client loaded.

## Mental Model

`CurrentBattleIndex` has a private setter and exactly one writer, `UpdateCurrentBattleIndex` (`BaseNetworkComponentData.cs:14`, which assigns at `BaseNetworkComponentData.cs:16`). That makes it a *replicated-from-server* value: the server pushes the index, the client reads it. There is no local setter, no clamping, and no validation — whatever `int` you hand it is what every client sees.

The design assumption is that exactly one instance of this type is registered, because consumers look it up by type with no discriminator:

```csharp
int battleIndex = GameNetwork.GetNetworkComponent<BaseNetworkComponentData>().CurrentBattleIndex;
```

`UdpNetworkComponent.OnUdpNetworkHandlerClose` calls `UnregisterMessages()` and then removes itself from `GameNetwork.NetworkComponents` (`UdpNetworkComponent.cs:27`, `UdpNetworkComponent.cs:29`), so a component that is not closed stays in that list for the whole process.

Two boundaries are worth stating plainly. First, `GetNetworkComponent<BaseNetworkComponentData>()` is only safe while a session is active and the component is registered; calling it before the network is up, or after close, has nothing to hand back. Second — and this is the sharp edge — `MaxIntermissionStateTime` is declared but never read anywhere in this tree. No code compares against 240f. If you patch it expecting a 4-minute intermission cap, nothing in the engine changes; the cap you want has to come from the intermission logic itself.

## How to use

**Getting it.** It is registered as a network component, so the retrieval path is `GameNetwork`, not `Mission`. Construct it and register it during network setup:

```csharp
BaseNetworkComponentData baseData = new BaseNetworkComponentData();
GameNetwork.NetworkComponents.Add(baseData);

// Later, on the authoritative side, push the index out.
baseData.UpdateCurrentBattleIndex(battleIndex);

// Client side, exactly how MissionState.cs:146 reads it.
BaseNetworkComponentData remote = GameNetwork.GetNetworkComponent<BaseNetworkComponentData>();
int seen = remote.CurrentBattleIndex;
```

Subclass it if you need your own replicated fields alongside the index — the constructor chain still registers the base, and your overrides of `AddRemoveMessageHandlers` run during that same construction.

**Typical use** — carry a mod-owned replicated field next to the shipped index:

```csharp
public class ModMissionNetworkComponent : BaseNetworkComponentData
{
    public int WaveNumber { get; private set; }

    protected override void AddRemoveMessageHandlers(
        GameNetwork.NetworkMessageHandlerRegistererContainer registerer)
    {
        registerer.RegisterMessage<SetWaveNumber>(OnSetWaveNumber);
    }

    private void OnSetWaveNumber(SetWaveNumber message)
    {
        WaveNumber = message.WaveNumber;
        UpdateCurrentBattleIndex(message.BattleIndex);
    }
}
```

**Most common mistake, and what it costs.** Writing `CurrentBattleIndex` from the client, or expecting `UpdateCurrentBattleIndex` to propagate anything by itself. The method is a plain field assignment with no network send (`BaseNetworkComponentData.cs:16`) — it only changes *your* process's copy. Because the setter is private there is no other way to update it, which makes it look authoritative when it is not: if you call it on a client to fake progress, the value you wrote is discarded the moment the real network message lands, and the `FinishedLoading` the client sends back carries whatever the server's copy said, so a desync shows up as the wrong battle being reported to the server rather than as any visible error.

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
- [UdpNetworkComponent](../UdpNetworkComponent)
- [MissionNetworkComponent](../MissionNetworkComponent)
- [BaseNetworkComponentData (1.3.15)](../../../../zh/api/mission-ext/BaseNetworkComponentData)
- [Game](../../core-extra/Game)