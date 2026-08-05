---
title: "CampaignMission"
description: "CampaignMission is the static facade from campaign code into SandBox mission creation and the holder of the active campaign-mission context."
---
# CampaignMission

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class CampaignMission`  
**Base:** none  
**Source file:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignMission.cs`

## One-sentence responsibility

It forwards campaign-facing mission-opening calls to `Campaign.Current.CampaignMissionManager` and exposes the active `ICampaignMission` context through `Current` while a mission is running.

## Mental Model

**A static facade, not a mission instance.** `CampaignMission` does not own a battle's Agents, Location, or conversation state, and it does not attach behaviors to a `Mission`. Each mission-opening method passes its arguments to the current campaign's `CampaignMissionManager`. In the standard single-player campaign, SandBox injects `SandBox.CampaignMissionManager` during `OnGameInitializationFinished`, and that adapter forwards to `SandBoxMissions`.

`CampaignMission.Current` is a separate lifetime chain. `SandBoxMissions` includes `CampaignMissionComponent` in the behavior list for a new mission; the component assigns itself in `OnCreated` and clears the static value in `OnEndMission` after dispatching the end event. It is therefore meaningful only during an active `Mission`. Assigning a fake implementation to `Current` skips the component, events, and cleanup ordering and is not a valid way to simulate a mission.

## When to use and when not to use

- Use the matching mission-opening method on `CampaignMission` when an existing campaign flow must enter a town, village, hideout, siege, conversation, or other mission. The caller must supply real scene, `Location`, character, and troop data.
- Read `CampaignMission.Current` from a mission behavior when you need mission mode, location, following, or conversation hooks; accept that it can be `null`.
- Do not call the entries before campaign initialization, before `OnGameInitializationFinished`, or after mission teardown. The static forwarding code directly accesses `Campaign.Current.CampaignMissionManager`, so the wrong phase can produce a null reference or an uninjected implementation.
- Do not use this facade to mutate campaign objects, battle results, or save fields. Use the relevant `*Action.Apply` or [Model](../GameModels) contract; mission results are committed through [Mission](../../mission/Mission), `PlayerEncounter`, and the campaign battle logic.

## Dependencies

```text
Campaign.Current
  -> CampaignMissionManager (ICampaignMissionManager)
  -> SandBox.CampaignMissionManager
  -> SandBoxMissions mission factory methods
  -> MissionState.OpenNew with CampaignMissionComponent
  -> CampaignMission.Current = component
```

- Campaign owner: [Campaign](../Campaign) exposes the `CampaignMissionManager` property.
- Contracts and active context: [ICampaignMissionManager](../ICampaignMissionManager) · [ICampaignMission](../ICampaignMission).
- SandBox implementation: [CampaignMissionManager](../../campaign-ext/CampaignMissionManager) · [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent).
- Mission lifetime: [Mission](../../mission/Mission); mission callbacks are also forwarded through [CampaignEventDispatcher](../CampaignEventDispatcher).

## Public entry surface

Use the entries by scenario rather than treating them as an alphabetic method dictionary:

| Scenario | Entries and important inputs | Source-backed meaning |
|---|---|---|
| Regular battles | `OpenBattleMission(string, bool, string)` and `OpenBattleMission(MissionInitializerRecord)` | One overload accepts scene/decal/scene-level settings; the other accepts a prepared initializer record. Do not mix the two input models. |
| Naval and caravan battles | `OpenNavalRaidMission`, `OpenNavalBattleMission`, `OpenNavalSetPieceBattleMission`, `OpenCaravanBattleMission` | Naval entries require `TroopRoster`, `Ship`, or `IShipOrigin` collections. The current SandBox manager returns `null` for the three naval implementations, so their interface presence is not proof of single-player support. |
| Sieges | `OpenSiegeMissionWithDeployment`, `OpenSiegeMissionNoDeployment`, `OpenSiegeLordsHallFightMission` | The deployment entry receives wall-health percentages, attacker/defender siege weapons, and the attacker flag; the no-deployment entry represents a siege mission without the deployment phase. |
| Settlements and hideouts | `OpenTownCenterMission`, `OpenCastleCourtyardMission`, `OpenVillageMission`, `OpenIndoorMission`, `OpenHideoutBattleMission`, `OpenHideoutAmbushMission` | These entries require real `Location`, scene, upgrade, or troop-formation data. SandBox selects the concrete mission type and installs its behaviors. |
| Conversation and special flows | `OpenConversationMission`, `OpenCombatMissionWithDialogue`, `OpenMeetingMission`, `OpenPrisonBreakMission`, `OpenArenaStartMission`, `OpenArenaDuelMission`, `OpenRetirementMission`, `OpenAlleyFightMission`, `OpenBattleMissionWhileEnteringSettlement`, `OpenDisguiseMission` | These pass conversation characters, a prisoner, a duel callback, a location, or a disguise origin to SandBox. Bypassing them with direct `MissionState.OpenNew` can omit `CampaignMissionComponent`. |

Every entry returns `IMission`, but that return only means the requested mission was opened. `CampaignMission.Current` becomes reliable after the component's `OnCreated` callback.

## Real example

This inspection uses the real campaign ownership path and does not pretend that `CampaignMissionManager` has a `Current` singleton property:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements.Locations;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

Campaign campaign = Campaign.Current;
if (campaign != null && campaign.CampaignMissionManager != null)
{
    CampaignMission.ICampaignMissionManager manager = campaign.CampaignMissionManager;
    ICampaignMission activeMission = CampaignMission.Current;

    if (activeMission != null && Mission.Current != null)
    {
        MissionMode mode = activeMission.Mode;
        Location location = activeMission.Location;
    }
}
```

Campaign behaviors do call `CampaignMission` to start conversations. StoryMode's `VillagersInNeed` constructs `ConversationCharacterData` from `CharacterObject.PlayerCharacter` and an already acquired villager character, then calls `OpenConversationMission`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation;
using TaleWorlds.Core;

public static void OpenConversationWith(CharacterObject partner)
{
    if (Campaign.Current == null || partner == null)
    {
        return;
    }

    ConversationCharacterData player = new ConversationCharacterData(
        CharacterObject.PlayerCharacter, null, true, false, false, false, false, false);
    ConversationCharacterData other = new ConversationCharacterData(
        partner, null, true, true, false, false, false, false);

    CampaignMission.OpenConversationMission(player, other);
}
```

## Risks and save boundaries

- If `Campaign.Current` or its `CampaignMissionManager` has not been injected, the static entry has no valid forwarding target. Calling from an early SubModule load hook can cause a null reference or an invalid game state.
- `Current` is a transient active-Mission context, not a stable save object. Do not store it in a campaign behavior and keep reading its Agents, Location, or conversation state after mission end.
- Between `OnMissionResultReady` and `OnEndMission`, `PlayerEncounter` can still commit results and siege logic can still synchronize engines. Do not assume that a mission-opening call returning means battle results are already saved, and do not clear rosters yourself.
- Assigning `Current` directly or opening a mission without `CampaignMissionComponent` skips `OnMissionStarted`, `OnAfterMissionStarted`, and `OnMissionEnded`; this can leave global context or receiver state behind.
- The interface exposes naval entries, but the current SandBox methods explicitly return `null` for all three. Check the result and module support before using them.

## Version note

This page follows the v1.4.5 `CampaignMission.cs`, SandBox implementation, and call sites. The static facade pattern may remain across versions, but mission entries, naval support, `MissionInitializerRecord` fields, and `CampaignMissionComponent` event ordering must be rechecked against the target source.

## Navigation

- ↑ Parent: [Campaign API](../)
- ↔ Siblings: [Campaign](../Campaign) · [ICampaignMission](../ICampaignMission) · [ICampaignMissionManager](../ICampaignMissionManager)
- Related types: [CampaignMissionManager](../../campaign-ext/CampaignMissionManager) · [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent) · [Mission](../../mission/Mission)
