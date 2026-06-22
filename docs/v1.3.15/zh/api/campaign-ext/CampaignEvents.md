<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignEvents`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignEvents

**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CampaignEvents` 是 `TaleWorlds.CampaignSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `OnPlayerBodyPropertiesChangedEvent` | `public static IMbEvent OnPlayerBodyPropertiesChangedEvent { get; }` |
| `BarterablesRequested` | `public static IMbEvent<BarterData> BarterablesRequested { get; }` |
| `HeroLevelledUp` | `public static IMbEvent<Hero, bool> HeroLevelledUp { get; }` |
| `OnHomeHideoutChangedEvent` | `public static IMbEvent<BanditPartyComponent, Hideout> OnHomeHideoutChangedEvent { get; }` |
| `HeroGainedSkill` | `public static IMbEvent<Hero, SkillObject, int, bool> HeroGainedSkill { get; }` |
| `OnCharacterCreationIsOverEvent` | `public static IMbEvent OnCharacterCreationIsOverEvent { get; }` |
| `HeroCreated` | `public static IMbEvent<Hero, bool> HeroCreated { get; }` |
| `HeroOccupationChangedEvent` | `public static IMbEvent<Hero, Occupation> HeroOccupationChangedEvent { get; }` |
| `HeroWounded` | `public static IMbEvent<Hero> HeroWounded { get; }` |
| `OnBarterAcceptedEvent` | `public static IMbEvent<Hero, Hero, List<Barterable>> OnBarterAcceptedEvent { get; }` |
| `OnBarterCanceledEvent` | `public static IMbEvent<Hero, Hero, List<Barterable>> OnBarterCanceledEvent { get; }` |
| `HeroRelationChanged` | `public static IMbEvent<Hero, Hero, int, bool, ChangeRelationAction.ChangeRelationDetail, Hero, Hero> HeroRelationChanged { get; }` |
| `QuestLogAddedEvent` | `public static IMbEvent<QuestBase, bool> QuestLogAddedEvent { get; }` |
| `IssueLogAddedEvent` | `public static IMbEvent<IssueBase, bool> IssueLogAddedEvent { get; }` |
| `ClanTierIncrease` | `public static IMbEvent<Clan, bool> ClanTierIncrease { get; }` |
| `OnClanChangedKingdom` | `public static IMbEvent<Clan, Kingdom, Kingdom, ChangeKingdomAction.ChangeKingdomActionDetail, bool> OnClanChangedKingdom { get; }` |
| `OnClanDefectedEvent` | `public static IMbEvent<Clan, Kingdom, Kingdom> OnClanDefectedEvent { get; }` |
| `OnClanCreatedEvent` | `public static IMbEvent<Clan, bool> OnClanCreatedEvent { get; }` |
| `OnHeroJoinedPartyEvent` | `public static IMbEvent<Hero, MobileParty> OnHeroJoinedPartyEvent { get; }` |
| `HeroOrPa` | `public static IMbEvent<ValueTuple<Hero, PartyBase>, ValueTuple<Hero, PartyBase>, ValueTuple<int, string>, bool> HeroOrPa { get; }` |


## 主要方法

### RemoveListeners

```csharp
public override void RemoveListeners(object obj)
```

### OnPlayerBodyPropertiesChanged

```csharp
public override void OnPlayerBodyPropertiesChanged()
```

### OnBarterablesRequested

```csharp
public override void OnBarterablesRequested(BarterData args)
```

### OnHeroLevelledUp

```csharp
public override void OnHeroLevelledUp(Hero hero, bool shouldNotify = true)
```

### OnHomeHideoutChanged

```csharp
public override void OnHomeHideoutChanged(BanditPartyComponent banditPartyComponent, Hideout oldHomeHideout)
```

### OnHeroGainedSkill

```csharp
public override void OnHeroGainedSkill(Hero hero, SkillObject skill, int change = 1, bool shouldNotify = true)
```

### OnCharacterCreationIsOver

```csharp
public override void OnCharacterCreationIsOver()
```

### OnHeroCreated

```csharp
public override void OnHeroCreated(Hero hero, bool isBornNaturally = false)
```

### OnHeroOccupationChanged

```csharp
public override void OnHeroOccupationChanged(Hero hero, Occupation oldOccupation)
```

### OnHeroWounded

```csharp
public override void OnHeroWounded(Hero woundedHero)
```

### OnBarterAccepted

```csharp
public override void OnBarterAccepted(Hero offererHero, Hero otherHero, List<Barterable> barters)
```

### OnBarterCanceled

```csharp
public override void OnBarterCanceled(Hero offererHero, Hero otherHero, List<Barterable> barters)
```

### OnHeroRelationChanged

```csharp
public override void OnHeroRelationChanged(Hero effectiveHero, Hero effectiveHeroGainedRelationWith, int relationChange, bool showNotification, ChangeRelationAction.ChangeRelationDetail detail, Hero originalHero, Hero originalGainedRelationWith)
```

### OnQuestLogAdded

```csharp
public override void OnQuestLogAdded(QuestBase quest, bool hideInformation)
```

### OnIssueLogAdded

```csharp
public override void OnIssueLogAdded(IssueBase issue, bool hideInformation)
```

### OnClanTierChanged

```csharp
public override void OnClanTierChanged(Clan clan, bool shouldNotify = true)
```

### OnClanChangedKingdom

```csharp
public override void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail detail, bool showNotification = true)
```

### OnClanDefected

```csharp
public override void OnClanDefected(Clan clan, Kingdom oldKingdom, Kingdom newKingdom)
```

### OnClanCreated

```csharp
public override void OnClanCreated(Clan clan, bool isCompanion)
```

### OnHeroJoinedParty

```csharp
public override void OnHeroJoinedParty(Hero hero, MobileParty mobileParty)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)