---
title: "ConspiracyBaseOfOperationsDiscoveredConspiracyQuest"
description: "阴谋任务之三：攻打一个被占领的藏住处，可以选择与阴谋首领单挑（额外削 25 点）或直接群战，削减 50–75 点强度。"
---
# ConspiracyBaseOfOperationsDiscoveredConspiracyQuest

**Namespace:** StoryMode.Quests.SecondPhase.ConspiracyQuests
**Module:** StoryMode
**Type:** `public class ConspiracyBaseOfOperationsDiscoveredConspiracyQuest : ConspiracyQuestBase`
**Base:** ConspiracyQuestBase
**Source:** SecondPhase/ConspiracyQuests/ConspiracyBaseOfOperationsDiscoveredConspiracyQuest.cs

## 概述

三个阴谋任务里唯一一个**奖励取决于玩家选择**的：它锁定一个被阴谋占领的藏住处，把藏处首领换成专门的 `imperial_conspiracy_boss` / `anti_imperial_conspiracy_boss` 角色。玩家进入藏处后可以选择和首领单挑（赢了削 75 点阴谋强度）或按原流程群战（削 50 点）。选单挑还必须队伍里至少有一个非骑乘的己方士兵（`bandit_hideout_continue_battle_on_clickable_condition` 靠遍历 `Mission.Current.PlayerTeam.ActiveAgents` 判断），否则群战选项是灰的。

## 心智模型

它由 `SecondPhaseCampaignBehavior` 派发，构造期用 `SelectHideout()` 三级降级地挑一个**已感染（IsInfested）且与玩家敌对阵营**的藏住处，用 `SettlementHelper.FindNearestSettlementToSettlement` 找出它最近的堡垒作为"基地"引用，然后 `InitializeHideout()` 把藏处处设为可见并补满两支强盗队。

它复用 Bannerlord 的藏处战斗系统而不是自己造关卡：靠 `OnMissionStarted` 拿到 `HideoutMissionController` / `HideoutAmbushMissionController`，调 `SetOverriddenHideoutBossCharacterObject` 换掉首领；靠 `OnHideoutBattleCompleted` 与 `OnMissionEnded` 两条事件判断胜负。三处事件（藏处战斗组件回调、mission 结束回调、藏处被摧毁回调）都汇聚到同一个 `HandleHideoutBattleEnd()`。

坑：`_conspiracyStrengthDecreaseAmount` **没有 `[SaveableField]`**，读档后会在 `InitializeQuestOnGameLoad` 里被重置为 `50f`。如果玩家选了单挑赢了、正处在"胜利但未结算"的瞬间读档，就会少拿 25 点。第二个坑：`OnMissionStarted` 里 `Mission mission2 = (Mission)mission;` 是**无检查的强转**——如果 mod 在这个藏处塞了非 `TaleWorlds.CampaignSystem.Mission` 的 mission（比如战斗任务），会抛 `InvalidCastException`。第三个：`ChangeHideoutParties` 在 `OnGameMenuOpened` 里被调用，条件是"BOSS 队还活着但里面没有指定首领 CharacterObject"——它会清空整个队伍按模板重配。这是给"玩家在藏处里把首领杀了但不触发失败"准备的补丁。

## 主要成员

- `ConspiracyBaseOfOperationsDiscoveredConspiracyQuest(string questId, Hero questGiver)`：构造入口。建队伍列表、`SelectHideout()`、`_baseLocation`、`_conspiracyStrengthDecreaseAmount = 50f`、`InitializeHideout()`。
- `public override float ConspiracyStrengthDecreaseAmount`：**返回字段而非常量**，所以单挑路径能把 50 改成 75。
- `private TextObject HideoutBossName`：从藏处里 `IsBanditBossParty` 的队伍取第一个成员的 `Name`，用于四条结果日志。
- `private Settlement SelectHideout()`：三级降级——已感染且敌对阵营 → 已感染 → 可达 → 任意可达。每个都要求 `PathExistBetweenPoints`。
- `private void InitializeHideout()` / `CreateRaiderParty(Settlement hideout, bool isBanditBossParty, int partyIndex)`：补两支 6 人队、把藏处处设为可见并 `AddTrackedObject`。
- `private void ChangeHideoutParties()`：用立场对应的 `conspiracy_*_special_raider_party_template` 重配藏处里所有队伍，并给 BOSS 队塞入指定首领（`SetTransferableInPartyScreen(false)`）。
- `protected override void RegisterEvents()`：**先调 `base.RegisterEvents()`**（父类的"阴谋激活即失败"），再挂 `GameMenuOpened`、`OnMissionStartedEvent`、`OnMissionEndedEvent`、`OnHideoutDeactivatedEvent`、`OnHideoutBattleCompletedEvent`。
- `private void OnMissionStarted(IMission mission)`：强转 `Mission` 后取 `HideoutAmbushMissionController` 或 `HideoutMissionController`，调 `SetOverriddenHideoutBossCharacterObject`。
- `private void OnMissionEnded(IMission mission)`：读 `MapEvent.PlayerMapEvent` 判胜负，分别调四条带日志的分支，再 `HandleHideoutBattleEnd()`。
- `private bool bandit_hideout_boss_fight_start_on_condition()` / `start_duel_fight_on_consequence()` / `continue_battle_on_clickable_condition()` / `continue_battle_on_consequence()`：对话选项与"单挑/群战"的开关逻辑，分别挂 `HideoutAmbushMissionController.StartBossFightDuelMode` 或 `HideoutMissionController.StartBossFightDuelMode`。
- `private void HandleHideoutBattleEnd()`：**统一结算点**。解囚、销毁藏处所有强盗队，成功则 `CompleteQuestWithSuccess()`，失败写日志后 `CompleteQuestWithFail(null)`。
- `protected override void OnCompleteWithSuccess()`：调父类（削减强度）+ 销毁 `_raiderParties` 并 `Clear()`。
- 常量：`AntiImperialHideoutBossStringId`、`ImperialHideoutBossStringId`、`RaiderPartySize = 6`、`RaiderPartyCount = 2`、`DefaultConspiracyReductionAmount = 50f`。
- `[SaveableField(1,2)]`：只有 `_hideout` 与 `_raiderParties` 存档。

## 使用示例

```csharp
// 换掉藏处首领：复用游戏自带的藏处战斗，不自己造关卡
private void OnMissionStarted(IMission mission)
{
    Mission m = (Mission)mission;
    CharacterObject boss = Campaign.Current.ObjectManager.GetObject<CharacterObject>(
        StoryModeManager.Current.MainStoryLine.IsOnImperialQuestLine
            ? "anti_imperial_conspiracy_boss" : "imperial_conspiracy_boss");
    HideoutAmbushMissionController amb = m.GetMissionBehavior<HideoutAmbushMissionController>();
    if (amb != null) { amb.SetOverriddenHideoutBossCharacterObject(boss); return; }
    m.GetMissionBehavior<HideoutMissionController>().SetOverriddenHideoutBossCharacterObject(boss);
}

// 选择影响收益：单挑赢给 75 点，群战赢给 50 点
private void DueledWithHideoutBossAndDefeatedCaravan()
{
    AddLog(this.DueledWithHideoutBossAndDefeatLog, false);
    this._conspiracyStrengthDecreaseAmount = 75f;
}
```

## 风险与边界

`_conspiracyStrengthDecreaseAmount` 是唯一决定任务价值的字段，而**它不入存档**——这是本类最大的风险，读档跨越"单挑胜利结算"瞬间会退化成 50 点。`(Mission)mission` 强转没有类型检查，任何在该藏处运行自定义 mission 的 mod 都会踩雷。`OnCompleteWithSuccess` 里销毁 `_raiderParties` 后 `Clear()`，但失败路径（`OnTimedOut`）**不清理队伍也不清理藏处**——藏处会带着阴谋士兵留在地图上。第三，这个任务与 `DestroyRaidersConspiracyQuest` 有个交互：两者都会在同一藏处系统上生成队伍，`SecondPhaseCampaignBehavior` 并发派发时可能撞车。

## 依赖关系

- [ConspiracyQuestBase（父类，21 天时限与削弱强度在此）](../ConspiracyQuestBase)
- [DestroyRaidersConspiracyQuest（并列阴谋任务）](../DestroyRaidersConspiracyQuest)
- [DisruptSupplyLinesConspiracyQuest（并列阴谋任务）](../DisruptSupplyLinesConspiracyQuest)
- [ConspiracyProgressQuest（阴谋强度仪表盘）](../ConspiracyProgressQuest)
- [Mission（藏处战斗所属的 mission 类型）](../../mission/Mission)