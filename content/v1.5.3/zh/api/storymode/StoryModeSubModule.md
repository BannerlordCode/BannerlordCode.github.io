---
title: "StoryModeSubModule"
description: "主线战役的模块入口：InitializeGameStarter 里一次性注册全部 behavior、模型覆盖和欢迎菜单，OnGameEnd 里拆干净。"
---
# StoryModeSubModule

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class StoryModeSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`（TaleWorlds.Core）
**Source:** `bannerlord-1.5.3/StoryMode/StoryModeSubModule.cs`

## 概述

这是主线战役的「MBSubModule 门面」。引擎不认识主线模式，它只认识模块；所以当玩家从「New Campaign」开局、`Game.GameType` 变成 [CampaignStoryMode](../CampaignStoryMode) 之后，是这个 submodule 在战役启动期把主线需要的一切一次性挂上去：18 个 `GameModel` 覆盖、十几个 behavior、以及一个欢迎菜单。它**不做任何剧情判断**——所有注册都以「当前 GameType 是 CampaignStoryMode」为前提，并且依赖剧情进度来决定挂哪几个阶段 behavior。

## 心智模型

它覆写的是 `InitializeGameStarter`（而不是 `OnGameStart`）。这是 Bannerlord 模块里唯一能在 `CampaignGameStarter` 还活着时拿到它的时机之一——`OnGameStart` 传的也是 starter，但 `InitializeGameStarter` 在整个模块加载阶段更早，能保证注册顺序稳定。

进入 `InitializeGameStarter` 后的判定与四步注册：

1. `game.GameType as CampaignStoryMode` 非 null 才做任何事。沙盒战役下这个方法整体空转。
2. `campaignStoryMode.AddCampaignEventReceiver(StoryModeEvents.Instance)` —— 注意此时 `StoryModeEvents.Instance` 已经可取，说明 `CampaignStoryMode` 构造函数已跑完、`StoryModeManager` 已建立、事件总线已 `Initialize`。
3. `AddGameMenus` —— 注册 `menu_story_mode_welcome` 和它唯一的「Continue...」选项。
4. `AddModels` —— 18 个 `AddModel<T>` 覆盖，全部是 StoryMode 专用子类。
5. `AddBehaviors` —— **按剧情进度条件注册**，这是本类最值得注意的设计。

`AddBehaviors` 的分支逻辑直接对应 [MainStoryLine](../MainStoryLine) 的阶段链：

```text
MainStorylineCampaignBehavior         永远注册
LordConversationsStoryModeBehavior     永远注册
  ├─ !MainStoryLine.IsCompleted
  │   ├─ !TutorialPhase.IsCompleted      → TutorialPhaseCampaignBehavior
  │   ├─ !MainStoryLine.IsFirstPhaseCompleted → FirstPhaseCampaignBehavior
  │   ├─ !MainStoryLine.IsSecondPhaseCompleted → SecondPhaseCampaignBehavior
  │   └─ (无条件)                       → ThirdPhaseCampaignBehavior
TrainingField / TutorialBox / CharacterCreation / BanditSpawn / Achievements
WeakenEmpireQuest / AssembleEmpireQuest / DefeatTheConspiracyQuest / RescueFamilyQuest
```

**坑**：

- **注册期读取存档状态**。`AddBehaviors` 在读档时也走这条路，所以它靠 `MainStoryLine` 的阶段字段（来自存档）决定挂哪些 behavior。这就是为什么阶段对象必须 `[SaveableProperty]`——它们直接决定模块启动时挂载的行为集合。
- **`ThirdPhaseCampaignBehavior` 的条件少了一层 `!IsSecondPhaseCompleted`**。看代码它只被 `!IsCompleted` 包住，与另两个平级。这是原生的写法，不是笔误。
- **模型覆盖是「后加的赢」**：18 个 `AddModel<T>` 全在这里执行。mod 要覆盖 StoryMode 的模型，必须 `SubModuleLoadOrder` 更晚。
- **`OnGameEnd` 里调 `StoryModeManager.Current.Destroy()`**，而 `Destroy()` 是 `internal`，只 `StoryModeData.OnGameEnd()` 清缓存。这条链只在主线战役下成立。

## 主要成员

- `protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)`：唯一的注册点。内部把 `IGameStarter` 转型成 `CampaignGameStarter` 后依次调四个私有方法。
- `public override void OnGameEnd(Game game)`：主线战役结束时调 `StoryModeManager.Current.Destroy()`。非主线战役空转。
- `private void AddGameMenus(CampaignGameStarter)`：注册 `menu_story_mode_welcome`（overlay None、flags None）及其 `mno_continue` 选项，把 `args.optionLeaveType` 设为 `Continue`。
- `private void AddModels(CampaignGameStarter)`：18 次 `AddModel<T>`，覆盖 `BanditDensityModel`、`EncounterGameMenuModel`、`BattleRewardModel`、`TargetScoreCalculatingModel`、`PartyWageModel`、`KingdomDecisionPermissionModel`、`CombatXpModel`、`GenericXpModel`、`NotableSpawnModel`、`HeroDeathProbabilityCalculationModel`、`AgentDecideKilledOrUnconsciousModel`、`PartySizeLimitModel`、`BannerItemModel`、`PrisonerRecruitmentCalculationModel`、`TroopSupplierProbabilityModel`、`CutsceneSelectionModel`、`VoiceOverModel`、`IncidentModel`。**这 18 个模型子类都在 `StoryMode.GameComponents` 命名空间，不属于本页范围。**
- `private void AddBehaviors(CampaignGameStarter)`：按进度注册 behavior 链，见上文分支。

## 使用示例

```csharp
// 读法一：确认当前战役由谁驱动
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);

    CampaignStoryMode storyCampaign = game.GameType as CampaignStoryMode;
    if (storyCampaign == null)
    {
        return; // 沙盒战役，主线一套东西都不挂
    }

    CampaignGameStarter starter = (CampaignGameStarter)gameStarterObject;

    // 读法二：读主线的存档进度来决定我该挂什么（和 StoryModeSubModule 同一套路）
    MainStoryLine line = storyCampaign.StoryMode.MainStoryLine;
    starter.AddBehavior(line.IsCompleted ? new MyEndgameBehavior() : new MyMainlineBehavior());

    // 覆盖 StoryMode 已经注册过的模型：后注册的赢
    starter.AddModel<PartyWageModel>(new MyPartyWageModel(
        (StoryModePartyWageModel)starter.GetModel<PartyWageModel>()));
}
```

## 风险与边界

- **只在主线战役生效**：`InitializeGameStarter` 里的 null 判断意味着你的 mod 若想在沙盒里复用 StoryMode 的模型，需要自己写启动逻辑。
- **模型覆盖顺序敏感**：`SubModuleLoadOrder` 晚于本模块才能成功覆盖这 18 个模型之一。早了会被静默压掉。
- **不覆写 `OnSubModuleLoad`**：本类没有任何加载期副作用，所有事情都在战役启动期。窗口期之外的调用（例如 `OnGameEnd` 早于 manager 建立）由 null 判断挡住。
- **`StoryModeEvents.Instance` 在此非空**是因为时序保证，而不是因为有判空。如果你在更早的钩子里照抄这行会 NRE。
- **behavior 注册期即最终形态**：这些 behavior 一旦注册就随存档走。想中途加行为得用别的机制（如 `CampaignBehaviorBase` 的动态注册），改这里只对新战役生效。

## 依赖关系

- [CampaignStoryMode](../CampaignStoryMode) — 类型判定的目标，`Game.GameType` 必须能转型成它
- [StoryModeManager](../StoryModeManager) — `OnGameEnd` 里调 `Destroy()`
- [MainStoryLine](../MainStoryLine) — `AddBehaviors` 的分支依据（阶段与完成标记）
- [StoryModeEvents](../StoryModeEvents) — 启动时挂为 campaign event receiver
- [MBSubModuleBase](../../core/MBSubModuleBase) — 被覆写 `InitializeGameStarter` 与 `OnGameEnd` 的基类
- [CampaignGameStarter](../../campaign/CampaignGameStarter) — 所有注册动作的落点