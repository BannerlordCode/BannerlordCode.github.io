---
title: "PortStateHelper：战役港口状态入口"
description: "PortStateHelper 是 v1.4.5 中打开贸易、战利品、受限、剧情和舰队管理 PortState 界面的静态门面。"
---
# PortStateHelper

**命名空间:** `Helpers`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public static class PortStateHelper`  
**基类:** 无  
**源文件:** `bin/TaleWorlds.CampaignSystem/Helpers/PortStateHelper.cs`

## 一句话职责

它按照港口流程需要的参数构造 [`PortState`](../../campaign/PortState)，再通过当前 [`GameStateManager`](../../core-extra/GameStateManager) 把这个状态推入游戏状态栈。

## 心智模型

`PortStateHelper` 是入口路由器，不是舰队服务，也不是转移用的 Action。每个方法选择一个 `PortScreenModes` 值，提供双方所有者或明确的舰船列表，必要时保存结束回调，最后调用 `GameStateManager.Current.PushState`。Helper 本身不会移动 `Ship`、改变 `PartyBase` 的所有权，也不会判断一次港口交互是否被规则允许。

推入的状态属于菜单状态。港口 UI 从 `PortState` 读取 `PortScreenMode`、`LeftOwner`、`RightOwner`、`LeftShips` 和 `RightShips`；状态结束并进入 `PortState.OnFinalize` 时，才会调用保存下来的 `OnEndAction`。因此回调可以成为外围遭遇流程做清理的时点，但不能代替真正负责持久化战役变化的 Action。

## 何时使用，何时不要使用

- 已经在有效战役流程中取得 `Town`、`Settlement`、`PartyBase` 或舰船列表，并需要打开 `PortState` 支持的港口界面时使用。
- 遭遇流程拿到真实的战利品舰船时使用 `OpenAsLoot`；如果离开界面后还要完成清理，就传入外围流程的结束回调。
- 只有在左侧舰船列表或对方队伍确实是目标比较侧时，才使用 `OpenAsManageFleet` 或 `OpenAsManageOtherFleet`；Helper 不会替调用方推断或验证所有权。
- 不要把这些方法当成 `DestroyShipAction`、所有权 Action 或战役 Model 的替代品。打开界面与应用战役变化是两个不同契约。
- 不要使用 `PortState` 的无参数构造函数。源码明确断言不要这样做；Helper 通过 `CreateState` 传入 UI 所需的构造参数。

## 依赖关系与状态契约

```text
Town / Settlement / PartyBase / Ship 列表
                  |
                  v
        PortStateHelper 入口方法
                  |
                  v
GameStateManager.Current.CreateState<PortState>
                  |
                  v
          PushState -> 港口 UI
                  |
                  v
          OnFinalize -> 回调
```

- 状态载体：[`PortState`](../../campaign/PortState) 保存模式、双方所有者、舰船列表和可选回调。Helper 传入所有者时，构造函数会从所有者取舰船；战利品和舰队管理流程则使用显式列表。
- 状态栈所有者：[`GameStateManager`](../../core-extra/GameStateManager) 负责创建、激活和结束状态。`PushState` 是游戏状态栈转换，必须在主线程执行。
- 战役输入：[`Town`](../../campaign/Town)、[`Settlement`](../../campaign/Settlement)、[`PartyBase`](../../campaign/PartyBase)、[`MobileParty`](../../campaign/MobileParty) 和 [`Ship`](../../campaign/Ship)。
- 相邻入口逻辑：[`MenuHelper`](../MenuHelper) 与 [`TownHelpers`](../TownHelpers) 负责菜单或查询上下文，但不替换这里的状态转换。

## 港口模式与公开成员

| 方法或模式 | 状态形状与源码确认的含义 |
|---|---|
| `OpenAsTrade(Town town)` | 左侧使用 `town.Settlement.Party`，右侧使用 `PartyBase.MainParty`，模式为 `PortScreenModes.TradeMode`。 |
| `OpenAsLoot(MBReadOnlyList<Ship> lootShips, Action onEndAction = null)` | 没有左侧所有者，右侧为主队；左侧列表是传入的舰船，右侧列表是主队舰船，模式为 `PortScreenModes.LootMode`；回调由 `PortState` 保存。 |
| `OpenAsRestricted(Town town, TextObject restrictedReason)` | 使用城镇队伍和主队，模式为 `PortScreenModes.Restricted`。源码从未把 `restrictedReason` 传给 `PortState`，所以 v1.4.5 中它不会影响结果状态。 |
| `OpenAsStoryMode(Settlement settlement)` | 左侧来源是传入聚落，右侧所有者是主队，模式为 `PortScreenModes.Story`。 |
| `OpenAsManageFleet(MBReadOnlyList<Ship> leftShips)` | 左侧舰船使用传入列表，右侧舰船使用 `PartyBase.MainParty.Ships`，模式为 `PortScreenModes.Manage`；Helper 采用的 `PortState` overload 会以空所有者或主队状态表示双方。 |
| `OpenAsManageOtherFleet(PartyBase other, Action onEndAction)` | 左侧为 `other`，右侧为主队，保存回调，模式为 `PortScreenModes.ManageOther`。 |

六个 `PortScreenModes` 值是 `Story`、`Restricted`、`TradeMode`、`LootMode`、`Manage` 和 `ManageOther`。它们描述港口 UI 应该消费哪一种流程，并不自动授权舰船转移或存档操作。

## 真实调用路径

城镇贸易从真实的当前聚落对象开始，再传给 Helper：

```csharp
using Helpers;
using TaleWorlds.CampaignSystem.Settlements;

Town town = Settlement.CurrentSettlement?.Town;
if (town != null)
{
    PortStateHelper.OpenAsTrade(town);
}
```

随后 Helper 读取 `town.Settlement.Party`，把它与 `PartyBase.MainParty` 配对，创建 `TradeMode` 的 `PortState` 并推入状态栈。城镇查找由调用方负责；`OpenAsTrade` 在解引用之前不会替调用方处理空 `Town`。

舰船战利品路径出现在 `PlayerEncounter.DoLootShips` 中：

```csharp
PortStateHelper.OpenAsLoot(ReceivedLootShips.ToMBList(), OnPlayerLootShipEnd);
```

这里的 `ReceivedLootShips` 是遭遇流程真实持有的收到舰船集合，`OnPlayerLootShipEnd` 是该流程真实的结束方法。港口状态结束后，回调会销毁没有转到 `PartyBase.MainParty` 的舰船。这是源码调用点形状，不表示 mod 可以访问 `PlayerEncounter` 的私有字段；mod 必须在自己的有效流程中取得 `MBReadOnlyList<Ship>` 后传入。

`BanditInteractionsCampaignBehavior` 也会把对话队伍的舰船转成 `MBList<Ship>` 后打开战利品界面，但不传回调。这个路径再次说明所有权边界：Helper 打开界面，外围行为负责之后的队伍清理。

## 风险与生命周期边界

- `OpenAsRestricted` 接受 reason 却丢弃它。不要向用户承诺传入不同的 `TextObject` 就会改变受限界面；这个版本的 Helper 没有保存该 reason 的字段或构造参数。
- `GameStateManager.Current` 必须是当前有效管理器，调用必须在主线程执行。缓存的管理器或拆栈期间的调用可能把状态推入错误的栈，或落在无效生命周期阶段。
- `Town.Settlement`、`Settlement.Party`、`PartyBase.MainParty` 和传入舰船列表必须在界面存活期间有效。Helper 不做空值、所有权、重复项或对象存活检查。
- `OnEndAction` 从 `PortState.OnFinalize` 触发，不是在某个 `OpenAs` 入口方法返回时同步触发。不要把它当作同步回调，也要让它符合状态栈只结束一次的生命周期。
- 回调可能执行破坏性清理，`PlayerEncounter` 就会通过 `DestroyShipAction` 清理舰船。UI 尚未消费完舰船前，不要在外围提前销毁或重新分配同一批对象。
- 港口界面可以展示或转移数据，但 `PortState` 本身不是存档契约。持久化变化必须遵守对应战役 Action 和事件链。

## 版本注记

本页依据 v1.4.5 的 `PortStateHelper.cs` 与 `PortState.cs`。这个版本中 `OpenAsRestricted` 的 `restrictedReason` 未被使用，`PortState` 的无参数构造函数会断言。换 Bannerlord 版本时应重新核对这两项源码契约。

## 导航

- [↑ API 系统索引](../)
- [↔ ShipHelper](../ShipHelper)
- [↔ MenuHelper](../MenuHelper)
- [↔ TownHelpers](../TownHelpers)
- [相关：PortState](../../campaign/PortState)
- [相关：GameStateManager](../../core-extra/GameStateManager)
- [相关：Ship](../../campaign/Ship)
