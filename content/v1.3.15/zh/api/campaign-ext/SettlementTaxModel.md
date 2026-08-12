---
title: "SettlementTaxModel"
description: "决定城镇每日税收、村庄市场收入税与交易佣金比例的可替换据点规则模型；它只算“该收多少”，本身不移动金币。"
---
# SettlementTaxModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class SettlementTaxModel : MBGameModel<SettlementTaxModel>`  
**基类:** `MBGameModel<SettlementTaxModel>`  
**源文件路径:** `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.ComponentInterfaces\SettlementTaxModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem.GameComponents.DefaultSettlementTaxModel`

## 一句话职责

它回答“这个据点今天该向所有者收多少税、一次交易所抽的佣金比例是多少”，返回带可选解释的数值；它不直接给 `Clan` 或 `Town` 增加金币，也不写 `TradeTaxAccumulated`。所有读取它的人——家族财政、交易行为、村庄贸易——拿到的是“应该收多少”的规则结果，因此自定义实现影响的是所有消费者，而不是某一个 UI 数字。

## 心智模型

这是每日经济结算前在据点层运行的规则。家族财政在每日 tick 里通过 `ClanFinanceModel` 读取 `CalculateTownTax(fief).ResultNumber`，把结果计入所有者 `Clan` 的金库；玩家在城镇/村庄卖出物品时，`SellItemsAction` 先向模型要城镇/村庄税率，再按安全度调整佣金，最后把金额写进 `Town.TradeTaxAccumulated`；村庄商队回家结算时，`VillagerCampaignBehavior` 用 `CalculateVillageTaxFromIncome(village, marketIncome)` 把市场收入转为税额写进 `Village.TradeTaxAccumulated`。模型是“该收多少”的纯规则层，真正的金币移动由下游行为/Action 完成。

税收并非只看繁荣：默认实现 `DefaultSettlementTaxModel` 还会叠加王国政策（如 `CrownDuty`、`Magistrates`、`Bailiffs`、`Cantons`、`CouncilOfTheCommons`）、总督 Perk、文化特性（`KhuzaitDecreasedTaxFeat`）、任务效果，以及来自 [`SettlementSecurityModel`](../SettlementSecurityModel) 与 [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) 的安全/忠诚增减。替换税收模型时，这些阈值与解释项仍由其他模型提供，单改税率而忽略它们会让解释面板与实际税收不一致。

### 生命周期与注册

`Campaign.Current.Models` 持有当前实例。默认实例 `DefaultSettlementTaxModel` 由游戏启动器在战役初始化时通过 `IGameStarter.AddModel` 注册；自定义模型也必须在战役系统开始任何经济 tick 前完成注册。标题界面、模块加载早期或没有活动战役时，`Campaign.Current` 为 `null`，不能在静态字段初始化或菜单构造函数里无条件读取它。模型按 `MBGameModel<SettlementTaxModel>` 注册，因此通过 `Campaign.Current.Models.SettlementTaxModel` 或 `Campaign.Current.Models.GetModel<SettlementTaxModel>()` 取到的都是同一个已注册实例。

## 何时用 / 何时不要用

**用**：当你需要读出某城镇/村庄“今天的税”或“某笔交易的佣金比例”，或者想在保持所有消费者一致的前提下整体调高/调低税率与佣金。

**不要用**：在模型回调里写 `ChangeGold`、`GiveGoldAction`，或修改 `TradeTaxAccumulated`、`Settlement.Gold`——金币转移必须由行为/Roster API/Action 完成，放进计算回调会把只读查询变成每次 tick 都重复执行的副作用；也不要在交易执行期间 `new` 一个临时模型实例，或在每日结算之外手动重复调用 `CalculateTownTax` 再把结果叠加，那会重复收税、凭空造金币。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供活动战役与 `Models` 注册表；模型实例从 `Campaign.Current.Models.SettlementTaxModel` 取得。 |
| [`Town`](../../campaign/Town) | 提供繁荣、安全、忠诚、所属王国政策、建筑、总督与文化的全部输入；`CalculateTownTax`/`GetTownTaxRatio` 只读它。 |
| [`Village`](../../campaign/Village) | 提供市场收入与所属家族政策；`CalculateVillageTaxFromIncome`/`GetVillageTaxRatio` 的输入。 |
| [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) | 默认实现按忠诚阈值对税收做增益或腐化扣减。 |
| [`SettlementSecurityModel`](../SettlementSecurityModel) | 默认实现按安全阈值对税收做增益或腐化扣减。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`ClanFinanceModel`](../ClanFinanceModel) | 家族每日财政在 `CalculateTownTax(fief).ResultNumber` 上累加城镇税收。 |
| [`SellItemsAction`](../SellItemsAction) | 交易时读取城镇/村庄税率，按安全度修正佣金后写回 `Town.TradeTaxAccumulated`。 |
| [`VillagerCampaignBehavior`](../VillagerCampaignBehavior) | 村庄商队结算时把市场收入经 `CalculateVillageTaxFromIncome` 转为税额写回 `Village.TradeTaxAccumulated`。 |
| [`DefaultSettlementTaxModel`](../DefaultSettlementTaxModel) | 默认实现；自定义模型应委托它再追加有界因素。 |

### Action、事件与存档边界

模型返回的是“应税额”，`CalculateTownTax` 的结果本身不入存档字段、也不派发事件；真正的金币移动发生在下游 Action/行为里，那些写操作才进入 `Clan`/`Settlement` 的存档。自定义模型应在相同输入下保持确定性，避免税收结果与重放的战役 tick 不一致。

## 成员契约

### 配置类常量

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `SettlementCommissionRateTown` | 城镇交易佣金的基础比例，默认实现为 `0.7f`。 | 展示或计算交易佣金时读取；只读常量，不改变当前税收。 |
| `SettlementCommissionRateVillage` | 村庄交易佣金的基础比例，默认实现为 `1f`。 | 同上。 |
| `SettlementCommissionDecreaseSecurityThreshold` | 安全度低于该值后佣金进入安全度修正，默认 `75`。 | `GetTownCommissionChangeBasedOnSecurity` 的比较基准；只读。 |
| `MaximumDecreaseBasedOnSecuritySecurity` | 安全度导致的最大佣金降幅（百分比），默认 `10`。 | 安全度修正的上限；只读。 |

### 计算类

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `GetTownTaxRatio(Town town)` | 返回城镇实际税率 = 基础佣金比例 ×（王国含 `CrownDuty` 政策时 +5%）。 | 交易 Action 计算城镇佣金时调用；只读。 |
| `GetVillageTaxRatio(Village village)` | 返回村庄实际税率，默认实现在基础比例上因 `LandGrantsForVeteran` 政策 −5%。 | 交易/收入 Action 调用；只读。 |
| `GetTownCommissionChangeBasedOnSecurity(Town town, float commission)` | 当 `Town.Security` 低于阈值时，按缺口线性削减已算出的佣金。 | 交易 Action 在算出基础佣金后调用；只读，不写 `TradeTaxAccumulated`。 |
| `CalculateTownTax(Town town, bool includeDescriptions = false)` | 汇总繁荣、政策、Perk、文化、任务、安全、忠诚与建筑，返回 `ExplainedNumber`。 | 家族每日财政 tick 调用；只读，结果需由下游写回 `Clan` 金库。 |
| `CalculateVillageTaxFromIncome(Village village, int marketIncome)` | 把村庄市场收入（整数）按村庄税率转为整数税额。 | 村庄商队结算时调用；只读。 |

默认实现 `CalculateTownTax` 的可观察因子包括：基础税 ≈ 繁荣 × 0.35，再叠加 `CouncilOfTheCommons` 政策 −5%、`Magistrates`/`Bailiffs`/`TribunesOfThePeople` 各 −5%×原始税、`Cantons` −10%×原始税、`KhuzaitDecreasedTaxFeat` 文化减成、总督 `Logistician`/`PriceOfLoyalty`/`DesertBorn` 与 `Bow.QuickDraw` Perk、以及安全/忠诚阈值带来的增益或腐化；最终 `Clamp(0f, float.MaxValue)`。

## 真实读取路径

下面两段只查询当前战役中已经注册的模型，顺序与 `ClanFinanceModel` 和 `SellItemsAction` 一致：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public ExplainedNumber ExplainTownTax(Town town)
{
    if (Campaign.Current == null || town == null)
    {
        return new ExplainedNumber(0f);
    }

    SettlementTaxModel model = Campaign.Current.Models.SettlementTaxModel;
    return model.CalculateTownTax(town, includeDescriptions: true);
}

public float CommissionForSale(Town town, float saleValue)
{
    SettlementTaxModel model = Campaign.Current.Models.GetModel<SettlementTaxModel>();
    float baseCommission = saleValue * model.GetTownTaxRatio(town);
    return model.GetTownCommissionChangeBasedOnSecurity(town, baseCommission);
}
```

第一段等价于家族财政用于显示的每日税收解释；第二段复刻了 `SellItemsAction` 里“先按城镇税率算佣金、再按安全度修正”的顺序。普通 UI 应直接读 `Clan` 已结算的金库，不要自己再把税款乘一遍。

## 替换模型时的安全做法

如果只想增加一个有限修正，保留原模型作为 delegate，并让所有入口仍然成对委托：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public sealed class ModSettlementTaxModel : SettlementTaxModel
{
    private readonly SettlementTaxModel _vanilla;

    public ModSettlementTaxModel(SettlementTaxModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override float SettlementCommissionRateTown => _vanilla.SettlementCommissionRateTown;
    public override float SettlementCommissionRateVillage => _vanilla.SettlementCommissionRateVillage;
    public override int SettlementCommissionDecreaseSecurityThreshold => _vanilla.SettlementCommissionDecreaseSecurityThreshold;
    public override int MaximumDecreaseBasedOnSecuritySecurity => _vanilla.MaximumDecreaseBasedOnSecuritySecurity;

    public override float GetTownTaxRatio(Town town) => _vanilla.GetTownTaxRatio(town);
    public override float GetVillageTaxRatio(Village village) => _vanilla.GetVillageTaxRatio(village);

    public override float GetTownCommissionChangeBasedOnSecurity(Town town, float commission)
        => _vanilla.GetTownCommissionChangeBasedOnSecurity(town, commission);

    public override ExplainedNumber CalculateTownTax(Town town, bool includeDescriptions = false)
    {
        ExplainedNumber result = _vanilla.CalculateTownTax(town, includeDescriptions);
        result.AddFactor(0.05f, new TextObject("Mod: trade boom"));
        return result;
    }

    public override int CalculateVillageTaxFromIncome(Village village, int marketIncome)
        => _vanilla.CalculateVillageTaxFromIncome(village, marketIncome);
}
```

实际注册时应在 `CampaignGameStarter` 的模型注册阶段保存 vanilla delegate；不要在模型已经替换后再次通过 `Campaign.Current.Models.SettlementTaxModel` 查找自己，否则会递归。若要让替换覆盖政策、Perk 与文化规则，优先委托当前版本默认模型，再加自己的有界因素。

## 风险与调试顺序

1. **战役尚未存在：** `Campaign.Current` 在标题界面和早期模块加载阶段为空；延迟到战役启动钩子再取模型。
2. **重复收税：** `CalculateTownTax` 是每日税收结果，不是已写入金库的余额；重复应用会造金币。
3. **单位混用：** `GetTownCommissionChangeBasedOnSecurity` 的输入是已算出的佣金（不是交易总价），把总价直接传进去会造成双重税收或负佣金。
4. **查询中改世界：** 金币转移必须走 `ChangeGold`/`GiveGoldAction` 或对应 Action，不能放进计算回调。
5. **阈值不同步：** 安全/忠诚增益与腐化来自其他模型，单改税率会让解释面板与实际税收不一致。

## 版本与导航

抽象契约在 v1.3.0、v1.3.15 与 v1.4.5 中完全一致（9 个成员、签名相同）；差异集中在默认实现 `DefaultSettlementTaxModel` 的政策/Perk/文化因子与 `CalculateDailyTax` 的系数。跨版本替换模型应委托目标版本默认实现，再追加自己的有界因素，而不是把旧版本公式复制到新版本。

- ↑ 父级：[Campaign 扩展 API](../)
- ↔ 同级：[SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementSecurityModel](../SettlementSecurityModel) · [PartySpeedModel](../PartySpeedModel) · [PartyWageModel](../PartyWageModel) · [ClanFinanceModel](../ClanFinanceModel)
- 相关类：[Town](../../campaign/Town) · [Village](../../campaign/Village) · [Campaign](../../campaign/Campaign) · [DefaultSettlementTaxModel](../DefaultSettlementTaxModel) · [SellItemsAction](../SellItemsAction) · [VillagerCampaignBehavior](../VillagerCampaignBehavior)
