---
title: "DefaultPartyHealingModel"
description: "默认的战役治疗、手术存活率与战后英雄恢复计算模型。"
---
# DefaultPartyHealingModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultPartyHealingModel : PartyHealingModel`  
**Base:** [`PartyHealingModel`](../PartyHealingModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyHealingModel.cs`（v1.3.15；v1.4.5 对应文件位于 `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents`）

## 一句话职责

这个模型把队伍状态、外科医生技能、伤害类型、饥饿、据点、士气、移动状态和 Medicine/Athletics Perk 转换成治疗量、手术存活率和战后恢复量；它只计算结果，不直接治疗英雄、修改 roster 或发放技能经验。

## 心智模型

```text
PartyBase / MobileParty / Hero / CharacterObject
      + Surgeon / Medicine / Athletics / Settlement / MapEvent 状态
                         ↓
            Campaign.Current.Models.PartyHealingModel
                         ↓
       ExplainedNumber / float / int（纯计算结果）
                         ↓
 PartyBase 的治疗属性、PartyHealCampaignBehavior、战后英雄 Heal
```

`DefaultPartyHealingModel` 是 `MBGameModel<PartyHealingModel>` 的默认实现。战役启动时由 `CampaignGameStarter` 注册，运行期的调用者通常只持有接口类型 `PartyHealingModel`。普通兵和英雄使用两套日治疗入口；俘虏、无队伍英雄、驻军、海上队伍和筏上状态会进入不同分支。`ExplainedNumber` 中的说明是给 UI、调试和诊断用的，不是对世界状态的写操作。

### 何时使用

- 要显示队伍每天能恢复多少普通兵或英雄生命时，从 `Campaign.Current.Models.PartyHealingModel` 读取对应的 `ExplainedNumber`。
- 要修改治疗规则时，在 `CampaignGameStarter` 阶段注册 `DefaultPartyHealingModel` 的子类，只覆盖自己的分支，并让 `base` 保留饥饿、据点、海上和 Perk 逻辑。
- 要诊断战斗后英雄为什么没有死亡或恢复时，分别检查 `GetSurvivalChance` 与 `GetBattleEndHealingAmount`，不要把两者当成同一个“治疗率”。

### 何时不要使用

不要在模型里调用 `Hero.Heal`、直接改 `HitPoints`、修改 `TroopRoster`、扣粮或授予 Medicine 经验。`PartyHealCampaignBehavior` 会把模型结果按频率累计、随机取整，并在合适的战役时机执行真正的 `Heal`；模型中加入副作用会造成重复治疗、重复经验或加载时状态不一致。也不要在没有 `Campaign.Current`、队伍或有效角色的模块加载阶段缓存结果。

## 依赖关系

### 上游输入

| 类型 / 系统 | 在本模型中提供什么 |
| --- | --- |
| [`PartyBase`](../../campaign/PartyBase) / [`MobileParty`](../../campaign/MobileParty) | 队伍、成员/俘虏 roster、饥饿、移动、海上、筏上、驻军、军队、据点和 MapEvent 状态。 |
| [`Hero`](../../campaign/Hero) / [`CharacterObject`](../../campaign/CharacterObject) | 英雄生命值、年龄、护甲、等级、Tier、所属队伍和英雄 Perk。 |
| `DefaultPerks.Medicine` / `DefaultPerks.Athletics` | `TriageTent`、`WalkItOff`、`BestMedicine`、`SelfMedication`、`PreventiveMedicine` 等修正。 |
| `DefaultSkillEffects` / `SkillHelper` | Surgeon 技能和普通兵/英雄治疗技能效果。 |
| `Settlement` / `MapEvent` / `PartyMoraleModel` | 据点类型、围城/劫掠、安全村庄、高士气阈值和玩家战斗上下文。 |
| `ItemRoster` | 食物种类数量，用于 `PerfectHealth` 和海上减半逻辑。 |

### 下游调用者

| 调用者 | 使用方式 |
| --- | --- |
| [`PartyBase`](../../campaign/PartyBase) | `HealingRateForMemberRegulars`、`HealingRateForMemberHeroes` 及其 explained 属性直接转发到模型。 |
| [`PartyHealCampaignBehavior`](../PartyHealCampaignBehavior) | 按小时频率累计普通兵/英雄和俘虏治疗；战斗结束时读取结果后才调用 `Hero.Heal`。 |
| 战斗伤亡/手术流程 | 使用手术和存活概率，并可能通过 `GetSkillXpFromHealingTroop` 计算治疗部队的技能经验。 |
| [`PartyWageModel`](../PartyWageModel) 等其他 Model | 不应被本模型反向修改；模型之间共享状态输入，但治疗模型不拥有粮食或金币结算。 |

## 公共契约

| 成员 | 默认行为 | 关键边界 |
| --- | --- | --- |
| `GetSurgeryChance` | 返回有效 Surgeon 的 Medicine 技能乘 `0.0015`。 | 是概率计算，不会标记手术成功，也不会授予经验。 |
| `GetSiegeBombardmentHitSurgeryChance` | 有 `Medicine.SiegeMedic` 时返回其 `PrimaryBonus`，否则为 0。 | 只处理围城炮击命中相关概率。 |
| `GetSurvivalChance` | 以伤害类型、难度、Surgeon、DoctorsOath、等级、护甲和年龄计算存活概率。 | 结果是 `0..1` 概率；不负责杀死或恢复角色。 |
| `GetSkillXpFromHealingTroop` | 固定返回 `5`。 | 是每次治疗兵的经验规则，不是立即加到角色上的数值。 |
| `GetDailyHealingForRegulars` | 计算普通兵/普通俘虏每日治疗，并保留饥饿、驻军、移动、据点、食物、军队、海上和筏上分支。 | `isPrisoners` 为真时走固定俘虏值 `1`，不要再套普通兵状态修正。 |
| `GetDailyHealingHpForHeroes` | 计算英雄/英雄俘虏每日恢复；普通英雄基础为 `11`，俘虏为 `20`。 | 无队伍英雄也有 `11`；无据点且饥饿的移动英雄直接返回 `-19`。 |
| `GetHeroesEffectedHealingAmount` | 对给定治疗率应用 `SelfMedication`，再按小数随机取整。 | 拼写为 `Effected` 是接口既有名称；它仍只返回整数。 |
| `GetBattleEndHealingAmount` | 汇总 `PreventiveMedicine` 按缺失生命值恢复，以及进攻方 `WalkItOff` 的战后恢复。 | 调用者才会把正值交给 `Hero.Heal`。 |

## 默认计算细节

### 手术与存活概率

`GetSurgeryChance` 读取 `party.MobileParty.EffectiveSurgeon` 的 Medicine 技能；没有有效 Surgeon 时按 0 技能处理，因此默认结果为 0。`GetSiegeBombardmentHitSurgeryChance` 只在 `PartyBase` 是移动队伍且拥有 `Medicine.SiegeMedic` 时返回该 Perk 的主要加成。

`GetSurvivalChance` 的分支顺序很重要：

1. 非致命钝击、Very Easy 下的英雄，或 Easy 下的玩家角色直接返回 `1`。
2. 移动队伍中的角色先建立一个以 `1` 为基数的存活分母，再加入有效 Surgeon 的技能效果。敌方有 `DoctorsOath` 时还会加入敌方医生效果，并通知技能等级系统一次未成功手术。
3. 分母加入角色等级的 `0.02` 效果；MapEvent 中的低 Tier 普通兵还会得到 `PhysicianOfPeople` 修正。
4. 英雄额外加入总护甲、年龄负修正，然后把分母乘以 `50`；再按 `CheatDeath` 和玩家 Clan 成员死亡难度系数修正最终概率。
5. 没有移动队伍上下文的英雄俘虏使用 `1 - Age * 0.0035`。其他没有队伍的角色按分母计算，分母接近 0 时返回 0。

结果经过 `MBMath.ClampFloat` 后才转换成 `1 - deathChance`。因此自定义实现必须返回概率而不是百分数，也不能把“手术成功”与“英雄战后恢复”合并。

### 普通兵和普通俘虏的每日治疗

俘虏普通兵固定为 `1`。非俘虏只有移动队伍才继续计算：

- 饥饿的普通移动队伍按总普通兵数扣除 `25%`；饥饿驻军仅在 `SettlementHelper.IsGarrisonStarving` 成立时按 `10%` 随机取整扣除。
- 非饥饿时从基础 `5` 开始。驻军读取城镇 Governor 的治疗技能；其他队伍读取普通兵治疗技能。
- 非驻军、非民兵队伍静止时应用 Medicine `TriageTent`；在陆地移动时应用 Medicine 与 Athletics 的 `WalkItOff`。高士气时应用 `BestMedicine`。
- 位于非藏身处据点时，城镇的 `PristineStreets`、`AGoodDaysRest`、`GoodLogdings` 可能生效，城堡/城镇等 fortification 先加 `10`。不在据点但刚访问安全村庄且距离足够近、未遭劫掠时，改走 `BushDoctor`。
- 在军队中应用 Scouting `Rearguard`。有食物种类时，`PerfectHealth` 按食物多样性加成；海上该加成减半。`HelpingHands` 按总人数除以 10 的整数部分计算，海上加成同样减半。
- `IsInRaftState` 最后再按普通兵数扣除 `25%`。所以筏上惩罚可以与其他结果叠加。

使用 `includeDescriptions: true` 可以在 `ExplainedNumber` 中看到“饥饿”“在据点”“搁浅”等解释，这比只打印最终浮点数更适合排查治疗异常。

### 英雄和英雄俘虏的每日恢复

英雄俘虏固定恢复 `20`。传入 `party == null` 时返回基础 `11`，这正是没有队伍英雄的战役行为使用的路径。移动队伍中的普通英雄以 `11` 为基础：饥饿且不在据点时直接返回 `-19`；否则按静止/移动、海上、士气、据点或安全村庄应用与普通兵相近的 Medicine/Athletics Perk，并额外读取 `HealingRateBonusForHeroes`。

这里的 `-19` 是模型结果，不是“把英雄生命值减 19”的指令。调用者按战役时间把每日值换算成每次治疗量，并自行处理生命值上限。

### 英雄受影响治疗量与战后恢复

`GetHeroesEffectedHealingAmount` 先把传入 `healingRate` 放入 `ExplainedNumber`，再应用 Medicine `SelfMedication`。英雄属于海上队伍，或作为俘虏属于海上移动队伍时，使用海上倍率。小数部分与 `MBRandom.RandomFloat` 比较后随机向上取整，因此同一输入不保证每次返回相同整数。

`GetBattleEndHealingAmount` 只返回两项：英雄拥有 `PreventiveMedicine` 时按缺失生命值乘其 `SecondaryBonus`；如果队伍是战斗进攻方且英雄拥有 `WalkItOff`，再加该 Perk 的战后恢复 `SecondaryBonus`。`PartyHealCampaignBehavior` 读取结果并在大于 0 时调用 `Hero.Heal`，这正是模型和副作用的边界。

## 真实读取路径

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Library;

PartyBase party = MobileParty.MainParty.Party;
PartyHealingModel model = Campaign.Current.Models.PartyHealingModel;

ExplainedNumber regularHealing = model.GetDailyHealingForRegulars(
    party, isPrisoners: false, includeDescriptions: true);
ExplainedNumber heroHealing = model.GetDailyHealingHpForHeroes(
    party, isPrisoners: false, includeDescriptions: true);
float surgeryChance = model.GetSurgeryChance(party);
```

这段代码只读取战役当前已注册的模型。`regularHealing.ResultNumber` 和 `heroHealing.ResultNumber` 可以用于 UI 或诊断；不要在读取后再次调用 `Hero.Heal` 或自行修改队伍。

## 替换默认模型

模型替换应发生在战役 starter 阶段。只改一项规则时继承默认实现，并把其他方法留给 `base`：

```csharp
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.Library;

public sealed class MyPartyHealingModel : DefaultPartyHealingModel
{
    public override ExplainedNumber GetDailyHealingForRegulars(
        PartyBase party, bool isPrisoners, bool includeDescriptions = false)
    {
        ExplainedNumber result = base.GetDailyHealingForRegulars(
            party, isPrisoners, includeDescriptions);
        result.Add(2f, new TaleWorlds.Localization.TextObject("{=my_healing_bonus}My healing bonus"));
        return result;
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel(new MyPartyHealingModel());
}
```

如果需要包装一个已经注册的 `PartyHealingModel`，使用 `CampaignGameStarter.AddModel<T>(MBGameModel<T>)` 提供的 `BaseModel`，不要从新模型内部再次读取 `Campaign.Current.Models.PartyHealingModel` 作为自己的基类；替换完成后那就是当前替换对象，容易递归。模型注册必须早于战役运行，不能在 `DailyTick` 中动态追加。

## 风险与调试边界

1. **重复治疗或经验**：模型只计算；真正的 `Hero.Heal` 和技能经验由战役行为/伤亡流程执行。不要在 override 中触发这些副作用。
2. **每日值与每次 tick 混淆**：方法名中的 daily 是每日量，`PartyHealCampaignBehavior` 会按小时频率累计并随机取整；不要把每日结果每个 tick 全量应用。
3. **负治疗结果**：饥饿英雄的 `-19` 是计算结果，不能直接当作可执行伤害；应让调用者按既有生命值流程处理。
4. **空上下文**：无队伍英雄是合法的 `party == null` 路径，但模块加载期的 `Campaign.Current` 可能不存在；不要在静态初始化时读取模型。
5. **海上分支丢失**：海上会影响 `PerfectHealth`、`HelpingHands`、`SelfMedication` 和部分 Perk；继承实现时不要只复制陆地分支。
6. **存档/生命周期**：不要把 `PartyBase`、`Hero` 或 `ExplainedNumber` 缓存跨战役保存；队伍和英雄状态由官方对象与行为管理，模型应在每次调用时读取当前状态。

## 版本说明

v1.3.15 与 v1.4.5 的接口、基础常量和主要分支保持一致：普通兵基础 `5`、英雄基础 `11`、英雄俘虏 `20`、普通俘虏 `1`、治疗技能经验 `5`，以及饥饿、据点、移动和海上修正的语义一致。v1.4.5 源码位于 `Bannerlord.Source/bin`，反编译命名或 `null` 参数写法可能不同；替换模型时仍应以目标版本的实际调用点为准。

## 参见

- [Campaign-ext Models 家族](../models/)
- [`PartyHealingModel`](../PartyHealingModel)
- [`PartyBase`](../../campaign/PartyBase)
- [`MobileParty`](../../campaign/MobileParty)
- [`Hero`](../../campaign/Hero)
- [`CharacterObject`](../../campaign/CharacterObject)
- [`PartyHealCampaignBehavior`](../PartyHealCampaignBehavior)
- [`PartyMoraleModel`](../PartyMoraleModel)
- [`PartyWageModel`](../PartyWageModel)
- [`CampaignGameStarter`](../CampaignGameStarter)
