---
title: "PartyHealingModel"
description: "把部队伤兵状态、外科医生技能与医疗 Perk 换算成每日/战斗后治疗数值的可替换规则模型；它只计算，不修改名册。"
---
# PartyHealingModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class PartyHealingModel : MBGameModel<PartyHealingModel>`  
**基类:** `MBGameModel<PartyHealingModel>`  
**源文件:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyHealingModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyHealingModel.cs`

## 一句话职责

它回答“这支队伍今天会治好多少伤兵、英雄会回多少血、这一击会不会死人”，并返回带可选解释的数值；它不给部队加血、不改名册人数，也不在战斗中判定死亡。实际的 HP / 人数变化发生在战役行为（每日治疗 tick、战斗结束结算）里，它们读取这个模型的结果后再写回名册。

## 心智模型

这是战役时钟读取前的**规则层**，不是执行层。队伍负伤状态、`EffectiveSurgeon` 的 Medicine 技能、各种医疗 Perk（Triage Tent、WalkItOff、BushDoctor、PreventiveMedicine 等）、士气、补给、是否驻扎在城镇要塞，先被汇总成几个 `ExplainedNumber` 和一个生存概率；真正的“加血 / 复活 / 阵亡扣减”由 `CampaignBehavior` 在对应 tick 中拿这些数值去改 `MemberRoster` / `Hero.HitPoints`。模型自身没有任何持久字段，也没有副作用——它是一组**纯查询**。

使用这个模型，是为了**读取**一张队伍“应该治疗多少”的快照。需要真正改变部队状态时，应走到战役行为或对应的 Roster API（`MemberRoster` 的 HP / 人数方法），而不是在模型的回调里写名册。如果目标是让某个 Perk 生效，也只改模型的返回值（加一个因素），不要顺手招募、传送或扣金币——那会把一个只读查询变成每次每日 tick 都重复执行的副作用。

`includeDescriptions` 只控制 `ExplainedNumber` 是否记录构成因素（用于调试/UI 展示），**不应改变数值本身**；自定义实现必须保证两种模式下 `ResultNumber` 一致。

### 生命周期与注册

`Campaign.Current.Models` 持有当前实例。默认实例是 `DefaultPartyHealingModel`，游戏启动器在战役初始化时通过 `IGameStarter.AddModel` 注册它；自定义模型也必须在战役系统开始查询前完成注册。标题界面、模块加载早期或没有活动战役时，`Campaign.Current` 可能为 `null`，**不能**在静态字段初始化或菜单构造函数里无条件读取它。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供活动战役与 `Models` 注册表（`Campaign.Current.Models.PartyHealingModel`）。 |
| [`PartyBase`](../../campaign/PartyBase) | 几乎所有方法的第一参数；提供 `MobileParty`、`MemberRoster`、`IsStarving`、`SiegeEvent`、`ItemRoster` 等状态。 |
| [`MobileParty`](../../campaign/MobileParty) | 提供编制、`EffectiveSurgeon`、士气、`CurrentSettlement`、`IsCurrentlyAtSea`、Perk 与移动状态。 |
| [`Hero`](../../campaign/Hero) | `GetHeroesEffectedHealingAmount` 与 `GetBattleEndHealingAmount` 的输入；决定英雄回血与阵亡阈值。 |
| [`CharacterObject`](../../campaign/CharacterObject) | `GetSurvivalChance` 的受击角色；提供 `IsHero`、`Tier`、`Level`、`Age`、护甲合计等生存因子。 |
| [`ExplainedNumber`](../ExplainedNumber) | 承载每日治疗/战斗后治疗结果以及可选的因素说明。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`Settlement`](../../campaign/Settlement) | 默认实现读取 `CurrentSettlement.IsTown` / `IsFortification` / `IsUnderSiege` / `IsRaided` 等来修正治疗。 |
| [`Town`](../../campaign/Town) | 城镇驻扎时通过 `SkillHelper.AddSkillBonusForTown`（GovernorHealingRateBonus）加成正规军治疗。 |
| [`SiegeEvent`](../SiegeEvent) | 被围时（`party.SiegeEvent != null`）会跳过“安全驻扎”加值；围城轰炸手术概率走 `GetSiegeBombardmentHitSurgeryChance`。 |
| [`DamageTypes`](../../core-extra/DamageTypes) | `GetSurvivalChance` 的伤害类型参数（Blunt 且 `canDamageKillEvenIfBlunt=false` 时必活）。 |
| 战役行为（每日治疗 / 战斗结束结算） | 真正消费模型返回值并改 `MemberRoster`、`Hero.HitPoints` 的执行者；模型不负责应用。 |
| [`PartyMoraleModel`](../PartyMoraleModel) | 默认实现读取 `PartyMoraleModel.HighMoraleValue` 判断是否触发 BestMedicine 加值。 |
| [`CharacterDevelopmentModel`](../CharacterDevelopmentModel) | 默认实现通过技能/Perk 阈值（`DefaultSkillEffects`、`DefaultPerks`）给出各因素数值。 |

### Action、事件与存档边界

模型结果本身没有存档字段，也不派发事件。生存/治疗数值是**派生量**：合法的名册 HP / 人数变更走战役行为或 Roster API；自定义模型应在相同输入下保持确定性，避免每日 tick 重放时治疗量与已存档名册状态不一致。替换模型时保存 vanilla delegate 并委托它，不要通过 `Campaign.Current.Models.PartyHealingModel` 再次查找自己（会递归）。

## 成员契约

### 生存与手术概率

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `GetSurgeryChance(PartyBase party)` | 返回单次手术成功概率（默认 = `0.0015 × EffectiveSurgeon.Medicine`）。 | 战斗结束/围城结算判定伤兵是否救活；纯查询，无副作用。 |
| `GetSurvivalChance(PartyBase party, CharacterObject agentCharacter, DamageTypes damageType, bool canDamageKillEvenIfBlunt, PartyBase enemyParty = null)` | 返回受击角色**存活**概率（`1 − 死亡概率`）。Blunt 且不可致死、英雄在 VeryEasy、玩家在 Easy 时直接返回 `1f`。 | 战斗每次伤害结算调用；读取外科医生、敌方阵型 DoctorsOath、护甲、年龄、难度等；无名册修改。 |
| `GetSiegeBombardmentHitSurgeryChance(PartyBase party)` | 返回围城轰炸命中时的手术概率（默认仅 `Medicine.SiegeMedic` Perk 加值）。 | 围城轰炸结算；纯查询。 |

### 每日治疗

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `GetDailyHealingForRegulars(PartyBase partyBase, bool isPrisoner, bool includeDescriptions = false)` | 返回正规军**每日治疗量**（`ExplainedNumber`）。饥饿/海上漂流为负；基础 `5`，要塞 `+10`，城镇总督/Perk 加值。 | 每日治疗 tick 读取；只给数字，不改名册。 |
| `GetDailyHealingHpForHeroes(PartyBase partyBase, bool isPrisoners, bool includeDescriptions = false)` | 返回英雄**每日回血**（`ExplainedNumber`）。俘虏 `+20`、无队伍 `+11`、移动队伍基础 `11`、要塞 `+8`。 | 每日治疗 tick 读取；纯查询。 |
| `GetHeroesEffectedHealingAmount(Hero hero, float healingRate)` | 在每日英雄回血率上叠加 `SelfMedication` 等 Perk，返回最终**整数**回血量。 | 战斗/每日结算中把回血率变成可应用的整数；读取英雄 Perk，无副作用。 |

### 战斗后治疗与技能经验

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `GetBattleEndHealingAmount(PartyBase partyBase, Hero hero)` | 返回战斗结束时对英雄的额外治疗（`ExplainedNumber`）：`PreventiveMedicine` 按缺失血量、`WalkItOff`（攻方）固定加值。 | 战斗结束结算读取；只计算，不写 `HitPoints`。 |
| `GetSkillXpFromHealingTroop(PartyBase party)` | 返回通过治疗部队获得的技能经验（默认 `5`）。 | 每日治疗结算给 Medicine 经验；纯查询。 |

默认实现的可观察因素：正规军基础每日 `+5`、要塞 `+10`、城镇总督/Perk 加值；饥饿（garrison `−10%` 总人口、移动队 `−25%`）与海上漂流（`−25%`）为负；英雄基础 `+11`、俘虏 `+20`、要塞 `+8`。v1.4.5 的默认实现额外加入 `IsCurrentlyAtSea` 相关的海上乘数与风/船只状态，替换模型时优先委托当前版本 vanilla 模型而不是复制旧公式。

## 真实读取路径

以下代码只查询当前战役中已经注册的模型，得到“本应治疗多少”，**不改动任何名册**：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

// 只读取模型给出的每日治疗快照，用于调试或 UI 预览。
public ExplainedNumber ExplainDailyHealing(MobileParty party, bool forPrisoners)
{
    if (Campaign.Current == null || party == null)
    {
        return new ExplainedNumber(0f);
    }

    PartyHealingModel model = Campaign.Current.Models.PartyHealingModel;
    ExplainedNumber regulars = model.GetDailyHealingForRegulars(party.Party, forPrisoners, includeDescriptions: true);
    ExplainedNumber heroes = model.GetDailyHealingHpForHeroes(party.Party, forPrisoners, includeDescriptions: true);

    // regulars.ResultNumber / heroes.ResultNumber 是最终数值；
    // regulars.GetDetailedExplanation() 可在 UI 中展示因素构成。
    return regulars;
}
```

战斗结束判定一名角色是否会在该次伤害中存活（注意 `GetSurvivalChance` 返回的是**存活**概率）：

```csharp
// 战斗结算时依据生存概率掷骰，决定该角色是否阵亡。
public bool WillSurviveHit(MobileParty party, CharacterObject character, DamageTypes damage, bool canKillBlunt, MobileParty enemy)
{
    if (Campaign.Current == null)
    {
        return true; // 无战役上下文时保守假设存活，避免误判扣减
    }

    PartyHealingModel model = Campaign.Current.Models.PartyHealingModel;
    float survival = model.GetSurvivalChance(party.Party, character, damage, canKillBlunt, enemy?.Party);
    return MBRandom.RandomFloat < survival;
}
```

**何时不要用（反例）：** 不要在计算回调里写名册。下面的写法是错误的——把名册修改塞进读取路径，会让每次每日 tick 都重复执行招募/扣血，破坏确定性并可能与已存档状态冲突：

```csharp
// ❌ 错误：在“读取”回调里改世界。模型只应返回数值。
public override ExplainedNumber GetDailyHealingForRegulars(PartyBase partyBase, bool isPrisoner, bool includeDescriptions = false)
{
    ExplainedNumber result = new ExplainedNumber(0f, includeDescriptions);
    result.Add(5f);
    partyBase.MemberRoster.AddToCounts(...); // 不要在模型里改名册
    return result;
}
```

真正应用治疗应放在战役行为中：读取 `GetDailyHealingForRegulars` 的结果，再调用 Roster / `Hero.HitPoints` 的官方 API 把数值写回。

## 替换模型时的安全做法

如果只想增加有限修正，保留原模型作为 delegate，让所有方法继续成对执行：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;

public sealed class ModPartyHealingModel : PartyHealingModel
{
    private readonly PartyHealingModel _vanilla;

    public ModPartyHealingModel(PartyHealingModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override float GetSurgeryChance(PartyBase party) => _vanilla.GetSurgeryChance(party);

    public override float GetSurvivalChance(PartyBase party, CharacterObject agentCharacter, DamageTypes damageType, bool canDamageKillEvenIfBlunt, PartyBase enemyParty = null)
        => _vanilla.GetSurvivalChance(party, agentCharacter, damageType, canDamageKillEvenIfBlunt, enemyParty);

    public override int GetSkillXpFromHealingTroop(PartyBase party) => _vanilla.GetSkillXpFromHealingTroop(party);

    public override ExplainedNumber GetDailyHealingForRegulars(PartyBase partyBase, bool isPrisoner, bool includeDescriptions = false)
    {
        ExplainedNumber result = _vanilla.GetDailyHealingForRegulars(partyBase, isPrisoner, includeDescriptions);
        result.AddFactor(0.1f, new TextObject("Mod: field hospital"));
        return result;
    }

    public override ExplainedNumber GetDailyHealingHpForHeroes(PartyBase partyBase, bool isPrisoners, bool includeDescriptions = false)
        => _vanilla.GetDailyHealingHpForHeroes(partyBase, isPrisoners, includeDescriptions);

    public override int GetHeroesEffectedHealingAmount(Hero hero, float healingRate)
        => _vanilla.GetHeroesEffectedHealingAmount(hero, healingRate);

    public override float GetSiegeBombardmentHitSurgeryChance(PartyBase party)
        => _vanilla.GetSiegeBombardmentHitSurgeryChance(party);

    public override ExplainedNumber GetBattleEndHealingAmount(PartyBase partyBase, Hero hero)
        => _vanilla.GetBattleEndHealingAmount(partyBase, hero);
}
```

实际注册时应在 `CampaignGameStarter` 的模型注册阶段保存 vanilla delegate；不要在模型已经替换后再次通过 `Campaign.Current.Models.PartyHealingModel` 查找自己，否则会递归。若要让替换覆盖海上、文化和新版本 Perk 规则，优先委托当前版本的 vanilla model，再加自己的有界因素。

## 风险与调试顺序

1. **战役尚未存在：** `Campaign.Current` 在标题界面和早期模块加载阶段为空；延迟到战役启动钩子再获取模型，所有读取先做 null 检查。
2. **在回调中修改世界：** 招募、传送、扣金币、改 `HitPoints` / 名册人数必须在战役行为、Roster API 或 Action 中执行，不能放进计算回调。
3. **无界结果：** 返回 NaN、负数溢出或跳过下限会让每日治疗变成持续掉血或治愈溢出；`ExplainedNumber` 的因素应加有界加值/乘子。
4. **`includeDescriptions` 改变数值：** 调试/UI 开启说明时数值必须与关闭时完全一致，否则重放与预览不一致。
5. **递归替换：** 自定义模型内部再查 `Campaign.Current.Models.PartyHealingModel` 会调到自己；保存并在构造时注入 vanilla delegate。
6. **跨版本差异：** v1.4.5 默认实现加入 `IsCurrentlyAtSea` 等海上因素，替换旧版本公式时应委托当前版本 vanilla，避免漏掉新 Perk/状态。
7. **坏档关联：** 模型是派生量，不存档；但若替换导致每日治疗量与已存档名册严重不一致，重放 tick 时会出现人数/HP 跳变。见 [崩溃与存档边界](../../../architecture/crash-boundaries)。

## 版本与导航

接口 `PartyHealingModel` 在 v1.3.0、v1.3.15 与 v1.4.5 中保持完全一致（8 个抽象方法签名未变）；差异只在 `DefaultPartyHealingModel` 的默认公式（v1.4.5 加入海上 `IsCurrentlyAtSea` 相关因素）。跨版本实现应委托当前版本的 vanilla model，而不是把旧公式复制到新版本。

- [父级：Campaign 扩展 API](../)
- [↔ PartySpeedModel](../PartySpeedModel)
- [↔ PartyWageModel](../PartyWageModel)
- [↔ PartyMoraleModel](../PartyMoraleModel)
- [↔ CharacterDevelopmentModel](../CharacterDevelopmentModel)
- [ExplainedNumber](../ExplainedNumber)
- [SiegeEvent](../SiegeEvent)
- [Campaign](../../campaign/Campaign)
- [MobileParty](../../campaign/MobileParty)
- [PartyBase](../../campaign/PartyBase)
- [Hero](../../campaign/Hero)
- [CharacterObject](../../campaign/CharacterObject)
- [Settlement](../../campaign/Settlement)
- [Town](../../campaign/Town)
- [DamageTypes](../../core-extra/DamageTypes)
- [崩溃与存档边界](../../../architecture/crash-boundaries)
