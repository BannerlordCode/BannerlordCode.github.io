---
title: "DependedModule"
description: "描述某个模块所依赖的另一个模块：依赖目标 Id、所需最低版本，以及该依赖是否可选。"
---
# DependedModule

**Namespace:** `TaleWorlds.ModuleManager`
**Module:** `TaleWorlds.ModuleManager`
**Type:** `public struct DependedModule`
**Source:** `TaleWorlds.ModuleManager/DependedModule.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`DependedModule` 是 `SubModule.xml` 里一条 `<DependedModule>`（或 `<DependedModuleMetadata>`）声明在内存中的样子：**一条依赖边**。

它只回答三个问题：

- 我依赖哪个模块？→ `ModuleId`
- 那个模块至少要什么版本？→ `Version`
- 缺了它能不能继续跑？→ `IsOptional`

它是一个 `struct`（值类型），只有 38 行，没有继承、没有接口、没有任何引擎回调 —— 它是一份**纯数据**，被 `ModuleInfo` 持有并对外暴露成一个列表。

## 心智模型

把它想成**依赖图里的一条边**，而不是一个「模块」。

```
ModuleInfo("MyMod")
   └── DependentModules : List<DependedModule>
          ├── { ModuleId = "Native",        Version = 1.4.6.x, IsOptional = false }   ← 硬依赖
          └── { ModuleId = "SomeCosmetic",  Version = 1.4.6.x, IsOptional = true  }   ← 软依赖
```

三个推论：

1. **边是单向的、只读的。** 拿到一条 `DependedModule` 后你只能读，不能改（三个属性全是 `private set`，只有构造函数能写）。
2. **它不负责加载。** 它不会去加载依赖模块，也不会校验版本。真正做排序/加载的是模块系统（`ModuleHelper` 那一层）。你拿到的只是一个声明。
3. **它是值类型。** 赋值 / 传参 / 放进数组都会**复制**。改副本不会影响原始列表里的那一条。

因为 `IsOptional` 的默认值是 `false`，所以「忘记写 optional」= 硬依赖，这是刻意设计的保守默认。

## 怎么用

### 怎么拿到

不要自己 `new` 一个来代表真实依赖。真实实例来自模块描述：

```csharp
ModuleInfo info = ModuleHelper.GetModuleInfo("MyMod");
List<DependedModule> deps = info.DependentModules;   // 引擎解析 SubModule.xml 后填充
```

只有**为测试构造假数据**时才自己 `new`：

```csharp
var fake = new DependedModule("Native", new ApplicationVersion(ApplicationVersionType.EarlyAccess, 1, 4, 6, 0), isOptional: false);
```

### 典型用法

遍历依赖、按「硬 / 软」分类、按 Id 查找、判断某模块是否被依赖：

```csharp
foreach (DependedModule dep in info.DependentModules)
{
    if (dep.IsOptional)
    {
        // 软依赖：缺失只降级功能，不阻止加载
    }
    else
    {
        // 硬依赖：缺失或版本不足 → 模块不该被加载
    }
}

// 我是否硬依赖 "Native"？
bool needsNative = info.DependentModules.Exists(d => d.ModuleId == "Native" && !d.IsOptional);
```

### 坑

- **`Version` 不是「模块的版本」，是「要求的最低版本」。** 别把它当成被依赖模块当前装的版本去比较 —— 你得再查那个模块的 `ModuleInfo` 才知道它实际是什么版本。
- **`private set` 意味着不能打补丁式修改。** 想改依赖，改 `SubModule.xml`，或者构造一个新实例整体替换，不要试图 `dep.ModuleId = ...`（编译不过）。
- **`UpdateVersionChangeSet()` 会把 revision 硬写成 `115628`**（= 当前源码树 `bannerlord-1.4.6` 的 build 号）。它是给引擎做版本变更集对齐用的内部手段，**mod 代码不应该调用**：它不参与版本比较语义，只是把一个常量塞进 `Version` 的 revision 段。
- **值类型复制陷阱：** `var d = list[0]; d.UpdateVersionChangeSet();` 只改副本，`list[0]` 纹丝不动。要改列表里的元素，得写回 `list[0] = d;`（而 `DependentModules` 往往只读，所以实际上还是改不了）。
- **不要拿它当唯一真相源做「依赖是否满足」的判断。** 它不含被依赖模块的实际版本、加载状态或是否被禁用，那需要结合模块系统当前的加载结果。

## 关键成员

| 成员 | 签名 | 说明 |
| --- | --- | --- |
| `ModuleId` | `public string ModuleId { get; private set; }` | 被依赖模块的 Id，与 `<DependedModule Id="...">` 的值一一对应。用它去 `ModuleHelper` 里查对应模块。 |
| `Version` | `public ApplicationVersion Version { get; private set; }` | 依赖**要求的最低版本**。语义是「至少」，不是「等于」。 |
| `IsOptional` | `public bool IsOptional { get; private set; }` | `true` = 软依赖，缺失只降级；`false`（默认）= 硬依赖，缺失即不满足。 |
| `DependedModule(...)` | `public DependedModule(string moduleId, ApplicationVersion version, bool isOptional = false)` | 唯一构造函数。三个属性都只能在这里赋值，所以构造后对象是**不可变**的。 |
| `UpdateVersionChangeSet()` | `public void UpdateVersionChangeSet()` | 把 `Version` 的 revision 段重写为常量 `115628`（本源码树的 build 号），保留 type/major/minor。引擎内部版本对齐用，mod 不要调。 |

## 真实示例

**示例 1：启动时列出某个模块的全部依赖，并区分硬软**

```csharp
using System;
using System.Collections.Generic;
using TaleWorlds.ModuleManager;

public static void DumpDependencies(string moduleId)
{
    ModuleInfo info = ModuleHelper.GetModuleInfo(moduleId);
    if (info == null)
    {
        Console.WriteLine($"[deps] 找不到模块 {moduleId}");
        return;
    }

    List<DependedModule> deps = info.DependentModules;
    Console.WriteLine($"[deps] {moduleId} 共 {deps.Count} 条依赖");

    foreach (DependedModule dep in deps)
    {
        string kind = dep.IsOptional ? "soft" : "hard";
        Console.WriteLine($"  - [{kind}] {dep.ModuleId} >= {dep.Version}");
    }
}
```

**示例 2：判断自己的硬依赖是否全部存在**

```csharp
using System.Linq;
using TaleWorlds.ModuleManager;

public static bool AllHardDependenciesPresent(ModuleInfo self)
{
    return self.DependentModules
               .Where(d => !d.IsOptional)                       // 只看硬依赖
               .All(d => ModuleHelper.GetModuleInfo(d.ModuleId) != null);
}
```

**示例 3：为单元测试构造一条依赖边**

```csharp
using TaleWorlds.ModuleManager;

// 注意：ApplicationVersion 的构造参数顺序为 (type, major, minor, revision, changeSet)
var dep = new DependedModule(
    moduleId: "Native",
    version: new ApplicationVersion(ApplicationVersionType.EarlyAccess, 1, 4, 6, 0),
    isOptional: false);

// 结构体：读属性没问题
bool isHard = !dep.IsOptional;   // true

// 结构体：改的是副本，原对象不变（这里 dep 本身就是变量，所以能看到变化；
// 但若 dep 来自 List<DependedModule> 的元素，就必须写回列表）
dep.UpdateVersionChangeSet();    // Version 的 revision 段被写成 115628
```

## 参见

- [`../ModuleInfo`](../ModuleInfo) —— `DependentModules` 列表的持有者，模块声明的完整载体。
- [`../ModuleHelper`](../ModuleHelper) —— 用 `ModuleId` 去查实际模块、做加载与排序的地方。
- [`../_index`](../_index) —— `TaleWorlds.ModuleManager` 桶的全类型索引。

## 导航

- 同桶：[`../_index`](../_index)
- 父索引：[`modulemanager`](../_index)
