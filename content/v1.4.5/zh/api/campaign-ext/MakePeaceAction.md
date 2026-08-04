---
title: "MakePeaceAction"
description: "通过外交 Action 结束当前 Campaign 战争，记录正确的和平原因，刷新玩家相关地图视觉，并派发 MakePeace。"
---
# MakePeaceAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class MakePeaceAction`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/MakePeaceAction.cs`  
**版本说明：** 本页描述游戏随附的 v1.4.5 实现。

## 一句话职责

把两个当前 `IFaction` 的外交 stance 改为中立，在它们共享的 `StanceLink` 上配置和平贡金，刷新玩家可见的对方派系视觉，并携带正确的 `MakePeaceDetail` 派发一次 `CampaignEvents.MakePeace`。

## 心智模型

`MakePeaceAction` 是和平流程的**状态写入末端**，不是和平决策本身。两个公开入口都会进入私有 `ApplyInternal`：它先取得既有 stance，调用 `FactionManager.SetNeutral(faction1, faction2)`，设置该 stance 的每日贡金，在涉及主角地图派系时刷新对方可见 party 和 settlement，最后调用 `CampaignEventDispatcher.Instance.OnMakePeace`。

Action 不会判断和平是否合适、验证王国投票或选择条约对象。这些都由调用方负责。Action 的源码直接调用只覆盖 stance、贡金、视觉和 dispatcher 操作，但正常 stock Campaign 会同步完成由此产生的连续性事件和 `MakePeace` 事件级联。普通王国决议路径是 [MakePeaceKingdomDecision](../../campaign/MakePeaceKingdomDecision)；[ChangeKingdomAction](../ChangeKingdomAction) 等 clan/kingdom 变更路径，则在它们自己的规则已判定关系必须结束后才使用普通和平。

## 依赖与事件级联

```text
Campaign.Current
  -> Kingdom / Clan as IFaction
  -> MakePeaceAction.Apply*
      -> FactionManager.SetNeutral
          -> StanceLink leaves War: ResetStats + PeaceDeclarationDate
          -> OnMapEventContinuityNeedsUpdate (synchronous)
              -> PartyDiplomaticHandler: battle, encounter, and siege continuity
          -> FactionsAtWarWith refresh
      -> StanceLink.SetDailyTributePaid
      -> visible Settlement + MobileParty visuals (player relation only)
      -> CampaignEventDispatcher.OnMakePeace
          -> CampaignEvents.MakePeace
          -> AI hostile-action cleanup, diplomacy, UI, quest, and mod listeners
```

- **实时派系状态：** [Kingdom](../../campaign/Kingdom) 和 [Clan](../../campaign/Clan) 实现 [IFaction](../../campaign/IFaction)。应取得当前 Campaign 中的实例，不能保存代理对象或新建一个实现来冒充派系。
- **状态写入与早期连续性：** [FactionManager](../../campaign/FactionManager) 给共享的 `StanceLink.StanceType` 赋值。离开 `War` 时，会同步调用 `ResetStats`、记录 `PeaceDeclarationDate`、改变 stance，并在 `SetNeutral` 刷新双方 `FactionsAtWarWith` 前派发 `OnMapEventContinuityNeedsUpdate`。只有 `SetNeutral` 返回后，Action 才在同一 link 上调用 `StanceLink.SetDailyTributePaid(faction1, amount, duration)`。
- **地图、遭遇与围城连续性：** [PartyDiplomaticHandlerCampaignBehavior](../../campaign/PartyDiplomaticHandlerCampaignBehavior) 是这个早期连续性事件的内置监听者。根据受影响 party 的情况，它可以移除不再能参战的 party、标记 map event 为 `DiplomaticallyFinished`、结束玩家遭遇、解除 besieger、让 party 离开不适合的 settlement，并激活和平结束菜单。这些是 stance 改变后的同步 stock-Campaign 后果，不是 `MakePeaceAction.cs` 的直接调用。
- **最终下游事件：** [CampaignEvents](../../campaign/CampaignEvents) 将 `MakePeace` 暴露为 `IMbEvent<IFaction, IFaction, MakePeaceAction.MakePeaceDetail>`。它的同步内置订阅者包括 [AiPartyThinkBehavior](../../campaign/AiPartyThinkBehavior)，后者按 kingdom/kingdom、kingdom/clan 或 clan/clan 选择对应的 `FactionHelper.FinishAllRelatedHostileActions*` 路径。这项清理可以结束 army objective、让敌对 party hold、解除 siege camp，并标记/更新以外交方式结束的 map event。
- **其他内置订阅者：** stock `MakePeace` 级联可以释放囚犯、限制对方派系的玩家犯罪评级、重算 village trade bound、协调 kingdom decision、结束匹配的 alliance-related call-to-war agreement、刷新 siege UI 和通知，并在条件匹配时解决或取消相关 issue/quest 流程。mod 应把这些理解为有条件的内置效果，而不是调用方必须重复完成的通用工作。
- **战争统计：** [CampaignWarManagerBehavior](../../campaign/CampaignWarManagerBehavior) 不订阅 `MakePeace`；它稍后只观察 `MapEventEnded` 和 `RaidCompletedEvent`。它的计数器位于离开战争时会重置的同一 `StanceLink` 上，因此一个以外交方式结束的 map event 之后到达该 behavior 时，战争统计可能早已清零。

## 入口与 detail 语义

公开入口只有两个。它们走同一套状态变更顺序，但监听器收到的原因数据和贡金配置不同。

| 入口 | 传给 `MakePeace` 的 detail | 贡金配置 | 适用时机 |
|---|---|---|---|
| `Apply(IFaction faction1, IFaction faction2)` | `MakePeaceDetail.Default` | 传入 `0, 0`；无每日贡金、无分期 | 一个已经获得授权、但不是选举的路径必须结束这条确切关系，例如 clan/kingdom 变更或已完成的和平 barter。 |
| `ApplyByKingdomDecision(IFaction faction1, IFaction faction2, int dailyTributeFrom1To2, int dailyTributeDuration)` | `MakePeaceDetail.ByKingdomDecision` | 保存传入的付款额和分期数 | 已确认的王国和平决议，或当前和平提议流程已选择的结果。 |

`faction1` 也是传给 `SetDailyTributePaid` 的付款方。正数 `dailyTributeFrom1To2` 表示 `faction1` 向 `faction2` 支付；负数会反转经济方向，但 `MakePeace` 事件仍保持原始的 `(faction1, faction2)` 参数顺序。`dailyTributeDuration` 是每日分期的次数（天数）。`StanceLink.GetRemainingTributePaymentCount` 会让零数额的有效剩余次数为零，并将已经耗尽或非正数的分期次数钳制为零。Action 不会计算或规范化这两个值。尤其是普通 `Apply` 会把现有协议覆写为零数额、零分期。

不要因为路径涉及 kingdom，就把叛乱收束、clan 离开或普通战争结束标为 `ByKingdomDecision`。v1.4.5 没有单独的叛乱或战争结束 `MakePeaceDetail` 公开入口：这些路径在调用方应用自身规则后使用 `Default`。相反，经过投票的条约必须使用 `ApplyByKingdomDecision`，让监听器能够将其与普通状态清理区分开。

## 由调用方负责的前置条件

Action 返回 `void`，没有验证结果。调用前，流程的拥有者必须保证以下全部成立：

1. `Campaign.Current`、两个派系实例、`FactionManager` 和事件分发器已初始化。
2. 两个输入都是当前、非空的 `IFaction`，彼此不同，并且代表流程要处理的地图层关系。一个 clan 可能有独立的 `MapFaction`，不能误结算错误层级。
3. 双方确实通过 `faction1.IsAtWarWith(faction2)` 处于战争。对中立关系调用和平 Action 仍可能产生误导事件并重置条约数据。
4. 在所属语境里和平是合法的。王国政治先完成决议和权限判断；自定义系统则自行处理恒定战争规则和玩法约束。除非 mod 有意替代内置行为，不要重复上文所述 stock 连续性和 `MakePeace` 清理。
5. 对决议条约，调用方已经计算出有效数额和期限。`DiplomacyModel` 提供评分，以及对 clan 的 `GetDailyTributeToPay`；它不会缔结条约，也不会为这个 Action 验证任意整数对。

`FactionManager.SetNeutral` 只会针对相同派系和 shallow diplomatic stance 做保护；它不能替代这些 Campaign 级检查。

## 状态变更顺序

实现顺序决定事件消费者能观察到什么：

1. 先取得 `faction1.GetStanceWith(faction2)`。
2. `FactionManager.SetNeutral` 赋值 `StanceLink.StanceType = Neutral`。旧状态为 `War` 时，setter 会先调用 `ResetStats` 并设置 `PeaceDeclarationDate`；该 reset 会清除 troop 和 ship casualties、raids、sieges、town sieges、既有贡金总额、每日贡金和分期。
3. 同一个 setter 会同步派发 `OnMapEventContinuityNeedsUpdate(faction1)`。内置 party-diplomatic behavior 能在 Action 继续前协调 battle party、map event、玩家遭遇、siege camp、settlement 和和平结束菜单。
4. `SetNeutral` 刷新双方战争派系列表缓存。已取得的 `StanceLink` 随后接收 `SetDailyTributePaid(faction1, dailyTributeFrom1To2, dailyTributeDuration)`。
5. 如果任一输入等于 `Hero.MainHero.MapFaction`，map faction 为另一方的每个可见 `Settlement` 和 `MobileParty` 都会收到 `SetVisualAsDirty()`。
6. `CampaignEventDispatcher.Instance.OnMakePeace(faction1, faction2, detail)` 到达 `CampaignEvents.MakePeace`；其内置监听器会同步结束适用的敌对动作并处理其他外交后果。

所以 `MakePeace` 监听器运行时已经能读到中立 stance、被重置的战争统计和新贡金。mod 不能假定旧的敌对 map event、siege、party、encounter 或 quest 状态仍在调用后可用；正常 Campaign 可能已经通过前一连续性事件或最终 `MakePeace` 订阅者完成协调。

## Model 与 Action 的边界

当问题是“是否应该和平”时，使用 `Campaign.Current.Models.DiplomacyModel`，例如 `IsPeaceSuitable`、`GetScoreOfDeclaringPeace` 或 `GetDailyTributeToPay`。[MakePeaceKingdomDecision](../../campaign/MakePeaceKingdomDecision) 消费这类策略结果，并且只在选定 outcome 确认和平时调用 `ApplyByKingdomDecision`。

只有策略或玩法流程已经决定写入世界时，才使用 `MakePeaceAction`。不要用 Action 试探分数，也不能因为分数较好就跳过王国决议。[DeclareWarAction](../DeclareWarAction) 是反向的状态 Action；两者都不能代替外交 Model 或决策流程。

## 安全的当前 Campaign 示例

这个示例特意为一个已获授权、非选举的自定义流程使用普通 `Apply`。它只从当前 Campaign 取得有效 kingdom，不代替王国决策 UI 或投票。

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public void EndAuthorizedPlayerKingdomWar()
{
    if (Campaign.Current == null || Clan.PlayerClan == null)
    {
        return;
    }

    Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
    if (playerKingdom == null)
    {
        return;
    }

    Kingdom enemyKingdom = Kingdom.All.FirstOrDefault(kingdom =>
        kingdom != playerKingdom &&
        !kingdom.IsEliminated &&
        playerKingdom.IsAtWarWith(kingdom));

    if (enemyKingdom == null)
    {
        return;
    }

    MakePeaceAction.Apply(playerKingdom, enemyKingdom);
}
```

王国投票时，不要用这段代码替代 [MakePeaceKingdomDecision](../../campaign/MakePeaceKingdomDecision)。决议选定和平后，应使用它提供的双方、每日贡金和期限调用 `ApplyByKingdomDecision`。

## 监听与生命周期

长期存在的 mod behavior 应通过静态 [CampaignEvents](../../campaign/CampaignEvents) 监听，不能伪造 dispatcher 或 event receiver：

```csharp
public override void RegisterEvents()
{
    CampaignEvents.MakePeace.AddNonSerializedListener(this, OnMakePeace);
}

private void OnMakePeace(
    IFaction faction1,
    IFaction faction2,
    MakePeaceAction.MakePeaceDetail detail)
{
    if (detail == MakePeaceAction.MakePeaceDetail.ByKingdomDecision)
    {
        InformationManager.DisplayMessage(
            new InformationMessage("A kingdom treaty completed."));
    }
}
```

`InformationManager` 和 `InformationMessage` 需要 `using TaleWorlds.Core;`。`RegisterEvents` 必须属于参与 Campaign 生命周期的 [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)。`AddNonSerializedListener` 注册不是存档字段；behavior 在读档后注册时应重建它，也不能跨 Campaign 销毁阶段保留陈旧派系引用。`StanceLink` 和它的贡金值是可存档的 Campaign 状态，因此若在读档未完成、保存正在写入，或 kingdom/clan 销毁过渡中调用 Action，自己的 behavior 持久状态可能与恢复后的关系不同步。

## 风险与一致性边界

- **直接写战争状态不安全：** 永远不要赋值 stance 的 `StanceType`、编辑 `FactionsAtWarWith`，或改写 `StanceLink` 字段来达成和平。这样会跳过 `FactionManager` 缓存同步、`ResetStats`/和平日期转换、地图事件连续性、玩家侧视觉失效和最终的 `MakePeace` 级联。
- **直接写贡金不安全：** 永远不要直接设置贡金数额或分期。`MakePeaceAction` 会在中立化后、对准确的关系调用 `SetDailyTributePaid`；绕过这个顺序可能把条约绑定到错误方、陈旧战争状态，或遗漏由事件驱动的后果。
- **方向有意义：** 把付款方传为 `faction1`。交换双方会反转正数每日付款的含义，也会改变监听器看到的事件参数顺序。
- **stock 清理是同步的：** stance-continuity listener 和 `MakePeace` 订阅者会协调适用的 map event、siege、敌对 party/army goal、玩家 encounter、囚犯/犯罪/贸易/决议/agreement 状态、UI，以及相关 issue/quest 流程。除非有意替换内置路径，不要从监听器重复 `FactionHelper.FinishAllRelatedHostileActions*`、解除 siege 或清理 encounter。
- **事件顺序与重入：** `CampaignEvents.MakePeace` 在 Action 的直接状态变更和较早的 stance-continuity 级联之后派发；该派发随后会同步调用内置和 mod 监听器。因此，一个监听器能看到已经完成的统计重置、连续性工作、缓存刷新、贡金写入和视觉 dirty，但不能假定其他所有 `MakePeace` 监听器都已运行。监听器若立刻调用另一外交 Action，必须有明确 guard，否则会产生重复事件或反转刚完成的流程。
- **先保证生命周期：** 只在 Campaign 系统可用且 owner 未处于释放阶段时调用。不能把这个静态 Action 当作存档迁移捷径，而忽略正常的 Action/事件序列。

## 导航

- **Up Parent：** [Campaign extension API index](../) · [Campaign system](../../campaign/)
- **Siblings：** [DeclareWarAction](../DeclareWarAction) · [ChangeKingdomAction](../ChangeKingdomAction) · [MakePeaceDetail](../MakePeaceDetail)
- **Related leaves：** [Campaign](../../campaign/Campaign) · [IFaction](../../campaign/IFaction) · [Kingdom](../../campaign/Kingdom) · [Clan](../../campaign/Clan) · [FactionManager](../../campaign/FactionManager) · [CampaignEvents](../../campaign/CampaignEvents) · [DiplomacyModel](../../campaign/DiplomacyModel) · [MakePeaceKingdomDecision](../../campaign/MakePeaceKingdomDecision) · [CampaignWarManagerBehavior](../../campaign/CampaignWarManagerBehavior)
