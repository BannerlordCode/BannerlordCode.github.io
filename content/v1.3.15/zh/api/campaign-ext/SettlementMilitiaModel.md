---
title: "SettlementMilitiaModel"
description: "计算聚落每日民兵增减、围城后补员数量、老兵生成概率与近战/远程兵种配比的可替换战役策略，不负责把民兵写入聚落的驻防队伍。"
---

# SettlementMilitiaModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementMilitiaModel : MBGameModel<SettlementMilitiaModel>`  
**Base:** `MBGameModel<SettlementMilitiaModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementMilitiaModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementMilitiaModel.cs`

## 一句话职责

`SettlementMilitiaModel` 把一座聚落（城镇、城堡、村庄）当前的民兵存量、繁荣度、炉灶数、忠诚度与叛乱状态，换算成「明天民兵会涨多少、围城后补多少、新兵里老兵占多少、近战远程各占多少」这一组可被战役系统直接消费的预测值。

## 心智模型

这是战役（Campaign）层在每日结算前调用的一组只读策略。`Settlement.Militia` 是保存在聚落上的真实状态（存于存档），而本 Model 是无状态的纯计算：它读取状态后给出「下一步应该朝哪个方向变化」，由聚落每日行为（settlement daily behavior）把结果写回 `Settlement.Militia`，再由防御、劫掠与叛乱系统读取。

```text
聚落状态(Militia / Town.Prosperity / Village.Hearth / Town.Loyalty)
   + 治安 / 政策 / 建筑 / 总督 Perk / 文化特性
        -> Campaign.Current.Models.SettlementMilitiaModel
        -> CalculateMilitiaChange / MilitiaToSpawnAfterSiege
           / CalculateVeteranMilitiaSpawnChance / CalculateMilitiaSpawnRate
        -> 聚落每日行为把变化写回 Settlement.Militia
        -> 防御战、劫掠结算、叛乱评估读取民兵强度
```

民兵增长强度主要从繁荣度（`Town.Prosperity / 1000`）与炉灶数（`Village.Hearth / 400`）得出；同时有随存量衰减的「退役」项（`-Militia * 0.025`）。当城镇处于叛乱状态（`Town.InRebelliousState`）时，会再调用 `SettlementLoyaltyModel` 的 `RebelliousStateStartLoyaltyThreshold` 与 `MilitiaBoostPercentage` 把低忠诚换算成额外民兵加成——这就是民兵与忠诚/治安模型耦合的地方。要改变「规则」就替换 Model；要直接改变某座聚落的民兵数量请用官方流程或行为，不要在本 Model 的回调里写 `Settlement.Militia`。

### 注册与调用者

实例由 `Campaign.Current.Models` 持有，默认类型是 `DefaultSettlementMilitiaModel`。聚落每日行为在战役时钟推进时调用 `CalculateMilitiaChange` 与 `CalculateMilitiaSpawnRate`；围城结束事件调用 `MilitiaToSpawnAfterSiege`；招募/防御生成民兵时调用 `CalculateVeteranMilitiaSpawnChance` 决定新兵是否为老兵。`includeDescriptions` 只控制是否附带可显示的因子说明（`TextObject`），不改变数值。

## 何时用 / 何时不要用

- **用**：你想要全局改写民兵规则——例如让村庄长得更快、让围城后补员更可预测、调整近战/远程比例、增加老兵概率。继承本类并在 `OnGameInitializationFinished` 中替换 `Campaign.Current.Models.SettlementMilitiaModel` 即可。
- **用**：在 UI 面板里预览「这座城明天民兵会怎么变」时，调用 `CalculateMilitiaChange(settlement, includeDescriptions: true)` 读取 `ExplainedNumber`。
- **不要用**：直接对 `Settlement.Militia` 赋值或调用任何世界变更 Action 来改变某座聚落的民兵数——那会绕过每日行为的一致性校验，并可能被后续 tick 覆盖或造成坏档。要改状态请用官方聚落流程/行为。
- **不要用**：在 `Calculate*` 方法内部触发 `ChangeOwnerOfSettlementAction`、`StartBattleAction` 等副作用，否则预览路径会真实改变世界（在 UI 里反复预览就反复触发）。
- **不要用**：在预览或解释路径里调用 `MilitiaToSpawnAfterSiege`，因为它内部使用 `MBRandom.RandomInt` 产生随机数，每次调用结果都不同，且消耗随机状态。它只应在真实的围城结算事件中被调用一次。

## 依赖图

### 上游（输入来源 / 被读取的模型）

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 持有活动战役与 `Models` 注册表；跨模型引用通过 `Campaign.Current.Models` 解析。 |
| [`Settlement`](../../campaign/Settlement) | 提供 `Militia` 存量、是否为城镇/城堡/村庄，以及 `Town`/`Village` 上下文。 |
| [`Town`](../../campaign/Town) | 提供 `Prosperity`、`Loyalty`、`InRebelliousState`、`Governor`、`SoldItems` 与建筑效果。 |
| [`Village`](../../campaign/Village) | 提供 `Hearth` 与 `TradeBound`（取关联城镇总督用于老兵概率）。 |
| [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) | 在叛乱状态计算民兵加成时读取其 `RebelliousStateStartLoyaltyThreshold` 与 `MilitiaBoostPercentage`。 |
| [`SettlementSecurityModel`](../SettlementSecurityModel) | 共享城镇治安状态；治安通过忠诚间接影响民兵，三者在同一每日结算链上。 |

### 下游（消费结果 / 被驱动的系统）

| Type | Relation |
| --- | --- |
| [`Settlement`](../../campaign/Settlement) | 聚落每日行为把 `CalculateMilitiaChange` 的结果写回 `Settlement.Militia`（保存状态）。 |
| [`MobileParty`](../../campaign/MobileParty) | 防御战/劫掠中生成的民兵以 `MobileParty` 形式参战，配比来自 `CalculateMilitiaSpawnRate`。 |
| `DefaultSettlementLoyaltyModel` | 读取民兵阈值与叛乱效果，民兵与忠诚/治安形成双向耦合。 |
| `IssueModel` | `CalculateMilitiaChange` 通过 `IssueModel.GetIssueEffectsOfSettlement(DefaultIssueEffects.SettlementMilitia, ...)` 读取任务对民兵的影响。 |

## 风险

1. **`Campaign.Current` 为空**：在标题界面、模块早期或 `OnGameInitializationFinished` 之前访问 `Campaign.Current.Models` 会抛空引用。所有读取都应先判空。
2. **跨模型空替换**：`CalculateMilitiaChange` 内部在叛乱时直接读取 `Campaign.Current.Models.SettlementLoyaltyModel.*`，`GetSettlementMilitiaChangeDueToIssues` 读取 `Campaign.Current.Models.IssueModel`。若你替换了 `SettlementMilitiaModel` 却让 `SettlementLoyaltyModel` 或 `IssueModel` 为 `null`，计算会在运行时崩溃。
3. **在纯计算里改状态**：任何 `Calculate*` 方法都应是只读的。务必不要把数值写回 `Settlement.Militia`、不要调用 Action。`MilitiaToSpawnAfterSiege` 是唯一带副作用（消耗随机数）的方法，且只应在围城结算事件中使用。
4. **NaN / 负数**：结果可为负（退役衰减项），但聚落行为负责夹紧到合法区间；你的重写若返回 NaN 或极端值，会污染每日行为与防御强度估算。
5. **坏档风险**：`Settlement.Militia` 是保存状态，本模型无状态。不要把 `SaveableField`/`SaveableProperty` 加到替换后的 Model 上，否则新旧存档字段不一致会导致坏档。
6. **随机可预测性**：`MilitiaToSpawnAfterSiege` 返回 `2 * (45 + MBRandom.RandomInt(10))`（90–109）。若想在 mod 里让补员可预测，应重写为固定值，而不是在预览里重复调用。

## 成员（按主题）

### 每日变化

| Member | Purpose | Timing | Side effect |
| --- | --- | --- | --- |
| `CalculateMilitiaChange(Settlement, bool includeDescriptions = false)` | 返回可解释的每日民兵增减（基础值、退役、繁荣、炉灶、市场、政策、Perk、建筑、任务）。 | 聚落每日行为、UI 预览 | 只读；`includeDescriptions` 仅决定是否带 `TextObject` 说明。 |

默认实现的因子：城镇基础 +2、村庄基础 +0.5；退役 `-Militia*0.025`；村庄 `Hearth/400`；城镇/城堡 `Prosperity/1000`（叛乱时叠加低忠诚加成）；城镇市场售出的 `BonusToMilitia` 物品每项 +0.2；政策 `Serfdom -1`、`Cantons +1`、`Citizenship +1`；建筑 `Militia`/`MilitiaReduction`；总督多项 Perk；巴丹文化特性。

### 围城后补员

| Member | Purpose | Timing | Side effect |
| --- | --- | --- | --- |
| `MilitiaToSpawnAfterSiege(Town town)` | 返回围城结束后立即生成的民兵数量。 | 围城结束事件（一次性） | 调用 `MBRandom.RandomInt`，消耗随机状态，结果不可预测。 |

### 老兵与新兵配比

| Member | Purpose | Timing | Side effect |
| --- | --- | --- | --- |
| `CalculateVeteranMilitiaSpawnChance(Settlement)` | 返回新生成民兵为老兵的概率加成（总督 Perk、文化特性、建筑、政策）。 | 民兵生成时 | 只读。 |
| `CalculateMilitiaSpawnRate(Settlement, out float meleeTroopRate, out float rangedTroopRate)` | 通过 `out` 参数给出近战/远程兵种配比（默认 0.5 / 0.5）。 | 民兵生成时 | 仅写 `out` 参数，不改世界。 |

## 示例

### 示例 1：在面板里解释某座聚落明天的民兵变化

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public ExplainedNumber ExplainMilitiaChange(Settlement settlement)
{
    if (Campaign.Current == null || settlement == null)
    {
        return new ExplainedNumber(0f);
    }
    return Campaign.Current.Models.SettlementMilitiaModel
        .CalculateMilitiaChange(settlement, includeDescriptions: true);
}
```

返回的 `ExplainedNumber.ResultNumber` 只用于显示或接入你自己的平衡逻辑；不要把它写回 `Settlement.Militia`，那由聚落每日行为负责。

### 示例 2：替换默认模型以改写民兵规则（保留原版作为回退）

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public class MyMilitiaModel : SettlementMilitiaModel
{
    private readonly SettlementMilitiaModel _vanilla;

    public MyMilitiaModel(SettlementMilitiaModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override int MilitiaToSpawnAfterSiege(Town town)
    {
        // 围城后固定补员 60，避免使用随机数以保证可预测
        return 60;
    }

    public override ExplainedNumber CalculateMilitiaChange(Settlement settlement, bool includeDescriptions = false)
    {
        ExplainedNumber result = _vanilla.CalculateMilitiaChange(settlement, includeDescriptions);
        if (settlement.IsVillage)
        {
            result.Add(1f, new TextObject("我的村庄民兵加成"));
        }
        return result;
    }

    public override ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement)
    {
        return _vanilla.CalculateVeteranMilitiaSpawnChance(settlement);
    }

    public override void CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)
    {
        meleeTroopRate = 0.4f;
        rangedTroopRate = 1f - meleeTroopRate;
    }
}
```

在 SubModule 中安装（先保存原版，再包一层）：

```csharp
protected override void OnGameInitializationFinished(Game game)
{
    base.OnGameInitializationFinished(game);
    if (Campaign.Current != null)
    {
        SettlementMilitiaModel vanilla = Campaign.Current.Models.SettlementMilitiaModel;
        Campaign.Current.Models.SettlementMilitiaModel = new MyMilitiaModel(vanilla);
    }
}
```

> 版本说明：v1.3.15 与 v1.4.5 的 `SettlementMilitiaModel` 接口及 `DefaultSettlementMilitiaModel` 实现在民兵规则上完全一致；两版差异仅在于 `TextObject` 构造参数与调用风格，对 mod 语义无影响。

## 导航

- ↑ [Campaign-ext 模型目录](../)
- ↔ [SettlementLoyaltyModel](../SettlementLoyaltyModel)
- ↔ [SettlementSecurityModel](../SettlementSecurityModel)
- ↔ [SettlementProsperityModel](../SettlementProsperityModel)
- [Settlement](../../campaign/Settlement)
- [Town](../../campaign/Town)
- [Village](../../campaign/Village)
- [Campaign](../../campaign/Campaign)
- [MobileParty](../../campaign/MobileParty)
