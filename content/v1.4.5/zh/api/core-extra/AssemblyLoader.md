---
title: "AssemblyLoader"
description: "程序集加载器：LoadFrom 加载单个 dll 并按运行时分支递归拉依赖，外加一个挂在 AppDomain.AssemblyResolve 上的兜底处理器。LoadFrom 失败会弹模态错误框（除非 showError: false），并递归加载引用程序集时会用 out result 覆盖调用方传入的 result。"
---

# AssemblyLoader

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class AssemblyLoader`
**Base:** 无
**File:** `TaleWorlds.Library/AssemblyLoader.cs`

## 概述

`AssemblyLoader` 是游戏的**程序集加载入口**。它做两件事：用 `Assembly.LoadFrom` 加载指定的 dll（并按运行时类型分叉，决定要不要递归拉依赖），以及在静态构造器里往 `AppDomain.CurrentDomain.AssemblyResolve` 挂一个兜底处理器，让「按名字找不到程序集」的情况有第二次机会。

它承担的是**「mod 子模块与引擎回调 dll 的装载」**这一环。最重要的消费方是 `TaleWorlds.Core` 的 `[Module](../../core/Module)` 体系：`Module.cs:145` 的 `CollectModuleAssemblyTypes` 用 `AssemblyLoader.LoadFrom` 的 `AssemblyLoadResult` 判断子模块能否加载，`Managed.cs:219` 调 `AssemblyLoader.Initialize()`。**换句话说，没有它，mod 的 dll 进不来。**

## 心智模型

把它当成**「加载器 + 一个全局兜底钩子」**，而不是「一个普通的 LoadFrom 包装」。判断什么时候会用它：**你要加载的不是当前程序集引用的 dll**（比如一个 mod 的独立 dll），或者你要拿到 `AssemblyLoadResult` 这个三态结果。

**心智模型的核心是「三个静默失效点」。** 这个类最危险的特征不是它会崩溃，而是**它在三种情况下不崩溃但也不工作**：

**第一，`LoadFrom` 失败会弹模态错误框。** `:52` 是 `Debug.ShowMessageBox("Cannot load: " + assemblyFile, "ERROR", 4u);`，**只在 `showError` 为 true 时执行**——而 `showError` 的默认值就是 `true`。**在无头环境（专用服务器、自动化测试）里这会挂住整个进程。** 更隐蔽的是它在 `try/catch` 内部：`:42` 先 `Debug.Print("Loading assembly: ...")`，然后 `try { Assembly.LoadFrom } catch { ... }`。**所以「加载失败」表现为一个弹窗加一行日志，返回值是 `null`。**

**第二，`out result` 会被递归调用覆盖。** 这是本页最隐蔽的一处。`LoadFrom(string, out AssemblyLoadResult, bool)` 的递归分支在 `:70`：

```csharp
LoadFrom(text, out result);
if (result != AssemblyLoadResult.Success)
{
    result = AssemblyLoadResult.LoadedWithErrors;
}
```

**注意递归调用用的是同一个 `out result` 形参**，也就是说**每一个依赖程序集的加载结果都会覆盖上层的 `result`**。如果本 dll 加载成功但它依赖的某个 dll 失败，最终返回的 `result` 会是 `LoadedWithErrors`——**这大概是有意的**；但反过来，**如果本 dll 加载成功后依赖链上有多个 dll，最后一个被加载的 dll 的结果决定了最终值。** `result` 不是「本次调用的结果」，而是「整条依赖链的结果」。

**第三，`AssemblyResolve` 兜底只在 Mono + Windows 上生效。** `:92`：

```csharp
if (ApplicationPlatform.CurrentRuntimeLibrary == Runtime.Mono && ApplicationPlatform.IsPlatformWindows())
{
    return LoadFrom(args.Name.Split(new char[1] { ',' }, StringSplitOptions.RemoveEmptyEntries)[0] + ".dll", showError: false);
}
return null;
```

**三个条件缺一不可**：运行时是 Mono、平台是 Windows、且带 `showError: false`。**在 .NET Core 上这条路径整个不执行**（因为 .NET Core 走 `:61` 的递归预加载分支）。所以**同一份 mod dll 在 Mono 与 .NET Core 上的加载行为完全不同。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `LoadFrom(string, bool)` | `public static Assembly LoadFrom(string assemblyFile, bool showError = true)` | 便利重载，内部 `return LoadFrom(assemblyFile, out result, showError);`。**注意它内部声明了一个丢弃的局部变量 `AssemblyLoadResult result`**（`:35`），所以**从这条重载拿不到结果状态**——想知道成功与否必须用带 `out` 的重载。 |
| `LoadFrom(string, out AssemblyLoadResult, bool)` | `public static Assembly LoadFrom(string assemblyFile, out AssemblyLoadResult result, bool showError = true)` | **核心实现**。流程：`Debug.Print` → `try Assembly.LoadFrom` → 成功置 `Success`、失败走 `Debug.ShowMessageBox` + `Debug.Print` 并置 `CriticalError` → 若运行时是 `DotNetCore` 且程序集未在 `_loadedAssemblies` 里，则递归加载它的引用程序集 → `Debug.Print` 结果 → 返回。**失败返回 `null`，不抛异常。** |
| `AssemblyLoadResult` | `public enum AssemblyLoadResult { Success, LoadedWithErrors, CriticalError }` | 三态结果。`Success` = 本 dll 与全部依赖都加载成功；`LoadedWithErrors` = 至少一个依赖失败；`CriticalError` = 本 dll 自己就加载失败。**三个成员无显式赋值，按声明顺序即 0/1/2。** |
| 静态构造器 | `static AssemblyLoader()` | 首次触碰本类时执行：`new List<Assembly>()`、把 `AppDomain.CurrentDomain.GetAssemblies()` 的全部程序集灌进 `_loadedAssemblies`、然后 `AppDomain.CurrentDomain.AssemblyResolve += OnAssemblyResolve;`。**这就是「未加载即已挂钩」——不需要显式调用任何东西。** |
| `Initialize()` | `public static void Initialize()` | **函数体是空的**（`:29-31` 只有一对大括号）。它是给外部一个「确保静态构造器跑过」的调用点——`Managed.cs:219` 调它。**但触发静态构造器根本不需要它，所以这一行是纯粹的礼貌性调用。** |
| `OnAssemblyResolve` | `private static Assembly OnAssemblyResolve(object sender, ResolveEventArgs args)` | 兜底处理器。先在**当前已加载的全部程序集**里按 `assembly.FullName == args.Name` 精确匹配；找不到时，**仅当运行时是 Mono 且平台是 Windows**，才按名字第一段拼 `.dll` 再 `LoadFrom(..., showError: false)`；否则返回 `null`。**私有方法，只能通过 `AssemblyResolve` 事件间接触发。** |
| `_loadedAssemblies` | `private static List<Assembly> _loadedAssemblies` | 已加载程序集的追踪表，静态构造器里用当前域的程序集初始化。**它只服务于 `:61` 的去重判断**（`!_loadedAssemblies.Contains(assembly)`）——注意它**从不被移除任何项**，所以一个程序集一旦记录就永远在表里。 |
| （运行时分叉）`Runtime.DotNetCore` | `ApplicationPlatform.CurrentRuntimeLibrary == Runtime.DotNetCore`，`:61` | **决定是否递归预加载引用程序集**，且会跳过 `System*` / `mscorlib*` / `netstandard*` 开头的依赖名（`:68`）。**这是 Mono 与 .NET Core 加载行为分叉的唯一开关。** |
| （依赖过滤）`StartsWith` 判断 | `:68` 的 `!text.StartsWith("System") && !text.StartsWith("mscorlib") && !text.StartsWith("netstandard")` | 递归加载时跳过 BCL 程序集。**注意这是前缀匹配而非精确匹配**——任何以 `System` 开头的依赖名（自定义的 `SystemFoo.dll`）会被误跳过。 |

## 真实示例

加载一个 mod 的 dll 并检查三态结果——**注意必须用带 `out` 的重载才拿得到状态**：

```csharp
private Assembly LoadModAssembly(string dllPath)
{
    Assembly assembly = AssemblyLoader.LoadFrom(dllPath, out AssemblyLoader.AssemblyLoadResult result);
    if (assembly == null)
    {
        // CriticalError: the dll itself failed. Note that the default showError:true
        // also popped a modal message box before we got here.
        Debug.Print("failed to load " + dllPath + " result=" + result, 0);
        return null;
    }

    if (result == AssemblyLoader.AssemblyLoadResult.LoadedWithErrors)
    {
        // At least one referenced assembly failed. This flag can come from a
        // dependency, not from this dll itself, because the recursive call
        // writes into the same out parameter.
        Debug.Print("loaded with dependency errors: " + dllPath, 0);
    }

    return assembly;
}
```

在无头环境下关掉弹窗——**这是服务端与自动化场景必须做的一步**：

```csharp
public class MyServerLoader
{
    public void LoadWithoutBlockingTheMainThread()
    {
        // Default showError:true pops a modal Debug.ShowMessageBox on failure
        // (AssemblyLoader, line 52), which hangs a headless process. Always pass
        // false off-screen.
        Assembly assembly = AssemblyLoader.LoadFrom(
            "Modules/MyMod/bin/MyMod.dll",
            out AssemblyLoader.AssemblyLoadResult result,
            showError: false);

        if (assembly == null || result == AssemblyLoader.AssemblyLoadResult.CriticalError)
        {
            Debug.Print("mod load failed, result = " + result, 0);
            return;
        }

        Type[] types = assembly.GetTypes();
        Debug.Print("loaded " + types.Length + " types", 0);
    }
}
```

看清单参数重载的代价——**它把结果状态直接丢掉**：

```csharp
public static class LoaderComparison
{
    public static void ShowTheDifference()
    {
        string path = "Modules/MyMod/bin/MyMod.dll";

        // The convenience overload discards the result: the implementation declares
        // AssemblyLoadResult result and never surfaces it.
        Assembly a = AssemblyLoader.LoadFrom(path);
        Debug.Print("convenience overload returned null? " + (a == null), 0);

        // The out overload is the only way to learn why.
        Assembly b = AssemblyLoader.LoadFrom(path, out AssemblyLoader.AssemblyLoadResult result);
        Debug.Print("out overload result = " + result, 0);
    }
}
```

## 风险与边界

- **失败会弹模态框。** `:52` 的 `Debug.ShowMessageBox`，`showError` 默认 `true`。**无头环境（专用服务器、CI、自动化测试）会直接挂死。** 任何非交互场景都必须显式传 `showError: false`。
- **失败返回 `null` 而不抛异常。** `try/catch` 把 `Assembly.LoadFrom` 的异常全吞了。**调用方不做 null 检查就会在后面某处 NRE，而错误现场离真正的原因十万八千里。**
- **`out result` 会被递归调用覆盖。** `:70` 的 `LoadFrom(text, out result)` 用的是同一个 `out` 形参，所以 `result` 表达的是**整条依赖链**的结果，不是「本次调用」的结果。**不要把它当成局部诊断信息。**
- **递归预加载只在 `Runtime.DotNetCore` 上发生。** `:61` 的条件包含它。**在 Mono 上，依赖是靠 `AssemblyResolve` 事件按需解析的，而不是一次性拉齐。** 同一份 mod 在两种运行时下的加载失败点不同。
- **`AssemblyResolve` 兜底只在 Mono + Windows 上生效。** `:92` 的两个条件缺一不可，**在 .NET Core 上直接 `return null`**。
- **`OnAssemblyResolve` 按 `FullName` 精确匹配。** `:88` 是 `assembly.FullName == args.Name`。**版本号或公钥令牌差一点就匹配不上**，然后才轮到按名字拼 `.dll` 的兜底——而那条兜底又是平台受限的。
- **依赖过滤是前缀匹配。** `:68` 的 `StartsWith("System")` 会把任何自定义的 `SystemFoo.dll` 一并跳过。**这是一个真实的误伤面。**
- **`_loadedAssemblies` 只增不减。** 它从不被移除任何项，所以 `:61` 的 `!_loadedAssemblies.Contains(assembly)` 一旦为假就永久为假。**重复加载同一个 dll 不会重复递归，但也不会刷新它的依赖。**
- **`Initialize()` 是空的。** 它只是触发静态构造器，而那本来就会在首次触碰时发生。**`Managed.cs:219` 调它没有任何实际作用。**
- **`OnAssemblyResolve` 是 private 的。** 你不能直接调用它；只能通过 `AppDomain.CurrentDomain.AssemblyResolve` 事件间接触发。**也无法取消订阅**（没有对应的公开方法）。
- **静态构造器有副作用且不可逆。** 它注册的是一个**进程级**的 `AppDomain.CurrentDomain.AssemblyResolve` 处理器。**第一次触碰 `AssemblyLoader`（哪怕只是想读一个枚举）就会挂上它**，此后整个 AppDomain 都带着这个处理器。
- **`GetTypes()` 可能抛 `ReflectionTypeLoadException`。** 加载成功之后调 `assembly.GetTypes()` 仍可能失败——`Module.cs:155-190` 的 `CollectModuleAssemblyTypes` 有完整的 try/catch 与 `ex2.LoaderExceptions` 处理，但**你自己的调用点需要自己写**。

## 跨版本提示

`AssemblyLoader.cs` 在 1.4.5 是 98 行、含一个嵌套枚举 `AssemblyLoadResult`、一个公开静态类与三个公开成员，是原始源码形态。**跨版本真正值得核对的是四处与外部世界的耦合**：`[MBCallback]` 之外的 `AppDomain.CurrentDomain.AssemblyResolve` 订阅方式（.NET 6+ 移除了 `AppDomain.AssemblyResolve` 的部分行为，迁移到 CoreCLR 运行时可能需要改成 `AssemblyLoadContext`）；`Runtime` 枚举的成员集合（多一个运行时 = 多一条分叉分支）；`Module.cs` 的 `CollectModuleAssemblyTypes` 是否仍然用它的三态结果；以及 `ManagedDllFolder.Name` 的路径来源——`GameApplicationDomainController.cs:49-50` 依赖它拼出要加载的 dll 名。**注意 1.4.x 后期版本把游戏迁到了自定义 `AssemblyLoadContext` 体系，mod 的加载入口随之变化——所以「怎么加载 mod dll」这个问题在跨版本时必须重新查，不能照搬本页。**

## 依赖关系

- 运行时状态：[ApplicationPlatform](../ApplicationPlatform) 的 `CurrentRuntimeLibrary` 决定 `:61` 与 `:92` 两条分叉分支的行为——**读它等于决定程序集加载策略**
- 主要消费方：[Module](../../core/Module) 的 `CollectModuleAssemblyTypes`（`Module.cs:155`）用 `AssemblyLoadResult` 判断子模块能否加载；`Module.cs:141/145-168` 是返回值处理
- 启动调用：`TaleWorlds.DotNet/Managed.cs:219` 的 `AssemblyLoader.Initialize()`（空实现）
- 回调 dll：`TaleWorlds.DotNet/Managed.cs:232`、`TaleWorlds.Engine/EngineManaged.cs:46`、`TaleWorlds.MountAndBlade/CoreManaged.cs:75` 都用 `LoadFrom(ManagedCallbacksDll).GetTypesSafe()` 加载原生回调实现
- 路径来源：`ManagedDllFolder.Name`（依赖 `ApplicationPlatform.CurrentPlatform`）被 `GameApplicationDomainController.cs:49-50` 用来拼 dll 名
- 反射宿主：`System.Reflection.Assembly` 与 `AppDomain.CurrentDomain`
- 报错出口：[Debug](../Debug) 的 `ShowMessageBox` / `Print`，两者都在 `try/catch` 或方法尾部
- 桶首页：[core-extra API 分区](../)