<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentBuildData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentBuildData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentBuildData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/AgentBuildData.cs`

## 概述

`AgentBuildData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `AgentBuildData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

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

## 主要方法

### Character
`public AgentBuildData Character(BasicCharacterObject characterObject)`

**用途 / Purpose:** 处理 `character` 相关逻辑。

### Controller
`public AgentBuildData Controller(AgentControllerType controller)`

**用途 / Purpose:** 处理 `controller` 相关逻辑。

### Team
`public AgentBuildData Team(Team team)`

**用途 / Purpose:** 处理 `team` 相关逻辑。

### IsReinforcement
`public AgentBuildData IsReinforcement(bool isReinforcement)`

**用途 / Purpose:** 处理 `is reinforcement` 相关逻辑。

### SpawnsIntoOwnFormation
`public AgentBuildData SpawnsIntoOwnFormation(bool spawnIntoOwnFormation)`

**用途 / Purpose:** 处理 `spawns into own formation` 相关逻辑。

### SpawnsUsingOwnTroopClass
`public AgentBuildData SpawnsUsingOwnTroopClass(bool spawnUsingOwnTroopClass)`

**用途 / Purpose:** 处理 `spawns using own troop class` 相关逻辑。

### MakeUnitStandOutOfFormationDistance
`public AgentBuildData MakeUnitStandOutOfFormationDistance(float makeUnitStandOutDistance)`

**用途 / Purpose:** 处理 `make unit stand out of formation distance` 相关逻辑。

### InitialPosition
`public AgentBuildData InitialPosition(in Vec3 position)`

**用途 / Purpose:** 初始化 `ial position` 的状态、资源或绑定。

### InitialDirection
`public AgentBuildData InitialDirection(in Vec2 direction)`

**用途 / Purpose:** 初始化 `ial direction` 的状态、资源或绑定。

### InitialFrameFromSpawnPointEntity
`public AgentBuildData InitialFrameFromSpawnPointEntity(GameEntity entity)`

**用途 / Purpose:** 初始化 `ial frame from spawn point entity` 的状态、资源或绑定。

### InitialFrameFromSpawnPointEntity
`public AgentBuildData InitialFrameFromSpawnPointEntity(WeakGameEntity entity)`

**用途 / Purpose:** 初始化 `ial frame from spawn point entity` 的状态、资源或绑定。

### Formation
`public AgentBuildData Formation(Formation formation)`

**用途 / Purpose:** 处理 `formation` 相关逻辑。

### Monster
`public AgentBuildData Monster(Monster monster)`

**用途 / Purpose:** 处理 `monster` 相关逻辑。

### VisualsIndex
`public AgentBuildData VisualsIndex(int index)`

**用途 / Purpose:** 处理 `visuals index` 相关逻辑。

### Equipment
`public AgentBuildData Equipment(Equipment equipment)`

**用途 / Purpose:** 处理 `equipment` 相关逻辑。

### MissionEquipment
`public AgentBuildData MissionEquipment(MissionEquipment missionEquipment)`

**用途 / Purpose:** 处理 `mission equipment` 相关逻辑。

### EquipmentSeed
`public AgentBuildData EquipmentSeed(int seed)`

**用途 / Purpose:** 处理 `equipment seed` 相关逻辑。

### NoHorses
`public AgentBuildData NoHorses(bool noHorses)`

**用途 / Purpose:** 处理 `no horses` 相关逻辑。

### NoWeapons
`public AgentBuildData NoWeapons(bool noWeapons)`

**用途 / Purpose:** 处理 `no weapons` 相关逻辑。

### NoArmor
`public AgentBuildData NoArmor(bool noArmor)`

**用途 / Purpose:** 处理 `no armor` 相关逻辑。

### FixedEquipment
`public AgentBuildData FixedEquipment(bool fixedEquipment)`

**用途 / Purpose:** 处理 `fixed equipment` 相关逻辑。

### CivilianEquipment
`public AgentBuildData CivilianEquipment(bool civilianEquipment)`

**用途 / Purpose:** 处理 `civilian equipment` 相关逻辑。

### SetPrepareImmediately
`public AgentBuildData SetPrepareImmediately()`

**用途 / Purpose:** 设置 `prepare immediately` 的值或状态。

### ClothingColor1
`public AgentBuildData ClothingColor1(uint color)`

**用途 / Purpose:** 处理 `clothing color1` 相关逻辑。

### ClothingColor2
`public AgentBuildData ClothingColor2(uint color)`

**用途 / Purpose:** 处理 `clothing color2` 相关逻辑。

### MissionPeer
`public AgentBuildData MissionPeer(MissionPeer missionPeer)`

**用途 / Purpose:** 处理 `mission peer` 相关逻辑。

### OwningMissionPeer
`public AgentBuildData OwningMissionPeer(MissionPeer missionPeer)`

**用途 / Purpose:** 处理 `owning mission peer` 相关逻辑。

### BodyProperties
`public AgentBuildData BodyProperties(BodyProperties bodyProperties)`

**用途 / Purpose:** 处理 `body properties` 相关逻辑。

### Age
`public AgentBuildData Age(int age)`

**用途 / Purpose:** 处理 `age` 相关逻辑。

### TroopOrigin
`public AgentBuildData TroopOrigin(IAgentOriginBase troopOrigin)`

**用途 / Purpose:** 处理 `troop origin` 相关逻辑。

### IsFemale
`public AgentBuildData IsFemale(bool isFemale)`

**用途 / Purpose:** 处理 `is female` 相关逻辑。

### Race
`public AgentBuildData Race(int race)`

**用途 / Purpose:** 处理 `race` 相关逻辑。

### MountKey
`public AgentBuildData MountKey(string mountKey)`

**用途 / Purpose:** 处理 `mount key` 相关逻辑。

### Index
`public AgentBuildData Index(int index)`

**用途 / Purpose:** 处理 `index` 相关逻辑。

### MountIndex
`public AgentBuildData MountIndex(int mountIndex)`

**用途 / Purpose:** 处理 `mount index` 相关逻辑。

### Banner
`public AgentBuildData Banner(Banner banner)`

**用途 / Purpose:** 处理 `banner` 相关逻辑。

### BannerItem
`public AgentBuildData BannerItem(ItemObject bannerItem)`

**用途 / Purpose:** 处理 `banner item` 相关逻辑。

### BannerReplacementWeaponItem
`public AgentBuildData BannerReplacementWeaponItem(ItemObject weaponItem)`

**用途 / Purpose:** 处理 `banner replacement weapon item` 相关逻辑。

### FormationTroopSpawnCount
`public AgentBuildData FormationTroopSpawnCount(int formationTroopCount)`

**用途 / Purpose:** 处理 `formation troop spawn count` 相关逻辑。

### FormationTroopSpawnIndex
`public AgentBuildData FormationTroopSpawnIndex(int formationTroopIndex)`

**用途 / Purpose:** 处理 `formation troop spawn index` 相关逻辑。

### CanSpawnOutsideOfMissionBoundary
`public AgentBuildData CanSpawnOutsideOfMissionBoundary(bool canSpawn)`

**用途 / Purpose:** 判断当前对象是否可以执行 `spawn outside of mission boundary`。

## 使用示例

```csharp
var value = new AgentBuildData();
```

## 参见

- [完整类目录](../catalog)