<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BasicCharacterObject`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BasicCharacterObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BasicCharacterObject : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/BasicCharacterObject.cs`

## 概述

`BasicCharacterObject` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BodyPropertyRange` | `public virtual MBBodyProperty BodyPropertyRange { get; set; }` |
| `DefaultFormationGroup` | `public int DefaultFormationGroup { get; }` |
| `DefaultFormationClass` | `public FormationClass DefaultFormationClass { get; }` |
| `KnockbackResistance` | `public float KnockbackResistance { get; }` |
| `KnockdownResistance` | `public float KnockdownResistance { get; }` |
| `DismountResistance` | `public float DismountResistance { get; }` |
| `FormationPositionPreference` | `public FormationPositionPreference FormationPositionPreference { get; set; }` |
| `IsInfantry` | `public bool IsInfantry { get; }` |
| `Race` | `public int Race { get; }` |
| `IsFemale` | `public virtual bool IsFemale { get; }` |
| `FaceMeshCache` | `public bool FaceMeshCache { get; }` |
| `Equipment` | `public virtual Equipment Equipment { get; }` |
| `IsObsolete` | `public bool IsObsolete { get; }` |
| `Level` | `public virtual int Level { get; set; }` |
| `Culture` | `public BasicCultureObject Culture { get; set; }` |
| `Age` | `public virtual float Age { get; set; }` |
| `FaceDirtAmount` | `public float FaceDirtAmount { get; }` |
| `IsSoldier` | `public bool IsSoldier { get; }` |

## 主要方法

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### InitializeEquipmentsOnLoad
`public void InitializeEquipmentsOnLoad(BasicCharacterObject character)`

**用途 / Purpose:** 初始化 `equipments on load` 的状态、资源或绑定。

### GetFirstEquipment
`public Equipment GetFirstEquipment(Func<Equipment, bool> predicate)`

**用途 / Purpose:** 获取 `first equipment` 的当前值。

### GetBodyPropertiesMin
`public virtual BodyProperties GetBodyPropertiesMin(bool returnBaseValue = false)`

**用途 / Purpose:** 获取 `body properties min` 的当前值。

### GetBodyPropertiesMax
`public virtual BodyProperties GetBodyPropertiesMax(bool returnBaseValue = false)`

**用途 / Purpose:** 获取 `body properties max` 的当前值。

### GetBodyProperties
`public virtual BodyProperties GetBodyProperties(Equipment equipment, int seed = -1)`

**用途 / Purpose:** 获取 `body properties` 的当前值。

### UpdatePlayerCharacterBodyProperties
`public virtual void UpdatePlayerCharacterBodyProperties(BodyProperties properties, int race, bool isFemale)`

**用途 / Purpose:** 更新 `player character body properties` 的状态或数据。

### GetDefaultFaceSeed
`public int GetDefaultFaceSeed(int rank)`

**用途 / Purpose:** 获取 `default face seed` 的当前值。

### GetStepSize
`public float GetStepSize()`

**用途 / Purpose:** 获取 `step size` 的当前值。

### HasMount
`public bool HasMount()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `mount`。

### MaxHitPoints
`public virtual int MaxHitPoints()`

**用途 / Purpose:** 处理 `max hit points` 相关逻辑。

### GetPower
`public virtual float GetPower()`

**用途 / Purpose:** 获取 `power` 的当前值。

### GetBattlePower
`public virtual float GetBattlePower()`

**用途 / Purpose:** 获取 `battle power` 的当前值。

### GetMoraleResistance
`public virtual float GetMoraleResistance()`

**用途 / Purpose:** 获取 `morale resistance` 的当前值。

### GetMountKeySeed
`public virtual int GetMountKeySeed()`

**用途 / Purpose:** 获取 `mount key seed` 的当前值。

### GetBattleTier
`public virtual int GetBattleTier()`

**用途 / Purpose:** 获取 `battle tier` 的当前值。

### GetDefaultCharacterSkills
`public MBCharacterSkills GetDefaultCharacterSkills()`

**用途 / Purpose:** 获取 `default character skills` 的当前值。

### GetSkillValue
`public virtual int GetSkillValue(SkillObject skill)`

**用途 / Purpose:** 获取 `skill value` 的当前值。

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### GetFormationClass
`public virtual FormationClass GetFormationClass()`

**用途 / Purpose:** 获取 `formation class` 的当前值。

## 使用示例

```csharp
var value = new BasicCharacterObject();
value.GetName();
```

## 参见

- [完整类目录](../catalog)