---
title: LinQuick
description: LinQuick - 高性能 LINQ 替代扩展方法库，零分配快速路?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LinQuick`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LinQuick

**命名空间:** TaleWorlds.LinQuick
**模块:** TaleWorlds.LinQuick
**类型:** static class

## 概述

`LinQuick

` ?TaleWorlds 自研?*高性能 LINQ 替代扩展方法?*。所有方法以 

`Q

` 后缀命名（如 

`WhereQ

`、`SelectQ

`、`AnyQ

`），针对 

`T[]

`、`List&lt;T&gt;

`、`IReadOnlyList&lt;T&gt;

` 提供专门?*零迭代器分配**重载，避免标?LINQ ?

`IEnumerable&lt;T&gt;

` 装箱和迭代器状态机开销。在战役系统每帧大量调用的热路径中广泛使用?
**核心设计原则**?
1. **类型特化重载**：为 

`T[]

`、`List&lt;T&gt;

`、`IReadOnlyList&lt;T&gt;

`、`IEnumerable&lt;T&gt;

` 各提供独立重载。数?列表重载使用 

`for

` 循环 + 索引访问，无迭代器分配。`IReadOnlyList&lt;T&gt;

` 重载先尝?

`as List&lt;T&gt;

` / 

`as T[]

` 转型到更快的路径。`IEnumerable&lt;T&gt;

` 重载先尝?

`as IReadOnlyList&lt;T&gt;

` 转型?
2. **短路求?*：`AnyQ

`、`AllQ

`、`ContainsQ

`、`FindIndexQ

` 在首次匹?不匹配时立即返回，不遍历整个集合?
3. **

`FindIndexQ

` 为基础设施**：`AnyQ(predicate)

` = 

`FindIndexQ(predicate) != -1

`，`ContainsQ(value)

` = 

`FindIndexQ(value) != -1

`，`FirstOrDefaultQ(predicate)

` = 

`source[FindIndexQ(predicate)]

`。避免重复实现查找逻辑?
4. **

`WhereQ

`/

`SelectQ

` 使用 yield return**：延迟求值，仅在迭代时产生分配。但?

`IReadOnlyList&lt;T&gt;

` 会先尝试转型?

`List&lt;T&gt;

` ?yield 版本（避?

`IReadOnlyList&lt;T&gt;

` 索引器的虚方法调用）?
5. **

`MaxElements3

` 单遍 top-3**：在单次遍历中找出浮点值最大的 3 个元素，返回 

`ValueTuple&lt;T, T, T&gt;

`。比排序后取?3 更高效?
## 心智模型

?

`LinQuick

` 当作**"更快但不那么优雅?LINQ"**。API ?

`System.Linq

` 几乎一一对应，但所有方法名多一?

`Q

`。当你看?

`Q

` 后缀时，意味着"这是优化版本，用 for 循环代替了迭代器"?
**关键概念：重载分发链**。以 

`WhereQ

` 为例?- 

`T[].WhereQ(predicate)

` ?直接 for 循环 yield return
- 

`List&lt;T&gt;.WhereQ(predicate)

` ?直接 for 循环 yield return
- 

`IReadOnlyList&lt;T&gt;.WhereQ(predicate)

` ??

`as List&lt;T&gt;

` 转型成功则委托，否则 

`as T[]

` 转型，否则委托到 

`WhereQImp

`（for 循环 yield return?- 

`IEnumerable&lt;T&gt;.WhereQ(predicate)

` ??

`as IReadOnlyList&lt;T&gt;

` 转型成功则委托，否则 

`WhereQImp

`（foreach yield return?
**关键概念：`Queue&lt;T&gt;

` 特殊处理**。`ContainsQ

` ?

`Queue&lt;T&gt;

` 的实现会**出队再入?*所有元素来遍历，保持队列顺序不变。这是因?

`Queue&lt;T&gt;

` 不支持索引访问?
**关键概念：空集合处理差异**。`MaxQ

` ?

`int[]

` ?

`List&lt;int&gt;

` 的重?*不检查空集合**（直接访?

`[0]

`），但对泛型 

`T[]

`、`IReadOnlyList&lt;T&gt;

`、`IEnumerable&lt;T&gt;

` 重载会抛?

`Error.NoElements()

`。`AverageQ

` 所有重载都检查空集合并抛异常。`FirstOrDefaultQ

` 不抛异常，返?

`default(T)

`?
## 主要方法

### AllQ
`

`

`csharp
public static bool AllQ&lt;T&gt;(this T[] source, Func&lt;T, bool&gt; predicate)
public static bool AllQ&lt;T&gt;(this List&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
public static bool AllQ&lt;T&gt;(this IReadOnlyList&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
public static bool AllQ&lt;T&gt;(this IEnumerable&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
`

`

`
判断是否所有元素都满足谓词。遇到第一个不满足的立即返?false?
### AnyQ
`

`

`csharp
public static bool AnyQ&lt;T&gt;(this List&lt;T&gt; source)
public static bool AnyQ&lt;T&gt;(this IReadOnlyList&lt;T&gt; source)
public static bool AnyQ&lt;T&gt;(this IEnumerable&lt;T&gt; source)
public static bool AnyQ&lt;T&gt;(this T[] source, Func&lt;T, bool&gt; predicate)
public static bool AnyQ&lt;T&gt;(this List&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
public static bool AnyQ&lt;T&gt;(this IReadOnlyList&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
public static bool AnyQ&lt;T&gt;(this IEnumerable&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
`

`

`
无参版本检?

`Count &gt; 0

`。带谓词版本通过 

`FindIndexQ != -1

` 实现?
### AverageQ
`

`

`csharp
public static float AverageQ(this float[] source)
public static float AverageQ(this IEnumerable&lt;float&gt; source)
public static float AverageQ&lt;T&gt;(this T[] source, Func&lt;T, float&gt; selector)
public static float AverageQ&lt;T&gt;(this List&lt;T&gt; source, Func&lt;T, float&gt; selector)
public static float AverageQ&lt;T&gt;(this IReadOnlyList&lt;T&gt; source, Func&lt;T, float&gt; selector)
public static float AverageQ&lt;T&gt;(this IEnumerable&lt;T&gt; source, Func&lt;T, float&gt; selector)
`

`

`
计算平均值。空集合抛出 

`Error.NoElements()

`?
### ContainsQ
`

`

`csharp
public static bool ContainsQ&lt;T&gt;(this T[] source, T value)
public static bool ContainsQ&lt;T&gt;(this List&lt;T&gt; source, T value)
public static bool ContainsQ&lt;T&gt;(this IReadOnlyList&lt;T&gt; source, T value)
public static bool ContainsQ&lt;T&gt;(this IEnumerable&lt;T&gt; source, T value)
public static bool ContainsQ&lt;T&gt;(this Queue&lt;T&gt; source, T value)
public static bool ContainsQ&lt;T&gt;(this T[] source, Func&lt;T, bool&gt; predicate)
public static bool ContainsQ&lt;T&gt;(this List&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
public static bool ContainsQ&lt;T&gt;(this IReadOnlyList&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
public static bool ContainsQ&lt;T&gt;(this IEnumerable&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
public static bool ContainsQ&lt;T&gt;(this Queue&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
`

`

`
判断是否包含指定值或满足谓词的元素。值版本通过 

`FindIndexQ(value) != -1

` 实现。`Queue&lt;T&gt;

` 版本出队再入队遍历?
### CountQ
`

`

`csharp
public static int CountQ&lt;T&gt;(this T[] source, T value)
public static int CountQ&lt;T&gt;(this List&lt;T&gt; source, T value)
public static int CountQ&lt;T&gt;(this IReadOnlyList&lt;T&gt; source, T value)
public static int CountQ&lt;T&gt;(this T[] source, Func&lt;T, bool&gt; predicate)
public static int CountQ&lt;T&gt;(this List&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
public static int CountQ&lt;T&gt;(this IReadOnlyList&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
public static int CountQ&lt;T&gt;(this IEnumerable&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
public static int CountQ&lt;T&gt;(this IEnumerable&lt;T&gt; source)
`

`

`
计数。值版本用 

`EqualityComparer&lt;T&gt;.Default

` 比较。`IEnumerable&lt;T&gt;

` 无参版本先尝试转?

`IReadOnlyList&lt;T&gt;

` ?

`Count

`?
### FindIndexQ
`

`

`csharp
public static int FindIndexQ&lt;T&gt;(this T[] source, T value)
public static int FindIndexQ&lt;T&gt;(this List&lt;T&gt; source, T value)
public static int FindIndexQ&lt;T&gt;(this IReadOnlyList&lt;T&gt; source, T value)
public static int FindIndexQ&lt;T&gt;(this IEnumerable&lt;T&gt; source, T value)
public static int FindIndexQ&lt;T&gt;(this T[] source, Func&lt;T, bool&gt; predicate)
public static int FindIndexQ&lt;T&gt;(this List&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
public static int FindIndexQ&lt;T&gt;(this IReadOnlyList&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
public static int FindIndexQ&lt;T&gt;(this IEnumerable&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
`

`

`
查找索引。返回第一个匹配的索引，未找到返回 -1。`IEnumerable&lt;T&gt;

` 的值版本若值实?

`IComparable

` 则用 

`Comparer&lt;T&gt;.Default

`，否则用 

`Equals

`?
### FirstOrDefaultQ
`

`

`csharp
public static T FirstOrDefaultQ&lt;T&gt;(this T[] source, Func&lt;T, bool&gt; predicate)
public static T FirstOrDefaultQ&lt;T&gt;(this List&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
public static T FirstOrDefaultQ&lt;T&gt;(this IReadOnlyList&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
public static T FirstOrDefaultQ&lt;T&gt;(this IEnumerable&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
`

`

`
返回第一个满足谓词的元素，未找到返回 

`default(T)

`。通过 

`FindIndexQ

` 实现?
### MaxQ
`

`

`csharp
public static int MaxQ(this int[] source)
public static int MaxQ(this List&lt;int&gt; source)
public static T MaxQ&lt;T&gt;(this T[] source) where T : IComparable&lt;T&gt;
public static T MaxQ&lt;T&gt;(this List&lt;T&gt; source) where T : IComparable&lt;T&gt;
public static int MaxQ(this IReadOnlyList&lt;int&gt; source)
public static T MaxQ&lt;T&gt;(this IReadOnlyList&lt;T&gt; source) where T : IComparable&lt;T&gt;
public static float MaxQ&lt;T&gt;(this T[] source, Func&lt;T, float&gt; selector)
public static int MaxQ&lt;T&gt;(this T[] source, Func&lt;T, int&gt; selector)
public static float MaxQ&lt;T&gt;(this List&lt;T&gt; source, Func&lt;T, float&gt; selector)
public static int MaxQ&lt;T&gt;(this List&lt;T&gt; source, Func&lt;T, int&gt; selector)
public static float MaxQ&lt;T&gt;(this IReadOnlyList&lt;T&gt; source, Func&lt;T, float&gt; selector)
public static int MaxQ&lt;T&gt;(this IReadOnlyList&lt;T&gt; source, Func&lt;T, int&gt; selector)
public static float MaxQ&lt;T&gt;(this IEnumerable&lt;T&gt; source, Func&lt;T, float&gt; selector)
public static int MaxQ&lt;T&gt;(this IEnumerable&lt;T&gt; source, Func&lt;T, int&gt; selector)
`

`

`
求最大值。泛型版本要?

`IComparable&lt;T&gt;

`。除 

`int[]

` ?

`List&lt;int&gt;

` 外的重载检查空集合并抛?

`Error.NoElements()

`?
### MaxElements3
`

`

`csharp
public static ValueTuple&lt;T, T, T&gt; MaxElements3&lt;T&gt;(this IEnumerable&lt;T&gt; collection, Func&lt;T, float&gt; func)
`

`

`
单次遍历找出浮点值最大的 3 个元素，返回 

`(第一? 第二? 第三?

`。使用三级比较链，无需排序?
### OrderByQ
`

`

`csharp
public static IOrderedEnumerable&lt;T&gt; OrderByQ&lt;T, S&gt;(this IEnumerable&lt;T&gt; source, Func&lt;T, S&gt; selector)
public static T[] OrderByQ&lt;T, TKey&gt;(this T[] source, Func&lt;T, TKey&gt; selector)
public static T[] OrderByQ&lt;T, TKey&gt;(this List&lt;T&gt; source, Func&lt;T, TKey&gt; selector)
public static T[] OrderByQ&lt;T, TKey&gt;(this IReadOnlyList&lt;T&gt; source, Func&lt;T, TKey&gt; selector)
`

`

`
排序。`IEnumerable&lt;T&gt;

` 版本委托?

`Enumerable.OrderBy

`。数?列表版本构建键数组后?

`Array.Sort

` 排序，返回新数组?
### SelectQ
`

`

`csharp
public static IEnumerable&lt;R&gt; SelectQ&lt;T, R&gt;(this T[] source, Func&lt;T, R&gt; selector)
public static IEnumerable&lt;R&gt; SelectQ&lt;T, R&gt;(this List&lt;T&gt; source, Func&lt;T, R&gt; selector)
public static IEnumerable&lt;R&gt; SelectQ&lt;T, R&gt;(this IReadOnlyList&lt;T&gt; source, Func&lt;T, R&gt; selector)
public static IEnumerable&lt;R&gt; SelectQ&lt;T, R&gt;(this IEnumerable&lt;T&gt; source, Func&lt;T, R&gt; selector)
`

`

`
投影。使?yield return 延迟求值?
### SumQ
`

`

`csharp
public static int SumQ&lt;T&gt;(this T[] source, Func&lt;T, int&gt; func)
public static float SumQ&lt;T&gt;(this T[] source, Func&lt;T, float&gt; func)
public static int SumQ&lt;T&gt;(this List&lt;T&gt; source, Func&lt;T, int&gt; func)
public static float SumQ&lt;T&gt;(this List&lt;T&gt; source, Func&lt;T, float&gt; func)
public static int SumQ&lt;T&gt;(this IReadOnlyList&lt;T&gt; source, Func&lt;T, int&gt; func)
public static float SumQ&lt;T&gt;(this IReadOnlyList&lt;T&gt; source, Func&lt;T, float&gt; func)
public static float SumQ&lt;T&gt;(this IEnumerable&lt;T&gt; source, Func&lt;T, float&gt; func)
public static int SumQ&lt;T&gt;(this IEnumerable&lt;T&gt; source, Func&lt;T, int&gt; func)
`

`

`
求和。for 循环累加?
### WhereQ
`

`

`csharp
public static IEnumerable&lt;T&gt; WhereQ&lt;T&gt;(this T[] source, Func&lt;T, bool&gt; predicate)
public static IEnumerable&lt;T&gt; WhereQ&lt;T&gt;(this List&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
public static IEnumerable&lt;T&gt; WhereQ&lt;T&gt;(this IReadOnlyList&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
public static IEnumerable&lt;T&gt; WhereQ&lt;T&gt;(this IEnumerable&lt;T&gt; source, Func&lt;T, bool&gt; predicate)
`

`

`
过滤。yield return 延迟求值。`IReadOnlyList&lt;T&gt;

` 版本先尝试转?

`List&lt;T&gt;

`?
### ToArrayQ / ToListQ
`

`

`csharp
public static T[] ToArrayQ&lt;T&gt;(this T[] source)
public static T[] ToArrayQ&lt;T&gt;(this List&lt;T&gt; source)
public static T[] ToArrayQ&lt;T&gt;(this IReadOnlyList&lt;T&gt; source)
public static T[] ToArrayQ&lt;T&gt;(this IEnumerable&lt;T&gt; source)
public static List&lt;T&gt; ToListQ&lt;T&gt;(this T[] source)
public static List&lt;T&gt; ToListQ&lt;T&gt;(this List&lt;T&gt; source)
public static List&lt;T&gt; ToListQ&lt;T&gt;(this IReadOnlyList&lt;T&gt; source)
public static List&lt;T&gt; ToListQ&lt;T&gt;(this IEnumerable&lt;T&gt; source)
`

`

`
集合转换。`T[]

` 版本手动复制数组。`List&lt;T&gt;

` 版本委托?

`List&lt;T&gt;.ToArray()

`。`IReadOnlyList&lt;T&gt;

` 先转型再委托?
## 使用示例

### 示例 1: 基本用法对比 LINQ vs LinQuick

`

`

`csharp
using TaleWorlds.LinQuick;

List&lt;Hero&gt; heroes = GetHeroes();

// 标准 LINQ（有迭代器分配）
var warriors = heroes.Where(h =&gt; h.IsWarrior).ToList();
bool hasKing = heroes.Any(h =&gt; h.IsFactionLeader);
Hero firstLord = heroes.FirstOrDefault(h =&gt; h.IsLord);
int totalAge = heroes.Sum(h =&gt; h.Age);

// LinQuick（零分配快速路径）
var warriorsQ = heroes.WhereQ(h =&gt; h.IsWarrior).ToList();
bool hasKingQ = heroes.AnyQ(h =&gt; h.IsFactionLeader);
Hero firstLordQ = heroes.FirstOrDefaultQ(h =&gt; h.IsLord);
int totalAgeQ = heroes.SumQ(h =&gt; h.Age);
`

`

`

### 示例 2: MaxElements3 找最具价值的目标

`

`

`csharp
using TaleWorlds.LinQuick;

// 在战役AI中找出最有价值的3个目标城镇（单次遍历?List&lt;Settlement&gt; enemySettlements = GetEnemySettlements();
(Hero best, Hero second, Hero third) = enemySettlements
    .MaxElements3(s =&gt; CalculateStrategicValue(s));

// 对比标准LINQ方式（需要排序，O(n log n)?var top3 = enemySettlements
    .OrderByDescending(s =&gt; CalculateStrategicValue(s))
    .Take(3)
    .ToList(); // 更慢且分配更?

`

`

`

### 示例 3: IReadOnlyList 重载的转型优?
`

`

`csharp
using TaleWorlds.LinQuick;

// IReadOnlyList&lt;T&gt; 重载内部自动转型到更快路?void ProcessSettlements(IReadOnlyList&lt;Settlement&gt; settlements)
{
    // 内部先尝?as List&lt;Settlement&gt;，成功则?List 重载
    // 失败则尝?as Settlement[]，成功则用数组重?    // 都失败则?IReadOnlyList 索引遍历
    bool allFortified = settlements.AllQ(s =&gt; s.IsFortification);
    Settlement firstEnemy = settlements.FirstOrDefaultQ(s =&gt; s.IsEnemy);
    int enemyCount = settlements.CountQ(s =&gt; s.IsEnemy);
}
`

`

`

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
