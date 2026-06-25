---
title: "IssueManager"
description: "IssueManager 的自动生成类参考。"
---
# IssueManager

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class IssueManager : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/IssueManager.cs`

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

**用途 / Purpose:** **用途 / Purpose:** 为 for saved game 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.InitializeForSavedGame();
```

### CreateNewIssue
`public bool CreateNewIssue(in PotentialIssueData pid, Hero issueOwner)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 new issue 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
var result = issueManager.CreateNewIssue(pid, issueOwner);
```

### StartIssueQuest
`public bool StartIssueQuest(Hero issueOwner)`

**用途 / Purpose:** **用途 / Purpose:** 启动issue quest流程或状态机。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
var result = issueManager.StartIssueQuest(issueOwner);
```

### DeactivateIssue
`public void DeactivateIssue(IssueBase issue)`

**用途 / Purpose:** **用途 / Purpose:** 停用issue对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.DeactivateIssue(issue);
```

### ChangeIssueOwner
`public void ChangeIssueOwner(IssueBase issue, Hero newOwner)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ChangeIssueOwner 对应的操作。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.ChangeIssueOwner(issue, newOwner);
```

### AddPotentialIssueData
`public void AddPotentialIssueData(Hero hero, PotentialIssueData issueData)`

**用途 / Purpose:** **用途 / Purpose:** 将 potential issue data 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.AddPotentialIssueData(hero, issueData);
```

### CheckForIssues
`public List<PotentialIssueData> CheckForIssues(Hero issueOwner)`

**用途 / Purpose:** **用途 / Purpose:** 检查for issues在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
var result = issueManager.CheckForIssues(issueOwner);
```

### DailyTick
`public override void DailyTick()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DailyTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.DailyTick();
```

### HourlyTick
`public override void HourlyTick()`

**用途 / Purpose:** **用途 / Purpose:** 调用 HourlyTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.HourlyTick();
```

### TryToMakeTroopsReturn
`public void TryToMakeTroopsReturn(IssueBase issue)`

**用途 / Purpose:** **用途 / Purpose:** 尝试获取 to make troops return 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.TryToMakeTroopsReturn(issue);
```

### IsThereActiveIssueWithTypeInSettlement
`public bool IsThereActiveIssueWithTypeInSettlement(Type type, Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 there active issue with type in settlement 状态或条件。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
var result = issueManager.IsThereActiveIssueWithTypeInSettlement(type, settlement);
```

### GetNumOfAvailableIssuesInSettlement
`public int GetNumOfAvailableIssuesInSettlement(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 num of available issues in settlement 的结果。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
var result = issueManager.GetNumOfAvailableIssuesInSettlement(settlement);
```

### GetNumOfActiveIssuesInSettlement
`public int GetNumOfActiveIssuesInSettlement(Settlement settlement, bool includeQuests)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 num of active issues in settlement 的结果。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
var result = issueManager.GetNumOfActiveIssuesInSettlement(settlement, false);
```

### CheckIssueForMenuLocations
`public GameMenuOption.IssueQuestFlags CheckIssueForMenuLocations(List<Location> currentLocations, bool getIssuesWithoutAQuest = false)`

**用途 / Purpose:** **用途 / Purpose:** 检查issue for menu locations在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
var result = issueManager.CheckIssueForMenuLocations(currentLocations, false);
```

### OnQuestCompleted
`public override void OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)`

**用途 / Purpose:** **用途 / Purpose:** 在 quest completed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.OnQuestCompleted(quest, detail);
```

### OnHeroUnregistered
`public override void OnHeroUnregistered(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero unregistered 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.OnHeroUnregistered(hero);
```

### OnSettlementEntered
`public override void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 在 settlement entered 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.OnSettlementEntered(party, settlement, hero);
```

### OnSettlementLeft
`public override void OnSettlementLeft(MobileParty party, Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 在 settlement left 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.OnSettlementLeft(party, settlement);
```

### OnCharacterPortraitPopUpOpened
`public override void OnCharacterPortraitPopUpOpened(CharacterObject character)`

**用途 / Purpose:** **用途 / Purpose:** 在 character portrait pop up opened 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.OnCharacterPortraitPopUpOpened(character);
```

### OnHeroKilled
`public override void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero killed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.OnHeroKilled(victim, killer, detail, true);
```

### OnSettlementOwnerChanged
`public override void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)`

**用途 / Purpose:** **用途 / Purpose:** 在 settlement owner changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.OnSettlementOwnerChanged(settlement, false, newOwner, oldOwner, capturerHero, detail);
```

### ToggleAllIssueTracks
`public void ToggleAllIssueTracks(bool enableTrack)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ToggleAllIssueTracks 对应的操作。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.ToggleAllIssueTracks(false);
```

### AddIssueCoolDownData
`public void AddIssueCoolDownData(Type type, IssueCoolDownData data)`

**用途 / Purpose:** **用途 / Purpose:** 将 issue cool down data 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.AddIssueCoolDownData(type, data);
```

### HasIssueCoolDown
`public bool HasIssueCoolDown(Type type, Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 issue cool down。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
var result = issueManager.HasIssueCoolDown(type, hero);
```

### CanHaveCampaignIssues
`public override void CanHaveCampaignIssues(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 have campaign issues 的前置条件。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.CanHaveCampaignIssues(hero, result);
```

### CanHeroDie
`public override void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 hero die 的前置条件。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.CanHeroDie(hero, causeOfDeath, result);
```

### CanHeroBecomePrisoner
`public override void CanHeroBecomePrisoner(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 hero become prisoner 的前置条件。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.CanHeroBecomePrisoner(hero, result);
```

### CanHeroMarry
`public override void CanHeroMarry(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 hero marry 的前置条件。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.CanHeroMarry(hero, result);
```

### CanHeroEquipmentBeChanged
`public override void CanHeroEquipmentBeChanged(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 hero equipment be changed 的前置条件。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.CanHeroEquipmentBeChanged(hero, result);
```

### CanHeroLeadParty
`public override void CanHeroLeadParty(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 hero lead party 的前置条件。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.CanHeroLeadParty(hero, result);
```

### CanMoveToSettlement
`public override void CanMoveToSettlement(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 move to settlement 的前置条件。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.CanMoveToSettlement(hero, result);
```

### CanBeGovernorOrHavePartyRole
`public override void CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 be governor or have party role 的前置条件。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.CanBeGovernorOrHavePartyRole(hero, result);
```

### IsSettlementBusy
`public override void IsSettlementBusy(Settlement settlement, object asker, ref int priority)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 settlement busy 状态或条件。

```csharp
// 先通过子系统 API 拿到 IssueManager 实例
IssueManager issueManager = ...;
issueManager.IsSettlementBusy(settlement, asker, priority);
```

### FillIssueCountsPerSettlement
`public static void FillIssueCountsPerSettlement(Dictionary<Settlement, int> issueCountPerSettlement)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FillIssueCountsPerSettlement 对应的操作。

```csharp
// 静态调用，不需要实例
IssueManager.FillIssueCountsPerSettlement(dictionary<Settlement, 0);
```

### GetIssuesInSettlement
`public static IEnumerable<IssueBase> GetIssuesInSettlement(Settlement settlement, bool onlyNotables = true)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 issues in settlement 的结果。

```csharp
// 静态调用，不需要实例
IssueManager.GetIssuesInSettlement(settlement, false);
```

### GetIssueOfQuest
`public static IssueBase GetIssueOfQuest(QuestBase quest)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 issue of quest 的结果。

```csharp
// 静态调用，不需要实例
IssueManager.GetIssueOfQuest(quest);
```

### FillIssueCountsPerClan
`public static void FillIssueCountsPerClan(Dictionary<Clan, int> issueCountPerClan, IEnumerable<Clan> clans)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FillIssueCountsPerClan 对应的操作。

```csharp
// 静态调用，不需要实例
IssueManager.FillIssueCountsPerClan(dictionary<Clan, 0, clans);
```

## 使用示例

```csharp
var manager = IssueManager.Current;
```

## 参见

- [本区域目录](../)