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

## 怎么用

**怎么拿到。** 本体在 `bannerlord-1.3.0/TaleWorlds.Library/AsyncRunner.cs:6`，`public abstract class`，只有三个抽象方法、无字段、无 ctor、16 行。**你永远不应该自己 `new` 它** —— 唯一的消费者是内置测试框架 [TestContext](../TestContext)，而它是用反射把你那个实现类找出来的：

`TestContext.RunTestAux(string commandLine)`（`TestContext.cs:13`）从命令行里解析 `/runTest <类型名>`，然后 `GetAsyncRunnerConstructor`（`TestContext.cs:75`）扫过**所有引用了 `TaleWorlds.Library` 的程序集**（`TestContext.cs:96`），对每个类型做两个判定：`type.Name == <命令行里那个字符串>`，且 `typeof(AsyncRunner).IsAssignableFrom(type)` 或 `typeof(AwaitableAsyncRunner).IsAssignableFrom(type)`（`TestContext.cs:82`）。

三个成员各自由谁调，源码里写得很清楚：

| 成员 | 调用者 | 在什么条件下 |
| --- | --- | --- |
| `Run()` | `TestContext.cs:63` | 无条件，但**跑在一条新起的 `Thread` 上**，线程名固定为 `ManagedAsyncThread`（`TestContext.cs:65`） |
| `SyncTick()` | `TestContext.cs:139` | 每帧由 `TickTest(float dt)`（`TestContext.cs:135`）调，**仅当 `this._asyncThread.IsAlive`** |
| `OnRemove()` | 无 | 我在整棵 1.3.0 树里 grep 过，`TestContext.cs` 全文没有出现过这个方法名 |

**一段「能被找到」的最小实现**（无参构造是硬要求，见下）：

```csharp
// TestContext.cs:84 用 GetConstructor(..., new Type[0], null) 取构造，
// 所以必须有无参 ctor，public 或 nonpublic 都行，但不能有别的参数。
// 类名就是命令行 /runTest 后面那个字符串，按 type.Name 精确匹配。
public class MyModScenarioRunner : AsyncRunner
{
    private volatile bool _done;

    public override void Run()
    {
        // 跑在 "ManagedAsyncThread" 上；别在这里碰引擎状态。
        _done = true;
    }

    public override void SyncTick()
    {
        // 主线程，每帧一次；只在 worker 还活着时才会被调（TestContext.cs:137）。
        if (_done)
        {
            Debug.Print("[MyMod] scenario finished", 0);
        }
    }

    public override void OnRemove()
    {
        // TestContext 不调它。清理只能你自己显式做。
    }
}
```

**最常见的坑：你在 `Run()` 里抛了异常，然后发现整个测试静默挂住、什么都没有。** 两条路的错误上报是不对等的。`AwaitableAsyncRunner` 那条路被 `OnApplicationTick(float dt)`（`TestContext.cs:116`）盯着：它检查 `this._asyncTask.Status == TaskStatus.Faulted`（`TestContext.cs:118`），然后打印 `ERROR: Mono exception occurred at async Test Run`、调用 `Debug.FailedAssert` 并 `Debug.DoDelayedexit(5)`（`TestContext.cs:120`–`:130`）。而 `_asyncThread` 那条路**没有任何等价检查**——`OnApplicationTick` 里一次都没碰过 `_asyncThread`。

后果：`Run()` 里的异常不会被包装成上面那条信息，也不会触发那次延迟退出。worker 线程死掉后 `IsAlive` 变 false，`SyncTick` 从此再不被调用，`TickTest` 静默空转，而游戏继续跑。你会看到的是一个「场景永远不出结果」的测试，而不是一条报错。**所以务必在自己代码里 `try` / `catch` 住 `Run()` 的全部内容，并把异常 `Debug.Print` 出来**——这个类不会替你兜底。

第二条：`SyncTick()` 的调用是有条件的（`TestContext.cs:137`），worker 一结束它就不再被调。任何依赖 `SyncTick` 做最后清理的写法都永远不会执行——清理放 `Run()` 的末尾，或者干脆放进你自己的、显式调用的方法里。

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