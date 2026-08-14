---
title: "PregnancyModel"
description: "提供战役怀孕周期、胎儿结果和每日受孕概率的可替换模型，不直接创建孩子或改变英雄状态。"
---

# PregnancyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PregnancyModel : MBGameModel<PregnancyModel>`
**Base:** `MBGameModel<PregnancyModel>`
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PregnancyModel.cs`
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPregnancyModel.cs`

## 一句话职责

`PregnancyModel` 定义受孕概率、孕期长度、双胞胎、性别和分娩死亡率等规则；它只提供策略结果，真正的怀孕记录、分娩、事件和死亡由 [PregnancyCampaignBehavior](../PregnancyCampaignBehavior) 与相关 Action 执行。

## 心智模型

模型处于“每日英雄检查”和“生命周期状态迁移”之间。`GameModels` 在战役启动时解析它，`PregnancyCampaignBehavior` 每日检查已婚且符合条件的英雄，读取 `GetDailyChanceOfPregnancyForHero` 后才可能调用 [MakePregnantAction](../MakePregnantAction)。受孕事件再由 Behavior 保存一个带 `Mother`、`Father`、`DueDate` 的内部记录；到期时 Behavior 读取其他概率属性，创建后代、发布出生事件、清除怀孕状态，并可能调用死亡 Action。

因此模型方法可能被每日 tick、AI 或 UI 预览重复查询，必须是纯计算。改变 `PregnancyDurationInDays` 会影响 `CampaignTime` 到期日和日志保留时间；改变死亡/死胎/双胞胎概率会影响世界人口与存档结果，不能在运行中随意替换。

## 何时使用，何时不要用

- 想调整怀孕周期、年龄/子女数量导致的概率、双胞胎率或分娩结果时，替换模型并在战役启动阶段注册。
- 想查询当前英雄的概率时，从 `Campaign.Current.Models.PregnancyModel` 读取；先确认英雄有配偶、属于有效家族且战役已经加载。
- 不要在模型中设置 `Hero.IsPregnant`、创建 `Hero`、发出生事件或调用 `KillCharacterAction`；模型不是生命周期控制器。
- 不要把概率属性当成百分比整数。游戏使用 `MBRandom.RandomFloat <= probability`，替换实现应返回有界的 `[0, 1]` 概率，并保持 `PregnancyDurationInDays` 为正数。

## 依赖关系

#### 上游

- [Campaign](../../campaign/Campaign) 的 [GameModels](../GameModels) 持有模型实例。
- [Hero](../../campaign/Hero) 提供年龄、配偶、子女数量、家族和 Perk。
- `CampaignOptions` 的加速模式会被默认实现用于选择 18 或 36 天孕期。

#### 下游

- [PregnancyCampaignBehavior](../PregnancyCampaignBehavior) 在 `DailyTickHero` 中读取每日概率和孕期长度，并通过存档同步怀孕列表。
- [MakePregnantAction](../MakePregnantAction) 创建怀孕状态；到期流程使用 `HeroCreator.DeliverOffSpring` 和出生事件。
- [KillCharacterAction](../KillCharacterAction) 只在分娩死亡概率命中且符合原版条件时执行；模型不应直接调用它。
- `ChildbirthLogEntry`、`PregnancyLogEntry` 和 `CampaignEvents` 会消费周期与出生结果。

## 成员与调用时机

| 成员 | 用途与时机 | 副作用边界 |
|---|---|---|
| `PregnancyDurationInDays` | 受孕时计算 `CampaignTime.DaysFromNow` 的到期日；默认根据加速模式为 18 或 36 天。 | 只返回周期，不创建内部记录。 |
| `MaternalMortalityProbabilityInLabor` | 分娩完成后判断母亲死亡概率；默认 0.015。 | 不执行死亡 Action。 |
| `StillbirthProbability` | 每个胎儿生成前判断是否死胎；默认 0.01。 | 不显示消息、不发布出生事件。 |
| `DeliveringFemaleOffspringProbability` | 对存活胎儿判断性别；默认 0.51。 | 不创建 `Hero`。 |
| `DeliveringTwinsProbability` | 到期时判断一次是否生成两个胎儿；默认 0.03。 | 不修改母亲或怀孕列表。 |
| `GetDailyChanceOfPregnancyForHero(Hero)` | 每日配偶相遇检查时计算受孕概率；默认实现考虑年龄、已有子女、家族规模和 Virile Perk。 | 不设置 `IsPregnant`，不调用 `MakePregnantAction`。 |

## 真实查询示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

Hero hero = Hero.MainHero;
PregnancyModel pregnancy = Campaign.Current.Models.PregnancyModel;
float dailyChance = 0f;

if (hero.IsFemale && hero.Spouse != null && hero.IsAlive && !hero.IsPregnant)
{
    dailyChance = pregnancy.GetDailyChanceOfPregnancyForHero(hero);
}
```

这只是读取模型结果。原版 `PregnancyCampaignBehavior` 还会检查配偶位置、年龄、生命状态和游戏选项，然后才由 `MakePregnantAction` 建立状态；Mod 不应因为查询结果大于零就直接改写英雄属性。

## 风险与排错

1. 在 `GetDailyChanceOfPregnancyForHero` 中调用 `MakePregnantAction` 会在同一个每日检查里重复创建记录；模型会被读取多次，最终造成重复怀孕或出生事件。
2. `PregnancyDurationInDays` 同时影响到期检查和日志保留时间。运行中更换周期可能使已有存档的 `DueDate` 与新规则不一致。
3. 默认实现访问 `hero.Clan`、`hero.Spouse` 和配偶的 Perk；对没有家族或配偶的英雄调用时必须先遵守上游前置条件，否则会空引用。
4. 概率越界会让 `MBRandom.RandomFloat <= probability` 永远成功或永远失败，直接改变人口曲线。自定义实现应夹紧结果并保留难度/年龄边界。
5. 怀孕列表由 Behavior 的 `SyncData` 保存，模型不持有这份状态。把 `Pregnancy` 对象或自定义计数器放进模型会在换档、重载或模型重建时丢失。

## 导航

- [Parent: campaign-ext](./)
- [Models family guide](../models)
- [Sibling: MarriageModel](../MarriageModel) · [AgeModel](../AgeModel)
- [Related: Hero](../../campaign/Hero) · [Campaign](../../campaign/Campaign) · [MakePregnantAction](../MakePregnantAction)
