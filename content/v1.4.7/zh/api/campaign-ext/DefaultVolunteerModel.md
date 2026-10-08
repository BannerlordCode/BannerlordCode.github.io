---
title: "DefaultVolunteerModel"
description: "志愿兵招募的默认规则引擎：决定可招募档位、每日产出概率与基础兵种。"
---
# DefaultVolunteerModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class DefaultVolunteerModel : VolunteerModel`
**基类：** `VolunteerModel`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/GameComponents/DefaultVolunteerModel.cs`（声明见第 11 行）

## 概述

`DefaultVolunteerModel` 是 `VolunteerModel` 的默认实现，即游戏原版的志愿兵规则引擎。它决定三件事：买方能从某个领主招募到哪一档志愿者（档位索引 0–6）、该领主每天产出志愿者的概率、以及志愿者给什么基础兵种。此外还用 `CanHaveRecruits` 限定哪些职业能拥有志愿者。所有方法都是纯查询：输入买方、卖方、聚落，输出数值或兵种，不保存任何状态。

## 心智模型

把这个类看成一台"志愿兵数值计算器"。核心货币是**档位索引**：`MaximumIndex*` 系列算出"最多能买几档"，`GetDailyVolunteerProductionProbability` 用 index 做指数衰减算产出概率，`GetBasicVolunteer` 决定给什么兵。所有修正都叠在一个基础值上——关系档位、同阵营/战争、难度、perk——最后统一用 `MathF.Min` 钳制在 [0, 6]。它不做状态管理，每次调用独立计算，因此可以安全地重写单个方法而不影响其他规则。

## 怎么用

1. 继承 `VolunteerModel`，只重写想改的方法——签名照抄，例如 `MaximumIndexHeroCanRecruitFromHero`（DefaultVolunteerModel.cs:14）。
2. 未重写的方法自动落到基类 `VolunteerModel` 的默认实现，不需要全部重写。
3. 在战役初始化时把子类实例安装为当前战役的志愿者模型；游戏通过 `Campaign.Current.Models` 访问当前模型——本类自己就是这样取 `DifficultyModel` 的（DefaultVolunteerModel.cs:61）。
4. 注意 `MaxVolunteerTier` 与档位索引是两套数值：前者固定返回 4（DefaultVolunteerModel.cs:148），后者上限 6（DefaultVolunteerModel.cs:47），改一个不会自动改另一个。

**真实坑**

- **坑 1：`useValueAsRelation` 的默认值是哨兵。** 默认 -101（DefaultVolunteerModel.cs:14）表示"用实时关系"，走 `buyerHero.GetRelation(sellerHero)`（DefaultVolunteerModel.cs:17）；传 -100 及以上的值会被直接当作关系值。想强制按某档位计算就传具体数值。
- **坑 2：所有档位都被钳制在 6。** `MathF.Min(6, ...)` 出现在两条路径的末尾（DefaultVolunteerModel.cs:47、DefaultVolunteerModel.cs:86）——关系和 perk 叠满也不会超过 6，想突破必须重写方法。
- **坑 3：`GetBasicVolunteer` 有精英分支。** 乡村名流（`IsRuralNotable`）且绑定城堡时返回 `EliteBasicTroop` 而非 `BasicTroop`（DefaultVolunteerModel.cs:128-132）——自定义兵种体系时漏掉这条会让城堡名流给错兵。
- **坑 4：`CanHaveRecruits` 用枚举差值判断职业。** `occupation - Occupation.Artisan <= 5`（DefaultVolunteerModel.cs:139）不是范围检查；在 `Artisan` 之前插入新职业枚举会改变语义。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `MaximumIndexHeroCanRecruitFromHero(Hero, Hero, int)` | 买方能从卖方招募的最高志愿者档位：内部基础值 + 关系档位 + 同阵营/战争修正 + 五项 perk 加成，钳制在 6。DefaultVolunteerModel.cs:14 |
| `MaximumIndexGarrisonCanRecruitFromHero(Settlement, Hero)` | 聚落守军的招募档位：以 `settlement.Owner` 为买方复用内部计算。DefaultVolunteerModel.cs:51 |
| `MaximumIndexCanPartyRecruitFromHeroInternal(Hero, Hero)`（private） | 档位内部基础：1 + 难度模型的玩家招募槽奖励 + 团伙首领遇 OneOfTheFamily 总督的加成，钳制在 [0, 6]。DefaultVolunteerModel.cs:57 |
| `GetDailyVolunteerProductionProbability(Hero, int, Settlement)` | 领主某天产出志愿者的概率：基础 0.7，按阵营繁荣度、Cantons 政策、CavalryTactics perk 调整，结果包在 `ExplainedNumber` 里。DefaultVolunteerModel.cs:90 |
| `GetBasicVolunteer(Hero)` | 卖方的基础志愿兵：乡村名流且绑定城堡给 `EliteBasicTroop`，否则给 `BasicTroop`。DefaultVolunteerModel.cs:126 |
| `CanHaveRecruits(Hero)` | 英雄是否能有志愿者：佣兵，或职业枚举在 `Artisan` 及之后 5 位之内。DefaultVolunteerModel.cs:136 |
| `MaxVolunteerTier` | 志愿者档位上限属性，固定返回 4。DefaultVolunteerModel.cs:144 |

## 真实示例

```csharp
// 通过 Campaign.Current.Models 拿到当前志愿者模型（游戏读取各模型的方式与此相同）
VolunteerModel model = Campaign.Current.Models.VolunteerModel;

// 玩家部队能从某领主招募到的最高志愿者档位（0–6）
int maxIndex = model.MaximumIndexHeroCanRecruitFromHero(Hero.MainHero, sellerHero);

// 该领主当天产出志愿者的概率（0–1）
float dailyChance = model.GetDailyVolunteerProductionProbability(sellerHero, 0, sellerHero.CurrentSettlement);

// 该领主是否能有志愿者、基础志愿兵是谁
bool canHave = model.CanHaveRecruits(sellerHero);
CharacterObject basic = model.GetBasicVolunteer(sellerHero);
```

## 参见

- [VolunteerModel](../VolunteerModel) — 基类，定义本模型实现的接口与默认行为
- [Settlement](../../campaign/Settlement) — 聚落类型，`GetDailyVolunteerProductionProbability` 与 `MaximumIndexGarrisonCanRecruitFromHero` 的参数

## 导航

- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
