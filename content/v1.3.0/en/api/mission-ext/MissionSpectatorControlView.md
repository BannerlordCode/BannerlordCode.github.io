---
title: "MissionSpectatorControlView"
description: "Auto-generated class reference for MissionSpectatorControlView."
---
# MissionSpectatorControlView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSpectatorControlView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionSpectatorControlView.cs`

## Overview

`MissionSpectatorControlView` is an **empty marker class** (`MissionSpectatorControlView.cs:6`) — no members, no body — deriving from `MissionView`. It names the slot that spectator mode's control panel occupies, and, like the other markers here, its only real content is its *name* in the override table.

`ViewCreator.CreateMissionSpectatorControlView(Mission mission = null)` (`ViewCreator.cs:112`) is the factory; its body is `ViewCreatorManager.CreateMissionView<MissionSpectatorControlView>(mission != null, mission, Array.Empty<object>())` (`ViewCreator.cs:114`). The Gauntlet replacement `MissionGauntletSpectatorControl` is declared `[OverrideView(typeof(MissionSpectatorControlView))]`, and `ViewCreatorManager.CheckOverridenViews` files it under the marker in `_actualViewTypes` (`ViewCreatorManager.cs:245`).

## Mental Model

Two details separate this slot from `MissionLeaveView` and from `MissionOrderOfBattleUIHandler`.

First, the factory forwards `mission != null` as `isNetwork`, whereas `CreateMissionLeaveView` hard-codes `false` (`ViewCreator.cs:135`). That difference is cosmetic: `CreateMissionView<T>` accepts `isNetwork` and never reads it — the body only consults the override dictionary and the active-assembly list (`ViewCreatorManager.cs:191` through `ViewCreatorManager.cs:209`). It exists so view-creator signatures stay uniform.

Second, and more consequential, this marker is **not** a `DefaultView`. Nothing in the tree creates it automatically; it exists only because some caller asks `ViewCreator.CreateMissionSpectatorControlView()`. So if your mod expects a spectator panel in every mission and instead finds nothing, the reason is that nobody opened the spectator view — not that your override lost the assembly contest.

The empty body is not an oversight, and it does not mean the type is unused. `[OverrideView]` resolution keys on `typeof(MissionView).IsAssignableFrom(type)` (`ViewCreatorManager.cs:236`), so the marker must exist as a real `MissionView` subclass for `MissionGauntletSpectatorControl` to have something to key against. Delete the marker and the Gauntlet class silently stops being reachable.

The runtime instance is whatever the override resolved to, cast to `MissionView` (`ViewCreatorManager.cs:206`). Casting the result down to `MissionSpectatorControlView` to reach members you added to a subclass gives you an object whose members throw `InvalidCastException` when called, because the real instance is the Gauntlet class.

## How to use

**Getting it.** Ask the factory; there is no behaviour lookup for this type, because the view is added to the mission by whoever opened it.

```csharp
MissionView spectator = ViewCreator.CreateMissionSpectatorControlView(Mission.Current);
if (spectator != null)
{
    Mission.Current.AddMissionBehavior(spectator);
}
```

To supply your own panel:

```csharp
[OverrideView(typeof(MissionSpectatorControlView))]
public class MySpectatorView : MissionView
{
    // ViewCreator.cs:114 passes Array.Empty<object>(); a constructor taking
    // arguments leaves the binder with nothing to match and it throws.
    public MySpectatorView() { }

    public override void OnMissionScreenTick(float dt)
    {
        if (Input.IsGameKeyPressed(62))
        {
            Debug.Print("spectator target cycled", false);
        }
    }
}
```

**The mistake that makes an override load and never appear.** Subclassing the marker and adding members without the `[OverrideView]` attribute. `CheckOverridenViews` only files types carrying exactly one `OverrideView` attribute (`ViewCreatorManager.cs:239`), so an unannotated subclass is invisible to the factory, which falls through to `Activator.CreateInstance<T>()` (`ViewCreatorManager.cs:208`) and hands back the empty marker. Your code compiles, the assembly loads, and the spectator panel shows nothing — with no exception anywhere to tell you why.

## See Also

- [MissionLeaveView — the same pattern, created with a hard-coded isNetwork flag](../MissionLeaveView)
- [MissionOrderOfBattleUIHandler — a marker whose factory passes a constructor argument](../MissionOrderOfBattleUIHandler)
- [MissionMainAgentControlModeView — the marker that is created automatically as a default](../MissionMainAgentControlModeView)
- [Mission — the behaviour list the created view is added to](../../mission/Mission)
- [Area Index](../)