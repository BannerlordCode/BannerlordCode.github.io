<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TradeAgreementDecision`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TradeAgreementDecision

**命名空间:** TaleWorlds.CampaignSystem.Election
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`TradeAgreementDecision` 是 `TaleWorlds.CampaignSystem.Election` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### OnShowDecision

```csharp
public override bool OnShowDecision()
```

### ApplyChosenOutcome

```csharp
public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)
```

### ApplySecondaryEffects

```csharp
public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)
```

### GetProposerClanForPlayerKingdom

```csharp
public static Clan GetProposerClanForPlayerKingdom(Kingdom target)
```

### DetermineChooser

```csharp
public override Clan DetermineChooser()
```

### DetermineInitialCandidates

```csharp
public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()
```

### DetermineSponsors

```csharp
public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)
```

### DetermineSupport

```csharp
public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)
```

### GetChooseDescription

```csharp
public override TextObject GetChooseDescription()
```

### GetChooseTitle

```csharp
public override TextObject GetChooseTitle()
```

### GetChosenOutcomeText

```csharp
public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)
```

### GetGeneralTitle

```csharp
public override TextObject GetGeneralTitle()
```

### GetProposalInfluenceCost

```csharp
public override int GetProposalInfluenceCost()
```

### CanMakeDecision

```csharp
public override bool CanMakeDecision(out TextObject reason, bool includeReason = false)
```

### CalculateSupport

```csharp
public float CalculateSupport(Clan clan)
```

### GetQueriedDecisionOutcome

```csharp
public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)
```

### GetSecondaryEffects

```csharp
public override TextObject GetSecondaryEffects()
```

### GetSupportDescription

```csharp
public override TextObject GetSupportDescription()
```

### GetSupportTitle

```csharp
public override TextObject GetSupportTitle()
```

### IsAllowed

```csharp
public override bool IsAllowed()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)