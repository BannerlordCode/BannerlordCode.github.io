---
title: "QuestManager"
description: "Auto-generated class reference for QuestManager."
---
# QuestManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestManager : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/QuestManager.cs`

## Overview

`QuestManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `QuestManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `QuestDebugMode` | `public bool QuestDebugMode { get; }` |
| `TrackedObjects` | `public MBReadOnlyDictionary<ITrackableCampaignObject, List<QuestBase>> TrackedObjects { get; }` |

## Key Methods

### OnQuestStarted
`public override void OnQuestStarted(QuestBase quest)`

**Purpose:** **Purpose:** Invoked when the quest started event is raised.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
questManager.OnQuestStarted(quest);
```

### IsThereActiveQuestWithType
`public bool IsThereActiveQuestWithType(Type type)`

**Purpose:** **Purpose:** Determines whether the this instance is in the there active quest with type state or condition.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
var result = questManager.IsThereActiveQuestWithType(type);
```

### IsQuestGiver
`public bool IsQuestGiver(Hero offeringHero)`

**Purpose:** **Purpose:** Determines whether the this instance is in the quest giver state or condition.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
var result = questManager.IsQuestGiver(offeringHero);
```

### OnGameLoaded
`public override void OnGameLoaded(CampaignGameStarter campaignGameStarter)`

**Purpose:** **Purpose:** Invoked when the game loaded event is raised.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
questManager.OnGameLoaded(campaignGameStarter);
```

### OnSessionStart
`public override void OnSessionStart(CampaignGameStarter campaignGameStarter)`

**Purpose:** **Purpose:** Invoked when the session start event is raised.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
questManager.OnSessionStart(campaignGameStarter);
```

### HourlyTick
`public override void HourlyTick()`

**Purpose:** **Purpose:** Executes the HourlyTick logic.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
questManager.HourlyTick();
```

### HourlyTickParty
`public override void HourlyTickParty(MobileParty mobileParty)`

**Purpose:** **Purpose:** Executes the HourlyTickParty logic.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
questManager.HourlyTickParty(mobileParty);
```

### DailyTick
`public override void DailyTick()`

**Purpose:** **Purpose:** Executes the DailyTick logic.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
questManager.DailyTick();
```

### WeeklyTick
`public override void WeeklyTick()`

**Purpose:** **Purpose:** Executes the WeeklyTick logic.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
questManager.WeeklyTick();
```

### CheckQuestForMenuLocations
`public GameMenuOption.IssueQuestFlags CheckQuestForMenuLocations(List<Location> currentLocations)`

**Purpose:** **Purpose:** Verifies whether quest for menu locations holds true for the this instance.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
var result = questManager.CheckQuestForMenuLocations(currentLocations);
```

### OnQuestFinalized
`public void OnQuestFinalized(QuestBase quest)`

**Purpose:** **Purpose:** Invoked when the quest finalized event is raised.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
questManager.OnQuestFinalized(quest);
```

### OnPlayerCharacterChanged
`public override void OnPlayerCharacterChanged(Hero oldPlayer, Hero newPlayer, MobileParty newPlayerParty, bool isMainPartyChanged)`

**Purpose:** **Purpose:** Invoked when the player character changed event is raised.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
questManager.OnPlayerCharacterChanged(oldPlayer, newPlayer, newPlayerParty, false);
```

### CanHaveCampaignIssues
`public override void CanHaveCampaignIssues(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for have campaign issues.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
questManager.CanHaveCampaignIssues(hero, result);
```

### CanHeroDie
`public override void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for hero die.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
questManager.CanHeroDie(hero, causeOfDeath, result);
```

### CanHeroBecomePrisoner
`public override void CanHeroBecomePrisoner(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for hero become prisoner.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
questManager.CanHeroBecomePrisoner(hero, result);
```

### CanHeroEquipmentBeChanged
`public override void CanHeroEquipmentBeChanged(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for hero equipment be changed.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
questManager.CanHeroEquipmentBeChanged(hero, result);
```

### CanHeroLeadParty
`public override void CanHeroLeadParty(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for hero lead party.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
questManager.CanHeroLeadParty(hero, result);
```

### CanHeroMarry
`public override void CanHeroMarry(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for hero marry.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
questManager.CanHeroMarry(hero, result);
```

### CanMoveToSettlement
`public override void CanMoveToSettlement(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for move to settlement.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
questManager.CanMoveToSettlement(hero, result);
```

### CanBeGovernorOrHavePartyRole
`public override void CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for be governor or have party role.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
questManager.CanBeGovernorOrHavePartyRole(hero, result);
```

### AddTrackedObjectForQuest
`public void AddTrackedObjectForQuest(ITrackableCampaignObject trackedObject, QuestBase relatedQuest)`

**Purpose:** **Purpose:** Adds tracked object for quest to the current collection or state.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
questManager.AddTrackedObjectForQuest(trackedObject, relatedQuest);
```

### RemoveTrackedObjectForQuest
`public void RemoveTrackedObjectForQuest(ITrackableCampaignObject trackedObject, QuestBase relatedQuest)`

**Purpose:** **Purpose:** Removes tracked object for quest from the current collection or state.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
questManager.RemoveTrackedObjectForQuest(trackedObject, relatedQuest);
```

### RemoveAllTrackedObjectsForQuest
`public void RemoveAllTrackedObjectsForQuest(QuestBase quest)`

**Purpose:** **Purpose:** Removes all tracked objects for quest from the current collection or state.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
questManager.RemoveAllTrackedObjectsForQuest(quest);
```

### GetAllTrackedObjectsOfAQuest
`public List<ITrackableCampaignObject> GetAllTrackedObjectsOfAQuest(QuestBase quest)`

**Purpose:** **Purpose:** Reads and returns the all tracked objects of a quest value held by the this instance.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
var result = questManager.GetAllTrackedObjectsOfAQuest(quest);
```

### GetQuestGiverQuests
`public IEnumerable<QuestBase> GetQuestGiverQuests(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the quest giver quests value held by the this instance.

```csharp
// Obtain an instance of QuestManager from the subsystem API first
QuestManager questManager = ...;
var result = questManager.GetQuestGiverQuests(hero);
```

### QuestExistInSettlementNotables
`public static bool QuestExistInSettlementNotables(QuestBase questBase, Settlement settlement)`

**Purpose:** **Purpose:** Executes the QuestExistInSettlementNotables logic.

```csharp
// Static call; no instance required
QuestManager.QuestExistInSettlementNotables(questBase, settlement);
```

### QuestExistInClan
`public static bool QuestExistInClan(QuestBase questBase, Clan clan)`

**Purpose:** **Purpose:** Executes the QuestExistInClan logic.

```csharp
// Static call; no instance required
QuestManager.QuestExistInClan(questBase, clan);
```

## Usage Example

```csharp
var manager = QuestManager.Current;
```

## See Also

- [Area Index](../)