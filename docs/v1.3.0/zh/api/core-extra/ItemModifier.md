<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemModifier`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ItemModifier

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class ItemModifier : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/ItemModifier.cs`

## 概述

`ItemModifier` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Damage` | `public int Damage { get; }` |
| `Speed` | `public int Speed { get; }` |
| `MissileSpeed` | `public int MissileSpeed { get; }` |
| `Armor` | `public int Armor { get; }` |
| `HitPoints` | `public short HitPoints { get; }` |
| `StackCount` | `public short StackCount { get; }` |
| `MountSpeed` | `public float MountSpeed { get; }` |
| `Maneuver` | `public float Maneuver { get; }` |
| `ChargeDamage` | `public float ChargeDamage { get; }` |
| `MountHitPoints` | `public float MountHitPoints { get; }` |
| `LootDropScore` | `public float LootDropScore { get; }` |
| `ProductionDropScore` | `public float ProductionDropScore { get; }` |
| `PriceMultiplier` | `public float PriceMultiplier { get; }` |
| `ItemQuality` | `public ItemQuality ItemQuality { get; }` |

## 主要方法

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### Equals
`public bool Equals(ItemModifier other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### ModifyDamage
`public int ModifyDamage(int baseDamage)`

**用途 / Purpose:** 处理 `modify damage` 相关逻辑。

### ModifySpeed
`public int ModifySpeed(int baseSpeed)`

**用途 / Purpose:** 处理 `modify speed` 相关逻辑。

### ModifyMountSpeed
`public int ModifyMountSpeed(int baseSpeed)`

**用途 / Purpose:** 处理 `modify mount speed` 相关逻辑。

### ModifyMountManeuver
`public int ModifyMountManeuver(int baseManeuver)`

**用途 / Purpose:** 处理 `modify mount maneuver` 相关逻辑。

### ModifyMountCharge
`public int ModifyMountCharge(int baseCharge)`

**用途 / Purpose:** 处理 `modify mount charge` 相关逻辑。

### ModifyMountHitPoints
`public int ModifyMountHitPoints(int baseCharge)`

**用途 / Purpose:** 处理 `modify mount hit points` 相关逻辑。

### ModifyMissileSpeed
`public int ModifyMissileSpeed(int baseSpeed)`

**用途 / Purpose:** 处理 `modify missile speed` 相关逻辑。

### ModifyArmor
`public int ModifyArmor(int armorValue)`

**用途 / Purpose:** 处理 `modify armor` 相关逻辑。

### ModifyHitPoints
`public short ModifyHitPoints(short baseHitPoints)`

**用途 / Purpose:** 处理 `modify hit points` 相关逻辑。

### ModifyStackCount
`public short ModifyStackCount(short baseStackCount)`

**用途 / Purpose:** 处理 `modify stack count` 相关逻辑。

## 使用示例

```csharp
var value = new ItemModifier();
value.Deserialize(objectManager, node);
```

## 参见

- [完整类目录](../catalog)