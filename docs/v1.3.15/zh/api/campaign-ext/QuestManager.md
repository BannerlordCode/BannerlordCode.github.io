<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QuestManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestManager : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**File:** `TaleWorlds.CampaignSystem/QuestManager.cs`

## 概述

`QuestManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `Quests` | `public MBReadOnlyList<QuestBase> Quests { get; set; }` |
| `QuestDebugMode` | `public bool QuestDebugMode { get; }` |
| `TrackedObjects` | `public MBReadOnlyDictionary<ITrackableCampaignObject, List<QuestBase>> TrackedObjects { get; }` |

## 主要方法

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

## 使用示例

```csharp
// QuestManager (Manager) 的典型用法
QuestManager.Current;
```

## 参见

- [完整类目录](../catalog)