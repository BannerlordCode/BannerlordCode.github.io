<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignEventReceiver`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignEventReceiver

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CampaignEventReceiver` is a class in the `TaleWorlds.CampaignSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### RemoveListeners

```csharp
public virtual void RemoveListeners(object o)
```

### OnCharacterCreationIsOver

```csharp
public virtual void OnCharacterCreationIsOver()
```

### OnHeroLevelledUp

```csharp
public virtual void OnHeroLevelledUp(Hero hero, bool shouldNotify = true)
```

### OnHomeHideoutChanged

```csharp
public virtual void OnHomeHideoutChanged(BanditPartyComponent banditPartyComponent, Hideout oldHomeHideout)
```

### OnHeroGainedSkill

```csharp
public virtual void OnHeroGainedSkill(Hero hero, SkillObject skill, int change = 1, bool shouldNotify = true)
```

### OnHeroCreated

```csharp
public virtual void OnHeroCreated(Hero hero, bool isBornNaturally = false)
```

### OnHeroWounded

```csharp
public virtual void OnHeroWounded(Hero woundedHero)
```

### OnHeroRelationChanged

```csharp
public virtual void OnHeroRelationChanged(Hero effectiveHero, Hero effectiveHeroGainedRelationWith, int relationChange, bool showNotification, ChangeRelationAction.ChangeRelationDetail detail, Hero originalHero, Hero originalGainedRelationWith)
```

### OnQuestLogAdded

```csharp
public virtual void OnQuestLogAdded(QuestBase quest, bool hideInformation)
```

### OnIssueLogAdded

```csharp
public virtual void OnIssueLogAdded(IssueBase issue, bool hideInformation)
```

### OnClanTierChanged

```csharp
public virtual void OnClanTierChanged(Clan clan, bool shouldNotify = true)
```

### OnClanChangedKingdom

```csharp
public virtual void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail actionDetail, bool showNotification = true)
```

### OnClanDefected

```csharp
public virtual void OnClanDefected(Clan clan, Kingdom oldKingdom, Kingdom newKingdom)
```

### OnClanCreated

```csharp
public virtual void OnClanCreated(Clan clan, bool isCompanion)
```

### OnHeroJoinedParty

```csharp
public virtual void OnHeroJoinedParty(Hero hero, MobileParty mobileParty)
```

### OnKingdomDecisionAdded

```csharp
public virtual void OnKingdomDecisionAdded(KingdomDecision decision, bool isPlayerInvolved)
```

### OnKingdomDecisionCancelled

```csharp
public virtual void OnKingdomDecisionCancelled(KingdomDecision decision, bool isPlayerInvolved)
```

### OnKingdomDecisionConcluded

```csharp
public virtual void OnKingdomDecisionConcluded(KingdomDecision decision, DecisionOutcome chosenOutcome, bool isPlayerInvolved)
```

### OnHeroOrPartyTradedGold

```csharp
public virtual void OnHeroOrPartyTradedGold(ValueTuple<Hero, PartyBase> giver, ValueTuple<Hero, PartyBase> recipient, ValueTuple<int, string> goldAmount, bool showNotification)
```

### OnHeroOrPartyGaveItem

```csharp
public virtual void OnHeroOrPartyGaveItem(ValueTuple<Hero, PartyBase> giver, ValueTuple<Hero, PartyBase> receiver, ItemRosterElement itemRosterElement, bool showNotification)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)