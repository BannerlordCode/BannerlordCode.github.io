---
title: "TutorialPhaseCampaignBehavior"
description: "教程阶段的总控行为：初始化教程英雄与村庄头人、用对话与菜单拦截锁住玩家交互、按 Tick 驱动主线队伍跟随哥哥移动，并在教程结束时清场、恢复装备与金钱。"
---
# TutorialPhaseCampaignBehavior

**命名空间：** `StoryMode.GameComponents.CampaignBehaviors`
**模块：** `StoryMode`
**类型：** `public class TutorialPhaseCampaignBehavior : CampaignBehaviorBase`
**基类：** `CampaignBehaviorBase`
**源文件：** `bannerlord-1.4.7/StoryMode/GameComponents/CampaignBehaviors/TutorialPhaseCampaignBehavior.cs`（声明见第 28 行）

## 概述

`TutorialPhaseCampaignBehavior` 是主线教程阶段（从角色创建结束到玩家离开训练场、获得第一块旗帜碎片之前）的总控行为。它做四类事：一是初始化——在 `OnCharacterCreationIsOverEvent` 里备份玩家与哥哥的装备、把 `StoryModeHeroes.ElderBrother` 拉进主队并激活，同时禁用 `Tacitus`、`LittleBrother`、`Radagos` 等尚未登场的剧情英雄，并在教程村 `village_ES3_2` 造一个名为 Orthos 的头人；二是加锁——注册 `storymode_conversation_blocker` 对话线与 `storymode_game_menu_blocker` 菜单，在教程期间拦截玩家与 NPC 的交互；三是引导——在 `TickEvent` 中监测主队与焦点目标的距离，玩家偏离路线过远时由哥哥接管队伍移动并把时间控制切到 `StoppablePlay`；四是收尾——`FinalizeTutorialPhase()` 把教程世界恢复成正常战役状态。

它不实现任何具体教程任务的判定，那些在 `StoryMode.Quests.TutorialPhase` 下的任务类里；本行为只负责阶段边界与全局约束。

## 心智模型

把它想成教程阶段的**舞台管理员**：它负责布景（激活/禁用剧情英雄、造头人、备份装备）、贴封条（拦截对话和菜单、禁止婚姻与任务）、以及落幕（`FinalizeTutorialPhase`）。它不负责剧本本身——`RecruitTroopsTutorialQuest`、`PurchaseGrainTutorialQuest` 等任务才是剧本，本行为只在它们之上做「哪些交互现在允许、哪些必须屏蔽」的判断，比如 `CanHaveCampaignIssuesInfoIsRequested` 与 `CanHeroMarry` 在教程未完成时把结果压成 `false`。

它挂在 `CampaignBehaviorBase` 的两个钩子上：`RegisterEvents()` 在战役对象建立后订阅事件（其中 `TickEvent` 让它每帧都有机会干预队伍移动），`SyncData(IDataStore)` 只落盘玩家与哥哥的装备备份数组。教程阶段的进度状态**不在**这个行为里，而在 `TutorialPhase.Instance` 这个独立对象上。它不负责：教程任务的内部逻辑、教程结束后的主线任务（那由 `FirstPhaseCampaignBehavior` 接手）、战斗内的教学提示。

## 怎么用

`StoryMode` 模块通过 `CampaignGameStarter.AddBehavior(...)` 把它挂上；需要实例时用 `Campaign.Current.GetCampaignBehavior<TutorialPhaseCampaignBehavior>()`。它是 `public` 的少数原因之一就是 `FinalizeTutorialPhase()` 允许外部触发收尾。

- **坑 1：教程进度不在这里，别往它身上存状态。** `SyncData` 只备份两组 `Equipment[]`（`_mainHeroEquipmentBackup` / `_brotherEquipmentBackup`），教程处于哪个阶段由 `TutorialPhase.Instance` 维护；mod 若把进度存进本行为，读档时会与 `TutorialPhase` 的真实状态错位（`TutorialPhaseCampaignBehavior.cs:81`）。
- **坑 2：`TickEvent` 会接管主队移动。** 玩家偏离焦点目标超过阈值时，本行为直接 `SetMoveGoToPoint` 并用哥哥接管导航，同时把 `Campaign.Current.TimeControlMode` 设为 `StoppablePlay`；mod 若也写主队移动逻辑，在教程期间会与它互相打架（`TutorialPhaseCampaignBehavior.cs:31`）。
- **坑 3：教程期间交互被封。** 对话线与菜单拦截会优先于 mod 注册的对话，玩家在教程阶段点不到你的自定义对话；需要教程期的交互就必须等 `TutorialPhase.Instance.IsCompleted`（`TutorialPhaseCampaignBehavior.cs:31`）。
- **坑 4：`FinalizeTutorialPhase()` 是破坏性收尾。** 它会杀掉教程村头人、清空主队物品与部队、`FillFrom` 恢复备份装备、把 `Hero.MainHero.Gold` 设为 1000 并解除教程焦点，只能在 `TutorialPhase` 进入 `Finalized` 时调用；在正常战役里手动调用会抹掉玩家资产（`TutorialPhaseCampaignBehavior.cs:212`）。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `class TutorialPhaseCampaignBehavior : CampaignBehaviorBase` | 类型声明：公开的战役行为，注册进 `CampaignBehaviorManager`；教程期全局约束的宿主。 `TutorialPhaseCampaignBehavior.cs:28` |
| `override void RegisterEvents()` | 覆写基类钩子，战役对象建立后调用一次。订阅 `OnNewGameCreatedPartialFollowUpEvent`、`TickEvent`、`OnQuestCompletedEvent`、`OnSettlementLeftEvent`、`OnGameLoadedEvent`、`SettlementEntered`、`DailyTickEvent`、`OnGameLoadFinishedEvent`、`OnCharacterCreationIsOverEvent`，以及 `CanHaveCampaignIssuesEvent`、`CanHeroMarryEvent` 两个「可否」判定事件；`TickEvent` 是它驱动队伍移动的入口。 `TutorialPhaseCampaignBehavior.cs:31` |
| `override void SyncData(IDataStore dataStore)` | 覆写基类钩子，存档/读档时同步 `_mainHeroEquipmentBackup` 与 `_brotherEquipmentBackup` 两组 `Equipment[]`；这是教程结束时恢复玩家与哥哥装备的唯一依据。 `TutorialPhaseCampaignBehavior.cs:81` |
| `public void FinalizeTutorialPhase()` | 教程收尾的公开入口：清理教程村（头人、notables、volunteer 槽）、禁用哥哥并清出主队部队与俘虏、恢复备份装备、`ItemRoster.Clear()` 后补 2 袋谷物、回满血、金币置 1000、解除教程焦点；未跳过的教程会在此弹出「Tutorial is over」并在确认后移除本行为监听器。 `TutorialPhaseCampaignBehavior.cs:212` |

按事件时机的分工：`OnNewGameCreatedPartialFollowUp` 在 `i == 99` 时清空主队物品、计算距离阈值、添加对话与菜单并调用 `InitializeTutorial()`；`OnCharacterCreationIsOverEvent` 备份装备并初始化主线活动；`Tick` 每帧检查是否偏离焦点；`DailyTick` 关闭任务追踪并检查主队是否挨饿；`CanHaveCampaignIssuesInfoIsRequested` / `CanHeroMarry` 在教程未完成时返回 `false`；`OnGameLoadFinished` 在教程村重新刷出哥哥。

## 真实示例

从任意 mod 逻辑里取回实例并在合适时机结束教程：

```csharp
using StoryMode.GameComponents.CampaignBehaviors;
using TaleWorlds.CampaignSystem;

// 教程已进入 Finalized 阶段（例如玩家已拿到第一块旗帜碎片）时才允许收尾
var tutorial = Campaign.Current.GetCampaignBehavior<TutorialPhaseCampaignBehavior>();
if (tutorial != null && TutorialPhase.Instance.IsCompleted)
{
    tutorial.FinalizeTutorialPhase();
}
```

## 参见

- [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)——`RegisterEvents` / `SyncData` 钩子的契约。
- [CampaignGameStarter](../../campaign/CampaignGameStarter)——`AddBehavior` 的挂载入口。
- [FirstPhaseCampaignBehavior](../FirstPhaseCampaignBehavior)——教程结束后接手主线第一阶段的行为。
- [CampaignEvents](../../campaign/CampaignEvents)——`TickEvent`、`OnCharacterCreationIsOverEvent` 等事件的定义处。

## 导航

- ↑ [storymode 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
