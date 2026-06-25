---
title: "AgentBuildData"
description: "AgentBuildData 的自动生成类参考。"
---
# AgentBuildData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentBuildData`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentBuildData.cs`

## 概述

`AgentBuildData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `AgentBuildData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

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

## 主要方法

### Character
`public AgentBuildData Character(BasicCharacterObject characterObject)`

**用途 / Purpose:** 处理与 「character」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Character(characterObject);
```

### Controller
`public AgentBuildData Controller(AgentControllerType controller)`

**用途 / Purpose:** 处理与 「controller」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Controller(controller);
```

### Team
`public AgentBuildData Team(Team team)`

**用途 / Purpose:** 处理与 「team」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Team(team);
```

### IsReinforcement
`public AgentBuildData IsReinforcement(bool isReinforcement)`

**用途 / Purpose:** 判断当前对象是否处于 「reinforcement」 状态或条件。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.IsReinforcement(false);
```

### SpawnsIntoOwnFormation
`public AgentBuildData SpawnsIntoOwnFormation(bool spawnIntoOwnFormation)`

**用途 / Purpose:** 处理与 「spawns into own formation」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.SpawnsIntoOwnFormation(false);
```

### SpawnsUsingOwnTroopClass
`public AgentBuildData SpawnsUsingOwnTroopClass(bool spawnUsingOwnTroopClass)`

**用途 / Purpose:** 处理与 「spawns using own troop class」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.SpawnsUsingOwnTroopClass(false);
```

### MakeUnitStandOutOfFormationDistance
`public AgentBuildData MakeUnitStandOutOfFormationDistance(float makeUnitStandOutDistance)`

**用途 / Purpose:** 处理与 「make unit stand out of formation distance」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.MakeUnitStandOutOfFormationDistance(0);
```

### InitialPosition
`public AgentBuildData InitialPosition(in Vec3 position)`

**用途 / Purpose:** 为 「ial position」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.InitialPosition(position);
```

### InitialDirection
`public AgentBuildData InitialDirection(in Vec2 direction)`

**用途 / Purpose:** 为 「ial direction」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.InitialDirection(direction);
```

### InitialFrameFromSpawnPointEntity
`public AgentBuildData InitialFrameFromSpawnPointEntity(GameEntity entity)`

**用途 / Purpose:** 为 「ial frame from spawn point entity」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.InitialFrameFromSpawnPointEntity(entity);
```

### InitialFrameFromSpawnPointEntity
`public AgentBuildData InitialFrameFromSpawnPointEntity(WeakGameEntity entity)`

**用途 / Purpose:** 为 「ial frame from spawn point entity」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.InitialFrameFromSpawnPointEntity(entity);
```

### Formation
`public AgentBuildData Formation(Formation formation)`

**用途 / Purpose:** 将「ion」格式化为适合显示或存储的字符串。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Formation(formation);
```

### Monster
`public AgentBuildData Monster(Monster monster)`

**用途 / Purpose:** 处理与 「monster」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Monster(monster);
```

### VisualsIndex
`public AgentBuildData VisualsIndex(int index)`

**用途 / Purpose:** 处理与 「visuals index」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.VisualsIndex(0);
```

### Equipment
`public AgentBuildData Equipment(Equipment equipment)`

**用途 / Purpose:** 处理与 「equipment」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Equipment(equipment);
```

### MissionEquipment
`public AgentBuildData MissionEquipment(MissionEquipment missionEquipment)`

**用途 / Purpose:** 处理与 「mission equipment」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.MissionEquipment(missionEquipment);
```

### EquipmentSeed
`public AgentBuildData EquipmentSeed(int seed)`

**用途 / Purpose:** 处理与 「equipment seed」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.EquipmentSeed(0);
```

### NoHorses
`public AgentBuildData NoHorses(bool noHorses)`

**用途 / Purpose:** 处理与 「no horses」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.NoHorses(false);
```

### NoWeapons
`public AgentBuildData NoWeapons(bool noWeapons)`

**用途 / Purpose:** 处理与 「no weapons」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.NoWeapons(false);
```

### NoArmor
`public AgentBuildData NoArmor(bool noArmor)`

**用途 / Purpose:** 处理与 「no armor」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.NoArmor(false);
```

### FixedEquipment
`public AgentBuildData FixedEquipment(bool fixedEquipment)`

**用途 / Purpose:** 处理与 「fixed equipment」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.FixedEquipment(false);
```

### CivilianEquipment
`public AgentBuildData CivilianEquipment(bool civilianEquipment)`

**用途 / Purpose:** 处理与 「civilian equipment」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.CivilianEquipment(false);
```

### SetPrepareImmediately
`public AgentBuildData SetPrepareImmediately()`

**用途 / Purpose:** 为 「prepare immediately」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.SetPrepareImmediately();
```

### ClothingColor1
`public AgentBuildData ClothingColor1(uint color)`

**用途 / Purpose:** 处理与 「clothing color1」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.ClothingColor1(0);
```

### ClothingColor2
`public AgentBuildData ClothingColor2(uint color)`

**用途 / Purpose:** 处理与 「clothing color2」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.ClothingColor2(0);
```

### MissionPeer
`public AgentBuildData MissionPeer(MissionPeer missionPeer)`

**用途 / Purpose:** 处理与 「mission peer」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.MissionPeer(missionPeer);
```

### OwningMissionPeer
`public AgentBuildData OwningMissionPeer(MissionPeer missionPeer)`

**用途 / Purpose:** 处理与 「owning mission peer」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.OwningMissionPeer(missionPeer);
```

### BodyProperties
`public AgentBuildData BodyProperties(BodyProperties bodyProperties)`

**用途 / Purpose:** 处理与 「body properties」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.BodyProperties(bodyProperties);
```

### Age
`public AgentBuildData Age(int age)`

**用途 / Purpose:** 处理与 「age」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Age(0);
```

### TroopOrigin
`public AgentBuildData TroopOrigin(IAgentOriginBase troopOrigin)`

**用途 / Purpose:** 处理与 「troop origin」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.TroopOrigin(troopOrigin);
```

### IsFemale
`public AgentBuildData IsFemale(bool isFemale)`

**用途 / Purpose:** 判断当前对象是否处于 「female」 状态或条件。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.IsFemale(false);
```

### Race
`public AgentBuildData Race(int race)`

**用途 / Purpose:** 处理与 「race」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Race(0);
```

### MountKey
`public AgentBuildData MountKey(string mountKey)`

**用途 / Purpose:** 处理与 「mount key」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.MountKey("example");
```

### Index
`public AgentBuildData Index(int index)`

**用途 / Purpose:** 处理与 「index」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Index(0);
```

### MountIndex
`public AgentBuildData MountIndex(int mountIndex)`

**用途 / Purpose:** 处理与 「mount index」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.MountIndex(0);
```

### Banner
`public AgentBuildData Banner(Banner banner)`

**用途 / Purpose:** 处理与 「banner」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.Banner(banner);
```

### BannerItem
`public AgentBuildData BannerItem(ItemObject bannerItem)`

**用途 / Purpose:** 处理与 「banner item」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.BannerItem(bannerItem);
```

### BannerReplacementWeaponItem
`public AgentBuildData BannerReplacementWeaponItem(ItemObject weaponItem)`

**用途 / Purpose:** 处理与 「banner replacement weapon item」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.BannerReplacementWeaponItem(weaponItem);
```

### FormationTroopSpawnCount
`public AgentBuildData FormationTroopSpawnCount(int formationTroopCount)`

**用途 / Purpose:** 将「ion troop spawn count」格式化为适合显示或存储的字符串。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.FormationTroopSpawnCount(0);
```

### FormationTroopSpawnIndex
`public AgentBuildData FormationTroopSpawnIndex(int formationTroopIndex)`

**用途 / Purpose:** 将「ion troop spawn index」格式化为适合显示或存储的字符串。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.FormationTroopSpawnIndex(0);
```

### CanSpawnOutsideOfMissionBoundary
`public AgentBuildData CanSpawnOutsideOfMissionBoundary(bool canSpawn)`

**用途 / Purpose:** 检查当前对象是否满足 「spawn outside of mission boundary」 的前置条件。

```csharp
// 先通过子系统 API 拿到 AgentBuildData 实例
AgentBuildData agentBuildData = ...;
var result = agentBuildData.CanSpawnOutsideOfMissionBoundary(false);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
AgentBuildData entry = ...;
```

## 参见

- [本区域目录](../)