<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignEventDispatcher`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignEventDispatcher

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CampaignEventDispatcher` is a class in the `TaleWorlds.CampaignSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static CampaignEventDispatcher Instance { get; }` |


## Key Methods

### RemoveListeners

```csharp
public override void RemoveListeners(object o)
```

### OnPlayerBodyPropertiesChanged

```csharp
public override void OnPlayerBodyPropertiesChanged()
```

### OnHeroLevelledUp

```csharp
public override void OnHeroLevelledUp(Hero hero, bool shouldNotify = true)
```

### OnHomeHideoutChanged

```csharp
public override void OnHomeHideoutChanged(BanditPartyComponent banditPartyComponent, Hideout oldHomeHideout)
```

### OnCharacterCreationIsOver

```csharp
public override void OnCharacterCreationIsOver()
```

### OnHeroGainedSkill

```csharp
public override void OnHeroGainedSkill(Hero hero, SkillObject skill, int change = 1, bool shouldNotify = true)
```

### OnHeroWounded

```csharp
public override void OnHeroWounded(Hero woundedHero)
```

### OnHeroRelationChanged

```csharp
public override void OnHeroRelationChanged(Hero effectiveHero, Hero effectiveHeroGainedRelationWith, int relationChange, bool showNotification, ChangeRelationAction.ChangeRelationDetail detail, Hero originalHero, Hero originalGainedRelationWith)
```

### OnLootDistributedToParty

```csharp
public override void OnLootDistributedToParty(PartyBase winnerParty, PartyBase defeatedParty, ItemRoster lootedItems)
```

### OnHeroOccupationChanged

```csharp
public override void OnHeroOccupationChanged(Hero hero, Occupation oldOccupation)
```

### OnBarterAccepted

```csharp
public override void OnBarterAccepted(Hero offererHero, Hero otherHero, List<Barterable> barters)
```

### OnBarterCanceled

```csharp
public override void OnBarterCanceled(Hero offererHero, Hero otherHero, List<Barterable> barters)
```

### OnHeroCreated

```csharp
public override void OnHeroCreated(Hero hero, bool isBornNaturally = false)
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
public override void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail actionDetail, bool showNotification = true)
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
public override void OnHeroJoinedParty(Hero hero, MobileParty party)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)