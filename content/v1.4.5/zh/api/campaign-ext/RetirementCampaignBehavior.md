---
title: "RetirementCampaignBehavior"
description: "隐居退休剧情：把「Mount Erithrys 隐居地」随主角接近而显形，挂出菜单与隐士对话，让玩家选择继承人或彻底退休（结束游戏），并把世界状态改写全部交给 ApplyHeirSelectionAction，同时只持久化「是否聊过隐士」这一标志。"
---

# RetirementCampaignBehavior

**类型：** class `RetirementCampaignBehavior` : `CampaignBehaviorBase`
**命名空间：** `TaleWorlds.CampaignSystem.SandBox.CampaignBehaviors`
**模块：** `SandBox`
**源文件：** `bannerlord-1.4.5/Bannerlord.Source/Modules.SandBox/SandBox/SandBox.CampaignBehaviors/RetirementCampaignBehavior.cs`

## 概述

`RetirementCampaignBehavior` 实现了 Bannerlord 的「退休（Retirement）」剧情：玩家在地图上靠近隐藏的「Mount Erithrys 隐居地」时，该定居点会逐渐显形；进入后可在菜单选择「Approach」进入隐士（`sp_hermit`）所在的 `retirement_retreat` Location Mission。对话中隐士会劝玩家放下权势，并允许玩家从 `Clan.PlayerClan.GetHeirApparents()` 给出的潜在继承人中指定一名——选好后真正退休会以玩家指定继承人继续游戏，或干脆「不指定任何人」而直接结束整局游戏（弹出 `GameOverState`，`GameOverReason` 为 Retirement）。它所有对世界状态的改动都经由 `ApplyHeirSelectionAction.ApplyByRetirement` 完成，自身只持久化一个布尔标志 `_hasTalkedWithHermitBefore`（用来在再次对话时走「已聊过」分支），其余流程状态（`_selectedHeir`、`_playerEndedGame`、`_retirementSettlement`）均为运行期瞬态，是学习「菜单 + 重复对话（RepeatablePlayerLine）→ 临时 Location Mission → 用单一 Action 收尾」的轻量范例。

## 心智模型

把它想成「退休这条剧情的导游」，整个生命周期都活在**战役层（Campaign layer）**，但会临时切进一个**定居点内的 Location Mission**。

- **创建与持有**：它由 `CampaignBehaviorManager` 在战役初始化时实例化并常驻；具体挂载发生在 `RegisterEvents` 订阅的 `OnSessionLaunchedEvent` 里——此时它用 `Settlement.Find("retirement_retreat")` 找回隐居地定居点，并通过 `CampaignGameStarter` 注册菜单与对话脚本。
- **循环**：`HourlyTickEvent` 每游戏小时调用 `CheckRetirementSettlementVisibility`，用 `MapVisibilityModel.GetHideoutSpottingDistance()` 计算主角部队与隐居地的距离平方，足够近就把 `_retirementSettlement.IsVisible` 与 `RetirementSettlementComponent.IsSpotted` 置真，使隐居地在地图上浮现。
- **流转**：玩家点进隐居地菜单 → `retirement_menu_on_init` 调 `PlayerEncounter.EnterSettlement()` 并建 `RetirementEncounter` → `retirement_menu_on_enter` 用 `LocationComplex.Current.GetLocationWithId("retirement_retreat")` 开 Mission → 与隐士对话（用 `ConversationSentence.SetObjectsToRepeatOver` 把潜在继承人列表做成可重复选项）→ 选继承人或选退休 → `ApplyHeirSelectionAction.ApplyByRetirement` / 推 `GameOverState`。
- **生命周期**：战役期常驻；存档时 `SyncData` 只持久化 `_hasTalkedWithHermitBefore`，所以「是否聊过隐士」跨档保留，而「当前选了谁当继承人 / 是否已决定结束游戏 / 隐居地引用」都要么在流程内瞬态使用、要么靠 `Settlement.Find` 在下次会话重建。

## 何时使用 / 何时不要使用

- **用**：你想理解或扩展官方退休流程；想学「菜单 + 重复对话驱动、临时开 Location Mission、用单一 `ApplyHeirSelectionAction` 收尾、且只持久化最少状态」的写法；想做类似「靠近显形 + 进入对话 + 选继承人/结束」的剧情节点。
- **不要用**：想直接改继承人、关系或结束游戏——永远走 `ApplyHeirSelectionAction.ApplyByRetirement`（真正换主角的逻辑在那条 Action 里），不要直接改 `Hero` / `Clan` 字段，否则会绕过事件与坏档保护。想在非 `retirement_retreat` 语境开这个 Mission——它强绑定 `LocationComplex.Current.GetLocationWithId("retirement_retreat")` 与 `RetirementEncounter`，脱离场景会空引用。想做「多状态持久化」的复杂剧情——本类几乎只存一个布尔，复杂存档请参考带完整 `SyncData` 的兄弟行为（如 `PrisonBreakCampaignBehavior`）。

## 依赖

- 上游：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（基类与 `SyncData` 存读档契约）、[CampaignEvents](../../campaign/CampaignEvents)（`OnSessionLaunchedEvent`、`HourlyTickEvent`、`GameMenuOpened` 三个订阅）、[CampaignGameStarter](../../campaign/CampaignGameStarter)（`AddGameMenu` / `AddGameMenuOption` / `AddDialogLine` / `AddPlayerLine` / `AddRepeatablePlayerLine`）、[Campaign](../../campaign/Campaign)（`Campaign.Current.Models.MapVisibilityModel`、`Campaign.Current.GameMenuManager`、`Campaign.Current`）、[Hero](../../campaign/Hero)（`_selectedHeir`、`CharacterObject.OneToOneConversationCharacter`）、[MobileParty](../../campaign/MobileParty)（`MobileParty.MainParty.Position`、`.CurrentSettlement`）、[Settlement](../../campaign/Settlement)（隐居地 `retirement_retreat`、`.Position`、`.IsVisible`、`.SettlementComponent`）、[Clan](../../campaign/Clan)（`Clan.PlayerClan.GetHeirApparents()`）、[CampaignBehaviorManager](../../campaign/CampaignBehaviorManager)（实例化并持有本行为）、[SaveManager](../../save-system/SaveManager)（`SyncData` 经其读写存档）。
- 下游 / 兄弟行为（同目录、同属「菜单/对话 → Location Mission 流转」模式，可对照参考）：[PrisonBreakCampaignBehavior](../PrisonBreakCampaignBehavior)（同样是菜单/对话驱动 + 临时 Location Mission，但走完整 `*Action` 收尾与多字段存档）、[ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)（同用 `OnSessionLaunched` 注册菜单与对话）、[CompanionDismissCampaignBehavior](../../gameplay/CompanionDismissCampaignBehavior)（同属角色离队/去留类剧情）、[TradersCampaignBehavior](../TradersCampaignBehavior)（同属 SandBox 剧情行为）。
- 相关事件与 Action：本类实际调用的世界改写通道是 `ApplyHeirSelectionAction.ApplyByRetirement`（不在 vetted 列表内，故仅以反引号标注、不链接）；`KillCharacterAction` / `ChangeRelationAction` 等通用 Action 概不直接使用——退休只依赖上面那条继承人 Action 完成换主角。

## 风险

- **SyncData 字段缺漏是刻意但危险**：`SyncData` 只持久化 `_hasTalkedWithHermitBefore`；`_selectedHeir`、`_playerEndedGame` 完全不存档。若玩家在「已选继承人但尚未在 `retirement_place` 菜单提交」的窗口内存读档，`_selectedHeir` 会丢失，静默废掉这次退休选择。扩展时若新增跨档需要保留的流程状态，务必在 `SyncData` 中登记，否则是坏档隐患。
- **`_retirementSettlement` 不存档、靠 Find 重建**：它每次 `OnSessionLaunched` 用 `Settlement.Find("retirement_retreat")` 重新取引用。若存档里该定居点被改名或删除，重建会得到 `null`，随后 `HourlyTick` 里 `_retirementSettlement.Position` 直接空引用崩溃——改动场景表时要保证 `retirement_retreat` 这个 `StringId` 稳定。
- **全程走 Action，禁止直改字段**：是否真的换继承人、结束主线全在 `ApplyHeirSelectionAction.ApplyByRetirement` 内部。mod 若想在退休时顺带改关系/金币/领地，应调用对应 Action（如 `ChangeRelationAction`），绝不要直接赋值 `Hero` / `Clan` 字段，否则绕过事件与坏档保护。
- **Mission 强绑定 `retirement_retreat` Location**：`retirement_menu_on_enter` 依赖 `LocationComplex.Current.GetLocationWithId("retirement_retreat")`，必须在已进入对应定居点场景语境下调用；脱离场景会空引用。
- **`Tick` 阶段正确性**：`CheckRetirementSettlementVisibility` 跑在 `HourlyTickEvent`（每游戏小时一次），不是每帧；显形判定用的是距离平方与 `IsSpotting` 比较，依赖 `MobileParty.MainParty` 已存在。战役早期 `MainParty` 就绪前不要过早依赖此显形逻辑。
- **引用已死亡/无效英雄**：`GetHeirApparents()` 应只返回存活潜在继承人，但若 mod 改动继承规则，重复对话里用 `ConversationSentence.CurrentProcessedRepeatObject` 取出的 `Hero` 必须判 `is Hero` 再强转（源码已如此做），否则空引用。

## 成员

### SyncData(IDataStore dataStore) — 唯一存档点（只存一个布尔）
```csharp
dataStore.SyncData<bool>("_hasTalkedWithHermitBefore", ref _hasTalkedWithHermitBefore);
```
只在 `OnSessionLaunched` 之后、每次存读档时调用；决定是否走「首次对话」还是「已聊过」分支。派生或 fork 时若新增需跨档保留的流程状态，必须在这里补 `SyncData` 登记，否则读档后状态错乱。

### RegisterEvents() — 订阅三个事件
战役启动时调用，注册 `OnSessionLaunchedEvent` → `OnSessionLaunched`、`HourlyTickEvent` → `HourlyTick`、`GameMenuOpened` → `GameMenuOpened`。扩展时必须保留这三个监听，否则菜单/显形/退休提交都不会生效。

### OnSessionLaunched(CampaignGameStarter) → 找回定居点 + 注册菜单/对话
用 `Settlement.Find("retirement_retreat")` 重建 `_retirementSettlement`，再调 `SetupGameMenus` 与 `SetupConversationDialogues`。这是整个行为「复活」的入口——若 `OnSessionLaunched` 没跑，`_retirementSettlement` 为 `null`，后续 `HourlyTick` 会崩。

### SetupGameMenus / SetupConversationDialogues — 挂菜单与隐士对话
注册 `retirement_place`、`retirement_after_player_knockedout` 两个菜单，以及以 `sp_hermit` 为对话对象的 `hermit_*` 对话线。对话用 `AddRepeatablePlayerLine` 把潜在继承人做成可重复选项（`{=!}{HEIR.NAME}`）。

### HourlyTick() → CheckRetirementSettlementVisibility — 显形判定
每游戏小时算主角与隐居地的距离平方，是否进入 `MapVisibilityModel.GetHideoutSpottingDistance()` 范围内，是则置 `IsVisible` 与 `RetirementSettlementComponent.IsSpotted`。无副作用，只改地图可见性。

### GameMenuOpened(MenuCallbackArgs) — 退休提交出口
当打开 `retirement_place` 菜单且 `_selectedHeir != null` 时：调 `PlayerEncounter.Finish(true)` 并 `ApplyHeirSelectionAction.ApplyByRetirement(_selectedHeir)`（以继承人继续游戏），然后清空 `_selectedHeir`；若 `_playerEndedGame` 为真（选了「不指定任何人」），则 `GameMenu.ExitToLast()` 并 `ShowGameStatistics()` 推 `GameOverState`。这是退休真正「落地」的地方。

### hermit_player_select_heir_on_consequence / hermit_select_heir_multiple_on_* — 选继承人
`hermit_player_select_heir_on_consequence` 从 `Clan.PlayerClan.GetHeirApparents()` 排序后收集成 `List<Hero>`，调 `ConversationSentence.SetObjectsToRepeatOver(list, 5)` 渲染成重复选项；`hermit_select_heir_multiple_on_condition` 用 `ConversationSentence.CurrentProcessedRepeatObject` 取当前英雄并设 `HEIR` 文本变量；`hermit_select_heir_multiple_on_consequence` 把选中的 `Hero` 赋给 `_selectedHeir`，再触发 `hermit_player_retire_on_consequence` 弹确认框。

### DecideRetirementPositively / DecideRetirementNegatively — 收尾
确认退休：有继承人则把 `_hasTalkedWithHermitBefore` 重置为 `false`（下局还能再聊），否则置 `_playerEndedGame = true`；最后 `Mission.Current.EndMission()` 回到 `retirement_place` 菜单触发 `GameMenuOpened` 提交。取消则清空 `_selectedHeir`。

### ShowGameStatistics() — 结束游戏
```csharp
GameOverState state = Game.Current.GameStateManager.CreateState<GameOverState>(new object[1] { (object)(GameOverReason)0 });
Game.Current.GameStateManager.PushState((GameState)(object)state, 0);
```
`GameOverReason` 0 即 Retirement，直接把玩家送进通关结算界面。

## 示例

模拟「靠近隐居地使其显形」与「选好继承人后真正退休」两步（对应 `CheckRetirementSettlementVisibility` 与 `GameMenuOpened` + `ApplyHeirSelectionAction`）：
```csharp
// 1) 战役 HourlyTick 中让隐居地随主角接近而显形
Settlement retreat = Settlement.Find("retirement_retreat");
float spotting = Campaign.Current.Models.MapVisibilityModel.GetHideoutSpottingDistance();
CampaignVec2 partyPos = MobileParty.MainParty.Position;
if (1f - partyPos.DistanceSquared(retreat.Position) / (spotting * spotting) > 0f)
{
    retreat.IsVisible = true;
    ((RetirementSettlementComponent)retreat.SettlementComponent).IsSpotted = true;
}

// 2) 在隐居者对话里选好继承人后真正退休（必须用 Action，不直改 Hero/Clan）
Hero chosenHeir = Clan.PlayerClan.GetHeirApparents()
    .OrderBy(kv => kv.Value)
    .Select(kv => kv.Key)
    .FirstOrDefault();
if (chosenHeir != null)
{
    PlayerEncounter.Finish(true);
    ApplyHeirSelectionAction.ApplyByRetirement(chosenHeir);
}
```

## 导航

- ↑ 父级/枢纽：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（基类与 `SyncData` 存读档契约；所有 CampaignBehavior 的对照范本）
- ↔ 兄弟行为：[PrisonBreakCampaignBehavior](../PrisonBreakCampaignBehavior)（同样菜单/对话 → Location Mission，但走完整 `*Action` + 多字段存档，与本类「最小存档」形成对照）、[ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)（同用 `OnSessionLaunched` 注册菜单与对话）、[CompanionDismissCampaignBehavior](../../gameplay/CompanionDismissCampaignBehavior)（同属角色去留类剧情）
- 相关系统：[CampaignEvents](../../campaign/CampaignEvents)（三事件订阅）、[Clan](../../campaign/Clan)（`GetHeirApparents` 提供继承人候选）、[Settlement](../../campaign/Settlement)（隐居地 `retirement_retreat` 的显形与引用）、[SaveManager](../../save-system/SaveManager)（`SyncData` 经其读写存档）
