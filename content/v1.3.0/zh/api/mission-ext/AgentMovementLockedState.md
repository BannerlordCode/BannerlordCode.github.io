---
title: "AgentMovementLockedState"
description: "Agent 内嵌于顶层的三值枚举（None/PositionLocked/FrameLocked），带 EngineStruct 标记，直接由 native 上报；决定 SetTargetPosition 一类同步接口是走网络还是走本地插值。"
---

# AgentMovementLockedState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum AgentMovementLockedState`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/AgentMovementLockedState.cs`（全文 17 行）

## 概述

`AgentMovementLockedState` 只有三个值：`None`、`PositionLocked`、`FrameLocked`。它的唯一作用是回答一个问题：**这个 Agent 的「目标位置/朝向」现在由谁说了算**。

它带一个引擎标记：

```csharp
[EngineStruct("Agent_movement_locked_state", true, "amls", false)]
public enum AgentMovementLockedState
```

`true` 表示它是**声明为枚举**（不是位标志）的引擎结构体，native 侧的别名是 `amls`。这很重要：它是三值的互斥状态，不是可以按位或的位掩码——`PositionLocked | FrameLocked` 在 C# 里能编译（枚举的 `|` 运算符存在），但得到的值 3 在 native 侧没有任何意义，而且 `!=` 比较会同时对两个值返回 false，导致 [Agent](../../mission/Agent) 内部那串 `if / else if` 判断全部落空。

托管层没有任何地方「设置」这个状态。唯一的读取路径是 [Agent](../../mission/Agent) 的只读属性：

```csharp
// Agent.cs:456
public AgentMovementLockedState MovementLockedState
{
    get { return this.GetMovementLockedState(); }
}
```

`GetMovementLockedState()`（`Agent.cs:5580`）转手调 `MBAPI.IMBAgent.GetMovementLockedState(this.GetPtr())`，**值完全由 native 决定**。

## 心智模型

把它当成**「Agent 的移动是否被脚本接管」的只读指示灯**。托管层的角色是读它来决定「我这次写目标位置，该不该广播出去」。

规则只有两条，但第二条是整页的核心。

**规则一：写入路径有同步版和非同步版，锁不锁决定走哪条。** [Agent](../../mission/Agent) 上有两组目标位置写入接口：

- `SetTargetPositionSynched(ref Vec2 targetPosition)`（`Agent.cs:2168`）——开头就是 `if (this.MovementLockedState == AgentMovementLockedState.None || this.GetTargetPosition() != targetPosition)`。**没锁**（`None`）时条件恒真，写入本地并由服务器广播 `SetAgentTargetPosition` 消息；**锁了**且目标未变时直接跳过。
- `SetTargetPositionAndDirectionSynched(ref Vec3 targetDirection)`（`Agent.cs:2190`）——同样的守卫，但比的是朝向。
- `ClearTargetFrame()`（`Agent.cs:3986`）——`MovementLockedState != None` 时才会真正调 `ClearTargetFrameAux()` 并广播 `ClearAgentTargetFrame`。

所以：**移动被锁期间，托管层的清空/同步写入会被静默跳过**。这是给「位置由传送、坐骑动画或物理接管」的场景用的，脚本不该跟它抢。

**规则二（最实用的一条）：三种锁态在 `TickParallel` 里走三段不同的插值。** 这段逻辑完整地写在 `Agent.TickParallel`（`Agent.cs:4936-4966`）里：

```csharp
Vec2 vec = (this.MovementLockedState != AgentMovementLockedState.None)
    ? this.GetTargetPosition()
    : this.LookFrame.origin.AsVec2;
Vec3 vec2 = (this.MovementLockedState != AgentMovementLockedState.None)
    ? this.GetTargetDirection()
    : this.LookFrame.rotation.f;
AgentMovementLockedState movementLockedState = this.MovementLockedState;
if (movementLockedState != AgentMovementLockedState.PositionLocked)
{
    if (movementLockedState == AgentMovementLockedState.FrameLocked)
    {
        this._checkIfTargetFrameIsChanged = (this._lastSynchedTargetPosition != vec || this._lastSynchedTargetDirection != vec2);
    }
}
else
{
    this._checkIfTargetFrameIsChanged = (this._lastSynchedTargetPosition != vec);
}
```

读出三种行为：

- **`None`**：位置/朝向取自 `LookFrame`（渲染帧），并且**根本不检查同步变化**——`_checkIfTargetFrameIsChanged` 保持原值，不做插值。
- **`PositionLocked`**：位置取 `GetTargetPosition()`、朝向取 `GetTargetDirection()`，但**只比对位置**（`_lastSyncedTargetPosition`），朝向不参与脏检查。
- **`FrameLocked`**：位置和朝向都取目标值，两者都参与脏检查；一旦变化，用 `MBMath.Lerp(..., 5f * dt, 0.005f)` 同时对位置和朝向做插值，然后 `SetTargetPositionAndDirection`。

后面还有一层：脏标志置位后，`FrameLocked` 走 `SetTargetPositionAndDirection(vec3, vec4)`，其余走 `SetTargetPosition(...)`（`Agent.cs:4953-4965`）。

## 关键成员

| 成员 | 值 | 这个成员是做什么用的 |
| --- | --- | --- |
| `None` | 0 | 未锁定。位置/朝向以渲染帧为准；`SetTargetPositionSynched` / `SetTargetPositionAndDirectionSynched` 正常写入并广播；`ClearTargetFrame()` 不会真正清。 |
| `PositionLocked` | 1 | 位置被脚本/传送接管。朝向仍取 `GetTargetDirection()`，但**朝向不参与脏检查**，只有位置脏时才触发一次 `SetTargetPosition` 插值。 |
| `FrameLocked` | 2 | 位置和朝向同时被接管。两者都脏检查，变化时对位置和朝向一起做 5/s 的 lerp 平滑，然后走 `SetTargetPositionAndDirection`。 |

## 真实示例

读锁态做分支，并明确把「其它取值」也纳入考虑——因为值来自 native 强转：

```csharp
using TaleWorlds.MountAndBlade;

public static bool CanScriptDriveTarget(Agent agent)
{
    AgentMovementLockedState state = agent.MovementLockedState;
    if (state == AgentMovementLockedState.None)
    {
        return true;
    }
    // PositionLocked / FrameLocked 期间同步写入会被引擎跳过，这里明确拒绝
    return false;
}
```

写目标位置之前先问一句锁态，避免「写进去了但没生效」的困惑：

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public static void MoveAgentTo(Agent agent, Vec2 target)
{
    if (agent.MovementLockedState != AgentMovementLockedState.None)
    {
        return;
    }
    agent.SetTargetPositionSynched(ref target);
}
```

`SetTargetPositionSynched` 的参数是 `ref Vec2`，所以必须用 `ref` 传一个变量，不能传字面量——这是这条调用最容易踩的编译坑。

## 风险与边界

- **它不是位标志。** `PositionLocked | FrameLocked` 能编译但值 3 无意义。`Enum.HasFlag` 在这里语义错误。要写 `(state & AgentMovementLockedState.X) != 0` 只会得到误导性的结果——按真实形状，正确的写法就是 `state == AgentMovementLockedState.X`（见上面的 `Agent.cs:4940-4948` 那一串比较，全是相等判断，没有一处位运算）。
- **托管层无法设置它。** 全文没有任何 setter、没有静态工厂、没有常量表之外的值。你只能读。mod 想「锁住」一个 Agent，必须走它依赖的原生机制（传送/动画接管），不能直接赋值。
- **值来自 native 强转，无范围校验。** `GetMovementLockedState()` 直接 `(AgentMovementLockedState)` 转 `MBAPI.IMBAgent` 的返回值。你的 `switch` 必须带 `default:`。
- **`None` 是位置/朝向的来源切换点，不是「无操作」标志。** `TickParallel` 里 `(MovementLockedState != None) ? GetTargetPosition() : LookFrame.origin` 这个三元表达式意味着——一旦锁住，数据源就从渲染帧换成了目标帧。用 `LookFrame` 做判定的代码在锁定期会读到过期数据。
- **`ClearTargetFrame()` 在锁定期是空操作。** 它内部 `MovementLockedState != None` 才调 `ClearTargetFrameAux()`，清不掉。别拿它的返回值（`void`）当成功标志。
- **不要在锁定期依赖同步写入。** `SetTargetPositionSynched` 在锁定期的守卫条件可能为 false，从而整条调用被跳过且不广播——联机上会表现为「服务端改了但客户端没动」。
- **`AgentMovementLockedState.cs` 是独立文件，不是 `Agent.cs` 里的嵌套枚举。** 这是本桶少数几个提到 `TaleWorlds.MountAndBlade` 命名空间但物理上独立的枚举；写 `using` 时和 `Agent.ActionStage`（嵌套，需写全名）不同，本类型直接写短名即可。

## 怎么用

### 怎么拿到它

`public enum AgentMovementLockedState`（`TaleWorlds.MountAndBlade/AgentMovementLockedState.cs:8`）。只读入口是 `Agent.MovementLockedState`，而且它的值来自 **native 侧强转**——所以除了三个已知成员，你还要把「其它取值」当成一种可能来写。它没有写入口：状态由引擎在脚本/传送接管时自己置上。

### 典型用法

上面「真实示例」那段是在写位置前**先问一句能不能写**。真正的用法是一个调度器：锁态不只决定「写不写」，还决定**写一个还是写两个**——`PositionLocked` 期间朝向不参与脏检查，只送位置会被引擎插值，只送朝向则完全不生效：

```csharp
public static void DriveTarget(Agent agent, Vec2 position, Vec2 direction)
{
    AgentMovementLockedState state = agent.MovementLockedState;

    if (state == AgentMovementLockedState.None)
    {
        // 位置与朝向一起送：第二个参数是 Vec3，不是 Vec2（Agent.cs:2188）
        Vec3 dir = new Vec3(direction.x, direction.y, 0f);
        agent.SetTargetPositionAndDirectionSynched(ref position, ref dir);
        return;
    }

    if (state == AgentMovementLockedState.PositionLocked)
    {
        // 位置脏检查仍会触发一次插值，朝向不参与：这里只能送位置（Agent.cs:2167）
        agent.SetTargetPositionSynched(ref position);
        return;
    }

    // FrameLocked：位置与朝向都已被脚本接管，脚本侧不该再写，也别退化成 ClearTargetFrame()
}
```

与上面「真实示例」的差别：那两段都是**单点操作**——「能不能写」返回一个 bool，或「能写才写位置」；这里是一个**按锁态分派的调度器**，同一份输入在三态下走三条不同的 API 路径，并且用相等判断而不是位运算（它是三个独立值不是位标志）。

### 最容易踩的坑

**它不是位标志。** `PositionLocked | FrameLocked` 能编译但值 3 无意义，`Enum.HasFlag` 在这里语义错误。按真实形状，正确的写法就是 `state == AgentMovementLockedState.X`——`Agent.cs` 里那一串比较全是相等判断，没有一处位运算。

## 跨版本提示

三值枚举与 `[EngineStruct("Agent_movement_locked_state", true, "amls", false)]` 标记在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 逐字一致。读取入口 `Agent.MovementLockedState` 与私有 `GetMovementLockedState()` 的形状也没变。

变化点是 `Agent.TickParallel` 里那段插值逻辑的**条件分支顺序**在后续版本里有过调整（同期 [Agent](../../mission/Agent) 的 `TeleportToPosition` 也补上了对组件回调的调用，见 [AgentComponent](../AgentComponent) 的跨版本段）。对 mod 而言结论不变：**锁定期的数据源切换和同步写入被跳过这两条行为，靠读 `MovementLockedState` 就能判断，不必依赖具体分支写法。** 写死对 `Agent.cs` 内部行号的断言在跨版本时会失效。

## 依赖关系

- 唯一读取入口：[Agent](../../mission/Agent) 的 `MovementLockedState` 只读属性 → `GetMovementLockedState()` → `MBAPI.IMBAgent.GetMovementLockedState`
- 行为影响点：[Agent](../../mission/Agent) 的 `SetTargetPositionSynched` / `SetTargetPositionAndDirectionSynched` / `ClearTargetFrame` / `TickParallel` 四处按锁态分支
- 同族的 native 通信结构：查看 [native-interop](../../../architecture/native-interop) 里 `EngineStruct` 标记与 `MBAPI` 的对应关系
- 相关枚举：[ActionCodeType](../ActionCodeType) 与 [ActionStage](../ActionStage) 描述动作维度，与「移动是否被锁」正交
- 桶首页：[mission-ext API 分区](../)