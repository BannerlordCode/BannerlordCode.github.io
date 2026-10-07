---
title: "AgentFlag"
description: "Agent 能力位掩码：26 个 uint 位标志，从 Monster 的 <Flags> XML 节点灌入 Agent，再被 IsHuman/IsMount 等属性与沙盒的裸数字 HasAnyFlag 判断读走。"
---

# AgentFlag

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public enum AgentFlag : uint` + `[Flags]`
**Base:** `System.Enum`
**File:** `TaleWorlds.Core/AgentFlag.cs`（全文 64 行 / 1692 字节）

> 核对记录：读了 `TaleWorlds.Core/AgentFlag.cs`（1692 B）+ `TaleWorlds.Core/Monster.cs`（XML `<Flags>` 解析段 840–880 行）+ `TaleWorlds.MountAndBlade/Agent.cs`（`IsHuman` / `IsMount` / `Controller` setter / `GetAgentFlags` / `SetAgentFlags`）+ `TaleWorlds.Library/Extensions.cs`（`HasAnyFlag` / `HasAllFlags`）+ `SandBox/Missions/AgentBehaviors/AlarmedBehaviorGroup.cs`、`SandBox/GameComponents/SandboxAgentApplyDamageModel.cs`、`SandBox/Missions/MissionLogics/Hideout/*`、`SandBox/WoundAllEnemiesCheat.cs`。约 40 min（本组最慢的一页）。最难判断点：沙盒里大量 `HasAnyFlag<AgentFlag>(flags, 65536)` 这类**裸数字掩码**，得逐个反查它们对应哪几个标志位叠加，而且 `HasAllFlags(2056)` 是两个位的按位或而不是「值等于 2056」。

## 概述

`AgentFlag` 是一组**能力位**，不是状态位：它回答「这个 agent 能不能做某件事」，不回答「它现在处于什么状况」。26 个成员占满 `uint` 的低 27 位，每个值都是 `2^n`，没有任何组合值——**`[Flags]` 装饰器 + 显式数值**是它唯一的语义约定。

它的数据流是**单向的两段**：

```
monster_*.xml 的 <Flags CanKick="true" IsHumanoid="true" .../>
        ↓ Monster.cs:856-873  按 Enum.GetValues(typeof(AgentFlag)) 逐名找 XML 属性
Monster.Flags （Monster 上的 public AgentFlag Flags { get; private set; }）
        ↓ Agent 创建/构建时灌进原生
Agent.GetAgentFlags() / Agent.SetAgentFlags(AgentFlag)
        ↓
所有 HasAnyFlag / HasAllFlags 判断
```

**XML 属性名就是枚举成员名**——`Monster.cs` 里是 `xmlNode3.Attributes[agentFlag.ToString()]`。这个映射是隐式的，改枚举成员名会**静默**让对应的 XML 属性失效（不报错，只是那个能力不再被设置），因为解析循环是从枚举出发遍历的。

写侧只有两个入口：`Monster.Flags`（只读，改不了）和 `Agent.SetAgentFlags(AgentFlag agentFlags)` → `MBAPI.IMBAgent.SetAgentFlags(this.GetPtr(), (uint)agentFlags)`。**`SetAgentFlags` 是整体覆盖，没有 `AddFlag` / `RemoveFlag` 辅助方法**——想加位必须自己 `GetAgentFlags() | X` 再写回。官方的 [AgentControllerType](../AgentControllerType) setter 就是这么干的：`this.SetAgentFlags(this.GetAgentFlags() | AgentFlag.CanRide);`。

## 心智模型

把它当成**一张 `uint` 位表**，其中「位序」就是成员声明顺序（从 `Mountable` 的第 0 位到 `CanDeflectArrowsWith2HSword` 的第 26 位）。四个必须记住的读法：

**第一，所有判断都走扩展方法而不是运算符。** `TaleWorlds.Library/Extensions.cs` 提供两个：

```csharp
public static bool HasAnyFlag<T>(this T p1, T p2) where T : struct { return EnumHelper<T>.HasAnyFlag(p1, p2); }
public static bool HasAllFlags<T>(this T p1, T p2) where T : struct { return EnumHelper<T>.HasAllFlags(p1, p2); }
```

`HasAnyFlag` 是「有交集」，`HasAllFlags` 是「掩码全含」。你也会看到直接用运算符的写法——`Agent.cs:78` 的 `public bool IsHuman { get { return (this.GetAgentFlags() & AgentFlag.IsHumanoid) > AgentFlag.None; } }` 就是 `&` 加 `> None`（等价于 `!= None`，依赖 [AgentControllerType](../AgentControllerType) 页讲的同一套「枚举可排序」惯例）。**两种写法结果一样，别混着猜。**

**第二，官方沙盒里有大量裸数字。** 这是模组作者查这个枚举时最常撞上的东西，因为反编译产物把 `HasAnyFlag<AgentFlag>(flags, AgentFlag.CanGetAlarmed)` 折叠成了 `HasAnyFlag<AgentFlag>(flags, 65536)`。逐个反查（`grep -rn "HasAnyFlag<AgentFlag>" SandBox/` 得到的结果）：

| 裸数字 | 拆成哪些位 | 出现在哪 |
| --- | --- | --- |
| `65536` | `CanGetAlarmed` | `SandBox/GameComponents/SandboxAgentApplyDamageModel.cs:579`、`SandBox/Missions/AgentBehaviors/AlarmedBehaviorGroup.cs:515` 与 `:537` |
| `2056` | `IsHumanoid`(2048) \| `CanAttack`(8) | `AlarmedBehaviorGroup.cs:74` 的 `HasAllFlags`，用在「这两个都要」的场景 |
| `81920` | `CanGetAlarmed`(65536) \| `CanWieldWeapon`(16384) | `AlarmedBehaviorGroup.cs:370` 的 `HasAllFlags` |
| `1048576` | `CanRetreat` | `SandBox/Missions/MissionLogics/Hideout/HideoutAmbushMissionController.cs:198` 与 `:210`、`HideoutMissionController.cs:770`、`SandBox/WoundAllEnemiesCheat.cs` 附近同族 |
| `8` | `CanAttack` | `SandBox/WoundAllEnemiesCheat.cs:35` |

**`2056` 和 `81920` 是 `HasAllFlags`，所以它们是「两位都要有」，不是「标志值等于 2056」**——这是最容易读错的一处。

**第三，位是「能不能」，不是「当前状态」。** `CanKick` 不表示「正在踢」，只表示「有踢的能力」。同理 `CanWieldWeapon` 不表示「手里有武器」。真正读「有没有拿武器」的地方走的是别的路径。

**第四，少数几位被硬编码进了引擎行为。** `Mission.cs:2608` 那句 `agentState != AgentState.Routed && affectedAgent.GetAgentFlags().HasAnyFlag(AgentFlag.CanWieldWeapon)` 决定了「非溃退且能持武器」才计入武器相关统计；`Agent.Controller` setter 在变成 `Player` 时加 `CanRide`。这些是托管层直接写位的地方，也是你能安全地追加自定义位的地方（详见风险一节）。

## 关键成员

下表按位序排列。值一律是 `2^n`，声明顺序即位序。

| 成员 | 值 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- | --- |
| `None` | `0U` | `None = 0U` | 空掩码。`Agent.IsHuman` / `IsMount` 都写成 `(flags & X) > AgentFlag.None`；`Monster.cs:858` 在解析 `<Flags>` 节点前先 `this.Flags = AgentFlag.None`。**不是「没有任何能力」的运行态值，是一个位运算的零基准。** |
| `Mountable` | `1U` | `Mountable = 1U` | 可被骑乘。`Agent.IsMount => (GetAgentFlags() & AgentFlag.Mountable) > AgentFlag.None` 就是它的唯一托管读点；`Agent.Build` 里也用 `!this.IsMount` 判断要不要分编队。 |
| `CanJump` | `2U` | `CanJump = 2U` | 允许跳跃。1.3.0 托管代码无直接引用，交给原生行为树使用。 |
| `CanRear` | `4U` | `CanRear = 4U` | 允许马匹 rearing（人立而起）。同样无托管引用，纯原生。 |
| `CanAttack` | `8U` | `CanAttack = 8U` | 允许发起攻击。`AlarmedBehaviorGroup.cs:74` 的 `HasAllFlags(2056)` 里的低三位就是它；`SandBox/WoundAllEnemiesCheat.cs:35` 的 `HasAnyFlag(…, 8)` 单独判它。 |
| `CanDefend` | `16U` | `CanDefend = 16U` | 允许防御/格挡。无托管引用。 |
| `RunsAwayWhenHit` | `32U` | `RunsAwayWhenHit = 32U` | 受击后逃跑。无托管引用。 |
| `CanCharge` | `64U` | `CanCharge = 64U` | 允许冲锋。无托管引用。 |
| `CanBeCharged` | `128U` | `CanBeCharged = 128U` | 允许被冲锋。无托管引用。 |
| `CanClimbLadders` | `256U` | `CanClimbLadders = 256U` | 允许爬梯。围城战行为用。 |
| `CanBeInGroup` | `512U` | `CanBeInGroup = 512U` | 允许被编入 AI 小组。无托管引用。 |
| `CanSprint` | `1024U` | `CanSprint = 1024U` | 允许冲刺。`EventControlFlag.Run` 相关行为的门槛。 |
| `IsHumanoid` | `2048U` | `IsHumanoid = 2048U` | **本枚举最重要的一位。** `Agent.IsHuman` 判它；`Agent.Build` 用它决定是否采纳 `AgentBuildData.AgentController`（非人形强制 `AI`）；`Agent.Controller` setter 里 `value != AI` 的速度解除分支也要求它置位；`AlarmedBehaviorGroup` 的 `HasAllFlags(2056)` 里的高位就是它。 |
| `CanGetScared` | `4096U` | `CanGetScared = 4096U` | 会因惊吓进入恐慌。无托管引用。 |
| `CanRide` | `8192U` | `CanRide = 8192U` | 允许骑乘他人。**唯一有托管写入的位**：`Agent.Controller` setter 在 `value == Player` 时 `SetAgentFlags(GetAgentFlags() | AgentFlag.CanRide)`，而且没有对应的清除。 |
| `CanWieldWeapon` | `16384U` | `CanWieldWeapon = 16384U` | 可持械。`Mission.cs:2608` 用它过滤武器击杀统计；`AlarmedBehaviorGroup.cs:370` 的 `HasAllFlags(81920)` 高位就是它。 |
| `CanCrouch` | `32768U` | `CanCrouch = 32768U` | 允许蹲伏。无托管引用。 |
| `CanGetAlarmed` | `65536U` | `CanGetAlarmed = 65536U` | 会进入警戒。沙盒里被写成裸数字 `65536`（`AlarmedBehaviorGroup` 两处、`SandboxAgentApplyDamageModel.cs:579` 一处），也是 `HasAllFlags(81920)` 的低位。 |
| `CanWander` | `131072U` | `CanWander = 131072U` | 允许游荡。城镇 NPC 行为树门槛。 |
| `CanKick` | `524288U` | `CanKick = 524288U` | 允许踢击。对应 [AgentAttackType](../AgentAttackType) 里 `Kick` 能否产生——**没有这条位就没有 `Kick` 标签**。 |
| `CanRetreat` | `1048576U` | `CanRetreat = 1048576U` | 允许撤退。`HideoutAmbushMissionController.cs:198` 与 `HideoutMissionController.cs:770` 都用 `HasAnyFlag(…, 1048576)` 筛可撤退单位。 |
| `MoveAsHerd` | `2097152U` | `MoveAsHerd = 2097152U` | 以兽群方式移动（牛羊）。无托管引用。 |
| `MoveForwardOnly` | `4194304U` | `MoveForwardOnly = 4194304U` | 只向前移动。无托管引用。 |
| `IsUnique` | `8388608U` | `IsUnique = 8388608U` | 唯一单位（重要 NPC 不重复生成）。无托管引用。 |
| `CanUseAllBowsMounted` | `16777216U` | `CanUseAllBowsMounted = 16777216U` | 骑乘时可用所有弓。无托管引用。 |
| `CanReloadAllXBowsMounted` | `33554432U` | `CanReloadAllXBowsMounted = 33554432U` | 骑乘时可装填所有弩。无托管引用。 |
| `CanDeflectArrowsWith2HSword` | `67108864U` | `CanDeflectArrowsWith2HSword = 67108864U` | 双手剑可弹开箭矢。1.3.0 里是最高位、也是「没有后续位」的末位——但它**不是哨兵**，没有 `Count`。 |

**注意 26 个成员里只有 8 个在托管代码里被读到**：`None`、`Mountable`、`IsHumanoid`、`CanRide`、`CanWieldWeapon`、`CanGetAlarmed`、`CanAttack`、`CanRetreat`。其余 18 个是纯原生能力位，托管侧只能通过 XML 配置，不能通过 C# 判断。

## 真实示例

判一个 agent 能不能踢——注意先取 `GetAgentFlags()` 再用扩展方法，`HasAnyFlag` 是 `TaleWorlds.Library` 的扩展方法：

```csharp
public class MyKickUnlockLogic : MissionLogic
{
    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
    {
        if (affectorAgent == null || affectorAgent.IsAIControlled)
        {
            return;
        }
        AgentFlag flags = affectorAgent.GetAgentFlags();
        // 沙盒里的等价写法是 HasAnyFlag<AgentFlag>(flags, 524288)
        if (flags.HasAnyFlag(AgentFlag.CanKick) && killingBlow.AttackType == AgentAttackType.Kick)
        {
            MBInformationManager.ShowHint("这一脚是能力位放行的");
        }
    }
}
```

给自定义单位加能力位——**必须 `Get | X` 再整体写回**，`SetAgentFlags` 没有增量版本：

```csharp
public class MyAgentBuffLogic : MissionBehavior
{
    public override void OnAgentControllerSetToPlayer(Agent agent)
    {
        if (agent == null)
        {
            return;
        }
        AgentFlag current = agent.GetAgentFlags();
        if (current.HasAnyFlag(AgentFlag.CanSprint))
        {
            return;
        }
        agent.SetAgentFlags(current | AgentFlag.CanSprint);
        // 想撤销就写 agent.SetAgentFlags(current & ~AgentFlag.CanSprint)，
        // 但注意官方自己加的 CanRide 没有任何对称的清除写法
    }
}
```

复刻 `Monster.cs` 里把 `<Flags>` 节点转成掩码的那段循环（原版是从 `node.ChildNodes` 里找 `Name == "Flags"` 的子节点）：

```csharp
// 源 XML：<Flags CanKick="true" IsHumanoid="true" CanAttack="false" />
// 解析结果：Flags == AgentFlag.CanKick | AgentFlag.IsHumanoid
// 属性值写成 "false"（忽略大小写）被显式排除，其它任何值都算置位
private static AgentFlag ReadFlagsFromXml(XmlNode flagsNode)
{
    AgentFlag result = AgentFlag.None;
    foreach (object value in Enum.GetValues(typeof(AgentFlag)))
    {
        AgentFlag flag = (AgentFlag)value;
        XmlAttribute attribute = flagsNode.Attributes[flag.ToString()];
        if (attribute != null && !attribute.Value.Equals("false", StringComparison.InvariantCultureIgnoreCase))
        {
            result |= flag;
        }
    }
    return result;
}
```

「至少要能攻击并且是人形」这种复合条件——沙盒 `AlarmedBehaviorGroup.cs:74` 就是这么写的：

```csharp
AgentFlag agentFlags = agent.GetAgentFlags();
// 官方原文：Extensions.HasAllFlags<AgentFlag>(agentFlags, 2056)
if (agentFlags.HasAllFlags(AgentFlag.IsHumanoid | AgentFlag.CanAttack))
{
    // 只有「是人形」且「能攻击」的邻居才会触发警戒传染
}
```

## 风险与边界

- **XML 属性名 = 枚举成员名，改名会静默失效。** `Monster.cs` 的循环是 `xmlNode3.Attributes[agentFlag.ToString()]`——从枚举出发找属性。你改了枚举名，旧 XML 里的属性名就再也匹配不上，**不抛异常、不报警告，那个能力直接消失**。派生 mod 加新位时也要明白：你的位名会要求你自带新的 XML。
- **`SetAgentFlags` 是覆盖不是增量。** 没有 `AddFlag`/`RemoveFlag`。`agent.SetAgentFlags(AgentFlag.CanKick)` 会把其他 25 位全清掉——包括 `IsHumanoid`，而那会让 `Agent.IsHuman` 变 false、`Agent.Build` 的控制权逻辑改道。**永远用 `Get() | X` 的形式。**
- **`CanRide` 只加不减。** `Agent.Controller` setter 里 `SetAgentFlags(GetAgentFlags() | AgentFlag.CanRide)` 没有配对的清除分支。一个 agent 一旦被玩家接管过，`CanRide` 就永久留在它的标志位上。
- **沙盒的裸数字不是「枚举值」。** `HasAnyFlag<AgentFlag>(flags, 2056)` 是 `IsHumanoid | CanAttack` 两个位的**掩码**，不是「某个叫 2056 的标志」。用 `&` 运算符复现时记得写 `HasAllFlags` 而不是 `HasAnyFlag`。
- **18 个成员在托管侧不可观测。** `CanJump` / `CanRear` / `CanDefend` / `RunsAwayWhenHit` / `CanCharge` / `CanBeCharged` / `CanClimbLadders` / `CanBeInGroup` / `CanSprint`（部分）/ `CanGetScared` / `CanCrouch` / `CanWander`（部分）/ `MoveAsHerd` / `MoveForwardOnly` / `IsUnique` / `CanUseAllBowsMounted` / `CanReloadAllXBowsMounted` / `CanDeflectArrowsWith2HSword` —— 1.3.0 托管代码零引用。你能通过 XML 配它们，但**不能通过 C# 读它们的效果**，原生是否遵守也没有托管层的验证手段。
- **`uint` 而非 `int`。** 底层是 `uint`，所以 `MBAPI.IMBAgent.SetAgentFlags` 收的是 `(uint)agentFlags`。你自己扩展枚举成员时如果打算越过第 31 位（`2147483648U`），它会撞上 `int` 与 `uint` 的隐式转换规则，编译器可能直接拒绝你的代码。
- **没有 `Count` 哨兵。** 与 [AgentAttackType](../AgentAttackType) / [AgentControllerType](../AgentControllerType) 不同，本枚举末位是真实能力位。`Enum.GetValues(typeof(AgentFlag)).Length` 会返回 **27**（含 `None`），别拿它当「有多少种能力」。
- **`Extensions.HasAnyFlag<T>` 是泛型扩展方法，需要 `using TaleWorlds.Library;`**。只用 `using TaleWorlds.Core;` 编译不过——`AgentFlag` 在 Core，扩展方法在 Library。

## 怎么用

### 怎么拿到它

它是 `public enum AgentFlag : uint` 加 `[Flags]`（`TaleWorlds.Core/AgentFlag.cs:7`）。读入口是 `Agent.GetAgentFlags()`，写入口是 `Agent.SetAgentFlags(AgentFlag)`——**只有整体覆盖，没有增量版本**。判断用 `TaleWorlds.Library` 的扩展方法 `HasAnyFlag<T>` / `HasAllFlags<T>`（`TaleWorlds.Library/Extensions.cs:393`），不要手写 `(flags & X) > 0`，官方的零基准是 `> AgentFlag.None`。

### 典型用法

自定义怪物走 XML 时，`Monster.cs` 是从枚举成员名反查属性名的（`xmlNode.Attributes[agentFlag.ToString()]`）。所以你的加载器应该在 XML 进来时把名字**解析一遍**，而不是等能力静默消失：

```csharp
public static class FlagNameParser
{
    // 自定义怪物 XML 的属性名必须与枚举成员名逐字一致，拼错不会抛异常
    public static AgentFlag Parse(IEnumerable<string> names)
    {
        AgentFlag flags = AgentFlag.None;
        foreach (string name in names)
        {
            AgentFlag parsed;
            if (!Enum.TryParse(name, false, out parsed))
            {
                // 官方也是静默忽略：这里主动打一条日志，是你能拿到的唯一信号
                MBDebug.Print("[MyMod] Flags 属性名对不上枚举成员：" + name);
                continue;
            }
            flags |= parsed;
        }
        return flags;
    }
}
```

与上面「真实示例」那两段的差别：那里都是**对活着的 Agent** 读标志位（`HasAnyFlag` 判能不能踢）或整体加一位（`SetAgentFlags(current | CanSprint)`）；这里面对的是**尚未成活的配置数据**，做的是名字到枚举的解析与报错——它决定了后面那次 `SetAgentFlags` 到底会不会生效。

### 最容易踩的坑

**XML 属性名 = 枚举成员名，改名会静默失效。** 引擎的循环是 `xmlNode.Attributes[agentFlag.ToString()]`——从枚举出发找属性。改了枚举名，旧 XML 里的属性名就再也匹配不上，**不抛异常、不报警告，那个能力直接消失**。派生 mod 加新位时也要明白：你的位名会要求你自带新的 XML。

## 跨版本提示

`AgentFlag.cs` 在 1.3.0（64 行 / 1692 字节）到 1.3.15（1692 字节）**成员与值一字未改**（两者 md5 不同但 `grep -v Token` 逐行 diff 为空，差异仅在 `// Token:` 注释编码）。**从 1.4.6 起新增了一个成员**：

```csharp
CanDeflectArrowsWith2HSword = 67108864U,
UnreachableViaNavMesh = 134217728U    // ← 1.4.6 / 1.4.7 / 1.5.3 新增，1.3.0 与 1.3.15 都没有
```

对应文件大小从 1692 涨到 1764 字节（+72），行数 64 → 66。`UnreachableViaNavMesh`（导航网格不可达）是**追加在末位**，所以已有位的数值全部稳定——这是正确的 ABI 做法，也说明你如果派生扩展，正确姿势同样是**只往末尾加**。

`bannerlord-1.4.5/` 树的 `AgentFlag.cs` 只有 36 行 / 802 字节，同样是去掉了 `// Token:` 注释的精简存储，不代表类型被裁剪。

升级时需要复查的是**沙盒里那些裸数字掩码**：`65536`、`2056`、`81920`、`1048576` 在 1.3.0 到 1.5.3 之间对应的位含义没有理由改变，但新版本的 `AlarmedBehaviorGroup` / `SandboxAgentApplyDamageModel` 可能改用命名位——**你复制来的裸数字在新版本里语义是否还成立，只能靠对读那一版源码确认**。

## 依赖关系

- 数据来源：[Monster](../Monster) 上的 `public AgentFlag Flags { get; private set; }` 由 XML `<Flags>` 节点填充，是本枚举在托管侧唯一的产地
- 宿主读写：[Agent](../../mission/Agent) 的 `GetAgentFlags()` / `SetAgentFlags(AgentFlag)` 与 `IsHuman` / `IsMount` / `IsAIControlled` 都建立在它之上
- 位运算工具：[Extensions](../Extensions) 的 `HasAnyFlag<T>` / `HasAllFlags<T>` 转发到 [EnumHelper](../EnumHelper)，两者都在 `TaleWorlds.Library` 而非 Core
- 控制权副作用：[AgentControllerType](../AgentControllerType) 的 setter 会 `| AgentFlag.CanRide`，是把两个类型耦合起来的唯一位置
- 攻击能力对：[AgentAttackType](../AgentAttackType) 的 `Kick` / `Bash` 能否产生，取决于 `CanKick` 等位是否置上
- 伤害模型消费者：[AgentStatCalculateModel](../../mission-ext/AgentStatCalculateModel) 及其沙盒子类按标志位筛可伤害/可警戒的目标
- 桶首页：[core-extra API 分区](../)