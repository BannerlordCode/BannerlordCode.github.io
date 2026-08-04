---
title: "ChangeOwnerOfSettlementAction"
description: "按原因专用的战役 Action 转移据点所有权，并同步驻军、总督、绑定村庄、围城状态与所有权事件。"
---
# ChangeOwnerOfSettlementAction

**命名空间:** `TaleWorlds.CampaignSystem.Actions`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public static class ChangeOwnerOfSettlementAction`  
**基类:** 无（静态类）  
**源文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeOwnerOfSettlementAction.cs`

## 一句话职责

用已经被围城、叛乱、barter、赠予、王国决议或其它 owner 流程接受的原因入口，把真实 Campaign 据点转给新的 Hero 所有者，并同步城镇/堡垒、驻军、总督、绑定村庄、地图事件、派系视觉状态与所有权通知；它提交的是完整世界状态迁移，不是直接写 `Settlement.OwnerClan` 的 setter。

## 心智模型

这是战役层的**世界所有权迁移**，不是 `Settlement.OwnerClan` 的 setter。每个 `ApplyBy*` 入口都携带 `ChangeOwnerOfSettlementDetail`，让下游 Behavior 区分围城、barter、叛乱、赠予、决议、离开阵营和氏族销毁等原因。

公共迁移先读取旧 owner，清除 town 的未分配标记，并在堡垒上写入 `Town.OwnerClan`。围城转移会使用捕获者 party 销毁旧驻军；缺少驻军时会创建新的驻军，并移除总督。随后据点和绑定村庄的视觉状态被标脏，可能暂停目标指向绑定村庄的村民 party，协调活动中的围城/地图事件，最后通过 dispatcher 发布带有 `openToClaim`、新旧 owner、捕获者和 detail 的 `OnSettlementOwnerChanged`。

应使用与上游已接受原因匹配的入口。`ApplyBySiege` 还会写 `Town.LastCapturedBy`；`ApplyByRebellion` 把新 owner 同时作为 capturer；`ApplyByGift` 和 `ApplyByBarter` 虽然都不是围城转移，但下游看到的 detail 不同。不要用这个 Action 决定谁赢得围城、barter 是否接受，或氏族是否真的已销毁。

## 依赖图

```text
王国 / barter / 叛乱 / 围城 owner
  -> ChangeOwnerOfSettlementAction.ApplyBySiege(newOwner, capturerHero, settlement)
      -> Town.OwnerClan 与 owner 标志
      -> 驻军 / 总督 / 绑定村庄视觉与 AI 清理
      -> 活动 MapEvent 与敌对围城 party 协调
      -> CampaignEventDispatcher.OnSettlementOwnerChanged
          -> CampaignEvents.OnSettlementOwnerChangedEvent
```

**上游:** [KingdomManager](../../campaign/KingdomManager)、[ChangeKingdomAction](../ChangeKingdomAction)、围城结算、barter、叛乱和氏族销毁流程提供真实的 [Settlement](../../campaign/Settlement) 与新 [Hero](../../campaign/Hero)。  
**下游:** [CampaignEvents](../../campaign/CampaignEvents)、[CampaignEventDispatcher](../../campaign/CampaignEventDispatcher)、[Town](../../campaign/Town)、[Village](../../campaign/Village)、[Clan](../../campaign/Clan)、驻军、围城、issue 和 UI Behavior 消费迁移后的状态。  
**相关 Action:** [DestroyPartyAction](../DestroyPartyAction)、[ChangeGovernorAction](../ChangeGovernorAction)、[StartBattleAction](../StartBattleAction) 和 [ChangeKingdomAction](../ChangeKingdomAction)。

## Detail 与公共入口

### `ChangeOwnerOfSettlementDetail`

```csharp
public enum ChangeOwnerOfSettlementDetail
{
    Default, BySiege, ByBarter, ByLeaveFaction,
    ByKingDecision, ByGift, ByRebellion, ByClanDestruction
}
```

这个值是行为数据。围城后处理、驻军、issue 和外交代码会用它决定是否执行 “open to claim” 或围城专属反应。

### `ApplyBy*` 路由

| 入口 | 含义与源码中的副作用 |
| --- | --- |
| `ApplyByDefault(Hero, Settlement)` | 通用转移，detail 为 `Default`，没有 capturer。原版作弊命令使用此入口；它不是普通围城或决议结果。 |
| `ApplyByKingDecision(Hero, Settlement)` | 王国决议结果；公共路径后还会再次清除 town 的未分配标记。 |
| `ApplyBySiege(Hero newOwner, Hero capturerHero, Settlement)` | 围城夺取；记录 `LastCapturedBy`，可能销毁旧驻军，并让堡垒进入可认领语义。 `capturerHero` 必须拥有活 party。 |
| `ApplyByLeaveFaction(Hero, Settlement)` | 离开阵营；堡垒会进入可认领语义，监听器看到 `ByLeaveFaction`。 |
| `ApplyByBarter(Hero, Settlement)` | 已接受的 fief barter；监听器看到 `ByBarter`。 |
| `ApplyByRebellion(Hero, Settlement)` | 叛乱转移；同一 Hero 作为新 owner 与 capturer，detail 为 `ByRebellion`。 |
| `ApplyByDestroyClan(Settlement, Hero)` | 氏族销毁后的重新分配；detail 为 `ByClanDestruction`。 |
| `ApplyByGift(Settlement, Hero)` | 赠予/转移路径；参数顺序是 settlement 在前、新 owner 在后。 |

所有入口都是立即执行的 `void` 操作，没有预览、事务或回滚对象。

## 状态与事件顺序

对堡垒而言，公共路径在事件前会完成以下联动：

1. 读取 `settlement.OwnerClan?.Leader` 为 `oldOwner`，并清除 `Town.IsOwnerUnassigned`。
2. 将 `Town.OwnerClan` 写成 `newOwner.Clan`。
3. 围城时通过 [DestroyPartyAction](../DestroyPartyAction) 销毁旧驻军；驻军缺失时创建新的驻军，并移除总督。
4. 将据点和绑定村庄 party 标脏；对指向绑定村庄且符合条件的村民 party 设置 hold。
5. 对围城、氏族销毁或离开阵营的堡垒转移计算 `openToClaim`。
6. 当新阵营不敌对时结束冲突的未完成地图事件，停止不兼容的守军/袭击 AI，并更新地图事件。
7. 通过 `CampaignEvents.OnSettlementOwnerChangedEvent` 派发新旧 owner 与 `detail`。

源码在堡垒路径中读取 `newOwner.Clan`，围城包装器读取 `capturerHero.Clan` 和其 party；这些是调用方契约，不是可选的附加信息。村庄不会由此 Action 写入新的 village owner，但仍可能收到所有权事件，因此不要把事件本身当作“村庄已变更所有者”的证明。

## 真实当前 Campaign 示例

### 应用一个已经接受的赠予转移

原版 Clan 与 Kingdom 流程会在更高层完成转移决定后调用 `ApplyByGift`。mod 自己的转移也应使用当前活的据点和 Hero，并且不能把这段代码当作 barter 或围城判定器：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Settlements;

public static void GrantCurrentSettlementAsGift()
{
    if (Campaign.Current == null)
        return;

    Settlement settlement = Settlement.CurrentSettlement;
    Hero newOwner = Hero.MainHero;
    if (settlement == null || newOwner == null || !settlement.IsFortification ||
        settlement.OwnerClan == newOwner.Clan)
        return;

    ChangeOwnerOfSettlementAction.ApplyByGift(settlement, newOwner);
}
```

只有在 mod 自己完成权限、代价和所有权决策后才调用。围城结算应改用 `ApplyBySiege(newOwner, capturerHero, settlement)`，从而保留正确的 detail 与捕获记录。

### 观察迁移后的 owner 与原因

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Settlements;

private void RegisterEvents()
{
    CampaignEvents.OnSettlementOwnerChangedEvent.AddNonSerializedListener(
        this, OnSettlementOwnerChanged);
}

private void OnSettlementOwnerChanged(
    Settlement settlement,
    bool openToClaim,
    Hero newOwner,
    Hero oldOwner,
    Hero capturerHero,
    ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)
{
    RecordOwnerChange(settlement.StringId, newOwner?.StringId, detail, openToClaim);
}
```

回调收到的是迁移后的 owner 与调用时使用的原因。监听器不应再次写 `Town.OwnerClan`。

## 风险与存档边界

- **原因值会影响行为。** 用 `ApplyByDefault` 替代围城或叛乱入口，可能确实改变 owner，却丢失围城后处理、任务和 UI 使用的语义 detail。
- **调用参数必须是相互一致的活对象。** 堡垒路径读取 `newOwner.Clan`；围城路径读取 `capturerHero.Clan`，并可能在销毁驻军时读取 `capturerHero.PartyBelongedTo.Party`。没有 party 的 capturer 调用 `ApplyBySiege` 可能在清理阶段失败。
- **不要直接写字段。** 直接赋值 `Town.OwnerClan` 会跳过驻军创建/销毁、总督移除、绑定村庄视觉、地图事件外交、AI hold 和所有权事件，状态可能直到存档/读档后才暴露矛盾。
- **事件在广泛清理之后。** 监听器可能看到已停止的 party、已重新创建的驻军或已外交结束的地图事件。应复制 ID 并重新查询活对象，不要继续使用旧围城引用。
- **null owner 不是通用“无主”入口。** 某些内部条件允许后续检查遇到 null，但堡垒仍会访问 `newOwner.Clan`。没有合法 owner 时应使用真正的 owner 移除/销毁流程。
- **村庄边界。** 该 Action 只在 `IsFortification` 时写 `Town.OwnerClan`；对 village 调用可能只发布事件而没有对应所有权写入。
- **存档边界:** 在回调中保存稳定 ID 和 mod 已接受的原因，不要序列化临时 `Settlement`/`Hero` 引用。读档后从当前 Campaign 重新获取对象。

## 导航

- **父级:** [Campaign extension API](../) · [Campaign system](../../campaign/)
- **同级:** [ChangeKingdomAction](../ChangeKingdomAction) · [ChangeRelationAction](../ChangeRelationAction) · [StartBattleAction](../StartBattleAction)
- **相关实体:** [Settlement](../../campaign/Settlement) · [Town](../../campaign/Town) · [Village](../../campaign/Village) · [Hero](../../campaign/Hero) · [Clan](../../campaign/Clan)
- **事件与清理:** [CampaignEvents](../../campaign/CampaignEvents) · [DestroyPartyAction](../DestroyPartyAction) · [ChangeGovernorAction](../ChangeGovernorAction) · [KingdomManager](../../campaign/KingdomManager)
