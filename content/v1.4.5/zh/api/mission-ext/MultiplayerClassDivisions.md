---
title: "MultiplayerClassDivisions"
description: "MultiplayerClassDivisions 的自动生成类参考。"
---
# MultiplayerClassDivisions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassDivisions`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerClassDivisions.cs`

## 概述

`MultiplayerClassDivisions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HeroCharacter` | `public BasicCharacterObject HeroCharacter { get; }` |
| `TroopCharacter` | `public BasicCharacterObject TroopCharacter { get; }` |
| `BannerBearerCharacter` | `public BasicCharacterObject BannerBearerCharacter { get; }` |
| `Culture` | `public BasicCultureObject Culture { get; }` |
| `ClassGroup` | `public MPHeroClassGroup ClassGroup { get; }` |
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
| `TroopCasualCost` | `public int TroopCasualCost { get; }` |
| `TroopBattleCost` | `public int TroopBattleCost { get; }` |
| `MeleeAI` | `public int MeleeAI { get; }` |
| `RangedAI` | `public int RangedAI { get; }` |
| `HeroInformation` | `public TextObject HeroInformation { get; }` |
| `TroopInformation` | `public TextObject TroopInformation { get; }` |
| `IconType` | `public TargetIconType IconType { get; }` |
| `MultiplayerHeroClassGroups` | `public static List<MPHeroClassGroup> MultiplayerHeroClassGroups { get; }` |

## 主要方法

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 MultiplayerClassDivisions 实例
MultiplayerClassDivisions multiplayerClassDivisions = ...;
var result = multiplayerClassDivisions.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 MultiplayerClassDivisions 实例
MultiplayerClassDivisions multiplayerClassDivisions = ...;
var result = multiplayerClassDivisions.GetHashCode();
```

### GetAllAvailablePerksForListIndex
`public List<IReadOnlyPerkObject> GetAllAvailablePerksForListIndex(int index, string forcedForGameMode = null)`

**用途 / Purpose:** 读取并返回当前对象中 「all available perks for list index」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerClassDivisions 实例
MultiplayerClassDivisions multiplayerClassDivisions = ...;
var result = multiplayerClassDivisions.GetAllAvailablePerksForListIndex(0, "example");
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 MultiplayerClassDivisions 实例
MultiplayerClassDivisions multiplayerClassDivisions = ...;
multiplayerClassDivisions.Deserialize(objectManager, node);
```

### IsTroopCharacter
`public bool IsTroopCharacter(BasicCharacterObject character)`

**用途 / Purpose:** 判断当前对象是否处于 「troop character」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MultiplayerClassDivisions 实例
MultiplayerClassDivisions multiplayerClassDivisions = ...;
var result = multiplayerClassDivisions.IsTroopCharacter(character);
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 MultiplayerClassDivisions 实例
MultiplayerClassDivisions multiplayerClassDivisions = ...;
var result = multiplayerClassDivisions.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 MultiplayerClassDivisions 实例
MultiplayerClassDivisions multiplayerClassDivisions = ...;
var result = multiplayerClassDivisions.GetHashCode();
```

### GetMPHeroClasses
`public static IEnumerable<MPHeroClass> GetMPHeroClasses(BasicCultureObject culture)`

**用途 / Purpose:** 读取并返回当前对象中 「m p hero classes」 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerClassDivisions.GetMPHeroClasses(culture);
```

### GetMPHeroClasses
`public static MBReadOnlyList<MPHeroClass> GetMPHeroClasses()`

**用途 / Purpose:** 读取并返回当前对象中 「m p hero classes」 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerClassDivisions.GetMPHeroClasses();
```

### GetMPHeroClassForCharacter
`public static MPHeroClass GetMPHeroClassForCharacter(BasicCharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 「m p hero class for character」 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerClassDivisions.GetMPHeroClassForCharacter(character);
```

### GetAllPerksForHeroClass
`public static List<List<IReadOnlyPerkObject>> GetAllPerksForHeroClass(MPHeroClass heroClass, string forcedForGameMode = null)`

**用途 / Purpose:** 读取并返回当前对象中 「all perks for hero class」 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerClassDivisions.GetAllPerksForHeroClass(heroClass, "example");
```

### GetMPHeroClassForPeer
`public static MPHeroClass GetMPHeroClassForPeer(MissionPeer peer, bool skipTeamCheck = false)`

**用途 / Purpose:** 读取并返回当前对象中 「m p hero class for peer」 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerClassDivisions.GetMPHeroClassForPeer(peer, false);
```

### GetMPHeroClassForFormation
`public static TargetIconType GetMPHeroClassForFormation(Formation formation)`

**用途 / Purpose:** 读取并返回当前对象中 「m p hero class for formation」 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerClassDivisions.GetMPHeroClassForFormation(formation);
```

### GetAvailablePerksForPeer
`public static List<List<IReadOnlyPerkObject>> GetAvailablePerksForPeer(MissionPeer missionPeer)`

**用途 / Purpose:** 读取并返回当前对象中 「available perks for peer」 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerClassDivisions.GetAvailablePerksForPeer(missionPeer);
```

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
MultiplayerClassDivisions.Initialize();
```

### Release
`public static void Release()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
MultiplayerClassDivisions.Release();
```

### GetMinimumTroopCost
`public static int GetMinimumTroopCost(BasicCultureObject culture = null)`

**用途 / Purpose:** 读取并返回当前对象中 「minimum troop cost」 的结果。

```csharp
// 静态调用，不需要实例
MultiplayerClassDivisions.GetMinimumTroopCost(null);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MultiplayerClassDivisions multiplayerClassDivisions = ...;
multiplayerClassDivisions.Equals(obj);
```

## 参见

- [本区域目录](../)