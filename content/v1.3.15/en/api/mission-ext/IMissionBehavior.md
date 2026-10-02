---
title: "IMissionBehavior"
description: "The empty marker interface every mission extension point implements — the constraint on Mission.GetMissionBehavior<T> and the gate every mission behavior passes through."
---
# IMissionBehavior

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IMissionBehavior`
**Base:** none (marker interface, zero members)
**Source:** `TaleWorlds.MountAndBlade/IMissionBehavior.cs`

## Overview

`IMissionBehavior` is an **empty marker interface** — the file is nine lines with no members at all. Its entire job is to give the mission system a single common type that "a thing that participates in a mission" can be recognized by. Every mission extension point implements it, directly or indirectly: [MissionBehavior](../../mission/MissionBehavior/) (the abstract behavioural base), [MissionLogic](../MissionLogic/), [MissionNetwork](../MissionNetwork/), and the whole family of marker-style capability interfaces (`IAgentStateDecider`, `IBattlePowerCalculationLogic`, `ICommanderInfo`, `IFlagRemoved`, `IAnalyticsFlagInfo`, `IRoundComponent`, `IPlayerInputEffector`, `IVehicleHandler`, `IMissionAgentSpawnLogic`).

Its practical significance is `Mission.GetMissionBehavior<T>() where T : class, IMissionBehavior`. Because the generic constraint requires `class` **and** `IMissionBehavior`, you can only look up types that are classes implementing this marker — never a struct, never an unrelated type. That constraint is the whole reason the interface exists, and it is why a mod that implements one of the narrower capability interfaces can still be found through the same lookup even when it derives from `MissionLogic`.

## Mental Model

Treat it as **"the ticket every mission-side object has to carry to be discoverable by `Mission.GetMissionBehavior<T>()`"**:

- **You almost never implement it directly.** In practice you derive from [MissionBehavior](../../mission/MissionBehavior/) (the callback-driven base class) or [MissionLogic](../MissionLogic/), both of which already implement it. You write `: MissionBehavior, IMyCapabilityInterface` — never `: IMissionBehavior` on its own, because the bare interface gives you no callbacks at all.
- **Typical call order in a mod.** Register your behavior through the mission's behavior initializer (the `InitializeMissionBehaviors` delegate passed to `MissionState.OpenNew`), or add it later with `Mission.AddMissionBehavior`. Inside `OnMissionBehaviorAdded` / `OnMissionTick` / `OnAgentHit`, resolve another system's component with `Mission.Current.GetMissionBehavior<IOtherCapability>()`. The lookup is a linear scan over `Mission.MissionBehaviors`, so it is cheap but not free.
- **The `class` constraint is the second half of the contract.** `where T : class, IMissionBehavior` rejects structs outright — a compile error, not a runtime surprise. It also means the lookup's miss case is `default(T)`, i.e. `null` for every legal `T`.
- **Trap: implementing it bare gives you an object the engine will find but that does nothing.** There are no callbacks on the interface. A behaviour registered this way is a silent no-op, not an error.
- **Trap: the capability interfaces are alternative views, not base classes.** `IAgentStateDecider : IMissionBehavior` is *not* `MissionBehavior` with a subset of methods. When `GetMissionBehavior<IAgentStateDecider>()` succeeds it finds an object that happens to implement that interface; whether it also responds to `OnMissionTick` depends on its real base class. Cast to the interface, not to the behaviour base.
- **Trap: several behaviors can satisfy the same capability interface.** `GetMissionBehavior<T>()` returns the **first** match in `MissionBehaviors` order, which is `HandleOpenNew`'s default set, then the initializer delegate's list, then the handler's `OnAddBehaviors` list. That order is data-driven and not a stability guarantee.

### When to Use

**Use `IMissionBehavior` when:**
- You are declaring your own mission capability interface, so other mods can find your component with `Mission.GetMissionBehavior<IMyCapability>()`.
- You are writing the generic constraint on a helper method that accepts "any mission component" (`where T : class, IMissionBehavior`).
- You are documenting which types participate in the mission behaviour set, for a mod-compatibility layer.

**Do NOT use `IMissionBehavior` when:**
- You want behaviour callbacks. Derive from [MissionBehavior](../../mission/MissionBehavior/) or [MissionLogic](../MissionLogic/) — they already implement it and supply the hooks.
- You want the mission's lifecycle events (`OnMissionScreenPreLoad`, `OnEndMissionInternal`, `OnMissionStateActivated` …). Those live on [MissionBehavior](../../mission/MissionBehavior/).
- You want to be *added* to a mission. That is `Mission.AddMissionBehavior` / `RemoveMissionBehavior`, which take the concrete `MissionBehavior`, not this interface.
- You want agent-side extension points. Those are the capability interfaces (`IAgentStateDecider`, `IPlayerInputEffector`, …) that extend this one.
- You want campaign-side extensions. Those are [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) and live in a completely separate lifecycle.

## Dependencies

- [MissionBehavior](../../mission/MissionBehavior/) — the abstract class that implements `IMissionBehavior` and supplies every callback; the base you actually derive from.
- [MissionLogic](../MissionLogic/) — the other implementation branch; logics are kept in a separate list and ticked differently from plain behaviours.
- [MissionNetwork](../MissionNetwork/) — the networked branch; behaviours of this type are routed through the network path, not the local one.
- [IMissionAgentSpawnLogic](../IMissionAgentSpawnLogic/) — a capability interface extending this marker, for spawn-logic discovery.
- [Mission](../../mission/Mission/) — owns `MissionBehaviors`, `AddMissionBehavior`, `RemoveMissionBehavior` and `GetMissionBehavior<T>`.
- [MissionState](../MissionState/) — creates the mission, collects the behaviour sets and calls `InitializeStartingBehaviors`.
- [Agent](../../mission/Agent/) — the `Agent` type most callback signatures revolve around.
- [Team](../../mission/Team/) — the other common callback parameter, for team-change and spawn handlers.
- [MissionDifficultyModel](../MissionDifficultyModel/) — a mission-side extension point of a different kind (a model, not a behaviour), for contrast.
- [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) — the campaign-side analogue, useful to contrast the two lifecycles.

## Key members

#### `public interface IMissionBehavior`

The declaration itself: **no members, no methods, no properties**.
- **What it buys you:** the ability to write `Mission.GetMissionBehavior<T>()` with a `class`-constrained `T`, and to have your capability interface participate in the same discovery mechanism as every vanilla mission component.
- **What it does not buy you:** any behaviour. There is nothing to override, nothing the engine calls on a bare implementer, and nothing that keeps the object alive.
- **Implicit implementation:** implementing `IMissionBehavior` adds no methods to your type. Any class that declares it compiles unchanged otherwise.
- **Type-system constraint:** paired with `class`, it removes structs from the lookup space entirely. Any `T` you can pass to `GetMissionBehavior<T>()` is guaranteed to be a reference type, which is why a miss is always `null` and never a boxed zero.

## Examples

### Example 1 — declaring your own mission capability interface

```csharp
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    // Empty on purpose: a capability marker, discoverable through the mission.
    public interface IMyGarrisonRoster
    {
        int AliveGarrisonCount { get; }
    }

    // Derive from MissionBehavior (not from the marker) to get callbacks.
    public class MyGarrisonBehavior : MissionBehavior, IMyGarrisonRoster
    {
        private int _alive;

        public int AliveGarrisonCount => _alive;

        public override void OnMissionBehaviorAdded()
        {
            // Register whatever the garrison needs. The marker gives you nothing.
            Debug.Print("garrison behavior attached");
        }

        public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent,
            AgentState agentState, KillingBlow blow)
        {
            if (affectedAgent.IsFriendOf(Mission.Current.MainAgent))
            {
                _alive--;
            }
        }
    }
}
```

### Example 2 — finding another mod's capability component

```csharp
public bool IsGarrisonAlive(Mission mission)
{
    // Legal because IMyGarrisonRoster is a class-constrained marker.
    // Returns null on a miss - always null-check.
    var roster = mission.GetMissionBehavior<IMyGarrisonRoster>();
    if (roster == null)
    {
        return false;
    }
    return roster.AliveGarrisonCount > 0;
}
```

### Example 3 — writing a helper over "any mission component"

```csharp
public static class MissionComponentProbe
{
    // The same two constraints Mission.GetMissionBehavior<T> uses.
    public static bool Exists<T>(Mission mission) where T : class, IMissionBehavior
    {
        // default(T) is null for every legal T because of the class constraint.
        return mission.GetMissionBehavior<T>() != null;
    }
}
```

### Example 4 — the correct way to add a behaviour

```csharp
public void Attach(Mission mission)
{
    // AddMissionBehavior takes the concrete MissionBehavior, not the marker.
    mission.AddMissionBehavior(new MyGarrisonBehavior());
}
```

### Example 5 — distinguishing capability interfaces from the behaviour base

```csharp
public void Describe(Mission mission)
{
    // The capability view: only the interface's members are safe to touch.
    var decider = mission.GetMissionBehavior<IAgentStateDecider>();
    if (decider != null)
    {
        Debug.Print("agent state decider present");
        return;
    }

    // The behavioural view: only for objects that really are MissionBehaviours.
    var behaviour = mission.GetMissionBehavior<MissionBehavior>();
    if (behaviour != null)
    {
        Debug.Print("a plain behaviour is present, but no state decider");
    }
}
```

## Risks and crash boundaries

- **Crash boundary — `Mission.Current` is null outside a mission.** `GetMissionBehavior<T>` is an instance method on [Mission](../../mission/Mission/), so you must hold a `Mission` reference (or `Mission.Current`) and be inside a mission. Calling it from campaign map code throws on the first dereference.
- **Bare implementation is a silent no-op.** A class that implements only `IMissionBehavior` and is added to the mission is discoverable but receives no callbacks. There is no exception and no warning — the component simply does nothing forever. Derive from `MissionBehavior` or `MissionLogic`.
- **First-match, not best-match.** `GetMissionBehavior<T>()` returns the first `MissionBehaviors` entry that satisfies `T`. With two behaviors implementing the same capability interface the winner depends on the order in which they were added (defaults from `AddDefaultMissionBehaviorsTo`, then the initializer delegate, then the handler's `OnAddBehaviors`). That order is not a stability guarantee across versions.
- **Structs are excluded at compile time.** `where T : class, IMissionBehavior` is a hard compile-time error for a struct `T`. This is intentional, but it means you cannot build a stateless value-type capability component and look it up this way.
- **Return value on a miss is `default(T)`.** For every legal `T` that is `null`. Always null-check; the interface itself offers no `TryGet` form.
- **The `MissionLogic` / `MissionNetwork` split matters.** `MissionState.AddBehaviorsToMission` partitions behaviours three ways (`MissionLogic[]`, `MissionBehavior[]`, `MissionNetwork[]`) and `Mission.AddMissionBehavior` routes each into the matching list. An object implementing `IMissionBehavior` plus `MissionLogic` is ticked by the logic path, not the plain-behaviour path — writing `OnMissionTick` expectations based on a plain behaviour will not match.
- **Lifetime is one mission.** Nothing here is campaign-scoped and nothing is serialized. A component found in one mission is gone when the mission ends; do not cache the reference past `OnMissionStateFinalized`.
- **Cross-domain dependency.** The interface lives in `TaleWorlds.MountAndBlade`, but every implementation touches `TaleWorlds.Core` (`Vec3`, `GameState`), `TaleWorlds.Library` (collections, logging) and the native scene interop. Your assembly must reference `TaleWorlds.MountAndBlade` and `TaleWorlds.Core` or the component fails to load.
- **Load order.** Behaviours must be added before the callbacks you rely on are raised. Adding one from inside `OnMissionBehaviorAdded` of another is fine; adding one after combat has begun means it misses every earlier `OnAgentCreated`/`OnAgentHit`.
- **ID stability.** No identifiers are involved, but the *capability interface name* is effectively a public contract: if your mod publishes `IMyGarrisonRoster`, other mods may depend on it. Renaming it is a breaking change for them.

## Cross-Version Notes

- **v1.3.x (this page):** the interface is empty and has been for many versions; [MissionBehavior](../../mission/MissionBehavior/) declares `: IMissionBehavior` and `Mission.GetMissionBehavior<T> where T : class, IMissionBehavior` is the only consumer shape in the shipped assembly.
- **v1.4.x:** unchanged. Newer versions add more capability interfaces extending this marker (vehicle handlers, round components), but the marker itself stays member-free — that is what keeps it cheap to implement and safe to scan for.
- **v1.5.x:** expect additional mission capability interfaces and more multi-implementation classes. The stable contract is the two-constraint generic lookup and the fact that the marker stays empty. Build against `Mission.GetMissionBehavior<T>()` rather than enumerating `MissionBehaviors` yourself, so the lookup order stays the engine's decision.

## See Also

- ↑ Parent bucket: [Mission-Ext API index](./)
- ↑ Mission base class: [MissionBehavior](../../mission/MissionBehavior/) — the class to actually derive from
- ↔ Sibling: [MissionLogic](../MissionLogic/) — the other implementation branch
- ↔ Sibling: [MissionNetwork](../MissionNetwork/) — the networked implementation branch
- ↔ Sibling: [MissionState](../MissionState/) — creates the mission and partitions the behaviour sets
- ↔ Sibling: [MissionDifficultyModel](../MissionDifficultyModel/) — a mission-side extension point that is a model, not a behaviour
- ↑ Mission: [Mission](../../mission/Mission/) — `GetMissionBehavior<T>`, `AddMissionBehavior`, `MissionBehaviors`
- ↑ Agent: [Agent](../../mission/Agent/)
- ↑ Campaign-side analogue: [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/)