---
title: "PartyHealingModel"
description: "队伍治疗契约：定义伤员存活概率、外科手术成功率、每日治疗量与战后回血的抽象规则，是战役治疗系统唯一的替换入口。"
---
# PartyHealingModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public abstract class PartyHealingModel : MBGameModel<PartyHealingModel>`
**基类：** `MBGameModel<PartyHealingModel>`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/ComponentInterfaces/PartyHealingModel.cs`（声明见第 8 行）

## 概述

`PartyHealingModel` 是战役治疗系统的契约层：它只声明「谁会被救活、每天回多少血、攻城轰击能不能救回伤员、战后英雄能回多少血」这些规则接口，不含任何数值或算法。引擎构造 `GameModels` 时把当前生效实现缓存进 `Campaign.Current.Models.PartyHealingModel`（`GameModels.cs:645`），所有治疗代码都从这个属性取实例，因此本契约的每个抽象成员都对应一条玩家可见的治疗路径。原版默认实现是 `DefaultPartyHealingModel`，由 `SandBoxManager.cs:236` 注册。

## 心智模型

把它当作**治疗系统的「接口清单」**，而不是「计算器」：契约回答「需要哪些判定」，默认实现回答「判定结果是多少」。三个心智要点：

1. **契约与实现分离，替换遵循「最后注册者赢」**。`MBGameModel<T>` 只提供 `BaseModel` 槽位与 `Initialize(T baseModel)` 注入方法（`MBGameModel.cs:11`、`MBGameModel.cs:14`）。`CampaignGameStarter.AddModel<T>` 先取当前实现注入新实例的 `BaseModel`，再把新实例**追加**到模型列表末尾（`CampaignGameStarter.cs:95`）；而 `GetGameModel<T>` 从列表**末尾向前**扫描（`GameModelsManager.cs:19`）。所以 mod 注册一次就整体接管，无需卸载原实现。
2. **治疗被拆成三条互不相干的尺度**。战斗瞬间：`GetSurvivalChance` 与 `GetSiegeBombardmentHitSurgeryChance`；每日结算：`GetDailyHealingForRegulars`（按人数）与 `GetDailyHealingHpForHeroes`（按 HP）；战后一次性：`GetBattleEndHealingAmount`。改错尺度会让治疗曲线完全变形。
3. **契约不规定调用时机**。同一个 `GetDailyHealingForRegulars` 既被玩家可见属性调用（`PartyBase.cs:334`），也被每日行为调用（`PartyHealCampaignBehavior.cs:168`），返回值语义一致但消费方不同。

契约本身（`PartyHealingModel.cs:8`）只是 `MBGameModel<PartyHealingModel>` 的子类，没有字段、没有常量、没有构造逻辑。

## 怎么用

**替换方式**：继承本契约需要实现全部 8 个抽象成员；若只想改少数数值，继承 `DefaultPartyHealingModel` 更省事。注册时机通常在 `CampaignBehaviorBase.Initialize()`：

```csharp
campaignGameStarter.AddModel<PartyHealingModel>(new MyHealingModel());
```

**真实坑**：

1. **`GetSurvivalChance` 返回的是「存活概率」，不是「死亡概率」**。`SandboxAgentDecideKilledOrUnconsciousModel` 用 `1f - 返回值` 得到致死概率（`SandboxAgentDecideKilledOrUnconsciousModel.cs:34`）。语义写反会导致战场上无人死亡或全灭。
2. **抽象成员漏一个就编译不过**。契约类没有任何默认体；若覆写不全，用 `DefaultPartyHealingModel` 作基类即可只改关心的成员。
3. **`includeDescriptions` 只影响说明文本，不影响数值**。`ResultNumber` 相同，区别只在于返回的 `ExplainedNumber` 是否带逐项来源；UI 走 `...Explained` 属性（`PartyBase.cs:344`），结算走 `...RateForMemberRegulars`（`PartyBase.cs:334`）。
4. **英雄与正规军走两套入口**。`GetDailyHealingForRegulars` 按「人数/天」返回，`GetDailyHealingHpForHeroes` 按「HP/天」返回；两者对囚犯的处理也不同。

**真实使用点**：

- `GameModels.cs:645` — 引擎构造时缓存生效实例：`this.PartyHealingModel = base.GetGameModel<PartyHealingModel>()`。
- `SandBoxManager.cs:236` — 原版注册默认实现：`gameStarter.AddModel<PartyHealingModel>(new DefaultPartyHealingModel())`。
- `PartyBase.cs:334` / `PartyBase.cs:344` — `HealingRateForMemberRegulars` 与其 `Explained` 版本。
- `PartyBase.cs:354` / `PartyBase.cs:364` — `HealingRateForMemberHeroes` 与其 `Explained` 版本。
- `Hero.cs:2264` — `Hero.Heal` 调 `GetHeroesEffectedHealingAmount` 决定实际回血量。
- `PartyHealCampaignBehavior.cs:78` — 战后结算调 `GetBattleEndHealingAmount`。
- `PartyHealCampaignBehavior.cs:167` / `PartyHealCampaignBehavior.cs:168` — 每日囚犯治疗分别调英雄与正规军入口。
- `SandboxAgentDecideKilledOrUnconsciousModel.cs:34` — 战场致死判定：存活概率取反。
- `MapEventSide.cs:1144` — 快速模拟战斗里用存活概率决定士兵是否阵亡。
- `SiegeEventCampaignBehavior.cs:175` — 攻城轰击命中时查询手术成功率。
- `DefaultSkillLevelingManager.cs:337` — 治疗伤员时按 `GetSkillXpFromHealingTroop` 给医疗技能经验。

## 关键成员

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `float GetSurgeryChance(PartyBase party)` | 常规战斗的外科手术成功率；默认实现取队伍 `EffectiveSurgeon` 的医疗技能 × 0.0015（`DefaultPartyHealingModel.cs:17`）。`PartyHealingModel.cs:11` |
| `float GetSurvivalChance(PartyBase party, CharacterObject agentCharacter, DamageTypes damageType, bool canDamageKillEvenIfBlunt, PartyBase enemyParty = null)` | 单个战斗单位在本次伤害下的**存活概率**（0–1）；钝击且不允许致死时直接返回 1，调用方通常取 `1f - 返回值` 作为致死率。`PartyHealingModel.cs:14` |
| `int GetSkillXpFromHealingTroop(PartyBase party)` | 每治疗一个伤员给医疗技能多少经验；默认实现固定 5（`DefaultPartyHealingModel.cs:108`）。`PartyHealingModel.cs:17` |
| `ExplainedNumber GetDailyHealingForRegulars(PartyBase partyBase, bool isPrisoner, bool includeDescriptions = false)` | 正规军每日**人数**治疗量；囚犯默认 +1，饥饿与漂流状态返回负值。`PartyHealingModel.cs:20` |
| `ExplainedNumber GetDailyHealingHpForHeroes(PartyBase partyBase, bool isPrisoners, bool includeDescriptions = false)` | 英雄每日 **HP** 治疗量；囚犯默认 +20，断粮且不在定居点时直接返回 -19。`PartyHealingModel.cs:23` |
| `int GetHeroesEffectedHealingAmount(Hero hero, float healingRate)` | 把浮点治疗率折算成英雄实际回血整数，含 `SelfMedication` perk 与随机进位。`PartyHealingModel.cs:26` |
| `float GetSiegeBombardmentHitSurgeryChance(PartyBase party)` | 攻城器械命中时触发手术（避免死亡）的额外概率；默认只有 `SiegeMedic` perk 才给加成。`PartyHealingModel.cs:29` |
| `ExplainedNumber GetBattleEndHealingAmount(PartyBase partyBase, Hero hero)` | 战斗结束时英雄的**一次性**回血，由 `PreventiveMedicine` 与 `WalkItOff` perk 驱动。`PartyHealingModel.cs:32` |

## 真实示例

### 示例 1：整体替换治疗规则（全员几乎不死）

```csharp
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public class NoPainHealingModel : PartyHealingModel
{
    public override float GetSurgeryChance(PartyBase party) => 0.05f;

    public override float GetSurvivalChance(PartyBase party, CharacterObject agentCharacter, DamageTypes damageType, bool canDamageKillEvenIfBlunt, PartyBase enemyParty = null) => 1f;

    public override int GetSkillXpFromHealingTroop(PartyBase party) => 5;

    public override ExplainedNumber GetDailyHealingForRegulars(PartyBase partyBase, bool isPrisoner, bool includeDescriptions = false)
        => new ExplainedNumber(isPrisoner ? 1f : 5f, includeDescriptions, null);

    public override ExplainedNumber GetDailyHealingHpForHeroes(PartyBase partyBase, bool isPrisoners, bool includeDescriptions = false)
        => new ExplainedNumber(11f, includeDescriptions, null);

    public override int GetHeroesEffectedHealingAmount(Hero hero, float healingRate) => (int)healingRate;

    public override float GetSiegeBombardmentHitSurgeryChance(PartyBase party) => 0f;

    public override ExplainedNumber GetBattleEndHealingAmount(PartyBase partyBase, Hero hero)
        => new ExplainedNumber(0f, false, null);
}
```

### 示例 2：注册并验证生效

```csharp
campaignGameStarter.AddModel<PartyHealingModel>(new NoPainHealingModel());

ExplainedNumber daily = Campaign.Current.Models.PartyHealingModel
    .GetDailyHealingForRegulars(mobileParty.Party, false, true);
float regularsPerDay = daily.ResultNumber;   // 现在恒为 5
```

注意 `GetSurvivalChance` 返回 1 表示「必定存活」；若要「必定死亡」应返回 0，调用方的 `1f - 返回值` 才会变成 1。

## 参见

- ↔ [DefaultPartyHealingModel](../DefaultPartyHealingModel)：本契约的原版实现，全部数值与 perk 交互的权威参考。
- ↔ [PartyBase](../../campaign/PartyBase)：契约方法的参数与 `HealingRateForMemberRegulars` 等属性的宿主。
- ↔ [MobileParty](../../campaign/MobileParty)：每日治疗结算的实际消费方。
- ↔ [CampaignGameStarter](../../campaign/CampaignGameStarter)：`AddModel<T>` 的宿主，模型替换的注册入口。

## 导航

- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
