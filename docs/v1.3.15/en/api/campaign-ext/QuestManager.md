<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestManager : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**File:** `TaleWorlds.CampaignSystem/QuestManager.cs`

## Overview

`QuestManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `Quests` | `public MBReadOnlyList<QuestBase> Quests { get; set; }` |
| `QuestDebugMode` | `public bool QuestDebugMode { get; }` |
| `TrackedObjects` | `public MBReadOnlyDictionary<ITrackableCampaignObject, List<QuestBase>> TrackedObjects { get; }` |

## Key Methods

### OnQuestStarted
```csharp
public override void OnQuestStarted(QuestBase quest)
```

### IsThereActiveQuestWithType
```csharp
public bool IsThereActiveQuestWithType(Type type)
```

### IsQuestGiver
```csharp
public bool IsQuestGiver(Hero offeringHero)
```

### OnGameLoaded
```csharp
public override void OnGameLoaded(CampaignGameStarter campaignGameStarter)
```

### OnSessionStart
```csharp
public override void OnSessionStart(CampaignGameStarter campaignGameStarter)
```

### HourlyTick
```csharp
public override void HourlyTick()
```

### HourlyTickParty
```csharp
public override void HourlyTickParty(MobileParty mobileParty)
```

### DailyTick
```csharp
public override void DailyTick()
```

### WeeklyTick
```csharp
public override void WeeklyTick()
```

### CheckQuestForMenuLocations
```csharp
public GameMenuOption.IssueQuestFlags CheckQuestForMenuLocations(List<Location> currentLocations)
```

### OnQuestFinalized
```csharp
public void OnQuestFinalized(QuestBase quest)
```

### OnPlayerCharacterChanged
```csharp
public override void OnPlayerCharacterChanged(Hero oldPlayer, Hero newPlayer, MobileParty newPlayerParty, bool isMainPartyChanged)
```

### CanHaveCampaignIssues
```csharp
public override void CanHaveCampaignIssues(Hero hero, ref bool result)
```

### CanHeroDie
```csharp
public override void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)
```

### CanHeroBecomePrisoner
```csharp
public override void CanHeroBecomePrisoner(Hero hero, ref bool result)
```

### CanHeroEquipmentBeChanged
```csharp
public override void CanHeroEquipmentBeChanged(Hero hero, ref bool result)
```

### CanHeroLeadParty
```csharp
public override void CanHeroLeadParty(Hero hero, ref bool result)
```

### CanHeroMarry
```csharp
public override void CanHeroMarry(Hero hero, ref bool result)
```

### CanMoveToSettlement
```csharp
public override void CanMoveToSettlement(Hero hero, ref bool result)
```

### CanBeGovernorOrHavePartyRole
```csharp
public override void CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)
```

### AddTrackedObjectForQuest
```csharp
public void AddTrackedObjectForQuest(ITrackableCampaignObject trackedObject, QuestBase relatedQuest)
```

### RemoveTrackedObjectForQuest
```csharp
public void RemoveTrackedObjectForQuest(ITrackableCampaignObject trackedObject, QuestBase relatedQuest)
```

### RemoveAllTrackedObjectsForQuest
```csharp
public void RemoveAllTrackedObjectsForQuest(QuestBase quest)
```

### GetAllTrackedObjectsOfAQuest
```csharp
public List<ITrackableCampaignObject> GetAllTrackedObjectsOfAQuest(QuestBase quest)
```

### GetQuestGiverQuests
```csharp
public IEnumerable<QuestBase> GetQuestGiverQuests(Hero hero)
```

### QuestExistInSettlementNotables
```csharp
public static bool QuestExistInSettlementNotables(QuestBase questBase, Settlement settlement)
```

### QuestExistInClan
```csharp
public static bool QuestExistInClan(QuestBase questBase, Clan clan)
```

## Usage Example

```csharp
// Typical usage of QuestManager (Manager)
QuestManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)