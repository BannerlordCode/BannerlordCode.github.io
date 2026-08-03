---
title: "DiplomacyModel"
description: "计算战争、和平、王国成员资格和关系成本，但不直接应用外交变更。"
---
# DiplomacyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class DiplomacyModel : MBGameModel<DiplomacyModel>`  
**Base:** `MBGameModel<DiplomacyModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DiplomacyModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultDiplomacyModel.cs`

## One-line job

`DiplomacyModel` 评估战争、和平、加入/离开王国、影响力成本、关系和阵营价值。它返回分数与资格，不会自行宣战、停战或改变关系。

## Mental Model

外交是两阶段流程：AI、王国界面或对话先读取分数/成本，随后决策对象和 Action 才应用结果并派发事件。相同方法会在预览中被重复调用，所以任何副作用都会重复改变世界。Model 只回答“是否值得/需要多少”，Action 才负责战争表、成员列表、通知和保存一致性。

```text
Clan / Kingdom / IFaction
        -> Campaign.Current.Models.DiplomacyModel
        -> score / threshold / cost / relation / stance
        -> decision VM / AI preview
        -> DeclareWarAction / MakePeaceAction / ChangeKingdomAction
```

## Dependencies

### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 持有外交 Model 和阵营状态。 |
| [`Clan`](../../campaign/Clan) / [`Kingdom`](../../campaign/Kingdom) | 提供势力、成员、据点和关系。 |
| [`Hero`](../../campaign/Hero) | 提供关系和婚姻价值输入。 |
| [`ExplainedNumber`](../ExplainedNumber) | 保存战争进度说明。 |

### Downstream

| Type | Relation |
| --- | --- |
| [`ChangeKingdomAction`](../ChangeKingdomAction) | 应用加入/离开决定。 |
| [`DeclareWarAction`](../DeclareWarAction) / [`MakePeaceAction`](../MakePeaceAction) | 应用阵营状态变化。 |
| `KingdomClanVM` / `KingdomArmyVM` | 显示影响力成本。 |
| `DefaultAllianceModel` | 使用战争分数和决策阈值。 |

## Key contract

| Member family | Purpose | Timing |
| --- | --- | --- |
| `GetScoreOfDeclaringWar` / `GetScoreOfDeclaringPeace` | 计算外交决定分数及原因。 | AI、决定预览 |
| `GetWarProgressScore` | 解释双方战争进度。 | 和平界面 |
| `GetInfluenceCostOf*` | 返回王国/军队决定成本。 | ViewModel、决定创建 |
| `GetScoreOfClanToJoinKingdom` / `GetScoreOfClanToLeaveKingdom` | 评估成员变更。 | 王国外交 |
| `GetEffectiveRelation` / `GetBaseRelation` | 解析有效关系。 | 对话、AI |

## Real access path

```csharp
public ExplainedNumber ExplainWarProgress(IFaction source, IFaction target)
{
    return Campaign.Current.Models.DiplomacyModel
        .GetWarProgressScore(source, target, includeDescriptions: true);
}
```

王国界面也只读取成本和资格：

```csharp
int annexCost = Campaign.Current.Models.DiplomacyModel
    .GetInfluenceCostOfAnnexation(Clan.PlayerClan);
bool canGift = Campaign.Current.Models.DiplomacyModel
    .CanSettlementBeGifted(selectedSettlement);
```

随后由匹配的 Action 更新所有双向列表、战争表、通知和保存状态。

## 风险与调试顺序

1. 界面会重复调用分数和成本；禁止在这些方法中改变战争或影响力。
2. `GetScoreOfDeclaringWar` 与和平方法的参数语义不同，不要互换。
3. 有效关系可能通过 Clan/Hero 代理解析，直接写关系字段会跳过事件。
4. 活动战役不存在时不能访问注册表。
5. 新版本增加 barter 或海上 stance 时优先委托当前默认实现。

## Navigation

- [Campaign-ext models family](../models/)
- [Clan](../../campaign/Clan)
- [Kingdom](../../campaign/Kingdom)
- [DeclareWarAction](../DeclareWarAction)
- [MakePeaceAction](../MakePeaceAction)
- [ChangeKingdomAction](../ChangeKingdomAction)
