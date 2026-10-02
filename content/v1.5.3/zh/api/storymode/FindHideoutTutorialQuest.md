---
title: "FindHideoutTutorialQuest"
description: "教程的核心战斗任务：打掉强盗藏身处、决定与 Radagos 单挑还是群战、与他对话、再与哥哥开箱取龙旗。"
---
# FindHideoutTutorialQuest

**Namespace:** StoryMode.Quests.TutorialPhase
**Module:** StoryMode
**Type:** `public class FindHideoutTutorialQuest : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** StoryMode/Quests/TutorialPhase/FindHideoutTutorialQuest.cs

## 概述

这是整个新手教程最长、也是唯一一个"打完整战役关卡"的任务。它把藏身处遭遇战、单挑 vs 群战的选择、与 Radagos 的战后对话、玩家氏族改名与旗帜编辑、最后开箱取龙旗这几件事串成一条线。实现上它自定义了两个游戏菜单（`radagos_hideout` 和 `brother_chest_menu`），在菜单初始化时判定战斗胜负并驱动后续状态，同时对 Radagos 施加一整套"不可杀死、不可交易、不可触发战役问题"的保护。

## 心智模型

构造时传入藏身处 `Settlement hideout`，并把这个 ID 存进 **static 字段** `_activeHideoutStringId`（供 `GameMenuInitializationHandler` 的静态背景设置用，因为两个菜单菜单项的静态回调拿不到实例）。它立刻做三件重活：`InitializeHideout()` 造强盗队并把 Radagos 塞进 BOSS 队、`AddGameMenus()` 注册两个菜单、`AddLog` 写起始日志。

状态由 `_foughtWithRadagos` / `_dueledRadagos` / `_talkedWithRadagos` / `_talkedWithBrother` 四个 bool 加上枚举 `_hideoutBattleEndState` 表达。战斗结果**不在 MapEvent 回调里立刻处理**，而是延迟到 `radagos_hideout_menu_on_init`：打开藏身处菜单时读 `MapEvent.PlayerMapEvent.WinningSide`，写入 `_hideoutBattleEndState`，然后 `PlayerEncounter.Update()`。所有后续分支（补兵、加血、送回哥哥、开箱菜单）都在 `OnGameMenuOpened` 里按这个枚举值分流。

坑非常密集。第一，`_mainPartyTroopBackup` 是**故意用来"偷走"玩家部队再还回去**的：进入藏身处前把主队所有非英雄兵种存进 `_mainPartyTroopBackup` 并留在原地（教程要保证玩家必须带够 4 人硬打），战斗结束后从强盗队的 `PrisonRoster` 里把它们捞回来。任何时候这个列表为空或漏掉某个兵种，玩家就会永久掉兵。第二，`OnGameLoadFinished` 会把所有藏身处队伍裁到 4 人，这是防止旧存档里强盗队规模超标。第三，`InitializeQuestOnGameLoad` 里还有一段针对 `MBSaveLoad.LastLoadedGameVersion < v1.1.1` 的**旧版本迁移补丁**，把 Radagos 重新塞回 BOSS 队——这类历史兼容代码不要试图"清理"，它们是真实存档需要。

## 主要成员

- `FindHideoutTutorialQuest(Settlement hideout)`：构造入口。设 `_activeHideoutStringId`、造队伍、注册菜单、写日志、`SetTutorialFocusSettlement`。
- `public override void OnHeroCanDieInfoIsRequested / OnHeroCanBeSelectedInInventoryInfoIsRequested / OnHeroCanHaveCampaignIssuesInfoIsRequested`：三个 override，全部只针对 `StoryModeHeroes.Radagos` 返回 `result = false`，保证教学角色不会被杀、不能被交易、不产生战役随机问题。
- `private void InitializeHideout()`：造 2 支 4 人强盗队 + 1 支 BOSS 队；把 `StoryModeHeroes.Radagos` 设为 BOSS 队首领并补血到 100。
- `private void OnGameMenuOpened(MenuCallbackArgs menuCallbackArgs)`：**本类最长的方法**。按 `_hideoutBattleEndState` 分支——胜利且已与 Radagos 说话则 `SetNextMenu("brother_chest_menu")`；战败/撤退则补兵（不足 4 人补到 4）、治愈所有英雄与士兵、解开玩家与哥哥的囚禁状态、弹"去村里招人"的 inquiry。
- `private void enter_radagos_hideout_on_consequence(MenuCallbackArgs)`：进关前备份主队兵力、初始化藏身处、移除默认 BOSS、`PlayerEncounter.StartBattle()`、`CampaignMission.OpenHideoutBattleMission(TutorialHideoutSceneName, ...)`。
- `private void radagos_hideout_menu_on_init(MenuCallbackArgs)`：判定胜负写 `_hideoutBattleEndState`；若玩家选了单挑并且赢了，调 `AchievementsCampaignBehavior.OnRadagosDuelWon()`。
- `private void OnChangeClanNameDone(string newClanName)`：改玩家氏族名并推入 `BannerEditorState` 让玩家设计旗帜。
- `private void brother_chest_menu_on_init(MenuCallbackArgs)`：与哥哥对话后 `PlayerEncounter.Finish(true)` + `CompleteQuestWithSuccess()`。
- `protected override void OnCompleteWithSuccess()`：清掉藏身处自定义名字、治愈 Radagos、调用 `StoryModeManager.Current.MainStoryLine.CompleteTutorialPhase(false)`。
- `[SaveableField(1,2,4,5,6)]`：`_hideout`、`_raiderParties`、`_talkedWithRadagos`、`_talkedWithBrother`、`_hideoutBattleEndState`。`_foughtWithRadagos`、`_dueledRadagos`、`_mainPartyTroopBackup` 不存档。

## 使用示例

```csharp
// 进关前备份主队兵力，战斗后再从强盗队俘虏栏里捞回来
this._mainPartyTroopBackup = new List<CharacterObject>();
foreach (TroopRosterElement e in PartyBase.MainParty.MemberRoster.GetTroopRoster())
    if (!e.Character.IsHero)
        this._mainPartyTroopBackup.Add(e.Character);

// 战败分支：把藏身处重新填满到 4 人，避免玩家第二次空手进
if (!mobileParty.IsBanditBossParty && mobileParty.MemberRoster.TotalManCount < 4)
{
    CharacterObject raider = Campaign.Current.ObjectManager.GetObject<CharacterObject>("storymode_quest_raider");
    mobileParty.MemberRoster.AddToCounts(raider, 4 - mobileParty.MemberRoster.TotalManCount, false, 0, 0, true, -1);
}
```

## 风险与边界

这是整个教程里存档风险最高的一个类。`_foughtWithRadagos` / `_dueledRadagos` / `_mainPartyTroopBackup` 都不参与序列化：在战斗中读档会丢失"偷走的兵力备份"，玩家可能永久损失部队；而 `_activeHideoutStringId` 是 **static** 字段，多任务并存时后创建的实例会覆盖前一个的菜单背景。`OnGameMenuOpened` 里的自愈逻辑（补兵到 4 人、治疗、解囚）会在每次打开菜单时触发，等于把战斗难度彻底抹平。`TutorialHideoutSceneName = "forest_hideout_003"` 与藏身处 ID 都是硬编码；换地图必须同时改构造函数和菜单条件。此外 `CompleteTutorialPhase(false)` 是不可逆的全局阶段推进——**不要为了测试而反复触发它**。

## 依赖关系

- [HideoutBattleEndState（本类内部枚举）](../HideoutBattleEndState__TutorialPhase)
- [LocateAndRescueTravellerTutorialQuest（前一段教程）](../LocateAndRescueTravellerTutorialQuest)
- [RebuildPlayerClanQuest（教程之后的氏族重建）](../RebuildPlayerClanQuest)
- [Mission（隐藏任务所处子系统）](../../mission/Mission)