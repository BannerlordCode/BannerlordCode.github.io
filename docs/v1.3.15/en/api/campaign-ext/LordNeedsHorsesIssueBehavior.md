<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LordNeedsHorsesIssueBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LordNeedsHorsesIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LordNeedsHorsesIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Area:** campaign-ext

## Overview

`LordNeedsHorsesIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## Key Methods

### ComputeMountsOverInfantryCountRatio
`public static float ComputeMountsOverInfantryCountRatio(MobileParty issueParty, out int numInfantry)`

**Purpose:** Handles logic related to `compute mounts over infantry count ratio`.

### IsMountCamel
`public static bool IsMountCamel(ItemObject mountObject)`

**Purpose:** Handles logic related to `is mount camel`.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Handles logic related to `do troops satisfy alternative solution`.

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Handles logic related to `is troop type needed by alternative solution`.

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Handles logic related to `alternative solution condition`.

### AlternativeSolutionStartConsequence
`public override void AlternativeSolutionStartConsequence()`

**Purpose:** Handles logic related to `alternative solution start consequence`.

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** Gets the current value of `frequency`.

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Handles logic related to `issue stay alive conditions`.

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**Purpose:** Gets the current value of `alternative solution skill`.

### OnFailed
`public override void OnFailed()`

**Purpose:** Called when the `failed` event is raised.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
LordNeedsHorsesIssueBehavior.ComputeMountsOverInfantryCountRatio(issueParty, numInfantry);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
