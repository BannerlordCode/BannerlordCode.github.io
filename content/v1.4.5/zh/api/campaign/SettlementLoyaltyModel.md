---
title: "SettlementLoyaltyModel"
description: "v1.4.5 中计算城镇忠诚度变化、税收阈值和叛乱相关规则的战役模型。"
---
# SettlementLoyaltyModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public abstract class SettlementLoyaltyModel : MBGameModel<SettlementLoyaltyModel>`  
**基类：** `MBGameModel<SettlementLoyaltyModel>`  
**源码：** `TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementLoyaltyModel.cs`  
**版本：** 本页描述 v1.4.5。

## 一句话职责

它解释一个 `Town` 当前每天应增加或减少多少忠诚度，并提供高/低忠诚对经济和叛乱阈值的规则输入。它只读取当前据点的粮食、治安、文化、政策和其他修正，返回可解释的计算结果；每日 Behavior 负责把结果应用到世界状态。

## 心智模型

这是一个由 [GameModels](../GameModels) 注册的只读规则端口，不是 `Town.Loyalty` 的存储器，也不是给城镇加忠诚度的 Action。默认 `DefaultSettlementLoyaltyModel` 会把忠诚漂移、粮食、治安、总督文化、领主文化、政策、项目、问题和 notable 关系合成为 `ExplainedNumber`。`Town.LoyaltyChange` 和 `LoyaltyChangeExplanation` 通过当前 Campaign 的模型读取这些结果。

模型的阈值还会被其他系统使用：繁荣/税收模型读取高低忠诚阈值，`RebellionsCampaignBehavior` 读取叛乱阈值，民兵模型读取忠诚造成的增益。模型给出规则输入；它不执行 tick、不设置 `Town.Loyalty`，也不决定何时转移城镇所有权。

## 何时使用，何时不要使用

当 mod 要解释当前城镇的忠诚变化、显示忠诚的经济阈值，或在 Campaign 初始化时替换忠诚规则时使用。要观察当前值和解释，优先从 live `Settlement.Town` 访问模型结果。

不要把 `CalculateLoyaltyChange` 的结果直接写入 `Town.Loyalty`。不要因为结果为负就直接设置 `InRebelliousState` 或调用所有权 Action；原版 Behavior 负责按天处理漂移、叛乱和后续事件。若要改变所有权，应使用匹配原因的 [ChangeOwnerOfSettlementAction](../../campaign-ext/ChangeOwnerOfSettlementAction) 并满足其 owner 流程前置条件。

## 依赖关系

上游是 [Campaign](../Campaign)、[Town](../Town) 和 [Settlement](../Settlement)；Sandbox 在启动阶段加入 `DefaultSettlementLoyaltyModel`。模型与 [SettlementSecurityModel](../SettlementSecurityModel)、[ClanFinanceModel](../ClanFinanceModel)、SettlementTax/Prosperity/ Militia 模型相互提供规则输入。下游包括 `Town.LoyaltyChange`、`RebellionsCampaignBehavior`、每日城镇 Behavior、[CampaignEvents](../CampaignEvents) 和保存的 Town 状态。

## 关键属性与方法

默认 v1.4.5 实现的关键值包括：`MaximumLoyaltyInSettlement = 100`、`LoyaltyDriftMedium = 50`、`SettlementLoyaltyChangeDueToSecurityThreshold = 50`、`ThresholdForTaxBoost = 75`、`ThresholdForTaxCorruption = 50`、`ThresholdForHigherTaxCorruption = 25`、`RebellionStartLoyaltyThreshold = 15`、`RebelliousStateStartLoyaltyThreshold = 25`、`LoyaltyBoostAfterRebellionStartValue = 5`，以及同/异文化的 governor 和 owner 修正。这些是当前规则实现的常量，不是给 `Town` 写值的入口。

### `CalculateLoyaltyChange`

```csharp
public ExplainedNumber CalculateLoyaltyChange(
    Town town,
    bool includeDescriptions = false)
```

默认实现按当前 town 状态计算漂移、饥荒额外惩罚、security、food、governor/owner culture、政策、项目、问题和 notable 关系。`includeDescriptions: true` 让返回值适合诊断 UI；它仍然只是计算。

## 经济修正

`CalculateGoldGainDueToHighLoyalty(Town, ref ExplainedNumber)` 与 `CalculateGoldCutDueToLowLoyalty(Town, ref ExplainedNumber)` 把忠诚阈值的经济效果加入已经存在的 `ExplainedNumber`。它们由税收/经济规则调用，不会独立修改 Town 或 Clan 金币。

## 真实当前 Campaign 示例：解释当前据点的忠诚变化

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public static ExplainedNumber ExplainCurrentTownLoyalty()
{
    Campaign campaign = Campaign.Current;
    MobileParty party = MobileParty.MainParty;
    Settlement settlement = party?.CurrentSettlement;
    Town town = settlement?.Town;
    if (campaign == null || town == null)
        return default;

    SettlementLoyaltyModel model = campaign.Models.SettlementLoyaltyModel;
    return model.CalculateLoyaltyChange(town, includeDescriptions: true);
}
```

示例从主 party 当前真实据点取得 Town，不构造假的 Settlement/Town，也不改 `Loyalty`。如果需要显示历史结果，应在同一 Campaign tick 中记录解释项；读档后重新取得 Town 和模型。

## 直接写入与存档风险

直接把忠诚改成阈值附近的数字会绕过每日解释项、叛乱 Behavior、税收/繁荣联动和可能的事件。只切换 `Town.InRebelliousState` 也会留下忠诚阈值与 rebel owner 流程不一致的状态。替换模型时必须保持非空、可用的返回值和 `ExplainedNumber` 语义；在 Campaign 模型完成注册前读取它可能得到空模型或初始化阶段错误。

## 版本说明

本页以 v1.4.5 的 `SettlementLoyaltyModel` 与 `DefaultSettlementLoyaltyModel` 为准。阈值和文化/政策修正可能随版本变化，mod 不应把这里列出的默认常量当成跨版本稳定协议。

## 导航

- **父级：** [Campaign API](../) · [Models hub](../GameModels)
- **同级：** [SettlementSecurityModel](../SettlementSecurityModel) · [ClanFinanceModel](../ClanFinanceModel) · [VillageTradeModel](../VillageTradeModel)
- **相关实体：** [Settlement](../Settlement) · [Town](../Town) · [Village](../Village) · [Clan](../Clan)
- **相关流程：** [ChangeOwnerOfSettlementAction](../../campaign-ext/ChangeOwnerOfSettlementAction) · [CampaignEvents](../CampaignEvents) · [SaveManager](../../save-system/SaveManager)
