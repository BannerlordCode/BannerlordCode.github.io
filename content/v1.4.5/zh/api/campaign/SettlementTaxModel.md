---
title: "SettlementTaxModel"
description: "计算城镇与村庄每日上缴税款、交易佣金比率及安全度对佣金影响的规则模型，由 Campaign 在运行时通过 Campaign.Current.Models.SettlementTaxModel 解析，被 SellItemsAction、家族财政结算、村镇管理与村庄商队行为调用。"
---

# SettlementTaxModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class SettlementTaxModel : MBGameModel<SettlementTaxModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementTaxModel.cs

## 概述

该模型集中裁决定居点的“钱从哪来、抽走多少”：给定一座城镇（[Town](../Town)）或村庄（[Village](../Village)），它推导出城镇每日税款的详细构成（以 `ExplainedNumber` 形式携带繁荣度、政策、建筑、安全度、忠诚度、议题与总督专长的各项加成/扣减）、村庄的税率、玩家在定居点售货时适用的佣金比率，以及低安全度对佣金的削减。它只做纯计算，不持有任何会被写进存档的世界状态——真正的金币增减发生在 [SellItemsAction](../../campaign-ext/SellItemsAction)、[ClanFinanceModel](../ClanFinanceModel) 与各行为里。

## 心智模型

SettlementTaxModel 是一个纯规则的 Model 型扩展点：`Campaign` 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出 `DefaultSettlementTaxModel` 唯一实例并缓存，运行时统一用 `Campaign.Current.Models.SettlementTaxModel` 取得；它不参与存档序列化，也不在每个 tick 被重新构造。每日财政结算时，[DefaultClanFinanceModel](../ClanFinanceModel) 遍历封地名册对每个 `Town` 调用 `CalculateTownTax` 把结果累加进家族收入；玩家在城镇/村庄售货时 [SellItemsAction](../../campaign-ext/SellItemsAction) 用 `GetTownTaxRatio` / `GetVillageTaxRatio` 算出佣金基数，再借 `GetTownCommissionChangeBasedOnSecurity` 按安全度打折；村镇管理界面（`TownManagementVM`）、家族财政与定居点列表 VM 则用 `CalculateTownTax(includeDescriptions: true)` 展示拆解后的收入明细。要改税规则就继承并注册一个替换实现；要“执行”收税/扣钱必须走对应的 Action 与家族财政模型，绝不要把模型当成写世界状态的入口或手动给 `Settlement.Gold` 赋值。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“城镇每日税收如何构成 / 村庄税率多少 / 售货佣金怎么算 / 安全度如何削减佣金”的规则时，读取 `Campaign.Current.Models.SettlementTaxModel` 的返回值，或提供一个新的派生类覆盖其抽象成员并通过子模块注册替换默认实现。
- **不要使用**：不要用模型去“收税”——它只会计算，真正把税款加进家族金库、从交易货款里扣佣金的是 [SellItemsAction](../../campaign-ext/SellItemsAction) 与 [ClanFinanceModel](../ClanFinanceModel)。不要亲自给 `Settlement.Gold` 或家族资金赋值了事；也不要把模型返回值当作持久世界状态（它是无状态的纯函数）。在 [Town](../Town)/[Village](../Village)/[Settlement](../Settlement) 之外、未通过 `CalculateTownTax` 去预估某城日收入，会让你的预估界面和实际入账脱节。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<SettlementTaxModel>()` 解析并缓存实例。
- [Town](../Town) / [Village](../Village) / [Settlement](../Settlement) —— 调用方，作为参数传入并承载繁荣度、安全度、忠诚度、建筑等被读取的字段。
- [SettlementSecurityModel](../SettlementSecurityModel) —— `CalculateTownTax` 内部按安全度区间调用其 `CalculateGoldGainDueToHighSecurity` / `CalculateGoldCutDueToLowSecurity`，并读取 `ThresholdForTaxBoost` / `ThresholdForHigherTaxCorruption` / `ThresholdForTaxCorruption`。
- [SettlementLoyaltyModel](../SettlementLoyaltyModel) —— 同属定居点规则模型簇；`CalculateTownTax` 按忠诚度区间调用其 `CalculateGoldGainDueToHighLoyalty` / `CalculateGoldCutDueToLowLoyalty`。
- [IssueModel](../IssueModel) —— `CalculateTownTax` 通过 `GetIssueEffectsOfSettlement(DefaultIssueEffects.SettlementTax, …)` 累加议题对税收的影响。
- [CharacterDevelopmentModel](../CharacterDevelopmentModel) —— `CalculateTownTax` 在 `Steward.PriceOfLoyalty` 加成里读取 `MinSkillRequiredForEpicPerkBonus` 计算总督技能溢出部分。

下游与协同系统（调用方）：

- [SellItemsAction](../../campaign-ext/SellItemsAction) —— 玩家售货时调用 `GetTownTaxRatio` / `GetVillageTaxRatio` 计算佣金基数，再调 `GetTownCommissionChangeBasedOnSecurity` 按安全度打折。
- [ClanFinanceModel](../ClanFinanceModel)（默认实现 `DefaultClanFinanceModel`）—— 家族财政每日结算时对每个封地 `Town` 调 `CalculateTownTax(...).ResultNumber` 累加家族日收入。
- [VillagerCampaignBehavior](../VillagerCampaignBehavior) —— 村庄商队出售货物后调用 `CalculateVillageTaxFromIncome(homeVillage, partyTradeGold)` 计算需缴纳的村庄税。
- `TownManagementVM` / `ClanFinanceTownItemVM` / `ClanSettlementItemVM`（VM 层，无独立页面）—— 分别用 `CalculateTownTax(includeDescriptions: true)`、`.ResultNumber` 展示收入明细与列表数值。
- [Hero](../Hero) —— 当 [Town](../Town) 设有 `Governor` 时，其专长（`Steward.Logistician`、`Steward.PriceOfLoyalty`、`Scouting.DesertBorn`、`Bow.QuickDraw`）被 `CalculateTownTax` 读取并叠加加成。
- [SettlementMilitiaModel](../SettlementMilitiaModel) —— 同属定居点经济规则模型，常一起被派生替换以整体改写定居点财政。
- [ExplainedNumber](../ExplainedNumber) —— `CalculateTownTax` 的返回类型，承载带说明项的税收分解。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.SettlementTaxModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改了税率或佣金公式，但真正扣佣金的是 [SellItemsAction](../../campaign-ext/SellItemsAction)、真正把税款入账的是 [ClanFinanceModel](../ClanFinanceModel)。只替换模型、却让调用方按旧假设处理金额，会出现“界面显示和真实入账不一致”。
- **`GetTownCommissionChangeBasedOnSecurity` 的阈值耦合**：默认实现在 `town.Security < SettlementCommissionDecreaseSecurityThreshold`（75）时按安全度落差线性削减佣金，削减上限受 `MaximumDecreaseBasedOnSecuritySecurity`（10）约束。覆盖这些属性时若把阈值调得极高，会让几乎所有城镇都被判定为“安全不足”而持续打折，无声拖垮玩家售货收益。
- **`CalculateTownTax` 依赖同级模型的安全度/忠诚度阈值**：它直接读取 [SettlementSecurityModel](../SettlementSecurityModel) 与 [SettlementLoyaltyModel](../SettlementLoyaltyModel) 的阈值常量来决定增益还是惩罚区间。若你单独替换了税收模型却保留默认的安全/忠诚模型，或反之，阈值口径不匹配会导致某些城镇税收被错误地加成或扣减。

## 成员说明

### 佣金比率与阈值

- **`SettlementCommissionRateTown`**（属性，`float`）
  - 用途：城镇基础佣金比率。默认 `DefaultSettlementTaxModel` 返回 `0.7f`，作为 `GetTownTaxRatio` 的乘数基线。
  - 副作用：无，纯计算。
  - 调用时机：`GetTownTaxRatio` 内部读取；被玩家在城镇售货的佣金计算间接使用。

- **`SettlementCommissionRateVillage`**（属性，`float`）
  - 用途：村庄基础佣金比率。默认返回 `1f`（全额按税率计），作为 `GetVillageTaxRatio` 的基线。
  - 副作用：无。
  - 调用时机：`GetVillageTaxRatio` 内部读取；被玩家在村庄售货与 `CalculateVillageTaxFromIncome` 间接使用。

- **`SettlementCommissionDecreaseSecurityThreshold`**（属性，`int`）
  - 用途：触发佣金削减的安全度门槛。默认返回 `75`；当 `town.Security` 低于此值时 `GetTownCommissionChangeBasedOnSecurity` 开始打折。
  - 副作用：无。
  - 调用时机：`GetTownCommissionChangeBasedOnSecurity` 内部读取。

- **`MaximumDecreaseBasedOnSecuritySecurity`**（属性，`int`）
  - 用途：安全度不足时对佣金的“最高削减百分点”。默认返回 `10`，经 `MBMath.Map` 把安全度落差映射到 `0~10` 后再乘以 `0.01f` 作为折扣系数。
  - 副作用：无。
  - 调用时机：`GetTownCommissionChangeBasedOnSecurity` 内部读取。

### 税率与佣金计算

- **`GetTownTaxRatio(Town town)`**
  - 用途：返回该城镇售货适用的佣金比率（`SettlementCommissionRateTown` 乘以政策修正，如王国启用 `CrownDuty` 政策再 `+0.05f`）。
  - 副作用：无，纯计算。
  - 调用时机：[SellItemsAction](../../campaign-ext/SellItemsAction) 在玩家于城镇售货时调用，作为佣金基数的乘数。

- **`GetVillageTaxRatio(Village village)`**
  - 用途：返回该村庄售货适用的佣金比率（`SettlementCommissionRateVillage` 减去村庄附庸王国启用 `LandGrantsForVeteran` 政策时的 `0.05f` 折让）。
  - 副作用：无，纯计算。
  - 调用时机：[SellItemsAction](../../campaign-ext/SellItemsAction) 在玩家于村庄售货时调用；`DefaultSettlementTaxModel.CalculateVillageTaxFromIncome` 内部也调它以算出村庄税额。

- **`GetTownCommissionChangeBasedOnSecurity(Town town, float commission)`**
  - 用途：按城镇安全度对佣金做削减。当 `town.Security < SettlementCommissionDecreaseSecurityThreshold` 时，`MBMath.Map` 把安全度落差映射到 `0~MaximumDecreaseBasedOnSecuritySecurity`，再以 `commission -= commission * (落差 * 0.01f)` 打折后返回；否则原样返回。
  - 副作用：无，纯计算。
  - 调用时机：仅由 [SellItemsAction](../../campaign-ext/SellItemsAction) 在城镇售货计算佣金时调用。

### 税款构成

- **`CalculateTownTax(Town town, bool includeDescriptions = false)`**
  - 用途：返回该城镇每日税款的完整分解（`ExplainedNumber`）。基线为 `繁荣度 * 0.35f * 政策修正`（`CouncilOfTheCommons` 政策 `-0.05f`），再依次叠加：`CrownDuty`/政策金库抽成（`Magistrates`/`Bailiffs`/`TribunesOfThePeople` 各 `-0.05f` 原始税、`Cantons` `-0.1f`）、总督 `Steward.Logistician`/`PriceOfLoyalty`、`Bow.QuickDraw`、`Scouting.DesertBorn` 专长、`KhuzaitDecreasedTaxFeat` 文化特性、议题效果（`IssueModel`）、安全度增益/腐败扣减（`SettlementSecurityModel`）、忠诚度增益/腐败扣减（`SettlementLoyaltyModel`）、建筑效果（`BuildingEffectEnum.TaxPerDay`、`DenarByBoundVillageHeartPerDay`），最后 `Clamp(0, +∞)`。传入 `includeDescriptions: true` 可保留各项说明文本。
  - 副作用：无，纯计算；内部会读取 [SettlementSecurityModel](../SettlementSecurityModel)、[SettlementLoyaltyModel](../SettlementLoyaltyModel)、[IssueModel](../IssueModel) 及 [Town](../Town) 的总督/建筑字段。
  - 调用时机：[ClanFinanceModel](../ClanFinanceModel) 每日财政结算对每个封地调用；村镇管理界面与多个家族财政 VM（`TownManagementVM`、`ClanFinanceTownItemVM`、`ClanSettlementItemVM`）在展示/刷新时调用，前者传入 `includeDescriptions: true` 以显示拆解明细。

- **`CalculateVillageTaxFromIncome(Village village, int marketIncome)`**
  - 用途：返回村庄按集市收入应缴的税。`marketIncome == 0` 时直接返回 `0`，否则返回 `(int)(marketIncome * GetVillageTaxRatio(village))`。
  - 副作用：无，纯计算；内部调用 `GetVillageTaxRatio`。
  - 调用时机：仅由 [VillagerCampaignBehavior](../VillagerCampaignBehavior) 在村庄商队出售货物后调用，用 `mobileParty.HomeSettlement.Village` 与该商队携带的 `PartyTradeGold` 计算应缴村庄税。

## 示例

预估某城镇今日入账并展示拆解明细：

```csharp
Town town = Settlement.CurrentSettlement.Town;
ExplainedNumber dailyTax = Campaign.Current.Models.SettlementTaxModel
    .CalculateTownTax(town, includeDescriptions: true);
float goldPerDay = dailyTax.ResultNumber;
```

玩家在城镇售货时计算佣金的完整流程：

```csharp
float ratio = Campaign.Current.Models.SettlementTaxModel
    .GetTownTaxRatio(sellerParty.Settlement.Town);
int commission = MBRandom.RoundRandomized((float)goldFromSale * ratio);
commission = (int)Campaign.Current.Models.SettlementTaxModel
    .GetTownCommissionChangeBasedOnSecurity(sellerParty.Settlement.Town, commission);
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [Town](../Town) · [Village](../Village) · [Settlement](../Settlement) · [SettlementSecurityModel](../SettlementSecurityModel) · [SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementMilitiaModel](../SettlementMilitiaModel) · [IssueModel](../IssueModel) · [CharacterDevelopmentModel](../CharacterDevelopmentModel) · [ClanFinanceModel](../ClanFinanceModel) · [ExplainedNumber](../ExplainedNumber) · [DefaultSettlementTaxModel](../DefaultSettlementTaxModel) · [SellItemsAction](../../campaign-ext/SellItemsAction) · [VillagerCampaignBehavior](../VillagerCampaignBehavior) · [Hero](../Hero)
