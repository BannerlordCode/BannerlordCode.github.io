---
title: "ApplicationPlatform"
description: "平台/引擎/运行时的进程级静态状态：CurrentPlatform / CurrentEngine / CurrentRuntimeLibrary 三个属性由引擎启动时调 Initialize 写入，外加两个判定辅助。最大陷阱是 Platform 枚举的 0 号成员是 WindowsSteam —— 未初始化就读 CurrentPlatform 会得到「我是 Windows」。"
---

# ApplicationPlatform

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class ApplicationPlatform`
**Base:** 无
**File:** `TaleWorlds.Library/ApplicationPlatform.cs`

## 概述

`ApplicationPlatform` 是**游戏进程级的运行环境描述**：当前跑在哪个平台（Windows / PS4 / Xbox / Web / Linux）、用的是哪个引擎实现（`[EngineType](../EngineType)`）、托管运行时是 Mono 还是 .NET Core。它只有三个静态属性、一个写入口 `Initialize` 和两个判定辅助 `IsPlatformWindows` / `IsPlatformConsole`，35 行代码。

它承担的是**「在还没有 Game / Mission 之前就知道自己在什么环境上」**这一环。这个需求在游戏启动极早期是真实存在的——`BasePath.Name`（`BasePath.cs:12-28`）要根据平台返回 `/app0/`、`/` 或 `../../`，这在任何游戏对象存在之前就要算出来。**所以这些属性不是「查询当前平台」，而是「等待引擎把平台信息写进来」。**

## 心智模型

把它当成**一块启动早期就被填好的全局状态板**，而不是一个查询服务。关键在于：**读是廉价的，写的时机只有一次，而且错过就没了。**

**心智模型的核心是那条极容易踩的默认值陷阱。** 看 [Platform](../Platform) 枚举：

```csharp
public enum Platform
{
    Undefined = -1,
    WindowsSteam,      // = 0
    WindowsEpic,
    Orbis,
    Durango,
    Web,
    WindowsNoPlatform,
    LinuxNoPlatform,
    WindowsGOG,
    GDKDesktop
}
```

**`WindowsSteam` 的值是 0。** 而 `ApplicationPlatform.CurrentPlatform` 是 `{ get; private set; }`，**声明时没有初始化器**——所以 `default(Platform)` 就是 `WindowsSteam`。**在 `Initialize` 被调用之前，`ApplicationPlatform.CurrentPlatform == Platform.WindowsSteam`，并且 `IsPlatformWindows()` 返回 `true`。**

这不是理论推演，是可以验证的行为：`IsPlatformWindows`（`:46-53`）的第一句是 `if (CurrentPlatform != Platform.WindowsEpic && CurrentPlatform != Platform.WindowsNoPlatform && CurrentPlatform != Platform.WindowsSteam && CurrentPlatform != Platform.WindowsGOG)`，四个条件全为 false 所以短路跳过 if 体，直接 `return true`。**也就是说「还没初始化」被静默解读成了「我在 Windows 上」。** 写 mod 的加载逻辑时如果在 `Initialize` 之前读它，你会得到一个错误的肯定答案，且没有任何警告。

**第二个心智锚点是 `Initialize` 的唯一真实调用方。** 全树只有一处：`TaleWorlds.DotNet/Controller.cs:43`

```csharp
ApplicationPlatform.Initialize((EngineType)currentEngineAsInteger, (Platform)currentPlatformAsInteger, RuntimeLibrary);
```

**注意它是从 native 传进来的两个整数强转成枚举**，不是从字符串解析的。这意味着**任何写坏的值不会在这里被发现**——`(Platform)99` 会一路带进整个进程。

**第三个锚点是两个判定辅助的覆盖面很小。** `IsPlatformWindows` 显式列举了 `WindowsEpic` / `WindowsNoPlatform` / `WindowsSteam` / `WindowsGOG` 四个，末尾特判 `GDKDesktop`；而 `IsPlatformConsole`（`:55-62`）只认 `Orbis` 与 `Durango`。**`Platform.Web`、`Platform.LinuxNoPlatform`、`Platform.Undefined` 两个函数都返回 false**，而 `IsPlatformWindows` 对 `Web`/`Linux` 也返回 false——**所以「不是 Windows」并不等于「是主机」，Linux 与 Web 落在两个判定的外面。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `CurrentPlatform` | `public static Platform CurrentPlatform { get; private set; }` | 当前平台。**声明时无初始化器，而 [Platform](../Platform) 的 0 号成员是 `WindowsSteam`** ——所以未初始化时它读作 `WindowsSteam`。消费方：`Campaign.cs:1593` 的 `PlatformID = ApplicationPlatform.CurrentPlatform.ToString()`、`BasePath.cs:16/20/24`、`ManagedDllFolder.cs:15/19`、`ParameterLoader.cs:31`。 |
| `CurrentEngine` | `public static EngineType CurrentEngine { get; private set; }` | 引擎实现类型。**唯一的消费方是 `BasePath.cs:12`**：当它是 `EngineType.UnrealEngine` 时，基准路径改为按程序集位置算的 `../../`。**这条分支的存在本身说明有第二套引擎实现**，而 1.4.5 的默认是原生引擎。 |
| `CurrentRuntimeLibrary` | `public static Runtime CurrentRuntimeLibrary { get; private set; }` | 托管运行时。**它决定 [AssemblyLoader](../AssemblyLoader) 的两条完全不同的加载策略**：`AssemblyLoader.cs:61` 在它是 `Runtime.DotNetCore` 时递归加载依赖程序集，`:92` 在它是 `Runtime.Mono` 且平台是 Windows 时才在 `AssemblyResolve` 里回退到 `LoadFrom`。**读它等于决定程序集加载行为。** |
| `Initialize` | `public static void Initialize(EngineType engineType, Platform currentPlatform, Runtime currentRuntimeLibrary)` | **唯一的写入口**，无返回值、无校验、无幂等保护（重复调用就是覆盖）。全树仅一处调用方：`TaleWorlds.DotNet/Controller.cs:43`，参数是 native 传进来的整数强转。 |
| `IsPlatformWindows` | `public static bool IsPlatformWindows()` | 显式列举 `WindowsEpic` / `WindowsNoPlatform` / `WindowsSteam` / `WindowsGOG` 为 true，末尾特判 `GDKDesktop`。**对 `Web`、`LinuxNoPlatform`、`Orbis`、`Durango`、`Undefined` 返回 false**。**未初始化时返回 true**（因为默认值就是 `WindowsSteam`）。 |
| `IsPlatformConsole` | `public static bool IsPlatformConsole()` | **只认 `Orbis`(PS4) 与 `Durango`(Xbox One) 两个**。对 `Web`、`LinuxNoPlatform`、`GDKDesktop` 一律返回 false。**它是一个精确枚举，不是「非 PC 即主机」。** |
| （枚举事实）`Platform.WindowsSteam == 0` | `TaleWorlds.Library/Platform.cs` 的第二个成员 | **本页最重要的单一事实。** 它让 `default(Platform)` 等于 `WindowsSteam`，从而让「未初始化」被误读成「在 Windows 上」。**任何 `Platform` 的默认值判断都受这条影响。** |

## 真实示例

在 mod 的加载逻辑里安全地读平台状态——**先确认真的初始化过**，这是本页最重要的一条写法：

```csharp
public class MyModLoader
{
    public void OnSubModuleLoad()
    {
        // CurrentPlatform defaults to Platform.WindowsSteam because that member
        // is 0 -- so an uninitialised ApplicationPlatform claims to be Windows.
        Platform platform = ApplicationPlatform.CurrentPlatform;
        Runtime runtime = ApplicationPlatform.CurrentRuntimeLibrary;

        Debug.Print("platform = " + platform, 0);
        Debug.Print("runtime  = " + runtime, 0);
        Debug.Print("engine   = " + ApplicationPlatform.CurrentEngine, 0);

        bool windows = ApplicationPlatform.IsPlatformWindows();
        bool console = ApplicationPlatform.IsPlatformConsole();
        Debug.Print("windows = " + windows + ", console = " + console, 0);

        // Web and Linux fall through both helpers, so a false from each does not
        // mean "neither" -- it means "unclassified".
        if (!windows && !console)
        {
            Debug.Print("not Windows and not Orbis/Durango: web or linux", 0);
        }
    }
}
```

写一个不依赖默认值的判定，绕开 `Platform.WindowsSteam == 0` 的陷阱：

```csharp
public static class PlatformFacts
{
    // Every current member except Platform.Undefined. Note this is not a range
    // test: Platform.WindowsSteam is 0, so "default" and "Windows" coincide.
    public static bool IsKnownPlatform(Platform platform)
    {
        return platform != Platform.Undefined && platform != Platform.WindowsSteam
            ? platform != Platform.LinuxNoPlatform || platform == Platform.LinuxNoPlatform
            : platform == Platform.WindowsSteam;
    }

    // The only reliable way to detect "never initialised" today is an external
    // signal -- the class itself exposes no Initialised flag. Note default(Runtime)
    // is Mono, since Runtime is declared as { Mono, DotNet, DotNetCore }.
    public static bool LooksUninitialised(Platform platform, Runtime runtime)
    {
        return platform == Platform.WindowsSteam && runtime == Runtime.Mono;
    }
}
```

复刻 `IsPlatformWindows` 的判定链，看清它为什么在未初始化时返回 true（结构照 `ApplicationPlatform.cs:46-62`）：

```csharp
public static class PlatformClassifier
{
    public static bool IsPlatformWindows(Platform currentPlatform)
    {
        if (currentPlatform != Platform.WindowsEpic
            && currentPlatform != Platform.WindowsNoPlatform
            && currentPlatform != Platform.WindowsSteam
            && currentPlatform != Platform.WindowsGOG)
        {
            return currentPlatform == Platform.GDKDesktop;
        }
        return true;
    }

    public static bool IsPlatformConsole(Platform currentPlatform)
    {
        if (currentPlatform != Platform.Orbis)
        {
            return currentPlatform == Platform.Durango;
        }
        return true;
    }
}
```

## 风险与边界

- **`Platform.WindowsSteam` 的值是 0。** [Platform](../Platform) 的第二个成员没有显式赋值，编译器给了 0；而 `CurrentPlatform` 没有初始化器。**结果：未初始化即读作 WindowsSteam，且 `IsPlatformWindows()` 返回 true。** 这是本页最贵的一条。
- **`Initialize` 没有校验、没有断言、没有幂等保护。** 全树唯一调用方 `TaleWorlds.DotNet/Controller.cs:43` 传的是从 native 来的整数强转 `(Platform)currentPlatformAsInteger`。**`(Platform)99` 会畅通无阻地进入整个进程**，后续所有 `switch` 静默走 default。
- **在 `Initialize` 之前不要读。** 三个属性全部依赖它。`OnSubModuleLoad` 这个阶段通常是安全的（引擎已经起来了），但**任何静态初始化器里的读取都不安全**。
- **两个判定辅助都不覆盖 Web 与 Linux。** `IsPlatformWindows` 对 `Web` / `LinuxNoPlatform` 返回 false，`IsPlatformConsole` 同样返回 false。**「两者皆 false」不等于「未知平台」——它可能是 Web 或 Linux。**
- **`IsPlatformConsole` 是个精确枚举。** 它只认 `Orbis` 与 `Durango`，**不认 `GDKDesktop`**（虽然 `IsPlatformWindows` 特判了它）。想写「主机或掌机」必须自己枚举。
- **`CurrentEngine` 的消费方只有一个。** `BasePath.cs:12` 只判断 `EngineType.UnrealEngine`。它存在说明引擎有可替换实现，但**其他代码不会因为换引擎而改变行为**——不要以为读它能拿到别的信息。
- **`CurrentRuntimeLibrary` 会改变程序集加载行为。** `AssemblyLoader.cs:61/92` 按它是 `DotNetCore` 还是 `Mono` 走两条完全不同的路径（前者递归加载依赖，后者才在 `AssemblyResolve` 里回退）。**在 mod 里自己写一套程序集加载逻辑时，必须先看这个值，否则会和引擎的策略打架。**
- **进程级静态，无线程同步。** 三个属性都是 `{ get; private set; }` 的静态自动属性，没有 `volatile` 也没有锁。正常情况下 `Initialize` 只在启动期跑一次，**但从工作线程首次读它存在可见性风险**——不要在 mod 里跨线程读写它。
- **改不了。** 三个属性全是 `private set`，`Initialize` 是唯一的路。**想在测试环境里伪造平台，只能调 `Initialize`，而那会污染整个进程的全局状态。**
- **`Initialize` 可以被重复调用覆盖。** 没有 `_initialized` 之类的守卫。重复调用会静默改变后续所有行为。

## 怎么用

### 怎么拿到它

`public static class ApplicationPlatform`（`TaleWorlds.Library/ApplicationPlatform.cs:3`），四个静态属性 + 一个静态方法，没有实例。**唯一的写入口是 `Initialize(EngineType, Platform, Runtime)`**，全树只有一个调用方：`TaleWorlds.DotNet/Controller.cs:43`，参数是 native 传进来的整数强转。也就是说：**mod 读得到，但写不了，也不要试图写**——你在 `SubModuleLoad` 那一刻读到的就是最终值。

### 典型用法

上面「真实示例」两段都是**当场读、当场打印或当场判定**。更稳的形状是在加载那一刻拍一张快照，因为「未初始化」这个状态一旦过去就不会再回来，而类本身没有 `Initialised` 标志：

```csharp
public class MyPlatformSnapshot
{
    private readonly Platform _platform;
    private readonly Runtime _runtime;

    public MyPlatformSnapshot()
    {
        // 在 SubModuleLoad 这一刻拍一张快照：此后 CurrentPlatform 不会再变
        this._platform = ApplicationPlatform.CurrentPlatform;
        this._runtime = ApplicationPlatform.CurrentRuntimeLibrary;
    }

    public bool IsInitialised()
    {
        // 类没有 Initialised 标志，只能靠外部信号：default(Platform) 是 WindowsSteam、
        // default(Runtime) 是 Mono（Runtime.cs:5-7 声明为 { Mono, DotNet, DotNetCore }），
        // 两者同时成立就说明你抢在 Initialize 之前读了
        return !(this._platform == Platform.WindowsSteam && this._runtime == Runtime.Mono);
    }

    public bool NeedsPcUi()
    {
        return this.IsInitialised() && ApplicationPlatform.IsPlatformWindows();
    }
}
```

与上面「真实示例」的差别：那两段是**无状态的一次性调用**，每次判定都重新读静态属性，所以判据分散在各处；而这里把**判定前置成一个快照 + 一个组合条件**——先用一个外部信号把「未初始化」这个伪 Windows 排除掉，再去问 `IsPlatformWindows()`。顺序反了就会得到本页那条最贵的坑。

### 最容易踩的坑

**`Platform.WindowsSteam` 的值是 0。** 而 `CurrentPlatform` 没有初始化器。**结果：未初始化即读作 WindowsSteam，且 `IsPlatformWindows()` 返回 true。**

## 跨版本提示

`ApplicationPlatform.cs` 在 1.4.5 是 35 行、5 个成员，是原始源码形态。**跨版本真正要核对的不是本类，而是它依赖的三个枚举**：[Platform](../Platform)（10 个成员，`Undefined = -1`）、[EngineType](../EngineType)、`Runtime`（Mono / DotNetCore）。**`Platform` 的成员增删会直接改变 `default(Platform)` 的含义**——如果某个版本把 `WindowsSteam` 从 0 号移走或插入新成员到前面，「未初始化即 Windows」这个陷阱就消失了（或换成另一个值）。因此迁移时值得核对三件事：`Platform` 的成员顺序与显式赋值；`IsPlatformWindows` 的显式枚举列表是否补全了新平台（`GDKDesktop` 已经被特判过一次，说明这个列表历史上漏过）；以及 `AssemblyLoader` 是否因为新增运行时类型而扩展了策略分支。

## 依赖关系

- 唯一写入口：`TaleWorlds.DotNet/Controller.cs:43`，参数来自 native 的整数强转
- 依赖的枚举：[Platform](../Platform)（注意 `WindowsSteam == 0`）、[EngineType](../EngineType)、`Runtime`
- 消费者一（路径计算）：`TaleWorlds.Library/BasePath.cs:12-28` 按 `CurrentEngine` / `CurrentPlatform` 返回 `/app0/`、`/` 或 `../../`
- 消费者二（程序集加载）：[AssemblyLoader](../AssemblyLoader) 的 `LoadFrom`（`:61`）与 `OnAssemblyResolve`（`:92`）按 `CurrentRuntimeLibrary` 分叉
- 消费者三（其他 DLL 目录）：`TaleWorlds.Library/ManagedDllFolder.cs:15/19` 按 `CurrentPlatform` 切路径
- 消费者四（参数过滤）：`TaleWorlds.Library/ParameterLoader.cs:31` 按 `CurrentPlatform.ToString()` 过滤命令行参数
- 消费者五（存档/遥测）：`../../campaign/Campaign.cs:1593` 把它写进 `Campaign.PlatformID`
- 桶首页：[core-extra API 分区](../)