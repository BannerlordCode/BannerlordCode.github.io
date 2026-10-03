---
title: "LinQuick"
description: "TaleWorlds 自己那套 LINQ 扩展方法：88 条 public 声明按 16 个动词名分组，每组 4–14 个重载按容器类型铺开。MaxElements3 是唯一没有 LINQ 对应物的原创方法；OrderByQ 走 Array.Sort 因此不稳定。"
---

# LinQuick

**Namespace:** TaleWorlds.LinQuick
**Module:** TaleWorlds.LinQuick
**Type:** `public static class LinQuick`
**Base:** 无（静态类，隐式继承 `System.Object`，不能 `new`、不能派生）
**File:** `TaleWorlds.LinQuick/LinQuick.cs`（1506 行，88 条 public 声明）

## 概述

这是 TaleWorlds 的「手写 LINQ 替代品」。它的存在理由在文件名里：`Quick`。整个类只有 16 个动词，每个动词按**容器类型**铺开成 4–5 个重载，避免每次 `Where` / `Select` 都掉进 `IEnumerable<T>` 那条装箱 + 接口分派的路。

16 个动词与各自的重载数（按源码行号）：

| 动词 | 行号 | 重载 | 覆盖的容器 |
| --- | --- | --- | --- |
| `AllQ` | `:11`–`:63` | 4 | `T[]` / `List<T>` / `IReadOnlyList<T>` / `IEnumerable<T>` |
| `AnyQ` | `:81`–`:122` | 6 | `T[]` / `List<T>` / `IReadOnlyList<T>` / `IEnumerable<T>`；`List` 与 `IReadOnlyList` 各多一个**无谓词**重载 |
| `AverageQ` | `:140`–`:231` | 6 | `float[]` / `IEnumerable<float>` 各一个裸重载，加 4 个带 `Func<T,float>` 的 |
| `ContainsQ` | `:254`–`:320` | 10 | 上四种 + `Queue<T>`；每种再来一个带谓词的版本 |
| `CountQ` | `:337`–`:465` | 8 | 4 个 `T value` 版本 + 4 个谓词版本；`IEnumerable<T>` 额外有一个**计数**重载（`:465`） |
| `FindIndexQ` | `:484`–`:613` | 8 | 4 个 `T value` + 4 个谓词 |
| `FirstOrDefaultQ` | `:676`–`:709` | 4 | 四种容器，全部只接受谓词，**没有无谓词重载** |
| `MaxQ` | `:727`–`:1011` | 14 | `int[]` / `List<int>` 裸重载各 1，`T[]` / `List<T>` / `IReadOnlyList<T>` 的 `IComparable<T>` 裸重载各 1，再加 4×2 个带 `Func<T,float>` / `Func<T,int>` 选择器的 |
| `MaxElements3` | `:1041` | 1 | 只有 `IEnumerable<T>` + `Func<T,float>` |
| `OrderByQ` | `:1082`–`:1104` | 4 | `IEnumerable<T>` 返回延迟序列；`T[]` / `List<T>` / `IReadOnlyList<T>` 走 `Array.Sort` |
| `SelectQ` | `:1144`–`:1186` | 4 | 四种容器，全部返回延迟 `IEnumerable<R>` |
| `SumQ` | `:1199`–`:1298` | 8 | 4 种容器 × (`Func<T,int>` / `Func<T,float>`) |
| `ToArrayQ` | `:1315`–`:1355` | 4 | 四种容器 |
| `ToListQ` | `:1371`–`:1405` | 4 | 四种容器 |
| `WhereQ` | `:1418`–`:1480` | 4 | 四种容器 |

另有 **3 个 private 辅助**：`FindIndexComparableQ`（`:637`）、`FindIndexNonComparableQ`（`:657`）、`WhereQImp`（`:1463` 与 `:1491` 两个重载，分别接 `IReadOnlyList<T>` 和 `IEnumerable<T>`）。

## 心智模型

**把它当成一张「同一动词 × 四种容器」的展开表，而不是「更快」的承诺。** 关键的心智模型有三条。

**规则一：文件里 `using System.Linq;` 是真的存在的**（`LinQuick.cs:3`）。也就是说 `OrderByQ(IEnumerable<T>, selector)` 的实现体就是一行 `return source.OrderBy(selector);`（`:1082-1085`），`ToArrayQ(List<T>)` 就是 `return source.ToArray();`（`:1327-1330`），`ToArrayQ(IReadOnlyList<T>)` 先 `as List<T>` 再退回 `as T[]`，两条都不中才自己循环。**这些重载没有任何加速**，它们存在只是为了让「引擎里统一写 Q 后缀」的风格成立。所以别用「Q = 快」来选型——实际能省的是**数组/List 那几条手写 for 循环**（`AllQ(T[])` `:11`、`SumQ(T[])` `:1199`、`MaxQ(T[], selector)` `:847` 等），它们把 `Func<T,bool>` 的委托调用压成了逐元素内联索引，没有迭代器状态机。

**规则二：`OrderByQ` 的两条路径语义不同。** 走 `IEnumerable<T>` 的那个返回 `IOrderedEnumerable<T>`，底层就是 LINQ，**稳定**。走 `T[]` / `List<T>` / `IReadOnlyList<T>` 的那三个（`:1088` 起）返回 `T[]`，实现是「先把 key 抽成一个 `TKey[]`，再 `Array.Sort<TKey, T>(keys, items, Comparer<TKey>.Default)`」——**`Array.Sort` 是不稳定排序**。同一个数据、同一份键，两条路给出的等价元素相对顺序可能不同。

**规则三：空集合的行为在 `MaxQ` 内部是不自洽的。** 读实现体：

```csharp
// :727-738  MaxQ(int[])
public static int MaxQ(this int[] source)
{
    int num = source[0];          // 空数组直接 IndexOutOfRangeException，没有长度检查
    for (int i = 0; i < source.Length; i++) { ... }
    return num;
}
```

而带选择器的重载和 `IComparable<T>` 的裸重载都有守卫：

```csharp
// :847-852  MaxQ(T[], Func<T,float>)
if (source.Length == 0) { throw Error.NoElements(); }
```

`Error` 来自 `System.Linq`，所以抛的是标准 LINQ 的 `InvalidOperationException("Sequence contains no elements")`。`AverageQ` 的两个裸重载（`:140` / `:156`）也 `throw Error.NoElements()`。

`MaxElements3`（`:1041-1080`）是全类**唯一没有 LINQ 对应物的原创方法**：单趟扫描维护三个 running max，返回 `ValueTuple<T,T,T>`（最大、次大、第三大）。初值全是 `float.MinValue`，元素不足三个时缺失的槽位是 `default(T)`。三个比较都是严格 `>`，所以并列时**先遇到的赢**。

## 关键成员

| 成员 | 签名（行号） | 这个成员是做什么用的 |
| --- | --- | --- |
| `MaxElements3<T>` | `public static ValueTuple<T, T, T> MaxElements3<T>(this IEnumerable<T> collection, Func<T, float> func)`（`:1041`） | 单趟 O(n) 求前三名。**返回的是元素不是数值**，要做「最大/次大/第三大的差值」得自己对三次 `func` 求值。元素不足三个时返回 `default(T)`（引用类型是 `null`），调用方不解引用就会 NRE。 |
| `OrderByQ<T, S>(IEnumerable<T>, Func<T,S>)` | `:1082` | 直接 `return source.OrderBy(selector)`。返回延迟的 `IOrderedEnumerable<T>`，**支持后续 `.ThenBy`**，另三个数组/List 重载返回 `T[]` 不支持。 |
| `OrderByQ<T, TKey>(T[] \| List<T> \| IReadOnlyList<T>, Func<T,TKey>)` | `:1088` 起 | key/items 双数组 + `Array.Sort` 重排，**不稳定**，返回 `T[]`。原始容器不被修改（elements 被拷进第二个数组）。 |
| `MaxQ(int[])` / `MaxQ(List<int>)` | `:727` / `:741` | 整数专用裸重载。**无空集合检查**，空输入抛 `IndexOutOfRangeException` / `ArgumentOutOfRangeException`，与带选择器重载抛的 `InvalidOperationException` 类型不同。 |
| `MaxQ<T>(T[] \| List<T> \| IReadOnlyList<T>) where T : IComparable<T>` | `:756` / `:774` / `:818` | 空集合 `throw Error.NoElements()`。`IReadOnlyList` 版本会先 `as List<T>` 再 `as T[]` 做向下转型快路（`:823-831`），两条都不中才走 `CompareTo` 循环。 |
| `MaxQ<T>(…, Func<T,float>)` / `(…, Func<T,int>)` | `:847` 起，共 8 个 | 带选择器版本。空集合 `throw Error.NoElements()`。注意**选择器会被调用 `count + 1` 次**（`:849` 先对 `[0]` 求一次做初值，循环里又从 `i = 0` 开始），不是 `count` 次。 |
| `FindIndexQ` 的 private 双胞胎 | `FindIndexComparableQ`（`:637`）用 `Comparer<T>.Default.Compare(x, value) == 0`；`FindIndexNonComparableQ`（`:657`）用 `t.Equals(value)` | 只有 `FindIndexQ(this IEnumerable<T> source, T value)`（`:540`）会分派到它们，而分派条件是 **`value != null && value is IComparable`——判的是「值」，不是类型 `T`**。所以传进去的那个实例只要实现了 `IComparable` 就走 Compare 路径（元素为 null 安全），否则走 `Equals` 路径（**元素 `t` 为 null 时 NRE**）。走 `T[]` / `List<T>` 的重载不经过它们，直接 `EqualityComparer<T>.Default.Equals`。找不到统一返回 `-1`。 |
| `ContainsQ` | `:254`–`:320`，10 个重载 | 5 种容器 × （`T value` / `Func<T,bool>`）。`Queue<T>` 的两个版本（`:278` / `:320`）用 **`for (i < source.Count) { Dequeue; 判断; Enqueue }` 的旋转法**扫全队列。顺利返回时元素顺序被完整还原，但**谓词抛异常会把队列留在「转了 k 格」的中间态**，且命中后也不提前退出。 |
| `CountQ` | `:337`–`:465` | 4 个 `T value` 版（`EqualityComparer<T>.Default`）与 4 个谓词版。`CountQ(IEnumerable<T>)`（`:465`）先 `source as IReadOnlyList<T>` 拿 `Count`，否则退化成 `IEnumerator` 计数。 |
| `WhereQ` | `:1418`–`:1480` | 4 个重载全部返回 `IEnumerable<T>`。三条容器特化重载最终都汇到 `WhereQImp(IReadOnlyList<T>, …)`（`:1463`）；`WhereQ(this IEnumerable<T>, …)`（`:1480`）先 `source as IReadOnlyList<T>` 再决定走哪条，所以**即使变量静态类型是 `IEnumerable<T>`，`List<T>` 仍能吃到下标快路**。返回延迟序列——**返回类型是 `IEnumerable<T>` 而不是 `List<T>`，所以你拿到的不是快照**。 |
| `ToArrayQ(T[])` | `:1315` | 手写 `new T[num]` + 索引循环的**真拷贝**，不是 `Array.CopyTo` 也没有 `Buffer.BlockCopy`。 |
| `ToListQ` | `:1371`–`:1405` | 全部 `new List<T>(count)` + `AddRange`。`ToListQ(List<T>)` 也是拷贝——**同名不同语义，不要拿来当 `ToList()` 的零分配替身**。 |

## 真实示例

引擎自己在 `ThirdPhase.cs:103-111` 里就是用「裸数字字面量 + `EndActivity`」的形状，这里给出等价的、能真正读懂的三种典型写法：

```csharp
using TaleWorlds.LinQuick;

// 1) 空集合安全的最大值：必须走带选择器或 IComparable 的重载。
//    int[] 裸重载在空数组上会抛 IndexOutOfRangeException。
public static float GetBestSkillValue(IEnumerable<Skill> skills)
{
    return skills.MaxQ(s => s.Value);   // 空集合 → InvalidOperationException（System.Linq.Error.NoElements）
}

// 2) 一次扫描拿到前三名，不需要 Sort。
public static (Skill best, Skill second, Skill third) GetTopThreeSkills(IEnumerable<Skill> skills)
{
    return skills.MaxElements3(s => s.Value);
    // 少于三个元素时缺的槽位是 null，务必先判
}
```

带容器特化重载时的快路（数组）：

```csharp
using TaleWorlds.LinQuick;

public static int CountLivingParties(Party[] allParties)
{
    return allParties.CountQ(p => p.IsActive);   // EqualityComparer 路径，无迭代器状态机
}

// 注意返回的是延迟序列，不是快照
public static IEnumerable<Party> Living(IEnumerable<Party> source)
{
    return source.WhereQ(p => p.IsActive);
}
```

想在自己代码里复制引擎的 `OrderByQ` 语义时，注意两条路径不一样：

```csharp
// 稳定（LINQ），返回延迟序列，可 ThenBy
IOrderedEnumerable<Party> stable = parties.OrderByQ(p => p.Id);

// 不稳定（Array.Sort），返回数组快照，可下标访问
Party[] unstable = partyArray.OrderByQ(p => p.Id);
```

## 风险与边界

- **`MaxQ` / `AverageQ` 的空集合行为按重载分裂。** `MaxQ(int[])` `:727`、`MaxQ(List<int>)` `:741` **不检查长度**，空输入抛 `IndexOutOfRangeException` / `ArgumentOutOfRangeException`；其余所有 `MaxQ` / `AverageQ` 抛 `System.Linq.Error.NoElements()`（`InvalidOperationException`）。捕获时两种都要写。
- **`MaxQ` 的选择器重载多调一次 selector。** `MaxQ(T[], Func<T,float>)`（`:847`）先 `num = selector(source[0])` 取初值，再从 `i = 0` 开始循环——`source[0]` 的 selector **总共被求值两次**。selector 有副作用（累加、计数、写日志）时结果会错。
- **`OrderByQ` 的数组/List 重载不稳定。** `Array.Sort<TKey,T>` 不保证相等键的相对顺序，而 `OrderByQ(IEnumerable<T>)` 就是 LINQ、稳定。同一份数据两条路可能给出不同顺序的等价元素——**别用它做「稳定的排行榜」**。
- **`WhereQ` / `SelectQ` 返回延迟序列，不是快照。** 返回类型就是 `IEnumerable<T>`，枚举几次跑几次；持有它的同时修改源集合会抛 `InvalidOperationException`。要快照用 `ToListQ` / `ToArrayQ`。
- **`ToArrayQ(T[])` 和 `ToListQ(...)` 都是真拷贝。** 名字里的 Q 没有「省一次分配」的含义，反而比 LINQ 多了至少一个数组/List 对象。
- **`ContainsQ(Queue<T>, ...)` 用旋转法实现，异常路径会留下脏队列。** `:278` / `:320` 的实现是 `Dequeue → 判断 → Enqueue` 循环 `source.Count` 次。顺利返回时队列顺序完整还原；**一旦 `predicate(...)` 抛异常，循环中断，队列永久偏移了已经消费的那几格**。谓词里任何会抛的代码（空引用、除零）都会踩到。另外命中后它不 `break`，总是扫完整个队列。
- **`FindIndexQ(IEnumerable<T>, value)` 的 Comparability 判在值上。** `:548` 的 `value != null && value is IComparable` 决定走 `Comparer<T>.Default.Compare` 还是 `t.Equals(value)`。走后者时**集合里存在 null 元素会 NRE**，而且 `Equals` 是精确相等（`1.0f.Equals(1.0)` 为 false），跟数组/List 重载的 `EqualityComparer<T>.Default` 行为一致——所以**同一个值对象，`IEnumerable<T>` 路径和 `List<T>` 路径可能给出不同下标**。
- **`FirstOrDefaultQ` 没有无谓词重载。** 只有 4 个带 `Func<T,bool>` 的版本，`list.FirstOrDefaultQ()` 编译不过——写 `list[0]` 或 `list.FirstOrDefault()`。
- **`MaxElements3` 在元素不足三个 / 并列时给的是 `default(T)` / 先遇到的赢家。** 它没有长度校验也不会抛异常，全靠调用方自己保证至少三个元素。
- **全类没有 `MinQ`。** 也没有 `Aggregate`、`Zip`、`Distinct`、`GroupBy`、`First`、`Last`、`ElementAt`、`Reverse`、`OrderByDescending`、`ThenBy`、`Skip` / `Take`。找不到的动词不是「漏了」，是这个类本来就没有——用 LINQ 就行。
- **命名空间是 `TaleWorlds.LinQuick`，不是 `System.Linq`。** `using TaleWorlds.LinQuick;` 之后 `list.Where(...)` 和 `list.WhereQ(...)` 同时可用，**同时可见**。想全程用引擎版必须改写方法名，没有「禁用 LINQ」的开关。

## 跨版本提示

- **88 条 public 声明在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 五棵树上逐字相同**（1.4.5 是残缺树，没有 `TaleWorlds.LinQuick/LinQuick.cs`）。没有一个动词被删、被改名或被加参数，`MaxElements3` 也没有被替换成别的形状。
- **这意味着纯升级不需要改代码。** 但反过来说，如果你在某个更新里没找到某个方法，它在 1.3.0 也没有——不要指望升级能带来 `MinQ`。
- 需要留意的只有一点：这个类是 **Unity 主线程上的同步集合工具**，没有任何一处检查调用线程。如果上游（1.4.x 之后）某个版本给某些集合换了线程模型（如把 `MBList` 换成并发容器），这些方法不会因此变线程安全。

## 依赖关系

- 唯一外部依赖：`Error.NoElements()` 来自 `System.Linq`（`LinQuick.cs` 里直接 `throw` 它，所以异常类型与 LINQ 完全一致）——**但同模块内的排序工具是 [MBMath](../../core-extra/MBMath)**（`TopologySort` 等），两者没有任何继承或调用关系
- 与 [MBList<T>](../../core-extra/MBList) / [MBBindingList<T>](../../core-extra/MBBindingList) 的关系：`WhereQ` / `SelectQ` / `CountQ` 只接受 `List<T>` / `IReadOnlyList<T>` / `T[]` / `IEnumerable<T>` 四种静态类型——**`MBList<T>` 不继承 `List<T>`，只能走 `IEnumerable<T>` 那条最慢的重载**（虽然 `WhereQ(IEnumerable<T>)` 内部还会 `as IReadOnlyList<T>` 再试一次快路，但 `SelectQ` / `MaxQ` 不会）。想吃到快路要么改成 `ToListQ()` 一次，要么接受 `IEnumerable` 路径
- 桶首页：[campaign-ext API 分区](../)
