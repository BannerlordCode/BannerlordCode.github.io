---
title: "AsyncRunner"
description: "游戏内自动化测试探针的线程式契约：三个抽象方法 Run/SyncTick/OnRemove 组成「后台线程跑 + 主线程轮询 + 收尾」的生命周期，全树只有 TestContext 一个消费者。"
---

# AsyncRunner

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public abstract class AsyncRunner`
**Base:** 无（隐式 `System.Object`；不实现任何接口）
**File:** `TaleWorlds.Library/AsyncRunner.cs`（17 行 / 334 字节）

## 概述

`AsyncRunner` 是引擎自带的**自动化测试探针**的三方法契约，一共 17 行：`public abstract void Run();`、`public abstract void SyncTick();`、`public abstract void OnRemove();`。三个方法全是 `abstract`，没有字段、没有属性、没有构造函数、没有虚方法、没有事件。

全树唯一的消费者是 `TaleWorlds.Library/TestContext.cs`。`grep -rnw "AsyncRunner" bannerlord-1.3.0 --include=*.cs` 命中 6 处，全部集中在那个文件里：`_asyncRunner` 字段声明、`(obj as AsyncRunner)` 两次转型、`typeof(AsyncRunner).IsAssignableFrom(type)` 的一次类型筛选、`typeof(AsyncRunner).Assembly` 的一次程序集定位。**游戏运行时没有任何一行代码使用它**——它只在带测试参数启动游戏时才有意义。

## 心智模型

把它当成**「一条后台线程 + 一个主线程轮询钩子」的握手协议**就对了。三段式：

**第一段，`Run()` 在专属线程上跑。** [TestContext](../TestContext) 第 59–67 行的形状是：`_asyncRunner` 非空就 `new Thread(delegate() { this._asyncRunner.Run(); })`，把线程名设成 `"ManagedAsyncThread"`，然后 `Start()`。**注意没有任何同步原语**——`Run()` 与主线程之间只有 `SyncTick` 这一个会合点，而且 `SyncTick` 本身也是无参、无锁的。

**第二段，`SyncTick()` 在主线程每帧被调。** `TestContext.TickTest(float dt)` 的实现是 `if (this._asyncThread != null && this._asyncThread.IsAlive && this._asyncRunner != null) this._asyncRunner.SyncTick();`。三个条件缺一不可，最容易忽略的是中间那个：**后台线程一退出，`SyncTick` 立刻不再被调用**。所以任何跨线程状态交换都必须在 `SyncTick` 里收尾，不能指望「下一帧还会来」。

**第三段，`OnRemove()` 在 1.3.0 里是死方法。** `grep -rn "OnRemove()" bannerlord-1.3.0 --include=*.cs` 只命中 `AsyncRunner.cs` 第 15 行的声明本身，**零调用者**。[TestContext](../TestContext) 的收尾走的是 `FinalizeContext()`，它只做 `_asyncThread.Join()` 然后把四个字段置 null，**不会调 `OnRemove()`**。所以你可以实现它，但游戏不会调；想在测试结束时清理资源，得自己在 `SyncTick` 里判断线程已死并收尾。

还有一个必须知道的**发现机制**：`TestContext.GetAsyncRunnerConstructor(string)` 是按**类名**在全程序集里扫的——遍历所有引用了 `TaleWorlds.Library` 的程序集，对每个类型判断 `type.Name == asyncRunner && typeof(AsyncRunner).IsAssignableFrom(type)`，命中就取无参构造器。所以你的类名必须与命令行里给的名字**一字不差**，且必须有 public 或 non-public 的无参构造器。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Run` | `public abstract void Run();` | 后台线程主体。`TestContext` 用一个名为 `ManagedAsyncThread` 的 `Thread` 调它并立即 `Start()`，**不等待、不捕获异常**。没有超时、没有取消、没有返回值——方法返回即代表测试跑完。 |
| `SyncTick` | `public abstract void SyncTick();` | 主线程每帧轮询钩子，**无参数**（拿不到 `dt`）。只在后台线程仍 `IsAlive` 时被调。这是后台线程把结果交回主线程的唯一会合点，需要自己做同步。 |
| `OnRemove` | `public abstract void OnRemove();` | 声明上的收尾钩子，但 **1.3.0 全树零调用者**。`TestContext.FinalizeContext()` 走的是 `Thread.Join()` 加字段置空，不经过它。实现了也不会被自动调。 |

## 真实示例

最直接的实现：后台线程准备数据，主线程每帧消费，跑完就停（形状照 `TestContext` 的线程构造与 `TickTest` 的三轮判断）：

```csharp
public class MyScenarioRunner : AsyncRunner
{
    private volatile bool _finished;
    private int _tickCount;

    public override void Run()
    {
        for (int i = 0; i < 1000; i++)
        {
            _tickCount = i;
            Thread.Sleep(1);
        }
        _finished = true;
    }

    public override void SyncTick()
    {
        if (!_finished)
        {
            Debug.Print("still running, step = " + _tickCount, 0);
            return;
        }
        Debug.Print("scenario done at step " + _tickCount, 0);
    }

    public override void OnRemove()
    {
        // 1.3.0 里游戏不会调它；想在这里清理就只能自己显式调。
        Debug.Print("on remove", 0);
    }
}
```

跨线程把结果交回主线程——因为 `SyncTick` 是无锁的，唯一正确的做法是原子交换：

```csharp
public class AtomicExchangeRunner : AsyncRunner
{
    private string _pending;

    public override void Run()
    {
        Interlocked.Exchange(ref _pending, "payload from worker");
    }

    public override void SyncTick()
    {
        string value = Interlocked.Exchange(ref _pending, null);
        if (value != null)
        {
            Debug.Print("received on main thread: " + value, 0);
        }
    }

    public override void OnRemove()
    {
    }
}
```

如果你要的是 `Task` 风格而不是线程风格，那应该派生另一个类而不是它——[AwaitableAsyncRunner](../AwaitableAsyncRunner) 只有两个成员（`RunAsync()` 返回 `Task`、`OnTick(float dt)`），**没有 `SyncTick`，也没有 `OnRemove`**：

```csharp
public class MyTaskRunner : AwaitableAsyncRunner
{
    public override async Task RunAsync()
    {
        await Task.Delay(100);
        Debug.Print("async work finished", 0);
    }

    public override void OnTick(float dt)
    {
        Debug.Print("tick dt = " + dt, 0);
    }
}
```

## 风险与边界

- **游戏运行时完全不用它。** 唯一的驱动方是 [TestContext](../TestContext)，也就是带测试参数启动时才会走到。放进 mod 的正常运行路径不会有任何效果。
- **`OnRemove()` 是死方法。** 1.3.0 全树零调用者，`FinalizeContext()` 不经过它。实现了不会被调，清理逻辑必须塞进 `SyncTick` 或自己管。
- **`SyncTick` 会突然停止。** 条件里有 `_asyncThread.IsAlive`，后台线程一退出就不再调。任何「最后一帧收尾」的逻辑有落空风险。
- **`SyncTick()` 没有 `dt`。** 想要帧间隔就得自己用 `DateTime.Now` 记时，或者改用 [AwaitableAsyncRunner](../AwaitableAsyncRunner) 的 `OnTick(float dt)`。
- **零同步。** `Run` 与 `SyncTick` 跨线程共享状态，`AsyncRunner` 不提供任何 `lock` / `volatile` / `Interlocked` 语义。字段要自己标 `volatile` 或走 `Interlocked`。
- **异常不捕获。** `Run()` 里抛出的异常会直接终止后台线程，`SyncTick` 随之静默停摆（因为 `IsAlive` 变 false），表现为「测试什么都没发生」而不是报错。
- **发现靠类名字符串匹配。** `TestContext` 用 `type.Name == asyncRunner` 精确匹配，再要求 `typeof(AsyncRunner).IsAssignableFrom(type)` 且有无参构造器。类名写错、或者被放进不引用 `TaleWorlds.Library` 的程序集，都扫不到。
- **`SyncTick` 与 `Run` 可并发改同一字段。** 这是本类型唯一的正确用法也是唯一的大坑：后台线程写、主线程读，中间没有任何 happens-before 保证。
- **与 [AwaitableAsyncRunner](../AwaitableAsyncRunner) 是二选一，不是继承关系。** 两者没有公共基类，`TestContext` 分别用 `obj as AsyncRunner` 和 `obj as AwaitableAsyncRunner` 转型，一个实例只会命中其中一个。

## 跨版本提示

`AsyncRunner.cs` 在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵树里**逐字节一致**：都是 334 字节、17 行、3 个 `public abstract void` 方法、零成员其它。跨 1.3 → 1.5 三个大版本零变化。

配套的 [AwaitableAsyncRunner](../AwaitableAsyncRunner) 同样是稳定的（`RunAsync()` + `OnTick(float dt)` 两个抽象方法）。**结论：这两个测试契约类型是整个 `TaleWorlds.Library` 里最不会变的表面之一**，升级不会让你的自定义 runner 编译不过。

变的是 `TestContext` 内部——它是这套契约的实际驱动方，且随测试框架演进。但它对本类型只有 `Run` / `SyncTick` 两个调用点，`OnRemove` 至今没人调。

## 依赖关系

- 唯一驱动方：[TestContext](../TestContext) 的构造函数负责 `new Thread(...)` 起线程并调 `Run()`，`TickTest(float dt)` 每帧调 `SyncTick()`，`FinalizeContext()` 只做 `Thread.Join()` 与字段置空
- 平行的另一条路：[AwaitableAsyncRunner](../AwaitableAsyncRunner) 是 `Task` 风格的对应物，被同一个 `TestContext` 用 `as` 转型并列检查
- 发现机制的底座：`typeof(AsyncRunner).Assembly` 被用来反查哪些程序集引用了 `TaleWorlds.Library`，所以自定义 runner 必须放进引用该程序集的模块里
- 常规依赖：日志输出走 [Debug](../Debug) 的 `Print(string, int)` 与 `FailedAssert`
- 桶首页：[core-extra API 分区](../)