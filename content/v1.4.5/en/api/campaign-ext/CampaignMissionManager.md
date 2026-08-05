---
title: "CampaignMissionManager"
description: "The SandBox adapter that implements the CampaignMission contract and forwards mission entry requests to SandBoxMissions."
---
# CampaignMissionManager

**Namespace:** `SandBox`  
**Module:** `SandBox`  
**Type:** `public class CampaignMissionManager : CampaignMission.ICampaignMissionManager`  
**Base:** [CampaignMission.ICampaignMissionManager](../../campaign/ICampaignMissionManager)  
**Source:** `Modules.SandBox/SandBox/Sandbox/CampaignMissionManager.cs`

## One-sentence responsibility

It is the game-mode adapter that turns the CampaignSystem mission contract into calls to the SandBox mission factories.

## Mental Model

`CampaignMissionManager` is an implementation detail with a campaign-owned lifetime. During `SandBoxSubModule.OnGameInitializationFinished`, SandBox assigns a new instance to `Campaign.Current.CampaignMissionManager`. The object implements the interface methods and forwards them to static `SandBoxMissions.Open*` methods; it does not hold a second mission singleton and it does not itself attach behavior objects.

The public route for normal campaign code is [CampaignMission](../../campaign/CampaignMission). That facade calls the interface stored on `Campaign.Current`, which keeps encounter code independent of the SandBox assembly. Read the concrete page when debugging the adapter boundary, comparing game modes, or documenting what SandBox actually supports. Do not construct this class from a mod behavior and do not invent a `CampaignMissionManager.Current` property.

## When to use and when not to use

- **Use it:** to understand the v1.4.5 SandBox implementation behind `CampaignMission`, or to implement a parallel game-mode adapter with the same contract.
- **Use it:** to trace how a campaign encounter reaches `SandBoxMissions` and which input object is passed through unchanged.
- **Do not use it:** as a global service. Obtain the interface from `Campaign.Current.CampaignMissionManager`; the concrete instance is installed by SandBox.
- **Do not use it:** to open a bare mission without the behavior list assembled by `SandBoxMissions`.
- **Do not assume:** that the interface is fully backed by SandBox naval functionality. The three naval methods return `null` in this source snapshot.

## Dependencies

- **Injection owner:** [Campaign](../../campaign/Campaign) stores the interface; `SandBoxSubModule` assigns this adapter after a campaign game is initialized.
- **Contract:** [ICampaignMissionManager](../../campaign/ICampaignMissionManager) defines the operations and input shapes.
- **Forwarding target:** [SandBoxMissions](../../campaign-ext/SandBoxMissions) calls `MissionState.OpenNew` and creates the mission behavior arrays.
- **Runtime component:** [CampaignMissionComponent](../CampaignMissionComponent) is inserted into those behavior arrays and supplies [ICampaignMission](../../campaign/ICampaignMission).
- **Result:** [Mission](../../mission/Mission) owns the live state; [MissionBehavior](../../mission/MissionBehavior) instances own mission-specific logic.
- **Observation:** [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) and [CampaignEvents](../../campaign/CampaignEvents) receive the callbacks produced by the running mission.

## Forwarding surface

The adapter is intentionally thin. Each explicit interface implementation keeps the public contract in CampaignSystem while selecting the SandBox factory with the same semantic inputs.

| Contract family | SandBox target | Boundary to preserve |
| --- | --- | --- |
| Battle and caravan | `SandBoxMissions.OpenBattleMission`, `OpenCaravanBattleMission` | Keep the `MissionInitializerRecord` and caravan flag produced by encounter code. |
| Siege | `OpenSiegeMissionWithDeployment`, `OpenSiegeMissionNoDeployment`, `OpenSiegeLordsHallFightMission` | Keep wall ratios, prepared engines, attacker state, and sally/relief flags together. |
| Settlement and special | `OpenTownCenterMission`, `OpenVillageMission`, `OpenIndoorMission`, `OpenPrisonBreakMission`, `OpenHideoutBattleMission` | Keep `Location`, scene, upgrade, character, prisoner, and roster inputs from the encounter. |
| Conversation and arena | `OpenConversationMission`, `OpenMeetingMission`, `OpenArenaStartMission`, `OpenArenaDuelMission` | Keep conversation data and callbacks tied to the mission lifetime. |
| Naval contract | `OpenNavalRaidMission`, `OpenNavalBattleMission`, `OpenNavalSetPieceBattleMission` | The current SandBox implementations return `null`; callers must handle unsupported results. |

The adapter does not add validation around every input. The encounter or quest that owns the transition remains responsible for selecting a compatible scene, location, roster, and mission phase.

## Real example: inspect the installed SandBox route

Use the campaign property as the real acquisition path. The value is typed as the CampaignSystem contract, which is the intended boundary even though SandBox installed the concrete implementation.

```csharp
using TaleWorlds.CampaignSystem;

public static bool IsSandBoxMissionRoutingReady()
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

Do not downcast the interface merely to call a method that already exists on the contract. The concrete page is a source-reading aid, not a reason to couple a behavior to SandBox internals.

## Real example: preserve the location boundary

This is the same shape used by settlement encounter code: the caller owns the real `Location` and scene selection, then uses the CampaignSystem facade rather than constructing this adapter.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Settlements.Locations;

public static void OpenSettlementInterior()
{
    Settlement settlement = Settlement.CurrentSettlement;
    if (Campaign.Current == null || settlement == null || settlement.LocationComplex == null)
    {
        return;
    }

    Location location = settlement.LocationComplex.GetLocationWithId("center");
    if (location == null)
    {
        return;
    }

    CampaignMission.OpenIndoorMission(location.GetSceneName(1), 1, location, null);
}
```

The implementation eventually reaches `SandBoxMissions.OpenIndoorMission`, where the component and other mission behaviors are attached. A direct `new CampaignMissionManager()` would not improve this flow and would make ownership incorrect.

## Risks and boundaries

- **Initialization order:** the adapter is assigned during game initialization. A null `Campaign.Current` or manager means the campaign boundary is not ready; do not silently cache a previous instance.
- **Thin forwarding is not validation:** invalid scene/location combinations can fail later during mission setup. Keep the encounter's selection logic and the factory call in the same lifecycle path.
- **Behavior lifetime:** `SandBoxMissions` supplies `CampaignMissionComponent` and other behaviors. Calling a factory replacement that omits them can break campaign callbacks, agent setup, or conversation handling.
- **Unsupported naval methods:** all three naval methods return `null` in this adapter. Check the result before treating it as a mission and do not report naval support based on the interface alone.
- **State transition:** opening a mission changes the active game state. UI, `Agent`, and location references from the previous state cannot be assumed valid afterward.
- **Save boundary:** this manager is runtime routing infrastructure, not save data. Persistent state should live in a campaign behavior with a stable `SyncData` contract.

## Navigation

- ↑ Parent: [Campaign extension API](../) · [CampaignMission contract](../../campaign/CampaignMission)
- ↔ Siblings: [CampaignMissionComponent](../CampaignMissionComponent) · [MissionLogic](../../mission-ext/MissionLogic) · [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher)
- ↑ Contract: [ICampaignMissionManager](../../campaign/ICampaignMissionManager) · [ICampaignMission](../../campaign/ICampaignMission)
- Related: [SandBoxMissions](../SandBoxMissions) · [Mission](../../mission/Mission) · [Campaign](../../campaign/Campaign) · [Crash boundaries](../../../architecture/crash-boundary)
