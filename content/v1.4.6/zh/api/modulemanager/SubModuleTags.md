---
title: "SubModuleTags"
description: "SubModuleInfo 的嵌套枚举，声明子模块的运行环境约束：7 个标签 key，值是字符串；DedicatedServerType 非 none 会把 IsTWCertifiedDLL 强制置真。"
---
# SubModuleTags

**Namespace:** `TaleWorlds.ModuleManager`
**Module:** `TaleWorlds.ModuleManager`
**Type:** `public enum SubModuleTags`（嵌套在 `SubModuleInfo` 内）
**Source:** `TaleWorlds.ModuleManager/SubModuleInfo.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`SubModuleTags` 是**嵌套在 `SubModuleInfo` 里**的枚举（`SubModuleInfo.cs:137`），7 个取值，声明子模块的**运行环境约束**：

| 取值 | 声明行 | 语义（按名称） |
| --- | --- | --- |
| `RejectedPlatform` | `SubModuleInfo.cs:140` | 声明该子模块在哪些平台被拒绝。 |
| `ExclusivePlatform` | `SubModuleInfo.cs:142` | 声明该子模块只在这些平台运行。 |
| `DedicatedServerType` | `SubModuleInfo.cs:144` | 专用服务器类型；值为 `"none"` 或具体类型。 |
| `IsNoRenderModeElement` | `SubModuleInfo.cs:146` | 标记该子模块不涉及渲染模式。 |
| `DependantRuntimeLibrary` | `SubModuleInfo.cs:148` | 声明依赖的运行时库。 |
| `PlayerHostedDedicatedServer` | `SubModuleInfo.cs:150` | 玩家托管专用服务器相关标记。 |
| `EngineType` | `SubModuleInfo.cs:152` | 引擎类型标记。 |

它回答的问题是：**这个子模块在什么环境下被允许 / 拒绝运行？** —— 是运行环境约束，**不是**玩法分类（「沙盒 / 故事模式」这类信息不在标签里）。

标签在 `SubModule.xml` 里写成 `<Tags><Tag key="..." value="..."/></Tags>`，由 `SubModuleInfo.LoadFrom` 解析（`SubModuleInfo.cs:82-99`），存进 `Tags` 字段（`List<Tuple<SubModuleTags, string>>`，`SubModuleInfo.cs:134`）。

## 心智模型

```
<Tags>
  <Tag key="DedicatedServerType" value="none"/>   ──Enum.TryParse──►  Tags.Add((DedicatedServerType, "none"))
  <Tag key="RejectedPlatform" value="PS4"/>                          Tags.Add((RejectedPlatform, "PS4"))
  <Tag key="UnknownKey" value="x"/>                                 ──解析失败──►  静默丢弃
</Tags>
```

三条心智规则：

- **key 是枚举，value 是自由字符串。** 枚举只约束「标签种类」；具体平台名、类型名都在 value 里，按 key 分别解释。
- **未知 key 会被静默跳过。** `LoadFrom` 用 `Enum.TryParse<SubModuleTags>` 解析 key（`SubModuleInfo.cs:89`），解析失败的标签**不会**进 `Tags`，也不报错——拼写错误的标签会无声消失。
- **`DedicatedServerType` 有副作用。** 它的值不是 `"none"` 时，`LoadFrom` 会把 `IsTWCertifiedDLL` 强制置真（`SubModuleInfo.cs:93-96`）——这是 7 个标签里唯一在解析期改变对象状态的。

## 怎么用

### 怎么拿到

从 `SubModuleInfo.Tags` 读（`readonly` 字段，构造函数初始化）：

```csharp
foreach (SubModuleInfo sub in info.SubModules)
{
    foreach (var tag in sub.Tags)
    {
        SubModuleInfo.SubModuleTags key = tag.Item1;
        string value = tag.Item2;
    }
}
```

### 典型用法

**查某个标签的值（如专用服务器类型）：**

```csharp
string GetTagValue(SubModuleInfo sub, SubModuleInfo.SubModuleTags key)
{
    foreach (var tag in sub.Tags)
        if (tag.Item1 == key) return tag.Item2;
    return null;
}

// 用法
string dst = GetTagValue(sub, SubModuleInfo.SubModuleTags.DedicatedServerType);
bool isServerSub = dst != null && dst != "none";
```

**判断「是否声明了专用服务器类型」（唯一有解析期副作用的标签）：**

```csharp
bool DeclaresDedicatedServer(SubModuleInfo sub)
{
    foreach (var tag in sub.Tags)
    {
        if (tag.Item1 == SubModuleInfo.SubModuleTags.DedicatedServerType
            && tag.Item2 != "none")
        {
            return true;   // 此时 sub.IsTWCertifiedDLL 已被 LoadFrom 置真
        }
    }
    return false;
}
```

### 坑

- **它是嵌套类型，名字要写全。** `SubModuleInfo.SubModuleTags`，不是顶层 `SubModuleTags`；`using TaleWorlds.ModuleManager;` 之后也要写 `SubModuleInfo.SubModuleTags`。
- **没有 "None"/"Any" 之类的兜底取值。** 「没声明这个标签」= `Tags` 里没有对应 key，不要试图在枚举里找万能值。
- **value 是字符串，可能为空或拼写随意。** 比较时先判空；`"none"` 是 `DedicatedServerType` 的约定值，不是枚举成员。
- **标签可以重复。** 同一个 key 出现多次时 `Tags` 里会有多个二元组；「取第一个」还是「取全部」由你的语义决定，`LoadFrom` 不去重。
- **拼写错误的 key 会静默消失**（`SubModuleInfo.cs:89` 的 `Enum.TryParse` 失败分支）。排查「标签怎么没生效」时先确认 key 拼写与枚举成员一字不差。

## 关键成员

| 成员 | 说明 |
| --- | --- |
| `RejectedPlatform` | 平台拒绝声明；value 为平台名。 |
| `ExclusivePlatform` | 平台独占声明；value 为平台名。 |
| `DedicatedServerType` | 专用服务器类型；value 为 `"none"` 或具体类型。**唯一有解析期副作用的标签**：value ≠ `"none"` 时 `IsTWCertifiedDLL` 被强制置真（`SubModuleInfo.cs:93-96`）。 |
| `IsNoRenderModeElement` | 渲染模式无关标记。 |
| `DependantRuntimeLibrary` | 运行时库依赖声明。 |
| `PlayerHostedDedicatedServer` | 玩家托管专用服务器标记。 |
| `EngineType` | 引擎类型标记。 |

> 该枚举没有方法、没有属性：它只是 7 种标签 key 的清单。value 的语义由 key 决定，且是自由字符串。

## 真实示例

**示例 1：列出子模块的全部标签**

```csharp
using TaleWorlds.ModuleManager;

public static void DumpTags(SubModuleInfo sub)
{
    foreach (var tag in sub.Tags)
    {
        System.Console.WriteLine($"{tag.Item1} = {tag.Item2}");
    }
}
```

**示例 2：检查是否被某平台拒绝**

```csharp
public static bool IsRejectedOn(SubModuleInfo sub, string platform)
{
    foreach (var tag in sub.Tags)
    {
        if (tag.Item1 == SubModuleInfo.SubModuleTags.RejectedPlatform
            && tag.Item2 == platform)
        {
            return true;
        }
    }
    return false;
}
```

**示例 3：常见的错误写法与修正**

```csharp
// ✗ 错误：把 value 当枚举比
//    value 是字符串，没有 SubModuleTags 成员能匹配它

// ✓ 正确：key 比枚举，value 比字符串
foreach (var tag in sub.Tags)
{
    if (tag.Item1 == SubModuleInfo.SubModuleTags.DedicatedServerType)
    {
        bool isServer = tag.Item2 != "none";   // 字符串比较
    }
}

// ✗ 错误：以为标签拼写错了会报错
//    —— Enum.TryParse 失败时标签被静默丢弃（SubModuleInfo.cs:89），Tags 里查不到

// ✓ 正确：排查时先确认 key 拼写与枚举成员一字不差
```

## 参见

- [`../SubModuleInfo`](../SubModuleInfo) —— 本枚举的宿主类；`Tags` 字段与 `LoadFrom` 的解析逻辑都在那里。
- [`../ModuleInfo`](../ModuleInfo) —— `SubModules` 的宿主类型，拿到 `SubModuleInfo` 的地方。
- [`../_index`](../_index) —— `TaleWorlds.ModuleManager` 桶的全类型索引。

## 导航

- 同桶：[`../SubModuleInfo`](../SubModuleInfo)
- 同桶：[`../_index`](../_index)
- 父索引：[`modulemanager`](../_index)
