---
title: "AgentStatCalculateModel"
description: "「单位属性怎么算出来」的可替换模型基类：把兵种模板、装备、技能与当前状态折算成每个单位身上的运行时数值，是 mod 统一改全场单位属性的正确切入点。"
---
# AgentStatCalculateModel

**Namespace:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class AgentStatCalculateModel : MBGameModel<AgentStatCalculateModel>`
**Source:** `TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`AgentStatCalculateModel` 是「一个单位的属性到底怎么算出来」这条链路上的**可替换模型基类**。它本身不存任何数值，只定义一组计算入口：出生时把装备与兵种数据折算成初始属性，之后在装备变化、部署完成、技能变动等时点重算，把结果写进挂在每个单位身上的属性容器。

它是 `public abstract class`，继承 `MBGameModel<AgentStatCalculateModel>`（`AgentStatCalculateModel.cs:9`），因此走 `GameModelsManager` 的模型注册体系：战役/任务启动时由 `MissionGameModels` 通过 `GetGameModel<AgentStatCalculateModel>()` 取到具体实现并暴露为 `MissionGameModels.Current.AgentStatCalculateModel`。引擎在单位生命周期的固定时点回调它——出生走 `InitializeAgentStats`，之后每次刷新走 `UpdateAgentStats`——所以**只要覆写本类，改动就落在引擎自己那条调用链上，对所有单位一致生效**。

这一页的重点不是逐个背出每个计算函数，而是分清它和数值容器各自扮演的角色，并知道要动哪一类改动该覆写哪个入口。

## 心智模型

把它想成一条**装配线**，而不是一张配置表：

- **本类是算法，属性容器是结果。** `AgentStatCalculateModel` 回答「这个单位的挥速/护甲/AI 精度该是多少」，算完把答案写进 `AgentDrivenProperties`；后者只是装答案的盒子。想改「算法」就覆写本类，想读/临时改「答案」就碰容器。两者分工不能混。
- **引擎持有调用权，所以覆写才持久。** 单位出生、装备切换、部署完成、周期刷新这些时点都由引擎主动调用本类。运行时直接对属性容器 `SetStat` 会在下一次重算时被冲掉；**覆写本类的方法，才能让修改进入每次重算，从而对所有单位稳定生效**。
- **抽象方法 = 必须表态，虚方法 = 可留默认。** 伤害倍率、潜行加成、击退/击倒/落马抗性、憋气时长这些是 `abstract`，子类必须给答案；而护甲负重、最大生命、环境速度系数、有效技能、武器散布等是 `virtual`，基类已给出通用实现，只有在你想改规则时才覆写。
- **难度是横切变量。** `GetDifficultyModifier` 的结果贯穿 AI 等级换算与攻击决策阈值：难度越高，AI 的等级折算系数越大、决策越激进。任何依赖 AI 强度的覆写都应把难度调制考虑进去，否则会做出「简单难度和真实难度一个样」的畸形手感。
- **AI 强度有一个可调总闸。** `ResetAILevelMultiplier` 与 `SetAILevelMultiplier` 提供实例级的 AI 强度倍率，作用在 AI 等级折算结果上，适合做「全局 AI 变强/变弱」而不用重写整套决策参数。

## 怎么用

### 怎么拿到

模型实例不在单位身上，而在任务级模型管理器里。任务进行中取：

```csharp
// 任务/战役进行中，模型管理器已经初始化好
MissionGameModels models = MissionGameModels.Current;
AgentStatCalculateModel statModel = models.AgentStatCalculateModel;

// 也可以按类型名取，效果相同
AgentStatCalculateModel same = MissionGameModels.Current.GetGameModel<AgentStatCalculateModel>();
```

`MissionGameModels.Current` 在任务生命周期内非空；离开任务后不要缓存这个引用，下一次任务会换一套模型实例。

### 典型用法

想「所有单位近战伤害 +50%」，不要遍历改容器，而是覆写算法入口。子类只重写真正关心的那一项，其余继承基类默认：

```csharp
public sealed class MyStatCalculateModel : AgentStatCalculateModel
{
    // 出生时初始化：直接转调基类默认算法
    public override void InitializeAgentStats(
        Agent agent, Equipment spawnEquipment,
        AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)
    {
        base.InitializeAgentStats(agent, spawnEquipment, agentDrivenProperties, agentBuildData);
    }

    // 每次刷新时重算：在这里统一放大近战伤害
    public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)
    {
        base.UpdateAgentStats(agent, agentDrivenProperties);
        agentDrivenProperties.MeleeWeaponDamageMultiplierBonus *= 1.5f;
    }

    // 抽象成员必须表态
    public override float GetDifficultyModifier() => 0.5f;
    public override bool CanAgentRideMount(Agent agent, Agent targetMount) => true;
    public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon) => 1f;
    public override float GetEquipmentStealthBonus(Agent agent) => 1f;
    public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon) => 1f;
    public override float GetKnockBackResistance(Agent agent) => 0f;
    public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid) => 0f;
    public override float GetDismountResistance(Agent agent) => 0f;
    public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)
        => baseBreatheHoldMaxDuration;
}
```

运行时按需整体调 AI 强度（例如某阶段临时强化守军）：

```csharp
AgentStatCalculateModel model = MissionGameModels.Current.AgentStatCalculateModel;
model.SetAILevelMultiplier(1.5f);   // 提高 AI 等级折算
// 战斗结束后复位
model.ResetAILevelMultiplier();     // 回到 1.0
```

只想读某个单位的当前有效技能值，直接问模型而不是猜容器：

```csharp
int archery = statModel.GetEffectiveSkill(agent, DefaultSkills.Bow);
int meleeSkill = statModel.GetMeleeSkill(agent, equippedWeapon, secondaryWeapon);
```

### 坑

- **改容器 ≠ 改模型。** 在别处对 `agent.AgentDrivenProperties` 直接写值，下一次 `UpdateAgentStats` 重算时会被本模型覆盖；持久改动要落到本类的覆写里，或落在数据源（兵种/装备）上。
- **`UpdateAgentStats` 是热路径。** 它按刷新节奏被反复调用，里面别做分配、别查重、别遍历全场；重活放到出生时的 `InitializeAgentStats` 或缓存好。
- **`abstract` 成员漏实现编译不过，但语义要自己想清。** 基类不给默认值的方法（伤害倍率、各类抗性、潜行、憋气时长）意味着「引擎期望你的游戏规则给出答案」，照抄 1.0f/0f 只是最保守的直译，不一定是你要的手感。
- **`GetEffectiveSkill` 走的是角色数据，不是容器。** 默认实现读 `agent.Character.GetSkillValue(skill)`；如果你在别处改了技能却没同步到 `Character`，模型读到的还是旧值。
- **难度调制不是开关。** `GetDifficultyModifier` 的返回值被用来缩放 AI 等级（见 `CalculateAILevel` 的系数分支），改动它会产生连锁效果；只想调某一项伤害时不要顺手改它。
- **模型是任务级的。** 换任务、读档重进都会重建，别把实例或它算出的数值缓存到任务之外。

## 关键成员

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `InitializeAgentStats` | `public abstract void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)` | 出生初始化总入口：把兵种模板 + 出生装备折算成初始属性，抽象必须实现 | `AgentStatCalculateModel.cs:12` |
| `InitializeMissionEquipment` | `public virtual void InitializeMissionEquipment(Agent agent)` | 任务级装备初始化钩子，基类空实现，供需要额外装备处理的子类覆写 | `AgentStatCalculateModel.cs:15` |
| `InitializeAgentStatsAfterDeploymentFinished` | `public virtual void InitializeAgentStatsAfterDeploymentFinished(Agent agent)` | 部署完成后的属性补算钩子，适合依赖布阵位置/阵型状态的加成 | `AgentStatCalculateModel.cs:20` |
| `InitializeMissionEquipmentAfterDeploymentFinished` | `public virtual void InitializeMissionEquipmentAfterDeploymentFinished(Agent agent)` | 部署完成后的装备补算钩子，与上者成对 | `AgentStatCalculateModel.cs:25` |
| `UpdateAgentStats` | `public abstract void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)` | 周期重算总入口：每次刷新重新折算属性，是「持久改动」的落点，抽象必须实现 | `AgentStatCalculateModel.cs:30` |
| `GetDifficultyModifier` | `public abstract float GetDifficultyModifier()` | 难度调制值：被 AI 等级折算与攻击决策阈值读取，是 AI 强度的横切变量 | `AgentStatCalculateModel.cs:33` |
| `CanAgentRideMount` | `public abstract bool CanAgentRideMount(Agent agent, Agent targetMount)` | 判定某单位能否骑上目标坐骑，抽象必须实现 | `AgentStatCalculateModel.cs:36` |
| `HasHeavyArmor` | `public virtual bool HasHeavyArmor(Agent agent)` | 是否重甲：默认按胸甲效能 ≥ 24 判定，影响移动/隐蔽相关规则 | `AgentStatCalculateModel.cs:39` |
| `GetEffectiveArmorEncumbrance` | `public virtual float GetEffectiveArmorEncumbrance(Agent agent, Equipment equipment)` | 有效护甲负重：默认取整套护甲重量，参与移动惩罚 | `AgentStatCalculateModel.cs:45` |
| `GetEffectiveMaxHealth` | `public virtual float GetEffectiveMaxHealth(Agent agent)` | 有效生命上限：默认返回单位基础生命，可覆写做血量规则 | `AgentStatCalculateModel.cs:51` |
| `GetEnvironmentSpeedFactor` | `public virtual float GetEnvironmentSpeedFactor(Agent agent)` | 环境速度系数：默认在雨天 ×0.9、夜间非人类 ×0.9，室内不惩罚 | `AgentStatCalculateModel.cs:57` |
| `GetWeaponInaccuracy` | `public virtual float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)` | 武器散布：按武器精度与技能计算远程散布，近战宽握另有一套 | `AgentStatCalculateModel.cs:86` |
| `GetEffectiveSkill` | `public virtual int GetEffectiveSkill(Agent agent, SkillObject skill)` | 有效技能值：默认读角色数据 `agent.Character.GetSkillValue(skill)` | `AgentStatCalculateModel.cs:130` |
| `GetEffectiveSkillForWeapon` | `public virtual int GetEffectiveSkillForWeapon(Agent agent, WeaponComponentData weapon)` | 某武器对应的有效技能：默认按武器 `RelevantSkill` 转调上者 | `AgentStatCalculateModel.cs:136` |
| `GetWeaponDamageMultiplier` | `public abstract float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)` | 武器伤害倍率，抽象必须实现，是最常用的全局伤害调参点 | `AgentStatCalculateModel.cs:142` |
| `GetEquipmentStealthBonus` | `public abstract float GetEquipmentStealthBonus(Agent agent)` | 装备潜行加成，抽象必须实现 | `AgentStatCalculateModel.cs:145` |
| `GetSneakAttackMultiplier` | `public abstract float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)` | 潜行攻击倍率，抽象必须实现 | `AgentStatCalculateModel.cs:148` |
| `GetKnockBackResistance` | `public abstract float GetKnockBackResistance(Agent agent)` | 击退抗性，抽象必须实现 | `AgentStatCalculateModel.cs:151` |
| `GetKnockDownResistance` | `public abstract float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)` | 击倒抗性（可按打击类型区分），抽象必须实现 | `AgentStatCalculateModel.cs:154` |
| `GetDismountResistance` | `public abstract float GetDismountResistance(Agent agent)` | 落马抗性，抽象必须实现 | `AgentStatCalculateModel.cs:157` |
| `GetBreatheHoldMaxDuration` | `public abstract float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)` | 憋气最长时间：以基础值为输入再折算，抽象必须实现 | `AgentStatCalculateModel.cs:160` |
| `ResetAILevelMultiplier` | `public void ResetAILevelMultiplier()` | 把 AI 等级倍率复位为 1.0，用于临时强化的收尾 | `AgentStatCalculateModel.cs:169` |
| `SetAILevelMultiplier` | `public void SetAILevelMultiplier(float multiplier)` | 设置 AI 等级倍率，整体放大/缩小 AI 强度 | `AgentStatCalculateModel.cs:175` |
| `GetMeleeSkill` | `protected int GetMeleeSkill(Agent agent, WeaponComponentData equippedItem, WeaponComponentData secondaryItem)` | 近战技能选择：按主手武器与副手情况决定该用哪项技能（含双手武器有副手时降为一手） | `AgentStatCalculateModel.cs:181` |
| `CalculateAILevel` | `protected float CalculateAILevel(Agent agent, int relevantSkillLevel)` | 技能等级 → AI 等级：按难度分支缩放并夹取到 0..1 | `AgentStatCalculateModel.cs:204` |
| `SetAiRelatedProperties` | `protected void SetAiRelatedProperties(Agent agent, AgentDrivenProperties agentDrivenProperties, WeaponComponentData equippedItem, WeaponComponentData secondaryItem)` | AI 属性总装：把近战/远程技能折算成整批 AI 决策与误差参数写入容器 | `AgentStatCalculateModel.cs:211` |
| `SetAllWeaponInaccuracy` | `protected void SetAllWeaponInaccuracy(Agent agent, AgentDrivenProperties agentDrivenProperties, int equippedIndex, WeaponComponentData equippedWeaponComponent)` | 按当前武器写入散布值，无武器时归零 | `AgentStatCalculateModel.cs:278` |

## 真实示例

**场景：让所有步兵移动更快、且重甲不再拖慢他们。** 只覆写与速度相关的入口，其余沿用基类默认：

```csharp
public sealed class InfantrySpeedModel : AgentStatCalculateModel
{
    public override void InitializeAgentStats(
        Agent agent, Equipment spawnEquipment,
        AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)
    {
        base.InitializeAgentStats(agent, spawnEquipment, agentDrivenProperties, agentBuildData);
    }

    public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)
    {
        base.UpdateAgentStats(agent, agentDrivenProperties);
        // 只在周期重算里放大速度，避免被下一次重算冲掉
        agentDrivenProperties.MaxSpeedMultiplier *= 1.15f;
    }

    public override float GetEffectiveArmorEncumbrance(Agent agent, Equipment equipment)
    {
        // 步兵不吃护甲负重惩罚
        return 0f;
    }

    public override float GetEnvironmentSpeedFactor(Agent agent)
    {
        // 保持基类对天气/昼夜的处理
        return base.GetEnvironmentSpeedFactor(agent);
    }

    public override float GetDifficultyModifier() => 1f;
    public override bool CanAgentRideMount(Agent agent, Agent targetMount) => true;
    public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon) => 1f;
    public override float GetEquipmentStealthBonus(Agent agent) => 1f;
    public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon) => 1f;
    public override float GetKnockBackResistance(Agent agent) => 0f;
    public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid) => 0f;
    public override float GetDismountResistance(Agent agent) => 0f;
    public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)
        => baseBreatheHoldMaxDuration;
}
```

**场景：在已有实现上做局部查询与调试。** 用模型给出的口径判断单位状态，而不是自己重算：

```csharp
AgentStatCalculateModel model = MissionGameModels.Current.AgentStatCalculateModel;
Agent agent = Mission.Current.MainAgent;

// 该单位是否被本模型判为「重甲」
bool heavy = model.HasHeavyArmor(agent);

// 某把武器在当前技能下会得到的散布值
float spread = model.GetWeaponInaccuracy(agent, weapon, model.GetEffectiveSkillForWeapon(agent, weapon));

// 需要时输出模型自带的调试串（基类默认不支持，可覆写扩展）
string debug = model.GetMissionDebugInfoForAgent(agent);
```

注意 `GetWeaponInaccuracy` 与 `GetMissionDebugInfoForAgent` 都是可直接调用的查询入口，把它们当作「引擎同款算法」来用，能避免自己在别处重复实现导致数值口径不一致。

## 参见

- [`../AgentDrivenProperties`](../AgentDrivenProperties) —— **结果层**：本类算出的数值最终写进这个容器；先读它理解「答案长什么样」，再读本页理解「答案怎么来」。
- [`../../mission/Agent`](../../mission/Agent) —— 本类所有计算的服务对象；`InitializeAgentStats` / `UpdateAgentStats` 的入参就是它。
- [`../../mission/Mission`](../../mission/Mission) —— 任务的宿主；`Mission.Current.Agents` 是遍历全场单位施加规则时的入口。
- [`../../mission/Formation`](../../mission/Formation) —— 阵型与兵种分类（`FormationClass`）来自这里，做「只强化步兵/弓手」的覆写时要读它。
- [`../../core-extra/GameModelsManager`](../../core-extra/GameModelsManager) —— 模型注册与取用体系；`MBGameModel<T>` 与 `GetGameModel<T>()` 的规则在这里。
- [`../_index`](../_index) —— `mission-ext` 桶全类型索引。

## 导航

- 同桶：[`../AgentDrivenProperties`](../AgentDrivenProperties) · [`../Team`](../Team) · [`../MissionLogic`](../MissionLogic) · [`../UsableMachine`](../UsableMachine)
- 相关入口：[`../../mission/Agent`](../../mission/Agent) · [`../../mission/Mission`](../../mission/Mission) · [`../../mission/Formation`](../../mission/Formation)
- 父索引：[`../_index`](../_index)
