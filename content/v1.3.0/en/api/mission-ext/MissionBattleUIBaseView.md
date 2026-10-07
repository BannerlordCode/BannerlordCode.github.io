---
title: "MissionBattleUIBaseView"
description: "Auto-generated class reference for MissionBattleUIBaseView."
---
# MissionBattleUIBaseView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionBattleUIBaseView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionBattleUIBaseView.cs`

## Overview

`MissionBattleUIBaseView` is the abstract base for every battle HUD element, and its real job is to decide *when* the view is alive. It is `public abstract class MissionBattleUIBaseView : MissionView` (`MissionBattleUIBaseView.cs:6`) with exactly one piece of state: the auto-property `IsViewCreated` (`MissionBattleUIBaseView.cs:11`).

Four hooks are abstract and are the whole contract for a subclass: `OnCreateView()` (`MissionBattleUIBaseView.cs:14`), `OnDestroyView()` (`MissionBattleUIBaseView.cs:17`), `OnSuspendView()` (`MissionBattleUIBaseView.cs:34`) and `OnResumeView()` (`MissionBattleUIBaseView.cs:37`). The first pair are the base's own; the second pair re-abstract members that `MissionView` would otherwise provide.

The base manages the create/destroy cycle from two entry points. In multiplayer it enables the view immediately on `OnMissionScreenInitialize` (`MissionBattleUIBaseView.cs:45`). In singleplayer it polls every tick and enables or disables based on `BannerlordConfig.HideBattleUI` (`MissionBattleUIBaseView.cs:55`, `MissionBattleUIBaseView.cs:60`). Teardown is handled in `OnMissionScreenFinalize` (`MissionBattleUIBaseView.cs:71`).

## Mental Model

`IsViewCreated` is the base's bookkeeping, not yours, and it flips only in `OnEnableView`/`OnDisableView` (`MissionBattleUIBaseView.cs:23`, `MissionBattleUIBaseView.cs:30`). Read it — never set it; the setter is `private`. That is what lets a subclass distinguish "the game paused me" from "the player turned the battle UI off", because only the second goes through `OnDestroyView`.

The singleplayer path is gated twice over, and the gate is a conjunction. `OnMissionScreenTick` does its work only when `!GameNetwork.IsMultiplayer && !MBCommon.IsPaused` (`MissionBattleUIBaseView.cs:53`). So while the game is paused, the view is neither created nor destroyed — it keeps whatever state it had. That is deliberate: alt-tabbing or opening a menu does not tear down and rebuild the HUD, it just stops the tick from acting.

Multiplayer takes a different path entirely and ignores the config. `OnMissionScreenInitialize` enables the view when `GameNetwork.IsMultiplayer` (`MissionBattleUIBaseView.cs:43`) and never consults `HideBattleUI` again, because the tick branch that does so is excluded for multiplayer. So `HideBattleUI` is a singleplayer-only setting, and code that assumes it hides the HUD in multiplayer is wrong.

`OnSuspendView` and `OnResumeView` are re-declared `abstract override` rather than being implemented here. That means every subclass must provide them even if it has nothing to suspend, and — importantly — they are *not* wired to `IsViewCreated`. Nothing in this base calls them. Their caller is elsewhere in the view layer, so a subclass that puts its real teardown in `OnSuspendView` instead of `OnDestroyView` will find it running at the wrong time.

Teardown is idempotent by flag check: `OnMissionScreenFinalize` only calls `OnDisableView` if `IsViewCreated` (`MissionBattleUIBaseView.cs:71`). A subclass's `OnDestroyView` therefore runs at most once per enable cycle, and the same guard is what stops `OnDisableView` firing for a view that was never created.

## How to use

**Getting one.** Derive from it. There is no registration: mission view lists add instances directly, and the base handles creation, the `HideBattleUI` toggle, and final teardown for you.

**Typical use** — a battle HUD element that builds its Gauntlet layer on enable and tears it down on disable:

```csharp
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade.View.MissionViews;

public class MyBattleHudView : MissionBattleUIBaseView
{
    private GauntletLayer _layer;

    // Called by the base when the view becomes alive (MissionBattleUIBaseView.cs:22).
    protected override void OnCreateView()
    {
        // IsViewCreated is still false here; the base sets it after this returns.
        if (_layer != null)
        {
            return;
        }

        _layer = new GauntletLayer("MyBattleHud", 2000);
        Scene layerScene = Mission.Scene;
        _layer.Scene = layerScene;
        _layer.IsEnabled = true;
        LoadingScreen.Instance.AddLayer(_layer);
    }

    // Called when HideBattleUI turns on, or at screen finalize
    // (MissionBattleUIBaseView.cs:73).
    protected override void OnDestroyView()
    {
        if (_layer == null)
        {
            return;
        }

        _layer.IsEnabled = false;
        LoadingScreen.Instance.RemoveLayer(_layer);
        _layer = null;
    }

    // Both are abstract in the base; nothing in the base calls them.
    protected override void OnSuspendView()
    {
    }

    protected override void OnResumeView()
    {
    }
}
```

`MissionBattleUIBaseView.cs:22` and `MissionBattleUIBaseView.cs:29` are the two call sites that invoke your create/destroy hooks; `IsViewCreated` is readable at `MissionBattleUIBaseView.cs:11`.

**Most common mistake:** putting real teardown in `OnSuspendView` instead of `OnDestroyView`.

```csharp
protected override void OnSuspendView()
{
    ReleaseMyMeshes();          // wrong place
}
```

`OnSuspendView` is re-declared abstract in this base and is never invoked by it — the only create/destroy calls the base makes are in `OnEnableView` (`MissionBattleUIBaseView.cs:22`) and `OnDisableView` (`MissionBattleUIBaseView.cs:29`). So meshes released there survive the `HideBattleUI` toggle, leaking a layer per toggle, and are only freed at something else entirely. Put teardown in `OnDestroyView`; if you need suspend semantics, implement `OnSuspendView` as well and treat it as a separate concern the base does not drive.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsViewCreated` | `public bool IsViewCreated { get; }` |

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionBattleUIBaseView from the subsystem API first
MissionBattleUIBaseView missionBattleUIBaseView = ...;
missionBattleUIBaseView.OnMissionScreenInitialize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionBattleUIBaseView from the subsystem API first
MissionBattleUIBaseView missionBattleUIBaseView = ...;
missionBattleUIBaseView.OnMissionScreenTick(0);
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionBattleUIBaseView from the subsystem API first
MissionBattleUIBaseView missionBattleUIBaseView = ...;
missionBattleUIBaseView.OnMissionScreenFinalize();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionBattleUIBaseView instance = ...;
```

## See Also

- [Area Index](../)
- [MissionAgentStatusUIHandler — a subclass that implements all four hooks as no-ops](../MissionAgentStatusUIHandler)
- [MissionView — the base this one extends](../MissionView)
- [中文页面](../../../../zh/api/mission-ext/MissionBattleUIBaseView)