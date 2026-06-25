---
title: "CharacterObject"
description: "CharacterObject 的自动生成类参考。"
---
# CharacterObject

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class CharacterObject : BasicCharacterObject, ICharacterData`
**Base:** `BasicCharacterObject`
**File:** `TaleWorlds.CampaignSystem/CharacterObject.cs`

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
| `IsNotTransferableInPartyScreen` | `public bool IsNotTransferableInPartyScreen { get; }` |
| `IsNotTransferableInHideouts` | `public bool IsNotTransferableInHideouts { get; }` |
| `OriginalCharacter` | `public CharacterObject OriginalCharacter { get; }` |
| `IsOriginalCharacter` | `public bool IsOriginalCharacter { get; set; }` |
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
| `MaxHitPointsExplanation` | `public ExplainedNumber MaxHitPointsExplanation { get; }` |
| `Level` | `public override int Level { get; }` |
| `PlayerCharacter` | `public static CharacterObject PlayerCharacter { get; }` |
| `OneToOneConversationCharacter` | `public static CharacterObject OneToOneConversationCharacter { get; }` |
| `ConversationCharacters` | `public static IEnumerable<CharacterObject> ConversationCharacters { get; }` |
| `IsMariner` | `public bool IsMariner { get; }` |
| `Culture` | `public new CultureObject Culture { get; }` |
| `IsFemale` | `public override bool IsFemale { get; }` |
| `IsBasicTroop` | `public bool IsBasicTroop { get; }` |
| `IsTemplate` | `public bool IsTemplate { get; }` |
| `IsChildTemplate` | `public bool IsChildTemplate { get; }` |
| `IsPlayerCharacter` | `public override bool IsPlayerCharacter { get; }` |
| `IsHero` | `public override bool IsHero { get; }` |
| `IsRegular` | `public bool IsRegular { get; }` |
| `Occupation` | `public Occupation Occupation { get; }` |
| `Age` | `public override float Age { get; }` |
| `ConformityNeededToRecruitPrisoner` | `public int ConformityNeededToRecruitPrisoner { get; }` |
| `UpgradeTargets` | `public CharacterObject UpgradeTargets { get; }` |
| `UpgradeRequiresItemFromCategory` | `public ItemCategory UpgradeRequiresItemFromCategory { get; }` |
| `IsMounted` | `public override bool IsMounted { get; }` |
| `IsRanged` | `public override bool IsRanged { get; }` |
| `TroopWage` | `public int TroopWage { get; }` |
| `Tier` | `public int Tier { get; }` |
| `All` | `public static MBReadOnlyList<CharacterObject> All { get; }` |

## 主要方法

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.ToString();
```

### MaxHitPoints
`public override int MaxHitPoints()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.MaxHitPoints();
```

### CreateFrom
`public static CharacterObject CreateFrom(CharacterObject character, StaticBodyProperties? staticBodyProperties = null)`

**用途 / Purpose:** 构建一个新的 「from」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CharacterObject.CreateFrom(character, null);
```

### AfterRegister
`public override void AfterRegister()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
characterObject.AfterRegister();
```

### GetBodyPropertiesMin
`public override BodyProperties GetBodyPropertiesMin(bool returnBaseValue = false)`

**用途 / Purpose:** 读取并返回当前对象中 「body properties min」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.GetBodyPropertiesMin(false);
```

### GetBodyPropertiesMax
`public override BodyProperties GetBodyPropertiesMax(bool returnBaseValue = false)`

**用途 / Purpose:** 读取并返回当前对象中 「body properties max」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.GetBodyPropertiesMax(false);
```

### UpdatePlayerCharacterBodyProperties
`public override void UpdatePlayerCharacterBodyProperties(BodyProperties properties, int race, bool isFemale)`

**用途 / Purpose:** 重新计算并更新 「player character body properties」 的最新表示。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
characterObject.UpdatePlayerCharacterBodyProperties(properties, 0, false);
```

### GetDefaultOccupation
`public Occupation GetDefaultOccupation()`

**用途 / Purpose:** 读取并返回当前对象中 「default occupation」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.GetDefaultOccupation();
```

### HasThrowingWeapon
`public bool HasThrowingWeapon()`

**用途 / Purpose:** 判断当前对象是否已经持有 「throwing weapon」。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.HasThrowingWeapon();
```

### GetUpgradeXpCost
`public int GetUpgradeXpCost(PartyBase party, int index)`

**用途 / Purpose:** 读取并返回当前对象中 「upgrade xp cost」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.GetUpgradeXpCost(party, 0);
```

### GetUpgradeGoldCost
`public int GetUpgradeGoldCost(PartyBase party, int index)`

**用途 / Purpose:** 读取并返回当前对象中 「upgrade gold cost」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.GetUpgradeGoldCost(party, 0);
```

### InitializeHeroCharacterOnAfterLoad
`public void InitializeHeroCharacterOnAfterLoad()`

**用途 / Purpose:** 为 「hero character on after load」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
characterObject.InitializeHeroCharacterOnAfterLoad();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
characterObject.Deserialize(objectManager, node);
```

### GetPower
`public override float GetPower()`

**用途 / Purpose:** 读取并返回当前对象中 「power」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.GetPower();
```

### GetBattlePower
`public override float GetBattlePower()`

**用途 / Purpose:** 读取并返回当前对象中 「battle power」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.GetBattlePower();
```

### GetMoraleResistance
`public override float GetMoraleResistance()`

**用途 / Purpose:** 读取并返回当前对象中 「morale resistance」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.GetMoraleResistance();
```

### GetSimulationAttackPower
`public void GetSimulationAttackPower(out float attackPoints, out float defencePoints, Equipment equipment = null)`

**用途 / Purpose:** 读取并返回当前对象中 「simulation attack power」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
characterObject.GetSimulationAttackPower(attackPoints, defencePoints, null);
```

### GetHeadArmorSum
`public float GetHeadArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**用途 / Purpose:** 读取并返回当前对象中 「head armor sum」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.GetHeadArmorSum(equipment.EquipmentType.Battle);
```

### GetBodyArmorSum
`public float GetBodyArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**用途 / Purpose:** 读取并返回当前对象中 「body armor sum」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.GetBodyArmorSum(equipment.EquipmentType.Battle);
```

### GetLegArmorSum
`public float GetLegArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**用途 / Purpose:** 读取并返回当前对象中 「leg armor sum」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.GetLegArmorSum(equipment.EquipmentType.Battle);
```

### GetArmArmorSum
`public float GetArmArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**用途 / Purpose:** 读取并返回当前对象中 「arm armor sum」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.GetArmArmorSum(equipment.EquipmentType.Battle);
```

### GetHorseArmorSum
`public float GetHorseArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**用途 / Purpose:** 读取并返回当前对象中 「horse armor sum」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.GetHorseArmorSum(equipment.EquipmentType.Battle);
```

### GetTotalArmorSum
`public float GetTotalArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**用途 / Purpose:** 读取并返回当前对象中 「total armor sum」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.GetTotalArmorSum(equipment.EquipmentType.Battle);
```

### GetBodyProperties
`public override BodyProperties GetBodyProperties(Equipment equipment, int seed = -1)`

**用途 / Purpose:** 读取并返回当前对象中 「body properties」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.GetBodyProperties(equipment, 0);
```

### SetTransferableInPartyScreen
`public void SetTransferableInPartyScreen(bool isTransferable)`

**用途 / Purpose:** 为 「transferable in party screen」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
characterObject.SetTransferableInPartyScreen(false);
```

### SetTransferableInHideouts
`public void SetTransferableInHideouts(bool isTransferable)`

**用途 / Purpose:** 为 「transferable in hideouts」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
characterObject.SetTransferableInHideouts(false);
```

### ClearAttributes
`public void ClearAttributes()`

**用途 / Purpose:** 清空当前对象中的「attributes」。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
characterObject.ClearAttributes();
```

### GetTraitLevel
`public int GetTraitLevel(TraitObject trait)`

**用途 / Purpose:** 读取并返回当前对象中 「trait level」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.GetTraitLevel(trait);
```

### GetPerkValue
`public bool GetPerkValue(PerkObject perk)`

**用途 / Purpose:** 读取并返回当前对象中 「perk value」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.GetPerkValue(perk);
```

### GetSkillValue
`public override int GetSkillValue(SkillObject skill)`

**用途 / Purpose:** 读取并返回当前对象中 「skill value」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.GetSkillValue(skill);
```

### GetPersona
`public TraitObject GetPersona()`

**用途 / Purpose:** 读取并返回当前对象中 「persona」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.GetPersona();
```

### GetMountKeySeed
`public override int GetMountKeySeed()`

**用途 / Purpose:** 读取并返回当前对象中 「mount key seed」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.GetMountKeySeed();
```

### GetFormationClass
`public override FormationClass GetFormationClass()`

**用途 / Purpose:** 读取并返回当前对象中 「formation class」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterObject 实例
CharacterObject characterObject = ...;
var result = characterObject.GetFormationClass();
```

### Find
`public static CharacterObject Find(string idString)`

**用途 / Purpose:** 在当前集合/范围内查找匹配项。

```csharp
// 静态调用，不需要实例
CharacterObject.Find("example");
```

### FindFirst
`public static CharacterObject FindFirst(Predicate<CharacterObject> predicate)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「first」。

```csharp
// 静态调用，不需要实例
CharacterObject.FindFirst(predicate);
```

### FindAll
`public static IEnumerable<CharacterObject> FindAll(Predicate<CharacterObject> predicate)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「all」。

```csharp
// 静态调用，不需要实例
CharacterObject.FindAll(predicate);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CharacterObject characterObject = ...;
characterObject.ToString();
```

## 参见

- [本区域目录](../)