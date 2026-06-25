---
title: "IssueManager"
description: "Auto-generated class reference for IssueManager."
---
# IssueManager

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class IssueManager : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/IssueManager.cs`

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

**Purpose:** Prepares the resources, state, or bindings required by `for saved game`.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.InitializeForSavedGame();
```

### CreateNewIssue
`public bool CreateNewIssue(in PotentialIssueData pid, Hero issueOwner)`

**Purpose:** Constructs a new `new issue` entity and returns it to the caller.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
var result = issueManager.CreateNewIssue(pid, issueOwner);
```

### StartIssueQuest
`public bool StartIssueQuest(Hero issueOwner)`

**Purpose:** Starts the `issue quest` flow or state machine.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
var result = issueManager.StartIssueQuest(issueOwner);
```

### DeactivateIssue
`public void DeactivateIssue(IssueBase issue)`

**Purpose:** Deactivates the resource, state, or feature associated with `issue`.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.DeactivateIssue(issue);
```

### ChangeIssueOwner
`public void ChangeIssueOwner(IssueBase issue, Hero newOwner)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.ChangeIssueOwner(issue, newOwner);
```

### AddPotentialIssueData
`public void AddPotentialIssueData(Hero hero, PotentialIssueData issueData)`

**Purpose:** Adds `potential issue data` to the current collection or state.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.AddPotentialIssueData(hero, issueData);
```

### CheckForIssues
`public List<PotentialIssueData> CheckForIssues(Hero issueOwner)`

**Purpose:** Verifies whether `for issues` holds true for the current object.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
var result = issueManager.CheckForIssues(issueOwner);
```

### DailyTick
`public override void DailyTick()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.DailyTick();
```

### HourlyTick
`public override void HourlyTick()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.HourlyTick();
```

### TryToMakeTroopsReturn
`public void TryToMakeTroopsReturn(IssueBase issue)`

**Purpose:** Attempts to retrieve `to make troops return`, usually returning success through an out parameter.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.TryToMakeTroopsReturn(issue);
```

### IsThereActiveIssueWithTypeInSettlement
`public bool IsThereActiveIssueWithTypeInSettlement(Type type, Settlement settlement)`

**Purpose:** Determines whether the current object is in the `there active issue with type in settlement` state or condition.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
var result = issueManager.IsThereActiveIssueWithTypeInSettlement(type, settlement);
```

### GetNumOfAvailableIssuesInSettlement
`public int GetNumOfAvailableIssuesInSettlement(Settlement settlement)`

**Purpose:** Reads and returns the `num of available issues in settlement` value held by the current object.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
var result = issueManager.GetNumOfAvailableIssuesInSettlement(settlement);
```

### GetNumOfActiveIssuesInSettlement
`public int GetNumOfActiveIssuesInSettlement(Settlement settlement, bool includeQuests)`

**Purpose:** Reads and returns the `num of active issues in settlement` value held by the current object.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
var result = issueManager.GetNumOfActiveIssuesInSettlement(settlement, false);
```

### CheckIssueForMenuLocations
`public GameMenuOption.IssueQuestFlags CheckIssueForMenuLocations(List<Location> currentLocations, bool getIssuesWithoutAQuest = false)`

**Purpose:** Verifies whether `issue for menu locations` holds true for the current object.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
var result = issueManager.CheckIssueForMenuLocations(currentLocations, false);
```

### OnQuestCompleted
`public override void OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)`

**Purpose:** Invoked when the `quest completed` event is raised.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.OnQuestCompleted(quest, detail);
```

### OnHeroUnregistered
`public override void OnHeroUnregistered(Hero hero)`

**Purpose:** Invoked when the `hero unregistered` event is raised.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.OnHeroUnregistered(hero);
```

### OnSettlementEntered
`public override void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**Purpose:** Invoked when the `settlement entered` event is raised.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.OnSettlementEntered(party, settlement, hero);
```

### OnSettlementLeft
`public override void OnSettlementLeft(MobileParty party, Settlement settlement)`

**Purpose:** Invoked when the `settlement left` event is raised.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.OnSettlementLeft(party, settlement);
```

### OnCharacterPortraitPopUpOpened
`public override void OnCharacterPortraitPopUpOpened(CharacterObject character)`

**Purpose:** Invoked when the `character portrait pop up opened` event is raised.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.OnCharacterPortraitPopUpOpened(character);
```

### OnHeroKilled
`public override void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)`

**Purpose:** Invoked when the `hero killed` event is raised.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.OnHeroKilled(victim, killer, detail, true);
```

### OnSettlementOwnerChanged
`public override void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)`

**Purpose:** Invoked when the `settlement owner changed` event is raised.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.OnSettlementOwnerChanged(settlement, false, newOwner, oldOwner, capturerHero, detail);
```

### ToggleAllIssueTracks
`public void ToggleAllIssueTracks(bool enableTrack)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.ToggleAllIssueTracks(false);
```

### AddIssueCoolDownData
`public void AddIssueCoolDownData(Type type, IssueCoolDownData data)`

**Purpose:** Adds `issue cool down data` to the current collection or state.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.AddIssueCoolDownData(type, data);
```

### HasIssueCoolDown
`public bool HasIssueCoolDown(Type type, Hero hero)`

**Purpose:** Determines whether the current object already holds `issue cool down`.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
var result = issueManager.HasIssueCoolDown(type, hero);
```

### CanHaveCampaignIssues
`public override void CanHaveCampaignIssues(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object meets the preconditions for `have campaign issues`.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.CanHaveCampaignIssues(hero, result);
```

### CanHeroDie
`public override void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**Purpose:** Checks whether the current object meets the preconditions for `hero die`.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.CanHeroDie(hero, causeOfDeath, result);
```

### CanHeroBecomePrisoner
`public override void CanHeroBecomePrisoner(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object meets the preconditions for `hero become prisoner`.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.CanHeroBecomePrisoner(hero, result);
```

### CanHeroMarry
`public override void CanHeroMarry(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object meets the preconditions for `hero marry`.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.CanHeroMarry(hero, result);
```

### CanHeroEquipmentBeChanged
`public override void CanHeroEquipmentBeChanged(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object meets the preconditions for `hero equipment be changed`.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.CanHeroEquipmentBeChanged(hero, result);
```

### CanHeroLeadParty
`public override void CanHeroLeadParty(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object meets the preconditions for `hero lead party`.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.CanHeroLeadParty(hero, result);
```

### CanMoveToSettlement
`public override void CanMoveToSettlement(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object meets the preconditions for `move to settlement`.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.CanMoveToSettlement(hero, result);
```

### CanBeGovernorOrHavePartyRole
`public override void CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object meets the preconditions for `be governor or have party role`.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.CanBeGovernorOrHavePartyRole(hero, result);
```

### IsSettlementBusy
`public override void IsSettlementBusy(Settlement settlement, object asker, ref int priority)`

**Purpose:** Determines whether the current object is in the `settlement busy` state or condition.

```csharp
// Obtain an instance of IssueManager from the subsystem API first
IssueManager issueManager = ...;
issueManager.IsSettlementBusy(settlement, asker, priority);
```

### FillIssueCountsPerSettlement
`public static void FillIssueCountsPerSettlement(Dictionary<Settlement, int> issueCountPerSettlement)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
IssueManager.FillIssueCountsPerSettlement(dictionary<Settlement, 0);
```

### GetIssuesInSettlement
`public static IEnumerable<IssueBase> GetIssuesInSettlement(Settlement settlement, bool onlyNotables = true)`

**Purpose:** Reads and returns the `issues in settlement` value held by the current object.

```csharp
// Static call; no instance required
IssueManager.GetIssuesInSettlement(settlement, false);
```

### GetIssueOfQuest
`public static IssueBase GetIssueOfQuest(QuestBase quest)`

**Purpose:** Reads and returns the `issue of quest` value held by the current object.

```csharp
// Static call; no instance required
IssueManager.GetIssueOfQuest(quest);
```

### FillIssueCountsPerClan
`public static void FillIssueCountsPerClan(Dictionary<Clan, int> issueCountPerClan, IEnumerable<Clan> clans)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
IssueManager.FillIssueCountsPerClan(dictionary<Clan, 0, clans);
```

## Usage Example

```csharp
var manager = IssueManager.Current;
```

## See Also

- [Area Index](../)