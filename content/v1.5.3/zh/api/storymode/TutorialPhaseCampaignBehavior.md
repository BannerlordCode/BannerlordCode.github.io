---
title: "TutorialPhaseCampaignBehavior"
description: "教学阶段总控行为：初始化教程世界、拉起训练场到村庄的任务链、弟弟替玩家领路、并在结束时把队伍与装备全部复原。"
---
# TutorialPhaseCampaignBehavior

**Namespace:** StoryMode.GameComponents.CampaignBehaviors
**Module:** StoryMode
**Type:** `public class TutorialPhaseCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/CampaignBehaviors/TutorialPhaseCampaignBehavior.cs`

## 概述

这是整个教学流程的总控。它在新游戏建立后清空玩家背包、把兄长拉进队伍、把除村长外的全部剧情角色禁用掉、在教学村造出村长 Orthos；它注册教学专用的游戏菜单（挡板菜单、教学村菜单）并逐条推进教学任务链（旅行到村庄 → 与村长对话 → 寻找并救出旅行者 → 找到藏身处）；它每帧检查玩家是否离目标太远，太远就让兄长接管领路并弹出提示；它在阶段结束时把队伍、囚犯、物品、装备、状态全部复原，然后播一段潜行教学的开场白。

## 心智模型

**注册是有条件的**：`StoryModeSubModule.AddBehaviors` 里

```
if (!MainStoryLine.TutorialPhase.IsCompleted)
    campaignGameStarter.AddBehavior(new TutorialPhaseCampaignBehavior());
```

读档时重跑。教学已完成 → 行为不存在。**这也意味着教学期的 Model 保护（[StoryModeBanditDensityModel](../StoryModeBanditDensityModel) 等）虽然无条件注册，但它们的 `IsCompleted` 判定同样会短路**，两层是配套的。

**十一个订阅**：`OnNewGameCreatedPartialFollowUpEvent`（`i == 99` 触发初始化）、`TickEvent`、`OnQuestCompletedEvent`、`OnSettlementLeftEvent`、`OnGameLoadedEvent`、`SettlementEntered`、`DailyTickEvent`、`OnGameLoadFinishedEvent`、`OnCharacterCreationIsOverEvent`、`CanHaveCampaignIssuesEvent`、`CanHeroMarryEvent`。

**两条不同的初始化路径**：

- `OnNewGameCreatedPartialFollowUp(CampaignGameStarter, int i)` —— **只在 `i == 99` 时**执行：`PartyBase.MainParty.ItemRoster.Clear()`、算 `_distanceThresholdForQuestFocusTarget`、注册菜单与对话、`InitializeTutorial()`。这是**新游戏专有路径**，读档不会走。
- `OnGameLoaded(CampaignGameStarter)` —— **读档路径**：重算阈值、注册菜单与对话，然后处理教学村的名望——为空则 `CreateHeadman`，否则把 `settlement.Notables[0]` 赋给 `TutorialPhase.Instance.TutorialVillageHeadman` 并在名字不是 "Orthos" 时强制改名。**这段逻辑是教学村名望状态的自愈机制**。

**`Tick(float dt)` 的领路逻辑**（每帧执行，是本层的性能热点）：

```
若 TutorialFocusSettlement == null 且 TutorialFocusMobileParty == null → 直接返回
计算玩家到焦点目标的距离 num 与目标坐标
若 num > _distanceThresholdForQuestFocusTarget：
    _controlledByBrother = true
    MobileParty.MainParty.SetMoveGoToPoint(目标坐标, MobileParty.NavigationType.Default)
若 _controlledByBrother && !_notifyPlayerAboutPosition：
    弹快速信息，并把 Campaign.Current.TimeControlMode 设为 StoppablePlay
若 _controlledByBrother && num < MobileParty.MainParty.SeeingRange：
    复位两个标志，SetMoveModeHold，并弹「你领路更好」
```

**`FinalizeTutorialPhase()` 是公开方法**，是整个教学阶段的收尾。它做的清理非常彻底：杀掉多余名望、给存活名望分配志愿兵、`DisableHeroAction.Apply(ElderBrother)` 并清空其氏族、清空主队成员（除主角）、禁用/清空囚犯、`RemoveTutorialFocusSettlement()`、清空背包、从备份恢复主角与兄长的战斗/民用装备、补 2 个 `DefaultItems.Grain`、全额回血、金币设为 1000。

**两个存档字段**：`_mainHeroEquipmentBackup` 与 `_brotherEquipmentBackup`，各是长度 2 的 `Equipment[]`，在 `OnCharacterCreationIsOver`（`index == 1`）时用 `Clone(false)` 快照。没有它，`FinalizeTutorialPhase` 就无法把玩家在训练场换的装备还原。

**常见误用与坑**

- **`i == 99` 是硬编码的哨兵值**。这是 `OnNewGameCreatedPartialFollowUpEvent` 的最后一批回调编号，mod 若改变了调用次数或顺序，`InitializeTutorial` 永远不会跑。
- **`Tick` 每帧执行，且没有任何节流**。`_distanceThresholdForQuestFocusTarget` 由 `Campaign.Current.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(...) / 1.5f` 算出，读档与新游戏各算一次。若该调用返回 0，阈值变成 0，**任何时候都判定为「离得太远」**，兄长会无限接管领路。
- **`FinalizeTutorialPhase` 里 `Debug.FailedAssert`**：教学村名望超过一个时会断言。这个断言在开发版会中断，正式版只是打日志。
- **`FinalizeTutorialPhase` 清空主队成员时保留 `IsPlayerCharacter`** —— 副将不是玩家角色的全部被移除。
- **`CompleteTutorialPhase(true)` 的实参含义是「跳过教程」**，由 `TrainingFieldCampaignBehavior` 的 `_completeTutorial` 决定，不要传错。
- **`Campaign.Current.IssueManager.ToggleAllIssueTracks(false)` 在 `DailyTick` 里无条件调用** —— 教学期内的问题追踪全关。

## 主要成员

- `public override void RegisterEvents()`
  订阅十一个战役事件。
- `public override void SyncData(IDataStore dataStore)`
  同步两个 `Equipment[]` 备份。
- `public void FinalizeTutorialPhase()`
  **唯一的公开方法**。教学阶段收尾的全部清理与复原。由 [TrainingFieldCampaignBehavior](../TrainingFieldCampaignBehavior) 的任务结束路径或流程本身触发。**可被 mod 主动调用，但要清楚它不可重复安全执行**。
- 私有 `OnNewGameCreatedPartialFollowUp(CampaignGameStarter campaignGameStarter, int i)`
  `i == 99` 时清背包、算阈值、注册菜单与对话、初始化教程。
- 私有 `OnGameLoaded(CampaignGameStarter campaignGameStarter)` / `OnGameLoadFinished()`
  读档路径：重算阈值、注册菜单、修名望与村长名；`OnGameLoadFinished` 里若玩家在教学村则把兄长塞进 `village_center`。
- 私有 `InitializeTutorial()`
  兄长 `ChangeState(Active)` → `AddHeroToPartyAction.Apply` → `SetHasMet()`；`DisableHeroAction.Apply` 七个剧情角色（Tacitus、LittleBrother、LittleSister、Radagos、ImperialMentor、AntiImperialMentor、RadagosHenchman）；`CreateHeadman(village_ES3_2)`；背包加 1 个 `DefaultItems.Grain`。
- 私有 `Tick(float dt)`
  每帧的领路接管逻辑。本层唯一的 per-frame 路径。
- 私有 `AddDialogAndGameMenus(CampaignGameStarter campaignGameStarter)`
  注册 `storymode_conversation_blocker`、`storymode_game_menu_blocker`（含 `game_menu_blocker_leave` 选项）、`storymode_tutorial_village_game_menu`（含招募/购买/进入/等待/离开五个选项）。
- 私有 `OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)`
  三段任务链推进：`TravelToVillageTutorialQuest` → `TalkToTheHeadmanTutorialQuest` → `LocateAndRescueTravellerTutorialQuest` → `FindHideoutTutorialQuest`，每一步都调 `TutorialPhase.Instance.SetTutorialQuestPhase(...)`。
- 私有 `OnSettlementLeft(MobileParty party, Settlement settlement)` / `OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`
  离开训练场且教学阶段为 `None` 时启动 `TravelToVillageTutorialQuest`；进入教学村时把兄长加进 `village_center`，并把路过的其它队伍/英雄赶去邻近聚落。
- 私有 `CreateHeadman(Settlement settlement)` / `SpawnYourBrotherInLocation(Hero hero, string locationId)` / `SpawnAllNotablesForVillage(Village village)`
  三个实体化方法，分别造村长、把兄长作为固定角色加进 `Location`、按 `NotableSpawnModel` 的目标数量补齐名望。
- 私有 `CanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)` / `CanHeroMarry(Hero hero, ref bool result)` / `DailyTick()` / `CheckIfMainPartyStarving()`
  教学期的额外限制：教学村名望不能有问题、玩家氏族不能结婚、问题追踪全关、**玩家饿了就补一个 `DefaultItems.Grain`**。
- 私有 `ShowStealthTutorialInquiry()` / `StartStealthTutorial()`
  阶段结束后的潜行教学开场白与 `new VillagersInNeed().StartQuest()`。

## 使用示例

```csharp
// 场景：mod 想在教学期也允许玩家结婚（放宽 CanHeroMarryEvent 的限制）
// 注意必须注册在 StoryMode 之外，且 Event 是 ReferenceAction：后写的赢
public class TutorialMarriageBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.CanHeroMarryEvent.AddNonSerializedListener(this, CanHeroMarry);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void CanHeroMarry(Hero hero, ref bool result)
    {
        TutorialPhase phase = TutorialPhase.Instance;
        if (phase != null && !phase.IsCompleted && hero != null)
        {
            // 教学期允许与自己氏族的英雄成婚（写入 true 即放行）
            result = hero.Clan == Clan.PlayerClan;
        }
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject;
    starter.AddBehavior(new TutorialMarriageBehavior());
}
```

## 风险与边界

- **存档序列化只覆盖两个装备数组**：`_mainHeroEquipmentBackup` / `_brotherEquipmentBackup`。其余全部状态（`_controlledByBrother`、`_notifyPlayerAboutPosition`、`_distanceThresholdForQuestFocusTarget`）**不入档**，读档后重算或复位。**如果你覆写时加了新字段又忘了写进 `SyncData`，读档后会退回默认值**。
- **条件注册的空窗**：教学已完成时 `GetCampaignBehavior<TutorialPhaseCampaignBehavior>()` 返回 null，必须判空。
- **`Tick` 的每帧成本**：每帧两次距离计算（`CampaignVec2.Distance` / `MobileParty.Position.Distance`）+ 潜在的 `SetMoveGoToPoint`。在教学阶段这是设计开销，但 mod 若也订阅 `TickEvent` 并做重活，两者叠加。
- **`_distanceThresholdForQuestFocusTarget` 依赖 `GetAverageDistanceBetweenClosestTwoTownsWithNavigationType` 的返回值**，mod 改动了地图导航（传送点、河道）会让这个阈值偏移，导致「弟弟抢方向盘」的触发变得过频或从不触发。
- **`OnSettlementEntered` 会把路过的队伍赶走**：判定是 `!party.IsMilitia` 且目标聚落 `s.MapFaction == settlement.MapFaction`。mod 若新增了同王国的自定义队伍，教学期它们会被强制传送。
- **`FinalizeTutorialPhase` 是一次性的**：重复调用会再次清空背包、重置金币为 1000、全额回血。把它当普通方法反复调用会摧毁玩家的进度。

## 依赖关系

- [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) — 行为基类与 `SyncData` 存档通道
- [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) — 调用 `RegisterEvents()`，也是 `GetCampaignBehavior<TutorialPhaseCampaignBehavior>()` 的目标
- [CampaignEvents](../../campaign/CampaignEvents) — 十一个订阅事件的来源
- [CampaignGameStarter](../../campaign/CampaignGameStarter) — `AddBehavior` 注册入口与 `AddGameMenu` / `AddDialogLine` 的宿主
- [TrainingFieldCampaignBehavior](../TrainingFieldCampaignBehavior) — 训练场那一站的任务与对话，并触发 `CompleteTutorialPhase`
- [StoryModeBanditSpawnCampaignBehavior](../StoryModeBanditSpawnCampaignBehavior) — 监听本层广播的教程结束事件，补种强盗世界
- [FirstPhaseCampaignBehavior](../FirstPhaseCampaignBehavior) — 同样监听教程结束事件，接手主线第一阶段
- [StoryModeIncidentModel](../StoryModeIncidentModel) — 教学期禁随机事件的配套模型
- [module-map](../../../architecture/module-map) — StoryMode 模块的组成与依赖