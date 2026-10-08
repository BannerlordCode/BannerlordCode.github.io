---
title: "VolunteerModel"
description: "决定据点与英雄每天能产出多少志愿兵、志愿兵的最高可招募索引、基础兵种以及是否允许招募的抽象模型。"
---
# VolunteerModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public abstract class VolunteerModel : MBGameModel<VolunteerModel>`
**基类：** `MBGameModel<VolunteerModel>`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/ComponentInterfaces/VolunteerModel.cs`（声明见第 8 行）

## 概述

`VolunteerModel` 是战役里「志愿兵（Volunteer）补给」这条链路的抽象契约。它把玩家和 AI 领主的兵源补充分成三个可替换的决策点：谁能招募（`CanHaveRecruits`）、最多能招到第几个槽位（英雄对英雄与据点驻军两条路径）、以及每天每个槽位实际产出志愿兵的概率；再补上「基础兵种是什么」和「全局最高兵种层级」两个配置量。所有方法都是 `abstract`，运行时由 `Campaign.Current.Models.VolunteerModel` 指向具体的 `DefaultVolunteerModel` 或 mod 自己的实现，因此它同时也是「改兵源规则」最干净的切入口。

## 心智模型

把它理解成**一个每天被轮询的兵源分配器，而不是一个状态容器**。它自己不保存任何志愿兵数量：库存由 `Settlement`/`Hero` 侧维护，这个模型只负责回答「第 index 个槽位今天要不要吐一个兵」和「这个兵是谁」。

调用顺序是有层次的，先问边界、再问概率、最后取兵种：

1. 用 `CanHaveRecruits` 判断这个英雄是否有资格参与志愿兵系统（例如是否是囚犯、是否属于可招募阵营）。
2. 用 `MaximumIndexHeroCanRecruitFromHero` 或 `MaximumIndexGarrisonCanRecruitFromHero` 拿到**可用的索引上界**——注意这是「索引」而不是数量，两者相差 1。
3. 对 `0..上界` 中的每个 index 调 `GetDailyVolunteerProductionProbability`，把返回的概率当作当天的产出几率。
4. 概率命中时，用 `GetBasicVolunteer` 取基础兵种，再按 `MaxVolunteerTier` 决定可以向上提升到哪一级。

因此这个模型的心智模型是「**索引驱动的、概率性的、无状态的**」：所有随机性与存储都在调用方，替换模型只改变规则参数与判定逻辑，不会改变调用时机。

## 怎么用

**替换方式。** 继承 `VolunteerModel` 并实现全部六个成员，然后在 `CampaignGameStarter` 阶段把自己的实例注册进模型集合，覆盖默认的 `DefaultVolunteerModel`（与 `../DefaultVolunteerModel` 对照着读，可以看清默认数值的来源）。因为它是 `MBGameModel<VolunteerModel>` 的子类，注册后通过 `Campaign.Current.Models.VolunteerModel` 取到的就是你自己的实现，不需要改动任何调用方代码。

**真实坑。**

- `MaximumIndexHeroCanRecruitFromHero` 的第三个参数 `useValueAsRelation` 默认值是 `-101`（`VolunteerModel.cs:11`）。这是一个**哨兵值**，语义是「忽略这个参数、使用买卖双方的真实关系值」。传 `0` 不是「未指定」，而是一个合法的关系值（关系为 0），会得到和默认路径不同的结果。想显式用某个关系值时才传非 `-101` 的数。
- 两个 `MaximumIndex*` 方法语义完全不同：`MaximumIndexHeroCanRecruitFromHero`（`VolunteerModel.cs:11`）是**英雄对英雄**的招募上界，受双方关系影响；`MaximumIndexGarrisonCanRecruitFromHero`（`VolunteerModel.cs:14`）是**据点驻军**的上界，只吃 `Settlement` 和卖方英雄，**不看关系**。给驻军场景错误地调用前者会得到与预期不符的宽松或严格上界。
- `GetDailyVolunteerProductionProbability`（`VolunteerModel.cs:17`）的 `index` 参数必须落在上一步算出的上界之内，且返回的是**每天的概率**而非数量。不要把它当「产出几个兵」用，也不要用 `index = 上界 + 1` 去探测越界行为——那属于未定义输入。
- `MaxVolunteerTier`（`VolunteerModel.cs:27`）是**只读属性**，只能在子类里通过 getter 返回常量或计算结果；它约束的是全局最高可招募层级，而不是某个据点的当前层级，改它会影响所有阵营的兵源质量上限。
- `GetBasicVolunteer`（`VolunteerModel.cs:20`）返回的是 `CharacterObject` 模板，是槽位的**基础**兵种；真正的产出兵种还需要结合 `MaxVolunteerTier` 在升级链上取值，别直接把返回值当作最终生成的单位。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `MaximumIndexHeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int useValueAsRelation = -101)` | 计算英雄从另一名英雄处可招募的最高槽位索引；关系值缺省时用 `-101` 哨兵走真实关系（`VolunteerModel.cs:11`） |
| `MaximumIndexGarrisonCanRecruitFromHero(Settlement settlement, Hero sellerHero)` | 计算某据点驻军从卖方英雄处可招募的最高槽位索引，与关系无关（`VolunteerModel.cs:14`） |
| `GetDailyVolunteerProductionProbability(Hero hero, int index, Settlement settlement)` | 返回指定英雄在指定槽位、指定据点下当天产出志愿兵的概率（`VolunteerModel.cs:17`） |
| `GetBasicVolunteer(Hero hero)` | 返回该英雄槽位的基础志愿兵 `CharacterObject` 模板（`VolunteerModel.cs:20`） |
| `CanHaveRecruits(Hero hero)` | 判定该英雄是否有资格参与志愿兵招募与产出（`VolunteerModel.cs:23`） |
| `MaxVolunteerTier` | 只读属性，给出全局最高可招募兵种层级（`VolunteerModel.cs:27`） |

## 真实示例

```csharp
VolunteerModel model = Campaign.Current.Models.VolunteerModel;

if (model.CanHaveRecruits(sellerHero))
{
    // -101 是哨兵值：表示沿用 buyerHero 与 sellerHero 的真实关系
    int maxIndex = model.MaximumIndexHeroCanRecruitFromHero(buyerHero, sellerHero, -101);

    for (int index = 0; index <= maxIndex; index++)
    {
        float chance = model.GetDailyVolunteerProductionProbability(sellerHero, index, settlement);
        if (MBRandom.RandomFloat < chance)
        {
            CharacterObject volunteer = model.GetBasicVolunteer(sellerHero);
            int tierCap = model.MaxVolunteerTier;
            // volunteer 是基础兵种模板，tierCap 决定它最多能提升到哪一级
            RecruitVolunteer(volunteer, tierCap);
        }
    }
}
```

## 参见

- [`DefaultVolunteerModel`](../DefaultVolunteerModel) — 默认实现，可直接对照各方法的数值来源与边界处理。
- [`Settlement`](../../campaign/Settlement) — 志愿兵产出的载体，驻军路径的入参类型。

## 导航

- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
