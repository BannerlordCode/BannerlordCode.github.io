<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ExpelClanDecisionOutcome`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ExpelClanDecisionOutcome

**命名空间:** TaleWorlds.CampaignSystem.Election
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ExpelClanDecisionOutcome` 是 `TaleWorlds.CampaignSystem.Election` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### IsAllowed

```csharp
public override bool IsAllowed()
```

### GetProposalInfluenceCost

```csharp
public override int GetProposalInfluenceCost()
```

### GetGeneralTitle

```csharp
public override TextObject GetGeneralTitle()
```

### GetSupportTitle

```csharp
public override TextObject GetSupportTitle()
```

### GetChooseTitle

```csharp
public override TextObject GetChooseTitle()
```

### GetSupportDescription

```csharp
public override TextObject GetSupportDescription()
```

### GetChooseDescription

```csharp
public override TextObject GetChooseDescription()
```

### DetermineInitialCandidates

```csharp
public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()
```

### DetermineChooser

```csharp
public override Clan DetermineChooser()
```

### DetermineSupport

```csharp
public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)
```

### DetermineSponsors

```csharp
public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)
```

### ApplyChosenOutcome

```csharp
public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)
```

### GetSecondaryEffects

```csharp
public override TextObject GetSecondaryEffects()
```

### ApplySecondaryEffects

```csharp
public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)
```

### GetChosenOutcomeText

```csharp
public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)
```

### GetQueriedDecisionOutcome

```csharp
public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)
```

### GetDecisionTitle

```csharp
public override TextObject GetDecisionTitle()
```

### GetDecisionDescription

```csharp
public override TextObject GetDecisionDescription()
```

### GetDecisionLink

```csharp
public override string GetDecisionLink()
```

### GetDecisionImageIdentifier

```csharp
public override ImageIdentifier GetDecisionImageIdentifier()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)