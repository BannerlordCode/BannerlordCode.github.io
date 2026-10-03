---
title: "MBReadOnlyList"
description: "引擎的只读列表标记类型：继承 List<T>、只加三个构造器、不做任何只读保护，用 202 处公开返回值充当「别改我」的编译期承诺。"
---

# MBReadOnlyList

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBReadOnlyList<T> : List<T>`
**Base:** `System.Collections.Generic.List<T>`
**File:** `TaleWorlds.Library/MBReadOnlyList.cs`（全文 24 行，581 字节）

## 概述

`MBReadOnlyList<T>` 的全部源码就是三个构造函数，加一个空类声明。它**没有覆写任何一个 `List<T>` 的成员**，没有 `Add` 的拦截，没有返回只读包装器，没有 `IReadOnlyList<T>` 实现。所以第一句话就得说清：**这个类型在运行期不提供任何只读保护**。你手里的 `MBReadOnlyList<T>` 就是一个货真价实的 `List<T>`，`((List<T>)result).Add(x)` 一行就能改。

那它存在的意义是什么？是**签名级别的承诺**。引擎作者在写 API 时，把返回值类型从 `List<T>` 改成 `MBReadOnlyList<T>`，就等于在函数签名上写下「这个集合归我所有，调用方你只读」。编译器会拦住直接 `.Add()` 的调用，迫使消费方去找 `GetComponent` 之类的正规途径。全树 `public MBReadOnlyList<...>` 作为返回类型出现 **202 处**，`MBReadOnlyList<T>` 作为类型参数出现 **20 处**——这是个被广泛使用的约定，而不是边角料。

它同样出现在成员字段上，只是数量更少。这不是设计上的疏漏，而是**同一套「只读承诺」表达方式在不同层次上的不同用法**：字段必须支持增删，所以是 `MBList<T>`；返回值不该被改，所以是 `MBReadOnlyList<T>`。两者是父子关系而不是并列，所以一个 `MBReadOnlyList<T>` 类型的返回值在运行期**完全可能就是一个 `MBList<T>`**，照样可写。

## 心智模型

**把它当成「签名上的只读标记」，而不是「被保护的对象」。** 这是唯一准确的读法。理解它的关键是把它和另外两种同名概念区分开：

**第一种误解：它等价于 `ReadOnlyCollection<T>`。** 不是。`ReadOnlyCollection<T>` 是一个**包装器**，内部持有另一个 `List<T>` 并真的拦截写操作；`MBReadOnlyList<T>` 是**继承**，它本身就是那个 `List<T>`。前者包装，后者就是本体。

**第二种误解：可以用它做防御性拷贝的接收方。** 也不能。`IReadOnlyList<T>` 在设计上的意思是「调用方能读，但拿到的对象本身不能被写」；而 `MBReadOnlyList<T>` 只在**静态类型**上说「调用方别写」，运行期那个 `List<T>` 实例的 `Add` 依然是活的。想真正防住，得自己写 `new List<T>(source)` 拷贝一份。

**第三种误解：既然只读，就不能当初始化源。** 恰恰相反，它的构造函数**比 `List<T>` 还少一个**——`List<T>` 有 `List(List<T>)` 这个拷贝构造，而 `MBReadOnlyList<T>` 只有 `()`、`(int capacity)`、`(IEnumerable<T>)` 三个。也就是说，你要拷贝一个已有的 `List<T>`，得走 `(IEnumerable<T>)` 那个重载。

**它真正的价值出现在原地修改之后。** `IList<T>` 是一个坏抽象：调用方拿到它，就获得「增删改查」全套权力，哪怕提供者只想给你「查询」。`MBReadOnlyList<T>` 至少把「增删」从签名里拿掉了——调用方手里的静态类型只剩 `Count`、索引器、`Contains`、`foreach`、`ToArray()`、`GetEnumerator()` 这些**不改变内部状态的**操作。这是接口隔离原则在引擎里的一次朴素实践：不给不给的东西，比给一个「其实不能用」的接口诚实得多。

**它的祖先是它的儿子。** `MBList<T> : MBReadOnlyList<T>`。所以类型名的 ReadOnly 完全是**声明方对使用方的承诺**，与运行期对象的实际可变性无关。这条不变量撑起了下面这套分工：

```
内部持有、引擎自己增删   →  MBList<T>          （[MBList](../MBList)，可变，会被填充）
对外暴露、消费方只读     →  MBReadOnlyList<T>  （本类型，只读承诺）
```

`GameModel` 那一组就是标准范式：`GameModelsManager` 内部持有一个 `MBList<GameModel> _gameModels`（引擎自己要往里 `Add`），对外的 `GetGameModels()` 返回 `MBReadOnlyList<GameModel>`（消费方只是遍历）。同一个对象，出去的时候换了个更窄的静态类型。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| （类声明） | `public class MBReadOnlyList<T> : List<T>` | 本页的核心：它就是 `List<T>`。`IndexOf` / `Contains` / `Sort` / `Reverse` / `ToArray` / `ForEach` / `GetEnumerator` 全部原样继承自 `List<T>`，本类一个都没有覆写或新增。 |
| 构造 | `public MBReadOnlyList()` | 空构造。`AddComponent` 这类工厂用它先建空壳再填充。 |
| 构造 | `public MBReadOnlyList(int capacity)` | 转发 `base(capacity)`，预分配容量。避免已知元素个数时的反复扩容。 |
| 构造 | `public MBReadOnlyList(IEnumerable<T> collection)` | 转发 `base(collection)`。**实际最常用的一个**：引擎内部字段是 `List<T>`，返回时 `new MBReadOnlyList<T>(myList)` 一次性拷出来；消费方想深拷贝一份也走它。 |

| 延伸类型 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `MBList<T>` | `public class MBList<T> : MBReadOnlyList<T>` | 引擎内部真正持有的可变列表。它比本类多一个 `MBList(List<T> collection)` 构造，其余三个原样继承。本类型存在的直接理由就是给它当基类。 |

## 真实示例

在 `Campaign.cs` 里看一条最标准的用法。引擎内部把实体组件存成一个可变列表，要读的时候再包一层只读视图返回给外部：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Library;

public static void CountAliveHeroes()
{
    Campaign campaign = Campaign.Current;
    MBReadOnlyList<Hero> alive = campaign.AliveHeroes;
    for (int i = 0; i < alive.Count; i++)
    {
        Hero hero = alive[i];
        MBDebug.Print(hero.Name.ToString() + " @ " + i);
    }
}
```

`campaign.AliveHeroes` 在 `Campaign.cs:1276` 声明为 `public MBReadOnlyList<Hero> AliveHeroes`——引擎内部用一个 `MBList<Hero>` 随英雄生老病死增删，到你手上就是本类型。拿到 `Hero` 之后该调什么方法随你，但这条链路上一个 `Add` 都不该出现。

`GameModelsManager.GetGameModels()`（`GameModelsManager.cs:31`）是同一套写法的核心侧例子：内部 `MBList<GameModel>`，返回 `MBReadOnlyList<GameModel>`。[GameModel](../GameModel) 那一族之所以能被统一遍历，靠的就是这个统一的静态元素类型。

同一个约定在 `WeaponComponent` 上也用着：它内部维护 `private readonly MBList<WeaponComponentData> _weaponList`，但对外给的是 `public MBReadOnlyList<WeaponComponentData> Weapons`。你要读武器就 `foreach`，**不要**去调 `(component.Weapons as List<WeaponComponentData>).Clear()`——这行能编译过、能跑，但会把引擎内部的武器列表清空，属于典型的自伤式事故。

想让「只读」真的成立，做法只有一条——**自己拷贝**，而不是指望类型拦住你：

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;

public static List<ItemModifier> SnapshotModifiers(ItemModifierGroup group)
{
    // group 内部是 MBList<T>，声明成什么类型跟它的实际可变性无关。
    // 想拿到一份不受后续引擎填充影响的快照，必须显式拷贝。
    List<ItemModifier> snapshot = new List<ItemModifier>();
    foreach (ItemModifier modifier in group.ItemModifiers)
    {
        snapshot.Add(modifier);
    }
    return snapshot;
}
```

## 风险与边界

- **没有运行期只读保护。** 这是最需要记住的一条。任何一次 `(List<T>)readOnlyList` 转型或通过 `List<T>` 变量接收，都会绕开全部「只读」承诺。引擎自身从不这么做，但它无法阻止 mod 这么做。把它当护栏用是危险的。
- **不要用它当字段类型。** 引擎内部持集合一律用 [MBList](../MBList)。用 `MBReadOnlyList<T>` 声明字段，你只是给自己多加一次转型才能填充它。
- **拷贝构造缺失。** `List<T>` 有 `List<T>(List<T>)`，本类没有。`new MBReadOnlyList<T>(someList)` 会走 `IEnumerable<T>` 重载，语义相同但编译器不会帮你选到更快的路径（`List<T>` 的内部实现里 `ICollection<T>` 拷贝走的是 `CopyTo`，比逐元素 `Add` 快）。
- **`Sort` / `Reverse` / `Reverse` 这类「非增删但改内部状态」的方法照样继承。** 只读承诺挡住的是「增删」，不是「原地重排」。`GetViewModelAtPath` 那种返回内部集合的场景尤其要小心消费方调 `Sort`。
- **依赖系统引用即可。** 它在 `TaleWorlds.Library` 里，是 `TaleWorlds.Library.dll` 的类型。写 mod 时 `using TaleWorlds.Library;` 是必需的——`TaleWorlds.Core` 里的 `ViewModel`、`MBSubModuleBase` 等类型大量使用它，漏了这个 using 会在几十个类型上连环报错。
- **序列化系统认识它。** `SaveableCoreTypeDefiner` 为 `EntitySystem<>` 之类做类型登记时，`MBReadOnlyList<T>` 走的是标准 `List<T>` 路径，不会有额外的存档行为。
- **与 `System.Collections.ObjectModel.ReadOnlyCollection<T>` 无继承或实现关系。** 名字相似纯属巧合，不要尝试互转。

## 跨版本提示

在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵源码树里，本类的 **public 成员集合完全一致**——始终是三个构造器，没有任何新增。

字节数有一处小差异，但**纯粹是反编译器的排版差别，不是 API 变化**：1.3.0 是 581 字节 / 24 行，1.3.15 与 1.4.6、1.4.7 是 589 字节 / 26 行，1.5.3 是 590 字节 / 26 行。差异来自 `: base(capacity)` / `: base(collection)` 这两条构造转发——旧版把转发写在签名同一行，新版换到了下一行。语义完全相同。

变化的是**使用面**：作为公开返回值出现的 `MBReadOnlyList<...>` 声明数量随新系统（海战、编队、多人）持续增长（1.3.0 的 `MobileParty` 有 38 处、`MapEventParty` 43 处、`CharacterObject` 36 处），但形式始终不变——依然是 `List<T>` 的直接子类 + 三个构造器。

结论：**这是一个可以完全信任的基础设施类型，升级时不需要为它做任何适配**。唯一跨版本需要复核的是你自己的代码有没有依赖了那行排版差异——不会，因为它不改变任何签名语义。

## 依赖关系

- 可变对偶：[MBList](../MBList) 直接继承本类型并加了 `MBList(List<T>)` 构造；引擎内部字段用 `MBList`，对外返回值用本类型
- 典型持有者：[GameModelsManager](../GameModelsManager) 内部 `MBList<GameModel>`、对外 `GetGameModels()` 返回 `MBReadOnlyList<GameModel>`
- 典型暴露点：[WeaponComponent](../WeaponComponent) 的 `Weapons` 属性是本类型最贴近本页的一次用法（同桶兄弟）
- 集合持有者：[ItemModifierGroup](../ItemModifierGroup) 把 `ItemModifier` 装在一个内部列表里并对外暴露
- UI 侧配套：[ViewModel](../ViewModel) 所在模块同样建立在 `TaleWorlds.Library` 之上，`GetViewModelAtPath` 返回的也可能正是本类型
- 桶首页：[core-extra API 分区](../)