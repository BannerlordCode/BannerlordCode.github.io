---
title: "AgentFlag"
description: "agent 能力位集，uint 宽度的 [Flags] 枚举。它既描述「这只单位能做什么」（可骑、可攻击、可持弓、可骑射），也被运行时代码当成运行时状态开关来用（CanRide 会被设成 Player 时自动打开），三种角色混在同一个字段里。"
---

# AgentFlag

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public enum AgentFlag : uint`
**Base:** `uint`
**File:** `TaleWorlds.Core/AgentFlag.cs`

## 概述

`AgentFlag` 是一个 `uint` 宽度的 `[Flags]` 位集，回答「**这个 agent 能做什么**」——能不能骑、能不能攻击、能不能防守、能不能跳、能不能持弓、能不能被骑。它是**单位模板与能力判定之间唯一的接口**：怪物定义 XML 里的 `<Flags>` 节点被解析成它（`Monster.cs:569-579`），战斗逻辑读它做分支（能否持械、能否被 AI 拾取、能否冲撞），生成流程按它决定坐骑与武器。

它承担的是**能力描述**这一环，但**名字有误导性**：`AgentFlag` 不只是「静态能力」，运行时代码会**主动增删其中的位**。最典型的是 `CanRide`——`Agent.Controller` 被设为 `Player` 时，`Agent.cs:1222` 会执行 `SetAgentFlags(GetAgentFlags() | AgentFlag.CanRide)`，把一个「模板能力位」变成了「当前可操作」的运行时开关。所以读它时必须先问：**我读的是模板给的，还是运行时改过的？**

## 心智模型

把它当成**贴在 agent 身上的一张能力清单**，并且这张清单**会被引擎在运行中擦改**。三条主线撑起整个心智模型。

**第一条主线是「谁把它置位」。** 只有两个来源。第一是 **XML 解析**：`Monster.cs:569-579` 遍历 `<Flags>` 子节点的属性，**按枚举成员的 `ToString()` 名字逐个匹配**——`<Flags CanAttack="true" IsHumanoid="true" />` 这样写，命中就把该位或上去。所以**怪物 XML 里的属性名必须与枚举成员名逐字相同**。第二是**运行时代码**：`Agent.SetAgentFlags`（`Agent.cs:2461-2464`）是一个整体覆盖的 setter，调用方必须自己先读再或；仓库里 `ClimbingMachineDetachment.cs:243` 的写法是最规范的示范——`agent.SetAgentFlags((AgentFlag)((uint)agent.GetAgentFlags() & 0xFFFFFFE7u))`，读-改-写三步走。

**第二条主线是「这个位在什么条件下被置位」**，这是最容易写错答案的地方，因为不同位的触发点散落在整个战斗系统里：`CanRide` 由控制权移交打开（`Agent.cs:1222`）；`CanWieldWeapon` 决定 AI 是否会评估行为间隔（`AgentStatCalculateModel.cs:210`）、能否被拾取（`HumanAIComponent.cs:229`）、伤害是否继续结算（`Mission.cs:3025`）；`CanAttack | CanDefend` 被攀爬机械整体开关（`ClimbingMachineDetachment.cs:241`）；`UnreachableViaNavMesh` 在部署阶段影响阵型寻路（`Formation.cs:1251`）。

**第三条主线是「哪些位是空的」。** 看源码就会发现 `CanWander = 0x20000` 之后直接跳到 `CanKick = 0x80000`——**`0x40000` 这一位没有任何成员占用**。这不是笔误，而是给未来预留的。同理 `0x10` 到 `0x20000` 之后有整整两位的空洞。**这意味着「枚举里没有」不等于「这个能力不存在」**，用 `Enum.GetValues` 做穷举的自定义逻辑在遇到预留位时会漏。

由此推出四个必须记住的结论。第一，**判定位的正确写法是位与判零**：`Agent.cs:640` 的 `public bool IsHuman => (GetAgentFlags() & AgentFlag.IsHumanoid) != 0;` 是全仓库的标准范式。`HasAnyFlag` 也可以（`Agent.cs:1225` 在用），但它做的是「按位与非零」，**对组合判断同样成立**——`ClimbingMachineDetachment.cs:241` 的 `HasAnyFlag(AgentFlag.CanAttack | AgentFlag.CanDefend)` 就在判「两个位里至少有一个」。第二，**不要用 `==` 判单个位**。`flags == AgentFlag.CanAttack` 只在 `CanAttack` 是唯一置位时才真，一旦同时有 `IsHumanoid`（现实中必然如此）就假阴性。第三，**`None = 0` 不是「什么都不行」，而是「没有任何位被标记」**，它是 `Monster.cs:571` 里解析 `<Flags>` 时的清零初值。第四，**它是 `uint` 而不是 `int`**，`ClimbingMachineDetachment.cs:243` 那个 `& 0xFFFFFFE7u` 的字面量带 `u` 后缀正是被这一点逼出来的——掩码常量必须写成 `uint`，否则 `&` 两侧类型不一致会编译失败。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `None` | `None = 0u` | 空位集。`Monster.cs:571` 在解析 `<Flags>` 节点前把它作为清零初值。**读到一个全 0 的 `AgentFlag` 意味着「XML 里没写任何能力」，而不是「单位无效」。** |
| `IsHumanoid` | `IsHumanoid = 0x800u` | 是否人形。**这是整个枚举里分支最多的位**：`Agent.cs:640` 的 `IsHuman` 直接由它导出；`Agent.cs:5172` 用它决定控制权（非人形强制 AI）；`Agent.cs:1225` 用它决定切控制权后是否解除速度上限。配自定义 NPC 时**漏掉这一位**，单位会被强制交给 AI 且速度限制解不开。 |
| `CanWieldWeapon` | `CanWieldWeapon = 0x4000u` | 能否持械。**它是「战斗单位」这个概念的判据**：`AgentStatCalculateModel.cs:210` 里持械单位的行为决策间隔是 0.2 的 1.5 倍，`HumanAIComponent.cs:229` 用它排除拾取，`Mission.cs:3025` 用它决定伤害后续是否继续。牛车、攻城塔、辎重都没有这一位。 |
| `CanRide` | `CanRide = 0x2000u` | 能否骑乘。**这一位会被运行时代码改写**：`Agent.cs:1222` 在控制权被设为 `Player` 时自动或上它。`Agent.cs:3614` 用它判断是否可骑。所以读它得到的是「模板能力 + 当前控制权」的混合结果，**不要当纯模板值用**。 |
| `CanAttack` / `CanDefend` | `CanAttack = 0x8u` / `CanDefend = 0x10u` | 能否攻击 / 能否防守。`ClimbingMachineDetachment.cs:241/266` 用 `HasAnyFlag(CanAttack | CanDefend)` 判断单位是否需要被挂上攀爬机械，再用 `& 0xFFFFFFE7u` 一次清掉**两个位**（`0xFFFFFFE7` 的补码恰好把 `0x8` 与 `0x10` 抹掉）。这是全树最清晰的位集操作范例。 |
| `Mountable` / `CanBeCharged` / `CanCharge` | `Mountable = 0x1u` / `CanBeCharged = 0x80u` / `CanCharge = 0x40u` | 「它是马」「它能被撞」「它能撞人」。`Agent.cs:642` 的 `IsMount` 由 `Mountable` 导出，而 `Agent.Build`（`Agent.cs:5173`）用 `IsMount` 决定 `Formation` 是否置 null——**坐骑单位不参与编队**。 |
| `CanSprint` / `CanJump` / `CanRear` / `CanCrouch` / `CanClimbLadders` | `CanSprint = 0x400u` / `CanJump = 0x2u` / `CanRear = 0x4u` / `CanCrouch = 0x8000u` / `CanClimbLadders = 0x100u` | 运动能力位。**它们在托管侧的读取极少**（动画层在 native 侧消费），但配怪物 XML 时必须写对，否则马不会抬前蹄、牛不会跳跃。这是「XML 属性名必须与枚举名逐字匹配」最常被违反的一组。 |
| `MoveAsHerd` / `MoveForwardOnly` / `CanWander` / `UnreachableViaNavMesh` | `MoveAsHerd = 0x200000u` / `MoveForwardOnly = 0x400000u` / `CanWander = 0x20000u` / `UnreachableViaNavMesh = 0x8000000u` | 群体行为与寻路约束。`MoveAsHerd` 让牛羊成群移动，`MoveForwardOnly` 禁止后退，`CanWander` 是 NPC 闲逛的前提，`UnreachableViaNavMesh`（部署阶段专用）被 `Formation.cs:1251` 用来在 `IsDeploymentFinished` 后仍阻止寻路重排。 |
| `CanUseAllBowsMounted` / `CanReloadAllXBowsMounted` / `CanDeflectArrowsWith2HSword` | `0x1000000u` / `0x2000000u` / `0x4000000u` | 三个高位的「高级战斗技巧」位，允许骑射中换弓、马上装填所有弩、用双手剑格挡箭矢。托管侧无读取代码，纯 native 消费。 |
| `CanGetScared` / `CanGetAlarmed` / `CanBeInGroup` | `CanGetScared = 0x1000u` / `CanGetAlarmed = 0x10000u` / `CanBeInGroup = 0x200u` | 士气与编队归属。`Agent.cs:2660` 附近的交互逻辑与 `IsAlarmed()` 相关；`CanBeInGroup` 决定单位能否被归入编队。 |
| （预留空洞）`0x40000` | 无成员 | `CanWander = 0x20000` 与 `CanKick = 0x80000` 之间空着的 `0x40000` 位**没有任何枚举成员**。它是给未来预留的槽位。**用 `Enum.GetValues` 穷举的逻辑不可能枚举到它，而 `flags & 0x40000` 是合法的位测试。** |
| （程序集特性）无 | 本类型**没有** `DefineAsEngineStruct` | 与本桶其他枚举不同，`AgentFlag` **不是** native 定义的镜像：它在 `TaleWorlds.Engine` 与 `TaleWorlds.MountAndBlade` 两个 `AssemblyInfo.cs` 里都没有绑定行。它由 XML 解析产生、由托管代码读改，通过 `IMBAgent.SetAgentFlags` / `AgentHelper.GetAgentFlags` 传给引擎。**这是它能被运行时任意改写的前提。** |

## 真实示例

读一个怪物模板的能力位，并按位判零（范式抄 `Agent.cs:640-642`）：

```csharp
Monster monster = MBObjectManager.Instance.GetObject<Monster>("human");
if (monster == null)
{
    Debug.Print("monster not loaded", 0);
    return;
}

AgentFlag flags = monster.Flags;

// Bit-and-against-zero is the canonical test in this codebase.
bool isHumanoid = (flags & AgentFlag.IsHumanoid) != AgentFlag.None;
bool isMount = (flags & AgentFlag.Mountable) != AgentFlag.None;
bool armed = flags.HasAnyFlag(AgentFlag.CanWieldWeapon);

Debug.Print("humanoid=" + isHumanoid + " mount=" + isMount + " armed=" + armed, 0);
Debug.Print("raw value = " + (uint)flags, 0);
```

在 mission 里读写一个已生成单位的运行时能力位——读-改-写三步，抄 `ClimbingMachineDetachment.cs:241-243` 的结构：

```csharp
Agent unit = Mission.GetAgentFromIndex(3, canBeNull: true);
if (unit == null)
{
    Debug.Print("no agent at index 3", 0);
    return;
}

// Read-modify-write: SetAgentFlags overwrites the whole set, so you must
// re-read first or you will silently drop every other flag.
if (unit.GetAgentFlags().HasAnyFlag(AgentFlag.CanAttack | AgentFlag.CanDefend))
{
    unit.SetAgentFlags((AgentFlag)((uint)unit.GetAgentFlags() & 0xFFFFFFE7u));
    Debug.Print("cleared CanAttack and CanDefend on agent " + unit.Index, 0);
}

unit.SetAgentFlags(unit.GetAgentFlags() | AgentFlag.CanBeInGroup);
Debug.Print("flags now = " + (uint)unit.GetAgentFlags(), 0);
```

演示本页最核心的那个陷阱——`CanRide` 会被控制权改写，所以它不是纯模板值：

```csharp
Agent hero = Mission.Current.MainAgent;
if (hero == null)
{
    return;
}

// Before: taken from the monster template via Monster.cs:569-579.
bool rideableFromTemplate = hero.GetAgentFlags().HasAnyFlag(AgentFlag.CanRide);

// Assigning Player runs Agent.cs:1222, which ORs CanRide into the live flags
// and rewrites Mission.MainAgent.
hero.Controller = AgentControllerType.Player;

// After: CanRide may now be set purely because of the control handover.
bool rideableAfterHandover = hero.GetAgentFlags().HasAnyFlag(AgentFlag.CanRide);
Debug.Print("template=" + rideableFromTemplate + " after=" + rideableAfterHandover, 0);
```

## 风险与边界

- **XML 属性名必须与枚举成员名逐字相同。** `Monster.cs:572-577` 用 `childNode.Attributes[value2.ToString()]` 按枚举名查属性，写成 `canattack`（小写）或 `CanAttack="1"` 之外的拼写差异都会静默失效——**命中不了就跳过，不报错**。结果是能力位全 0，且没有任何日志提示。
- **`flags == AgentFlag.X` 永远不要用。** 现实中几乎总有 `IsHumanoid` 同时置位，单个位判等必然假阴性。用 `(flags & X) != AgentFlag.None` 或 `flags.HasAnyFlag(X)`。
- **`CanRide` 不是纯模板值。** `Agent.cs:1222` 在控制权设为 `Player` 时自动打开它。用它判断「这个单位设计上能不能骑」是错的。
- **`HasAnyFlag` 对组合判断同样成立。** `ClimbingMachineDetachment.cs:241` 的 `HasAnyFlag(AgentFlag.CanAttack | AgentFlag.CanDefend)` 判的是「至少有一个」，不是「两个都有」。要判「两个都有」必须显式写两次位与判零。
- **预留位存在。** `0x40000` 与 `0x20000`–`0x80000` 之间存在空洞。`Enum.GetValues` 穷举覆盖不到它们；反过来，掩码常量写成 `uint`（带 `u` 后缀）是必须的，否则 `uint & int` 编译失败——`0xFFFFFFE7u` 就是这个原因。
- **运行时改写是整体覆盖，不是增量。** `Agent.SetAgentFlags`（`Agent.cs:2461`）直接 `MBAPI.IMBAgent.SetAgentFlags(GetPtr(), (uint)agentFlags)`，**你传进去的整个位集都会生效**。忘了读-改-写就会把别人的位清空。
- **非人形单位被强制交给 AI。** `Agent.cs:5172` 用 `IsHumanoid` 判断，与 `CanRide`/`CanAttack` 的语义无关但常被一起误用。配怪物时漏掉 `IsHumanoid` 的后果是控制权被覆盖。
- **`Monster.Flags` 只是模板值。** 怪物 XML 给的是初始值；运行中改过的值要用 `Agent.GetAgentFlags()` 读，两者会分叉。
- **不要与 [AgentState](../AgentState) / [AgentControllerType](../AgentControllerType) / [AgentMovementMode](../AgentMovementMode) 混淆。** 这四个枚举正交：`AgentFlag` 是能力，`AgentState` 是生命，`AgentControllerType` 是控制权，`AgentMovementMode` 是介质。混用会把「它能骑」误当成「它现在骑着」。

## 跨版本提示

`AgentFlag.cs` 在 1.4.5 里是 36 行、26 个成员（含 `None`），是该版本原始源码形态。**它与其他几个 native 镜像枚举最大的不同是没有 `DefineAsEngineStruct` 绑定**，这意味着它的成员集合由 Taleworlds 自己维护、增删自由度更大，跨版本出现新位（如 `0x40000` 被填上）的概率高于本桶其他枚举。迁移时真正要核对的是三件事：一是你自定义怪物 XML 里写的 `<Flags>` 属性名在目标版本是否仍然存在——**被删除的位在解析时会被静默忽略**；二是 `CanBeInGroup`、`MoveAsHerd` 这类影响编队与 AI 的位，其触发条件可能已挪到别的枚举上；三是高位的 `0x1000000` 之后的三个「高级战斗技巧」位属于实验性内容，最可能在版本间变动。**永远不要硬编码 `uint` 数值，改用枚举名。**

## 依赖关系

- 产生源：[Monster](../Monster) 的 `Flags` 属性，由 `Monster.cs:569-579` 解析怪物 XML 的 `<Flags>` 子节点按枚举名匹配填入
- 运行时读写：[Agent](../../mission/Agent) 的 `GetAgentFlags()` / `SetAgentFlags()`（`Agent.cs:2888` / `:2461`），底层是 `AgentHelper.GetAgentFlags` 与 `MBAPI.IMBAgent.SetAgentFlags`
- 派生快捷属性：`Agent.IsHuman`（`Agent.cs:640`）、`Agent.IsMount`（`:642`）、`Agent.IsMine`（`:636`）
- 语义包装扩展：`HasAnyFlag`（`TaleWorlds.Library` 的枚举扩展，按位与非零，非 `Enum.HasFlag`）
- 战斗逻辑消费：`AgentStatCalculateModel.cs:210`、`AttackInformation.cs:169/185/213`、`ClimbingMachineDetachment.cs:241-243`、`HumanAIComponent.cs:229`、`Formation.cs:1251`、`Mission.cs:3025`
- 控制权联动：[AgentControllerType](../AgentControllerType) 的 setter 会置上 `CanRide`
- 正交枚举：[AgentState](../AgentState)、[AgentMovementMode](../AgentMovementMode)
- 桶首页：[core-extra API 分区](../)