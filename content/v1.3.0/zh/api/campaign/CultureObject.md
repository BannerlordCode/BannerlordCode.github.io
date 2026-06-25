---
title: "CultureObject"
description: "CultureObject 的自动生成类参考。"
---
# CultureObject

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class CultureObject : BasicCultureObject`
**Base:** `BasicCultureObject`
**File:** `TaleWorlds.CampaignSystem/CultureObject.cs`

## 概述

`CultureObject` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Traits` | `public CultureTrait Traits { get; }` |
| `BasicTroop` | `public CharacterObject BasicTroop { get; }` |
| `EliteBasicTroop` | `public CharacterObject EliteBasicTroop { get; }` |
| `MeleeMilitiaTroop` | `public CharacterObject MeleeMilitiaTroop { get; }` |
| `MeleeEliteMilitiaTroop` | `public CharacterObject MeleeEliteMilitiaTroop { get; }` |
| `RangedEliteMilitiaTroop` | `public CharacterObject RangedEliteMilitiaTroop { get; }` |
| `RangedMilitiaTroop` | `public CharacterObject RangedMilitiaTroop { get; }` |
| `TournamentMaster` | `public CharacterObject TournamentMaster { get; }` |
| `Villager` | `public CharacterObject Villager { get; }` |
| `CaravanMaster` | `public CharacterObject CaravanMaster { get; }` |
| `CaravanGuard` | `public CharacterObject CaravanGuard { get; }` |
| `PrisonGuard` | `public CharacterObject PrisonGuard { get; }` |
| `Guard` | `public CharacterObject Guard { get; }` |
| `Blacksmith` | `public CharacterObject Blacksmith { get; }` |
| `Weaponsmith` | `public CharacterObject Weaponsmith { get; }` |
| `Townswoman` | `public CharacterObject Townswoman { get; }` |
| `TownswomanInfant` | `public CharacterObject TownswomanInfant { get; }` |
| `TownswomanChild` | `public CharacterObject TownswomanChild { get; }` |
| `TownswomanTeenager` | `public CharacterObject TownswomanTeenager { get; }` |
| `VillageWoman` | `public CharacterObject VillageWoman { get; }` |
| `VillagerMaleChild` | `public CharacterObject VillagerMaleChild { get; }` |
| `VillagerMaleTeenager` | `public CharacterObject VillagerMaleTeenager { get; }` |
| `VillagerFemaleChild` | `public CharacterObject VillagerFemaleChild { get; }` |
| `VillagerFemaleTeenager` | `public CharacterObject VillagerFemaleTeenager { get; }` |
| `Townsman` | `public CharacterObject Townsman { get; }` |
| `TownsmanInfant` | `public CharacterObject TownsmanInfant { get; }` |
| `TownsmanChild` | `public CharacterObject TownsmanChild { get; }` |
| `TownsmanTeenager` | `public CharacterObject TownsmanTeenager { get; }` |
| `RansomBroker` | `public CharacterObject RansomBroker { get; }` |
| `GangleaderBodyguard` | `public CharacterObject GangleaderBodyguard { get; }` |
| `MerchantNotary` | `public CharacterObject MerchantNotary { get; }` |
| `ArtisanNotary` | `public CharacterObject ArtisanNotary { get; }` |
| `PreacherNotary` | `public CharacterObject PreacherNotary { get; }` |
| `RuralNotableNotary` | `public CharacterObject RuralNotableNotary { get; }` |
| `ShopWorker` | `public CharacterObject ShopWorker { get; }` |
| `Tavernkeeper` | `public CharacterObject Tavernkeeper { get; }` |
| `TavernGamehost` | `public CharacterObject TavernGamehost { get; }` |
| `Musician` | `public CharacterObject Musician { get; }` |
| `TavernWench` | `public CharacterObject TavernWench { get; }` |
| `Armorer` | `public CharacterObject Armorer { get; }` |
| `HorseMerchant` | `public CharacterObject HorseMerchant { get; }` |
| `Barber` | `public CharacterObject Barber { get; }` |
| `Merchant` | `public CharacterObject Merchant { get; }` |
| `Beggar` | `public CharacterObject Beggar { get; }` |
| `FemaleBeggar` | `public CharacterObject FemaleBeggar { get; }` |
| `FemaleDancer` | `public CharacterObject FemaleDancer { get; }` |
| `Shipwright` | `public CharacterObject Shipwright { get; }` |
| `MilitiaVeteranArcher` | `public CharacterObject MilitiaVeteranArcher { get; }` |
| `GearDummy` | `public CharacterObject GearDummy { get; }` |
| `DefaultBattleEquipmentRoster` | `public MBEquipmentRoster DefaultBattleEquipmentRoster { get; }` |
| `DefaultCivilianEquipmentRoster` | `public MBEquipmentRoster DefaultCivilianEquipmentRoster { get; }` |
| `DefaultStealthEquipmentRoster` | `public MBEquipmentRoster DefaultStealthEquipmentRoster { get; }` |
| `DuelPresetEquipmentRoster` | `public MBEquipmentRoster DuelPresetEquipmentRoster { get; }` |
| `MarriageBrideEquipmentRoster` | `public MBEquipmentRoster MarriageBrideEquipmentRoster { get; }` |
| `BanditChief` | `public CharacterObject BanditChief { get; }` |
| `BanditRaider` | `public CharacterObject BanditRaider { get; }` |
| `BanditBandit` | `public CharacterObject BanditBandit { get; }` |
| `BanditBoss` | `public CharacterObject BanditBoss { get; }` |
| `DefaultCharacterCreationBodyProperty` | `public MBBodyProperty DefaultCharacterCreationBodyProperty { get; }` |
| `EncyclopediaText` | `public TextObject EncyclopediaText { get; }` |
| `StartingPoint` | `public CampaignVec2 StartingPoint { get; }` |
| `DefaultPartyTemplate` | `public PartyTemplateObject DefaultPartyTemplate { get; }` |
| `VillagerPartyTemplate` | `public PartyTemplateObject VillagerPartyTemplate { get; }` |
| `FishingPartyTemplate` | `public PartyTemplateObject FishingPartyTemplate { get; }` |
| `MilitiaPartyTemplate` | `public PartyTemplateObject MilitiaPartyTemplate { get; }` |
| `RebelsPartyTemplate` | `public PartyTemplateObject RebelsPartyTemplate { get; }` |
| `CaravanPartyTemplates` | `public MBList<PartyTemplateObject> CaravanPartyTemplates { get; }` |
| `EliteCaravanPartyTemplates` | `public MBList<PartyTemplateObject> EliteCaravanPartyTemplates { get; }` |
| `AvailableShipHulls` | `public MBList<ShipHull> AvailableShipHulls { get; }` |
| `BanditBossPartyTemplate` | `public PartyTemplateObject BanditBossPartyTemplate { get; }` |
| `VassalRewardTroopsPartyTemplate` | `public PartyTemplateObject VassalRewardTroopsPartyTemplate { get; }` |
| `SettlementPatrolPartyTemplateWeak` | `public PartyTemplateObject SettlementPatrolPartyTemplateWeak { get; }` |
| `SettlementPatrolPartyTemplateModerate` | `public PartyTemplateObject SettlementPatrolPartyTemplateModerate { get; }` |
| `SettlementPatrolPartyTemplateStrong` | `public PartyTemplateObject SettlementPatrolPartyTemplateStrong { get; }` |
| `VassalRewardItems` | `public MBReadOnlyList<ItemObject> VassalRewardItems { get; }` |
| `BannerBearerReplacementWeapons` | `public MBReadOnlyList<ItemObject> BannerBearerReplacementWeapons { get; }` |
| `MaleNameList` | `public MBReadOnlyList<TextObject> MaleNameList { get; }` |
| `FemaleNameList` | `public MBReadOnlyList<TextObject> FemaleNameList { get; }` |
| `ClanNameList` | `public MBReadOnlyList<TextObject> ClanNameList { get; }` |
| `CultureFeats` | `public MBReadOnlyList<FeatObject> CultureFeats { get; }` |
| `DefaultPolicyList` | `public MBReadOnlyList<PolicyObject> DefaultPolicyList { get; }` |
| `PossibleClanBannerIconsIDs` | `public MBReadOnlyList<int> PossibleClanBannerIconsIDs { get; }` |
| `NotableTemplates` | `public MBReadOnlyList<CharacterObject> NotableTemplates { get; }` |
| `RebelliousHeroTemplates` | `public MBReadOnlyList<CharacterObject> RebelliousHeroTemplates { get; }` |
| `LordTemplates` | `public MBReadOnlyList<CharacterObject> LordTemplates { get; }` |
| `TournamentTeamTemplatesForOneParticipant` | `public MBReadOnlyList<CharacterObject> TournamentTeamTemplatesForOneParticipant { get; }` |
| `TournamentTeamTemplatesForTwoParticipant` | `public MBReadOnlyList<CharacterObject> TournamentTeamTemplatesForTwoParticipant { get; }` |
| `TournamentTeamTemplatesForFourParticipant` | `public MBReadOnlyList<CharacterObject> TournamentTeamTemplatesForFourParticipant { get; }` |
| `BasicMercenaryTroops` | `public MBReadOnlyList<CharacterObject> BasicMercenaryTroops { get; }` |
| `MilitiaBonus` | `public int MilitiaBonus { get; }` |
| `ProsperityBonus` | `public int ProsperityBonus { get; }` |
| `BoardGame` | `public CultureObject.BoardGameType BoardGame { get; }` |
| `NavalFactor` | `public float NavalFactor { get; }` |

## 主要方法

### HasTrait
`public bool HasTrait(CultureTrait trait)`

**用途 / Purpose:** 判断当前对象是否已经持有 「trait」。

```csharp
// 先通过子系统 API 拿到 CultureObject 实例
CultureObject cultureObject = ...;
var result = cultureObject.HasTrait(trait);
```

### HasFeat
`public bool HasFeat(FeatObject feat)`

**用途 / Purpose:** 判断当前对象是否已经持有 「feat」。

```csharp
// 先通过子系统 API 拿到 CultureObject 实例
CultureObject cultureObject = ...;
var result = cultureObject.HasFeat(feat);
```

### GetCulturalFeats
`public IEnumerable<FeatObject> GetCulturalFeats(Func<FeatObject, bool> predicate = null)`

**用途 / Purpose:** 读取并返回当前对象中 「cultural feats」 的结果。

```csharp
// 先通过子系统 API 拿到 CultureObject 实例
CultureObject cultureObject = ...;
var result = cultureObject.GetCulturalFeats(func<FeatObject, false);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 CultureObject 实例
CultureObject cultureObject = ...;
var result = cultureObject.ToString();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 CultureObject 实例
CultureObject cultureObject = ...;
cultureObject.Deserialize(objectManager, node);
```

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 读取并返回当前对象中 「name」 的结果。

```csharp
// 先通过子系统 API 拿到 CultureObject 实例
CultureObject cultureObject = ...;
var result = cultureObject.GetName();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CultureObject cultureObject = ...;
cultureObject.HasTrait(trait);
```

## 参见

- [本区域目录](../)