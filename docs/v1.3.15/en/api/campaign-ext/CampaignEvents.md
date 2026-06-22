<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignEvents`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignEvents

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CampaignEvents` is a class in the `TaleWorlds.CampaignSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)