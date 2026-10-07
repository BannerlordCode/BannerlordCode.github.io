---
title: "SubModuleInfo"
description: "模块声明文件里一个 <SubModule> 条目的内存表示：程序集名、DLL 路径、入口类型名、TW 认证标记与运行时标签，由 LoadFrom 从 XML 解析填充。"
---
# SubModuleInfo

**Namespace:** `TaleWorlds.ModuleManager`
**Module:** `TaleWorlds.ModuleManager`
**Type:** `public class SubModuleInfo`
**Source:** `TaleWorlds.ModuleManager/SubModuleInfo.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`SubModuleInfo` 是 `SubModule.xml` 里**一个 `<SubModule>` 条目**的内存表示（`SubModuleInfo.cs:11`）。一个模块（`ModuleInfo`）可以有多个子模块，每个子模块 = 一个程序集 + 一个入口类型 + 一组运行时标签。

它承载四类信息：

1. **身份**：`Name`、`DLLName`、`SubModuleClassTypeName`（入口类型全名）。
2. **文件**：`DLLPath`（拼好的完整路径）、`DLLExists`（文件是否真的在）。
3. **认证**：`IsTWCertifiedDLL`（是否 TaleWorlds 签名，或声明了专用服务器类型）。
4. **依赖与约束**：`Assemblies`（额外程序集）、`Tags`（`SubModuleTags` 键值对列表）。

唯一正常的填充路径是 **`LoadFrom(XmlNode subModuleNode, string path, bool isOfficial)`**（`SubModuleInfo.cs:55`）：给它一个 XML 节点和模块目录，它把上面所有字段一次性解析好。构造函数（`SubModuleInfo.cs:49`）只初始化 `Tags` 列表，单独 `new` 出来的实例没有意义。

实例由模块装载流程创建，mod 通过 `ModuleInfo.SubModules` 取得，**不要自己 new 一个来代表已安装的模块**。

## 心智模型

```
SubModule.xml 的一个 <SubModule> 节点
        │  LoadFrom(node, moduleDir, isOfficial)   SubModuleInfo.cs:55
        ▼
   SubModuleInfo
        ├─ Name / DLLName / SubModuleClassTypeName   ← 身份（XML 直读）
        ├─ DLLPath  = moduleDir\bin\Win64_Shipping_Client\DLLName   SubModuleInfo.cs:61
        ├─ DLLExists = File.Exists(DLLPath)                        SubModuleInfo.cs:64
        ├─ IsTWCertifiedDLL = DLLExists && 证书校验通过             SubModuleInfo.cs:70
        │                    └─ 例外：DedicatedServerType ≠ "none" 时强制为真  SubModuleInfo.cs:93-96
        ├─ Assemblies : List<string>                              SubModuleInfo.cs:73-81
        └─ Tags : List<Tuple<SubModuleTags, string>>              SubModuleInfo.cs:82-99
```

- **它是「声明」的镜像，不是「运行时」的事实。** `DLLExists` 只说明文件在不在；程序集是否真的被加载、入口类型是否真的被实例化，是装载流程后面的事。
- **`IsTWCertifiedDLL` 有两条来源。** 主路径是 X509 证书链校验（`GetIsTWCertified`，`SubModuleInfo.cs:103`）；捷径是标签 `DedicatedServerType` 的值不是 `"none"`（`SubModuleInfo.cs:93-96`）——声明了专用服务器类型的子模块直接视为已认证。
- **`Tags` 的值是字符串，不是枚举。** 每个标签是 `(SubModuleTags key, string value)` 二元组；同一个 key 可以出现多次，value 的语义由 key 决定。
- **所有属性都是 `private set`。** 唯一正常的写入者是 `LoadFrom`；构造后想改字段只能再调一次 `LoadFrom`（它会先 `Tags.Clear()`，`SubModuleInfo.cs:57`）。

## 怎么用

### 怎么拿到

不要 `new SubModuleInfo()`。从模块记录里取：

```csharp
ModuleInfo info = ModuleHelper.GetModuleInfo("MyMod");
foreach (SubModuleInfo sub in info.SubModules)
{
    // sub 描述该子模块的程序集与入口类型
}
```

只有在你**自己实现启动器/工具**、要解析一份尚未注册的 `SubModule.xml` 时，才手动构造并调 `LoadFrom`。

### 典型用法

**1. 检查子模块程序集是否真的存在（缺失时启动器会打 Debug.Print）**

```csharp
foreach (SubModuleInfo sub in info.SubModules)
{
    if (!sub.DLLExists)
    {
        // 启动器会打印 "Couldn't find .dll: " + sub.DLLPath（SubModuleInfo.cs:68）
        continue;
    }
    // 程序集存在，可以反射它的入口类型
}
```

**2. 读入口类型名（反射加载模块入口）**

```csharp
foreach (SubModuleInfo sub in info.SubModules)
{
    string entryType = sub.SubModuleClassTypeName;   // 如 "MyMod.SubModule"
    // 用 Assembly.LoadFrom(sub.DLLPath).GetType(entryType) 取入口类型
}
```

**3. 查运行时标签（如专用服务器类型）**

```csharp
foreach (var tag in sub.Tags)
{
    if (tag.Item1 == SubModuleInfo.SubModuleTags.DedicatedServerType
        && tag.Item2 != "none")
    {
        // 该子模块声明了专用服务器类型；IsTWCertifiedDLL 已被强制置真
    }
}
```

### 坑

- **`DLLPath` 固定拼 `bin\Win64_Shipping_Client` 子目录**（`SubModuleInfo.cs:61`）。你的 mod 包结构必须符合这个布局，否则 `DLLExists` 为假。
- **`IsTWCertifiedDLL` 为真 ≠ 有 TaleWorlds 签名。** `DedicatedServerType` 标签会把它强制置真（`SubModuleInfo.cs:93-96`）。要区分「真签名」得自己走证书校验。
- **`LoadFrom` 会先清 `Tags`**（`SubModuleInfo.cs:57`）。对同一实例重复调用是「重新解析」，不是「补充解析」。
- **`Tags` 是 `readonly` 字段，但列表内容可变。** `readonly` 只保证引用不变；`sub.Tags.Add(...)` 语法合法，但会让模块表与磁盘不一致。**当只读用。**
- **XML 里缺节点会抛异常。** `LoadFrom` 对 `Name` / `DLLName` / `SubModuleClassType` 直接 `SelectSingleNode(...).Attributes["value"]`（`SubModuleInfo.cs:58-72`），节点缺失时是 `NullReferenceException`，不是默认值。
- **`Assemblies` 可能是空列表**（XML 没有 `<Assemblies>` 节点时，`SubModuleInfo.cs:73-81` 只 new 空列表），遍历前不必判 null，但要有「空」的心理预期。

## 关键成员

### 属性（全部 `private set`）

| 成员 | 声明行 | 作用 |
| --- | --- | --- |
| `string Name { get; private set; }` | `SubModuleInfo.cs:16` | 子模块名（XML `<Name>`）。 |
| `string DLLName { get; private set; }` | `SubModuleInfo.cs:21` | 程序集文件名（XML `<DLLName>`）。 |
| `string DLLPath { get; private set; }` | `SubModuleInfo.cs:26` | 完整路径 = 模块目录 + `bin\Win64_Shipping_Client` + `DLLName`。 |
| `bool IsTWCertifiedDLL { get; private set; }` | `SubModuleInfo.cs:31` | 是否视为 TaleWorlds 认证（证书校验或 DedicatedServerType 标签）。 |
| `bool DLLExists { get; private set; }` | `SubModuleInfo.cs:36` | `DLLPath` 是否真实存在。 |
| `List<string> Assemblies { get; private set; }` | `SubModuleInfo.cs:41` | 额外程序集名列表（XML `<Assemblies>`）。 |
| `string SubModuleClassTypeName { get; private set; }` | `SubModuleInfo.cs:46` | 入口类型全名（XML `<SubModuleClassType>`）。 |

### 字段

| 成员 | 声明行 | 作用 |
| --- | --- | --- |
| `List<Tuple<SubModuleTags, string>> Tags` | `SubModuleInfo.cs:134` | 运行时标签键值对；`readonly` 字段，构造函数初始化。 |

### 方法

| 成员 | 声明行 | 作用 |
| --- | --- | --- |
| `SubModuleInfo()` | `SubModuleInfo.cs:49` | 构造函数；只初始化 `Tags` 为空列表。 |
| `void LoadFrom(XmlNode, string, bool)` | `SubModuleInfo.cs:55` | 从 XML 节点解析全部字段；先清 `Tags`，再读 Name / DLLName / DLLPath / DLLExists / IsTWCertifiedDLL / SubModuleClassTypeName / Assemblies / Tags。 |
| `bool GetIsTWCertified(string, bool)` | `SubModuleInfo.cs:103` | **private**。X509 证书链校验：读 DLL 的证书，构建链，比对硬编码的 TaleWorlds 证书哈希与序列号。 |

### `LoadFrom` 的解析顺序（`SubModuleInfo.cs:55-100`）

| 步骤 | 行 | 动作 |
| --- | --- | --- |
| 1 | `SubModuleInfo.cs:57` | `Tags.Clear()` —— 重复调用是重置。 |
| 2 | `SubModuleInfo.cs:58-59` | 读 `Name`、`DLLName`。 |
| 3 | `SubModuleInfo.cs:61-65` | 拼 `DLLPath`，算 `DLLExists`；缺失时 `Debug.Print`（`SubModuleInfo.cs:68`）。 |
| 4 | `SubModuleInfo.cs:70` | `IsTWCertifiedDLL = DLLExists && GetIsTWCertified(...)`。 |
| 5 | `SubModuleInfo.cs:72` | 读 `SubModuleClassTypeName`。 |
| 6 | `SubModuleInfo.cs:73-81` | 读 `Assemblies`（无节点则空列表）。 |
| 7 | `SubModuleInfo.cs:82-99` | 读 `Tags`：`Enum.TryParse` 解析 key（`SubModuleInfo.cs:89`），未知 key 静默跳过；`DedicatedServerType` 且 value ≠ `"none"` 时强制 `IsTWCertifiedDLL = true`（`SubModuleInfo.cs:93-96`）。 |

### 证书校验常量（`GetIsTWCertified` 内部）

| 成员 | 声明行 | 值 |
| --- | --- | --- |
| `CertHashString` | `SubModuleInfo.cs:128` | `"29B0C803942C9D4221EF0CFB1AB1FEE47683DF7D"` |
| `CertSerialNum` | `SubModuleInfo.cs:131` | `"61EB518586D5D0884531D7FBC0316B69"` |

校验逻辑（`SubModuleInfo.cs:103-125`）：`new X509Certificate2(fileName)` 读证书 → `X509Chain.Create().Build(cert)` 构建链 → 遍历链元素，某元素的证书哈希**和**序列号同时匹配则返回 `true`；任何异常都返回 `false`。

### 嵌套枚举

`SubModuleInfo.SubModuleTags`（`SubModuleInfo.cs:137`）—— 标签 key 的枚举，7 个取值，同桶另有 `SubModuleTags` 一页。

## 真实示例

**示例 1：遍历模块的子模块并报告文件状态**

```csharp
using TaleWorlds.ModuleManager;

public static void DumpSubModules(ModuleInfo info)
{
    foreach (SubModuleInfo sub in info.SubModules)
    {
        System.Console.WriteLine($"{sub.Name}: {sub.DLLName} exists={sub.DLLExists} certified={sub.IsTWCertifiedDLL}");
        System.Console.WriteLine($"  entry={sub.SubModuleClassTypeName}");
        System.Console.WriteLine($"  path={sub.DLLPath}");
    }
}
```

**示例 2：找出声明了专用服务器类型的子模块**

```csharp
using System.Collections.Generic;
using TaleWorlds.ModuleManager;

public static List<SubModuleInfo> GetDedicatedServerSubs(ModuleInfo info)
{
    var result = new List<SubModuleInfo>();
    foreach (SubModuleInfo sub in info.SubModules)
    {
        foreach (var tag in sub.Tags)
        {
            if (tag.Item1 == SubModuleInfo.SubModuleTags.DedicatedServerType
                && tag.Item2 != "none")
            {
                result.Add(sub);
                break;
            }
        }
    }
    return result;
}
```

**示例 3：自己解析一份未注册的 SubModule.xml（工具/启动器场景）**

```csharp
using System.Xml;
using TaleWorlds.ModuleManager;

public static SubModuleInfo ParseSubModule(XmlNode node, string moduleDir, bool isOfficial)
{
    var sub = new SubModuleInfo();
    sub.LoadFrom(node, moduleDir, isOfficial);
    // 解析后所有字段可用；注意 Tags 已被 Clear 后重新填充
    return sub;
}
```

## 参见

- [`../ModuleInfo`](../ModuleInfo) —— `SubModules` 列表的宿主类型；本类型是它的元素。
- [`../ModuleHelper`](../ModuleHelper) —— 按模块 Id 拿到 `ModuleInfo` 的地方。
- [`../SubModuleTags`](../SubModuleTags) —— `Tags` 字段里标签 key 的枚举定义（嵌套在本类里）。
- [`../_index`](../_index) —— `TaleWorlds.ModuleManager` 桶的全类型索引。

## 导航

- 同桶：[`../ModuleInfo`](../ModuleInfo)
- 同桶：[`../SubModuleTags`](../SubModuleTags)
- 同桶：[`../_index`](../_index)
- 父索引：[`modulemanager`](../_index)
