<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# QuestManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestManager : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/QuestManager.cs`

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

**Purpose:** Called when the `quest started` event is raised.

### IsThereActiveQuestWithType
`public bool IsThereActiveQuestWithType(Type type)`

**Purpose:** Handles logic related to `is there active quest with type`.

### IsQuestGiver
`public bool IsQuestGiver(Hero offeringHero)`

**Purpose:** Handles logic related to `is quest giver`.

### OnGameLoaded
`public override void OnGameLoaded(CampaignGameStarter campaignGameStarter)`

**Purpose:** Called when the `game loaded` event is raised.

### OnSessionStart
`public override void OnSessionStart(CampaignGameStarter campaignGameStarter)`

**Purpose:** Called when the `session start` event is raised.

### HourlyTick
`public override void HourlyTick()`

**Purpose:** Handles logic related to `hourly tick`.

### HourlyTickParty
`public override void HourlyTickParty(MobileParty mobileParty)`

**Purpose:** Handles logic related to `hourly tick party`.

### DailyTick
`public override void DailyTick()`

**Purpose:** Handles logic related to `daily tick`.

### WeeklyTick
`public override void WeeklyTick()`

**Purpose:** Handles logic related to `weekly tick`.

### CheckQuestForMenuLocations
`public GameMenuOption.IssueQuestFlags CheckQuestForMenuLocations(List<Location> currentLocations)`

**Purpose:** Handles logic related to `check quest for menu locations`.

### OnQuestFinalized
`public void OnQuestFinalized(QuestBase quest)`

**Purpose:** Called when the `quest finalized` event is raised.

### OnPlayerCharacterChanged
`public override void OnPlayerCharacterChanged(Hero oldPlayer, Hero newPlayer, MobileParty newPlayerParty, bool isMainPartyChanged)`

**Purpose:** Called when the `player character changed` event is raised.

### CanHaveCampaignIssues
`public override void CanHaveCampaignIssues(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `have campaign issues`.

### CanHeroDie
`public override void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**Purpose:** Checks whether the current object can `hero die`.

### CanHeroBecomePrisoner
`public override void CanHeroBecomePrisoner(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `hero become prisoner`.

### CanHeroEquipmentBeChanged
`public override void CanHeroEquipmentBeChanged(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `hero equipment be changed`.

### CanHeroLeadParty
`public override void CanHeroLeadParty(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `hero lead party`.

### CanHeroMarry
`public override void CanHeroMarry(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `hero marry`.

### CanMoveToSettlement
`public override void CanMoveToSettlement(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `move to settlement`.

### CanBeGovernorOrHavePartyRole
`public override void CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `be governor or have party role`.

### AddTrackedObjectForQuest
`public void AddTrackedObjectForQuest(ITrackableCampaignObject trackedObject, QuestBase relatedQuest)`

**Purpose:** Adds `tracked object for quest` to the current collection or state.

### RemoveTrackedObjectForQuest
`public void RemoveTrackedObjectForQuest(ITrackableCampaignObject trackedObject, QuestBase relatedQuest)`

**Purpose:** Removes `tracked object for quest` from the current collection or state.

### RemoveAllTrackedObjectsForQuest
`public void RemoveAllTrackedObjectsForQuest(QuestBase quest)`

**Purpose:** Removes `all tracked objects for quest` from the current collection or state.

### GetAllTrackedObjectsOfAQuest
`public List<ITrackableCampaignObject> GetAllTrackedObjectsOfAQuest(QuestBase quest)`

**Purpose:** Gets the current value of `all tracked objects of a quest`.

### GetQuestGiverQuests
`public IEnumerable<QuestBase> GetQuestGiverQuests(Hero hero)`

**Purpose:** Gets the current value of `quest giver quests`.

### QuestExistInSettlementNotables
`public static bool QuestExistInSettlementNotables(QuestBase questBase, Settlement settlement)`

**Purpose:** Handles logic related to `quest exist in settlement notables`.

### QuestExistInClan
`public static bool QuestExistInClan(QuestBase questBase, Clan clan)`

**Purpose:** Handles logic related to `quest exist in clan`.

## Usage Example

```csharp
var manager = QuestManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)