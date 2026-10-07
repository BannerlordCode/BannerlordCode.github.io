---
title: "Mission Lifecycle"
description: "Bannerlord's Mission lifecycle from creation to destruction: MissionState.OpenNew factory, Mission state machine, MissionBehavior registration timing, Agent death callback chain, and what is safe to do at each stage."
---

# Mission Lifecycle

> The Mission lifecycle answers a mod's core question: **at which moments during a battle is my code called?** Answer: `MissionState.OpenNew` creates the Mission, which passes through five states — NewlyCreated → Initializing → Continuing → EndingNextFrame → Over — and each state transition triggers the corresponding MissionBehavior callbacks.

## One-sentence positioning

`Mission` is the **runtime container** for a battle scene: it holds Agents, Teams, the MissionBehavior list, and scene state. It is created by the `MissionState.OpenNew` factory, passes through five states, and is destroyed; mods hook into each state transition by deriving from `MissionBehavior`.

## Mental model

Think of the Mission lifecycle as a **theatrical performance**:

1. **Build the stage (NewlyCreated)**. `MissionState.OpenNew` (`MissionState.cs:318`) calls `Game.Current.GameStateManager.CreateState<MissionState>()` to create the MissionState, then calls `HandleOpenNew` (`MissionState.cs:270`) to create the Mission object. At this point the Mission has just been constructed (`Mission.cs:2306`), `CurrentState = NewlyCreated`, and the scene has not yet loaded.
2. **Set the scenery (Initializing)**. MissionState's `OnTick` (`MissionState.cs:88`) detects `CurrentState == NewlyCreated`, calls `LoadMission` (`MissionState.cs:252`) to trigger all Behaviors' `OnMissionScreenPreLoad`, then calls `Mission.Initialize` (`Mission.cs:604`) to set `CurrentState = Initializing` and begin async scene loading.
3. **Perform (Continuing)**. After the scene finishes loading, `FinishMissionLoading` (`MissionState.cs:351`) calls `Mission.AfterStart` (`Mission.cs:3455`), which triggers `OnBehaviorInitialize` → `EarlyStart` → `AfterStart` in sequence, then sets `CurrentState = Continuing`. From then on, `MissionState.TickMission` (`MissionState.cs:142`) calls `Mission.OnTick` (`Mission.cs:3306`) every frame to drive combat logic.
4. **Curtain call (EndingNextFrame)**. When a victory condition is met, `Mission.EndMission` (`Mission.cs:4315`) sets `CurrentState = EndingNextFrame`. On the next frame, `EndMissionInternal` (`Mission.cs:4325`) calls `OnEndMissionInternal` → `OnEndMission`, then calls `OnRemove` and `OnDelete` on all Agents.
5. **Dismantle the stage (Over)**. `EndMissionInternal` finally sets `CurrentState = Over`. MissionState's `OnTick` detects this and calls `Game.Current.GameStateManager.PopState(0)` to pop the MissionState, triggering `Mission.OnMissionStateFinalize` (`Mission.cs:1123`) to clean up all Behaviors and resources.

```
MissionState.OpenNew
    │
    ▼
Mission constructed (NewlyCreated)
    │
    ▼
Mission.Initialize (Initializing) ← async scene loading
    │
    ▼
Mission.AfterStart (Continuing) ← per-frame Tick
    │
    ▼
Mission.EndMission (EndingNextFrame)
    │
    ▼
Mission.EndMissionInternal (Over)
    │
    ▼
Mission.OnMissionStateFinalize ← cleanup
```

### State machine: Mission.State enum

`Mission.State` (`Mission.cs:8209`) defines five states:

| State | Meaning | Trigger |
|-------|---------|---------|
| `NewlyCreated` | Just constructed, scene not loaded | Mission constructor (`Mission.cs:2306`) |
| `Initializing` | Scene loading | `Mission.Initialize` (`Mission.cs:604`) |
| `Continuing` | Normal operation | `Mission.AfterStart` (`Mission.cs:3455`) |
| `EndingNextFrame` | About to end | `Mission.EndMission` (`Mission.cs:4315`) |
| `Over` | Ended, awaiting cleanup | `EndMissionInternal` (`Mission.cs:4325`) |

### MissionBehavior registration timing

MissionBehavior registration happens inside `MissionState.HandleOpenNew` (`MissionState.cs:270`):

1. The `handler(this.CurrentMission)` delegate returns the list of mod-registered Behaviors;
2. If `addDefaultMissionBehaviors` is true, `AddDefaultMissionBehaviorsTo` (`MissionState.cs:333`) inserts default Behaviors like `BasicMissionHandler`, `CasualtyHandler`, `AgentCommonAILogic` at the front;
3. Each Behavior's `OnAfterMissionCreated` (`MissionBehavior.cs:33`) is called;
4. `AddBehaviorsToMission` (`MissionState.cs:299`) classifies Behaviors into Logic / Other / Network, then calls `Mission.InitializeStartingBehaviors` (`Mission.cs:4850`) which calls `AddMissionBehavior` (`Mission.cs:4369`) for each, triggering `OnCreated` (`MissionBehavior.cs:43`).

**Key distinction**: `OnAfterMissionCreated` is called before the scene loads, `OnCreated` is called when the Behavior is added to the Mission, and `OnBehaviorInitialize` is called after the scene finishes loading. The three have different timings and different safety guarantees.

## Real minimal examples

### Example 1: Registering a MissionBehavior

```csharp
using TaleWorlds.MountAndBlade;

namespace MyMissionMod;

public class MyMissionBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

    // Called before scene loading: can set initial state, cannot access Agents
    public override void OnAfterMissionCreated()
    {
        // Mission.Current exists here, but Agents list is empty
    }

    // Called when Behavior is added to Mission: can cache Mission reference
    public override void OnCreated()
    {
        // Safe to cache Mission.Current here
    }

    // Called after scene loading completes: can access Agents, Teams
    public override void OnBehaviorInitialize()
    {
        // Mission.Current.Agents is populated here
    }

    // Called every frame: combat logic goes here
    public override void OnMissionTick(float dt)
    {
        // Executes every frame, dt is the frame interval
    }

    // Called when an Agent dies
    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
    {
        // Handle death logic
    }

    // Called when the mission ends
    public override void OnEndMission()
    {
        // Cleanup logic
    }
}
```

Register in `MBSubModuleBase.OnGameStart`:

```csharp
protected override void OnGameStart(Game game, IGameStarter starter)
{
    base.OnGameStart(game, starter);
    // MissionBehaviors are collected by the game via the handler delegate
    // when MissionState.OpenNew is called. Typically injected via
    // MBSubModuleBase.OnBeforeMissionBehaviorInitialize hook.
}
```

### Example 2: Observing the Agent death chain

When an Agent dies, the callback chain order is:

```
Agent.OnRemove (Agent.cs:5481)
    │
    ├── Team.OnAgentRemoved
    ├── Formation.DetachmentManager.OnAgentRemoved
    ├── AgentComponent.OnAgentRemoved (each component)
    │
    ▼
Mission.OnAgentRemoved (Mission.cs:2563) ← MBCallback, triggered by native code
    │
    ├── OnBeforeAgentRemoved event
    ├── Set Agent.State
    ├── Team.DeactivateAgent
    ├── OnEarlyAgentRemoved (all Behaviors)
    ├── OnAgentRemoved (all Behaviors)
    ├── Remove from _activeAgents
    │
    ▼
Mission.OnAgentDeleted (Mission.cs:2545) ← deferred to end of frame
    │
    ├── Set Agent.State = Deleted
    ├── OnAgentDeleted (all Behaviors)
    ├── Remove from _allAgents
    ├── Agent.OnDelete
    ├── Agent.SetTeam(null)
```

```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
{
    // Agent is still in _allAgents here, but removed from _activeAgents
    // agentState may be Dead, Unconscious, Killed, etc.
    if (agentState == AgentState.Dead)
    {
        // Handle death
    }
}

public override void OnAgentDeleted(Agent affectedAgent)
{
    // Agent is removed from _allAgents here, about to be GC'd
    // This is the last chance to clean up references
}
```

### Example 3: Querying Mission state

```csharp
// Inside a MissionBehavior
if (Mission.Current != null)
{
    // Current state
    Mission.State state = Mission.Current.CurrentState;

    // Whether the mission has ended
    bool ended = Mission.Current.MissionEnded;

    // Current time
    float time = Mission.Current.CurrentTime;

    // All active Agents (read-only)
    foreach (Agent agent in Mission.Current.Agents)
    {
        // Read-only iteration
    }

    // All Agents including dead (read-only)
    foreach (Agent agent in Mission.Current.AllAgents)
    {
        // Includes removed Agents
    }

    // Find a specific Behavior
    var myBehavior = Mission.Current.GetMissionBehavior<MyMissionBehavior>();
}
```

## Key members

### Mission class key members

| Member | Purpose | When to call |
|--------|---------|--------------|
| `Mission.Current` | Static property, gets current Mission | Any time, but only safe in Continuing state |
| `CurrentState` | Current state enum | Any time |
| `CurrentTime` | Battle elapsed time (seconds) | Continuing state |
| `Agents` | Active Agent list (read-only) | Continuing state |
| `AllAgents` | All Agents including dead (read-only) | Continuing state |
| `MainAgent` | Player-controlled Agent | Continuing state |
| `Teams` | Team collection | Continuing state |
| `MissionBehaviors` | Behavior list | Any time |
| `MissionLogics` | Logic Behavior list | Any time |
| `MissionEnded` | Whether the mission has ended | Any time |
| `IsLoadingFinished` | Whether the scene has finished loading | After Initializing state |
| `Scene` | Engine scene reference | After Initializing state |
| `NeedsMemoryCleanup` | Whether memory cleanup is needed | Any time |

### MissionState class key members

| Member | Purpose | When to call |
|--------|---------|--------------|
| `MissionState.Current` | Static property, gets current MissionState | Any time |
| `CurrentMission` | Current Mission instance | Any time |
| `MissionName` | Mission name | Any time |
| `Paused` | Whether paused | Any time |
| `Handler` | Mission system handler | Any time |
| `OpenNew` | Static factory method, creates a new Mission | When game logic needs a new mission |

### MissionBehavior class key members

| Member | Purpose | When to call |
|--------|---------|--------------|
| `Mission` | Owning Mission instance | After OnCreated |
| `BehaviorType` | Behavior type (Logic/Other/Network) | Any time |
| `DebugInput` | Debug input context | Any time |

### MissionBehavior lifecycle callbacks

| Callback | When called | What is safe to do |
|----------|-------------|-------------------|
| `OnAfterMissionCreated` | After Behavior creation, before scene loading | Set initial state, cannot access Agents |
| `OnCreated` | When Behavior is added to Mission | Cache Mission reference |
| `OnBehaviorInitialize` | After scene loading completes | Access Agents, Teams |
| `EarlyStart` | Early in AfterStart | Initialization logic |
| `AfterStart` | Late in AfterStart | Final initialization |
| `OnMissionTick` | Every frame | Combat logic |
| `OnPreMissionTick` | Before MissionTick | Pre-processing |
| `OnFixedMissionTick` | Fixed time step | Deterministic logic |
| `OnAgentCreated` | When an Agent is created | Initialize Agent-related state |
| `OnAgentRemoved` | When an Agent is removed from the active list | Handle death/removal |
| `OnAgentDeleted` | When an Agent is removed from all lists | Clean up references |
| `OnEndMissionInternal` | Mission end (internal) | Cleanup |
| `OnEndMission` | Mission end | Final cleanup |
| `OnRemoveBehavior` | When Behavior is removed | Cleanup |

## Common misuses

1. **Accessing Agents in `OnAfterMissionCreated`**. The scene has not loaded yet; `Mission.Current.Agents` is empty. You must wait until `OnBehaviorInitialize` or `AfterStart` to safely access Agents.

2. **Creating or destroying Agents in `OnMissionTick`**. This is called every frame; frequent creation/destruction causes performance issues and state inconsistency. Agent creation and destruction should be triggered by game logic at specific moments.

3. **Accessing a removed Agent's Team in `OnAgentRemoved`**. The Agent has been removed from the Team; `agent.Team` may be null. Cache the Team reference in `OnEarlyAgentRemoved`.

4. **Saving data to Campaign in `OnEndMission`**. The Mission is about to be destroyed and the Campaign state may have already switched. Save in `OnEndMissionInternal` or an earlier callback.

5. **Forgetting that `Mission.Current` may be null**. When accessing `Mission.Current` outside a Mission (e.g., in Campaign logic), you must check for null, as the game may not be in a mission.

6. **Performing expensive operations in `OnMissionTick`**. Called every frame; expensive operations block the main thread. Use `OnFixedMissionTick` or spread the operation across multiple frames.

7. **Confusing `Agents` and `AllAgents`**. `Agents` only contains active Agents; `AllAgents` contains all including dead ones. When iterating `AllAgents`, you may access removed Agents; check `agent.IsActive()`.

## Section schema declaration

This page uses the architecture hub form. Section → canonical six-section mapping:

| Actual section | Canonical section |
|-----------------|-------------------|
| `## One-sentence positioning` | Overview |
| `## Mental model` | Mental model |
| `## Real minimal examples` | How to use + Real examples |
| `## Key members` | Key members (per-member purpose) |
| `## Common misuses` | Mental model (when NOT to use) expansion |
| `## Section schema declaration` | Metadata |
| `## Navigation` | See also |

## Navigation

- [↑ Architecture Overview](../)
- [↔ Module System](../module-system) · [↔ GameModel Decorator](../gamemodel-decorator) · [↔ Save System](../save-system) · [↔ Crash Boundaries](../crash-boundaries)
- Related class pages: [Mission](../../api/mission/Mission/) · [MissionBehavior](../../api/mission/MissionBehavior/) · [Agent](../../api/mission/Agent/) · [MissionState](../../api/mission-ext/MissionState/)
