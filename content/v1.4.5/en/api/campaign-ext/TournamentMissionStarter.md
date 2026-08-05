---
title: "TournamentMissionStarter"
description: "The v1.4.5 SandBox mission factories that open tournament rounds with their mission IDs and behavior contracts."
---
# TournamentMissionStarter

**Namespace:** `SandBox.Tournaments`  
**Module:** `SandBox.Tournaments`  
**Type:** `public static class TournamentMissionStarter`  
**Attributes:** `[MissionManager]`  
**Source:** `Modules.SandBox/SandBox/SandBox.Tournaments/TournamentMissionStarter.cs`

## Responsibility

`TournamentMissionStarter` is the SandBox-owned factory layer for the four tournament round types. Each supported method builds a `MissionInitializerRecord`, calls `MissionState.OpenNew`, and supplies a behavior array containing the round controller, `TournamentBehavior`, arena logic, and `CampaignMissionComponent`. It is not a tournament model and it does not decide who participates.

## Mental model

Think of this class as the last step in the campaign-to-mission route:

```text
TournamentGame.OpenMission
  -> SandBoxMission.OpenTournamentFightMission (or another round)
  -> SandBoxMissionManager
  -> TournamentMissionStarter
  -> MissionState.OpenNew
```

The caller owns the encounter inputs: a real scene name, the current `TournamentGame`, its `Settlement`, the settlement `CultureObject`, and the participation flag. This class owns the mission ID and the behavior composition. The returned `Mission` is a live mission, not a save object; agents, controllers, and location references must be reacquired after a later mission switch.

## Supported factories

| Method | Mission ID | Controller and notable behavior |
| --- | --- | --- |
| `OpenTournamentArcheryMission` | `TournamentArchery` | `TournamentArcheryMissionController`, `TournamentBehavior`, `CampaignMissionComponent`, arena and boundary logic, and `BasicLeaveMissionLogic(true)` |
| `OpenTournamentFightMission` | `TournamentFight` | `TournamentFightMissionController`, `TournamentBehavior`, `CampaignMissionComponent`, arena logic, highlights, and boundary logic |
| `OpenTournamentHorseRaceMission` | `TournamentHorseRace` | `TownHorseRaceMissionController`, `TournamentBehavior`, `CampaignMissionComponent`, arena and boundary logic |
| `OpenTournamentJoustingMission` | `TournamentJousting` | `TournamentJoustingMissionController`, `TournamentBehavior`, `CampaignMissionComponent`, arena logic, a `MissionBoundaryCrossingHandler(10f)`, and boundary logic |

All four signatures are:

```csharp
public static Mission OpenTournamentFightMission(
    string scene,
    TournamentGame tournamentGame,
    Settlement settlement,
    CultureObject culture,
    bool isPlayerParticipating);
```

The other three methods have the same parameters and differ only in their round-specific controller and mission ID. The initializer is created with the supplied `scene`, an empty string for the second scene argument, `doNotUseLoadingScreen: false`, and decal atlas group `3`. The final `true, true` arguments are passed to `MissionState.OpenNew` by all four factories.

## Real campaign call site

`FightTournamentGame.OpenMission` does not invent a scene or construct a controller. It derives the arena upgrade level from the settlement, gets the arena scene from `LocationComplex.Current`, and enters through the CampaignSystem facade:

```csharp
public override void OpenMission(Settlement settlement, bool isPlayerParticipating)
{
    int upgradeLevel = !settlement.IsTown ? 1 : settlement.Town.GetWallLevel();
    SandBoxMission.OpenTournamentFightMission(
        LocationComplex.Current.GetScene("arena", upgradeLevel),
        this,
        settlement,
        settlement.Culture,
        isPlayerParticipating);
}
```

This is the safe shape for an existing tournament flow: keep the `TournamentGame`, settlement, culture, and scene from one encounter. Mod code that only needs to open a standard round should normally call [SandBoxMission](../../campaign/SandBoxMission) or the installed [SandBoxMissionManager](../SandBoxMissionManager), not bypass the route with a hand-built behavior list.

## Lifetime and dependencies

- [SandBoxSubModule](../SandBoxSubModule) installs the manager that reaches this factory during campaign startup and after a save is loaded.
- [SandBoxMissionManager](../SandBoxMissionManager) forwards the four public tournament calls and the explicit battle-challenge interface call.
- `CampaignMissionComponent` is included in each supported behavior list. It makes the active campaign mission visible through [CampaignMission](../../campaign/CampaignMission) and clears that transient context when the mission ends.
- [Mission](../../mission/Mission) owns the live agents and mission behaviors. The factory's return does not mean tournament results have already been committed to campaign state.

## Unsupported entry

The public method below is present for the mission contract, but the v1.4.5 source body returns `null` directly:

```csharp
public static Mission OpenBattleChallengeMission(
    string scene,
    IList<Hero> priorityCharsAttacker,
    IList<Hero> priorityCharsDefender)
{
    return null;
}
```

Do not treat this method as a working battle factory. Check the returned value before using it, and do not replace the null with a guessed mission ID or a generic tournament round. The same boundary is visible through the explicit implementation on `SandBoxMissionManager` and through `SandBoxMission`.

## Risks and save boundaries

- Opening a new mission changes the active mission state. Do not retain an old `Agent`, `MissionBehavior`, `Location`, or `CampaignMission.Current` reference across the transition.
- A scene from a different settlement or upgrade level can fail later during mission initialization even though the method signature accepts it. Preserve the source call site's context.
- `CampaignMissionComponent` is not optional decoration. Removing it can leave campaign mission events and the static active context out of sync.
- The tournament starter creates mission behavior; it does not save tournament state. Persist campaign data through campaign behaviors and their save contract, not through a live `Mission` reference.

## Version note

These details follow the v1.4.5 decompiled source. Recheck mission IDs, initializer fields, and behavior order when targeting another version; the presence of the same method name does not prove that the scene or lifecycle contract is unchanged.

## Navigation

- Parent: [Campaign extension API](../)
- Siblings: [SandBoxSubModule](../SandBoxSubModule) · [SandBoxGameManager](../SandBoxGameManager) · [SandBoxSaveManager](../SandBoxSaveManager)
- Related: [SandBoxMission](../../campaign/SandBoxMission) · [SandBoxMissionManager](../SandBoxMissionManager) · [SandBoxMissions](../SandBoxMissions) · [CampaignMission](../../campaign/CampaignMission) · [Mission](../../mission/Mission)
- Chinese/English: [中文页面](../../../../zh/api/campaign-ext/TournamentMissionStarter)
