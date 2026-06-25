---
title: "IssueManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IssueManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IssueManager

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class IssueManager : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**File:** `TaleWorlds.CampaignSystem/Issues/IssueManager.cs`

## Overview

`IssueManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `IssueManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueSolvingCompanionList` | `public IEnumerable<Hero> IssueSolvingCompanionList { get; }` |

## Key Methods

### InitializeForSavedGame
`public void InitializeForSavedGame()`

**Purpose:** Initializes the state, resources, or bindings for `for saved game`.

### CreateNewIssue
`public bool CreateNewIssue(in PotentialIssueData pid, Hero issueOwner)`

**Purpose:** Creates a new `new issue` instance or object.

### StartIssueQuest
`public bool StartIssueQuest(Hero issueOwner)`

**Purpose:** Handles logic related to `start issue quest`.

### DeactivateIssue
`public void DeactivateIssue(IssueBase issue)`

**Purpose:** Handles logic related to `deactivate issue`.

### ChangeIssueOwner
`public void ChangeIssueOwner(IssueBase issue, Hero newOwner)`

**Purpose:** Handles logic related to `change issue owner`.

### AddPotentialIssueData
`public void AddPotentialIssueData(Hero hero, PotentialIssueData issueData)`

**Purpose:** Adds `potential issue data` to the current collection or state.

### CheckForIssues
`public List<PotentialIssueData> CheckForIssues(Hero issueOwner)`

**Purpose:** Handles logic related to `check for issues`.

### DailyTick
`public override void DailyTick()`

**Purpose:** Handles logic related to `daily tick`.

### HourlyTick
`public override void HourlyTick()`

**Purpose:** Handles logic related to `hourly tick`.

### TryToMakeTroopsReturn
`public void TryToMakeTroopsReturn(IssueBase issue)`

**Purpose:** Attempts to get `to make troops return`, usually returning the result in an out parameter.

### IsThereActiveIssueWithTypeInSettlement
`public bool IsThereActiveIssueWithTypeInSettlement(Type type, Settlement settlement)`

**Purpose:** Handles logic related to `is there active issue with type in settlement`.

### GetNumOfAvailableIssuesInSettlement
`public int GetNumOfAvailableIssuesInSettlement(Settlement settlement)`

**Purpose:** Gets the current value of `num of available issues in settlement`.

### GetNumOfActiveIssuesInSettlement
`public int GetNumOfActiveIssuesInSettlement(Settlement settlement, bool includeQuests)`

**Purpose:** Gets the current value of `num of active issues in settlement`.

### CheckIssueForMenuLocations
`public GameMenuOption.IssueQuestFlags CheckIssueForMenuLocations(List<Location> currentLocations, bool getIssuesWithoutAQuest = false)`

**Purpose:** Handles logic related to `check issue for menu locations`.

### OnQuestCompleted
`public override void OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)`

**Purpose:** Called when the `quest completed` event is raised.

### OnHeroUnregistered
`public override void OnHeroUnregistered(Hero hero)`

**Purpose:** Called when the `hero unregistered` event is raised.

### OnSettlementEntered
`public override void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**Purpose:** Called when the `settlement entered` event is raised.

### OnSettlementLeft
`public override void OnSettlementLeft(MobileParty party, Settlement settlement)`

**Purpose:** Called when the `settlement left` event is raised.

### OnCharacterPortraitPopUpOpened
`public override void OnCharacterPortraitPopUpOpened(CharacterObject character)`

**Purpose:** Called when the `character portrait pop up opened` event is raised.

### OnHeroKilled
`public override void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)`

**Purpose:** Called when the `hero killed` event is raised.

### OnSettlementOwnerChanged
`public override void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)`

**Purpose:** Called when the `settlement owner changed` event is raised.

### ToggleAllIssueTracks
`public void ToggleAllIssueTracks(bool enableTrack)`

**Purpose:** Handles logic related to `toggle all issue tracks`.

### AddIssueCoolDownData
`public void AddIssueCoolDownData(Type type, IssueCoolDownData data)`

**Purpose:** Adds `issue cool down data` to the current collection or state.

### HasIssueCoolDown
`public bool HasIssueCoolDown(Type type, Hero hero)`

**Purpose:** Checks whether the current object has/contains `issue cool down`.

### CanHaveCampaignIssues
`public override void CanHaveCampaignIssues(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `have campaign issues`.

### CanHeroDie
`public override void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**Purpose:** Checks whether the current object can `hero die`.

### CanHeroBecomePrisoner
`public override void CanHeroBecomePrisoner(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `hero become prisoner`.

### CanHeroMarry
`public override void CanHeroMarry(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `hero marry`.

### CanHeroEquipmentBeChanged
`public override void CanHeroEquipmentBeChanged(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `hero equipment be changed`.

### CanHeroLeadParty
`public override void CanHeroLeadParty(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `hero lead party`.

### CanMoveToSettlement
`public override void CanMoveToSettlement(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `move to settlement`.

### CanBeGovernorOrHavePartyRole
`public override void CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `be governor or have party role`.

### IsSettlementBusy
`public override void IsSettlementBusy(Settlement settlement, object asker, ref int priority)`

**Purpose:** Handles logic related to `is settlement busy`.

### FillIssueCountsPerSettlement
`public static void FillIssueCountsPerSettlement(Dictionary<Settlement, int> issueCountPerSettlement)`

**Purpose:** Handles logic related to `fill issue counts per settlement`.

### GetIssuesInSettlement
`public static IEnumerable<IssueBase> GetIssuesInSettlement(Settlement settlement, bool onlyNotables = true)`

**Purpose:** Gets the current value of `issues in settlement`.

### GetIssueOfQuest
`public static IssueBase GetIssueOfQuest(QuestBase quest)`

**Purpose:** Gets the current value of `issue of quest`.

### FillIssueCountsPerClan
`public static void FillIssueCountsPerClan(Dictionary<Clan, int> issueCountPerClan, IEnumerable<Clan> clans)`

**Purpose:** Handles logic related to `fill issue counts per clan`.

## Usage Example

```csharp
var manager = IssueManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)