---
title: "StoryModeTutorialBoxCampaignBehavior"
description: "教程提示箱行为：把原版四十多个零散教程按阶段重新编排成有序队列，教学期随任务解锁对应的一批。"
---
# StoryModeTutorialBoxCampaignBehavior

**Namespace:** StoryMode.GameComponents.CampaignBehaviors
**Module:** StoryMode
**Type:** `public class StoryModeTutorialBoxCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/CampaignBehaviors/StoryModeTutorialBoxCampaignBehavior.cs`

## 概述

原版的教程提示是一长串各自带条件的条目，玩家在合适的时机逐个弹出。StoryMode 的做法是把其中四十多个与教学相关的提示重新收集起来，用显式的 `priority` 排序，教学期随任务推进逐批解锁，其余提示在教学结束后一次性开放。这个行为本质是一个**教程队列管理器**：维护「已看过」「待放出」「优先级」三份状态，并在存档里保留前两份。

## 心智模型

**注册无条件**：`StoryModeSubModule.AddBehaviors` 里 `AddBehavior(new StoryModeTutorialBoxCampaignBehavior())`，即使读的是主线已完成的存档也会注册——此时 `OnSessionLaunched` 会把所有备份教程一次性放出。

**两个数据结构**：

- `_tutorialBackup`（`Dictionary<string, int>`）——教程 id → 优先级。`OnSessionLaunched` 里用它把四十多个教程**全部**推入 `_availableTutorials`。
- `_availableTutorials`（`MBList<CampaignTutorial>`）——当前对外可见的队列，`AvailableTutorials` 属性暴露它。教学期只放出一小部分。
- `_shownTutorials`（`List<string>`）——已经看完的 id，用于去重。

**三步流程**：

1. **开场全量备份**（`OnSessionLaunched`）：`BackupTutorial("MovementInMissionTutorial", 5)` 起手，然后从 priority 100 开始 `num++` 依次登记四十多个百科、部队升级、技能点、招募、劫掠、装备、军团、锻造、犯罪、 bombardment、王国决策、血仇等教程。**每个 priority 手工指定**，这是排序的唯一依据。最后 `foreach (KeyValuePair<string, int> in _tutorialBackup) AddTutorial(...)` 一次性全部放出。
2. **教学期增量**：`OnTravelToVillageTutorialQuestStarted` 放 4 条地图导航类；`OnQuestStarted` 按 quest 类型放 4 组（征粮、募兵、寻找旅行者、村民求助），每组 priority 不同；`OnQuestCompleted` 在教学中期追加两条「与名望交谈」。每次操作后 `_availableTutorials.Sort((x, y) => x.Priority.CompareTo(y.Priority))` 重排。
3. **对外供给**（`OnTutorialListRequested(List<CampaignTutorial> campaignTutorials)`）：先检查 `BannerlordConfig.EnableTutorialHints`，为 false 直接返回；否则设 `TUTORIAL_SETTLEMENT_NAME` 文本变量（硬编码取 `village_ES3_2` 的名字），再把 `AvailableTutorials` 全部拷进调用方的列表。

**`BackupTutorial` 与 `AddTutorial` 的区别**是本层的核心语义：

| 方法 | 行为 |
|---|---|
| `BackupTutorial(id, priority)` | 只在 `_tutorialBackup` 里记一份优先级，**不加入可用队列** |
| `AddTutorial(id, priority)` | 若 id 不在 `_shownTutorials` 里，则 new `CampaignTutorial(id, priority)` 加入 `_availableTutorials`，并把优先级备份进 `_tutorialBackup` |

`OnTutorialCompleted(string)` 从队列移除并记入 `_shownTutorials`、从 backup 移除。

**存档**：同步 `_shownTutorials`（`List<string>`）与 `_tutorialBackup`（`Dictionary<string, int>`）。**`_availableTutorials` 不进存档**，读档后由 `OnSessionLaunched` 从 backup 重建。

**`OnResetAllTutorials(ResetAllTutorialsEvent obj)` 是 public**：它只 `_shownTutorials.Clear()`，不清队列也不清 backup——读档后由 `OnSessionLaunched` 从 backup 全量重建。

**常见误用与坑**

- **`RegisterCharacterCreationContentHandler` 无关，真正要注意的是 `Game.Current.EventManager.RegisterEvent<ResetAllTutorialsEvent>`** —— 这是唯一通过 `Game.Current.EventManager` 注册的订阅，不走 `CampaignEvents`，**`CampaignEventDispatcher.RemoveListeners(this)` 解不掉它**。
- **`_availableTutorials` 不进存档**：读档瞬间它可能是空的，直到 `OnSessionLaunched` 重建。这中间任何调 `AvailableTutorials` 的代码会拿到空队列。
- **`village_ES3_2` 硬编码**：`MBObjectManager.Instance.GetObject<Settlement>("village_ES3_2")` **没有判空**，读档早于该聚落创建时会 NRE。
- **priority 是手工编排的，改一个会连锁**：多个 `AddTutorial` 用同一个 priority 时，`Sort` 的相对顺序由 `MBList.Sort` 的稳定性决定，不要依赖顺序。
- **教学期只放出了一小部分，其余全在 backup 里**。`OnTutorialListRequested` 拷的是 `AvailableTutorials`（当前队列），不是 backup——所以教学期玩家看不到备份中的教程，这是设计。

## 怎么用

### 怎么拿到它

`public class StoryModeTutorialBoxCampaignBehavior : CampaignBehaviorBase` 声明在 `bannerlord-1.5.3/StoryMode/GameComponents/CampaignBehaviors/StoryModeTutorialBoxCampaignBehavior.cs:16`，全文 228 行。

注册点 `campaignGameStarter.AddBehavior(new StoryModeTutorialBoxCampaignBehavior())`（`StoryModeSubModule.cs:77`），**无条件**。取实例用 `Campaign.Current.GetCampaignBehavior<StoryModeTutorialBoxCampaignBehavior>()`，**`AvailableTutorials` 是它唯一的公开数据成员**。

`RegisterEvents()`（`:37`）挂**六条**：五条 `CampaignEvents.*`（`OnSessionLaunchedEvent` `:39`、`OnTutorialCompletedEvent` `:40`、`CollectAvailableTutorialsEvent` `:41`、`OnQuestStartedEvent` `:42`、`OnQuestCompletedEvent` `:43`）加一条 `StoryModeEvents.OnTravelToVillageTutorialQuestStartedEvent`（`:44`）。

教学供给的形状是**「备份 → 延迟放出」**：

- `OnSessionLaunched(CampaignGameStarter campaignGameStarter)`（`:56`）开场先把全部百科/部队升级/技能/招募/劫掠/锻造等教程逐个 `BackupTutorial(tutorialTypeId, priority)`（实现在 `:190`，**每个 priority 手工指定**），最后一次性 `AddTutorial(...)` 放出。
- `AddTutorial(string tutorialTypeId, int priority)`（`:199`）做三件事：`if (!_shownTutorials.Contains(tutorialTypeId))` 守卫（`:200`）、`new CampaignTutorial(tutorialTypeId, priority)` 并加进 `_availableTutorials`（`:202`→`:203`）、若 `_tutorialBackup` 里没有则补记（`:205`→`:207`）。
- `BackupTutorial`（`:190`）的守卫更严：`!_shownTutorials.Contains(tutorialTypeId) && !_tutorialBackup.ContainsKey(tutorialTypeId)`（`:191`）——**已经备份过的不会被覆盖优先级**。

`OnTutorialListRequested(List<CampaignTutorial> campaignTutorials)`（`:176`）是**对外供给口**：`if (!BannerlordConfig.EnableTutorialHints) return;`（`:178`→`:180`），然后设文本变量 `TUTORIAL_SETTLEMENT_NAME`（`:181`，**硬编码取 `village_ES3_2`**），最后把 `AvailableTutorials` 全部 `Add` 进调用方给的列表（`:183`→`:185`）。

三个存档/会话字段：`_shownTutorials`（`:219`，`List<string>`）、`_availableTutorials`（`:222`，`readonly MBList<CampaignTutorial>`）、`_tutorialBackup`（`:225`，`Dictionary<string, int>`）。

`OnQuestCompleted`（`:153`）里有一处双重条件：`TutorialQuestPhase == RecruitAndPurchaseStarted` **且** 任务类型匹配 **且** `!IsThereActiveQuestWithType(...)`（`:155`）。

### 典型用法

```csharp
// 运行期读：UI 与调试工具都从 AvailableTutorials 取
StoryModeTutorialBoxCampaignBehavior box =
    Campaign.Current.GetCampaignBehavior<StoryModeTutorialBoxCampaignBehavior>();
if (box != null)
{
    foreach (CampaignTutorial t in box.AvailableTutorials)
    {
        Debug.Print("已放出教程 type=" + t.TutorialType + " priority=" + t.Priority);
    }
}

// 引擎侧的供给口就是 OnTutorialListRequested，配置开关在这里生效
Debug.Print("教程提示开关=" + BannerlordConfig.EnableTutorialHints);

// 教学村庄名被硬编码成 village_ES3_2
Debug.Print("TUTORIAL_SETTLEMENT_NAME 指向 " + MBObjectManager.Instance.GetObject<Settlement>("village_ES3_2").Name);

// 按主线阶段过滤：教学期对应的枚举
Debug.Print("当前教学阶段=" + StoryModeManager.Current.MainStoryLine.TutorialPhase.TutorialQuestPhase);
```

### 最容易踩的坑

`AddTutorial` 的守卫只看 `_shownTutorials`（`:200`），而 `_shownTutorials` 只在 `OnResetAllTutorials(ResetAllTutorialsEvent obj)`（`:213`）里被 `Clear()`（`:215` 附近）。**一旦教程已经放出（`_shownTutorials` 里有它）且玩家没触发「重置全部教程」，同一 priority 区间里再调一次 `AddTutorial` 就完全无效**——静默失败，没有报错也没有日志。而 `OnQuestStarted`（`:119`）与 `OnQuestCompleted`（`:153`）都是按任务类型分派、各自带 priority，你想在 mod 里补一条教学必须挑一个**尚未被原生放出的** priority，否则什么都不会发生。

## 主要成员

- `public MBReadOnlyList<CampaignTutorial> AvailableTutorials { get; }`
  **唯一的公开成员**，返回当前可用教程队列。UI 与调试工具从这里读。
- `public override void RegisterEvents()`
  订阅 `OnSessionLaunchedEvent` / `OnTutorialCompletedEvent` / `CollectAvailableTutorialsEvent` / `OnQuestStartedEvent` / `OnQuestCompletedEvent` / `StoryModeEvents.OnTravelToVillageTutorialQuestStartedEvent`，外加 `Game.Current.EventManager.RegisterEvent<ResetAllTutorialsEvent>`。
- `public override void SyncData(IDataStore dataStore)`
  同步 `_shownTutorials` 与 `_tutorialBackup`。
- `public void OnResetAllTutorials(ResetAllTutorialsEvent obj)`
  清空 `_shownTutorials`，使全部教程可再次触发。**唯一公开的方法**。
- 私有 `OnSessionLaunched(CampaignGameStarter campaignGameStarter)`
  登记四十多个教程的优先级并全量放出。
- 私有 `OnTravelToVillageTutorialQuestStarted()` / `OnQuestStarted(QuestBase quest)` / `OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)`
  教学期的增量解锁，每次都重排队列。
- 私有 `OnTutorialCompleted(string completedTutorialType)`
  从队列移除、记入 `_shownTutorials`、清 backup 条目。
- 私有 `OnTutorialListRequested(List<CampaignTutorial> campaignTutorials)`
  唯一的对外供给点。先判 `BannerlordConfig.EnableTutorialHints`。
- 私有 `BackupTutorial(string tutorialTypeId, int priority)` / `AddTutorial(string tutorialTypeId, int priority)`
  两个语义不同的入队方法，是本层最重要的两个私有 API。
- 构造函数 `public StoryModeTutorialBoxCampaignBehavior()`
  初始化三个集合（`_availableTutorials` 是 `readonly`）。

## 使用示例

```csharp
// 场景：mod 往教程队列里再插一条自己的提示。
// 正确做法就是与 StoryMode 一样订阅 CollectAvailableTutorialsEvent。
public class MyTutorialBehavior : CampaignBehaviorBase
{
    private readonly CampaignTutorial _myTutorial =
        new CampaignTutorial("my_mod_first_town", 5);

    private bool _shown;

    public override void RegisterEvents()
    {
        CampaignEvents.CollectAvailableTutorialsEvent
            .AddNonSerializedListener(this, OnTutorialListRequested);
        CampaignEvents.OnTutorialCompletedEvent
            .AddNonSerializedListener(this, OnTutorialCompleted);
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData<bool>("_shown", ref _shown);
    }

    private void OnTutorialListRequested(List<CampaignTutorial> list)
    {
        if (!_shown)
        {
            // priority 越小越靠前；这里用 5，与 StoryMode 的 MovementInMissionTutorial 同级
            list.Add(_myTutorial);
        }
    }

    private void OnTutorialCompleted(string tutorialTypeId)
    {
        if (tutorialTypeId == "my_mod_first_town")
        {
            _shown = true;
        }
    }
}
```

## 风险与边界

- **存档序列化是本层的主要风险点**：`_availableTutorials` **不进存档**。读档后到 `OnSessionLaunched` 之间，队列是空的；`_shownTutorials` 与 `_tutorialBackup` 进了档，决定了重建后哪些教程仍然可见。任何在这段窗口读 `AvailableTutorials` 的代码会拿到空集合。
- **`MBObjectManager.Instance.GetObject<Settlement>("village_ES3_2")` 无判空**：读档早期调用 `OnTutorialListRequested` 有 NRE 风险。
- **`ResetAllTutorialsEvent` 走 `Game.Current.EventManager`，不受 `CampaignEventDispatcher.RemoveListeners` 影响**。如果你指望用移除监听的方式禁用某个行为，这个订阅会留下。
- **`BannerlordConfig.EnableTutorialHints` 是全局开关**：任何 mod 把它关掉，本行为全部教程都不会供给——不是本行为的 bug，但它让调试「教程不弹」变得困难。
- **priority 硬编码在源码里**。新增教程必须选一个不冲突的数字，否则排序结果不可预期。
- **教学期的解锁完全绑定 quest 类型**：quest 类被 mod 改名或替换，教学期的教程提示就再也不会放出。

## 依赖关系

- [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) — 行为基类与 `SyncData` 存档通道
- [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) — 调用 `RegisterEvents()` 并托管实例
- [CampaignEvents](../../campaign/CampaignEvents) — `CollectAvailableTutorialsEvent` / `OnTutorialCompletedEvent` / `OnQuestStartedEvent` / `OnQuestCompletedEvent` 的来源
- [CampaignGameStarter](../../campaign/CampaignGameStarter) — `AddBehavior` 注册入口
- [TutorialPhaseCampaignBehavior](../TutorialPhaseCampaignBehavior) — 教学任务链的组织者，本行为按其 quest 类型增量放出教程
- [module-map](../../../architecture/module-map) — StoryMode 模块的组成与依赖关系