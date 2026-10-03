---
title: "AgentStatCalculateModel"
description: "Agent 属性计算总闸：把角色、装备、难度折算成 98 项 AgentDrivenProperties（移动、命中、AI 决策倾向、抗击退），是战斗手感调参的替换点。"
---

# AgentStatCalculateModel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class AgentStatCalculateModel : MBGameModel<AgentStatCalculateModel>`
**Base:** `TaleWorlds.Core.MBGameModel<AgentStatCalculateModel>`
**File:** `TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs`

## 概述

`AgentStatCalculateModel` 是「一个 Agent 的所有战斗数值从哪来」的答案，242 行里有 **15 个 `abstract` 方法**和 **14 个带默认实现的 `virtual` 方法**。它把 [CharacterObject](../../campaign/CharacterObject/) 的技能、装备属性、当前难度这三样东西，折算成 [AgentDrivenProperties](../AgentDrivenProperties/) 里那 98 个 float 槽位——挥击速度、移动速度、护甲负重、武器散布、AI 索敌误差、格挡概率、持盾决策倾向等等。

它的两个生命期钩子决定了调用时机：`InitializeAgentStats(agent, spawnEquipment, agentDrivenProperties, agentBuildData)` 在 **Agent 创建时**跑一次（由 `AgentDrivenProperties.InitializeDrivenProperties` 触发，紧接着同一函数还会调一次 `UpdateAgentStats`）；`UpdateAgentStats(agent, agentDrivenProperties)` 在之后每次需要刷新时跑（`AgentDrivenProperties.UpdateDrivenProperties` / `Agent.UpdateCustomDrivenProperties`）。

## 心智模型

把它当成**「战斗数值编译器」**，四个推论：

第一，**这是 MBGameModel 家族的一员，替换方式与其它 game model 一致但有个坑**：`MissionGameModels.Current.AgentStatCalculateModel` 在 `MissionGameModels` 构造时由 `GetGameModel<AgentStatCalculateModel>()` 倒序 `is T` 扫描填入，**后注册的赢**。而 `AddModel<T>` 会调 `Initialize(上一个 model)`——如果你的类在构造器里也调了一次 `Initialize`，注册时那一次会覆盖它。

第二，**抽象成员不能用 `base.` 调用（CS0239）。** 15 个 abstract 方法在抽象基类里没有实现体，派生类只能 `override`。要复用 vanilla 行为必须持有 vanilla 实例并**显式转发**（`_vanilla.GetWeaponDamageMultiplier(agent, weapon)`），不能写 `base.GetWeaponDamageMultiplier(...)`。

第三，**`GetDifficultyModifier()` 是难度旋钮的总入口**。`CalculateAILevel`（`protected`）直接按它的返回值分档：`<= 0f` 时系数 0.1、`<= 0.5f` 时 0.32、否则 0.96，最终 `MBMath.ClampFloat(level / 300f * 系数, 0f, 1f)`。`CalculateAIAttackOnDecideMaxValue` 也用它分档（`<= 0.5f` 返回 0.16、否则 0.48）。Sandbox 实现把它接到 `Campaign.Current.Models.DifficultyModel.GetCombatAIDifficultyMultiplier()`。

第四，**`GetWeaponInaccuracy` 的 `weaponSkill` 系数是硬编码的物品精度差值**。远程武器用 `1 - 0.002f * weaponSkill`（弹弓是 `0.003f`），近战宽握武器用 `1 - weaponSkill * 0.01f`，最后 `MathF.Max(a, 0f)`。想改「新手也能打得准」，覆写这一个方法就够了。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `InitializeAgentStats` | `public abstract void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)` | 创建期的总入口。由 `AgentDrivenProperties.InitializeDrivenProperties` 调用，紧接着它自己会调 `UpdateAgentStats`。官方实现在这里写 `ArmorEncumbrance`、`ArmorHead/Torso/Legs/Arms`、人形/非人形分支、`AiSpeciesIndex`、骑乘属性等**几十个槽位**。返回 `void`，无法拒绝创建。 |
| `UpdateAgentStats` | `public abstract void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)` | 运行期的重算入口。装备变化、难度变化、`Agent.UpdateCustomDrivenProperties()` 都会打到它。**凡是随时间/装备变化的量都应该写在这里而不是 `InitializeAgentStats`。** |
| `GetDifficultyModifier` | `public abstract float GetDifficultyModifier()` | 难度总系数。`GetDifficultyModifier() <= 0f` 意味着一半 AI 逻辑被大幅削弱（`CalculateAILevel` 的 0.1 系数）。返回值应落在 0–1。 |
| `CanAgentRideMount` | `public abstract bool CanAgentRideMount(Agent agent, Agent targetMount)` | 骑乘资格。三个官方实现一致写成 `agent.CheckSkillForMounting(targetMount)`。**返回 false 是硬阻止，不是降级提示。** |
| `GetWeaponDamageMultiplier` | `public abstract float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)` | 武器伤害系数，按武器逐个算。 |
| `GetEquipmentStealthBonus` | `public abstract float GetEquipmentStealthBonus(Agent agent)` | 装备提供的隐蔽加成总额。 |
| `GetSneakAttackMultiplier` | `public abstract float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)` | 背后偷袭伤害倍率。 |
| `GetKnockBackResistance` | `public abstract float GetKnockBackResistance(Agent agent)` | 抗击退程度。 |
| `GetKnockDownResistance` | `public abstract float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)` | 抗击倒。**默认实参是 `StrikeType.Invalid`**，所以它同时服务「通用抗击倒」与「按击打类型区分」两种调用方式。 |
| `GetDismountResistance` | `public abstract float GetDismountResistance(Agent agent)` | 抗落马。 |
| `GetBreatheHoldMaxDuration` | `public abstract float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)` | 屏息时长上限。**形参名字里带 `base` 前缀，暗示它是「作用在传入基准值之上的修正」**，返回最终值还是修正量要看实现。 |
| `GetWeaponInaccuracy` | `public virtual float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)` | 武器散布。默认实现按武器类型分档：远程 `((100 - Accuracy) * (1 - 0.002*skill) * 0.001f)`（弹弓系数 0.003）、近战且有 `WeaponFlags.WideGrip` 时 `1 - skill*0.01f`、其余为 0，最后 `MathF.Max(a, 0f)`。**这是最常被 mod 覆写的方法之一。** |
| `HasHeavyArmor` | `public virtual bool HasHeavyArmor(Agent agent)` | 重甲判定：`agent.GetBaseArmorEffectivenessForBodyPart(BoneBodyPartType.Chest) >= 24f`。 |
| `GetEffectiveArmorEncumbrance` | `public virtual float GetEffectiveArmorEncumbrance(Agent agent, Equipment equipment)` | 有效护甲负重：`equipment.GetTotalWeightOfArmor(agent.IsHuman)`。 |
| `GetEffectiveMaxHealth` | `public virtual float GetEffectiveMaxHealth(Agent agent)` | 有效血量上限：`agent.BaseHealthLimit`。 |
| `GetEnvironmentSpeedFactor` | `public virtual float GetEnvironmentSpeedFactor(Agent agent)` | 环境减速。默认实现读 `agent.Mission.Scene`：室内不惩罚；室外下雨 ×0.9；**非人形且非白天再 ×0.9**。 |
| `CalculateAIAttackOnDecideMaxValue` | `public float CalculateAIAttackOnDecideMaxValue()`（非 virtual） | AI 攻击决策的时间上限。按 `GetDifficultyModifier()` 分两档返回 0.16 或 0.48。**`non-virtual`，要改就得靠改难度返回值。** |
| `GetDetachmentCostMultiplierOfAgent` | `public virtual float GetDetachmentCostMultiplierOfAgent(Agent agent, IDetachment detachment)` | 该 Agent 在队伍里的成本倍率。有旗帜 `agent.Banner != null` 时返回 10f、否则 1f——**这是一个 10 倍的平衡性开关**。 |
| `GetInteractionDistance` / `GetMaxCameraZoom` | `public virtual float ...` | 默认分别是 1.5f 与 1f，是「AI 交互距离」与「相机最远拉距」的下限基准。 |
| `GetEffectiveSkill` / `GetEffectiveSkillForWeapon` | `public virtual int ...` | 有效技能。默认 `agent.Character.GetSkillValue(skill)`；武器版本直接转发 `GetEffectiveSkill(agent, weapon.RelevantSkill)`。**覆写 `GetEffectiveSkill` 会自动影响武器版本，覆写 `GetEffectiveSkillForWeapon` 则不会。** |
| `GetMeleeSkill` | `protected int GetMeleeSkill(Agent agent, WeaponComponentData equippedItem, WeaponComponentData secondaryItem)` | 挑一个代表技能：一手持/长柄用其自身技能、两手持视副手是否为空在两手持/单手持间选、无武器则 [Athletics](../../campaign-ext/Athletics)。是 `SetAiRelatedProperties` 的第一步。 |
| `CalculateAILevel` | `protected float CalculateAILevel(Agent agent, int relevantSkillLevel)` | 把技能等级压成 0–1 的 AI 水平。分档系数 0.1 / 0.32 / 0.96，全部乘 `skillLevel / 300f` 后 `MBMath.ClampFloat`。 |
| `SetAiRelatedProperties` | `protected void SetAiRelatedProperties(Agent agent, AgentDrivenProperties agentDrivenProperties, WeaponComponentData equippedItem, WeaponComponentData secondaryItem)` | 批量写 AI 相关槽位。末尾三句固定写 `AiWeaponFavorMultiplierMelee/Ranged/Polearm = 1f`，以及 `UseRealisticBlocking` 按 `agent.Controller != AgentControllerType.Player` 取 1f / 0f。**注意最后一句：真实格挡只对非玩家控制者开启。** |
| `SetAllWeaponInaccuracy` | `protected void SetAllWeaponInaccuracy(Agent agent, AgentDrivenProperties agentDrivenProperties, int equippedIndex, WeaponComponentData equippedWeaponComponent)` | 把 `WeaponInaccuracy` 一次性刷成当前装备的散布值。武器为 null 时写 0f。`equippedIndex` 形参在实现体里未被使用。 |
| `ResetAILevelMultiplier` / `SetAILevelMultiplier` | `public void ...` | 操作私有字段 `_AILevelMultiplier`（初值 1f），供调试 / 难度覆盖用。**这两个不是 `virtual`**，改不了行为。 |
| `GetMissionDebugInfoForAgent` | `public virtual string GetMissionDebugInfoForAgent(Agent agent)` | 调试文本，默认返回 `"Debug info not supported in this model"`。 |

## 真实示例

照 `CustomBattleAgentStatCalculateModel` 的形状写一个最小实现（15 个 abstract 都要覆盖）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;

public class MyStatCalculateModel : AgentStatCalculateModel
{
    public override float GetDifficultyModifier()
    {
        return 1f;
    }

    public override bool CanAgentRideMount(Agent agent, Agent targetMount)
    {
        return agent.CheckSkillForMounting(targetMount);
    }

    public override void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)
    {
        agentDrivenProperties.ArmorEncumbrance = GetEffectiveArmorEncumbrance(agent, spawnEquipment);
        if (agent.IsHuman)
        {
            agentDrivenProperties.ArmorHead = spawnEquipment.GetHeadArmorSum();
            agentDrivenProperties.ArmorTorso = spawnEquipment.GetHumanBodyArmorSum();
        }
        else
        {
            agentDrivenProperties.AiSpeciesIndex = (int)spawnEquipment[EquipmentIndex.ArmorItemEndSlot].Item.Id.InternalValue;
        }
    }

    public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)
    {
        agentDrivenProperties.WeaponInaccuracy = 0f;
    }

    public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)
    {
        return 1f;
    }

    public override float GetEquipmentStealthBonus(Agent agent)
    {
        return 0f;
    }

    public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)
    {
        return 1f;
    }

    public override float GetKnockBackResistance(Agent agent)
    {
        return 0f;
    }

    public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)
    {
        return 0f;
    }

    public override float GetDismountResistance(Agent agent)
    {
        return 0f;
    }

    public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)
    {
        return baseBreatheHoldMaxDuration;
    }
}
```

只调散布、其余转发 vanilla——注意不能写 `base.`，abstract 成员没有实现体：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class SharperShootingModel : AgentStatCalculateModel
{
    private readonly AgentStatCalculateModel _vanilla;

    public SharperShootingModel(AgentStatCalculateModel vanilla)
    {
        Initialize(vanilla);
        _vanilla = vanilla;
    }

    public override float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)
    {
        // 显式转发：abstract 成员不能 base. 调用
        float baseValue = _vanilla.GetWeaponInaccuracy(agent, weapon, weaponSkill);
        return baseValue * 0.5f;
    }

    public override float GetDifficultyModifier()
    {
        return _vanilla.GetDifficultyModifier();
    }

    public override bool CanAgentRideMount(Agent agent, Agent targetMount)
    {
        return _vanilla.CanAgentRideMount(agent, targetMount);
    }

    public override void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)
    {
        _vanilla.InitializeAgentStats(agent, spawnEquipment, agentDrivenProperties, agentBuildData);
    }

    public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)
    {
        _vanilla.UpdateAgentStats(agent, agentDrivenProperties);
    }

    public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)
    {
        return _vanilla.GetWeaponDamageMultiplier(agent, weapon);
    }

    public override float GetEquipmentStealthBonus(Agent agent)
    {
        return _vanilla.GetEquipmentStealthBonus(agent);
    }

    public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)
    {
        return _vanilla.GetSneakAttackMultiplier(agent, weapon);
    }

    public override float GetKnockBackResistance(Agent agent)
    {
        return _vanilla.GetKnockBackResistance(agent);
    }

    public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)
    {
        return _vanilla.GetKnockDownResistance(agent, strikeType);
    }

    public override float GetDismountResistance(Agent agent)
    {
        return _vanilla.GetDismountResistance(agent);
    }

    public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)
    {
        return _vanilla.GetBreatheHoldMaxDuration(agent, baseBreatheHoldMaxDuration);
    }
}
```

在任务里读回生效的实例并试算几个值——这是调参最直接的调试方式：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

AgentStatCalculateModel model = MissionGameModels.Current.AgentStatCalculateModel;
if (model == null)
{
    Debug.Print("no AgentStatCalculateModel registered", 0);
    return;
}
Agent agent = target;
MissionWeapon wielded = agent.WieldedWeapon;
WeaponComponentData weapon = (wielded != null && wielded.Item != null) ? wielded.Item as WeaponComponentData : null;
Debug.Print("model = " + model.GetType().Name, 0);
Debug.Print("difficulty = " + model.GetDifficultyModifier(), 0);
Debug.Print("aiAttackMax = " + model.CalculateAIAttackOnDecideMaxValue(), 0);
Debug.Print("heavy armor = " + model.HasHeavyArmor(agent), 0);
Debug.Print("interaction distance = " + model.GetInteractionDistance(agent), 0);
if (weapon != null)
{
    int skill = model.GetEffectiveSkillForWeapon(agent, weapon);
    Debug.Print("weapon inaccuracy = " + model.GetWeaponInaccuracy(agent, weapon, skill), 0);
}
```

按难度档位预演 AI 水平（`CalculateAILevel` 是 protected，外部只能用 public 面观察）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

AgentStatCalculateModel model = MissionGameModels.Current.AgentStatCalculateModel;
float difficulty = model.GetDifficultyModifier();
// 与 CalculateAILevel 的分档一致：<=0 -> 0.1f, <=0.5 -> 0.32f, else 0.96f
float factor = difficulty <= 0f ? 0.1f : (difficulty <= 0.5f ? 0.32f : 0.96f);
float aiLevel = MBMath.ClampFloat(250f / 300f * factor, 0f, 1f);
Debug.Print("difficulty=" + difficulty + " approximate ai level=" + aiLevel, 0);
```

## 风险与边界

- **抽象成员不能用 `base.` 调用。** 15 个 abstract 方法没有实现体，`base.XXX(...)` 是 CS0239 编译错误。要复用 vanilla 必须持有实例显式转发。
- **必须实现全部 15 个 abstract 成员。** 少一个就编译不过；这是刻意的——它保证每个实现者都要过一遍这 15 个决策点。
- **两个方法不是 virtual。** `CalculateAIAttackOnDecideMaxValue`、`ResetAILevelMultiplier`、`SetAILevelMultiplier` 都不能覆写，`CalculateAIAttackOnDecideMaxValue` 只能靠改 `GetDifficultyModifier()` 的返回值间接影响。
- **`GetDifficultyModifier` 的返回值是分档阈值。** 0 / 0.5 两个阈值同时被 `CalculateAILevel` 与 `CalculateAIAttackOnDecideMaxValue` 使用，返回 0.6 和返回 1.0 在 AI 水平上完全等价。
- **`GetEffectiveSkill` 与 `GetEffectiveSkillForWeapon` 是层叠的。** 覆写前者会自动影响后者与 `GetWeaponInaccuracy` 的调用链；只覆写后者则不影响前者。
- **`GetEnvironmentSpeedFactor` 读 `agent.Mission.Scene`。** Agent 不在任务里（地图上、或 Mission 为 null）会 NRE。
- **`GetBreatheHoldMaxDuration` 的语义歧义。** 形参叫 `baseBreatheHoldMaxDuration`，但接口没有说明返回的是最终值还是增量；三个官方实现需要逐个对源码确认后再决定怎么转发。
- **`SetAllWeaponInaccuracy` 的 `equippedIndex` 形参未被使用。** 照抄签名时别指望它参与逻辑。
- **`GetDetachmentCostMultiplierOfAgent` 的 10f 是旗帜惩罚。** 「挂旗帜 = 成本 ×10」是默认实现写死的，改这个方法的连带影响远大于看名字的直觉。
- **数值槽位是固定 98 项的数组。** `AgentDrivenProperties` 用 `_statValues[98]` 与 `DrivenProperty` 枚举下标对应——**枚举顺序不能改**，否则全盘数值错位。
- **创建期 vs 运行期别写混。** `InitializeAgentStats` 只在创建时跑一次；写在里面的效果换装后就消失了。

## 依赖关系

- 基类链：[MBGameModel](../../core-extra/MBGameModel/) 持有 `protected T BaseModel` 与 `public void Initialize(T)`；再往上是 [GameModel](../../core-extra/GameModel/) 的空标记类
- 输出目标：[AgentDrivenProperties](../AgentDrivenProperties/) 的 98 个 float 属性，每个 setter 都转发到 `SetStat(DrivenProperty, float)`；调用点在 `AgentDrivenProperties.InitializeDrivenProperties` 与 `UpdateDrivenProperties`，二者都会回调本模型
- 注册与读取：[MissionGameModels](../MissionGameModels/) 的 `AgentStatCalculateModel` 属性由 `GetGameModel<AgentStatCalculateModel>()` 填入
- 参数类型：[Agent](../../mission/Agent/)、[Equipment](../../core-extra/Equipment/)、[WeaponComponentData](../../core-extra/WeaponComponentData/)、[SkillObject](../../core-extra/SkillObject/)、`IDetachment`、`StrikeType`（`TaleWorlds.Core`）
- 默认技能：[Athletics](../../campaign-ext/Athletics)（`GetMeleeSkill` 的兜底技能）
- 参考实现：`CustomBattleAgentStatCalculateModel`、`MultiplayerAgentStatCalculateModel`、`Modules.SandBox/SandBox/SandBox.GameComponents/SandboxAgentStatCalculateModel`
- 配套的伤害侧：[AgentApplyDamageModel](../AgentApplyDamageModel/) 管伤害怎么算，本类管属性怎么折算，两者通过同一个 `MissionGameModels` 容器并列
- 桶首页：[mission-ext API 分区](../)
