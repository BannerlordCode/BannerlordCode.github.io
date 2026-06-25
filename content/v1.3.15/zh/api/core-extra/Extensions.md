---
title: Extensions (Core)
description: Extensions - 核心库扩展方法，提供反射安全访问、集合转换、枚举标志判断和列表查找等通用工具
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Extensions`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Extensions
**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** static class

## 概述

`Extensions

` ?

`TaleWorlds.Library

` 中的静态扩展方法集合，为整个引擎和游戏系统提供基础工具方法。与战役系统专属的扩展不同，这里的视角是**核心库层?*——这些方法被 

`TaleWorlds.Core

`、`TaleWorlds.Engine

`、`TaleWorlds.MountAndBlade

` 等所有模块共享使用?
三类核心工具：① 反射安全访问（`GetTypesSafe

`、`GetReferencingAssembliesSafe

`、`GetCustomAttributesSafe

`）——在 Mod 环境中，程序集加载经常有部分失败，这些方法捕获异常并返回空集合，保证引擎不会因单?Mod 的依赖问题崩溃；?集合操作（`ToMBList

`、`AppendList

`、`IndexOfMin/Max

`、`FindIndex/FindLastIndex

`、`Randomize

`）——引擎内部大量使?

`MBList

` ?

`MBReadOnlyList

`，标?LINQ 方法不直接适用；③ 枚举与哈希（

`HasAnyFlag

`、`HasAllFlags

`、`GetDeterministicHashCode

`）——引擎使用大?

`[Flags]

` 枚举，`GetDeterministicHashCode

` 保证跨平台哈希一致性?
`GetCustomAttributesSafe

` 有针?

`Type

`、`PropertyInfo

`、`FieldInfo

`、`MethodInfo

`、`Assembly

` 的多组重载，每组三个变体（带类型+继承、仅继承、仅类型）。所有变体捕获异常后通过 

`Debug.FailedAssert

` 报告并返回空集合——这在引擎加?Mod ?

`SubModule.xml

` 解析阶段至关重要?
## 心智模型

?

`Extensions

` 当作**引擎基础设施层的安全?*。`GetTypesSafe

` 是最重要的方法：标准 

`Assembly.GetTypes()

` 在有加载失败的类型时?

`ReflectionTypeLoadException

`，`GetTypesSafe

` 捕获此异常并?

`ex.Types

` 提取已成功加载的类型（`null

` 项被过滤），普通异常返回空列表。引擎在启动时遍历所?Mod 程序集查找注册类型（?

`MBSubModuleBase

` 子类、`SaveableDefinition

` 标记类），必须使用此方法避免连锁崩溃?
`MBList&lt;T&gt;

` ?

`MBReadOnlyList&lt;T&gt;

` 是引擎的高性能列表类型。`ToMBList

` 三个重载分别?

`T[]

`、`List&lt;T&gt;

`、`IEnumerable&lt;T&gt;

` 转换，`IEnumerable&lt;T&gt;

` 重载会先尝试强制转换避免枚举开销。`IndexOfMin/Max

` ?

`FindIndex/FindLastIndex

` 各有 

`IReadOnlyList

` ?

`MBReadOnlyList

` 两套重载——引擎的 

`QueryData

` 系统（如 

`Formation.QuerySystem

`）返?

`MBReadOnlyList

`，需要专用重载避免强制转换?
`GetDeterministicHashCode

` 使用 DJB2 算法，不同于 .NET ?

`string.GetHashCode()

`（不同平?位数结果不同）。引擎的存档系统、网络同步和资源管理都依赖确定性哈希——跨平台不一致的哈希会导致存档损坏或多人不同步?
## 主要方法

### GetTypesSafe
`

`

`csharp
public static List&lt;Type&gt; GetTypesSafe(this Assembly assembly, Func&lt;Type, bool&gt; func = null)
`

`

`
安全获取程序集中所有类型。捕?

`ReflectionTypeLoadException

`，从 

`ex.Types

` 数组提取?null 项并过滤。普通异常返回空列表。可选谓词过滤。用于引擎启动时遍历 Mod 程序集查找注册类型?
### GetReferencingAssembliesSafe
`

`

`csharp
public static Assembly[] GetReferencingAssembliesSafe(this Assembly baseAssembly, Func&lt;Assembly, bool&gt; func = null)
`

`

`
查找所有引用了指定程序集的程序集。遍?

`AppDomain.CurrentDomain.GetAssemblies()

`，检查引用列表。用于依赖关系分析和模块加载顺序确定?
### GetCustomAttributesSafe（多重载?

`

`

`csharp
// Type 重载
public static object[] GetCustomAttributesSafe(this Type type, Type attributeType, bool inherit)
public static object[] GetCustomAttributesSafe(this Type type, bool inherit)
public static IEnumerable&lt;Attribute&gt; GetCustomAttributesSafe(this Type type, Type attributeType)
// 同样存在?PropertyInfo, FieldInfo, MethodInfo, Assembly
`

`

`
安全获取自定义特性。捕获异常，通过 

`Debug.FailedAssert

` 报告，返回空集合。用于引擎解?

`Saveable

`、`EditableScriptComponentVariable

`、`DataSourceProperty

` 等标记特性?
### ToMBList
`

`

`csharp
public static MBList&lt;T&gt; ToMBList&lt;T&gt;(this T[] source)
public static MBList&lt;T&gt; ToMBList&lt;T&gt;(this List&lt;T&gt; source)
public static MBList&lt;T&gt; ToMBList&lt;T&gt;(this IEnumerable&lt;T&gt; source)
`

`

`
转换?

`MBList&lt;T&gt;

`。`IEnumerable&lt;T&gt;

` 重载先尝试强制转换为 

`T[]

` ?

`List&lt;T&gt;

` 以避免枚举开销。用?LINQ 查询结果与引?API 对接?
### AppendList
`

`

`csharp
public static void AppendList&lt;T&gt;(this List&lt;T&gt; list1, List&lt;T&gt; list2)
`

`

`
?

`list2

` 追加?

`list1

`，预先调?

`Capacity

`。比 

`AddRange

` 更高效?
### GetReadOnlyDictionary
`

`

`csharp
public static MBReadOnlyDictionary&lt;TKey, TValue&gt; GetReadOnlyDictionary&lt;TKey, TValue&gt;(this Dictionary&lt;TKey, TValue&gt; dictionary)
`

`

`
将字典包装为只读字典。用于引擎内部字典的安全暴露?
### HasAnyFlag / HasAllFlags
`

`

`csharp
public static bool HasAnyFlag&lt;T&gt;(this T p1, T p2) where T : struct
public static bool HasAllFlags&lt;T&gt;(this T p1, T p2) where T : struct
`

`

`
枚举标志检查。通过 

`EnumHelper&lt;T&gt;

` 泛型缓存优化。引擎中大量 

`[Flags]

` 枚举（如 

`Agent.AIScriptedFrameFlags

`、`SiegeEngineType

`）使用此方法?
### GetDeterministicHashCode
`

`

`csharp
public static int GetDeterministicHashCode(this string text)
`

`

`
返回 DJB2 确定性哈希。跨平台一致，用于存档键、资?ID 和网络同步?
### IndexOfMin / IndexOfMax
`

`

`csharp
public static int IndexOfMin&lt;TSource&gt;(this IReadOnlyList&lt;TSource&gt; self, Func&lt;TSource, int&gt; func)
public static int IndexOfMin&lt;TSource&gt;(this MBReadOnlyList&lt;TSource&gt; self, Func&lt;TSource, int&gt; func)
public static int IndexOfMax&lt;TSource&gt;(this IReadOnlyList&lt;TSource&gt; self, Func&lt;TSource, int&gt; func)
public static int IndexOfMax&lt;TSource&gt;(this MBReadOnlyList&lt;TSource&gt; self, Func&lt;TSource, int&gt; func)
`

`

`
返回投影后最?最大值元素的索引。空列表返回 -1，全部相同返?0。用?AI 决策中的最优目标选择?
### FindIndex / FindLastIndex
`

`

`csharp
public static int FindIndex&lt;TValue&gt;(this IReadOnlyList&lt;TValue&gt; source, Func&lt;TValue, bool&gt; predicate)
public static int FindIndex&lt;TValue&gt;(this MBReadOnlyList&lt;TValue&gt; source, Func&lt;TValue, bool&gt; predicate)
public static int FindLastIndex&lt;TValue&gt;(this IReadOnlyList&lt;TValue&gt; source, Func&lt;TValue, bool&gt; predicate)
public static int FindLastIndex&lt;TValue&gt;(this MBReadOnlyList&lt;TValue&gt; source, Func&lt;TValue, bool&gt; predicate)
`

`

`
在只读列表中查找满足谓词的元素索引。未找到返回 -1?
### IndexOf
`

`

`csharp
public static int IndexOf&lt;TValue&gt;(this TValue[] source, TValue item)
`

`

`
在数组中查找元素索引，使?

`Equals

` 比较?
### Randomize
`

`

`csharp
public static void Randomize&lt;T&gt;(this IList&lt;T&gt; array)
`

`

`
原地 Fisher-Yates 洗牌。使?

`new Random()

`，非确定性，不适用于存档或网络同步数据?
## 使用示例

### 示例: 遍历所?ScriptComponentBehavior 子类

**场景**: 引擎工具需要发现所有脚本组件类型用于编辑器显示?
`

`

`csharp
public static List&lt;Type&gt; FindAllScriptComponents()
{
    var result = new List&lt;Type&gt;();
    foreach (var asm in AppDomain.CurrentDomain.GetAssemblies())
    {
        var types = asm.GetTypesSafe(t =&gt;
            typeof(ScriptComponentBehavior).IsAssignableFrom(t)
            && !t.IsAbstract
            && !t.IsInterface);
        result.AddRange(types);
    }
    return result;
}
`

`

`

**要点**: 

`GetTypesSafe

` 是安全反射的基础——某?Mod 可能引用了不存在的程序集，导?

`GetTypes()

` 抛异常；过滤抽象类和接口避免 

`Activator.CreateInstance

` 失败；此模式被引擎的 

`MBScriptManager

`、`SaveManager

` 等核心系统广泛使用?
### 示例: 确定性哈希用于资?ID

**场景**: Mod 系统需要为自定义资源生成跨平台一致的 ID?
`

`

`csharp
public static int GenerateResourceId(string modId, string resourceName)
{
    string combined = $"{modId}:{resourceName}";
    return combined.GetDeterministicHashCode();
}

// 用于字典?var resourceMap = new Dictionary&lt;int, ResourceData&gt;();
resourceMap[GenerateResourceId("my_mod", "custom_item")] = new ResourceData();
`

`

`

**要点**: 

`GetDeterministicHashCode

` 使用 DJB2 算法?2位平台和64位平台返回相同结果；不要?

`string.GetHashCode()

` 代替——它在不同平台上返回不同值；DJB2 有碰撞概率，不适合作为唯一标识，应配合类型检查使用?
## 参见
- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
