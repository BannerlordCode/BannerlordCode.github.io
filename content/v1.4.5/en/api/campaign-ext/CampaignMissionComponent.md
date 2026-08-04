---
title: "CampaignMissionComponent"
description: "The SandBox MissionLogic that exposes a live Mission to CampaignSystem code and closes the CampaignMission.Current lifetime."
---
# CampaignMissionComponent

**Namespace:** `SandBox.Missions.MissionLogics`  
**Module:** `SandBox.Missions.MissionLogics`  
**Type:** `public class CampaignMissionComponent : MissionLogic, ICampaignMission`  
**Base:** [MissionLogic](../../mission-ext/MissionLogic)  
**Source:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/CampaignMissionComponent.cs`

## One-sentence responsibility

It bridges a live engine `Mission` to the CampaignSystem mission contract, forwards mission lifecycle events, and owns the transient `CampaignMission.Current` reference.

## Mental Model

This is a mission behavior, not a campaign behavior. Each relevant `SandBoxMissions.Open*` factory adds a new `CampaignMissionComponent` to the behavior array passed to `MissionState.OpenNew`. The engine then drives the component through `EarlyStart`, `OnCreated`, `OnBehaviorInitialize`, `AfterStart`, mission ticks, and `OnEndMission`.

`OnCreated` assigns this component to `CampaignMission.Current`, making its `Location`, `LastVisitedAlley`, `AgentSupplier`, `State`, and conversation/agent hooks visible through `ICampaignMission`. `OnBehaviorInitialize` and `AfterStart` notify campaign receivers that the mission has started. `OnMissionTick` forwards mission ticks while a campaign exists. `OnEndMission` sends the end notification, releases sound and mission work, and clears `CampaignMission.Current`.

The component is therefore the lifetime boundary for mission-scoped campaign code. Use it through `Mission.Current.GetMissionBehavior<CampaignMissionComponent>()` or the `ICampaignMission` facade. Do not instantiate it in a SubModule, attach it to an unrelated mission, or save a reference to it.

## When to use and when not to use

- **Use it:** to understand or inspect the SandBox behavior that implements [ICampaignMission](../../campaign/ICampaignMission).
- **Use it:** from a live mission behavior when you need mission-scoped location, mode, agent supplier, or lifecycle context.
- **Do not use it:** as a public mission factory. Open missions through [CampaignMission](../../campaign/CampaignMission).
- **Do not use it:** as a campaign-wide behavior. Campaign-wide state and save data belong in [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase).
- **Do not use it:** after `OnEndMission`, when `CampaignMission.Current` has been cleared and engine agents/state may already be disposed.

## Dependencies

- **Engine owner:** [Mission](../../mission/Mission) owns the behavior instance and calls the `MissionLogic` lifecycle.
- **Campaign contract:** [ICampaignMission](../../campaign/ICampaignMission) is the mod-facing abstraction; [CampaignMission](../../campaign/CampaignMission) exposes its static `Current` reference.
- **Factory:** [SandBoxMissions](../SandBoxMissions) adds this component while constructing battle, settlement, conversation, hideout, siege, and other missions.
- **Routing:** [CampaignMissionManager](../CampaignMissionManager) reaches those factories from [ICampaignMissionManager](../../campaign/ICampaignMissionManager).
- **Callbacks:** [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) receives mission-start, mission-end, and tick notifications; [CampaignEvents](../../campaign/CampaignEvents) is the mod-facing event surface.
- **Mission collaborators:** `Agent`, `Location`, `CampaignAgentComponent`, `MissionAgentHandler`, and the other mission behaviors must share the same live mission.

## Lifecycle and public state

| Member or phase | Meaning | Safe timing |
| --- | --- | --- |
| `State` | The `MissionState` captured during `EarlyStart`. | Read after the mission has entered its game state. |
| `AgentSupplier` | Supplier used by campaign mission logic to provide troops/agents. | Read while the mission's agent setup is active. |
| `Location` | Current campaign location; mission logic can update it during location transitions. | Read only while `CampaignMission.Current` is non-null. |
| `LastVisitedAlley` | Alley context used by alley mission behavior. | Read/update only in an alley-aware mission. |
| `Mode` and `SetMissionMode(...)` | The engine mission mode and its transition operation. | Use only from a valid mission transition callback. |
| `OnCreated` | Publishes this component as `CampaignMission.Current`. | Engine-owned creation phase; mods should not call it. |
| `OnBehaviorInitialize` / `AfterStart` | Dispatch mission-start and after-start notifications. | Engine-owned startup phases. |
| `OnMissionTick` | Forwards a campaign mission tick to the dispatcher. | Each active mission tick; do not assume campaign exists during teardown. |
| `OnEndMission` | Dispatches mission end, releases runtime resources, and clears `CampaignMission.Current`. | Engine-owned shutdown phase. |

The class also owns conversation animation/sound bookkeeping, agent-following operations, location callbacks, and battle-result handoff. Those members are meaningful because this object is attached to the same `Mission` that owns the agents and scene; copying the calls to a detached object loses that ownership.

## Real example: acquire the component from the live Mission

This uses the real engine behavior lookup and verifies the static adapter points at the same component before reading location state.

```csharp
using SandBox.Missions.MissionLogics;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements.Locations;
using TaleWorlds.MountAndBlade;

public static Location GetLiveLocation()
{
    Mission mission = Mission.Current;
    if (mission == null)
    {
        return null;
    }

    CampaignMissionComponent component = mission.GetMissionBehavior<CampaignMissionComponent>();
    if (component == null || CampaignMission.Current != component)
    {
        return null;
    }

    return component.Location;
}
```

The equality check matters when a mission is transitioning: a stale component reference must not be treated as the current campaign adapter.

## Real example: use a campaign callback instead of constructing the component

Campaign behaviors should observe the public event surface and read the active component only inside a real mission lifetime. They should not call `OnCreated` or `OnEndMission` themselves.

```csharp
using SandBox.Missions.MissionLogics;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.CampaignSystem.Settlements.Locations;
using TaleWorlds.MountAndBlade;
using TaleWorlds.SaveSystem;

public sealed class MissionLocationObserver : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnMissionStartedEvent.AddNonSerializedListener(this, OnMissionStarted);
    }

    private void OnMissionStarted(IMission mission)
    {
        Mission current = Mission.Current;
        CampaignMissionComponent component = current?.GetMissionBehavior<CampaignMissionComponent>();
        if (component != null && CampaignMission.Current == component)
        {
            Location location = component.Location;
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

The event name and callback signature follow the v1.4.5 receiver surface. The observer owns no mission reference after the callback; if it needs persistence, it stores its own stable data through `SyncData`.

## Risks and boundaries

- **Static lifetime:** `CampaignMission.Current` is assigned on creation and cleared on mission end. A cached component can outlive the engine objects it references.
- **Behavior ordering:** other mission behaviors depend on startup and end ordering. Adding a second component or manually invoking lifecycle methods can duplicate event dispatch and cleanup.
- **Post-end agents:** conversation, sound, location, and agent-following calls can touch disposed engine objects after `OnEndMission`. Stop work when the mission ends.
- **Mission result timing:** `OnMissionResultReady` updates campaign encounter state only for the relevant campaign battle conditions. A mod must not infer that every mission result is a campaign battle.
- **No saveable mission state:** the component's state is tied to the current `Mission`. Persisting it or a direct `Agent`/`Location` reference in a campaign save can create stale references after load.
- **Thread/lifecycle boundary:** mission callbacks are engine-driven. Do not drive them from an arbitrary background task or from a campaign tick that is not inside the mission state.

## Navigation

- ↑ Parent: [Campaign extension API](../) · [MissionLogic](../../mission-ext/MissionLogic)
- ↔ Siblings: [CampaignMissionManager](../CampaignMissionManager) · [SandBoxMissions](../SandBoxMissions)
- ↑ Contract: [ICampaignMission](../../campaign/ICampaignMission) · [CampaignMission](../../campaign/CampaignMission)
- Related: [Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior) · [CampaignEvents](../../campaign/CampaignEvents) · [Crash boundaries](../../../architecture/crash-boundary)
