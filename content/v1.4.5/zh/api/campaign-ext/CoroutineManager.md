---
title: "CoroutineManager"
description: "引擎自带的、由 tick 驱动的 C# 迭代器调度器：把返回 IEnumerator<CoroutineState> 的 CoroutineDelegate 交给它，每次 Tick() 推进所有已注册协程一步，迭代器一旦返回 false 就自行移除。网络层以及需要按帧同步、可恢复流程的任务/战役代码都会用它。"
---
# CoroutineManager

**Namespace:** TaleWorlds.Network  
**Module:** TaleWorlds.Network  
**Type:** `public class CoroutineManager`  
**Base:** 无  
**File:** `TaleWorlds.Network/CoroutineManager.cs`

## 概述

`CoroutineManager` 是一个迷你版的协程调度器，调度对象就是 C# 的迭代器方法。你不用为它写类：只要写一个符合 `CoroutineDelegate` 签名的方法——`IEnumerator<CoroutineState> Something()`——再用 `AddCoroutine` 注册即可。管理器把每次注册包进一个 `Coroutine` 包装体，并靠一个外部驱动来推进它：每次调用 `Tick()` 都会遍历列表，把还没启动过的协程启动起来，对其枚举器调用**恰好一次** `MoveNext()`，然后把返回的 `CoroutineState` 重新 `Initialize` 一遍并回填 manager 引用。当 `MoveNext()` 最终返回 `false`，该包装体就从列表里被移除，同时循环下标回退一位，避免漏掉被移除元素后面的项。这里没有 `Start()`、没有 `Stop()`、也没有任何句柄——生命周期完全是“直到你的迭代器自己返回 false”。

关键的设计后果是：**它不是**靠 `yield return null` 驱动的 `System.Collections.IEnumerator`。泛型参数是 `CoroutineState`，所以每一次 `yield return` 都必须交出一个 `IsFinished` 可读的状态对象。这个状态对象还会通过 `Initialize(CoroutineManager)` 拿到管理器本身，暂停中的协程因此无需任何静态引用就能继续登记后续工作或查询 `CurrentTick`。进度的单位是管理器 tick（`CurrentTick`，每次 `Tick()` 加一），不是秒。

## 心智模型

把它想成**“一个持有被暂停迭代器列表的 for 循环，由列表的持有者来步进”**：

- **谁来创建它**：是循环的持有者，而不是引擎。v1.4.5 里 `Campaign` 与 `Mission` 都不会替你构造它。需要协程就得自己 new 一个 manager，存成字段，并在自己的 tick 钩子里调用 `Tick()`。
- **典型调用顺序**：在初始化钩子里构造 → 随时 `AddCoroutine(...)` → 由唯一的拥有者每次一帧调用一次 `Tick()` → 协程自行消亡。这里没有显式的销毁流程；丢掉 manager 引用就够了，但任何处于迭代中途的协程只是被丢弃，既不会继续跑，也不会收到任何通知。
- **常见误用陷阱 1 —— yield 错类型**。`yield return null` 在 `IEnumerator<CoroutineState>` 里就是 yield 一个 `null`，而 `Tick()` 随后执行 `coroutine.CurrentState = enumerator.Current as CoroutineState;` 再 `coroutine.CurrentState.Initialize(this)`，于是下一次检查时必然抛 `NullReferenceException`。每一次 `yield return` 都必须是真实的 `CoroutineState`。
- **常见误用陷阱 2 —— 重入**。`Tick()` 按下标遍历 `_coroutines`，移除时执行 `i--`。协程在自己的 `Tick()` 期间调用 `AddCoroutine` 是安全的（追加到末尾）；但若某种方式触发了嵌套的 `Tick()`，同一列表会在遍历中途被改动，可能跳过或重复推进元素。管理器只能由一个地方驱动。
- **常见误用陷阱 3 —— 把它当带调度的框架**。这里没有任何延时/等待秒数的原语。“等待”意味着“返回一个 `IsFinished` 为 false 的 `CoroutineState`，坚持 N 个 tick”，这个计数器得由状态对象自己维护。

## 何时使用 / 何时不要用

**该用它的情况：**
- 需要跨若干 tick 存活的分步逻辑，又不想用线程或 `async` 续体——比如“等某个 agent 死亡，然后施加一个效果”这类任务逻辑。
- 希望流程写成一段线性可读的方法，而不是一串回调。
- 写网络侧代码，需要确定性、可手动步进的时序。

**不该用它的情况：**
- 需要真正的并行或阻塞等待——它严格是单线程协作式调度。
- 需要从外部取消某个特定协程。没有句柄、没有 `Stop`、没有移除 API，唯一的出路是让协程自己的迭代器跑完。
- 你现有的 tick 回调里一个 `if` 就够了。`CampaignEvents` 与 `MissionBehavior` 的 tick 本来就是“每帧被调一次的方法”，为三行代码套一层协程只是徒增机器。

## 依赖关系

- [Coroutine](../Coroutine) —— 内部包装体，为每个已注册协程保存 `IsStarted`、`Enumerator`、`CurrentState` 与委托。
- [CoroutineState](../CoroutineState) —— 每次 `yield return` 必须产出的抽象类型；它暴露 `IsFinished`，并通过 `Initialize` 收到管理器。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 战役侧最常见的 manager 持有者：注册一个 behavior，把 manager 存成字段，在 `DailyTick` / 事件回调里步进。
- [MissionLogic](../../mission-ext/MissionLogic) —— 任务侧对应的持有者，会在自己的任务逻辑里驱动 manager。
- [MessageContract](../MessageContract) —— `TaleWorlds.Network` 中的同类；网络层把手工步进的协程与显式序列化的消息配对使用。

## 主要成员

### `public void AddCoroutine(CoroutineDelegate coroutineMethod)`

注册一个委托。用全新的 `Coroutine` 包住它，把 `IsStarted` 置为 `false`，追加进内部列表。
- **何时调用**：第一次 `Tick()` 之前的任意时刻，或期间。委托在这里不会被执行——直到管理器步进时才真正调用。
- **返回值**：无。拿不到引用，也就没法之后取消这次注册。
- **副作用**：`CoroutineCount` 立刻加一，尽管还什么都没跑。

### `public void Tick()`

唯一的泵。按列表顺序对每个条目：
1. 若 `IsStarted` 为 `false`，置为 `true`、置位局部变量 `flag`，并调用委托拿到 `IEnumerator<CoroutineState>`。也就是说委托方法体在第一个 tick 就已经跑到它的第一个 `yield return`。
2. 若 `flag`（刚启动）**或** `coroutine.CurrentState.IsFinished` 为 `true`，就调用 `MoveNext()`。
3. 若 `MoveNext()` 返回 `false`，移除该包装体并把循环下标回退。
4. 否则保存 `Enumerator.Current as CoroutineState`，并调用 `CurrentState.Initialize(this)`。

循环结束后 `CurrentTick` 加一。
- **关键语义**：刚启动的协程在它第一个 tick 里会被推进**两次**（一次用来取得枚举器，一次是真正的第一步）。当你的步骤带有副作用时，要把这点算进预算。
- **关键语义**：对于委托刚被调用、但枚举器尚未产出任何内容的包装体，`CurrentState` 是 `null`；在第 4 步至少跑过一次之前不要读它。

### `public int CurrentTick { get; private set; }`

自构造以来 `Tick()` 的单调递增计数。协程唯一的时钟；想“等三个 tick”的 `CoroutineState` 会在 `Initialize` 时记下当前值，再与 `CoroutineManager.CurrentTick` 比较。
- setter 是私有的，外部无法重置或快进。

### `public int CoroutineCount => _coroutines.Count`

尚未结束的注册数量。适合在测试里做廉价断言（“跑 N 个 tick 之后，这里应该归零”）。

### `public CoroutineManager()`

以空列表、`CurrentTick = 0` 创建管理器。没有 `Reset()`，所以同一个管理器无法复用于第二个战役或任务——请新建一个。

## 使用示例

### 示例 1 —— 等待某个 agent，然后施加一个效果

```csharp
using System.Collections;
using TaleWorlds.Engine;
using TaleWorlds.Network;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    public class WaitThenDebuffState : CoroutineState
    {
        private readonly Agent _agent;
        private int _remainingTicks;

        public WaitThenDebuffState(Agent agent, int ticks)
        {
            _agent = agent;
            _remainingTicks = ticks;
        }

        protected internal override bool IsFinished => _agent == null || _agent.IsDead();

        protected internal override void Initialize(CoroutineManager coroutineManager)
        {
            base.Initialize(coroutineManager);
            if (--_remainingTicks <= 0)
            {
                _agent?.TakeDamage(10f);
            }
        }
    }

    public class StaggerController : MissionLogic
    {
        private readonly CoroutineManager _coroutines = new CoroutineManager();

        public void Begin(Agent agent)
        {
            _coroutines.AddCoroutine(StaggerSequence(agent));
        }

        private IEnumerator<CoroutineState> StaggerSequence(Agent agent)
        {
            yield return new WaitThenDebuffState(agent, 120);
        }

        public override void MissionTick(float dt)
        {
            _coroutines.Tick();
        }
    }
}
```

### 示例 2 —— 用 `CurrentTick` 当时钟，轮询直到条件成立

```csharp
private IEnumerator<CoroutineState> WaitForFlag(Flag flag)
{
    while (!flag.IsSet())
    {
        yield return new TickWaitState();
    }
    Campaign.Current.CampaignBehaviorManager.DoSomethingAfterWait();
}

private sealed class TickWaitState : CoroutineState
{
    private int _tickAtEntry;

    protected internal override bool IsFinished => true;   // 每次泵都准备推进

    protected internal override void Initialize(CoroutineManager coroutineManager)
    {
        base.Initialize(coroutineManager);
        _tickAtEntry = coroutineManager.CurrentTick;         // CoroutineManager 在基类上是 protected
    }
}
```

## 风险与崩溃边界

- **存档序列化**：`CoroutineManager` 完全没有任何存档钩子——没有 `SyncData`，不参与 `IDataStore`，不会往战役存档里写任何东西。任何在途协程（它的局部变量、它挂起的 `CoroutineState`）在存档并重载后立刻消失，而且没有任何状态对象会收到通知。如果这段流程需要跨存档/读档存活，就从 `CampaignBehaviorBase` 的 `RegisterEvents` / `SyncData` 路径重新进入，而不是从协程里进入。
- **跨域依赖**：类型位于 `TaleWorlds.Network`，但自身没有任何网络行为。任务代码引用它没问题，但要注意任务逻辑按渲染帧 tick、战役逻辑按战役 tick——一个 manager 必须只属于一个域、只由那个域步进，否则会出现重复步进或永不推进。
- **加载时序**：`CoroutineState.Initialize(CoroutineManager)` 是在 `Tick()` 内部调用的，所以回填的 manager 引用只有在状态至少被 yield 过一次之后才有效。在自己的构造函数里解引用 `CoroutineManager` 时它还不存在。
- **ID 稳定性**：这里没有 ID，但 `CurrentTick` 事实上就是“何时”的标识——绝不要持久化它，也不要假设它在重启或域切换后仍然连续。
- **`yield return null` 是硬崩溃**，而不是安静地什么都不做：见上文心智模型。`MoveNext()` 成功后 `Tick()` 会无条件解引用 `CurrentState`。
- **无界增长**：除了协程自己跑完，没有任何东西会移除协程。一个 `while (true)` 且永远 yield 非完成状态的迭代器会让 `Tick()` 每帧都更慢，而且永远不会被回收。
- **移除时的下标回退**：`i--` 正是让遍历保持正确的那一步；任何自己重写管理器而忘了它的 mod，都会漏掉刚结束元素的下一项。

## 跨版本提示

- **v1.3.x → v1.4.5**：本类及其成员，以及 `Coroutine` / `CoroutineState` / `CoroutineDelegate` 三件套均未变化。它从未被基础游戏接进 `Campaign` 或 `Mission`，始终是给游戏与 mod 代码自用的步进设施。
- **v1.4.5**：`CurrentTick` 为 `{ get; private set; }`，在整份列表处理完之后于 `Tick()` 末尾递增。调度器其余部分无变化。

## 参见

- ↑ 父级目录：[Campaign-Ext API 索引](../)
- ↔ 同级：[Coroutine](../Coroutine) —— 单个已注册迭代器的状态持有体
- ↔ 同级：[CoroutineState](../CoroutineState) —— 每次 `yield return` 必须产出的抽象状态
- ↔ 同级：[MessageContract](../MessageContract) —— `TaleWorlds.Network` 步进模型的另一半
- ↔ 同级：[CampaignBehaviorBase](../CampaignBehaviorBase) —— 步进 manager 的战役侧持有者
- ↔ 同级：[MissionLogic](../../mission-ext/MissionLogic) —— 任务侧持有者
