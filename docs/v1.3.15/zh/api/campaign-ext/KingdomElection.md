<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomElection`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomElection

**命名空间:** TaleWorlds.CampaignSystem.Election
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`KingdomElection` 是 `TaleWorlds.CampaignSystem.Election` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `PossibleOutcomes` | `public MBReadOnlyList<DecisionOutcome> PossibleOutcomes { get; }` |
| `IsCancelled` | `public bool IsCancelled { get; }` |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter { get; }` |
| `IsPlayerChooser` | `public bool IsPlayerChooser { get; }` |


## 主要方法

### StartElection

```csharp
public void StartElection()
```

### StartElectionWithoutPlayer

```csharp
public void StartElectionWithoutPlayer()
```

### GetLikelihoodForSponsor

```csharp
public float GetLikelihoodForSponsor(Clan sponsor)
```

### GetRelationChangeWithSponsor

```csharp
public int GetRelationChangeWithSponsor(Hero opposerOrSupporter, Supporter.SupportWeights supportWeight, bool isOpposingSides)
```

### GetChosenOutcomeText

```csharp
public TextObject GetChosenOutcomeText()
```

### DetermineOfficialSupport

```csharp
public void DetermineOfficialSupport()
```

### GetInfluenceCostOfOutcome

```csharp
public int GetInfluenceCostOfOutcome(DecisionOutcome outcome, Clan supporter, Supporter.SupportWeights weight)
```

### GetSecondaryEffects

```csharp
public TextObject GetSecondaryEffects()
```

### OnPlayerSupport

```csharp
public void OnPlayerSupport(DecisionOutcome decisionOutcome, Supporter.SupportWeights supportWeight)
```

### ApplySelection

```csharp
public void ApplySelection()
```

### GetSortedDecisionOutcomes

```csharp
public MBList<DecisionOutcome> GetSortedDecisionOutcomes()
```

### GetGeneralTitle

```csharp
public TextObject GetGeneralTitle()
```

### GetTitle

```csharp
public TextObject GetTitle()
```

### GetDescription

```csharp
public TextObject GetDescription()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)