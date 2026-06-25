---
title: "IssueBase"
description: "Auto-generated class reference for IssueBase."
---
# IssueBase

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class IssueBase : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Issues/IssueBase.cs`

## Overview

`IssueBase` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RelationshipChangeWithIssueOwner` | `public virtual int RelationshipChangeWithIssueOwner { get; set; }` |
| `IssueBriefByIssueGiver` | `public abstract TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public abstract TextObject IssueAcceptByPlayer { get; }` |
| `IssuePlayerResponseAfterLordExplanation` | `public virtual TextObject IssuePlayerResponseAfterLordExplanation { get; }` |
| `IssuePlayerResponseAfterAlternativeExplanation` | `public virtual TextObject IssuePlayerResponseAfterAlternativeExplanation { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public abstract TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public virtual TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueLordSolutionExplanationByIssueGiver` | `public virtual TextObject IssueLordSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public abstract TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public virtual TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public virtual TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueLordSolutionAcceptByPlayer` | `public virtual TextObject IssueLordSolutionAcceptByPlayer { get; }` |
| `IssueLordSolutionResponseByIssueGiver` | `public virtual TextObject IssueLordSolutionResponseByIssueGiver { get; }` |
| `IssueLordSolutionCounterOfferBriefByOtherNpc` | `public virtual TextObject IssueLordSolutionCounterOfferBriefByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferExplanationByOtherNpc` | `public virtual TextObject IssueLordSolutionCounterOfferExplanationByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferAcceptByPlayer` | `public virtual TextObject IssueLordSolutionCounterOfferAcceptByPlayer { get; }` |
| `IssueLordSolutionCounterOfferDeclineByPlayer` | `public virtual TextObject IssueLordSolutionCounterOfferDeclineByPlayer { get; }` |
| `IssueLordSolutionCounterOfferAcceptResponseByOtherNpc` | `public virtual TextObject IssueLordSolutionCounterOfferAcceptResponseByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferDeclineResponseByOtherNpc` | `public virtual TextObject IssueLordSolutionCounterOfferDeclineResponseByOtherNpc { get; }` |
| `IssueAsRumorInSettlement` | `public virtual TextObject IssueAsRumorInSettlement { get; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public virtual int AlternativeSolutionBaseNeededMenCount { get; }` |
| `AlternativeSolutionReturnTimeForTroops` | `public CampaignTime AlternativeSolutionReturnTimeForTroops { get; }` |
| `IsThereAlternativeSolution` | `public abstract bool IsThereAlternativeSolution { get; }` |
| `IsThereDiscussDialogFlow` | `public bool IsThereDiscussDialogFlow { get; }` |
| `AlternativeSolutionIssueEffectClearTime` | `public CampaignTime AlternativeSolutionIssueEffectClearTime { get; }` |
| `AlternativeSolutionHero` | `public Hero AlternativeSolutionHero { get; }` |
| `IssueDiscussAlternativeSolution` | `public virtual TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public virtual TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `IssueAlternativeSolutionFailLog` | `public virtual TextObject IssueAlternativeSolutionFailLog { get; }` |
| `IsThereLordSolution` | `public abstract bool IsThereLordSolution { get; }` |
| `NeededInfluenceForLordSolution` | `public virtual int NeededInfluenceForLordSolution { get; set; }` |
| `CounterOfferHero` | `public virtual Hero CounterOfferHero { get; set; }` |
| `JournalEntries` | `public MBReadOnlyList<JournalLog> JournalEntries { get; set; }` |
| `IssueOwner` | `public Hero IssueOwner { get; set; }` |
| `Title` | `public abstract TextObject Title { get; }` |
| `IssueQuest` | `public QuestBase IssueQuest { get; }` |
| `IssueSettlement` | `public Settlement IssueSettlement { get; }` |
| `Description` | `public abstract TextObject Description { get; }` |
| `IsTriedToSolveBefore` | `public bool IsTriedToSolveBefore { get; }` |
| `IsOngoingWithoutQuest` | `public bool IsOngoingWithoutQuest { get; }` |
| `IsSolvingWithQuest` | `public bool IsSolvingWithQuest { get; }` |
| `IsSolvingWithAlternative` | `public bool IsSolvingWithAlternative { get; }` |
| `IsSolvingWithLordSolution` | `public bool IsSolvingWithLordSolution { get; }` |
| `AlternativeSolutionScaleFlags` | `public virtual IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `AlternativeSolutionHasCasualties` | `public bool AlternativeSolutionHasCasualties { get; }` |
| `AlternativeSolutionHasScaledRequiredTroops` | `public bool AlternativeSolutionHasScaledRequiredTroops { get; }` |
| `AlternativeSolutionHasScaledDuration` | `public bool AlternativeSolutionHasScaledDuration { get; }` |
| `AlternativeSolutionHasFailureRisk` | `public bool AlternativeSolutionHasFailureRisk { get; }` |

## Key Methods

### GetTotalAlternativeSolutionNeededMenCount
`public int GetTotalAlternativeSolutionNeededMenCount()`

**Purpose:** Reads and returns the total alternative solution needed men count value held by the this instance.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
var result = issueBase.GetTotalAlternativeSolutionNeededMenCount();
```

### GetTotalAlternativeSolutionDurationInDays
`public int GetTotalAlternativeSolutionDurationInDays()`

**Purpose:** Reads and returns the total alternative solution duration in days value held by the this instance.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
var result = issueBase.GetTotalAlternativeSolutionDurationInDays();
```

### GetBaseAlternativeSolutionDurationInDays
`public int GetBaseAlternativeSolutionDurationInDays()`

**Purpose:** Reads and returns the base alternative solution duration in days value held by the this instance.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
var result = issueBase.GetBaseAlternativeSolutionDurationInDays();
```

### AlternativeSolutionCondition
`public virtual bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
var result = issueBase.AlternativeSolutionCondition(explanation);
```

### AlternativeSolutionStartConsequence
`public virtual void AlternativeSolutionStartConsequence()`

**Purpose:** Executes the AlternativeSolutionStartConsequence logic.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.AlternativeSolutionStartConsequence();
```

### DoTroopsSatisfyAlternativeSolution
`public virtual bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
var result = issueBase.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public virtual bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
var result = issueBase.IsTroopTypeNeededByAlternativeSolution(character);
```

### LordSolutionCondition
`public virtual bool LordSolutionCondition(out TextObject explanation)`

**Purpose:** Executes the LordSolutionCondition logic.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
var result = issueBase.LordSolutionCondition(explanation);
```

### GetName
`public override TextObject GetName()`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
var result = issueBase.GetName();
```

### GetActiveIssueEffectAmount
`public float GetActiveIssueEffectAmount(IssueEffect issueEffect)`

**Purpose:** Reads and returns the active issue effect amount value held by the this instance.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
var result = issueBase.GetActiveIssueEffectAmount(issueEffect);
```

### GetAlternativeSolutionSkill
`public virtual ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**Purpose:** Reads and returns the alternative solution skill value held by the this instance.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
var result = issueBase.GetAlternativeSolutionSkill(hero);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
var result = issueBase.ToString();
```

### InitializeIssueBaseOnLoad
`public void InitializeIssueBaseOnLoad()`

**Purpose:** Prepares the resources, state, or bindings required by issue base on load.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.InitializeIssueBaseOnLoad();
```

### GetFrequency
`public abstract IssueBase.IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
var result = issueBase.GetFrequency();
```

### IssueStayAliveConditions
`public abstract bool IssueStayAliveConditions()`

**Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
var result = issueBase.IssueStayAliveConditions();
```

### CanBeCompletedByAI
`public virtual bool CanBeCompletedByAI()`

**Purpose:** Checks whether the this instance meets the preconditions for be completed by a i.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
var result = issueBase.CanBeCompletedByAI();
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public virtual void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnHeroCanLeadPartyInfoIsRequested
`public virtual void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can lead party info is requested event is raised.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.OnHeroCanLeadPartyInfoIsRequested(hero, result);
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public virtual void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can have party role or be governor info is requested event is raised.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(hero, result);
```

### OnHeroCanDieInfoIsRequested
`public virtual void OnHeroCanDieInfoIsRequested(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**Purpose:** Invoked when the hero can die info is requested event is raised.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.OnHeroCanDieInfoIsRequested(hero, causeOfDeath, result);
```

### OnHeroCanBecomePrisonerInfoIsRequested
`public virtual void OnHeroCanBecomePrisonerInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can become prisoner info is requested event is raised.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.OnHeroCanBecomePrisonerInfoIsRequested(hero, result);
```

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public virtual void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can be selected in inventory info is requested event is raised.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanMoveToSettlementInfoIsRequested
`public virtual void OnHeroCanMoveToSettlementInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can move to settlement info is requested event is raised.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.OnHeroCanMoveToSettlementInfoIsRequested(hero, result);
```

### OnHeroCanMarryInfoIsRequested
`public virtual void OnHeroCanMarryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can marry info is requested event is raised.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.OnHeroCanMarryInfoIsRequested(hero, result);
```

### IsSettlementBusy
`public virtual void IsSettlementBusy(Settlement settlement, object asker, ref int priority)`

**Purpose:** Determines whether the this instance is in the settlement busy state or condition.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.IsSettlementBusy(settlement, asker, priority);
```

### StartIssueWithQuest
`public bool StartIssueWithQuest()`

**Purpose:** Starts the issue with quest flow or state machine.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
var result = issueBase.StartIssueWithQuest();
```

### StartIssueWithAlternativeSolution
`public void StartIssueWithAlternativeSolution()`

**Purpose:** Starts the issue with alternative solution flow or state machine.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.StartIssueWithAlternativeSolution();
```

### OnAlternativeSolutionSolvedAndTroopsAreReturning
`public void OnAlternativeSolutionSolvedAndTroopsAreReturning()`

**Purpose:** Invoked when the alternative solution solved and troops are returning event is raised.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.OnAlternativeSolutionSolvedAndTroopsAreReturning();
```

### IssueFinalized
`public void IssueFinalized()`

**Purpose:** Creates or raises finalized.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.IssueFinalized();
```

### CompleteIssueWithQuest
`public void CompleteIssueWithQuest()`

**Purpose:** Executes the CompleteIssueWithQuest logic.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.CompleteIssueWithQuest();
```

### CompleteIssueWithTimedOut
`public void CompleteIssueWithTimedOut()`

**Purpose:** Executes the CompleteIssueWithTimedOut logic.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.CompleteIssueWithTimedOut();
```

### CompleteIssueWithStayAliveConditionsFailed
`public void CompleteIssueWithStayAliveConditionsFailed()`

**Purpose:** Executes the CompleteIssueWithStayAliveConditionsFailed logic.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.CompleteIssueWithStayAliveConditionsFailed();
```

### CompleteIssueWithBetrayal
`public void CompleteIssueWithBetrayal()`

**Purpose:** Executes the CompleteIssueWithBetrayal logic.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.CompleteIssueWithBetrayal();
```

### CompleteIssueWithFail
`public void CompleteIssueWithFail(TextObject log = null)`

**Purpose:** Executes the CompleteIssueWithFail logic.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.CompleteIssueWithFail(null);
```

### CompleteIssueWithCancel
`public void CompleteIssueWithCancel(TextObject log = null)`

**Purpose:** Executes the CompleteIssueWithCancel logic.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.CompleteIssueWithCancel(null);
```

### CompleteIssueWithAiLord
`public void CompleteIssueWithAiLord(Hero issueSolver)`

**Purpose:** Executes the CompleteIssueWithAiLord logic.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.CompleteIssueWithAiLord(issueSolver);
```

### StartIssueWithLordSolution
`public void StartIssueWithLordSolution()`

**Purpose:** Starts the issue with lord solution flow or state machine.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.StartIssueWithLordSolution();
```

### CompleteIssueWithAlternativeSolution
`public void CompleteIssueWithAlternativeSolution()`

**Purpose:** Executes the CompleteIssueWithAlternativeSolution logic.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.CompleteIssueWithAlternativeSolution();
```

### CompleteIssueWithLordSolutionWithRefuseCounterOffer
`public void CompleteIssueWithLordSolutionWithRefuseCounterOffer()`

**Purpose:** Executes the CompleteIssueWithLordSolutionWithRefuseCounterOffer logic.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.CompleteIssueWithLordSolutionWithRefuseCounterOffer();
```

### CompleteIssueWithLordSolutionWithAcceptCounterOffer
`public void CompleteIssueWithLordSolutionWithAcceptCounterOffer()`

**Purpose:** Executes the CompleteIssueWithLordSolutionWithAcceptCounterOffer logic.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.CompleteIssueWithLordSolutionWithAcceptCounterOffer();
```

### InitializeIssueOnSettlementOwnerChange
`public void InitializeIssueOnSettlementOwnerChange()`

**Purpose:** Prepares the resources, state, or bindings required by issue on settlement owner change.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.InitializeIssueOnSettlementOwnerChange();
```

### AddLog
`public void AddLog(JournalLog log)`

**Purpose:** Adds log to the current collection or state.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.AddLog(log);
```

### AddTrackedObject
`public void AddTrackedObject(ITrackableCampaignObject o)`

**Purpose:** Adds tracked object to the current collection or state.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.AddTrackedObject(o);
```

### ToggleTrackedObjects
`public void ToggleTrackedObjects(bool enableTrack)`

**Purpose:** Executes the ToggleTrackedObjects logic.

```csharp
// Obtain an instance of IssueBase from the subsystem API first
IssueBase issueBase = ...;
issueBase.ToggleTrackedObjects(false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
IssueBase instance = ...;
```

## See Also

- [Area Index](../)