---
title: "DetachmentManager"
description: "Auto-generated class reference for DetachmentManager."
---
# DetachmentManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DetachmentManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/DetachmentManager.cs`

## Overview

`DetachmentManager` is the per-`Team` bookkeeper for detached troops — the agents that leave their formation to crew a siege ladder, hold a strategic area, or operate a siege weapon. It is a plain class, not a mission behaviour: you construct one and hand it a `Team`, and it subscribes to that team's `OnFormationsChanged` event in its constructor (`DetachmentManager.cs:11`, `DetachmentManager.cs:24`, `DetachmentManager.cs:29`).

It stores state in two parallel structures: an `MBList` of `(IDetachment, DetachmentData)` tuples exposed read-only as `Detachments`, and a `Dictionary<IDetachment, DetachmentData>` used for every lookup. `DetachmentData` holds the joined `Formation` list, per-agent cost lists, a `firstTime` stamp and moving/defending counters.

The real work is the assignment solver in `TickDetachments` (`DetachmentManager.cs:110`). It runs a greedy loop: find the highest-weighted unevaluated detachment, ask it for its slot weights, take the best-weighted slot, and assign the eligible agent with the **lowest** cost for that slot, comparing against whoever is already moving into it. It repeatedly swaps in exact costs when an incumbent agent is present, then marks the detachment evaluated.

`TickAgent` is the per-agent half: it detaches an agent whose detachment no longer considers it eligible, and maintains each agent's cached per-slot cost list.

## Mental Model

The numeric sentinel is the key to reading this class. Detachments report "not applicable" as `float.MinValue`, which is `-3.4028235E+38f` in the comparisons (`DetachmentManager.cs:127`). So the checks `weight > -3.4028235E+38f` and `num < detachmentWeightFromCache` are not ordinary magnitude tests — the second one seeds `num` at `float.MinValue`, meaning a detachment reporting `float.MinValue` can never win the `Max` comparison and is skipped. Treat that constant as a sentinel, not as a very negative number, and never feed real weights anywhere near it.

The deployment carve-out is narrow and type-specific. During `MissionMode.Deployment`, for an attacking team, `SiegeLadder` and `StrategicArea` detachments are excluded from selection entirely (`DetachmentManager.cs:139`) — they are allowed to fill up while the player is placing troops, because during deployment an attacker should not have crews committed to fixed emplacements. Outside deployment, or for a defending team, they compete normally.

The `1.5f` in `TickAgent` is a re-cost throttle, not an interval (`DetachmentManager.cs:281`): an agent already in a detachment's score list has its costs recomputed only when more than 1.5 seconds of mission time have passed since its last update, so a new agent gets costs immediately while an existing one lags. First insertion additionally stamps `firstTime`.

Two things look like bugs and are worth knowing before you "fix" them. `Clear()` unsubscribes from `Team.OnFormationsChanged` and immediately resubscribes the same handler (`DetachmentManager.cs:49`, `DetachmentManager.cs:50`) — so the net effect is to detach nothing from the team while destroying every detachment. And `AssertDetachments` / `AssertDetachment` are decorated `[Conditional("DEBUG")]`, so in a release build the calls are removed by the compiler entirely and the bodies never execute.

The `DUMP-1671` prints in `RemoveAgentAsMovingToDetachment` and `RemoveAgentAsDefendingToDetachment` are evidence of a real robustness issue the shipped code papers over: both log when the agent's detachment is not in the dictionary, but then **proceed to index the dictionary anyway** (`DetachmentManager.cs:415`, `DetachmentManager.cs:432`). The log is a warning, not a guard.

## How to use

**Getting it.** Construct one per team during mission setup and keep the reference:

```csharp
DetachmentManager playerDetachments = new DetachmentManager(Mission.Current.PlayerTeam);
```

It is not registered anywhere by the engine; if you build one you must tick it yourself, or register it as a mission behaviour field.

**Typical use** — running the solver and registering detachments, which is the normal shape:

```csharp
public class DetachmentDriver : MissionLogic
{
    private DetachmentManager _detachmentManager;

    public override void OnBehaviorInitialize()
    {
        base.OnBehaviorInitialize();
        _detachmentManager = new DetachmentManager(Mission.Current.PlayerTeam);
    }

    public override void OnMissionTick(float dt)
    {
        _detachmentManager.TickDetachments();
    }
}
```

**Typical use** — reacting to an agent being pulled out of a detachment, which happens inside `TickAgent`:

```csharp
public override void OnMissionTick(float dt)
{
    foreach (Agent a in Mission.Current.ActiveAgents)
    {
        if (a.IsDetachableFromFormation)
        {
            _detachmentManager.TickAgent(a);
            if (a.IsDetachedFromFormation == false)
                MBDebug.Print(a.Name + " returned to formation");
        }
    }
}
```

**Most common mistake, and what it costs.** Calling `MakeDetachment` with an `IDetachment` and then `DestroyDetachment` for one that was never created, or letting an agent's `Detachment` point at a destroyed detachment. `DestroyDetachment` removes the entry from the list and the dictionary but nothing invalidates `Agent.Detachment` references already handed out. The next `TickAgent` for such an agent indexes `this._detachmentDataDictionary[agent.Detachment]` and throws `KeyNotFoundException` — the shipped code's own `DUMP-1671` logging exists because this has happened in the base game. Destroy detachments only after the agents on them have been returned to their formations, and null-check `agent.Detachment` in any mod code that runs between the two.

## Key Properties

| Name | Signature |
|------|-----------|
| `Detachments` | `public MBReadOnlyList<ValueTuple<IDetachment, DetachmentData>> Detachments { get; }` |

## Key Methods

### Clear
`public void Clear()`

**Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.Clear();
```

### ContainsDetachment
`public bool ContainsDetachment(IDetachment detachment)`

**Purpose:** Indicates whether the this instance contains detachment.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
var result = detachmentManager.ContainsDetachment(detachment);
```

### MakeDetachment
`public void MakeDetachment(IDetachment detachment)`

**Purpose:** Executes the MakeDetachment logic.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.MakeDetachment(detachment);
```

### DestroyDetachment
`public void DestroyDetachment(IDetachment destroyedDetachment)`

**Purpose:** Executes the DestroyDetachment logic.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.DestroyDetachment(destroyedDetachment);
```

### OnFormationJoinDetachment
`public void OnFormationJoinDetachment(Formation formation, IDetachment joinedDetachment)`

**Purpose:** Invoked when the formation join detachment event is raised.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.OnFormationJoinDetachment(formation, joinedDetachment);
```

### OnFormationLeaveDetachment
`public void OnFormationLeaveDetachment(Formation formation, IDetachment leftDetachment)`

**Purpose:** Invoked when the formation leave detachment event is raised.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.OnFormationLeaveDetachment(formation, leftDetachment);
```

### TickDetachments
`public void TickDetachments()`

**Purpose:** Advances the detachments state each frame or update cycle.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.TickDetachments();
```

### TickAgent
`public void TickAgent(Agent agent)`

**Purpose:** Advances the agent state each frame or update cycle.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.TickAgent(agent);
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.OnAgentRemoved(agent);
```

### RemoveScoresOfAgentFromDetachments
`public void RemoveScoresOfAgentFromDetachments(Agent agent)`

**Purpose:** Removes scores of agent from detachments from the current collection or state.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.RemoveScoresOfAgentFromDetachments(agent);
```

### RemoveScoresOfAgentFromDetachment
`public void RemoveScoresOfAgentFromDetachment(Agent agent, IDetachment detachmentToBeRemovedFrom)`

**Purpose:** Removes scores of agent from detachment from the current collection or state.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.RemoveScoresOfAgentFromDetachment(agent, detachmentToBeRemovedFrom);
```

### AddAgentAsMovingToDetachment
`public void AddAgentAsMovingToDetachment(Agent agent, IDetachment detachment)`

**Purpose:** Adds agent as moving to detachment to the current collection or state.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.AddAgentAsMovingToDetachment(agent, detachment);
```

### RemoveAgentAsMovingToDetachment
`public void RemoveAgentAsMovingToDetachment(Agent agent)`

**Purpose:** Removes agent as moving to detachment from the current collection or state.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.RemoveAgentAsMovingToDetachment(agent);
```

### AddAgentAsDefendingToDetachment
`public void AddAgentAsDefendingToDetachment(Agent agent, IDetachment detachment)`

**Purpose:** Adds agent as defending to detachment to the current collection or state.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.AddAgentAsDefendingToDetachment(agent, detachment);
```

### RemoveAgentAsDefendingToDetachment
`public void RemoveAgentAsDefendingToDetachment(Agent agent)`

**Purpose:** Removes agent as defending to detachment from the current collection or state.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.RemoveAgentAsDefendingToDetachment(agent);
```

### AssertDetachment
`public void AssertDetachment(Team team, IDetachment detachment)`

**Purpose:** Executes the AssertDetachment logic.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.AssertDetachment(team, detachment);
```

## Usage Example

```csharp
var manager = DetachmentManager.Current;
```

## See Also

- [Area Index](../)
- [IDetachment](../IDetachment)
- [DetachmentData](../DetachmentData)
- [SiegeLadder](../SiegeLadder)
- [FormationAI](../FormationAI)
- [DetachmentManager (中文页面)](../../../../zh/api/mission-ext/DetachmentManager)