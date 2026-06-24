<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LandlordNeedsAccessToVillageCommonsIssueQuest`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LandlordNeedsAccessToVillageCommonsIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LandlordNeedsAccessToVillageCommonsIssueQuest : QuestBase`
**Base:** `QuestBase`
**Area:** campaign-ext

## Overview

`LandlordNeedsAccessToVillageCommonsIssueQuest` lives in `TaleWorlds.CampaignSystem.Issues`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `Title` | `public sealed override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Called when the `check for issue` event is raised.

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**Purpose:** Gets the current value of `alternative solution skill`.

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Handles logic related to `alternative solution condition`.

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Handles logic related to `do troops satisfy alternative solution`.

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Handles logic related to `is troop type needed by alternative solution`.

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** Gets the current value of `frequency`.

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Handles logic related to `issue stay alive conditions`.

### OnFailed
`public override void OnFailed()`

**Purpose:** Called when the `failed` event is raised.

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can have campaign issues info is requested` event is raised.

## Usage Example

```csharp
// First obtain a LandlordNeedsAccessToVillageCommonsIssueQuest instance from game state, then call one of its public methods
var value = new LandlordNeedsAccessToVillageCommonsIssueQuest();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
