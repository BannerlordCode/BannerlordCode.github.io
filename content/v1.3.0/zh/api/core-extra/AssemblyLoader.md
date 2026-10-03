---
title: "AssemblyLoader"
description: "程序集加载器：静态构造器里挂 AppDomain.AssemblyResolve 兜底钩子，LoadFrom 在 .NET Core 下额外递归预载依赖，是 Module 装配子模块程序集的唯一入口。"
---

# AssemblyLoader

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class AssemblyLoader`
**Base:** 无（静态类，隐式 `System.Object`，不可实例化）
**File:** `TaleWorlds.Library/AssemblyLoader.cs`（102 行 / 3188 字节）

## 概述

`AssemblyLoader` 是游戏加载托管程序集的统一入口，一个静态类，公开面只有两个成员：`LoadFrom(string assemblyFile, bool show_error = true)` 和一个**空实现**的 `Initialize()`。其余都是私有的：静态构造器、`OnAssemblyResolve`（`AppDomain.AssemblyResolve` 的处理器）、以及 `private static List<Assembly> _loadedAssemblies`。

它做的事比名字暗示的多一点。全树有 20 处调用，`[Module](../../core/Module)` 的 `LoadSubModules` 一次就调 5 处（遍历 `subModuleInfo.Assemblies` 预载依赖 + 加载子模块主 dll），`LoadPlatformServices` 调 5 处（按平台挑 `TaleWorlds.PlatformService.*.dll`），`EngineManaged` 和 `CoreManaged` 各调 1 处（加载 native 回调 dll）。

## 心智模型

把它当成**「`.NET` 的 AppDomain 加载器 + 一层 DotNetCore 依赖预热」**就对了。分两段看。

**第一段是静态构造器里的初始化。** 一旦 `AssemblyLoader` 的任何成员被第一次触碰（C# 保证静态构造器先于任何静态方法执行），它做两件事：把 `AppDomain.CurrentDomain.GetAssemblies()` 里**已经加载的全部程序集**塞进 `_loadedAssemblies`，然后 `AppDomain.CurrentDomain.AssemblyResolve += AssemblyLoader.OnAssemblyResolve`。所以**这个类型是「一旦碰就永久改变进程加载行为」的**。

**第二段是 `OnAssemblyResolve` 这个兜底钩子。** 它的逻辑很短：先遍历 `AppDomain.CurrentDomain.GetAssemblies()` 找 `assembly.FullName == args.Name` 的，找到就返回它；找不到则——**只有**在 `ApplicationPlatform.CurrentRuntimeLibrary == Runtime.Mono && ApplicationPlatform.IsPlatformWindows()` 时——按 `args.Name.Split(',')[0] + ".dll"` 调自己的 `LoadFrom(..., false)`；其它情况返回 `null`（交给运行时默认行为）。**这条 Mono + Windows 的限制是理解本类型的钥匙**：GDK Desktop 会被 `IsPlatformWindows()` 判成 Windows，但主机平台不会；`.NET Core` 下这个回退根本不生效。

**第三段是 `LoadFrom` 里的分支。** `ApplicationPlatform.CurrentRuntimeLibrary == Runtime.DotNetCore` 时走一套特殊流程：先 `Assembly.LoadFrom`，**失败时把异常吞掉、把 `assembly` 置 null**（不弹框），成功且不在 `_loadedAssemblies` 里就把它加进去，然后遍历 `assembly.GetReferencedAssemblies()`，对每个不以 `System` / `mscorlib` / `netstandard` 开头的引用递归调 `LoadFrom(name + ".dll", true)`。非 DotNetCore 时只有一句 `Assembly.LoadFrom(assemblyFile)`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `LoadFrom` | `public static Assembly LoadFrom(string assemblyFile, bool show_error = true)` | **唯一的实质入口**。返回 `Assembly` 或 `null`——**失败不抛异常**。`show_error` 为 true 时失败会 `Debug.ShowMessageBox("Cannot load: " + assemblyFile, "ERROR", 4U)` 并 `Debug.Print` 错误信息（含 `InnerException`）。DotNetCore 下还会递归预载被引用程序集。 |
| `Initialize` | `public static void Initialize()` | **空方法**，方法体是空的。它存在的唯一意义是「显式触发静态构造器」——因为那个静态构造器才是真正做初始化的地方。调用 `AssemblyLoader.Initialize()` 等价于让 CLR 跑一次类型初始化。 |
| 静态构造器 | `static AssemblyLoader()` | 私有。播种 `_loadedAssemblies`（当前域已加载的全部程序集）+ 挂 `AppDomain.CurrentDomain.AssemblyResolve`。**只跑一次，进程级不可撤销。** |
| `OnAssemblyResolve` | `private static Assembly OnAssemblyResolve(object sender, ResolveEventArgs args)` | 私有。先按 `FullName` 精确匹配已加载程序集；未命中且「Mono + Windows」时按 `args.Name` 的第一段拼 `.dll` 走 `LoadFrom(..., false)`（**不弹错误框**）；否则返回 `null`。 |
| `_loadedAssemblies` | `private static List<Assembly> _loadedAssemblies` | 私有。既是去重表（DotNetCore 分支用 `Contains` 防止重复递归），也是首轮扫描的缓存。**没有任何公开的查询接口。** |

## 真实示例

按当前平台挑程序集加载（照 [Module](../../core/Module) `LoadPlatformServices` 的形状）：

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
if (assembly != null)
{
    Debug.Print("loaded platform types = " + assembly.GetTypesSafe(null).Count, 0);
}
```

**返回值必须判空**——`LoadFrom` 失败时返回 `null` 而不是抛异常（照 [CoreManaged](../../mission-ext/CoreManaged) 与 [EngineManaged](../../engine/EngineManaged) 的用法）：

```csharp
Assembly managed = AssemblyLoader.LoadFrom(ManagedDllFolder.Name + "TaleWorlds.PlatformService.GOG.dll", true);
if (managed == null)
{
    Debug.Print("platform service dll not found, continuing without it", 0);
    return;
}
List<Type> typesSafe = managed.GetTypesSafe(null);
for (int i = 0; i < typesSafe.Count; i++)
{
    Debug.Print("candidate type = " + typesSafe[i].FullName, 0);
}
```

在 mod 启动时提前把依赖预热（DotNetCore 分支会连带把它的非系统引用一起载入）：

```csharp
public class MySubModule : MBSubModuleBase
{
    protected override void OnSubModuleLoad()
    {
        base.OnSubModuleLoad();
        AssemblyLoader.LoadFrom(ManagedDllFolder.Name + "MyMod.Data.dll", false);
        Debug.Print("MyMod.Data preloaded, runtime = " + ApplicationPlatform.CurrentRuntimeLibrary, 0);
    }
}
```

## 风险与边界

- **失败返回 `null`，不抛异常。** `LoadFrom` 把异常全吃了，失败路径返回 `null`。**每一次调用都必须判空**，否则会在后面某处以 `NullReferenceException` 的形式炸掉，且栈里看不到加载失败这个根因。
- **`show_error` 控制的是弹框，不是行为。** 两种取值都返回 `null`，都 `Debug.Print`。区别只是会不会 `Debug.ShowMessageBox` 弹窗——在无头/自动化环境里 `show_error: true` 可能挂起等用户点掉。
- **静态构造器一碰就改全局。** 挂上 `AppDomain.CurrentDomain.AssemblyResolve` 之后**无法取消**。mod 里任何一次 `AssemblyLoader.LoadFrom(...)` 都会永久改变进程的程序集解析行为。
- **`AssemblyResolve` 兜底只在 Mono + Windows 生效。** `OnAssemblyResolve` 的条件是 `CurrentRuntimeLibrary == Runtime.Mono && IsPlatformWindows()`。`.NET Core`、主机平台、`Web`、`LinuxNoPlatform` 下这个回退全部返回 `null`。别指望它跨平台救你。
- **递归预载只发生在 DotNetCore 分支。** 而且过滤规则是**字符串前缀** `StartsWith("System")` / `"mscorlib"` / `"netstandard"`——所以任何叫 `SystemXxx.dll` 的自有程序集都会被误跳过。
- **`_loadedAssemblies` 无公开接口。** 它只在 DotNetCore 分支参与去重，Mono 分支的重复 `LoadFrom` 不会被拦（`Assembly.LoadFrom` 自身按路径缓存，所以通常无害）。
- **`Initialize()` 是空壳。** 它不返回任何加载结果，别拿它的返回值或副作用做判断——它的唯一作用是触发类型初始化。
- **失败时 `Debug.Print` 会打印 `InnerException`。** 排查加载失败时先看日志里的 `"ERROR: " + assemblyFile + ": " + ex.Message`，那行比后面的 `"Assembly load result: NULL"` 有用得多。
- **路径要自己拼。** `ManagedDllFolder.Name` 是前缀（末尾带分隔符），`LoadFrom` 接受相对或绝对路径，全靠调用方拼对。

## 跨版本提示

`AssemblyLoader.cs` 在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵树里**行数相同但字节数不同**：1.3.0 是 3188 字节，1.3.15 是 3195 字节，1.4.6 / 1.4.7 / 1.5.3 都是 3768 字节。

**1.4.6 起的真实 API 变化**（这是本组里唯一一个有签名变更的类型，跨版本升级时最容易编译不过的一个）：

- `LoadFrom` 多了一个重载 `public static Assembly LoadFrom(string assemblyFile, out AssemblyLoader.AssemblyLoadResult result, bool showError = true)`
- 新增嵌套枚举 `public enum AssemblyLoadResult { Success, LoadedWithErrors, CriticalError }`
- 参数名从 `show_error` 改成 `showError`
- DotNetCore 的递归预载从 `if` 分支**挪到了 try/catch 之后**，且递归调用改用新的 `out` 重载并在子加载失败时把 `result` 降级为 `LoadedWithErrors`

**1.4.6 之前的调用方式在 1.4.6 之后依然有效**（旧重载保留了，只是内部转发到新重载并丢弃 `result`），所以单一调用点的代码通常不用改；但如果你需要区分「加载成功但有依赖缺失」和「彻底失败」，那个能力**只有 1.4.6+ 才有**。

其余三个类型（[AmbientInformation](../AmbientInformation)、[AreaInformation](../AreaInformation)、[AsyncRunner](../AsyncRunner)）在五棵树里逐字节一致——它们是这批里最稳的。

## 依赖关系

- 运行环境判定：[ApplicationPlatform](../ApplicationPlatform) 的 `CurrentRuntimeLibrary` 与 `IsPlatformWindows()` 决定 `LoadFrom` 走哪条分支、`OnAssemblyResolve` 是否生效
- 路径拼接：[ManagedDllFolder](../ManagedDllFolder) 提供 `ManagedDllFolder.Name` 这个前缀，`LoadFrom` 的每个实参都由调用方拼成
- 主要调用方：[Module](../../core/Module) 的 `LoadSubModules` / `LoadPlatformServices` 是全树最密集的使用点
- 类型枚举辅助：`assembly.GetTypesSafe(null)` 是拿到 `List<Type>` 的安全包装，引擎回调注册依赖它
- 错误呈现：[Debug](../Debug) 的 `ShowMessageBox` / `Print` / `DebugColor` 是加载失败时的唯一可见信号
- 承载对象：[AtmosphereInfo](../AtmosphereInfo) 与 [AreaInformation](../AreaInformation) 展示了同一程序集里另一类（原生结构镜像）如何被 `AssemblyInfo.cs` 注册，与本类型的加载职责互不重叠
- 桶首页：[core-extra API 分区](../)