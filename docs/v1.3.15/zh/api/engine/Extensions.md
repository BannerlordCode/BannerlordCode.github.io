---
title: Extensions (Engine)
description: Extensions - 引擎层扩展方法，提供反射安全访问、集合转换、枚举标志判断和列表查找等工具，聚焦 GameEntity/Scene/Mesh 等引擎子系统的使用场?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Extensions`
- [← 本领域 / 返回 engine](./)
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

` 中的静态扩展方法集合。本页从**引擎?*（`TaleWorlds.Engine

`）视角介绍这些方法——引擎的 

`GameEntity

`、`Scene

`、`Mesh

`、`Skeleton

`、`ScriptComponentBehavior

` 等子系统在加载、查询和渲染过程中大量依赖这里的工具方法?
引擎层使用最频繁的三组方法：?反射安全访问（`GetTypesSafe

`、`GetReferencingAssembliesSafe

`、`GetCustomAttributesSafe

`）——引擎在加载场景和实体时需要发现所?

`ScriptComponentBehavior

` 子类并读取其 

`EditableScriptComponentVariable

` 特性，Mod 环境下程序集部分加载失败是常态，这些方法捕获异常并返回空集合，保证场景加载不会因单个 Mod 崩溃；② 集合操作（`ToMBList

`、`AppendList

`、`IndexOfMin/Max

`、`FindIndex/FindLastIndex

`）——引擎的实体管理、碰撞查询和 LOD 系统返回 

`MBReadOnlyList

`，标?LINQ 不直接适用；③ 枚举与哈希（

`HasAnyFlag

`、`HasAllFlags

`、`GetDeterministicHashCode

`）——引擎的 

`EntityFlags

`、`Mesh.Flags

` 等大?

`[Flags]

` 枚举需要高效位检查，

`GetDeterministicHashCode

` 用于资源名到 ID 的跨平台一致性映射?
`GetCustomAttributesSafe

` 针对引擎层的核心用途是解析 

`EditableScriptComponentVariable

`（编辑器暴露的脚本组件变量）?

`Saveable

`（存档标记）特性。引擎在反序列化场景文件时需要读取这些特性，缺失或损坏的特性会导致实体组件初始化失败——安全版本将异常降级?

`Debug.FailedAssert

` 报告 + 空集合返回，使单个组件失败不影响整个场景加载?
## 心智模型

?

`Extensions

` 当作**引擎场景加载的安全网**。`GetTypesSafe

` 是引擎启动阶段最关键的调用：标准 

`Assembly.GetTypes()

` 在有加载失败的类型时?

`ReflectionTypeLoadException

`，`GetTypesSafe

` 捕获此异常并?

`ex.Types

` 提取已成功加载的类型（`null

` 项被过滤）。引擎的 

`MBScriptManager

` 在初始化时遍历所有程序集查找 

`ScriptComponentBehavior

` 子类——如果某?Mod 引用了不存在的程序集，`GetTypes()

` 会抛异常导致整个引擎启动失败；`GetTypesSafe

` 使引擎能跳过有问题的程序集继续加载?
`MBList&lt;T&gt;

` ?

`MBReadOnlyList&lt;T&gt;

` 是引擎的高性能列表类型，用?

`GameEntity.GetChildren()

`、`Scene.GetEntities()

` ?API 的返回值。`ToMBList

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

` 两套重载——引擎的 LOD 选择和碰撞检测结果返?

`MBReadOnlyList

`，需要专用重载避免强制转换开销?
`GetDeterministicHashCode

` 使用 DJB2 算法，不同于 .NET ?

`string.GetHashCode()

`?2位和64位平台结果不同）。引擎的资源管理系统（`ResourceDepot

`、`MetaMesh

`）使用字符串资源名作为键——跨平台不一致的哈希会导致相同资源在不同平台映射到不?ID，引发资源丢失。DJB2 保证一致性，是引擎资源管线的基石?
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

` 数组提取?null 项并过滤。普通异常返回空列表。可选谓词过滤。引擎的 

`MBScriptManager

` 用此方法遍历所有程序集查找 

`ScriptComponentBehavior

` 子类?
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

`，检查引用列表。用于引擎确定哪?Mod 依赖?

`TaleWorlds.Engine

` 核心程序集?
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

` 报告，返回空集合。引擎用此方法解?

`EditableScriptComponentVariable

`（编辑器暴露变量）、`Saveable

`（存档标记）、`EngineClass

`（原生对象绑定）等特性?
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

` 以避免枚举开销。用于将 LINQ 筛选的实体列表传入引擎 API?
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

` 更高效。用于合并多个实体的子组件列表?
### GetReadOnlyDictionary
`

`

`csharp
public static MBReadOnlyDictionary&lt;TKey, TValue&gt; GetReadOnlyDictionary&lt;TKey, TValue&gt;(this Dictionary&lt;TKey, TValue&gt; dictionary)
`

`

`
将字典包装为只读字典。引擎的 

`Scene

` ?

`ResourceDepot

` 内部用此方法向外部暴露资源映射而不允许修改?
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

` 泛型缓存优化。引擎中 

`EntityFlags

`、`Mesh.Flags

`、`Scene.FilterResolutionFlags

` ?

`[Flags]

` 枚举使用此方法做位检查?
### GetDeterministicHashCode
`

`

`csharp
public static int GetDeterministicHashCode(this string text)
`

`

`
返回 DJB2 确定性哈希。跨平台一致，用于引擎资源名到 ID 的映射、`MetaMesh

` 注册键和资源缓存?
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
返回投影后最?最大值元素的索引。空列表返回 -1，全部相同返?0。用?LOD 选择中按距离选取最近实体、碰撞查询中按优先级选取目标?
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
在只读列表中查找满足谓词的元素索引。未找到返回 -1。用于在 

`GameEntity.GetChildren()

` 返回的只读列表中查找特定标签的子实体?
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

` 比较。用于在引擎的实体数组中查找特定实体?
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

`，非确定性。用于引擎的粒子系统和环境装饰物随机分布，不适用于存档或网络同步数据?
## 使用示例

### 示例: 发现所?ScriptComponentBehavior 子类用于实体初始?
**场景**: 引擎启动时需要注册所有可附加?

`GameEntity

` 的脚本组件类型?
`

`

`csharp
public static List&lt;Type&gt; DiscoverScriptComponents()
{
    var result = new List&lt;Type&gt;();
    foreach (var asm in AppDomain.CurrentDomain.GetAssemblies())
    {
        var types = asm.GetTypesSafe(t =&gt;
            typeof(ScriptComponentBehavior).IsAssignableFrom(t)
            && !t.IsAbstract
            && !t.IsInterface);
        result.AppendList(types);
    }
    return result;
}
`

`

`

**要点**: 

`GetTypesSafe

` 是安全反射的基础——Mod 程序集可能有缺失依赖导致 

`GetTypes()

` ?

`ReflectionTypeLoadException

`；`AppendList

` 预先调整容量?

`AddRange

` 更高效；过滤抽象类和接口是必要的，因为引擎会通过 

`Activator.CreateInstance

` 实例化这些类型附加到实体上?
### 示例: 在场景实体中查找最近的可交互对?
**场景**: 引擎需要从场景的所有实体中找到距离玩家最近的可交互实体?
`

`

`csharp
public static GameEntity FindNearestInteractable(Scene scene, Vec3 playerPos)
{
    var candidates = scene.GetEntities()
        .Where(e =&gt; e.HasTag("interactable"))
        .ToMBList();

    int nearestIndex = candidates.IndexOfMin(e =&gt;
        (int)(e.GlobalPosition.DistanceSquared(playerPos) * 1000));

    return nearestIndex &gt;= 0 ? candidates[nearestIndex] : null;
}
`

`

`

**要点**: 

`scene.GetEntities()

` 返回 

`MBReadOnlyList&lt;GameEntity&gt;

`，LINQ 

`Where

` 后转?

`IEnumerable&lt;GameEntity&gt;

`，`ToMBList

` 再转?

`MBList

` 供引擎内部使用；

`IndexOfMin

` 返回索引而非元素，需要手动索引；投影函数返回 

`int

`，距离乘?1000 转为整数避免浮点精度问题——如果需要更高精度应自行实现浮点版本?
## 参见
- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
