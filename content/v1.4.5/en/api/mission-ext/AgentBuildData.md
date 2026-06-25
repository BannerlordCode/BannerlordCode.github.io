---
title: "AgentBuildData"
description: "Auto-generated class reference for AgentBuildData."
---
# AgentBuildData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentBuildData`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentBuildData.cs`

## Overview

`AgentBuildData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `AgentBuildData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AgentData` | `public AgentData AgentData { get; }` |
| `AgentOverridenSpawnMissionEquipment` | `public MissionEquipment AgentOverridenSpawnMissionEquipment { get; }` |
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

**Purpose:** **Purpose:** Executes the Character logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Character(characterObject);
```

### Controller
`public AgentBuildData Controller(AgentControllerType controller)`

**Purpose:** **Purpose:** Executes the Controller logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Controller(controller);
```

### Team
`public AgentBuildData Team(Team team)`

**Purpose:** **Purpose:** Executes the Team logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Team(team);
```

### IsReinforcement
`public AgentBuildData IsReinforcement(bool isReinforcement)`

**Purpose:** **Purpose:** Determines whether the this instance is in the reinforcement state or condition.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.IsReinforcement(false);
```

### SpawnsIntoOwnFormation
`public AgentBuildData SpawnsIntoOwnFormation(bool spawnIntoOwnFormation)`

**Purpose:** **Purpose:** Executes the SpawnsIntoOwnFormation logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.SpawnsIntoOwnFormation(false);
```

### SpawnsUsingOwnTroopClass
`public AgentBuildData SpawnsUsingOwnTroopClass(bool spawnUsingOwnTroopClass)`

**Purpose:** **Purpose:** Executes the SpawnsUsingOwnTroopClass logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.SpawnsUsingOwnTroopClass(false);
```

### MakeUnitStandOutOfFormationDistance
`public AgentBuildData MakeUnitStandOutOfFormationDistance(float makeUnitStandOutDistance)`

**Purpose:** **Purpose:** Executes the MakeUnitStandOutOfFormationDistance logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.MakeUnitStandOutOfFormationDistance(0);
```

### InitialPosition
`public AgentBuildData InitialPosition(in Vec3 position)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by ial position.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.InitialPosition(position);
```

### InitialDirection
`public AgentBuildData InitialDirection(in Vec2 direction)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by ial direction.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.InitialDirection(direction);
```

### InitialFrameFromSpawnPointEntity
`public AgentBuildData InitialFrameFromSpawnPointEntity(GameEntity entity)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by ial frame from spawn point entity.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.InitialFrameFromSpawnPointEntity(entity);
```

### InitialFrameFromSpawnPointEntity
`public AgentBuildData InitialFrameFromSpawnPointEntity(WeakGameEntity entity)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by ial frame from spawn point entity.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.InitialFrameFromSpawnPointEntity(entity);
```

### Formation
`public AgentBuildData Formation(Formation formation)`

**Purpose:** **Purpose:** Formats ion into a string suitable for display or storage.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Formation(formation);
```

### Monster
`public AgentBuildData Monster(Monster monster)`

**Purpose:** **Purpose:** Executes the Monster logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Monster(monster);
```

### VisualsIndex
`public AgentBuildData VisualsIndex(int index)`

**Purpose:** **Purpose:** Executes the VisualsIndex logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.VisualsIndex(0);
```

### Equipment
`public AgentBuildData Equipment(Equipment equipment)`

**Purpose:** **Purpose:** Executes the Equipment logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Equipment(equipment);
```

### MissionEquipment
`public AgentBuildData MissionEquipment(MissionEquipment missionEquipment)`

**Purpose:** **Purpose:** Executes the MissionEquipment logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.MissionEquipment(missionEquipment);
```

### EquipmentSeed
`public AgentBuildData EquipmentSeed(int seed)`

**Purpose:** **Purpose:** Executes the EquipmentSeed logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.EquipmentSeed(0);
```

### NoHorses
`public AgentBuildData NoHorses(bool noHorses)`

**Purpose:** **Purpose:** Executes the NoHorses logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.NoHorses(false);
```

### NoWeapons
`public AgentBuildData NoWeapons(bool noWeapons)`

**Purpose:** **Purpose:** Executes the NoWeapons logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.NoWeapons(false);
```

### NoArmor
`public AgentBuildData NoArmor(bool noArmor)`

**Purpose:** **Purpose:** Executes the NoArmor logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.NoArmor(false);
```

### FixedEquipment
`public AgentBuildData FixedEquipment(bool fixedEquipment)`

**Purpose:** **Purpose:** Executes the FixedEquipment logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.FixedEquipment(false);
```

### CivilianEquipment
`public AgentBuildData CivilianEquipment(bool civilianEquipment)`

**Purpose:** **Purpose:** Executes the CivilianEquipment logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.CivilianEquipment(false);
```

### SetPrepareImmediately
`public AgentBuildData SetPrepareImmediately()`

**Purpose:** **Purpose:** Assigns a new value to prepare immediately and updates the object's internal state.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.SetPrepareImmediately();
```

### ClothingColor1
`public AgentBuildData ClothingColor1(uint color)`

**Purpose:** **Purpose:** Executes the ClothingColor1 logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.ClothingColor1(0);
```

### ClothingColor2
`public AgentBuildData ClothingColor2(uint color)`

**Purpose:** **Purpose:** Executes the ClothingColor2 logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.ClothingColor2(0);
```

### MissionPeer
`public AgentBuildData MissionPeer(MissionPeer missionPeer)`

**Purpose:** **Purpose:** Executes the MissionPeer logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.MissionPeer(missionPeer);
```

### OwningMissionPeer
`public AgentBuildData OwningMissionPeer(MissionPeer missionPeer)`

**Purpose:** **Purpose:** Executes the OwningMissionPeer logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.OwningMissionPeer(missionPeer);
```

### BodyProperties
`public AgentBuildData BodyProperties(BodyProperties bodyProperties)`

**Purpose:** **Purpose:** Executes the BodyProperties logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.BodyProperties(bodyProperties);
```

### Age
`public AgentBuildData Age(int age)`

**Purpose:** **Purpose:** Executes the Age logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Age(0);
```

### TroopOrigin
`public AgentBuildData TroopOrigin(IAgentOriginBase troopOrigin)`

**Purpose:** **Purpose:** Executes the TroopOrigin logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.TroopOrigin(troopOrigin);
```

### IsFemale
`public AgentBuildData IsFemale(bool isFemale)`

**Purpose:** **Purpose:** Determines whether the this instance is in the female state or condition.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.IsFemale(false);
```

### Race
`public AgentBuildData Race(int race)`

**Purpose:** **Purpose:** Executes the Race logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Race(0);
```

### MountKey
`public AgentBuildData MountKey(string mountKey)`

**Purpose:** **Purpose:** Executes the MountKey logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.MountKey("example");
```

### Index
`public AgentBuildData Index(int index)`

**Purpose:** **Purpose:** Executes the Index logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Index(0);
```

### MountIndex
`public AgentBuildData MountIndex(int mountIndex)`

**Purpose:** **Purpose:** Executes the MountIndex logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.MountIndex(0);
```

### Banner
`public AgentBuildData Banner(Banner banner)`

**Purpose:** **Purpose:** Executes the Banner logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Banner(banner);
```

### BannerItem
`public AgentBuildData BannerItem(ItemObject bannerItem)`

**Purpose:** **Purpose:** Executes the BannerItem logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.BannerItem(bannerItem);
```

### BannerReplacementWeaponItem
`public AgentBuildData BannerReplacementWeaponItem(ItemObject weaponItem)`

**Purpose:** **Purpose:** Executes the BannerReplacementWeaponItem logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.BannerReplacementWeaponItem(weaponItem);
```

### FormationTroopSpawnCount
`public AgentBuildData FormationTroopSpawnCount(int formationTroopCount)`

**Purpose:** **Purpose:** Formats ion troop spawn count into a string suitable for display or storage.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.FormationTroopSpawnCount(0);
```

### FormationTroopSpawnIndex
`public AgentBuildData FormationTroopSpawnIndex(int formationTroopIndex)`

**Purpose:** **Purpose:** Formats ion troop spawn index into a string suitable for display or storage.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.FormationTroopSpawnIndex(0);
```

### CanSpawnOutsideOfMissionBoundary
`public AgentBuildData CanSpawnOutsideOfMissionBoundary(bool canSpawn)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for spawn outside of mission boundary.

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