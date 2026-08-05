---
title: "UsableMissionObject"
description: "Mission-scene interaction base for focus, Agent use, AI movement, component callbacks, and synchronized usable state."
---
# UsableMissionObject

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class UsableMissionObject : SynchedMissionObject, IFocusable, IUsable, IVisible`  
**Base:** [`SynchedMissionObject`](../SynchedMissionObject)  
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/UsableMissionObject.cs`

## One-line responsibility

This class is the Mission-scene interaction layer: it owns the current user, AI agents moving to or defending the object, focus/use callbacks, and the synchronized interaction flags built on [`SynchedMissionObject`](../SynchedMissionObject).

## Mental model

`UsableMissionObject` is a scene component, not a campaign service and not a standalone UI control. The engine creates a derived object from a scene entity or the Mission runtime-object path. `OnInit` discovers child entities, creates `GameEntityWithWorldPosition`, and defaults `LockUserFrames` to the inverse of `IsInstantUse`. The Mission or interaction view then drives focus, use, stop-use, and AI detachment callbacks.

The object has two kinds of state. `UserAgent`, `MovingAgent`, and `DefendingAgents` describe who is currently interacting with it; `IsDeactivated` and `IsDisabledForPlayers` decide whether new interaction is allowed. `SetDisabled*` changes membership in `Mission.ActiveMissionObjects` and may change visibility or physics, but it is not the same as removing the entity. A derived type should be attached to a real scene entity and should let the host call lifecycle methods instead of constructing one with `new` or calling `OnUse` as a shortcut.

Use this base for a gate, workstation, standing point, pickup, or machine part whose interaction is represented by an Agent and may need multiplayer state. Use [`MissionBehavior`](../../mission/MissionBehavior) for Mission-wide coordination, and use Campaign Actions for campaign state. Do not use the object itself as a save-data container.

## Dependencies

The object enters the Mission through [`MissionObject`](../MissionObject): `OnPreInit` assigns its [`MissionObjectId`](../MissionObjectId) and registers it, while [`Mission`](../../mission/Mission) owns `MissionObjects` and `ActiveMissionObjects`. Interaction focus and Agent lifecycle come from the Mission interaction layer and [`Agent`](../../mission/Agent); optional behavior is delegated to [`UsableMissionObjectComponent`](../UsableMissionObjectComponent). In multiplayer, state changes flow through [`SynchedMissionObject`](../SynchedMissionObject) and its network snapshot contract.

## Interaction state and timing

- `UserAgent` is the current Agent using the object; `PreviousUserAgent` is updated when that reference changes. They are valid only while the Mission and entity are alive.
- `IsDeactivated` blocks interaction and, on the authoritative side, stops the current user, moving Agent, and defending Agents when changed to `true`. `IsDisabledForPlayers` blocks non-AI players while still allowing AI checks to pass its specific condition.
- `IsDisabledForAgent(Agent agent)` returns `true` for a deactivated object, a mounted Agent, a player-disabled object used by a non-AI Agent, or an Agent that fails `IsAbleToUseMachine()`.
- `IsInstantUse` controls whether use is treated as instant; `LockUserFrames` and `LockUserPositions` control the client-side correction target while an Agent uses the object. `OnInit` sets `LockUserFrames` to `!IsInstantUse`.
- `MovingAgent` and `DefendingAgents` are AI detachment state. The base implementation supports one moving Agent; a derived class can override `GetMovingAgentCount`, `GetMovingAgentWithIndex`, `AddMovingAgent`, and `RemoveMovingAgent` for another arrangement. Call `InitializeDefendingAgents` before reading or adding to the defending list.
- `GameEntityWithWorldPosition` is refreshed in `OnInit` and can be rebuilt with `RefreshGameEntityWithWorldPosition`. `GetUserFrameForAgent` uses it by default, so a custom child layout should override that method or refresh the wrapper after the entity changes.
- `IsVisible` changes the entity visibility excluding parent visibility. `DescriptionMessage`, `ActionMessage`, and `GetDescriptionText(WeakGameEntity)` supply interaction text; they do not themselves make the object usable.

## Use workflow

The normal path is host-driven:

1. The interaction system calls `OnFocusGain` or `OnFocusLose`; the base implementation forwards those events to every [`UsableMissionObjectComponent`](../UsableMissionObjectComponent).
2. `OnUse` runs on the authoritative side after the interaction is accepted. It resolves conflicting users, removes an AI moving to this object, stops other moving Agents when the object is not instant-use, calls component `OnUse`, assigns `UserAgent`, and broadcasts `UseObject` from the server or recorder. On a client or replay, the method applies the locked frame or position to the Agent instead of changing authority state.
3. `OnUseStopped` forwards success to components and clears `UserAgent`. `OnAIMoveToUse` and `OnMoveToStopped` maintain the detachment manager and moving-Agent state. `OnAIDefendBegin` and `OnAIDefendEnd` maintain the defending list and detachment manager.
4. `GetTickRequirement` requests normal and parallel ticking while an Agent is using or moving to the object, normal ticking while Agents defend it, or normal ticking when a component reports `IsOnTickRequired()`. `OnTick` ticks components, corrects a user's position when the entity frame changed, and cleans up inactive moving Agents.
5. `OnEndMission` clears user, moving, and defending references. `OnRemoved` first follows the [`MissionObject`](../MissionObject) removal path and then calls each component's `OnRemoved`.

The synchronization boundary is explicit. `SetIsDeactivatedSynched` and `SetIsDisabledForPlayersSynched` send the corresponding message only on server/recorder authority and then update local state. `WriteToNetwork` writes the base snapshot followed by both flags and the optional user Agent index; `OnAfterReadFromNetwork` lets the base class apply its state, then resolves the Agent index through `Mission.MissionNetworkHelper`.

## Real acquisition and inspection example

Query an object already registered by the current Mission. This is appropriate for a Mission behavior or another Mission-phase callback; it does not create a detached object.

```csharp
using TaleWorlds.MountAndBlade;

public static bool TryFindUsableForMainAgent(out UsableMissionObject result)
{
    result = null;
    Mission mission = Mission.Current;
    Agent agent = Agent.Main;
    if (mission == null || agent == null)
    {
        return false;
    }

    foreach (MissionObject missionObject in mission.ActiveMissionObjects)
    {
        if (missionObject is UsableMissionObject usable &&
            !usable.IsDisabledForAgent(agent))
        {
            result = usable;
            return true;
        }
    }

    return false;
}
```

## Real derived-object pattern

Attach the derived type to a scene entity through the usual Mission scene setup. Override the interaction hook, preserve the base bookkeeping, and use the synchronized setter when the result must reach clients.

```csharp
using TaleWorlds.Engine;
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade;

public sealed class ModGateUsableObject : UsableMissionObject
{
    public ModGateUsableObject() : base(isInstantUse: false)
    {
    }

    public override TextObject GetDescriptionText(WeakGameEntity gameEntity)
    {
        return new TextObject("{=mod_gate_use}Open the gate");
    }

    public override void OnUse(Agent userAgent, sbyte agentBoneIndex)
    {
        base.OnUse(userAgent, agentBoneIndex);
        SetIsDeactivatedSynched(true);
    }
}
```

## Risks and boundaries

- `DefendingAgents` is null until `InitializeDefendingAgents` is called; `GetDefendingAgentCount`, `AddDefendingAgent`, and `IsAgentDefending` assume that initialization has happened.
- Directly assigning `IsDeactivated` or `IsDisabledForPlayers` changes local state but does not broadcast the corresponding network message. Use the `*Synched` setter on the authority side for multiplayer state.
- A `MissionObject` can be disabled without being removed. Do not retain an Agent, `GameEntityWithWorldPosition`, or `GameEntity` reference past `OnEndMission` or `OnRemoved`.
- `SetDisabled*`, `SetEnabled*`, `SetCustomLocalFrame`, and interaction callbacks require a live Mission and native entity. Calling them from module-load code or a delayed callback after entity removal can hit invalid engine state.
- A component's `OnTick` is called for every tick that its owner requests. Return `true` from `IsOnTickRequired` only while the component has work, and remove the component before the owner is gone.
- `OnAfterReadFromNetwork` and `WriteToNetwork` are inheritance contracts. Overrides that omit `base` can lose transform, disabled, or interaction state. Client-side position locking is presentation correction, not permission to commit game rules.
- This type does not persist campaign data. Store durable consequences through the appropriate Campaign behavior and Action; keep Mission interaction state transient.

## See also and reciprocal navigation

- ↑ Parent: [Mission-ext module index](../)
- ↔ Inheritance: [MissionObject](../MissionObject) · [SynchedMissionObject](../SynchedMissionObject)
- ↔ Extension point: [UsableMissionObjectComponent](../UsableMissionObjectComponent)
- Host and Agent lifecycle: [Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior) · [Agent](../../mission/Agent)
- Related machine owner: [UsableMachine](../UsableMachine)
- Identity: [MissionObjectId](../MissionObjectId)
- 中文/English: [UsableMissionObject](../../../../zh/api/mission-ext/UsableMissionObject)
