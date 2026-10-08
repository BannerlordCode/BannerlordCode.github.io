---
title: "FirstPhaseCampaignBehavior"
description: "主线剧情第一阶段的调度行为：为两位导师预约宅邸、按任务完成顺序串起主线任务链、处理跳过教程的弹窗与旗帜碎片提示，并在玩家选定阵营后释放宅邸。"
---
# FirstPhaseCampaignBehavior

**命名空间：** `StoryMode.GameComponents.CampaignBehaviors`
**模块：** `StoryMode`
**类型：** `public class FirstPhaseCampaignBehavior : CampaignBehaviorBase`
**基类：** `CampaignBehaviorBase`
**源文件：** `bannerlord-1.4.7/StoryMode/GameComponents/CampaignBehaviors/FirstPhaseCampaignBehavior.cs`（声明见第 24 行）

## 概述

`FirstPhaseCampaignBehavior` 负责主线剧情「第一阶段」的骨架，而不是任何一个任务本身。新战役建立时，它在帝国文化与非帝国（巴旦尼亚）文化的城镇中各挑一座，为 `StoryModeHeroes.ImperialMentor` 与 `StoryModeHeroes.AntiImperialMentor` 预约宅邸；随后玩家每完成一个前置任务，它就按固定顺序把下一个任务 `StartQuest()`：`BannerInvestigationQuest` → `MeetWithIstianaQuest` / `MeetWithArzagosQuest` → `IstianasBannerPieceQuest` / `ArzagosBannerPieceQuest`。它还负责教程被跳过时的告知弹窗、每收集一块旗帜碎片时弹出的快速提示，以及玩家选定主线阵营后释放两座导师宅邸的预约。

它订阅了大量事件却几乎不做重活：真正的任务逻辑在 `StoryMode.Quests` 命名空间下的各任务类里，本行为只是「在正确时机按正确的顺序把它们点着」。

## 心智模型

把它想成主线第一阶段的**调度员**。它不拥有任务，不实现任务的目标判定，也不生成任务奖励；它只做三件事：预约/释放导师宅邸这类世界资源、在任务链的节点上启动下一个任务、在教程被跳过时把控制权从 `TutorialPhaseCampaignBehavior` 交回主线。因此排查主线卡住时，第一反应应该是「链上的某个任务没有以 `Success` 完成」，而不是「这个行为坏了」。

它挂在 `CampaignBehaviorBase` 的两个钩子上：`RegisterEvents()` 在战役对象建立后由引擎调用一次，用来订阅战役事件与 StoryMode 事件；`SyncData(IDataStore)` 在存档/读档时同步导师宅邸与弹窗标记。所有业务逻辑都在它注册的事件回调里，引擎在对应时机（读档、新游戏分步初始化结束、打开菜单、进入任务前、离开定居点、完成主线事件）回调它们。它**不**负责：教程阶段本身的引导（那是 `TutorialPhaseCampaignBehavior`）、任务的内部实现、阵营选择后的主线后续阶段。

## 怎么用

`StoryMode` 模块在战役初始化时通过 `CampaignGameStarter.AddBehavior(...)` 把它挂上，mod 一般不需要自己 `new`；需要实例时用 `Campaign.Current.GetCampaignBehavior<FirstPhaseCampaignBehavior>()` 取，取不到就是 `null`。

- **坑 1：导师宅邸是 `Location` 引用，必须靠 `SyncData` 落盘。** `_imperialMentorHouse` / `_antiImperialMentorHouse` 是对象引用而非 ID，若某个 mod 覆盖了存档流程导致它读回 `null`，导师就不会在宅邸里刷出来；这也是源码里 `SpawnMentorsIfNeeded` 每次都做判空的原因（`FirstPhaseCampaignBehavior.cs:41`）。
- **坑 2：所有监听器都是非序列化的。** 它们通过 `AddNonSerializedListener` 注册，读档后由引擎重新调用 `RegisterEvents()` 恢复；行为被移除时必须用 `CampaignEvents.RemoveListeners` 对称清理，源码在跳过教程的弹窗委托里正是这样把 `TutorialPhaseCampaignBehavior` 摘掉的（`FirstPhaseCampaignBehavior.cs:27`）。
- **坑 3：任务链只认成功。** 推进依赖 `OnQuestCompletedEvent` 且只在 `QuestCompleteDetails.Success` 分支里启动下一个任务，失败或取消不会推进链，主线会静默停住（`FirstPhaseCampaignBehavior.cs:27`）。
- **坑 4：不要从 mod 侧移除或替换它。** 它是主线第一阶段唯一的启动器，摘掉后 `BannerInvestigationQuest` 之后的任务永远不会出现（`FirstPhaseCampaignBehavior.cs:24`）。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `class FirstPhaseCampaignBehavior : CampaignBehaviorBase` | 类型声明：公开的战役行为，注册进 `CampaignBehaviorManager`，可用 `GetCampaignBehavior<T>()` 取回；生命周期完全由战役驱动。 `FirstPhaseCampaignBehavior.cs:24` |
| `override void RegisterEvents()` | 覆写基类钩子，战役对象创建后由引擎调用一次。这里订阅了战役事件 `OnGameLoadedEvent`、`OnQuestCompletedEvent`、`OnNewGameCreatedPartialFollowUpEndEvent`、`GameMenuOpened`、`BeforeMissionOpenedEvent`、`OnSettlementLeftEvent`，以及 StoryMode 事件 `OnBannerPieceCollectedEvent`、`OnStoryModeTutorialEndedEvent`、`OnMainStoryLineSideChosenEvent`；只订阅不做重活。 `FirstPhaseCampaignBehavior.cs:27` |
| `override void SyncData(IDataStore dataStore)` | 覆写基类钩子，存档时写出、读档时读回三个字段：`_imperialMentorHouse`、`_antiImperialMentorHouse`（导师宅邸的 `Location` 引用）与 `_popUpShowed`（跳过教程的提示是否已弹过）。漏同步会导致读档后宅邸预约丢失或弹窗重复。 `FirstPhaseCampaignBehavior.cs:41` |

行为内部注册的回调按时机分工：新游戏分步初始化结束时预约宅邸并写入 `StoryModeManager.Current.MainStoryLine.SetMentorSettlements`；`OnQuestCompletedEvent` 里按任务类型推进主线链；`GameMenuOpened` / `BeforeMissionOpenedEvent` / `OnGameLoadedEvent` 都只是调用 `SpawnMentorsIfNeeded` 确保导师出现在玩家当前定居点的宅邸中；`OnSettlementLeftEvent` 处理跳过教程后的通知弹窗；`OnStoryModeTutorialEndedEvent` 启动 `RebuildPlayerClanQuest` 与 `BannerInvestigationQuest`；`OnMainStoryLineSideChosenEvent` 释放两座宅邸。

## 真实示例

mod 作者最常写的形态，是在自己的 `MBSubModuleBase` 生命周期里把它挂进 `CampaignGameStarter`：

```csharp
using StoryMode.GameComponents.CampaignBehaviors;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

public class MyStoryModeModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter gameStarter)
    {
        if (game.GameType is Campaign && gameStarter is CampaignGameStarter starter)
        {
            // 与 StoryMode 官方行为同样的挂载方式
            starter.AddBehavior(new FirstPhaseCampaignBehavior());
        }
    }
}
```

## 参见

- [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)——`RegisterEvents` / `SyncData` 两个钩子的契约与生命周期。
- [CampaignGameStarter](../../campaign/CampaignGameStarter)——`AddBehavior` 的挂载入口。
- [StoryModeEvents](../StoryModeEvents)——`OnBannerPieceCollectedEvent` 等主线专属事件的定义处。
- [TutorialPhaseCampaignBehavior](../TutorialPhaseCampaignBehavior)——教程阶段的对应行为，跳过教程时由本行为摘除其监听器。

## 导航

- ↑ [storymode 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
