---
title: "StoryModeGenericXpModel"
description: "非战斗场景的通用经验倍率模型：英雄当前身处训练场时，其经验倍率直接归零。"
---
# StoryModeGenericXpModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode
**Type:** `public class StoryModeGenericXpModel : GenericXpModel`
**Base:** `GenericXpModel`（继承自 `MBGameModel<GenericXpModel>`）
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeGenericXpModel.cs`

## 概述

`GenericXpModel` 决定一个英雄通过非战斗途径（管理结算、教练训练、学院、任务奖励等）获得经验时的倍率。StoryMode 只加了一条排除：英雄当前待在一个训练场聚落里时，倍率返回 0。这是教学关的配套设计——玩家的早期技能成长必须在真实战斗与对话中完成，不允许在训练场挂机刷。模型只有一个成员，改动面极窄。

## 心智模型

注册方式是 `campaignGameStarter.AddModel<GenericXpModel>(new StoryModeGenericXpModel())`，随后 `Campaign.Current.Models.GenericXpModel` 指向它。所有「给英雄加非战斗经验」的流程都会问它要倍率，再乘到基础经验上。

判定链条是三段，全部在 getter 里即时求值：

1. `hero != null ? hero.CurrentSettlement : null` —— 双层三元保护，英雄为空时不进判定。
2. `hero.CurrentSettlement.IsTrainingField()` —— 这是 `StoryMode.Extensions` 提供的扩展方法，内部判定 `SettlementComponent is TrainingField`，不是按聚落名匹配。
3. 命中则 `return 0f`，否则 `base.BaseModel.GetXpMultiplier(hero)`。

注意第三点：**这里返回的是倍率 0，不是经验 0**。调用方拿到 0 之后仍然会走完自己的加经验流程，只是加出来是 0。若某个 mod 的经验来源绕过了本模型（例如直接写技能值），本归零完全管不到。

**常见误用与坑**

- **倍率 0 ≠ 不产生事件。** 经验结算相关的通知、成就钩子可能仍然触发，只是数值为零。基于「经验变化量 > 0」的 mod 逻辑要自己判。
- **`IsTrainingField()` 认组件类型。** 给任意聚落挂上 `TrainingField` 组件即可让该聚居内的所有英雄经验归零；教程正式结束后若玩家仍能进训练场聚落，这里依旧为 0。
- **与战斗经验模型是两回事。** 战斗命中经验走 [StoryModeCombatXpModel](../StoryModeCombatXpModel)，那里用的是 `Settlement.CurrentSettlement`（玩家的当前聚落），与本模型的 `hero.CurrentSettlement`（该英雄自己的聚落）不是同一个对象。队伍成员被派驻别处时两者结论会不同。
- **`hero` 参数允许为 null。** 调用方会传空英雄（做批量计算时），保护已写在源码里，自行调用时别自己先解引用。

## 主要成员

- `GetXpMultiplier(Hero hero)`
  返回该英雄的非战斗经验倍率。训练场为 0，否则透传 `BaseModel`。**调用方是经验结算流程**，mod 侧通常只需覆写，不必主动调。
- 私有：`StoryMode.Extensions` 的 `Settlement.IsTrainingField()` 扩展方法是判定依据，StoryMode 自己不定义任何字段。

## 使用示例

```csharp
// 场景：训练场不归零，但压到 10%（用于调试数值成长）
public class MyGenericXpModel : GenericXpModel
{
    public override float GetXpMultiplier(Hero hero)
    {
        // 注意沿用源码里的双重保护：hero 可能为 null
        Settlement current = ((hero != null) ? hero.CurrentSettlement : null);
        if (current != null && current.IsTrainingField())
        {
            return 0.1f;
        }
        return base.BaseModel.GetXpMultiplier(hero);
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject;
    starter.AddModel<GenericXpModel>(new MyGenericXpModel());
}
```

## 风险与边界

- **无存档序列化风险**：模型无字段。
- **归零只覆盖本模型路径**：直接给技能加值的 mod（例如某些技能点/教学点系统）不受影响，无法靠这里挡住。
- **与 `StoryModeCombatXpModel` 的判定对象不同**：本模型看 `hero.CurrentSettlement`，战斗模型看 `Settlement.CurrentSettlement`。两者的不一致是源码既有事实，覆写时不要想当然地统一成同一个字段。
- **多层覆写极易被绕过**：只要有一层返回非 0，最终就是非 0；反之返回 0 则全局归零。这是一条短路型规则，没有叠加语义。

## 依赖关系

- [CampaignGameStarter](../../campaign/CampaignGameStarter) — `AddModel<GenericXpModel>` 的注册位置
- [MBGameModel](../../core-extra/MBGameModel) — 透传落到 `BaseModel` 的机制
- [StoryModeCombatXpModel](../StoryModeCombatXpModel) — 战斗命中经验的对偶模型，同样针对训练场归零
- [TrainingFieldCampaignBehavior](../TrainingFieldCampaignBehavior) — 训练场场景与相关游戏菜单的组织者
- [module-map](../../../architecture/module-map) — StoryMode 模块的组成与依赖关系