---
title: "ItemComparerBase"
description: "战役 ViewModelCollection 里每一个列表排序界面都使用的嵌套抽象比较器。它只携带一份可变状态 _isAscending（由 SetSortMode 写入），并强制每个具体比较器在并列时回落到 ResolveEquality —— 正是这一点让玩家反复点击同一列时行序保持稳定，而不是来回跳动。"
---
# ItemComparerBase

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public abstract class ItemComparerBase : IComparer<SmeltingItemVM>`  
**Base:** `IComparer<SmeltingItemVM>`  
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting/SmeltingSortControllerVM.cs`

## 概述

`ItemComparerBase` 是一个**嵌套**抽象类，而且这个名字被十个战役界面加两个多人界面各自复用。同名的每个实例都位于不同程序集里的不同 `*SortControllerVM` 内部，并且为**不同的**条目类型实现 `IComparer<T>`。本页记录的是 Smelting 变体（`IComparer<SmeltingItemVM>`），它也是所有变体共有的形态：

| 排序控制器 | `T` |
|---|---|
| `SmeltingSortControllerVM` | `SmeltingItemVM` |
| `ArmyManagementSortControllerVM` | `ArmyManagementItemVM` |
| `ClanFiefsSortControllerVM` | `ClanSettlementItemVM` |
| `ClanMembersSortControllerVM` | `ClanLordItemVM` |
| `ClanPartiesSortControllerVM` | `ClanPartyItemVM` |
| `TournamentLeaderboardSortControllerVM` | `TournamentLeaderboardEntryItemVM` |
| `KingdomArmySortControllerVM` | `KingdomArmyItemVM` |
| `KingdomClanSortControllerVM` | `KingdomClanItemVM` |
| `KingdomWarSortControllerVM` | `KingdomWarItemVM` |
| `KingdomSettlementSortControllerVM` | `KingdomSettlementItemVM` |
| `MissionScoreboardPlayerSortControllerVM` | `MissionScoreboardPlayerVM` |

本类本身只有四个成员。`protected bool _isAscending` 是共享的可变状态。`public void SetSortMode(bool isAscending)` 写它——由控制器的 `ExecuteSortByX()` 方法在 `MBBindingList<T>.Sort(comparer)` 之前立刻调用，因此**同一个**比较器实例会在多次排序之间被复用并被改写。`public abstract int Compare(T x, T y)` 由每个具体比较器（例如 `ItemNameComparer`、`ItemYieldComparer`、`ItemTypeComparer`）重写。`protected int ResolveEquality(T x, T y)` 提供并列时的兜底比较，且逐界面不同：Smelting 用 `x.Name.CompareTo(y.Name)`，ArmyManagement 用 `x.LeaderNameText.CompareTo(y.LeaderNameText)`。

## 心智模型

把它读成**“包着一份强制兜底比较的可变排序方向标志”**：

- **它处在哪一层**：它不是一个独立类型。它是 `*SortControllerVM : ViewModel` 的嵌套类，而后者才是绑定到 Gauntlet 列头的那个东西。控制器持有 `MBBindingList<T>` 与各具体比较器实例；比较器只是一个恰好带类型的辅助对象。
- **典型调用顺序**：widget 调用控制器的 `ExecuteSortByName()` → 控制器推进 `NameState`、通过 `SetAllStates` 重置其他所有状态、调用 `_nameComparer.SetSortMode(NameState == 1)`，然后 `_listToControl.Sort(_nameComparer)`。在这次 `Sort` 内部，`Compare` 会被调用很多次，每次都读 `_isAscending`。
- **常见误用陷阱 —— 比较器实例是共享且可变的**。每个控制器只有一个 `ItemNameComparer`，在控制器构造函数里创建、之后每次排序都复用。不要缓存比较器后从两个线程或两个控制器同时使用；`_isAscending` 不是每次调用独立的。
- **常见误用陷阱 —— 兜底比较是必需的，不是可选的**。每个内置具体比较器在主键相等时都以 `return ResolveEquality(x, y);` 结尾。没有它，`MBBindingList.Sort`（实践中是非稳定排序）会在每次点击时重排并列的行，玩家的选中项就会跳来跳去。你写自己的具体比较器时，务必以 `ResolveEquality` 收尾。
- **常见误用陷阱 —— 方向乘法的写法不一致，这是刻意的**。数值比较器写 `int n = y.Cost.CompareTo(x.Cost); return n * (_isAscending ? -1 : 1);`，而 `ItemNameComparer` 用提前返回特判 `_isAscending`。两者都正确；在同一个比较器里混用两套约定很容易把符号写反。
- **常见误用陷阱 —— 跨程序集的同名冲突**。`ItemComparerBase` 并不唯一。`using` 其中两个命名空间再写一个不带限定的 `ItemComparerBase` 就是二义引用，C# 编译器会告诉你——但前提是你真的引用了这个类型，而多数 mod 代码从不引用它。

## 何时使用 / 何时不要用

**该用它的情况：**
- 你要为自定义列表界面写自己的 `*SortControllerVM`，并希望获得同样的三态（默认 / 升序 / 降序）列头行为。
- 你要给现有界面加一个排序列：继承 `ItemComparerBase`、实现 `Compare`、注册实例、再加一个 `ExecuteSortBy...` 方法。
- 你希望排序手感稳定：实现 `Compare` 并始终以 `ResolveEquality` 收尾。

**不该用它的情况：**
- 你只需要一次性排序、没有 UI 列头。写一个普通的 `IComparer<T>` 或 `Comparison<T>` lambda 更短，也不需要状态。
- 你需要一个会在多处同时使用的比较器。请写无状态比较器；`_isAscending` 让这一族不适合并发使用。
- 你想把某个已有比较器复用到另一种条目类型上。`T` 已经焊死在接口实现里了。

## 主要成员

### `protected bool _isAscending`

排序方向。只由 `SetSortMode` 写入，在每个 `Compare` 重写里被读取。
- **可见性**：`protected`，因此子类可见而控制器不可见——控制器通过 `SetSortMode` 翻转它，而不是直接赋值。
- **有状态性**：它在多次排序之间持续存在。除了控制器的下一次 `ExecuteSortByX`，没有任何东西会重置它。

### `public void SetSortMode(bool isAscending)`

给 `_isAscending` 赋值。由所属控制器在每次 `Sort` 之前调用。
- **返回值**：无。
- **约定**：`true` 表示升序。注意内置数值比较器会先把比较反转（`y.CompareTo(x)`），再在升序时乘 `-1`，因此标志为 `true` 时的实际顺序确实是*升序*，尽管原始比较是降序的。

### `public abstract int Compare(T x, T y)`

排序键。约定：`x` 应排在 `y` 前时返回负值，相等返回 0，应排在后面返回正值。
- **必需形态**：先算主键；若不同则返回 `key * (_isAscending ? -1 : 1)`；否则返回 `ResolveEquality(x, y)`。

### `protected int ResolveEquality(T x, T y)`

界面专属的并列兜底比较，Smelting 中是 `x.Name.CompareTo(y.Name)`，ArmyManagement 中是 `x.LeaderNameText.CompareTo(y.LeaderNameText)`。
- **它刻意*不*感知方向**。无论 `_isAscending` 如何都返回同样的结果，因此并列行即使主列是降序也保持稳定的升序名称序。这是期望行为；不要为了“修正”而给它乘上方向系数。

## 使用示例

### 示例 1 —— 典型具体比较器（Smelting，按名称）

```csharp
public class ItemNameComparer : ItemComparerBase
{
    public override int Compare(SmeltingItemVM x, SmeltingItemVM y)
    {
        if (_isAscending)
        {
            return y.Name.CompareTo(x.Name) * -1;
        }

        return y.Name.CompareTo(x.Name);
    }
}
```

### 示例 2 —— 典型具体比较器（Smelting，按数值键）

```csharp
public class ItemYieldComparer : ItemComparerBase
{
    public override int Compare(SmeltingItemVM x, SmeltingItemVM y)
    {
        int byYield = y.Yield.CompareTo(x.Yield);
        if (byYield != 0)
        {
            return byYield * (_isAscending ? -1 : 1);
        }

        return ResolveEquality(x, y);   // 必需的并列兜底
    }
}
```

### 示例 3 —— 给现有控制器加一列

```csharp
public class ItemTierComparer : ItemComparerBase
{
    public override int Compare(SmeltingItemVM x, SmeltingItemVM y)
    {
        int byTier = y.Tier.CompareTo(x.Tier);
        if (byTier != 0)
        {
            return byTier * (_isAscending ? -1 : 1);
        }

        return ResolveEquality(x, y);
    }
}

// 在 SmeltingSortControllerVM 的构造函数中：
_tierComparer = new ItemTierComparer();

// 以及一个对应的 execute 方法，模仿 ExecuteSortByYield：
public void ExecuteSortByTier()
{
    int tierState = TierState;
    SetAllStates(CampaignUIHelper.SortState.Default);
    TierState = (tierState + 1) % 3;
    if (TierState == 0)
    {
        TierState++;
    }

    _tierComparer.SetSortMode(TierState == 1);
    _listToControl.Sort(_tierComparer);
    IsTierSelected = true;
}
```

## 风险与崩溃边界

- **存档序列化**：没有，也不可能有。`ItemComparerBase` 是由 `ViewModel` 持有的临时辅助对象；它不持有战役状态、没有 `SyncData`、也绝不会被写到任何地方。排序是纯粹的视图操作——绝不要用它去重排你期望被持久化的东西。想要一个能存盘的顺序，请去排序一个由存档支撑的集合。
- **跨域依赖**：该类型位于界面专属的 ViewModelCollection 程序集，并针对该界面的条目 VM 定型。为了排序而从战役行为里引用 `SmeltingItemVM` 会把层次倒置——行为属于 `Campaign`，条目 VM 属于视图层。排序是表现层的事，就把它留在那里。
- **加载时序**：比较器在控制器构造函数里创建，也就是屏幕视图模型被创建时。本类没有任何需要初始化的东西，也不依赖任何全局状态，因此顺序对它不是隐患——但在你排序之前，条目 VM 必须已经填进 `MBBindingList`，否则你排的是一个空列表，看起来就像没生效。
- **ID 稳定性**：没有 id。真正相关的稳定性隐患是 `T` 的绑定：Smelting 程序集里的 `ItemComparerBase` 是 `IComparer<SmeltingItemVM>`，而 ClanMembers 里是 `IComparer<ClanLordItemVM>`。没有任何机制阻止你写出“这一族共享同一个类型参数”的假设；它并不共享，而且只有在你真正写出该类型名时编译器才会抓到。
- **跨排序共享的可变状态**。比较器实例的生命周期长于单次排序。如果你的控制器被销毁重建、而旧的 `Sort` 仍在进行中（或者你从后台回调里对同一列表排序），`_isAscending` 可能在比较过程中被改掉，产生不一致的顺序——更糟的话会破坏传递性，而某些排序实现对此处理得很差。
- **`ResolveEquality` 是 `protected` 且非虚的**。你无法在不重写每一个具体比较器的前提下，改变某个既有界面的兜底比较。`IComparer` 层面没有为它预留钩子。

## 跨版本提示

- **v1.3.x → v1.4.5**：四个成员的形态（`_isAscending`、`SetSortMode`、抽象 `Compare`、`protected ResolveEquality`）在两个版本的所有变体中都完全一致。新增界面得到的是这个类的新副本，而不是某个共享泛型。
- **v1.4.5**：共有十个战役版 `ItemComparerBase` 声明与两个多人版。其中两个多人变体把该类声明为 `private` 而非 `public`（`MPLobbyClanLeaderboardSortControllerVM`），因此无法从外部扩展。
- **v1.4.5**：不存在泛型的 `ItemComparerBase<T>`，`TaleWorlds.Core` 里也没有共享基类。这种逐界面重复是刻意的，其后果是兜底字段逐界面不同，无法统一。

## 参见

- ↑ 父级目录：[ViewModel API 索引](../)
- ↔ 同级：[SmeltingSortControllerVM](../SmeltingSortControllerVM) —— 本页记录的控制器，本类是其嵌套类
- ↔ 同级：[ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM) —— 针对 `ArmyManagementItemVM` 的同一模式
- ↔ 同级：[ItemComparer](../ItemComparer) —— 普通无状态比较器，不需要列头 UI 时的正确选择
- ↔ 同级：[SmeltingItemVM](../SmeltingItemVM) —— 本变体所排序的 `T`
- ↑ VM 基类：[ViewModel](../../core-extra/ViewModel) —— 所属排序控制器的基类
