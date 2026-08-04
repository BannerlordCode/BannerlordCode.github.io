---
title: "ICampaignMission"
description: "ICampaignMission is the active-Mission campaign context contract for locations, conversations, Agent following, and result handling."
---
# ICampaignMission

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public interface ICampaignMission`  
**Base:** none  
**Source file:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/ICampaignMission.cs`

## One-sentence responsibility

It defines how an active `Mission` connects its lifecycle to campaign-level location, conversation, Agent-following, and result handling.

## Mental Model

Treat `ICampaignMission` as the campaign adapter for the current mission, not as a service that can be created independently. The public v1.4.5 implementation is SandBox's [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent), which derives from `MissionLogic` and is installed in the behavior list passed to `MissionState.OpenNew` by `SandBoxMissions`. Its properties expose mission-scoped state; its methods route conversation, location, following, and end actions into the concrete mission behavior.

Its direction is opposite to `CampaignMission.ICampaignMissionManager`: the manager chooses which mission to open, while this interface describes how an already-open mission cooperates with the campaign. Once `Mission.Current` is gone, `State`, `Mode`, Agent, and Location no longer have a valid lifetime guarantee.

## When to use and when not to use

- From a `MissionBehavior` or an active mission callback, obtain the implementation with `Mission.Current.GetMissionBehavior<CampaignMissionComponent>()` and then use the interface contract.
- Read `Location`, `LastVisitedAlley`, and `Mode` for the current mission. Use conversation and following methods only while the supplied `IAgent` still belongs to that mission.
- Do not cache this interface in a campaign-only tick, save-load state, or after mission end; during campaign idle time `CampaignMission.Current` is expected to be `null`.
- Do not use it to open a mission. Open one through [CampaignMission](../CampaignMission); do not construct `CampaignMissionComponent` and expect it to have a `Mission` before the engine attaches it.

## Dependencies

```text
MissionState.OpenNew
  -> Mission behaviors include CampaignMissionComponent
  -> CampaignMissionComponent.OnCreated / OnBehaviorInitialize / AfterStart
  -> CampaignMission.Current
  -> conversation, location, following, result callbacks
  -> OnEndMission clears CampaignMission.Current
```

- Implementation and lifetime: [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent) · [Mission](../../mission/Mission).
- Creation entry: [CampaignMission](../CampaignMission) · [ICampaignMissionManager](../ICampaignMissionManager).
- Event downstream: the component forwards mission start, tick, and end through [CampaignEventDispatcher](../CampaignEventDispatcher).
- Related campaign context: [Campaign](../Campaign) and [CampaignBehaviorBase](../CampaignBehaviorBase).

## Public members

| Area | Members | Timing and side effects |
|---|---|---|
| State | `State`, `Mode` | Expose the active `GameState` and `Mission.Mode`; `Mode` is an explicit interface member and requires an active mission. |
| Troops and location | `AgentSupplier`, `Location`, `LastVisitedAlley` | Are filled by the concrete mission flow for Agent supply, location transitions, and alley-fight context; they are not campaign-wide save fields. |
| Mode changes | `SetMissionMode(MissionMode, bool)` | Changes the current mission mode. Call only when the surrounding flow has entered the corresponding state, or menus, conversations, and the mission state can diverge. |
| Location and menu | `OnCloseEncounterMenu`, `OnCharacterLocationChanged`, `OnProcessSentence`, `OnConversationContinue` | Route encounter-menu, character-location, and conversation-sentence work to current mission logic. |
| Agent look and following | `AgentLookingAtAgent`, `CheckIfAgentCanFollow`, `AddAgentFollowing`, `CheckIfAgentCanUnFollow`, `RemoveAgentFollowing` | Operate current-Agent navigation and conversation behavior. Do not pass an Agent that has left the mission. |
| Conversation animation | `OnConversationPlay`, `OnConversationStart`, `OnConversationEnd` | Drive action channels, facial animation, and sound cleanup; end callbacks release visual and audio state. |
| End and cleanup | `EndMission`, `FadeOutCharacter`, `OnGameStateChanged` | Request mission end, fade a matching character in the current mission, and clear conversation sound/state; each can affect the global mission lifecycle. |

## Real example

This acquisition path reads the implementation from the current `Mission` behavior collection rather than assuming a dependency-injection container:

```csharp
using SandBox.Missions.MissionLogics;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements.Locations;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

Mission mission = Mission.Current;
CampaignMissionComponent component = mission?.GetMissionBehavior<CampaignMissionComponent>();
if (component != null && CampaignMission.Current == component)
{
    ICampaignMission context = component;
    Location location = context.Location;
    MissionMode mode = context.Mode;
}
```

When responding to conversation or location flow, call the interface inside the active mission lifetime instead of fabricating an Agent during a campaign idle tick:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static void AddFollowingAgent(IAgent agent)
{
    Mission mission = Mission.Current;
    ICampaignMission context = CampaignMission.Current;
    if (mission == null || context == null || agent == null || context.Location == null)
    {
        return;
    }

    if (context.CheckIfAgentCanFollow(agent))
    {
        context.AddAgentFollowing(agent);
    }
}
```

Here `agent` must come from the current `Mission.Agents` or current conversation flow; it is not an object that can safely be retained across missions.

## Risks and save boundaries

- `CampaignMissionComponent.OnCreated` sets the global `CampaignMission.Current`, and `OnEndMission` clears it. Calls after end can reach disposed Mission, Agent, or sound objects.
- `Mode`, `Location`, and `LastVisitedAlley` describe the active mission, not campaign persistence. Save campaign facts through a separate saveable field and restore them in the correct behavior lifecycle.
- `AddAgentFollowing` and `RemoveAgentFollowing` look up `CampaignAgentComponent` and `AgentNavigator`. Do not call them before those components/navigation groups exist, or after the Agent has been removed.
- `SetMissionMode`, `EndMission`, and `OnCloseEncounterMenu` change the game-state stack. Do not call them after `OnMissionEnded` or from another thread holding a stale interface.
- `OnConversationEnd` and `OnGameStateChanged` clear action channels, sound, and main-Agent state. Bypassing them can leave audio, animation, or old context in the next mission.

## Version note

This page follows v1.4.5 `ICampaignMission.cs` and `CampaignMissionComponent.cs`. Interface members, `MissionMode` semantics, and SandBox behavior composition can change; Agent following, naval missions, and conversation animation should be rechecked against the target source rather than inferred from an older signature.

## Navigation

- ↑ Parent: [Campaign API](../)
- ↔ Siblings: [CampaignMission](../CampaignMission) · [ICampaignMissionManager](../ICampaignMissionManager) · [Campaign](../Campaign)
- Related types: [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent) · [Mission](../../mission/Mission) · [CampaignEventDispatcher](../CampaignEventDispatcher)
