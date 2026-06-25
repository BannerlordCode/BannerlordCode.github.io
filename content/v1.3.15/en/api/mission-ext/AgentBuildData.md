---
title: "AgentBuildData"
description: "Auto-generated class reference for AgentBuildData."
---
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

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Character(characterObject);
```

### Controller
`public AgentBuildData Controller(AgentControllerType controller)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Controller(controller);
```

### Team
`public AgentBuildData Team(Team team)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Team(team);
```

### IsReinforcement
`public AgentBuildData IsReinforcement(bool isReinforcement)`

**Purpose:** Determines whether the current object is in the `reinforcement` state or condition.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.IsReinforcement(false);
```

### SpawnsIntoOwnFormation
`public AgentBuildData SpawnsIntoOwnFormation(bool spawnIntoOwnFormation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.SpawnsIntoOwnFormation(false);
```

### SpawnsUsingOwnTroopClass
`public AgentBuildData SpawnsUsingOwnTroopClass(bool spawnUsingOwnTroopClass)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.SpawnsUsingOwnTroopClass(false);
```

### MakeUnitStandOutOfFormationDistance
`public AgentBuildData MakeUnitStandOutOfFormationDistance(float makeUnitStandOutDistance)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.MakeUnitStandOutOfFormationDistance(0);
```

### InitialPosition
`public AgentBuildData InitialPosition(in Vec3 position)`

**Purpose:** Prepares the resources, state, or bindings required by `ial position`.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.InitialPosition(position);
```

### InitialDirection
`public AgentBuildData InitialDirection(in Vec2 direction)`

**Purpose:** Prepares the resources, state, or bindings required by `ial direction`.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.InitialDirection(direction);
```

### InitialFrameFromSpawnPointEntity
`public AgentBuildData InitialFrameFromSpawnPointEntity(GameEntity entity)`

**Purpose:** Prepares the resources, state, or bindings required by `ial frame from spawn point entity`.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.InitialFrameFromSpawnPointEntity(entity);
```

### InitialFrameFromSpawnPointEntity
`public AgentBuildData InitialFrameFromSpawnPointEntity(WeakGameEntity entity)`

**Purpose:** Prepares the resources, state, or bindings required by `ial frame from spawn point entity`.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.InitialFrameFromSpawnPointEntity(entity);
```

### Formation
`public AgentBuildData Formation(Formation formation)`

**Purpose:** Formats `ion` into a string suitable for display or storage.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Formation(formation);
```

### Monster
`public AgentBuildData Monster(Monster monster)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Monster(monster);
```

### VisualsIndex
`public AgentBuildData VisualsIndex(int index)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.VisualsIndex(0);
```

### Equipment
`public AgentBuildData Equipment(Equipment equipment)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Equipment(equipment);
```

### MissionEquipment
`public AgentBuildData MissionEquipment(MissionEquipment missionEquipment)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.MissionEquipment(missionEquipment);
```

### EquipmentSeed
`public AgentBuildData EquipmentSeed(int seed)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.EquipmentSeed(0);
```

### NoHorses
`public AgentBuildData NoHorses(bool noHorses)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.NoHorses(false);
```

### NoWeapons
`public AgentBuildData NoWeapons(bool noWeapons)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.NoWeapons(false);
```

### NoArmor
`public AgentBuildData NoArmor(bool noArmor)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.NoArmor(false);
```

### FixedEquipment
`public AgentBuildData FixedEquipment(bool fixedEquipment)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.FixedEquipment(false);
```

### CivilianEquipment
`public AgentBuildData CivilianEquipment(bool civilianEquipment)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.CivilianEquipment(false);
```

### SetPrepareImmediately
`public AgentBuildData SetPrepareImmediately()`

**Purpose:** Assigns a new value to `prepare immediately` and updates the object's internal state.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.SetPrepareImmediately();
```

### ClothingColor1
`public AgentBuildData ClothingColor1(uint color)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.ClothingColor1(0);
```

### ClothingColor2
`public AgentBuildData ClothingColor2(uint color)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.ClothingColor2(0);
```

### MissionPeer
`public AgentBuildData MissionPeer(MissionPeer missionPeer)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.MissionPeer(missionPeer);
```

### OwningMissionPeer
`public AgentBuildData OwningMissionPeer(MissionPeer missionPeer)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.OwningMissionPeer(missionPeer);
```

### BodyProperties
`public AgentBuildData BodyProperties(BodyProperties bodyProperties)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.BodyProperties(bodyProperties);
```

### Age
`public AgentBuildData Age(int age)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Age(0);
```

### TroopOrigin
`public AgentBuildData TroopOrigin(IAgentOriginBase troopOrigin)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.TroopOrigin(troopOrigin);
```

### IsFemale
`public AgentBuildData IsFemale(bool isFemale)`

**Purpose:** Determines whether the current object is in the `female` state or condition.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.IsFemale(false);
```

### Race
`public AgentBuildData Race(int race)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Race(0);
```

### MountKey
`public AgentBuildData MountKey(string mountKey)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.MountKey("example");
```

### Index
`public AgentBuildData Index(int index)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Index(0);
```

### MountIndex
`public AgentBuildData MountIndex(int mountIndex)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.MountIndex(0);
```

### Banner
`public AgentBuildData Banner(Banner banner)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Banner(banner);
```

### BannerItem
`public AgentBuildData BannerItem(ItemObject bannerItem)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.BannerItem(bannerItem);
```

### BannerReplacementWeaponItem
`public AgentBuildData BannerReplacementWeaponItem(ItemObject weaponItem)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.BannerReplacementWeaponItem(weaponItem);
```

### FormationTroopSpawnCount
`public AgentBuildData FormationTroopSpawnCount(int formationTroopCount)`

**Purpose:** Formats `ion troop spawn count` into a string suitable for display or storage.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.FormationTroopSpawnCount(0);
```

### FormationTroopSpawnIndex
`public AgentBuildData FormationTroopSpawnIndex(int formationTroopIndex)`

**Purpose:** Formats `ion troop spawn index` into a string suitable for display or storage.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.FormationTroopSpawnIndex(0);
```

### CanSpawnOutsideOfMissionBoundary
`public AgentBuildData CanSpawnOutsideOfMissionBoundary(bool canSpawn)`

**Purpose:** Checks whether the current object meets the preconditions for `spawn outside of mission boundary`.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.CanSpawnOutsideOfMissionBoundary(false);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
AgentBuildData entry = ...;
```

## See Also

- [Area Index](../)