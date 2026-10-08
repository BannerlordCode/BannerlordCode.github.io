---
title: "DefaultPartyHealingModel"
description: "PartyHealingModel 的原版实现：以医疗技能与 Medicine/Athletics perk 为核心，把存活概率、每日回血、断粮惩罚、攻城手术与战后回血折算成具体数值。"
---
# DefaultPartyHealingModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class DefaultPartyHealingModel : PartyHealingModel`
**基类：** `PartyHealingModel`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/GameComponents/DefaultPartyHealingModel.cs`（声明见第 14 行）

## 概述

`DefaultPartyHealingModel` 是 `PartyHealingModel` 契约的原版实现，由 `SandBoxManager.cs:236` 注册进模型列表。它把治疗规则落成具体数字：正规军每日基础 +5、英雄每日基础 +11、囚犯英雄 +20、断粮按队伍规模比例扣血、攻城器械命中才可能触发 `SiegeMedic` 手术。核心两条算法是 `GetSurvivalChance`（把外科医生技能、等级、护甲、年龄累加成「存活分母」，再取 `1 - 1/分母`）与 `GetDailyHealingForRegulars`（基础值 + 队长技能 + 一长串 perk / 文化 / 建筑修正）。类内的 private 常量与方法承载了全部数值，是理解治疗曲线来源的关键。

## 心智模型

把它想成**一条固定工位的治疗装配线**，三个心智要点：

1. **存活概率 = `1 - 1/分母`，不是直接累加**。`GetSurvivalChance` 先构造 `ExplainedNumber(1f)` 当作分母，把外科医生技能（玩家队伍 ×1.0、AI 队伍 ×0.25，见 `DefaultPartyHealingModel.cs:327` 的 `AddSurgeonSurvivalBonus`）、等级、护甲、年龄，以及敌方医生 `DoctorsOath` 技能 ×0.1（`DefaultPartyHealingModel.cs:312`）全部加进分母，最后返回 `1 - 1/分母`。所以「加成越多」分母越大、存活概率越高，但永远逼近 1 而不会超过。
2. **三条尺度彼此独立**。战斗瞬间（`GetSurvivalChance`、`GetSiegeBombardmentHitSurgeryChance`）、每日（`GetDailyHealingForRegulars`、`GetDailyHealingHpForHeroes`）、战后一次性（`GetBattleEndHealingAmount`）各有各的入口，不要指望改一个就影响另外两个。
3. **数值几乎全是 private 常量**。`BaseDailyHealingForTroops = 5`（`DefaultPartyHealingModel.cs:360`）、`BaseDailyHealingForHeroes = 11`（`DefaultPartyHealingModel.cs:351`）、`StarvingWoundedEffectRatio = 0.25f`（`DefaultPartyHealingModel.cs:366`）、`AISurgeonSurvivalMultiplier = 0.25f`（`DefaultPartyHealingModel.cs:375`）。想改数值应继承本类覆写公开方法，而不是改常量。

## 怎么用

**替换方式**：继承本类，只覆写关心的成员，再 `campaignGameStarter.AddModel<PartyHealingModel>(new MyModel())` 注册。因为基类提供默认实现，`base.GetDailyHealingForRegulars(...)` 可以保留整条装配线、只在其上叠加修正——这是「改规则」而非「重算规则」的典型写法。

**真实坑**：

1. **断粮惩罚是按规模比例扣，不是固定值**。非驻军断粮时扣 `总正规军数 × 0.25`（`DefaultPartyHealingModel.cs:137`），驻军断粮扣「总正规军数 × 0.1 的随机化结果」（`DefaultPartyHealingModel.cs:131`）。队伍越大掉血越快。
2. **英雄断粮是硬返回，不是加减**。`GetDailyHealingHpForHeroes` 在断粮且不在定居点时直接 `return new ExplainedNumber(-19f, ...)`（`DefaultPartyHealingModel.cs:241`），完全跳过后面所有 perk 加成。
3. **攻城手术只认 `SiegeMedic` perk，且只对移动队伍生效**。没有这个 perk 时恒为 0；判定条件是 `party.IsMobile && party.MobileParty.HasPerk(...)`。
4. **存活概率有三条提前返回**。钝击且不允许致死、英雄在 VeryEasy 难度、玩家角色在 Easy 难度，都会直接返回 1。调平衡时别指望覆写后面的公式能盖过它们。
5. **驻军与野战队伍走不同技能分支**。驻军吃总督技能 `GovernorHealingRateBonus`，野战队伍吃队长技能 `HealingRateBonusForRegulars`；同一套 perk 也只对非驻军、非民兵生效。

**真实使用点**：

- `DefaultPartyHealingModel.cs:17` — 外科手术成功率 = `EffectiveSurgeon` 医疗技能 × 0.0015。
- `DefaultPartyHealingModel.cs:35` — 攻城轰击手术只在 `SiegeMedic` perk 下返回 `PrimaryBonus`。
- `DefaultPartyHealingModel.cs:108` — 治疗经验固定返回 5。
- `DefaultPartyHealingModel.cs:283` — 英雄回血经 `SelfMedication` perk 与随机进位折算。
- `DefaultPartyHealingModel.cs:297` — 战后回血由 `PreventiveMedicine` / `WalkItOff` 驱动。
- `PartyBase.cs:334` / `PartyBase.cs:344` — `HealingRateForMemberRegulars` 直接读 `GetDailyHealingForRegulars`。
- `PartyHealCampaignBehavior.cs:78` — 战后按 `GetBattleEndHealingAmount` 给英雄回血。
- `PartyHealCampaignBehavior.cs:167` / `PartyHealCampaignBehavior.cs:168` — 每日囚犯治疗分别调英雄与正规军入口。
- `Hero.cs:2264` — `Hero.Heal` 调 `GetHeroesEffectedHealingAmount`。
- `MapEventSide.cs:1144` — 快速模拟战斗的存活判定。
- `SiegeEventCampaignBehavior.cs:175` — 攻城轰击手术查询。
- `SandBoxManager.cs:236` — 默认实现注册点。

## 关键成员

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `public override float GetSurgeryChance(PartyBase party)` | 取 `party.MobileParty.EffectiveSurgeon` 的医疗技能，返回 `0.0015f × 技能`；队伍没有外科医生时为 0。`DefaultPartyHealingModel.cs:17` |
| `public override float GetSiegeBombardmentHitSurgeryChance(PartyBase party)` | 仅当队伍是移动队伍且拥有 `DefaultPerks.Medicine.SiegeMedic` 时返回该 perk 的 `PrimaryBonus`，否则 0。`DefaultPartyHealingModel.cs:35` |
| `public override float GetSurvivalChance(...)` | 存活概率主公式。三条提前返回（钝击/难度）之后，累加外科医生技能、等级 ×0.02、护甲 ×0.01、年龄 ×-0.01、英雄额外 +50% 因子，再取 `1 - 1/分母`；敌队有 `DoctorsOath` 时按 ×0.1 计入并触发 `SkillLevelingManager.OnSurgeryApplied`。`DefaultPartyHealingModel.cs:46` |
| `public override int GetSkillXpFromHealingTroop(PartyBase party)` | 固定返回 5，是 `SkillEXPFromHealingTroops` 常量的唯一消费者。`DefaultPartyHealingModel.cs:108` |
| `public override ExplainedNumber GetDailyHealingForRegulars(...)` | 正规军每日治疗主装配线：囚犯 +1；断粮按规模扣；正常时基础 +5，再叠加总督/队长技能、`TriageTent`、`WalkItOff`、`BestMedicine`、`PristineStreets`、`BushDoctor`、`Rearguard`、`PerfectHealth`、`HelpingHands` 等；漂流状态按 ×0.25 扣血。`DefaultPartyHealingModel.cs:114` |
| `public override ExplainedNumber GetDailyHealingHpForHeroes(...)` | 英雄每日 HP 装配线：囚犯 +20；断粮且不在定居点直接返回 -19；正常时基础 +11，再叠加 `TriageTent`、`WalkItOff`、`BestMedicine`、定居点加成与 `HealingRateBonusForHeroes` 技能。`DefaultPartyHealingModel.cs:225` |
| `public override int GetHeroesEffectedHealingAmount(Hero hero, float healingRate)` | 把浮点治疗率经 `SelfMedication` perk 修正后，按小数部分与 `MBRandom.RandomFloat` 比较决定是否进位。`DefaultPartyHealingModel.cs:283` |
| `public override ExplainedNumber GetBattleEndHealingAmount(PartyBase party, Hero hero)` | 战斗结束一次性回血：`PreventiveMedicine` 按已损失 HP 的 `SecondaryBonus` 回血；进攻方且带 `WalkItOff` 时再加固定值。`DefaultPartyHealingModel.cs:297` |
| `private static void AddDoctorsOathSkillBonusForParty(MobileParty enemyParty, ref ExplainedNumber explainedNumber)` | 敌方医生技能加成：技能值映射后按玩家事件 ×1.0、非玩家事件 ×0.1 加入分母。`DefaultPartyHealingModel.cs:312` |
| `private void AddSurgeonSurvivalBonus(MobileParty mobileParty, ref ExplainedNumber survivalDenominator)` | 本方外科医生加成：玩家事件 ×1.0、AI 事件 ×0.25 加入分母。`DefaultPartyHealingModel.cs:327` |
| `private const int BaseDailyHealingForHeroes = 11` | 英雄每日基础回血常量。`DefaultPartyHealingModel.cs:351` |
| `private const int BaseDailyHealingForTroops = 5` | 正规军每日基础回血常量。`DefaultPartyHealingModel.cs:360` |
| `private const float StarvingWoundedEffectRatio = 0.25f` | 非驻军断粮时按队伍规模的扣血比例。`DefaultPartyHealingModel.cs:366` |
| `private const float AISurgeonSurvivalMultiplier = 0.25f` | AI 队伍外科医生技能进入分母时的倍率。`DefaultPartyHealingModel.cs:375` |

## 真实示例

### 示例 1：在默认公式上叠加修正

```csharp
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public class HarshHealingModel : DefaultPartyHealingModel
{
    public override int GetSkillXpFromHealingTroop(PartyBase party) => 1;

    public override float GetSurgeryChance(PartyBase party)
    {
        return base.GetSurgeryChance(party) + 0.02f;   // 在默认技能公式上再补 2%
    }

    public override ExplainedNumber GetDailyHealingForRegulars(PartyBase partyBase, bool isPrisoner, bool includeDescriptions = false)
    {
        ExplainedNumber healing = base.GetDailyHealingForRegulars(partyBase, isPrisoner, includeDescriptions);
        healing.AddFactor(-0.5f, new TextObject("MyMod: harsh conditions"));   // 整体减半
        return healing;
    }
}
```

### 示例 2：注册并观察生效

```csharp
campaignGameStarter.AddModel<PartyHealingModel>(new HarshHealingModel());

float rate = Campaign.Current.Models.PartyHealingModel
    .GetDailyHealingForRegulars(mobileParty.Party, false, false)
    .ResultNumber;
```

因为 `HarshHealingModel` 继承了默认实现，未覆写的 `GetDailyHealingHpForHeroes`、`GetSurvivalChance` 等仍然沿用原版数值。

## 参见

- ↔ [PartyHealingModel](../PartyHealingModel)：本类实现的契约层，定义全部抽象成员与替换机制。
- ↔ [PartyBase](../../campaign/PartyBase)：消费每日治疗率的属性宿主。
- ↔ [MobileParty](../../campaign/MobileParty)：治疗结算与外科医生技能的实际来源。
- ↔ [Hero](../../campaign/Hero)：`Heal` 与英雄回血路径的入口。

## 导航

- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
