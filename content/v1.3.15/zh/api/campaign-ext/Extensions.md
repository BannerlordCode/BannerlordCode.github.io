---
title: Extensions (Campaign)
description: Extensions - 战役系统常用扩展方法，提供反射安全访问、集合转换、枚举标志判断和列表操作等工?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Extensions`
- [← 本领域 / 返回 campaign-ext](./)
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

` 中的静态扩展方法集合，为战役系统开发提供三类工具：?反射安全访问（`GetTypesSafe

`、`GetCustomAttributesSafe

` 系列方法捕获异常并返回空集合，避免反射加载失败导致崩溃）；② 集合转换与查找（

`ToMBList

`、`AppendList

`、`IndexOfMin/Max

`、`FindIndex/FindLastIndex

`、`Randomize

`）；?枚举标志判断（`HasAnyFlag

`、`HasAllFlags

`）和确定性哈希（

`GetDeterministicHashCode

`）?
在战役系?Mod 开发中，这些方法主要用于：遍历程序集中所?

`CampaignBehavior

` 子类时使?

`GetTypesSafe

` 避免加载异常；将 

`List&lt;Hero&gt;

` ?LINQ 结果转为 

`MBList&lt;Hero&gt;

` 供引?API 使用；通过 

`HasAllFlags

` 检?

`Kingdom.States

` 等位标志枚举；用 

`GetDeterministicHashCode

` 生成跨平台一致的字符串哈希用于存档键?
`GetCustomAttributesSafe

` 有多个重载，分别针对 

`Type

`、`PropertyInfo

`、`FieldInfo

`、`MethodInfo

`、`Assembly

`。所有重载都捕获异常并通过 

`Debug.FailedAssert

` 报告，返回空集合而非抛出——这?Mod 环境中很重要，因为不?Mod 加载的类可能引用缺失的程序集?
## 心智模型

?

`Extensions

` 当作**战役 Mod 的安全工具箱**。`GetTypesSafe

` 是最重要的方法：

`Assembly.GetTypes()

` 在有加载失败的类型时会抛 

`ReflectionTypeLoadException

`，`GetTypesSafe

` 捕获此异常并?

`ex.Types

` 中提取已成功加载的类型（

`null

` 项被过滤）。这?Mod 环境中是常态——多?Mod 互相依赖，某?Mod 缺失会导致其?Mod 的类型加载失败?
`ToMBList

` 有三个重载：?

`T[]

`、`List&lt;T&gt;

`、`IEnumerable&lt;T&gt;

` 转换。`IEnumerable&lt;T&gt;

` 重载会先尝试强制转换为数组或 

`List&lt;T&gt;

` 再调用对应重载，避免不必要的枚举开销。`MBList

` 是引擎内部使用的高性能列表，许多引?API 要求此类型?
`HasAnyFlag

` ?

`HasAllFlags

` 通过 

`EnumHelper&lt;T&gt;

` 泛型缓存实现，避免每次调用的泛型开销。这两个方法在战役系统中常用于检?

`Kingdom.States

`（`AtWar

`、`Truce

` 等）?

`Hero.HeroDeveloper

` 的技能标志?
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

`，从异常?

`Types

` 数组中提取非 null 项。可选谓词过滤。普通异常返回空列表。用于遍?Mod 程序集查?

`CampaignBehavior

` 等子类?
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

`，检查每个程序集的引用列表。用于反向查找哪?Mod 依赖了当前程序集?
### GetCustomAttributesSafe（Type 重载?

`

`

`csharp
public static object[] GetCustomAttributesSafe(this Type type, Type attributeType, bool inherit)
public static object[] GetCustomAttributesSafe(this Type type, bool inherit)
public static IEnumerable&lt;Attribute&gt; GetCustomAttributesSafe(this Type type, Type attributeType)
`

`

`
安全获取类型的自定义特性。捕获异常并返回空集合。类似重载也存在?

`PropertyInfo

`、`FieldInfo

`、`MethodInfo

`、`Assembly

`?
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
将数组、列表或可枚举集合转换为 

`MBList&lt;T&gt;

`。`IEnumerable&lt;T&gt;

` 重载会先尝试强制转换以避免枚举开销。用?LINQ 查询结果与引?API 的对接?
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

` 的所有元素追加到 

`list1

`。预先调?

`Capacity

` 以减少扩容开销。比 

`AddRange

` 更高效因为预先设置了容量?
### GetReadOnlyDictionary
`

`

`csharp
public static MBReadOnlyDictionary&lt;TKey, TValue&gt; GetReadOnlyDictionary&lt;TKey, TValue&gt;(this Dictionary&lt;TKey, TValue&gt; dictionary)
`

`

`
将普通字典包装为只读字典。用于向外部暴露内部字典而不允许修改?
### HasAnyFlag / HasAllFlags
`

`

`csharp
public static bool HasAnyFlag&lt;T&gt;(this T p1, T p2) where T : struct
public static bool HasAllFlags&lt;T&gt;(this T p1, T p2) where T : struct
`

`

`
枚举标志检查。`HasAnyFlag

` 检查是否有任一标志位匹配，

`HasAllFlags

` 检查是否所有标志位都匹配。通过 

`EnumHelper&lt;T&gt;

` 泛型缓存优化性能。用?

`Kingdom.States

`、`CharacterObject.Occupation

` 等位标志枚举?
### GetDeterministicHashCode
`

`

`csharp
public static int GetDeterministicHashCode(this string text)
`

`

`
返回字符串的 DJB2 确定性哈希。不同于 

`string.GetHashCode()

`（跨平台不一致），DJB2 保证相同字符串在不同平台上返回相同哈希。用于存档键和跨平台一致性要求?
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
返回列表中由 

`func

` 投影后的最?最大值元素的索引。全部元素相同时返回 0，空列表返回 -1。`IndexOfMin

` ?

`IndexOfMax

` 各有两个重载（`IReadOnlyList

` ?

`MBReadOnlyList

`）?
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
在只读列表中查找满足谓词的第一?最后一个元素的索引。未找到返回 -1?
### IndexOf
`

`

`csharp
public static int IndexOf&lt;TValue&gt;(this TValue[] source, TValue item)
`

`

`
在数组中查找元素的索引，使用 

`Equals

` 比较。未找到返回 -1?
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

` 作为随机源——非确定性，不适用于存档相关数据?
## 使用示例

### 示例: 安全遍历 Mod 中的 CampaignBehavior 子类

**场景**: Mod 框架想在运行时发现所有已注册?

`CampaignBehavior

` 子类?
`

`

`csharp
public static List&lt;Type&gt; FindAllCampaignBehaviorTypes()
{
    var result = new List&lt;Type&gt;();
    foreach (var assembly in AppDomain.CurrentDomain.GetAssemblies())
    {
        var types = assembly.GetTypesSafe(t =&gt;
            typeof(CampaignBehaviorBase).IsAssignableFrom(t)
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

` 是安全反射的基础——某?Mod 程序集可能有缺失依赖导致 

`GetTypes()

` 抛异常；谓词参数?

`null

` 时返回所有类型；过滤掉抽象类和接口是必要的，否则 

`Activator.CreateInstance

` 会失败?
### 示例: 按英雄实力排序并取最?
**场景**: Mod 想在王国中找到战力最强的领主?
`

`

`csharp
public static Hero FindStrongestHero(Kingdom kingdom)
{
    var heroes = kingdom.Lords
        .Where(h =&gt; h.IsAlive && h.IsActive)
        .ToMBList();  // 转为 MBList 供引擎使?
    int maxIndex = heroes.IndexOfMax(h =&gt; (int)h.Power);
    return maxIndex &gt;= 0 ? heroes[maxIndex] : null;
}
`

`

`

**要点**: 

`ToMBList

` 接受 

`IEnumerable&lt;T&gt;

`，内部会尝试强制转换?

`List&lt;T&gt;

` 优化性能；`IndexOfMax

` 返回索引而非元素本身，需要手动索引；

`Hero.Power

` ?

`int

` 类型，与 

`IndexOfMax

` ?

`Func&lt;TSource, int&gt;

` 签名匹配?
## 参见
- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
