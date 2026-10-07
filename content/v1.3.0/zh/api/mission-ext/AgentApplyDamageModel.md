---
title: "AgentApplyDamageModel"
description: "26 个成员的伤害结算模型：唯一非虚的 CalculateDamage 绕过 this 直接取全局最外层模型，所以覆写它无效；真正要动的是 IsDamageIgnored 到 ApplyGeneralDamageModifiers 这四段管线。"
---

# AgentApplyDamageModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentApplyDamageModel : MBGameModel<AgentApplyDamageModel>`
**Base:** `MBGameModel<AgentApplyDamageModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs`（176 行）

## 概述

`AgentApplyDamageModel` 是**伤害结算的全部规则所在**。176 行里 26 个成员：24 个 `public abstract`（必须实现）、1 个 `public virtual`（无）、1 个 `protected` 有默认实现，以及**唯一一个非虚的 `public` 方法 `CalculateDamage`**。

三个官方实现：[MultiplayerAgentApplyDamageModel](../MultiplayerAgentApplyDamageModel)（联机）、`CustomBattleAgentApplyDamageModel`（自定义战斗）、`SandBoxAgentApplyDamageModel`（沙盒）。

## 心智模型

把它当成**「一条四段式伤害管线 + 一堆离散的判定/穿透查询」**。心智模型的核心是三条，其中第一条是本类最大的坑。

**第一条（本页最重要的）：`CalculateDamage` 是非虚的，而且它绕过 `this`。**

```csharp
// AgentApplyDamageModel.cs:11-23
public float CalculateDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)
{
    AgentApplyDamageModel agentApplyDamageModel = MissionGameModels.Current.AgentApplyDamageModel;
    if (agentApplyDamageModel.IsDamageIgnored(attackInformation, collisionData))
    {
        return 0f;
    }
    float num = agentApplyDamageModel.ApplyDamageAmplifications(attackInformation, collisionData, baseDamage);
    num = agentApplyDamageModel.ApplyDamageScaling(attackInformation, collisionData, num);
    num = agentApplyDamageModel.ApplyDamageReductions(attackInformation, collisionData, num);
    num = agentApplyDamageModel.ApplyGeneralDamageModifiers(attackInformation, collisionData, num);
    return MathF.Max(0f, num);
}
```

三件事同时成立：

1. **它没有 `virtual`**——你 `override` 它编译不过。
2. **它第一行就 `MissionGameModels.Current.AgentApplyDamageModel`**，取的是**全局最外层**的那个模型实例，不是 `this`。所以即使你手上握着某个内层模型的引用调它，跑的仍然是全局那个。
3. **它同样对那四个钩子用局部变量 `agentApplyDamageModel` 转发**，而不是 `this.`。所以四个钩子在**直连调用**时也是走全局实例。

实践推论：**调用入口永远是 `MissionGameModels.Current.AgentApplyDamageModel.CalculateDamage(...)`；要改行为只能覆写四个钩子中的一个。**

**第二条：四段管线的顺序不能换。**

```
baseDamage
  → IsDamageIgnored?  → true 立即 return 0f
  → ApplyDamageAmplifications   （放大）
  → ApplyDamageScaling          （缩放）
  → ApplyDamageReductions       （减伤）
  → ApplyGeneralDamageModifiers （通用修正）
  → MathF.Max(0f, num)
```

- **短路在前**：`IsDamageIgnored` 返回 `true` 时后面三段**根本不执行**，直接 `return 0f`。
- **每段拿到的是上一段的结果**（`num` 被逐步覆盖），不是原始 `baseDamage`。
- **收尾有 `MathF.Max(0f, num)` 兜底**——所以各段可以返回负值，最终会被夹到 0。**你的实现不需要自己防负数。**

**第三条：剩下的 20 个成员全是「单点查询」，不是管线。** 它们被战斗代码在各个具体节点上单次调用，没有固定顺序，也没有管线的输入输出约定。分成四组：

| 组 | 成员 | 语义 |
| --- | --- | --- |
| 伤害数值查询（7 个） | `CalculateAlternativeAttackDamage` / `CalculatePassiveAttackDamage` / `CalculateShieldDamage` / `CalculateSailFireDamage` / `GetDamageMultiplierForBodyPart` / `CalculateStaggerThresholdDamage` / `CalculateDefaultRemainingMomentum`（**唯一 protected 且有实现**） | 「这一次打击算多少伤害」 |
| 「能不能/该不该」（13 个） | `CanWeaponIgnoreFriendlyFireChecks` / `CanWeaponDealSneakAttack` / `CanWeaponDismount` / `CanWeaponKnockback` / `CanWeaponKnockDown` / `DecideCrushedThrough` / `DecideMissileWeaponFlags`（void）/ `DecidePassiveAttackCollisionReaction` / `DecideWeaponCollisionReaction`（out 参数）/ `DecideAgentShrugOffBlow` / `DecideAgentDismountedByBlow` / `DecideAgentKnockedBackByBlow` / `DecideAgentKnockedDownByBlow` / `DecideMountRearedByBlow` / `ShouldMissilePassThroughAfterShieldBreak` | 「这一击的物理后果是什么」 |
| 穿透率（5 个） | `GetDismountPenetration` / `GetKnockBackPenetration` / `GetKnockDownPenetration` / `GetHorseChargePenetration` | 「护甲能否挡住这类效果」 |
| 眩晕（1 个） | `CalculateDefendedBlowStunMultipliers` | 同时改 `ref attackerStunPeriod` 与 `ref defenderStunPeriod` |

## 关键成员

### 管线（5 个）

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `CalculateDamage` | `public float CalculateDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)` | **唯一非抽象的管线成员，且非 `virtual`。** 它自己取 `MissionGameModels.Current.AgentApplyDamageModel` 然后跑完整条四段管线。返回 `MathF.Max(0f, ...)` 夹过的最终伤害。**不要试图覆写它——编译不过。** |
| `IsDamageIgnored` | `public abstract bool IsDamageIgnored(in AttackInformation, in AttackCollisionData)` | 管线的短路开关。`true` = 这一击无伤害，直接 `return 0f`，后三段不执行。 |
| `ApplyDamageAmplifications` | `public abstract float ApplyDamageAmplifications(in AttackInformation, in AttackCollisionData, float baseDamage)` | 第一段：放大。收到的是原始 `baseDamage`，返回要交给下一段的值。 |
| `ApplyDamageScaling` | `public abstract float ApplyDamageScaling(in AttackInformation, in AttackCollisionData, float baseDamage)` | 第二段：缩放。收到的是第一段的返回值。 |
| `ApplyDamageReductions` | `public abstract float ApplyDamageReductions(in AttackInformation, in AttackCollisionData, float baseDamage)` | 第三段：减伤。收到第二段返回值。 |
| `ApplyGeneralDamageModifiers` | `public abstract float ApplyGeneralDamageModifiers(in AttackInformation, in AttackCollisionData, float baseDamage)` | 第四段：通用修正。收到第三段返回值，返回值直接进 `MathF.Max`。 |

### 伤害数值查询

| 成员 | 签名 | 说明 |
| --- | --- | --- |
| `CalculateAlternativeAttackDamage` | `public abstract float CalculateAlternativeAttackDamage(in AttackInformation, in AttackCollisionData, WeaponComponentData weapon)` | 替代攻击（alternative attack）的伤害。**返回的是伤害本身，不是倍率**——注意与下面几个的量纲差别。 |
| `CalculatePassiveAttackDamage` | `public abstract float CalculatePassiveAttackDamage(BasicCharacterObject attackerCharacter, in AttackCollisionData collisionData, float baseDamage)` | 被动使用（推门、攀爬）的伤害。攻击者是 `BasicCharacterObject` 而不是 `Agent`。 |
| `CalculateShieldDamage` | `public abstract float CalculateShieldDamage(in AttackInformation attackInformation, float baseDamage)` | 打在盾上的伤害。**没有 `collisionData` 参数。** |
| `CalculateSailFireDamage` | `public abstract float CalculateSailFireDamage(Agent attackerAgent, float baseDamage, bool damageFromShipMachine)` | 帆船火灾伤害。`damageFromShipMachine` 区分是船上的机器还是别的来源。 |
| `GetDamageMultiplierForBodyPart` | `public abstract float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart, DamageTypes type, bool isHuman, bool isMissile)` | 按身体部位 / 伤害类型 / 人或兽 / 是否投射物取倍率。**四个维度都是独立开关。** |
| `CalculateStaggerThresholdDamage` | `public abstract float CalculateStaggerThresholdDamage(Agent defenderAgent, in Blow blow)` | 打踉跄（stagger）所需的伤害阈值。 |
| `CalculateDefaultRemainingMomentum` | `protected float CalculateDefaultRemainingMomentum(float originalMomentum, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)` | **24 个抽象成员之外唯一的实现体**，也是唯一给你兜底的函数。它的默认逻辑：`isCrushThrough` → `originalMomentum * 0.3f`；否则若 `b.InflictedDamage > 0` 且**没有**被盾挡（`AttackBlockedWithShield`）、**不是**打在背上的盾（`CollidedWithShieldOnBack`）、**不是**自己撞自己（`IsColliderAgent`）、**不是**马冲锋（`IsHorseCharge`），则：攻击者在做被动攻击 → `* 0.5f`；否则若 `MissionCombatMechanicsHelper.HitWithAnotherBone(collisionData, attacker, attackerWeapon)` 为 false 且武器非空且 `b.StrikeType != StrikeType.Thrust` 且 `missionWeapon.CurrentUsageItem.CanHitMultipleTargets` → `originalMomentum * (1f - b.AbsorbedByArmor / (float)b.InflictedDamage) * 0.5f`，小于 `0.25f` 则归零。**默认返回 0 的情况很多**（格挡、撞自己、马冲锋、插击、单目标武器全都不透传动量）。 |

### 物理后果判定

| 成员 | 签名 | 说明 |
| --- | --- | --- |
| `CanWeaponIgnoreFriendlyFireChecks` | `public abstract bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon)` | 该武器能否跳过友伤检查。**只给武器，不给攻击双方**。 |
| `CanWeaponDealSneakAttack` | `public abstract bool CanWeaponDealSneakAttack(in AttackInformation attackInformation, WeaponComponentData weapon)` | 能否触发背刺。 |
| `CanWeaponDismount` | `public abstract bool CanWeaponDismount(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | 能否把对方打下马。 |
| `CanWeaponKnockback` | `public abstract bool CanWeaponKnockback(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | 能否击退。 |
| `CanWeaponKnockDown` | `public abstract bool CanWeaponKnockDown(Agent attackerAgent, Agent victimAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | 能否击倒。**多一个 `victimAgent` 参数**（前两个没有）。 |
| `DecideCrushedThrough` | `public abstract bool DecideCrushedThrough(Agent attackerAgent, Agent defenderAgent, float totalAttackEnergy, Agent.UsageDirection attackDirection, StrikeType strikeType, WeaponComponentData defendItem, bool isPassiveUsageHit)` | 是否「碾压穿透」——七个参数里最复杂的一个。 |
| `DecideMissileWeaponFlags` | `public abstract void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags)` | **唯一的 void 抽象成员**，用 `ref` 出参改写投射物标记。 |
| `DecidePassiveAttackCollisionReaction` | `public abstract MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker, Agent defender, bool isFatalHit)` | 被动攻击的碰撞反应，返回 [MeleeCollisionReaction](../MeleeCollisionReaction)。 |
| `DecideWeaponCollisionReaction` | `public abstract void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)` | 武器碰撞反应，**用 `out` 出参**。两个布尔入参 `isFatalHit` / `isShruggedOff` 表明「是否致命」与「是否被弹开」在调用时已知。 |
| `DecideAgentShrugOffBlow` | `public abstract bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)` | 能否扛住这一击不进入受击动画。 |
| `DecideAgentDismountedByBlow` | `public abstract bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | 是否被打下马（对 Agent 的判定，与 `CanWeaponDismount` 的武器侧判定并存）。 |
| `DecideAgentKnockedBackByBlow` | `public abstract bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | 是否被击退。 |
| `DecideAgentKnockedDownByBlow` | `public abstract bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | 是否被击倒。 |
| `DecideMountRearedByBlow` | `public abstract bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | 坐骑是否后仰。 |
| `ShouldMissilePassThroughAfterShieldBreak` | `public abstract bool ShouldMissilePassThroughAfterShieldBreak(Agent attackerAgent, WeaponComponentData attackerWeapon)` | 盾被击破后投射物是否继续穿透。 |

### 穿透率

| 成员 | 签名 | 说明 |
| --- | --- | --- |
| `GetDismountPenetration` | `public abstract float GetDismountPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | 下马效果的穿透率。**四个参数形状在五个穿透率方法里完全一致**，只有名字不同。 |
| `GetKnockBackPenetration` | 同上（`GetKnockBackPenetration`） | 击退穿透率。 |
| `GetKnockDownPenetration` | 同上（`GetKnockDownPenetration`） | 击倒穿透率。 |
| `GetHorseChargePenetration` | `public abstract float GetHorseChargePenetration()` | **唯一一个无参数的抽象方法**。马冲锋的穿透率是常量。 |

### 眩晕

| 成员 | 签名 | 说明 |
| --- | --- | --- |
| `CalculateDefendedBlowStunMultipliers` | `public abstract void CalculateDefendedBlowStunMultipliers(Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult, WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon, ref float attackerStunPeriod, ref float defenderStunPeriod)` | **两个 `ref float` 出参**，攻击方与防守方的眩晕时长分别调整。`CombatCollisionResult` 与两把武器一起给出，所以你能判断「什么武器打什么武器」。 |

## 真实示例

正确的派生形状——`CalculateDamage` **不覆写**，只覆写四个钩子（签名照抄自源码 `:26`–`:38`）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public class MyDamageModel : MBGameModel<AgentApplyDamageModel>
{
    public override bool IsDamageIgnored(in AttackInformation attackInformation, in AttackCollisionData collisionData)
    {
        // 免疫：护甲值 100 以上完全免伤
        return this.BaseModel.IsDamageIgnored(attackInformation, collisionData);
    }

    public override float ApplyDamageAmplifications(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)
    {
        float amplified = this.BaseModel.ApplyDamageAmplifications(attackInformation, collisionData, baseDamage);
        return amplified * 1.25f;
    }

    public override float ApplyDamageScaling(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)
    {
        return this.BaseModel.ApplyDamageScaling(attackInformation, collisionData, baseDamage);
    }

    public override float ApplyDamageReductions(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)
    {
        return this.BaseModel.ApplyDamageReductions(attackInformation, collisionData, baseDamage);
    }

    public override float ApplyGeneralDamageModifiers(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)
    {
        return this.BaseModel.ApplyGeneralDamageModifiers(attackInformation, collisionData, baseDamage);
    }
}
```

这是 24 个抽象成员里最实用的组合——**你只需要实现你关心的那一个**，其余全部 `this.BaseModel.` 转发。注意 `BaseModel` 是 `MBGameModel<T>` 上的 `private protected T` getter，派生类可读。

调用入口只能是全局那个实例：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public static float ComputeDamage(in AttackInformation info, in AttackCollisionData collision, float baseDamage)
{
    AgentApplyDamageModel model = MissionGameModels.Current.AgentApplyDamageModel;
    return model.CalculateDamage(info, collision, baseDamage);
}
```

用 `protected` 的兜底实现——**这是唯一带默认行为的成员，派生时应该 `base.` 调用**：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public class MomentumModel : MBGameModel<AgentApplyDamageModel>
{
    public override float CalculateRemainingMomentum(
        float originalMomentum, in Blow b, in AttackCollisionData collisionData,
        Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)
    {
        if (isCrushThrough)
        {
            // 自己算碾压：原动量的 80%（默认实现只给 30%）
            return originalMomentum * 0.8f;
        }
        // 其余情况沿用官方公式
        return this.CalculateDefaultRemainingMomentum(
            originalMomentum, b, collisionData, attacker, victim, attackerWeapon, isCrushThrough);
    }
}
```

## 风险与边界

- **`CalculateDamage` 非 `virtual`。** 写 `public override float CalculateDamage(...)` **编译不过**。要改行为就改四个钩子。
- **`CalculateDamage` 绕过 `this`。** 它第一行取 `MissionGameModels.Current.AgentApplyDamageModel`，后面四个钩子也走那个局部变量。**所以你手上拿着的实例引用不能决定行为**——在单元测试里直接 `new MyDamageModel().CalculateDamage(...)`，跑的不是你那个对象的方法体。
- **`IsDamageIgnored` 短路后三段完全不执行。** 你的放大/缩放/减伤逻辑在「免疫」路径上不会被调用，所以**在那些成员里打日志看不到免疫时的伤害流**。
- **收尾 `MathF.Max(0f, num)` 会吞掉负数。** 各段可以返回负值，最终是 0。所以「我返回了 -50 结果是 0」不是 bug。
- **四个钩子的第三个参数是上一段的输出，不是原始值。** 参数名都叫 `baseDamage`，**极易误读**——`ApplyDamageScaling` 收到的 `baseDamage` 其实是放大后的值。
- **`CalculateDefaultRemainingMomentum` 的默认实现返回 0 的分支非常多。** 格挡（`AttackBlockedWithShield`）、打在背上的盾（`CollidedWithShieldOnBack`）、撞自己（`IsColliderAgent`）、马冲锋（`IsHorseCharge`）、`HitWithAnotherBone` 为真、武器为空、`StrikeType.Thrust`、`!CurrentUsageItem.CanHitMultipleTargets` —— **八种情况都归零**。不调 `base.` 就等于放弃其中一半逻辑。
- **`CalculateDefaultRemainingMomentum` 是 `protected`，外部调不到。** 它只给你的 `CalculateRemainingMomentum` 覆写用。
- **有两个 void 抽象成员，签名容易写错。** `DecideMissileWeaponFlags` 用 `ref`；`DecideWeaponCollisionReaction` 用 `out` 且有九个参数（两个 `in Blow` / `in AttackCollisionData` / `in MissionWeapon` 加上两个 `out MeleeCollisionReaction`）。C# 要求 `ref` / `in` / `out` 修饰符在覆写时完全一致。
- **`GetHorseChargePenetration()` 无参数。** 它是唯一一个。照抄时别给它加上别的成员那样的四个参数。
- **`CanWeaponDismount` / `CanWeaponKnockback` 没有 `victimAgent`，`CanWeaponKnockDown` 有。** 三个名字相近的方法参数不一致，容易串。
- **`DecideAgent*ByBlow` 一族五个方法参数完全相同**（`attackerAgent, victimAgent, collisionData, attackerWeapon, blow`），只有方法名不同——所以写错名字编译能过，行为却错。
- **武器侧判定与受击侧判定是两套。** `CanWeaponDismount`（能不能）与 `DecideAgentDismountedByBlow`（会不会）都存在，两套都要实现才对。
- **`CalculateAlternativeAttackDamage` 返回伤害，其余几个返回倍率。** 量纲不一致，混用会得到平方级的偏差。
- **`agentCharacter` 参数只出现在 `CalculatePassiveAttackDamage`。** 那一处给的是 `BasicCharacterObject` 不是 `Agent`，所以不能用 `IsHuman` 之外的那些 Agent 成员。

## 怎么用

### 怎么拿到它

`public abstract class AgentApplyDamageModel : MBGameModel<AgentApplyDamageModel>`（`TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs:8`）。它自己**不 new**：读入口是全局那个已安装的实例——`MissionGameModels.Current.AgentApplyDamageModel`（属性声明在 `MissionGameModels.cs:34`，`{ get; private set; }`，外部赋不了值，只能靠 `GameModelsManager` 的注册机制装上去）。写入口是派生一个 `MBGameModel<AgentApplyDamageModel>` 让引擎替换掉它。

### 典型用法

24 个抽象成员里你通常只关心一个。上面的示例改的是四段伤害管线，下面这段改的是**身体部位倍率**——四个维度各自独立，其余维度原样转发：

```csharp
public class MyHeadshotModel : MBGameModel<AgentApplyDamageModel>
{
    public override float GetDamageMultiplierForBodyPart(
        BoneBodyPartType bodyPart, DamageTypes type, bool isHuman, bool isMissile)
    {
        // 只接管人形单位上的直接头伤；投射物与非人形一律走默认倍率
        if (isHuman && !isMissile && bodyPart == BoneBodyPartType.Head)
        {
            return 1.75f;
        }
        // BaseModel 是 MBGameModel<T> 上的 private protected T getter，派生类可读
        return this.BaseModel.GetDamageMultiplierForBodyPart(bodyPart, type, isHuman, isMissile);
    }
}
```

与上面「真实示例」的差别：那两段一段是**四段管线的四连改**、一段是**动量公式重算**，都落在 `CalculateDamage` 的主干上；这段改的是一个**旁路钩子**——它不在 `CalculateDamage` 的四段管线里，而是被别处单独调用的维度函数，所以只覆写它不会影响主伤害数值，只影响按部位的倍率。

### 最容易踩的坑

**`CalculateDamage` 非 `virtual`。** 写 `public override float CalculateDamage(...)` **编译不过**。要改行为就改钩子——本类型 24 个抽象成员里没有一个是 `virtual` 的实现体入口。

## 跨版本提示

`AgentApplyDamageModel` 在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 里**结构一致**：`CalculateDamage` 始终非虚且始终绕过 `this`，四段管线的顺序始终不变，`CalculateDefaultRemainingMomentum` 始终是唯一的 protected 实现。

会变的是**抽象成员的总数**：海战上线带来了 `CalculateSailFireDamage`（帆火伤害）与 `ShouldMissilePassThroughAfterShieldBreak`（盾破后穿透）这一组，新版本还可能追加别的。**每次大版本升级，你的新版本模型都可能需要补实现新抽象方法。** 这是本类唯一真实的升级风险。

另一条要盯的是 `CalculateDefaultRemainingMomentum` 的**内部常量**（`0.3f` / `0.5f` / `0.25f`）。它们是裸字面量不是具名常量，源码 diff 里不显眼，但**改这些数字会改变全部动量手感**。如果你的 mod 通过 `base.` 沿用官方公式，升级后手感可能变；如果自己重写，就完全不依赖它们。

实践建议：**只覆写你在意的钩子，其余全部 `this.BaseModel.` 转发**——这样新增抽象方法时，你只要照着官方派生类补一行转发即可，升级成本最低。

## 依赖关系

- 基类：`MBGameModel<AgentApplyDamageModel>`，覆盖机制见 [GameModel](../../core-extra/GameModel) 与 [MBGameModel](../../core-extra/MBGameModel)
- 取用入口：[MissionGameModels](../MissionGameModels) 的 `AgentApplyDamageModel` 只读属性（`MissionGameModels.cs` 内由 `base.GetGameModel<AgentApplyDamageModel>()` 填入）
- 管线输入：[AttackInformation](../AttackInformation) 与 [AttackCollisionData](../AttackCollisionData)；后者带 `AttackBlockedWithShield` / `CollidedWithShieldOnBack` / `IsColliderAgent` / `IsHorseCharge` 等判定位
- 管线中间量：[Blow](../Blow)（`InflictedDamage` / `AbsorbedByArmor` / `StrikeType` / `AttackType` / `IsMissile`）
- 武器层：[MissionWeapon](../MissionWeapon)（含 `CurrentUsageItem`）、`WeaponComponentData`、`WeaponFlags`、`StrikeType`
- 结果类型：[MeleeCollisionReaction](../MeleeCollisionReaction)、[CombatCollisionResult](../CombatCollisionResult)
- 辅助计算：`MissionCombatMechanicsHelper.HitWithAnotherBone(collisionData, attacker, attackerWeapon)` 是 `CalculateDefaultRemainingMomentum` 内部用到的唯一静态辅助
- 官方实现：[MultiplayerAgentApplyDamageModel](../MultiplayerAgentApplyDamageModel)、`CustomBattleAgentApplyDamageModel`、`SandBoxAgentApplyDamageModel`（后者读 [AgentDrivenProperties](../AgentDrivenProperties) 的伤害加成）
- 桶首页：[mission-ext API 分区](../)