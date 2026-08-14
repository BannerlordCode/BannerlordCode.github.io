---
title: "PrisonBreakCampaignBehavior"
description: "越狱剧情：地牢菜单→选囚犯→付费开潜入 Mission→刷囚犯与守卫→成功/失败走全套 Action 改世界，并正确存档 CampaignBehavior。"
---
# PrisonBreakCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox
**类型：** `public class PrisonBreakCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**源文件:** `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/PrisonBreakCampaignBehavior.cs`

## 概述

`PrisonBreakCampaignBehavior` 实现「越狱（Prison Break）」这条城镇/城堡剧情：把一名关在监狱（`prison` Location）里的英雄囚犯救出来。它负责在地牢菜单挂上「Stage a prison break」选项、弹出囚犯多选面板、计算贿赂金额、在玩家确认后开启专属潜入 Mission（`CampaignMission.OpenPrisonBreakMission`）、在 Mission 内刷出囚犯与 8 名守卫，并在任务成功或失败后通过一系列 `*Action` 完成「结束囚禁 / 改变关系 / 加同伴 / 重新俘虏玩家」等世界状态变更。它持有需要存档的状态（`_prisonerHero`、`_coolDownData`、`_previousMenuId`），是学习「带存档的 CampaignBehavior + 菜单/对话 → 临时 Location Mission 流转 + 全程走 Action 改世界」的标准范例。

## 心智模型

把它想成「越狱这条剧情的导演 + 记账员」，全部活动都在**战役层**，但会临时切入一个**城镇/城堡的 Location Mission**。

- **入口**：战役启动后 `RegisterEvents` 订阅三个事件——`OnSessionLaunchedEvent`（注册菜单与对话）、`CanHeroDieEvent`（保护主角在越狱任务里不会被「杀死」，只能被击晕）、`LocationCharactersAreReadyToSpawnEvent`（当 `_launchingPrisonBreakMission` 为真时，把囚犯 + 8 守卫刷进 `prison` Location）。
- **触发**：玩家在 `town_keep_dungeon` / `castle_dungeon` / `town_enemy_town_keep` 菜单看到「Stage a prison break」选项；显示条件为 `PrisonBreakModel.CanPlayerStagePrisonBreak(Settlement.CurrentSettlement)` 且主角未受伤。
- **流程**：选囚犯（多选面板，过滤敌方囚犯与金币不足者）→ 弹 `start_prison_break` 菜单确认付费 → `OpenPrisonBreakMission` 收贿赂（`GiveGoldAction`）、记下 7 天冷却、开 Mission → 任务内打完 → 对话分支（依囚犯身份：同伴 / 指挥官 / 领主 / 名流 / 其他）→ 成功走 `EndCaptivityAction.ApplyByEscape` + `ChangeRelationAction` + （若是同伴）`AddHeroToPartyAction`；失败则 `TakePrisonerAction` 把玩家重新抓回。
- **生命周期**：战役期常驻；`SyncData` 在每次存读档时持久化 `_prisonerHero / _coolDownData / _previousMenuId`，因此「正在营救谁」和「哪些定居点处于冷却」都能跨档保留——漏登记任一字段 = 典型坏档点。

## 何时用 / 何时不要用

- **用**：你想理解或扩展官方越狱流程；想学「菜单 + 对话驱动、临时开 Location Mission、全程用 Action 改世界、并正确存档」的完整写法。
- **不要用**：想直接操控囚犯名册 / 关系 / 金币——永远走 `EndCaptivityAction` / `ChangeRelationAction` / `GiveGoldAction` 等，不要直接改 `Hero.Party` / `Clan` / `Gold` 字段（会绕过事件与坏档保护）；想在非城镇/城堡语境开越狱 Mission——它强绑定 `LocationComplex.Current.GetLocationWithId("prison")` 与 `CampaignMission.OpenPrisonBreakMission`，脱离场景会失败或空引用。

## 依赖

- 上游：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（基类与存读档契约）、[CampaignEvents](../../campaign/CampaignEvents)（`OnSessionLaunchedEvent`、`CanHeroDieEvent`、`LocationCharactersAreReadyToSpawnEvent`）、[CampaignGameStarter](../../campaign/CampaignGameStarter)（`AddGameMenu` / `AddGameMenuOption` / `AddDialogLine` / `AddPlayerLine`）、[Settlement](../../campaign/Settlement) 与 [Town](../../campaign/Town)（判定地牢菜单与墙等级）、[Hero](../../campaign/Hero)（`MainHero`、`_prisonerHero`）、[MobileParty](../../campaign/MobileParty)（`MainParty`）、[CharacterObject](../../campaign/CharacterObject)（囚犯角色）、[Campaign](../../campaign/Campaign)（`Models.PrisonBreakModel`、`ConversationManager`）、[PlayerEncounter](../../campaign/PlayerEncounter)（离开定居点）、[LocationComplex](../../campaign/LocationComplex) / [Location](../../campaign/Location) / [LocationCharacter](../../campaign/LocationCharacter)（刷囚犯与守卫）、[SandBoxManager](../../campaign/SandBoxManager)（`AgentBehaviorManager`）。
- 下游 / 相关（全部必须走 Action，绝不直接改字段）：[GiveGoldAction](../GiveGoldAction)（贿赂扣钱）、[EndCaptivityAction](../EndCaptivityAction)（结束囚禁 / 逃脱）、[ChangeRelationAction](../ChangeRelationAction)（关系奖励）、[AddHeroToPartyAction](../AddHeroToPartyAction)（同伴加入）、[TakePrisonerAction](../TakePrisonerAction)（玩家被重新俘虏）、[SkillLevelingManager](../../campaign/SkillLevelingManager)（越狱技能经验）、[PrisonBreakModel](../../campaign/PrisonBreakModel)（`CanPlayerStagePrisonBreak` / `GetPrisonBreakStartCost` / `GetRelationRewardOnPrisonBreak`）、[InformationManager](../../core-extra/InformationManager)（提示，经 `MBInformationManager`）。

## 成员说明

### RegisterEvents() — 订阅三事件
战役启动时调用，注册 `OnSessionLaunchedEvent` → `OnSessionLaunched`、`CanHeroDieEvent` → `CanHeroDie`、`LocationCharactersAreReadyToSpawnEvent` → `LocationCharactersAreReadyToSpawn`。mod 扩展时务必保留这三个监听，否则菜单、防死亡保护或刷怪都不会生效。

### SyncData(IDataStore dataStore) — 持久化（关键存档点）
```csharp
dataStore.SyncData<Hero>("_prisonerHero", ref _prisonerHero);
dataStore.SyncData<Dictionary<Settlement, CampaignTime>>("_coolDownData", ref _coolDownData);
dataStore.SyncData<string>("_previousMenuId", ref _previousMenuId);
```
派生或 fork 时漏登记任一字段 → 读档后「正在营救谁 / 哪些点冷却」丢失或错位，是典型坏档点。

### OnSessionLaunched(CampaignGameStarter) → AddGameMenus + AddDialogs
向 `town_keep_dungeon`、`castle_dungeon`、`town_enemy_town_keep` 三个菜单加 `town_prison_break` 选项（文本「Stage a prison break」）；并注册 `prison_break_*` 对话线。

### game_menu_stage_prison_break_on_condition — 菜单显隐
调用 `PrisonBreakModel.CanPlayerStagePrisonBreak(Settlement.CurrentSettlement)`；并当 `Hero.MainHero.IsWounded` 时禁用并给 tooltip。

### game_menu_castle_prison_break_on_consequence — 选囚犯
合并 `Settlement.CurrentSettlement.Party.PrisonRoster` 与（若有）`Town.GarrisonParty.PrisonRoster`，过滤出英雄囚犯，弹出 `MBInformationManager.ShowMultiSelectionInquiry` 多选面板；敌方囚犯与金币不足者被标注。回调 `StartPrisonBreak`。

### OpenPrisonBreakMission() — 付费并开 Mission
```csharp
GiveGoldAction.ApplyBetweenCharacters(Hero.MainHero, null, _bribeCost, false);
AddCoolDownForPrisonBreak(Settlement.CurrentSettlement);
_launchingPrisonBreakMission = true;
Location locationWithId = LocationComplex.Current.GetLocationWithId("prison");
CampaignMission.OpenPrisonBreakMission(
    locationWithId.GetSceneName(Settlement.CurrentSettlement.Town.GetWallLevel()),
    locationWithId, _prisonerHero.CharacterObject);
```
注意收款方为 `null`——金币付给「世界」，而非某个账户。

### LocationCharactersAreReadyToSpawn(Dictionary<string,int>) — 刷囚犯与守卫
当 `_launchingPrisonBreakMission` 为真，清空 `prison` Location 后放入 `_prisonerHero`（`CreatePrisonBreakPrisoner`，用 `SimpleAgentOrigin` + `AddCompanionBehaviors`）与 8 名守卫（`CreatePrisonBreakGuard`，用 `SandBoxManager.Instance.AgentBehaviorManager.AddStealthAgentBehaviors`，武器取自 `GetPrisonGuardAgentData`：本文化兵种 + `battania_mace_1_t2`）。

### CanHeroDie(Hero, KillCharacterActionDetail, ref bool) — 防主角死亡
若 `detail == 4` 且 `hero == Hero.MainHero` 且正处于 `prison` Location 的 `CampaignMission`，则强制 `result = false`——越狱任务里主角只能被击晕，不会被永久杀死。

### prison_break_end_with_success_* / _companion — 成功收尾
`PrisonBreakEndedInternal()` 调 `ChangeRelationAction.ApplyPlayerRelation(_prisonerHero, PrisonBreakModel.GetRelationRewardOnPrisonBreak(_prisonerHero), true, true)` 与 `SkillLevelingManager.OnPrisonBreakEnd(_prisonerHero, true)`；然后：
- 普通成功：`EndCaptivityAction.ApplyByEscape(_prisonerHero, Hero.MainHero, true)`。
- 同伴：`EndCaptivityAction.ApplyByEscape` + `_prisonerHero.ChangeState(CharacterStates.Free)` + `AddHeroToPartyAction.Apply(_prisonerHero, MobileParty.MainParty, true)`。
最后 `_prisonerHero = null`。

### settlement_prison_break_fail_*_continue_on_consequence — 失败收尾
- 玩家被击晕：`SkillLevelingManager.OnPrisonBreakEnd(_prisonerHero, false)` + `PlayerEncounter.LeaveSettlement()` + `PlayerEncounter.Finish(true)` + `TakePrisonerAction.Apply(settlement.Party, Hero.MainHero)`（玩家被抓回）。
- 囚犯受伤：`SkillLevelingManager.OnPrisonBreakEnd(_prisonerHero, false)` + 离开定居点（囚犯未被救出）。

## 风险

- **SyncData 字段必须齐全**：`_prisonerHero / _coolDownData / _previousMenuId` 缺一不可；漏登记 → 读档后越狱状态错乱或冷却失效。
- **全程走 Action，禁止直改字段**：成功/失败对世界的所有改动（逃脱、关系、金币、加同伴、重新俘虏）都通过 `EndCaptivityAction` / `ChangeRelationAction` / `GiveGoldAction` / `AddHeroToPartyAction` / `TakePrisonerAction`。直接赋值会绕过事件与坏档保护。
- **Mission 强绑定 `prison` Location**：`OpenPrisonBreakMission` 依赖 `LocationComplex.Current.GetLocationWithId("prison")` 与 `CampaignMission.OpenPrisonBreakMission`；必须在已进入对应城镇/城堡场景的语境下调用，脱离场景会空引用。
- **`CanHeroDie` 的保护只在监狱 Mission 内生效**：它仅在 `location == prison 且 CampaignMission.Current != null` 时把死亡改判为击晕；在其它语境主角仍可正常死亡，不要误以为「越狱行为保护主角不死」。
- **冷却 7 天**：`AddCoolDownForPrisonBreak` 写 `CampaignTime.DaysFromNow(7f)`；同一定居点短期连刷会被 `CanPlayerStartPrisonBreak` 拦下并切到 `prison_break_cool_down` 菜单。
- **受伤阻断**：`game_menu_stage_prison_break_on_condition` 在 `Hero.MainHero.IsWounded` 时禁用菜单选项，触发前先清状态。

## 最小真实示例

从地牢菜单发起越狱并付费开 Mission（官方 `game_menu_castle_prison_break_on_consequence` 精简版）：
```csharp
if (Campaign.Current.Models.PrisonBreakModel.CanPlayerStagePrisonBreak(Settlement.CurrentSettlement)
    && !Hero.MainHero.IsWounded)
{
    // 选好囚犯后付费并开 Mission（金币付给世界，收款方为 null）
    GiveGoldAction.ApplyBetweenCharacters(Hero.MainHero, null, _bribeCost, false);
    AddCoolDownForPrisonBreak(Settlement.CurrentSettlement);
    Location prison = LocationComplex.Current.GetLocationWithId("prison");
    CampaignMission.OpenPrisonBreakMission(
        prison.GetSceneName(Settlement.CurrentSettlement.Town.GetWallLevel()),
        prison, _prisonerHero.CharacterObject);
}
```
成功救出后让囚犯加入队伍（永远用 Action，不直改 `Hero.Party`）：
```csharp
EndCaptivityAction.ApplyByEscape(_prisonerHero, Hero.MainHero, true);
_prisonerHero.ChangeState(CharacterStates.Free);
AddHeroToPartyAction.Apply(_prisonerHero, MobileParty.MainParty, true);
```

## 导航

- ↑ 父级/枢纽：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（基类与存读档契约；所有带存档 Behavior 的对照范本）
- ↔ 同级行为：[ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)（同样是「菜单/对话 → Mission 流转」；但 ArenaMaster 用 `_knowTournaments` 门禁，本类用冷却 + 付费）
- 相关系统：[PrisonBreakModel](../../campaign/PrisonBreakModel)（可否越狱 / 费用 / 关系奖励）、[GiveGoldAction](../GiveGoldAction) 与 [EndCaptivityAction](../EndCaptivityAction)（世界变更通道）、[CampaignEvents](../../campaign/CampaignEvents)（三事件订阅）
