---
title: "ICampaignMissionManager"
description: "The CampaignMission routing contract that connects campaign encounters to a game-mode mission implementation."
---
# ICampaignMissionManager

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public interface ICampaignMissionManager`  
**Declaring type:** `CampaignMission`  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignMission.cs`

## One-sentence responsibility

It defines the complete set of campaign mission-entry operations that a game mode must route to its own mission factory.

## Mental Model

This interface is the seam between campaign rules and the game-mode implementation. `Campaign` stores one manager reference, `SandBoxSubModule` assigns a `SandBox.CampaignMissionManager` during campaign initialization, and that adapter forwards each operation to `SandBoxMissions`. The contract describes entry points; it does not own a current mission and it does not decide which caller is allowed to request a mission.

Mods normally reach this contract through `CampaignMission.Open*`, because the static facade keeps campaign code independent of the concrete SandBox class. Direct read-only access through `Campaign.Current.CampaignMissionManager` is useful when inspecting the active installation or writing a game-mode adapter. Constructing the manager yourself would bypass the campaign initialization path.

The interface is declared inside `CampaignMission` in the v1.4.5 source. Use the fully qualified `CampaignMission.ICampaignMissionManager` spelling when writing code against that declaration, even though the documentation route is the standalone type page.

## When to use and when not to use

- **Use it:** as the contract for a game-mode implementation or for read-only inspection of the manager installed on the active campaign.
- **Use it:** to reason about which mission-entry overload a campaign encounter needs: initializer record, settlement location, conversation data, roster, or siege state.
- **Do not use it:** to construct a manager from a behavior or SubModule. The campaign and game-mode initialization code owns registration.
- **Do not use it:** as a replacement for `CampaignMission.Current`; the manager opens missions while the interface represents the live adapter after opening.
- **Do not assume:** that every method returns a working mission in every game mode. The SandBox implementation returns `null` for its three naval methods in this source snapshot.

## Dependencies

- **Campaign owner:** [Campaign](../Campaign) exposes `CampaignMissionManager` and receives the instance during game initialization.
- **Public facade:** [CampaignMission](../CampaignMission) forwards static calls to this contract.
- **SandBox adapter:** [CampaignMissionManager](../../campaign-ext/CampaignMissionManager) implements the interface and delegates to [SandBoxMissions](../../campaign-ext/SandBoxMissions).
- **Runtime result:** the selected implementation creates [Mission](../../mission/Mission) with a behavior set that includes [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent).
- **Lifecycle observations:** [ICampaignMission](../ICampaignMission), [CampaignEventDispatcher](../CampaignEventDispatcher), and [CampaignEvents](../CampaignEvents) describe the state after an entry point has opened a mission.
- **Safety:** [Mission](../../mission/Mission) and the [crash-boundary guide](../../../architecture/crash-boundary) define the lifetime and thread assumptions around these calls.

## Entry groups and caller inputs

| Group | Contract members | Required context |
| --- | --- | --- |
| Battle and siege | `OpenBattleMission`, `OpenCaravanBattleMission`, `OpenNavalBattleMission`, `OpenNavalRaidMission`, `OpenNavalSetPieceBattleMission`, `OpenSiegeMissionWithDeployment`, `OpenSiegeMissionNoDeployment`, `OpenSiegeLordsHallFightMission` | A real `MissionInitializerRecord`, map event/roster state, scene data, or prepared siege engines |
| Settlement and location | `OpenTownCenterMission`, `OpenCastleCourtyardMission`, `OpenVillageMission`, `OpenIndoorMission` | A `Location`, compatible scene name, upgrade level, and optional talk-to character |
| Conversation and arena | `OpenConversationMission`, `OpenMeetingMission`, `OpenArenaStartMission`, `OpenArenaDuelMission`, `OpenCombatMissionWithDialogue` | Conversation data, characters, location, scene levels, and duel callback state |
| Special campaign flows | `OpenPrisonBreakMission`, `OpenHideoutBattleMission`, `OpenHideoutAmbushMission`, `OpenAlleyFightMission`, `OpenBattleMissionWhileEnteringSettlement`, `OpenRetirementMission`, `OpenDisguiseMission` | Prisoner/roster/location inputs and the encounter-specific phase that selected them |

These methods are not interchangeable convenience overloads. A `MissionInitializerRecord` represents decisions already made by encounter code, while a location overload expects the caller to pass a compatible `Location` and scene. The contract does not manufacture missing campaign objects.

## Real example: inspect the installed routing contract

The property on `Campaign` is the real acquisition path. This example does not instantiate or cast the manager; it only confirms that the active campaign has completed the game-mode injection step.

```csharp
using TaleWorlds.CampaignSystem;

public static bool HasCampaignMissionRouter()
{
    Campaign campaign = Campaign.Current;
    if (campaign == null)
    {
        return false;
    }

    CampaignMission.ICampaignMissionManager manager = campaign.CampaignMissionManager;
    return manager != null;
}
```

To open a supported flow, prefer the matching `CampaignMission.Open*` facade. The encounter code should supply real scene, location, roster, and conversation values rather than placeholders.

## Real example: use the facade at a real encounter boundary

`TownEncounter` resolves the next location and calls a facade overload. A mod extending a comparable encounter should follow the same shape and let the installed manager create the mission.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements.Locations;

public static void OpenTownLocation(Location location, string scene, int wallLevel)
{
    if (Campaign.Current == null || location == null || string.IsNullOrEmpty(scene))
    {
        return;
    }

    CampaignMission.OpenIndoorMission(scene, wallLevel, location, null);
}
```

The guard prevents a call outside campaign initialization, but it does not make an arbitrary location valid. The encounter must have selected a location whose scene and upgrade level match the intended mission.

## Risks and boundaries

- **Unregistered manager:** `Campaign.Current.CampaignMissionManager` is assigned during `SandBoxSubModule.OnGameInitializationFinished`. A null value means the campaign/game-mode initialization boundary has not completed or is being torn down.
- **Wrong overload:** passing an initializer record to a location-based mental model, or vice versa, can omit encounter state and produce an incorrectly configured mission.
- **Concrete coupling:** `CampaignMissionManager` is an adapter, not a global service with a `Current` property. Do not search for or invent `CampaignMissionManager.Current`.
- **Naval nulls:** the SandBox adapter returns `null` for `OpenNavalRaidMission`, `OpenNavalBattleMission`, and `OpenNavalSetPieceBattleMission` in this source. Callers must handle that result and not dereference it as a live mission.
- **Mission lifetime:** manager calls can create a new mission and replace the active game state. Do not hold UI, `Agent`, `Location`, or mission behavior references across that transition without a lifecycle callback.
- **Persistence:** this interface routes runtime mission creation. Saveable campaign state belongs to campaign behaviors and save contracts, not to the manager or a mission object.

## Navigation

- ↑ Parent: [Campaign API](../) · [Campaign](../Campaign)
- ↔ Siblings: [CampaignMission](../CampaignMission) · [ICampaignMission](../ICampaignMission) · [CampaignEventDispatcher](../CampaignEventDispatcher)
- ↓ Implementation: [CampaignMissionManager](../../campaign-ext/CampaignMissionManager) · [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent)
- Related: [Mission](../../mission/Mission) · [CampaignEvents](../CampaignEvents) · [Crash boundaries](../../../architecture/crash-boundary)
