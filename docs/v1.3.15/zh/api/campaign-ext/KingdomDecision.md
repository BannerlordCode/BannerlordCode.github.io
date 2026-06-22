<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomDecision`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomDecision

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** public abstract class KingdomDecision
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Election/KingdomDecision.cs`

## 概述

`KingdomDecision` 是王国级表决决策的抽象基类（政策、宣战、吞并、选王等）。一个决策有 `ProposerClan`、`Kingdom`、`TriggerTime`，并跟踪是否已 `IsEnforced` / `PlayerExamined`。mod 继承它添加自定义王国决策，重写 `IsKingsVoteAllowed`、`DetermineCalculators`、`OnDecisionConcluded`。

## 主要属性

| Name | Signature |
|------|-----------|
| `Kingdom` | `public Kingdom Kingdom { get { return this._kingdom ?? this.ProposerClan.Kingdom; }` |
| `IsEnforced` | `public bool IsEnforced { get { return this._isEnforced; }` |
| `PlayerExamined` | `public bool PlayerExamined { get { return this._playerExamined; }` |
| `NotifyPlayer` | `public bool NotifyPlayer { get { return this._notifyPlayer || this.IsEnforced; }` |
| `IsPlayerParticipant` | `public bool IsPlayerParticipant { get { return this.Kingdom == Clan.PlayerClan.Kingdom && !Clan.PlayerClan.IsUnderMercenaryService; }` |
| `TriggerTime` | `public CampaignTime TriggerTime { get; protected set; }` |
| `IsKingsVoteAllowed` | `public virtual bool IsKingsVoteAllowed { get { return true; }` |
| `NeedsPlayerResolution` | `public bool NeedsPlayerResolution { get { return this.Kingdom == Clan.PlayerClan.Kingdom && (this.IsEnforced || (this.TriggerTime.IsPast && this.Kingdom.RulingClan == Clan.PlayerClan)); }` |

## 主要方法

### IsAllowed
```csharp
public abstract bool IsAllowed()
```

### GetInfluenceCost
```csharp
public int GetInfluenceCost(Clan sponsorClan)
```

### GetProposalInfluenceCost
```csharp
public abstract int GetProposalInfluenceCost()
```

### GetGeneralTitle
```csharp
public abstract TextObject GetGeneralTitle()
```

### GetSupportTitle
```csharp
public abstract TextObject GetSupportTitle()
```

### GetChooseTitle
```csharp
public abstract TextObject GetChooseTitle()
```

### GetSupportDescription
```csharp
public abstract TextObject GetSupportDescription()
```

### GetChooseDescription
```csharp
public abstract TextObject GetChooseDescription()
```

### CalculateMeritOfOutcome
```csharp
public virtual float CalculateMeritOfOutcome(DecisionOutcome candidateOutcome)
```

### DetermineInitialCandidates
```csharp
public abstract IEnumerable<DecisionOutcome> DetermineInitialCandidates()
```

### NarrowDownCandidates
```csharp
public MBList<DecisionOutcome> NarrowDownCandidates(MBList<DecisionOutcome> initialCandidates, int maxCandidateCount)
```

### DetermineChooser
```csharp
public abstract Clan DetermineChooser()
```

### DetermineSupporters
```csharp
public IEnumerable<Supporter> DetermineSupporters()
```

### CanMakeDecision
```csharp
public virtual bool CanMakeDecision(out TextObject reason, bool includeReason = false)
```

### ShouldBeCancelled
```csharp
public bool ShouldBeCancelled()
```

### DetermineSupportOption
```csharp
public DecisionOutcome DetermineSupportOption(Supporter supporter, MBReadOnlyList<DecisionOutcome> possibleOutcomes, out Supporter.SupportWeights supportWeightOfSelectedOutcome, bool calculateRelationshipEffect)
```

### DetermineSupport
```csharp
public abstract float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)
```

### DetermineSponsors
```csharp
public abstract void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)
```

### ApplyChosenOutcome
```csharp
public abstract void ApplyChosenOutcome(DecisionOutcome chosenOutcome)
```

### GetInfluenceCost
```csharp
public int GetInfluenceCost(DecisionOutcome decisionOutcome, Clan clan, Supporter.SupportWeights supportWeight)
```

### GetSecondaryEffects
```csharp
public abstract TextObject GetSecondaryEffects()
```

### ApplySecondaryEffects
```csharp
public abstract void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)
```

### GetChosenOutcomeText
```csharp
public abstract TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)
```

### SortDecisionOutcomes
```csharp
public MBList<DecisionOutcome> SortDecisionOutcomes(MBReadOnlyList<DecisionOutcome> possibleOutcomes)
```

### GetQueriedDecisionOutcome
```csharp
public abstract DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)
```

### IsSingleClanDecision
```csharp
public bool IsSingleClanDecision()
```

### CalculateRelationshipEffectWithSponsor
```csharp
public virtual float CalculateRelationshipEffectWithSponsor(Clan clan)
```

### GetInfluenceCostOfSupport
```csharp
public int GetInfluenceCostOfSupport(Clan clan, Supporter.SupportWeights supportWeight)
```

### OnShowDecision
```csharp
public virtual bool OnShowDecision()
```

### GetFollowUpDecision
```csharp
public virtual KingdomDecision GetFollowUpDecision()
```

## 使用示例

```csharp
// 提交一个自定义王国决策供表决
public class MyKingdomDecision : KingdomDecision
{
    public MyKingdomDecision(Clan proposerClan) : base(proposerClan) { }
    public override bool IsKingsVoteAllowed => false;
    // 重写 DetermineCalculators(...) 与 OnDecisionConcluded(...)
}

// 触发：
if (Clan.PlayerClan.Kingdom != null)
    Clan.PlayerClan.Kingdom.AddDecision(new MyKingdomDecision(Clan.PlayerClan), notifyPlayer: true);
```

## 参见

- [完整类目录](../catalog)