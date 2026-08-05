---
title: "SandBoxMissionManager"
description: "The SandBox implementation of the CampaignSystem tournament and battle-challenge mission contract."
---
# SandBoxMissionManager

**Namespace:** `SandBox`  
**Module:** `SandBox`  
**Type:** `public class SandBoxMissionManager : ISandBoxMissionManager`  
**Base:** [ISandBoxMissionManager](../../campaign/ISandBoxMissionManager)  
**Source:** `Modules.SandBox/SandBox/Sandbox/SandBoxMissionManager.cs`

## Overview

`SandBoxMissionManager` is a thin adapter. It implements the CampaignSystem [ISandBoxMissionManager](../../campaign/ISandBoxMissionManager) contract, forwards four tournament methods and the battle-challenge method to `TournamentMissionStarter`, and returns the resulting `IMission`. It does not own a second active mission, store tournament state, or assemble the mission behavior list itself.

## Mental Model

The concrete manager is installed infrastructure, not a mod-facing singleton to construct. During `SandBoxSubModule.OnCampaignStart` and `OnGameLoaded`, SandBox assigns `new SandBoxMissionManager()` to `Campaign.Current.SandBoxManager.SandBoxMissionManager`. A caller normally reaches it through [SandBoxMission](../../campaign/SandBoxMission), whose static methods read `SandBoxManager.Instance.SandBoxMissionManager`.

The adapter's useful responsibility is selection of the SandBox implementation. `TournamentMissionStarter` owns the actual `MissionState.OpenNew` call, initializer record, mission ID, and behavior list. This separation lets CampaignSystem tournament code use an interface while SandBox controls the concrete mission setup.

## Dependencies

- [ISandBoxMissionManager](../../campaign/ISandBoxMissionManager) defines the five forwarding members.
- [SandBoxManager](../../campaign/SandBoxManager) owns the installed interface instance.
- [SandBoxMission](../../campaign/SandBoxMission) is the normal CampaignSystem acquisition facade.
- [SandBoxMissions](../SandBoxMissions) is the adjacent campaign factory layer for non-tournament mission families.

The manager is meaningful only while the owning [Campaign](../../campaign/Campaign) and its SandBox game handler are active.

## Installation and ownership

The property being populated is declared on [SandBoxManager](../../campaign/SandBoxManager). It is refreshed at both campaign start and game load, so a cached reference can become stale across a new game or load transition. `CampaignMissionManager` is a different adapter stored on `Campaign.Current.CampaignMissionManager`; do not confuse these two manager properties.

## Forwarding surface

| Implementation member | Forwarding target | Important boundary |
| --- | --- | --- |
| `OpenTournamentFightMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | `TournamentMissionStarter.OpenTournamentFightMission` | The scene and tournament state must belong to the same arena context. |
| `OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | `TournamentMissionStarter.OpenTournamentHorseRaceMission` | Keep the settlement, culture, and participation flag from the tournament caller. |
| `OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | `TournamentMissionStarter.OpenTournamentJoustingMission` | The starter, not this adapter, creates jousting behaviors. |
| `OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | `TournamentMissionStarter.OpenTournamentArcheryMission` | Do not replace the initializer with a generic scene record. |
| explicit `ISandBoxMissionManager.OpenBattleChallengeMission(string scene, IList<Hero> priorityCharsAttacker, IList<Hero> priorityCharsDefender)` | `TournamentMissionStarter.OpenBattleChallengeMission` | The method is available through the interface; it is intentionally absent from the concrete class's public method list. |

The four tournament methods are public because they are the normal interface implementation. `OpenBattleChallengeMission` is implemented explicitly, so this concrete type does not expose it as a directly callable public member through a `SandBoxMissionManager` variable. Use the interface or the [SandBoxMission](../../campaign/SandBoxMission) facade.

## Real acquisition path

A diagnostic that needs to confirm the installed route can inspect the owner property without constructing a replacement:

```csharp
using TaleWorlds.CampaignSystem;

public static bool IsSandBoxMissionRouteReady()
{
    Campaign campaign = Campaign.Current;
    if (campaign == null || campaign.SandBoxManager == null)
    {
        return false;
    }

    ISandBoxMissionManager manager = campaign.SandBoxManager.SandBoxMissionManager;
    return manager != null;
}
```

Normal game code should then call the CampaignSystem facade. For example, `FightTournamentGame` calculates `LocationComplex.Current.GetScene("arena", upgradeLevel)` and calls `SandBoxMission.OpenTournamentFightMission`; the facade reaches this adapter and the adapter forwards the exact tournament inputs to `TournamentMissionStarter`.

## What the adapter does not do

- It does not validate that a scene matches a `Settlement`, `CultureObject`, or `TournamentGame`.
- It does not add `CampaignMissionComponent`; tournament starter behavior delegates do that while constructing the mission.
- It does not save or restore tournament state. Saveable campaign data belongs to campaign behaviors and their `SyncData` contracts.
- It does not provide a `Current` property. The installed value is reached through `Campaign.Current.SandBoxManager` or `SandBoxManager.Instance`.

## Risks and boundaries

- **Initialization order:** a null property is meaningful during startup, teardown, or before a game load has completed. Do not silently fall back to `new SandBoxMissionManager()`.
- **Explicit interface call:** battle challenge code that stores the concrete type cannot call `OpenBattleChallengeMission` directly; keep the variable typed as `ISandBoxMissionManager` or use `SandBoxMission`.
- **Thin forwarding:** invalid scene/location or stale tournament objects can fail later in mission construction. Preserve the caller's encounter context as one lifecycle unit.
- **Mission transition:** the forwarded starter opens a new mission. Stop using old `Agent`, `Location`, `MissionBehavior`, and UI references after the transition unless reacquired from the live mission.
- **Cross-mode coupling:** this implementation is SandBox-specific. A replacement game mode may install another `ISandBoxMissionManager` or none at all.

## Navigation

- Parent: [Campaign extension API](../)
- Contract: [ISandBoxMissionManager](../../campaign/ISandBoxMissionManager) · [SandBoxMission](../../campaign/SandBoxMission)
- Factory: [SandBoxMissions](../SandBoxMissions)
- Campaign route: [CampaignMission](../../campaign/CampaignMission) · [CampaignMissionManager](../CampaignMissionManager)
- Lifecycle: [CampaignMissionComponent](../CampaignMissionComponent) · [Mission](../../mission/Mission)
