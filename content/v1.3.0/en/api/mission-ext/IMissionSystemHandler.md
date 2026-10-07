---
title: "IMissionSystemHandler"
description: "Auto-generated class reference for IMissionSystemHandler."
---
# IMissionSystemHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IMissionSystemHandler`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IMissionSystemHandler.cs`

## Overview

`IMissionSystemHandler` is the interface through which `MissionState` — the object that owns a mission's loading and tick loop — reaches out to whatever is presenting that mission. Seven members: six `void`/lifecycle calls and one predicate, `RenderIsReady` (`IMissionSystemHandler.cs:25`). It is not a mission behaviour; it is stored on `MissionState` as the settable property `public IMissionSystemHandler Handler { get; set; }` (`MissionState.cs:18`), so its lifetime is the `MissionState` singleton, not a mission, and it survives mission teardown.

The one production implementer is `MissionScreen` (`MissionScreen.cs:20`), and it does so **explicitly**: `void IMissionSystemHandler.OnMissionAfterStarting(Mission mission)` (`MissionScreen.cs:2951`) and `bool IMissionSystemHandler.RenderIsReady()` (`MissionScreen.cs:3133`) are private-by-interface members. That means you cannot call `screen.OnMissionAfterStarting(mission)` on a `MissionScreen`-typed variable; you have to go through the interface, and a replacement handler hides the screen's implementation entirely because there is only one slot.

## Mental Model

The seven calls are driven from seven different places, and — this is the part that is easy to get wrong — six of the seven are null-guarded while one is not.

Null-guarded in `MissionState`: `BeforeMissionTick` (`MissionState.cs:156`), `AfterMissionTick` (`MissionState.cs:219`), `OnMissionAfterStarting` (`MissionState.cs:377`), `OnMissionLoadingFinished` (`MissionState.cs:385`), and `OnAddBehaviors` (`MissionState.cs:290`). `RenderIsReady` is guarded but *inverted* — the call site reads `if (!flag && (this.Handler == null || this.Handler.RenderIsReady()))` (`MissionState.cs:120`), so a **null handler is treated as "ready"**. Loading will proceed with no handler at all.

Not guarded: `UpdateCamera`. `Mission.Tick` calls `this._missionState.Handler.UpdateCamera(this, realDt)` directly (`Mission.cs:3349`), with only an `if (!GameNetwork.IsDedicatedServer && updateCamera)` around it. So `MissionState.Handler = null` is survivable right up to the point the mission ticks, at which point it is a `NullReferenceException` on every frame. The nullable-looking API and the non-null reality are the boundary.

`OnAddBehaviors` is the odd one out semantically: it takes the pipeline of mission behaviours and returns the pipeline, so it is a filter, not a notification. Its `addDefaultMissionBehaviors` flag tells you whether the caller is about to append the stock behaviours, and returning the input unchanged discards everything passed in.

`RenderIsReady` returns `this.MissionStartedRendering()` in the shipped implementation (`MissionScreen.cs:3133`) — a one-line delegation, so overriding it correctly means gating on the mission screen's render readiness, not on scene loading progress.

## How to use

**Getting it.** Replace the slot on the `MissionState` singleton. Do it from a game-state listener or a screen constructor, and restore it to `null` when your screen goes away:

```csharp
public class MyMissionHandler : IMissionSystemHandler
{
    private readonly MissionScreen _fallback;

    public MyMissionHandler(MissionScreen fallback) { _fallback = fallback; }

    public void OnMissionAfterStarting(Mission mission)
    {
        // The shipped screen adds itself as a mission listener here (MissionScreen.cs:2951);
        // a replacement is responsible for whatever it needs from that point on.
    }

    public void OnMissionLoadingFinished(Mission mission) { }

    public void BeforeMissionTick(Mission mission, float realDt) { }
    public void AfterMissionTick(Mission mission, float realDt)  { }
    public void UpdateCamera(Mission mission, float realDt)       { }

    public bool RenderIsReady()
    {
        // Return true to let MissionState leave the loading state (MissionState.cs:120).
        return _fallback.MissionStartedRendering();
    }

    public IEnumerable<MissionBehavior> OnAddBehaviors(
        IEnumerable<MissionBehavior> behaviors, Mission mission,
        string missionName, bool addDefaultMissionBehaviors)
    {
        // Return the pipeline; returning empty removes every behaviour including defaults.
        return behaviors;
    }
}

// install: MissionState.Current is the singleton that owns the Handler slot (MissionState.cs:23)
IMissionSystemHandler previous = MissionState.Current.Handler;
MissionState.Current.Handler = new MyMissionHandler((MissionScreen)ScreenManager.CurrentScreen);
```

Read it back the same way — `MissionState.Current.Handler` — there is no resolver and no registry.

`MissionState.Current` is itself transient: the constructor sets it (`MissionState.cs:49`) and mission teardown nulls it (`MissionState.cs:60`). A handler installed on a previous mission's state is not carried over.

**The mistake that hides a broken mission for an hour.** Returning `false` from `RenderIsReady` on the assumption that "not ready" is the safe default. The call site ORs it with a null check and *blocks* loading while it is false (`MissionState.cs:120`), so a `false` that never flips to `true` freezes the mission in the loading state with no exception, no log line, and a black screen.

## See Also

- [IGameNetworkHandler — the network-side callback contract in the same area](../IGameNetworkHandler)
- [IRoundComponent — a behaviour contract read out of the live mission](../IRoundComponent)
- [MissionHintLogic — a small mission behaviour for contrast](../MissionHintLogic)
- [Mission — the object whose tick loop calls UpdateCamera](../../mission/Mission)
- [Area Index](../)

## How to use

The placeholder snippet previously on this page was doubly broken: its type name carried a doubled `I` prefix that names nothing, and it assigned an ellipsis as if a registry would supply the instance. This contract is assigned to a property, never resolved.

```csharp
MissionState.Instance.Handler = new MyMissionHandler();
```

## See Also

- [IGameNetworkHandler — the network-side callback contract in the same area](../IGameNetworkHandler)
- [IRoundComponent — a behaviour contract read out of the live mission](../IRoundComponent)
- [MissionHintLogic — a small mission behaviour for contrast](../MissionHintLogic)
- [Mission — the object whose tick loop calls UpdateCamera](../../mission/Mission)
- [Area Index](../)