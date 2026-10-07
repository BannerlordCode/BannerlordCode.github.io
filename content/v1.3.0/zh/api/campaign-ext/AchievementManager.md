---
title: "AchievementManager"
description: "静态门面：三个方法全部转发给一个可替换的 IAchievementService。默认实现 TestAchievementService 的 SetStat 恒返回 true、GetStat 恒返回 0、GetStats 恒返回全零数组——不接平台服务时所有成就写入都是空操作。"
---

# AchievementManager

**Namespace:** TaleWorlds.AchievementSystem
**Module:** TaleWorlds.AchievementSystem
**Type:** `public class AchievementManager`
**Base:** 无（**注意它不是 static class**，虽然只有静态成员）
**File:** `TaleWorlds.AchievementSystem/AchievementManager.cs`（33 行）

## 概述

整个类 33 行，全部内容是一个静态可替换的服务属性加三个一行转发的方法：

```csharp
public class AchievementManager
{
    public static IAchievementService AchievementService { get; set; } = new TestAchievementService();

    public static bool SetStat(string name, int value)  => AchievementManager.AchievementService.SetStat(name, value);
    public static async Task<int> GetStat(string name) => await AchievementManager.AchievementService.GetStat(name);
    public static async Task<int[]> GetStats(string[] names) => await AchievementManager.AchievementService.GetStats(names);
}
```

**这个类自己什么都不做。** 它是「谁持有服务」的全局槽位。真正的实现来自 `platformServices`：

```csharp
// TaleWorlds.MountAndBlade/Module.cs:1012（PlatformServices 初始化分支内）
AchievementManager.AchievementService = platformServices.GetAchievementService();
ActivityManager.ActivityService = platformServices.GetActivityService();
```

## 心智模型

**把它当成「一个静态属性槽 + 三个静态扩展壳」，而不是一个管理器。** 三条必须知道的规则：

**规则一：默认实现是测试桩，而且它骗人。** 属性初始化器写的是 `new TestAchievementService()`。那个类（`TaleWorlds.AchievementSystem/TestAchievementService.cs`）的实现是：

| 方法 | TestAchievementService 的返回 |
| --- | --- |
| `SetStat(string, int)` | **恒 `true`** |
| `GetStat(string)` | `Task.FromResult(0)` —— 恒 0 |
| `GetStats(string[])` | `Task.FromResult(new int[names.Length])` —— 长度对、值全 0 |
| `IsInitializationCompleted()` | 恒 `true` |

**`SetStat` 返回 true 意味着「写成功了」，但事实上什么都没发生。** 这是这个 API 最危险的一点：如果你在 mod 里用返回值判断「成就已记录」，在没有平台服务的环境（编辑器、单机直跑 dll、测试宿主）里**永远得到 true**，而真正落库的那一侧根本不存在。

**规则二：什么时候被替换，只有一个时机。** `Module.cs:1012` 那一行在 `if (platformServices != null)` 分支里（`Module.cs:998`）。`platformServices` 是由宿主平台（Steam / Epic 等）注入的。**没有平台服务就永远是 `TestAchievementService`**——不是「暂时是」，是「整个进程生命周期都是」。所以在本地开发与在发行版上跑同一段代码，行为完全不同。

**规则三：谁在等它。** `Module.EnsureAsyncJobsAreFinished`（`Module.cs:323-336`）里有：

```csharp
if (!GameNetwork.IsDedicatedServer && !MBDebug.TestModeEnabled)
{
    while (!AchievementManager.AchievementService.IsInitializationCompleted())
    {
        Thread.Sleep(1);
    }
}
```

**注意它直接访问 `AchievementService.IsInitializationCompleted()`，而不是通过 `AchievementManager` 的某个方法。** `IAchievementService` 上有 `IsInitializationCompleted()`，但 [AchievementManager](../AchievementManager) **没有把它转发出来**——这是引擎自己绕过这层门面的例子，也说明这层门面不是强制的。

## 关键成员

| 成员 | 签名（行号） | 这个成员是做什么用的 |
| --- | --- | --- |
| `AchievementService` | `public static IAchievementService AchievementService { get; set; } = new TestAchievementService();`（`:12`） | 全局可替换槽位。**唯一写入方**是 `Module.cs:1012`（平台注入）。**谁写它**：`Module`；**谁读它**：本类三个方法、`Module.cs:332` 的等待循环、以及 mod 自己的替换代码。**没有任何 getter 之外的访问控制**——任何一行代码都能在运行时把它换成别的东西。 |
| `SetStat` | `public static bool SetStat(string name, int value)`（`:15`） | 同步写一个命名整数。**返回值是「服务是否接受了这次写入」，不是「数据是否持久化」**。`name` 是任意字符串，没有白名单、没有常量类——所有合法的 stat 名字符串只存在于平台服务实现里，托管层完全不知道有哪些名字。 |
| `GetStat` | `public static async Task<int> GetStat(string name)`（`:21`） | 异步读一个命名整数。**注意是 `async` + `await` 直转发**：每次调用都会新建一个 async 状态机，返回的 `Task<int>` 不是服务返回的那个实例。 |
| `GetStats` | `public static async Task<int[]> GetStats(string[] names)`（`:27`） | 批量异步读。**返回顺序由实现保证**——`TestAchievementService` 直接 `new int[names.Length]`，引擎没有任何代码验证它真的按 `names` 的顺序填。 |
| （不存在的成员） | `IsInitializationCompleted` | **[AchievementManager](../AchievementManager) 上没有这个方法。** 它只在 [IAchievementService](../IAchievementService) 上有，访问方式是 `AchievementManager.AchievementService.IsInitializationCompleted()`。 |
| （类本身的形状） | `public class`，无实例成员 | **不是 `static class`。** 可以 `new AchievementManager()`，得到一个什么也不做的实例。引擎自己从不 new（`grep` 全树只有三个静态方法的转发里出现这个类型名）。 |

## 真实示例

**正确用法一：替换服务（这是 mod 唯一能真正影响它的方式）。**

```csharp
using TaleWorlds.AchievementSystem;

public class MyStatService : IAchievementService
{
    private readonly Dictionary<string, int> _local = new Dictionary<string, int>();

    public bool SetStat(string name, int value)
    {
        _local[name] = value;
        return true;                 // 只有你真的存了，才返回 true
    }

    public Task<int> GetStat(string name)
    {
        int v;
        _local.TryGetValue(name, out v);
        return Task.FromResult(v);
    }

    public Task<int[]> GetStats(string[] names)
    {
        int[] result = new int[names.Length];
        for (int i = 0; i < names.Length; i++)
        {
            result[i] = _local.TryGetValue(names[i], out int v) ? v : 0;
        }
        return Task.FromResult(result);
    }

    public bool IsInitializationCompleted()
    {
        return true;
    }
}

// 在 SubModule 里尽早替换，避免和 Module.cs:1012 的平台注入抢时序
public class MySubModule : MBSubModuleBase
{
    public override void OnGameStart(Game game, IGameStarter gameStarter)
    {
        base.OnGameStart(game, gameStarter);
        AchievementManager.AchievementService = new MyStatService();
    }
}
```

**正确用法二：写一个自己的累计计数器——注意返回值不代表持久化。**

```csharp
using System.Threading.Tasks;
using TaleWorlds.AchievementSystem;

// 确认落库的唯一办法：写完再 async 读回。
// GetStat 是 async，调用方也必须是 async —— 在主线程上 .Result / GetAwaiter().GetResult()
// 会阻塞，而平台侧的实现可能在另一个线程上才完成。
public static async Task<bool> TryRecordKillCountAsync(int currentKills)
{
    // bool 只表示「服务接受了」，不表示「已落库」
    if (!AchievementManager.SetStat("MyMod_Kills", currentKills))
    {
        return false;
    }
    int confirmed = await AchievementManager.GetStat("MyMod_Kills");
    return confirmed == currentKills;
}
```

**反面教材：把返回值当成功标志。** 在没有平台服务的进程里，下面这段永远返回 true，而统计什么都没发生：

```csharp
// 错：SetStat 恒返回 true，但 GetStat 恒返回 0
AchievementManager.SetStat("MyMod_Kills", 999);
int readBack = AchievementManager.GetStat("MyMod_Kills").Result;   // 永远是 0；.Result 还会阻塞主线程
```

## 风险与边界

- **`SetStat` 在默认实现下恒返回 `true`，但什么也不写。** `TestAchievementService.SetStat` 的实现体就是 `return true;`。**「返回值成功」不等于「数据被记录」**——在本地/测试环境里它是彻底的空操作。想验证真的落库，唯一办法是写完再 `GetStat` 读回。
- **`GetStat` / `GetStats` 在默认实现下恒返回 0 / 全 0 数组。** `GetStats` 返回的数组**长度等于 `names.Length`**，所以索引不会越界，但每个值都是 0。任何「读出统计 > 0 就展示成就」的 UI 逻辑在没有平台服务时永远不显示。
- **`GetStats` 的顺序依赖是隐式契约。** 引擎没有任何代码检查实现是否按 `names` 顺序填数组。自己实现 `IAchievementService` 时**必须自己保证顺序**，否则调用方按下标取值会全错。
- **`AchievementService` 是无保护的 public static set。** 任何一行代码（包括别的 mod）都能在任意时刻把它换掉。两个 mod 各自 `OnGameStart` 里赋值时，**后执行的那个静默覆盖先执行的那个**，没有链式、没有事件、没有告警。
- **替换时机很窄。** `Module.cs:1012` 的平台注入在 `PlatformServices.Setup` 之后立刻执行。你在 `OnGameStart` 里赋值通常是安全的（`EnsureAsyncJobsAreFinished` 的等待循环也在之后跑），但如果你在更早的地方赋值，平台注入会覆盖你。
- **`IsInitializationCompleted` 只有接口上有，管理类没转发。** 想等它就绪必须写 `AchievementManager.AchievementService.IsInitializationCompleted()`——而这是引擎自己在 `Module.cs:332` 用的写法。
- **`EnsureAsyncJobsAreFinished` 是无超时的忙等。** `Module.cs:331-335` 是 `while (!...IsInitializationCompleted()) Thread.Sleep(1);`——**没有超时、没有退出条件**。如果某个自定义 `IAchievementService` 的实现永远返回 `false`，游戏启动会**永久挂起**。这不是「注意生命周期」那种空话，是一条具体的可复现的死锁。
- **`name` 没有任何校验与常量表。** 全部 1.3.0 托管源码里没有任何一处调用 `AchievementManager.SetStat` / `GetStat`——**stat 名字的取值完全在平台服务实现（Steamworks 等）那一侧，托管层是空白的。** mod 自造名字时无法从引擎得知是否会与官方 stat 冲突。
- **`AchievementManager` 不是静态类。** 你可以 `new` 它，但实例什么也做不了。别指望通过继承加功能——三个方法都是 `static`，virtual 的机会为零。

## 怎么用

### 怎么拿到它

**这个类不需要「拿到」——它没有实例。** 声明在 `TaleWorlds.AchievementSystem/AchievementManager.cs:7`（注意是 `public class`，不是 `static class`），内容只有一个静态属性槽加三个静态转发方法。

那个槽位的默认值在属性初始化器里（`AchievementManager.cs:12`）：

```csharp
public static IAchievementService AchievementService { get; set; } = new TestAchievementService();
```

真实的安装点只有一个，在 `TaleWorlds.MountAndBlade/Module.cs:1012`：

```csharp
AchievementManager.AchievementService = platformServices.GetAchievementService();
ActivityManager.ActivityService = platformServices.GetActivityService();
```

这一行在 `if (platformServices != null)` 分支内，紧跟 `PlatformServices.Setup(...)` / `PlatformServices.Initialize(...)` 之后。**没有平台服务就永远是默认实现。**

### 典型用法

改服务之前，先判断当前装的到底是不是真服务——默认实现有四个「看起来成功」的方法（`TestAchievementService.cs:12`、`:18`、`:24`、`:30`），所以单看返回值区分不出来：

```csharp
using TaleWorlds.AchievementSystem;

public static bool HasRealPlatformService()
{
    // TestAchievementService 把 GetStat 写死成 Task.FromResult<int>(0)（:18），
    // GetStats 写死成 new int[names.Length]（:24）—— 真平台服务不会这样。
    IAchievementService service = AchievementManager.AchievementService;

    // 注意：不要用 IsInitializationCompleted() 做这个判断，测试实现对它也返回 true（:30）。
    return !(service is TestAchievementService);
}
```

确认之后才替换（`AchievementService` 是无保护的 `public static set`，任何一行代码都能改）：

```csharp
using TaleWorlds.AchievementSystem;

public class MySubModule : MBSubModuleBase
{
    public override void OnGameStart(Game game, IGameStarter gameStarter)
    {
        base.OnGameStart(game, gameStarter);

        // 放在 OnGameStart 而不是更早的地方：平台注入在 Module.cs:1012 完成，
        // 在那之前赋值会被静默覆盖。
        if (!HasRealPlatformService())
        {
            AchievementManager.AchievementService = new MyLocalStatService();
        }
    }
}
```

### 最容易踩的坑

**把 `GetStats` 的返回值当成长度等于 `names.Length` 的定长数组来按下标取。** 默认实现确实是 `new int[names.Length]`（`TestAchievementService.cs:24`），所以**在本地／编辑器里按下标取值永远不会越界**。但 `IAchievementService.GetStats` 的契约只有返回类型 `Task<int[]>`（`IAchievementService.cs:16`），**托管层没有任何代码校验长度**，真实平台实现完全可能返回更短的数组。后果是：**一段在本地跑一百遍都正常的取下标代码，在接了平台服务的发行版上抛 `IndexOutOfRangeException`**，而且只在玩家真正解锁到后面几个成就时才触发——这正是最难复现的那种崩溃。

第二个坑是 `IsInitializationCompleted` 不在这个类上。它只在接口上（`IAchievementService.cs:19`），`AchievementManager` 没有转发；要等它就绪必须写 `AchievementManager.AchievementService.IsInitializationCompleted()`。

## 跨版本提示

- **5 条 public 声明（1 个属性 + 1 个类 + 3 个方法）在 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 上数量与名称完全一致**，但有**一处真实的行为差异**：`GetStat` 与 `GetStats` 在 1.3.0 里声明为 `public static async Task<...>`，在 1.3.15 及之后变成了 `public static Task<...>`——方法体被反编译成了手写的 `AsyncTaskMethodBuilder` 状态机（`AchievementManager.cs` 里能看到 `<GetStat>d__6` 这种编译器生成类型的显式堆栈初始化）。这是**反编译产物形态的差异，不是签名变化**：你写 `await AchievementManager.GetStat(name)` 或 `.Result` 在两个版本上行为相同。
- **`IAchievementService` 的形状（含 `IsInitializationCompleted`）在 1.3 → 1.5 没有变化**，`TestAchievementService` 也没有被换掉。所以「默认实现是空桩」这件事在整个 1.x 系列都成立。
- **对 mod 的实际含义：** 自定义 `IAchievementService` 的代码不需要为升级改动。但要注意「官方也在用平台服务替换它」这个前提没有变——**升级时如果你的替换逻辑和平台注入的时序发生变化（平台可能更早/更晚注入），需要重测一次**。
- 与 [ActivityManager](../ActivityManager) 的差异见那一页：`ActivityManager` 多了 `IsInitializationCompleted` 也一样没转发，两者是同一套设计。

## 依赖关系

- 服务接口：[IAchievementService](../IAchievementService)（同桶，4 个成员：`SetStat` / `GetStat` / `GetStats` / `IsInitializationCompleted`）
- 默认实现：[TestAchievementService](../TestAchievementService)（同桶）——**四个成员全部是显式接口实现**（`bool IAchievementService.SetStat(...)` 那种写法），所以你拿 `TestAchievementService` 的实例当具体类型用时会看不到这些方法
- 注入时机：[Module](../../core/Module)（TaleWorlds.MountAndBlade）`Module.cs:1012`，在 `PlatformServices.Setup` + `PlatformServices.Initialize(...)` 之后
- 等待方：同一个 `Module` 的 `EnsureAsyncJobsAreFinished`（`Module.cs:323-336`）
- 孪生类：[ActivityManager](../ActivityManager)（`TaleWorlds.ActivitySystem`）—— 同一行代码里被一起注入，设计完全同构，但多一个 `ActivityTransition`
- 桶首页：[campaign-ext API 分区](../)
