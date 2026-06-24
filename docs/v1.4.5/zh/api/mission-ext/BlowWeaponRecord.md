<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BlowWeaponRecord`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BlowWeaponRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct BlowWeaponRecord`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BlowWeaponRecord.cs`

## 概述

`BlowWeaponRecord` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsShield` | `public bool IsShield { get; }` |
| `IsAmmo` | `public bool IsAmmo { get; }` |

## 主要方法

### FillAsMeleeBlow
`public void FillAsMeleeBlow(ItemObject item, WeaponComponentData weaponComponentData, int affectorWeaponSlot, sbyte weaponAttachBoneIndex)`

**用途 / Purpose:** 处理 `fill as melee blow` 相关逻辑。

### FillAsMissileBlow
`public void FillAsMissileBlow(ItemObject item, WeaponComponentData weaponComponentData, int missileIndex, sbyte weaponAttachBoneIndex, Vec3 startingPosition, Vec3 currentPosition, Vec3 velocity)`

**用途 / Purpose:** 处理 `fill as missile blow` 相关逻辑。

### HasWeapon
`public bool HasWeapon()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `weapon`。

### GetHitSound
`public int GetHitSound(bool isOwnerHumanoid, bool isCriticalBlow, bool isLowBlow, bool isNonTipThrust, AgentAttackType attackType, DamageTypes damageType)`

**用途 / Purpose:** 获取 `hit sound` 的当前值。

## 使用示例

```csharp
var value = new BlowWeaponRecord();
value.FillAsMeleeBlow(item, weaponComponentData, 0, 0);
```

## 参见

- [完整类目录](../catalog)