---
title: "PortStateHelper"
description: "6 个具名入口把不同对象按位置塞进 PortState 构造函数，推开交易/劫掠/受限/故事/舰队管理等港口界面。"
---

# PortStateHelper

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class PortStateHelper`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/PortStateHelper.cs`

## 概述

`PortStateHelper` 是 1.5.3 新增的港口界面入口类。它只有 6 个静态方法，全部做同一件事：`GameStateManager.Current.CreateState<PortState>(new object[] { … })` 然后 `PushState`。区别只在那个 `object[]` 的个数与顺序——也就是 `PortState` 的构造函数按**位置**解释它们。本类是「开哪一个港口界面」的 6 个具名入口，真正的界面与逻辑在 `PortState` + `PortScreenModes` 里。

## 心智模型

把 `PortStateHelper` 想成**港口界面的 6 个具名开关**。每个开关对应一种玩法场景：交易、分赃、受限进入、故事模式、管理自己的舰队、管理其他部队的舰队。

6 个方法的本质是**同一句 `PushState` 的 6 种参数拼法**。`PortState` 的构造函数接收一个 `object[]`，按位置解释每个元素：第 1 个是「对方是谁」（`Town` / `Settlement` / `PartyBase` / `null`），第 2 个固定是 `PartyBase.MainParty`，后面跟场景特有的参数，最后一个固定是 `PortScreenModes` 枚举值。

**关键洞察：参数个数在 3/4/5/6 之间跳，没有类型检查、没有命名参数。** 参数顺序错了不会编译报错，只会在运行时被 `PortState` 按错误的位置解释。这是本类最大的设计风险。

**想加一个自己的港口界面**：正确做法是加 `PortScreenModes` 的一个分支并在这里加一个入口方法，而不是复制这段 `CreateState` 逻辑。

## 怎么用

### 怎么拿到它

静态类，直接调用。不需要实例化，也不需要从 `Campaign.Current` 取。

### 典型用法

**玩家主队进镇开交易界面**：`OpenAsTrade(town)`，传当前镇的 `Town` 对象。

**海战打赢后分赃**：`OpenAsLoot(lootShips, onEndAction)`，传入战利品船列表和一个收尾回调（可为 null）。

**玩家被拒绝入港**：`OpenAsRestricted(town, restrictedReason)`，传镇和理由文本。

**故事模式进入聚落港口**：`OpenAsStoryMode(settlement)`，注意第一个参数是 `Settlement` 不是 `Town`。

**管理自己的舰队**：`OpenAsManageFleet(leftShips)`，传入左侧船列表。

**管理其他部队的舰队**：`OpenAsManageOtherFleet(other, onEndAction)`，传对方部队和收尾回调。

### 最容易踩的坑

- **`restrictedReason` 是死参数**（43–52 行未使用）：受限理由不会显示在界面上，传了也白传。
- **6 个方法的 `object[]` 个数在 3/4/5/6 之间跳**（Trade 3 · Restricted 3 · Story 3 · ManageOther 4 · Manage 5 · Loot 6），没有类型检查、没有命名参数，参数顺序错了不会编译报错，只会在运行时被 `PortState` 按错误的位置解释。
- **第一个参数的类型在 `Town` / `Settlement` / `PartyBase` / `null` 之间变**：Trade/Restricted 用 `Town`，Story 用 `Settlement`，ManageOther 用 `PartyBase`，Loot/Manage 用 `null`。
- **全部 `PushState(portState, 0)`**，第二个参数固定 `0`，不要改。

## 关键成员

- `public static void OpenAsTrade(Town town)` —— 开交易界面，参数 = `town.Settlement.Party` · `MainParty` · `TradeMode`。`PortStateHelper.cs:16`
- `public static void OpenAsLoot(MBReadOnlyList<Ship> lootShips, Action onEndAction = null)` —— 开分赃界面，6 个参数，含战利品船列表与收尾回调。`PortStateHelper.cs:28`
- `public static void OpenAsRestricted(Town town, TextObject restrictedReason)` —— 开受限界面，`restrictedReason` 是死参数，不会显示。`PortStateHelper.cs:43`
- `public static void OpenAsStoryMode(Settlement settlement)` —— 开故事模式港口，第一个参数是 `Settlement` 不是 `Town`。`PortStateHelper.cs:55`
- `public static void OpenAsManageFleet(MBReadOnlyList<Ship> leftShips)` —— 开管理自己舰队界面，5 个参数，无收尾回调。`PortStateHelper.cs:67`
- `public static void OpenAsManageOtherFleet(PartyBase other, Action onEndAction)` —— 开管理其他部队舰队界面，第一个参数是 `PartyBase`。`PortStateHelper.cs:81`

## 真实示例

```csharp
// 玩家主队在某镇港口里：开交易界面
Town town = Settlement.CurrentSettlement.Town;
PortStateHelper.OpenAsTrade(town);

// 海战打赢后分赃：把战利品船与一个收尾回调交给港口界面
PortStateHelper.OpenAsLoot(lootShips, () => Debug.Print("loot screen closed"));

// 注意：受限界面收一个理由文本，但源码里没有用它（PortStateHelper.cs:43-52）
PortStateHelper.OpenAsRestricted(town, new TextObject("{=MyMod_port}Port closed to you"));
```

## 参见

- ↔ [ShipHelper](../ShipHelper) —— 港口界面里的船、旗帜与帆色都来自它
- ↔ [ScreenManager](../../gui/ScreenManager) —— 它 `PushState` 的是 `PortState`，与屏幕栈是同一套「谁在上层」的语义
- ↔ [Campaign](../../campaign/Campaign) —— `PartyBase.MainParty` 与聚落都挂在战役上

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
