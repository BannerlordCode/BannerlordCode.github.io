---
title: "MPHeroClass"
description: "MPHeroClass 的自动生成类参考。"
---
# MPHeroClass

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPHeroClass : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.MountAndBlade/MultiplayerClassDivisions.cs`

## 概述

`MPHeroClass` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
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
| `TroopCasualCost` | `public int TroopCasualCost { get; }` |
| `TroopBattleCost` | `public int TroopBattleCost { get; }` |
| `MeleeAI` | `public int MeleeAI { get; }` |
| `RangedAI` | `public int RangedAI { get; }` |
| `HeroInformation` | `public TextObject HeroInformation { get; }` |
| `TroopInformation` | `public TextObject TroopInformation { get; }` |
| `IconType` | `public TargetIconType IconType { get; }` |
| `HeroName` | `public TextObject HeroName { get; }` |
| `TroopName` | `public TextObject TroopName { get; }` |

## 主要方法

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 MPHeroClass 实例
MPHeroClass mPHeroClass = ...;
var result = mPHeroClass.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 MPHeroClass 实例
MPHeroClass mPHeroClass = ...;
var result = mPHeroClass.GetHashCode();
```

### GetAllAvailablePerksForListIndex
`public List<IReadOnlyPerkObject> GetAllAvailablePerksForListIndex(int index, string forcedForGameMode = null)`

**用途 / Purpose:** 读取并返回当前对象中 「all available perks for list index」 的结果。

```csharp
// 先通过子系统 API 拿到 MPHeroClass 实例
MPHeroClass mPHeroClass = ...;
var result = mPHeroClass.GetAllAvailablePerksForListIndex(0, "example");
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 MPHeroClass 实例
MPHeroClass mPHeroClass = ...;
mPHeroClass.Deserialize(objectManager, node);
```

### IsTroopCharacter
`public bool IsTroopCharacter(BasicCharacterObject character)`

**用途 / Purpose:** 判断当前对象是否处于 「troop character」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MPHeroClass 实例
MPHeroClass mPHeroClass = ...;
var result = mPHeroClass.IsTroopCharacter(character);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPHeroClass mPHeroClass = ...;
mPHeroClass.Equals(obj);
```

## 参见

- [本区域目录](../)