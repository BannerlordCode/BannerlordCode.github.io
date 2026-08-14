---
title: "SettlementPatrolModel"
description: "决定据点巡逻队是否可生成、何时生成以及使用哪种文化队伍模板的模型契约。"
---
# SettlementPatrolModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementPatrolModel : MBGameModel<SettlementPatrolModel>`  
**Base:** `MBGameModel<SettlementPatrolModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementPatrolModel.cs`

## 一句话职责

`SettlementPatrolModel` 为巡逻队行为提供生成等待时间、据点资格判断和队伍模板，决定据点何时具备生成条件以及生成配置；它不创建 `MobileParty`，也不销毁现有巡逻队。

## 心智模型

`PatrolPartiesCampaignBehavior` 是生命周期拥有者：它在 Campaign tick 中询问模型，维护生成队列，得到模板后才调用 `PatrolPartyComponent.CreatePatrolParty`。因此模型的 `CanSettlementHavePatrolParties` 是资格门，`GetPatrolPartySpawnDuration` 是排队时间，`GetPartyTemplateForPatrolParty` 是生成配置。把模型当作“巡逻队工厂”并直接调用模板创建，会绕过队列和清理逻辑。

## 依赖

| 类型/流程 | 关系 |
| --- | --- |
| [`GameModels`](../GameModels) / [`Campaign`](../../campaign/Campaign) | 提供当前注册的巡逻规则。 |
| [`Settlement`](../../campaign/Settlement) / [`Town`](../../campaign/Town) | 提供所有者、城镇类型、建筑和门/港口位置。 |
| `SettlementGuardHouse` 建筑 / `BuildingEffectModel` | 决定资格、生成间隔和巡逻队强度。 |
| `PatrolPartiesCampaignBehavior` | 维护队列、创建巡逻队，并通过 `DestroyPartyAction` 清理失效队伍。 |

## 公共契约

| 成员 | 真实职责与典型时机 |
| --- | --- |
| `GetPatrolPartySpawnDuration(Settlement, bool)` | 返回据点下一次巡逻队生成的 `CampaignTime` 延迟。 |
| `CanSettlementHavePatrolParties(Settlement, bool)` | 判断当前据点是否满足巡逻队生成资格。 |
| `GetPartyTemplateForPatrolParty(Settlement, bool)` | 返回生成巡逻队使用的 `PartyTemplateObject`；无资格时可以返回空。 |

## 真实获取路径

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
    bool eligible = model.CanSettlementHavePatrolParties(settlement, naval: false);
    if (eligible)
    {
        CampaignTime delay = model.GetPatrolPartySpawnDuration(settlement, naval: false);
        PartyTemplateObject template = model
            .GetPartyTemplateForPatrolParty(settlement, naval: false);
    }
}
```

这段代码适合状态预览；实际生成应让 `PatrolPartiesCampaignBehavior` 处理，不要在 UI 或每日回调里手动创建队伍。

## 风险与版本边界

- 默认实现要求非叛军、拥有者不为空且是城镇，并且有已升级的 Guard House；不满足资格时模板可能为空。
- `naval` 是接口契约的一部分，但 1.4.5 默认陆地实现主要依赖城镇 Guard House；替换实现不能假设该参数永远被忽略。
- 生成队列、出生位置、清理和存档由 Behavior 持有；模型中创建 `MobileParty` 会产生重复巡逻队或悬挂 party。
- 删除巡逻资格后下游 Behavior 可能调用 `DestroyPartyAction`，要在替换规则时验证已有巡逻队的清理路径。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Models 家族](../models/)
- [默认实现：DefaultSettlementPatrolModel](../DefaultSettlementPatrolModel)
- [相关：SettlementGarrisonModel](../SettlementGarrisonModel) · [CampaignTime](../CampaignTime)
- [下游：Settlement](../../campaign/Settlement) · [MobileParty](../../campaign/MobileParty)
