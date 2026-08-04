---
title: "VillageTradeModel"
description: "v1.4.5 中选择村庄贸易绑定城镇并计算导航距离上限的战役规则模型。"
---
# VillageTradeModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public abstract class VillageTradeModel : MBGameModel<VillageTradeModel>`  
**基类：** `MBGameModel<VillageTradeModel>`  
**源码：** `TaleWorlds.CampaignSystem.ComponentInterfaces/VillageTradeModel.cs`  
**版本：** 本页描述 v1.4.5。

## 一句话职责

它为村庄贸易绑定流程提供按导航类型计算的距离上限，并从当前 Campaign 选择一个合适的绑定城镇。模型只负责筛选和计算，不直接改变 `Village.TradeBound`；绑定 Behavior 会在所有权、外交或读档等生命周期节点消费这个结果。

## 心智模型

`VillageTradeModel` 是规则端口，不是 `Village.TradeBound` 的公共 setter。Sandbox 注册 `DefaultVillageTradeModel`；它使用当前 Campaign 的平均城镇距离、村民 party 速度、`MapDistanceModel` 和阵营关系，先寻找同阵营且在距离上限内的城镇，再寻找不交战的其他阵营城镇。找不到合法目标时返回 `null`。

真正把结果写回 `Village.TradeBound` 的是 [VillageTradeBoundCampaignBehavior](../VillageTradeBoundCampaignBehavior)，通常在新游戏、读档、所有权变化和外交变化后运行。mod 可以查询候选绑定，但不应把模型当作直接修改村庄归属的 API。

## 何时使用，何时不要使用

使用它解释某个真实村庄为什么绑定某个城镇、预览某种 `NavigationType` 下的距离限制，或替换贸易绑定规则。输入应来自当前 Campaign 已注册的 [Village](../Village) 和 [Settlement](../Settlement)。

不要构造一个假 Village 或直接设置 `TradeBound` 来模拟绑定。绑定城镇还必须满足阵营关系、导航距离和村庄/城镇生命周期；绕过 Behavior 会让贸易、粮食、税收和导航逻辑看到不同的绑定结果。

## 依赖关系

上游是 [Campaign](../Campaign)、[GameModels](../GameModels)、[Village](../Village)、[Town](../Town)、`MapDistanceModel` 和 `MobileParty.NavigationType`。默认实现由 `SandBoxManager.AddModel(new DefaultVillageTradeModel())` 注册。下游是 [VillageTradeBoundCampaignBehavior](../VillageTradeBoundCampaignBehavior)、村庄生产/贸易和城镇税收流程；绑定结果最终作为保存的村庄关系状态出现。

## 关键成员

### `TradeBoundDistanceLimitAsDays`

```csharp
public float TradeBoundDistanceLimitAsDays(
    MobileParty.NavigationType navigationType)
```

默认实现把当前 Campaign 中最近城镇的平均距离换算成村民 party 天数，并乘以 `3f`。它是距离规则的中间值，不是世界地图上的距离，也不会选择或写入某个城镇。

### `GetTradeBoundToAssignForVillage`

```csharp
public Settlement GetTradeBoundToAssignForVillage(Village village)
```

默认实现使用默认陆地导航，先查找同阵营的最近城镇；若没有合格结果，再查找不与村庄阵营交战且在上限内的其他阵营城镇。两次查找都使用 `MapDistanceModel`，没有合法结果时返回 `null`。调用方必须处理空值。

## 真实当前 Campaign 示例：预览绑定候选

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public static Settlement PreviewTradeBoundTown()
{
    Campaign campaign = Campaign.Current;
    MobileParty party = MobileParty.MainParty;
    Village village = party?.CurrentSettlement?.Village;
    if (campaign == null || village == null || village.IsOwnerUnassigned)
        return null;

    VillageTradeModel model = campaign.Models.VillageTradeModel;
    return model.GetTradeBoundToAssignForVillage(village);
}
```

这个示例从主 party 当前真实 Settlement 取得 Village，只返回候选，不写 `TradeBound`。若要观察原版绑定结果，应读取 `village.TradeBound`；若要触发重算，应让 [VillageTradeBoundCampaignBehavior](../VillageTradeBoundCampaignBehavior) 在它的事件/生命周期中执行，而不是在任意 UI 刷新里反复调用并写回。

## 生命周期、替换和存档风险

模型使用 `Campaign.Current`、平均速度和地图距离模型，因此在 Campaign 模型注册前或读档中间调用可能得到未初始化依赖。把一个不属于当前阵营、正在被移除或没有有效 Settlement 的 Village 传入，会让默认实现的距离和 faction 过滤失去意义。

直接设置 `Village.TradeBound` 会绕过外交/所有权变化后的重算和 null 结果语义；这可能造成村庄贸易、生产、税收和存档关系不一致。替换模型时要保持 `null` 表示“当前没有合法绑定”的契约，并在 `AddModel`/`ReplaceModel` 生命周期内安装。

## 版本说明

本页以 v1.4.5 的 `VillageTradeModel`、`DefaultVillageTradeModel` 和 `VillageTradeBoundCampaignBehavior` 为准。导航距离、速度和阵营筛选条件可能在版本间变化。

## 导航

- **父级：** [Campaign API](../) · [Models hub](../GameModels)
- **同级：** [ClanFinanceModel](../ClanFinanceModel) · [SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementSecurityModel](../SettlementSecurityModel)
- **相关实体：** [Village](../Village) · [Town](../Town) · [Settlement](../Settlement) · [MobileParty](../MobileParty)
- **相关流程：** [VillageTradeBoundCampaignBehavior](../VillageTradeBoundCampaignBehavior) · [Campaign](../Campaign) · [SaveManager](../../save-system/SaveManager)
