---
title: "ChangeShipOwnerAction"
description: "通过官方舰船所有权事务同步船队列表、交易金钱、海图外观与所有权变更事件。"
---
# ChangeShipOwnerAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class ChangeShipOwnerAction`  
**基类：** 无（静态类）  
**源文件：** `TaleWorlds.CampaignSystem/Actions/ChangeShipOwnerAction.cs`

## 概述

把一艘已经存在的 `Ship` 从旧 `PartyBase` 转交给新所有者，并让船队集合、海军外观和战役事件保持一致；交易路径还会通过舰船价格模型结算金钱。它接收新所有者与舰船，不负责创建舰船或判断业务是否允许转移，而是把上游已经确认的交易、战利品、生产或编制决定原子地落实到战役对象图，并向 AI 与模组监听器提供旧所有者和真实原因。

## 心智模型

这不是给 `Ship.Owner` 换一个引用的薄包装，而是一笔有原因标签的战役事务。五个公开 `ApplyBy*` 入口都进入私有 `ApplyInternal`：先保存旧所有者，交易时计算价格并执行金钱 Action，然后设置 `Owner`，标记旧、新移动部队的海军外观为脏，最后派发 `OnShipOwnerChanged`。

`Ship.Owner` 的 setter 本身会把舰船从旧所有者的内部船队列表移除、加入新所有者列表，并重置已解锁升级件缓存。因此，调用返回后，先前缓存的 `PartyBase.Ships` 索引、旗舰和升级可用性都可能失效。应在战役逻辑已经决定“谁取得这艘船”时调用；不要在 UI 绘制、存档反序列化或遍历同一船队集合的过程中调用。

## Apply 契约与事件级联

```text
ApplyBy* (newOwner, ship)
  -> ApplyInternal 保存 ship.Owner 为 oldOwner
  -> 仅 ApplyByTrade：ShipCostModel 估价 -> GiveGoldAction 结算
  -> ship.Owner = newOwner
       -> oldOwner.RemoveShipInternal
       -> newOwner.AddShipInternal
       -> ResetUnlockedUpgradePieces
  -> oldOwner/newOwner 的海军外观缓存失效
  -> CampaignEventDispatcher.OnShipOwnerChanged(ship, oldOwner, detail)
```

事件发出时，`ship.Owner` 已经是新所有者，回调参数中的 `PartyBase` 才是旧所有者。订阅者若要比较前后状态，必须使用这两个不同来源，不能在回调里再从 `ship.Owner` 推断旧值。

## 公开入口与调用时机

| 入口 | 原因值 | 副作用与实际时机 |
|---|---|---|
| `ApplyByTransferring(newOwner, ship)` | `ApplyByTransferring` | 无金钱结算的编制转移。1.4.5 的 `PartyScreenHelper` 在一支空编制部队被销毁前，把其舰船逐艘转给另一方；`ChangePlayerCharacterAction` 也用它接管旧主角部队的舰船。 |
| `ApplyByTrade(newOwner, ship)` | `ApplyByTrade` | 先由 `Campaign.Current.Models.ShipCostModel.GetShipTradeValue` 估价，再按旧/新所有者是据点、商队、村民队、氏族领袖或部队领袖选择 `GiveGoldAction` 路径。`CaravansCampaignBehavior` 在商队取得舰船时调用。 |
| `ApplyByLooting(newOwner, ship)` | `ApplyByLooting` | 不结算金钱，只转移所有权并通知。`MapEvent` 和 `EncounterGameMenuBehavior` 在海战战利品分配结束时调用。 |
| `ApplyByMobilePartyCreation(newOwner, ship)` | `ApplyByMobilePartyCreation` | 新建移动部队接收初始化舰船。`MobileParty` 的创建流程会对待分配舰船逐艘调用。 |
| `ApplyByProduction(newOwner, ship)` | `ApplyByProduction` | 为造船完成后的归属保留原因语义；当前扫描的 1.4.5 一方源码没有该入口的内置调用点。它与非交易路径共享同一所有权和事件副作用，不能据名称假定还会创建或注册舰船。 |

交易路径要求 `ship.Owner`、`newOwner`、`Campaign.Current` 和 `ShipCostModel` 都已有效。源码没有空值或重复所有者保护；尤其旧所有者为空时会在读取 `owner.IsSettlement` 前失败。

## 依赖

| 方向 | 类型与作用 |
|---|---|
| 上游对象 | [`Ship`](../Ship) 保存可持久化的 `_owner`；[`MobileParty`](../../campaign/MobileParty) 与据点 `PartyBase` 暴露只读船队列表。 |
| 交易模型 | [`ShipCostModel`](../ShipCostModel) 决定交易价，[`GiveGoldAction`](../GiveGoldAction) 承担实际收支，不能用直接写金币代替。 |
| 下游事件 | [`CampaignEvents`](../CampaignEvents) 的 `OnShipOwnerChangedEvent` 接收舰船、旧所有者和 `ShipOwnerChangeDetail`。1.4.5 的 `AiPatrollingBehavior` 用它重新检查失去舰船的部队。 |
| 相关清理 | 舰船应被删除而不是转交时，使用 `DestroyShipAction`；部队随后要销毁时，再由对应部队 Action 处理。 |
| 存档边界 | [`SaveableTypeDefiner`](../../save-system/SaveableTypeDefiner) | `Ship._owner` 是可持久化状态；所有权事件不会在读档时为非序列化监听器重放。 |

## 风险、存档与生命周期

- 不要直接写 `ship.Owner`。setter 虽会维护两边船队列表，却会绕过交易结算、海军外观失效和 `OnShipOwnerChangedEvent`，AI 与 UI 可继续使用旧缓存。
- 不要在 `owner.Ships` 的正向 `foreach` 中转移。setter 会立刻修改集合；像内置 `PartyScreenHelper` 一样倒序处理，或先 `ToList()` 建立快照。
- `Ship._owner` 是 `SaveableField(4)`。半途异常或模组只改一侧自建缓存后存档，会把错误归属长期保留下来；读档阶段也不会替你重放所有权事件。
- `ApplyByTrade` 不是“免费转移并标记为交易”。它会立即改变经济状态；若先手动扣钱再调用，会重复结算。新所有者缺少可识别的移动部队/领袖时，源码会触发失败断言后走兜底金钱路径。
- 事件回调与 Action 同步执行。监听器不应在没有重入保护时再次转移同一艘船，也不应继续使用调用前缓存的旗舰或船队数量。

## 真实获取路径示例

下面的代码适合从已进入港口据点的战役菜单或 Behavior 命令回调调用。舰船来自当前据点的真实 `PartyBase.Ships`，目标是主角部队的 `PartyBase`：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Naval;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

Settlement port = Settlement.CurrentSettlement;
Ship ship = port?.Party.Ships.FirstOrDefault();

if (ship != null && ship.Owner == port.Party)
{
    ChangeShipOwnerAction.ApplyByTransferring(PartyBase.MainParty, ship);
}
```

如果这是购买而不是任务奖励或编制移交，应改用 `ApplyByTrade`，且不要在调用前自行改所有者或金币。

## 版本注记

v1.3.15 与 v1.4.5 都位于 `TaleWorlds.CampaignSystem`，保留相同五个入口、原因值顺序，以及“交易结算 -> 所有权 setter -> 外观失效 -> 事件”的主流程。1.4.5 的反编译源码简化了部分调用语法，但未显示此契约的可观察变化；`ApplyByProduction` 在已扫描的 1.4.5 一方源码中仍未发现内置调用点。

## 导航

 - ↑ Parent：[战役扩展 API](../)
 - ↔ Sibling：[DestroyShipAction](../DestroyShipAction) · [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction)
 - ↓ Children：[ShipOwnerChangeDetail](../ShipOwnerChangeDetail)
 - Related：[Ship](../Ship) · [ShipCostModel](../ShipCostModel) · [CampaignEvents](../CampaignEvents) · [MobileParty](../../campaign/MobileParty)
