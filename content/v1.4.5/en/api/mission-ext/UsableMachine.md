---
title: "UsableMachine"
description: "Scene-backed Mission owner that collects StandingPoints, coordinates Agent detachment slots, and delegates machine-specific AI behavior."
---

# UsableMachine

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class UsableMachine : SynchedMissionObject, IFocusable, IOrderable, IDetachment`
**Base:** [`SynchedMissionObject`](../SynchedMissionObject)
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/UsableMachine.cs`

## Overview

`UsableMachine` is the abstract scene component for ladders, siege engines, gates, piles, and similar objects. It is 1184 lines and declares `public abstract class UsableMachine : SynchedMissionObject, IFocusable, IOrderable, IDetachment` at `UsableMachine.cs:13`.

Its job is to turn a scene entity that happens to have several interaction points into something a `Team` can assign soldiers to. During `OnInit` it recursively collects [`StandingPoint`](../StandingPoint) components from the machine entity or its `machine_parent` (the tag is the constant `UsableMachineParentTag = "machine_parent"` at `UsableMachine.cs:15`), classifies pilot and ammo points by entity tags, initialises defending-agent lists, and captures the active wait entity. Its `IDetachment` implementation then filters those points by side, occupancy, agent eligibility, navmesh, and ammo-loading state.

It does **not** define the action text or the machine's animation; derived classes provide those through the two abstract members listed below, and usually override `CreateAIBehaviorObject()` — which is `virtual`, not abstract (`UsableMachine.cs:222`) — to return a machine-specific [`UsableMachineAIBase`](../UsableMachineAIBase).

The three tag fields are **public mutable fields, not properties**: `PilotStandingPointTag = "Pilot"` (`UsableMachine.cs:17`), `AmmoPickUpTag = "ammopickup"` (`UsableMachine.cs:19`) and `WaitStandingPointTag = "Wait"` (`UsableMachine.cs:21`). That is unusual for this codebase and it is the page's main hazard — see Risks.

## Mental Model

### What it is / which layer

- It sits in the **scene layer, inside a live [`Mission`](../../mission/Mission)** — above the `StandingPoint` components it collects, below the `Team` that issues orders. It is a live mission object, not a Campaign save entity, and it must be attached to a scene `GameEntity` before `StandingPoints`, `GameEntity`, `Mission`, or native physics are used.
- Treat it as **a detachment with scene geometry**. The `IDetachment` implementation is the interesting half: it computes side weight, slot costs, candidate agents, occupancy, formation membership, and scripted movement, so the machine can be evaluated by the same selection machinery as troops.
- The point-collection rule is a small decision with large consequences: `CollectAndSetStandingPoints()` uses the parent entity when it is tagged `machine_parent`, and otherwise recursively collects from the machine's own entity. A mod machine whose parts live under a parent will find points it would otherwise never see.
- **Two members are abstract and both are UI text.** `public abstract TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` at `UsableMachine.cs:699` and `public abstract TextObject GetDescriptionText(WeakGameEntity gameEntity)` at `UsableMachine.cs:1173`. They return `TextObject`, not `string`, so the answer must be localised. **That is the whole of what the compiler forces on a derived machine** — everything else has a base implementation.

### The consequence that matters

**`Ai` is lazy and may legitimately be `null`.** The property at `UsableMachine.cs:89` calls `CreateAIBehaviorObject()` on first read and caches the result in `_ai` (`UsableMachine.cs:95`). `CreateAIBehaviorObject()` is `virtual` (`UsableMachine.cs:222`), so a derived machine that returns `null` — or one that has not overridden it at all — leaves the machine with **no AI controller and no exception**. That is different from constructing a detached AI object yourself: a detached one is not ticked by the host and does not know its machine. So "there is no AI on this machine" and "the AI exists but is orphaned" are different states, and only the first is intended.

The second consequence follows from the tag fields. **The three tag strings are public and writable, and they are read during `OnInit`.** `PilotStandingPointTag` (`UsableMachine.cs:17`), `AmmoPickUpTag` (`:19`) and `WaitStandingPointTag` (`:21`) are plain fields. Change one *before* `OnInit` runs and collection follows the new tag; change one *after* and the collected points do not change, because nothing re-scans — you get a machine whose pilot point, ammo points and wait point silently disagree with its own tags.

## How to use

**How to obtain it.** Not by construction — it is `abstract` (`UsableMachine.cs:13`) and it is scene-owned. The real path is to enumerate the mission's active objects and find one of your type:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MachineFinder
{
    public static T Find<T>() where T : UsableMachine
    {
        Mission mission = Mission.Current;
        if (mission == null)
            return null;

        foreach (UsableMachine machine in
                 mission.ActiveMissionObjects.FindAllWithType<UsableMachine>())
        {
            if (machine is T typed && !typed.IsDestroyed)
            {
                return typed;
            }
        }

        return null;
    }
}
```

**A typical use.** Ask a machine to choose a real point for an existing agent, and leave movement and reservation to the detachment host:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MachineOccupancy
{
    // GetVacantStandingPointForAI returns a StandingPoint
    // (UsableMachine.cs:271); the two GetValid* helpers return a WeakGameEntity
    // instead (UsableMachine.cs:227, :252), so do not assign them to a
    // StandingPoint variable.
    public static StandingPoint FindPointFor(UsableMachine machine, Agent agent)
    {
        if (machine == null || agent == null)
            return null;

        BattleSideEnum side = agent.Team?.Side ?? BattleSideEnum.None;

        // Machine availability is not a guarantee that this agent can use a
        // point: UsableTeam and the per-point filters can still reject a slot.
        if (machine.IsDisabledForBattleSideAI(side))
            return null;

        return machine.GetVacantStandingPointForAI(agent);
    }
}
```

Write a derived machine, filling exactly the two abstract members:

```csharp
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade;

public class MyModPile : UsableMachine
{
    // The compiler enforces these two, and both return TextObject (not string):
    //   GetActionTextForStandingPoint  UsableMachine.cs:699
    //   GetDescriptionText            UsableMachine.cs:1173
    public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)
    {
        return TextObject.CreateFromString("Take from pile");
    }

    public override TextObject GetDescriptionText(WeakGameEntity gameEntity)
    {
        return TextObject.CreateFromString("A pile of supplies");
    }

    // CreateAIBehaviorObject is VIRTUAL, not abstract (UsableMachine.cs:222).
    // Returning null is legal and leaves the machine without specialised AI.
    public override UsableMachineAIBase CreateAIBehaviorObject()
    {
        return null;
    }
}
```

**What to watch out for.** The trap is treating `Ai` as guaranteed. Read it and null-check it (`UsableMachine.cs:89`) — a derived machine that returns `null` from `CreateAIBehaviorObject()` (`:222`) produces no error, and code that dereferences `Ai` without a check crashes on exactly the machines that opted out. The second trap is mutating the tag fields after `OnInit`: they are plain public fields (`:17`, `:19`, `:21`) read once during collection, so a late change leaves the machine's points inconsistent with its own configuration.

## Key members

Ordered by what a modder actually reaches for. The consequence is in each row.

| Member | Signature | What it is for |
| --- | --- | --- |
| `StandingPoints` | `public MBList<StandingPoint> StandingPoints { get; private set; }` at `UsableMachine.cs:55` | Every interaction slot the machine collected. **Populated during `OnInit` and `{ get; private set; }`**, so reading it from a constructor, before scene attachment, or after removal gives an empty list rather than an error. It is the list every selection method filters. |
| `GetVacantStandingPointForAI` | `public StandingPoint GetVacantStandingPointForAI(Agent agent)` at `UsableMachine.cs:271` | Picks the best free point for an agent: prefers a valid pilot point when one exists, then scores other valid points by distance, while protecting weapon-required points from being bypassed by an active ammo request. **Returns `null` when nothing is available**, which is a normal outcome, not an error. |
| `GetValidVacantReachableStandingPointForAgent` / `GetValidStandingPointForAgentWithoutDistanceCheck` | `public WeakGameEntity GetValidVacantReachableStandingPointForAgent(Agent agent)` at `UsableMachine.cs:227` and `public WeakGameEntity GetValidStandingPointForAgentWithoutDistanceCheck(Agent agent)` at `UsableMachine.cs:252` | Lookup helpers for movement code, applying **different** reachability filters. **Both return `WeakGameEntity`, not `StandingPoint`** — assigning one to a `StandingPoint` variable does not compile, and that is the point: they are for positioning, not for occupying. |
| `GetTargetStandingPointOfAIAgent` | `public StandingPoint GetTargetStandingPointOfAIAgent(Agent agent)` at `UsableMachine.cs:310` | The point an agent is currently moving toward. Useful for order visualization; returns `null` when the agent has no target, so it is a live query and not a guarantee. |
| `Ai` | `public UsableMachineAIBase Ai` at `UsableMachine.cs:89` | The machine's AI controller, **created lazily on first read** via `_ai = CreateAIBehaviorObject();` (`UsableMachine.cs:95`). **May be `null`** because `CreateAIBehaviorObject()` is `virtual` (`:222`) and a derived class may return `null`. Always null-check; the host ticks it, so do not construct a replacement. |
| `CreateAIBehaviorObject` | `public virtual UsableMachineAIBase CreateAIBehaviorObject()` at `UsableMachine.cs:222` | The factory a derived machine overrides to supply its own AI. **Virtual, not abstract** — the base implementation exists, and returning `null` is a valid answer that yields a machine with no specialised AI. |
| `SetAI` | `public void SetAI(UsableMachineAIBase ai)` at `UsableMachine.cs:247` | Replaces the cached AI object. This is the **owner-level** call: it bypasses the lazy creation, so calling it before `Ai` has ever been read means `CreateAIBehaviorObject()` is never invoked. Reserve it for whoever owns the machine's lifetime. |
| `PilotStandingPoint` / `PilotAgent` | `public StandingPoint PilotStandingPoint { get; private set; }` at `UsableMachine.cs:57` and `public Agent PilotAgent => PilotStandingPoint?.UserAgent;` at `UsableMachine.cs:83` | Who is crewing the machine. **`PilotAgent` is null-conditional** (`:83`), so it returns `null` for an unmanned machine — a very common state, and the reason you must null-check it. |
| `IsDestroyed` / `IsDestructible` / `DestructionComponent` | `public DestructableComponent DestructionComponent { get; private set; }` at `UsableMachine.cs:65`, `public bool IsDestructible => DestructionComponent != null;` at `:67` and `public bool IsDestroyed` at `:69` | Whether the machine has been destroyed, and whether it *can* be. **A machine without a `DestructionComponent` reports `IsDestructible == false`** (`:67`), so "not destructible" and "not destroyed" are different answers and both must be consulted before you destroy or skip one. |
| `UserCountNotInStruckAction` / `UserCountIncludingInStruckAction` | `public int UserCountNotInStruckAction` at `UsableMachine.cs:124` and `public int UserCountIncludingInStruckAction` at `:140` | How many agents are using the machine, under two different struck-action policies. **They legitimately disagree** — an agent mid-strike counts in one and not the other — so pick the one matching your question rather than assuming there is one occupancy number. |
| `MaxUserCount` | `public virtual int MaxUserCount => StandingPoints.Count;` at `UsableMachine.cs:156` | The occupancy ceiling, defaulting to the number of collected points. `virtual`, so a derived machine with two seats per point can raise it — but raising it past the real point count produces assignments the geometry cannot honour. |
| `CurrentlyUsedAmmoPickUpPoint` / `HasAIPickingUpAmmo` | `public StandingPoint CurrentlyUsedAmmoPickUpPoint` at `UsableMachine.cs:105` and `public bool HasAIPickingUpAmmo => CurrentlyUsedAmmoPickUpPoint != null;` at `:118` | Whether a reservation for an ammo pickup is in flight, and which point holds it. This is what makes the machine request a tick while an agent walks over. It is **Mission-scoped** — it must be cleared before mission end. |
| `IsDisabledForBattleSideAI` | `public bool IsDisabledForBattleSideAI(BattleSideEnum side)` at `UsableMachine.cs`, used from the selection path | Rejects base-disabled, AI-disabled, or deactivated machines, and may additionally reject a side when `EnemyRangeToStopUsing` detects an enemy through the cached `QueryData<bool>` values. **Machine availability is not a guarantee that a given agent can use a point** — `UsableTeam` and the per-point filters still run afterwards. |
| `IsDeactivated` | `public virtual bool IsDeactivated` at `UsableMachine.cs:174` | The explicit `Deactivate()` latch, in addition to whatever destruction implies. `virtual`, and `Activate`/`Deactivate` update both the machine and every point's own `IsDeactivated` — so the machine-level flag and the per-point flags can be read independently. |
| `AddComponent` / `RemoveComponent` / `GetComponent<T>` | `public void AddComponent(UsableMissionObjectComponent component)` at `UsableMachine.cs:191`, `public void RemoveComponent(UsableMissionObjectComponent component)` at `:198` and `public T GetComponent<T>() where T : UsableMissionObjectComponent` at `:205` | The component collection. **`GetComponent<T>` returns `null` when no such component is attached** — there is no `Try` form, so every call site needs a null check. `RemoveComponent` releases the reference; after removal the machine no longer ticks it. |
| `OnMissionEnded` | `public override void OnMissionEnded()` at `UsableMachine.cs:322` | Stops users and deactivates every standing point. **Do not call it yourself** to simulate a lifecycle: the mission and team systems own that transition, and calling it early leaves the machine deactivated while the mission continues. |
| `SetPhysicsStateSynched` | `public override void SetPhysicsStateSynched(bool value, bool setChildren = true)` at `UsableMachine.cs:336` | Synchronized physics state. **It also updates navigation-face ability and invalidates every point's cached world position.** A client-only or out-of-phase physics mutation desynchronises movement and native scene state — this is the sharpest edge on the page, and it is why the method is `override` rather than a plain setter. |
| `GetTickRequirement` | `public override TickRequirement GetTickRequirement()` at `UsableMachine.cs:419` | How often the engine must tick this machine. The machine requests a tick when a component needs one, when an authoritative ammo pickup is active, or when the entity is sinking — so returning a coarse requirement is what suppresses that. |
| `OnFocusGain` / `OnFocusLose` / `OnPilotAssignedDuringSpawn` | `public virtual void OnFocusGain(Agent userAgent)` at `UsableMachine.cs:542`, `public virtual void OnFocusLose(Agent userAgent)` at `:550` and `public virtual void OnPilotAssignedDuringSpawn()` at `:558` | The focus and spawn hooks, all `virtual`. `OnPilotAssignedDuringSpawn` (`:558`) is the one that fires during initialisation rather than during play, so work done there must not assume the mission is fully populated. |
| `PilotStandingPointTag` / `AmmoPickUpTag` / `WaitStandingPointTag` | `public string PilotStandingPointTag = "Pilot";` at `UsableMachine.cs:17`, `public string AmmoPickUpTag = "ammopickup";` at `:19` and `public string WaitStandingPointTag = "Wait";` at `:21` | The entity tags that classify collected points — and they are **plain public mutable fields, not properties or constants**. Only `UsableMachineParentTag = "machine_parent"` (`:15`) is `const`. **Change them before `OnInit` runs or not at all**: a post-init change leaves the machine's pilot, ammo and wait points inconsistent with its own configuration, with no error. |
| `GetActionTextForStandingPoint` / `GetDescriptionText` | `public abstract TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` at `UsableMachine.cs:699` and `public abstract TextObject GetDescriptionText(WeakGameEntity gameEntity)` at `:1173` | The **only two abstract members** in the class, and both return `TextObject` — localised text, not `string`. They are the whole compiler-enforced contract for a derived machine. |

Members a reader might expect and their verified status:

| Absent member | Status | Why it is absent |
| --- | --- | --- |
| A public constructor you can call | **UNRESOLVED — `abstract` and scene-owned** | `UsableMachine.cs:13` declares the class `abstract`, and the machine is created by the mission as a mission object. Positive evidence: `grep -n 'class UsableMachine' UsableMachine.cs` returns the single declaration at `:13`, and the class implements `IDetachment`, which the mission's detachment host drives. |
| A null-safe AI accessor | **UNRESOLVED — absent in v1.4.5** | `Ai` (`UsableMachine.cs:89`) returns the cached object with no `Try` variant, and `CreateAIBehaviorObject()` (`:222`) may return `null`. Positive evidence: `grep -n 'CreateAIBehaviorObject' UsableMachine.cs` returns the property assignment at `:95`, the definition at `:222`, and no `TryGetAi`. |
| A public setter for the point tags | **UNRESOLVED — it is already public, which is the problem** | `UsableMachine.cs:17`, `:19`, `:21` are public fields, so a setter exists implicitly — but nothing re-scans points afterwards. This is a hazard, not a missing feature. |
| Anything Campaign-persistent | **UNRESOLVED — absent by design** | The class has no `[Serializable]` and is torn down with its `Mission`; the `SynchedMissionObject` base (`UsableMachine.cs:13`) handles scene registration and replication, not saving. |

## Examples

Find a machine of your own type in the live mission, skipping destroyed ones:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MachineLookup
{
    public static T First<T>() where T : UsableMachine
    {
        Mission mission = Mission.Current;
        if (mission == null)
            return null;

        foreach (UsableMachine machine in
                 mission.ActiveMissionObjects.FindAllWithType<UsableMachine>())
        {
            // IsDestructible is `DestructionComponent != null` (UsableMachine.cs:67)
            // and IsDestroyed (:69) are different questions — check destruction
            // state, not merely destructibility.
            if (machine is T typed && !typed.IsDestroyed)
            {
                return typed;
            }
        }

        return null;
    }
}
```

Read the AI safely, because it may legitimately not exist:

```csharp
using TaleWorlds.MountAndBlade;

public class MachineAiProbe
{
    public static bool HasAi(UsableMachine machine)
    {
        if (machine == null)
            return false;

        // Ai is created lazily on first read (UsableMachine.cs:89, :95) and
        // CreateAIBehaviorObject() is virtual (:222) — a derived machine may
        // return null, which is legal and raises nothing.
        UsableMachineAIBase ai = machine.Ai;
        if (ai == null)
        {
            Debug.Print("machine has no AI controller", 0);
            return false;
        }

        Debug.Print("machine AI is " + ai.GetType().Name, 0);
        return true;
    }
}
```

Read the three tag fields knowing they are mutable:

```csharp
using TaleWorlds.MountAndBlade;

public class TagReport
{
    // PilotStandingPointTag (UsableMachine.cs:17), AmmoPickUpTag (:19) and
    // WaitStandingPointTag (:21) are public mutable FIELDS, not properties.
    // They are read during OnInit; changing them afterwards does NOT re-scan
    // the collected points. Report them, do not rely on mutating them.
    public static void Describe(UsableMachine machine)
    {
        if (machine == null)
            return;

        Debug.Print(
            "pilot tag=" + machine.PilotStandingPointTag +
            " ammo tag=" + machine.AmmoPickUpTag +
            " wait tag=" + machine.WaitStandingPointTag +
            " points=" + machine.StandingPoints.Count,
            0);
    }
}
```

Use a component lookup with the null check it demands:

```csharp
using TaleWorlds.MountAndBlade;

public class ComponentProbe
{
    public static bool HasComponent<T>(UsableMachine machine) where T : UsableMissionObjectComponent
    {
        if (machine == null)
            return false;

        // GetComponent<T> returns null when no such component is attached
        // (UsableMachine.cs:205) — there is no Try form, so every call site
        // needs this check.
        T component = machine.GetComponent<T>();
        return component != null;
    }
}
```

## Risks and crash boundaries

- **`Ai` may be `null` and that is not an error.** `UsableMachine.cs:89` creates it lazily from the `virtual` `CreateAIBehaviorObject()` (`:222`, assigned at `:95`). A derived machine returning `null` yields an AI-less machine with no exception; **any dereference of `Ai` without a check crashes on exactly the machines that opted out.**
- **The three tag fields are public and mutable.** `PilotStandingPointTag` (`UsableMachine.cs:17`), `AmmoPickUpTag` (`:19`) and `WaitStandingPointTag` (`:21`) are read once during `OnInit`. **Mutating them afterwards produces an inconsistent machine with no error** — the collected points keep their original classification. Only `UsableMachineParentTag` (`:15`) is `const`.
- **`StandingPoints` is populated during `OnInit`.** `UsableMachine.cs:55`, `{ get; private set; }`. Reading it from a constructor, before scene attachment, or after removal gives an empty list, not an exception.
- **`GetComponent<T>` returns `null` with no `Try` form.** `UsableMachine.cs:205`. Every call site needs its own check.
- **`SetPhysicsStateSynched` is the sharpest edge.** `UsableMachine.cs:336`. It also updates navigation-face ability and **invalidates every point's cached world position** — a client-only or out-of-phase mutation desynchronises movement and native scene state.
- **`PilotAgent` is null-conditional.** `UsableMachine.cs:83` reads `PilotStandingPoint?.UserAgent`, so an unmanned machine yields `null`, which is the normal state rather than a fault.
- **`IsDestructible` and `IsDestroyed` are different questions.** `UsableMachine.cs:67` answers `DestructionComponent != null`; `:69` answers whether it has actually been destroyed. Treating "not destructible" as "not destroyed" makes you skip machines you should act on.
- **The two user counts legitimately disagree.** `UserCountNotInStruckAction` (`UsableMachine.cs:124`) and `UserCountIncludingInStruckAction` (`:140`) apply different struck-action policies. An agent mid-strike counts in one and not the other, so there is no single occupancy number.
- **`MaxUserCount` defaults to the point count but is `virtual`.** `UsableMachine.cs:156`. Raising it past the real number of points produces assignments the scene geometry cannot honour.
- **Machine availability is not slot availability.** `IsDisabledForBattleSideAI` can pass while `UsableTeam` and the per-point filters still reject the agent. Always check the specific point, not just the machine.
- **The `GetValid*` helpers return `WeakGameEntity`, not `StandingPoint`.** `UsableMachine.cs:227` and `:252`. They are positioning helpers; assigning one to a `StandingPoint` is a compile error, which is the intended guard.
- **Do not drive the lifecycle by hand.** `OnMissionEnded()` (`UsableMachine.cs:322`) stops users and deactivates every point; calling it to "simulate" a teardown deactivates the machine while the mission continues. Likewise do not call the explicit `IDetachment` methods directly.
- **`Disable` is broader than it looks.** It stops current and moving agents, destroys team detachment registrations, deactivates non-ammo points, notifies components, optionally removes ticking, and calls `SetDisabled`. Use it only from the owner controlling the machine's lifetime.
- **Mission-scoped references are not save-safe.** `CurrentlyUsedAmmoPickUpPoint` (`UsableMachine.cs:105`), `UserFormations` (`:122`) and the standing points' agent references must be cleared or stopped before mission end. None of it survives a Campaign transition.
- **Not a save participant.** No `[Serializable]`; it is live scene state rebuilt when the mission loads.

## Cross-Version Notes

The v1.4.5 file is 1184 lines, `public abstract class UsableMachine : SynchedMissionObject, IFocusable, IOrderable, IDetachment` (`UsableMachine.cs:13`). The same file name and namespace appear under the same `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/` layout in the `bannerlord-1.3.0` and `bannerlord-1.3.15` trees with the same abstract shape and the same two abstract members. Two things have been stable across those versions and are what to build against. First, **the tag vocabulary** — `machine_parent` (`:15`), `Pilot` (`:17`), `ammopickup` (`:19`) and `Wait` (`:21`) — because these strings are matched against prefab entity tags authored in module XML, so changing them would break every shipped prefab. Second, **the two abstract members** (`:699`, `:1173`), which are the compiler-enforced contract for a derived machine and therefore the safest thing to override. What is most likely to drift is the **detachment filtering**: the `IDetachment` implementation has grown steadily across versions as selection policy was tuned, so do not assume a machine that was accepted in one version is accepted in the next. The public mutable tag fields (`:17`-`:21`) are an unusual shape and the most likely candidate for being turned into read-only properties — **so do not write mod code that mutates them**, even though v1.4.5 permits it. **VERIFIED MEASURED for v1.4.5** (1184 lines, 2 abstract members, 3 public tag fields of which 1 `const`, `CreateAIBehaviorObject` virtual not abstract; every cited line number checked with `sed -n`); the sibling version trees were compared at file-shape level only, not member by member.

## Dependencies

- Base type: [`SynchedMissionObject`](../SynchedMissionObject), supplying scene registration and the synchronized visibility and physics boundaries that `SetVisibleSynched` (`UsableMachine.cs:331`) and `SetPhysicsStateSynched` (`:336`) participate in.
- The interaction slots it collects: [`StandingPoint`](../StandingPoint), the per-seat points found by the `machine_parent` recursion (`UsableMachine.cs:15`).
- Machine-specific AI: [`UsableMachineAIBase`](../UsableMachineAIBase), returned by the virtual `CreateAIBehaviorObject()` (`UsableMachine.cs:222`) and cached by `Ai` (`:89`).
- Live detachment participants: [`Mission`](../../mission/Mission), [`Agent`](../../mission/Agent), [`Team`](../Team) and [`Formation`](../../mission/Formation) — the objects whose side, eligibility and formation membership the `IDetachment` selection filters against.
- Component callbacks: [`UsableMissionObjectComponent`](../UsableMissionObjectComponent), attached through `AddComponent` (`UsableMachine.cs:191`), released by `RemoveComponent` (`:198`) and fetched with `GetComponent<T>` (`:205`).
- Mission-wide rules and callbacks: [`MissionBehavior`](../../mission/MissionBehavior) and [`MissionLogic`](../MissionLogic) — use these instead when the behaviour is not tied to one scene object.
- Concrete consumers: [`RangedSiegeWeapon`](../RangedSiegeWeapon) and the siege machine family — described rather than linked individually, because they are described on their own pages.
- Bucket index: [mission-ext API index](../)