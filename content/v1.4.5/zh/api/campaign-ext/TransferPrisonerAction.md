---
title: "TransferPrisonerAction"
description: "在战役中把一名英雄或普通俘虏从一个 PartyBase 的 PrisonRoster 转交给另一个 PartyBase，并说明主角囚禁的特殊路径与生命周期风险。"
---
# TransferPrisonerAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class TransferPrisonerAction`  
**基类：** 无（静态类）  
**源文件：** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/TransferPrisonerAction.cs`

## 一句话职责

把一个 `CharacterObject` 的俘虏归属从来源 `PartyBase` 转给目标 `PartyBase`；主角本人不进入普通俘虏名册，而是改写 `PlayerCaptivity.CaptorParty`。

## 心智模型

这是 Campaign 层的低级状态转移 Action，不是出售、赎金、释放或“捕获”流程。调用者已经决定了俘虏应由谁持有，`Apply` 只完成归属变化：普通俘虏从 `prisonerOwnerParty.PrisonRoster` 减一，再调用 `newParty.AddPrisoner(prisonerTroop, 1)`；英雄俘虏也沿用这条名册路径。

唯一的分叉是 `prisonerTroop.HeroObject == Hero.MainHero`。主角被俘时，源码不触碰任一 `PrisonRoster`，而只设置 `PlayerCaptivity.CaptorParty = newParty`。因此这个 Action 的生命周期由调用方负责：来源名册必须确实拥有该对象，目标 Party 必须仍然有效，且调用发生在战役对象已创建并可安全修改的阶段。

## 何时使用，何时不要使用

适合在已经确定“俘虏换持有人”的业务流程中使用，例如英雄俘虏随部队进入聚落、解散部队时捐给相关聚落、逃兵部队合并，或敌对双方的俘虏谈判。普通模组代码应传入实际的 `PartyBase` 路径，例如 `MobileParty.Party` 或 `Settlement.Party`，不要凭字符串或临时对象拼接 Party。

不要用它代替：

- 需要赎金、金币、技能经验和出售事件时的 [`SellPrisonersAction`](../SellPrisonersAction/)；
- 需要按原因结束英雄囚禁时的 [`EndCaptivityAction`](../EndCaptivityAction/)；
- 需要把角色捕获进俘虏名册的 [`TakePrisonerAction`](../TakePrisonerAction/)；
- 需要销毁或解散部队时的 [`DestroyPartyAction`](../DestroyPartyAction/) 或 [`DisbandPartyAction`](../DisbandPartyAction/)。

它不会自动检查战争关系、名册数量、空引用、地图事件状态，也不会自动广播出售或捐赠事件。若这些条件属于上层业务契约，调用者必须先完成检查。

## 公开入口与实际副作用

### `Apply`

```csharp
public static void Apply(CharacterObject prisonerTroop, PartyBase prisonerOwnerParty, PartyBase newParty)
```

源码的实际顺序是：

1. 如果 `prisonerTroop.HeroObject == Hero.MainHero`，设置 `PlayerCaptivity.CaptorParty` 并立即返回；不会从来源名册扣除，也不会调用 `AddPrisoner`。
2. 否则执行 `prisonerOwnerParty.PrisonRoster.AddToCounts(prisonerTroop, -1)`。
3. 随后执行 `newParty.AddPrisoner(prisonerTroop, 1)`，把一名角色加入目标方的俘虏名册。

这个入口没有数量参数，所以每次调用只转移一名角色。若原名册中数量不止一名，应按实际数量循环，并在循环前取得稳定快照；不要在遍历 `GetTroopRoster()` 的同时任意改变同一个 roster。

## 依赖

| 方向 | 类型 / 系统 | 关系 |
|---|---|---|
| 上游 | [`PartyBase`](../../campaign/PartyBase/) | 提供来源和目标的 `PrisonRoster`、`MapFaction` 与 `MobileParty.Party` / `Settlement.Party` 入口。 |
| 上游 | [`Hero`](../../campaign/Hero/) / `CharacterObject` | `HeroObject` 决定是否进入主角特殊分支；普通英雄仍作为 `CharacterObject` 转移。 |
| 特殊状态 | `PlayerCaptivity.CaptorParty` | 主角被俘时保存当前抓获方；这不是普通 `PrisonRoster` 成员。 |
| 调用者 | [`SellPrisonersAction`](../SellPrisonersAction/) | 出售英雄且买方仍与其阵营交战时调用本 Action；出售的金币、模型和事件由上层处理。 |
| 调用者 | [`TransferPrisonerBarterable`](../TransferPrisonerBarterable/) | 议价完成后，在目标方与俘虏阵营交战的前提下调用。 |
| 调用者 | `PatrolPartiesCampaignBehavior`、`DisbandPartyCampaignBehavior`、`DesertersCampaignBehavior` | 分别把英雄俘虏送入聚落、相关聚落或合并后的部队；随后由各自 Behavior 继续处理 roster 和事件。 |
| 相邻 Action | [`EndCaptivityAction`](../EndCaptivityAction/) | 释放或赎回英雄，不能由本 Action 隐式替代。 |

本 Action 自身没有事件派发、赎金计算或存档事务。需要让 UI、关系、影响力或赎金系统看到“出售/捐赠”时，必须调用拥有完整事件链的上层 Action 或 Behavior；仅调用本页入口不会自动产生这些通知。

## 真实调用路径

### 巡逻队进入自己的聚落

`PatrolPartiesCampaignBehavior.SettlementEntered` 遍历巡逻队的 `party.PrisonRoster.GetTroopRoster()`，把每个英雄俘虏从移动部队转到聚落：

```csharp
private void SettlementEntered(MobileParty party, Settlement settlement, Hero hero)
{
    if (party == null || !party.IsPatrolParty || settlement != party.HomeSettlement)
        return;

    foreach (TroopRosterElement item in party.PrisonRoster.GetTroopRoster())
    {
        if (item.Character.HeroObject != null)
            TransferPrisonerAction.Apply(item.Character, party.Party, settlement.Party);
    }

    if (party.PrisonRoster.Count > 0)
        SellPrisonersAction.ApplyForAllPrisoners(party.Party, settlement.Party);
}
```

这里的 `party.Party` 和 `settlement.Party` 都是真实的 `PartyBase` 获取路径。转移英雄后，Behavior 再把剩余普通俘虏交给出售流程；不要把两种职责合并成一次裸 roster 修改。

### 议价完成后的转移

`TransferPrisonerBarterable.Apply` 使用保存的 `base.OriginalParty` 和 `_otherParty`，只有 `_otherParty.MapFaction.IsAtWarWith(_prisonerCharacter.MapFaction)` 时才调用：

```csharp
public override void Apply()
{
    if (_otherParty != null &&
        _otherParty.MapFaction.IsAtWarWith(_prisonerCharacter.MapFaction))
    {
        TransferPrisonerAction.Apply(
            _prisonerCharacter.CharacterObject,
            base.OriginalParty,
            _otherParty);
    }
}
```

这说明战争关系检查属于调用者，而不是 `TransferPrisonerAction.Apply` 的保护措施。`TransferPrisonerBarterable` 的检查失败时会断言失败，不应绕过该契约直接把俘虏交给友方。

### 解散部队时转入相关聚落

`DisbandPartyCampaignBehavior` 只把仍与相关聚落交战的英雄俘虏转移到 `relatedSettlement.Party`；不满足战争条件的英雄走 `EndCaptivityAction.ApplyByEscape`，而不是本 Action：

```csharp
foreach (TroopRosterElement item in disbandParty.PrisonRoster.GetTroopRoster())
{
    if (item.Character.HeroObject == null)
        continue;

    if (item.Character.HeroObject.MapFaction.IsAtWarWith(relatedSettlement.MapFaction))
    {
        TransferPrisonerAction.Apply(item.Character, disbandParty.Party, relatedSettlement.Party);
        troopRoster.Add(item);
    }
    else
    {
        EndCaptivityAction.ApplyByEscape(item.Character.HeroObject);
    }
}
```

转移完成后，Behavior 用 `OnPrisonerDonatedToSettlement` 通知捐赠，再用 `SellPrisonersAction.ApplyForAllPrisoners` 处理剩余普通俘虏；裸调用不会产生这些后续事件。

### 逃兵部队合并

`DesertersCampaignBehavior.MergeParties` 将 `nearbyParty` 的英雄俘虏逐个从 `nearbyParty.Party` 转到接收方 `party.Party`，然后才合并剩余普通俘虏、物品和金币，并销毁来源部队：

```csharp
foreach (TroopRosterElement item in nearbyParty.PrisonRoster.GetTroopRoster())
{
    if (item.Character.HeroObject != null)
        TransferPrisonerAction.Apply(item.Character, nearbyParty.Party, party.Party);
}

if (party.PrisonRoster.Count > 0)
    party.PrisonRoster.Add(nearbyParty.PrisonRoster);

DestroyPartyAction.Apply(null, nearbyParty);
```

这条顺序说明来源 Party 只能在所有英雄转移、普通俘虏合并及其他库存处理完成后销毁；不能先销毁 `nearbyParty` 再调用本 Action。

## 风险、存档与生命周期

- 源码不验证 `prisonerOwnerParty`、`newParty`、`prisonerTroop` 是否为 `null`，也不验证来源名册是否真的有该角色。错误来源会造成负向计数、空引用或把英雄状态与实际俘虏归属分离。
- `Apply` 不检查目标 Party 是否正在地图事件、解散、销毁或加载同步中。不要在同一 roster 的遍历或存档 `SyncData` 过程中重入调用；先快照，再在战役状态稳定的回调中转移。
- 主角分支只写 `PlayerCaptivity.CaptorParty`。调用者不能随后把 `Hero.MainHero.CharacterObject` 当普通角色从 `PrisonRoster` 扣除，也不能把 `newParty` 销毁而不先结束主角囚禁，否则后续囚禁 tick、地图移动或读档可能留下无效抓获方。
- 普通英雄的 roster 变更不会自动完成释放、赎金、捐赠关系或其他英雄生命周期收束。若意图是释放，使用 [`EndCaptivityAction`](../EndCaptivityAction/)；若意图是出售，使用 [`SellPrisonersAction`](../SellPrisonersAction/)。
- 本 Action 不把“待转移”状态写入自定义存档，也不会在读档时重放。不要把旧的 `PartyBase` 引用或待执行 `CharacterObject` 列表持久化后跨加载直接调用；保存稳定 ID 和业务意图，加载后重新解析仍存活的 Party 与角色。
- 调用成功后来源和目标 roster 都已改变。丢弃调用前缓存的 `TroopRosterElement`、人数和 Party 所有权判断，并让后续事件或 Behavior 基于新状态重新读取。

## 版本注记

v1.3.15 的公开签名与核心语义是上述单一 `Apply` 入口、主角 `PlayerCaptivity.CaptorParty` 分支，以及普通角色的来源扣除与目标 `AddPrisoner`。核对 v1.4.5 权威源码，顺序和分支保持一致；1.4.5 的调用点同样由出售、议价、巡逻、解散和部队合并流程负责前置条件。该类型仍属于 `TaleWorlds.CampaignSystem` 核心程序集，不是 SandBox 专属 API。

## 导航

- ↑ Parent：[战役扩展 API](../)
- ↔ Sibling：[SellPrisonersAction](../SellPrisonersAction/) · [EndCaptivityAction](../EndCaptivityAction/) · [TransferPrisonerBarterable](../TransferPrisonerBarterable/)
- ↓ Children：无独立子页；主角囚禁分支和普通俘虏分支都在本页说明
- Related：[PartyBase](../../campaign/PartyBase/) · [Hero](../../campaign/Hero/) · [MobileParty](../../campaign/MobileParty/) · [Settlement](../../campaign/Settlement/) · [TakePrisonerAction](../TakePrisonerAction/)
