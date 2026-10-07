---
title: "FormationIndicatorMissionView"
description: "Auto-generated class reference for FormationIndicatorMissionView."
---
# FormationIndicatorMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationIndicatorMissionView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/FormationIndicatorMissionView.cs`

## Overview

`FormationIndicatorMissionView` is the singleplayer view that draws the floating banner indicators over each formation. It is `public class FormationIndicatorMissionView : MissionView` (`FormationIndicatorMissionView.cs:12`) and it allocates its whole working set in `AfterStart`: a two-dimensional array of `Indicator` structs sized `[mission.Teams.Count, 9]` (`FormationIndicatorMissionView.cs:19`), each initialised with the mission screen (`FormationIndicatorMissionView.cs:24`). The 9 is the regular formation count, indexed by `FormationIndex`.

Per tick, `OnMissionScreenTick(float dt)` (`FormationIndicatorMissionView.cs:96`) walks every formation of every team via `SelectMany(t => t.FormationsIncludingEmpty)` (`FormationIndicatorMissionView.cs:109`), maps each to an array slot, and asks the `Indicator` to work out its own visibility and alpha. `GetFormationTeamIndex` (`FormationIndicatorMissionView.cs:81`) is the mapping, and it is the interesting part: for a mission with more than two teams it assigns ally teams to indices 2 or 3 depending on which ally and how many there are (`FormationIndicatorMissionView.cs:84`), and otherwise falls back to `(int)formation.Team.Side` (`FormationIndicatorMissionView.cs:90`).

Each `Indicator` owns a `GameEntity` created by `CreateBannerEntity` (`FormationIndicatorMissionView.cs:33`), which uses `GameEntity.CreateEmpty` and sets `EntityFlags.NoOcclusionCulling` (`FormationIndicatorMissionView.cs:35`, `FormationIndicatorMissionView.cs:36`) with a team-colour-dependent tint — player allies get `2130747904U` (`FormationIndicatorMissionView.cs:41`).

## Mental Model

**The activation path in 1.3.0 is dead code.** `OnMissionScreenTick` computes a local `bool flag`, and *both* branches of the input test assign it `false`: the key-down branch sets `flag = false` alongside `this._isEnabled = false` (`FormationIndicatorMissionView.cs:102`), and the else branch sets `flag = false` too (`FormationIndicatorMissionView.cs:107`). The `if (flag)` block that would show indicators (`FormationIndicatorMissionView.cs:110`) therefore never executes. Holding game key 5 does not turn indicators on in this version — it turns `_isEnabled` off.

What still runs is the cleanup tail. Because the dead branch ends in `return` (`FormationIndicatorMissionView.cs:188`), control falls past it to `if (this._isEnabled)` (`FormationIndicatorMissionView.cs:191`), which walks every formation, resets `indicatorAlpha` to 0 and hides `indicatorEntity`, then sets `_isEnabled = false` (`FormationIndicatorMissionView.cs:203`). Since nothing in this version ever sets `_isEnabled` true, that block is inert too — which is consistent with the array allocated in `AfterStart` never being populated with visible entities.

The practical consequence for a modder: do not subclass this type expecting to get indicator behaviour by calling a public API. There is none. You either drive the `Indicator` array yourself (it is private) or write your own `MissionView`.

`GetFormationTeamIndex` has a hard assumption that must hold for the array bounds. For two teams it returns `(int)formation.Team.Side` (`FormationIndicatorMissionView.cs:90`), which is 0 or 1 — matching the array's first dimension. For three or four teams it returns 2 or 3 (`FormationIndicatorMissionView.cs:86`), and the array was sized by `Teams.Count` (`FormationIndicatorMissionView.cs:19`), so it still fits. The fallback column is `FormationIndex`, and the array's second dimension is a literal 9 — a formation index above 8 would be an out-of-bounds access, and nothing here clamps it.

The alpha ramp is a fixed increment, not a rate: `indicatorAlpha += 0.01f` per tick (`FormationIndicatorMissionView.cs:159`). It is therefore frame-rate dependent — at 60 fps an indicator fades in over roughly a second and a half, at 30 fps over three — and the `> 1f` clamp after the add is what stops it overshooting.

## How to use

**Getting one.** The mission-view factories add it to battle missions. Nothing exposes it for configuration, and in 1.3.0 it does nothing visible.

**Typical use** — writing the indicator behaviour you actually want, in your own view:

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View.MissionViews;

public class MyFormationIndicatorsView : MissionView
{
    private readonly System.Collections.Generic.Dictionary<Formation, GameEntity> _entities =
        new System.Collections.Generic.Dictionary<Formation, GameEntity>();

    public override void AfterStart()
    {
        base.AfterStart();

        foreach (Formation formation in Mission.PlayerTeam.FormationsIncludingEmpty)
        {
            GameEntity entity = GameEntity.CreateEmpty(Mission.Scene, true, true, true);

            // NoOcclusionCulling is what the shipped view sets (FormationIndicatorMissionView.cs:36):
            // without it the indicator disappears behind hills.
            entity.EntityFlags |= EntityFlags.NoOcclusionCulling;
            entity.SetVisibilityExcludeParents(true);
            _entities[formation] = entity;
        }
    }

    public override void OnMissionScreenTick(float dt)
    {
        base.OnMissionScreenTick(dt);

        if (!Input.IsGameKeyDown(5))
        {
            return;
        }

        foreach (System.Collections.Generic.KeyValuePair<Formation, GameEntity> pair in _entities)
        {
            GameEntity entity = pair.Value;
            if (entity == null || pair.Key.CountOfUnits == 0)
            {
                continue;
            }

            entity.Position = pair.Key.CachedMedianPosition.GetGroundVec3();
        }
    }
}
```

`Formation.CachedMedianPosition`, `WorldPosition.GetGroundVec3()`, `GameEntity.CreateEmpty` and `MissionView.OnMissionScreenTick(float)` (`FormationIndicatorMissionView.cs:96`) are the real members — the last is the hook the shipped view uses, dead branch included.

**Most common mistake:** expecting game key 5 to toggle the indicators, because it is the obvious input.

```csharp
if (Input.IsGameKeyDown(5))
{
    // Expect: indicators appear.
    // Actual: flag was already assigned false in this branch
    // (FormationIndicatorMissionView.cs:102); nothing appears.
}
```

The key test sets `_isEnabled = false` rather than `true` (`FormationIndicatorMissionView.cs:103`), and the `if (flag)` body is unreachable because `flag` is `false` on both paths. Nothing in this class ever sets `_isEnabled` true, so the entire show path is dead in 1.3.0 and the entities allocated in `AfterStart` are never created. Do not build on this type's behaviour — write the view yourself as above, copying the `NoOcclusionCulling` flag and the median-position placement, both of which are the parts worth keeping.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of FormationIndicatorMissionView from the subsystem API first
FormationIndicatorMissionView formationIndicatorMissionView = ...;
formationIndicatorMissionView.AfterStart();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of FormationIndicatorMissionView from the subsystem API first
FormationIndicatorMissionView formationIndicatorMissionView = ...;
formationIndicatorMissionView.OnMissionScreenTick(0);
```

### DetermineIndicatorState
`public void DetermineIndicatorState(float dt, Vec3 position)`

**Purpose:** Determines the result of indicator state based on the current state.

```csharp
// Obtain an instance of FormationIndicatorMissionView from the subsystem API first
FormationIndicatorMissionView formationIndicatorMissionView = ...;
formationIndicatorMissionView.DetermineIndicatorState(0, position);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
FormationIndicatorMissionView view = ...;
```

## See Also

- [Area Index](../)
- [MissionView — the base class and the tick hook this overrides](../MissionView)
- [中文页面](../../../../zh/api/mission-ext/FormationIndicatorMissionView)