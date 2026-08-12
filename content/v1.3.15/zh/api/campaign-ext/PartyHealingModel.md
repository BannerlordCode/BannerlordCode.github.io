---
title: "PartyHealingModel"
description: "计算队伍每日治疗量与战斗后伤员存活、手术成功概率的可替换战役规则模型，自身不修改任何队伍状态。"
---
# PartyHealingModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartyHealingModel : MBGameModel<PartyHealingModel>`  
**Base:** `MBGameModel<PartyHealingModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyHealingModel.cs`  
**Default:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyHealingModel.cs`

## 一句话职责

把队伍的军医技能、驻地、士气、饥饿与海上/漂流状态折算成每天恢复的 HP、以及战斗后伤员存活与手术成功概率的一套可替换规则层，它只负责“算多少”，从不改队伍数据。

## 心智模型

这是战役层里一个**纯计算**的策略模型：它只回答“某队伍每天该回多少血”“这场战斗里这个伤员会不会死”“手术成功几率多大”，然后把数字交出去，由真正的行为去落地。修改队伍 HP、伤兵名册、英雄 `HitPoints` 的不是这个模型，而是消费它结果的 [`PartyHealCampaignBehavior`](../PartyHealCampaignBehavior) 与战斗模拟逻辑。引擎在 `Campaign.Current.Models` 里挂一个默认实现 `DefaultPartyHealingModel`，所有查询都经过 `Campaign.Current.Models.PartyHealingModel`；替换实现必须在战役开始注册模型时安装，之后每次 tick 自动生效。

v1.3.15 与 v1.4.5 的八个抽象方法签名完全一致，本页内容以 1.4.5 源码为准。

```text
队伍状态(编制/士气/驻地/饥饿/海上)
   -> Campaign.Current.Models.PartyHealingModel
        -> GetDailyHealingForRegulars / GetDailyHealingHpForHeroes   (每天回血)
        -> GetSurvivalChance / GetSurgeryChance / GetSiegeBombardmentHitSurgeryChance  (战斗后判定)
        -> GetBattleEndHealingAmount / GetHeroesEffectedHealingAmount / GetSkillXpFromHealingTroop
   -> PartyHealCampaignBehavior 按 tick 频率把“每天”数值折算成增量
   -> heroObject.Heal(...) / roster.AddToCountsAtIndex(...) 实际写回世界状态
```

需要改变“规则”时继承并替换这个 Model；需要立刻让某个伤员满血或加人，用 [`Hero`](../../campaign/Hero) 的 `Heal`、名册的 `AddToCountsAtIndex`，或在有真实世界变更时走对应的 `*Action`。**不要**在模型回调里直接写 `Hero.HitPoints`、`MemberRoster` 或触发招募/俘获等 `*Action`——那会绕过 `PartyHealCampaignBehavior` 的溢出累加器，导致治疗被重复叠加或丢失。

### 注册与查询者

实例由 [`Campaign`](../../campaign/Campaign) 的 `Models`（类型 [`GameModels`](../GameModels)）持有，默认类型是 `DefaultPartyHealingModel`，由 `SandBoxManager` 在 `Initialize(CampaignGameStarter)` 中通过 `gameStarter.AddModel(new DefaultPartyHealingModel())` 安装。真实查询者包括：`PartyHealCampaignBehavior`（每小时/每刻/每日结算）、`MapEventSide`（战斗模拟里判定存活）、`Hero`（自身治疗时取整）、`DefaultSkillLevelingManager`（治疗给的经验）、`SiegeEventCampaignBehavior`（攻城炮击的手术加成）。[`PartyBase`](../../campaign/PartyBase) 还把常用结果包成 `HealingRateForMemberRegulars` / `HealingRateForMemberHeroes` 等属性直接委托给本模型。

## 何时用 / 何时不要用

**用：**
- 想调整每日治疗速率、饥饿/漂流的掉血量、要塞/城镇加成。
- 想改变战斗后存活概率、手术成功率（含攻城炮击）、战斗结束 perk 治疗、治疗给的经验。
- 在 SubModule 里 `RegisterModels(CampaignGameStarter starter)` 中 `starter.AddModel(new MyPartyHealingModel())` 覆盖默认实现，其余方法委托回 `DefaultPartyHealingModel` 即可。

**不要用：**
- 不要为了“立刻奶满一队”去直接改 `Hero.HitPoints` 或 `MemberRoster` 的伤兵数——交给模型 + `PartyHealCampaignBehavior` 去应用，否则与溢出累加器（`_overflowedHealingForRegulars` 等）冲突。
- 不要在模型方法体内调用 `Heal`、`AddToCountsAtIndex` 或任何 `*Action`：模型是纯函数，写世界状态会双重治疗并污染存档。
- 不要把“每天”速率当成“每小时”用；行为会再除以 `healFrequencyPerDay`（`HoursInDay`、`4`、`1`），单位错配会让治疗快/慢几十倍。
- 不要缓存模型结果跨 tick 长期复用：速率随士气、驻地、perk、海上状态变化，每 tick 重新算才准。

## 依赖图

### 上游（模型读取）

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供活动战役与 `Models` 注册表，所有查询入口。 |
| [`GameModels`](../GameModels) | 持有 `PartyHealingModel`，即 `Campaign.Current.Models`。 |
| [`PartyBase`](../../campaign/PartyBase) | 主要输入；暴露治疗速率属性与 `MemberRoster` / `PrisonRoster`。 |
| [`MobileParty`](../../campaign/MobileParty) | 移动队伍上下文：士气、驻地、perk、海上/漂流、是否移动。 |
| [`Hero`](../../campaign/Hero) | 英雄治疗的 `HitPoints`、状态与 `Heal` 落点。 |
| [`CharacterObject`](../../campaign/CharacterObject) | 兵种角色：是否英雄、`Tier`、年龄、护甲总和。 |
| [`TroopRoster`](../TroopRoster) | 伤兵与英雄计数，决定能治疗多少、扣多少。 |
| [`ExplainedNumber`](../ExplainedNumber) | 结果容器，可带因素说明（`includeDescriptions`）。 |
| [`DamageTypes`](../../core-extra/DamageTypes) | 战斗伤害类型，用于 `GetSurvivalChance` 判定。 |
| [`DifficultyModel`](../DifficultyModel) | 玩家氏族成员死亡概率乘子（存活判定内读取）。 |
| [`PartyMoraleModel`](../PartyMoraleModel) | `HighMoraleValue` 阈值，用于高士气治疗加成。 |
| [`CharacterDevelopmentModel`](../CharacterDevelopmentModel) | 同族技能/perk 阈值参考（相关模型）。 |

### 下游（消费模型）

| Type | Relation |
| --- | --- |
| [`PartyHealCampaignBehavior`](../PartyHealCampaignBehavior) | 每个 tick 调用模型并把结果写回队伍/英雄。 |
| [`MapEventSide`](../MapEventSide) | 战斗模拟中对每个倒下单位调用 `GetSurvivalChance`。 |
| [`CampaignEvents`](../CampaignEvents) | 行为订阅的 `HourlyTick` / `DailyTickSettlement` / `MapEventEnded` / `OnPlayerBattleEnd`。 |
| [`MapEvent`](../../campaign/MapEvent) | 战斗结束事件，触发 `GetBattleEndHealingAmount`。 |
| [`SiegeEvent`](../SiegeEvent) | 攻城炮击读取 `GetSiegeBombardmentHitSurgeryChance`。 |
| [`CampaignBehaviorBase`](../CampaignBehaviorBase) | 治疗行为的基类。 |
| [`PartySpeedModel`](../PartySpeedModel) | 同族可替换规则模型（参考结构）。 |
| [`PartyWageModel`](../PartyWageModel) · [`PartySizeLimitModel`](../PartySizeLimitModel) | 同族队伍规则模型。 |

## 风险

1. **标题界面 / 模块早期 `Campaign.Current` 为空**：所有调用都形如 `Campaign.Current.Models.PartyHealingModel...`。若在活动战役之外（主菜单、加载前、纯 UI 初始化）调用会空引用。真实调用者都在战役 tick 内，安全；自定义代码需自己 `null` 守卫。
2. **模型空替换 / 抛异常**：`AddModel` 装了一个会抛异常的实现，则每次治疗 tick 都会中断，影响每一个队伍。覆盖时未实现的抽象方法必须委托回 `DefaultPartyHealingModel`，否则 `AddModel` 装上的实例会在首次调用崩溃。
3. **在纯计算里改世界状态**：在模型内调用 `Hero.Heal` 或改名册，会绕过 `PartyHealCampaignBehavior` 的溢出累加字典，治疗被重复叠加或丢失，长期还可能破坏存档一致性。
4. **NaN / 越界破坏不变量**：`GetSurvivalChance` / `GetSurgeryChance` 的返回值必须落在 `[0,1]`；返回 `<0` 或 `>1` 会让死亡概率变为负或超 1。每日治疗可以为负（饥饿/漂流），但暴涨的负值会在一次 tick 内把兵种打成重伤甚至清零。`RoundedResultNumber` 依赖有限数，返回 `NaN`/`±Infinity` 会污染累加器。
5. **单位错配**：模型返回的是“每天”速率；行为再除以 `healFrequencyPerDay`。若你按“每小时”思考并直接放大，治疗会快/慢几十倍。
6. **自定义状态未存档**：模型本身无状态、无需存档；但若你给自定义子类加了字段，必须标 `[SaveableField]` 或用 `TypeDefiner` 注册，否则读档后丢失，可能触发行为逻辑不一致。
7. **缓存陈旧**：速率随士气、驻地、perk、海上状态实时变化；任何把结果存起来跨 tick 复用的做法都会偏离真实值。

## 关键成员（按主题）

### 战斗后判定：存活与手术

#### `float GetSurvivalChance(PartyBase party, CharacterObject agentCharacter, DamageTypes damageType, bool canDamageKillEvenIfBlunt, PartyBase enemyParty = null)`
返回某倒下单位**在战斗后存活（不死亡）的概率**，范围 `[0,1]`。`MapEventSide` 在战斗模拟中为每个倒下单位调用它来决定死活。默认实现：`Blunt` 且 `canDamageKillEvenIfBlunt=false` 时直接返回 `1f`（钝器不致死）；敌方有 `DoctorsOath` perk 会提高存活；英雄因护甲、年龄有额外加成，且玩家氏族成员受 `DifficultyModel` 乘子影响。`agentCharacter.IsHero` 为 `false` 且 `Tier<3` 时还会吃 `PhysicianOfPeople` 加成。
**副作用**：无（纯计算）。**何时调用**：不要手动调用去“决定死活”，那是战斗模拟的职责；覆盖时只改概率公式。

#### `float GetSurgeryChance(PartyBase party)`
战斗后伤员接受手术并成功存活的几率，默认 `0.0015f * 军医(Medicine 技能值)`。`DefaultSkillLevelingManager.OnSurgeryApplied` 用它结算医术经验。
**副作用**：无。**何时调用**：覆盖以调整术后存活/经验节奏。

#### `float GetSiegeBombardmentHitSurgeryChance(PartyBase party)`
攻城炮击命中后额外的手术成功加成，来自 `Medicine.SiegeMedic` perk；无 perk 时返回 `0`。由 `SiegeEventCampaignBehavior` 在炮击结算时读取。
**副作用**：无。**何时调用**：覆盖以调整攻城中的外科加成。

#### `ExplainedNumber GetBattleEndHealingAmount(PartyBase partyBase, Hero hero)`
战斗结束时给英雄的额外治疗量，来自 `PreventiveMedicine`（按缺失 HP 比例）与 `WalkItOff`（攻击方）。`PartyHealCampaignBehavior.OnBattleEndCheckPerkEffects` 在 `MapEventEnded` / `OnPlayerBattleEnd` 中调用，结果 `>0` 时 `heroObject.Heal(...)` 落地。
**副作用**：无（模型不写回，行为写回）。**何时调用**：覆盖以调整战斗结束 perk 治疗。

### 每日治疗量（按天）

#### `ExplainedNumber GetDailyHealingForRegulars(PartyBase partyBase, bool isPrisoner, bool includeDescriptions = false)`
普通兵（伤兵）**每天**恢复的基础 HP。默认：非囚犯移动队伍基础 `+5`，城镇/要塞/高士气/perk 再叠加；饥饿或漂流时为负（按兵数比例扣血）。`PartyBase.HealingRateForMemberRegulars` 直接委托它。`PartyHealCampaignBehavior` 把它除以 tick 频率后累加、落到 `MemberRoster`。
**副作用**：无。**何时调用**：读速率用 `PartyBase.HealingRateForMemberRegulars`；改规则才覆盖本方法。

#### `ExplainedNumber GetDailyHealingHpForHeroes(PartyBase partyBase, bool isPrisoners, bool includeDescriptions = false)`
英雄**每天**恢复的 HP。默认基础 `+11`，要塞 `+8`，囚犯英雄 `+20`；同样受饥饿/漂流影响为负。注意 `partyBase == null` 时走“无队伍归属英雄”分支（返回基础 `11`）。委托给 `PartyBase.HealingRateForMemberHeroes`。
**副作用**：无。**何时调用**：同上。

### 英雄取整与技能经验

#### `int GetHeroesEffectedHealingAmount(Hero hero, float healingRate)`
把一个浮点治疗速率取整成整数 HP，并叠加 `SelfMedication` perk（海上减半）。`Hero` 自身治疗处调用，返回实际应加的 HP。
**副作用**：无。**何时调用**：覆盖以调整英雄治疗取整与自我治疗 perk。

#### `int GetSkillXpFromHealingTroop(PartyBase party)`
每治疗一名普通兵给医术（`Medicine`）的经验，默认 `5`。`DefaultSkillLevelingManager` 在 `OnRegularTroopHealedWhileWaiting` / `OnSurgeryApplied` 中乘以治疗兵数与平均 `Tier` 结算经验。
**副作用**：无。**何时调用**：覆盖以调整治疗给的经验量。

## 最小真实示例

### 示例 1：覆盖模型，提高主队每日治疗（委托默认实现）

```csharp
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

public class GenerousHealingModel : PartyHealingModel
{
    // 默认实现作为 fallback，未覆盖的方法保持原版行为
    private readonly PartyHealingModel _fallback = new DefaultPartyHealingModel();

    public override ExplainedNumber GetDailyHealingForRegulars(PartyBase partyBase, bool isPrisoner, bool includeDescriptions = false)
    {
        ExplainedNumber result = _fallback.GetDailyHealingForRegulars(partyBase, isPrisoner, includeDescriptions);
        if (!isPrisoner && partyBase?.IsMobile == true)
        {
            result.Add(5f, new TextObject("{=genh}Generous marching rest"));
        }
        return result;
    }

    public override float GetSurgeryChance(PartyBase party) => _fallback.GetSurgeryChance(party);
    public override float GetSurvivalChance(PartyBase party, CharacterObject agentCharacter, DamageTypes damageType, bool canDamageKillEvenIfBlunt, PartyBase enemyParty = null) => _fallback.GetSurvivalChance(party, agentCharacter, damageType, canDamageKillEvenIfBlunt, enemyParty);
    public override int GetSkillXpFromHealingTroop(PartyBase party) => _fallback.GetSkillXpFromHealingTroop(party);
    public override ExplainedNumber GetDailyHealingHpForHeroes(PartyBase partyBase, bool isPrisoners, bool includeDescriptions = false) => _fallback.GetDailyHealingHpForHeroes(partyBase, isPrisoners, includeDescriptions);
    public override int GetHeroesEffectedHealingAmount(Hero hero, float healingRate) => _fallback.GetHeroesEffectedHealingAmount(hero, healingRate);
    public override float GetSiegeBombardmentHitSurgeryChance(PartyBase party) => _fallback.GetSiegeBombardmentHitSurgeryChance(party);
    public override ExplainedNumber GetBattleEndHealingAmount(PartyBase partyBase, Hero hero) => _fallback.GetBattleEndHealingAmount(partyBase, hero);
}
```

在 SubModule 中注册（战役初始化时 `AddModel` 会替换默认实例）：

```csharp
protected override void RegisterModels(CampaignGameStarter starter)
{
    base.RegisterModels(starter);
    starter.AddModel(new GenerousHealingModel());
}
```

### 示例 2：仅读取主队每日治疗量（真实获取路径）

```csharp
// 在战役进行中（如某个 CampaignBehavior 的 tick，或 UI 面板读取时）只读不写
if (Campaign.Current != null && MobileParty.MainParty != null)
{
    PartyHealingModel model = Campaign.Current.Models.PartyHealingModel;
    ExplainedNumber regulars = model.GetDailyHealingForRegulars(MobileParty.MainParty.Party, isPrisoner: false, includeDescriptions: true);
    ExplainedNumber heroes = model.GetDailyHealingHpForHeroes(MobileParty.MainParty.Party, isPrisoners: false, includeDescriptions: true);
    // regulars.ResultNumber 是每天恢复 HP；RoundedResultNumber 用于落地整数
    // includeDescriptions=true 时结果带因素明细，可展示给玩家
}
```

这与 `PartyBase.HealingRateForMemberRegulars` / `HealingRateForMemberHeroes` 内部调用的顺序一致；结果只能用于显示或平衡判断，不要写回 `HitPoints` 或名册。

## 导航

- ↑ 父级：[campaign-ext 模型索引](../)
- ↔ 同级：[PartySpeedModel](../PartySpeedModel) · [PartyWageModel](../PartyWageModel) · [PartySizeLimitModel](../PartySizeLimitModel) · [CharacterDevelopmentModel](../CharacterDevelopmentModel) · [DifficultyModel](../DifficultyModel) · [PartyMoraleModel](../PartyMoraleModel) · [GameModels](../GameModels)
- 相关：[PartyBase](../../campaign/PartyBase) · [MobileParty](../../campaign/MobileParty) · [Hero](../../campaign/Hero) · [PartyHealCampaignBehavior](../PartyHealCampaignBehavior) · [CampaignEvents](../CampaignEvents) · [MapEventSide](../MapEventSide)
