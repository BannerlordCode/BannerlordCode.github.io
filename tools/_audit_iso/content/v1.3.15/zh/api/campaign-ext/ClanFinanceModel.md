---
title: "ClanFinanceModel"
description: "计算家族（Clan）每日收入、支出与金库净变动，以及城镇关税、村庄贸易税、工坊与车队资产收入的可替换战役经济模型。"
---
# ClanFinanceModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class ClanFinanceModel : MBGameModel<ClanFinanceModel>`  
**Base:** `MBGameModel<ClanFinanceModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs`  
**Default:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanFinanceModel.cs`

## 一句话职责

把一个家族及其所有属地、车队、工坊与巷子的累计税收、贸易利润和各项开销，按固定的收入平滑系数摊算成每日可解释的金币净变动，并在每日结算流程中由 GiveGoldAction 落地写入家族金库。

## 心智模型

这是战役（Campaign）经济层里“家族钱袋子”的规则核心，由 `Campaign.Current.Models.ClanFinanceModel` 持有，默认实现是 `DefaultClanFinanceModel`。它不自己改金币——它是一个计算器：调用方在每日 tick 里拿它的结果，再交给 [`GiveGoldAction`](../GiveGoldAction) 真正落地。

完整链路如下：

```text
每日 tick (ClanVariablesCampaignBehavior.DailyTickClan)
  -> Campaign.Current.Models.ClanFinanceModel.CalculateClanGoldChange(clan, applyWithdrawals: true)
       -> 累加收入：属地税、车队/工坊、王国预算、贡金、政策、Perk
       -> 累加支出：队伍/驻军工资、雇佣兵、贡金、债务、自动招募
       -> 返回 ExplainedNumber（净额 = 收入 - 支出，每项带说明）
  -> GiveGoldAction.ApplyBetweenCharacters(null, clan.Leader, net, disableNotification: true)
       -> clan.Leader.Gold 改变（即家族金库变化）
  -> applyWithdrawals:true 时还一并扣减 town.TradeTaxAccumulated / village.TradeTaxAccumulated、
     王国各钱包、clan.DebtToKingdom、party.PartyTradeGold，并触发 OnPlayerEarnedGoldFromAsset 等事件
```

关键点：所有累计值（如 `Town.TradeTaxAccumulated`）都是“攒了若干天的税”，模型用 `RevenueSmoothenFraction()`（默认 5）把它们摊成“每天该进账多少”。`applyWithdrawals:false` 时只算不动，UI 与预览安全读取；`applyWithdrawals:true` 时才真正扣减并写回各累加器。因此“纯计算路径绝不能改状态”，否则日结算会二次提现或预览数字对不上。

> **版本说明**：本页的抽象契约（`ClanFinanceModel` 的成员签名）在 v1.3.15 与 v1.4.5 中完全一致，无新增/移除成员。下方方法语义与默认值以 v1.4.5 的 `DefaultClanFinanceModel` 为准（doc-contract 规定 1.4.5 为最新权威语义）；在 v1.3.15 子树中阅读时，替换/继承模型的行为预期相同。

## 何时用 / 何时不要用

**用它（替换/继承模型）来改变经济规则**：想调整税率、工资下限、家族补贴、政策收益、资产收入公式时，派生 `DefaultClanFinanceModel` 并重写对应方法，让游戏模型管理器在构建 `Campaign.Current.Models` 时解析到你的版本（后注册的同类模型覆盖基础游戏的 `DefaultClanFinanceModel`）。

**不要用它直接改金币**：不要把 `Clan.Gold`、`Hero.Gold`、`Town.TradeTaxAccumulated` 当字段直接 `+=/-=`。那样会绕过每日结算的统一时序、债务/份额分摊、事件派发，且和模型在 `applyWithdrawals:true` 下的扣减重复。正确做法是用 [`GiveGoldAction`](../GiveGoldAction)（或变更模型返回的数字让日结算去落地）。

**不要重复调用带 `applyWithdrawals:true` 的入口**：同一 tick 内再次调用会二次提现/二次扣税，直接污染存档经济。预览与显示一律用 `applyWithdrawals:false`。

## 依赖图

### 上游（模型读取/调用）

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供 `Current.Models` 与活动战役状态；标题界面为 null。 |
| [`Clan`](../../campaign/Clan) | 计算目标家族及其 `Fiefs`、`Heroes`、`Kingdom`、`DebtToKingdom`。 |
| [`Settlement`](../../campaign/Settlement) | 城镇/村庄属地容器，提供 `OwnerClan` 与 `TradeTaxAccumulated`。 |
| [`Town`](../../campaign/Town) | 城镇税收、项目收入、工坊集合与 `TradeTaxAccumulated`。 |
| [`Village`](../../campaign/Village) | 村庄 `TradeTaxAccumulated` 与 `VillageState`（被劫/被洗则无收入）。 |
| [`Workshop`](../../campaign/Workshop) | 工坊 `ProfitMade` 与 `Capital`，决定工坊收入与玩家工坊支出。 |
| [`Hero`](../../campaign/Hero) | 家族领袖、领主、名人（Notable）的资产与 Perk。 |
| [`MobileParty`](../../campaign/MobileParty) | 车队/领主队的 `PartyTradeGold` 与 `TotalWage`。 |
| [`Kingdom`](../../campaign/Kingdom) | 王国政策、份额因子与各钱包（`MercenaryWallet`/`TributeWallet`/`CallToWarWallet`/`KingdomBudgetWallet`）。 |
| [`GameModels`](../GameModels) | 持有并解析本模型实例（`ClanFinanceModel` 属性）。 |
| [`ExplainedNumber`](../ExplainedNumber) | 所有计算方法的返回类型，携带逐项金额与说明。 |
| [`SettlementTaxModel`](../SettlementTaxModel) | 计算城镇基础税 `CalculateTownTax`，被属地收入复用。 |
| [`CaravanModel`](../CaravanModel) | 提供车队初始贸易金 `GetInitialTradeGold`，用于车队净收入。 |
| [`WorkshopModel`](../WorkshopModel) | 提供工坊资本下限 `CapitalLowLimit`，用于玩家工坊支出判断。 |
| [`AlleyModel`](../AlleyModel) | 提供 `GetDailyIncomeOfAlley`，玩家家族巷子收入。 |
| [`PartyMoraleModel`](../PartyMoraleModel) | 欠饷时计算每日士气惩罚 `GetDailyNoWageMoralePenalty`。 |

### 下游（消费结果/被调用）

| Type | Relation |
| --- | --- |
| [`GiveGoldAction`](../GiveGoldAction) | `DailyTickClan`/`DailyTickHero` 把净额注入 `clan.Leader.Gold` / 名人资产。 |
| [`ClanManagementVM`](../ClanManagementVM) | 家族管理面板读取收入/支出做展示。 |
| `ClanVariablesCampaignBehavior` | 唯一真正的日结算驱动者（见 [示例](#示例)），调用并落地结果。 |

## 风险

1. **标题/菜单阶段 `Campaign.Current` 为 null**：任何读取 `Campaign.Current.Models.ClanFinanceModel` 的代码必须判空，否则在主菜单或战役未启动时崩溃。
2. **模型空替换/未注册**：`GameModels.ClanFinanceModel` 是私有 setter，靠模型管理器解析。若你的派生模型未被模块正确注册，`Campaign.Current.Models.ClanFinanceModel` 仍指向 `DefaultClanFinanceModel`，你的改动不生效；若解析失败则为 null，日结算直接崩。
3. **在“纯计算”路径里改状态**：在 `applyWithdrawals:false` 的分支里写 `TradeTaxAccumulated`、`PartyTradeGold` 或 `Gold`，会让预览/家族面板 UI 触发真实扣减，次日结算再扣一次 → 经济被双倍抽干。
4. **`RevenueSmoothenFraction()` 返回 0 或负**：所有收入都是 `累计值 / 平滑系数`，除数为 0 会抛异常或得到 `Infinity/NaN`；负值会反转收支符号。重写时务必返回正数。
5. **无限收入循环 / 复利坏档**：若你新增的收入项依赖 `clan.Gold` 又反馈回金库，或 `applyWithdrawals:true` 时忘记扣减对应 `TradeTaxAccumulated`，累计税永不下降 → 每日无限进账，存档经济彻底崩坏。
6. **负数/欠饷边界**：`AddPartyExpense` 在预算不足时把差额记到 `clan.DebtToKingdom`；若你改动工资逻辑导致巨额负值，会制造无法偿还的债务并连锁影响王国钱包。
7. **重复 tick 双重落地**：同一家族在同一日 tick 内被多次以 `applyWithdrawals:true` 计算，会重复提现/重复扣税，写入的金币与钱包数值进入存档后不可逆。

## 成员（按主题）

### 总账与收支

| Member | Purpose | Side effect（仅 `applyWithdrawals:true`） | Timing |
| --- | --- | --- | --- |
| `PartyGoldLowerThreshold` | 队伍贸易金下限（默认 5000），欠饷补足的基准。 | 无（只读属性）。 | 工资计算时读取 |
| `CalculateClanGoldChange(Clan, includeDescriptions, applyWithdrawals, includeDetails)` | 收入 + 支出合并的每日净额。 | 改动 `clan.DebtToKingdom`、王国钱包、`PartyTradeGold`、`TradeTaxAccumulated` 等。 | `DailyTickClan` |
| `CalculateClanIncome(Clan, ...)` | 仅收入项（属地、资产、政策、王国预算、贡金）。 | 仅收入相关的提现（关税、村庄税扣减）。 | 预览 / 日结算 |
| `CalculateClanExpenses(Clan, ...)` | 仅支出项（工资、雇佣兵、贡金、债务、自动招募）。 | 工资扣 `PartyTradeGold`、债务递减、王国预算上缴。 | 预览 / 日结算 |

### 属地与资产收入

| Member | Purpose | Side effect（仅 `applyWithdrawals:true`） | Timing |
| --- | --- | --- | --- |
| `CalculateTownIncomeFromTariffs(Clan, Town, applyWithdrawals)` | 城镇关税 = `TradeTaxAccumulated / RevenueSmoothenFraction()` + 多项 Perk/建筑加成。 | 扣减 `town.TradeTaxAccumulated`；玩家触发 `OnPlayerEarnedGoldFromAsset(Taxes)`。 | 日结算（属地收入内） |
| `CalculateTownIncomeFromProjects(Town)` | 城镇项目日收入（建筑效果 + 总督工程 Perk）。 | 无（纯计算）。 | 日结算 |
| `CalculateVillageIncome(Clan, Village, applyWithdrawals)` | 村庄贸易税 / 平滑系数，受 `LandTax` 政策与 `ForestKin`/`Logistician` Perk 影响；被劫/被洗为 0。 | 扣减 `village.TradeTaxAccumulated`；玩家触发税收事件。 | 日结算 |
| `CalculateOwnerIncomeFromCaravan(MobileParty)` | 车队归属者收入 = `(PartyTradeGold - 初始贸易金) / 平滑系数`。 | 无（纯计算，由调用方提现）。 | 查询/日结算 |
| `CalculateOwnerIncomeFromWorkshop(Workshop)` | 工坊归属者收入 = `ProfitMade / 平滑系数`。 | 无（纯计算）。 | 查询/日结算 |
| `CalculateNotableDailyGoldChange(Hero, applyWithdrawals)` | 名人（Notable）每日资产收入（车队、工坊、巷子）。 | 提现到该英雄资产，不发给 `clan.Leader`。 | `DailyTickHero` |

### 平滑系数

| Member | Purpose | Side effect | Timing |
| --- | --- | --- | --- |
| `RevenueSmoothenFraction()` | 收入平滑分母（默认 5）：把累计税收摊到约 5 天，避免单日暴增暴减。 | 无（只读）。 | 每次分摊计算 |

## 示例

### 计算某家族每日金库净变动（贴合真实日结算）

下面这段与 `ClanVariablesCampaignBehavior.DailyTickClan` 的真实调用顺序一致：先取模型、算净额，再交给 `GiveGoldAction` 落地。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;

if (Campaign.Current == null)
{
    return;
}

ClanFinanceModel finance = Campaign.Current.Models.ClanFinanceModel;
Clan clan = Clan.PlayerClan;

// applyWithdrawals:true 才会真正扣税/扣工资并写回各累加器
ExplainedNumber goldChange = finance.CalculateClanGoldChange(
    clan, includeDescriptions: false, applyWithdrawals: true);

int dailyNet = (int)goldChange.ResultNumber;

// 与游戏内一致：把净额注入家族领袖的金库（即家族金库变化）
GiveGoldAction.ApplyBetweenCharacters(null, clan.Leader, dailyNet, disableNotification: true);
```

### 只预览玩家家族每日收入（不落地、不扣税）

展示/调试时用 `applyWithdrawals:false`，只读不改，安全复用于面板显示。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;

ClanFinanceModel finance = Campaign.Current.Models.ClanFinanceModel;

ExplainedNumber income = finance.CalculateClanIncome(
    Clan.PlayerClan, includeDescriptions: true, applyWithdrawals: false);

int dailyIncome = (int)income.ResultNumber;
// income.GetLines() 可逐项遍历：税收、车队、工坊、王国预算、政策、Perk 等来源与金额
```

### 派生模型：给玩家家族加一笔每日补贴（正确扩展方式）

不要把补贴直接写进 `Clan.Gold`，而是扩展模型的收入项，让日结算照常落地：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public class GenerousClanFinanceModel : DefaultClanFinanceModel
{
    public override ExplainedNumber CalculateClanIncome(
        Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)
    {
        ExplainedNumber income = base.CalculateClanIncome(clan, includeDescriptions, applyWithdrawals, includeDetails);
        if (clan == Clan.PlayerClan)
        {
            income.Add(250, new TextObject("{=my_mod_generous}家族补贴"));
        }
        return income;
    }
}
```

把 `GenerousClanFinanceModel` 作为模型注册到你的模块，游戏在构建 `Campaign.Current.Models` 时会优先解析到它，从而取代 `DefaultClanFinanceModel`；`RevenueSmoothenFraction()` 等其余行为保持默认，避免破坏税收与工资时序。

## 导航

- ↑ [campaign-ext 模型家族](../)
- ↔ [DefaultClanFinanceModel](../DefaultClanFinanceModel) · [GameModels](../GameModels) · [SettlementTaxModel](../SettlementTaxModel) · [PartyMoraleModel](../PartyMoraleModel)
- 相关类型：[Clan](../../campaign/Clan) · [Kingdom](../../campaign/Kingdom) · [Town](../../campaign/Town) · [Village](../../campaign/Village) · [Workshop](../../campaign/Workshop) · [GiveGoldAction](../GiveGoldAction)
- [战役系统指南](../../../guide/campaign-system)
