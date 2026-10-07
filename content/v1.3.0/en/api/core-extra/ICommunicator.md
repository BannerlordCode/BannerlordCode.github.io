---
title: "ICommunicator"
description: "Auto-generated class reference for ICommunicator."
---
# ICommunicator

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public interface ICommunicator`
**Base:** none
**File:** `TaleWorlds.Core/ICommunicator.cs`

## Overview

`ICommunicator` is the nine-member seam between the generic peer/`PeerComponent` machinery in `TaleWorlds.Core` and whatever actually moves bytes. It is declared at `ICommunicator.cs:6` and is a pure interface — no implementation, no static entry point, no way to construct one.

Read it as three questions plus three actions. The questions are about the *peer this object represents*: who it is (`VirtualPlayer`, `ICommunicator.cs:10`), whether it is a real network peer (`IsNetworkActive`, line 23), whether its connection is live right now (`IsConnectionActive`, line 27), whether it is the host (`IsServerPeer`, line 31), and whether its state has finished replicating (`IsSynchronized`, line 36 — the only writable member). The actions are the replication hooks the engine calls on your component: `OnSynchronizeComponentTo(VirtualPlayer, PeerComponent)` (line 13), `OnAddComponent` (line 16) and `OnRemoveComponent` (line 19).

`bannerlord-1.3.0` ships exactly two implementations. `DummyCommunicator` (`DummyCommunicator.cs:7`) is the offline stand-in: all three `On*` bodies are empty and every flag is hard-coded. `NetworkCommunicator` (`NetworkCommunicator.cs:11`) is `sealed` and does the real work — it opens `GameNetwork` module events, writes `AddPeerComponent`/`RemovePeerComponent` messages, and broadcasts with `EventBroadcastFlags.ExcludeTargetPlayer`. Instances are produced by `GameNetwork.AddNewPlayerOnServer` (`GameNetwork.cs:524`), which picks a dummy at `GameNetwork.cs:546`, recycles a disconnected peer's communicator at `GameNetwork.cs:556`, or creates a live one at `GameNetwork.cs:568`. Each `VirtualPlayer` keeps its own as a public readonly field (`VirtualPlayer.cs:294`).

## Mental Model

The mental model is *one object per peer, held by that peer's `VirtualPlayer`*, and the whole point of the interface is that the mission layer never learns whether it is talking to a socket or to a stub. A `PeerComponent` you write does not send anything itself; it exposes itself to the engine, and the engine asks the peer's `ICommunicator` to replicate it.

The four flags are **independent axes, not a progression**. Reading them as a single "connection state" is the mistake that costs you:

- `IsNetworkActive` answers "am I a stub?". `NetworkCommunicator` returns `true` unconditionally (`NetworkCommunicator.cs:167`); `DummyCommunicator` returns `false` (`DummyCommunicator.cs:34`). It says nothing about whether anyone is actually connected right now.
- `IsConnectionActive` answers "is this specific peer still here?". It is a two-part live test: `GameNetwork.VirtualPlayers[this.Index] == this.VirtualPlayer && MBAPI.IMBPeer.IsActive(this.Index)` (`NetworkCommunicator.cs:177`). The first conjunct is a reconnection guard — if the peer reconnected and now occupies a different slot, the index comparison fails and the peer reports *inactive even though its connection is fine*.
- `IsServerPeer` is a plain cached field with a private setter on the concrete type (`NetworkCommunicator.cs:233`), set through `SetServerPeer` — there is no interface route to change it.
- `IsSynchronized` is the only writable member and it is asymmetric. The getter branches on `GameNetwork.IsServer`: on the host it queries `MBAPI.IMBPeer.GetIsSynchronized(this.Index)`, on a client it returns the locally cached `_isSynchronized` (`NetworkCommunicator.cs:188`). The setter only pushes to the native layer when `GameNetwork.IsServer` (`NetworkCommunicator.cs:198`). Write `IsSynchronized` from client-side mod code and you have changed a local field, nothing else. Note also that `DummyCommunicator` reports `IsSynchronized == true` (`DummyCommunicator.cs:65`) while reporting `IsNetworkActive == false` — the offline stub sits at the "synchronised but not networked" corner, so a naive `if (!comm.IsNetworkActive) skip sync` guard is fine but a `if (comm.IsSynchronized) treat as live` guard is not.

Three more consequences worth internalising before you write a component:

- **The `On*` methods are explicit interface implementations** on `NetworkCommunicator` (`NetworkCommunicator.cs:283`, `NetworkCommunicator.cs:306`, `NetworkCommunicator.cs:323`). A local variable typed `NetworkCommunicator` cannot call them — it does not compile. Type your field and parameters as `ICommunicator` from the start.
- **`OnSynchronizeComponentTo` has no `GameNetwork.IsServer` guard at all.** It goes straight into `GameNetwork.BeginModuleEventAsServer(peer)` (`NetworkCommunicator.cs:325`), unlike `OnAddComponent` and `OnRemoveComponent`, which both open with an `if (GameNetwork.IsServer)` check (`NetworkCommunicator.cs:285`, `NetworkCommunicator.cs:308`). Call it from a client and you hit the host-only module-event API on the client thread.
- **You cannot create an implementation the engine will use.** Both `CreateAsServer` factories are `internal` (`NetworkCommunicator.cs:266`, `DummyCommunicator.cs:79`), and the only production wiring is inside `GameNetwork.AddNewPlayerOnServer`. Implementing `ICommunicator` yourself is useful for tests and for intercepting, not for replacing the engine's peer.
- **The only identity that travels is `component.TypeId`, and it comes from the class name.** `OnAddComponent` writes `new AddPeerComponent(this, component.TypeId)` and nothing else (`NetworkCommunicator.cs:289`). The id map is built by hashing type names — `_peerComponentIds.Add(type, (uint)Common.GetDJB2(type.Name))` (`VirtualPlayer.cs:51`) — so two `PeerComponent` subclasses with the same simple name in different namespaces collide on a `Dictionary.Add` and throw `ArgumentException` when the static constructor runs, rather than degrading gracefully.

## How to use

### Getting one

Do not construct it. Read it off the peer: `VirtualPlayer.Communicator` is a public readonly field (`VirtualPlayer.cs:294`), and `VirtualPlayer.AddComponent<T>()` is what actually drives the interface — it stamps `TypeId`, calls `this.Communicator.OnAddComponent(t)` (`VirtualPlayer.cs:193`) and only then calls `t.Initialize()` (`VirtualPlayer.cs:194`). If you are writing a `PeerComponent`, type every field and parameter as `ICommunicator`, never as `NetworkCommunicator`.

### Typical use

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// A mod PeerComponent. The type id the wire sees is GetDJB2("MyModComponent"),
// derived from this class name alone, so keep it unique across all mod assemblies.
public sealed class MyModComponent : PeerComponent
{
    private int _payload;

    // No [SyncableComponent] attribute exists; discovery is reflection over
    // loaded assemblies inside VirtualPlayer's static constructor.
    public override void Initialize()
    {
        // Runs AFTER OnAddComponent has already been called for this component.
        _payload = 1;
    }

    // Called by the engine; the engine picked the ICommunicator for us.
    public void PushTo(VirtualPlayer peer, PeerComponent component, ICommunicator communicator)
    {
        // Host-only path: OnSynchronizeComponentTo has no IsServer guard of its own.
        if (GameNetwork.IsServer)
        {
            communicator.OnSynchronizeComponentTo(peer, component);
        }

        // Two independent axes. IsNetworkActive only says "not a DummyCommunicator";
        // IsConnectionActive is the one that does the live peer check.
        if (communicator.IsConnectionActive && communicator.IsSynchronized)
        {
            _payload++;
        }
    }
}

public static class MyModPeerSetup
{
    public static void Attach(VirtualPlayer peer)
    {
        // AddComponent<T> assigns Peer + TypeId, replicates, then calls Initialize().
        MyModComponent mine = peer.AddComponent<MyModComponent>();

        // Read back through the peer, not through your own field.
        MyModComponent again = peer.GetComponent<MyModComponent>();
    }
}
```

### The mistake that bites

Branching your replication on `IsNetworkActive` alone, or reading `IsNetworkActive` as "the multiplayer session is running". It is a stub test, not a liveness test — a live `NetworkCommunicator` returns `true` even for a peer that has dropped, and a `DummyCommunicator` returns `false` while simultaneously claiming `IsSynchronized == true`. Gate real work on `IsConnectionActive` (`NetworkCommunicator.cs:177`), and remember that it can read `false` for a perfectly healthy reconnecting peer because of the index-identity conjunct.

## Usage Example

```csharp
// Read the interface off the peer; VirtualPlayer.Communicator is a readonly field
// (VirtualPlayer.cs:294) that the networking layer has already filled in.
ICommunicator link = peer.Communicator;

// IsConnectionActive is the live check; IsNetworkActive only means "not a dummy".
if (link.IsConnectionActive && link.IsSynchronized)
{
    link.OnSynchronizeComponentTo(otherPeer, somePeerComponent);
}
```

## See Also

- [PeerComponent](../PeerComponent) — the base your own replicated component extends
- [VirtualPlayer](../VirtualPlayer) — owns a readonly `Communicator` field, one per peer
- [DummyCommunicator](../DummyCommunicator) — the offline stub whose three `On*` methods do nothing
- [GameStateManager](../GameStateManager) — where peers and their components are assembled
- [Area Index](../)