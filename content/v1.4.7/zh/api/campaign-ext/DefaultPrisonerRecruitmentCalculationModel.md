---
title: "DefaultPrisonerRecruitmentCalculationModel"
description: "默认俘虏招募模型，决定俘虏顺从值的增长速率、招募门槛、招募代价与一次可招募的人数。"
---
# DefaultPrisonerRecruitmentCalculationModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class DefaultPrisonerRecruitmentCalculationModel : PrisonerRecruitmentCalculationModel`
**基类：** `PrisonerRecruitmentCalculationModel`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonerRecruitmentCalculationModel.cs`（声明见 DefaultPrisonerRecruitmentCalculationModel.cs:12）

## 概述
DefaultPrisonerRecruitmentCalculationModel 是 PrisonerRecruitmentCalculationModel 的默认实现，负责"俘虏转正"这条链路上的全部数值：每小时累积多少顺从值、招募某个角色需要多少顺从值、招募会扣掉多少士气、以及此刻一次能带走多少人。它不保存任何状态，所有判断都从传入的 PartyBase、CharacterObject 以及 Campaign 当前生效的模型里读出，因此替换这个类就等于重写整条俘虏招募曲线。

## 心智模型
把它想成"俘虏营的准入会计"：每个俘虏在囚牢名册（PrisonRoster）里都有一份累积式进度，GetConformityChangePerHour 决定这份进度每小时涨多少，GetConformityNeededToRecruitPrisoner 决定门槛线画在哪里，IsPrisonerRecruitable 就是拿进度和门槛线做比较的那把尺子，而 CalculateRecruitableNumber 把"超出的进度"换算成"可以带走几个人"。三条加成线贯穿始终：领袖的 Leadership 技能是基础速率，Leadership 与 Roguery 系的 Perk 在特定 Tier、兵种与身份条件下追加倍率，而海上（IsCurrentlyAtSea）会成片地关掉这些加成。GetPrisonerRecruitmentMoraleEffect 是这条链路唯一的"代价"出口：招得越多，士气掉得越狠，除非领袖的 Perk 把代价直接归零。读代码时抓住"底数 → 加法项 → 乘法因子"这个顺序，就能看懂每一个分支为什么写成那样。

## 怎么用
替换方式：写一个 PrisonerRecruitmentCalculationModel 的子类，覆盖下面这六个方法，再把它注册为当前生效的模型，替代默认实现。调用侧统一通过 Campaign.Current.Models.PrisonerRecruitmentCalculationModel 取当前实例，所以只要换掉实现，UI 与 AI 都会跟着变（DefaultPrisonerRecruitmentCalculationModel.cs:108 就是调用侧的样子）。

坑：
1. 门槛是平方增长。GetConformityNeededToRecruitPrisoner 直接返回 (Level+6)²-10（DefaultPrisonerRecruitmentCalculationModel.cs:15），高级俘虏的需求是爆炸式上升的；按线性思路调参会发现后期几乎招不到人。
2. 速率不是常数。GetConformityChangePerHour 以 10 为底数，领袖 Leadership 每点只加 0.05（DefaultPrisonerRecruitmentCalculationModel.cs:21），真正的量级来自 Perk 的 AddFactor 与 AddPerkBonusForParty；漏掉任一条分支都会让增长明显偏低。
3. 海上会关掉加成。Tier、Occupation、IsInfantry、IsRanged 四组判断里都带 !party.MobileParty.IsCurrentlyAtSea（DefaultPrisonerRecruitmentCalculationModel.cs:21），所以海上的顺从值增长接近裸底数；想让海上也能招募，必须显式去掉这些条件。
4. Tier 2 是硬下限。IsPrisonerRecruitable 里写死了 character.Tier < 2 与 character.Culture.IsBandit 两条否决，并且会把 out 参数 conformityNeeded 置 0（DefaultPrisonerRecruitmentCalculationModel.cs:89）；private 常量 AILordMinTierRequirementForRecruitPrisoners 记的正是这个下限 2（DefaultPrisonerRecruitmentCalculationModel.cs:121）。
5. 士气代价按人数乘。GetPrisonerRecruitmentMoraleEffect 返回的是"单价 × num"：普通俘虏单价 -1、Occupation.Bandit 单价 -2（DefaultPrisonerRecruitmentCalculationModel.cs:56）；同文化且有 Leadership.Presence、或对强盗有 Roguery.TwoFaced 时直接返回 0。
6. 一次能招几个会被名册人数截断。CalculateRecruitableNumber 取的是 MathF.Min(elementXp / conformityNeeded, elementNumber)（DefaultPrisonerRecruitmentCalculationModel.cs:108），进度再高也带不走比 PrisonRoster 里更多的人。
7. 部队侧的开关是独立的。ShouldPartyRecruitPrisoners 要求 IsMobile、有队伍空位、未超工资上限、非 IsPatrolParty，并且士气大于 30f 或有 Presence（DefaultPrisonerRecruitmentCalculationModel.cs:102）；即使单个俘虏够格，这里返回 false 也不会发生招募。

## 关键成员
| 成员 | 用途 |
|------|------|
| `GetConformityNeededToRecruitPrisoner(CharacterObject)` | 计算招募该角色所需的顺从值门槛，公式为 (Level+6)²-10，随等级平方增长。DefaultPrisonerRecruitmentCalculationModel.cs:15 |
| `GetConformityChangePerHour(PartyBase, CharacterObject)` | 计算俘虏每小时获得的顺从值：以 10f 为底数，叠加领袖 Leadership 技能，以及 FerventAttacker、StoutDefender、LoyaltyAndHonor、LeadByExample、TrustedCommander、Promises 等 Perk 加成；海上会关闭大部分分支。DefaultPrisonerRecruitmentCalculationModel.cs:21 |
| `GetPrisonerRecruitmentMoraleEffect(PartyBase, CharacterObject, int)` | 计算招募 num 名该俘虏造成的士气代价：普通俘虏 -1、强盗 -2，再乘以 num；同文化且有 Presence、或对强盗有 TwoFaced 时返回 0。DefaultPrisonerRecruitmentCalculationModel.cs:56 |
| `IsPrisonerRecruitable(PartyBase, CharacterObject, out int)` | 判定该俘虏能否招募，并通过 out 参数回传所需门槛；非 IsRegular、Tier 超过 MaxCharacterTier、Tier 小于 2、Culture.IsBandit 四种情况直接否决并回传 0。DefaultPrisonerRecruitmentCalculationModel.cs:89 |
| `ShouldPartyRecruitPrisoners(PartyBase)` | 判定该部队此刻是否应该招募俘虏：需为 IsMobile、有队伍空位、未超工资上限、非 IsPatrolParty，且士气大于 30f 或有 Presence。DefaultPrisonerRecruitmentCalculationModel.cs:102 |
| `CalculateRecruitableNumber(PartyBase, CharacterObject)` | 计算一次可招募的人数，取 min(进度 / 门槛, 名册人数)；英雄、空 PrisonRoster 或无 TotalRegulars 时返回 0。DefaultPrisonerRecruitmentCalculationModel.cs:108 |
| `AILordMinTierRequirementForRecruitPrisoners` | private 常量（值 2）：记录 AI 领主可招募的最低 Tier，对应 IsPrisonerRecruitable 里的 Tier 小于 2 硬下限。DefaultPrisonerRecruitmentCalculationModel.cs:121 |

## 真实示例
```csharp
// 取当前生效的俘虏招募模型
PrisonerRecruitmentCalculationModel model = Campaign.Current.Models.PrisonerRecruitmentCalculationModel;

// 1) 先问部队：现在该不该招募俘虏
if (model.ShouldPartyRecruitPrisoners(party))
{
    // 2) 再问单个俘虏：够不够格，门槛是多少
    int conformityNeeded;
    bool recruitable = model.IsPrisonerRecruitable(party, character, out conformityNeeded);

    if (recruitable)
    {
        // 3) 一次能带走几个
        int count = model.CalculateRecruitableNumber(party, character);

        // 4) 代价：这批人会让士气掉多少
        int moraleEffect = model.GetPrisonerRecruitmentMoraleEffect(party, character, count);

        // 5) 顺带看下进度涨得多快（ExplainedNumber 承载底数与各项加成）
        ExplainedNumber perHour = model.GetConformityChangePerHour(party, character);

        // 6) 以及要涨到多少才够
        int needed = model.GetConformityNeededToRecruitPrisoner(character);
    }
}
```

## 参见
- [PrisonerRecruitmentCalculationModel 基类](../PrisonerRecruitmentCalculationModel)
- [PartyBase（俘虏所在的队伍）](../../campaign/PartyBase)
- [CharacterObject（被招募的兵种）](../../campaign/CharacterObject)

## 导航
- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
