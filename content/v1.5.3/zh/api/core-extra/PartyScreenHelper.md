---
title: "PartyScreenHelper"
description: "以预设模式打开和关闭部队界面（部队、战俘、赎金、战利品、捐赠、任务交换），并集中定义部队与战俘的可转移规则。"
---

# PartyScreenHelper

**命名空间：** `Helpers`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class PartyScreenHelper`
**Source:** `TaleWorlds.CampaignSystem/Helpers/PartyScreenHelper.cs`

## 概述

`PartyScreenHelper` 是战役层「部队界面」（Party Screen）的统一入口。它把一次界面打开所需的一切——左右两侧的名册、规模上限、标题、完成/取消回调、以及「哪些兵能转移」的判定委托——组装成 `PartyScreenLogicInitializationData`，初始化 `PartyScreenLogic`，再把它塞进一个 `PartyState` 压入 `GameStateManager`。围绕这个核心，它提供了一整套按用途命名的打开方法：普通、作弊、赎金、战利品、管理部队、管理战俘、捐赠部队、捐赠驻军、捐赠战俘、任务交换、巷子管理、虚拟名册，以及「为英雄创建氏族部队」。它还对外暴露了几个可复用的可转移判定委托，供别的界面逻辑直接引用。

## 心智模型

把 `PartyScreenHelper` 想成「部队界面的预设配方表」。界面本身是 `PartyState` + `PartyScreenLogic`，而本类的每个 `OpenScreenAsXxx` 都是一份配方：它决定左右两边各放什么名册、各自的上限是多少、用哪个可转移判定、点完成时跑哪个 handler、以及界面处于哪个 `PartyScreenMode`。

因此使用它的思维模型是**「先选配方，再给料」**：

- 配方名告诉你界面的语义。`OpenScreenAsLoot` 是战后打扫战场，左边是战利品名册；`OpenScreenAsRansom` 是赎金经纪人，右边是主部队、交易状态为 `TransferableWithTrade`；`OpenScreenAsDonateTroops` 是往别人部队里送兵，完成前会跑 `DonateDonePossibleDelegate` 检查「不能反向拿兵、不能超容量」。
- 只有 `OpenScreenWithCondition` 和 `OpenScreenWithDummyRoster` 是「通用配方」：它们把可转移判定、完成条件、左右名册和上限全部交给你，适合任务或 mod 自定义界面。
- 可转移判定是**策略对象**：`TroopTransferableDelegate` 是通用规则（英雄只有在特定条件下才可转移），`DonatePrisonerTransferableDelegate` 只允许右侧战俘，`ClanManageTroopTransferableDelegate` 只允许非英雄。你在配方里传哪个，界面就按哪套规则灰掉按钮。

关闭路径也统一走 `CloseScreen`：它取当前 `PartyState`，跑 `DoneLogic`，再 `OnPartyScreenClosed` 并 `PopState`。界面已经被关掉时它会断言失败而不是静默。

## 怎么用

### 什么时候调它

- 你的 CampaignBehavior 或任务想弹出部队界面时，先找语义最接近的 `OpenScreenAsXxx`；找不到合适的就用 `OpenScreenWithCondition`。
- 想复用官方的可转移规则时，直接引用 `TroopTransferableDelegate`、`DonatePrisonerTransferableDelegate` 或 `ClanManageTroopTransferableDelegate`。
- 想在界面关闭后继续自己的逻辑时，传 `PartyScreenClosedDelegate`（很多配方都带这个可选参数）。

### 调之前要准备什么

- 界面依赖 `Game.Current` 与 `GameStateManager`，只能在战役已启动时调用。
- `OpenScreenAsCheat` 会先检查 `Game.Current.CheatMode`，未开作弊会弹提示并直接返回，不会打开界面。
- 依赖「玩家当前聚落」的配方（`OpenScreenAsDonateGarrisonWithCurrentSettlement`、`OpenScreenAsDonatePrisoners`、`OpenScreenAsManagePrisoners`）要求 `Hero.MainHero.CurrentSettlement` 非空，并且必要时会顺手 `AddGarrisonParty`。

### 调之后会发生什么

- 一次调用会把一个新的 `PartyState` 压入状态栈；玩家关闭界面后状态被弹出。
- 配方的完成 handler 会真正改数据：例如捐赠驻军会 `AddElementToMemberRoster` 并把英雄 `EnterSettlementAction.ApplyForCharacterOnly`；捐赠战俘会 `CampaignEventDispatcher.Instance.OnPrisonerDonatedToSettlement`；赎金会 `SellPrisonersAction.ApplyForSelectedPrisoners`。
- `OpenScreenAsManagePlayerClanPartyClosed` 不是「打开」而是关闭回调：左侧部队人数归零时会转移船只并 `DestroyPartyAction.Apply`。

### 最容易踩的坑

- `OpenScreenAsManagePlayerClanPartyClosed` 的命名有误导性，它其实是氏族部队界面关闭时的清理逻辑，不要当打开方法用。
- `OpenScreenAsNormal` 在作弊模式下会**转调** `OpenScreenAsCheat`，所以你看到的不是普通界面。
- `CloseScreen` 在界面已经关闭时会触发 `Debug.FailedAssert` 并直接返回；重复关闭是编程错误。
- 通用配方不会替你选可转移判定，传错委托会让界面里所有按钮都不可点。
- `OpenScreenAsRansom` 会把主部队名册克隆一份再操作，并设置 `DoNotApplyGoldTransactions`，所以它不会立刻结算金币。

## 关键成员

- **`GetActivePartyState()`**（`PartyScreenHelper.cs:22`）— 从 `GameStateManager.ActiveState` 取当前 `PartyState`，不是部队界面时断言失败并返回 null。
- **`CloseScreen(bool, bool)`**（`PartyScreenHelper.cs:79`）— 关闭部队界面，跑完成逻辑、关闭回调并弹出状态。
- **`OpenScreenAsCheat()`**（`PartyScreenHelper.cs:114`）— 作弊模式打开，左侧是全部兵种，每种加固定数量。
- **`OpenScreenAsNormal()`**（`PartyScreenHelper.cs:185`）— 普通模式打开；若当前是作弊模式则转调作弊版。
- **`OpenScreenAsRansom()`**（`PartyScreenHelper.cs:196`）— 赎金经纪人模式，交易状态为 `TransferableWithTrade`，使用克隆名册。
- **`OpenScreenAsLoot(TroopRoster, TroopRoster, TextObject, int, PartyScreenClosedDelegate)`**（`PartyScreenHelper.cs:222`）— 战后战利品模式，左侧为战利品名册。
- **`OpenScreenAsManageTroopsAndPrisoners(MobileParty, PartyScreenClosedDelegate)`**（`PartyScreenHelper.cs:242`）— 同时管理部队与战俘，使用氏族专用可转移判定。
- **`OpenScreenAsManagePlayerClanPartyClosed(PartyBase, TroopRoster, TroopRoster, PartyBase, TroopRoster, TroopRoster, bool)`**（`PartyScreenHelper.cs:261`）— 氏族部队界面关闭时的清理：空部队会被销毁并转移船只。
- **`OpenScreenAsReceiveTroops(TroopRoster, TextObject, PartyScreenClosedDelegate)`**（`PartyScreenHelper.cs:277`）— 接收部队模式，战俘不可转移。
- **`OpenScreenAsManageTroops(MobileParty)`**（`PartyScreenHelper.cs:299`）— 管理驻军/部队，禁用与同伴对话。
- **`OpenScreenAsDonateTroops(MobileParty)`**（`PartyScreenHelper.cs:317`）— 捐赠部队给指定部队，完成前跑捐赠条件检查。
- **`OpenScreenAsDonateGarrisonWithCurrentSettlement()`**（`PartyScreenHelper.cs:337`）— 向玩家当前聚落的驻军捐赠部队。
- **`OpenScreenAsDonatePrisoners()`**（`PartyScreenHelper.cs:367`）— 向玩家当前聚落捐赠战俘。
- **`DonatePrisonerTransferableDelegate(CharacterObject, PartyScreenLogic.TroopType, PartyScreenLogic.PartyRosterSide, PartyBase)`**（`PartyScreenHelper.cs:427`）— 只允许右侧战俘转移的判定委托。
- **`OpenScreenAsManagePrisoners()`**（`PartyScreenHelper.cs:433`）— 管理当前聚落的战俘名册。
- **`TroopTransferableDelegate(CharacterObject, PartyScreenLogic.TroopType, PartyScreenLogic.PartyRosterSide, PartyBase)`**（`PartyScreenHelper.cs:460`）— 通用可转移规则：非英雄可移，英雄按氏族与同伴状态判定。
- **`OpenScreenWithCondition(...)`**（`PartyScreenHelper.cs:503`）— 最灵活的重载：自定义可转移判定、完成条件、回调、名册与上限。
- **`OpenScreenForManagingAlley(bool, TroopRoster, ...)`**（`PartyScreenHelper.cs:524`）— 巷子管理界面，上限来自 `AlleyModel.MaximumTroopCountInPlayerOwnedAlley`。
- **`OpenScreenAsQuest(TroopRoster, TextObject, int, int, ...)`**（`PartyScreenHelper.cs:567`）— 任务交换部队模式，带任务天数乘数。
- **`OpenScreenWithDummyRoster(...)`**（`PartyScreenHelper.cs:588`）— 左右名册与上限全由调用方给定的虚拟名册模式。
- **`OpenScreenWithDummyRosterWithMainParty(...)`**（`PartyScreenHelper.cs:633`）— 上一方法的便捷版，右侧固定为主部队。
- **`OpenScreenAsCreateClanPartyForHero(Hero, PartyScreenClosedDelegate, IsTroopTransferableDelegate)`**（`PartyScreenHelper.cs:640`）— 为英雄创建氏族部队，完成后真正建队并搬运部队与战俘。
- **`PartyScreenMode`（枚举）**（`PartyScreenHelper.cs:810`）— 界面模式：`Normal` / `Shared` / `Loot` / `Ransom` / `PrisonerManage` / `TroopsManage` / `QuestTroopManage`。

## 真实示例

```csharp
// 读取当前部队界面状态；界面不存在时 GetActivePartyState 会返回 null。
PartyState partyState = PartyScreenHelper.GetActivePartyState();
if (partyState == null)
{
    return;
}
PartyScreenLogic logic = partyState.PartyScreenLogic;
if (logic != null && logic.IsThereAnyChanges())
{
    PartyScreenHelper.CloseScreen(true, false);
}
```

来源：`PartyScreenHelper.cs:22`（`GetActivePartyState`）、`PartyScreenHelper.cs:79`（`CloseScreen`）。

## 参见

- ↔ [PartyBaseHelper](../PartyBaseHelper) — 部队名册与规模上限的底层查询，本类组装界面时依赖它
- ↔ [MobilePartyHelper](../MobilePartyHelper) — 创建氏族部队时由 `OpenScreenAsCreateClanPartyForHero` 调用
- ↔ [GameModels](../../campaign/GameModels) — `AlleyModel`、`PartySizeLimitModel` 等决定界面里显示的上限

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
