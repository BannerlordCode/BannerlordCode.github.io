---
title: "KingdomDecision"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomDecision`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomDecision

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** public abstract class KingdomDecision
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Election/KingdomDecision.cs`

## Overview

`KingdomDecision` is the abstract base for kingdom-level decisions put to a vote (policies, war declarations, annexations, king selection, etc.). A decision has a `ProposerClan`, a `Kingdom`, a `TriggerTime`, and tracks whether it's been `IsEnforced` / `PlayerExamined`. Mods subclass it to add custom kingdom decisions and override `IsKingsVoteAllowed`, `DetermineCalculators`, and `OnDecisionConcluded`.

## Mental Model

Treat `KingdomDecision` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Key Properties

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

## Key Methods

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

## Usage Example

```csharp
var implementation = new CustomKingdomDecision();
```

## See Also

- [Complete Class Catalog](../catalog)