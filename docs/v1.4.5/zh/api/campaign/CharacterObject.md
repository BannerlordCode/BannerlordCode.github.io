<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterObject`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterObject

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class CharacterObject : BasicCharacterObject, ICharacterData`
**Base:** `BasicCharacterObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CharacterObject.cs`

## 概述

`CharacterObject` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public override TextObject Name { get; }` |
| `EncyclopediaLink` | `public string EncyclopediaLink { get; }` |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName { get; }` |
| `HiddenInEncyclopedia` | `public bool HiddenInEncyclopedia { get; set; }` |
| `HeroObject` | `public Hero HeroObject { get; set; }` |
| `Equipment` | `public override Equipment Equipment { get; }` |
| `BattleEquipments` | `public override IEnumerable<Equipment> BattleEquipments { get; }` |
| `CivilianEquipments` | `public override IEnumerable<Equipment> CivilianEquipments { get; }` |
| `StealthEquipments` | `public IEnumerable<Equipment> StealthEquipments { get; }` |
| `FirstBattleEquipment` | `public override Equipment FirstBattleEquipment { get; }` |
| `FirstCivilianEquipment` | `public override Equipment FirstCivilianEquipment { get; }` |
| `FirstStealthEquipment` | `public Equipment FirstStealthEquipment { get; }` |
| `RandomBattleEquipment` | `public override Equipment RandomBattleEquipment { get; }` |
| `RandomCivilianEquipment` | `public override Equipment RandomCivilianEquipment { get; }` |
| `HitPoints` | `public override int HitPoints { get; }` |
| `RandomStealthEquipment` | `public Equipment RandomStealthEquipment { get; }` |
| `Level` | `public override int Level { get; }` |
| `Culture` | `public new CultureObject Culture { get; }` |
| `IsFemale` | `public override bool IsFemale { get; }` |
| `IsBasicTroop` | `public bool IsBasicTroop { get; }` |
| `IsTemplate` | `public bool IsTemplate { get; }` |
| `IsChildTemplate` | `public bool IsChildTemplate { get; }` |
| `Occupation` | `public Occupation Occupation { get; }` |
| `UpgradeTargets` | `public CharacterObject UpgradeTargets { get; }` |
| `UpgradeRequiresItemFromCategory` | `public ItemCategory UpgradeRequiresItemFromCategory { get; }` |
| `IsMounted` | `public override bool IsMounted { get; }` |
| `IsRanged` | `public override bool IsRanged { get; }` |
| `TroopWage` | `public int TroopWage { get; }` |

## 主要方法

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### MaxHitPoints
`public override int MaxHitPoints()`

**用途 / Purpose:** 处理 `max hit points` 相关逻辑。

### CreateFrom
`public static CharacterObject CreateFrom(CharacterObject character, StaticBodyProperties? staticBodyProperties = null)`

**用途 / Purpose:** 创建一个 `from` 实例或对象。

### AfterRegister
`public override void AfterRegister()`

**用途 / Purpose:** 处理 `after register` 相关逻辑。

### GetBodyPropertiesMin
`public override BodyProperties GetBodyPropertiesMin(bool returnBaseValue = false)`

**用途 / Purpose:** 获取 `body properties min` 的当前值。

### GetBodyPropertiesMax
`public override BodyProperties GetBodyPropertiesMax(bool returnBaseValue = false)`

**用途 / Purpose:** 获取 `body properties max` 的当前值。

### UpdatePlayerCharacterBodyProperties
`public override void UpdatePlayerCharacterBodyProperties(BodyProperties properties, int race, bool isFemale)`

**用途 / Purpose:** 更新 `player character body properties` 的状态或数据。

### GetDefaultOccupation
`public Occupation GetDefaultOccupation()`

**用途 / Purpose:** 获取 `default occupation` 的当前值。

### HasThrowingWeapon
`public bool HasThrowingWeapon()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `throwing weapon`。

### GetUpgradeXpCost
`public int GetUpgradeXpCost(PartyBase party, int index)`

**用途 / Purpose:** 获取 `upgrade xp cost` 的当前值。

### GetUpgradeGoldCost
`public int GetUpgradeGoldCost(PartyBase party, int index)`

**用途 / Purpose:** 获取 `upgrade gold cost` 的当前值。

### InitializeHeroCharacterOnAfterLoad
`public void InitializeHeroCharacterOnAfterLoad()`

**用途 / Purpose:** 初始化 `hero character on after load` 的状态、资源或绑定。

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### GetPower
`public override float GetPower()`

**用途 / Purpose:** 获取 `power` 的当前值。

### GetBattlePower
`public override float GetBattlePower()`

**用途 / Purpose:** 获取 `battle power` 的当前值。

### GetMoraleResistance
`public override float GetMoraleResistance()`

**用途 / Purpose:** 获取 `morale resistance` 的当前值。

### GetSimulationAttackPower
`public void GetSimulationAttackPower(out float attackPoints, out float defencePoints, Equipment equipment = null)`

**用途 / Purpose:** 获取 `simulation attack power` 的当前值。

### GetHeadArmorSum
`public float GetHeadArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**用途 / Purpose:** 获取 `head armor sum` 的当前值。

### GetBodyArmorSum
`public float GetBodyArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**用途 / Purpose:** 获取 `body armor sum` 的当前值。

### GetLegArmorSum
`public float GetLegArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**用途 / Purpose:** 获取 `leg armor sum` 的当前值。

### GetArmArmorSum
`public float GetArmArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**用途 / Purpose:** 获取 `arm armor sum` 的当前值。

### GetHorseArmorSum
`public float GetHorseArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**用途 / Purpose:** 获取 `horse armor sum` 的当前值。

### GetTotalArmorSum
`public float GetTotalArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**用途 / Purpose:** 获取 `total armor sum` 的当前值。

### GetBodyProperties
`public override BodyProperties GetBodyProperties(Equipment equipment, int seed = -1)`

**用途 / Purpose:** 获取 `body properties` 的当前值。

### SetTransferableInPartyScreen
`public void SetTransferableInPartyScreen(bool isTransferable)`

**用途 / Purpose:** 设置 `transferable in party screen` 的值或状态。

### SetTransferableInHideouts
`public void SetTransferableInHideouts(bool isTransferable)`

**用途 / Purpose:** 设置 `transferable in hideouts` 的值或状态。

### ClearAttributes
`public void ClearAttributes()`

**用途 / Purpose:** 处理 `clear attributes` 相关逻辑。

### GetTraitLevel
`public int GetTraitLevel(TraitObject trait)`

**用途 / Purpose:** 获取 `trait level` 的当前值。

### GetPerkValue
`public bool GetPerkValue(PerkObject perk)`

**用途 / Purpose:** 获取 `perk value` 的当前值。

### GetSkillValue
`public override int GetSkillValue(SkillObject skill)`

**用途 / Purpose:** 获取 `skill value` 的当前值。

### GetPersona
`public TraitObject GetPersona()`

**用途 / Purpose:** 获取 `persona` 的当前值。

### GetMountKeySeed
`public override int GetMountKeySeed()`

**用途 / Purpose:** 获取 `mount key seed` 的当前值。

### GetFormationClass
`public override FormationClass GetFormationClass()`

**用途 / Purpose:** 获取 `formation class` 的当前值。

### Find
`public static CharacterObject Find(string idString)`

**用途 / Purpose:** 处理 `find` 相关逻辑。

### FindFirst
`public static CharacterObject FindFirst(Predicate<CharacterObject> predicate)`

**用途 / Purpose:** 处理 `find first` 相关逻辑。

### FindAll
`public static IEnumerable<CharacterObject> FindAll(Predicate<CharacterObject> predicate)`

**用途 / Purpose:** 处理 `find all` 相关逻辑。

## 使用示例

```csharp
var value = new CharacterObject();
value.ToString();
```

## 参见

- [完整类目录](../catalog)