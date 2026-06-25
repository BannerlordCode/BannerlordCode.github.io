---
title: "QuestBase"
description: "QuestBase 的自动生成类参考。"
---
# QuestBase

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class QuestBase : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/QuestBase.cs`

## 概述

`QuestBase` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `QuestDueTime` | `public CampaignTime QuestDueTime { get; set; }` |
| `TaskList` | `public MBReadOnlyList<QuestTaskBase> TaskList { get; }` |
| `JournalEntries` | `public MBReadOnlyList<JournalLog> JournalEntries { get; }` |
| `IsTrackEnabled` | `public bool IsTrackEnabled { get; }` |
| `IsOngoing` | `public bool IsOngoing { get; }` |
| `IsFinalized` | `public bool IsFinalized { get; }` |
| `IsThereDiscussDialogFlow` | `public bool IsThereDiscussDialogFlow { get; }` |
| `QuestGiver` | `public Hero QuestGiver { get; }` |
| `Title` | `public abstract TextObject Title { get; set; }` |
| `IsRemainingTimeHidden` | `public abstract bool IsRemainingTimeHidden { get; set; }` |
| `RelationshipChangeWithQuestGiver` | `public virtual int RelationshipChangeWithQuestGiver { get; set; }` |
| `IsSpecialQuest` | `public bool IsSpecialQuest { get; }` |
| `SpecialQuestType` | `public virtual string SpecialQuestType { get; }` |

## 主要方法

### StartQuest
`public void StartQuest()`

**用途 / Purpose:** 启动「quest」流程或状态机。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.StartQuest();
```

### CompleteQuestWithSuccess
`public void CompleteQuestWithSuccess()`

**用途 / Purpose:** 处理与 「complete quest with success」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.CompleteQuestWithSuccess();
```

### CompleteQuestWithTimeOut
`public void CompleteQuestWithTimeOut(TextObject timeOutLog = null)`

**用途 / Purpose:** 处理与 「complete quest with time out」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.CompleteQuestWithTimeOut(null);
```

### CompleteQuestWithFail
`public void CompleteQuestWithFail(TextObject cancelLog = null)`

**用途 / Purpose:** 处理与 「complete quest with fail」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.CompleteQuestWithFail(null);
```

### CompleteQuestWithBetrayal
`public void CompleteQuestWithBetrayal(TextObject betrayLog = null)`

**用途 / Purpose:** 处理与 「complete quest with betrayal」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.CompleteQuestWithBetrayal(null);
```

### CompleteQuestWithCancel
`public void CompleteQuestWithCancel(TextObject cancelLog = null)`

**用途 / Purpose:** 处理与 「complete quest with cancel」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.CompleteQuestWithCancel(null);
```

### InitializeQuestOnLoadWithQuestManager
`public void InitializeQuestOnLoadWithQuestManager()`

**用途 / Purpose:** 为 「quest on load with quest manager」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.InitializeQuestOnLoadWithQuestManager();
```

### AddLog
`public JournalLog AddLog(TextObject text, bool hideInformation = false)`

**用途 / Purpose:** 将 「log」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
var result = questBase.AddLog(text, false);
```

### AddDiscreteLog
`public JournalLog AddDiscreteLog(TextObject text, TextObject taskName, int currentProgress, int targetProgress, TextObject shortText = null, bool hideInformation = false)`

**用途 / Purpose:** 将 「discrete log」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
var result = questBase.AddDiscreteLog(text, taskName, 0, 0, null, false);
```

### AddTwoWayContinuousLog
`public JournalLog AddTwoWayContinuousLog(TextObject text, TextObject taskName, int currentProgress, int range, bool hideInformation = false)`

**用途 / Purpose:** 将 「two way continuous log」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
var result = questBase.AddTwoWayContinuousLog(text, taskName, 0, 0, false);
```

### IsLocationTrackedByQuest
`public virtual GameMenuOption.IssueQuestFlags IsLocationTrackedByQuest(Location location)`

**用途 / Purpose:** 判断当前对象是否处于 「location tracked by quest」 状态或条件。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
var result = questBase.IsLocationTrackedByQuest(location);
```

### GetCurrentProgress
`public virtual int GetCurrentProgress()`

**用途 / Purpose:** 读取并返回当前对象中 「current progress」 的结果。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
var result = questBase.GetCurrentProgress();
```

### GetMaxProgress
`public virtual int GetMaxProgress()`

**用途 / Purpose:** 读取并返回当前对象中 「max progress」 的结果。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
var result = questBase.GetMaxProgress();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
var result = questBase.ToString();
```

### GetPrefabName
`public virtual string GetPrefabName()`

**用途 / Purpose:** 读取并返回当前对象中 「prefab name」 的结果。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
var result = questBase.GetPrefabName();
```

### AddTrackedObject
`public void AddTrackedObject(ITrackableCampaignObject trackedObject)`

**用途 / Purpose:** 将 「tracked object」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.AddTrackedObject(trackedObject);
```

### RemoveTrackedObject
`public void RemoveTrackedObject(ITrackableCampaignObject trackedObject)`

**用途 / Purpose:** 从当前容器或状态中移除 「tracked object」。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.RemoveTrackedObject(trackedObject);
```

### IsTracked
`public bool IsTracked(ITrackableCampaignObject o)`

**用途 / Purpose:** 判断当前对象是否处于 「tracked」 状态或条件。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
var result = questBase.IsTracked(o);
```

### ToggleTrackedObjects
`public void ToggleTrackedObjects()`

**用途 / Purpose:** 处理与 「toggle tracked objects」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.ToggleTrackedObjects();
```

### AddGameMenu
`public void AddGameMenu(string menuId, TextObject menuText, OnInitDelegate initDelegate, GameMenu.MenuOverlayType overlay = GameMenu.MenuOverlayType.None, GameMenu.MenuFlags menuFlags = GameMenu.MenuFlags.None)`

**用途 / Purpose:** 将 「game menu」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.AddGameMenu("example", menuText, initDelegate, gameMenu.MenuOverlayType.None, gameMenu.MenuFlags.None);
```

### AddGameMenuOption
`public void AddGameMenuOption(string menuId, string optionId, TextObject optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool Isleave = false, int index = -1)`

**用途 / Purpose:** 将 「game menu option」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.AddGameMenuOption("example", "example", optionText, condition, consequence, false, 0);
```

### ChangeQuestDueTime
`public void ChangeQuestDueTime(CampaignTime questDueTime)`

**用途 / Purpose:** 处理与 「change quest due time」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.ChangeQuestDueTime(questDueTime);
```

### OnFailed
`public virtual void OnFailed()`

**用途 / Purpose:** 在 「failed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.OnFailed();
```

### OnCanceled
`public virtual void OnCanceled()`

**用途 / Purpose:** 在 「canceled」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.OnCanceled();
```

### QuestPreconditions
`public virtual bool QuestPreconditions()`

**用途 / Purpose:** 处理与 「quest preconditions」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
var result = questBase.QuestPreconditions();
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public virtual void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can have campaign issues info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnHeroCanMarryInfoIsRequested
`public virtual void OnHeroCanMarryInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can marry info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.OnHeroCanMarryInfoIsRequested(hero, result);
```

### OnHeroCanLeadPartyInfoIsRequested
`public virtual void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can lead party info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.OnHeroCanLeadPartyInfoIsRequested(hero, result);
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public virtual void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can have party role or be governor info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(hero, result);
```

### OnHeroCanDieInfoIsRequested
`public virtual void OnHeroCanDieInfoIsRequested(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**用途 / Purpose:** 在 「hero can die info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.OnHeroCanDieInfoIsRequested(hero, causeOfDeath, result);
```

### OnHeroCanBecomePrisonerInfoIsRequested
`public virtual void OnHeroCanBecomePrisonerInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can become prisoner info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.OnHeroCanBecomePrisonerInfoIsRequested(hero, result);
```

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public virtual void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can be selected in inventory info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanMoveToSettlementInfoIsRequested
`public virtual void OnHeroCanMoveToSettlementInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can move to settlement info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 QuestBase 实例
QuestBase questBase = ...;
questBase.OnHeroCanMoveToSettlementInfoIsRequested(hero, result);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
QuestBase instance = ...;
```

## 参见

- [本区域目录](../)