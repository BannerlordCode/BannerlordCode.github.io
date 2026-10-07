---
title: "AgentMovementMode"
description: "agent 所在介质与物理开关的 byte 级位掩码：低 2 位是 Land/WaterSurface/WaterDiving 三态，第 2 位 PhysicsCheck、第 3 位 NoPhysics，Agent.MovementMode 是只读属性，值全由原生写。"
---

# AgentMovementMode

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public enum AgentMovementMode : byte` + `[Flags]`
**Base:** `System.Enum`
**File:** `TaleWorlds.Core/AgentMovementMode.cs`（全文 24 行 / 501 字节）

> 核对记录：读了 `TaleWorlds.Core/AgentMovementMode.cs`（501 B）+ `TaleWorlds.MountAndBlade/Agent.cs` 的 `MovementMode` 属性（178–192 行）、`IsOnLand` / `IsInWater` / `IsAbleToUseMachine`（3455–3480 行）+ `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/MissionScreen.cs:1220-1232` + 全树 `grep -rn -w "PhysicsCheck|NoPhysics|MovementModeMask"`。约 18 min。最难判断点：`WaterDiving = 3` 而不是 `4`，于是 `MovementMode & AgentMovementMode.WaterDiving` 在数值上**恰好等于** `MovementMode & AgentMovementMode.MovementModeMask`（都是 `& 3`）——官方就是这么拿 `WaterDiving` 当掩码用的，但它其实是三态字段的第三档，不是掩码。

## 概述

`AgentMovementMode` 只用了一个 `byte`，却塞了两类完全不同的信息：

- **低 2 位（`& 3`）：介质三态。** `None`(0) / `Land`(1) / `WaterSurface`(2) / `WaterDiving`(3)。注意这四个成员**不是 4 个独立标志位**，而是**一个 2 位字段的 4 个取值**——所以 `None` 是「未初始化/空中」，不是「什么都不在」。
- **第 2、3 位：物理开关。** `PhysicsCheck = 4` 与 `NoPhysics = 8`，各占一整位，可以和低 2 位自由组合（`1 | 4 = 5` 表示「陆地上、开启物理检查」）。

**它是一个混合体，不是纯位掩码。** 这是全树唯一一个「低 N 位当枚举、高位当 Flags」的 `AgentFlag` 家族成员，也因此是唯一带一个显式掩码常量 `MovementModeMask = 3` 的那个。

关键限制：**`Agent.MovementMode` 是只读属性。**

```csharp
public AgentMovementMode MovementMode
{
    get { return AgentHelper.GetAgentMovementMode(this._movementModePointer); }
}
```

它只有 `get`，没有 `set`。值来自原生内存的一个字节（`AgentHelper.GetAgentMovementMode` 是一次指针直读），**托管代码改不了它**。这与 [AgentFlag](../AgentFlag) 形成鲜明对比——后者有 `Agent.SetAgentFlags(AgentFlag)` 可以整体覆盖。

## 心智模型

把它当成**「我站在哪儿」+「要不要算碰撞」**这一对读数，而不是一个状态机。

**第一层，「在哪儿」是三态而不是二态。** 官方三个便捷属性是这么算的：

```csharp
public bool IsOnLand() { return (this.MovementMode & AgentMovementMode.WaterDiving) == AgentMovementMode.Land; }
public bool IsInWater()
{
    AgentMovementMode agentMovementMode = this.MovementMode & AgentMovementMode.WaterDiving;
    return agentMovementMode == AgentMovementMode.WaterSurface || agentMovementMode == AgentMovementMode.WaterDiving;
}
public bool IsAbleToUseMachine() { return (this.MovementMode & AgentMovementMode.WaterDiving) > AgentMovementMode.None; }
```

三行里都出现同一个表达式 `this.MovementMode & AgentMovementMode.WaterDiving`。**这个 `& 3` 就是「屏蔽高位物理开关、只留介质」的掩码**，而它之所以能工作，是因为 `WaterDiving = 3` 恰好等于 `MovementModeMask = 3`——**官方是借用了「三态里的最大值」这个数值来当掩码**。结果对，因为 `3` 就是 `0b11`。

由此推出你要自己读时的正确写法：

| 你想问 | 正确写法 | 别写 |
| --- | --- | --- |
| 在陆地？ | `(mode & AgentMovementMode.MovementModeMask) == AgentMovementMode.Land` | `mode == AgentMovementMode.Land`（高位的 `PhysicsCheck`/`NoPhysics` 会让它永假） |
| 在水里？ | `(mode & AgentMovementMode.MovementModeMask) >= AgentMovementMode.WaterSurface` | `mode.HasAnyFlag(AgentMovementMode.WaterDiving)`（语义错：那是掩码不是位） |
| 只是想知道介质（低 2 位）？ | `mode & AgentMovementMode.MovementModeMask` | 直接把整个 byte 当三态用 |

**第二层，「要不要算碰撞」是独立的两个高位。** `PhysicsCheck`(4) 表示参与物理检查，`NoPhysics`(8) 表示关闭物理。这两位在 1.3.0 的托管代码里**零引用**——`grep -rn -w "PhysicsCheck"` 与 `grep -rn -w "NoPhysics"` 在整个 `bannerlord-1.3.0/` 里只命中 `AgentMovementMode.cs` 自身的两行声明。**它们完全由原生层写、给原生层读**，托管侧只能观察、不能设置（因为 `MovementMode` 只读）。

**第三层，唯一一个把介质读数用到视觉层的托管点是水下摄像机。** `MissionScreen.cs:1226-1229`：

```csharp
AgentMovementMode agentMovementMode = agentToFollow.MovementMode & AgentMovementMode.WaterDiving;
if (agentMovementMode == AgentMovementMode.WaterSurface && agentToFollow.GetCurrentVelocity().y < 0f)
{
    matrixFrame.rotation.RotateAboutSide((agentMovementMode == AgentMovementMode.WaterSurface && ...) ? Math.Max(this.CameraElevation, -0.5f) : this.CameraElevation);
}
```

语义是：**摄像机跟拍的 agent 处于水面态且正在下沉时，把摄像机仰角夹到 -0.5 弧度**。它先用 `& WaterDiving` 把介质摘出来，再只判 `== WaterSurface`——注意它**不判 `WaterDiving`（水下）本身**，因为水下不需要夹仰角。

所以给 mod 的心智模型一句话：**`MovementMode` 是一份只读的环境报告，你想区分「陆地 / 水面 / 水下」必须先 `& MovementModeMask` 掩掉高位，剩下 0/1/2/3 才是可比较的三态。**

## 关键成员

| 成员 | 值 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- | --- |
| `None` | `0` | `None = 0` | 低 2 位为 00。**语义是「无介质信息」而不是「什么都不在」**——空中/未初始化状态。它同时是「掩掉高位后的零基准」，`IsAbleToUseMachine` 就是 `(mode & 3) > None`。 |
| `Land` | `1` | `Land = 1` | 低 2 位为 01：陆地。`Agent.IsOnLand()` 判它，用的是 `(mode & WaterDiving) == Land`。**不能写 `mode == Land`**，因为叠加了 `PhysicsCheck` 时实际值是 5。 |
| `WaterSurface` | `2` | `WaterSurface = 2` | 低 2 位为 10：浮在水面。`Agent.IsInWater()` 把它和 `WaterDiving` 并列为「在水里」；`MissionScreen` 的摄像机夹角逻辑也只认它这一个水面态。 |
| `WaterDiving` | `3` | `WaterDiving = 3` | 低 2 位为 11：水下。**同时它被官方借用为「介质字段的掩码」**——`(mode & WaterDiving)` 在数值上等于 `(mode & MovementModeMask)`，所以 [Agent](../../mission/Agent) 的三个便捷属性和 `MissionScreen` 都用它来剥高位。它本身仍是合法取值（水下）。 |
| `PhysicsCheck` | `4` | `PhysicsCheck = 4` | 第 2 位（`0b100`）：开启物理检查。**1.3.0 托管代码零引用**，纯原生位。它可以与低 2 位任意组合（5 / 6 / 7 都是合法值）。 |
| `NoPhysics` | `8` | `NoPhysics = 8` | 第 3 位（`0b1000`）：关闭物理。**同样托管零引用**。与 `PhysicsCheck` 语义相反，原生层自己决定互斥与否，托管侧看不到保证。 |
| `MovementModeMask` | `3` | `MovementModeMask = 3` | **掩码常量，不是状态。** 用来剥掉 `PhysicsCheck` / `NoPhysics` 两个高位。1.3.0 托管代码零引用——官方实际写的是等值的 `& WaterDiving`，所以这个更清晰的名字要靠你自己来用。写模组判断时优先用它而不是抄官方的 `& WaterDiving`。 |

**底层是 `byte`，不是 `int`。** 这一点有两个后果：一是高位只剩 6 位可用（最多到 `128`），二是 `Enum.GetValues(typeof(AgentMovementMode)).Length` 会返回 **7**（含 `None` 与 `MovementModeMask`），它不是「有多少种状态」。

## 真实示例

自己写一个「在哪个介质」的判断（这是模组最常需要的一步）：

```csharp
public class MySwimCheckLogic : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        Agent agent = Agent.Main;
        if (agent == null)
        {
            return;
        }
        AgentMovementMode raw = agent.MovementMode;
        // 先剥掉 PhysicsCheck / NoPhysics 两个高位
        AgentMovementMode medium = raw & AgentMovementMode.MovementModeMask;
        if (medium == AgentMovementMode.WaterDiving)
        {
            // 完全没入水下
        }
        else if (medium == AgentMovementMode.WaterSurface)
        {
            // 浮在水面
        }
        else if (medium == AgentMovementMode.Land)
        {
            // 陆地
        }
        else
        {
            // medium == AgentMovementMode.None：空中或尚未初始化
        }
    }
}
```

复刻官方的水下摄像机夹角逻辑（`MissionScreen.cs:1226` 的托管侧等价物）：

```csharp
public class MyUnderwaterCameraLogic : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        Agent followed = Mission.Current.MainAgent;
        if (followed == null)
        {
            return;
        }
        AgentMovementMode medium = followed.MovementMode & AgentMovementMode.MovementModeMask;
        // 官方只判 WaterSurface：人在水面且往下沉时才需要夹仰角，水下反而不夹
        bool sinking = followed.GetCurrentVelocity().y < 0f;
        if (medium == AgentMovementMode.WaterSurface && sinking)
        {
            MBInformationManager.ShowHint("水面下沉中");
        }
    }
}
```

按「介质 + 是否算物理」两段式读，直接沿用官方的便捷属性再补一个自己的：

```csharp
public class MyMachineGateLogic : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        foreach (Agent agent in Mission.Current.Agents)
        {
            if (agent == null || !agent.IsActive())
            {
                continue;
            }
            // 复用官方 IsAbleToUseMachine()：等价于 (mode & 3) > 0
            if (agent.IsAbleToUseMachine())
            {
                continue;
            }
            // MovementMode 只读，物理开关观察得到但改不了
            AgentMovementMode mode = agent.MovementMode;
            bool physicsOn = (mode & AgentMovementMode.PhysicsCheck) > AgentMovementMode.None;
            if (physicsOn && agent.IsOnLand())
            {
                // 陆地 + 物理开启 + 不能用机械（攻城器械的典型组合）
            }
        }
    }
}
```

## 风险与边界

- **`MovementMode` 只读，想改只能改源头。** `Agent.MovementMode` 只有 `get`，没有 `set`。要改介质得改地形（把 agent 挪进水里）或走原生接口——托管层没有任何写入路径。**`SetAgentFlags` 那套玩法在这里用不了。**
- **别写 `mode == AgentMovementMode.Land`。** 只要 `PhysicsCheck`(4) 或 `NoPhysics`(8) 被置上，实际值就是 5 / 9 / 13，`==` 永远为假。官方一律用 `&` 加掩码，`Agent.IsOnLand()` 也是 `(mode & WaterDiving) == Land`。**这是本类型最常见的错误写法。**
- **`WaterDiving` 被当成掩码用，但它是三态的第三档。** 官方的 `(mode & WaterDiving)` 能工作纯属数值巧合（`3 == 3`）。**你自己写代码时用 `MovementModeMask` 更诚实**，也能让读代码的人知道你在剥高位而不是在判水下。
- **`PhysicsCheck` 与 `NoPhysics` 托管零引用。** 它们由原生写、原生读。托管侧观察不到「关掉物理后会怎样」的可验证行为，也**没有任何代码会去断言它们的互斥性**。如果你的 mod 依赖某个组合（`NoPhysics` 且非 `WaterDiving`），那是在依赖原生实现细节，跨版本没有保证。
- **`byte` 限制扩展空间。** 第 4 位起是 `16`、`32`…最多到 `128`，只剩 6 位。1.3.0 用掉了 3 位（`4`、`8` 加两个掩码别名）。你自己加位时不会撞上 `int` 符号位问题，但会很快用完。
- **`MovementModeMask` 不是状态，混进枚举里会影响遍历。** 任何 `foreach (AgentMovementMode m in Enum.GetValues(...))` 都会把 `MovementModeMask` 和 `None` 当成两个合法介质处理。官方 1.3.0 没有这种遍历，你写的时候记得跳过 `None` 和 `MovementModeMask`。
- **`IsOnLand()` / `IsInWater()` / `IsAbleToUseMachine()` 是方法不是属性。** 调用时带括号：`agent.IsInWater()`。它们同时受 `NoPhysics` 影响吗？不影响——因为三个方法都先 `& 3` 掩掉了高位，物理开关怎么变都不改变它们的返回值。
- **序列化后会重置。** `MovementMode` 存在原生指针指向的内存里，不在任何 `[SaveableField]` 之下。读档回来时 agent 由原生场景重建，介质重新求值——**不要把「刚才在水里」这种状态缓存到自己的持久化数据里当作可信值**。

## 怎么用

### 怎么拿到它

它是 `public enum AgentMovementMode : byte` 加 `[Flags]`（`TaleWorlds.Core/AgentMovementMode.cs:7`）。唯一读入口是 `Agent.MovementMode`，而它是个 **get-only 属性**（`TaleWorlds.MountAndBlade/Agent.cs:184`），内部转手 `AgentHelper.GetAgentMovementMode(this._movementModePointer)` 打到原生指针上——**托管侧没有任何写入口**，写发生在引擎原生侧。所以这一页的「怎么用」只有读，没有构造。

### 典型用法

把它当能力门禁用：问「这个人现在能不能被交互 / 能不能被命中」，而不是问「他在哪个介质」——后者是上面那两段示例已经写过的：

```csharp
public static class InteractionGate
{
    public static bool CanTriggerHere(Agent agent)
    {
        // 低 2 位是介质：None=0/Land=1/WaterSurface=2/WaterDiving=3，MovementModeMask 就是 3
        AgentMovementMode medium = agent.MovementMode & AgentMovementMode.MovementModeMask;
        if (medium == AgentMovementMode.None)
        {
            // 空中或尚未初始化：此时交互、上马、寻敌全部无效，且不报错
            return false;
        }
        if (medium != AgentMovementMode.Land)
        {
            return false;
        }
        // 高位单独问，不能整体比相等：叠加后 5/6/7 都是合法值
        bool physics = (agent.MovementMode & AgentMovementMode.PhysicsCheck) == AgentMovementMode.PhysicsCheck;
        return physics;
    }
}
```

与上面「真实示例」那两段的差别：那里剥完掩码后**穷举四种介质并各自做什么**（提示、水下摄像机夹角）；这里不关心介质本身，只把它当成一个「此刻这个单位的状态是否可用」的前置门禁，并额外把 `PhysicsCheck` 高位单独取出来判断——因为 `medium == Land` 这种写法在叠加了高位之后永远不成立。

### 最容易踩的坑

**`MovementMode` 只读，想改只能改源头。** 托管侧只有 `Agent.MovementMode` 这个 get-only 属性（`Agent.cs:184`），没有 setter、没有增量方法。试图在 mod 里改介质或开物理检查是做不到的，只能改生成它的源头（动画、行为树、原生侧）。

## 跨版本提示

`AgentMovementMode.cs` 在 1.3.0（24 行 / 501 字节）与 1.3.15、1.4.6、1.4.7、1.5.3 **全部是 24 行 / 501 字节**；`grep -v Token` 逐行 diff 后 1.3.15 与 1.4.6 **完全一致**，成员、值、顺序一字未改。跨 1.3 → 1.5 三个大版本零变化，**你的 `(mode & AgentMovementMode.MovementModeMask) == AgentMovementMode.Land` 升到 1.5.3 行为一致**。

差异同样只在 `// Token:` 注释的 RID 上（1.3.0 的 `WaterDiving` 是 `0x040000CA RID: 202`，1.4.6 是 `0x040000CB RID: 203` 附近），这是同一程序集前面类型数量变化导致的编号平移，与本枚举无关。

`bannerlord-1.4.5/` 那棵树保存的是去掉了 `// Token:` 注释的精简版，只有 15 行 / 223 字节——**存储格式差异，不是类型被裁剪**。

`Agent.MovementMode` 保持只读、`AgentHelper.GetAgentMovementMode(UIntPtr)` 那次指针直读的形状在 1.3.0 → 1.5.3 全程未变。真正会随版本变的是**战斗场景是否包含水域**（海战模块的加入会让 `WaterSurface` / `WaterDiving` 从「只在测试场景出现」变成常规可用），这属于场景内容变化，不是 API 变化。

## 依赖关系

- 宿主属性：[Agent](../../mission/Agent) 的 `MovementMode`（只读）是本枚举唯一落点，`IsOnLand()` / `IsInWater()` / `IsAbleToUseMachine()` 三个便捷方法都在它之上
- 视觉层消费者：`TaleWorlds.MountAndBlade.View` 的 `MissionScreen` 用它决定水下摄像机仰角，是托管侧唯一的非 [Agent](../../mission/Agent) 使用点
- 同类位掩码：[AgentFlag](../AgentFlag) 是「纯 `[Flags]`、每个成员一位」，本枚举是「低 N 位当枚举 + 高位当 Flags」的混合体，两者用法不能互相照抄
- 掩码别名：本枚举的 `MovementModeMask = 3` 与三态最高值 `WaterDiving = 3` 数值相同，这是本页所有「借值当掩码」写法的根源
- 枚举惯例参照：[AgentAttackType](../AgentAttackType) / [AgentControllerType](../AgentControllerType) 的末尾 `Count` 哨兵在本枚举里**不存在**，因为末位 `CanDeflectArrowsWith2HSword` 那种「真实成员占满高位」的做法在本类型里不适用
- 桶首页：[core-extra API 分区](../)