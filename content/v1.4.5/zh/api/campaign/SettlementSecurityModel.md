---
title: "SettlementSecurityModel"
description: "v1.4.5 中计算城镇治安变化、税收阈值和周边事件影响的战役模型。"
---
# SettlementSecurityModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public abstract class SettlementSecurityModel : MBGameModel<SettlementSecurityModel>`  
**基类：** `MBGameModel<SettlementSecurityModel>`  
**源码：** `TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementSecurityModel.cs`  
**版本：** 本页描述 v1.4.5。

## 一句话职责

它解释城镇每天的治安变化，并提供围城、劫掠村庄、hideout、驻军、税收和 notable 关系所需的治安规则输入。它读取当前 Town 与周边事件状态并返回带解释项的计算结果；每日 Behavior、raid、hideout 和围城流程决定何时把这些影响写入世界状态。

## 心智模型

`SettlementSecurityModel` 是注册在 [GameModels](../GameModels) 中的规则端口。默认 `DefaultSettlementSecurityModel` 从 live `Town` 和周边状态计算 `ExplainedNumber`，但不拥有 `Town.Security`，也不替调用方写入治安。`Town.SecurityChange` 和 `SecurityChangeExplanation` 是直接的观察入口。

不要把它理解成“设置治安”的服务。模型的 `GetLootedNearbyPartySecurityEffect` 与 `GetNearbyBanditPartyDefeatedSecurityEffect` 只是把事件规模转换成影响值；raid、hideout、围城和每日 Behavior 决定何时把这些影响纳入世界状态。

## 何时使用，何时不要使用

使用它解释当前 Town 的治安漂移、显示 tax/关系阈值，或在 Campaign 初始化时替换治安规则。诊断 UI 应使用 `includeDescriptions: true` 获取带来源的 `ExplainedNumber`。

不要把 `CalculateSecurityChange` 的结果直接赋给 `Town.Security`，也不要用模型返回的周边事件影响跳过 raid/hideout/围城 owner。改变治安应由相应的 Campaign Behavior、事件或 Action 处理；模型替换也必须在 `AddModel`/`ReplaceModel` 生命周期中完成。

## 依赖关系

模型由 `SandBoxManager.AddModel(new DefaultSettlementSecurityModel())` 注册，并从 [Campaign](../Campaign)、[Town](../Town)、garrison party、patrol、prosperity、policies、issues 和 nearby settlement 状态读数据。v1.4.5 默认实现保留 governor effect hook，但 `CalculateGovernorEffectsOnSecurity` 为空，因此默认规则不会加入 governor 治安项。它与 [SettlementLoyaltyModel](../SettlementLoyaltyModel)、[ClanFinanceModel](../ClanFinanceModel) 和 [Settlement](../Settlement) 的税收/忠诚规则相互配合。下游包括 `Town.SecurityChange`、`TownSecurityCampaignBehavior`、[CampaignEvents](../CampaignEvents) 和保存的城镇状态；`RebellionsCampaignBehavior` 消费的是经由 `SettlementLoyaltyModel` 提供的忠诚/叛乱阈值，并不直接读取本模型。

## 关键属性与方法

默认 v1.4.5 规则包括：`MaximumSecurityInSettlement = 100`、`SecurityDriftMedium = 50`、map event 影响半径 `50f`、hideout 清除影响半径 `100f`、hideout 清除增益 `6`、税收提升阈值 `75`、腐败阈值 `50`，以及 notable relation/power 的正负每日修正。

### `CalculateSecurityChange`

```csharp
public ExplainedNumber CalculateSecurityChange(
    Town town,
    bool includeDescriptions = false)
```

默认实现会把 patrol、项目、prosperity、围城、被劫掠村庄、附近 hideout、漂移、政策、驻军、perk 和 issue 贡献合并；虽然调用 governor effect hook，但 v1.4.5 该 hook 为空，不会产生 governor 治安贡献。它读取当前状态并返回解释，不负责执行每日 tick。

## 事件影响与经济修正

`GetLootedNearbyPartySecurityEffect(Town, float)` 和 `GetNearbyBanditPartyDefeatedSecurityEffect(Town, float)` 根据 party strength 计算局部影响；调用方仍负责事件时机。`CalculateGoldGainDueToHighSecurity` 与 `CalculateGoldCutDueToLowSecurity` 把治安阈值效果加入现有 `ExplainedNumber`，不直接给 Clan 发钱。

## 真实当前 Campaign 示例：诊断当前 Town

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public static ExplainedNumber ExplainCurrentTownSecurity()
{
    Campaign campaign = Campaign.Current;
    MobileParty party = MobileParty.MainParty;
    Town town = party?.CurrentSettlement?.Town;
    if (campaign == null || town == null)
        return default;

    SettlementSecurityModel model = campaign.Models.SettlementSecurityModel;
    return model.CalculateSecurityChange(town, includeDescriptions: true);
}
```

这里从主 party 的真实当前据点取得 Town，没有构造对象，也没有写 `Security`。如果 party 离开据点、城镇被转移或 Campaign 正在读档，应重新解析 Town，不要继续使用旧的诊断输入。

## 直接写入与存档风险

直接写 `Town.Security` 会绕过 patrol/garrison/围城/劫掠/ hideout 的来源链，导致下一次 daily tick 或读档时出现跳变。只手工发布一个 security event 也无法重建模型所读取的全部前置状态。空模型、错时机替换模型或在 Campaign 初始化前调用 `Campaign.Current.Models` 可能让税收、忠诚和 Behavior 得到空引用或不一致结果。

## 版本说明

本页依据 v1.4.5 的 `SettlementSecurityModel` 和 `DefaultSettlementSecurityModel`。半径、阈值和事件修正是实现细节；跨版本 mod 应重新读取目标版本的默认模型。

## 导航

- **父级：** [Campaign API](../) · [Models hub](../GameModels)
- **同级：** [SettlementLoyaltyModel](../SettlementLoyaltyModel) · [ClanFinanceModel](../ClanFinanceModel) · [VillageTradeModel](../VillageTradeModel)
- **相关实体：** [Settlement](../Settlement) · [Town](../Town) · [Village](../Village) · [MobileParty](../MobileParty)
- **相关流程：** [CampaignEvents](../CampaignEvents) · [SaveManager](../../save-system/SaveManager)
