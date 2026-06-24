<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPHeroClassGroup`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPHeroClassGroup

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class MPHeroClassGroup`
**领域:** mission-ext

## 概述

`MPHeroClassGroup` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MultiplayerHeroClassGroups` | `public static List<MultiplayerClassDivisions.MPHeroClassGroup> MultiplayerHeroClassGroups { get; }` |
| `HeroCharacter` | `public BasicCharacterObject HeroCharacter { get; }` |
| `TroopCharacter` | `public BasicCharacterObject TroopCharacter { get; }` |
| `BannerBearerCharacter` | `public BasicCharacterObject BannerBearerCharacter { get; }` |
| `Culture` | `public BasicCultureObject Culture { get; }` |
| `ClassGroup` | `public MultiplayerClassDivisions.MPHeroClassGroup ClassGroup { get; }` |
| `HeroIdleAnim` | `public string HeroIdleAnim { get; }` |
| `HeroMountIdleAnim` | `public string HeroMountIdleAnim { get; }` |
| `TroopIdleAnim` | `public string TroopIdleAnim { get; }` |
| `TroopMountIdleAnim` | `public string TroopMountIdleAnim { get; }` |
| `ArmorValue` | `public int ArmorValue { get; }` |
| `Health` | `public int Health { get; }` |
| `HeroMovementSpeedMultiplier` | `public float HeroMovementSpeedMultiplier { get; }` |
| `HeroCombatMovementSpeedMultiplier` | `public float HeroCombatMovementSpeedMultiplier { get; }` |
| `HeroTopSpeedReachDuration` | `public float HeroTopSpeedReachDuration { get; }` |
| `TroopMovementSpeedMultiplier` | `public float TroopMovementSpeedMultiplier { get; }` |
| `TroopCombatMovementSpeedMultiplier` | `public float TroopCombatMovementSpeedMultiplier { get; }` |
| `TroopTopSpeedReachDuration` | `public float TroopTopSpeedReachDuration { get; }` |
| `TroopMultiplier` | `public float TroopMultiplier { get; }` |
| `TroopCost` | `public int TroopCost { get; }` |

## 主要方法

### GetMPHeroClasses
`public static IEnumerable<MultiplayerClassDivisions.MPHeroClass> GetMPHeroClasses(BasicCultureObject culture)`

**用途 / Purpose:** 获取 `m p hero classes` 的当前值。

### GetMPHeroClasses
`public static MBReadOnlyList<MultiplayerClassDivisions.MPHeroClass> GetMPHeroClasses()`

**用途 / Purpose:** 获取 `m p hero classes` 的当前值。

### GetMPHeroClassForCharacter
`public static MultiplayerClassDivisions.MPHeroClass GetMPHeroClassForCharacter(BasicCharacterObject character)`

**用途 / Purpose:** 获取 `m p hero class for character` 的当前值。

### GetAllPerksForHeroClass
`public static List<List<IReadOnlyPerkObject>> GetAllPerksForHeroClass(MultiplayerClassDivisions.MPHeroClass heroClass, string forcedForGameMode = null)`

**用途 / Purpose:** 获取 `all perks for hero class` 的当前值。

### GetMPHeroClassForPeer
`public static MultiplayerClassDivisions.MPHeroClass GetMPHeroClassForPeer(MissionPeer peer, bool skipTeamCheck = false)`

**用途 / Purpose:** 获取 `m p hero class for peer` 的当前值。

### GetMPHeroClassForFormation
`public static TargetIconType GetMPHeroClassForFormation(Formation formation)`

**用途 / Purpose:** 获取 `m p hero class for formation` 的当前值。

### GetAvailablePerksForPeer
`public static List<List<IReadOnlyPerkObject>> GetAvailablePerksForPeer(MissionPeer missionPeer)`

**用途 / Purpose:** 获取 `available perks for peer` 的当前值。

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Release
`public static void Release()`

**用途 / Purpose:** 处理 `release` 相关逻辑。

### GetMinimumTroopCost
`public static int GetMinimumTroopCost(BasicCultureObject culture = null)`

**用途 / Purpose:** 获取 `minimum troop cost` 的当前值。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### GetAllAvailablePerksForListIndex
`public List<IReadOnlyPerkObject> GetAllAvailablePerksForListIndex(int index, string forcedForGameMode = null)`

**用途 / Purpose:** 获取 `all available perks for list index` 的当前值。

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### IsTroopCharacter
`public bool IsTroopCharacter(BasicCharacterObject character)`

**用途 / Purpose:** 处理 `is troop character` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MPHeroClassGroup.GetMPHeroClasses(culture);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
