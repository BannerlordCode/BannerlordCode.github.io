---
title: "DependedModule"
description: "模块依赖三元组 struct：ModuleId / Version / IsOptional 三个 private-set 属性加一个构造函数。UpdateVersionChangeSet 把 Version 的 changeSet 硬写成 89406，但两处调用点都是值拷贝，改完即丢。"
---

# DependedModule

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `public struct DependedModule`
**Base:** 无（值类型，隐式实现 `IEquatable` 之外的一切接口都没实现）
**File:** `TaleWorlds.ModuleManager/DependedModule.cs`（39 行）

## 概述

一个 **39 行的值类型**，语义上就是「模块 XML 里的一条依赖声明」的三元组：依赖谁（`ModuleId`）、要什么版本（`Version`）、能不能缺（`IsOptional`）。整个 `TaleWorlds.ModuleManager` 只有这一个 struct 承载模块间依赖，它同时被三个不同的 XML 节点复用：

| XML 节点 | 建值代码 | 语义差别 |
| --- | --- | --- |
| `<DependedModules><DependedModule Id= DependentVersion= Optional= />` | `ModuleInfo.cs:177` | 真依赖：读 `DependentVersion` 与 `Optional` |
| `<ModulesToLoadAfterThis><Module Id= />` | `ModuleInfo.cs:187` | 只排序，**版本写死 `ApplicationVersion.Empty`**，`isOptional` 写死 `false` |
| `<IncompatibleModules><Module Id= />` | `ModuleInfo.cs:197` | 互斥，同样写死 `Empty` / `false` |

三个构造点都走同一个三参构造函数，所以**「真依赖」和「只是排序/互斥」在类型层面无法区分**——唯一区别是 `Version` 里是不是 `Empty`（`ApplicationVersionType.Invalid`、`-1/-1/-1/-1`）。这个区分由 [ModuleHelper](../ModuleHelper) 之类的调用方自己判断，struct 自己不记录。

三个属性全是 `get; private set;`，没有任何 public setter。唯一的写入路径是构造函数和 `UpdateVersionChangeSet()`。

```csharp
// DependedModule.cs:33-36
public void UpdateVersionChangeSet()
{
    this.Version = new ApplicationVersion(this.Version.ApplicationVersionType, this.Version.Major, this.Version.Minor, this.Version.Revision, 89406);
}
```

它保留 `ApplicationVersionType` / `Major` / `Minor` / `Revision` 四个字段，只把 changeSet 替换成**编译进这个 DLL 的常量 `89406`**（1.3.0 的 build 号）。

## 心智模型

**把它当成「模块加载器手写的一份依赖清单的其中一行」，而不是一个可被查询的对象。** 它没有任何查询方法、没有相等性重载、没有 `ToString`；你在运行期几乎永远不会主动 `new` 一个——它们全部由 `ModuleInfo.LoadFrom` 在解析 XML 时批量创建，塞进三个 `readonly List<DependedModule>`（[ModuleInfo](../ModuleInfo) 的 `DependedModules` / `ModulesToLoadAfterThis` / `IncompatibleModules`，`ModuleInfo.cs:245/248/251`）。

`UpdateVersionChangeSet` 的心智模型是「把依赖方的版本号补上**本引擎**的 build 号，好让启动器报「你依赖的模块是为旧版本编译的」这种更准的错」。它是一段一次性的补丁逻辑，跑一次就完事，不是状态维护。

`ModuleHelper` 里的用法只有一种形状——**排序**：`GetDependentModulesOf`（`ModuleHelper.cs:264`）遍历 `module.DependedModules`，用 `source.FirstOrDefault(i => i.Id == item.ModuleId)` 把 id 解析成 `ModuleInfo`；反向边则遍历 `moduleInfo.ModulesToLoadAfterThis` 找 `m.ModuleId == module.Id`。结果交给 `MBMath.TopologySort<ModuleInfo>`（`ModuleHelper.cs:299` 的 `GetSortedModules`）做拓扑排序。

`ModuleId` 是 **`Id` 精确匹配**，不是大小写不敏感匹配。`ModuleHelper` 内部存 `_loadedModules` 时用了 `moduleInfo2.Id.ToLower()`（`ModuleHelper.cs:90`），但依赖解析那几处都是裸 `==`。**XML 里写 `Id="Native"` 而模块自报 `Id="native"`，依赖就解析不到，且不报错——只是拓扑排序少了一条边。**

## 关键成员

| 成员 | 签名（`DependedModule.cs` 行号） | 这个成员是做什么用的 |
| --- | --- | --- |
| `ModuleId` | `public string ModuleId { get; private set; }`（`:12`） | 依赖的模块 id 字符串。唯一真正被读的属性：`ModuleHelper.cs:270`（`FirstOrDefault` 匹配）、`ModuleHelper.cs:286`（`ModulesToLoadAfterThis` 反查）、`Module.cs:1792`（`OnBeforeGameStart` 收尾时比对被停用的模块）、`ModuleHelper.cs:102`/`:338`（`UpdateVersionChangeSet` 的触发条件）。**写入方只有构造函数。** |
| `Version` | `public ApplicationVersion Version { get; private set; }`（`:17`） | 要求的最低版本。由 `ModuleInfo.cs:157` 用 `ApplicationVersion.FromString(xmlAttribute.InnerText, 0)` 解析；解析失败被 `catch` 吞掉（只 `string.Concat` 拼了一条**没有被使用的**消息，`ModuleInfo.cs:159-166`），然后沿用 `ApplicationVersion.Empty`。真正被读的是 `UpdateVersionChangeSet` 里的四个分量。 |
| `IsOptional` | `public bool IsOptional { get; private set; }`（`:22`） | 声明为可选依赖。**在 1.3.0 的整棵源码树里没有任何读取点**——`grep -rn "\.IsOptional"` 只命中 `DependedModule.cs:29` 的构造赋值。也就是说 mod 里可以放心地写 `Optional="true"`，它不影响任何加载行为。 |
| 构造函数 | `public DependedModule(string moduleId, ApplicationVersion version, bool isOptional = false)`（`:25`） | 三个字段的唯一入口。注意 `isOptional` 有默认值，所以 `ModulesToLoadAfterThis` / `IncompatibleModules` 那两条 XML 路径只传两个参数。 |
| `UpdateVersionChangeSet` | `public void UpdateVersionChangeSet()`（`:33`） | 无返回值、非 virtual。**因为 struct 的 receiver 是值拷贝，唯一两个调用点（`ModuleHelper.cs:103` 和 `ModuleHelper.cs:339`）拿到的是 `enumerator.Current` 的副本，写完立刻丢弃**——净效果是零。 |

## 真实示例

最贴近真实的用法是「枚举自己声明的全部依赖 id」——这段代码形状和 `ModuleHelper.GetDependentModulesOf` 的第一段完全一致：

```csharp
using System.Collections.Generic;
using TaleWorlds.ModuleManager;

// ModuleInfo.DependedModules / ModulesToLoadAfterThis / IncompatibleModules 都是
// readonly List<DependedModule>，所以枚举器.Current 是 struct 拷贝。
public static List<string> ListRequiredModuleIds(ModuleInfo self, IEnumerable<ModuleInfo> installed)
{
    List<string> result = new List<string>();
    foreach (DependedModule dep in self.DependedModules)
    {
        ModuleInfo found = null;
        foreach (ModuleInfo candidate in installed)
        {
            if (candidate.Id == dep.ModuleId)   // 精确匹配，区分大小写
            {
                found = candidate;
                break;
            }
        }
        if (found == null && !dep.IsOptional)  // IsOptional 在引擎里其实没人读，这是你自己在用
        {
            result.Add(dep.ModuleId);
        }
    }
    return result;
}
```

**注意不要写这样的代码**——它是引擎自己那两处的形状，也正是引擎的 bug 来源：

```csharp
// 反面教材：改副本，列表里的元素纹丝不动
foreach (DependedModule dep in self.DependedModules)
{
    dep.UpdateVersionChangeSet();   // dep 是拷贝；这一行什么也没改到
}
```

想让 changeSet 真的落进列表，只能取出下标、构造新值、写回：

```csharp
List<DependedModule> list = self.DependedModules;
for (int i = 0; i < list.Count; i++)
{
    DependedModule d = list[i];
    ApplicationVersion v = d.Version;
    list[i] = new DependedModule(d.ModuleId,
        new ApplicationVersion(v.ApplicationVersionType, v.Major, v.Minor, v.Revision, 89406),
        d.IsOptional);
}
```

## 风险与边界

- **`UpdateVersionChangeSet` 的两个调用点都是值拷贝改副本。** `ModuleHelper.cs:100-105` 与 `ModuleHelper.cs:336-341` 都是 `DependedModule dependedModule = enumerator.Current;` 之后再 `dependedModule.UpdateVersionChangeSet();`。struct 上调非只读方法改的是副本，`List<DependedModule>` 里的元素**永远拿不到新的 changeSet**。这个方法在 1.3.0 的运行期净效果为零。同样的写法在 [ModuleInfo](../ModuleInfo) 上是有效的（`ModuleInfo` 是 class，`ModuleInfo.cs:233` 那次调用真的改了对象）。
- **`IsOptional` 全树零读取点。** 在 1.3.0 写 `Optional="true"` 不影响任何加载判定。想让「缺依赖也能启动」，实际起作用的是 mod 自己在 `ModuleInfo.DependedModules` 上做的检查，或者干脆不声明。
- **`Version` 解析失败被静默吞掉。** `ModuleInfo.cs:159-166` 的 `catch` 块里 `string.Concat(...)` 的结果**没有被赋给任何变量、也没有输出**，所以版本号格式写错时你只会看到 `ApplicationVersion.Empty`，没有任何日志。因为 `Empty` 的 `ApplicationVersionType` 是 `Invalid`，后面任何按类型分发的逻辑都会走「无效」分支。
- **`ModulesToLoadAfterThis` 与 `IncompatibleModules` 的 `Version` 永远是 `Empty`。** 所以「比较依赖版本」这类逻辑在这两个列表上永远得到「无效版本」，不要拿它们做版本判定。
- **struct 没有重写 `Equals` / `GetHashCode`。** `dep1 == dep2` 走的是 `ValueType.Equals` 的反射兜底，逐字段比较，在热路径上非常慢。要比较就自己按字段比，或用 `dep.ModuleId` 做 key。
- **别名 `TaleWorlds.ModuleManager` / `TaleWorlds.MountAndBlade` 的 `Module.cs` 是同一个东西的两层。** [Module](../../core/Module)（`TaleWorlds.MountAndBlade`）在 `OnBeforeGameStart` 收尾时会拿 `moduleInfo2.DependedModules` 去比对「被某模块请求停用的模块列表」（`Module.cs:1787-1795`），拼出来的 `mblist` 只用于 `.Any(x => !x.IsOfficial)` 判断和一次**没有被使用的** `string.Join`——同样是无副作用的死代码。
- **别指望它出现在 campaign 运行期。** `ModuleHelper` 的依赖解析发生在模块加载/启动器阶段，早于 `Campaign` 被构造。mod 的 `OnGameStart` 里能读到的是已经解析好的 `ModuleInfo` 列表，而不是这个 struct 本身。

## 跨版本提示

- **类型形状完全没变。** 六个源码树（1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3；1.4.5 是残缺树、没有 `TaleWorlds.ModuleManager/DependedModule.cs`）比对 public/protected 声明，结果都是 **6 条、逐字相同**：三个 `get; private set;` 属性、一个三参构造函数、一个 `UpdateVersionChangeSet`。两个 `ModuleHelper` 值拷贝调用点在各版本都原样保留。
- **真正变的是 `UpdateVersionChangeSet` 里那个硬编码常量。** `DependedModule.cs:35` 的 changeSet 实参逐版本为：1.3.0 = `89406` → 1.3.15 = `110062` → 1.4.6 = `115628` → 1.5.3 = `122374`。这是官方 build 号的顺延，**方法签名与调用点都没动**。
- **对 mod 的实际影响：** 你的代码不需要为升级改动任何一行。但如果哪天你在别的树上看到 `UpdateVersionChangeSet` 开始「有效果」了（值拷贝改成按下标写回），那意味着依赖版本判定被激活了——升级时要重新检查你自己的 `Optional="true"` 声明是否仍然被尊重。

## 依赖关系

- 创建者：[ModuleInfo](../ModuleInfo) 的 `LoadFrom` 从 `Module.xml` 的三个 XML 节点批量构造（`ModuleInfo.cs:177` / `:187` / `:197`）
- 排序消费：[ModuleHelper](../ModuleHelper) 的 `GetDependentModulesOf`（`:264`）与 `GetSortedModules`（`:296`，内部用 [MBMath](../../core-extra/MBMath) 的 `TopologySort`）
- 同名孪生方法：[ModuleInfo](../ModuleInfo) 自己也有一个 `UpdateVersionChangeSet()`（`ModuleInfo.cs:233`），**那个是有效的**，别和本页这个搞混
- 版本值类型：[ApplicationVersion](../../core-extra/ApplicationVersion)（TaleWorlds.Library），`Empty` 是 `ApplicationVersionType.Invalid` + 四个 `-1`
- 运行时消费：[Module](../../core/Module)（`TaleWorlds.MountAndBlade`）的 `OnBeforeGameStart` 收尾段
- 桶首页：[campaign-ext API 分区](../)
