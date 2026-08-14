---
title: "SettlementSecurityModel"
description: "把城镇驻军、帮派、繁荣、政策、建筑与附近战斗换算成每日治安变化的只读规则模型，并提供高/低治安对税收、名人关系与权力的阈值与修正。"
---
# SettlementSecurityModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class SettlementSecurityModel : MBGameModel<SettlementSecurityModel>`  
**基类:** `MBGameModel<SettlementSecurityModel>`  
**源文件路径:** `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.ComponentInterfaces\SettlementSecurityModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem.GameComponents.DefaultSettlementSecurityModel`

## 一句话职责

它回答“这座城镇今天的治安会怎样变化”，并把附近被劫掠、击败土匪、清除窝点等战斗结果折算成治安增减；它只计算、不修改 `Town.Security`，也不派发事件或存档。税收、忠诚、繁荣和名人系统把它的阈值与修正当成共享规则，因此替换实现影响的是所有读取者，而不是某一个面板数字。

## 心智模型

这是地图每日 tick 之前读取的“治安规则层”。`Town.SecurityChange` 与 `Town.SecurityChangeExplanation` 在属性被访问时直接调用本模型；`Town.DailyTick` 再把 `SecurityChange` 累加到 `Town.Security`。计算链是：

```text
Town（驻军 / 帮派 / 繁荣 / 建筑 / 政策 / 总督 / 问题 / Perk / 治安漂移）
   + 附近战斗结果（劫掠村庄、击败土匪、清除窝点、被围）
        -> Campaign.Current.Models.SettlementSecurityModel
        -> CalculateSecurityChange / GetLootedNearbyPartySecurityEffect / GetNearbyBanditPartyDefeatedSecurityEffect
        -> TownSecurityCampaignBehavior 把战斗结果写回 Town.Security
        -> 税收 / 忠诚 / 繁荣 / 名人关系与权力 在各自 tick 再读取阈值
```

使用这个模型，是为了改变“治安如何被算出来”这条规则。如果你要直接改治安值、记录一次劫掠，或调整税收，应使用 `Town.Security += ...`、对应的 `CampaignBehavior`、`*Action`，或下游的 `SettlementTaxModel` / `SettlementLoyaltyModel`；不要在模型的计算回调里写 `Security`、派发事件或修改其他世界状态，那会把一个只读查询变成每个 tick 都重复的副作用。`includeDescriptions` 只控制 `ExplainedNumber` 是否记录因素说明，不应改变数值。

### 生命周期与注册

`Campaign.Current.Models` 持有当前实例。默认实例是 `DefaultSettlementSecurityModel`，游戏通过 `CampaignGameStarter` 在战役初始化时注册；自定义模型也必须在战役系统开始查询前完成注册。标题界面、模块加载早期或没有活动战役时，`Campaign.Current` 可能为 `null`，不能在静态字段初始化或菜单构造函数里无条件读取它。`MBGameModel` 子类通过 `Campaign.Current.Models.GetModel<SettlementSecurityModel>()` 也能取到同一实例。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供活动战役与 `Models` 注册表，以及 `EstimatedAverageBanditPartySpeed`、`MapDistanceModel` 等相邻查询。 |
| [`Town`](../../campaign/Town) | 提供驻军、帮派、繁荣、建筑、政策、总督、问题、Perk 上下文与 `Security` 当前值。 |
| [`Settlement`](../../campaign/Settlement) | 提供所属村庄、是否被围、窝点距离与位置。 |
| [`MapEvent`](../../campaign/MapEvent) | 在战斗结算时提供附近队伍强度与胜负的 `DefeatedSide` 强度之和。 |
| [`Clan`](../../campaign/Clan) | 提供城镇所属家族与王国，用于读取王国政策。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`Town`](../../campaign/Town) | 暴露 `SecurityChange` / `SecurityChangeExplanation` 并在 `DailyTick` 累加到 `Security`。 |
| [`SettlementTaxModel`](../SettlementTaxModel) | 读取 `ThresholdForTaxBoost` / `ThresholdForTaxCorruption` 等阈值，调用 `CalculateGoldGainDueToHighSecurity` / `CalculateGoldCutDueToLowSecurity`。 |
| [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) | 在忠诚公式中消费治安阈值与漂移中点。 |
| [`SettlementProsperityModel`](../SettlementProsperityModel) | 把治安作为繁荣输入之一。 |
| [`CharacterRelationCampaignBehavior`](../CharacterRelationCampaignBehavior) | 读取治安阈值，对附近名人施加每日关系与权力增减。 |
| [`TownSecurityCampaignBehavior`](../TownSecurityCampaignBehavior) | 消费 `MapEventSecurityEffectRadius` / `HideoutClearedSecurityEffectRadius` 等，把战斗结果写回 `Town.Security`。 |

### 行动、事件与存档边界

模型结果本身没有存档字段，也不派发事件。合法的治安变化走 `Town.DailyTick` 与 `TownSecurityCampaignBehavior`；自定义模型应在相同输入下保持确定性，避免治安缓存与重放的战役 tick 不一致。`Town.Security` 才被存档，替换模型时不要给自己加需要存档的状态字段。

## 成员契约

### 配置类（阈值与半径）

这些都是只读属性，默认实现在 `DefaultSettlementSecurityModel` 中给出常量；替换模型返回的值会同时被税收、忠诚、繁荣与名人系统当作阈值使用。

| 成员 | 默认实现 | 用途与调用时机 | 副作用 |
| --- | --- | --- | --- |
| `MaximumSecurityInSettlement` | `100` | `Town.Security` 的上限；UI 与日常夹紧用。 | 无；仅返回常量。 |
| `SecurityDriftMedium` | `50` | 治安漂移的中点：高于它治安向中点回落，低于它回升。 | 无。 |
| `MapEventSecurityEffectRadius` | `50f` | 附近 `MapEvent` 影响城镇治安的半径（用于距离平方比较）。 | 无。 |
| `HideoutClearedSecurityEffectRadius` | `100f` | 清除窝点后提升周边城镇治安的半径。 | 无。 |
| `HideoutClearedSecurityGain` | `6` | 清除窝点时对半径内每个城镇一次性增加的治安。 | 无；由 `TownSecurityCampaignBehavior` 写入。 |
| `ThresholdForTaxCorruption` | `50` | 治安低于此值开始产生税收腐败惩罚。 | 无。 |
| `ThresholdForHigherTaxCorruption` | `0` | 高于此值且低于腐败阈值时仍计低治安税收削减。 | 无。 |
| `ThresholdForTaxBoost` | `75` | 治安达到此值触发高治安税收加成。 | 无。 |
| `SettlementTaxBoostPercentage` | `5` | 高治安税收加成的百分点。 | 无。 |
| `SettlementTaxPenaltyPercentage` | `10` | 低治安税收惩罚的百分点。 | 无。 |
| `ThresholdForNotableRelationBonus` | `75` | 治安高于此值对附近名人施加关系增益。 | 无。 |
| `ThresholdForNotableRelationPenalty` | `50` | 治安低于此值对附近名人施加关系惩罚。 | 无。 |
| `DailyNotableRelationBonus` | `1` | 高于阈值时名人每日关系增量。 | 无。 |
| `DailyNotableRelationPenalty` | `-1` | 低于阈值时名人每日关系减量。 | 无。 |
| `DailyNotablePowerBonus` | `1` | 高于阈值时名人每日权力增量。 | 无。 |
| `DailyNotablePowerPenalty` | `-1` | 低于阈值时名人每日权力减量。 | 无。 |

### 计算类

| 成员 | 用途与调用时机 | 副作用 |
| --- | --- | --- |
| `CalculateSecurityChange(Town town, bool includeDescriptions = false)` | 汇总驻军、帮派、繁荣、建筑、政策、总督、问题、Perk、漂移等因素，返回当日治安变化 `ExplainedNumber`。被 `Town.SecurityChange` / `SecurityChangeExplanation` 与城镇管理 UI 在预览时调用。 | 无；纯计算。 |
| `GetLootedNearbyPartySecurityEffect(Town town, float sumOfAttackedPartyStrengths)` | 把附近被劫掠队伍的累计强度折算为负面治安效果（负数）。`TownSecurityCampaignBehavior` 在 `MapEvent` 结算、且胜方含土匪、败方含平民派系时调用。 | 无；返回数值，由行为写回 `Town.Security`。 |
| `GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)` | 把附近被击败土匪队伍的累计强度折算为正面治安效果。行为在 `MapEvent` 涉及土匪派系时调用。 | 无；返回数值，由行为写回。 |
| `CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber)` | 在 `Town.Security >= ThresholdForTaxBoost` 时，向税收 `ExplainedNumber` 追加高治安加成（`SettlementTaxModel` 调用）。 | 通过 `ref` 追加因素，不修改治安本身。 |
| `CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber)` | 在治安处于低区间时，向税收 `ExplainedNumber` 追加腐败/惩罚削减（`SettlementTaxModel` 调用）。 | 通过 `ref` 追加因素，不修改治安本身。 |

默认实现的可观察因素包括：繁荣越高治安越低（上限 -5）；被围 -3；绑定的村庄被劫掠 -2；附近有活跃窝点 -2；驻军充足 +3、不足 -3；`Bailiffs` / `Serfdom` / `Magistrates` 政策 +1、`TrialByJury` -0.2；治安相对 `SecurityDriftMedium` 的线性漂移；以及建筑、巡逻队、总督、问题、Perk 的修正。

## 真实读取路径

以下代码只查询当前战役中已经注册的模型，与 `Town.SecurityChangeExplanation` 的取值路径一致：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public ExplainedNumber ExplainSecurity(Town town)
{
    if (Campaign.Current == null || town == null)
    {
        return new ExplainedNumber(0f);
    }

    SettlementSecurityModel model = Campaign.Current.Models.SettlementSecurityModel;
    return model.CalculateSecurityChange(town, includeDescriptions: true);
}
```

这段结果适合调试浮窗或城镇管理预览；普通逻辑应读取 `town.SecurityChange`，不要自己再把漂移乘一遍。

战斗结果折算与税收修正也走同一个模型实例：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

void ApplyNearbyRaidEffect(Town town, float defeatedStrength)
{
    SettlementSecurityModel model = Campaign.Current.Models.GetModel<SettlementSecurityModel>();
    float effect = model.GetLootedNearbyPartySecurityEffect(town, defeatedStrength);
    if (effect != 0f)
    {
        town.Security += effect;
    }
}

ExplainedNumber CalculateTownTax(Town town)
{
    SettlementSecurityModel model = Campaign.Current.Models.SettlementSecurityModel;
    ExplainedNumber tax = new ExplainedNumber(0f, includeDescriptions: true);
    if (town.Security >= (float)model.ThresholdForTaxBoost)
    {
        model.CalculateGoldGainDueToHighSecurity(town, ref tax);
    }
    else if (town.Security >= (float)model.ThresholdForHigherTaxCorruption
             && town.Security < (float)model.ThresholdForTaxCorruption)
    {
        model.CalculateGoldCutDueToLowSecurity(town, ref tax);
    }
    return tax;
}
```

`town.Security += effect` 与税收分支都镜像真实源码（`TownSecurityCampaignBehavior` 写回治安、`DefaultSettlementTaxModel` 读阈值）。注意：修改 `Town.Security` 应放在行为或 Action 中，模型自身只负责计算。

## 替换模型时的安全做法

如果只想增加一个有界修正，保留原模型作为 delegate，并让所有公开成员都成对委托：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public sealed class ModSettlementSecurityModel : SettlementSecurityModel
{
    private readonly SettlementSecurityModel _vanilla;

    public ModSettlementSecurityModel(SettlementSecurityModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override int MaximumSecurityInSettlement => _vanilla.MaximumSecurityInSettlement;
    public override int SecurityDriftMedium => _vanilla.SecurityDriftMedium;
    public override float MapEventSecurityEffectRadius => _vanilla.MapEventSecurityEffectRadius;
    public override float HideoutClearedSecurityEffectRadius => _vanilla.HideoutClearedSecurityEffectRadius;
    public override int HideoutClearedSecurityGain => _vanilla.HideoutClearedSecurityGain;
    public override int ThresholdForTaxCorruption => _vanilla.ThresholdForTaxCorruption;
    public override int ThresholdForHigherTaxCorruption => _vanilla.ThresholdForHigherTaxCorruption;
    public override int ThresholdForTaxBoost => _vanilla.ThresholdForTaxBoost;
    public override int SettlementTaxBoostPercentage => _vanilla.SettlementTaxBoostPercentage;
    public override int SettlementTaxPenaltyPercentage => _vanilla.SettlementTaxPenaltyPercentage;
    public override int ThresholdForNotableRelationBonus => _vanilla.ThresholdForNotableRelationBonus;
    public override int ThresholdForNotableRelationPenalty => _vanilla.ThresholdForNotableRelationPenalty;
    public override int DailyNotableRelationBonus => _vanilla.DailyNotableRelationBonus;
    public override int DailyNotableRelationPenalty => _vanilla.DailyNotableRelationPenalty;
    public override int DailyNotablePowerBonus => _vanilla.DailyNotablePowerBonus;
    public override int DailyNotablePowerPenalty => _vanilla.DailyNotablePowerPenalty;

    public override ExplainedNumber CalculateSecurityChange(Town town, bool includeDescriptions = false)
    {
        ExplainedNumber result = _vanilla.CalculateSecurityChange(town, includeDescriptions);
        result.AddFactor(0.05f, new TextObject("Mod: patrol bonus"));
        return result;
    }

    public override float GetLootedNearbyPartySecurityEffect(Town town, float sumOfAttackedPartyStrengths)
    {
        return _vanilla.GetLootedNearbyPartySecurityEffect(town, sumOfAttackedPartyStrengths);
    }

    public override float GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)
    {
        return _vanilla.GetNearbyBanditPartyDefeatedSecurityEffect(town, sumOfAttackedPartyStrengths);
    }

    public override void CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber)
    {
        _vanilla.CalculateGoldGainDueToHighSecurity(town, ref explainedNumber);
    }

    public override void CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber)
    {
        _vanilla.CalculateGoldCutDueToLowSecurity(town, ref explainedNumber);
    }
}
```

实际注册时应在 `CampaignGameStarter` 的模型注册阶段保存 vanilla delegate；不要在模型已经替换后再次通过 `Campaign.Current.Models.SettlementSecurityModel` 查找自己，否则会递归。若要让替换同时覆盖税收、忠诚与名人阈值，优先委托当前版本默认模型，再加自己的有界因素。

## 风险与调试顺序

1. **战役尚未存在:** `Campaign.Current` 在标题界面和早期模块加载阶段为空；延迟到战役启动钩子再获取模型。
2. **阈值被同步消费:** 治安阈值同时被税收、忠诚、繁荣与名人系统读取；只改治安公式而不同步检查这些下游模型，会出现“治安高却税收低”之类的不一致。
3. **无界结果:** 自定义 `CalculateSecurityChange` 返回过大或 NaN，会让治安漂移与每日 tick 失控；注意 `MaximumSecurityInSettlement` 上限由 `Town` 夹紧，模型不应自行跳过。
4. **查询中修改世界:** 招募、逃兵、传送、金币转移必须在行为、Roster API 或 Action 中执行，不能放进计算回调或 `ref` 税收方法。
5. **陈旧预览:** UI 预览读取的是当前 `Town` 状态算出的瞬时值；合法改变驻军/村庄状态后，要让城镇每日 tick 重算，不要缓存旧的 `SecurityChange`。
6. **战斗与每日变化混淆:** 附近战斗效果（`GetLootedNearbyPartySecurityEffect` 等）与每日 `CalculateSecurityChange` 是不同输入，前者由 `TownSecurityCampaignBehavior` 一次性写回，后者由 `DailyTick` 累加，不要相互替代。

## 版本与导航

`SettlementSecurityModel` 的公开接口在 v1.3.0、v1.3.15 与 v1.4.5 三版中签名完全一致（16 个只读属性 + 5 个计算方法，参数与返回类型均未变）；差异只存在于 `DefaultSettlementSecurityModel` 的内部因素实现。跨版本替换模型时委托当前版本 vanilla 实现，而不是把旧公式复制到新版。

- [队伍与定居点模型目录](../models/)
- [父级：Campaign 扩展 API](../)
- [↔ SettlementLoyaltyModel](../SettlementLoyaltyModel)
- [↔ SettlementProsperityModel](../SettlementProsperityModel)
- [↔ SettlementMilitiaModel](../SettlementMilitiaModel)
- [↔ SettlementTaxModel](../SettlementTaxModel)
- [↔ SettlementFoodModel](../SettlementFoodModel)
- [Town](../../campaign/Town)
- [Settlement](../../campaign/Settlement)
- [MapEvent](../../campaign/MapEvent)
- [CharacterRelationCampaignBehavior](../CharacterRelationCampaignBehavior)
- [TownSecurityCampaignBehavior](../TownSecurityCampaignBehavior)
- [战役系统指南](../../../guide/campaign-system)
