---
title: "AgentAttackType"
description: "命中结算的攻击通道枚举：Standard / Kick / Bash / Collision / Count。它不描述「用什么武器」，而描述「这一击是怎么打到人的」，通过 DefineAsEngineStruct 直连 native，由 native 写入 Blow.AttackType。"
---

# AgentAttackType

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public enum AgentAttackType`
**Base:** 无
**File:** `TaleWorlds.Core/AgentAttackType.cs`

## 概述

`AgentAttackType` 回答的是命中结算里的一个很具体的问题：**这一击是靠什么机制落到人身上的**。游戏里「踢」和「剑劈」走的是同一套伤害管线，但它们要播的动画、要配的声音、要不要算作武器伤害都不同；`AgentAttackType` 就是这个区分的载体。它**不是**武器分类——那是 [WeaponClass](../WeaponClass) 的事；也**不是**伤害类型——那是 `DamageTypes`。它只标注通道。

它承担的是**命中结算的旁路标注**这一环。数据流是：native 判定命中 → 填充 [Blow](../../mission-ext/Blow) 的 `AttackType` 字段 → 托管侧读它做分支决策。它是**只出不进**的：托管代码几乎从不主动写这个字段（`Agent.cs:4658` 的那一处是唯一的例外，而且是把值**复制**过来，不是产生新值）。三个消费点分别是音效（`BlowWeaponRecord.cs:109` 与 `:142`）、死亡归属改写（`Agent.cs:4658`），以及经 [KillingBlow](../../mission-ext/KillingBlow) 暴露给 mod。

## 心智模型

把它当成**一次命中的「通道标签」**，而不是「一次攻击的种类」。判断一段逻辑要不要看它，问一个问题：**如果这次命中是踢出来的，我的代码会出错吗？** 会，就查；不会（比如只关心伤害数值和部位），就别查。

**先记住它跨了 native 边界。** `TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:15` 有 `[assembly: DefineAsEngineStruct(typeof(AgentAttackType), "Agent_attack_type", false, "aat", null)]` —— 这行程序集特性说明它是**由引擎侧定义的托管镜像**，值由 native 写入。反过来说，托管侧新增枚举项不会有任何引擎认识它，你只能在原有四个值里选。

**再看它的写入时机**，这是这个枚举最反直觉的地方。`AgentAttackType` 唯一的来源是 native 填进 `Blow.AttackType`。然后在 `Agent.cs:5459` 和 `:5463`，`Agent` 把这一击的类型登记进内部的 `_lastHitInfo`（`Agent.cs:66` 的 `RegisterLastBlow`），并重置一个 5 秒计时器（`CanOverrideBlow`，`Agent.cs:48-57`：`_lastHitInfoTimer.ElapsedTime <= 5f` 且 `LastBlowOwnerId >= 0`）。当目标真的被打死时（`Agent.cs:4656-4659`），只要这个 5 秒窗口还没过期、并且 `IsHuman`，代码就会**把致死一击的 `OwnerId` 和 `AttackType` 一起覆盖成最后一次命中者的**。这解释了一个玩家长久以来的困惑：**远处射箭或冲撞打出的致命一击，功劳会归给 5 秒内打中过目标的另一个人**。这个枚举之所以能被改写，是这个「补记最后一击」机制的副产品。

由此推出四条实操结论。第一，**它没有 `[Flags]`**，所以 `Standard | Kick` 在这里毫无意义——两个值分别是 0 和 1，位或出来还是 1，`== Kick` 会误判为真。第二，**`Count` 是哨兵值（值为 4），不是真实攻击类型**。它存在的唯一目的是给 native 侧一个「合法值个数」的边界，写进去的模式在 `DefineAsEngineStruct` 里用的是 `false`（非 flags）。`foreach (AgentAttackType t in Enum.GetValues(typeof(AgentAttackType)))` 会把 `Count` 也遍历出来，写自定义的穷举 `switch` 时务必显式跳过它。第三，**`Collision` 与 `Kick` 在托管侧没有分支**：`BlowWeaponRecord.GetHitSound` 只为 `Kick` 和 `Bash` 开了专用通道（`:109` 的踢击音效、`:142` 的 Bash 分支），`Collision` 会掉进默认的拳击/重击音效选择。第四，**通过 mod 拿到的最稳入口是 [KillingBlow](../../mission-ext/KillingBlow)**：它在构造时把 `b.AttackType` 拷进自己的 public 字段（`KillingBlow.cs:20`），而 `Mission.OnBeforeAgentRemoved`（`Mission.cs:1535`）是一个可以直接 `+=` 订阅的公开事件。想在死亡瞬间拿到攻击类型，这是官方给的正规路径，比去碰 `Blow` 结构体稳。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Standard` | `Standard = 0` | 默认通道：普通武器伤害。`Agent._lastHitInfo.Initialize()`（`Agent.cs:62`）把 `LastBlowAttackType` 初始化成它，所以任何「还没被打中过」的 agent 读到的都是 `Standard`——**不要把 `Standard` 当成「未知」**，它同时也是「正常」。 |
| `Kick` | `Kick = 1` | 踢击。是三个里唯一在托管侧被专门分支处理的：`BlowWeaponRecord.cs:109` 在无武器的命中里优先返回 `CombatSoundContainer.SoundCodeMissionCombatKick`，从而跳过全部拳击/重击音效分支。自定义「被踢」的音效或伤害倍率时判这一项。 |
| `Bash` | `Bash = 2` | 武器格挡/撞击（Bash）。在 `BlowWeaponRecord.cs:142` 有独立分支。它与 `Kick` 的区别在于：踢是赤手，撞击要有武器参与。 |
| `Collision` | `Collision = 3` | 碰撞类伤害——两匹马对撞、落石、攻城器械撞击等**非玩家主动攻击**。托管侧**没有任何**代码对它做 `==` 比较，它一律走默认分支。想知道「这一下不是谁砍的」就查它。 |
| `Count` | `Count = 4` | **哨兵值，不是攻击类型。** 表示合法成员个数，供 native 与 `Enum.GetValues` 边界使用。它不会出现在任何真实命中上。写 `switch` / `foreach` 穷举时必须显式排除，否则会把「还没有类型」当成一种类型。 |
| （程序集特性）`DefineAsEngineStruct` | `[assembly: DefineAsEngineStruct(typeof(AgentAttackType), "Agent_attack_type", false, "aat", null)]`，位于 `TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:15` | 把这个枚举与 native 的 `Agent_attack_type` 结构体绑定，`false` 表示不是位标志集，`"aat"` 是调试器里的缩写。**这是判断「这个值是谁写的」的最快依据**：带这行的枚举，托管侧只能读不能造。 |

## 真实示例

最正规的观察点是 `Mission.OnBeforeAgentRemoved`，它把攻击者、受害者和 `KillingBlow` 一次性交出来（`Mission.cs:676` 的委托签名）：

```csharp
public class MyDeathWatcher : MissionBehavior
{
    public override void OnAfterMissionCreated()
    {
        base.OnAfterMissionCreated();
        // No polling and no battle-start event needed: OnBeforeAgentRemoved is a
        // plain C# event on Mission, so one subscription at creation is enough.
        Mission.Current.OnBeforeAgentRemoved += OnAgentRemoved;
    }
}

private void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
{
    AgentAttackType attackType = killingBlow.AttackType;

    switch (attackType)
    {
        case AgentAttackType.Standard:
            Debug.Print("killed by weapon, owner = " + killingBlow.OwnerId, 0);
            break;
        case AgentAttackType.Kick:
            Debug.Print("killed by a kick", 0);
            break;
        case AgentAttackType.Bash:
            Debug.Print("killed by a bash", 0);
            break;
        case AgentAttackType.Collision:
            Debug.Print("killed by collision, no attacker involved", 0);
            break;
        default:
            // Count never reaches here, but a switch over an enum with no default
            // would silently do nothing for a value added by a future version.
            Debug.Print("unhandled attack type = " + attackType, 0);
            break;
    }
}
```

自己写一个判定辅助时，务必把 `Count` 排除掉——这是枚举里唯一不属于「类型」的值：

```csharp
public static class BlowClassifier
{
    // Returns false for Count: it is a sentinel, not an attack type.
    public static bool IsChannel(AgentAttackType attackType)
    {
        return attackType == AgentAttackType.Kick
            || attackType == AgentAttackType.Bash
            || attackType == AgentAttackType.Collision;
    }

    public static bool IsValid(AgentAttackType attackType)
    {
        return attackType >= AgentAttackType.Standard && attackType < AgentAttackType.Count;
    }
}
```

对照 `KillingBlow` 上三个并列字段（`KillingBlow.cs:19-24`），看清 `AttackType`、`DamageType`、`WeaponClass` 各管一件事：

```csharp
private void ReportKill(Agent victim, Agent killer, AgentState state, KillingBlow killingBlow)
{
    Debug.Print("attack type  = " + killingBlow.AttackType, 0);
    Debug.Print("damage type  = " + killingBlow.DamageType, 0);
    Debug.Print("weapon class = " + killingBlow.WeaponClass, 0);
    Debug.Print("body part    = " + killingBlow.VictimBodyPart, 0);

    // A kick or a bash is a closed-channel hit: it goes through the weapon-record
    // sound path in BlowWeaponRecord.cs:109 / :142, which picks a dedicated
    // combat sound instead of running the generic punch fall-through.
    bool usesDedicatedChannel = killingBlow.AttackType == AgentAttackType.Kick
        || killingBlow.AttackType == AgentAttackType.Bash;

    if (usesDedicatedChannel && killer != null)
    {
        Debug.Print("dedicated impact channel from agent " + killer.Index, 0);
    }
}
```

`Blow.WeaponRecord` 这个 `BlowWeaponRecord` 字段本身也值得单说：它在 1.4.5 的托管代码里**只有两处出现**——`Blow.cs:11` 的字段声明，以及 `MissionNetworkComponent.cs:1698` 把它赋成 `default(BlowWeaponRecord)`。也就是说**托管侧没有任何 `GetBlowWeaponRecord` 之类的取值方法**，这个结构体完全由 native 填充。你能拿到的只有 [KillingBlow](../../mission-ext/KillingBlow) 上已经拷贝好的 `WeaponClass` 那个 int。

## 风险与边界

- **不是位标志集。** 源码里没有 `[Flags]`，`DefineAsEngineStruct` 的第三个参数也是 `false`。`AgentAttackType.Standard | AgentAttackType.Kick` 会得到 `Kick`（因为 `Standard == 0`），用它做组合判断必然出错。
- **`Count` 会污染穷举。** `Enum.GetValues(typeof(AgentAttackType))` 返回 5 个值，其中一个是哨兵。任何 `foreach` + `switch` 的自定义映射都要先做 `x < AgentAttackType.Count` 的上界过滤，或者显式写 `default` 分支。
- **托管侧不产生这个值。** 带 `DefineAsEngineStruct` 的枚举只能由 native 填充。你无法构造一个「自定义攻击类型」，也无法在托管层强制某次命中走 Kick 通道——能改的只有它的**消费逻辑**。
- **死亡时的值可能已经被改写。** `Agent.cs:4656-4659` 在 `CanOverrideBlow` 为真时会把 `b.AttackType` 覆盖成 `_lastHitInfo.LastBlowAttackType`，窗口是 5 秒。想统计「真实致命一击的攻击方式」和统计「最后一次命中的攻击方式」，得到的答案可能不同。
- **覆盖只在 `IsHuman` 时发生。** 同处的 `&& IsHuman` 条件意味着马匹、动物致死不参与这套归属改写，`AttackType` 会保持原值。
- **`Collision` 没有专属托管分支。** 它存在主要是给 native 和动画层用的。托管侧读不到它的专门语义，只能当「非主动攻击」用。
- **不要与 `DamageTypes` 或 `WeaponClass` 混用。** 三者描述的是命中结算的不同维度（怎么打的 / 什么伤害 / 什么武器），在 `KillingBlow` 上它们是三个并列字段：`AttackType`、`DamageType`、`WeaponClass`。
- **不要与 `Agent.UnderAttackType` 混淆。** 后者（`Agent.cs:423`）描述的是「一个 agent 此刻正处于被攻击的哪种状态下」，由 `Formation.GetUnderAttackTypeOfUnits` 消费，与单次命中的通道无关。

## 跨版本提示

`AgentAttackType.cs` 在 1.4.5 里只有 10 行、5 个枚举项，是 1.4.5 原始源码形态（file-scoped namespace、无 `// Token:` 注释）。1.3.x / 1.4.6 的对应文件是反编译产物，行数会明显变多但成员集合一致。**跨版本真正要盯的是 native 侧**：`DefineAsEngineStruct` 绑定的名字 `"Agent_attack_type"` 与缩写 `"aat"` 是托管与原生之间的契约，如果某个版本新增了枚举项（比如某种投掷物撞击），`Count` 的数值会跟着变——你在 1.4.5 写的 `attackType < AgentAttackType.Count` 依然是正确的写法，而硬编码 `attackType <= 3` 就会在下一个版本静默失效。

## 依赖关系

- 数据来源：native 通过 `TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:15` 的 `DefineAsEngineStruct` 绑定把它写进命中结果
- 落位字段：[Blow](../../mission-ext/Blow) 的 `AttackType` 是这个值在一次命中里的第一现场
- 归属改写：[_lastHitInfo（`TaleWorlds.MountAndBlade/Agent.cs:40-72`）](../../mission/Agent) 的 `RegisterLastBlow` / `CanOverrideBlow` 维护 5 秒窗口
- 消费点一（音效）：`BlowWeaponRecord.GetHitSound` 为 `Kick` / `Bash` 开专用分支
- 消费点二（存档/事件）：[KillingBlow](../../mission-ext/KillingBlow) 在构造时拷贝该值，`Mission.OnBeforeAgentRemoved` 把它交给订阅者
- 易混类型：[WeaponClass](../WeaponClass) 描述武器形态，`DamageTypes` 描述伤害性质，`Agent.UnderAttackType` 描述被攻击状态
- 桶首页：[core-extra API 分区](../)