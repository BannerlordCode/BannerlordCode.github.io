---
title: "CharacterDevelopmentModel"
description: "为 HeroDeveloper 计算技能学习、经验阈值、专注点、属性和 Perk 进度。"
---
# CharacterDevelopmentModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class CharacterDevelopmentModel : MBGameModel<CharacterDevelopmentModel>`  
**Base:** `MBGameModel<CharacterDevelopmentModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterDevelopmentModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultCharacterDevelopmentModel.cs`

## One-line job

`CharacterDevelopmentModel` 定义经验阈值、学习上限/速率、技能变化、特性等级以及下一个专注点、属性或 Perk。它不直接给 Hero 加经验，也不直接写 `HeroDeveloper`。

## Mental Model

`HeroDeveloper` 持有可保存的经验、专注点、属性和 Perk。它向 Model 询问阈值和速率，再通过自己的 API 应用结果并发送成长通知。战斗奖励、任务和每日系统是经验生产者，不应复制成长公式。替换实现必须保持经验阈值单调递增，并保留 UI 与存档使用的上限属性。

```text
XP / focus / attributes / SkillObject
        -> Campaign.Current.Models.CharacterDevelopmentModel
        -> threshold / learning queries
        -> HeroDeveloper -> 保存的成长状态 -> UI / Perk
```

## Dependencies

### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供活动成长策略。 |
| [`Hero`](../../campaign/Hero) / `HeroDeveloper` | 持有经验、专注、属性和 Perk。 |
| [`SkillObject`](../../core-extra/SkillObject) / `TraitObject` | 标识成长轨道。 |
| `ExplainedNumber` | 保存学习限制和速率说明。 |

### Downstream

| Type | Relation |
| --- | --- |
| `HeroDeveloper` | 在应用成长时调用这些方法。 |
| `TraitLevelingHelper` | 使用特性经验换算。 |
| `DefaultPartyWageModel` / `DefaultDiplomacyModel` | 读取技能和 Epic Perk 阈值。 |
| [`ViewModel`](../../core-extra/ViewModel) | 显示学习速率和可选成长。 |

## Key contract

| Member | Purpose | Timing |
| --- | --- | --- |
| `GetXpRequiredForSkillLevel` | 把等级转换为累计 XP 阈值。 | XP 应用、UI |
| `GetSkillLevelChange` | 把获得 XP 转换为等级变化。 | Hero 成长 |
| `CalculateLearningLimit` | 解释专注/属性学习上限。 | 技能界面、tick |
| `CalculateLearningRate` | 解释当前 XP 倍率。 | 技能界面、奖励 |
| `GetTraitLevelForTraitXp` | 把特性 XP 转换为等级和余数。 | 特性成长 |

## Real access path

```csharp
public ExplainedNumber ExplainLearning(Hero hero, SkillObject skill)
{
    HeroDeveloper developer = hero.HeroDeveloper;
    int focus = developer.GetFocus(skill);
    return Campaign.Current.Models.CharacterDevelopmentModel.CalculateLearningRate(
        hero.CharacterAttributes, focus, hero.GetSkillValue(skill), skill,
        includeDescriptions: true);
}
```

`HeroDeveloper` 使用同一个 Model 计算经验变化和上限，但真正写入经验必须走 `HeroDeveloper` API：

```csharp
int delta = Campaign.Current.Models.CharacterDevelopmentModel
    .GetSkillLevelChange(hero, skill, earnedXp);
```

## 风险与调试顺序

1. 高等级阈值必须不低于低等级，否则读档会重复升级。
2. 保留技能、专注和属性上限，UI 与 `HeroDeveloper` 都依赖它们。
3. 学习速率是预览，不得在查询时修改经验。
4. 特性换算必须同时返回等级和剩余 XP。
5. 新的 Perk 阈值会被多个 Model 读取，装饰实现时先委托 vanilla。

## Navigation

- [Campaign-ext models family](../models/)
- [Hero](../../campaign/Hero)
- [SkillObject](../../core-extra/SkillObject)
- [ViewModel](../../core-extra/ViewModel)
- [PartyWageModel](../PartyWageModel)
