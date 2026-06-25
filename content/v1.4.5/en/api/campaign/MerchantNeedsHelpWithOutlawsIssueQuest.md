---
title: "MerchantNeedsHelpWithOutlawsIssueQuest"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MerchantNeedsHelpWithOutlawsIssueQuest`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MerchantNeedsHelpWithOutlawsIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MerchantNeedsHelpWithOutlawsIssueQuest`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/MerchantNeedsHelpWithOutlawsIssueQuestBehavior.cs`

## Overview

`MerchantNeedsHelpWithOutlawsIssueQuest` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Handles logic related to `do troops satisfy alternative solution`.

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Handles logic related to `alternative solution condition`.

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Handles logic related to `is troop type needed by alternative solution`.

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Gets the current value of `frequency`.

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Handles logic related to `issue stay alive conditions`.

### IsSettlementBusy
`public override void IsSettlementBusy(Settlement settlement, object asker, ref int priority)`

**Purpose:** Handles logic related to `is settlement busy`.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Called when the `check for issue` event is raised.

## Usage Example

```csharp
var value = new MerchantNeedsHelpWithOutlawsIssueQuest();
value.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

## See Also

- [Complete Class Catalog](../catalog)