---
title: "AgentNavigator"
description: "Sandbox campaign-agent navigator for mission targets, behavior groups, and agent-mounted visual state."
---
# AgentNavigator

**Namespace:** `SandBox`
<br>**Module:** `SandBox`
<br>**Type:** `public sealed class AgentNavigator`
<br>**Base:** none
<br>**File:** `Modules.SandBox/SandBox/Sandbox/AgentNavigator.cs`

## One-line responsibility

`AgentNavigator` coordinates one campaign `Agent`'s Sandbox navigation state: it owns target transitions, chooses and ticks [`AgentBehaviorGroup`](../../campaign-ext/AgentBehaviorGroup) instances, and manages the agent's temporary scene prefabs and special item.

## Mental model

This is a mission-local controller attached to one live `Agent`; it is not a global pathfinding service, a Campaign entity, or a save object. [`CampaignMissionComponent`](../../campaign-ext/CampaignMissionComponent) adds [`CampaignAgentComponent`](../../campaign-ext/CampaignAgentComponent) to campaign agents. Sandbox mission code then creates the navigator through `CampaignAgentComponent.CreateAgentNavigator()` or its `LocationCharacter` overload, after the agent has a valid [`Mission`](../../mission/Mission). The component owns the navigator reference, while the navigator owns the agent-specific target and behavior-group list.

The navigator has two cooperating paths. `SetTargetFrame` drives scripted movement toward a `WorldPosition`; `SetTarget` attaches the agent to a [`UsableMachine`](../../mission-ext/UsableMachine) and runs that machine's AI behavior. Independently, behavior groups compete for activation and tick their active behavior. `CampaignAgentComponent.OnTick` only calls `Tick` when the agent is AI-controlled and the Mission allows AI ticking. Conversation agents use the conversation tick path instead of the ordinary group tick.

Its nested `NavigationState` is a small runtime state machine:

- `NoTarget`: no active scripted target.
- `GoToTarget`: the agent is moving toward `TargetPosition`.
- `AtTargetPosition`: the target frame was reached and was not retained.
- `UseMachine`: the agent is attached to a usable machine.

The object disappears with its `Agent` and Mission. None of its targets, behavior groups, prefab visibility, or special-item state is Campaign save data.

## When to use and when not to use

**Use it when:**

- An active Sandbox mission agent needs a scripted target, a usable-machine target, or a Campaign behavior group.
- A mission behavior needs to inspect the agent's active navigation behavior or temporarily change a location character's visual prefabs.
- You need to coordinate with the behavior-group scheduler already used by Sandbox, such as `DailyBehaviorGroup`, `AlarmedBehaviorGroup`, or a scripted `FollowAgentBehavior`.

**Do not use it when:**

- You need a Campaign party route, map path, or durable world-state change. Use the relevant Campaign model or Action instead.
- You only need mission-wide lifecycle or tick callbacks. Derive [`MissionBehavior`](../../mission/MissionBehavior).
- The agent is not a live Campaign/Sandbox agent with a `CampaignAgentComponent`. Generic battle agents may not have this component or an `AgentNavigator`.
- You want to create an agent. The Mission spawn path creates the `Agent`; obtain the component and navigator after that path has initialized them.
- You need a multiplayer replication contract. The navigator mutates live mission state; use the synchronized mission-object or network owner for replicated state.

## Dependency graph

**Upstream:**

- [`CampaignMissionComponent`](../../campaign-ext/CampaignMissionComponent) attaches `CampaignAgentComponent` in its `OnAgentCreated` path.
- [`MissionAgentHandler`](../../campaign-ext/MissionAgentHandler) creates a navigator for location characters after spawning and configuring the agent.
- [`Agent`](../../mission/Agent) supplies the live entity, Mission, equipment, movement, and native scene handles.
- [`LocationCharacter`](../../campaign/LocationCharacter) can supply special target tags, bone-prefab names, a special item, and an [`Alley`](../../campaign/Alley) to the location-character constructor.

**Downstream:**

- [`AgentBehaviorGroup`](../../campaign-ext/AgentBehaviorGroup) owns competing behaviors; `RefreshBehaviorGroups` selects the highest positive score.
- [`FollowAgentBehavior`](../../campaign-ext/FollowAgentBehavior) and [`ScriptBehavior`](../../campaign-ext/ScriptBehavior) use the navigator's behavior-group and target contracts.
- [`UsableMachine`](../../mission-ext/UsableMachine) receives or removes the owner agent when `SetTarget` enters or leaves `UseMachine`.
- [`MissionConversationLogic`](../../campaign-ext/MissionConversationLogic) determines whether `Tick` uses conversation ticks.
- The native `Scene`, `GameEntity`, `WorldPosition`, synced prefab components, and agent equipment are mutated by the corresponding runtime methods.

## Real acquisition and call path

The real Sandbox ownership path is component-first. `CampaignMissionComponent` installs the component when an agent is created; mission logic then obtains the navigator from that component. A mission behavior should use the existing navigator and only create one if the owning Sandbox path intentionally has not done so:

```csharp
using SandBox;
using SandBox.Missions.AgentBehaviors;
using TaleWorlds.MountAndBlade;

public override void OnAgentCreated(Agent agent)
{
    base.OnAgentCreated(agent);

    CampaignAgentComponent component =
        agent.GetComponent<CampaignAgentComponent>();
    AgentNavigator navigator = component?.AgentNavigator;
    if (navigator == null)
    {
        return;
    }

    DailyBehaviorGroup daily =
        navigator.GetBehaviorGroup<DailyBehaviorGroup>();
    if (daily != null)
    {
        FollowAgentBehavior follow =
            daily.GetBehavior<FollowAgentBehavior>()
            ?? daily.AddBehavior<FollowAgentBehavior>();
        daily.SetScriptedBehavior<FollowAgentBehavior>();
        follow.SetTargetAgent(Agent.Main);
    }
}
```

This mirrors the game's `MissionAgentHandler` and Campaign mission behavior call sites. The callback must run while both agents are valid; a follow behavior retains a runtime `Agent` target and must be cleared when that agent is removed.

## Public state and identity

- `OwnerAgent` is the readonly agent this navigator controls. It is valid only for that agent's current Mission.
- `TargetUsableMachine` is the current machine target, or `null` when the state is not `UseMachine`.
- `TargetPosition`, `TargetDirection`, and `TargetEntity` describe the current scripted target. They are runtime values and may be invalid or `null` after clearing.
- `MemberOfAlley` records the location-character alley context. `SetCommonArea` also updates `SpecialTargetTag` to the alley tag or an empty string.
- `SpecialTargetTag` is mutable. Changing it calls `OnSpecialTargetChanged()` on the current active behavior, so it is more than passive metadata.
- `_agentState` exposes the nested [`NavigationState`](../../campaign-ext/NavigationState) value. Treat it as an observation of the navigator's state machine, not a field to rewrite.
- `CharacterHasVisiblePrefabs` reports whether the location-character prefab map is non-empty and currently marked visible.

The two public constructors are host-construction paths. `AgentNavigator(Agent)` creates an empty location context; `AgentNavigator(Agent, LocationCharacter)` copies location-character visual, special-item, alley, and target-tag data, then makes configured items visible and equips the special item. Mods should normally reach them through `CampaignAgentComponent.CreateAgentNavigator()` or `CreateAgentNavigator(LocationCharacter)`, not `new`.

## Target and lifecycle methods

### `SetTarget(UsableMachine usableMachine, bool isInitialTarget = false, AIScriptedFrameFlags customFlags = 0)`

Replaces a machine target. Passing `null` removes the agent from the old machine's detachment, disables scripted movement, clears the target frame and entity, and returns to `NoTarget`. Passing a machine first removes the old target, checks `IsStandingPointAvailableForAgent`, creates the machine AI behavior, attaches the owner, and enters `UseMachine`. `isInitialTarget` permits reinitializing the same machine; `customFlags` is forwarded to the detachment.

Call it only while the machine, its standing point, the owner agent, and the Mission scene are alive. This method changes machine occupancy and agent movement; it is not a read-only target assignment.

### `SetTargetFrame(WorldPosition position, float rotation, float rangeThreshold = 1f, float rotationThreshold = -10f, AIScriptedFrameFlags flags = 0, bool disableClearTargetWhenTargetIsReached = false)`

Clears a non-`NoTarget` state, stores the target position/direction and thresholds, and either immediately marks an already-reached target as `NoTarget` or calls `Agent.SetScriptedPositionAndDirection` and enters `GoToTarget`. `Tick` later changes the state to `AtTargetPosition`; unless the final flag is true, it also clears the native target frame.

The position must belong to the current Mission scene. The rotation threshold is compared with the dot product of the target direction and agent movement direction, so it is not an angle in degrees despite the name.

### `ClearTarget()`

Convenience wrapper for `SetTarget(null, isInitialTarget: false, customFlags: 0)`. It releases a usable-machine detachment and clears scripted movement. Use it before a target agent or machine is removed; do not call it as a substitute for Mission teardown after native objects have already been released.

### `Tick(float dt, bool isSimulation = false)`

Runs behavior-group selection and ticking, handles conversation-agent ticking, ticks the usable-machine AI behavior or movement target, and in simulation mode teleports machine users through the machine behavior. It is normally driven by `CampaignAgentComponent.OnTick`, not by a UI or Campaign behavior that invents its own frame loop.

### `OnStopUsingGameObject()` and `OnAgentRemoved(Agent agent)`

`OnStopUsingGameObject` clears the machine behavior, machine target, and navigation state. `OnAgentRemoved` forwards the removed-agent notification to every behavior group so behaviors can release target references. These are lifecycle callbacks; do not call them just to force a state change while the Mission still owns the object.

### `GetDistanceToTarget(UsableMachine target)` and `IsTargetReached()`

`GetDistanceToTarget` returns the distance from the owner to the currently used machine's user frame when both the argument and current used object are non-null; otherwise it returns the sentinel `100000f`. `IsTargetReached` checks valid target position/direction, squared distance against `_rangeThreshold`, and the movement-direction dot product against `_rotationScoreThreshold`.

## Behavior-group methods

Behavior groups are the navigator's extensibility boundary. They are Mission-local objects constructed with this navigator and the current Mission; they are not Campaign behaviors or save definitions.

- `AddBehaviorGroup<T>()` returns an existing group of type `T`, or constructs and stores one using the expected `(AgentNavigator, Mission)` constructor.
- `GetBehaviorGroup<T>()` returns the first group assignable to `T`, or `null`.
- `GetBehavior<T>()` searches all groups and returns a behavior whose runtime type is exactly `T`, or `null`; it does not promise a derived-type match.
- `HasBehaviorGroup<T>()` reports whether a matching behavior group is present.
- `RemoveBehaviorGroup<T>()` removes every stored group matching `T`; it does not preserve the removed group's active state.
- `RefreshBehaviorGroups(bool isSimulation)` scores all groups, deactivates the current set when a positive winner exists, and activates the highest-scoring group. `Tick` performs this immediately in simulation or when its timer exceeds one second.
- `GetActiveBehavior()` returns the active behavior from the first active group, or `null`.
- `GetActiveBehaviorGroup()` returns the first active group, or `null`.
- `ForceThink(float inSeconds)` asks every group to reconsider after the supplied interval.

For a scripted behavior, configure the group and call its own `SetScriptedBehavior<T>()` contract, as in the acquisition example. Removing a group while another callback is enumerating groups can invalidate assumptions in custom code; make changes at a controlled Mission callback.

## Visibility, equipment, and perception methods

- `SetPrefabVisibility(sbyte realBoneIndex, string prefabName, bool isVisible)` creates or reuses a synced prefab component on a bone and toggles its visibility. It mutates the agent's native visual state.
- `GetPrefabVisibility(sbyte realBoneIndex, string prefabName)` reports whether the tracked synced component exists and is visible.
- `SetItemsVisibility(bool isVisible)` applies the location-character bone/prefab map and updates `CharacterHasVisiblePrefabs`.
- `HoldAndHideRecentlyUsedMeshes()` hides every currently visible tracked synced prefab and records it for restoration.
- `RecoverRecentlyUsedMeshes()` makes only the recorded prefabs visible again and clears the recovery list.
- `SetSpecialItem()` equips and wields the location-character special item when one exists. It reuses an existing matching slot or empty slot and may drop the item in equipment slot 3 when no slot is available.
- `IsCarryingSomething()` returns true when the owner wields a primary/offhand item or any tracked synced prefab is visible.
- `CanSeeAgent(Agent otherAgent)` returns true only when the other agent is within 30 meters, inside the owner's forward view test, and not occluded by the Mission scene ray cast.
- `SetCommonArea(Alley alley)` updates the alley and synchronizes `SpecialTargetTag` with its tag.

These methods should run on the Mission's owning thread after agent visuals and scene handles are initialized. Visibility is not a Campaign inventory change, while `SetSpecialItem` really does alter live equipment and animation state.

## Risks and crash boundaries

- `AgentNavigator` assumes a live `Agent` and Mission. `CanSeeAgent` does not null-check `otherAgent` before reading its position, and it accesses `Mission.Current.Scene`; delayed callbacks after removal can therefore fail in managed or native code.
- `CampaignAgentComponent.OnTick` gates navigation on `AllowAiTicking` and `IsAIControlled`. Calling `Tick` manually during a paused or ending Mission can double-drive behavior or use released scene state.
- `SetTarget` changes a machine's detachment membership. Reusing a removed machine or leaving the target attached while its owner agent dies can corrupt occupancy state or produce a native failure.
- `FollowAgentBehavior` and other behaviors can retain runtime agent references. Clear or remove them in `OnAgentRemoved`/Mission teardown; an `Agent` reference is not a durable `Hero` or `CharacterObject` reference.
- `SetPrefabVisibility`, `HoldAndHideRecentlyUsedMeshes`, and `RecoverRecentlyUsedMeshes` operate on native synced components. Do not call them after the agent visuals are released, and do not treat them as save data or network synchronization by themselves.
- `SetSpecialItem` can drop and equip a weapon. Calling it repeatedly during combat or with an uninitialized `LocationCharacter.SpecialItem` changes equipment and animation state; it is not a harmless refresh.
- `AddBehaviorGroup<T>` relies on the group's expected constructor. A custom group that cannot be constructed with the navigator and Mission will return `null`; always check the result before adding behaviors.
- The navigator has no `SyncData` contract. Persist Campaign state in a Campaign behavior and use Actions/models as appropriate; recreate mission navigation after the next Mission starts.

## See also and reciprocal navigation

- ↑ Parent: [Gameplay module index](../)
- ↔ Host component: [CampaignAgentComponent](../../campaign-ext/CampaignAgentComponent) · [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent)
- Agent and Mission: [Agent](../../mission/Agent) · [Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior)
- Behavior contracts: [AgentBehaviorGroup](../../campaign-ext/AgentBehaviorGroup) · [FollowAgentBehavior](../../campaign-ext/FollowAgentBehavior) · [ScriptBehavior](../../campaign-ext/ScriptBehavior)
- Target and conversation: [UsableMachine](../../mission-ext/UsableMachine) · [MissionConversationLogic](../../campaign-ext/MissionConversationLogic) · [NavigationState](../../campaign-ext/NavigationState)
- Documentation contract: [Doc Contract](../../../architecture/doc-contract)
- 中文/English: [AgentNavigator](../../../../zh/api/gameplay/AgentNavigator)
