---
title: "PartySizeLimitModel"
description: "计算队伍成员、俘虏、驻军和初始编制容量的战役策略。"
---
# PartySizeLimitModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartySizeLimitModel : MBGameModel<PartySizeLimitModel>`  
**Base:** `MBGameModel<PartySizeLimitModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartySizeLimitModel.cs`

## One-line job

`PartySizeLimitModel` 回答队伍可以容纳多少成员、俘虏和驻军，并从 `PartyTemplateObject` 选择初始编制。它是计算提供者，不直接往 `TroopRoster` 写入单位。

## Mental Model

成员容量、俘虏容量、驻军容量和初始编制是四个不同契约。`PartyBase` 缓存前两个结果，城镇管理使用驻军结果，创建队伍时才调用初始编制方法。把它们混成一个数字会让转移界面、招募逻辑和创建流程互相矛盾。

```text
PartyBase / Settlement / PartyTemplateObject
              -> Campaign.Current.Models.PartySizeLimitModel
              -> 成员/俘虏/驻军限制或初始 roster
              -> PartyBase 缓存、PartyScreen、队伍创建
```

默认实现会综合 Clan Tier、领袖技能/Perk、队伍组件、Settlement 和模板比例。需要实际招募、转移或创建时，使用对应的官方流程和 `TroopRoster` API；修改计算结果不会自动为已有 roster 腾出空间。

## Dependencies

### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 持有活动 Model 注册表。 |
| [`PartyBase`](../../campaign/PartyBase) | 持有成员/俘虏 roster 与缓存。 |
| [`Hero`](../../campaign/Hero) / [`Clan`](../../campaign/Clan) | 提供领袖和 Clan Tier 因素。 |
| `PartyTemplateObject` | 提供初始编制比例。 |

### Downstream

| Type | Relation |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) | 创建队伍时读取初始 roster/ships。 |
| [`TroopRoster`](../TroopRoster) | 承担真实招募和转移变更。 |
| [`Settlement`](../../campaign/Settlement) | 提供驻军上下文。 |
| PartyScreen transfer UI | 读取解释后的容量用于 UI。 |

## Key contract

| Member | Purpose | Timing |
| --- | --- | --- |
| `GetPartyMemberSizeLimit` | 解释成员容量。 | `PartyBase` 缓存 |
| `GetPartyPrisonerSizeLimit` | 解释俘虏容量。 | 俘虏转移和 UI |
| `CalculateGarrisonPartySizeLimit` | 计算城镇驻军容量。 | 城镇管理 |
| `GetClanTierPartySizeEffectForHero` | 计算 Clan Tier 对领袖队伍的贡献。 | 容量解释 |
| `FindAppropriateInitialRosterForMobileParty` | 从模板生成初始 roster。 | 队伍创建 |

## Real access path

```csharp
public int GetFreeTroopSlots(PartyBase party)
{
    if (Campaign.Current == null || party == null)
    {
        return 0;
    }
    ExplainedNumber limit = Campaign.Current.Models.PartySizeLimitModel
        .GetPartyMemberSizeLimit(party, includeDescriptions: true);
    return Math.Max(0, (int)limit.ResultNumber - party.NumberOfAllMembers);
}
```

`PartyBase.PartySizeLimit` 和 `PartySizeLimitExplainer` 正是这条路径的消费者。改变 roster 后必须走能使缓存失效的官方 API。

## 风险与调试顺序

1. 不要把成员容量用于俘虏或驻军。
2. 自定义模板的比例必须满足默认实现的边界，否则会触发断言。
3. Clan Tier 应通过战役进度更新，不要直接写字段后期待缓存自动刷新。
4. 标题界面没有 `Campaign.Current`。
5. v1.4.5 的海上队伍同时返回 ships；创建流程不能丢弃该结果。

## Navigation

- [Campaign-ext models family](../models/)
- [PartyBase](../../campaign/PartyBase)
- [MobileParty](../../campaign/MobileParty)
- [TroopRoster](../TroopRoster)
- [PartyWageModel](../PartyWageModel)
