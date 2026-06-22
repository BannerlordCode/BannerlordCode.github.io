<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IssueManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IssueManager

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class IssueManager : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**File:** `TaleWorlds.CampaignSystem/Issues/IssueManager.cs`

## Overview

`IssueManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueSolvingCompanionList` | `public IEnumerable<Hero> IssueSolvingCompanionList { get; }` |

## Key Methods

### InitializeForSavedGame
```csharp
public void InitializeForSavedGame()
```

### CreateNewIssue
```csharp
public bool CreateNewIssue(in PotentialIssueData pid, Hero issueOwner)
```

### StartIssueQuest
```csharp
public bool StartIssueQuest(Hero issueOwner)
```

### DeactivateIssue
```csharp
public void DeactivateIssue(IssueBase issue)
```

### ChangeIssueOwner
```csharp
public void ChangeIssueOwner(IssueBase issue, Hero newOwner)
```

### AddPotentialIssueData
```csharp
public void AddPotentialIssueData(Hero hero, PotentialIssueData issueData)
```

### CheckForIssues
```csharp
public List<PotentialIssueData> CheckForIssues(Hero issueOwner)
```

### DailyTick
```csharp
public override void DailyTick()
```

### HourlyTick
```csharp
public override void HourlyTick()
```

### TryToMakeTroopsReturn
```csharp
public void TryToMakeTroopsReturn(IssueBase issue)
```

### IsThereActiveIssueWithTypeInSettlement
```csharp
public bool IsThereActiveIssueWithTypeInSettlement(Type type, Settlement settlement)
```

### GetNumOfAvailableIssuesInSettlement
```csharp
public int GetNumOfAvailableIssuesInSettlement(Settlement settlement)
```

### GetNumOfActiveIssuesInSettlement
```csharp
public int GetNumOfActiveIssuesInSettlement(Settlement settlement, bool includeQuests)
```

### CheckIssueForMenuLocations
```csharp
public GameMenuOption.IssueQuestFlags CheckIssueForMenuLocations(List<Location> currentLocations, bool getIssuesWithoutAQuest = false)
```

### OnQuestCompleted
```csharp
public override void OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)
```

### OnHeroUnregistered
```csharp
public override void OnHeroUnregistered(Hero hero)
```

### OnSettlementEntered
```csharp
public override void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)
```

### OnSettlementLeft
```csharp
public override void OnSettlementLeft(MobileParty party, Settlement settlement)
```

### OnCharacterPortraitPopUpOpened
```csharp
public override void OnCharacterPortraitPopUpOpened(CharacterObject character)
```

### OnHeroKilled
```csharp
public override void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
```

### OnSettlementOwnerChanged
```csharp
public override void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)
```

### ToggleAllIssueTracks
```csharp
public void ToggleAllIssueTracks(bool enableTrack)
```

### AddIssueCoolDownData
```csharp
public void AddIssueCoolDownData(Type type, IssueCoolDownData data)
```

### HasIssueCoolDown
```csharp
public bool HasIssueCoolDown(Type type, Hero hero)
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

### CanHeroMarry
```csharp
public override void CanHeroMarry(Hero hero, ref bool result)
```

### CanHeroEquipmentBeChanged
```csharp
public override void CanHeroEquipmentBeChanged(Hero hero, ref bool result)
```

### CanHeroLeadParty
```csharp
public override void CanHeroLeadParty(Hero hero, ref bool result)
```

## Usage Example

```csharp
// Typical usage of IssueManager (Manager)
IssueManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)