---
title: "ISandBoxMissionManager"
description: "The CampaignSystem contract that routes tournament and battle-challenge missions into the active SandBox implementation."
---
# ISandBoxMissionManager

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public interface ISandBoxMissionManager`  
**Base:** none  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/ISandBoxMissionManager.cs`

## Overview

`ISandBoxMissionManager` is the CampaignSystem-side contract for the five mission entry points that are specific to the SandBox game mode: four tournament formats and the battle-challenge mission. It returns the engine-facing `IMission` abstraction, while the installed SandBox implementation decides how to construct the live mission and its behaviors.

## Mental Model

Treat this interface as a game-mode boundary, not as a mission object and not as a service locator. `SandBoxManager` owns the `SandBoxMissionManager` property, `SandBoxSubModule` installs the concrete implementation when a campaign starts or is loaded, and the small `SandBoxMission` facade forwards tournament callers to that property. The interface keeps CampaignSystem tournament code independent from the `SandBox` assembly.

The arguments are part of the encounter state. The caller supplies a scene, the active `TournamentGame`, settlement, culture, participation flag, or battle-challenge priority lists. The implementation passes those values to `TournamentMissionStarter`, which calls `MissionState.OpenNew` and creates the mission behavior list. Opening the mission is a state transition; it is not a request for a reusable mission handle.

## Ownership and acquisition

The normal call path is:

`TournamentGame` -> `SandBoxMission` -> `SandBoxManager.Instance.SandBoxMissionManager` -> `SandBox.SandBoxMissionManager` -> `TournamentMissionStarter`.

Do not construct `SandBoxMissionManager` in a campaign behavior. Obtain the public facade or the interface property already installed by SandBox. The contract is only valid after the relevant campaign/game initialization boundary has run.

## Dependencies

- [SandBoxManager](../SandBoxManager) owns the installed `SandBoxMissionManager` property.
- [SandBoxMission](../SandBoxMission) is the CampaignSystem facade used by tournament code.
- [SandBoxMissionManager](../../campaign-ext/SandBoxMissionManager) provides the SandBox implementation.
- [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent) publishes the live mission after a starter creates it.

The installation boundary can be checked without constructing an implementation:

```csharp
Campaign campaign = Campaign.Current;
ISandBoxMissionManager manager = campaign?.SandBoxManager?.SandBoxMissionManager;
if (manager == null)
{
    return;
}
```

## Contract surface

| Member | What the caller supplies | SandBox route |
| --- | --- | --- |
| `OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | Arena scene, tournament state, settlement, culture, and player participation | `TournamentMissionStarter.OpenTournamentArcheryMission` |
| `OpenTournamentFightMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | Fight tournament state and its arena context | `TournamentMissionStarter.OpenTournamentFightMission` |
| `OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | Horse-race tournament state and arena context | `TournamentMissionStarter.OpenTournamentHorseRaceMission` |
| `OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | Jousting tournament state and arena context | `TournamentMissionStarter.OpenTournamentJoustingMission` |
| `OpenBattleChallengeMission(string scene, IList<Hero> priorityCharsAttacker, IList<Hero> priorityCharsDefender)` | Scene and ordered hero lists for both sides | `TournamentMissionStarter.OpenBattleChallengeMission` |

Every member returns `IMission`. The interface does not expose the `MissionBehavior` array, `CampaignMissionComponent`, or the mission ID; those belong to the SandBox implementation and factory layer. See [SandBoxMissionManager](../../campaign-ext/SandBoxMissionManager) and [SandBoxMissions](../../campaign-ext/SandBoxMissions) for that boundary.

## Real acquisition path

`FightTournamentGame` calculates the arena scene from the current location and wall/upgrade context, then calls the facade with its own tournament instance. The facade reaches this interface without the tournament code knowing the concrete SandBox manager:

```csharp
int upgradeLevel = ((!settlement.IsTown) ? 1 : settlement.Town.GetWallLevel());
SandBoxMission.OpenTournamentFightMission(
    LocationComplex.Current.GetScene("arena", upgradeLevel),
    this,
    settlement,
    settlement.Culture,
    isPlayerParticipating);
```

The `scene` must be a scene selected for the current location and tournament. Passing an arbitrary scene while keeping the same `TournamentGame` does not turn it into a valid arena mission. The resulting mission owns the subsequent agent, tournament, and callback lifetime.

## Lifecycle and boundaries

- `SandBoxSubModule.OnCampaignStart` and `OnGameLoaded` assign the SandBox implementation to `SandBoxManager.SandBoxMissionManager`.
- Tournament methods call `MissionState.OpenNew`; the previous active mission/game state can be replaced as part of that transition.
- Tournament starters add `CampaignMissionComponent` to their behavior lists, so [CampaignMission.Current](../CampaignMission) becomes meaningful only after the new mission has been created.
- The interface has no save contract. Persist campaign facts in a campaign behavior; do not save `IMission`, `Hero` priority lists, or live engine references.

## Risks and failure boundaries

- **Manager not ready:** a null `SandBoxManager.Instance` or `SandBoxMissionManager` means the campaign initialization/load boundary is not complete. Do not cache an instance from an earlier game state.
- **Scene/context mismatch:** the manager forwards inputs with little validation. A scene, settlement, and tournament game from different contexts can fail during mission setup or produce incorrect spawns.
- **Stale references:** after opening a mission, old `Agent`, `Location`, and mission behavior references may be disposed or no longer current. Observe [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent) lifecycle callbacks instead.
- **Implementation coupling:** `ISandBoxMissionManager` does not guarantee support from every game mode. Code that requires SandBox tournament behavior should check the installed game-mode boundary before invoking it.

## Navigation

- Parent: [Campaign API](../)
- Siblings: [CampaignMission](../CampaignMission) · [SandBoxMission](../SandBoxMission)
- Implementation: [SandBoxMissionManager](../../campaign-ext/SandBoxMissionManager) · [SandBoxMissions](../../campaign-ext/SandBoxMissions)
- Lifecycle: [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent)
