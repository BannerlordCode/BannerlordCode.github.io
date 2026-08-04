---
title: "ClanFinanceModel"
description: "v1.4.5 中计算 Clan 收支、据点资产收入和每日提款边界的战役规则模型。"
---
# ClanFinanceModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public abstract class ClanFinanceModel : MBGameModel<ClanFinanceModel>`  
**基类：** `MBGameModel<ClanFinanceModel>`  
**源码：** `TaleWorlds.CampaignSystem.ComponentInterfaces/ClanFinanceModel.cs`  
**版本：** 本页描述 v1.4.5。

## 一句话职责

它把 Clan、party、garrison、村庄、城镇、caravan、workshop 和外交收入/支出转换成可解释的财务结果，并在调用方明确要求时执行提款副作用。

## 心智模型

`ClanFinanceModel` 是 Campaign 启动阶段注册到 [GameModels](../GameModels) 的抽象规则端口。Sandbox 默认通过 `SandBoxManager` 注入 `DefaultClanFinanceModel`；运行中的调用方从 `Campaign.Current.Models.ClanFinanceModel` 取得当前实现。它不拥有 `Clan.Gold`、`Town.TradeTaxAccumulated` 或 `Workshop.Capital`，而是读取这些对象并返回 `ExplainedNumber`。

最重要的边界是 `applyWithdrawals`。传入 `false` 时，调用通常是预览或 UI 解释；传入 `true` 时，默认实现可能扣除税收累计、减少 party trade gold、支付工资、偿还债务、提取 workshop/caravan 收入、改变士气或触发玩家资产收入事件。每日财务 Behavior 才是正常的提款 owner。mod 不应为了得到一个数字而重复调用带提款的入口。

## 何时使用，何时不要使用

适合在当前 Campaign 中解释 Clan 为什么增益或亏损、预览某个城镇税收、为自定义财务 UI 提供 `ExplainedNumber`，或实现一个替换 [GameModels](../GameModels) 中该端口的规则模型。

不要用它直接改金币、税收、workshop 利润、party gold 或村庄贸易税。也不要把 `CalculateClanGoldChange` 当作安全的“结算按钮”：结算是否发生、何时发生、是否允许提款由 [Campaign](../Campaign) 生命周期和财务 Behavior 决定。需要改变世界状态时，应沿用相应的 [Action](../../campaign-ext/) 或现有 Behavior owner。

## 依赖关系

上游是 [Campaign](../Campaign)、[Clan](../Clan) 和 `Campaign.Models` 注册链；默认实现由 `SandBoxManager.AddModel(new DefaultClanFinanceModel())` 加入。收入来源包括 [Town](../Town)、[Village](../Village)、[Workshop](../Workshop)、`MobileParty`、caravan、tribute 和 kingdom budget。下游是每日 Clan 财务 Behavior、[CampaignEvents](../CampaignEvents) 的玩家资产收入通知以及 [SaveManager](../../save-system/SaveManager) 保存的世界对象。

模型返回的数值可能包含 `ExplainedNumber` 描述项，但描述项不等于一个事务已经落盘。保存前后应重新从当前 Campaign 获取 Clan 和据点，不要缓存一次性的结算对象。

## 关键成员与时机

### `PartyGoldLowerThreshold`

默认实现返回 `5000`。party/garrison 财务逻辑用它判断 party trade gold 是否需要补足；它是规则阈值，不是当前 party 的金币余额，也不是给 party 直接充值的 API。

```csharp
Campaign campaign = Campaign.Current;
if (campaign != null)
{
    int threshold = campaign.Models.ClanFinanceModel.PartyGoldLowerThreshold;
}
```

### Clan 总收支

```csharp
public ExplainedNumber CalculateClanGoldChange(
    Clan clan,
    bool includeDescriptions = false,
    bool applyWithdrawals = false,
    bool includeDetails = false)

public ExplainedNumber CalculateClanIncome(
    Clan clan,
    bool includeDescriptions = false,
    bool applyWithdrawals = false,
    bool includeDetails = false)

public ExplainedNumber CalculateClanExpenses(
    Clan clan,
    bool includeDescriptions = false,
    bool applyWithdrawals = false,
    bool includeDetails = false)
```

三者都接收一个真实 Clan。默认实现会合并 party/garrison 工资、城镇税收、村庄贸易税、workshop/caravan、tribute、mercenary、债务和其他条件化项目。`includeDetails` 影响解释项的展开，不会把一个非提款调用变成提款调用。

## 据点收入

`CalculateTownIncomeFromTariffs(Clan, Town, bool)` 从 `Town.TradeTaxAccumulated` 和 perk/building/project 规则计算 tariff；默认实现只有在 `applyWithdrawals: true` 时才减少累计税收，并可能发送玩家资产收入事件。`CalculateTownIncomeFromProjects(Town)` 只计算项目/建筑相关收入。`CalculateVillageIncome(Clan, Village, bool)` 会区别正常村庄与被劫掠或正在被 raid 的村庄，并可在提款模式消费累计贸易税。

## 资产与平滑

`CalculateOwnerIncomeFromCaravan(MobileParty)` 和 `CalculateOwnerIncomeFromWorkshop(Workshop)` 返回平滑后的 owner 收入，实际扣除由更上层的财务计算在 `applyWithdrawals` 路径完成。默认 `RevenueSmoothenFraction()` 为 `5f`，表示收入不会简单等于 workshop 的瞬时 `ProfitMade`。`CalculateNotableDailyGoldChange(Hero, bool)` 也会把 hero 的资产收益纳入每日变化。

## 真实当前 Campaign 示例：只预览玩家 Clan

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;

public static ExplainedNumber PreviewPlayerClanFinance()
{
    Campaign campaign = Campaign.Current;
    Clan clan = Clan.PlayerClan;
    if (campaign == null || clan == null || clan.IsEliminated)
        return default;

    ClanFinanceModel model = campaign.Models.ClanFinanceModel;
    return model.CalculateClanGoldChange(
        clan,
        includeDescriptions: true,
        applyWithdrawals: false,
        includeDetails: true);
}
```

这里的 Clan 来自当前 Campaign 的注册玩家对象，没有构造假 Clan，也没有写 `Gold`。如果 UI 要预览某个城镇的税收，应从 live [Settlement](../Settlement).`Town` 获取目的地，并继续传入 `applyWithdrawals: false`。真正的每日提款应让原版财务流程调用，避免 mod 和原版各提款一次。

## 替换模型与存档风险

模型替换必须发生在 Campaign starter 的 `AddModel`/`ReplaceModel` 生命周期内，并保持返回值对调用方的契约。返回一个空模型、在 Campaign 初始化前读取 `Campaign.Current.Models`，或在读档后继续使用旧实现，都会让 town/village/party 财务流程得到不完整结果。

最危险的误用是把 `applyWithdrawals: true` 放进每小时 UI 刷新、事件监听器或重复的 daily tick。默认实现可能已经减少税收累计、party gold、workshop capital 或债务；重复提款会产生少金、错误士气和不可重放的存档差异。模型只负责规则计算，不能替代 `GiveGoldAction`、资产 Behavior 或保存系统。

## 版本说明

本页以 v1.4.5 的 `ClanFinanceModel` 抽象声明和 `DefaultClanFinanceModel` 行为为准。不同版本可能增删收入项或改变 `applyWithdrawals` 的副作用；mod 应按目标版本重新检查模型声明、默认实现和调用 Behavior。

## 导航

- **父级：** [Campaign API](../) · [Models hub](../GameModels)
- **同级：** [SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementSecurityModel](../SettlementSecurityModel) · [VillageTradeModel](../VillageTradeModel)
- **相关实体：** [Clan](../Clan) · [Town](../Town) · [Village](../Village) · [Workshop](../Workshop) · [Settlement](../Settlement)
- **相关流程：** [Campaign](../Campaign) · [CampaignEvents](../CampaignEvents) · [SaveManager](../../save-system/SaveManager)
