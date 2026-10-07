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

A fluent builder that describes one agent to be spawned into a mission: who it is, what it carries, and where and on which side it appears. It splits its state in two. Placement and identity — team, formation, banner, indices, initial frame — are fields on the builder itself (`AgentBuildData.cs:224`-`AgentBuildData.cs:329`), while appearance and vitals are forwarded straight through to a nested `AgentData` object (`AgentBuildData.cs:14`) by roughly half the setters (`AgentBuildData.cs:372`, `AgentBuildData.cs:474`, `AgentBuildData.cs:565`, `AgentBuildData.cs:579`). It is consumed in exactly one place: `Mission.SpawnAgent(AgentBuildData, bool)` (`Mission.cs:3706`).

## Mental Model

Every public setter returns `this`, so a build is a single chained expression ending in the spawn call. There is a private parameterless constructor (`AgentBuildData.cs:342`) that supplies the defaults every build starts from — controller `AI` (`AgentBuildData.cs:344`), team `Team.Invalid` (`AgentBuildData.cs:345`), no formation, no mission peer, and spawn index `-1` (`AgentBuildData.cs:348`) — and the three public constructors all chain to it with `: this()` before choosing how the nested `AgentData` gets created: wrapping one you already have (`AgentBuildData.cs:352`), deriving one from an `IAgentOriginBase` (`AgentBuildData.cs:358`), or deriving one from a `BasicCharacterObject` (`AgentBuildData.cs:364`). The engine writes them exactly that way, for example `EquipmentTestMissionController.cs:15`. One property is derived rather than stored: `RandomizeColors` (`AgentBuildData.cs:333`) reports true only when the character is a non-hero with no mission peer (`AgentBuildData.cs:337`), which is how the engine keeps heroes in their authored colours while randomising everyone else's gear.

## How to use

**Getting one.** Construct it from a character, an origin, or an `AgentData`, chain the setters, and pass the result to `Mission.SpawnAgent` (`Mission.cs:3706`). Nobody caches or pools it — it is short-lived, built on the stack of whatever is spawning a reinforcement.

**Typical use.**

```csharp
// Same shape as the vanilla call at EquipmentTestMissionController.cs:15.
Agent spawned = mission.SpawnAgent(
    new AgentBuildData(Game.Current.PlayerTroop)   // ctor at AgentBuildData.cs:358
        .Team(mission.AttackerTeam)                 // AgentBuildData.cs:384
        .Formation(formation)                       // AgentBuildData.cs:451
        .Index(myIndex)                             // AgentBuildData.cs:598
        .NoHorses(true)                             // AgentBuildData.cs:493
        .CivilianEquipment(true)                    // AgentBuildData.cs:521
        .Controller(AgentControllerType.AI),        // AgentBuildData.cs:377
    false);                                         // spawnFromAgentVisuals
```

**Watch out.** `Equipment(Equipment)` (`AgentBuildData.cs:472`) writes into the nested `AgentData` (`AgentBuildData.cs:474`), and the constructor at `AgentBuildData.cs:352` stores the `AgentData` reference you hand it without copying it. Build two agents from the same `AgentData` instance, call `Equipment(...)` on the second, and the first agent spawns wearing the second's gear — the write went to the shared object, not to a per-builder copy. `Age`, `Race`, `IsFemale`, `MountKey`, `NoWeapons`, `NoArmor`, `BodyProperties` and `TroopOrigin` share the hazard. Separately, `Index(int)` (`AgentBuildData.cs:598`) also sets `AgentIndexOverriden` to true (`AgentBuildData.cs:601`), and `MountIndex(int)` does the same (`AgentBuildData.cs:611`) — once you call either, the engine stops auto-allocating that index and two builds given the same number collide.

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
| `RandomizeColors` | `public bool RandomizeColors { get; }` |

## Key Methods

### Character
`public AgentBuildData Character(BasicCharacterObject characterObject)`

**Purpose:** Executes the Character logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Character(characterObject);
```

### Controller
`public AgentBuildData Controller(AgentControllerType controller)`

**Purpose:** Executes the Controller logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Controller(controller);
```

### Team
`public AgentBuildData Team(Team team)`

**Purpose:** Executes the Team logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Team(team);
```

### IsReinforcement
`public AgentBuildData IsReinforcement(bool isReinforcement)`

**Purpose:** Determines whether the this instance is in the reinforcement state or condition.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.IsReinforcement(false);
```

### SpawnsIntoOwnFormation
`public AgentBuildData SpawnsIntoOwnFormation(bool spawnIntoOwnFormation)`

**Purpose:** Executes the SpawnsIntoOwnFormation logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.SpawnsIntoOwnFormation(false);
```

### SpawnsUsingOwnTroopClass
`public AgentBuildData SpawnsUsingOwnTroopClass(bool spawnUsingOwnTroopClass)`

**Purpose:** Executes the SpawnsUsingOwnTroopClass logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.SpawnsUsingOwnTroopClass(false);
```

### MakeUnitStandOutOfFormationDistance
`public AgentBuildData MakeUnitStandOutOfFormationDistance(float makeUnitStandOutDistance)`

**Purpose:** Executes the MakeUnitStandOutOfFormationDistance logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.MakeUnitStandOutOfFormationDistance(0);
```

### InitialPosition
`public AgentBuildData InitialPosition(in Vec3 position)`

**Purpose:** Prepares the resources, state, or bindings required by ial position.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.InitialPosition(position);
```

### InitialDirection
`public AgentBuildData InitialDirection(in Vec2 direction)`

**Purpose:** Prepares the resources, state, or bindings required by ial direction.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.InitialDirection(direction);
```

### InitialFrameFromSpawnPointEntity
`public AgentBuildData InitialFrameFromSpawnPointEntity(GameEntity entity)`

**Purpose:** Prepares the resources, state, or bindings required by ial frame from spawn point entity.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.InitialFrameFromSpawnPointEntity(entity);
```

### InitialFrameFromSpawnPointEntity
`public AgentBuildData InitialFrameFromSpawnPointEntity(WeakGameEntity entity)`

**Purpose:** Prepares the resources, state, or bindings required by ial frame from spawn point entity.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.InitialFrameFromSpawnPointEntity(entity);
```

### Formation
`public AgentBuildData Formation(Formation formation)`

**Purpose:** Formats ion into a string suitable for display or storage.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Formation(formation);
```

### Monster
`public AgentBuildData Monster(Monster monster)`

**Purpose:** Executes the Monster logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Monster(monster);
```

### VisualsIndex
`public AgentBuildData VisualsIndex(int index)`

**Purpose:** Executes the VisualsIndex logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.VisualsIndex(0);
```

### Equipment
`public AgentBuildData Equipment(Equipment equipment)`

**Purpose:** Executes the Equipment logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Equipment(equipment);
```

### MissionEquipment
`public AgentBuildData MissionEquipment(MissionEquipment missionEquipment)`

**Purpose:** Executes the MissionEquipment logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.MissionEquipment(missionEquipment);
```

### EquipmentSeed
`public AgentBuildData EquipmentSeed(int seed)`

**Purpose:** Executes the EquipmentSeed logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.EquipmentSeed(0);
```

### NoHorses
`public AgentBuildData NoHorses(bool noHorses)`

**Purpose:** Executes the NoHorses logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.NoHorses(false);
```

### NoWeapons
`public AgentBuildData NoWeapons(bool noWeapons)`

**Purpose:** Executes the NoWeapons logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.NoWeapons(false);
```

### NoArmor
`public AgentBuildData NoArmor(bool noArmor)`

**Purpose:** Executes the NoArmor logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.NoArmor(false);
```

### FixedEquipment
`public AgentBuildData FixedEquipment(bool fixedEquipment)`

**Purpose:** Executes the FixedEquipment logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.FixedEquipment(false);
```

### CivilianEquipment
`public AgentBuildData CivilianEquipment(bool civilianEquipment)`

**Purpose:** Executes the CivilianEquipment logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.CivilianEquipment(false);
```

### ClothingColor1
`public AgentBuildData ClothingColor1(uint color)`

**Purpose:** Executes the ClothingColor1 logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.ClothingColor1(0);
```

### ClothingColor2
`public AgentBuildData ClothingColor2(uint color)`

**Purpose:** Executes the ClothingColor2 logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.ClothingColor2(0);
```

### MissionPeer
`public AgentBuildData MissionPeer(MissionPeer missionPeer)`

**Purpose:** Executes the MissionPeer logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.MissionPeer(missionPeer);
```

### OwningMissionPeer
`public AgentBuildData OwningMissionPeer(MissionPeer missionPeer)`

**Purpose:** Executes the OwningMissionPeer logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.OwningMissionPeer(missionPeer);
```

### BodyProperties
`public AgentBuildData BodyProperties(BodyProperties bodyProperties)`

**Purpose:** Executes the BodyProperties logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.BodyProperties(bodyProperties);
```

### Age
`public AgentBuildData Age(int age)`

**Purpose:** Executes the Age logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Age(0);
```

### TroopOrigin
`public AgentBuildData TroopOrigin(IAgentOriginBase troopOrigin)`

**Purpose:** Executes the TroopOrigin logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.TroopOrigin(troopOrigin);
```

### IsFemale
`public AgentBuildData IsFemale(bool isFemale)`

**Purpose:** Determines whether the this instance is in the female state or condition.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.IsFemale(false);
```

### Race
`public AgentBuildData Race(int race)`

**Purpose:** Executes the Race logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Race(0);
```

### MountKey
`public AgentBuildData MountKey(string mountKey)`

**Purpose:** Executes the MountKey logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.MountKey("example");
```

### Index
`public AgentBuildData Index(int index)`

**Purpose:** Executes the Index logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Index(0);
```

### MountIndex
`public AgentBuildData MountIndex(int mountIndex)`

**Purpose:** Executes the MountIndex logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.MountIndex(0);
```

### Banner
`public AgentBuildData Banner(Banner banner)`

**Purpose:** Executes the Banner logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Banner(banner);
```

### BannerItem
`public AgentBuildData BannerItem(ItemObject bannerItem)`

**Purpose:** Executes the BannerItem logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.BannerItem(bannerItem);
```

### BannerReplacementWeaponItem
`public AgentBuildData BannerReplacementWeaponItem(ItemObject weaponItem)`

**Purpose:** Executes the BannerReplacementWeaponItem logic.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.BannerReplacementWeaponItem(weaponItem);
```

### FormationTroopSpawnCount
`public AgentBuildData FormationTroopSpawnCount(int formationTroopCount)`

**Purpose:** Formats ion troop spawn count into a string suitable for display or storage.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.FormationTroopSpawnCount(0);
```

### FormationTroopSpawnIndex
`public AgentBuildData FormationTroopSpawnIndex(int formationTroopIndex)`

**Purpose:** Formats ion troop spawn index into a string suitable for display or storage.

```csharp
// Obtain an instance of AgentBuildData from the subsystem API first
AgentBuildData agentBuildData = ...;
var result = agentBuildData.FormationTroopSpawnIndex(0);
```

### CanSpawnOutsideOfMissionBoundary
`public AgentBuildData CanSpawnOutsideOfMissionBoundary(bool canSpawn)`

**Purpose:** Checks whether the this instance meets the preconditions for spawn outside of mission boundary.

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
- [AgentData](../../core-extra/AgentData)
- [MissionPeer](../MissionPeer)