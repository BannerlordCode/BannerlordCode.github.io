---
title: "AgentBehavior"
description: "The abstract base every Sandbox agent AI behaviour derives from — it owns the activation switch, the navigator back-reference, and a dozen virtual hooks that the behaviour group calls; GetDebugInfo is the one member you must implement."
---

# AgentBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox.Missions`
**Type:** `public abstract class AgentBehavior`
**Base:** none (root of the behaviour hierarchy)
**File:** `Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/AgentBehavior.cs`

## Overview

Campaign-map villagers are not driven by a single monolithic AI. Each one is an `Agent` carrying a set of `AgentBehavior`s, grouped into behaviour groups, and this class is the contract every one of those behaviours fulfils. It gives a derived behaviour three things for free: a back-reference to the owning agent and its mission, an activation flag whose setter fires lifecycle hooks, and a dozen virtual no-op hooks that the group calls every tick.

Only one member is mandatory. `GetDebugInfo()` is `public abstract`, so a derived class that does not override it will not compile. Everything else has a default. That asymmetry is the design: the debug string is the one thing the group always wants, the rest are opt-in.

## Mental Model

Read the class as **three fields, one switch, and a hook table**.

The three fields come straight out of the constructor. `Mission` is copied from `behaviorGroup.Mission` at construction time and is `private set`, so it is fixed for the behaviour's lifetime. `BehaviorGroup` is a `protected readonly` field — not a property — so derived classes can read the group directly and hold onto it. `Navigator` is an expression-bodied property that forwards to `BehaviorGroup.Navigator`, which in turn forwards to `OwnerAgent`. So `OwnerAgent` is *also* an expression-bodied forwarder, two hops from the navigator: `OwnerAgent => Navigator.OwnerAgent`. Neither is stored; both are live lookups.

`IsActive` is the interesting one. Its setter is not a plain assignment — it compares, and **only on an actual change** does it swap `_isActive` and then call `OnActivate()` or `OnDeactivate()`. That means writing `IsActive = true` on an already-active behaviour is a genuine no-op with no hook invocation. If your behaviour allocates something in `OnActivate`, this guard is what stops it leaking on a redundant assignment. Conversely, it also means a hook that *should* re-run on a redundant set will not.

`CheckTime` is the odd one out: a `public` field initialised to `15f` at declaration, but the constructor **immediately overwrites it** with `40f + MBRandom.RandomFloat * 20f`. So the declared `15f` is dead — the effective value is always randomised into `[40, 60]` at construction. It is a public field, not a property, so external code can overwrite it per-instance; the group uses it as a re-evaluation interval, so raising it makes a behaviour re-consider its availability less often.

The hook table divides into four groups by who calls them:

- **Availability and lifecycle** — `GetAvailability(bool isSimulation)` returns a score (higher wins) and `CheckStartWithBehavior()` is a special "start with this one" override; `OnActivate` / `OnDeactivate` are the switch hooks.
- **Per-tick** — `Tick(float dt, bool isSimulation)` and `ConversationTick()`. The `isSimulation` flag distinguishes real-time play from the mission simulation phase.
- **Context changes** — `OnSpecialTargetChanged()` fires when the navigator's special target moves, and `SetCustomWanderTarget(UsableMachine)` lets the navigator hand a behaviour a machine to stand at.
- **Teardown** — `OnAgentRemoved(Agent agent)` lets a behaviour drop runtime references when any agent leaves the mission.

Every one of these except `GetDebugInfo` defaults to a no-op or `0f`/`false`. Note `GetAvailability` defaults to `0f`, not a positive score — a behaviour that never overrides it is effectively never selected.

Because the constructor takes `AgentBehaviorGroup` and dereferences it immediately (`behaviorGroup.Mission`), a behaviour cannot be constructed standalone. It must come out of a group's `AddBehavior<T>()`.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `GetDebugInfo` | `public abstract string GetDebugInfo()` | The **only** mandatory member. The group calls it to describe the behaviour for the AI debug overlay, and a derived class that omits it will not compile. [CautiousBehavior](CautiousBehavior) satisfies it by returning `string.Empty`, which is itself worth noting — the debug overlay is not universally populated. |
| `IsActive` | `public bool IsActive { get; set; }` | The activation switch, and the reason `OnActivate` / `OnDeactivate` exist. The setter compares before writing, so **a redundant set does not re-fire the hook**. That guard is what makes it safe to call `IsActive = true` repeatedly from group logic, but it also means a hook that must re-run on every set will not. |
| `Navigator` | `public AgentNavigator Navigator => BehaviorGroup.Navigator` | Live two-hop forwarder to the owning agent's navigator — the object that owns behaviour groups, machine targets, and the special target. Not stored, so it is always current; but it throws if the behaviour was constructed with a null group. |
| `OwnerAgent` | `public Agent OwnerAgent => Navigator.OwnerAgent` | Shorthand for the agent this behaviour drives. Both this and `Navigator` are expression-bodied forwards, so they cost a property hop each and never cache. |
| `Mission` | `public Mission Mission { get; private set; }` | The mission captured from the group **at construction time** and never reassigned (`private set`, no backing logic). Safe to use in a hook without null-checking the group, but it is a snapshot: a behaviour outliving its mission would hold a stale reference. |
| `CheckTime` | `public float CheckTime = 15f` | How often the group re-evaluates this behaviour. The declared `15f` is **dead** — the constructor immediately overwrites it with `40f + MBRandom.RandomFloat * 20f`, so the real value is always randomised into `[40, 60]`. Being a public field, it can be overwritten per instance. |
| `GetAvailability` | `public virtual float GetAvailability(bool isSimulation)` | Scores how badly this behaviour wants to run; the group picks the highest. Defaults to `0f`, so a behaviour that does not override it is effectively never selected. The `isSimulation` flag lets a behaviour deprioritise itself during the mission's simulation phase. |
| `Tick` | `public virtual void Tick(float dt, bool isSimulation)` | The per-frame work hook. Defaults to empty. A derived behaviour that moves or animates the agent belongs here, and must respect `isSimulation` if doing so would desync real-time and simulation play. |
| `OnActivate` / `OnDeactivate` | `protected virtual void OnActivate()` / `protected virtual void OnDeactivate()` | Paired lifecycle hooks fired by the `IsActive` setter, and **only** on a genuine change of value. They are `protected`, so they are the derived class's own hook and cannot be invoked from outside. |
| `ConversationTick` | `public virtual void ConversationTick()` | A second per-tick hook driven by the conversation context rather than general mission time. Defaults to empty; [AlarmedBehaviorGroup](../campaign-ext/AlarmedBehaviorGroup) overrides the group-level version of the same name. |
| `CheckStartWithBehavior` | `public virtual bool CheckStartWithBehavior()` | Lets a behaviour insist on being the one that starts, bypassing the availability scoring. Defaults to `false`. |
| `OnSpecialTargetChanged` | `public virtual void OnSpecialTargetChanged()` | Notifies the behaviour that the navigator's designated special target moved. Defaults to empty; [WalkingBehavior](../campaign-ext/WalkingBehavior) overrides it. |
| `SetCustomWanderTarget` | `public virtual void SetCustomWanderTarget(UsableMachine customUsableMachine)` | Hands the behaviour a specific machine to occupy, overriding ordinary wander selection. Defaults to empty. |
| `OnAgentRemoved` | `public virtual void OnAgentRemoved(Agent agent)` | Teardown notification so the behaviour can drop runtime references to an agent that has left the mission. Defaults to empty; keeping it is what stops a behaviour holding a dead `Agent` across the mission's lifetime. |

## Real Example

The supported way to add a behaviour — through the group, never with `new`, because the constructor dereferences the group:

```csharp
DailyBehaviorGroup daily = navigator.AddBehaviorGroup<DailyBehaviorGroup>();
WalkingBehavior walking = daily.AddBehavior<WalkingBehavior>();
walking.SetIndoorWandering(false);
Debug.Print("behaviour active = " + walking.IsActive, 0);
```

Write a custom behaviour. Note that `GetDebugInfo` is mandatory and `OnActivate` is where one-time setup belongs:

```csharp
using SandBox.Missions.AgentBehaviors;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyLookAroundBehavior : AgentBehavior
{
    private float _waitedFor;

    public override float GetAvailability(bool isSimulation)
    {
        return OwnerAgent.IsAIControlled ? 5f : 0f;
    }

    protected override void OnActivate()
    {
        _waitedFor = 0f;
    }

    public override void Tick(float dt, bool isSimulation)
    {
        _waitedFor += dt;
        if (_waitedFor >= CheckTime)
        {
            _waitedFor = 0f;
            bool arrived = OwnerAgent.IsAIAtMoveDestination();
            Debug.Print("look-around tick, arrived = " + arrived, 0);
        }
    }

    public override string GetDebugInfo()
    {
        return "waited " + _waitedFor;
    }
}
```

Read the live navigator and mission back off an existing behaviour — both are forwards or a construction-time snapshot:

```csharp
Debug.Print("owner = " + walking.OwnerAgent, 0);
Debug.Print("navigator active group = " + walking.Navigator.GetActiveBehaviorGroup(), 0);
Debug.Print("check interval = " + walking.CheckTime, 0);
```

Toggling `IsActive` is idempotent by design — the second identical set fires no hook:

```csharp
walking.IsActive = true;
walking.IsActive = true;   // no second OnActivate
walking.IsActive = false;  // OnDeactivate fires here
```

## Risks and Boundaries

- **`GetDebugInfo` is abstract.** There is no default; omitting it is a compile error. Returning `string.Empty` satisfies the compiler but leaves the debug overlay blank.
- **The `15f` initializer on `CheckTime` never survives.** The constructor overwrites it with `40f + MBRandom.RandomFloat * 20f`. Any reasoning about a 15-second interval is wrong.
- **`IsActive` only fires hooks on a real change.** Redundant sets are silent no-ops, which is both the safety property and the trap: you cannot use it to force a re-init.
- **`Navigator` and `OwnerAgent` are live forwards, not snapshots.** They throw if `BehaviorGroup` was null at construction, and they cost a property hop each time.
- **`Mission` is a construction-time snapshot** with a `private set`. A behaviour retained past its mission's lifetime holds a stale mission reference.
- **The constructor dereferences `behaviorGroup` immediately.** There is no null guard; construct only via `AgentBehaviorGroup.AddBehavior<T>()`.
- **`GetAvailability` defaults to `0f`, not a positive score.** Forgetting the override makes a behaviour unselectable rather than broken-looking.
- **`BehaviorGroup` is a protected field, not a property.** Derived classes can hold the reference, which makes leaks easier if the behaviour outlives the group.
- **`CheckTime` is a public mutable field.** Raising it makes the group re-evaluate the behaviour less often; it is not a validated range.
- **No save contract.** Every field here is mission-local runtime state; none of it is serialised, and reopening a mission rebuilds all behaviours from [BehaviorSets](BehaviorSets).

## Cross-version note

The v1.4.5 file is 90 lines. `GetDebugInfo` being the sole abstract member, the dead `15f` initializer on `CheckTime`, and the guarded `IsActive` setter are all present here.

## Dependencies

- Concrete examples: [CautiousBehavior](CautiousBehavior) is the simplest full implementation in the shipped set, and [BehaviorSets](BehaviorSets) is what actually constructs these objects in a live campaign.
- Owner: [AgentBehaviorGroup](../campaign-ext/AgentBehaviorGroup) holds the behaviours, supplies the `Mission` at construction, and drives every hook on this class.
- Navigation: [AgentNavigator](../gameplay/AgentNavigator) is what `Navigator` forwards to and what owns the special target and machine state.
- Per-frame context: `Agent` supplies `IsAIControlled` and the movement methods behaviours drive; `Mission` supplies the time base.
- Registry entry point: [AgentBehaviorManager](AgentBehaviorManager) is the public face the location-character system uses to install behaviour sets.
- Bucket index: [campaign-ext API section](../)
