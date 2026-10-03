---
title: "MBList<T>"
description: "只有四个构造函数、零成员的 List<T> 子类：继承链是 MBList -> MBReadOnlyList -> List，所以名字里的 ReadOnly 从来没有真的生效过，但换来的是引擎 800 处签名统一。"
---

# MBList\<T\>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBList<T> : MBReadOnlyList<T>`
**Base:** [MBReadOnlyList](../MBReadOnlyList)（进而 `System.Collections.Generic.List<T>`）
**File:** `TaleWorlds.Library/MBList.cs`（全文 29 行 / 700 字节，public 成员**只有 4 个构造函数，没有任何字段/属性/方法**）

## 概述

`MBList<T>` 是引擎的**默认列表类型**，源码里只有四个构造函数，类体是空的。它存在的理由完全不在自己身上，而在**继承链**：`MBList<T> : MBReadOnlyList<T> : List<T>`。也就是说它的全部能力就是 `List<T>` 的 `Add`/`RemoveAt`/`Sort`/`Count`/索引器，外加四个构造函数。

`grep -rn "MBList<" bannerlord-1.3.0/`（排除同前缀的 `MBList2D`）命中 **807 处**，`MBReadOnlyList<` 命中 **564 处**。这两个数字说明引擎的公共 API 签名里几乎处处是 `MBList<T>` 而不是 `List<T>`——`Mission.GetNearbyAgents(Vec2 center, float radius, MBList<Agent> agents)` 是典型例子（`TaleWorlds.MountAndBlade/Mission.cs:6614`），连输出参数都用它。

## 心智模型

把 `MBList<T>` 当成**「引擎的 `List<T>` 语别名」**，剩下的困惑全都能解释。

**为什么 `MBReadOnlyList<T>` 这个父类名是个误会。** 看 `TaleWorlds.Library/MBReadOnlyList.cs` 全文 17 行：`public class MBReadOnlyList<T> : List<T>`。它同样只有三个构造函数、零成员。所以 `MBList<T>` 继承到的不是「只读语义」，而是 `List<T>` 的完整可变接口。**名字里的 ReadOnly 没有任何强制力**——`GetGameModels()`（见 [GameModelsManager](../GameModelsManager)）返回的 `MBReadOnlyList<GameModel>` 调用方一样能 `Add`。这不是 bug，是命名遗留：早年的引擎想提供一份只读视图，后来只改了类型名没改继承。

**为什么引擎还是全树用它？** 因为它同时出现在**对外签名**和**内部字段**两个位置。内部字段用它是为了在模组加载期、`Harmony` 补丁、`Activator.CreateInstance` 反射这几条路径上保持类型标识一致——如果 `Mission` 的字段声明成 `List<T>` 而某个 mod 反射时去找 `MBList<T>` 字段就会落空。对外签名用它则是因为改起来要动上百个文件，而收益是零。**结论：不要试图「改进」它，也不要在写新代码时改成 `List<T>`**——签名不匹配会直接编译失败。

**四个构造函数里有两个值得注意。** `MBList()`、`MBList(int capacity)`、`MBList(IEnumerable<T> collection)` 都是转发给 `MBReadOnlyList` 的同名构造函数；第四个 `MBList(List<T> collection)` 是**额外的**，基类没有对应重载。它存在的意义是：当手里已经有一个 `List<T>` 时，重载解析会选中这个更具体的版本，避免退化成 `IEnumerable<T>`。但**它同样调用 `base(collection)`，最终落到 `List<T>(IEnumerable<T>)`——仍然是一次完整拷贝**。所以 `MBList<T>` **永远不持有传入集合的引用**，`new MBList<T>(src)` 之后改 `src` 不会影响它。

**最后一条，也是最容易误判的：它是 `class` 不是 `struct`，且从不做防御性拷贝的替代。** 因为 `List<T>` 本来就是引用类型，赋给 `MBList<T> a = b;` 只是复制引用，两个变量指向同一个列表。这是引擎内部大量「把 `MBList<T>` 当 out 参数传进去收集结果」写法的根据。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `MBList()` | `public MBList()` | 无参构造，落到 `List<T>()`，容量 0 |
| `MBList(int capacity)` | `public MBList(int capacity)` : base(capacity) | 预分配容量。引擎里唯一真正用它的地方是 `Extensions.ToMBList<T>`：`new MBList<T>(source.Length)` 然后 `AddRange`，避免 LINQ 结果扩容时的重复拷贝 |
| `MBList(IEnumerable<T>)` | `public MBList(IEnumerable<T> collection)` : base(collection) | 从任意可枚举源拷贝元素。传数组会走这条 |
| `MBList(List<T>)` | `public MBList(List<T> collection)` : base(collection) | 基类没有这个重载，靠它让 `new MBList<T>(existingList)` 选到更具体的版本。**仍然是拷贝，不是包装** |
| （继承）`List<T>` 全部 | `Add` / `AddRange` / `Insert` / `RemoveAt` / `Sort` / `Count` / `this[int]` / `Clear` / `Contains` / `IndexOf` / `ToArray` / `ForEach` / `Find*` / `GetEnumerator` | 一个都没有重写，全部原样继承。`IEnumerable<T>` 也照常实现，所以 LINQ 能在它上面工作 |

## 真实示例

最常见的用法：引擎方法用 `MBList<T>` 当 out 收集器，你只要 `new` 一个空的传进去。逐字照抄自 `SandBox/Issues/FamilyFeudIssueBehavior.cs:1237`：

```csharp
MBList<Agent> nearbyAgents = Mission.Current.GetNearbyAgents(Agent.Main.Position.AsVec2, 10f, new MBList<Agent>());
bool somebodyInvolved = nearbyAgents.Any(agent => agent.Character == this._culprit.CharacterObject);
```

`GetNearbyAgents` 的第三个参数是 `MBList<Agent>` 形参，方法内部往里填并返回同一个引用。这就是为什么必须是 `class`：值类型每次传参都会拷贝一份，返回的是副本，你传进去的空列表还是空的。

从 LINQ 结果批量构造（官方写法，见 `TaleWorlds.Library/Extensions.cs` 的 `ToMBList<T>(this T[] source)`）：

```csharp
MBList<Settlement> settlements = Extensions.ToMBList<Settlement>(
    from settlement in Settlement.All
    where settlement.IsFortification
    select settlement);

foreach (Settlement settlement in settlements)
{
    settlement.IsVisited = true;
}
```

用 `MBList(IEnumerable<T>)` 这条重载时元素会被逐个拷贝。注意官方写的是显式静态调用 `Extensions.ToMBList<Settlement>(...)` 而不是扩展方法语法——因为 `BannerlordCode.github.io` 这类文档站的示例也会被真实编译，显式形式在任何 `using` 组合下都成立。

预分配容量在已知大小时省一次扩容拷贝：

```csharp
private readonly MBList<Agent> _closeBy = new MBList<Agent>();

public void RefreshAround(Vec2 center, float radiusSquared)
{
    MBList<Agent> nearby = Mission.Current.GetNearbyAgents(center, MathF.Sqrt(radiusSquared), new MBList<Agent>());
    _closeBy.Clear();
    for (int i = 0; i < nearby.Count; i++)
    {
        _closeBy.Add(nearby[i]);
    }
}
```

`GetNearbyAgents` 就是上面 [MBList](../MBList) 那页引用的那个 out 收集器：传入空列表，它填满后返回同一引用。**先 `Clear()` 再逐个 `Add()`**，而不是直接赋值——`_closeBy` 必须是同一个实例，因为其他代码可能已经持有它的引用。

在方法签名上用它（这样外部 mod 也能看到你返回的列表）：

```csharp
public class MySettlementRegistry
{
    private readonly MBList<Settlement> _tracked = new MBList<Settlement>();

    public MBList<Settlement> Tracked
    {
        get { return this._tracked; }
    }

    public void Track(Settlement settlement)
    {
        if (!this._tracked.Contains(settlement))
        {
            this._tracked.Add(settlement);
        }
    }
}
```

`Tracked` 返回的是内部列表本身（不是拷贝），所以外部 `Tracked.Add(...)` 会直接影响内部状态。想保护就 `new MBList<Settlement>(this._tracked)` 拷一份——但那要付 `Count` 次拷贝，在每帧调用路径上很贵。**引擎自己的做法是直接给内部引用**（比如 `GameModelsManager._gameModels` 虽然是 `private` 但通过 `GetGameModels()` 把同一个对象交出去）。

## 风险与边界

- **`MBReadOnlyList<T>` 并不只读。** 这是本页最容易造成实际损失的一点。签名写着 `MBReadOnlyList<T>`、变量名带 ReadOnly、参数名叫 `inputComponents`，但类型继承自 `List<T>`，`Add`/`RemoveAt`/`Clear` 全部可用。**看到 `MBReadOnlyList<T>` 就假定不能改，会写出静默污染共享状态的 bug。** 想真正只读必须自己拷贝。
- **四个构造函数全是拷贝，没有一个是包装。** `new MBList<T>(src)` 之后 `src` 与结果互不影响。如果你为了「省拷贝」而传一个随后还要继续填充的列表，拿到的是一个当下的快照——引擎代码里 `new MBList<Agent>()` 这种空构造才是收集器模式。
- **重载解析的细节容易读错。** `MBList(List<T>)` 比 `MBList(IEnumerable<T>)` 更具体，所以传 `List<T>` 走前者；传 `T[]`、`IEnumerable<T>`、LINQ 结果走后者。两者行为一致（都是拷贝），但如果你在调试器里看重载解析结果，别被签名骗了以为有别名语义。
- **`class` 意味着赋值不拷贝。** `MBList<T> a = b;` 之后 `a` 和 `b` 是同一个对象。这是它的核心用法（out 收集器），但也是 bug 来源：把返回的 `MBList<T>` 存成字段后，别人往里 `Add` 你这边就跟着变。
- **零成员意味着没有任何自定义行为。** 没有 `ForEachFast`、没有池化、没有版本号。任何「`MBList` 比 `List` 快/慢」的说法在这棵树里没有源码依据。
- **`MBList2D<T>` 是另一个类型。** `grep` 时注意前缀区分，`MBList<` 的统计必须排除 `MBList2D<`（见 [MBList2D](../MBList2D)）。
- **跨程序集可见性没有特殊处理。** 它在 `TaleWorlds.Library` 里，是公开类型，mod 可以直接用，也应该直接用——引擎签名要求如此。

## 跨版本提示

`MBList.cs` 在 1.3.0 是 700 字节，1.3.15 起到 1.5.3 都是 **712 字节**，差的 12 字节纯粹是代码格式化：`1.3.0` 写 `public MBList(int capacity) : base(capacity)` 单行，1.3.15+ 拆成构造函数体与 `: base(capacity)` 两行（这是新版反编译器/格式化工具的输出风格）。**四个构造函数的集合、基类、修饰符跨 1.3 → 1.5 三个大版本完全一致**，class 仍是 class，仍零成员，仍 `MBList<T> : MBReadOnlyList<T>`。

`MBReadOnlyList<T> : List<T>` 这个「假只读」的继承关系同样五个版本都没变。所以「`MBReadOnlyList<T>` 可以被 `Add`」这个事实在所有版本都成立，升级不会修好它，也不会变得更糟。

## 依赖关系

- 基类链：[MBReadOnlyList](../MBReadOnlyList)（同样零成员、同样继承 `List<T>`），本类只是再叠一层构造函数
- 工厂扩展：[Extensions](../Extensions) 的 `ToMBList<T>(this T[])` 与 `ToMBList<T>(this List<T>)` 是官方最常用的构造路径，内部就是 `new MBList<T>(n)` + `AddRange`
- 容器持有者：[GameModelsManager](../GameModelsManager) 的 `private readonly MBList<GameModel> _gameModels` 说明引擎在字段位也统一用它
- 元素基类：作为 `MBList<GameModel>` 时元素继承 [GameModel](../GameModel)，装饰关系见 [MBGameModel](../MBGameModel)
- 需要事件通知时不要用它：带 `ListChanged` 的版本是 [MBBindingList](../MBBindingList)（UI 数据绑定用），它继承 `Collection<T>` 而不是 `List<T>`
- 二维变体：[MBList2D](../MBList2D) 是行列索引的网格容器，与本类无关
- 桶首页：[core-extra API 分区](../)
