---
title: "Mission"
description: "The runtime container for battle simulation: created by MissionState, holding Agents / Teams / MissionBehaviors, and torn down after EndMission. This page explains its lifecycle, acquisition, dependencies, and crash boundaries."
---

# Mission

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Mission : DotNetObject, IMission`
**Base:** `DotNetObject`
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Mission.cs`

---

## One-line responsibility

`Mission` is the **runtime container for a combat/scene simulation**: it binds the native `Scene`, every participating `Agent`, the `Team` setup, and the mounted logic (`MissionBehavior` / `MissionLogic`), and drives the whole simulation frame-by-frame until `EndMission` tears it down.

---

## Mental Model

### What it is / which layer

- `Mission` belongs to the **Mount & Blade simulation layer**, not the Campaign (world map) layer. Everything that is "happening on the field right now" lives on it; Campaign only decides *what kind of battle to start* and hands control to `Mission` via entries like `CampaignMission.OpenBattleMission(...)`.
- It is `sealed`, so you **cannot subclass it**. To add logic to a battle, write a `MissionBehavior` (presentation/observation) or `MissionLogic` (rules/win-loss) subclass, which the engine registers at mission start (`AddMissionBehavior` back-sets the `Mission` reference onto the behavior).
- It implements `IMission`, so `CampaignMission` open methods return the `IMission` interface; cast back to `Mission` only when you need the concrete type.

### Lifecycle (birth to death)

1. **Creation**: `MissionState.CreateMission` (`MissionState.cs:248`) does `new Mission(rec, this, needsMemoryCleanup)`, with `CurrentState = State.NewlyCreated`. `rec` is a `MissionInitializerRecord` carrying scene name, levels, damage multipliers, etc.
2. **Enter GameState**: `MissionState.OpenNew(...)` (`MissionState.cs:302`) creates a `MissionState` and pushes it onto the `GameStateManager`; `OnMissionStateActivate` then loads the scene and `CurrentState` moves to `Initializing`.
3. **Running**: once the scene is ready (`IsLoadingFinished` true), `CurrentState = State.Continuing` and each frame `Tick` drives `Agents` / `Teams` / every `MissionBehavior` callback. This is where ~99% of your logic runs.
4. **Request end**: calling `EndMission()` anywhere sets `MissionEnded = true` and `CurrentState = State.EndingNextFrame` — it does **not** destroy immediately, it schedules teardown for the next frame.
5. **Real teardown**: next frame `EndMissionInternal()` calls listeners' `OnEndMission`, each `MissionBehavior.OnEndMissionInternal()`, `OnRemove()` on every `Agent`, then `OnDelete()` + `Clear()` on every `AllAgents` entry, `Teams.Clear()`, `MissionObjects.OnEndMission()`, and finally `CurrentState = State.Over` before freeing resources and `FinalizeMission()`. `MissionResult` is shaped during this phase.

### Who creates / who holds

- **Creator**: `MissionState` (engine layer), driven indirectly by `CampaignMission` / `MissionState.OpenNew`.
- **Holder**: the live `Mission` is referenced in two places — the static `Mission.Current` (global handle to the active mission) and `MissionState.Current.CurrentMission` (GameState view). They are the same object during the mission; after it ends `Mission.Current` is nulled.
- **You** generally should **not** `new Mission(...)`. Obtain it through `CampaignMission.OpenXxxMission(...)` or via a behavior the engine injects.

### When to use / when NOT to

- **Use**: any logic "while the battle is running" — unit add/remove, team state, hit resolution, win/loss, camera and UI overlays. Put it in a `MissionBehavior` / `MissionLogic` mounted on `Mission`.
- **Do NOT** hold a `Mission` reference from Campaign code, map logic outside `OnSessionLaunched`, or save/load code. Campaign and Mission lifecycles are completely separate: on the world map `Mission.Current == null`, and touching it there throws a null-reference crash.
- **Do NOT** cache `Agent` / `Team` references as "permanent handles" outside the mission. Once the mission ends those objects are `Clear()`-ed; dangling references read freed native pointers.

---

## Dependency

`Mission` is the central hub; the types it directly holds or drives are around it. Linked nodes are real pages in this repo; the rest are real types not yet page-backed this cycle (described only, not linked to missing files).

```
                 CampaignMission / MissionState.OpenNew
                          │ creates
                          ▼
                       Mission  ◄── Mission.Current (static handle)
                  ┌───────┼───────────────┬──────────────┐
                  ▼       ▼               ▼              ▼
            MissionBehaviors   Agents          Teams        MissionLogics
            (List<Behavior>)  (AgentReadOnlyList) (TeamCollection) (List<MissionLogic>)
                  │               │               │              │
                  ├──► [MissionBehavior](./MissionBehavior)   (rules/observer)
                  ├──► Agent (./Agent)            ├──► Team
                  └──► Formation (./Formation)    └──► Team-internal Formation
                  ▼
            MissionState ── holds CurrentMission; MissionResult shaped at end
                  ▼
            Scene (native) / Screen (UI overlay) / Save (does NOT serialize Mission itself)
```

- **Upstream / creator**: `MissionState` (`: GameState`), `CampaignMission` (static open entry), `MissionInitializerRecord`.
- **Collection deps (held at runtime)**: [`MissionBehavior`](./MissionBehavior), [`Agent`](./Agent), `Team`, `Formation` ([`Formation`](./Formation)), `MissionLogic`, `MissionObject`.
- **Result / state**: `MissionState.Current.CurrentMission`, `MissionResult`, the `State` enum (`NewlyCreated`/`Initializing`/`Continuing`/`EndingNextFrame`/`Over`).
- **Surrounding**: `Scene` (native scene), `Screen` (Gauntlet UI overlay), save system (**does not** directly serialize a `Mission` instance — see Risks).

---

## Risks

1. **Dangling Agent references after death/removal**: when `OnAgentRemoved` fires, the `Agent` is still in `AllAgents` (not yet `Clear()`-ed); but after `EndMissionInternal` every `AllAgents` entry is `OnDelete()` + `Clear()`-ed. Storing `Agent`s in static fields, event subscriptions, or cross-mission lists yields freed-pointer reads after the mission. Do: use-and-drop inside the callback, or always check `agent.State == AgentState.Active` / `agent.IsValid` first.
2. **Mission lifecycle vs Campaign**: `Mission` exists only during a battle. In Campaign phases like `OnSessionLaunched` or `DailyTick`, `Mission.Current` is `null`. Any map-layer code touching `Mission.Current` `NullReferenceException`s.
3. **Accessing `Mission.Current` outside a mission**: even when non-null, only read `Agents` / `Teams` during the `State.Continuing` phase. In `EndingNextFrame` / `Over` the collections are being cleared; iterating them yields half-destroyed state.
4. **Wrong-phase logic**: in `Initializing` `Agents` is not yet complete and teams are not ready; after `Over`, calling `EndMission()` again is meaningless and may re-enter teardown. Code that needs "spawn finished" should wait for `IsLoadingFinished` true or the `OnMissionStart` callback.
5. **Double / premature EndMission**: `EndMission()` is not strongly idempotent — calling it repeatedly flips `CurrentState` back to `EndingNextFrame` and can re-enter teardown. Guard with `if (!Mission.Current.MissionEnded)` before ending.
6. **Don't put Campaign logic in the Mission layer**: when writing battle results back to Campaign, do it from a `MissionLogic` during the `OnMissionEnd` phase via Campaign APIs — not by mutating the world map directly inside a tick, or save/forward simulation will desync.

---

## Member Notes

Grouped by usage frequency. Each member lists **purpose + side effect + when to call**.

### Acquisition & state

- **`static Mission Current`**
  - Purpose: global handle to "the mission running right now."
  - Side effect: none; but nulled when the mission ends.
  - When to call: only when you are certain you are inside a mission (typically inside a `MissionBehavior` method body). Never from map-layer code.
- **`State CurrentState`** (enum)
  - Purpose: tells which phase — `NewlyCreated` / `Initializing` / `Continuing` / `EndingNextFrame` / `Over`.
  - Side effect: read-only.
  - When to call: before any phase-branching logic.
- **`bool MissionEnded` / `bool IsMissionEnding`**
  - Purpose: `MissionEnded` means `EndMission` was called; `IsMissionEnding` means teardown is pending but resources not yet cleared.
  - When to call: check before deciding "is it still safe to touch the collections."
- **`bool IsLoadingFinished`**
  - Purpose: whether scene and units finished loading. `false` means `Agents` may be incomplete.
  - When to call: at the top of `OnMissionTick` or before spawn logic.

### Collections (held at runtime)

- **`AgentReadOnlyList Agents`**
  - Purpose: the currently **alive/present** units (excludes removed-not-yet-deleted).
  - Side effect: changes every frame as units are added/removed; be careful enumerating while removing.
  - When to call: ticks, hit resolution, counts — anywhere you need "who is on the field now."
- **`AgentReadOnlyList AllAgents`**
  - Purpose: includes units that were `OnRemove`-ed but not yet `OnDelete`-ed (the window between removal and true destruction).
  - When to call: when you need to clean up / count right after a unit died but the object is still alive.
- **`TeamCollection Teams`**
  - Purpose: all teams; exposes shortcuts `AttackerTeam` / `DefenderTeam` / `PlayerTeam` / `PlayerEnemyTeam` / `PlayerAllyTeam`.
  - When to call: team-based logic, finding the player enemy team, win/loss checks.
- **`List<MissionBehavior> MissionBehaviors`** / **`List<MissionLogic> MissionLogics`**
  - Purpose: all currently mounted behaviors / logic.
  - When to call: cross-behavior cooperation (e.g. one logic reads another's state). Normally you do not iterate it.

### Key methods

- **`void EndMission()`**
  - Purpose: request to end this mission.
  - Side effect: sets `MissionEnded = true`, `CurrentState = State.EndingNextFrame`; teardown happens **next frame**. Routes through each behavior's `OnEndMission` / `OnEndMissionInternal`.
  - When to call: when win/loss is decided or the player chooses to retreat. Guard with `!MissionEnded` first.
- **`Agent MainAgent`**
  - Purpose: the unit the player currently controls (may be `null`, e.g. spectating or hero dead).
  - When to call: when you need "the player unit," null-check then read `State`.
- **Event `OnBeforeAgentRemoved`** (delegate `OnBeforeAgentRemovedDelegate`)
  - Purpose: fires before behaviors' `OnAgentRemoved`, for last-moment handling before the unit is formally removed.
  - When to call: when you must react *ahead* of behaviors (e.g. record the killing source).

### MissionBehavior callbacks (invoked by Mission)

- **`OnEarlyAgentRemoved(Agent, Agent, AgentState, KillingBlow)`** and **`OnAgentRemoved(Agent, Agent, AgentState, KillingBlow)`**
  - Called by `Mission.OnAgentRemoved` (internal, `Mission.cs:2986`) while iterating `MissionBehaviors` — `OnEarlyAgentRemoved` first, then `OnAgentRemoved`.
  - Purpose: your entry point when a unit is removed; `affectedAgent` is the removed one, `agentState` distinguishes `Killed` / `Unconscious` / `Routed`.
  - When to call: auto-triggered after hit resolution; just override it.

---

## Real Example

### Acquiring a Mission

At the Campaign layer, open a battle via `CampaignMission` (returns `IMission`, cast to `Mission`); inside a behavior, use `Mission.Current` or the behavior's own `Mission` property — **do not `new` it yourself**.

```csharp
// Campaign layer: open an encounter (real entry, from CampaignMission.OpenBattleMission)
IMission opened = CampaignMission.OpenBattleMission("battle_scene_001", usesTownDecalAtlas: false);
// Cast to the concrete type only when you need it
if (opened is Mission mission)
{
    // mission is most likely still Initializing here; Agents not ready yet
}
```

### Reading Agents and handling OnAgentRemoved inside a MissionBehavior

This class counts kills against the player's enemy team and recounts living enemies each tick — all using **real API names** (`Mission.Current.Agents`, `Agent.State`, `AgentState.Active` / `AgentState.Killed`, `PlayerTeam`, and the `OnAgentRemoved` signature matching `MissionBehavior.cs:81`).

```csharp
using TaleWorlds.MountAndBlade;

public class KillTrackingBehavior : MissionLogic
{
    private int _enemyKills;

    // Called by Mission when a unit is removed (signature: MissionBehavior.cs:81)
    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent,
                                         AgentState agentState, KillingBlow blow)
    {
        base.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);

        // agentState distinguishes Killed / Unconscious / Routed; count only real deaths
        if (agentState != AgentState.Killed)
            return;

        Team playerTeam = Mission.Current.PlayerTeam;
        if (playerTeam != null && affectedAgent.Team != null &&
            affectedAgent.Team.IsEnemyOf(playerTeam))
        {
            _enemyKills++;
        }
        // Note: affectedAgent is still in AllAgents here; do not cache it long-term
    }

    // Recount living enemies each frame (OnMissionTick runs only while CurrentState == Continuing)
    public override void OnMissionTick(float dt)
    {
        int aliveEnemies = 0;
        foreach (Agent agent in Mission.Current.Agents)
        {
            if (agent.State == AgentState.Active &&
                agent.Team != null &&
                agent.Team.IsEnemyOf(Mission.Current.PlayerTeam))
            {
                aliveEnemies++;
            }
        }
        // aliveEnemies now holds the number of living enemy combatants on the field
    }
}
```

> Acquisition summary: manually `new Mission` is the wrong approach; either let the engine open it via `CampaignMission.OpenXxxMission`, or access it from an already-mounted `MissionBehavior` / `MissionLogic` through `Mission.Current` or `this.Mission`.

---

## See Also

- ↑ Parent (module index): [Mission module home](./)
- ↔ Siblings: [MissionBehavior](./MissionBehavior) · [Agent](./Agent) · [Formation](./Formation)
- Upstream hubs: [Campaign](../campaign/Campaign) (decides what battle to start) · [MBSubModuleBase](../core/MBSubModuleBase) (behavior registration entry)
- Contract: [Doc Contract](../../architecture/doc-contract) (handwritten-doc and crash-boundary master rules)

> Note: `Team`, `MissionState`, `MissionResult`, `Screen`, and the save system do not have standalone pages this cycle, so they are not linked to missing files; their real type names and relationships are explained in the Dependency / Risks sections above.
