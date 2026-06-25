---
title: "QuestManager"
description: "QuestManager 的自动生成类参考。"
---
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

**用途 / Purpose:** 在 quest started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
questManager.OnQuestStarted(quest);
```

### IsThereActiveQuestWithType
`public bool IsThereActiveQuestWithType(Type type)`

**用途 / Purpose:** 判断当前对象是否处于 there active quest with type 状态或条件。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
var result = questManager.IsThereActiveQuestWithType(type);
```

### IsQuestGiver
`public bool IsQuestGiver(Hero offeringHero)`

**用途 / Purpose:** 判断当前对象是否处于 quest giver 状态或条件。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
var result = questManager.IsQuestGiver(offeringHero);
```

### OnGameLoaded
`public override void OnGameLoaded(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 在 game loaded 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
questManager.OnGameLoaded(campaignGameStarter);
```

### OnSessionStart
`public override void OnSessionStart(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 在 session start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
questManager.OnSessionStart(campaignGameStarter);
```

### HourlyTick
`public override void HourlyTick()`

**用途 / Purpose:** 调用 HourlyTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
questManager.HourlyTick();
```

### HourlyTickParty
`public override void HourlyTickParty(MobileParty mobileParty)`

**用途 / Purpose:** 调用 HourlyTickParty 对应的操作。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
questManager.HourlyTickParty(mobileParty);
```

### DailyTick
`public override void DailyTick()`

**用途 / Purpose:** 调用 DailyTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
questManager.DailyTick();
```

### WeeklyTick
`public override void WeeklyTick()`

**用途 / Purpose:** 调用 WeeklyTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
questManager.WeeklyTick();
```

### CheckQuestForMenuLocations
`public GameMenuOption.IssueQuestFlags CheckQuestForMenuLocations(List<Location> currentLocations)`

**用途 / Purpose:** 检查quest for menu locations在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
var result = questManager.CheckQuestForMenuLocations(currentLocations);
```

### OnQuestFinalized
`public void OnQuestFinalized(QuestBase quest)`

**用途 / Purpose:** 在 quest finalized 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
questManager.OnQuestFinalized(quest);
```

### OnPlayerCharacterChanged
`public override void OnPlayerCharacterChanged(Hero oldPlayer, Hero newPlayer, MobileParty newPlayerParty, bool isMainPartyChanged)`

**用途 / Purpose:** 在 player character changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
questManager.OnPlayerCharacterChanged(oldPlayer, newPlayer, newPlayerParty, false);
```

### CanHaveCampaignIssues
`public override void CanHaveCampaignIssues(Hero hero, ref bool result)`

**用途 / Purpose:** 检查当前对象是否满足 have campaign issues 的前置条件。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
questManager.CanHaveCampaignIssues(hero, result);
```

### CanHeroDie
`public override void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**用途 / Purpose:** 检查当前对象是否满足 hero die 的前置条件。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
questManager.CanHeroDie(hero, causeOfDeath, result);
```

### CanHeroBecomePrisoner
`public override void CanHeroBecomePrisoner(Hero hero, ref bool result)`

**用途 / Purpose:** 检查当前对象是否满足 hero become prisoner 的前置条件。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
questManager.CanHeroBecomePrisoner(hero, result);
```

### CanHeroEquipmentBeChanged
`public override void CanHeroEquipmentBeChanged(Hero hero, ref bool result)`

**用途 / Purpose:** 检查当前对象是否满足 hero equipment be changed 的前置条件。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
questManager.CanHeroEquipmentBeChanged(hero, result);
```

### CanHeroLeadParty
`public override void CanHeroLeadParty(Hero hero, ref bool result)`

**用途 / Purpose:** 检查当前对象是否满足 hero lead party 的前置条件。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
questManager.CanHeroLeadParty(hero, result);
```

### CanHeroMarry
`public override void CanHeroMarry(Hero hero, ref bool result)`

**用途 / Purpose:** 检查当前对象是否满足 hero marry 的前置条件。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
questManager.CanHeroMarry(hero, result);
```

### CanMoveToSettlement
`public override void CanMoveToSettlement(Hero hero, ref bool result)`

**用途 / Purpose:** 检查当前对象是否满足 move to settlement 的前置条件。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
questManager.CanMoveToSettlement(hero, result);
```

### CanBeGovernorOrHavePartyRole
`public override void CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)`

**用途 / Purpose:** 检查当前对象是否满足 be governor or have party role 的前置条件。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
questManager.CanBeGovernorOrHavePartyRole(hero, result);
```

### AddTrackedObjectForQuest
`public void AddTrackedObjectForQuest(ITrackableCampaignObject trackedObject, QuestBase relatedQuest)`

**用途 / Purpose:** 将 tracked object for quest 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
questManager.AddTrackedObjectForQuest(trackedObject, relatedQuest);
```

### RemoveTrackedObjectForQuest
`public void RemoveTrackedObjectForQuest(ITrackableCampaignObject trackedObject, QuestBase relatedQuest)`

**用途 / Purpose:** 从当前容器或状态中移除 tracked object for quest。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
questManager.RemoveTrackedObjectForQuest(trackedObject, relatedQuest);
```

### RemoveAllTrackedObjectsForQuest
`public void RemoveAllTrackedObjectsForQuest(QuestBase quest)`

**用途 / Purpose:** 从当前容器或状态中移除 all tracked objects for quest。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
questManager.RemoveAllTrackedObjectsForQuest(quest);
```

### GetAllTrackedObjectsOfAQuest
`public List<ITrackableCampaignObject> GetAllTrackedObjectsOfAQuest(QuestBase quest)`

**用途 / Purpose:** 读取并返回当前对象中 all tracked objects of a quest 的结果。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
var result = questManager.GetAllTrackedObjectsOfAQuest(quest);
```

### GetQuestGiverQuests
`public IEnumerable<QuestBase> GetQuestGiverQuests(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 quest giver quests 的结果。

```csharp
// 先通过子系统 API 拿到 QuestManager 实例
QuestManager questManager = ...;
var result = questManager.GetQuestGiverQuests(hero);
```

### QuestExistInSettlementNotables
`public static bool QuestExistInSettlementNotables(QuestBase questBase, Settlement settlement)`

**用途 / Purpose:** 调用 QuestExistInSettlementNotables 对应的操作。

```csharp
// 静态调用，不需要实例
QuestManager.QuestExistInSettlementNotables(questBase, settlement);
```

### QuestExistInClan
`public static bool QuestExistInClan(QuestBase questBase, Clan clan)`

**用途 / Purpose:** 调用 QuestExistInClan 对应的操作。

```csharp
// 静态调用，不需要实例
QuestManager.QuestExistInClan(questBase, clan);
```

## 使用示例

```csharp
var manager = QuestManager.Current;
```

## 参见

- [本区域目录](../)