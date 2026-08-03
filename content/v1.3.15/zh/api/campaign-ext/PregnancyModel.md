---
title: "PregnancyModel"
description: "为怀孕行为计算每日概率和孕期时长。"
---
# PregnancyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PregnancyModel : MBGameModel<PregnancyModel>`  
**Base:** `MBGameModel<PregnancyModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PregnancyModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPregnancyModel.cs`

## One-line job

`PregnancyModel` 提供 Hero 每日怀孕概率和孕期时长。`PregnancyCampaignBehavior` 负责附近检查、随机投掷、Pregnancy 记录、分娩和保存。

## Mental Model

行为先确认夫妻在附近且满足资格，再读取 `GetDailyChanceOfPregnancyForHero` 与 `PregnancyDurationInDays`。行为执行随机比较并创建带结束时间的 `Pregnancy` 记录。替换 Model 只改变概率或时长，不应直接操作怀孕列表或分娩状态。

The model answers policy only; the campaign behavior owns the random roll, pregnancy record, childbirth event, and save lifecycle. This separation keeps previews deterministic and prevents a UI query from creating a second pregnancy.

```text
Hero + spouse + proximity/eligibility
       -> PregnancyModel chance/duration
       -> PregnancyCampaignBehavior 随机投掷
       -> Pregnancy record -> childbirth events and save
```

## Dependencies

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供 Model 注册表和战役时间。 |
| [`Hero`](../../campaign/Hero) | 提供年龄、配偶、生存和 Clan 上下文。 |
| `PregnancyCampaignBehavior` | 持有随机、记录和保存。 |
| [`CampaignEvents`](../CampaignEvents) | 派发分娩和 Hero 生命周期事件。 |

## Key contract

| Member | Purpose | Timing |
| --- | --- | --- |
| `GetDailyChanceOfPregnancyForHero` | 返回有界每日概率。 | 行为每日 tick |
| `PregnancyDurationInDays` | 返回创建记录使用的孕期。 | 创建记录和日志 |

## Real access path

```csharp
public float ReadPregnancyChance(Hero hero)
{
    if (Campaign.Current == null || hero == null)
    {
        return 0f;
    }
    return Campaign.Current.Models.PregnancyModel
        .GetDailyChanceOfPregnancyForHero(hero);
}
```

行为负责随机比较和保存记录；不要从 UI 或对话回调创建第二次怀孕。

## 风险与调试顺序

1. 概率必须在预期范围内，超过 1 会使每日投掷全部成功。
2. 孕期必须为正，并兼容 `CampaignTime.DaysFromNow`。
3. 资格和附近检查属于行为，不要在替换 Model 中绕过。
4. Pregnancy 记录由行为保存，不由 Model 保存。
5. 分娩会创建 Hero 并派发事件，不能从概率方法调用。

## Navigation

- [Campaign-ext models family](../models/)
- [Hero](../../campaign/Hero)
- [CampaignEvents](../CampaignEvents)
- [MarriageModel](../MarriageModel)
- [Save system guide](../../../guide/save-system-guide)
