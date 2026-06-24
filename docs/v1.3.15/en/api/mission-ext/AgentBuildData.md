<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentBuildData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentBuildData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentBuildData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/AgentBuildData.cs`

## Overview

`AgentBuildData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `AgentBuildData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AgentData` | `public AgentData AgentData { get; }` |
| `AgentCharacter` | `public BasicCharacterObject AgentCharacter { get; }` |
| `AgentMonster` | `public Monster AgentMonster { get; }` |
| `AgentOverridenSpawnEquipment` | `public Equipment AgentOverridenSpawnEquipment { get; }` |
| `AgentOverridenSpawnMissionEquipment` | `public MissionEquipment AgentOverridenSpawnMissionEquipment { get; }` |
| `AgentEquipmentSeed` | `public int AgentEquipmentSeed { get; }` |
| `AgentNoHorses` | `public bool AgentNoHorses { get; }` |
| `AgentMountKey` | `public string AgentMountKey { get; }` |
| `AgentNoWeapons` | `public bool AgentNoWeapons { get; }` |
| `AgentNoArmor` | `public bool AgentNoArmor { get; }` |
| `AgentFixedEquipment` | `public bool AgentFixedEquipment { get; }` |
| `AgentCivilianEquipment` | `public bool AgentCivilianEquipment { get; }` |
| `AgentClothingColor1` | `public uint AgentClothingColor1 { get; }` |
| `AgentClothingColor2` | `public uint AgentClothingColor2 { get; }` |
| `BodyPropertiesOverriden` | `public bool BodyPropertiesOverriden { get; }` |
| `AgentBodyProperties` | `public BodyProperties AgentBodyProperties { get; }` |
| `AgeOverriden` | `public bool AgeOverriden { get; }` |
| `AgentAge` | `public int AgentAge { get; }` |
| `PrepareImmediately` | `public bool PrepareImmediately { get; }` |
| `GenderOverriden` | `public bool GenderOverriden { get; }` |
| `AgentIsFemale` | `public bool AgentIsFemale { get; }` |
| `AgentRace` | `public int AgentRace { get; }` |
| `AgentOrigin` | `public IAgentOriginBase AgentOrigin { get; }` |
| `AgentController` | `public AgentControllerType AgentController { get; }` |
| `AgentTeam` | `public Team AgentTeam { get; }` |
| `AgentIsReinforcement` | `public bool AgentIsReinforcement { get; }` |
| `AgentSpawnsIntoOwnFormation` | `public bool AgentSpawnsIntoOwnFormation { get; }` |
| `AgentSpawnsUsingOwnTroopClass` | `public bool AgentSpawnsUsingOwnTroopClass { get; }` |
| `MakeUnitStandOutDistance` | `public float MakeUnitStandOutDistance { get; }` |
| `AgentInitialPosition` | `public Vec3? AgentInitialPosition { get; }` |
| `AgentInitialDirection` | `public Vec2? AgentInitialDirection { get; }` |
| `AgentFormation` | `public Formation AgentFormation { get; }` |
| `AgentFormationTroopSpawnCount` | `public int AgentFormationTroopSpawnCount { get; }` |
| `AgentFormationTroopSpawnIndex` | `public int AgentFormationTroopSpawnIndex { get; }` |
| `AgentMissionPeer` | `public MissionPeer AgentMissionPeer { get; }` |
| `OwningAgentMissionPeer` | `public MissionPeer OwningAgentMissionPeer { get; }` |
| `AgentIndexOverriden` | `public bool AgentIndexOverriden { get; }` |
| `AgentIndex` | `public int AgentIndex { get; }` |
| `AgentMountIndexOverriden` | `public bool AgentMountIndexOverriden { get; }` |
| `AgentMountIndex` | `public int AgentMountIndex { get; }` |
| `AgentVisualsIndex` | `public int AgentVisualsIndex { get; }` |
| `AgentBanner` | `public Banner AgentBanner { get; }` |
| `AgentBannerItem` | `public ItemObject AgentBannerItem { get; }` |
| `AgentBannerReplacementWeaponItem` | `public ItemObject AgentBannerReplacementWeaponItem { get; }` |
| `AgentCanSpawnOutsideOfMissionBoundary` | `public bool AgentCanSpawnOutsideOfMissionBoundary { get; }` |
| `RandomizeColors` | `public bool RandomizeColors { get; set; }` |
| `UseFaceCache` | `public bool UseFaceCache { get; set; }` |
| `FaceCacheId` | `public int FaceCacheId { get; set; }` |

## Key Methods

### Character
`public AgentBuildData Character(BasicCharacterObject characterObject)`

**Purpose:** Handles logic related to `character`.

### Controller
`public AgentBuildData Controller(AgentControllerType controller)`

**Purpose:** Handles logic related to `controller`.

### Team
`public AgentBuildData Team(Team team)`

**Purpose:** Handles logic related to `team`.

### IsReinforcement
`public AgentBuildData IsReinforcement(bool isReinforcement)`

**Purpose:** Handles logic related to `is reinforcement`.

### SpawnsIntoOwnFormation
`public AgentBuildData SpawnsIntoOwnFormation(bool spawnIntoOwnFormation)`

**Purpose:** Handles logic related to `spawns into own formation`.

### SpawnsUsingOwnTroopClass
`public AgentBuildData SpawnsUsingOwnTroopClass(bool spawnUsingOwnTroopClass)`

**Purpose:** Handles logic related to `spawns using own troop class`.

### MakeUnitStandOutOfFormationDistance
`public AgentBuildData MakeUnitStandOutOfFormationDistance(float makeUnitStandOutDistance)`

**Purpose:** Handles logic related to `make unit stand out of formation distance`.

### InitialPosition
`public AgentBuildData InitialPosition(in Vec3 position)`

**Purpose:** Initializes the state, resources, or bindings for `ial position`.

### InitialDirection
`public AgentBuildData InitialDirection(in Vec2 direction)`

**Purpose:** Initializes the state, resources, or bindings for `ial direction`.

### InitialFrameFromSpawnPointEntity
`public AgentBuildData InitialFrameFromSpawnPointEntity(GameEntity entity)`

**Purpose:** Initializes the state, resources, or bindings for `ial frame from spawn point entity`.

### InitialFrameFromSpawnPointEntity
`public AgentBuildData InitialFrameFromSpawnPointEntity(WeakGameEntity entity)`

**Purpose:** Initializes the state, resources, or bindings for `ial frame from spawn point entity`.

### Formation
`public AgentBuildData Formation(Formation formation)`

**Purpose:** Handles logic related to `formation`.

### Monster
`public AgentBuildData Monster(Monster monster)`

**Purpose:** Handles logic related to `monster`.

### VisualsIndex
`public AgentBuildData VisualsIndex(int index)`

**Purpose:** Handles logic related to `visuals index`.

### Equipment
`public AgentBuildData Equipment(Equipment equipment)`

**Purpose:** Handles logic related to `equipment`.

### MissionEquipment
`public AgentBuildData MissionEquipment(MissionEquipment missionEquipment)`

**Purpose:** Handles logic related to `mission equipment`.

### EquipmentSeed
`public AgentBuildData EquipmentSeed(int seed)`

**Purpose:** Handles logic related to `equipment seed`.

### NoHorses
`public AgentBuildData NoHorses(bool noHorses)`

**Purpose:** Handles logic related to `no horses`.

### NoWeapons
`public AgentBuildData NoWeapons(bool noWeapons)`

**Purpose:** Handles logic related to `no weapons`.

### NoArmor
`public AgentBuildData NoArmor(bool noArmor)`

**Purpose:** Handles logic related to `no armor`.

### FixedEquipment
`public AgentBuildData FixedEquipment(bool fixedEquipment)`

**Purpose:** Handles logic related to `fixed equipment`.

### CivilianEquipment
`public AgentBuildData CivilianEquipment(bool civilianEquipment)`

**Purpose:** Handles logic related to `civilian equipment`.

### SetPrepareImmediately
`public AgentBuildData SetPrepareImmediately()`

**Purpose:** Sets the value or state of `prepare immediately`.

### ClothingColor1
`public AgentBuildData ClothingColor1(uint color)`

**Purpose:** Handles logic related to `clothing color1`.

### ClothingColor2
`public AgentBuildData ClothingColor2(uint color)`

**Purpose:** Handles logic related to `clothing color2`.

### MissionPeer
`public AgentBuildData MissionPeer(MissionPeer missionPeer)`

**Purpose:** Handles logic related to `mission peer`.

### OwningMissionPeer
`public AgentBuildData OwningMissionPeer(MissionPeer missionPeer)`

**Purpose:** Handles logic related to `owning mission peer`.

### BodyProperties
`public AgentBuildData BodyProperties(BodyProperties bodyProperties)`

**Purpose:** Handles logic related to `body properties`.

### Age
`public AgentBuildData Age(int age)`

**Purpose:** Handles logic related to `age`.

### TroopOrigin
`public AgentBuildData TroopOrigin(IAgentOriginBase troopOrigin)`

**Purpose:** Handles logic related to `troop origin`.

### IsFemale
`public AgentBuildData IsFemale(bool isFemale)`

**Purpose:** Handles logic related to `is female`.

### Race
`public AgentBuildData Race(int race)`

**Purpose:** Handles logic related to `race`.

### MountKey
`public AgentBuildData MountKey(string mountKey)`

**Purpose:** Handles logic related to `mount key`.

### Index
`public AgentBuildData Index(int index)`

**Purpose:** Handles logic related to `index`.

### MountIndex
`public AgentBuildData MountIndex(int mountIndex)`

**Purpose:** Handles logic related to `mount index`.

### Banner
`public AgentBuildData Banner(Banner banner)`

**Purpose:** Handles logic related to `banner`.

### BannerItem
`public AgentBuildData BannerItem(ItemObject bannerItem)`

**Purpose:** Handles logic related to `banner item`.

### BannerReplacementWeaponItem
`public AgentBuildData BannerReplacementWeaponItem(ItemObject weaponItem)`

**Purpose:** Handles logic related to `banner replacement weapon item`.

### FormationTroopSpawnCount
`public AgentBuildData FormationTroopSpawnCount(int formationTroopCount)`

**Purpose:** Handles logic related to `formation troop spawn count`.

### FormationTroopSpawnIndex
`public AgentBuildData FormationTroopSpawnIndex(int formationTroopIndex)`

**Purpose:** Handles logic related to `formation troop spawn index`.

### CanSpawnOutsideOfMissionBoundary
`public AgentBuildData CanSpawnOutsideOfMissionBoundary(bool canSpawn)`

**Purpose:** Checks whether the current object can `spawn outside of mission boundary`.

## Usage Example

```csharp
var value = new AgentBuildData();
```

## See Also

- [Complete Class Catalog](../catalog)