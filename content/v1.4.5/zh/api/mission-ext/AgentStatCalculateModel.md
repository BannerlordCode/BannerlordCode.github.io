---
title: "AgentStatCalculateModel"
description: "Agent 数值策略层：30 个成员里 11 个是纯常量式的 virtual 默认实现（重甲阈值 24、交互距离 1.5、镜头缩放 1、旗手 detachment 成本 10），8 个是 abstract 留给模块实现。一个全局 AI 等级倍率只被赛事用。"
---

# AgentStatCalculateModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentStatCalculateModel : MBGameModel<AgentStatCalculateModel>`
**Base:** `MBGameModel<AgentStatCalculateModel>`
**File:** `TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs`

## 概述

全文 242 行、30 个成员，是引擎里「一个 Agent 该有多少血、该走多快、该打多准、能不能上马」这一整层问题的策略接口。

持有者的属性声明在 `MissionGameModels.cs:11`，赋值语句在 `MissionGameModels.cs:45`。三个模块各实现一份：CustomBattle 的 [CustomBattleAgentStatCalculateModel](../CustomBattleAgentStatCalculateModel/)（`CustomBattleAgentStatCalculateModel.cs:8`）、联机的 [MultiplayerAgentStatCalculateModel](../MultiplayerAgentStatCalculateModel/)（`MultiplayerAgentStatCalculateModel.cs:7`）、沙盒的 [SandboxAgentStatCalculateModel](../../campaign-ext/SandboxAgentStatCalculateModel/)（`SandboxAgentStatCalculateModel.cs:19`）。

它最有价值的地方不在那些 `abstract`——**而在于那十几个带具体默认值的 `virtual`。** 这些默认实现就是引擎在「没人管」时的实际行为，mod 直接照抄就能得到完全一致的数值：

| 问题 | 默认实现 | 行号 |
| --- | --- | --- |
| 有没有重甲 | 躯干护甲有效度 ≥ 24 就算有 | `AgentStatCalculateModel.cs:36` |
| 护甲负重 | 装备的护甲总重（按是否人类分） | `AgentStatCalculateModel.cs:41` |
| 最大血量 | 直接返回基础血量上限 | `AgentStatCalculateModel.cs:46` |
| 环境移速 | 室内 1.0；下雨 ×0.9；非人类且夜晚 ×0.9 | `AgentStatCalculateModel.cs:52-64` |
| 武器散布 | 远程按精度算，宽握近战 `1 - 技能×0.01`，其余 0 | `AgentStatCalculateModel.cs:78-87` |
| detachment 成本 | 带旗 10 倍，否则 1 倍 | `AgentStatCalculateModel.cs:94-95` |
| 交互距离 | 恒为 1.5 | `AgentStatCalculateModel.cs:101` |
| 最大镜头缩放 | 恒为 1 | `AgentStatCalculateModel.cs:106` |
| 有效技能 | 直接取角色面板值 | `AgentStatCalculateModel.cs:111` |

## 心智模型

把它当成**「所有战斗数值的唯一改写点」**，而不是「属性计算工具」。四条推论：

第一，**它同时是查询口和写入口，别混了。** `InitializeAgentStats`（`AgentStatCalculateModel.cs:14`）、`UpdateAgentStats`（`:28`）以及四个部署前后的钩子（`:16`、`:20`、`:24`）是**写**——往 `AgentDrivenProperties` 上灌值。而 `GetWeaponDamageMultiplier`（`:119`）、`GetKnockBackResistance`（`:125`）这类 `Get*` 是**读**——别人来问。所以你要改 AI 强度，走 `SetAiRelatedProperties`；你要改「暴击倍率」，覆写对应的 `Get*` 即可。

第二，**那个全局旋钮几乎没有消费者。** 字段本身是 `AgentStatCalculateModel.cs:12` 上的一个 `private float`。

可写口只有两个：复位方法在 `AgentStatCalculateModel.cs:138`，写入方法在 `AgentStatCalculateModel.cs:143`。

读的地方只有两处：都在 `AgentStatCalculateModel.cs:171` 到 `:172` 之间，是 melee 与有效技能两路 AI 等级。

**全树唯一的调用者是赛事**：按轮次设值发生在 `TournamentBehavior.cs:224`，赛事结束的复位发生在 `TournamentBehavior.cs:235`。**在非赛事场景调它，你改的是一个只有两个 AI 属性会响应的字段。**

第三，**难度在两条路径上是两套分档。** 判断在 `AgentStatCalculateModel.cs:69`，低档值在 `AgentStatCalculateModel.cs:71`，高档值在 `AgentStatCalculateModel.cs:73`。**这条路径上难度是二值的，没有中间档。**

而另一个换算函数反过来有三档，常数写死在 `AgentStatCalculateModel.cs:162`。**两个函数的难度分档规则不一样**，别把它们当成同一个曲线。

第四，**难度的分档全部来自 `GetDifficultyModifier()`，而那个方法是 `abstract`。** `AgentStatCalculateModel.cs:30`。**也就是说沙盒能调难度、联机和自定义战场不能**——除非你覆写它。这也是三个实现之间数值差异的主要来源。

还有一条边界：`protected const float MaxHorizontalErrorRadian = System.MathF.PI / 90f;`（`AgentStatCalculateModel.cs:10`）**全类只用了这一个常量**，它是给派生类用的——**本类的实现里没有任何一处引用它。** 想知道 2 度水平误差这个约束从哪来，看你的派生类用在哪。

## 如何使用

**拿法：** 走 `MissionGameModels.Current.AgentStatCalculateModel`，别 `new`：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static void LogAgentStatFacts(Agent agent)
{
    AgentStatCalculateModel model = MissionGameModels.Current.AgentStatCalculateModel;

    MBDebug.Print("hasHeavyArmor=" + model.HasHeavyArmor(agent), 0);
    MBDebug.Print("armorEncumbrance=" + model.GetEffectiveArmorEncumbrance(agent, agent.SpawnEquipment), 0);
    MBDebug.Print("maxHealth=" + model.GetEffectiveMaxHealth(agent), 0);
    MBDebug.Print("environmentSpeedFactor=" + model.GetEnvironmentSpeedFactor(agent), 0);
    MBDebug.Print("difficultyModifier=" + model.GetDifficultyModifier(), 0);
}
```

覆写默认值来做「mod 专属手感」，只改你关心的那几个：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyModAgentStatModel : AgentStatCalculateModel
{
    // abstract 必须全部实现；这里先给出与基类等价的占位实现
    public override void InitializeAgentStats(Agent agent, Equipment spawnEquipment,
        AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData) { }
    public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties) { }
    public override float GetDifficultyModifier() => 1f;
    public override bool CanAgentRideMount(Agent agent, Agent targetMount) => true;
    public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon) => 1f;
    public override float GetEquipmentStealthBonus(Agent agent) => 0f;
    public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon) => 1f;
    public override float GetKnockBackResistance(Agent agent) => 0f;
    public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid) => 0f;
    public override float GetDismountResistance(Agent agent) => 0f;
    public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)
        => baseBreatheHoldMaxDuration;

    // ↓ 真正想改的：把「有没有重甲」的门槛从 24 抬到 40
    public override bool HasHeavyArmor(Agent agent)
    {
        return agent.GetBaseArmorEffectivenessForBodyPart(BoneBodyPartType.Chest) >= 40f;
    }

    // ↓ 交互距离放大 50%，AI 与玩家交互判定同步生效
    public override float GetInteractionDistance(Agent agent)
    {
        return 2.25f;   // 基类默认 1.5，见 AgentStatCalculateModel.cs:101
    }
}
```

读 AI 难度等级的换算方式（照抄基类算法，不改行为）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// 与 AgentStatCalculateModel.cs:162 的三档完全一致的本地复刻
public static float EstimateAILevel(AgentStatCalculateModel model, Agent agent, int skillLevel)
{
    float difficultyModifier = model.GetDifficultyModifier();

    float factor = difficultyModifier <= 0f ? 0.1f
                  : (difficultyModifier <= 0.5f ? 0.32f
                  : 0.96f);

    return MBMath.ClampFloat(skillLevel / 300f * factor, 0f, 1f);
}

// 难度对 AI 攻击判定的上限只有两档，见 AgentStatCalculateModel.cs:69
public static float EstimateAttackOnDecideMax(AgentStatCalculateModel model)
{
    return model.GetDifficultyModifier() <= 0.5f ? 0.16f : 0.48f;
}
```

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 类声明 | `public abstract class AgentStatCalculateModel : MBGameModel<AgentStatCalculateModel>`（`AgentStatCalculateModel.cs:8`） | 命名空间是根 `TaleWorlds.MountAndBlade`。文件头 4 行 `using` 含 `TaleWorlds.Engine`（为了 `Scene`）与 `TaleWorlds.Library`（为了 `MBMath`）。 |
| `MaxHorizontalErrorRadian` | `protected const float MaxHorizontalErrorRadian = System.MathF.PI / 90f`（`AgentStatCalculateModel.cs:10`） | **protected 常量，约 2 度。** 写死用全限定名 `System.MathF` 而不是文件头引入的 `MathF`——这是反编译产物，不是风格选择。**本类实现里零引用，是给派生类用的。** |
| `_AILevelMultiplier` | `private float _AILevelMultiplier = 1f`（`AgentStatCalculateModel.cs:12`） | **private**，外部只能通过两个方法改。唯一读点是 `AgentStatCalculateModel.cs:171`。 |
| `InitializeAgentStats` | `public abstract void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)`（`AgentStatCalculateModel.cs:14`） | 生成时的数值初始化。**同时给了装备与建造单两个来源**，所以这一层能读到「按什么装备生成的」。 |
| `InitializeMissionEquipment` | `public virtual void InitializeMissionEquipment(Agent agent)`（`AgentStatCalculateModel.cs:16`） | 空实现。任务内动态装备变化后的钩子。 |
| `InitializeAgentStatsAfterDeploymentFinished` | `public virtual void InitializeAgentStatsAfterDeploymentFinished(Agent agent)`（`AgentStatCalculateModel.cs:20`） | 空实现。**部署刚结束时重算数值**——这是「布阵改了装备，效果要跟上」的官方位置。 |
| `InitializeMissionEquipmentAfterDeploymentFinished` | `public virtual void InitializeMissionEquipmentAfterDeploymentFinished(Agent agent)`（`AgentStatCalculateModel.cs:24`） | 空实现。与上一条配对的「部署后装备」版本。 |
| `UpdateAgentStats` | `public abstract void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)`（`AgentStatCalculateModel.cs:28`） | **逐帧/周期更新入口。** 与 `InitializeAgentStats` 的区别是它没有装备与建造单形参——**到这里只能靠 Agent 当前状态。** |
| `GetDifficultyModifier` | `public abstract float GetDifficultyModifier()`（`AgentStatCalculateModel.cs:30`） | **全类难度的唯一来源。** 被 `CalculateAILevel`（`:161`）、`SetAiRelatedProperties`（`:174`）与 `CalculateAIAttackOnDecideMaxValue`（`:69`）读。**覆写它等于一次改掉全模型。** |
| `CanAgentRideMount` | `public abstract bool CanAgentRideMount(Agent agent, Agent targetMount)`（`AgentStatCalculateModel.cs:32`） | 能否上马。**形参给了目标马而不只是布尔**，所以可以按马的种类/高度区分。 |
| `HasHeavyArmor` | `public virtual bool HasHeavyArmor(Agent agent)`（`AgentStatCalculateModel.cs:34`） | 默认：`GetBaseArmorEffectivenessForBodyPart(BoneBodyPartType.Chest) >= 24f`（`:36`）。**只看躯干**，不看头腿。 |
| `GetEffectiveArmorEncumbrance` | `public virtual float GetEffectiveArmorEncumbrance(Agent agent, Equipment equipment)`（`AgentStatCalculateModel.cs:39`） | 默认：`equipment.GetTotalWeightOfArmor(agent.IsHuman)`（`:41`）。**传的是 Equipment 形参而不是读 `agent` 的装备**——所以可以为「还没穿上的装备」预判负重。 |
| `GetEffectiveMaxHealth` | `public virtual float GetEffectiveMaxHealth(Agent agent)`（`AgentStatCalculateModel.cs:44`） | 默认直接返回 `agent.BaseHealthLimit`（`:46`），即**不做任何难度/状态修正**。 |
| `GetEnvironmentSpeedFactor` | `public virtual float GetEnvironmentSpeedFactor(Agent agent)`（`AgentStatCalculateModel.cs:49`） | 默认三重乘算：室内 1.0（`:53` 的判断）；室外下雨 ×0.9（`:57`）；非人类且非白天 ×0.9（`:61`）。**两个 0.9 可以叠乘成 0.81。** |
| `CalculateAIAttackOnDecideMaxValue` | `public float CalculateAIAttackOnDecideMaxValue()`（`AgentStatCalculateModel.cs:67`） | **非 virtual**（这一点与全类不同）。难度 ≤ 0.5 返回 `0.16f`（`:71`），否则 `0.48f`（`:73`）。**二值，无中间档。** |
| `GetWeaponInaccuracy` | `public virtual float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)`（`AgentStatCalculateModel.cs:76`） | 远程按 `100 - Accuracy` 乘技能衰减（Sling 用 0.003、其余 0.002，`:81`）；宽握近战 `1 - 技能×0.01`（`:85`）；**其余近战恒为 0**（`:78` 初始值 0）。最后 `MathF.Max(a, 0f)`（`:87`）。 |
| `GetDetachmentCostMultiplierOfAgent` | `public virtual float GetDetachmentCostMultiplierOfAgent(Agent agent, IDetachment detachment)`（`AgentStatCalculateModel.cs:90`） | 默认：有旗 10 倍（`AgentStatCalculateModel.cs:94`），否则 1 倍（`AgentStatCalculateModel.cs:96`）。**`detachment` 形参在默认实现里完全没用。** |
| `GetInteractionDistance` | `public virtual float GetInteractionDistance(Agent agent)`（`AgentStatCalculateModel.cs:99`） | 默认恒为 `1.5f`（`:101`）。消费点是 `Agent.cs:2650` 与 `HumanAIComponent.cs:259`。**改它会同时影响玩家与 AI 的交互判定。** |
| `GetMaxCameraZoom` | `public virtual float GetMaxCameraZoom(Agent agent)`（`AgentStatCalculateModel.cs:104`） | 默认恒为 `1f`（`:106`）。唯一消费点是 `Mission.cs:2279`。 |
| `GetEffectiveSkill` | `public virtual int GetEffectiveSkill(Agent agent, SkillObject skill)`（`AgentStatCalculateModel.cs:109`） | 默认 `agent.Character.GetSkillValue(skill)`（`:111`）。**所有技能查询的汇流点**——覆写它等于给全套技能计算加了统一修正。 |
| `GetEffectiveSkillForWeapon` | `public virtual int GetEffectiveSkillForWeapon(Agent agent, WeaponComponentData weapon)`（`AgentStatCalculateModel.cs:114`） | 默认转调 `GetEffectiveSkill(agent, weapon.RelevantSkill)`（`:116`）。**所以覆写 `GetEffectiveSkill` 会连带影响这一条。** |
| `GetWeaponDamageMultiplier` | `public abstract float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)`（`AgentStatCalculateModel.cs:119`） | abstract。伤害倍率。 |
| `GetEquipmentStealthBonus` | `public abstract float GetEquipmentStealthBonus(Agent agent)`（`AgentStatCalculateModel.cs:121`） | abstract。装备提供的隐蔽加成。 |
| `GetSneakAttackMultiplier` | `public abstract float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)`（`AgentStatCalculateModel.cs:123`） | abstract。背刺倍率。 |
| `GetKnockBackResistance` | `public abstract float GetKnockBackResistance(Agent agent)`（`AgentStatCalculateModel.cs:125`） | abstract。击退抗性。 |
| `GetKnockDownResistance` | `public abstract float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)`（`AgentStatCalculateModel.cs:127`） | abstract。**带默认实参**，所以两个实参形态都合法。 |
| `GetDismountResistance` | `public abstract float GetDismountResistance(Agent agent)`（`AgentStatCalculateModel.cs:129`） | abstract。落马抗性。 |
| `GetBreatheHoldMaxDuration` | `public abstract float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)`（`AgentStatCalculateModel.cs:131`） | abstract。**形参里已经带了基准值**，返回的是修正量而非绝对值。 |
| `GetMissionDebugInfoForAgent` | `public virtual string GetMissionDebugInfoForAgent(Agent agent)`（`AgentStatCalculateModel.cs:133`） | 默认返回固定字符串 `"Debug info not supported in this model"`（`:135`）。**看到这行就说明你用的实现没写调试输出。** |
| `GetMeleeSkill` | `protected int GetMeleeSkill(Agent agent, WeaponComponentData equippedItem, WeaponComponentData secondaryItem)`（`AgentStatCalculateModel.cs:148`） | protected。**默认技能是 `DefaultSkills.Athletics`**（`:150`）；有主手就按 `RelevantSkill` 映射，映射不到时按有没有副手在双手/单手之间二选一（`:154`）。 |
| `CalculateAILevel` | `protected float CalculateAILevel(Agent agent, int relevantSkillLevel)`（`AgentStatCalculateModel.cs:159`） | protected。`技能/300 × 三档系数`，clamp 到 0~1（`:162`）。**`agent` 形参在函数体里没用**——纯按技能等级与难度算。 |
| `SetAiRelatedProperties` | `protected void SetAiRelatedProperties(Agent agent, AgentDrivenProperties agentDrivenProperties, WeaponComponentData equippedItem, WeaponComponentData secondaryItem)`（`AgentStatCalculateModel.cs:165`） | protected。**本类最长的方法**，从 `:170` 开始往 `AgentDrivenProperties` 上灌十几个 AI 字段。`_AILevelMultiplier` 的两个读点（`:171`、`:172`）就在这里。 |
| `ResetAILevelMultiplier` | `public void ResetAILevelMultiplier()`（`AgentStatCalculateModel.cs:138`） | 把倍率复位成 1（`:140`）。**非 virtual。** 唯一调用者是赛事结束清理（`TournamentBehavior.cs:235`）。 |
| `SetAILevelMultiplier` | `public void SetAILevelMultiplier(float multiplier)`（`AgentStatCalculateModel.cs:143`） | 直接写倍率（`:145`）。**非 virtual，无校验。** 唯一调用者是赛事按轮次调（`TournamentBehavior.cs:224`）。 |

## 真实示例

从零实现一份模型（照抄基类默认值，只改难度与两处手感）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyModStatModel : AgentStatCalculateModel
{
    // --- 8 个 abstract，一个都不能少 ---

    public override void InitializeAgentStats(Agent agent, Equipment spawnEquipment,
        AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)
    {
        // 这里可以调 SetAiRelatedProperties（AgentStatCalculateModel.cs:165）灌 AI 字段
    }

    public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)
    {
    }

    public override float GetDifficultyModifier() => 0.7f;

    public override bool CanAgentRideMount(Agent agent, Agent targetMount) => true;

    public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon) => 1.1f;

    public override float GetEquipmentStealthBonus(Agent agent) => 0f;

    public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon) => 1.5f;

    public override float GetKnockBackResistance(Agent agent) => 0.2f;

    public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid) => 0.2f;

    public override float GetDismountResistance(Agent agent) => 0.3f;

    // 形参已给基准值，返回修正量
    public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)
        => baseBreatheHoldMaxDuration * 1.2f;

    // --- 想改的默认值 ---

    // 霜天这种「重甲不值」的地图可以调高门槛（基线 24，见 AgentStatCalculateModel.cs:36）
    public override bool HasHeavyArmor(Agent agent)
        => agent.GetBaseArmorEffectivenessForBodyPart(BoneBodyPartType.Chest) >= 32f;

    // 调试输出：基类默认返回固定字符串（AgentStatCalculateModel.cs:135）
    public override string GetMissionDebugInfoForAgent(Agent agent)
        => "MyModStatModel hp=" + agent.BaseHealthLimit + " aiMultiplier=" + agent.Index;
}
```

复用沙盒实现再叠一层（别去反射）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyModSandboxStats : AgentStatCalculateModel
{
    public override float GetDifficultyModifier() => 0.85f;

    public override bool CanAgentRideMount(Agent agent, Agent targetMount) => true;

    public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)
        => BaseModel.GetWeaponDamageMultiplier(agent, weapon) * 1.1f;

    public override float GetEquipmentStealthBonus(Agent agent)
        => BaseModel.GetEquipmentStealthBonus(agent);

    public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)
        => BaseModel.GetSneakAttackMultiplier(agent, weapon);

    public override float GetKnockBackResistance(Agent agent)
        => BaseModel.GetKnockBackResistance(agent);

    public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)
        => BaseModel.GetKnockDownResistance(agent, strikeType);

    public override float GetDismountResistance(Agent agent)
        => BaseModel.GetDismountResistance(agent);

    public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)
        => BaseModel.GetBreatheHoldMaxDuration(agent, baseBreatheHoldMaxDuration);

    public override void InitializeAgentStats(Agent agent, Equipment spawnEquipment,
        AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)
        => BaseModel.InitializeAgentStats(agent, spawnEquipment, agentDrivenProperties, agentBuildData);

    public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)
        => BaseModel.UpdateAgentStats(agent, agentDrivenProperties);
}
```

赛事之外的场合别碰 AI 倍率——先量一下它到底影响哪几个字段：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static void ProbeAILevelMultiplier()
{
    AgentStatCalculateModel model = MissionGameModels.Current.AgentStatCalculateModel;

    // 设一个夸张值，看哪些 AI 行为变化
    model.SetAILevelMultiplier(5f);   // 写入点在 AgentStatCalculateModel.cs:143

    // 但读它的地方只有 AgentStatCalculateModel.cs:171 和 :172，
    // 也就是 meleeSkill / effectiveSkill 两路 AI 等级。
    // 想让全场 AI 变强，正确的改法是覆写 GetDifficultyModifier（AgentStatCalculateModel.cs:30）。

    model.ResetAILevelMultiplier();  // 复位点在 AgentStatCalculateModel.cs:138
}
```

## 风险与边界

- **抽象类，必须实现 10 个 `abstract` 成员**（`:14`、`:28`、`:30`、`:32`、`:119`、`:121`、`:123`、`:125`、`:127`、`:129`、`:131` 中的 abstract 项）。少一个编译不过。
- **难度的分档规则两套且不一致。** 三档的那条路径常数写死在 `AgentStatCalculateModel.cs:162`。二档的那条路径判断在 `AgentStatCalculateModel.cs:69`。**别当成同一个曲线。**
- **`CalculateAIAttackOnDecideMaxValue` 不是 `virtual`**（`AgentStatCalculateModel.cs:67`）。要改只能靠改 `GetDifficultyModifier` 的返回值跨过 0.5 这个阈值。
- **那个倍率写入无校验**（`AgentStatCalculateModel.cs:143`）。传 0 或负数会把下游 AI 等级算成 0 或负。
- **那个倍率全树只有赛事在用**（按轮次设值在 `TournamentBehavior.cs:224`，复位在 `TournamentBehavior.cs:235`）。非赛事场景改它收益极小。
- **覆写 `GetEffectiveSkill`（`:109`）会连带改掉 `GetEffectiveSkillForWeapon`**（`:116` 是转调）。这是有意的设计，不是 bug。
- **覆写 `HasHeavyArmor` 只影响躯干判定**（`:36` 只查 Chest）。改它不等于改了整套护甲模型。
- **`GetEnvironmentSpeedFactor` 的两个 0.9 会叠乘**（`:57` 与 `:61`）。室外夜里的非人类单位速度是 0.81，不是 0.9。
- **`GetEffectiveArmorEncumbrance` 的装备是形参**（`:39`）。传进去的 `Equipment` 与 Agent 实际穿戴的可以不一致——这既是特性也是坑。
- **`GetMeleeSkill` 的默认技能是 Athletics**（`AgentStatCalculateModel.cs:150`），不是单手持。空手与持杆的映射在 `:154`。
- **`CalculateAILevel` 的 `agent` 形参未使用**（`:159`）。纯按技能等级与难度算，**不受该 Agent 的任何个体状态影响**。
- **`MaxHorizontalErrorRadian` 在本类零引用**（`:10`）。它是给派生类的钩子，本类实现不用它。
- **`GetMissionDebugInfoForAgent` 默认返回固定字符串**（`:135`）。排查数值问题时先覆写它，否则你看到的永远是那句「not supported」。
- **`GetKnockDownResistance` 带默认实参**（`:127`），可以只传两个参数调用。

## 依赖关系

- 本类：`AgentStatCalculateModel.cs:8` 类头、`:10` 常量、`:12` 字段
- 抽象成员：`AgentStatCalculateModel.cs:14`、`:28`、`:30`、`:32`、`:119`、`:121`、`:123`、`:125`、`:127`、`:129`、`:131`（这一句指的都是同一个文件）
- 带默认值的 virtual 成员：`AgentStatCalculateModel.cs:34` 到 `:116` 之间的十个方法（这一句指的都是同一个文件）
- AI 换算三件套：`AgentStatCalculateModel.cs:159` 的 `CalculateAILevel` 与 `AgentStatCalculateModel.cs:165` 的 `SetAiRelatedProperties`（这一句指的都是同一个文件）
- AI 倍率的唯一调用者：[TournamentBehavior](../../campaign-ext/TournamentBehavior/) 的 `TournamentBehavior.cs:224` 与 `TournamentBehavior.cs:235`
- 持有者：属性的声明在 `MissionGameModels.cs:11`，赋值的语句在 `MissionGameModels.cs:45`（这一句指的都是同一个文件）
- 基类链：[MBGameModel](../../core-extra/MBGameModel/)（`BaseModel` 复用入口）→ [GameModel](../../core-extra/GameModel/)
- 三个实现：[CustomBattleAgentStatCalculateModel](../CustomBattleAgentStatCalculateModel/)（`CustomBattleAgentStatCalculateModel.cs:8`）、[MultiplayerAgentStatCalculateModel](../MultiplayerAgentStatCalculateModel/)（`MultiplayerAgentStatCalculateModel.cs:7`）、[SandboxAgentStatCalculateModel](../../campaign-ext/SandboxAgentStatCalculateModel/)（`SandboxAgentStatCalculateModel.cs:19`）
- 参数类型：[Agent](../../mission/Agent/)、[AgentDrivenProperties](../AgentDrivenProperties/)、[AgentBuildData](../AgentBuildData/)、[Equipment](../../core-extra/Equipment/)、[WeaponComponentData](../../core-extra/WeaponComponentData/)、[SkillObject](../../core-extra/SkillObject/)、[StrikeType](../../core-extra/StrikeType/)
- 已知消费点：`Agent.cs:2650`（交互距离）、`HumanAIComponent.cs:259`（旗帜交互距离）、`Mission.cs:2279`（镜头缩放）
- 桶首页：[mission-ext API 分区](../)