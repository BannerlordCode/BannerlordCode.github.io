<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignEventReceiver`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignEventReceiver

**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CampaignEventReceiver` 是 `TaleWorlds.CampaignSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)