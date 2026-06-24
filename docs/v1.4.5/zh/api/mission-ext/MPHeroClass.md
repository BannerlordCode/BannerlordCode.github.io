<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPHeroClass`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPHeroClass

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPHeroClass : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerClassDivisions.cs`

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

## 主要方法

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

## 使用示例

```csharp
var value = new MPHeroClass();
value.Equals(obj);
```

## 参见

- [完整类目录](../catalog)