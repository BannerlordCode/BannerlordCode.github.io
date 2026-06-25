---
title: "Clan"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Clan`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
- [🔀 跨版本对比 /versions/Clan](/versions/Clan)
<!-- END BREADCRUMB -->
# Clan

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Clan : MBObjectBase, IFaction`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Clan.cs`

## 概述

`Clan` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `InformalName` | `public TextObject InformalName { get; }` |
| `Culture` | `public CultureObject Culture { get; set; }` |
| `LastFactionChangeTime` | `public CampaignTime LastFactionChangeTime { get; set; }` |
| `DefaultPartyTemplate` | `public PartyTemplateObject DefaultPartyTemplate { get; }` |
| `AutoRecruitmentExpenses` | `public int AutoRecruitmentExpenses { get; }` |
| `EncyclopediaText` | `public TextObject EncyclopediaText { get; }` |
| `IsNoble` | `public bool IsNoble { get; set; }` |
| `Kingdom` | `public Kingdom Kingdom { get; set; }` |
| `DungeonPrisonersOfClan` | `public IEnumerable<CharacterObject> DungeonPrisonersOfClan { get; }` |
| `Influence` | `public float Influence { get; set; }` |
| `CurrentTotalStrength` | `public float CurrentTotalStrength { get; }` |
| `MercenaryAwardMultiplier` | `public int MercenaryAwardMultiplier { get; }` |
| `InitialHomeSettlement` | `public Settlement InitialHomeSettlement { get; }` |
| `IsRebelClan` | `public bool IsRebelClan { get; }` |
| `IsMinorFaction` | `public bool IsMinorFaction { get; }` |
| `IsOutlaw` | `public bool IsOutlaw { get; }` |
| `IsNomad` | `public bool IsNomad { get; }` |
| `IsMafia` | `public bool IsMafia { get; }` |
| `IsClanTypeMercenary` | `public bool IsClanTypeMercenary { get; }` |
| `IsSect` | `public bool IsSect { get; }` |
| `IsUnderMercenaryService` | `public bool IsUnderMercenaryService { get; }` |
| `ShouldStayInKingdomUntil` | `public CampaignTime ShouldStayInKingdomUntil { get; set; }` |
| `Color` | `public uint Color { get; set; }` |
| `Color2` | `public uint Color2 { get; set; }` |
| `BasicTroop` | `public CharacterObject BasicTroop { get; set; }` |
| `Banner` | `public Banner Banner { get; set; }` |
| `IsBanditFaction` | `public bool IsBanditFaction { get; }` |
| `Renown` | `public float Renown { get; set; }` |
| `MainHeroCrimeRating` | `public float MainHeroCrimeRating { get; set; }` |
| `Tier` | `public int Tier { get; }` |
| `MapFaction` | `public IFaction MapFaction { get; set; }` |
| `NotAttackableByPlayerUntilTime` | `public CampaignTime NotAttackableByPlayerUntilTime { get; set; }` |
| `Aggressiveness` | `public float Aggressiveness { get; set; }` |
| `TributeWallet` | `public int TributeWallet { get; }` |
| `HomeSettlement` | `public Settlement HomeSettlement { get; }` |
| `DebtToKingdom` | `public int DebtToKingdom { get; set; }` |
| `DistanceToClosestNonAllyFortification` | `public float DistanceToClosestNonAllyFortification { get; }` |
| `NonBanditFactions` | `public static IEnumerable<Clan> NonBanditFactions { get; }` |
| `BanditFactions` | `public static IEnumerable<Clan> BanditFactions { get; }` |

## 主要方法

### UpdateFactionsAtWarWith
`public void UpdateFactionsAtWarWith()`

**用途 / Purpose:** 更新 `factions at war with` 的状态或数据。

### UpdateCurrentStrength
`public void UpdateCurrentStrength()`

**用途 / Purpose:** 更新 `current strength` 的状态或数据。

### IsAtWarWith
`public bool IsAtWarWith(IFaction other)`

**用途 / Purpose:** 处理 `is at war with` 相关逻辑。

### CreateClan
`public static Clan CreateClan(string stringID)`

**用途 / Purpose:** 创建一个 `clan` 实例或对象。

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### GetRelationWithClan
`public int GetRelationWithClan(Clan other)`

**用途 / Purpose:** 获取 `relation with clan` 的当前值。

### SetLeader
`public void SetLeader(Hero leader)`

**用途 / Purpose:** 设置 `leader` 的值或状态。

### SetInitialHomeSettlement
`public void SetInitialHomeSettlement(Settlement initialHomeSettlement)`

**用途 / Purpose:** 设置 `initial home settlement` 的值或状态。

### ConsiderAndUpdateHomeSettlement
`public void ConsiderAndUpdateHomeSettlement()`

**用途 / Purpose:** 处理 `consider and update home settlement` 相关逻辑。

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### ChangeClanName
`public void ChangeClanName(TextObject name, TextObject informalName)`

**用途 / Purpose:** 处理 `change clan name` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### GetStanceWith
`public StanceLink GetStanceWith(IFaction other)`

**用途 / Purpose:** 获取 `stance with` 的当前值。

### ClanLeaveKingdom
`public void ClanLeaveKingdom(bool giveBackFiefs = false)`

**用途 / Purpose:** 处理 `clan leave kingdom` 相关逻辑。

### CalculateTotalSettlementBaseValue
`public float CalculateTotalSettlementBaseValue()`

**用途 / Purpose:** 处理 `calculate total settlement base value` 相关逻辑。

### StartMercenaryService
`public void StartMercenaryService()`

**用途 / Purpose:** 处理 `start mercenary service` 相关逻辑。

### ResetPlayerHomeAndFactionMidSettlement
`public void ResetPlayerHomeAndFactionMidSettlement()`

**用途 / Purpose:** 将 `player home and faction mid settlement` 重置为初始状态。

### FindFirst
`public static Clan FindFirst(Predicate<Clan> predicate)`

**用途 / Purpose:** 处理 `find first` 相关逻辑。

### EndMercenaryService
`public void EndMercenaryService(bool isByLeavingKingdom)`

**用途 / Purpose:** 处理 `end mercenary service` 相关逻辑。

### FindAll
`public static IEnumerable<Clan> FindAll(Predicate<Clan> predicate)`

**用途 / Purpose:** 处理 `find all` 相关逻辑。

### CalculateTotalSettlementValueForFaction
`public float CalculateTotalSettlementValueForFaction(Kingdom kingdom)`

**用途 / Purpose:** 处理 `calculate total settlement value for faction` 相关逻辑。

### OnHeroChangedState
`public void OnHeroChangedState(Hero hero, Hero.CharacterStates oldState)`

**用途 / Purpose:** 当 `hero changed state` 事件触发时调用此方法。

### AddRenown
`public void AddRenown(float value, bool shouldNotify = true)`

**用途 / Purpose:** 向当前集合/状态中添加 `renown`。

### ResetClanRenown
`public void ResetClanRenown()`

**用途 / Purpose:** 将 `clan renown` 重置为初始状态。

### OnSupportedByClan
`public void OnSupportedByClan(Clan supporterClan)`

**用途 / Purpose:** 当 `supported by clan` 事件触发时调用此方法。

### CreateSettlementRebelClan
`public static Clan CreateSettlementRebelClan(Settlement settlement, Hero owner, int iconMeshId = -1)`

**用途 / Purpose:** 创建一个 `settlement rebel clan` 实例或对象。

### CalculateMidSettlement
`public void CalculateMidSettlement()`

**用途 / Purpose:** 处理 `calculate mid settlement` 相关逻辑。

### CreateCompanionToLordClan
`public static Clan CreateCompanionToLordClan(Hero hero, Settlement settlement, TextObject clanName, int newClanIconId)`

**用途 / Purpose:** 创建一个 `companion to lord clan` 实例或对象。

### GetHeirApparents
`public Dictionary<Hero, int> GetHeirApparents()`

**用途 / Purpose:** 获取 `heir apparents` 的当前值。

### UpdateBannerColor
`public void UpdateBannerColor(uint backgroundColor, uint iconColor)`

**用途 / Purpose:** 更新 `banner color` 的状态或数据。

## 使用示例

```csharp
var value = new Clan();
value.UpdateFactionsAtWarWith();
```

## 参见

- [完整类目录](../catalog)