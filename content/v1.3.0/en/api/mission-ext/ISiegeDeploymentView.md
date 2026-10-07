---
title: "ISiegeDeploymentView"
description: "Auto-generated class reference for ISiegeDeploymentView."
---
# ISiegeDeploymentView

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface ISiegeDeploymentView`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ISiegeDeploymentView.cs`

## Overview

`ISiegeDeploymentView` is the smallest interface in this assembly: two members, both `void`, both taking a `WeakGameEntity` — `OnEntitySelection(WeakGameEntity selectedEntity)` (`ISiegeDeploymentView.cs:10`) and `OnEntityHover(WeakGameEntity hoveredEntity)` (`ISiegeDeploymentView.cs:13`).

It is a *view-side* contract for the siege deployment phase: the deployment logic probes what the player is pointing at and the view decides whether to react. Nothing in the interface returns a value, so there is no "may this entity be placed here?" question — the flow is one-way, from the phase to the view.

The way it is consumed is worth knowing precisely. The sandbox mission-view factory creates the order UI handler, casts it, and wraps both members into delegates for the selection behaviour: `ISiegeDeploymentView @object = missionView as ISiegeDeploymentView;` (`SandBoxMissionViews.cs:361`) followed by `new MissionEntitySelectionUIHandler(new Action<WeakGameEntity>(@object.OnEntitySelection), new Action<WeakGameEntity>(@object.OnEntityHover))` (`SandBoxMissionViews.cs:362`). So the view side of this contract belongs to the *order UI handler*, and `MissionEntitySelectionUIHandler` is what actually invokes your members.

The one shipped implementation is `MissionGauntletSingleplayerOrderUIHandler`, declared `class MissionGauntletSingleplayerOrderUIHandler : GauntletOrderUIHandler, ISiegeDeploymentView` (`MissionGauntletSingleplayerOrderUIHandler.cs:21`), and it satisfies both members **explicitly** — `void ISiegeDeploymentView.OnEntityHover(...)` (`MissionGauntletSingleplayerOrderUIHandler.cs:347`) and `void ISiegeDeploymentView.OnEntitySelection(...)` (`MissionGauntletSingleplayerOrderUIHandler.cs:356`).

## Mental Model

Both parameters are `WeakGameEntity`, which is a handle, not a strong reference. A weak entity can become invalid between the call and your use of it — check `IsValid` before dereferencing anything, because there is no ownership keeping it alive and the interface does no such check for you.

Selection and hover are not a matched pair in this contract. Nothing says a selection implies a preceding hover, or that a hover is followed by a selection, or that clearing requires passing an invalid entity. If your view needs to clear a highlight, it has to decide for itself what "nothing is hovered" means — an invalid `WeakGameEntity` is the natural choice, but the interface does not state it.

Selection and hover carry no information about *what was selected*. There is no side, no deployment point, no formation index; just an entity. Any decision about whether the entity is a valid placement site is left to the view's implementation, which is why the interface can stay this small and still serve both the attacker and defender deployment flows.

Explicit implementation means the members are not part of the class's own surface. On `MissionGauntletSingleplayerOrderUIHandler` you cannot write `handler.OnEntityHover(entity)` — you must hold an `ISiegeDeploymentView` reference, which is exactly why the factory casts before taking the method group (`SandBoxMissionViews.cs:361`). A public method with a matching signature does **not** satisfy the interface; the shipped handler had to qualify both members with `ISiegeDeploymentView.` to do so.

Both members are dereferenced immediately after the cast, on the very next statement (`SandBoxMissionViews.cs:362`), so the cast result must be non-null. That is fine for the shipped view, and it is the trap for a mod that substitutes its own order UI handler: a replacement that does not implement this interface yields `null` from the cast and a `NullReferenceException` while the mission's view list is still being built, before the mission starts — not a quietly skipped view.

Selection and hover carry no information about *what was picked*. There is no side, no deployment point index, no formation; just an entity. Any decision about whether that entity is a legal placement site is left entirely to the implementation, which is how one two-member interface serves both the attacker and defender deployment flows.

## How to use

**Getting one.** Do not look it up: it is discovered by an `as` cast over the mission's view list (`SandBoxMissionViews.cs:361`). To receive the callbacks, make one of your mission views implement this interface.

**Typical use** — a mission view that reacts to deployment probing:

```csharp
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View;

public class MySiegeDeploymentHints : MissionView, ISiegeDeploymentView
{
    private WeakGameEntity _lastHover;

    public void OnEntityHover(WeakGameEntity hoveredEntity)
    {
        // Weak handle: it can go invalid before you touch it.
        if (!hoveredEntity.IsValid)
        {
            ClearHint();
            return;
        }

        if (_lastHover.IsValid)
        {
            ClearHint();
        }

        _lastHover = hoveredEntity;
        MyHint.ShowOn(hoveredEntity);
    }

    public void OnEntitySelection(WeakGameEntity selectedEntity)
    {
        if (!selectedEntity.IsValid)
        {
            return;
        }

        // The interface says nothing about what is valid here: decide yourself.
        if (IsDeploymentPoint(selectedEntity))
        {
            MyHint.Confirm(selectedEntity);
        }
        else
        {
            MyHint.Reject(selectedEntity);
        }
    }

    private void ClearHint()
    {
        _lastHover = WeakGameEntity.Invalid;
        MyHint.Hide();
    }
}
```

`MissionView` is the base both `SandBoxMissionViews` and the deployment flow expect; `WeakGameEntity.IsValid` and `WeakGameEntity.Invalid` are the handle checks the interface leaves to you.

**Most common mistake:** implementing the interface but forgetting that discovery is a cast, not a registration.

```csharp
public class MyHints : MissionView { /* OnEntityHover defined, ISiegeDeploymentView not declared */ }
```

The methods look right and compile; the view is added to the mission's view list; and the `as ISiegeDeploymentView` cast at `SandBoxMissionViews.cs:361` returns `null`. Because line 362 dereferences that result immediately to build the two delegates, the mission then fails at view-list construction with a `NullReferenceException` before it starts. Declare the interface on the class, implement both members explicitly as `void ISiegeDeploymentView.OnEntityHover(...)`, and the cast finds you.

## See Also

- [Area Index](../)
- [MissionView — the base class a siege deployment view also needs](../MissionView)
- [SiegeDeploymentHandler — the logic that probes the view](../SiegeDeploymentHandler)
- [中文页面](../../../../zh/api/mission-ext/ISiegeDeploymentView)