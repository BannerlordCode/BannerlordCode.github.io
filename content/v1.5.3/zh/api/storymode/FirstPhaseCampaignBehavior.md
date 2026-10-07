---
title: "FirstPhaseCampaignBehavior"
description: "主线第一阶段行为：给两位导师在城镇里预留房子、开场对话、龙旗碎片任务链，以及跳过后为玩家取家族名与选旗。"
---
# FirstPhaseCampaignBehavior

**Namespace:** StoryMode.GameComponents.CampaignBehaviors
**Module:** StoryMode
**Type:** `public class FirstPhaseCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/CampaignBehaviors/FirstPhaseCampaignBehavior.cs`

## 概述

这是主线第一阶段的执行者，也是整个故事开场序列的编排器。它做四件事：新游戏建立后为帝国导师与反帝国导师各挑一座城镇并**预留一栋房子**；按任务完成情况串起龙旗碎片的任务链（`BannerInvestigationQuest` → `MeetWithIstianaQuest` / `MeetWithArzagosQuest` → `IstianasBannerPieceQuest` / `ArzagosBannerPieceQuest`）；教程跳过时弹窗引导玩家取家族名并打开旗编辑器；以及在游戏菜单打开、任务开始前把导师重新塞进镇子的可交互位置。

## 心智模型

**注册是有条件的**：`StoryModeSubModule.AddBehaviors` 里

```
if (!MainStoryLine.TutorialPhase.IsCompleted) { ... }
if (!MainStoryLine.IsFirstPhaseCompleted)    campaignGameStarter.AddBehavior(new FirstPhaseCampaignBehavior());
```

**这不是运行时判断，而是启动时的一次性判断。** 读档时 `InitializeGameStarter` 重新跑一次，所以「玩家读档时第一阶段已完成」→ 这个行为根本不会被注册。这意味着：**任何依赖它的事件回调在第一阶段完成后都不存在**。反过来，如果你想「第一阶段完成后仍能干预」，必须另写一个无条件注册的行为。

**事件订阅**（`RegisterEvents`）：

- `OnGameLoadedEvent` → `SpawnMentorsIfNeeded`
- `OnQuestCompletedEvent` → `OnQuestCompleted`（任务链推进）
- `OnNewGameCreatedPartialFollowUpEndEvent` → `OnNewGameCreatedPartialFollowUpEnd`（为导师找城镇）
- `GameMenuOpened` → `SpawnMentorsIfNeeded`
- `BeforeMissionOpenedEvent` → `SpawnMentorsIfNeeded`
- `OnSettlementLeftEvent` → `OnSettlementLeft`（跳过后弹窗）
- `StoryModeEvents.OnBannerPieceCollectedEvent`、`OnStoryModeTutorialEndedEvent`、`OnMainStoryLineSideChosenEvent`

**关键的三步时序**：

1. **`OnNewGameCreatedPartialFollowUpEnd`**：找一座 `IsTown && !IsUnderSiege && Culture.StringId == "empire"` 的城镇给帝国导师，一座 `battania` 城镇给反帝国导师，各自 `ReserveHouseForMentor` 预留 `house_1/2/3` 之一，然后把两个聚落写进 `MainStoryLine.SetMentorSettlements`。
2. **`OnQuestCompleted`**：按 `quest is XxxQuest` 的类型分支串链，全部 `.StartQuest()` 立即启动下一条。
3. **`SpawnMentorsIfNeeded`**：只有当两个房屋都非空、玩家当前就在其中一座城镇里、且对应导师就在该城镇时，才用 `SimpleAgentOrigin` + `LocationCharacter` 把导师作为游荡 NPC 加进 `Location`。

**存档**：`SyncData` 同步三个字段——`_imperialMentorHouse`（`Location`）、`_antiImperialMentorHouse`（`Location`）、`_popUpShowed`（`bool`）。房屋是 `Location` 对象，能序列化进存档。

**常见误用与坑**

- **不要重复调用 `ReserveHouseForMentor`**：源码在没有未预留房屋时会 `GetRandomElement` 强行占一个已被占的房子。多次调用会互相踩。
- **`OnMainStoryLineSideChosen` 里无条件解引用 `RemoveReservation()`**。若该行为在导师房屋分配完成前就被调用（例如选边流程被 mod 提前），NRE。
- **`FindSuitableHideout` 用 `hideout.Settlement.IsSettlementBusy(this)`** 排除占用的藏身处，可能返回 null——`IstianasBannerPieceQuest` 拿到 null 藏身处后行为未定义。
- **任务链是硬编码的类型分支**，没有优先级、没有失败分支。改动 quest 类型名会整条链断掉。
- **弹窗路径依赖 `TutorialPhase.Instance.IsSkipped`**，正常打完教程的玩家永远看不到这一段。

## 怎么用

### 怎么拿到它

`public class FirstPhaseCampaignBehavior : CampaignBehaviorBase` 声明在 `bannerlord-1.5.3/StoryMode/GameComponents/CampaignBehaviors/FirstPhaseCampaignBehavior.cs:24`，全文 261 行。

**注册是条件式的**：`campaignGameStarter.AddBehavior(new FirstPhaseCampaignBehavior())`（`StoryModeSubModule.cs:68`）包在 `if (!MainStoryLine.IsCompleted)`（`:60`）与 `if (!MainStoryLine.IsFirstPhaseCompleted)`（`:66`）两层里。第一阶段完成后这个行为**不再注册**，`GetCampaignBehavior<FirstPhaseCampaignBehavior>()` 返回 null。

`RegisterEvents()`（`:27`）挂**九条**，是本模块订阅最多的行为：四条 `StoryModeEvents.*`（`OnBannerPieceCollectedEvent` `:35`、`OnStoryModeTutorialEndedEvent` `:36`、`OnMainStoryLineSideChosenEvent` `:37`，加上 `CampaignEvents` 侧的六条）。

它实际做的事分四组：

- **导师入城**：`OnNewGameCreatedPartialFollowUpEnd`（`:55`）给两位导师找聚落、预留房屋；`SpawnMentorsIfNeeded()`（`:102`）在玩家进入其中一座城镇时把导师作为游荡 NPC 加进 `Location`；`FindSuitableHideout(Hero questGiver)`（`:202`）为藏住处任务选址。
- **任务链**：`OnQuestCompleted`（`:65`）按 `quest is XxxQuest` 串链，具体出任务的四行是 `:71`（`new MeetWithIstianaQuest(...ImperialMentorSettlement).StartQuest()`）、`:72`（Arzagos 版）、`:78`（`new IstianasBannerPieceQuest(imperialMentor, this.FindSuitableHideout(imperialMentor))`）、`:84`（`ArzagosBannerPieceQuest` 版）。`OnStoryModeTutorialEnded()`（`:146`）另起 `RebuildPlayerClanQuest`（`:148`）与 `BannerInvestigationQuest`（`:149`）。`StartStealthTutorial()`（`:133`）开 `new VillagersInNeed().StartQuest();`（`:135`）并广播 `OnStealthTutorialActivated()`（`:136`）。
- **旗片与藏身处**：`OnBannerPieceCollected()`（`:153`）按 `FirstPhase.Instance.CollectedBannerPieceCount` 等于 1 / 2 / 3 分派（`:156`、`:160`、`:164`），并有 `FirstPhase.Instance == null` 守卫（`:156`）。
- **选边与改名**：`OnMainStoryLineSideChosen(MainStoryLineSide side)`（`:172`）、`SelectClanName()`（`:181`）、`OnChangeClanNameDone(string newClanName)`（`:187`）、`OpenBannerSelectionScreen(Action endAction)`（`:196`）。

存档三个字段：`_imperialMentorHouse`（`:252`）、`_antiImperialMentorHouse`（`:255`）、`_popUpShowed`（`:258`）。

### 典型用法

```csharp
// 运行期读；第一阶段完成后为 null
FirstPhaseCampaignBehavior fp =
    Campaign.Current.GetCampaignBehavior<FirstPhaseCampaignBehavior>();
if (fp != null && StoryModeManager.Current.MainStoryLine.FirstPhase != null)
{
    // 旗片进度的分派依据
    Debug.Print("旗片数=" + StoryModeManager.Current.MainStoryLine.FirstPhase.CollectedBannerPieceCount);

    // 潜行教学是否已被触发过（_popUpShowed）
    Debug.Print("MainStoryLine.IsFirstPhaseCompleted="
              + StoryModeManager.Current.MainStoryLine.IsFirstPhaseCompleted);
}

// 任务链的可见结果
foreach (QuestBase q in Campaign.Current.QuestManager.Quests)
{
    if (!q.IsFinalized && q.SpecialQuestType == "MainStoryline")
    {
        Debug.Print("在跑的主线任务：" + q.QuestId + "（发布者 " + q.QuestGiver?.Name + "）");
    }
}

// 导师所在聚落：SetMentorSettlements 写入，读这两处
MainStoryLine line = StoryModeManager.Current.MainStoryLine;
Debug.Print("帝国导师=" + line.ImperialMentorSettlement?.StringId
          + "，反帝国导师=" + line.AntiImperialMentorSettlement?.StringId);
```

### 最容易踩的坑

它订阅了九条事件却**没有一条是「读档安全」的幂等检查**——`OnQuestCompleted`（`:65`）里的四行 `new XxxQuest(...).StartQuest();`（`:71`、`:72`、`:78`、`:84`）**无条件执行，没有 `Quests.Any(q => q is XxxQuest)` 查重**。对比同文件里 `MeetWithIstianaQuest.ActivateAssembleTheBannerQuest`（`MeetWithIstianaQuest.cs:147`）是有查重的。也就是说引擎若重复派发 `OnQuestCompleted`，这里会重复开任务；而 `SyncData`（`:41`）只存三个字段，没有任何「已发过哪些任务」的记录，读档后也无从判断。

## 主要成员

- `public override void RegisterEvents()`
  订阅九个事件。由管理器在战役初始化时调用。
- `public override void SyncData(IDataStore dataStore)`
  同步两处预留房屋与 `_popUpShowed`。
- 私有 `OnNewGameCreatedPartialFollowUpEnd(CampaignGameStarter campaignGameStarter)`
  新游戏建立完成后的收尾：分配导师城镇与房屋，写回主线。**只在开局跑一次**。
- 私有 `OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)`
  仅在 `detail == QuestBase.QuestCompleteDetails.Success` 时推进任务链。
- 私有 `OnSettlementLeft(MobileParty party, Settlement settlement)`
  玩家离开 `tutorial_training_field` 且教程阶段为 `Finalized` 且 `IsSkipped` 且未弹过窗时，弹「发现第一块龙旗碎片」询问框，OK 后设 `_popUpShowed`、解绑教程行为监听、播场景通知，再进入取名流程。
- 私有 `SpawnMentorsIfNeeded()` / `SpawnMentorInHouse(Settlement settlement)` / `ReserveHouseForMentor(Hero mentor, Settlement settlement)`
  导师的预留与实体化三件套。`ReserveHouseForMentor` 会给房子命名 `"{MENTOR.NAME}'s House"` 并设成 `IsReserved`。
- 私有 `SelectClanName()` / `OnChangeClanNameDone(string newClanName)` / `OpenBannerSelectionScreen(Action endAction)`
  取家族名（`InformationManager.ShowTextInquiry`，用 `FactionHelper.IsClanNameApplicable` 校验）→ `Clan.PlayerClan.ChangeClanName` → `PushState(CreateState<BannerEditorState>)`。
- 私有 `ShowStealthTutorialInquiry()` / `StartStealthTutorial()`
  潜行教学开场：`new VillagersInNeed().StartQuest()` 并广播 `StoryModeEvents.Instance.OnStealthTutorialActivated()`。
- 私有 `OnBannerPieceCollected()`
  碎片提示文案，按 `FirstPhase.Instance.CollectedBannerPieceCount` 填 first/second/third 变量。
- 私有 `OnMainStoryLineSideChosen(MainStoryLineSide side)`
  选边后释放两处房屋预留。

## 使用示例

```csharp
// 场景：mod 想在「导师选好城镇」之后拿到两座城镇的引用
public class MentorHouseListener : CampaignBehaviorBase
{
    private Settlement _imperialTown;
    private Settlement _antiImperialTown;

    public override void RegisterEvents()
    {
        // MainStoryLine 的导师聚落是在 OnNewGameCreatedPartialFollowUpEnd 写入的，
        // 用同源的结束事件紧随其后读取最稳
        CampaignEvents.OnNewGameCreatedPartialFollowUpEndEvent
            .AddNonSerializedListener(this, OnFollowUpEnd);
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData<Settlement>("_imperialTown", ref _imperialTown);
        dataStore.SyncData<Settlement>("_antiImperialTown", ref _antiImperialTown);
    }

    private void OnFollowUpEnd(CampaignGameStarter starter)
    {
        _imperialTown = StoryModeManager.Current.MainStoryLine.ImperialMentorSettlement;
        _antiImperialTown = StoryModeManager.Current.MainStoryLine.AntiImperialMentorSettlement;
        Debug.Print("imperial mentor town: " + _imperialTown?.Name
            + " / anti-imperial: " + _antiImperialTown?.Name);
    }
}
```

## 风险与边界

- **存档序列化有风险但已处理**：`_imperialMentorHouse` / `_antiImperialMentorHouse` 是 `Location`，会进存档。若旧存档里这两项为 null，`SpawnMentorsIfNeeded` 直接短路，导师不会出现在城镇里但也不会崩——表现为「导师不见了」。`OnGameLoaded` 只调 `SpawnMentorsIfNeeded`，**不重新分配房屋**，所以房屋丢失后无法自愈。
- **`_popUpShowed` 只增不减**：跳过后弹窗只出现一次。若玩家在中途存档，读档后不会再弹。
- **条件注册带来的空洞**：第一阶段已完成时这个行为不存在，mod 里若 `Campaign.Current.GetCampaignBehavior<FirstPhaseCampaignBehavior>()` 会拿到 null，必须判空。
- **与 `StoryModeBannerItemModel` 的耦合**：本行为拼装龙旗碎片任务，而那个模型负责阻止龙旗从战利品里随机漏出。改动任一侧都可能让四块碎片凑不齐。
- **对话/菜单 id 是硬编码字符串**，与 [StoryModeTutorialBoxCampaignBehavior](../StoryModeTutorialBoxCampaignBehavior) 各自注册各自的部分，没有共享常量表。

## 依赖关系

- [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) — 行为基类，提供 `SyncData` 与订阅基础设施
- [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) — 调用 `RegisterEvents()` 并托管实例
- [CampaignEvents](../../campaign/CampaignEvents) — 订阅来源，`OnGameLoadedEvent` / `OnQuestCompletedEvent` / `OnNewGameCreatedPartialFollowUpEndEvent` 等
- [CampaignGameStarter](../../campaign/CampaignGameStarter) — `AddBehavior` 注册入口与任务/菜单装配的宿主
- [TutorialPhaseCampaignBehavior](../TutorialPhaseCampaignBehavior) — 教程结束的广播方，本行为的弹窗路径依赖它
- [StoryModeBannerItemModel](../StoryModeBannerItemModel) — 阻止龙旗碎片从战利品随机产出的配套模型
- [module-map](../../../architecture/module-map) — StoryMode 模块的组成与依赖