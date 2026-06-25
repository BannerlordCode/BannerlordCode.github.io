---
title: "QuestBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QuestBase`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
- [🔀 跨版本对比 /versions/QuestBase](/versions/QuestBase)
<!-- END BREADCRUMB -->
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
| `IsSpecialQuest` | `public virtual bool IsSpecialQuest { get; }` |

## 主要方法

### StartQuest
`public void StartQuest()`

**用途 / Purpose:** 处理 `start quest` 相关逻辑。

### CompleteQuestWithSuccess
`public void CompleteQuestWithSuccess()`

**用途 / Purpose:** 处理 `complete quest with success` 相关逻辑。

### CompleteQuestWithTimeOut
`public void CompleteQuestWithTimeOut(TextObject timeOutLog = null)`

**用途 / Purpose:** 处理 `complete quest with time out` 相关逻辑。

### CompleteQuestWithFail
`public void CompleteQuestWithFail(TextObject cancelLog = null)`

**用途 / Purpose:** 处理 `complete quest with fail` 相关逻辑。

### CompleteQuestWithBetrayal
`public void CompleteQuestWithBetrayal(TextObject betrayLog = null)`

**用途 / Purpose:** 处理 `complete quest with betrayal` 相关逻辑。

### CompleteQuestWithCancel
`public void CompleteQuestWithCancel(TextObject cancelLog = null)`

**用途 / Purpose:** 处理 `complete quest with cancel` 相关逻辑。

### InitializeQuestOnLoadWithQuestManager
`public void InitializeQuestOnLoadWithQuestManager()`

**用途 / Purpose:** 初始化 `quest on load with quest manager` 的状态、资源或绑定。

### AddLog
`public JournalLog AddLog(TextObject text, bool hideInformation = false)`

**用途 / Purpose:** 向当前集合/状态中添加 `log`。

### AddDiscreteLog
`public JournalLog AddDiscreteLog(TextObject text, TextObject taskName, int currentProgress, int targetProgress, TextObject shortText = null, bool hideInformation = false)`

**用途 / Purpose:** 向当前集合/状态中添加 `discrete log`。

### AddTwoWayContinuousLog
`public JournalLog AddTwoWayContinuousLog(TextObject text, TextObject taskName, int currentProgress, int range, bool hideInformation = false)`

**用途 / Purpose:** 向当前集合/状态中添加 `two way continuous log`。

### IsLocationTrackedByQuest
`public virtual GameMenuOption.IssueQuestFlags IsLocationTrackedByQuest(Location location)`

**用途 / Purpose:** 处理 `is location tracked by quest` 相关逻辑。

### GetCurrentProgress
`public virtual int GetCurrentProgress()`

**用途 / Purpose:** 获取 `current progress` 的当前值。

### GetMaxProgress
`public virtual int GetMaxProgress()`

**用途 / Purpose:** 获取 `max progress` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### GetPrefabName
`public virtual string GetPrefabName()`

**用途 / Purpose:** 获取 `prefab name` 的当前值。

### AddTrackedObject
`public void AddTrackedObject(ITrackableCampaignObject trackedObject)`

**用途 / Purpose:** 向当前集合/状态中添加 `tracked object`。

### RemoveTrackedObject
`public void RemoveTrackedObject(ITrackableCampaignObject trackedObject)`

**用途 / Purpose:** 从当前集合/状态中移除 `tracked object`。

### IsTracked
`public bool IsTracked(ITrackableCampaignObject o)`

**用途 / Purpose:** 处理 `is tracked` 相关逻辑。

### ToggleTrackedObjects
`public void ToggleTrackedObjects()`

**用途 / Purpose:** 处理 `toggle tracked objects` 相关逻辑。

### AddGameMenu
`public void AddGameMenu(string menuId, TextObject menuText, OnInitDelegate initDelegate, GameMenu.MenuOverlayType overlay = GameMenu.MenuOverlayType.None, GameMenu.MenuFlags menuFlags = GameMenu.MenuFlags.None)`

**用途 / Purpose:** 向当前集合/状态中添加 `game menu`。

### AddGameMenuOption
`public void AddGameMenuOption(string menuId, string optionId, TextObject optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool Isleave = false, int index = -1)`

**用途 / Purpose:** 向当前集合/状态中添加 `game menu option`。

### ChangeQuestDueTime
`public void ChangeQuestDueTime(CampaignTime questDueTime)`

**用途 / Purpose:** 处理 `change quest due time` 相关逻辑。

### OnFailed
`public virtual void OnFailed()`

**用途 / Purpose:** 当 `failed` 事件触发时调用此方法。

### OnCanceled
`public virtual void OnCanceled()`

**用途 / Purpose:** 当 `canceled` 事件触发时调用此方法。

### QuestPreconditions
`public virtual bool QuestPreconditions()`

**用途 / Purpose:** 处理 `quest preconditions` 相关逻辑。

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public virtual void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can have campaign issues info is requested` 事件触发时调用此方法。

### OnHeroCanMarryInfoIsRequested
`public virtual void OnHeroCanMarryInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can marry info is requested` 事件触发时调用此方法。

### OnHeroCanLeadPartyInfoIsRequested
`public virtual void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can lead party info is requested` 事件触发时调用此方法。

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public virtual void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can have party role or be governor info is requested` 事件触发时调用此方法。

### OnHeroCanDieInfoIsRequested
`public virtual void OnHeroCanDieInfoIsRequested(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**用途 / Purpose:** 当 `hero can die info is requested` 事件触发时调用此方法。

### OnHeroCanBecomePrisonerInfoIsRequested
`public virtual void OnHeroCanBecomePrisonerInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can become prisoner info is requested` 事件触发时调用此方法。

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public virtual void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can be selected in inventory info is requested` 事件触发时调用此方法。

### OnHeroCanMoveToSettlementInfoIsRequested
`public virtual void OnHeroCanMoveToSettlementInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 当 `hero can move to settlement info is requested` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomQuestBase();
```

## 参见

- [完整类目录](../catalog)