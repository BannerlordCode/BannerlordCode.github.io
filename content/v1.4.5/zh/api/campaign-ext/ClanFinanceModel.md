---
title: "ClanFinanceModel"
description: "计算家族每日收入、支出与净额的可替换规则层；通过 applyWithdrawals 选择只预览还是真正拨动税款、贸易金与王国钱包。"
---

# ClanFinanceModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class ClanFinanceModel : MBGameModel<ClanFinanceModel>`  
**基类:** `MBGameModel<ClanFinanceModel>`  
**源文件:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem.GameComponents/DefaultClanFinanceModel.cs`

## 一句话职责

它回答“这个家族今天净赚还是净亏多少”，把城镇关税、项目产出、村庄、商队、作坊、工资、贡金、债务和王国预算汇总成带可选解释的 `ExplainedNumber`；它负责“算出该动多少金”，而真正把金拨给家族首领的活由 [`GiveGoldAction`](../GiveGoldAction) 完成。

## 心智模型

这是战役每日经济时钟读取前的规则层。`ClanFinanceModel` 不持有任何经济状态，它只是把 [`Clan`](../../campaign/Clan)、[`Town`](../../campaign/Town)、[`Village`](../../campaign/Village)、[`Hero`](../../campaign/Hero)、[`MobileParty`](../../campaign/MobileParty)、[`Workshop`](../../campaign/Workshop) 上已经累积的 `TradeTaxAccumulated`、`PartyTradeGold`、`ProfitMade`、王国钱包和 `DebtToKingdom` 这些“蓄水池”读出来，按 [`RevenueSmoothenFraction`](#revenuesmoothenfraction) 平滑成日额，再加减成家族净变化。

计算链是：`CalculateClanIncome` 累加所有正向来源（城镇税、关税、项目、村庄、商队/队伍贸易利、作坊、 alley、贡金、王国预算、贸易协定、Perk），`CalculateClanExpenses` 累加所有负向来源（队伍与驻军工资、雇佣兵分摊、贡金支出、自动招募、王国预算抽成、债务偿还、作坊亏损），`CalculateClanGoldChange` = 收入 − 支出。

理解这一个开关最关键：**`applyWithdrawals`**。

- `applyWithdrawals = false`：纯预览。只读取蓄水池并返回数字，**不**改写任何 `TradeTaxAccumulated`、`PartyTradeGold`、王国钱包或 `DebtToKingdom`。UI、诊断、决策 AI 都应这样调用。
- `applyWithdrawals = true`：应用路径。在算出数字的同时，把已经“兑现”的那部分从蓄水池里扣掉（例如 `town.TradeTaxAccumulated -= num`、`party.PartyTradeGold -= num3`、给 `KingdomBudgetWallet` / `MercenaryWallet` / `TributeWallet` 加减、偿还 `DebtToKingdom`），并把玩家资产收入通过 `OnPlayerEarnedGoldFromAsset` 派发出去。这个路径只在每日经济 tick 里走。

使用这个模型，是为了改变所有读者看到的“应计经济结果”。如果你只想给家族一笔叙述性金钱（奖励、罚金、任务报酬），**不要**直接写 `clan.Gold += x` 或 `clan.Leader.Gold += x`，也不要在计算回调里偷偷改金——应当走 [`GiveGoldAction.ApplyBetweenCharacters`](../GiveGoldAction) 或 [`GiveGoldAction.Apply`](../GiveGoldAction)。Daily tick 正是这么做的：先用 `applyWithdrawals: true` 让模型把各蓄水池清零兑现，再拿净结果交给 `GiveGoldAction.ApplyBetweenCharacters(null, clan.Leader, net)` 真正入账。把 `clan.Gold += x` 塞进纯计算调用会让同一笔钱被重复结算，并绕过通知与 `OnClanEarnedGoldFromTribute` 等事件。

本版本（v1.3.15）默认实现**没有**公开的 `IncomeSources` / `Expenses` 枚举来分类每一行。收入资产类别只在 `OnPlayerEarnedGoldFromAsset` 的事件参数里以 `DefaultClanFinanceModel.AssetIncomeType`（枚举值 `Workshop`、`Caravan`、`Taxes`、`TributesEarned`）暴露；支出侧只有私有的 `TransactionType`（Income/Both/Expense）用于内部记账。替换模型时，分类口径由你自己决定，但要保证 `CalculateClanGoldChange` 的净结果与收入、支出两边一致。

### 生命周期与注册

`Campaign.Current.Models.ClanFinanceModel` 持有当前实例。默认实例 `DefaultClanFinanceModel` 由游戏启动器在战役初始化阶段通过 `IGameStarter.AddModel` 注册；自定义模型必须在每日经济 tick 开始查询之前完成注册。标题界面、模块加载早期或没有活动战役时，`Campaign.Current` 可能为 `null`，不能在静态字段初始化或菜单构造函数里无条件读取它——所有调用前都应先判空。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供活动战役与 `Models` 注册表，以及 `Campaign.Current.Models` 下的兄弟模型（`SettlementTaxModel`、`WorkshopModel`、`CaravanModel`、`PartyMoraleModel`、`AlleyModel`）。 |
| [`Clan`](../../campaign/Clan) | 提供 `Fiefs`、`Gold`、`Tier`、`DebtToKingdom`、`IsUnderMercenaryService`、`Kingdom`、各 `WarPartyComponent` 与雇佣状态。 |
| [`Town`](../../campaign/Town) | 提供 `TradeTaxAccumulated`、 buildings、总督 Perk 与 `Villages`，是城镇税/关税/项目收入的数据源。 |
| [`Village`](../../campaign/Village) | 提供 `TradeTaxAccumulated`、`VillageState`，是村庄收入的平滑来源。 |
| [`Hero`](../../campaign/Hero) | 提供名人（`Notable`）每日金变化所需的 `OwnedCaravans`、`OwnedWorkshops`、`OwnedAlleys`。 |
| [`MobileParty`](../../campaign/MobileParty) | 提供队伍 `PartyTradeGold`、`TotalWage`、`IsLordParty/IsGarrison/IsCaravan` 等，用于商队与队伍工资。 |
| [`Workshop`](../../campaign/Workshop) | 提供 `ProfitMade` 与 `Capital`，用于作坊日收入与玩家作坊亏损。 |
| [`ExplainedNumber`](../ExplainedNumber) | 承载收入/支出/净额结果以及可选的因素说明行。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`Clan`](../../campaign/Clan) | 每日 tick 用 `CalculateClanGoldChange(..., applyWithdrawals: true)` 结算各蓄水池，再用 `GiveGoldAction` 把净额入账到 `clan.Leader`。 |
| [`Settlement`](../../campaign/Settlement) | 城镇/村庄税收与项目收入最终落在所属的 `Settlement`/`Town` 上，UI 的家族财政面板读取本模型做预览。 |
| [`GiveGoldAction`](../GiveGoldAction) | 真正的家族金转移走它，而不是 `clan.Gold += x`。 |
| [`PartyWageModel`](../PartyWageModel) | 相邻规则模型；本模型在算队伍工资时委托 `PartyWageModel` 计算 `TotalWage`，二者不能互相隐式触发世界变更。 |
| [`CharacterDevelopmentModel`](../CharacterDevelopmentModel) | 默认实现里多处读取 Perk（`Trade.SpringOfGold`、`Steward.GivingHands` 等）作为收入因素。 |

### Action、事件与存档边界

- **应用路径改的是可存档蓄水池**：`applyWithdrawals: true` 会改写 `Town.TradeTaxAccumulated`、`Village.TradeTaxAccumulated`、`MobileParty.PartyTradeGold`、各王国钱包与 `Clan.DebtToKingdom`。这些字段都在存档中，因此自定义模型在相同战役状态下必须保持确定性——否则重载后每日结算会不一致，表现为坏档或反复扣钱。
- **派生事件**：玩家资产收入经 `CampaignEventDispatcher.Instance.OnPlayerEarnedGoldFromAsset(AssetIncomeType, amount)` 与 `OnClanEarnedGoldFromTribute(clan, faction)` 派发；`AssetIncomeType` 是默认实现内公开的事件分类枚举（`Workshop`/`Caravan`/`Taxes`/`TributesEarned`）。
- **模型本身不派发经济事件之外的副作用**，但 `applyWithdrawals: true` 内部会调用 `SkillLevelingManager.OnTradeProfitMade`、`Clan.AddRenown` 与 `PartyMoraleModel.GetDailyNoWageMoralePenalty`（欠薪降士气），这些属于 tick 内部合法世界变更，不要在你的预览调用里误触发。

## 风险与调试

1. **战役尚未存在：** `Campaign.Current` 在标题界面和模块加载早期为 `null`；延迟到战役启动钩子再取模型，所有调用前先判空。
2. **混用预览与应用：** 同一蓄水池先以 `applyWithdrawals: true` 结算（已清零 `TradeTaxAccumulated`），又在 UI 或别处再以 `applyWithdrawals: true` 重复结算一次，会双重扣钱/双重入账。预览一律 `applyWithdrawals: false`。
3. **直接写 `clan.Gold`：** 在叙事或任务代码里绕过 `GiveGoldAction` 直接改 `Gold`，会跳过通知、`OnClanEarnedGoldFromTribute` 等事件并破坏净额的权威来源；应只通过模型算数 + `GiveGoldAction`。
4. **在纯计算回调里改世界：** 把招募、传送、`clan.Gold += x` 放进 `Calculate*` 调用会把它从只读查询变成每次 tick 重复执行的副作用，导致经济状况在重载后漂移。
5. **除零/负金保护：** 默认实现在队伍工资上有 `PartyGoldLowerThreshold`（5000）下限与“金不足时不扣到负值、转而计入 `DebtToKingdom`”的逻辑；自定义实现若丢弃这些保护，会让家族金变成负数或 NaN，进而让工资/贡金分摊崩溃。详见 [崩溃与存档边界](../../../architecture/crash-boundaries)。
6. **`RevenueSmoothenFraction` 返回 0：** 它作除数把累计税额转成日额；若替换实现返回 0 会抛除零异常。默认实现返回 `5f`。

## 成员契约

### 总额与阈值

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `PartyGoldLowerThreshold` (int) | 单个队伍贸易金的下限；低于此值时从家族补差。默认实现返回 `5000`。 | 在 `AddPartyExpense` 内判断是否需要从 `clan` 补金；只读取，不改金。 |
| `CalculateClanGoldChange(Clan, includeDescriptions=false, applyWithdrawals=false, includeDetails=false)` | 家族每日净变化 = `CalculateClanIncome` − `CalculateClanExpenses`，返回 `ExplainedNumber`。 | 每日经济 tick 用 `applyWithdrawals: true` 调用并据此入账；预览用 `applyWithdrawals: false`。 |
| `CalculateClanIncome(Clan, ...)` | 累加所有正向来源（城镇税、关税、项目、村庄、商队/队伍、作坊、alley、贡金、王国预算、贸易协定、Perk）。 | UI 财政面板与决策 AI 用 `applyWithdrawals: false` 预览；tick 用 `applyWithdrawals: true` 清零对应蓄水池。 |
| `CalculateClanExpenses(Clan, ...)` | 累加所有负向来源（队伍/驻军工资、雇佣兵与贡金分摊、自动招募、王国预算抽成、债务偿还、玩家作坊亏损、call-to-war 协议）。 | 同 `CalculateClanIncome` 的开关语义。 |

### 城镇与村庄

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `CalculateTownIncomeFromTariffs(Clan, Town, applyWithdrawals=false)` | 城镇关税收入：`TradeTaxAccumulated / RevenueSmoothenFraction()` 再叠加城镇 Perk 与建筑加成。 | `applyWithdrawals: true` 时会 `town.TradeTaxAccumulated -= num`，并对玩家触发 `OnPlayerEarnedGoldFromAsset(Taxes, ...)`。 |
| `CalculateTownIncomeFromProjects(Town)` | 城镇项目（默认建筑 + 总督 `Engineering.ArchitecturalCommisions` Perk + 建筑效果）的日收入，返回 `int`。 | 不参与取款，纯读数。 |
| `CalculateVillageIncome(Clan, Village, applyWithdrawals=false)` | 村庄收入：`TradeTaxAccumulated / RevenueSmoothenFraction()`，按 `LandTax` 政策、总督 `Scouting.ForestKin` / `Steward.Logistician` Perk 修正。 | `applyWithdrawals: true` 时扣减 `village.TradeTaxAccumulated` 并触发玩家税收事件；被劫掠/正被袭击的村庄返回 0。 |

### 名人与资产

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `CalculateNotableDailyGoldChange(Hero, applyWithdrawals)` | 名人（Notable）的每日金变化：`OwnedCaravans` + `OwnedWorkshops` + 当前定居点的 `Alley` 收入，返回 `int`。 | `applyWithdrawals: true` 时扣减商队 `PartyTradeGold`、调用 `Workshop.ChangeGold` 并触发事件。 |
| `CalculateOwnerIncomeFromCaravan(MobileParty)` | 商队所有者收入：`Max(0, PartyTradeGold − 初始贸易金) / RevenueSmoothenFraction()`，返回 `int`。 | 纯读数；取款由 `CalculateHeroIncomeFromAssets` 内部在 `applyWithdrawals: true` 时执行。 |
| `CalculateOwnerIncomeFromWorkshop(Workshop)` | 作坊所有者收入：`Max(0, ProfitMade) / RevenueSmoothenFraction()`，返回 `int`。 | 纯读数；取款由 `CalculateHeroIncomeFromWorkshops` 内部在 `applyWithdrawals: true` 时通过 `Workshop.ChangeGold` 执行。 |

### 平滑与分类

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `RevenueSmoothenFraction()` (float) | 把累计税额平滑成日收入的除法因子；默认实现返回 `5f`。 | 被几乎所有收入/取款方法用作除数；返回 0 会除零崩溃。 |
| `AssetIncomeType`（默认实现内公开枚举） | 玩家资产收入事件的分类：`Workshop` / `Caravan` / `Taxes` / `TributesEarned`。 | 仅用于 `OnPlayerEarnedGoldFromAsset` 的事件参数，不参与计算。 |

## 真实读取路径

以下两段都只查询当前战役中已经注册的模型，且先对 `Campaign.Current` 判空。

UI 预览（家族财政面板，与 `ClanManagementVM` 一致）——这里用默认 `applyWithdrawals: false`，只读取、不拨动任何蓄水池：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party; // 仅为 using；实际取自 Clan

public void PreviewClanFinance(Clan clan)
{
    if (Campaign.Current == null || clan == null)
    {
        return;
    }

    ClanFinanceModel finance = Campaign.Current.Models.ClanFinanceModel;
    int income = (int)finance.CalculateClanIncome(clan, includeDescriptions: true).ResultNumber;
    int expenses = (int)finance.CalculateClanExpenses(clan, includeDescriptions: true).ResultNumber;
    int dailyChange = income - expenses; // 等价于 CalculateClanGoldChange 的净额
    // 仅用于显示；不要在这里把 dailyChange 写回 clan.Gold
}
```

每日经济 tick 的实际应用路径（与 `ClanVariablesCampaignBehavior` 一致）——先让模型以 `applyWithdrawals: true` 把各蓄水池清零兑现，再拿净额交给 `GiveGoldAction` 真正入账，而不是 `clan.Gold += net`：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public void ApplyDailyClanFinance(Clan clan)
{
    if (Campaign.Current == null || clan == null)
    {
        return;
    }

    // applyWithdrawals: true → 模型内部清零 TradeTaxAccumulated / PartyTradeGold / 王国钱包 / DebtToKingdom
    int net = TaleWorlds.Library.MathF.Round(
        Campaign.Current.Models.ClanFinanceModel
            .CalculateClanGoldChange(clan, includeDescriptions: false, applyWithdrawals: true)
            .ResultNumber);

    // 真正的家族金转移走 Action，绝不写 clan.Gold += net
    GiveGoldAction.ApplyBetweenCharacters(null, clan.Leader, net, disableNotification: true);
}
```

## 版本与导航

v1.3.15 的 `ClanFinanceModel` 接口与默认实现即上述签名；核心成员在 v1.4.5 中保持同名同参。替换默认实现时优先委托 vanilla 模型再加自己的有界因素，以保证 `CalculateClanGoldChange` 的净结果与收入、支出两侧一致，并保留 `PartyGoldLowerThreshold` 与 `RevenueSmoothenFraction` 的防负金保护。

- [队伍模型目录](../models/)
- [父级：Campaign 扩展 API](../)
- [↔ PartyWageModel](../PartyWageModel)
- [↔ CharacterDevelopmentModel](../CharacterDevelopmentModel)
- [GiveGoldAction](../GiveGoldAction)
- [ExplainedNumber](../ExplainedNumber)
- [Clan](../../campaign/Clan)
- [Town](../../campaign/Town)
- [Village](../../campaign/Village)
- [崩溃与存档边界](../../../architecture/crash-boundaries)
