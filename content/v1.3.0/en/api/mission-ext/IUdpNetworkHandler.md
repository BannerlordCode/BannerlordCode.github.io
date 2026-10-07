---
title: "IUdpNetworkHandler"
description: "Auto-generated class reference for IUdpNetworkHandler."
---
# IUdpNetworkHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IUdpNetworkHandler`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IUdpNetworkHandler.cs`

## Overview

`IUdpNetworkHandler` is the fourteen-member contract every network handler in the game implements, and every member is `void`. It is a flat list of network lifecycle callbacks with no properties and no return values, spanning three families.

Per-frame and teardown: `OnUdpNetworkHandlerTick(float dt)` (`IUdpNetworkHandler.cs:12`) and `OnUdpNetworkHandlerClose()` (`IUdpNetworkHandler.cs:9`). Client arrival, in the order the network progresses: `HandleNewClientConnect(PlayerConnectionInfo)` (`IUdpNetworkHandler.cs:15`), then `HandleEarlyNewClientAfterLoadingFinished` / `HandleNewClientAfterLoadingFinished` / `HandleLateNewClientAfterLoadingFinished` (`IUdpNetworkHandler.cs:18`), then `HandleNewClientAfterSynchronized` / `HandleLateNewClientAfterSynchronized` (`IUdpNetworkHandler.cs:27`). Departure and failure: `HandleEarlyPlayerDisconnect` and `HandlePlayerDisconnect` (`IUdpNetworkHandler.cs:33`), `OnPlayerDisconnectedFromServer` (`IUdpNetworkHandler.cs:39`), `OnDisconnectedFromServer` (`IUdpNetworkHandler.cs:42`) and `OnEveryoneUnSynchronized` (`IUdpNetworkHandler.cs:45`).

Handlers live in one process-wide list, `GameNetwork.NetworkHandlers`, allocated once (`GameNetwork.cs:233`) and populated through `GameNetwork.AddNetworkHandler(IUdpNetworkHandler)` (`GameNetwork.cs:1019`). Dispatch is a plain `foreach` over that list — the tick at `GameNetwork.cs:245`, the disconnect callbacks at `GameNetwork.cs:324`.

## Mental Model

The early/late distinction is the thing to understand before implementing anything. `HandleEarlyPlayerDisconnect` and `HandlePlayerDisconnect` are **both** invoked on the same event, back to back, in that order (`GameNetwork.cs:324`), and both only when `GameNetwork.IsServer` (`GameNetwork.cs:322`). "Early" means before the peer is fully accounted for, "late" after — but the interface does not define what that means, and shipping implementations differ. Do not treat the early variant as a subset of the late one.

Role matters and the interface says nothing about it. Client-arrival callbacks are the ones you implement as a host; the disconnect callbacks only fire on the server. A handler that does the wrong work for its role will simply never be called, which is the cheapest possible failure and also the easiest to ship by accident.

The tick is wrapped in a single `try` around the whole loop, not per handler (`GameNetwork.cs:241`). An exception from any handler is caught, the failing handler's index `i` is used to name it in the log (`GameNetwork.cs:250`), and the stack trace and message are printed (`GameNetwork.cs:255`). The loop then ends — so **one throwing handler silently stops the remaining handlers' ticks for that frame**, and it does so again on every subsequent frame. It never removes the offender and never rethrows.

Registration and removal are separate calls against a shared list: `GameNetwork.AddNetworkHandler(IUdpNetworkHandler)` (`GameNetwork.cs:1019`) and `GameNetwork.RemoveNetworkHandler(IUdpNetworkHandler)` (`GameNetwork.cs:1025`), both taking the instance. A handler that outlives its own subsystem and stays in the list keeps receiving ticks, which is the classic leak for a mod that registers early and never unregisters.

Nothing in this interface is a query. There is no "is this peer synchronized" and no "how many clients are connected" — you get told about transitions and must keep your own state if you need it.

## How to use

**Getting one.** Implement the interface and register the instance with `GameNetwork.AddNetworkHandler` during your module's initialisation. Unregister with `GameNetwork.RemoveNetworkHandler` when your subsystem shuts down.

**Typical use** — a handler that only does the work its role is entitled to:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyNetworkHandler : IUdpNetworkHandler
{
    public void OnUdpNetworkHandlerTick(float dt)
    {
        // Runs on both server and client, once per network frame.
        MyPresence.Flush();
    }

    public void OnUdpNetworkHandlerClose()
    {
        MyPresence.Shutdown();
    }

    // --- arrival: only meaningful on the server ---
    public void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo)
    {
        if (!GameNetwork.IsServer)
        {
            return;
        }

        MyPresence.Expect(clientConnectionInfo.PlayerId);
    }

    public void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)
    {
    }

    public void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)
    {
        if (!GameNetwork.IsServer)
        {
            return;
        }

        MyPresence.Ready(networkPeer);
    }

    public void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)
    {
    }

    public void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)
    {
        if (GameNetwork.IsServer)
        {
            MyPresence.SendWelcome(networkPeer);
        }
    }

    public void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer)
    {
    }

    // --- departure ---
    public void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer)
    {
    }

    public void HandlePlayerDisconnect(NetworkCommunicator networkPeer)
    {
        if (GameNetwork.IsServer)
        {
            MyPresence.Forget(networkPeer);
        }
    }

    public void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)
    {
    }

    public void OnDisconnectedFromServer()
    {
        MyPresence.MarkDisconnected();
    }

    public void OnEveryoneUnSynchronized()
    {
        MyPresence.MarkUnSynchronized();
    }
}
```

Register it once: `GameNetwork.AddNetworkHandler(new MyNetworkHandler())` (`GameNetwork.cs:1019`), and pair that with `GameNetwork.RemoveNetworkHandler` on teardown.

**Most common mistake:** leaving empty method bodies that are supposed to do the work, because every member is `void`.

```csharp
public void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)
{
    // "Nothing needed here" — on a client, where this never fires anyway.
}
```

There is no compiler or runtime signal for a member you filled with nothing: the interface is satisfied, the handler registers, and the callback is dispatched (`GameNetwork.cs:324`) into a method that does nothing. The bug is invisible until the feature you meant to add simply never happens. Worse, an empty body is indistinguishable from a deliberate no-op, so review cannot catch it either. If a member is genuinely irrelevant to your handler, implement all fourteen and make each body say why it is empty, as in the example — never leave a member you intended to fill.

## See Also

- [Area Index](../)
- [GameNetwork — owns the handler list and dispatches every callback](../GameNetwork)
- [UdpNetworkComponent — the shipped handler that implements this contract](../UdpNetworkComponent)
- [中文页面](../../../../zh/api/mission-ext/IUdpNetworkHandler)