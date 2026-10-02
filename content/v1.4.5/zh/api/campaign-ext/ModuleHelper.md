---
title: "ModuleHelper"
description: "静态模块注册表：把模块 id 映射到磁盘目录、产出依赖顺序正确的模块列表，并遍历从活跃模块可达的程序集。游戏里每一次 SubModule.xml、XML/XSL/XSD 资源定位，以及每一次“这个 mod 装了没有”的判断，最终都走这一个静态类。"
---
# ModuleHelper

**Namespace:** TaleWorlds.ModuleManager  
**Module:** TaleWorlds.ModuleManager  
**Type:** `public static class ModuleHelper`  
**Base:** 无  
**File:** `TaleWorlds.ModuleManager/ModuleHelper.cs`

## 概述

`ModuleHelper` 是游戏的模块注册表兼路径解析器，且是一个纯静态类：`InitializeModules(string[] loadedModuleIds, string[] platformModulePaths = null)` 会从 `<游戏目录>/Modules/` 下的物理文件夹加上注入的平台文件夹，构建出私有的 `_loadedModules` 字典；从那之后，几乎所有其他成员都是对这个字典的查询。查询分三类。第一类是身份：`GetModuleInfo`、`IsModuleActive`、`GetActiveModules`、`GetAllModules`、`GetModules(predicate)`。第二类是顺序：`GetSortedModules(string[])` 基于 `GetDependentModulesOf` 跑一次 `MBMath.TopologySort`，从而保证声明了依赖的 mod 一定排在被依赖方之后。第三类是路径：`GetModuleFullPath`、`GetXmlPath`、`GetXsltPath`、`GetXsdPath`、`GetMbprojPath` 以及 `...ForNative` 变体，生成 XML 加载器、native 侧与 schema 校验器所消费的路径字符串。

第四项职责是程序集发现。`GetActiveGameAssemblies()` 遍历 `AppDomain.CurrentDomain.GetAssemblies()`，保留 DLL 名被活跃模块的 `SubModuleInfo` 直接引用者，然后传递地把它们引用的一切（跳过 `System*`、`Microsoft*`、`mscorlib`、`netstandard`）入队。这个结果正是基于反射的内容注册表所扫描的对象——参见 [CampaignOptionsManager](../../viewmodel/CampaignOptionsManager/)，它遍历的正是这份列表来实例化每一个 `ICampaignOptionProvider`。

## 心智模型

把它读成**“当前装了什么的文件系统视图”**：只填充一次，之后整个进程生命周期都在查询它。

- **加载时序是全部要害**。在 `InitializeModules` 运行之前 `_loadedModules` 是 `null`。任何 `GetModuleInfo` / `GetModuleFullPath` 调用都会在字典上抛 `NullReferenceException`，而不是给出友好错误。模块初始化发生在 `MBSubModuleBase` 启动流程内部，远晚于 `Campaign` 存在，所以从战役代码里查询是安全的；从静态构造函数或 `SubModule` 的字段初始化器里查询则不是。
- **id 大小写不敏感，但存储的 key 是小写**。`GetModuleInfo` 与 `GetModuleFullPath` 都会对参数调用 `.ToLower()`，而 `ModuleInfo.Id` 本身保留原始大小写。`GetSortedModules` 内部用 `==` 比较 `ModuleInfo.Id`（序数、大小写敏感）——它能正常工作，只是因为列表来自同一个一致的来源。
- **`GetSortedModules` 是唯一尊重依赖顺序的排序 API**。`GetActiveModules()` 返回的字典值顺序是未定义的。如果你的 mod 必须在另一个 mod 之后运行，就去排序，不要假设。
- **常见误用陷阱 —— 把 `GetModuleFullPath` 当成“装了吗”的检测**。它直接索引 `_loadedModules[moduleId.ToLower()]`，遇到未知 id 会抛 `KeyNotFoundException`，不像 `GetModuleInfo` 那样返回 `null`。检测请用 `GetModuleInfo` / `IsModuleActive`，只有确认模块存在后才去拿路径。
- **常见误用陷阱 —— `GetActiveGameAssemblies` 很贵**。它会对每个已加载程序集做反射并调用 `GetReferencedAssemblies()`。在启动时调用一次并缓存，绝不要放进每帧路径。
- **`IsTestMode` 会短路整段过滤**。当它为 `true` 时，`GetActiveGameAssemblies()` 直接返回域内的全部程序集，不过滤。测试时很方便，但千万别忘了关。

## 何时使用 / 何时不要用

**该用它的情况：**
- 需要判断一个可选依赖（DLC 模块、另一个 mod）是否存在且处于活跃状态，再决定是否调用它的类型——用 `IsModuleActive` 在调用点做闸门。
- 需要定位属于某个模块的资源路径，比如你自己的 `ModuleData/items.xml`，或者你的自定义 XML 必须通过校验的 XSD。
- 需要一组模块的、尊重依赖的加载顺序（`GetSortedModules`），或者你的代码可以合法反射的程序集集合。
- 你在 `SubModule` 内部，想用自己模块的目录引导一次扫描。

**不该用它的情况：**
- 想在运行时加载一个新模块。`OnModuleActivated` / `OnModuleDeactivated` 只是翻转已注册模块的 `ModuleInfo.IsActive`，并不会把新目录加进 `_loadedModules`。
- 想枚举 .NET 程序集做自己的反射需求。按 `Assembly.GetName().Name` 前缀过滤 `AppDomain.CurrentDomain.GetAssemblies()` 更简单，而且不依赖模块状态。
- 想知道某个 mod 的版本。`ModuleInfo.Version` 只是它自己声明的版本，不是兼容性结论；那要看 `RequiredBaseVersion` / `DependedModule`。

## 依赖关系

- [ModuleInfo](../ModuleInfo) —— 本注册表所保存与返回的单模块记录（`Id`、`FolderPath`、`IsActive`、`SubModules`、`DependedModules`、`ModulesToLoadAfterThis`、`IncompatibleModules`）。
- [SubModuleInfo](../SubModuleInfo) —— 从 `SubModule.xml` 读出的单个程序集声明；它的 `DLLName` 与 `Assemblies` 列表决定了程序集是否“被模块直接引用”。
- [DependedModule](../DependedModule) —— 一条声明的依赖边，构建排序图时 `DependedModules` 与 `ModulesToLoadAfterThis` 都会用到它。
- [MBSubModuleBase](../../core/MBSubModuleBase) —— 你的 `SubModule` 入口；模块初始化以及 `OnModuleDeactivated` / `OnApplicationQuit` 都从这里运行，远晚于 `ModuleHelper` 被填充。
- [CampaignOptionsManager](../../viewmodel/CampaignOptionsManager) —— `GetActiveGameAssemblies()` 的一个具体消费者，用它做基于反射的内容注册。

## 主要成员

### `public static void InitializeModules(string[] loadedModuleIds, string[] platformModulePaths = null)`

填充 `_loadedModules`。扫描物理模块与平台模块，特殊处理 `NavalDLC` 的版本检查（不匹配会弹消息框并调用 `Environment.Exit(0)`），然后对每个被请求的 id，把匹配的 `ModuleInfo` 以小写 key 加入字典，并对官方模块及其依赖调用 `UpdateVersionChangeSet()`。
- **返回值**：无。
- **失败模式**：请求的 id 若找不到对应文件夹会被**静默跳过**——不抛异常、没有任何诊断信息。“mod 看起来没加载”十有八九就是在这里 id 与文件夹名对不上。

### `public static ModuleInfo GetModuleInfo(string moduleId)`

把 id 转小写后返回 `ModuleInfo`，不存在则返回 `null`。这是安全的“存在性探测”。

### `public static bool IsModuleActive(string moduleId)`

先 `GetModuleInfo(id)` 再取 `.IsActive`。未知 id 与“已加载但被停用”都返回 `false`，因此它是“我现在能不能调用这个模块的类型”的正确检查方式。

### `public static string GetModuleFullPath(string moduleId)`

返回该模块的 `FolderPath + "/"`。**未知 id 会抛 `KeyNotFoundException`**——这条路径没有任何防护，而 `GetModuleInfo` 有。

### `public static List<ModuleInfo> GetSortedModules(string[] moduleIDs)`

先通过 `GetModuleInfos` 解析 id（会丢掉未知的），再以 `GetDependentModulesOf` 作为边提供者做拓扑排序。
- **返回语义**：依赖图的边是“本模块依赖的模块”与“声明了在本模块之后加载的模块”的并集，因此 `DependedModules` 与 `ModulesToLoadAfterThis` 都参与排序。
- 若图中存在环，`TopologySort` 无法给出全序——这是模块编写错误，不是本方法能检测的。

### `public static MBList<Assembly> GetActiveGameAssemblies()`

对域内程序集做广度优先遍历，根是每个被活跃模块直接引用的程序集。每个程序集只返回一次，顺序为 BFS 顺序。
- **开销**：对整个 `AppDomain` 做反射。请缓存结果。
- **`IsTestMode`**：为 true 时返回域内**全部**程序集，不做过滤。

### `public static List<ModuleInfo> GetModules(Func<ModuleInfo, bool> cond = null)`

枚举 `_loadedModules.Values`，可选过滤。顺序是字典顺序，即没有意义。`GetActiveModules()` 就是它加上了 `x => x.IsActive`。

### 路径类成员

#### `public static string GetXmlPath(string moduleId, string xmlName)`
`GetModuleFullPath(moduleId) + "ModuleData/" + xmlName + ".xml"` —— mod 定位自身 XML 的标准写法。

#### `public static string GetMbprojPath(string id)`
`FolderPath + "/ModuleData/project.mbproj"`，模块未知时返回 `""`。注意这一条**有**防护。

#### `public static string GetXsdPathForModules(string moduleId, string xsdName)`
`GetModuleFullPath(moduleId) + "ModuleData/XmlSchemas/" + xsdName + ".xsd"` —— 你的自定义 `ModuleData` XML 必须满足的 schema。

#### `public static string GetXsdPath(string xmlInfoId)`
相对 `<游戏目录>/XmlSchemas/`（基础游戏的 schema 目录）解析，而非某个模块目录。用于 `items` 这类基础游戏 schema。

#### `public static string GetXmlPathForNativeWBase(string moduleId, string xmlName)`
返回字面量 `"$BASE/Modules/<moduleId>/<xmlName>"` —— 这是给 native 去替换的模板串，不是真实路径。别拿它去 `File.Exists`。

### `public static void OnModuleActivated(string id)` / `public static void OnModuleDeactivated(string id)`

翻转**已注册**模块的 `ModuleInfo.IsActive`；对未知 id 是空操作。注意 `ModulesDisablingLoadingAfterBeingRemoved` 与 `ModulesDisablingLoadingAfterBeingAdded` 两个静态列表，它们编码了哪些官方模块不允许在运行时被重新开启/关闭。

## 使用示例

### 示例 1 —— 为可选依赖加闸门，并相对它排序

```csharp
using TaleWorlds.ModuleManager;

public class NavalGate
{
    public bool TryEnter()
    {
        // 先探测：IsModuleActive 能容忍未知 id，GetModuleFullPath 不能。
        if (!ModuleHelper.IsModuleActive("NavalDLC"))
        {
            return false;
        }

        string navalRoot = ModuleHelper.GetModuleFullPath("NavalDLC");
        return System.IO.Directory.Exists(navalRoot + "ModuleData");
    }
}
```

### 示例 2 —— 定位本模块资源，并按依赖顺序加载

```csharp
using TaleWorlds.ModuleManager;

public class MyModBootstrap
{
    public void Load()
    {
        // 本模块自己的 XML。
        string itemsXml = ModuleHelper.GetXmlPath("MyMod", "items");
        // 随模块一起分发的 schema。
        string schema = ModuleHelper.GetXsdPathForModules("MyMod", "items");

        // 尊重依赖顺序的模块加载次序。
        foreach (ModuleInfo module in ModuleHelper.GetSortedModules(
                     new[] { "MyMod", "NavalDLC", "SandBox" }))
        {
            System.Console.WriteLine(module.Id + " active=" + module.IsActive);
        }
    }
}
```

### 示例 3 —— 只对活跃模块拥有的程序集做反射

```csharp
using System;
using System.Collections.Generic;
using System.Reflection;
using TaleWorlds.ModuleManager;

public static class ProviderScan
{
    private static List<Assembly> _cache;   // ponytail: 只算一次；这段反射遍历不便宜

    public static IEnumerable<Type> FindProviders(Type openInterface)
    {
        _cache ??= ModuleHelper.GetActiveGameAssemblies();
        foreach (Assembly assembly in _cache)
        {
            foreach (Type type in assembly.GetTypesSafe())
            {
                if (type != null && type != openInterface && openInterface.IsAssignableFrom(type))
                {
                    yield return type;
                }
            }
        }
    }
}
```

## 风险与崩溃边界

- **存档序列化**：`ModuleHelper` 完全不属于存档系统。模块状态存在于**启动器**的模块列表与进程的 `_loadedModules` 里，而不是战役存档中。对 mod 的含义是：存档只记录战役对象，读档时使用的是**当前启用的模块集合**。一个开着某 mod 存的档、关掉该 mod 再读，会因类型缺失而不同步甚至崩溃，而 `ModuleHelper` 无法向你提示这一点。
- **跨域依赖**：该类位于 `TaleWorlds.ModuleManager`，这是战役、任务、UI 代码都会引用的底层程序集。所以在哪儿调用都安全——但也意味着这里的一次错误是**进程级**的，不是战役级的。
- **加载时序**：在 `InitializeModules` 之前 `_loadedModules` 为 `null`，包括 `GetModuleInfos`、`GetModules`、`GetAllModules` 在内的任何访问都会解引用它。请在 `SubModule` 钩子里查询，绝不要在可能于程序集加载期运行的静态/字段初始化器里。
- **ID 稳定性**：模块 id 来自 `SubModule.xml`，并作为字典 key（小写）。改了模块文件夹却没改 id，会同时打断所有路径查找**和**所有依赖声明。两个版本分隔符（`ModuleVersionSeperator ':'`、`ModuleCodeSeperator ';'`）属于 `SubModule.xml` 的 id 语法——不要在 id 里使用这两个字符。
- **`GetModuleFullPath` 抛异常，`GetModuleInfo` 返回 `null`**。把两者用混，会把“mod 未安装”变成一个毫无有用信息的 `KeyNotFoundException`。
- **版本检查里的 `Environment.Exit(0)`**。在静态初始化路径上硬杀进程是不可恢复的；不要因为伪造模块 id 而误触发它。
- **`ModulesDisablingLoadingAfterBeingRemoved` / `ModulesDisablingLoadingAfterBeingAdded`**。这是针对官方模块的声明式守卫。违反这两个列表去翻转 `StoryMode` 或 `NavalDLC` 的 `IsActive`，会把游戏推进基础游戏从不创建的状态。

## 跨版本提示

- **v1.3.x → v1.4.5**：静态接口保持稳定——`InitializeModules`、`GetModuleInfo`、`IsModuleActive`、`GetModuleFullPath`、`GetSortedModules`、`GetActiveGameAssemblies` 与各路径方法的签名都不变。`GetSortedModules` 仍返回 `List<ModuleInfo>`（它会把 `MBMath.TopologySort` 返回的 `IList` 转成该类型）。
- **v1.4.5**：`GetXmlPathForNativeWBase` 刻意返回 `$BASE/Modules/...` 模板而不是解析后的路径——读反编译源码时这是常见的误解来源，因为它看起来像一个正常的绝对路径。
- **v1.4.5**：不存在名为 `LoadModule`、`UnloadModule` 或 `AddModule` 的成员。模块集合的变更是启动器/启动期概念；本类只暴露对已知模块的激活开关。

## 参见

- ↑ 父级目录：[Campaign-Ext API 索引](../)
- ↔ 同级：[ModuleInfo](../ModuleInfo) —— 本注册表保存并返回的记录
- ↔ 同级：[SubModuleInfo](../SubModuleInfo) —— 模块内的单程序集声明
- ↔ 同级：[DependedModule](../DependedModule) —— 排序图使用的一条依赖边
- ↔ 跨桶：[CampaignOptionsManager](../../viewmodel/CampaignOptionsManager) —— `GetActiveGameAssemblies()` 的消费者
- ↑ 钩子声明：[MBSubModuleBase](../../core/MBSubModuleBase)
