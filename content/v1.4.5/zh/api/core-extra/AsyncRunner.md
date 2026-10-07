---
title: "AsyncRunner"
description: "三个抽象方法（Run / SyncTick / OnRemove）组成的测试驱动器契约。它在 1.4.5 托管源码里的唯一消费者是 TaleWorlds.Library 的 TestContext——那个用命令行 /runTest 参数反射查找实现类型的自动化测试跑测器。模组运行时不调它，战斗流程也不调它。"
---

# AsyncRunner

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public abstract class AsyncRunner`
**Base:** 无
**File:** `TaleWorlds.Library/AsyncRunner.cs`

## 概述

**先说结论：这个类型不是游戏 API，是测试基础设施。** `AsyncRunner` 是一个 10 行、3 个抽象方法的抽象类：`Run()`（在独立线程上跑）、`SyncTick()`（在主循环上推进一帧）、`OnRemove()`（收尾）。

它在 1.4.5 托管源码里的**唯一消费者是 `TaleWorlds.Library/TaleWorlds.Library/TestContext.cs`**——一个用命令行 `/runTest <TypeName>` 参数、反射扫描已加载程序集来定位实现类型的自动化测试跑测器。战斗流程、campaign 流程、mission 流程**都不调它**。

因此本页的核心任务是**说清楚它到底是什么、以及为什么你几乎不会用到它**，而不是编一个用法。

## 心智模型

把它当成**「测试跑测器与被测代码之间的一个三方法契约」**，而不是「游戏主循环的一部分」。

**心智模型的核心是那个跑测器的实际流程**（全部在 `TestContext.cs` 里）：

1. `RunTestAux(string commandLine)`（`:19-...`）解析命令行，扫出 `/runTest` 后面的字符串作为**类型名**；
2. `GetAsyncRunnerConstructor(test)`（`:77-93`）遍历 `GetAsyncRunnerAssemblies()` 返回的每个程序集的全部类型，**用 `type.Name == asyncRunner` 匹配名字**，再用 `typeof(AsyncRunner).IsAssignableFrom(type)` 或 `typeof(AwaitableAsyncRunner).IsAssignableFrom(type)` 做类型过滤，找到**无参构造器**；
3. 用反射 `Invoke` 造出实例（`:53-57`）；
4. `_asyncRunner = obj as AsyncRunner;`（`:59`）；
5. 若非 null，**新开一个名为 `"ManagedAsyncThread"` 的线程**跑 `_asyncRunner.Run()`（`:61-66`）；
6. 每一帧，跑测器在自己的主循环里调 `_asyncRunner.SyncTick()`——但**只在 `_asyncThread.IsAlive` 时**（`:137-139`）；
7. 收尾时置 null（`:154-155`）。

**这个流程有三个直接推论。** 第一，**匹配靠类型名，不是靠类型标记**——所以重名类型会被误选。**第二，`Run()` 必须能安全地跑在一个非游戏线程上**，因为它跑在 `"ManagedAsyncThread"` 里，而 `SyncTick()` 跑在另一个线程。**第三，`SyncTick()` 有存活条件**：`_asyncThread.IsAlive` 为假时根本不调，所以你的 `Run()` 一旦退出，后续的 tick 就静默停止——**没有异常，没有日志。**

**第四个推论是关于 `OnRemove()` 的：1.4.5 的 `TestContext.cs` 里根本没有调用它。** 我逐行查了这个文件里 `_asyncRunner` 的全部 7 处引用（`:11`、`:59`、`:61`、`:65`、`:137`、`:139`、`:154`），**`OnRemove` 一次都没出现**。这是一个被声明了契约但当前无人履行的方法。**实现它不会有任何效果，不实现它也不会有任何问题**——除非你把 `AsyncRunner` 用在别的宿主上。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Run` | `public abstract void Run();` | 在**独立线程**上执行的主体。`TestContext.cs:61-66` 新建 `Thread`，命名为 `"ManagedAsyncThread"`，`Start()` 后调用它。**它必须能脱离游戏主循环运行**，因为跑测器的主循环同时还在调 `SyncTick()`。**线程退出后 `SyncTick` 就不再被调用**（`:137` 的 `_asyncThread.IsAlive` 守卫）。 |
| `SyncTick` | `public abstract void SyncTick();` | 在跑测器自己的主循环上推进被测逻辑一帧。`TestContext.cs:137-139` 的条件是 `if (_asyncThread != null && _asyncThread.IsAlive && _asyncRunner != null)`。**这是双线程协作点**——`Run` 所在线程与调 `SyncTick` 的线程不同，实现时必须自己同步。 |
| `OnRemove` | `public abstract void OnRemove();` | 清理钩子。**在 1.4.5 的 `TestContext.cs` 里零调用**——该文件对 `_asyncRunner` 的 7 处引用中没有一处是它。**声明了但无人履行；实现它不产生任何可观察行为。** |
| （唯一消费者）`TestContext` | `TaleWorlds.Library/TestContext.cs:59-65`、`:137-139` | `TestContext.RunTestAux` 通过命令行 `/runTest <TypeName>` 反射定位实现，用 `as AsyncRunner` 转型后开线程跑 `Run()` 并每帧调 `SyncTick()`。**这是全树唯一的调用方。** |
| （同族类型）`AwaitableAsyncRunner` | `TaleWorlds.Library/AwaitableAsyncRunner.cs`，同样 3 个抽象方法（`RunAsync()` / `OnTick(float)`） | **测试跑测器同时接受两种契约**：`TestContext.cs:84` 的条件是 `typeof(AsyncRunner).IsAssignableFrom(type) || typeof(AwaitableAsyncRunner).IsAssignableFrom(type)`。两者是平行的、互不继承的抽象类。 |

## 真实示例

**照实说明：这个类型在 1.4.5 托管源码里没有真实的调用示例可以抄**，因为唯一消费者是反射驱动的测试跑测器。下面这段是对着 `TestContext.cs` 的真实流程写出的派生类形态，**注释里逐条标注了它对应跑测器的哪一步**：

```csharp
public class MyTestRunner : AsyncRunner
{
    private volatile bool _shouldKeepRunning;
    private int _tickCount;

    // Called on a dedicated thread named "ManagedAsyncThread"
    // (TestContext.cs:61-66). It must not touch game state directly.
    public override void Run()
    {
        _shouldKeepRunning = true;
        while (_shouldKeepRunning)
        {
            // The test body would go here. Nothing in the game engine drives
            // this loop; the runner's own loop does, via SyncTick below.
        }
    }

    // Called from the runner's main loop, but ONLY while Run's thread is
    // alive (TestContext.cs:137-139). When Run returns, this stops being called
    // silently -- no exception, no log.
    public override void SyncTick()
    {
        _tickCount++;
    }

    // Never called by TestContext in 1.4.5: the file references _asyncRunner
    // seven times and OnRemove is not among them. Implementing it changes
    // nothing observable.
    public override void OnRemove()
    {
        _shouldKeepRunning = false;
    }

    public int TickCount => _tickCount;
}
```

复刻测试跑测器的定位逻辑——**这是本类型「被谁使用」最直接的证据**（结构照 `TestContext.cs:77-93`）：

```csharp
public static class RunnerLookup
{
    // TestContext.GetAsyncRunnerAssemblies (:95-112) collects every loaded
    // assembly that references TaleWorlds.Library, then this code scans them.
    public static Type FindRunnerType(Assembly[] candidateAssemblies, string runnerTypeName)
    {
        foreach (Assembly assembly in candidateAssemblies)
        {
            foreach (Type type in assembly.GetTypes())
            {
                // Matching is by NAME, not by attribute or registration.
                if (type.Name != runnerTypeName)
                {
                    continue;
                }

                // TestContext.cs:84 accepts either contract.
                bool isRunner = typeof(AsyncRunner).IsAssignableFrom(type)
                    || typeof(AwaitableAsyncRunner).IsAssignableFrom(type);
                if (!isRunner)
                {
                    continue;
                }

                ConstructorInfo ctor = type.GetConstructor(
                    BindingFlags.Instance | BindingFlags.Static | BindingFlags.Public
                    | BindingFlags.NonPublic | BindingFlags.CreateInstance,
                    null, new Type[0], null);
                if (ctor != null)
                {
                    return type;
                }
            }
        }
        return null;
    }
}
```

## 风险与边界

- **它不是游戏 API，模组侧基本不直接调用。** 依据：`grep -rn "AsyncRunner"` 在 1.4.5 托管源码里只命中四类位置——它自己的 10 行、`AwaitableAsyncRunner.cs` 的定义、`TestContext.cs` 的 7 处引用、以及 `AssemblyInfo` 之外无。**战斗、campaign、mission 流程里没有任何一处调用它。**
- **`Run()` 与 `SyncTick()` 跑在不同线程。** `Run` 在 `"ManagedAsyncThread"`（`TestContext.cs:61-66`），`SyncTick` 在跑测器主循环（`:137-139`）。**共享状态必须自己同步。**
- **`SyncTick()` 会静默停止。** 守卫是 `_asyncThread.IsAlive`。**`Run()` 一旦返回，`SyncTick` 就不再被调用，没有任何异常或日志。** 这是最容易写出「静默卡死」的地方。
- **`OnRemove()` 在 1.4.5 无人调用。** 声明了契约但 `TestContext.cs` 一次都没调它。**实现它没有可观察效果。**
- **定位靠类型名字符串，不是靠特性或注册表。** `TestContext.cs:82` 是 `if (type.Name == asyncRunner ...)`。**两个同名类型会误匹配**，而且 `GetTypes()` 遍历的是**所有引用了 TaleWorlds.Library 的已加载程序集**——模组程序集也会被扫到。
- **必须有 public 无参构造器。** `:85-86` 的 `GetConstructor(...)` 找不到就跳过该类型。**你的类不能有带参构造器。**
- **它是抽象类，不是接口。** 两个平行抽象类（`AsyncRunner` 与 `AwaitableAsyncRunner`）互不继承，跑测器用 `||` 同时接受。**写测试跑测器时两条路都行，混着继承就不行。**
- **`GetTypes()` 会抛 `ReflectionTypeLoadException`。** 跑测器的 `GetAsyncRunnerAssemblies`（`:97` 的 `asyncRunnerAssemblies[i].GetTypes()`）**没有 try/catch**——任何一个程序集里有加载不了的类型，整个查找流程就崩。模组程序集加载失败会连带影响测试跑测器。
- **它与 `RunAsync` 路径不同。** 走 `AwaitableAsyncRunner` 的话，`TestContext.cs:70-72` 用 `_awaitableAsyncRunner.RunAsync()` 并存成 `Task`，`:141-143` 每帧调 `OnTick(dt)`。**两条路径的生命周期管理不同，不要想当然。**

## 怎么用

### 怎么拿到它

`public abstract class AsyncRunner`（`TaleWorlds.Library/AsyncRunner.cs:3`）。**它不由你 new，也不由你调**——全树唯一的消费者是 `TaleWorlds.Library/TestContext.cs`：它按命令行 `/runTest <TypeName>` 反射找出你的类型，`as AsyncRunner` 转型后 `new Thread(..., "ManagedAsyncThread")` 跑 `Run()`，同时在自己的主循环里每帧调 `SyncTick()`（条件是 `_asyncThread.IsAlive`）。也就是说：**你写的是契约，跑测器是宿主**。

### 典型用法

上面「真实示例」第一段是契约的标准形状，第二段是复刻定位逻辑。真正会咬人的地方在清理——`OnRemove` 虽然声明了，但 1.4.5 的 `TestContext.cs` 对 `_asyncRunner` 的 7 处引用里**没有一处是它**，所以它是个死钩子：

```csharp
public class MyTestRunner : AsyncRunner
{
    private readonly List<string> _log = new List<string>();

    public override void Run()
    {
        try
        {
            this._log.Add("started");
            // 测试体在这里；跑测器在独立线程上执行这一段
        }
        finally
        {
            // OnRemove 是死钩子：清理只能自己挂在 Run 的 finally 上，
            // 否则 Run 抛异常时永远没有清理，而调用方连日志都拿不到
            MBDebug.Print("[MyMod] runner exited, log entries = " + this._log.Count);
        }
    }

    public override void SyncTick()
    {
        // 只有 Run 的线程还活着时才会被调用；它一返回就静默停调，无异常无日志
        this._log.Add("tick");
    }

    public override void OnRemove()
    {
        // 实现它不产生任何可观察行为
    }
}
```

与上面「真实示例」的差别：那里的派生类用字段 `_shouldKeepRunning` 做协作，并刻意把 `OnRemove` 写成「设置停止标志」——那在本页三个成员里恰好是最不可靠的一条，因为没人会调它。这里把清理**改挂到 `Run` 的 `finally`**，并点明代价：一旦 `Run` 自己返回，`SyncTick` 会静默停调，你不会收到任何通知，所以退出路径必须自己留日志。

### 最容易踩的坑

**它不是游戏 API，模组侧基本不直接调用。** `grep -rn "AsyncRunner"` 在 1.4.5 托管源码里只命中四类位置——它自己、`AwaitableAsyncRunner.cs` 的定义、`TestContext.cs` 的 7 处引用、以及无。战斗、campaign、mission 流程里没有任何一处调用它。

## 跨版本提示

`AsyncRunner.cs` 在 1.4.5 是 10 行、3 个抽象方法，是原始源码形态。1.3.x / 1.4.6 的同名文件是反编译产物（会多出抽象类的样板）。**跨版本迁移时真正值得核对的不是这三个方法（它们极不可能变），而是「谁在消费它」**：如果某个版本把 `TestContext` 删掉或重构，这个类型就会变成彻底的死代码；反过来，如果它被接到了正式的游戏启动流程（比如某种资源加载跑测器），它的地位就完全不同。**因此判断它有没有用，唯一可靠的方法是在目标版本上重新 `grep -rn "AsyncRunner"` 看引用方，而不是看类型本身。** 顺带注意 `AwaitableAsyncRunner` 这个平行类型——**1.4.5 的 `TestContext` 同时接受两者，所以只盯着 `AsyncRunner` 会漏掉一半的用法。**

## 依赖关系

- 唯一消费者：[TestContext](../TestContext) 的 `:59-65`（开线程跑 `Run`）与 `:137-139`（每帧调 `SyncTick`）
- 平行契约：[AwaitableAsyncRunner](../AwaitableAsyncRunner) 的 `RunAsync()` / `OnTick(float)`，`TestContext.cs:84` 用 `||` 同时接受两者
- 测试开关：[TestCommonBase](../TestCommonBase) 的 `BaseInstance.IsTestEnabled` 与 `SceneNameToOpenOnStartup`，由 `TestContext.RunTestAux` 从命令行写入
- 断言出口：[Debug](../Debug) 的 `SetTestModeEnabled` / `Print(..., DebugColor.Yellow)`，`TestContext.RunTestAux` 在查找测试时经由它输出
- 发现机制：`TestContext.GetAsyncRunnerAssemblies`（`:95-112`）收集所有引用 `TaleWorlds.Library` 的已加载程序集（`Assembly.GetReferencedAssemblies()` 匹配），`:77-93` 在其中按**类型名**反射查找
- 反射依赖：`System.Reflection` 的 `Assembly.GetTypes()` / `Type.GetConstructor(BindingFlags...)` / `ConstructorInfo.Invoke`
- 线程依赖：`System.Threading` 的 `Thread` 与 `ThreadStart`，线程名固定为 `"ManagedAsyncThread"`
- 触发方式：命令行参数 `/runTest <TypeName>`，由 `TestContext.RunTestAux(string commandLine)` 解析
- 桶首页：[core-extra API 分区](../)