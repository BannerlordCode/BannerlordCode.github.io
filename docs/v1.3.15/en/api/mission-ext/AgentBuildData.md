<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentBuildData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentBuildData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentBuildData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/AgentBuildData.cs`

## Overview

`AgentBuildData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

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

## Key Methods

### Character
```csharp
public AgentBuildData Character(BasicCharacterObject characterObject)
```

### Controller
```csharp
public AgentBuildData Controller(AgentControllerType controller)
```

### Team
```csharp
public AgentBuildData Team(Team team)
```

### IsReinforcement
```csharp
public AgentBuildData IsReinforcement(bool isReinforcement)
```

### SpawnsIntoOwnFormation
```csharp
public AgentBuildData SpawnsIntoOwnFormation(bool spawnIntoOwnFormation)
```

### SpawnsUsingOwnTroopClass
```csharp
public AgentBuildData SpawnsUsingOwnTroopClass(bool spawnUsingOwnTroopClass)
```

### MakeUnitStandOutOfFormationDistance
```csharp
public AgentBuildData MakeUnitStandOutOfFormationDistance(float makeUnitStandOutDistance)
```

### InitialPosition
```csharp
public AgentBuildData InitialPosition(in Vec3 position)
```

### InitialDirection
```csharp
public AgentBuildData InitialDirection(in Vec2 direction)
```

### InitialFrameFromSpawnPointEntity
```csharp
public AgentBuildData InitialFrameFromSpawnPointEntity(GameEntity entity)
```

### InitialFrameFromSpawnPointEntity
```csharp
public AgentBuildData InitialFrameFromSpawnPointEntity(WeakGameEntity entity)
```

### Formation
```csharp
public AgentBuildData Formation(Formation formation)
```

### Monster
```csharp
public AgentBuildData Monster(Monster monster)
```

### VisualsIndex
```csharp
public AgentBuildData VisualsIndex(int index)
```

### Equipment
```csharp
public AgentBuildData Equipment(Equipment equipment)
```

### MissionEquipment
```csharp
public AgentBuildData MissionEquipment(MissionEquipment missionEquipment)
```

### EquipmentSeed
```csharp
public AgentBuildData EquipmentSeed(int seed)
```

### NoHorses
```csharp
public AgentBuildData NoHorses(bool noHorses)
```

### NoWeapons
```csharp
public AgentBuildData NoWeapons(bool noWeapons)
```

### NoArmor
```csharp
public AgentBuildData NoArmor(bool noArmor)
```

### FixedEquipment
```csharp
public AgentBuildData FixedEquipment(bool fixedEquipment)
```

### CivilianEquipment
```csharp
public AgentBuildData CivilianEquipment(bool civilianEquipment)
```

### SetPrepareImmediately
```csharp
public AgentBuildData SetPrepareImmediately()
```

### ClothingColor1
```csharp
public AgentBuildData ClothingColor1(uint color)
```

### ClothingColor2
```csharp
public AgentBuildData ClothingColor2(uint color)
```

### MissionPeer
```csharp
public AgentBuildData MissionPeer(MissionPeer missionPeer)
```

### OwningMissionPeer
```csharp
public AgentBuildData OwningMissionPeer(MissionPeer missionPeer)
```

### BodyProperties
```csharp
public AgentBuildData BodyProperties(BodyProperties bodyProperties)
```

### Age
```csharp
public AgentBuildData Age(int age)
```

### TroopOrigin
```csharp
public AgentBuildData TroopOrigin(IAgentOriginBase troopOrigin)
```

## Usage Example

```csharp
// Typical usage of AgentBuildData (Data)
new AgentBuildData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)