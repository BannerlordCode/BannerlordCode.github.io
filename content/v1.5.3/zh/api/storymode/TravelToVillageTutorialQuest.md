---
title: "TravelToVillageTutorialQuest"
description: "教程首个任务：引导玩家北上去村庄，沿途生成四支难民队伍并强制玩家读完提示，与哥哥对话后完成。"
---
# TravelToVillageTutorialQuest

**Namespace:** StoryMode.Quests.TutorialPhase
**Module:** StoryMode
**Type:** `public class TravelToVillageTutorialQuest : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** StoryMode/Quests/TutorialPhase/TravelToVillageTutorialQuest.cs

## 概述

教程链条的第一个任务，目标只有"走到北边的村庄"。但它的实现远比目标复杂：它会生成四支巡逻的"难民"队伍（每支 6–12 人、带粮食、可交易）、劫持玩家的游戏菜单强制进入 `encounter_meeting`、每天给难民补粮防止饿死、进入村庄战斗时把哥哥强制加血并塞进随行队伍，最后靠"在村庄里和哥哥对话结束"来完成任务。它同时是教程地图聚焦、镜头动画和剧情日志的第一发起点。

## 心智模型

它**没有构造参数**，一被 `new` 出来就直接跑完全部初始化：`Settlement.Find("village_ES3_2")` 定位目标村庄、`CreateRefugeeParties()` 造四支队伍、`ShowInquiry` 弹哥哥的对话、`StoryModeEvents.OnTravelToVillageTutorialQuestStartedEvent` 触发镜头动画。因此它必须由教程引导代码显式 `new TravelToVillageTutorialQuest().StartQuest()`，而不是被任何任务嵌套创建。

完成路径只有一条：玩家在村庄里和 `StoryModeHeroes.ElderBrother` 的一对一对话走到 `talk_with_brother_consequence`，它把 `CompleteQuestWithSuccess` 挂到 `ConversationEndOneShot` 上——也就是**对话彻底关闭**才算完成，中途按 ESC 退出对话任务还挂着。

坑集中在两处。第一是 `DailyTick` 里给每支难民队补 2 粮食，防止玩家因为"和难民打架抢粮"之外的原因让它们饿死饿死导致地图上出现异常；这条每日循环会一直跑到任务完成。第二是 `OnCompleteWithSuccess` 里 `DestroyPartyAction.Apply(null, party)` 一次性清掉四支队伍——**只在这里清**，如果任务被取消或超时（`CampaignTime.Never` 所以不会超时），难民队会永久留在地图上。

## 怎么用

### 怎么拿到它

`public class TravelToVillageTutorialQuest : StoryModeQuestBase` 声明在 `bannerlord-1.5.3/StoryMode/Quests/TutorialPhase/TravelToVillageTutorialQuest.cs:27`，全文 257 行。

**无参构造**（约 `:64`），基类调用 `: base("travel_to_village_tutorial_quest", null, CampaignTime.Never)`（`:65`）——任务 id 硬编码、`questGiver` 传 `null`、时限 `Never`。存档 id 694001（`SaveableStoryModeTypeDefiner.cs:44`）。

**它是教学链条的第一环，构造函数有实质副作用**：`StoryModeEvents.Instance.OnTravelToVillageTutorialQuestStarted();`（`:76`）——**new 出来就广播教学开始**；`TutorialPhase.Instance.SetTutorialFocusSettlement(this._questVillage);`（`:81`）把目标村庄设为地图高亮。目标就是 `TutorialPhase.QuestVillageStringId`（`TutorialPhase.cs:266`，值 `village_ES3_2`）。

队伍常量 `private const int RefugePartyCount = 4;`（`:246`），对应字段 `private readonly MobileParty[] _refugeeParties`（`[SaveableField(2)]`，`:253`→`:254`）——**是数组不是 List**，由 `CreateRefugeeParties()`（`:186`）填充。目标村庄 `_questVillage` 带 `[SaveableField(1)]`（`:249`→`:250`）。

`RegisterEvents()`（`:130`）挂三条：`CampaignEvents.GameMenuOpened`（`:132`）、`CampaignEvents.BeforeMissionOpenedEvent`（`:133`）、`StoryModeEvents.OnTravelToVillageTutorialQuestStartedEvent`（`:134`）——**第二条与第三条让它自订阅自己广播的那个事件**（处理函数 `OnTravelToVillageTutorialQuestStarted()`，`:176`）。

对话流两条：`CreateDialogFlow("start", 1000010)`（`:99`）、`CreateDialogFlow("start", 1000020)`（`:105`）。三个委托：`news_about_raiders_condition()`（`:112`）、`news_about_raiders_consequence()`（`:118`）、`talk_with_brother_consequence()`（`:124`）。

两个带守卫的钩子：`OnGameMenuOpened`（`:138`）要求 `!TutorialPhase.Instance.IsCompleted && Settlement.CurrentSettlement == null && PlayerEncounter.EncounteredParty != null`（`:140`），并额外排除菜单 id `"encounter_meeting"`；`OnCompleteWithSuccess()`（`:209`）末尾 `TutorialPhase.Instance.RemoveTutorialFocusSettlement();`（`:216`）——**必须卸掉地图高亮**。

### 典型用法

```csharp
// 1) 正常由教学流程创建；无参，直接 new 即可
TravelToVillageTutorialQuest q = new TravelToVillageTutorialQuest();
q.StartQuest();

// 2) 目标村庄是教学专用常量
Debug.Print("目标村庄=" + TutorialPhase.QuestVillageStringId);   // village_ES3_2

// 3) 地图高亮由 TutorialPhase 持有
TutorialPhase tutorial = StoryModeManager.Current.MainStoryLine.TutorialPhase;
Debug.Print("高亮聚落=" + tutorial.TutorialFocusSettlement?.StringId);

// 4) 读任务
QuestBase b = Campaign.Current.QuestManager.GetQuest<TravelToVillageTutorialQuest>();
Debug.Print("id=" + b.QuestId + "，存档 id=694001，分类=" + b.SpecialQuestType);

// 5) 完成时必须卸高亮
tutorial.RemoveTutorialFocusSettlement();
```

### 最容易踩的坑

`OnGameMenuOpened`（`:138`）的守卫里含 `Settlement.CurrentSettlement == null`（`:140`）——它只在**玩家不在任何聚落里**时才介入。但同一个方法还要读 `args.MenuContext.GameMenu.StringId`（`:140`），而菜单上下文与聚落状态的更新时机不同步。你 mod 里复刻这段守卫时若去掉 `Settlement.CurrentSettlement` 的判空，就会在菜单打开瞬间直接 NRE——症状是玩家打开任意村庄菜单就崩。

## 主要成员

- `TravelToVillageTutorialQuest()`：无参构造。定位 `village_ES3_2`，把它和村长都 `AddTrackedObject`，分配 `MobileParty[4]`，弹 inquiry（回调里触发 `StoryModeEvents` 的开场事件），`SetDialogs()`、`InitializeQuestOnCreation()`、写起始日志、`SetTutorialFocusSettlement`、最后 `CreateRefugeeParties()`。
- `private TextObject _startQuestLog` / `_endQuestLog`：起始/结束日志，`VILLAGE_NAME` 动态注入。
- `protected override void SetDialogs()`：两条对话流——难民路遇（`news_about_raiders_condition` 检查 `MobileParty.ConversationParty` 是否在 `_refugeeParties` 里）和村庄里与哥哥对话。
- `private void OnGameMenuOpened(MenuCallbackArgs args)`：劫持菜单。玩家遇到难民且当前菜单不是 `encounter_meeting` / `encounter` 时，`GameMenu.SwitchToMenu("encounter_meeting")` 强制走遭遇流程。
- `protected override void DailyTick()`：给四支难民队补粮。
- `private void CreateRefugeeParties()`：用 `CustomPartyComponent.CreateCustomPartyWithTroopRoster` 生成四支队伍，随机塞 `storymode_quest_refugee_female/male`，`SetDoNotMakeNewDecisions(true)`、`IgnoreByOtherPartiesTill(CampaignTime.Never)`、`SetPartyUsedByQuest(true)`。
- `protected override void OnCompleteWithSuccess()`：销毁四支队伍、追加结束日志、`RemoveTutorialFocusSettlement()`。
- `[SaveableField(1)] _questVillage`、`[SaveableField(2)] readonly MobileParty[] _refugeeParties`：目标村庄与四支队伍都存档。

## 使用示例

```csharp
// 启动：教程引导代码显式创建，无参构造已包含全部初始化
new TravelToVillageTutorialQuest().StartQuest();

// 清理：只有在成功完成钩子里才会销毁这四支队伍
foreach (MobileParty party in this._refugeeParties.ToList<MobileParty>())
{
    DestroyPartyAction.Apply(null, party);
}
```

## 风险与边界

跨读档：`MobileParty[]` 存档，读档后队伍仍然是有效对象，但 `InitializeQuestOnGameLoad` 只重挂对话——**不会重置 AI 也不会重挂 `MapTracker`**（本类没加 tracker）。硬编码的 `"village_ES3_2"` 是最大移植障碍：换地图就必须改构造函数、`OnBeforeMissionOpened`、`OnGameMenuOpened` 三处。另外 `DailyTick` 每天无条件给四支队伍加粮，玩家可以通过洗劫它们拿粮食，这是原版有意留下的教学副作用。它还会在**每次进入该村庄的 mission** 时把哥哥加血到 50 并塞入 `PlayerEncounter.LocationEncounter`；如果玩家在任务完成后（对象已 finalize）再进这个村庄，钩子不再触发，玩家会发现哥哥不见了或没跟随——这是已知的不一致点。

## 依赖关系

- [TalkToTheHeadmanTutorialQuest（接续任务）](../TalkToTheHeadmanTutorialQuest)
- [LocateAndRescueTravellerTutorialQuest（同阶段后续任务）](../LocateAndRescueTravellerTutorialQuest)
- [CampaignEvents（GameMenuOpened / BeforeMissionOpenedEvent）](../../campaign/CampaignEvents)