---
title: "BannerlordMissions"
description: "The v1.4.5 mission factories for custom battles, sieges, lords-hall fights, and mission atmosphere records."
---
# BannerlordMissions

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public static class BannerlordMissions`  
**Base:** none  
**Attributes:** `[MissionManager]`; the three mission-opening methods also carry `[MissionMethod]`  
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BannerlordMissions.cs`

## One-line responsibility

`BannerlordMissions` is the game-owned factory that converts prepared custom-battle inputs into a new `Mission`, its `MissionInitializerRecord`, and the complete set of battle or siege `MissionBehavior` instances.

## Mental model

This is a static mission composition boundary, not a service with mutable state and not a replacement for `MissionBehavior`. Each `Open*` method assembles a mission name, scene record, troop suppliers, and a fixed behavior list, then delegates to [`MissionState.OpenNew`](../../campaign-ext/MissionState). `OpenNew` creates the `Mission`, invokes the behavior initializer, pushes a new `MissionState`, and returns the `Mission` object. The returned object is therefore the newly opened mission's host, not a detached configuration object.

The normal source path is `CustomBattleVM.ExecuteStart` -> `CustomBattleHelper.PrepareBattleData` -> `CustomBattleHelper.StartGame` -> one of these factories. The factory expects the `CustomBattleData` inputs to already describe valid sides, characters, scenes, siege machines, and atmosphere values. It does not validate those relationships before indexing the side-specific troop-supplier array or opening the scene.

`CreateAtmosphereInfoForMission` is the small value-building helper used by custom battle and multiplayer practice mission setup. It maps four literal season IDs and five supported time values to engine atmosphere data; it does not query the campaign clock or calculate weather.

## When to use and when not to

**Use it when:**

- Starting the Custom Battle field-battle path with `OpenCustomBattleMission`.
- Starting the custom siege, sally-out, or relief-force path with `OpenSiegeMissionWithDeployment`.
- Starting the lords-hall custom battle path with `OpenCustomBattleLordsHallMission`.
- Building a [`MissionInitializerRecord`](../../core-extra/MissionInitializerRecord) atmosphere value for a mission setup that follows the same source contract.

**Do not use it when:**

- Adding logic to an already running mission. Add a real [`MissionBehavior`](../../mission/MissionBehavior) through the mission's behavior boundary instead of reopening the global `MissionState`.
- Starting a campaign encounter, settlement mission, or story mission. Use the owning Campaign or module mission factory, such as [`CampaignMission`](../../campaign/CampaignMission), because these methods hard-code `PlayingInCampaignMode = false` for their custom-battle records.
- Changing campaign data, save data, party ownership, or battle outcome. Those belong to campaign Actions, behaviors, and save contracts, not this scene factory.
- Calling with placeholder parties or a scene that is not loaded by the target game mode. The method builds native scene and agent systems immediately through `MissionState.OpenNew`.

## Dependency graph

**Upstream:**

- [`CustomBattleCombatant`](../CustomBattleCombatant) supplies the player and enemy sides used by the troop suppliers.
- [`BasicCharacterObject`](../../core-extra/BasicCharacterObject) supplies the player and general characters.
- `CustomBattleData` is assembled by `CustomBattleHelper.PrepareBattleData`; `CustomBattleHelper.StartGame` selects the field-battle or siege factory.
- [`MissionInitializerRecord`](../../core-extra/MissionInitializerRecord) carries the scene, atmosphere, scene-level, and decal-atlas inputs into the mission state.

**Downstream:**

- [`MissionState`](../../campaign-ext/MissionState) creates and pushes the new mission state.
- [`Mission`](../../mission/Mission) owns the returned mission and the behavior collection.
- [`MissionBehavior`](../../mission/MissionBehavior) subclasses in the factory list drive spawning, deployment, combatants, AI, morale, boundaries, siege engines, and battle end handling.
- [`MissionObject`](../MissionObject) and its derived scene objects are registered later as the scene enters its mission lifecycle; this factory does not manually register them.

## Real acquisition path

The source-backed Custom Battle entry point is the existing `CustomBattleVM.ExecuteStart` method. It prepares the complete data object, then lets `CustomBattleHelper.StartGame` select the correct factory:

```csharp
public void ExecuteStart()
{
    CustomBattleHelper.StartGame(PrepareBattleData());
}
```

Inside `CustomBattleHelper.StartGame`, the branch is source-confirmed and uses the fields of that prepared object:

```csharp
public static void StartGame(CustomBattleData data)
{
    Game.Current.PlayerTroop = data.PlayerCharacter;
    if (data.GameTypeStringId == "Siege")
    {
        BannerlordMissions.OpenSiegeMissionWithDeployment(
            data.SceneId, data.PlayerCharacter, data.PlayerParty, data.EnemyParty,
            data.IsPlayerGeneral, data.WallHitpointPercentages,
            data.HasAnySiegeTower, data.AttackerMachines, data.DefenderMachines,
            data.IsPlayerAttacker, data.SceneUpgradeLevel, data.SeasonId,
            data.IsSallyOut, data.IsReliefAttack, data.TimeOfDay);
    }
    else
    {
        BannerlordMissions.OpenCustomBattleMission(
            data.SceneId, data.PlayerCharacter, data.PlayerParty, data.EnemyParty,
            data.IsPlayerGeneral, data.PlayerSideGeneralCharacter,
            data.SceneLevel, data.SeasonId, data.TimeOfDay);
    }
}
```

This is a real module call path, not a recommendation to invent `CustomBattleData` fields. A mod that needs a different mission should keep the same ownership order: prepare valid mission inputs, open the mission through its owning factory, then attach only a concrete behavior that is safe for that mission's lifecycle.

## Key members and timing

### CreateAtmosphereInfoForMission

`public static AtmosphereInfo CreateAtmosphereInfoForMission(string seasonId, int timeOfDay)`

Returns an [`AtmosphereInfo`](../../core-extra/AtmosphereInfo) with the season integer and a time-of-day atmosphere name. The recognized seasons are `spring`, `summer`, `fall`, and `winter`; the recognized times are `6`, `12`, `15`, `18`, and `22`. An unrecognized season silently leaves the season value at `0`, and an unrecognized time silently leaves the atmosphere name empty.

The multiplayer practice mission path uses the same helper while constructing its initializer record:

```csharp
MissionInitializerRecord record = new MissionInitializerRecord(scene);
record.AtmosphereOnCampaign =
    BannerlordMissions.CreateAtmosphereInfoForMission(seasonString, (int)timeOfDay);
record.SceneLevels = sceneLevels;
```

Call it before opening the mission record. Do not pass a campaign season label or arbitrary clock value and assume it will be normalized.

### OpenCustomBattleMission

`public static Mission OpenCustomBattleMission(string scene, BasicCharacterObject playerCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, bool isPlayerGeneral, BasicCharacterObject playerSideGeneralCharacter, string sceneLevels = "", string seasonString = "", float timeOfDay = 6f)`

Opens the non-campaign `CustomBattle` mission. It builds two `CustomBattleTroopSupplier` instances, creates a `MissionInitializerRecord` with `PlayingInCampaignMode = false`, `DecalAtlasGroup = 2`, and the atmosphere record, then installs the field-battle spawn, combat, AI, deployment, boundary, highlight, and objective behaviors. It also enables player control transfer after the player's controlled agent dies.

The method uses `playerParty.Side` and `enemyParty.Side` as indexes into a two-element supplier array. Both parties must therefore carry the expected attacker/defender values and must occupy different sides before this method is called.

The non-siege branch in the source caller passes the prepared `CustomBattleData` fields directly:

```csharp
if (data.GameTypeStringId != "Siege")
{
    BannerlordMissions.OpenCustomBattleMission(
        data.SceneId, data.PlayerCharacter, data.PlayerParty, data.EnemyParty,
        data.IsPlayerGeneral, data.PlayerSideGeneralCharacter,
        data.SceneLevel, data.SeasonId, data.TimeOfDay);
}
```

### OpenSiegeMissionWithDeployment

`public static Mission OpenSiegeMissionWithDeployment(string scene, BasicCharacterObject playerCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, bool isPlayerGeneral, float[] wallHitPointPercentages, bool hasAnySiegeTower, List<MissionSiegeWeapon> siegeWeaponsOfAttackers, List<MissionSiegeWeapon> siegeWeaponsOfDefenders, bool isPlayerAttacker, int sceneUpgradeLevel = 0, string seasonString = "", bool isSallyOut = false, bool isReliefForceAttack = false, float timeOfDay = 6f)`

Opens `CustomSiegeBattle` and assembles the siege preparation, deployment, spawn, morale, boundary, and siege-engine behavior chain. `sceneUpgradeLevel` maps `1` to `level_1`, `2` to `level_2`, and every other value to `level_3`, after which the method appends ` siege` to the scene-level tag. `isSallyOut` changes the battle-size type and the mission spawn/controller path; `isReliefForceAttack` selects the relief-force controller when the sally-out branch is not active.

The two `List<MissionSiegeWeapon>` arguments are directional: the factory passes them differently for a sally-out mission than for a normal siege. Keep the attacker/defender ownership from the prepared `CustomBattleData`; do not swap the lists merely to change the UI label.

The siege branch in the source caller supplies both directional lists and the wall state from the same prepared data object:

```csharp
if (data.GameTypeStringId == "Siege")
{
    BannerlordMissions.OpenSiegeMissionWithDeployment(
        data.SceneId, data.PlayerCharacter, data.PlayerParty, data.EnemyParty,
        data.IsPlayerGeneral, data.WallHitpointPercentages,
        data.HasAnySiegeTower, data.AttackerMachines, data.DefenderMachines,
        data.IsPlayerAttacker, data.SceneUpgradeLevel, data.SeasonId,
        data.IsSallyOut, data.IsReliefAttack, data.TimeOfDay);
}
```

### OpenCustomBattleLordsHallMission

`public static Mission OpenCustomBattleLordsHallMission(string scene, BasicCharacterObject playerCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, BasicCharacterObject playerSideGeneralCharacter, string sceneLevels = "", int sceneUpgradeLevel = 0, string seasonString = "")`

Opens `CustomBattleLordsHall` with a fixed attacker side, the `siege` scene-level tag, decal atlas group `3`, and a lords-hall fight controller. The factory limits defender ranged agents through a local count, uses no team AI, and installs a smaller behavior set than the field and siege methods. The `sceneUpgradeLevel` and `seasonString` inputs are present in the signature, but the v1.4.5 implementation uses the fixed `siege` scene-level string and does not pass an atmosphere value into its initializer record.

No internal v1.4.5 caller for this entry point appears in the inspected source snapshot. The public signature is the source contract; do not copy the field-battle or siege caller and pretend that it supplies a lords-hall configuration.

```csharp
public static Mission OpenCustomBattleLordsHallMission(
    string scene,
    BasicCharacterObject playerCharacter,
    CustomBattleCombatant playerParty,
    CustomBattleCombatant enemyParty,
    BasicCharacterObject playerSideGeneralCharacter,
    string sceneLevels = "",
    int sceneUpgradeLevel = 0,
    string seasonString = "")
```

## Risks and crash boundaries

- `MissionState.OpenNew` changes the global game state. Calling an `Open*` method while another mission is loading or ending can leave callers holding a mission that is no longer the active state.
- `scene`, parties, characters, siege lists, and wall percentages are consumed by native mission setup and behavior constructors without a friendly validation layer. A missing scene or mismatched side data can fail during mission startup rather than at the call site.
- `CreateAtmosphereInfoForMission` has fallback values instead of throwing for unknown season/time inputs. An apparently successful call can still create an empty or unintended atmosphere record.
- The factories create behavior lists with ordering assumptions. Do not remove or reorder their behaviors by copying only part of the list; deployment, spawn, combat, and battle-end logic depend on one another.
- The three mission-opening methods are non-campaign paths. Using them as a shortcut from Campaign code can skip campaign encounter ownership and leave campaign state out of sync with the mission result.
- A returned `Mission` is valid for mission-lifecycle operations, not for save persistence. Release custom references in a mission behavior's end callbacks and do not retain it after the mission ends.

## See also and reciprocal navigation

- ↑ Parent: [Mission-ext module index](../)
- ↔ Related factory host: [MissionState](../../campaign-ext/MissionState) · [Mission](../../mission/Mission)
- Behavior boundary: [MissionBehavior](../../mission/MissionBehavior) · [MissionLogic](../MissionLogic)
- Inputs: [CustomBattleCombatant](../CustomBattleCombatant) · [MissionSiegeWeapon](../../core-extra/MissionSiegeWeapon) · [MissionInitializerRecord](../../core-extra/MissionInitializerRecord)
- Related mission object: [MissionObject](../MissionObject) · [BasicMissionHandler](../BasicMissionHandler)
- Documentation contract: [Doc Contract](../../../architecture/doc-contract)
- 中文/English: [BannerlordMissions](../../../../zh/api/mission-ext/BannerlordMissions)
