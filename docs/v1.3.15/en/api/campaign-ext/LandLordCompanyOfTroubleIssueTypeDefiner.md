<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LandLordCompanyOfTroubleIssueTypeDefiner`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LandLordCompanyOfTroubleIssueTypeDefiner

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LandLordCompanyOfTroubleIssueTypeDefiner : SaveableTypeDefiner`
**Base:** `SaveableTypeDefiner`
**Area:** campaign-ext

## Overview

`LandLordCompanyOfTroubleIssueTypeDefiner` lives in `TaleWorlds.CampaignSystem.Issues`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### company_of_trouble_menu_game_menu_on_init_background
`public static void company_of_trouble_menu_game_menu_on_init_background(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `company_of_trouble_menu_game_menu_on_init_background`.

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Called when the `check for issue` event is raised.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** Gets the current value of `frequency`.

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Handles logic related to `issue stay alive conditions`.

## Usage Example

```csharp
// First obtain a LandLordCompanyOfTroubleIssueTypeDefiner instance from game state, then call one of its public methods
var value = new LandLordCompanyOfTroubleIssueTypeDefiner();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
