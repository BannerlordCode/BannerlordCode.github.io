<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QuestManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestManager : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**File:** `TaleWorlds.CampaignSystem/QuestManager.cs`

## 概述

`QuestManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `QuestManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Quests` | `public MBReadOnlyList<QuestBase> Quests { get; set; }` |
| `QuestDebugMode` | `public bool QuestDebugMode { get; }` |
| `TrackedObjects` | `public MBReadOnlyDictionary<ITrackableCampaignObject, List<QuestBase>> TrackedObjects { get; }` |

## 主要方法

### OnQuestStarted
`public override void OnQuestStarted(QuestBase quest)`

**用途 / Purpose:** 当 `quest started` 事件触发时调用此方法。

### IsThereActiveQuestWithType
`public bool IsThereActiveQuestWithType(Type type)`

**用途 / Purpose:** 处理 `is there active quest with type` 相关逻辑。

### IsQuestGiver
`public bool IsQuestGiver(Hero offeringHero)`

**用途 / Purpose:** 处理 `is quest giver` 相关逻辑。

### OnGameLoaded
`public override void OnGameLoaded(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 当 `game loaded` 事件触发时调用此方法。

### OnSessionStart
`public override void OnSessionStart(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 当 `session start` 事件触发时调用此方法。

### HourlyTick
`public override void HourlyTick()`

**用途 / Purpose:** 处理 `hourly tick` 相关逻辑。

### HourlyTickParty
`public override void HourlyTickParty(MobileParty mobileParty)`

**用途 / Purpose:** 处理 `hourly tick party` 相关逻辑。

### DailyTick
`public override void DailyTick()`

**用途 / Purpose:** 处理 `daily tick` 相关逻辑。

### WeeklyTick
`public override void WeeklyTick()`

**用途 / Purpose:** 处理 `weekly tick` 相关逻辑。

### CheckQuestForMenuLocations
`public GameMenuOption.IssueQuestFlags CheckQuestForMenuLocations(List<Location> currentLocations)`

**用途 / Purpose:** 处理 `check quest for menu locations` 相关逻辑。

### OnQuestFinalized
`public void OnQuestFinalized(QuestBase quest)`

**用途 / Purpose:** 当 `quest finalized` 事件触发时调用此方法。

### OnPlayerCharacterChanged
`public override void OnPlayerCharacterChanged(Hero oldPlayer, Hero newPlayer, MobileParty newPlayerParty, bool isMainPartyChanged)`

**用途 / Purpose:** 当 `player character changed` 事件触发时调用此方法。

### CanHaveCampaignIssues
`public override void CanHaveCampaignIssues(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `have campaign issues`。

### CanHeroDie
`public override void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `hero die`。

### CanHeroBecomePrisoner
`public override void CanHeroBecomePrisoner(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `hero become prisoner`。

### CanHeroEquipmentBeChanged
`public override void CanHeroEquipmentBeChanged(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `hero equipment be changed`。

### CanHeroLeadParty
`public override void CanHeroLeadParty(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `hero lead party`。

### CanHeroMarry
`public override void CanHeroMarry(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `hero marry`。

### CanMoveToSettlement
`public override void CanMoveToSettlement(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `move to settlement`。

### CanBeGovernorOrHavePartyRole
`public override void CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `be governor or have party role`。

### AddTrackedObjectForQuest
`public void AddTrackedObjectForQuest(ITrackableCampaignObject trackedObject, QuestBase relatedQuest)`

**用途 / Purpose:** 向当前集合/状态中添加 `tracked object for quest`。

### RemoveTrackedObjectForQuest
`public void RemoveTrackedObjectForQuest(ITrackableCampaignObject trackedObject, QuestBase relatedQuest)`

**用途 / Purpose:** 从当前集合/状态中移除 `tracked object for quest`。

### RemoveAllTrackedObjectsForQuest
`public void RemoveAllTrackedObjectsForQuest(QuestBase quest)`

**用途 / Purpose:** 从当前集合/状态中移除 `all tracked objects for quest`。

### GetAllTrackedObjectsOfAQuest
`public List<ITrackableCampaignObject> GetAllTrackedObjectsOfAQuest(QuestBase quest)`

**用途 / Purpose:** 获取 `all tracked objects of a quest` 的当前值。

### GetQuestGiverQuests
`public IEnumerable<QuestBase> GetQuestGiverQuests(Hero hero)`

**用途 / Purpose:** 获取 `quest giver quests` 的当前值。

### QuestExistInSettlementNotables
`public static bool QuestExistInSettlementNotables(QuestBase questBase, Settlement settlement)`

**用途 / Purpose:** 处理 `quest exist in settlement notables` 相关逻辑。

### QuestExistInClan
`public static bool QuestExistInClan(QuestBase questBase, Clan clan)`

**用途 / Purpose:** 处理 `quest exist in clan` 相关逻辑。

## 使用示例

```csharp
var manager = QuestManager.Current;
```

## 参见

- [完整类目录](../catalog)