---
title: "ApplicationPlatform"
description: "进程级运行环境三元组：引擎种类、发行平台、CLR 实现，三个静态只读属性加一个 Initialize 和两个判定方法，由原生引导代码在托管层启动前写死。"
---

# ApplicationPlatform

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class ApplicationPlatform`
**Base:** 无（静态类，隐式 `System.Object`，不可实例化）
**File:** `TaleWorlds.Library/ApplicationPlatform.cs`（43 行 / 1976 字节）

## 概述

`ApplicationPlatform` 是整个游戏里**最基础的一条环境信息**：这台进程跑在哪个引擎上、哪个发行渠道上、用哪种 CLR。它只有三个静态属性（`CurrentEngine`、`CurrentPlatform`、`CurrentRuntimeLibrary`）、一个写入口 `Initialize(EngineType, Platform, Runtime)` 和两个判定方法（`IsPlatformWindows()` / `IsPlatformConsole()`）。

关键事实是**写入口只有一个，而且托管源码里没有任何调用者**。`grep -rnw "ApplicationPlatform.Initialize" bannerlord-1.3.0 --include=*.cs` 命中 0 条——三个属性的 setter 全是 `private set`，全树 40 处 `ApplicationPlatform` 引用没有一处调用它。这意味着**这个类型的所有写入都发生在原生引导层**，托管代码从 `OnSubModuleLoad` 那一刻开始就只能读。这也是它为什么被放在 `TaleWorlds.Library` 这个最底层的程序集里：[BasePath](../BasePath)、[ManagedDllFolder](../ManagedDllFolder)、[AssemblyLoader](../AssemblyLoader) 都依赖它先被填好才能决定文件路径。

## 心智模型

把它当成**进程启动时冻结的常量表**就对了。「冻结」有两个层面的含义。API 层面：三个属性都是 `{ get; private set; }`，外部读得到、写不了，`Initialize` 虽然是 `public static` 但设计上只该被引导层调一次。语义层面：游戏跑起来之后它就不会再变，所以**每一个读它的地方都可以把结果缓存**——官方就是这么用的，`Module.LoadPlatformServices` 里是一长串 `if (ApplicationPlatform.CurrentPlatform == Platform.WindowsSteam) / else if (... == Platform.WindowsEpic) / ...` 的平台分支，而不是查表对象。

三个属性的分工也各有来由。`CurrentEngine` 取 [EngineType](../EngineType)（`Standalone` / `RGL` / `UnrealEngine`），只有 [BasePath](../BasePath) 第 16 行读它来切换目录前缀。`CurrentPlatform` 取 [Platform](../Platform)（9 个值：`Undefined=-1`、`WindowsSteam`、`WindowsEpic`、`Orbis`、`Durango`、`Web`、`WindowsNoPlatform`、`LinuxNoPlatform`、`WindowsGOG`、`GDKDesktop`），是三个里读得最多的。`CurrentRuntimeLibrary` 取 [Runtime](../Runtime)（`Mono` / `DotNet` / `DotNetCore`），[AssemblyLoader](../AssemblyLoader) 在两处读它决定加载策略。

两个判定方法则是**便利封装，但覆盖范围和直觉不完全一致**，这是最容易出错的地方。`IsPlatformWindows()` 返回 true 当且仅当平台是 `WindowsEpic` / `WindowsNoPlatform` / `WindowsSteam` / `WindowsGOG` / `GDKDesktop` 五个——注意它**把 GDK Desktop 也算成 Windows**。`IsPlatformConsole()` 只认 `Orbis` 和 `Durango` 两个。于是 `LinuxNoPlatform`、`Web`、`Undefined` 三个值**两个方法都返回 false**，落进「既不是 Windows 也不是主机」的第三类。`LinuxNoPlatform` 不是假想的值：[Module](../../core/Module) 第 1157 / 1166 行就在用它做平台过滤。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `CurrentEngine` | `public static EngineType CurrentEngine { get; private set; }` | 当前引擎种类。全树只有 [BasePath](../BasePath) 读它（`== EngineType.UnrealEngine` 时切目录）。除非游戏被 UE 版接管，否则基本恒为 `Standalone`。 |
| `CurrentPlatform` | `public static Platform CurrentPlatform { get; private set; }` | 当前发行平台，是本类型最常被读的成员。[Module](../../core/Module) 用它选 `TaleWorlds.PlatformService.*.dll`，[Campaign](../../campaign/Campaign) 用它写存档的 `PlatformID`，NewsManager 用它跳过某些平台。 |
| `CurrentRuntimeLibrary` | `public static Runtime CurrentRuntimeLibrary { get; private set; }` | 当前 CLR 实现。[AssemblyLoader](../AssemblyLoader) 读两处：`== Runtime.DotNetCore` 时走递归依赖预加载，`== Runtime.Mono && IsPlatformWindows()` 时启用 `AssemblyResolve` 回退。 |
| `Initialize` | `public static void Initialize(EngineType engineType, Platform currentPlatform, Runtime currentRuntimeLibrary)` | **唯一的写入口**，三个赋值语句。托管源码里零调用者，由原生引导层在托管层起来之前调用。它是 `public` 但不是给 mod 用的——重复调用会直接改写全进程的路径解析基准。 |
| `IsPlatformWindows` | `public static bool IsPlatformWindows()` | `CurrentPlatform` 是否属于五个 Windows 系取值（`WindowsEpic` / `WindowsNoPlatform` / `WindowsSteam` / `WindowsGOG` / `GDKDesktop`）。**它包含 GDK Desktop，不包含 `LinuxNoPlatform` 和 `Web`。** |
| `IsPlatformConsole` | `public static bool IsPlatformConsole()` | `CurrentPlatform` 是否是 `Orbis`（PS4）或 `Durango`（Xbox One）。**只有这两个值**，GDK Desktop（Xbox 平台 PC 端）不算。 |

## 真实示例

平台分支加载对应的平台服务程序集（照抄 [Module](../../core/Module) `LoadPlatformServices` 的形状）：

```csharp
Assembly assembly = null;
if (ApplicationPlatform.CurrentPlatform == Platform.WindowsSteam)
{
    assembly = AssemblyLoader.LoadFrom(ManagedDllFolder.Name + "TaleWorlds.PlatformService.Steam.dll", true);
}
else if (ApplicationPlatform.CurrentPlatform == Platform.WindowsEpic)
{
    assembly = AssemblyLoader.LoadFrom(ManagedDllFolder.Name + "TaleWorlds.PlatformService.Epic.dll", true);
}
else if (ApplicationPlatform.IsPlatformConsole())
{
    Debug.Print("console build, achievements path = " + ManagedDllFolder.Name + "ModuleData/AchievementData/ps_achievement_data.xml", 0);
}
if (assembly != null)
{
    Debug.Print("platform service types = " + assembly.GetTypesSafe(null).Count, 0);
}
```

按运行环境决定存档里的平台标识（[Campaign](../../campaign/Campaign) 第 2123 行的写法）：

```csharp
string platformId = ApplicationPlatform.CurrentPlatform.ToString();
Debug.Print("saving platform id = " + platformId, 0);
if (ApplicationPlatform.CurrentPlatform == Platform.WindowsSteam)
{
    Debug.Print("steam achievements available", 0);
}
```

三条平台判定方法各自覆盖到哪（这是最值得实测的一段）：

```csharp
public static void DescribeRuntime()
{
    Debug.Print("engine  = " + ApplicationPlatform.CurrentEngine, 0);
    Debug.Print("runtime = " + ApplicationPlatform.CurrentRuntimeLibrary, 0);
    Debug.Print("windows = " + ApplicationPlatform.IsPlatformWindows(), 0);
    Debug.Print("console = " + ApplicationPlatform.IsPlatformConsole(), 0);
    Debug.Print("neither (LinuxNoPlatform / Web / Undefined) = "
        + (!ApplicationPlatform.IsPlatformWindows() && !ApplicationPlatform.IsPlatformConsole()), 0);
}
```

## 风险与边界

- **`Initialize` 托管侧零调用者。** 它由原生引导层调。mod 在托管层里调用它会改掉全进程后续所有的路径解析基准，而且**不会有任何断言拦住你**——三个 setter 只是 `private`，`Initialize` 自己可是 `public static`。
- **默认读到的可能是 `default(enum)`。** 三个属性都是自动属性，没人写过就是 `Enum` 的零值：`EngineType.Standalone`、`Platform.WindowsSteam`、`Runtime.Mono`。注意 `Platform` 枚举里 `WindowsSteam` 恰好是零值，所以「没初始化」和「Steam 版」在这一个字段上读出来完全一样，无法区分。
- **两个判定方法不覆盖全部平台。** `LinuxNoPlatform`、`Web`、`Undefined` 两个方法都返回 false。想判「不是 Windows 也不是主机」必须自己写否定组合。
- **`IsPlatformWindows()` 含 GDK Desktop。** Xbox 平台的 PC 端会被判成 Windows；`IsPlatformConsole()` 只含 `Orbis` / `Durango`，不含 GDK Desktop。两个方法对 GDK Desktop 的答案分别是 true / false。
- **静态可变全局状态。** 没有线程安全保证；理论上任何时刻改写都会和其它线程的路径解析打架。实际运行期不会发生，所以别在运行期改。
- **值来自发行渠道而非运行时探测。** `CurrentPlatform` 描述的是「这份构建打给谁」，不是「当前跑在什么机器上」——`WindowsNoPlatform` 这个取值本身就是「Windows 但无平台服务」。
- **`CurrentEngine` 几乎恒定。** 全树只有 [BasePath](../BasePath) 读它，且只判 `== EngineType.UnrealEngine`。想靠它区分 Standalone 与 RGL 是没用的，源码里没人这么写。
- **无事件、无失效通知。** 改了也不会有回调告诉你，只能自己再读一次。

## 怎么用

**怎么拿到。** 本体在 `bannerlord-1.3.0/TaleWorlds.Library/ApplicationPlatform.cs:6`，`public static class`，零字段、零实例成员，只有一组静态属性和一组静态方法。它没有工厂也没有 ctor，mod 侧**只有一个用法：读**。

写入路径存在但对 mod 关闭：`Initialize(EngineType, Platform, Runtime)`（`ApplicationPlatform.cs:24`）是唯一能改值的方法，而三个属性的 setter 全是 `private`（`ApplicationPlatform.cs:11` / `ApplicationPlatform.cs:16` / `ApplicationPlatform.cs:21`）。我 grep 过 1.3.0 整棵托管树，**`Initialize` 没有任何托管调用点** —— 它由原生引导代码在托管程序集起来之前调用。所以 `ApplicationPlatform.CurrentPlatform = ...` 编译不过，mod 也不要试图绕过。

值的来源因此是「读别人的判断」而不是「问自己」：`BasePath.cs:16`–`:28` 用 `CurrentEngine` / `CurrentPlatform` 决定根目录形态，`ManagedDllFolder.cs:18` / `:22` 用它选程序集目录，`AssemblyLoader.cs:32` / `:89` 同时看 `CurrentRuntimeLibrary` 与 `IsPlatformWindows()`，`NewsManager.cs:55` 拿它做发布过滤。

**一段可直接跑的平台族判定**（重点是把「是不是 Windows」和「有没有 Steam 门面」拆开）：

```csharp
public static string DescribePlatformFamily()
{
    // ApplicationPlatform.cs:38：控制台只有 Orbis / Durango 两个成员。
    if (ApplicationPlatform.IsPlatformConsole())
    {
        return "console";
    }

    // ApplicationPlatform.cs:32：Windows 判定含 WindowsEpic / WindowsNoPlatform /
    // WindowsSteam / WindowsGOG / GDKDesktop 五个成员，比下面这个「门面」判定宽得多。
    if (!ApplicationPlatform.IsPlatformWindows())
    {
        return "desktop-other";
    }

    return ApplicationPlatform.CurrentPlatform == Platform.WindowsSteam
        || ApplicationPlatform.CurrentPlatform == Platform.WindowsEpic
        ? "windows-storefront"
        : "windows-without-storefront";
}
```

**最常见的坑：拿 `IsPlatformWindows()` 当「有 Steam 成就」的前置条件。** 这两个判定不是包含关系——`IsPlatformWindows()` 覆盖五个成员，而成就分支只认 `Platform.WindowsSteam`（[Module](../../core/Module) 第 946 行就是这么写的）。于是在 `GDKDesktop` 与 `WindowsGOG` 上，前者为 true、后者为 false。后果是 mod 在 GOG 版本的存档里会走进一条「我以为有成就服务」的分支，然后去加载一个 `TaleWorlds.PlatformService.Steam.dll`——`AssemblyLoader.LoadFrom` 抛的是文件找不到，跟你的成就判断毫无关系，排查起来会绕很远。凡是要加载门面程序集或读成就数据，一律显式比 `Platform.WindowsSteam`，不要用 `IsPlatformWindows()` 兜。

## 跨版本提示

`ApplicationPlatform.cs` 在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵树里**逐字节一致**：都是 1976 字节、43 行、3 个静态属性 + 1 个 `Initialize` + 2 个判定方法的公开表面。跨 1.3 → 1.5 零变化。

配套的三个枚举也是零变化：[Platform](../Platform)（1.3.0 里是 `Undefined` 加 9 个取值，含 `GDKDesktop`）、[EngineType](../EngineType)（3 个取值）、[Runtime](../Runtime)（`Mono` / `DotNet` / `DotNetCore`）。**升级 Bannerlord 不会让你的平台分支代码编译不过。**

真正在变的是消费侧：`[AssemblyLoader](../AssemblyLoader)` 在 1.4.6 大改过（`LoadFrom` 加了 `out AssemblyLoader.AssemblyLoadResult` 重载），所以「按平台加载程序集」这条链的返回值处理在 1.4.6 之后不一样了——类型本身稳，调用形状不稳。

## 依赖关系

- 三个枚举：[Platform](../Platform) 是 `CurrentPlatform` 的类型且被两个判定方法穷举，[EngineType](../EngineType) 与 [Runtime](../Runtime) 分别对应 `CurrentEngine` / `CurrentRuntimeLibrary`
- 路径解析：[BasePath](../BasePath) 用 `CurrentEngine` / `CurrentPlatform` 决定根目录，[ManagedDllFolder](../ManagedDllFolder) 用 `CurrentPlatform` 决定托管 dll 目录
- 程序集加载：[AssemblyLoader](../AssemblyLoader) 是 `CurrentRuntimeLibrary` 最重的消费者，两处分支都依赖它
- 平台服务装配：[Module](../../core/Module) 的 `LoadPlatformServices` / `LoadSubModules` 是全树最长的平台分支，也是 `AssemblyLoader.LoadFrom` 的主要调用方
- 存档标识：[Campaign](../../campaign/Campaign) 把 `CurrentPlatform.ToString()` 写进存档的 `PlatformID`
- 参数过滤：[ParameterLoader](../ParameterLoader) 用 `CurrentPlatform.ToString()` 去匹配参数文件里的平台段
- 新闻开关：NewsManager 用 `!= Platform.Durango && != Platform.GDKDesktop` 这类否定式判断来决定跳过
- 桶首页：[core-extra API 分区](../)