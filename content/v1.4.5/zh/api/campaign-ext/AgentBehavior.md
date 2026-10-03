---
title: "AgentBehavior"
description: "单个 agent 行为的抽象基类：持有 OwnerAgent 与 Mission 引用，提供启用/停用钩子和十四个可覆盖的默认空实现，由 AgentBehaviorGroup 调度。"
---

# AgentBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public abstract class AgentBehavior`
**Base:** 无（直接基类 `object`）
**File:** `SandBox.Missions.AgentBehaviors/AgentBehavior.cs`

## 概述

一个 mission 里的每个 agent（士兵、平民、动物）背后挂着一个 [AgentBehaviorGroup](AgentBehaviorGroup)，组里挂着若干个「行为」——走路、站岗、逃跑、聊天、巡逻、警觉、对战……**本类就是那若干个行为里每一个的抽象基类**。它自己不含任何逻辑，除了一个抽象方法 `GetDebugInfo()` 之外全是可覆盖的空实现或属性转发。

它真正提供的只有两样东西。**第一是上下文转发**：`OwnerAgent => Navigator.OwnerAgent`、`Mission`（在构造函数里从 `behaviorGroup.Mission` 抓一次，私有 setter）、`Navigator => BehaviorGroup.Navigator`、`BehaviorGroup`（`protected readonly`）。有了这四个，任何行为都能在 `Tick` 里直接读自己的 agent 与 mission，不必层层传参。**第二是生命周期**：`IsActive` 是一个带副作用的属性——它的 setter 在值真的变化时调 `OnActivate()` 或 `OnDeactivate()`。这是整个类唯一的「自动机制」，其余钩子都得由调度方主动调。

派生类必须实现的只有 `GetDebugInfo()`。其余十三个成员全是 `virtual` 且基类版本为空或返回 0/false：`GetAvailability(bool isSimulation)` 默认返回 **0f**（表示「我这条行为不参与竞选」），`Tick` / `ConversationTick` / `OnSpecialTargetChanged` / `SetCustomWanderTarget` / `OnAgentRemoved` 都是空体，`CheckStartWithBehavior()` 默认 **false**。

## 心智模型

把它当成「**一条挂在 agent 身上的状态机片段，由组来调度**」。理解它只需要看清三条约定。

第一条是**可用性竞选**。调度方（`AgentBehaviorGroup.Tick`）会问每条行为的 `GetAvailability(isSimulation)`，返回值是**权重而不是布尔**——`CautiousBehavior` 在两种状态下都给 10f、在其余状态下给 0f。**0f 就是「退出竞选」**，因为它按可用性取最大值。多个行为同分时的裁决在组那一层，本类不参与。

第二条是**启用钩子只触发一次**。`IsActive` 的 setter 有 `if (_isActive != value)` 守卫，所以重复赋同一个值不会重复调 `OnActivate()` / `OnDeactivate()`。但**这意味着派生类不能靠重复赋 `IsActive = true` 来做「每帧一次」的清理**——那种需求应该写在 `Tick` 里。反过来，**从构造函数里赋 `IsActive` 会立刻触发 `OnActivate()`**，而此时派生类的字段可能还没初始化完，这是常见的初始化顺序坑。

第三条是 **`CheckTime` 是个随机构造的 public 字段**。构造函数里 `CheckTime = 40f + MBRandom.RandomFloat * 20f;` 覆盖了声明处的初值 15f。`AgentBehaviorGroup` 有一个自己的 `protected float CheckBehaviorTime = 5f` 和 `CheckBehaviorTimer`，**两者不是同一个东西**——不要把 `behavior.CheckTime` 当成组的检查周期。

最后两个锚点。**`Mission` 的 setter 是 private**，只能在构造时赋值一次；想要 mission 的其它对象得自己从 `behaviorGroup` 或 `Navigator` 拿。**`BehaviorGroup` 是 `protected readonly`**，也就是说派生类可以把组对象存下来传给别的线程/协程，但它永远不会换。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `CheckTime` | `public float CheckTime` | **public 字段，不是只读属性**，且构造函数会把它重写成 `40f + MBRandom.RandomFloat * 20f`（覆盖声明处的 15f 初值）。每个实例的检查间隔因此不同——这是**抖动**，用来避免整个组的 agent 同步重算。它与 `AgentBehaviorGroup.CheckBehaviorTime`（`protected float = 5f`）**不是同一个量**。 |
| `BehaviorGroup` | `protected readonly AgentBehaviorGroup BehaviorGroup` | 所属行为组，`readonly` 且 `protected`。派生类可以把它传给任何地方，但换不了。`Navigator` 属性就是从它转发来的。 |
| `Navigator` | `public AgentNavigator Navigator => BehaviorGroup.Navigator` | 行为的导航器（`AgentNavigator`），寻路、感知、可疑点位置都在它身上。它是行为访问 agent 移动相关能力的入口。 |
| `OwnerAgent` | `public Agent OwnerAgent => Navigator.OwnerAgent` | 这条行为所属的 agent。**两跳转发**（behavior → group → navigator → agent），任何一环为 null 都会 NRE。所有派生类的 `Tick` 里第一行几乎都是读它。 |
| `Mission` | `public Mission Mission { get; private set; }` | 行为所属的战场，**构造时从 `behaviorGroup.Mission` 抓一次**，`private set` 意味着换不了。派生类用它加 tick action（`Mission.AddTickAction`）、读 `CurrentTime`、查 agent。 |
| `IsActive` | `public bool IsActive { get; set; }` | **唯一带自动副作用的成员**。setter 在值变化时调 `OnActivate()`（转真）或 `OnDeactivate()`（转假）。有 `if (_isActive != value)` 守卫，重复赋值不会重复触发。从构造函数里赋 `true` 会立刻进 `OnActivate()`，此时派生类字段可能尚未初始化。 |
| `构造函数` | `protected AgentBehavior(AgentBehaviorGroup behaviorGroup)` | 只做三件事：抓 `Mission`、随机化 `CheckTime`、存 `BehaviorGroup`、`_isActive = false`。**不做 null 检查**——传 null 组会在 `BehaviorGroup.Navigator` 上炸。`protected` 意味着只能由派生类调用。 |
| `GetAvailability` | `public virtual float GetAvailability(bool isSimulation)` | **竞选权重**，默认返回 `0f`（等价于「不参与」）。`isSimulation` 用来区分实时渲染与后台模拟——同一个行为在两种模式下可以给不同权重。不覆盖它就等于这条行为永不生效。 |
| `Tick` | `public virtual void Tick(float dt, bool isSimulation)` | 每帧主回调，基类为空。`isSimulation` 为真表示这一帧是后台模拟推进（不渲染），此时应避免碰表现层。 |
| `ConversationTick` | `public virtual void ConversationTick()` | 对话期间的每帧回调，基类为空。与 `Tick` 分开，说明「对话中」是行为的独立运行模式。 |
| `OnActivate` / `OnDeactivate` | `protected virtual void OnActivate()` / `protected virtual void OnDeactivate()` | 启用/停用钩子，基类为空。**只由 `IsActive` 的 setter 触发**，外部代码不应直接调（它们是 `protected`）。停用钩子是清理「启用时申请的东西」的标准位置。 |
| `CheckStartWithBehavior` | `public virtual bool CheckStartWithBehavior()` | 默认 `false`。语义是「这条行为能否作为**开局起始行为**」——组初始化时会用它挑一条让 agent 一进场就处于合理状态。 |
| `OnSpecialTargetChanged` | `public virtual void OnSpecialTargetChanged()` | 「特殊目标」变化时的通知，基类为空。给需要锁定某个目标的派生类用。 |
| `SetCustomWanderTarget` | `public virtual void SetCustomWanderTarget(UsableMachine customUsableMachine)` | 把某个可交互物设为漫游目标，基类为空。签名收的是 `UsableMachine` 而不是泛型参数，所以只对「与机器交互」这类行为有意义。 |
| `OnAgentRemoved` | `public virtual void OnAgentRemoved(Agent agent)` | 同组内某个 agent 被移除时的广播，基类为空。**注意它不是自己的 agent 被移除**——自己的 agent 被移除走的是 mission 的 `OnAgentRemoved` 流程，两者不同。 |
| `GetDebugInfo` | `public abstract string GetDebugInfo()` | **唯一的抽象成员**，派生类必须实现。`CautiousBehavior` 返回 `string.Empty`（即「我没什么可报的」）。它只在调试路径上被读。 |

## 真实示例

写一个最小行为——只需要实现 `GetDebugInfo`，其余全继承默认空实现：

```csharp
public class MyIdleLookAroundBehavior : AgentBehavior
{
    private float _elapsed;

    public MyIdleLookAroundBehavior(AgentBehaviorGroup behaviorGroup)
        : base(behaviorGroup)
    {
        // 构造函数里不要碰 IsActive —— 那会立刻进 OnActivate，
        // 而派生类字段此刻还没初始化完
    }

    public override float GetAvailability(bool isSimulation)
    {
        // 返回 0f 就是「退出竞选」；非 0 则是权重，不是布尔。
        // Navigator 是 public 字段，可能为 null，所以先判它再读 OwnerAgent
        return this.Navigator == null ? 0f : 1f;
    }

    public override void Tick(float dt, bool isSimulation)
    {
        _elapsed += dt;
    }

    protected override void OnActivate()
    {
        _elapsed = 0f;
    }

    public override string GetDebugInfo()
    {
        return "MyIdleLookAround " + _elapsed;
    }
}
```

用 `IsActive` 的副作用做「进入/退出」的成对资源管理：

```csharp
public class MyTimedBehavior : AgentBehavior
{
    public MyTimedBehavior(AgentBehaviorGroup behaviorGroup)
        : base(behaviorGroup)
    {
    }

    public override float GetAvailability(bool isSimulation)
    {
        return 1f;
    }

    public override void Tick(float dt, bool isSimulation)
    {
        if (_elapsed > 10f)
        {
            // 转假会触发 OnDeactivate 做清理
            IsActive = false;
            return;
        }

        _elapsed += dt;
    }

    private float _elapsed;

    protected override void OnActivate()
    {
        _elapsed = 0f;
    }

    protected override void OnDeactivate()
    {
        Debug.Print("behavior stopped at " + Mission.CurrentTime, 0);
    }

    public override string GetDebugInfo()
    {
        return "MyTimed";
    }
}
```

读上下文（四个转发成员在派生类里的典型用法）：

```csharp
public class MyContextReadingBehavior : AgentBehavior
{
    public MyContextReadingBehavior(AgentBehaviorGroup behaviorGroup)
        : base(behaviorGroup)
    {
    }

    public override float GetAvailability(bool isSimulation)
    {
        Agent owner = this.OwnerAgent;
        if (owner == null || this.Mission == null)
        {
            return 0f;
        }

        Debug.Print("navigator = " + this.Navigator, 0);
        Debug.Print("check time = " + this.CheckTime, 0);
        Debug.Print("group = " + this.BehaviorGroup, 0);
        return 1f;
    }

    public override string GetDebugInfo()
    {
        return "MyContextReading";
    }
}
```

把一个行为塞进组里——`AddBehavior<T>` 用 `Activator.CreateInstance(typeof(T), this)` 反射构造，所以派生类的构造器**必须在运行期能接受一个 `AgentBehaviorGroup`**；而且它**按精确类型去重**，已有同类型就返回既有实例：

```csharp
public static void InstallBehavior(AgentBehaviorGroup group)
{
    MyIdleLookAroundBehavior behavior = group.AddBehavior<MyIdleLookAroundBehavior>();

    Debug.Print("added, has behavior = " + group.HasBehavior<MyIdleLookAroundBehavior>(), 0);
    Debug.Print("active = " + behavior.IsActive, 0);

    // 再 Add 一次不会产生第二个实例
    MyIdleLookAroundBehavior again = group.AddBehavior<MyIdleLookAroundBehavior>();
    Debug.Print("same instance = " + (behavior == again), 0);
}
```

## 风险与边界

- **`Mission` 的 setter 是 private。** 只能在构造时抓一次。想换 mission 的其它对象得从 `BehaviorGroup` / `Navigator` 走。
- **`OwnerAgent` 是两跳转发。** `behavior.Navigator.OwnerAgent`；`BehaviorGroup.Navigator` 为 null 时访问 `OwnerAgent` 直接 NRE，而 `GetAvailability` 里通常第一件事就是读它。
- **构造函数不校验 `behaviorGroup`。** 传 null 组不会立刻报错，会在后续任何一次转发访问时炸。
- **`CheckTime` 是 public 可写字段，且被构造函数重写。** 声明处初值 15f 永远看不到；实际值是 `40f + MBRandom.RandomFloat * 20f`，即 40~60 之间。它与 `AgentBehaviorGroup.CheckBehaviorTime`（5f）**不是同一个周期**，别混。
- **从构造函数里设 `IsActive` 会立刻进 `OnActivate`。** 派生类字段此时可能未初始化——所有清理逻辑要么放字段初始化之后，要么改在别处激活。
- **`IsActive` 有值变化守卫。** 重复赋同值不重复触发钩子。想「每帧一次」请用 `Tick`。
- **`GetAvailability` 默认返回 0f。** 不覆盖它等于这条行为永不参与竞选——这是最常见的「我加了行为但什么都不发生」。
- **`OnAgentRemoved` 收的是「别人」。** 自己被移除走的是 mission 侧的移除流程，两者不是一回事。
- **`SetCustomWanderTarget` 的参数写死为 `UsableMachine`。** 泛型自由度为 0，只有与机器交互的行为用得上。
- **`AddBehavior<T>` 按精确类型去重。** 它先 `Activator.CreateInstance(typeof(T), this)` 造一个，再遍历已有 `Behaviors` 找 `GetType()` 相同的，**找到就直接返回既有实例、不入列**。所以重复 Add 不会产生第二个。
- **构造器形状在运行期才校验。** `AddBehavior<T>` 用 `Activator.CreateInstance(typeof(T), this)`，没有 `new()` 约束也没有编译期检查——派生类构造器签名不对要到调用那一刻才抛。
- **抽象类，且只有一个抽象成员。** 其余全可继承，`CautiousBehavior` 等七家派生类都可以再被派生。
- **不参与存档。** 行为对象随 mission 生死，不写进任何 `[SaveableField]`。

## 依赖关系

- 调度方：[AgentBehaviorGroup](AgentBehaviorGroup) 的 `AddBehavior<T>()` / `GetBehavior<T>()` / `HasBehavior<T>()` / `RemoveBehavior<T>()` / `Tick` / `GetScore` / `SetScriptedBehavior<T>()` 决定了本类型何时被创建、何时被问、何时被 Tick
- 行为装配：[BehaviorSets](BehaviorSets) 是沙盒侧集中声明「哪种角色挂哪些行为」的地方，1.4.5 的绝大多数行为都从那里进组
- 接口入口：`IAgentBehaviorManager` 的十三个 `Add*Behaviors(IAgent)` 方法最终都转调 `BehaviorSets`，再由它对本类型做 `AddBehavior<T>()`，实现见 [AgentBehaviorManager](AgentBehaviorManager)
- 上下文来源：`Agent` 与 `Mission` 分别经 `Navigator.OwnerAgent` 与构造时的 `behaviorGroup.Mission` 到达本类
- 导航能力：`AgentNavigator` 提供寻路与感知，是 `OwnerAgent` 的上一层中转
- 交互目标：`SetCustomWanderTarget(UsableMachine)` 的参数类型在 `TaleWorlds.MountAndBlade` 里，是少数几个会带外部类型进来的成员
- 同族派生：`CautiousBehavior` 是把「权重 10f / 0f + 双状态 + 计时器」用到最完整的一例，适合作为参照实现
- 桶首页：[campaign-ext API 分区](../)
