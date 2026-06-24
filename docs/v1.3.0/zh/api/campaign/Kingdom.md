<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Kingdom`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
- [🔀 跨版本对比 /versions/Kingdom](/versions/Kingdom)
<!-- END BREADCRUMB -->
# Kingdom

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Kingdom : MBObjectBase, IFaction`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Kingdom.cs`

## 概述

`Kingdom` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `InformalName` | `public TextObject InformalName { get; }` |
| `EncyclopediaText` | `public TextObject EncyclopediaText { get; }` |
| `EncyclopediaTitle` | `public TextObject EncyclopediaTitle { get; }` |
| `EncyclopediaRulerTitle` | `public TextObject EncyclopediaRulerTitle { get; }` |
| `EncyclopediaLink` | `public string EncyclopediaLink { get; }` |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName { get; }` |
| `UnresolvedDecisions` | `public MBReadOnlyList<KingdomDecision> UnresolvedDecisions { get; }` |
| `Culture` | `public CultureObject Culture { get; }` |
| `InitialHomeSettlement` | `public Settlement InitialHomeSettlement { get; }` |
| `IsMapFaction` | `public bool IsMapFaction { get; }` |
| `HasNavalNavigationCapability` | `public bool HasNavalNavigationCapability { get; }` |
| `Color` | `public uint Color { get; }` |
| `Color2` | `public uint Color2 { get; }` |
| `PrimaryBannerColor` | `public uint PrimaryBannerColor { get; }` |
| `SecondaryBannerColor` | `public uint SecondaryBannerColor { get; }` |
| `MainHeroCrimeRating` | `public float MainHeroCrimeRating { get; set; }` |
| `FactionsAtWarWith` | `public MBReadOnlyList<IFaction> FactionsAtWarWith { get; }` |
| `AlliedKingdoms` | `public MBReadOnlyList<Kingdom> AlliedKingdoms { get; }` |
| `Fiefs` | `public MBReadOnlyList<Town> Fiefs { get; }` |
| `Villages` | `public MBReadOnlyList<Village> Villages { get; }` |
| `Settlements` | `public MBReadOnlyList<Settlement> Settlements { get; }` |
| `Heroes` | `public MBReadOnlyList<Hero> Heroes { get; }` |
| `AliveLords` | `public MBReadOnlyList<Hero> AliveLords { get; }` |
| `DeadLords` | `public MBReadOnlyList<Hero> DeadLords { get; }` |
| `WarPartyComponents` | `public MBReadOnlyList<WarPartyComponent> WarPartyComponents { get; }` |
| `DailyCrimeRatingChange` | `public float DailyCrimeRatingChange { get; }` |
| `DailyCrimeRatingChangeExplained` | `public ExplainedNumber DailyCrimeRatingChangeExplained { get; }` |
| `BasicTroop` | `public CharacterObject BasicTroop { get; }` |
| `Leader` | `public Hero Leader { get; set; }` |
| `Banner` | `public Banner Banner { get; set; }` |
| `IsBanditFaction` | `public bool IsBanditFaction { get; }` |
| `IsMinorFaction` | `public bool IsMinorFaction { get; }` |
| `IsRebelClan` | `public bool IsRebelClan { get; }` |
| `IsClan` | `public bool IsClan { get; }` |
| `IsOutlaw` | `public bool IsOutlaw { get; }` |
| `Clans` | `public MBReadOnlyList<Clan> Clans { get; set; }` |
| `RulingClan` | `public Clan RulingClan { get; }` |
| `LastArmyCreationDay` | `public int LastArmyCreationDay { get; }` |
| `Armies` | `public MBReadOnlyList<Army> Armies { get; }` |
| `CurrentTotalStrength` | `public float CurrentTotalStrength { get; }` |
| `FactionMidSettlement` | `public Settlement FactionMidSettlement { get; }` |
| `DistanceToClosestNonAllyFortification` | `public float DistanceToClosestNonAllyFortification { get; }` |
| `ActivePolicies` | `public IList<PolicyObject> ActivePolicies { get; }` |
| `All` | `public static MBReadOnlyList<Kingdom> All { get; }` |
| `LastKingdomDecisionConclusionDate` | `public CampaignTime LastKingdomDecisionConclusionDate { get; }` |
| `IsEliminated` | `public bool IsEliminated { get; set; }` |
| `LastMercenaryOfferTime` | `public CampaignTime LastMercenaryOfferTime { get; set; }` |
| `MapFaction` | `public IFaction MapFaction { get; set; }` |
| `NotAttackableByPlayerUntilTime` | `public CampaignTime NotAttackableByPlayerUntilTime { get; set; }` |
| `Aggressiveness` | `public float Aggressiveness { get; set; }` |
| `AllParties` | `public IEnumerable<MobileParty> AllParties { get; }` |
| `MercenaryWallet` | `public int MercenaryWallet { get; set; }` |
| `TributeWallet` | `public int TributeWallet { get; set; }` |
| `KingdomBudgetWallet` | `public int KingdomBudgetWallet { get; set; }` |
| `CallToWarWallet` | `public int CallToWarWallet { get; set; }` |

## 主要方法

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### UpdateFactionsAtWarWith
`public void UpdateFactionsAtWarWith()`

**用途 / Purpose:** 更新 `factions at war with` 的状态或数据。

### UpdateAlliedKingdoms
`public void UpdateAlliedKingdoms()`

**用途 / Purpose:** 更新 `allied kingdoms` 的状态或数据。

### CreateKingdom
`public static Kingdom CreateKingdom(string stringID)`

**用途 / Purpose:** 创建一个 `kingdom` 实例或对象。

### InitializeKingdom
`public void InitializeKingdom(TextObject name, TextObject informalName, CultureObject culture, Banner banner, uint kingdomColor1, uint kingdomColor2, Settlement initialHomeSettlement, TextObject encyclopediaText, TextObject encyclopediaTitle, TextObject encyclopediaRulerTitle)`

**用途 / Purpose:** 初始化 `kingdom` 的状态、资源或绑定。

### ChangeKingdomName
`public void ChangeKingdomName(TextObject name, TextObject informalName)`

**用途 / Purpose:** 处理 `change kingdom name` 相关逻辑。

### OnHeroChangedState
`public void OnHeroChangedState(Hero hero, Hero.CharacterStates oldState)`

**用途 / Purpose:** 当 `hero changed state` 事件触发时调用此方法。

### IsAllyWith
`public bool IsAllyWith(Kingdom other)`

**用途 / Purpose:** 处理 `is ally with` 相关逻辑。

### HasCalledToWar
`public bool HasCalledToWar(Kingdom other)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `called to war`。

### IsAtWarWith
`public bool IsAtWarWith(IFaction other)`

**用途 / Purpose:** 处理 `is at war with` 相关逻辑。

### IsAtConstantWarWith
`public bool IsAtConstantWarWith(IFaction other)`

**用途 / Purpose:** 处理 `is at constant war with` 相关逻辑。

### GetStanceWith
`public StanceLink GetStanceWith(IFaction other)`

**用途 / Purpose:** 获取 `stance with` 的当前值。

### CreateArmy
`public void CreateArmy(Hero armyLeader, Settlement targetSettlement, Army.ArmyTypes selectedArmyType, MBReadOnlyList<MobileParty> partiesToCallToArmy = null)`

**用途 / Purpose:** 创建一个 `army` 实例或对象。

### AddDecision
`public void AddDecision(KingdomDecision kingdomDecision, bool ignoreInfluenceCost = false)`

**用途 / Purpose:** 向当前集合/状态中添加 `decision`。

### RemoveDecision
`public void RemoveDecision(KingdomDecision kingdomDecision)`

**用途 / Purpose:** 从当前集合/状态中移除 `decision`。

### OnKingdomDecisionConcluded
`public void OnKingdomDecisionConcluded()`

**用途 / Purpose:** 当 `kingdom decision concluded` 事件触发时调用此方法。

### AddPolicy
`public void AddPolicy(PolicyObject policy)`

**用途 / Purpose:** 向当前集合/状态中添加 `policy`。

### RemovePolicy
`public void RemovePolicy(PolicyObject policy)`

**用途 / Purpose:** 从当前集合/状态中移除 `policy`。

### HasPolicy
`public bool HasPolicy(PolicyObject policy)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `policy`。

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### OnFortificationAdded
`public void OnFortificationAdded(Town fortification)`

**用途 / Purpose:** 当 `fortification added` 事件触发时调用此方法。

### OnFortificationRemoved
`public void OnFortificationRemoved(Town fortification)`

**用途 / Purpose:** 当 `fortification removed` 事件触发时调用此方法。

### OnHeroAdded
`public void OnHeroAdded(Hero hero)`

**用途 / Purpose:** 当 `hero added` 事件触发时调用此方法。

### OnHeroRemoved
`public void OnHeroRemoved(Hero hero)`

**用途 / Purpose:** 当 `hero removed` 事件触发时调用此方法。

### OnWarPartyAdded
`public void OnWarPartyAdded(WarPartyComponent warPartyComponent)`

**用途 / Purpose:** 当 `war party added` 事件触发时调用此方法。

### OnWarPartyRemoved
`public void OnWarPartyRemoved(WarPartyComponent warPartyComponent)`

**用途 / Purpose:** 当 `war party removed` 事件触发时调用此方法。

### CalculateMidSettlement
`public void CalculateMidSettlement()`

**用途 / Purpose:** 处理 `calculate mid settlement` 相关逻辑。

### ReactivateKingdom
`public void ReactivateKingdom()`

**用途 / Purpose:** 处理 `reactivate kingdom` 相关逻辑。

## 使用示例

```csharp
var value = new Kingdom();
value.GetName();
```

## 参见

- [完整类目录](../catalog)