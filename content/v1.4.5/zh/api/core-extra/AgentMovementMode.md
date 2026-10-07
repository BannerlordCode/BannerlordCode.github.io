---
title: "AgentMovementMode"
description: "agent 移动模式枚举，一个字节里塞了两组互不相干的位：低 2 位是 WaterSurface/WaterDiving/Land 三选一的模式值，第 3、4 位是 PhysicsCheck 与 NoPhysics 两个独立开关。判断必须先掩码，否则 HasAnyFlag(Land) 会在潜水时误判为真。"
---

# AgentMovementMode

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public enum AgentMovementMode : byte`
**Base:** `byte`
**File:** `TaleWorlds.Core/AgentMovementMode.cs`

## 概述

`AgentMovementMode` 是 agent 脚下踩着什么东西、以及是否参与物理模拟的**打包字节**。它只有 8 位（`byte`），但里面装了两组语义完全不同的东西：低两位是一个**三选一的模式值**（`Land` / `WaterSurface` / `WaterDiving`），第 3 位（`PhysicsCheck`）和第 4 位（`NoPhysics`）是两个**彼此独立的开关**。这一个字节被 native 直接持有（`TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:12` 的 `DefineAsEngineStruct(..., true, "amm", null)`——注意第二个参数是 **`true`**，即这是一个位标志集），托管侧通过 `Agent.MovementMode` 读。

它承担的是**「移动介质的唯一判定源」**这一环。战斗逻辑里判断「这个单位能不能在阵型里定位」「它是不是泡在水里」「要不要跑物理检测」，全部依赖它。它与 [AgentState](../AgentState)（生死）、[AgentControllerType](../AgentControllerType)（谁操作）是正交的三条轴。

## 心智模型

这是本页六个类型里**最容易写错的一个**，因为它的声明形式（带 `[Flags]`）和实际语义（一个掩码字段 + 两个独立位）不一致。先把字节布局画出来，这是唯一可靠的理解方式：

```
bit:  7 6 5 4 3 2 1 0
      0 0 0 N P M M
                  └─ 低 2 位 = 模式字段（MovementModeMask = 3）
                    Land = 1, WaterSurface = 2, WaterDiving = 3
              └─────┴─ 第 3 位 = PhysicsCheck (4)
        └─────────── = 第 4 位 = NoPhysics (8)
```

**低 2 位是「三选一」，不是「可以同时成立的位」。** `Land`(1)、`WaterSurface`(2)、`WaterDiving`(3) 在数值上恰好是位模式，但它们互斥：`WaterDiving` 的二进制是 `11`，它同时包含 `Land` 的 `01` 和 `WaterSurface` 的 `10`。所以「一个单位站在地上」的正确判据不是 `mode.HasFlag(Land)`，而是 `(mode & MovementModeMask) == Land`。源码里给了两种等价写法：`Agent.IsOnWater` 系列用 `(MovementMode & AgentMovementMode.WaterDiving) == AgentMovementMode.Land`（`Agent.cs:3316`），用值为 3 的 `WaterDiving` 当掩码（它恰好等于 `MovementModeMask`）；`IsInWater`（`Agent.cs:3319-3326`）先掩码再比较两步走。**`MovementModeMask` 这个常量存在的唯一目的就是提醒你必须先掩码。**

由此推出三条必须记住的结论。第一，**`HasAnyFlag(Land)` 在潜水时返回 true，这是一个真实的坑。** `WaterDiving`(=3) 的第 0 位是 1，所以 `HasAnyFlag` 对它为真。仓库里 `Agent.cs:2660` 恰恰这么写了：`if (!WalkMode || !MovementMode.HasAnyFlag(AgentFlag.Land))`——**照抄这一行会得到「潜水中的单位被判定为在陆地上」的行为**。这是官方代码里的一处已知瑕疵（该处是取反使用，最终影响有限），但足以证明这个写法不可靠。第二，**`MovementMode` 只有 getter，没有 setter。** `Agent.cs:682` 是 `public AgentMovementMode MovementMode => AgentHelper.GetAgentMovementMode(_movementModePointer);`——表达式体属性，**无 setter**。全仓库也没有 `SetAgentMovementMode` 之类的托管写入口。你只能读，想改只能改地形与浮力。第三，**`PhysicsCheck` 与 `NoPhysics` 不在模式字段里，它们在掩码之外。** 所以 `(mode & MovementModeMask)` 会把它们完全屏蔽掉——这正是你想要的行为：判断「在水里吗」不该被物理开关干扰。反过来，用整个字节判等（`mode == AgentMovementMode.Land`）则**一定会错**，因为只要同时开了 `NoPhysics`（值 9），判等就假阴性。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `None` | `None = 0` | 模式字段为 0，即「不在任何已知介质上」。注意它**不在** `MovementModeMask`(3) 的三个合法模式值（1/2/3）之列，所以 `(mode & Mask)` 得到 0 是一个可能的、需要单独处理的状态。 |
| `Land` | `Land = 1`（`0b01`） | 陆地上。**正确判据是 `(mode & AgentMovementMode.MovementModeMask) == AgentMovementMode.Land`**（`Agent.cs:3316` 的 `IsOnWater` 家族就是这么写的）。直接用 `== Land` 或 `HasFlag(Land)` 都会在带 `NoPhysics` 位时给出错误答案。 |
| `WaterSurface` | `WaterSurface = 2`（`0b10`） | 浮在水面。`Agent.IsInWater()`（`Agent.cs:3319-3326`）把它和 `WaterDiving` 合并为「在水里」，因为这两者对战斗逻辑的影响基本一致。 |
| `WaterDiving` | `WaterDiving = 3`（`0b11`） | 潜水。**它的双重身份是本页最大的陷阱来源**：既是一个合法的模式值，又在数值上等于掩码 `MovementModeMask`，因此被 `Agent.cs:3316/3321/2055` 当作掩码使用。用它当模式值时，它的第 0 位会让 `HasAnyFlag(Land)` 误判为真。 |
| `MovementModeMask` | `MovementModeMask = 3`（`0b11`） | **掩码常量，低 2 位全开。** 它存在的唯一目的就是把模式字段从 `PhysicsCheck` / `NoPhysics` 里摘出来。所有「这个单位在哪种介质上」的判断都应当写成 `(mode & MovementModeMask) == X`。 |
| `PhysicsCheck` | `PhysicsCheck = 4`（`0b100`） | 第 3 位：是否参与物理检测。与模式字段无关，被 `MovementModeMask` 屏蔽。含义由 native 侧决定，托管侧只读不写。 |
| `NoPhysics` | `NoPhysics = 8`（`0b1000`） | 第 4 位：关闭物理模拟。同样在掩码之外。**它是「用 `==` 判等会失败」的典型来源**：一个站在陆地上且关了物理的单位，值是 `Land | NoPhysics` = 9，和 `Land` 判等为假。 |
| （程序集特性）`DefineAsEngineStruct` | `[assembly: DefineAsEngineStruct(typeof(AgentMovementMode), "Agent_movement_modes", true, "amm", null)]`，`TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:12` | 绑定到 native 的 `Agent_movement_modes` 结构体，**第二个参数 `true` 明确它是位标志集**，`"amm"` 是调试缩写。与本桶其他几个枚举不同，这个 `true` 是有意义的——它就是为什么编译器允许 `|` 运算。但它**不改变「低 2 位是互斥字段」这个事实**。 |

## 真实示例

安全的判读方式：先掩码取出模式字段，再判等（结构照 `Agent.cs:3316-3326`）：

```csharp
public static class MediumClassifier
{
    public static bool IsOnLand(AgentMovementMode mode)
    {
        // Land is 1, but WaterDiving is 3 and has the Land bit set, so a bare
        // HasAnyFlag(Land) would report true for a diving unit. Mask first.
        return (mode & AgentMovementMode.MovementModeMask) == AgentMovementMode.Land;
    }

    public static bool IsWet(AgentMovementMode mode)
    {
        AgentMovementMode medium = mode & AgentMovementMode.MovementModeMask;
        return medium == AgentMovementMode.WaterSurface
            || medium == AgentMovementMode.WaterDiving;
    }

    public static bool HasPhysics(AgentMovementMode mode)
    {
        // PhysicsCheck and NoPhysics sit outside MovementModeMask, so they survive
        // the mask and can be tested on the full value.
        return mode.HasAnyFlag(AgentMovementMode.PhysicsCheck)
            && !mode.HasAnyFlag(AgentMovementMode.NoPhysics);
    }
}
```

在 mission 里读一个单位当前的模式，并对照它提供的现成谓词：

```csharp
Agent unit = Mission.Current.MainAgent;
if (unit == null)
{
    Debug.Print("no main agent", 0);
    return;
}

AgentMovementMode mode = unit.MovementMode;
Debug.Print("medium masked = " + (mode & AgentMovementMode.MovementModeMask), 0);
Debug.Print("raw byte      = " + (byte)mode, 0);

// The engine already wraps the common cases -- use these when you do not need
// the raw byte.
Debug.Print("IsOnWater path / on land = " + unit.IsOnLand(), 0);
Debug.Print("IsInWater = " + unit.IsInWater(), 0);
Debug.Print("IsAbleToUseMachine = " + unit.IsAbleToUseMachine(), 0);
```

演示为什么不能用 `==`，这是本页最实用的一段：

```csharp
AgentMovementMode plainLand = AgentMovementMode.Land;                       // 1
AgentMovementMode landNoPhysics = AgentMovementMode.Land
    | AgentMovementMode.NoPhysics;                                          // 9

Debug.Print("plain == Land      : " + (plainLand == AgentMovementMode.Land), 0);
Debug.Print("noPhysics == Land  : " + (landNoPhysics == AgentMovementMode.Land), 0);

// Both are on land, but only the masked form says so for both.
Debug.Print("masked plain       : "
    + ((plainLand & AgentMovementMode.MovementModeMask) == AgentMovementMode.Land), 0);
Debug.Print("masked noPhysics   : "
    + ((landNoPhysics & AgentMovementMode.MovementModeMask) == AgentMovementMode.Land), 0);

// And here is the trap: HasAnyFlag(Land) is true even for a diving unit,
// because WaterDiving == 3 has the Land bit set.
Debug.Print("diving HasAnyFlag(Land) : "
    + AgentMovementMode.WaterDiving.HasAnyFlag(AgentMovementMode.Land), 0);
```

## 风险与边界

- **`HasAnyFlag(Land)` 在潜水时为真。** `WaterDiving`(3) 的低位包含 `Land`(1)。仓库里 `Agent.cs:2660` 就是这么写的（`!MovementMode.HasAnyFlag(AgentMovementMode.Land)`），**不要照抄**。
- **整字节判等（`== Land`）会在带 `NoPhysics` 时假阴性。** 值 9（`Land | NoPhysics`）不等于 `Land`，虽然它确实站在陆地上。
- **只有一个字节，全部信息挤在一起。** `byte` 意味着第 5 到第 8 位没有成员占用。**不要往高位发明新位**——native 只认已定义的低 5 位，托管侧自造高位只会得到一个 native 不理解的值。
- **只有 getter，没有 setter。** `Agent.cs:682` 是表达式体属性，`AgentHelper.GetAgentMovementMode(_movementModePointer)` 读的是 native 指针。全树没有托管写入口。想改介质只能改地形、浮力或 mission 设置，**不能直接赋值**。
- **`None`(0) 不在合法模式值之列。** 掩码结果是 0 时说明单位处在引擎尚未初始化的状态，不要把它当成「不在水里」，否则会把未初始化误判成安全。
- **`MovementModeMask` 与 `WaterDiving` 数值相同（都是 3）。** 官方代码两种都用作掩码（`Agent.cs:3316` 用 `WaterDiving`，`MovementModeMask` 是同值的具名常量）。**语义上应该用 `MovementModeMask`**，可读性更好、数值上也更稳（若将来 `WaterDiving` 的值变了，`MovementModeMask` 才是那个不会错的）。
- **它和 [AgentState](../AgentState) / [AgentControllerType](../AgentControllerType) 完全正交。** 三个枚举同时存在且互不影响，不要用其中一个推断另一个。
- **`HasAnyFlag` 是 TaleWorlds 的扩展方法。** 它对 `[Flags]` 枚举做的是「按位与非零」，不是 `Enum.HasFlag`，因此不需要装箱。

## 怎么用

### 怎么拿到它

`public enum AgentMovementMode : byte`（`TaleWorlds.Core/AgentMovementMode.cs:6`）。**托管侧只读**：唯一入口是 `Agent.MovementMode` 这个 get-only 属性，转手 native 指针；没有 setter，也没有增量方法。它的两个字段语义完全不同——低 2 位是**互斥的介质模式**（1/2/3），第 3、4 位是**独立开关**（`PhysicsCheck` / `NoPhysics`）。

### 典型用法

上面「真实示例」第一段是对一个 `mode` 值做分类，第二段是读主控单位并打印现成谓词。第三种是把两个字段**合成一个业务门禁**——介质和物理是两个独立条件，缺一个都不该弹交互：

```csharp
public class InteractionGateLogic : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        Agent unit = Mission.Current.MainAgent;
        if (unit == null)
        {
            return;
        }
        // 先掩码取介质：None(0) 不在 1/2/3 之列，是需要单独处理的状态
        AgentMovementMode medium = unit.MovementMode & AgentMovementMode.MovementModeMask;
        bool onFoot = medium == AgentMovementMode.Land || medium == AgentMovementMode.WaterSurface;

        // 高位在掩码之外，存活与否要两个位一起看：开了 PhysicsCheck 且没开 NoPhysics
        bool physicsLive = unit.MovementMode.HasAnyFlag(AgentMovementMode.PhysicsCheck)
            && !unit.MovementMode.HasAnyFlag(AgentMovementMode.NoPhysics);

        // medium == None（空中/未初始化）时 both 都不成立，交互会被自然挡掉
        if (onFoot && physicsLive)
        {
            MBDebug.Print("[MyMod] 可交互：" + unit.Name);
        }
    }
}
```

与上面「真实示例」的差别：那里是把取值**分类**（在哪种介质 / 有没有物理）并分别返回布尔；这里把两个分类**合并成一个可执行决策**——介质决定「人站在哪」，物理位决定「碰撞与动画有没有在跑」，两者都通过才允许继续。三个边界（空中、关了物理、水下）因此不再需要三个 `return`，而是一条门禁。

### 最容易踩的坑

**`HasAnyFlag(Land)` 在潜水时为真。** `WaterDiving`(3) 的低位包含 `Land`(1)。仓库里 `Agent.cs:2660` 就是这么写的（`!MovementMode.HasAnyFlag(AgentMovementMode.Land)`），**不要照抄**。

## 跨版本提示

`AgentMovementMode.cs` 在 1.4.5 里是 15 行、7 个成员，是原始源码形态。1.3.x / 1.4.6 的同名文件是反编译产物，行数会明显不同。**这个枚举跨版本最需要核对的是三处**：`DefineAsEngineStruct` 的第二个参数是否仍为 `true`（若变成 `false`，说明 native 不再把它当位标志集，本页关于掩码与位运算的全部结论都要重写）；`MovementModeMask` 的值是否仍为 3（它是「低 2 位是互斥字段」这个约定的锚点，一旦改成 4 或别的值，说明模式字段的宽度变了）；以及是否新增了 `PhysicsCheck` / `NoPhysics` 之外的位。另外要注意 `Agent.cs:2660` 那处 `HasAnyFlag(Land)` 是官方现存的写法而它并不正确——**跨版本对比时如果这行消失了，不必当成「修复」，也可能是别处重构。**

## 依赖关系

- 定义来源：`TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:12` 的 `DefineAsEngineStruct`（第二参数 `true` = 位标志集）
- 唯一读入口：[Agent](../../mission/Agent) 的 `MovementMode` 属性（`Agent.cs:682`），getter-only，底层是 `AgentHelper.GetAgentMovementMode(_movementModePointer)`
- 现成语义封装：`Agent.IsOnLand()`（`Agent.cs:3316`）、`Agent.IsInWater()`（`:3319`）、`Agent.IsAbleToUseMachine()`（`:3330`）—— 优先用它们而不是自己掩码
- 战术/传送判断：`Agent.GetBaseFormationFrame`（`Agent.cs:2055`）在「在陆地或 Mission.IsTeleportingAgents」时才定位阵型
- 交互距离：`Agent.cs:2660` 附近用 `MovementMode` 决定玩家交互距离档位（该处 `HasAnyFlag` 用法不当，见风险小节）
- 位运算扩展方法：`HasAnyFlag`（`TaleWorlds.Library` 的枚举扩展，与 `Enum.HasFlag` 不同）
- 正交枚举：[AgentState](../AgentState)（生命状态）、[AgentControllerType](../AgentControllerType)（控制权）
- 桶首页：[core-extra API 分区](../)