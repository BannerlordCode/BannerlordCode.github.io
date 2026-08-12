---
title: "CombatXpModel"
description: "把一次命中（攻击者 / 被攻击者 / 队长 / 伤害 / 是否致死 / 任务类型）映射为技能经验值与武器所训练技能的可替换规则模型。"
---
# CombatXpModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class CombatXpModel : MBGameModel<CombatXpModel>`  
**基类:** `MBGameModel<CombatXpModel>`  
**源文件:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CombatXpModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem.GameComponents/DefaultCombatXpModel.cs`

## 一句话职责

它回答“这一击应该给多少技能经验、由谁来领、训练的是哪个技能”。它是一个只计算的规则层：真正的经验写入发生在战斗结束的经验分配与战斗后的战役经验结算行为里，而不在这个模型内部。

## 心智模型

这是战斗经验规则层，被 **两处** 消费：一边是 Mission（战斗）里按命中分配技能经验，另一边是战斗结束后战役层面的经验结算。它本身不持有任何单位、不改变任何 `CharacterObject` 的技能等级。

计算链是：一次命中发生时，调用方把攻击者、被攻击者、队长、攻击者队伍、伤害值、是否致死和任务类型交给 `GetXpFromHit`，模型返回一个 `ExplainedNumber`——先按双方兵力（来自 [`MilitaryPowerModel`](../MilitaryPowerModel) 的兵力估算）估算被攻击者难度，再乘以任务类型倍率，并叠加来自 Perk 的修正因素。`GetSkillForWeapon` 单独负责“这根武器练的是哪个技能”，`CaptainRadius` 则决定队长要离得多近才会作为 `captain` 参数传进来、从而分享这份经验。

使用这个模型，是为了改变所有消费者看到的“经验是怎么算出来的”。如果目标是直接给某人加经验、改技能等级或推进等级，应使用经验结算行为 / [`CharacterDevelopmentModel`](../CharacterDevelopmentModel) 的等级逻辑，而不是在回调里写 `CharacterObject` 的技能字段。也不要把 `GetXpFromHit` 的返回值当作“已经发放”的经验——它只是一个待应用的建议值。

何时用：
- 为自定义战斗报告或伤害日志计算“这一击应得多少经验”。
- 修改某类武器（例如自定义武器）训练的是哪个技能，或调整攻城器械命中时训练的技能。

何时不要用：
- 不要直接调用它来“发放”经验——经验写入由战斗结束 / 战役经验行为执行，模型只负责算。
- 不要在 `GetXpFromHit` / `GetSkillForWeapon` 回调里修改 `CharacterObject` 的技能或属性；那是把只读查询变成带副作用的世界变更。
- 不要在标题界面或模块加载早期无条件读取 `Campaign.Current`，它此时可能为 `null`。

### 生命周期与注册

`Campaign.Current.Models` 持有当前实例。默认实例是 `DefaultCombatXpModel`，游戏启动器在战役初始化时通过 `IGameStarter.AddModel` 注册；自定义模型也必须在战役系统开始查询经验前完成注册。标题界面、模块加载早期或没有活动战役时，`Campaign.Current` 可能为 `null`，不能在静态字段初始化或菜单构造函数里无条件读取它。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供活动战役和 `Models` 注册表（`Campaign.Current.Models.CombatXpModel`）。 |
| [`CharacterObject`](../../campaign/CharacterObject) | 攻击者、被攻击者、队长均以 `CharacterObject` 传入；其 `MaxHitPoints`、`IsHero`、`IsRanged` 等决定经验与 Perk 修正。 |
| [`PartyBase`](../../campaign/PartyBase) | 攻击者队伍；默认实现从这里读取 `MapEvent`、`Side`、`LeaderSimulationModifier` 与各种 Perk。 |
| [`SkillObject`](../../core-extra/SkillObject) | `GetSkillForWeapon` 返回所训练的技能（`Athletics` / `Engineering` / 武器 `RelevantSkill`）。 |
| [`WeaponComponentData`](../../core-extra/WeaponComponentData) | 武器数据；非攻城器械时取其 `RelevantSkill` 决定训练的技能。 |
| [`ExplainedNumber`](../ExplainedNumber) | 承载 `GetXpFromHit` 返回的经验值以及各 Perk 因素说明。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`Hero`](../../campaign/Hero) | 当 `captain` 是英雄且拥有 `Leadership.InspiringLeader` Perk 时，经验会被加成（`AddFactor`）。 |
| [`Mission`](../../mission/Mission) | 战斗内的命中经验分配消费 `GetXpFromHit` 与 `GetXpMultiplierFromShotDifficulty`。 |
| [`MissionTypeEnum`](../MissionTypeEnum) | 任务类型（Battle / PracticeFight / Tournament / SimulationBattle / NoXp）决定经验倍率。 |
| [`CharacterDevelopmentModel`](../CharacterDevelopmentModel) | 相邻的等级 / 经验模型；`GetXpFromHit` 的 `ExplainedNumber` 最终由经验结算行为写入技能等级。 |

### Action、事件与存档边界

模型本身没有存档字段，也不派发事件。经验的实际写入由战斗结束与战役经验结算行为执行；模型只返回建议值。自定义实现应在相同输入下保持确定性，避免战斗回放 / 存档重载时经验不一致。注意 `GetXpFromHit` 内部会读取 `Campaign.Current.Models.MilitaryPowerModel` 来计算双方兵力——替换模型时若也依赖其它模型，请同样通过 `Campaign.Current.Models` 获取，不要缓存可能失效的引用。

## 风险与调试顺序

1. **战役尚未存在:** `Campaign.Current` 在标题界面和早期模块加载阶段为空；获取模型前先判空，或延迟到战役启动钩子。
2. **在回调里改写世界:** 招募、改技能等级、转账或传送必须在行为 / Roster API / Action 中执行，不能放进经验计算回调。
3. **把返回值当已发放:** `GetXpFromHit` 返回的是“应得经验”，要由经验行为写入；只读取模型不会给任何人加经验。
4. **`attackerParty` 为 null:** 默认实现中多处读取 `attackerParty.MapEvent` / `MobileParty`，传入 `null` 时相关 Perk 修正会被跳过（这是设计行为），但要确保调用方理解这一后果。
5. **重复应用倍率:** 同时调用模型、再把返回值写回或再次乘倍率，会使任务类型倍率与 Perk 因素重复生效，导致经验异常膨胀。
6. **`CaptainRadius` 误用:** 该属性只声明“队长分享经验的有效半径”，模型自身不测量距离；距离判定由调用方（战斗经验分配）负责，把队长传入 `captain` 参数前应当已在半径内。

## 成员契约

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `CaptainRadius` | 暴露“队长分享经验的有效半径”；默认实现为 `10f`。 | 由战斗经验分配在判定队长是否在场时读取；模型不在此测量距离，仅声明半径值。 |
| `GetSkillForWeapon` | 返回某武器训练的技能：攻城器械命中时返回 `Engineering`，否则取武器 `RelevantSkill`，其余（徒手 / 无武器）默认 `Athletics`。 | 命中发生时决定经验计入哪个技能；纯查询，无副作用。 |
| `GetXpFromHit` | 计算一击应得的技能经验：基于攻防双方兵力估算被击者难度，乘以任务类型倍率，并叠加 `OneHanded` / `TwoHanded` / `Throwing` / `Bow` / `Crossbow` / `Leadership` / `Roguery` 等 Perk 因素，返回 `ExplainedNumber`。 | 每次命中由经验分配 / 战役结算调用；只读计算，不写技能。 |
| `GetXpMultiplierFromShotDifficulty` | 根据射击难度（远程武器的命中难度参数）返回 `0f~2f` 的倍率，难度越高倍率越大，上限为 `14.4f`。 | 远程命中时由调用方用来放大 `GetXpFromHit` 的结果；纯查询。 |
| `MissionTypeEnum`（嵌套枚举） | 任务类型枚举：`Battle`、`PracticeFight`、`Tournament`、`SimulationBattle`、`NoXp`，决定 `GetXpFromHit` 的全局倍率（1 / 0.0625 / 0.33 / 0.9 / 0）。 | 作为 `GetXpFromHit` 的最后一个参数传入。 |

默认实现的可观察因素包括：被击者兵力越高、伤害越大（致死额外加上最大生命值）经验越多；练习战、锦标赛、模拟战分别只有 `0.0625` / `0.33` / `0.9` 倍，`NoXp` 为 `0`；队长有 `Inspiring Leader` 且未在海上时加成；队伍领导者的 `Trainer` / `BaptisedInBlood` / `CorpsACorps` / `LeadByExample` / `Resourceful` / `BullsEye` / `MountedCrossbowman` / `NoRestForTheWicked` 等 Perk 会按兵种与是否在海上追加因素。

## 真实读取路径

以下代码只查询当前战役中已经注册的模型，与战斗经验分配读取 `GetXpFromHit` 的顺序一致：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

public ExplainedNumber ComputeHitXp(
    CharacterObject attacker,
    CharacterObject captain,
    CharacterObject attacked,
    PartyBase attackerParty,
    int damage,
    bool isFatal)
{
    if (Campaign.Current == null)
    {
        return new ExplainedNumber(0f);
    }

    CombatXpModel model = Campaign.Current.Models.CombatXpModel;

    // 普通遭遇战：Battle 倍率为 1f；队长需处于 CaptainRadius 距离内才会出现在 captain 参数里
    ExplainedNumber xp = model.GetXpFromHit(
        attacker, captain, attacked, attackerParty, damage, isFatal,
        CombatXpModel.MissionTypeEnum.Battle);

    return xp;
}
```

这段结果适合调试或 UI 预览，用于“这一击算出来是多少经验”；普通逻辑应把 `ExplainedNumber` 交给经验结算行为去写入，不要自己再次把数值乘一遍。

查询武器训练技能与队长半径：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;

CombatXpModel model = Campaign.Current.Models.CombatXpModel;

// 武器训练哪个技能：近战武器用其 RelevantSkill，攻城器械用 Engineering，其余默认 Athletics
SkillObject skill = model.GetSkillForWeapon(weapon, isSiegeEngineHit: false);

// 队长分享经验的有效半径（默认 10f），由战斗经验分配在判定队长是否在场时读取
float radius = model.CaptainRadius;
```

## 替换模型时的安全做法

如果只想增加一个有限修正，保留原模型作为 delegate，并让四个成员仍然成对执行：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

public sealed class ModCombatXpModel : CombatXpModel
{
    private readonly CombatXpModel _vanilla;

    public ModCombatXpModel(CombatXpModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override float CaptainRadius => _vanilla.CaptainRadius;

    public override SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)
    {
        return _vanilla.GetSkillForWeapon(weapon, isSiegeEngineHit);
    }

    public override ExplainedNumber GetXpFromHit(
        CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop,
        PartyBase attackerParty, int damage, bool isFatal, MissionTypeEnum missionType)
    {
        ExplainedNumber result = _vanilla.GetXpFromHit(
            attackerTroop, captain, attackedTroop, attackerParty, damage, isFatal, missionType);
        result.AddFactor(0.05f, new TextObject("Mod: drill bonus"));
        return result;
    }

    public override float GetXpMultiplierFromShotDifficulty(float shotDifficulty)
    {
        return _vanilla.GetXpMultiplierFromShotDifficulty(shotDifficulty);
    }
}
```

实际注册时应在 `CampaignGameStarter` 的模型注册阶段保存 vanilla delegate；不要在模型已经替换后再次通过 `Campaign.Current.Models.CombatXpModel` 查找自己，否则会递归。若要让替换覆盖 Perk 与任务类型倍率规则，优先委托当前版本的默认模型，再加自己的有界因素。

## 版本与导航

v1.3.15 与 v1.4.5 的接口都包含 `CaptainRadius`、`GetSkillForWeapon`、`GetXpFromHit`、`GetXpMultiplierFromShotDifficulty` 与嵌套的 `MissionTypeEnum`；默认实现 `DefaultCombatXpModel` 在 v1.4.5 中更明显地包含海上状态（如 `IsCurrentlyAtSea`）相关条件。跨版本实现应委托当前版本的 vanilla model，而不是把旧公式复制到新版本。

- [队伍模型目录](../models/)
- [父级：Campaign 扩展 API](../)
- [↔ CharacterDevelopmentModel](../CharacterDevelopmentModel)
- [↔ PartySpeedModel](../PartySpeedModel)
- [↔ ExplainedNumber](../ExplainedNumber)
- [↔ MissionTypeEnum](../MissionTypeEnum)
- [Campaign](../../campaign/Campaign)
- [CharacterObject](../../campaign/CharacterObject)
- [PartyBase](../../campaign/PartyBase)
- [SkillObject](../../core-extra/SkillObject)
- [WeaponComponentData](../../core-extra/WeaponComponentData)
- [战役系统指南](../../../guide/campaign-system)
- [崩溃边界与异常处理](../../../architecture/crash-boundaries)
