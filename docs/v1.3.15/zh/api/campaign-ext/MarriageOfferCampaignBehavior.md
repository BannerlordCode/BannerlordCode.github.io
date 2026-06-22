<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MarriageOfferCampaignBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MarriageOfferCampaignBehavior

**命名空间:** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`MarriageOfferCampaignBehavior` 是 `TaleWorlds.CampaignSystem.CampaignBehaviors` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### RegisterEvents

```csharp
public override void RegisterEvents()
```

### SyncData

```csharp
public override void SyncData(IDataStore dataStore)
```

### CreateMarriageOffer

```csharp
public void CreateMarriageOffer(Hero currentOfferedPlayerClanHero, Hero currentOfferedOtherClanHero)
```

### GetMarriageAcceptedConsequences

```csharp
public MBBindingList<TextObject> GetMarriageAcceptedConsequences()
```

### OnMarriageOfferAcceptedOnPopUp

```csharp
public void OnMarriageOfferAcceptedOnPopUp()
```

### OnMarriageOfferedToPlayer

```csharp
public void OnMarriageOfferedToPlayer(Hero suitor, Hero maiden)
```

### OnMarriageOfferDeclinedOnPopUp

```csharp
public void OnMarriageOfferDeclinedOnPopUp()
```

### OnMarriageOfferCanceled

```csharp
public void OnMarriageOfferCanceled(Hero suitor, Hero maiden)
```

### IsHeroEngaged

```csharp
public bool IsHeroEngaged(Hero hero)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)