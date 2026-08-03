---
title: "MarriageModel"
description: "在 MarriageAction 应用婚姻前检查资格并计算关系和 Clan 结果。"
---
# MarriageModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class MarriageModel : MBGameModel<MarriageModel>`  
**Base:** `MBGameModel<MarriageModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MarriageModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultMarriageModel.cs`

## One-line job

`MarriageModel` 判断 Hero/Clan 是否适合婚姻，并选择婚后归属 Clan。它是决策策略；`MarriageAction` 才修改关系、Clan 列表并派发事件。

## Mental Model

婚姻 offer 和对话会反复查询资格。玩家接受后，`MarriageAction.Apply` 再次验证双方，读取关系增量和目标 Clan，然后执行双方变更。这样预览不会提前修改关系，也不会把 Hero 移出原 Clan。

```text
Hero / Clan -> MarriageModel 资格与结果
            -> offer / conversation 预览
            -> MarriageAction.Apply -> relation + clan + events + save
```

## Dependencies

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供活动 Model。 |
| [`Hero`](../../campaign/Hero) / [`Clan`](../../campaign/Clan) | 提供年龄、关系、势力和所有权状态。 |
| [`MarriageAction`](../MarriageAction) | 应用实际婚姻。 |
| `MarriageOfferCampaignBehavior` | 管理 offer 生命周期和保存。 |

## Key contract

| Member | Purpose | Timing |
| --- | --- | --- |
| `IsCoupleSuitableForMarriage` | 验证一对 Hero。 | offer、对话、Action 再检验 |
| `IsSuitableForMarriage` | 验证单个 Hero。 | Hero/UI 查询 |
| `IsClanSuitableForMarriage` | 验证 NPC offer 的 Clan。 | offer 调度 |
| `GetEffectiveRelationIncrease` | 返回 Action 使用的关系增量。 | 婚姻应用 |
| `GetClanAfterMarriage` | 选择婚后目标 Clan。 | 婚姻应用 |

## Real access path

```csharp
public bool CanPropose(Hero first, Hero second)
{
    if (Campaign.Current == null || first == null || second == null)
    {
        return false;
    }
    return Campaign.Current.Models.MarriageModel
        .IsCoupleSuitableForMarriage(first, second);
}
```

`MarriageAction.Apply` 会再次调用同样的方法，随后才使用 `ChangeRelationAction` 和 Clan 变更。

## 风险与调试顺序

1. 资格查询必须无副作用，因为对话和 UI 会重复调用。
2. 保留死亡、囚禁、亲缘、年龄和已有婚姻分支。
3. Clan 迁移必须由 Action 完成，确保两边列表和存档一致。
4. 自定义目标 Clan 必须已注册且未被消灭。
5. offer 状态由行为保存，Model 不持有 Saveable 字段。

## Navigation

- [Campaign-ext models family](../models/)
- [Hero](../../campaign/Hero)
- [Clan](../../campaign/Clan)
- [MarriageAction](../MarriageAction)
- [CampaignEvents](../CampaignEvents)
