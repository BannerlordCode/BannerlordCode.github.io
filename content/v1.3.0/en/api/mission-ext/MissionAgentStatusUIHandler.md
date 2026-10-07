---
title: "MissionAgentStatusUIHandler"
description: "Auto-generated class reference for MissionAgentStatusUIHandler."
---
# MissionAgentStatusUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentStatusUIHandler : MissionBattleUIBaseView`
**Base:** `MissionBattleUIBaseView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentStatusUIHandler.cs`

## Overview

`MissionAgentStatusUIHandler` is a `MissionBattleUIBaseView` subclass that implements all four of its abstract hooks and does nothing in any of them. The four overrides are `OnCreateView` (`MissionAgentStatusUIHandler.cs:9`), `OnDestroyView` (`MissionAgentStatusUIHandler.cs:14`), `OnSuspendView` (`MissionAgentStatusUIHandler.cs:19`) and `OnResumeView` (`MissionAgentStatusUIHandler.cs:24`), and every one has an empty body.

The class therefore *participates* in the battle-UI lifecycle while rendering nothing. Its base still creates and destroys it, still toggles it with `BannerlordConfig.HideBattleUI`, and still flips `IsViewCreated` — all of that machinery runs, and none of it produces a layer, a mesh, or a sprite.

That is not necessarily a mistake. `MissionBattleUIBaseView` requires all four hooks, so a subclass that wants the base's create/destroy timing and the `HideBattleUI` behaviour without any visual of its own can implement them empty and inherit the timing for free. Whether this particular type does that deliberately or is a leftover is not something the file records — what the file does record is that all four bodies are empty.

## Mental Model

There is nothing to read and nothing to configure. No fields, no properties, no constructor. Every instance behaves identically, which makes the type's identity rather than its behaviour the only interesting fact about it.

Do not treat `IsViewCreated` as evidence that something is on screen. The base sets it in `OnEnableView` right after calling `OnCreateView` (`MissionBattleUIBaseView.cs:23`), so for this subclass it transitions `false` → `true` even though nothing was created. If your code checks `IsViewCreated` to decide whether the agent status HUD is showing, the answer will be yes whenever the battle UI is enabled, regardless of this type contributing nothing.

Because the hooks are empty, overriding any of them in a further subclass without calling `base` is harmless — there is no base behaviour to lose. That is unusual in this codebase and worth noting: here the "always call the base" rule has no cost.

Adding a member to this type is not the way to add a HUD. The base's contract is four hooks; a view that renders something overrides them, as `MissionBattleUIBaseView`'s own example does. Adding fields or methods here adds them to an object the framework instantiates but that renders nothing.

## How to use

**Getting one.** Do not construct it looking for behaviour. If you want the base's lifecycle timing and the `HideBattleUI` toggle without visuals, deriving from it and leaving the hooks empty is exactly this class's pattern. If you want an agent status HUD, override the hooks and build something.

**Typical use** — deriving from it to get the timing for free:

```csharp
using TaleWorlds.MountAndBlade.View.MissionViews;

public class MyAgentStatusView : MissionBattleUIBaseView
{
    private MyStatusWidget _widget;

    // Called by the base when the battle UI becomes available
    // (MissionBattleUIBaseView.cs:22).
    protected override void OnCreateView()
    {
        _widget = MyStatusWidget.Create();
    }

    // Called when HideBattleUI is toggled on, or at finalize
    // (MissionBattleUIBaseView.cs:29).
    protected override void OnDestroyView()
    {
        _widget?.Dispose();
        _widget = null;
    }

    // These two are abstract in the base but nothing in the base calls them;
    // this class implements them empty for the same reason.
    protected override void OnSuspendView()
    {
    }

    protected override void OnResumeView()
    {
    }
}
```

`MissionBattleUIBaseView.cs:22` and `MissionBattleUIBaseView.cs:29` are the two call sites that drive your create/destroy pair — those are the ones that matter.

**Most common mistake:** gating a feature on `IsViewCreated` and assuming the view drew something.

```csharp
if (handler.IsViewCreated)
{
    MyFeature.Enable();   // the view rendered nothing, but IsViewCreated is true
}
```

`IsViewCreated` is set to `true` by the base immediately after `OnCreateView` returns (`MissionBattleUIBaseView.cs:23`), and this type's `OnCreateView` is empty (`MissionAgentStatusUIHandler.cs:9`). So the flag is `true` for the whole period the battle UI is enabled while no status display exists, and your feature comes on with nothing to show it in. Use the flag only for "is the battle UI enabled at all", and never as evidence that a particular view drew something.

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionAgentStatusUIHandler>();
```

## See Also

- [Area Index](../)
- [MissionBattleUIBaseView — the base whose four hooks this implements empty](../MissionBattleUIBaseView)
- [中文页面](../../../../zh/api/mission-ext/MissionAgentStatusUIHandler)