<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignEventDispatcher`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignEventDispatcher

**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CampaignEventDispatcher` 是 `TaleWorlds.CampaignSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static CampaignEventDispatcher Instance { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)