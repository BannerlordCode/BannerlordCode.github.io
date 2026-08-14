---
title: "SellPrisonersAction"
description: "通过战役正式入口出售全部或选定俘虏，统一处理名册扣除、英雄赎回或移交、赎金、技能经验及俘虏事件。"
---
# SellPrisonersAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`

**模块：** `TaleWorlds.CampaignSystem`

**类型：** `public static class SellPrisonersAction`

**基类：** 无（静态类）

**源文件：** `TaleWorlds.CampaignSystem/Actions/SellPrisonersAction.cs`

## 核心定位

把一次“出售俘虏”提交为完整的战役事务，而不是只从 `PrisonRoster` 减人数。

## 概述

这个 Action 接受卖方、可选买方和待处理的 `TroopRoster`。内部入口会按普通兵与英雄俘虏走不同路径，调用赎回或转移 Action，按赎金模型计算收入，给予卖方技能成长，最后广播出售及可能的捐赠事件。城镇赎金菜单、AI 部队出售俘虏、巡逻队交付俘虏和解散部队清算都调用这里。

## 心智模型

传入的 `prisoners` 是本次交易清单，不是新所有者。`ApplyForSelectedPrisoners` 会以清单中的人数修改卖方真实名册；`ApplyForAllPrisoners` 则先克隆卖方名册，避免遍历过程中修改原集合。普通兵直接从卖方名册扣除，英雄则通过 `EndCaptivityAction` 或 `TransferPrisonerAction` 改变囚禁关系，因此一次调用可能同时触发名册、英雄状态、金钱、技能和多个战役事件。

`ApplyByPartyScreen` 是特殊的“界面已经完成名册转移后的结算回调”。它把 `applyConsequences` 设为 `false`，不会再次扣普通俘虏，也不会发赎金；但仍处理英雄、技能和事件。它要求主角当前位于聚落，不能当成无界面的通用出售入口。

## Apply / ApplyInternal 契约

私有 `ApplyInternal(sellerParty, buyerParty, prisoners, applyConsequences)` 的顺序是：

```text
确定 seller 或 buyer 所在聚落
  -> 普通兵：需要结算时从 seller.PrisonRoster 扣除
  -> 英雄：赎回释放，或转移给仍与其交战的 buyer
  -> 聚落中的英雄变化事件
  -> 赎金模型逐项计价并向卖方领袖/所有者/氏族领袖或聚落付款
  -> SkillLevelingManager.OnPrisonerSell
  -> OnPrisonerSold
  -> 必要时 OnPrisonerDonatedToSettlement
```

主角本人永远不会被这条路径出售。若买方不与英雄所属阵营交战，该英雄被赎回；若仍在交战，则转入买方。AI 移动部队把敌对英雄交给同阵营聚落时，还会形成“捐赠俘虏”清单，供关系与影响力 Behavior 继续结算。

## 入口、调用者与时机

| 公开入口 | 契约与副作用 | 官方调用时机 |
|---|---|---|
| `ApplyForAllPrisoners(PartyBase sellerParty, PartyBase buyerParty)` | 克隆卖方全部俘虏后执行完整结算；调用结束后原名册已变化。 | `DisbandPartyCampaignBehavior` 在部队解散清算时，`PatrolPartiesCampaignBehavior` 在巡逻队抵达聚落时。 |
| `ApplyForSelectedPrisoners(PartyBase sellerParty, PartyBase buyerParty, TroopRoster prisoners)` | 只处理传入清单，但不会替调用者验证该清单是否确实属于卖方。会扣名册、发赎金、成长技能并广播事件。 | `PartiesSellPrisonerCampaignBehavior` 的 AI 出售，以及玩家城镇菜单“出售所有可售俘虏”。 |
| `ApplyByPartyScreen(TroopRoster prisoners)` | 假定 Party Screen 已经改完名册，跳过普通兵扣除和金钱后果；仍访问 `Hero.MainHero.CurrentSettlement.Party`。 | 仅供对应 Party Screen 完成回调；普通模组命令通常不应直接调用。 |

## 依赖

| 依赖 | 上游 / 下游关系 |
|---|---|
| [`PartyBase`](../../campaign/PartyBase) / [`TroopRoster`](../TroopRoster) | 上游提供真实卖方、买方和交易快照；Action 会修改卖方俘虏名册。 |
| [`RansomValueCalculationModel`](../RansomValueCalculationModel) | 为每个角色计算赎金；卖方领袖会参与定价，模组替换模型会改变收入。 |
| [`CampaignEvents`](../CampaignEvents) | 下游依次收到聚落英雄变化、`OnPrisonerSold` 和可能的 `OnPrisonerDonatedToSettlement`。SandBox 聚落通知、关系与影响力 Behavior 会消费这些事件。 |
| [`EndCaptivityAction`](../EndCaptivityAction) / [`TransferPrisonerAction`](../TransferPrisonerAction) | 英雄俘虏不能只改名册；这两个 Action 负责收束英雄囚禁状态与附带事件。 |
| [`GiveGoldAction`](../GiveGoldAction) | 完整结算把赎金交给活动领袖、所有者、实际氏族领袖或聚落，而不是直接写 `Hero.Gold`。 |

## 不要直接改字段

不要用 `sellerParty.PrisonRoster.AddToCounts(..., -count)` 模拟出售。那样不会释放英雄、不会按模型计价、不会成长管理俘虏相关技能，也不会发出 UI、关系和影响力所依赖的事件。若意图只是把俘虏交给另一支部队而不是出售，应调用 `TransferPrisonerAction`；若只是释放英雄，应选择匹配原因的 `EndCaptivityAction`。

## 风险边界

- 三个入口都不做 `null`、归属或数量校验。伪造的选定名册可能造成负向扣减、错误赎金或把不属于卖方的英雄状态改掉；先从卖方 `PrisonRoster` 构造快照。
- `ApplyByPartyScreen` 在主角不处于聚落时会访问空的 `CurrentSettlement`。在普通菜单、战役 tick 或加载阶段调用它可能直接崩溃。
- 事件在状态已经变化后同步派发。监听器应把 `prisoners` 当作本次交易描述，不要假定这些角色仍在卖方名册，也不要在回调中再次出售同一批对象。
- 敌对英雄被 AI 部队交给同阵营聚落时，内部会抑制该批赎金并派发捐赠事件。把 `buyerParty` 随意设成友方聚落会改变金钱、关系和影响力语义。
- `TroopRoster` 清单和事件参数是瞬时工作数据，不适合作为长期存档事实。需要持久化时保存角色 ID 与模组自己的事务状态，并在加载后重新解析有效对象；不要保存“待再次 Apply”的旧名册。
- 只在战役已启动、参与方仍活跃且不处于正在改写同一名册的回调中调用。加载同步或 Party Screen 正在提交时重入，容易重复付款或重复英雄生命周期事件。

## 真实获取路径示例

下面沿用 `PlayerTownVisitCampaignBehavior` 的真实路径：从主部队取得卖方，并用官方 Helper 过滤玩家当前可出售的俘虏。此逻辑应放在已经确认玩家位于城镇赎金菜单的后果回调中。

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;

public static void SellAllPlayerPrisonersFromTownMenu()
{
    PartyBase seller = PartyBase.MainParty;
    TroopRoster prisoners = MobilePartyHelper.GetPlayerPrisonersPlayerCanSell();

    if (Hero.MainHero.CurrentSettlement != null && prisoners.TotalManCount > 0)
    {
        SellPrisonersAction.ApplyForSelectedPrisoners(seller, null, prisoners);
    }
}
```

这里传 `buyerParty: null` 与官方城镇菜单一致：普通俘虏仍按模型结算，英雄走赎回释放；不要为了“补一个买家”随意传当前聚落，否则敌对英雄可能被转入聚落并触发捐赠语义。

## 版本注记

本页公开签名与流程以 v1.3.15 为准。核对 v1.4.5 的同名核心程序集源码后，三个公开入口、英雄分支、赎金支付以及事件顺序均保持一致；1.4.5 的反编译输出只在底层 `TroopRoster.AddToCounts` 调用形态等实现细节上有所整理。该类型仍位于 `TaleWorlds.CampaignSystem.Actions`，不是 SandBox 类型。

## 导航

- 存档边界：[SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) 注册受影响的 roster、英雄和金币状态；本次交易事件不会在读档时重放。
- ↑ Parent：[战役扩展 API](../)
- ↔ Sibling：[EndCaptivityAction](../EndCaptivityAction) · [TransferPrisonerAction](../TransferPrisonerAction) · [GiveGoldAction](../GiveGoldAction)
- ↓ Children：无独立子页；三个公开入口的全量/选定囚徒分支已在本页成员章节说明
- Related：[PartyBase](../../campaign/PartyBase) · [TroopRoster](../TroopRoster) · [CampaignEvents](../CampaignEvents) · [RansomValueCalculationModel](../RansomValueCalculationModel)
