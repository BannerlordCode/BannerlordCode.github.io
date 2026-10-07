---
title: "InventoryScreenHelper"
description: "战役层物品栏界面的统一入口：按用途组装 InventoryState 与 InventoryLogic（主部队、战利品、藏匿点、仓库、接收物品、交易、锻造分解），并提供取当前状态与关闭界面的静态通道。"
---

# InventoryScreenHelper

**命名空间：** `Helpers`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class InventoryScreenHelper`
**Source:** `TaleWorlds.CampaignSystem/Helpers/InventoryScreenHelper.cs`

## 概述

`InventoryScreenHelper` 是战役层「物品栏界面」（Inventory Screen）的统一入口，与 `PartyScreenHelper` 是同一层的姊妹类。它把一次界面打开所需的材料——左侧名册、右侧名册（通常是主部队的物品栏与成员名册）、商人过滤用的 `InventoryCategoryType`、市场数据、完成回调、容量限制——组装成一个 `InventoryLogic`，塞进新建的 `InventoryState`，再压入 `GameStateManager` 的状态栈。围绕这个核心，它提供了一整套按用途命名的打开方法：主部队物品栏、战利品、藏匿点、仓库、接收物品、与商队/巷子部队交易、与当前聚落交易、锻造分解，以及按 `PartyBase` / `MobileParty` 打开任意两方的物品栏。它还提供两个界面级操作：`GetActiveInventoryState` 取当前状态，`CloseScreen` 关闭界面。

## 心智模型

把 `InventoryScreenHelper` 想成「物品栏界面的配方表 + 状态取用器」，分两层来看：

- **状态层**（`GetActiveInventoryState` / `CloseScreen` / `PlayerAcceptTradeOffer`）：界面本身是 `InventoryState`（一个 `GameState`），状态里持有 `InventoryLogic`。这一层只做「取当前状态 → 操作 logic → 弹栈」三件事，不关心界面是哪种用途。
- **配方层**（所有 `OpenScreenAsXxx` / `OpenTradeWithXxx` / `OpenScreenAsInventoryOf`）：每个方法是一份配方，决定左右两边各放什么名册、界面处于哪个 `InventoryMode`（`Default` / `Trade` / `Loot` / `Stash` / `Warehouse`）、商人侧用什么 `InventoryCategoryType` 过滤、完成后跑哪个 `Action`、以及是否带 `InventoryLogic.CapacityData` 容量上限。

因此使用它的思维模型是**「先选配方，再决定回调」**：配方名已经固定了语义与 `InventoryMode`，你能调的通常只有完成回调（`doneLogicExtrasDelegate`）和商人过滤类型；只有 `OpenScreenAsInventoryOf(PartyBase, PartyBase, CharacterObject, TextObject, CapacityData, Action)` 这个完整重载把标题、展示角色与容量都交给你。市场数据不由调用方提供：私有辅助 `GetCurrentMarketDataForPlayer` 会按「当前聚落市场 → 最近的城镇市场 → `FakeMarketData`」三级回退，保证界面永远有价格可算。

## 怎么用

### 什么时候调它

- 你的 CampaignBehavior、任务或菜单想弹出物品栏界面时，先挑语义最接近的 `OpenScreenAsXxx`。
- 想在界面关闭后接着跑自己的逻辑时，把回调传给 `doneLogicExtrasDelegate`（很多配方都带这个可选参数）。
- 想在关闭前确认玩家是否接受交易报价时，调 `PlayerAcceptTradeOffer`。

### 调之前要准备什么

- 界面依赖 `Game.Current`、`GameStateManager` 与 `PartyBase.MainParty`，只能在战役已启动时调用。
- `OpenScreenAsLoot` 需要一个以 `PartyBase` 为键的物品名册字典，并且**必须包含 `PartyBase.MainParty`**，否则取左侧名册时直接抛 `KeyNotFoundException`。
- 打开交易界面时，商人一侧的 `InventoryCategoryType` 决定货架过滤（`None` 表示不过滤）。

### 调之后会发生什么

- 一次调用会把一个新的 `InventoryState` 压入状态栈；玩家关闭界面后由 `CloseScreen` 弹出。
- `CloseScreen(bool fromCancel)` 是唯一正规的关闭路径：`fromCancel = true` 时会先 `InventoryLogic.Reset(true)` 撤销未确认改动；只有 `InventoryLogic.DoneLogic()` 返回 true 才执行完成回调、清空 `InventoryLogic` 并 `PopState`。
- 交易类配方（`OpenScreenAsTrade`、`OpenTradeWithCaravanOrAlleyParty`）会给 `InventoryLogic` 挂上 `InventoryListener`，金币与物品结算发生在监听器与 `InventoryLogic` 里，本类只负责把它们接好。

### 最容易踩的坑

- **作弊模式会改左名册**：`OpenScreenAsInventory` 走私有的 `OpenInventoryPresentation`，当 `Game.Current.CheatMode` 为真（且测试未启用）时，会把 `ObjectManager` 里每一种 `ItemObject` 按 ×10 塞进左侧名册。看到「物品栏里全是每种物品 10 个」不是 bug，是作弊模式。
- `GetActiveInventoryState` 在活动状态不是 `InventoryState` 时会 `Debug.FailedAssert` 并返回 `null`；调用方必须判空，`PlayerAcceptTradeOffer` 正是这么做的。
- `CloseScreen` 传 `fromCancel = true` 会丢弃玩家未确认的改动，想保留改动要传 `false`。
- `OpenScreenAsInventoryOf(PartyBase, PartyBase)` 不带标题与容量，界面会用默认表现；需要标题与容量时用六参数完整重载。
- 本类不负责「交易是否合法、价格怎么算」——那是 `InventoryLogic`、`InventoryListener` 与市场模型的事。

## 关键成员

- **`GetActiveInventoryState()`**（`InventoryScreenHelper.cs:19`）— 从 `GameStateManager.ActiveState` 取当前 `InventoryState`，不是物品栏界面时断言失败并返回 null。
- **`PlayerAcceptTradeOffer()`**（`InventoryScreenHelper.cs:32`）— 让玩家接受当前交易报价：取活动状态与 logic 后调 `SetPlayerAcceptTraderOffer()`，任一为空则静默返回。
- **`CloseScreen(bool fromCancel)`**（`InventoryScreenHelper.cs:48`）— 关闭物品栏界面；`fromCancel` 决定是否先撤销改动，转调私有 `CloseInventoryPresentation`。
- **`OpenScreenAsInventoryOfSubParty(MobileParty, MobileParty, Action)`**（`InventoryScreenHelper.cs:132`）— 以两个 `MobileParty` 打开物品栏，用于查看与整理子部队的物资。
- **`OpenScreenAsInventoryForCraftedItemDecomposition(MobileParty, CharacterObject, Action)`**（`InventoryScreenHelper.cs:151`）— 锻造分解专用物品栏，展示角色由调用方指定。
- **`OpenScreenAsInventoryOf(MobileParty, CharacterObject)`**（`InventoryScreenHelper.cs:162`）— 打开某个部队的物品栏，右侧固定为该部队的物品栏与成员名册。
- **`OpenScreenAsInventoryOf(PartyBase, PartyBase)`**（`InventoryScreenHelper.cs:172`）— 打开任意两方的物品栏，最简重载，不带标题与容量。
- **`OpenScreenAsInventoryOf(PartyBase, PartyBase, CharacterObject, TextObject, InventoryLogic.CapacityData, Action)`**（`InventoryScreenHelper.cs:179`）— 完整重载：显式给出展示角色、左侧标题、容量上限与完成回调。
- **`OpenScreenAsInventory(Action)`**（`InventoryScreenHelper.cs:190`）— 打开主部队物品栏（左名册是新建的空 `ItemRoster`，作弊模式下会被塞满）。
- **`OpenScreenAsLoot(Dictionary<PartyBase, ItemRoster>)`**（`InventoryScreenHelper.cs:196`）— 战利品模式，左名册取字典中 `PartyBase.MainParty` 那一项，`InventoryMode.Loot`。
- **`OpenScreenAsStash(ItemRoster)`**（`InventoryScreenHelper.cs:208`）— 藏匿点模式，`InventoryMode.Stash`，右侧以主部队为持有者。
- **`OpenScreenAsWarehouse(ItemRoster, InventoryLogic.CapacityData)`**（`InventoryScreenHelper.cs:219`）— 仓库模式，`InventoryMode.Warehouse`，比藏匿点多一个容量上限参数。
- **`OpenScreenAsReceiveItems(ItemRoster, TextObject, Action)`**（`InventoryScreenHelper.cs:230`）— 接收物品模式，左名册是待接收物品，标题由调用方给。
- **`OpenTradeWithCaravanOrAlleyParty(MobileParty, InventoryCategoryType)`**（`InventoryScreenHelper.cs:241`）— 与商队或巷子部队交易，挂 `CaravanInventoryListener`，商人过滤类型可指定。
- **`ActivateTradeWithCurrentSettlement()`**（`InventoryScreenHelper.cs:253`）— 便捷方法：直接用当前聚落的名册与 `SettlementComponent` 转调 `OpenScreenAsTrade`。
- **`OpenScreenAsTrade(ItemRoster, SettlementComponent, InventoryCategoryType, Action)`**（`InventoryScreenHelper.cs:259`）— 与聚落交易，`InventoryMode.Trade`，挂 `MerchantInventoryListener`。
- **`GetInventoryItemTypeOfItem(ItemObject)`**（`InventoryScreenHelper.cs:272`）— 把 `ItemObject.ItemType` 映射为本类嵌套的 `InventoryItemType` 位标志（武器、盾、各类护甲、马、马具、货物、书、动物、披风）。

## 真实示例

```csharp
// 取当前物品栏状态；活动状态不是 InventoryState 时断言失败并返回 null（源码 InventoryScreenHelper.cs:19）。
public static InventoryState GetActiveInventoryState()
{
    GameStateManager gameStateManager = GameStateManager.Current;
    InventoryState inventoryState;
    if ((inventoryState = ((gameStateManager != null) ? gameStateManager.ActiveState : null) as InventoryState) != null)
    {
        return inventoryState;
    }
    Debug.FailedAssert("GetActiveInventoryState requested but the active state is not InventoryState!", "C:\\BuildAgent\\work\\mb3\\Source\\Bannerlord\\TaleWorlds.CampaignSystem\\Helpers.cs", "GetActiveInventoryState", 9217);
    return null;
}
```

```csharp
// 打开某个部队的物品栏：左侧是新物品栏，右侧是该部队的物品栏与成员名册（源码 InventoryScreenHelper.cs:162）。
public static void OpenScreenAsInventoryOf(MobileParty party, CharacterObject character)
{
    InventoryState inventoryState = Game.Current.GameStateManager.CreateState<InventoryState>();
    InventoryLogic inventoryLogic = new InventoryLogic(null);
    inventoryLogic.Initialize(new ItemRoster(), party.ItemRoster, party.MemberRoster, false, true, character, InventoryScreenHelper.InventoryCategoryType.None, InventoryScreenHelper.GetCurrentMarketDataForPlayer(), false, inventoryState.InventoryMode, null, null, null);
    inventoryState.InventoryLogic = inventoryLogic;
    Game.Current.GameStateManager.PushState(inventoryState, 0);
}
```

## 参见

- ↔ [ItemHelper](../ItemHelper) — 物品可比性与伤害文本，物品栏界面里「两件东西能不能比」的判定来自这里
- ↔ [PartyScreenHelper](../PartyScreenHelper) — 同一层的部队界面入口，两者的「配方 + 压栈 + 关闭回调」结构完全同构
- ↔ [GameModels](../../campaign/GameModels) — 市场与价格模型，决定本类组装界面时算出来的 `IMarketData` 表现

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
