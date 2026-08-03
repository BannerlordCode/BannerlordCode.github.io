---
title: "Agent"
description: "A short-lived battlefield entity that is built into a Mission, assigned to a Team and Formation, and driven through combat and AI callbacks."
---

# Agent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class Agent : DotNetObject, IAgent, IFocusable, IUsable, IFormationUnit, ITrackableBase`
**Base:** `DotNetObject`
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Agent.cs`

## One-line responsibility

It connects one human, mount, or other combat entity inside a Mission to its native entity, equipment, controller, Team, Formation, and combat callbacks, and defines when that instance is valid from creation and build through activity, death, deletion, and Mission cleanup.

## Mental Model

### What it is

`Agent` is a Mount & Blade battlefield object with a short runtime lifetime. It is not the Campaign-layer `Hero` and it is not a party roster count. `Mission` creates it, while `AgentBuildData` supplies its character, Team, Formation, spawn frame, equipment, origin, and reinforcement flags. The native engine then drives movement, attacks, damage, death, and fading. One `Agent` normally represents one entity in one Mission.

`Agent.Mission`, `Agent.Team`, and `Agent.Formation` are runtime back-references. `Team` supplies the battle side and command system; `Formation` supplies arrangement, orders, and formation AI. A Formation does not own the Agent for persistence. It manages the Agent while the Agent is assigned to it. A mount is a separate Agent linked through the rider's `MountAgent` and the mount's `RiderAgent`.

### Creation, build, and ownership

1. `Mission.CreateAgent` creates the object and immediately calls `OnAgentCreated(agent)` on every `MissionBehavior`. At this point the object has its `Index`, `Mission`, native pointer, and `Character`, but equipment, Formation membership, and active-list registration are not complete.
2. `Mission.SpawnTroop` and related entry points build an `AgentBuildData` value containing the Team, Formation, `IAgentOriginBase`, initial frame, reinforcement state, and equipment choices. In Campaign missions, the origin is commonly supplied by `PartyAgentOrigin` or another `IAgentOriginBase` implementation.
3. `Mission.BuildAgent` calls `Agent.Build`. `Build` sets `HasBeenBuilt`, selects the Controller, assigns a Formation to non-mounts, and initializes Mission equipment and driven properties. Mission then equips the entity, initializes its components, adds it to `Mission.Agents` and `Mission.AllAgents`, and calls `OnAgentBuild` on each behavior.
4. Add components in `OnAgentCreated`; wait for `OnAgentBuild` or a later Mission callback before depending on equipment, Formation, or initialized visuals. Do not call `new Agent`; its constructor is internal and the native pointer plus Mission registration must come from the engine.

### Active, dead, and removed

- `Mission.Agents` is the active collection. `Agent.IsActive()` or `State == AgentState.Active` means that the entity can participate in the current simulation. Death, unconsciousness, routing, fading, or another engine removal takes it out of that collection.
- When the native callback enters `Mission.OnAgentRemoved`, Mission writes the new `State`, deactivates the Team, calls `OnEarlyAgentRemoved` and `OnAgentRemoved` on all behaviors, removes the entity from the active list, and calls `Agent.OnRemove`. `OnRemove` notifies the origin, Team, Formation, and every `AgentComponent`.
- A removed object may still be present in `Mission.AllAgents` until `OnAgentDeleted` or Mission reset/finalization. At the final step, `Agent.OnDelete` marks it deleted and Mission clears the native and Mission pointers. Reading `Mission`, `Team`, `Formation`, `Equipment`, or `AgentVisuals` after that is unsafe.
- `Die` sends a `Blow` into native combat processing, while `MakeDead` advances the death presentation. They are not the recommended notification hook for a mod. Observe death, the affector, and removal timing through `MissionBehavior.OnAgentRemoved`.

### When to use it, and when not to

**Use it when:**

- A `MissionBehavior` or `MissionLogic` needs to observe or adjust the current battlefield entity in `OnAgentCreated`, `OnAgentBuild`, `OnMissionTick`, or `OnAgentRemoved`.
- You need the current position, side, Formation, equipment, health, controller, or AI state of an entity, or you need to call a combat, movement, or equipment API during a valid Mission phase.
- You are attaching a short-lived `AgentComponent` whose initialization and removal should follow the entity.

**Do not use it when:**

- You need to replace a Campaign `Hero`, `MobileParty`, or party roster. Removal of an Agent is not permission to mutate Campaign data; let the origin, Campaign behavior, and mission result logic apply persistent consequences.
- Code runs on the campaign map, during save loading, when `Mission.Current == null`, or after Mission finalization. Persist a Campaign identity or `StringId`, not a native Agent reference.
- You want to edit Team lists or a Formation arrangement directly. Use `Agent.SetTeam`, the `Agent.Formation` property, or the public Team/Formation operations so indexes, orders, AI, and network state stay consistent.

## Dependencies

The upstream owner is [Mission](../Mission), which creates and ticks Agents. [MissionBehavior](../MissionBehavior) receives their lifecycle callbacks; the runtime relationship continues into [Team](../../mission-ext/Team), [Formation](../Formation), and [AgentComponent](../../mission-ext/AgentComponent). Campaign missions connect battlefield entities back to Campaign semantics through [CampaignAgentComponent](../../campaign-ext/CampaignAgentComponent).

### Relationship map

- **Creation path:** `Mission.CreateAgent` -> `OnAgentCreated` -> `SpawnTroop` / `SpawnMonster` -> `BuildAgent` -> `OnAgentBuild`.
- **Collection ownership:** `Mission.Agents` describes active entities; `Mission.AllAgents` can retain a removed entity until deletion. `Team.TeamAgents` is the side's member collection, while `Team.ActiveAgents` is its active subset.
- **Formation relationship:** `Agent.Team` points to the side; `Agent.Formation` points to one Formation belonging to that Team. Assigning a Formation removes the unit from the old Formation, adds it to the new one, and updates formation state.
- **Component relationship:** `Agent.AddComponent` attaches a component; `InitializeComponents` runs during build and `AgentComponent.OnAgentRemoved` runs during removal. A component must not treat its Agent as a post-Mission handle.
- **Campaign relationship:** `Origin.OnAgentRemoved(Health)` is the origin's cleanup hook. Campaign mission code commonly uses `CampaignAgentComponent` for party ownership, navigation, and location behavior.

## Risks and crash boundaries

1. **Stale references after Mission finalization.** `OnAgentRemoved` can inspect the removed Agent's final state, but a static field, asynchronous task, or next-Mission cache must not retain it. Finalization calls `OnDelete` and `Clear`, which removes the native pointer and `Agent.Mission`.
2. **Confusing `Agents` with `AllAgents`.** `Agents` contains active entities. During the removal callback the object can still be in `AllAgents`, but it is no longer an active combatant. Count living entities with `IsActive()` and handle death attribution from the `OnAgentRemoved` parameters.
3. **Calling at the wrong phase.** `OnAgentCreated` runs before equipment and component initialization, so it is too early to depend on `Equipment` or `AgentVisuals`. Those reads belong after `OnAgentBuild`. `Mission.Current` can be null on the campaign map and during Mission teardown.
4. **Double bookkeeping on death.** `Mission.OnAgentRemoved` already deactivates the Team, removes the active index, and notifies the origin and components. Unconditionally reducing a party roster again can duplicate the origin or Campaign behavior's accounting.
5. **Broken Team/Formation invariants.** `SetTeam` updates Team collections and raises `OnAgentTeamChanged`; the `Formation` setter updates the old and new arrangements plus formation orders. Editing internal collections directly can leave `Agent.Formation` pointing at a Formation that does not contain the unit.
6. **Main-thread native state.** Position, equipment, animation, AI, and visual APIs operate on native entities during Mission ticks. Do not call `SetActionChannel`, `SetMovementFlags`, `Formation`, or `AgentVisuals` from a background thread, and do not call `Die`, `MakeDead`, or `SetTeam` after `MissionEnded`.
7. **Network authority.** `Health`, `Controller`, `Formation`, and `SetTeam` have server, client, and replay-specific synchronization behavior. A Campaign mod should not forge a kill or side change from a client; perform authoritative changes in Mission logic.

## Member notes

The groups below describe the mod-visible members by purpose and timing rather than reproducing a signature wall.

### Identity and lifetime

- **`Mission` / `Index`:** `Mission` is the current runtime container and `Index` is the native Mission index. Use them only while the Agent belongs to a live Mission. To look up an entity again, use `Mission.FindAgentWithIndex` in that same Mission instead of carrying an Agent reference across Missions.
- **`HasBeenBuilt`:** `false` means the native entity exists but equipment, Controller, Formation, and component initialization are incomplete. Wait for `OnAgentBuild` before depending on those states.
- **`State`, `CurrentMortalityState`, `IsActive()`, `IsFadingOut()`, `IsRetreating()`:** distinguish active, dead, unconscious, routed, and fading phases. Check `IsActive()` in ticks, and use the `agentState` passed to removal callbacks instead of inferring every death meaning from `Health == 0`.
- **`Origin`, `Character`, `IsHero`:** `Character` is the `BasicCharacterObject` used by this Mission; `Origin` connects it to Campaign or another source. `IsHero` only describes the Character identity and does not make the Agent safe to persist outside the Mission.

### Mission, Team, Formation, and mounts

- **`Team`:** read the current battle side through this reference. Change it with `SetTeam(Team team, bool sync)`, which updates both Team collections and broadcasts `OnAgentTeamChanged`; call it only while the Agent belongs to a valid Mission.
- **`Formation`:** read or assign the current formation. Assignment invokes the old Formation's `RemoveUnit` and the new Formation's `AddUnit`, updates detachments, target formation, and firing/riding orders. Mounts usually have no Formation during build, so do not assume this is non-null.
- **`MountAgent` / `RiderAgent`:** connect a rider and mount, which are separate Agent objects. Mount removal, dismounting, and rider death can change this relationship; after removal do not continue through an old mount/rider chain to manipulate visuals or actions.
- **`Controller`:** identifies Player, AI, or another control source. Changing it can alter the main Agent, detachment state, and behavior callbacks; do so only for a valid Agent during Mission execution.

### Health, equipment, and combat

- **`Health`, `HealthLimit`, `BaseHealthLimit`:** current health and limits. Setting health raises `OnAgentHealthChanged` and may synchronize from the server; it is not a complete kill procedure and does not replace the native Blow, `Die`, or removal path.
- **`OnAgentHealthChanged`:** observe health changes after the Agent has been built. Unsubscribe from your own handler when the behavior or Agent is removed so a cross-Mission object is not retained.
- **`Equipment`, `SpawnEquipment`, `WieldedWeapon`, `WieldedOffhandWeapon`:** `SpawnEquipment` is the spawn configuration; `Equipment` is the mutable battlefield equipment initialized during build. Read or change equipment after `OnAgentBuild`.
- **`Die(Blow, KillInfo)` / `MakeDead(...)`:** the first enters native combat resolution and the second advances the death presentation. Do not call them as a generic way to remove an Agent unless the mod owns a complete combat flow and can supply a valid Blow.
- **`KillCount`, `LastBlowOwnerId`, `LastBlowAttackType`, `Damage`:** support combat statistics and attribution. Mission increments the affector's kill count when the two Teams differ; do not add another kill in a normal UI tick.

### AI, movement, and formation frame

- **`AIStateFlags`, `CommonAIComponent`, `HumanAIComponent`:** expose alert, navigation, and human-control state. Components can be attached in `OnAgentCreated`, but their initialized behavior is only safe after `InitializeComponents` has run.
- **`MovementFlags`, `MovementInputVector`, `LookDirection`, `Frame`, `Velocity`:** represent engine movement input, facing, world frame, and velocity. Read them during Mission queries; write them only on the main thread and with a compatible Controller/AI state.
- **`SetActionChannel`, `SetMaximumSpeedLimit`, `TrySetFormationFrame`:** affect animation channels, speed limits, and formation positions. They belong in behavior callbacks, mission animation code, or a controlled formation phase, not in a background synchronization task.
- **`AgentDrivenProperties`, `CharacterPowerCached`, `WalkSpeedCached`:** are driven properties and caches initialized by the Mission models and build path. Changing Campaign character data does not refresh the current Agent automatically; follow the Mission model/build path when a new entity is required.

## Real acquisition and callback examples

### Adding a component in a real MissionBehavior callback

`Mission.CreateAgent` calls every behavior's `OnAgentCreated` before `Mission.BuildAgent` runs `Agent.Build` and `InitializeComponents`. SandBox's `CampaignMissionComponent` uses exactly this timing to attach `CampaignAgentComponent` to each new Agent:

```csharp
using TaleWorlds.MountAndBlade;

public override void OnAgentCreated(Agent agent)
{
    base.OnAgentCreated(agent);
    agent.AddComponent(new CampaignAgentComponent(agent));
}
```

This callback is appropriate for installing a component and recording identity. It is too early to depend on equipped `Equipment`; move that work to `OnAgentBuild(Agent agent, Banner banner)` or a later Mission callback.

### Creating a unit through Mission.SpawnAgent

When a mod genuinely needs to add an entity to the scene, it puts the real character and Team into `AgentBuildData` and lets the current Mission perform creation and build:

```csharp
AgentBuildData buildData = new AgentBuildData(Game.Current.PlayerTroop)
    .Team(Mission.Current.PlayerTeam)
    .InitialPosition(new Vec3(120f, 80f, 0f))
    .InitialDirection(Vec2.Forward);

Agent spawnedAgent = Mission.Current.SpawnAgent(buildData);
if (spawnedAgent != null && spawnedAgent.HasBeenBuilt)
{
    spawnedAgent.SetWatchState(Agent.WatchState.Alarmed);
}
```

`SpawnAgent` continues through equipment, visuals, components, and active-list construction; use `OnAgentCreated` and `OnAgentBuild` when the distinction between existence and completed construction matters.

### Reading active Agents from Mission.Current and cleaning up on removal

`Mission.Current` exists only for the current Mission, and `Mission.Current.Agents` is a changing active collection. The following uses real APIs to acquire the current entities and only uses removal parameters during cleanup; it does not retain an old Agent:

```csharp
using TaleWorlds.MountAndBlade;

public sealed class AgentMonitor : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        Mission mission = Mission.Current;
        if (mission == null || mission.MissionEnded)
        {
            return;
        }

        foreach (Agent agent in mission.Agents)
        {
            if (agent.IsActive() && agent.Team != null && agent.Formation != null)
            {
                Vec3 position = agent.Position;
                Formation formation = agent.Formation;
                _ = position;
                _ = formation;
            }
        }
    }

    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent,
        AgentState agentState, KillingBlow killingBlow)
    {
        base.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
        if (agentState == AgentState.Killed && affectorAgent != null)
        {
            int killerIndex = affectorAgent.Index;
            _ = killerIndex;
        }
    }
}
```

`OnAgentRemoved` runs while the removed object is still in its cleanup window; it is no longer an active member of `Mission.Agents`. Once the callback has completed, do not store `affectedAgent`, `affectorAgent`, or their Formation for the next Mission. Persistent party or location consequences belong to the origin or Campaign behavior, not to an ad hoc roster edit in this monitor.

## Version note

This page follows the v1.4.5 `TaleWorlds.MountAndBlade` source. The same Mission/Agent layering exists in v1.3.x, but build models, network synchronization, and Campaign components can differ. Cross-version mods should verify the target version's `AgentBuildData`, `MissionBehavior` callback signatures, and origin implementation.

## Navigation

- ↑ [Mission module index](../)
- ↔ [Mission](../Mission) · [MissionBehavior](../MissionBehavior) · [Formation](../Formation)
- ↓ [Team](../../mission-ext/Team) · [AgentComponent](../../mission-ext/AgentComponent) · [CampaignAgentComponent](../../campaign-ext/CampaignAgentComponent)
- Related upstream: [Campaign](../../campaign/Campaign) · [MBSubModuleBase](../../core/MBSubModuleBase)
- Risk references: [Crash boundaries](../../architecture/crash-boundary) · [Doc contract](../../architecture/doc-contract)
