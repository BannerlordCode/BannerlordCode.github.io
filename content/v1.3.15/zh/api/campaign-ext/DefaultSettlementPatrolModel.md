---
title: "DefaultSettlementPatrolModel"
description: "Bannerlord 默认 Guard House 巡逻资格、生成间隔和文化队伍模板选择规则。"
---
# DefaultSettlementPatrolModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSettlementPatrolModel : SettlementPatrolModel`  
**Base:** [`SettlementPatrolModel`](../SettlementPatrolModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementPatrolModel.cs`（1.4.5 权威实现）

## 一句话职责

`DefaultSettlementPatrolModel` 用城镇所有者、叛军状态、Guard House 等级和建筑巡逻强度效果，决定默认巡逻队的资格、等待时间和文化模板。

## 心智模型

默认实现只做查询：它寻找据点 `Town.Buildings` 中等级大于零的 `SettlementGuardHouse`。合资格的非叛军城镇在 Guard House 等级越高时等待越短，模板强度由 `PatrolPartyStrength` 建筑效果映射到所属文化的弱/中/强巡逻模板。真正的生成仍由 `PatrolPartiesCampaignBehavior` 排队并调用 `CreatePatrolParty`。

1.4.5 的默认方法没有为海军单独建立一套模板分支，调用方仍必须传递接口要求的 `naval` 参数；定制海军规则时应明确实现这一差异。

## 依赖与消费链

| 类型/流程 | 关系 |
| --- | --- |
| [`SettlementPatrolModel`](../SettlementPatrolModel) / [`GameModels`](../GameModels) | 契约与注册后的访问入口。 |
| [`Settlement`](../../campaign/Settlement) / [`Town`](../../campaign/Town) | 提供所有者、城镇类型和建筑列表。 |
| `SettlementGuardHouse` / `BuildingEffectEnum.PatrolPartyStrength` | 提供资格、等级和巡逻队强度。 |
| `CultureObject` / `PatrolPartiesCampaignBehavior` | 选择文化模板并将结果应用为实际巡逻队。 |

## 默认规则

| 成员 | 1.4.5 行为 |
| --- | --- |
| `CanSettlementHavePatrolParties` | 只有 `OwnerClan != null`、非叛军且 `settlement.IsTown` 时才继续检查 Guard House。 |
| Guard House 检查 | 找到 `DefaultBuildingTypes.SettlementGuardHouse` 且 `CurrentLevel > 0` 的建筑才算有资格。 |
| `GetPatrolPartySpawnDuration` | 返回 `CampaignTime.Days(10 - (level - 1) * 2)`；等级越高生成间隔越短。 |
| `GetPartyTemplateForPatrolParty` | `PatrolPartyStrength` 为 `1/2/3` 时返回所属文化的弱/中/强模板；其他值回退到弱模板；找不到建筑时返回空。 |

## 真实获取与替换

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

Settlement settlement = Settlement.All
    .FirstOrDefault(candidate => candidate.IsTown && candidate.Town != null);
if (settlement != null)
{
    SettlementPatrolModel model = Campaign.Current.Models.SettlementPatrolModel;
    if (model.CanSettlementHavePatrolParties(settlement, naval: false))
    {
        CampaignTime spawnAfter = model
            .GetPatrolPartySpawnDuration(settlement, naval: false);
        PartyTemplateObject template = model
            .GetPartyTemplateForPatrolParty(settlement, naval: false);
    }
}
```

替换实现应在 `InitializeGameStarter` 中注册，并保持“资格、延迟、模板”三者一致；不要从 `DefaultSettlementPatrolModel` 的查询方法直接调用 `CreatePatrolParty`。

## 风险与版本边界

- `GetPartyTemplateForPatrolParty` 在没有 Guard House 时返回空；调用方若绕过资格检查直接读取模板，后续生成可能空引用。
- `PatrolPartyStrength` 的效果值由建筑系统提供；返回未知强度时默认回退弱模板，不能假设所有值都代表一个文化模板。
- 修改生成间隔会改变整个地图的 party 数量、带宽和存档增长速度；不要在每次查询中使用随机延迟。
- `PatrolPartiesCampaignBehavior` 负责队列和清理；模型只改变策略，不能代替 `DestroyPartyAction` 的生命周期处理。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Models 家族](../models/)
- [接口契约：SettlementPatrolModel](../SettlementPatrolModel)
- [相关：SettlementGarrisonModel](../SettlementGarrisonModel) · [CampaignTime](../CampaignTime)
- [下游：Settlement](../../campaign/Settlement) · [MobileParty](../../campaign/MobileParty)
