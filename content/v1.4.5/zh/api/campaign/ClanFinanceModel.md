---
title: "ClanFinanceModel"
description: "计算家族（Clan）每日净资金变化、收入与支出明细、城镇关税/工程/村庄收益、要人（notable）日收益，以及商队与工坊归属者收益的规则模型；由 Campaign 在启动时通过 Campaign.Current.Models.ClanFinanceModel 解析，被家族财务面板、HUD 信息条和 ClanVariablesCampaignBehavior 在每日结算时调用，applyWithdrawals 为真时还会真实改动世界状态。"
---

# ClanFinanceModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class ClanFinanceModel : MBGameModel<ClanFinanceModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ClanFinanceModel.cs

## 概述

该模型集中裁决“一个家族每天赚多少、花多少”：它把城镇贸易税、关税、工程收入、村庄收益、商队与工坊利润、佣兵俸禄、王国预算、贡金、贸易协定与宣战募资等全部归并成家族每日的 `ExplainedNumber` 收入/支出明细，并给出要人的净日收益，以及单个商队/工坊归属者可抽取的金额。它本身只做纯计算，但 `applyWithdrawals` 为真时会直接扣减 `Town.TradeTaxAccumulated`、`PartyTradeGold`、各王国钱包与家族债务——真正的“写账”由 [ClanVariablesCampaignBehavior](../ClanVariablesCampaignBehavior) 在每日结算时以 `applyWithdrawals: true` 调用触发。

## 心智模型

ClanFinanceModel 是一个纯粹的财务计算扩展点：`Campaign` 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出 `DefaultClanFinanceModel` 唯一实例并缓存，运行时统一用 `Campaign.Current.Models.ClanFinanceModel` 取得；它不参与存档序列化，也不在每个 tick 被重新构造。每日结算时，[ClanVariablesCampaignBehavior](../ClanVariablesCampaignBehavior) 以 `applyWithdrawals: true` 调用 `CalculateClanGoldChange`，把返回净额取整后真正写入 `Clan.Gold`、扣减 `TradeTaxAccumulated` 并触发 `OnPlayerEarnedGoldFromAsset` 等事件；而家族财务面板（`ClanManagementVM` 的兄弟 VM）、HUD 信息条的 `MapInfoVM` 则以 `applyWithdrawals: false` 只读地展示明细。要改经济规则就继承并注册一个替换实现；但请记住：模型不等于“记账动作”，真正落账的副作用只在 `applyWithdrawals: true` 时由调用方发起——如果你只想预览数字，务必传 `false`，否则会意外扣掉积累的贸易税。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“某家族每日资金如何变化 / 城镇关税和工程能产多少 / 某商队工坊归属者抽成多少 / 要人日收益”时，读取 `Campaign.Current.Models.ClanFinanceModel` 的返回值，或提供一个新的派生类覆盖抽象成员并通过子模块注册替换默认实现。
- **不要使用**：不要只看 `CalculateClanGoldChange` 的返回值就以为钱已经到账——只有 `applyWithdrawals: true` 才会真改 `Clan.Gold` 与 `TradeTaxAccumulated`；预览时务必传 `false`。不要亲自去给 `Clan.Gold`、`Town.TradeTaxAccumulated` 或 `MobileParty.PartyTradeGold` 赋值来“调账”，真正的写入路径是模型在 `applyWithdrawals` 下完成、并由 [ClanVariablesCampaignBehavior](../ClanVariablesCampaignBehavior) 驱动；不要用 `RevenueSmoothenFraction()` 之外的魔法数字去换算累计税款，否则会与界面显示脱节。只替换模型、却让行为按旧假设处理钱包/债务，会出现“预测一致但账本不动”或反过来的错位。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<ClanFinanceModel>()` 解析并缓存实例。
- [Clan](../Clan) —— 几乎所有方法的主体参数；其 `Gold`、`Fiefs`、`Influence`、`DebtToKingdom`、`MercenaryAwardMultiplier` 等被读、被写。
- [Kingdom](../Kingdom) —— `RulingClan`、政策、`MercenaryWallet`/`TributeWallet`/`CallToWarWallet`/`KingdomBudgetWallet` 参与分成与扣款。
- [Settlement](../Settlement) / [Town](../Town) / [Village](../Village) —— 城镇贸易税、工程与村庄收益的来源；`Town.TradeTaxAccumulated` 是关税的累计池。
- [Hero](../Hero) —— 要人/领主日收益（`CalculateNotableDailyGoldChange`）与商队、工坊所有者。
- [MobileParty](../MobileParty) —— 商队与队伍的交易金（`PartyTradeGold`、`TotalWage`）是收入与军饷的计算基础。
- [Workshop](../Workshop) —— `ProfitMade`、`Capital`、`Expense` 参与工坊收益与玩家工坊维护费。
- [ExplainedNumber](../ExplainedNumber) —— `CalculateClanGoldChange`/`CalculateClanIncome`/`CalculateClanExpenses`/`CalculateTownIncomeFromTariffs` 的返回类型，携带带说明项的数值。

下游与协同系统（真实调用方）：

- [ClanVariablesCampaignBehavior](../ClanVariablesCampaignBehavior) —— 每日结算时以 `applyWithdrawals: true` 调用 `CalculateClanGoldChange` 与 `CalculateNotableDailyGoldChange`，把净额真正写入家族金库与要人账户。
- 家族财务面板（`ClanManagementVM` 等 VM）—— 调用 `CalculateClanIncome(_clan).ResultNumber` 与 `CalculateClanExpenses(_clan).ResultNumber` 展示收支；其 `ClanFinanceTownItemVM`、`ClanFinanceWorkshopItemVM` 用 `RevenueSmoothenFraction()` 折算累计税/利润。
- `MapInfoVM`（HUD 信息条）—— 以 `includeDescriptions: true, includeDetails: true` 调用 `CalculateClanGoldChange(Clan.PlayerClan, …)` 渲染玩家家族净变化明细。
- `ClanPartyItemVM` / `ClanPartiesVM` —— 调用 `CalculateOwnerIncomeFromCaravan` 与读取 `PartyGoldLowerThreshold` 显示队伍日收益与交易金下限。
- [GarrisonPartyComponent](../GarrisonPartyComponent) —— 初始化队伍贸易时以 `PartyGoldLowerThreshold` 调用 `InitializePartyTrade`。
- [VillageGoodProductionCampaignBehavior](../VillageGoodProductionCampaignBehavior) —— 用 `RevenueSmoothenFraction()` 把村庄产出折算进 `TradeTaxAccumulated`。
- `AchievementsCampaignBehavior`（剧情模块）—— 调用 `CalculateClanIncome(Clan.PlayerClan, false, false, false)` 评估成就进度。

相关模型簇：

- [SettlementTaxModel](../SettlementTaxModel) —— `CalculateTownIncomeFromTariffs`/`AddSettlementIncome` 内部调用其 `CalculateTownTax`。
- [CaravanModel](../CaravanModel) —— `CalculateOwnerIncomeFromCaravan` 用其 `GetInitialTradeGold` 确定商队本金。
- [AlleyModel](../AlleyModel) —— 玩家家族巷道日收益经其 `GetDailyIncomeOfAlley` 累加。
- [PartyMoraleModel](../PartyMoraleModel) —— 发不出军饷时经其 `GetDailyNoWageMoralePenalty` 施加士气惩罚。
- [WorkshopModel](../WorkshopModel) —— `AddPlayerExpenseForWorkshops` 读取其 `CapitalLowLimit` 判断工坊是否需维护费。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 上述各行为均继承自它，是实际驱动记账的调用者。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.ClanFinanceModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **误用 `applyWithdrawals` 真正改账**：`CalculateClanGoldChange`、`CalculateTownIncomeFromTariffs`、`CalculateVillageIncome`、`CalculateOwnerIncomeFromCaravan/Workshop`、`CalculateNotableDailyGoldChange` 在 `applyWithdrawals: true` 时会扣减 `TradeTaxAccumulated`、`PartyTradeGold`、`Kingdom.*Wallet`、`Clan.DebtToKingdom`，并触发 `OnPlayerEarnedGoldFromAsset` 等事件。在只读 UI 或调试里误传 `true` 会悄然抽干累计税、造成账面损失。预览一律传 `false`。
- **只替换模型不改写入路径**：派生类改了收入公式，但真正把净额写入 `Clan.Gold` 的是 [ClanVariablesCampaignBehavior](../ClanVariablesCampaignBehavior)（以 `applyWithdrawals: true` 调用）。只替换模型、却让行为按旧阈值（如 `PartyGoldLowerThreshold`、军饷门槛常量）处理钱包，会出现预测与实到账不符、或欠饷导致士气惩罚异常。
- **`RevenueSmoothenFraction()` 是累计税→日收入的唯一换算系数**：默认返回 `5f`，所有 `TradeTaxAccumulated` 的折算都除以它。若你覆盖了它却没同步 [SettlementTaxModel](../SettlementTaxModel)、[VillageGoodProductionCampaignBehavior](../VillageGoodProductionCampaignBehavior) 等同样依赖该系数的调用方，会让累计税与界面显示、实际入账脱节。
- **`PartyGoldLowerThreshold` 影响队伍交易金下限与补差**：UI（`ClanPartiesVM` 等）、[GarrisonPartyComponent](../GarrisonPartyComponent) 初始化、[CompanionRolesCampaignBehavior](../CompanionRolesCampaignBehavior) 与 `PartyScreenHelper`/`FactionHelper` 都读取它。覆盖它却未考虑队伍补充逻辑，会出现队伍交易金被错误兜底或断流。

## 成员说明

### 家族总账

- **`CalculateClanGoldChange(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`**
  - 用途：返回该家族每日净资金变化（`ExplainedNumber`），即“收入合计 − 支出合计”。内部依次汇总城镇/村庄/商队/工坊/佣兵/贡金/贸易协定/宣战募资/王国预算等收入，并扣除军饷、雇佣兵、贡金支出、自动募兵、王国预算贡献、债务与工坊维护。已消灭家族（`IsEliminated`）直接返回 0。
  - 副作用：当 `applyWithdrawals: true` 时，会真改 `Clan.Gold`、`Town.TradeTaxAccumulated`、`MobileParty.PartyTradeGold`、各王国钱包与 `Clan.DebtToKingdom`，并触发 `OnPlayerEarnedGoldFromAsset` / `OnClanEarnedGoldFromTribute` 等事件；`false` 时仅计算。
  - 调用时机：[ClanVariablesCampaignBehavior](../ClanVariablesCampaignBehavior) 每日以 `applyWithdrawals: true` 调用并取整入账；`MapInfoVM` 以 `includeDescriptions: true, includeDetails: true, applyWithdrawals: false` 渲染 HUD 明细。

- **`CalculateClanIncome(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`**
  - 用途：仅返回收入侧的 `ExplainedNumber`：统治家族政策收入（LandTax/WarTax/CrownDuty/RoadTolls/StateMonopolies/DebasementOfTheCurrency）、城镇税+关税+工程+村庄、佣兵影响力俸禄、队伍/商队利润、领袖与同伴工坊、玩家巷道、贡金、贸易协定、宣战募资、王国预算，以及 `Trade.SpringOfGold`  perk 加成。
  - 副作用：与 `CalculateClanGoldChange` 一致——`applyWithdrawals: true` 会真实扣减累计税/钱包并触发事件。
  - 调用时机：`ClanManagementVM` 财务面板展示总收入；`AchievementsCampaignBehavior` 评估成就进度（传全 `false`）。

- **`CalculateClanExpenses(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`**
  - 用途：仅返回支出侧的 `ExplainedNumber`：领袖与主队军饷、各领主/同伴队伍与驻军军饷、雇佣兵与贡金分摊、自动募兵费用、富家族的王国预算贡献、对王国的债务偿还、玩家工坊维护费、宣战募资分摊。
  - 副作用：同上，`applyWithdrawals: true` 时真实扣款并可能累积 `DebtToKingdom`（资金不足时）。
  - 调用时机：`ClanManagementVM` 财务面板展示总支出。

### 城镇与村庄收益

- **`CalculateTownIncomeFromTariffs(Clan clan, Town town, bool applyWithdrawals = false)`**
  - 用途：返回该城镇的关税/贸易税日收入（`ExplainedNumber`）= `town.TradeTaxAccumulated / RevenueSmoothenFraction()`（默认 ÷5），再叠加 `Trade.ContentTrades`、`Crossbow.Steady`、`Roguery.SaltTheEarth`、`Steward.GivingHands` 等总督 perk 与建筑的 `TariffIncome` 效果。
  - 副作用：`applyWithdrawals: true` 时从 `town.TradeTaxAccumulated` 扣减已入账部分；若 `clan == Clan.PlayerClan` 还会触发 `OnPlayerEarnedGoldFromAsset(AssetIncomeType.Taxes, …)`。
  - 调用时机：`AddSettlementIncome` 在汇总家族城镇收入时调用；也由 UI 的 `ClanFinanceTownItemVM` 间接使用其换算系数。

- **`CalculateTownIncomeFromProjects(Town town)`**
  - 用途：返回该城镇当日来自工程（projects）的固定收入（`int`）：若 `CurrentDefaultBuilding` 与具备 `Engineering.ArchitecturalCommisions` perk 的总督存在则加其 `SecondaryBonus`，再加上建筑 `DenarByBoundVillageHeartPerDay` 效果。
  - 副作用：无，纯计算。
  - 调用时机：`AddSettlementIncome` 在遍历家族 `Fiefs` 时调用，计入城镇收入明细。

- **`CalculateVillageIncome(Clan clan, Village village, bool applyWithdrawals = false)`**
  - 用途：返回该村庄日收入（`int`）= `village.TradeTaxAccumulated / RevenueSmoothenFraction()`；若家族非统治家族且王国启用 `LandTax` 则扣 5%；若绑定城镇总督具备 `Scouting.ForestKin` / `Steward.Logistician` 则按比例加成；被洗劫或正被劫掠的村庄返回 0。
  - 副作用：`applyWithdrawals: true` 时从 `village.TradeTaxAccumulated` 扣减；若 `clan == Clan.PlayerClan` 触发 `OnPlayerEarnedGoldFromAsset(AssetIncomeType.Taxes, …)`。
  - 调用时机：`AddSettlementIncome` 在遍历城镇下属村庄时调用。

### 要人与资产归属者收益

- **`CalculateNotableDailyGoldChange(Hero hero, bool applyWithdrawals)`**
  - 用途：返回某个要人（notable）当日净收益（`int`）：其名下商队利润（`CalculateOwnerIncomeFromCaravan`）、工坊利润（`CalculateOwnerIncomeFromWorkshop`）以及当前定居点中由他拥有的巷道（每巷 +30）。
  - 副作用：经 `CalculateHeroIncomeFromAssets` 转发——`applyWithdrawals: true` 时会从 `MobileParty.PartyTradeGold` / `Workshop` 扣减利润、提升 `SkillLevelingManager.OnTradeProfitMade`，玩家工坊还会触发 `OnPlayerEarnedGoldFromAsset(AssetIncomeType.Workshop, …)`。
  - 调用时机：[ClanVariablesCampaignBehavior](../ClanVariablesCampaignBehavior) 每日以 `applyWithdrawals: true` 调用，把要人日收益写入其账户。

- **`CalculateOwnerIncomeFromCaravan(MobileParty caravan)`**
  - 用途：返回商队归属者可抽取的日收益（`int`）= `Max(0, caravan.PartyTradeGold − CaravanModel.GetInitialTradeGold(owner, …)) / RevenueSmoothenFraction()`，即“超出本金的交易盈利”按平滑系数折算。
  - 副作用：无（纯计算；真正的扣减发生在调用方）。
  - 调用时机：`CalculateHeroIncomeFromAssets` 与生产 VM `ClanPartyItemVM` 计算商队日收益时调用。

- **`CalculateOwnerIncomeFromWorkshop(Workshop workshop)`**
  - 用途：返回工坊归属者可抽取的日收益（`int`）= `Max(0, workshop.ProfitMade) / RevenueSmoothenFraction()`。
  - 副作用：无（纯计算）。
  - 调用时机：`CalculateHeroIncomeFromWorkshops` 与生产 VM `ClanFinanceWorkshopItemVM` 计算工坊日收益时调用。

### 平滑系数与下限

- **`RevenueSmoothenFraction()`**（返回 `float`）
  - 用途：累计贸易税/利润折算成“每日收入”的除数，默认实现返回 `5f`。所有关税、村庄、商队、工坊、佣兵俸禄的日收益都除以它来平滑波动。
  - 副作用：无，纯查询。
  - 调用时机：贯穿全部收入方法，以及 `VillageGoodProductionCampaignBehavior` 写入 `TradeTaxAccumulated`、UI 折算均依赖它。

- **`PartyGoldLowerThreshold`**（属性，返回 `int`）
  - 用途：队伍 `PartyTradeGold` 的保底下限，默认实现返回 `5000`。当发给军饷后交易金低于此值，模型会把差额补回（除非玩家家族或在特定军饷豁免下）；也用于初始化队伍贸易本金下限。
  - 副作用：无，纯查询；真正的补差在 `AddPartyExpense` 的 `applyWithdrawals` 分支完成。
  - 调用时机：[GarrisonPartyComponent](../GarrisonPartyComponent) 初始化、`ClanPartiesVM`、`ClanPartyItemVM`、`CompanionRolesCampaignBehavior`、`PartyScreenHelper`、`FactionHelper` 与 UI 多处读取。

## 示例

预览玩家家族今天的净资金变化（只读，不写账）：

```csharp
ExplainedNumber goldChange = Campaign.Current.Models.ClanFinanceModel
    .CalculateClanGoldChange(Clan.PlayerClan, includeDescriptions: true, applyWithdrawals: false, includeDetails: true);
int netDaily = (int)goldChange.ResultNumber;
```

查询一座城镇今日的关税收入与某工坊归属者抽成：

```csharp
ExplainedNumber tariff = Campaign.Current.Models.ClanFinanceModel
    .CalculateTownIncomeFromTariffs(clan, town, applyWithdrawals: false);
int workshopCut = Campaign.Current.Models.ClanFinanceModel
    .CalculateOwnerIncomeFromWorkshop(ownedWorkshop);
```

读取平滑系数用于把累计贸易税折算成日收入：

```csharp
float smooth = Campaign.Current.Models.ClanFinanceModel.RevenueSmoothenFraction();
int dailyTax = (int)((float)town.TradeTaxAccumulated / smooth);
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [Clan](../Clan) · [Kingdom](../Kingdom) · [Settlement](../Settlement) · [Town](../Town) · [Village](../Village) · [Hero](../Hero) · [MobileParty](../MobileParty) · [Workshop](../Workshop) · [ExplainedNumber](../ExplainedNumber) · [ClanVariablesCampaignBehavior](../ClanVariablesCampaignBehavior) · [SettlementTaxModel](../SettlementTaxModel) · [CaravanModel](../CaravanModel) · [AlleyModel](../AlleyModel) · [PartyMoraleModel](../PartyMoraleModel) · [WorkshopModel](../WorkshopModel) · [GarrisonPartyComponent](../GarrisonPartyComponent) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [DefaultClanFinanceModel](../DefaultClanFinanceModel)
