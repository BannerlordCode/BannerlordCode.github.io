---
title: "ModuleInfo"
description: "TaleWorlds.ModuleManager 中单个模块的元数据记录：版本、分类、文件夹路径、激活状态，以及子模块与依赖/不兼容模块拓扑。"
---
# ModuleInfo

**Namespace:** `TaleWorlds.ModuleManager`
**Module:** `TaleWorlds.ModuleManager`
**Type:** `public class ModuleInfo`
**Source:** `TaleWorlds.ModuleManager/ModuleInfo.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`ModuleInfo` 是模块注册表里的一条**记录**：一个 `ModuleInfo` 实例 = `Modules/` 目录下的一个模块文件夹 = 一份 `SubModule.xml`。

它同时承载四类信息：

1. **身份**：`Id`、`Name`、`FolderPath`、`Type`（`ModuleType`）、`Category`（`ModuleCategory`）。
2. **版本与兼容**：`Version`、`RequiredBaseVersion`。
3. **状态**：`IsActive`、`IsSelected`、`IsOfficial`、`IsDefault`、`IsRequiredOfficial`、`IsNative`、`HasMultiplayerCategory`。
4. **拓扑**：四个 `public readonly List<>` 字段 —— `SubModules`、`DependedModules`、`ModulesToLoadAfterThis`、`IncompatibleModules`。

唯一正常的构造路径是 **`LoadWithFullPath(string fullPath)`**：给它一个模块文件夹路径，它解析该目录下的 `SubModule.xml`，把上面所有字段一次性填好（含四个列表）。`new ModuleInfo()` 只创建空壳，单独使用没有意义。

实例由 `ModuleHelper` 在启动时批量创建并持有，mod 通过 `ModuleHelper.GetModuleInfo(...)` 等入口取得，**不要自己 new 一个来代表已安装的模块**。

## 心智模型

```
Modules/<模块文件夹>/
  └── SubModule.xml  ──LoadWithFullPath(folder)──►  ModuleInfo
                                                      ├─ Id / Name / FolderPath / Type / Category
                                                      ├─ Version / RequiredBaseVersion
                                                      ├─ IsActive / IsOfficial / IsDefault ...
                                                      └─ SubModules / DependedModules
                                                         ModulesToLoadAfterThis / IncompatibleModules
```

- **`ModuleInfo` 是数据，不是行为。** 除 `ActivateModule` / `DeactivateModule` / `UpdateVersionChangeSet` 外，它没有业务逻辑。想「做事」找 `ModuleHelper`。
- **拓扑字段是加载顺序的真相来源。** `DependedModules` = 我必须在其之后加载；`ModulesToLoadAfterThis` = 别人必须在我之后加载；`IncompatibleModules` = 不能与我共存；`SubModules` = 我内部的子模块入口（每个 `SubModuleInfo` 有自己的程序集与类型）。引擎的排序算法读的就是这四个列表。
- **`Id` 是唯一稳定的键，`Name` 只是显示名。** 存档、配置、依赖声明都写 `Id`；用 `Name` 做判断会在本地化/改名时崩掉。
- **激活态是启动期事实。** `IsActive` 在启动器决定模块组合时被写入；`IsSelected` 是启动器 UI 的选择状态（可写）。运行期把 `IsActive` 当作冻结的输入条件。
- **`IsOfficial` / `IsDefault` / `IsRequiredOfficial` / `IsNative` 是分类标签**，用于启动器排序与「官方内容」判定，不代表是否激活。

## 怎么用

### 怎么拿到

不要 `new ModuleInfo()`。统一从 `ModuleHelper` 取：

```csharp
using TaleWorlds.ModuleManager;

ModuleInfo info = ModuleHelper.GetModuleInfo("MyMod");   // 单个，可能为 null
List<ModuleInfo> all = ModuleHelper.GetModules();        // 全部
List<ModuleInfo> active = ModuleHelper.GetActiveModules();
```

只有在你**自己实现启动器/工具**、要解析一个尚未注册进模块表的目录时，才手动构造：

```csharp
var info = new ModuleInfo();
info.LoadWithFullPath(@"D:\Games\Mount & Blade II Bannerlord\Modules\MyMod");
// 之后 info.Id / info.Version / info.SubModules 等全部可用
```

### 典型用法

**1. 读取模块版本（存档兼容性判断）**

```csharp
ModuleInfo info = ModuleHelper.GetModuleInfo("MyMod");
if (info != null)
{
    ApplicationVersion required = info.RequiredBaseVersion;
    ApplicationVersion actual = info.Version;
    // 用两者做兼容性/迁移判断
}
```

**2. 遍历模块的子模块入口**

```csharp
foreach (SubModuleInfo sub in info.SubModules)
{
    // sub 描述该子模块的程序集与入口类型
}
```

**3. 走一遍依赖拓扑**

```csharp
foreach (DependedModule dep in info.DependedModules)         // 我必须后于它们加载
foreach (DependedModule after in info.ModulesToLoadAfterThis) // 它们必须后于我加载
foreach (DependedModule bad in info.IncompatibleModules)      // 不能与我共存
```

**4. 在启动器里切换选择状态**

```csharp
info.IsSelected = true;   // 唯一可直接写的状态位（启动器 UI 用）
```

### 坑

- **`LoadWithFullPath` 会重置/填满整条记录。** 它不是「补充信息」，而是完整解析入口；对已经在注册表里的实例再调一次，等于重新解析一遍，可能覆盖状态位。
- **除 `IsSelected` 外的状态位都是 `private set`。** `IsActive` / `Version` / `Id` / `FolderPath` 等只能由 `LoadWithFullPath` 或引擎写入；想改激活态用 `ActivateModule()` / `DeactivateModule()`，不要试图写属性。
- **四个列表是 `readonly` 字段，但列表内容可变。** `readonly` 只保证引用不变，`info.SubModules.Add(...)` 在语法上是合法的 —— 但这样做会让模块表与磁盘不一致。**把四个列表当只读用。**
- **`GetModuleInfo` 返回 `null` 是常态**（模块未安装、Id 拼错）。先判空，再访问 `Version` / `FolderPath`。
- **`FolderPath` 与 `ModuleHelper.GetModuleFullPath(Id)` 语义一致**，二选一即可，不要两处混用。
- **`IsNative` 只对 Native 模块为真**，不要用它代替「官方模块」判断；官方模块判断用 `IsOfficial`。
- **`HasMultiplayerCategory` 与 `Category` 是两个维度**：前者是布尔快捷判断，后者是完整枚举；需要细分时用 `Category`。

## 关键成员

### 身份与版本

| 成员 | 作用 |
| --- | --- |
| `string Id { get; private set; }` | 模块唯一标识，依赖声明与存档都用它。 |
| `string Name { get; private set; }` | 显示名（可本地化），**不要用作键**。 |
| `string FolderPath { get; private set; }` | 模块文件夹完整路径。 |
| `ModuleType Type { get; private set; }` | 模块类型。 |
| `ModuleCategory Category { get; private set; }` | 模块分类。 |
| `ApplicationVersion Version { get; private set; }` | 模块自身版本。 |
| `ApplicationVersion RequiredBaseVersion { get; private set; }` | 该模块要求的基础（游戏）版本。 |

### 状态位

| 成员 | 作用 |
| --- | --- |
| `bool IsSelected { get; set; }` | 启动器 UI 的选择状态；**唯一可写属性**。 |
| `bool IsActive { get; private set; }` | 是否已激活（启动期确定）。 |
| `bool IsOfficial` | 是否官方模块。 |
| `bool IsDefault { get; private set; }` | 是否默认启用。 |
| `bool IsRequiredOfficial` | 是否属于必须存在的官方模块。 |
| `bool IsNative` | 是否 Native（游戏本体根模块）。 |
| `bool HasMultiplayerCategory` | 是否带多人分类（`Category` 的布尔快捷形式）。 |

### 拓扑（`public readonly` 字段）

| 成员 | 作用 |
| --- | --- |
| `List<SubModuleInfo> SubModules` | 模块内部子模块条目；每个描述程序集与入口类型。 |
| `List<DependedModule> DependedModules` | 本模块依赖的模块（必须在本模块之前加载）。 |
| `List<DependedModule> ModulesToLoadAfterThis` | 必须在本模块之后加载的模块。 |
| `List<DependedModule> IncompatibleModules` | 与本模块互斥的模块。 |

### 方法

| 成员 | 作用 |
| --- | --- |
| `ModuleInfo()` | 构造空记录；仅在自行解析路径时使用。 |
| `void LoadWithFullPath(string fullPath)` | 解析模块目录下的 `SubModule.xml`，填满整条记录（含四个列表）。 |
| `void ActivateModule()` | 将模块置为激活态。 |
| `void DeactivateModule()` | 将模块置为非激活态。 |
| `void UpdateVersionChangeSet()` | 重新计算版本变更集（版本变化/存档迁移场景）。 |

## 真实示例

**示例 1：从注册表读取模块并输出其拓扑**

```csharp
using System.Text;
using TaleWorlds.Library;
using TaleWorlds.ModuleManager;

public static void DumpModule(string moduleId)
{
    ModuleInfo info = ModuleHelper.GetModuleInfo(moduleId);
    if (info == null)
    {
        InformationManager.DisplayMessage(
            new InformationMessage("Module not found: " + moduleId));
        return;
    }

    var sb = new StringBuilder();
    sb.AppendLine($"{info.Id} ({info.Name}) v{info.Version}");
    sb.AppendLine($"  active={info.IsActive} official={info.IsOfficial} native={info.IsNative}");
    sb.AppendLine($"  folder={info.FolderPath}");
    sb.AppendLine($"  submodules={info.SubModules.Count}");

    foreach (DependedModule d in info.DependedModules)
        sb.AppendLine($"  needs: {d}");

    foreach (DependedModule d in info.ModulesToLoadAfterThis)
        sb.AppendLine($"  before: {d}");

    foreach (DependedModule d in info.IncompatibleModules)
        sb.AppendLine($"  conflicts: {d}");

    InformationManager.DisplayMessage(new InformationMessage(sb.ToString()));
}
```

**示例 2：自己解析一个尚未注册的模块目录（工具/启动器场景）**

```csharp
using TaleWorlds.ModuleManager;

public static ModuleInfo ParseUnregisteredModule(string folderPath)
{
    var info = new ModuleInfo();
    info.LoadWithFullPath(folderPath);

    // 解析后所有字段都可用
    if (info.RequiredBaseVersion != info.Version)
    {
        // 依赖的基础版本与自身版本不一致，做你的校验
    }

    return info;
}
```

**示例 3：在激活前确认依赖都已激活**

```csharp
using System.Linq;
using TaleWorlds.ModuleManager;

public static bool CanActivate(string moduleId)
{
    ModuleInfo info = ModuleHelper.GetModuleInfo(moduleId);
    if (info == null)
        return false;

    return info.DependedModules.All(d =>
    {
        ModuleInfo dep = ModuleHelper.GetModuleInfo(d.ModuleId);
        return dep != null && dep.IsActive;
    });
}
```

**示例 4：按 `Category` 细分筛选（而不是用布尔快捷位）** —— 多人侧必须同时判 `Multiplayer` 与 `MultiplayerOptional`，只判前者会漏掉所有可选多人模块。

```csharp
using System.Collections.Generic;
using TaleWorlds.ModuleManager;

public static List<ModuleInfo> GetMultiplayerModules()
{
    // 注意：只判 Multiplayer 会漏掉 MultiplayerOptional
    return ModuleHelper.GetModules(m =>
        m.IsActive &&
        (m.Category == ModuleCategory.Multiplayer ||
         m.Category == ModuleCategory.MultiplayerOptional));
}
```

## 参见

- [`../ModuleHelper`](../ModuleHelper) —— 模块表的创建、查询与路径解析入口。
- [`../DependedModule`](../DependedModule) —— 三个依赖/互斥列表的元素类型。
- [`../ModuleCategory`](../ModuleCategory) —— `Category` 的枚举定义。
- [`../_index`](../_index) —— `TaleWorlds.ModuleManager` 桶的全类型索引。

## 导航

- 同桶：[`../ModuleHelper`](../ModuleHelper)
- 同桶：[`../DependedModule`](../DependedModule)
- 同桶：[`../_index`](../_index)
- 父索引：[`modulemanager`](../_index)
