---
title: "AgentAttackType"
description: "近战击打的分类枚举：Standard/Kick/Bash/Collision/Count 共 5 个成员，由 Mission.CreateMeleeBlow 写入 Blow.AttackType，被音效选择、命中高亮与击杀奖励读走。"
---

# AgentAttackType

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public enum AgentAttackType`（无 `: byte`，底层 `int`）
**Base:** `System.Enum`
**File:** `TaleWorlds.Core/AgentAttackType.cs`（全文 19 行 / 341 字节）

> 核对记录：读了 `TaleWorlds.Core/AgentAttackType.cs`（341 B）+ `TaleWorlds.MountAndBlade/Mission.cs`（`CreateMeleeBlow` 段）+ `Blow.cs` / `KillingBlow.cs` / `BlowWeaponRecord.cs` / `Agent.cs` / `HighlightsController.cs` + `SandBox/Missions/MissionLogics/BattleAgentLogic.cs` 等 3 个控制器。约 25 min。最难判断点：`Collision` 和 `Count` 在整个托管代码里零引用，得分清「枚举里存在」与「托管侧可达」两件事。

## 概述

`AgentAttackType` 回答的是一个非常窄的问题：**这一次 `Blow` 是怎么打出来的**。它不带伤害、不带武器类别、不带命中部位，只在「常规挥击 / 脚踢 / 武器柄砸 / 碰撞」之间做区分。整个枚举只有 5 个成员，其中真正在托管代码里被读写的只有 3 个（`Standard`、`Kick`、`Bash`）。

它被挂在两个数据载体上：[Blow](../../mission-ext/Blow) 里有 `public AgentAttackType AttackType;`（第 85 行），[KillingBlow](../../mission-ext/KillingBlow) 里有同名字段（第 52 行）。写入点只有一处核心路径——`Mission.CreateMeleeBlow` 里那个二选一的三元表达式；其余读取全在音效分支、命中高亮判定和沙盒的击杀奖励回调里。

它是**引擎结构体**：`TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:17` 声明了 `[assembly: DefineAsEngineStruct(typeof(AgentAttackType), "Agent_attack_type", false, "aat", null)]`。这意味着原生层直接按这个枚举的整数值读写，所以**重排成员或插入新成员会同时打断 C# 与 native 的约定**——它是本组里少数几个绝对不能改顺序的枚举。

## 心智模型

把它看成**一个由「产生原因」决定、随 `Blow` 对象一路携带的标签**，而不是一个可选的分类字段。链路只有三段：

**第一段，物理层决定这次是不是「替代攻击」。** `AttackCollisionData.IsAlternativeAttack` 是唯一的判据——它来自原生碰撞结果，代表这次命中不是正常的挥击武器轨迹，而是脚本/引擎触发的非标准交互。托管层拿不到更多上下文，`Mission.CreateMeleeBlow` 只读这一个 bool。

**第二段，二选一写出标签。** 代码是这样一个形状：

```csharp
if (attackCollisionData.IsAlternativeAttack)
{
    missionWeapon = attackerWeapon;
    blow.AttackType = (missionWeapon.IsEmpty ? AgentAttackType.Kick : AgentAttackType.Bash);
}
else
{
    blow.AttackType = AgentAttackType.Standard;
}
```

所以映射关系只有两条规则：**非替代攻击 → `Standard`；替代攻击 → 手上有武器就 `Bash`（柄击），空手就 `Kick`（脚踢）**。注意 `Bash` 的先决条件是 `missionWeapon.IsEmpty == false`，也就是「武器存在但不是被当作刃部使用」。

**第三段，标签被谁读。** 读它的地方决定了它的实际语义：

- **音效**：`BlowWeaponRecord.GetHitSound(bool isOwnerHumanoid, bool isCriticalBlow, bool isLowBlow, bool isNonTipThrust, AgentAttackType attackType, DamageTypes damageType)` 里，`Bash` 直接短路掉整套按 `DamageTypes` 分支的逻辑，返回 `CombatSoundContainer.SoundCodeMissionCombatBluntLow`；`Kick` 返回 `CombatSoundContainer.SoundCodeMissionCombatKick`。**这两个判定出现在 `isCriticalBlow` 分支之前**，所以「一脚踢出致命伤」播放的仍然是踢击音效。
- **命中高亮**：[HighlightsController](../../mission-ext/HighlightsController) 第 181 行要求 `blow.AttackType == AgentAttackType.Standard` 才给「玩家骑乘状态下被敌方命中」的特效。**换句话说脚踢和柄击不会点亮这个高亮**。
- **击杀奖励**：沙盒三个控制器把它一路传进 `EnemyHitReward(...)`：`SandBox/Missions/MissionLogics/BattleAgentLogic.cs:192`、`SandBox/Tournaments/MissionLogics/TournamentFightMissionController.cs:384`、`SandBox/Missions/MissionLogics/Arena/ArenaPracticeFightMissionController.cs:172`。这三个 `EnemyHitReward` 都带 `AgentAttackType attackType` 形参——**它们是 mod 里判断「这一下算不算正常攻击」的唯一入口**。
- **死亡回放**：`Agent.LastBlowAttackType` 属性（`Agent.cs:6222`）与 `Agent.RegisterLastBlow(int ownerId, AgentAttackType attackType)`（`Agent.cs:6243`），构造时初值是 `AgentAttackType.Standard`（`Agent.cs:6238`）。

所以对 mod 作者来说完整的心智模型是：**你要判断「这次是不是踢/柄击」，就去 `OnAgentRemoved` 之后的 `EnemyHitReward` 或者直接读 `blow.AttackType`；不要试图从武器类型反推，因为 `Bash` 和 `Standard` 用的是同一把武器。**

## 关键成员

| 成员 | 值 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- | --- |
| `Standard` | `0` | `Standard` | 常规挥击。由 `Mission.CreateMeleeBlow` 在 `IsAlternativeAttack == false` 时写入，是音效按 `DamageTypes` 细分、命中高亮放行的默认分支，也是 `Agent.LastBlowAttackType` 的初值。 |
| `Kick` | `1` | `Kick` | 替代攻击且攻击者手上没武器。由那个三元表达式的 `missionWeapon.IsEmpty` 分支产出；`BlowWeaponRecord` 见到它直接返回 `SoundCodeMissionCombatKick`，跳过后面的致命/低伤害分支。 |
| `Bash` | `2` | `Bash` | 替代攻击且攻击者手上有武器（柄击）。`BlowWeaponRecord` 见到它返回 `SoundCodeMissionCombatBluntLow`，同样短路掉 `DamageTypes` 判定。 |
| `Collision` | `3` | `Collision` | 声明存在但**托管代码零引用**——`grep -rn -w "Collision"` 在整个 `bannerlord-1.3.0/` 里只有这一行声明。留给原生层/未来版本使用，托管侧不要写 `case AgentAttackType.Collision` 指望它被命中。 |
| `Count` | `4` | `Count` | 哨兵值，和 `AgentControllerType.Count` 是同一套惯例（见 [AgentControllerType](../AgentControllerType)）。1.3.0 里 `grep -rn "AgentAttackType.Count"` 无命中，纯预留。**不要把它当数组长度用**，它不会随成员增加而更新。 |

## 真实示例

在沙盒击杀奖励里区分踢击与柄击（这正是三个官方控制器接收 `attackType` 的方式）：

```csharp
public class MyBattleRewardLogic : MissionLogic
{
    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
    {
        if (affectorAgent == null || agentState != AgentState.Killed)
        {
            return;
        }
        // killingBlow.AttackType 就是本枚举，直接分流
        if (killingBlow.AttackType == AgentAttackType.Kick)
        {
            MBInformationManager.ShowHint("踹飞！");
        }
        else if (killingBlow.AttackType == AgentAttackType.Bash)
        {
            MBInformationManager.ShowHint("柄击！");
        }
    }
}
```

委托官方 `EnemyHitReward` 做叠加，而不是自己重算伤害（真实签名见 `BattleAgentLogic.cs:192`）：

```csharp
public class MyAgentLogic : MissionLogic
{
    private readonly MissionBehavior _inner;

    public MyAgentLogic(MissionBehavior inner)
    {
        this._inner = inner;
    }

    public override void EnemyHitReward(Agent affectedAgent, Agent affectorAgent, float lastSpeedBonus, float lastShotDifficulty, WeaponComponentData lastAttackerWeapon, AgentAttackType attackType, float hitpointRatio, float damageAmount)
    {
        this._inner.EnemyHitReward(affectedAgent, affectorAgent, lastSpeedBonus, lastShotDifficulty, lastAttackerWeapon, attackType, hitpointRatio, damageAmount);
        if (attackType == AgentAttackType.Standard)
        {
            return;
        }
        // 非标准攻击额外加经验
    }
}
```

读 `Agent` 上缓存的最后一击标签（死亡/受击表现层用它）：

```csharp
public class MyOnAgentHitBehavior : MissionLogic
{
    public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in Blow blow, in AttackCollisionData collisionData)
    {
        if (affectorAgent == null)
        {
            return;
        }
        AgentAttackType lastType = affectorAgent.LastBlowAttackType;
        if (lastType == AgentAttackType.Bash)
        {
            // 柄击命中：给 affectorAgent 的表现层挂一个额外特效
        }
    }
}
```

## 风险与边界

- **枚举顺序是 ABI，不能动。** 它注册成了引擎结构体 `Agent_attack_type`，原生层按整数值读。插入一个成员在中间就会同时错乱托管与原生两侧。**跨版本新增成员只能追加在 `Count` 之前**——而 `Count` 本身就是个假哨兵，永远不会有人真的分配数组，所以实际后果可控，但这不改变「别重排」这条规则。
- **`Collision` 不可达。** 1.3.0 托管代码零引用。你 `switch` 到 `Collision` 分支不会编译失败，但那条分支永远进不去。不要在文档或代码里暗示它代表某种可观测行为。
- **`Count` 不等于成员数。** 5 个成员、末位是 `Count`，所以 `Count == 4` 而不是 5。想要「合法攻击方式的数量」得自己写 `Enum.GetValues(typeof(AgentAttackType)).Length`（会得到 5，含 `Count`），或者干脆枚举前 4 个。官方 1.3.0 没有在任何地方用它做上界。
- **`Bash` 与 `Standard` 共享武器。** 判据是 `IsAlternativeAttack`，不是武器类型。想区分「武器刃部命中」和「武器柄命中」，只能读 `Blow.AttackType`，从 `attackerWeapon` 或 `WeaponClass` 推不出来。
- **`Blow.AttackType` 不在存档里。** `Blow` 是任务期临时对象，读档回到大地图后不存在。跨存档要保留「上一次是脚踢」这种信息，必须自己写进 campaign 数据。
- **`KillingBlow.AttackType` 需要单独赋值。** `KillingBlow` 有自己的同名字段，不是继承自 `Blow` 的。构造 `KillingBlow` 时忘了拷 `AttackType`，在 `OnAgentRemoved` 里读到的就是默认值 `Standard`。
- **音效分支的顺序不可假设。** `BlowWeaponRecord.GetHitSound` 里 `Bash` / `Kick` 的判定排在 `isCriticalBlow` 之前。你自定义 `DamageTypes` 或暴击规则时，改伤害不会改音效。

## 怎么用

### 怎么拿到它

它是 `public enum AgentAttackType`（`TaleWorlds.Core/AgentAttackType.cs:6`，无 `: byte`，底层 `int`），**没有工厂也没有单例——这个枚举不会被「拿到」，只会被回调递给你**。三个入口按可靠度排：`MissionLogic.OnAgentRemoved` 的 `killingBlow.AttackType`（权威值，击杀那一刻定格）、`MissionLogic.EnemyHitReward` 的 `attackType` 形参（官方三个战斗控制器就是这么接的）、`Agent.LastBlowAttackType`（缓存值，还没打中过时是 `Standard` 初值）。

### 典型用法

往自定义 MissionEvent 或存档里塞数据时，穿过边界的是裸 `int` 而不是枚举。回读那一侧必须自己兜住越界值——`Count` 是从不更新的假哨兵，拿它当数组长度或上界都会漏：

```csharp
public static class AttackTypeCodec
{
    // 只认这三个分支：Collision 在 1.3.0 托管侧零引用，进来也没有对应处理
    public static AgentAttackType Decode(int raw)
    {
        if (raw == (int)AgentAttackType.Kick)
        {
            return AgentAttackType.Kick;
        }
        if (raw == (int)AgentAttackType.Bash)
        {
            return AgentAttackType.Bash;
        }
        return AgentAttackType.Standard;
    }

    // 不要顺手写 new AgentAttackType[(int)AgentAttackType.Count]，Count 不会随成员增加而更新
    public static int Encode(AgentAttackType type)
    {
        return (int)type;
    }
}
```

与上面「真实示例」那三段的差别：那里都是**战斗回调当场**分流或转发，枚举刚从引擎出来、一定是合法值；这里假设它已经穿过了存档或网络边界，回来时是一个可能越界的 `int`，要做的不是分流而是**在边界上把它变回合法枚举**。

### 最容易踩的坑

**枚举顺序是 ABI，不能动。** 它注册成了引擎结构体 `Agent_attack_type`，原生层按整数值读。往中间插一个成员会同时错乱托管与原生两侧；跨版本新增成员只能追加在 `Count` 之前。`Count` 本身还是个假哨兵，永远不会有人真的按它分配数组。

## 跨版本提示

`AgentAttackType.cs` 在 `bannerlord-1.3.0/` 与 `bannerlord-1.3.15/`、`1.4.6/`、`1.4.7/`、`1.5.3/` 四棵树里**都是 19 行 / 341 字节**，成员集合一字未改。`diff` 逐行比较后，唯一差异是 `// Token: 0x0400…` 注释里的 RID 编号（1.3.0 是 `0x040002E6`–`0x040002EA`，1.3.15 是 `0x040002F2`–`0x040002F6`，1.4.6 是 `0x040002F5`–`0x040002F9`）——纯粹是同一程序集里成员顺序在前面的类型增加了。**枚举成员、值、顺序全部稳定，1.3.0 的代码升到 1.5.3 不会编译不过。**

需要注意的是 `bannerlord-1.4.5/` 这棵树：该树保存的是去掉了 `// Token:` 注释的精简版，`AgentAttackType.cs` 只有 10 行 / 114 字节。**不要把 1.4.5 树的行数当成「这个类型缩水了」的证据**——同一份源码在 1.4.6 树里又变回 19 行。

写入/读取路径也稳定：`Mission.CreateMeleeBlow` 的三元表达式、`BlowWeaponRecord.GetHitSound` 的分支、`Agent.LastBlowAttackType` / `RegisterLastBlow` 在 1.3.0 → 1.5.3 全程存在。

## 依赖关系

- 承载数据：[Blow](../../mission-ext/Blow) 与 [KillingBlow](../../mission-ext/KillingBlow) 各持有一个 `public AgentAttackType AttackType;` 字段，本枚举自身零成员、零方法
- 写入方：[Mission](../../mission/Mission) 的 `CreateMeleeBlow` 是唯一决定标签值的地方，`Agent.RegisterLastBlow` 负责把它缓存到 [Agent](../../mission/Agent) 上
- 读取方：`BlowWeaponRecord.GetHitSound` 与 [CombatSoundContainer](../../mission-ext/CombatSoundContainer) 常量表决定实际听感，[HighlightsController](../../mission-ext/HighlightsController) 决定高亮是否放行
- 事件载体：[MissionBehavior](../../mission/MissionBehavior) 的 `OnAgentRemoved` / `EnemyHitReward` 回调签名里带着它，沙盒三个控制器原样透传
- 同族哨兵惯例：[AgentControllerType](../AgentControllerType) 与本页的 `Count` 是同一套「末尾放一个 Count」的写法，可对照阅读
- 桶首页：[core-extra API 分区](../)