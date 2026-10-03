---
title: "AgentController"
description: "两个可写自动属性加一个空虚方法的最小挂载点：Agent.AddController 用 Activator 造它、回填 Owner/Mission 后调 OnInitialize；全程没有任何 tick 钩子。"
---

# AgentController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentController`
**Base:** 无（仅隐式 `System.Object`）
**File:** `TaleWorlds.MountAndBlade/AgentController.cs`（全文 23 行）

## 概述

`AgentController` 全文只有三个成员：

```csharp
public class AgentController
{
    public Agent Owner { get; set; }
    public Mission Mission { get; set; }
    public virtual void OnInitialize() { }
}
```

它是**沙盒赛事系统的挂载点**，不是通用组件系统。全部 1.3.0 源码树里的派生类只有三个，全在 `SandBox/Tournaments/AgentControllers/` 下：`ArcheryTournamentAgentController`、`JoustingAgentController`，以及它们共用的形状。

托管层唯一的构造入口是 [Agent](../../mission/Agent) 的 `AddController(Type)`（`Agent.cs:4234`）：

```csharp
public AgentController AddController(Type type)
{
    AgentController agentController = null;
    if (type.IsSubclassOf(typeof(AgentController)))
    {
        agentController = (Activator.CreateInstance(type) as AgentController);
    }
    if (agentController != null)
    {
        agentController.Owner = this;
        agentController.Mission = this.Mission;
        this._agentControllers.Add(agentController);
        agentController.OnInitialize();
    }
    return agentController;
}
```

## 心智模型

把它当成**「挂在单个 Agent 上的一次性初始化对象」**，然后记住它和 [AgentComponent](../AgentComponent) 的分工——这两者最容易被混为一谈。

心智模型分四块。

**第一块：它不是 tick 组件，没有 tick。** 这是与 [AgentComponent](../AgentComponent) 最本质的区别。`AgentComponent` 有 21 个虚方法，其中 `OnTick` / `OnTickParallel` 由 `Agent.Tick` / `Agent.TickParallel` 每帧遍历调用；`AgentController` **一个都没有**。它只有 `OnInitialize()` 一个虚方法，在 `AddController` 内部被调**一次**。所以「我想让控制器每帧干活」这个需求在本类上做不到——只能自己在 `OnInitialize` 里订阅别的东西（比如 `MissionBehavior` 的钩子或 `MissionLogic`），把控制器当纯状态容器用。

**第二块：构造是 `Activator.CreateInstance` + 参数less 构造要求。** `AddController` 传的是 `Type` 不是实例，所以你的派生类**必须有 public 无参构造**。`Activator.CreateInstance` 对抽象类、泛型未闭合类型、带必需构造参数的类都会抛异常，而这里的守卫只有 `type.IsSubclassOf(typeof(AgentController))`——它挡不住这些。

**第三块：`Owner` 和 `Mission` 会被引擎回填，不要自己赋值。** `AddController` 在 `OnInitialize()` **之前**就把两者填好了，所以 `OnInitialize` 里 `this.Owner` 和 `this.Mission` 保证非空。反过来，如果你绕过 `AddController` 自己 `new` 一个控制器，两个属性都是 `null`，`OnInitialize` 也不会被调——这个对象等于废了。

**第四块：取回与移除的形状不对称。**

- 取回：`Agent.GetController<T>()`（`Agent.cs:2794`），泛型 + `where T : AgentController`。
- 移除：`Agent.RemoveController(Type type)`（`Agent.cs:4252`）——注意它收的是 `Type`，**不是实例**，而且用 `type.IsInstanceOfType(this._agentControllers[i])` 判断，即**按类型继承关系匹配**。传 `typeof(JoustingAgentController)` 会移除列表里所有是该类型或子类型的控制器。返回被移除的那个实例，没找到返回 `null`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Owner` | `public Agent Owner { get; set; }` | 宿主 Agent。`AddController` 在调 `OnInitialize` 之前写入。公开可写，所以手动 new 出来的实例也能自己填——但引擎不会因此调 `OnInitialize`。 |
| `Mission` | `public Mission Mission { get; set; }` | 宿主任务。同样由 `AddController` 回填。同样公开可写。 |
| `OnInitialize` | `public virtual void OnInitialize()` | **基类实现是空的**。`AddController` 成功加入列表后立刻调一次，是这个类唯一的扩展点。想在这里启动工作，就地订阅任务级事件；`Owner` 与 `Mission` 此时已就绪。 |

## 真实示例

最标准的形状：继承、在 `OnInitialize` 里从 `Owner` 取上下文、失败路径返回 `false` 让 `AddController` 直接返回 `null`。这是官方赛事控制器的形状（`SandBox/Tournaments/AgentControllers/JoustingAgentController.cs:11`）：

```csharp
using TaleWorlds.MountAndBlade;

public class MyAgentController : AgentController
{
    public int Score { get; private set; }

    public override void OnInitialize()
    {
        base.OnInitialize();
        // Owner 与 Mission 在这里保证非空：AddController 先赋值再调 OnInitialize
        Debug.Print("controller bound to " + this.Owner.Name + " in " + this.Mission.Mode, 0);
    }
}
```

挂上去并在别处取回：

```csharp
using TaleWorlds.MountAndBlade;

public static void AttachTo(Agent agent)
{
    // 传 Type，不是实例 —— 目标类型必须有 public 无参构造
    AgentController created = agent.AddController(typeof(MyAgentController));
    if (created == null)
    {
        // 类型不是 AgentController 的子类，或 Activator 失败
        return;
    }
    ((MyAgentController)created).Score = 0;
}
```

跨对象取回与移除（`RemoveController` 按类型匹配，不是按实例）：

```csharp
using TaleWorlds.MountAndBlade;

public static MyAgentController FindAndDetach(Agent agent)
{
    MyAgentController controller = agent.GetController<MyAgentController>();
    if (controller == null)
    {
        return null;
    }
    agent.RemoveController(typeof(MyAgentController));
    return controller;
}
```

## 风险与边界

- **没有 tick 钩子。** 这是它和 [AgentComponent](../AgentComponent) 的根本差别。想每帧执行必须自己在 `OnInitialize` 里订阅别的回调来源；只写 `OnInitialize` 的控制器在挂上之后就是一块静止的状态。
- **必须有 public 无参构造。** `Activator.CreateInstance(type)` 的硬要求。带必需构造参数的控制器类会在 `AddController` 里抛 `MissingMethodException`，而外层的 `IsSubclassOf` 守卫不会拦。
- **抽象类型会抛异常。** `IsSubclassOf(typeof(AgentController))` 对抽象派生类同样返回 true，然后 `Activator.CreateInstance` 抛 `MissingMethodException`。别把 `AddController` 当成安全的动态工厂。
- **`Owner` / `Mission` 的 setter 是 public 的。** 这不意味着你可以绕开引擎。手动 `new` + 手动赋值不会让对象进入 `Agent._agentControllers` 列表，`GetController<T>` 也就找不到它——控制器对引擎而言不存在。
- **`RemoveController(Type)` 按类型继承关系匹配，不是按引用。** `IsInstanceOfType` 意味着传基类类型会连带移除所有派生类型的控制器，而且返回的是**第一个**匹配项（循环里 `RemoveAt` 后立刻 return）。要精确移除请传最派生的类型，并在移除后用 `GetController<T>()` 确认。
- **`OnInitialize` 只调一次，且只在 `AddController` 内部。** `RemoveController` 不调任何清理钩子（没有 `OnRemoved` 之类的对应物），所以你在 `OnInitialize` 里订阅的事件**退订责任全在你**——需要在别处主动做。
- **官方只有三个派生类，全在沙盒赛事。** 引擎自己的战斗/攻城逻辑不用这套机制。这说明它是给「临时赛事状态」准备的扩展点，不是通用组件框架；要给 Agent 挂常驻行为，[AgentComponent](../AgentComponent) 才是对的容器。
- **`AgentController.cs` 只有 23 行。** 不要指望从它读到生命周期契约——`AddController` / `RemoveController` / `GetController<T>` 三个调用点才是契约的真正所在。

## 跨版本提示

`AgentController` 的三个成员在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 逐字一致（23 行，两个自动属性 + 一个空虚方法）。`Agent.AddController(Type)` / `RemoveController(Type)` / `GetController<T>()` 三个入口的签名也没有变化。

变化点在**赛事侧**：海战/马上长矛等新玩法会追加新的 `AgentController` 派生类，但基类不加成员。所以你的控制器在跨版本升级时不会编译失败——除非你继承了某个官方控制器，而那个控制器自身改了成员。

如果你依赖的是 `JoustingAgentController` 这类官方派生类，注意它们在后续版本里可能被重构（状态机从 `OnInitialize` 挪到别处）。**优先自己继承 `AgentController` 而不是继承官方赛事控制器**，这样升级面最小。

## 依赖关系

- 宿主：[Agent](../../mission/Agent) 提供三个入口 `AddController(Type)` / `RemoveController(Type)` / `GetController<T>()`，并持有私有的 `_agentControllers` 列表
- 上下文：[Mission](../../mission/Mission) 会被回填到 `Mission` 属性，是回调的宿主任务
- 同族但不同用途的容器：[AgentComponent](../AgentComponent) 有 21 个虚钩子和每帧 tick，是常驻行为的正确容器；`AgentController` 只有一次性初始化
- 官方派生范例：`SandBox/Tournaments/AgentControllers/JoustingAgentController.cs` 与 `ArcheryTournamentAgentController.cs`（沙盒程序集，非引擎程序集）
- 相关枚举：[AgentControllerType](../../core-extra/AgentControllerType) 是完全不同的东西——它表示「AI / Player / None」，不是控制器对象
- 桶首页：[mission-ext API 分区](../)