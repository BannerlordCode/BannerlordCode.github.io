---
title: "IssueManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IssueManager`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# IssueManager

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class IssueManager : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**File:** `TaleWorlds.CampaignSystem/Issues/IssueManager.cs`

## 概述

`IssueManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `IssueManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IssueSolvingCompanionList` | `public IEnumerable<Hero> IssueSolvingCompanionList { get; }` |

## 主要方法

### InitializeForSavedGame
`public void InitializeForSavedGame()`

**用途 / Purpose:** 初始化 `for saved game` 的状态、资源或绑定。

### CreateNewIssue
`public bool CreateNewIssue(in PotentialIssueData pid, Hero issueOwner)`

**用途 / Purpose:** 创建一个 `new issue` 实例或对象。

### StartIssueQuest
`public bool StartIssueQuest(Hero issueOwner)`

**用途 / Purpose:** 处理 `start issue quest` 相关逻辑。

### DeactivateIssue
`public void DeactivateIssue(IssueBase issue)`

**用途 / Purpose:** 处理 `deactivate issue` 相关逻辑。

### ChangeIssueOwner
`public void ChangeIssueOwner(IssueBase issue, Hero newOwner)`

**用途 / Purpose:** 处理 `change issue owner` 相关逻辑。

### AddPotentialIssueData
`public void AddPotentialIssueData(Hero hero, PotentialIssueData issueData)`

**用途 / Purpose:** 向当前集合/状态中添加 `potential issue data`。

### CheckForIssues
`public List<PotentialIssueData> CheckForIssues(Hero issueOwner)`

**用途 / Purpose:** 处理 `check for issues` 相关逻辑。

### DailyTick
`public override void DailyTick()`

**用途 / Purpose:** 处理 `daily tick` 相关逻辑。

### HourlyTick
`public override void HourlyTick()`

**用途 / Purpose:** 处理 `hourly tick` 相关逻辑。

### TryToMakeTroopsReturn
`public void TryToMakeTroopsReturn(IssueBase issue)`

**用途 / Purpose:** 尝试获取 `to make troops return`，通常以 out 参数返回结果。

### IsThereActiveIssueWithTypeInSettlement
`public bool IsThereActiveIssueWithTypeInSettlement(Type type, Settlement settlement)`

**用途 / Purpose:** 处理 `is there active issue with type in settlement` 相关逻辑。

### GetNumOfAvailableIssuesInSettlement
`public int GetNumOfAvailableIssuesInSettlement(Settlement settlement)`

**用途 / Purpose:** 获取 `num of available issues in settlement` 的当前值。

### GetNumOfActiveIssuesInSettlement
`public int GetNumOfActiveIssuesInSettlement(Settlement settlement, bool includeQuests)`

**用途 / Purpose:** 获取 `num of active issues in settlement` 的当前值。

### CheckIssueForMenuLocations
`public GameMenuOption.IssueQuestFlags CheckIssueForMenuLocations(List<Location> currentLocations, bool getIssuesWithoutAQuest = false)`

**用途 / Purpose:** 处理 `check issue for menu locations` 相关逻辑。

### OnQuestCompleted
`public override void OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)`

**用途 / Purpose:** 当 `quest completed` 事件触发时调用此方法。

### OnHeroUnregistered
`public override void OnHeroUnregistered(Hero hero)`

**用途 / Purpose:** 当 `hero unregistered` 事件触发时调用此方法。

### OnSettlementEntered
`public override void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**用途 / Purpose:** 当 `settlement entered` 事件触发时调用此方法。

### OnSettlementLeft
`public override void OnSettlementLeft(MobileParty party, Settlement settlement)`

**用途 / Purpose:** 当 `settlement left` 事件触发时调用此方法。

### OnCharacterPortraitPopUpOpened
`public override void OnCharacterPortraitPopUpOpened(CharacterObject character)`

**用途 / Purpose:** 当 `character portrait pop up opened` 事件触发时调用此方法。

### OnHeroKilled
`public override void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)`

**用途 / Purpose:** 当 `hero killed` 事件触发时调用此方法。

### OnSettlementOwnerChanged
`public override void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)`

**用途 / Purpose:** 当 `settlement owner changed` 事件触发时调用此方法。

### ToggleAllIssueTracks
`public void ToggleAllIssueTracks(bool enableTrack)`

**用途 / Purpose:** 处理 `toggle all issue tracks` 相关逻辑。

### AddIssueCoolDownData
`public void AddIssueCoolDownData(Type type, IssueCoolDownData data)`

**用途 / Purpose:** 向当前集合/状态中添加 `issue cool down data`。

### HasIssueCoolDown
`public bool HasIssueCoolDown(Type type, Hero hero)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `issue cool down`。

### CanHaveCampaignIssues
`public override void CanHaveCampaignIssues(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `have campaign issues`。

### CanHeroDie
`public override void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `hero die`。

### CanHeroBecomePrisoner
`public override void CanHeroBecomePrisoner(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `hero become prisoner`。

### CanHeroMarry
`public override void CanHeroMarry(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `hero marry`。

### CanHeroEquipmentBeChanged
`public override void CanHeroEquipmentBeChanged(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `hero equipment be changed`。

### CanHeroLeadParty
`public override void CanHeroLeadParty(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `hero lead party`。

### CanMoveToSettlement
`public override void CanMoveToSettlement(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `move to settlement`。

### CanBeGovernorOrHavePartyRole
`public override void CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `be governor or have party role`。

### IsSettlementBusy
`public override void IsSettlementBusy(Settlement settlement, object asker, ref int priority)`

**用途 / Purpose:** 处理 `is settlement busy` 相关逻辑。

### FillIssueCountsPerSettlement
`public static void FillIssueCountsPerSettlement(Dictionary<Settlement, int> issueCountPerSettlement)`

**用途 / Purpose:** 处理 `fill issue counts per settlement` 相关逻辑。

### GetIssuesInSettlement
`public static IEnumerable<IssueBase> GetIssuesInSettlement(Settlement settlement, bool onlyNotables = true)`

**用途 / Purpose:** 获取 `issues in settlement` 的当前值。

### GetIssueOfQuest
`public static IssueBase GetIssueOfQuest(QuestBase quest)`

**用途 / Purpose:** 获取 `issue of quest` 的当前值。

### FillIssueCountsPerClan
`public static void FillIssueCountsPerClan(Dictionary<Clan, int> issueCountPerClan, IEnumerable<Clan> clans)`

**用途 / Purpose:** 处理 `fill issue counts per clan` 相关逻辑。

## 使用示例

```csharp
var manager = IssueManager.Current;
```

## 参见

- [完整类目录](../catalog)