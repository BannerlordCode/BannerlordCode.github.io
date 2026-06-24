<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignMissionManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignMissionManager

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class CampaignMissionManager : ICampaignMissionManager`
**Base:** `ICampaignMissionManager`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/Sandbox/CampaignMissionManager.cs`

## Overview

`CampaignMissionManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CampaignMissionManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OpenArenaDuelMission
`public IMission OpenArenaDuelMission(string scene, Location location, CharacterObject duelCharacter, bool requireCivilianEquipment, bool spawnBOthSidesWithHorse, Action<CharacterObject> onDuelEndAction, float customAgentHealth)`

**Purpose:** Handles logic related to `open arena duel mission`.

### OpenDisguiseMission
`public IMission OpenDisguiseMission(string scene, bool willSetUpContact, string sceneLevels, Location fromLocation)`

**Purpose:** Handles logic related to `open disguise mission`.

### OpenNavalRaidMission
`public IMission OpenNavalRaidMission(TroopRoster navalRaidTroops, BattleSideEnum navalSide, List<Ship> allShips)`

**Purpose:** Handles logic related to `open naval raid mission`.

### OpenNavalBattleMission
`public IMission OpenNavalBattleMission(MissionInitializerRecord rec)`

**Purpose:** Handles logic related to `open naval battle mission`.

### OpenNavalSetPieceBattleMission
`public IMission OpenNavalSetPieceBattleMission(MissionInitializerRecord rec, MBList<IShipOrigin> playerShips, MBList<IShipOrigin> playerAllyShips, MBList<IShipOrigin> enemyShips)`

**Purpose:** Handles logic related to `open naval set piece battle mission`.

## Usage Example

```csharp
var manager = CampaignMissionManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)