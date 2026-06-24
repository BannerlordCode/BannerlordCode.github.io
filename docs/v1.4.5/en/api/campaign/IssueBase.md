<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IssueBase`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
- [🔀 Cross-Version Compare /versions/IssueBase](/versions/IssueBase)
<!-- END BREADCRUMB -->
# IssueBase

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class IssueBase : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/IssueBase.cs`

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
| `IssueQuestSolutionExplanationByIssueGiver` | `public abstract TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public abstract TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public virtual int AlternativeSolutionBaseNeededMenCount { get; }` |
| `AlternativeSolutionReturnTimeForTroops` | `public CampaignTime AlternativeSolutionReturnTimeForTroops { get; }` |
| `IsThereAlternativeSolution` | `public abstract bool IsThereAlternativeSolution { get; }` |
| `AlternativeSolutionIssueEffectClearTime` | `public CampaignTime AlternativeSolutionIssueEffectClearTime { get; }` |
| `AlternativeSolutionHero` | `public Hero AlternativeSolutionHero { get; }` |
| `IssueDiscussAlternativeSolution` | `public virtual TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public virtual TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `IssueAlternativeSolutionFailLog` | `public virtual TextObject IssueAlternativeSolutionFailLog { get; }` |
| `IsThereLordSolution` | `public abstract bool IsThereLordSolution { get; }` |
| `NeededInfluenceForLordSolution` | `public virtual int NeededInfluenceForLordSolution { get; set; }` |
| `CounterOfferHero` | `public virtual Hero CounterOfferHero { get; set; }` |
| `IssueOwner` | `public Hero IssueOwner { get; set; }` |
| `Title` | `public abstract TextObject Title { get; }` |
| `IssueQuest` | `public QuestBase IssueQuest { get; }` |
| `IssueSettlement` | `public Settlement IssueSettlement { get; }` |
| `Description` | `public abstract TextObject Description { get; }` |
| `IsTriedToSolveBefore` | `public bool IsTriedToSolveBefore { get; }` |

## Key Methods

### GetTotalAlternativeSolutionNeededMenCount
`public int GetTotalAlternativeSolutionNeededMenCount()`

**Purpose:** Gets the current value of `total alternative solution needed men count`.

### GetTotalAlternativeSolutionDurationInDays
`public int GetTotalAlternativeSolutionDurationInDays()`

**Purpose:** Gets the current value of `total alternative solution duration in days`.

### GetBaseAlternativeSolutionDurationInDays
`public int GetBaseAlternativeSolutionDurationInDays()`

**Purpose:** Gets the current value of `base alternative solution duration in days`.

### AlternativeSolutionCondition
`public virtual bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Handles logic related to `alternative solution condition`.

### AlternativeSolutionStartConsequence
`public virtual void AlternativeSolutionStartConsequence()`

**Purpose:** Handles logic related to `alternative solution start consequence`.

### DoTroopsSatisfyAlternativeSolution
`public virtual bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Handles logic related to `do troops satisfy alternative solution`.

### IsTroopTypeNeededByAlternativeSolution
`public virtual bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Handles logic related to `is troop type needed by alternative solution`.

### LordSolutionCondition
`public virtual bool LordSolutionCondition(out TextObject explanation)`

**Purpose:** Handles logic related to `lord solution condition`.

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

### GetActiveIssueEffectAmount
`public float GetActiveIssueEffectAmount(IssueEffect issueEffect)`

**Purpose:** Gets the current value of `active issue effect amount`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### InitializeIssueBaseOnLoad
`public void InitializeIssueBaseOnLoad()`

**Purpose:** Initializes the state, resources, or bindings for `issue base on load`.

### GetFrequency
`public abstract IssueFrequency GetFrequency()`

**Purpose:** Gets the current value of `frequency`.

### IssueStayAliveConditions
`public abstract bool IssueStayAliveConditions()`

**Purpose:** Handles logic related to `issue stay alive conditions`.

### CanBeCompletedByAI
`public virtual bool CanBeCompletedByAI()`

**Purpose:** Checks whether the current object can `be completed by a i`.

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public virtual void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can have campaign issues info is requested` event is raised.

### OnHeroCanLeadPartyInfoIsRequested
`public virtual void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can lead party info is requested` event is raised.

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public virtual void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can have party role or be governor info is requested` event is raised.

### OnHeroCanDieInfoIsRequested
`public virtual void OnHeroCanDieInfoIsRequested(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**Purpose:** Called when the `hero can die info is requested` event is raised.

### OnHeroCanBecomePrisonerInfoIsRequested
`public virtual void OnHeroCanBecomePrisonerInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can become prisoner info is requested` event is raised.

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public virtual void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can be selected in inventory info is requested` event is raised.

### OnHeroCanMoveToSettlementInfoIsRequested
`public virtual void OnHeroCanMoveToSettlementInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can move to settlement info is requested` event is raised.

### OnHeroCanMarryInfoIsRequested
`public virtual void OnHeroCanMarryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can marry info is requested` event is raised.

### IsSettlementBusy
`public virtual void IsSettlementBusy(Settlement settlement, object asker, ref int priority)`

**Purpose:** Handles logic related to `is settlement busy`.

### StartIssueWithQuest
`public bool StartIssueWithQuest()`

**Purpose:** Handles logic related to `start issue with quest`.

### StartIssueWithAlternativeSolution
`public void StartIssueWithAlternativeSolution()`

**Purpose:** Handles logic related to `start issue with alternative solution`.

### OnAlternativeSolutionSolvedAndTroopsAreReturning
`public void OnAlternativeSolutionSolvedAndTroopsAreReturning()`

**Purpose:** Called when the `alternative solution solved and troops are returning` event is raised.

### IssueFinalized
`public void IssueFinalized()`

**Purpose:** Handles logic related to `issue finalized`.

### CompleteIssueWithQuest
`public void CompleteIssueWithQuest()`

**Purpose:** Handles logic related to `complete issue with quest`.

### CompleteIssueWithTimedOut
`public void CompleteIssueWithTimedOut()`

**Purpose:** Handles logic related to `complete issue with timed out`.

### CompleteIssueWithStayAliveConditionsFailed
`public void CompleteIssueWithStayAliveConditionsFailed()`

**Purpose:** Handles logic related to `complete issue with stay alive conditions failed`.

### CompleteIssueWithBetrayal
`public void CompleteIssueWithBetrayal()`

**Purpose:** Handles logic related to `complete issue with betrayal`.

### CompleteIssueWithFail
`public void CompleteIssueWithFail(TextObject log = null)`

**Purpose:** Handles logic related to `complete issue with fail`.

### CompleteIssueWithCancel
`public void CompleteIssueWithCancel(TextObject log = null)`

**Purpose:** Handles logic related to `complete issue with cancel`.

### CompleteIssueWithAiLord
`public void CompleteIssueWithAiLord(Hero issueSolver)`

**Purpose:** Handles logic related to `complete issue with ai lord`.

### StartIssueWithLordSolution
`public void StartIssueWithLordSolution()`

**Purpose:** Handles logic related to `start issue with lord solution`.

### CompleteIssueWithAlternativeSolution
`public void CompleteIssueWithAlternativeSolution()`

**Purpose:** Handles logic related to `complete issue with alternative solution`.

### CompleteIssueWithLordSolutionWithRefuseCounterOffer
`public void CompleteIssueWithLordSolutionWithRefuseCounterOffer()`

**Purpose:** Handles logic related to `complete issue with lord solution with refuse counter offer`.

### CompleteIssueWithLordSolutionWithAcceptCounterOffer
`public void CompleteIssueWithLordSolutionWithAcceptCounterOffer()`

**Purpose:** Handles logic related to `complete issue with lord solution with accept counter offer`.

### InitializeIssueOnSettlementOwnerChange
`public void InitializeIssueOnSettlementOwnerChange()`

**Purpose:** Initializes the state, resources, or bindings for `issue on settlement owner change`.

### AddLog
`public void AddLog(JournalLog log)`

**Purpose:** Adds `log` to the current collection or state.

### AddTrackedObject
`public void AddTrackedObject(ITrackableCampaignObject o)`

**Purpose:** Adds `tracked object` to the current collection or state.

### ToggleTrackedObjects
`public void ToggleTrackedObjects(bool enableTrack)`

**Purpose:** Handles logic related to `toggle tracked objects`.

## Usage Example

```csharp
var implementation = new CustomIssueBase();
```

## See Also

- [Complete Class Catalog](../catalog)