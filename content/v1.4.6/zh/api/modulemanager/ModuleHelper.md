---
title: "ModuleHelper"
description: "TaleWorlds.ModuleManager 的静态入口：枚举与查询游戏模块、判定激活状态、按依赖排序加载顺序，并解析模块内的 XML/XSLT/XSD/MBPROJ 路径。"
---
# ModuleHelper

**Namespace:** `TaleWorlds.ModuleManager`
**Module:** `TaleWorlds.ModuleManager`
**Type:** `public static class ModuleHelper`
**Source:** `TaleWorlds.ModuleManager/ModuleHelper.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`ModuleHelper` 是 v1.4.6 中**唯一**对 mod 开放的模块系统门面。它把「磁盘上的 Modules 目录」变成一张内存里的模块表，并对外回答三类问题：

1. **有哪些模块**：`GetAllModules` / `GetModules` / `GetModuleInfos` / `GetActiveModules` / `GetOfficialModuleIds`。
2. **某个模块是什么状态**：`GetModuleInfo` / `IsModuleActive` / `GetModuleFullPath`。
3. **某个模块的文件在哪**：`GetPath` / `GetXmlPath` / `GetXsltPath` / `GetXsdPath` / `GetXsdPathForModules` / `GetXmlPathForNative` / `GetXmlPathForNativeWBase` / `GetXsltPathForNative` / `GetMbprojPath`。

它是 `static class`，**没有实例、不能被继承**，也不持有你需要自己管理的生命周期：模块表由启动器在游戏启动早期通过 `InitializeModules` 填好，之后整个进程生命周期内都可读。

同一个文件里还承担了**启动器流程**（`InitializeModules` / `InitializeSingleModule` / `OnModuleActivated` / `OnModuleDeactivated` / `InitializePlatformModuleExtension` / `ClearPlatformModuleExtension` / `GetModulesForLauncher`）。这些是给启动器（Launcher）与平台层调用的，mod 调用它们只会破坏已经建立好的模块表。

## 心智模型

把 `ModuleHelper` 想成**一个进程级单例的模块注册表**，而不是工具类：

```
磁盘 Modules/  ──InitializeModules()──►  Dictionary<string, ModuleInfo>  ──查询──►  你的 mod
（SubModule.xml）                         （启动器写入，全进程只读）
```

关键推论：

- **注册表在 mod 加载之前就已经建好。** 你的 `MBSubModuleBase.OnSubModuleLoad()` 执行时，`GetModuleInfo("Native")` 已经能拿到结果；你不需要（也不应该）自己去扫目录。
- **`ModuleInfo` 是注册表里的记录，`ModuleHelper` 是访问它的句柄。** 凡是「拿到某个 `ModuleInfo`」的需求，入口都是 `GetModuleInfo` / `GetModuleInfos` / `GetModules`，而不是 `new ModuleInfo()` + `LoadWithFullPath()`。
- **「激活」是启动器在启动时确定的事实，不是你可以随时切换的开关。** `IsModuleActive` 是只读询问；运行期真正改变激活态的是启动器的 `OnModuleActivated` / `OnModuleDeactivated`（同时会维护依赖集合）。mod 侧把激活态当作**启动时就冻结的输入条件**来用。
- **加载顺序是拓扑排序的结果，不是目录顺序。** `GetSortedModules` / `GetDependentModulesOf` 走的是 `DependedModule` / `ModulesToLoadAfterThis` 图；想知道「谁必须在我之前加载」就用它们，别自己按 Id 排序。
- **路径查询分两套命名。** 带 `ForNative` 的是**游戏本体的根模块**（Native 及其同级），不带后缀的走普通模块目录；`GetPath(id)` 给模块根目录，`GetXmlPath` / `GetXsltPath` / `GetXsdPath` 给模块内具体文件。写 mod 时优先用「不带 ForNative」的那套，并对返回值做存在性判断。

## 怎么用

### 怎么拿到

不需要「初始化」，直接静态调用即可：

```csharp
using TaleWorlds.ModuleManager;

// 按 Id 拿单个模块（拿不到时返回 null）
ModuleInfo native = ModuleHelper.GetModuleInfo("Native");

// 拿全部模块（Dictionary 的 ValueCollection，遍历用）
foreach (ModuleInfo m in ModuleHelper.GetAllModules()) { /* ... */ }

// 条件筛选
List<ModuleInfo> dlcs = ModuleHelper.GetModules(m => m.IsOfficial && m.IsActive);

// 只拿已激活的
List<ModuleInfo> active = ModuleHelper.GetActiveModules();

// 按 Id 批量拿
List<ModuleInfo> some = ModuleHelper.GetModuleInfos(new[] { "Native", "SandBoxCore" });
```

### 典型用法

**1. 软依赖：只在目标模块存在且激活时才打补丁**

```csharp
if (ModuleHelper.IsModuleActive("NavalDLC"))
{
    // 这里才可以安全地引用 NavalDLC 的类型
}
```

**2. 定位模块内的资源文件（XML 配置、XSLT、XSD）**

```csharp
string xmlPath = ModuleHelper.GetXmlPath("MyMod", "config/spawns");
if (!string.IsNullOrEmpty(xmlPath))
{
    // 用 xmlPath 读取你自己的模块数据
}
```

**3. 计算加载顺序 / 依赖闭包**

```csharp
// 谁依赖我、我依赖谁，交给引擎算
IEnumerable<ModuleInfo> deps = ModuleHelper.GetDependentModulesOf(
    ModuleHelper.GetAllModules(), ModuleHelper.GetModuleInfo("MyMod"));

List<ModuleInfo> order = ModuleHelper.GetSortedModules(new[] { "Native", "SandBoxCore", "MyMod" });
```

**4. 拿到当前已加载的游戏程序集（做反射/兼容层时有用）**

```csharp
MBList<Assembly> asms = ModuleHelper.GetActiveGameAssemblies();
```

### 坑

- **不要调用启动器方法。** `InitializeModules` / `InitializeSingleModule` / `OnModuleActivated` / `OnModuleDeactivated` / `InitializePlatformModuleExtension` / `ClearPlatformModuleExtension` / `GetModulesForLauncher` 属于启动器与平台层；mod 调用会重复初始化或把模块表改坏。
- **`GetModuleInfo` 可能返回 `null`**（Id 拼错、模块未安装）。任何使用前都要判空；不要假设「官方模块一定在」。
- **`ModulesDisablingLoadingAfterBeingRemoved = { "StoryMode", "NavalDLC" }` 与 `ModulesDisablingLoadingAfterBeingAdded = { "NavalDLC" }` 是硬编码的 Id 白名单。** 也就是说：存档中途移除 `StoryMode` 或 `NavalDLC`、或中途加入 `NavalDLC`，引擎会直接阻止继续加载。你的 mod 如果依赖这两个模块，必须把「中途增删」当成不支持的操作来处理。
- **`IsTestMode` 是公开的可写静态字段**，仅用于测试/自动化流程。mod 运行期不要依赖它，也不要改它。
- **`ModuleVersionSeperator = ':'` 与 `ModuleCodeSeperator = ';'` 是公开常量**，用于解析模块版本串与模块代码列表；不要硬编码这两个字符。
- **`GetModules()` 无参调用返回的是「全部模块」**，`cond` 只是可选过滤；容易误以为默认只返回激活模块。要激活模块请用 `GetActiveModules()`。
- 返回 `string` 的路径方法**不保证文件存在**，它们只负责拼路径；需要读文件时自己检查。

## 关键成员

### 查询入口（mod 常用）

| 成员 | 作用 |
| --- | --- |
| `GetModuleInfo(string moduleId)` | 按 Id 从模块表取 `ModuleInfo`；不存在返回 `null`。 |
| `GetModuleInfos(string[] moduleIds)` | 按一组 Id 批量取模块，返回 `List<ModuleInfo>`。 |
| `GetModules(Func<ModuleInfo, bool> cond = null)` | 遍历全部模块并按条件过滤；`cond` 为 `null` 时等价于「全部」。 |
| `GetAllModules()` | 返回模块表的 `Dictionary<string, ModuleInfo>.ValueCollection`，只读遍历用。 |
| `GetActiveModules()` | 返回当前已激活的模块列表。 |
| `IsModuleActive(string moduleId)` | 判定模块是否处于激活状态，软依赖分支的标准写法。 |
| `GetOfficialModuleIds()` | 返回官方模块 Id 的 `MBList<string>`。 |
| `GetActiveGameAssemblies()` | 返回当前激活的游戏程序集 `MBList<Assembly>`。 |

### 路径解析（mod 常用）

| 成员 | 作用 |
| --- | --- |
| `GetModuleFullPath(string moduleId)` | 模块根目录的完整路径。 |
| `GetPath(string id)` | 模块根路径（`GetModuleFullPath` 的短名版本）。 |
| `GetXmlPath(string moduleId, string xmlName)` | 模块内 XML 文件的完整路径。 |
| `GetXsltPath(string moduleId, string xsltName)` | 模块内 XSLT 文件的完整路径。 |
| `GetXsdPathForModules(string moduleId, string xsdName)` | 模块内 XSD 文件的完整路径。 |
| `GetXsdPath(string xmlInfoId)` | 按 XML 信息 Id 解析 XSD 路径。 |
| `GetMbprojPath(string id)` | 模块的 `.mbproj` 工程文件路径。 |

### 路径解析（Native 根模块专用）

| 成员 | 作用 |
| --- | --- |
| `GetXmlPathForNative(string moduleId, string xmlName)` | 解析 Native 模块的 XML 路径。 |
| `GetXmlPathForNativeWBase(string moduleId, string xmlName)` | 解析 Native 模块 XML 路径（带 Base 变体）。 |
| `GetXsltPathForNative(string moduleId, string xsltName)` | 解析 Native 模块的 XSLT 路径。 |

### 依赖与排序

| 成员 | 作用 |
| --- | --- |
| `GetDependentModulesOf(IEnumerable<ModuleInfo> source, ModuleInfo module)` | 在 `source` 集合中求出 `module` 的依赖闭包，用于解析「必须先加载谁」；返回的 `ModuleInfo` 里可用 `DependedModule.ModuleId` 继续追边。 |
| `GetSortedModules(string[] moduleIDs)` | 按依赖关系做拓扑排序，返回可直接使用的加载顺序。 |

### 启动器 / 平台层（mod 不要调用）

| 成员 | 作用 |
| --- | --- |
| `InitializeModules(string[] loadedModuleIds, string[] platformModulePaths = null)` | 扫描并建立整个模块表；启动早期由启动器调用一次。 |
| `InitializeSingleModule(string modulePath)` | 从给定路径加载单个模块并返回其 `ModuleInfo`。 |
| `OnModuleActivated(string id)` | 启动器在模块激活时回调，维护激活态与相关集合。 |
| `OnModuleDeactivated(string id)` | 启动器在模块停用时回调。 |
| `InitializePlatformModuleExtension(IPlatformModuleExtension moduleExtension, List<string> args)` | 注入平台相关的模块来源（如主机平台）。 |
| `ClearPlatformModuleExtension()` | 清除平台模块扩展。 |
| `GetModulesForLauncher()` | 提供给启动器 UI 的模块列表（含未激活项）。 |

### 常量与静态字段

| 成员 | 作用 |
| --- | --- |
| `const char ModuleVersionSeperator = ':'` | 模块版本串的分隔符。 |
| `const char ModuleCodeSeperator = ';'` | 模块代码列表的分隔符。 |
| `static bool IsTestMode = false` | 测试模式开关（测试/自动化用，mod 勿依赖）。 |
| `static readonly MBList<string> ModulesDisablingLoadingAfterBeingRemoved` | `{ "StoryMode", "NavalDLC" }`：中途移除这些模块会阻止继续加载。 |
| `static readonly MBList<string> ModulesDisablingLoadingAfterBeingAdded` | `{ "NavalDLC" }`：中途加入该模块会阻止继续加载。 |

## 真实示例

**示例 1：启动时按软依赖决定是否注册行为**

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.ModuleManager;

public class MySubModule : MBSubModuleBase
{
    protected override void OnSubModuleLoad()
    {
        base.OnSubModuleLoad();

        // 只依赖模块 Id 字符串，不直接引用其程序集
        if (ModuleHelper.IsModuleActive("NavalDLC"))
        {
            RegisterNavalHooks();
        }

        // 记录本 mod 的依赖闭包，便于排查加载顺序问题
        ModuleInfo self = ModuleHelper.GetModuleInfo("MyMod");
        if (self != null)
        {
            foreach (ModuleInfo dep in ModuleHelper.GetDependentModulesOf(ModuleHelper.GetAllModules(), self))
            {
                InformationManager.DisplayMessage(
                    new InformationMessage("MyMod depends on: " + dep.ModuleId));
            }
        }
    }
}
```

**示例 2：扫描已激活模块并读取各自的 XML**

```csharp
using System.Collections.Generic;
using TaleWorlds.ModuleManager;

public static class ModuleXmlScanner
{
    public static Dictionary<string, string> CollectConfigPaths()
    {
        var result = new Dictionary<string, string>();

        foreach (ModuleInfo module in ModuleHelper.GetActiveModules())
        {
            // 官方模块与第三方模块用同一套路径解析
            string xml = ModuleHelper.GetXmlPath(module.Id, "config/spawns");
            if (!string.IsNullOrEmpty(xml))
            {
                result[module.Id] = xml;
            }
        }

        return result;
    }
}
```

**示例 3：安全地取模块根目录**

```csharp
using TaleWorlds.ModuleManager;

public static bool TryGetModuleFolder(string moduleId, out string folder)
{
    folder = null;

    ModuleInfo info = ModuleHelper.GetModuleInfo(moduleId);
    if (info == null)               // Id 不存在
        return false;

    folder = info.FolderPath;       // 与 GetModuleFullPath(moduleId) 等价
    return !string.IsNullOrEmpty(folder);
}
```

**示例 4：判断某次模块增删是否会让存档无法继续**

```csharp
using TaleWorlds.ModuleManager;

public static bool IsRiskyModuleChange(string removedId, string addedId)
{
    bool riskyRemoval = ModuleHelper.ModulesDisablingLoadingAfterBeingRemoved.Contains(removedId);
    bool riskyAddition = ModuleHelper.ModulesDisablingLoadingAfterBeingAdded.Contains(addedId);
    return riskyRemoval || riskyAddition;
}
```

## 参见

- [`../ModuleInfo`](../ModuleInfo) —— 模块表里每一条记录的结构、依赖列表与激活方法。
- [`../DependedModule`](../DependedModule) —— `DependedModules` / `ModulesToLoadAfterThis` / `IncompatibleModules` 的元素类型。
- [`../ModuleCategory`](../ModuleCategory) —— 模块分类枚举。
- [`../IPlatformModuleExtension`](../IPlatformModuleExtension) —— `InitializePlatformModuleExtension` 所接收的平台扩展接口。
- [`../_index`](../_index) —— `TaleWorlds.ModuleManager` 桶的全类型索引。

## 导航

- 同桶：[`../ModuleInfo`](../ModuleInfo)
- 同桶：[`../DependedModule`](../DependedModule)
- 同桶：[`../_index`](../_index)
- 父索引：[`modulemanager`](../_index)
