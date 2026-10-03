---
title: "AlleyItemComparerBase"
description: "氏族财务页里「暗巷列表」三种排序器的抽象基类：只有一个 protected bool _isAcending 字段和一个 SetSortMode，用来在不改代码的前提下翻转排序方向。"
---

# AlleyItemComparerBase

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class AlleyItemComparerBase : IComparer<ClanFinanceAlleyItemVM>`
**Base:** `IComparer<ClanFinanceAlleyItemVM>`（嵌套在 [ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM) 内部，完整名 `ClanIncomeSortControllerVM.AlleyItemComparerBase`）
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeSortControllerVM.cs`（全文 527 行；本类在第 385–399 行）

## 概述

本类**只有三个成员，没有一个字段是 public，没有一个方法体超过一行**。它存在的唯一目的是给三个具体比较器（[AlleyItemNameComparer](../AlleyItemNameComparer)、[AlleyItemLocationComparer](../AlleyItemLocationComparer)、[AlleyItemIncomeComparer](../AlleyItemIncomeComparer)）提供一个共享的「排序方向」开关。

```csharp
public abstract class AlleyItemComparerBase : IComparer<ClanFinanceAlleyItemVM>
{
    public void SetSortMode(bool isAcending) { this._isAcending = isAcending; }
    public abstract int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y);
    protected bool _isAcending;
}
```

**它不是 `ViewModel` 的派生类，也没有绑定属性。** 它是一个纯粹的数据结构：`IComparer<T>` 要求一个 `Compare(T, T)`，`protected` 字段给子类在 `Compare` 里读方向。方向由谁写？由 [ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM) 的 `ExecuteSortByName` / `ExecuteSortByLocation` / `ExecuteSortByIncome` 三个方法在排序前写。

注意拼写：参数名是 `isAcending`（少一个 `d`），而 [ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM) 里的同族基类 `ItemComparerBase` 用的是正确的 `isAscending`。**这是 1.3.0 源码里的两处不一致，不是笔误转述。**

## 心智模型

**把它想成「一个被复用的布尔量持有者」，而不是「一个比较器」。** 三个真正的比较逻辑全在子类里；本类只提供方向存储。

方向的实际语义由调用方决定，源码里的规律是：**`true` = 升序（小的在前），`false` = 降序**。看 [ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM) 第 49–51 行：

```csharp
this._alleyNameComparer.SetSortMode(this.NameState == 1);
```

`CampaignUIHelper.SortState` 的三个值是 `Default = 0` / `Ascending = 1` / `Descending = 2`。所以 `NameState == 1` 就是「升序」。而子类里的写法印证了这个映射：

```csharp
// AlleyItemNameComparer.Compare
if (this._isAcending) { return y.Name.CompareTo(x.Name) * -1; }
return y.Name.CompareTo(x.Name);
```

升序时把比较结果乘 -1 反转。**注意这里是 `y.CompareTo(x)` 再取负，而不是 `x.CompareTo(y)`**——两者对纯数值等价，但对 `string.CompareTo` 也等价；区别在于**升序与非升序两个分支的比较基准是同一个 `y`**，所以实际效果就是「默认降序，可切成升序」。

**方向状态是有状态的，不是每次 `Compare` 传进来的。** 这一点和 `System.Collections.Generic.List<T>.Sort(IComparer<T>)` 的契约不同——`Sort` 会在排序过程中反复调用 `Compare`，所以中途改 `_isAcending` 会让排序结果不确定。**不要在 `Compare` 里改方向。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `SetSortMode` | `public void SetSortMode(bool isAcending)` | 唯一的具体方法，一行赋值。**由 `ClanIncomeSortControllerVM` 在每次点击排序表头时调用，紧接着调 `MBBindingList.Sort(comparer)`。** 没有返回值、没有通知、不校验范围——`true` 和 `false` 之外的语义由调用方保证。 |
| `Compare` | `public abstract int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)` | 抽象方法，**满足 `IComparer<ClanFinanceAlleyItemVM>` 的实现要求**。返回值契约与 `IComparer` 一致：负数表示 `x` 在前，0 表示相等，正数表示 `y` 在前。**在本类里没有实现体，别指望它做任何事。** |
| `_isAcending` | `protected bool _isAcending` | 唯一的字段。`protected` 意味着子类可读可写，但**不是 readonly**——理论上子类可以在 `Compare` 里改它，那样 `Sort` 的结果就不再确定。字段不是属性，所以没有 `OnPropertyChanged`，也没有绑定路径能读到它。 |

## 真实示例

三个比较器是 `ClanIncomeSortControllerVM` 的私有字段，**外部拿不到**。要复用这套排序语义，就自己派生了同类并自己持有一个 `MBBindingList<ClanFinanceAlleyItemVM>`：

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories;
using TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance;
using TaleWorlds.Core;
using TaleWorlds.Library;

// 我的暗巷排序器：复用基类的方向开关，排序键换成「到玩家队伍的距离平方」
public class MyAlleyDistanceComparer : ClanIncomeSortControllerVM.AlleyItemComparerBase
{
    public override int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)
    {
        // 用英雄当前的战役坐标做基准，和官方 AlleyItemLocationComparer 同源
        CampaignVec2 playerPosition = Hero.MainHero.GetCampaignPosition();
        float dx = x.Alley.Settlement.Position.Distance(playerPosition);
        float dy = y.Alley.Settlement.Position.Distance(playerPosition);

        int result = dx.CompareTo(dy);
        // 官方写法：升序时把结果取负。
        return this._isAcending ? result * -1 : result;
    }
}

public class MyAlleyListSorter
{
    private readonly MBBindingList<ClanFinanceAlleyItemVM> _alleyList;
    private readonly MyAlleyDistanceComparer _comparer = new MyAlleyDistanceComparer();

    public MyAlleyListSorter(MBBindingList<ClanFinanceAlleyItemVM> alleyList)
    {
        this._alleyList = alleyList;
    }

    // CampaignUIHelper.SortState.Ascending == 1，Descending == 2
    public void SortByDistance(CampaignUIHelper.SortState state)
    {
        this._comparer.SetSortMode(state == CampaignUIHelper.SortState.Ascending);
        this._alleyList.Sort(this._comparer);
    }
}
```

`ClanFinanceAlleyItemVM.Alley` 是 `public readonly Alley` 字段，`Alley.Settlement` 是导航属性，所以 `.Distance(...)` 拿到的是 `float`——`CompareTo` 返回 `int`，正是 `IComparer` 需要的形状。**注意官方 `AlleyItemLocationComparer` 里算距离用的是 `Position.Distance(Hero.MainHero.GetCampaignPosition())` 这个实参顺序（先自己再主角），我在上面写反了方向但结果一致，因为距离是对称的。**

## 风险与边界

- **参数名 `isAcending` 拼错。** 用命名实参写 `SetSortMode(isAscending: true)` 会编译失败——**只能用位置实参**。
- **`_isAcending` 是 `protected` 可写字段，不是只读。** 在 `Compare` 里改它会破坏 `List.Sort` 的前提（排序期间方向必须恒定）。官方三个子类都没改，但你派生时别改。
- **类名不完整。** 它的完整类型名是 `ClanIncomeSortControllerVM.AlleyItemComparerBase`——**直接 `using` 后写 `AlleyItemComparerBase` 是不存在的类型**。必须写嵌套限定名，或者 `using` 之后用 `ClanIncomeSortControllerVM.AlleyItemComparerBase`。这也是 [ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM) 那套同族类型（`ItemComparerBase`）的情况。
- **`SetSortMode` 不通知任何人。** 改方向不会有 `OnPropertyChanged`，因为它压根不是 `ViewModel`。UI 上的箭头朝向是 `ClanIncomeSortControllerVM` 那六个 `NameState` / `IsNameSelected` 等绑定属性在反映，不是本类的字段。
- **三个子类没有稳定的排序性（transitivity）保证。** 例如 [AlleyItemNameComparer](../AlleyItemNameComparer) 用 `y.Name.CompareTo(x.Name) * -1`，两个 `Name` 相等的暗巷返回 0，排序结果依赖框架实现。名字重复的暗巷之间的顺序**不稳定**。
- **`Compare` 在 `MBBindingList.Sort` 里被高频调用。** `AlleyItemLocationComparer` 每次调用都重算 `item.Alley.Settlement.Position.Distance(Hero.MainHero.GetCampaignPosition())`——注意 `Hero.MainHero` 是静态属性，每次都走一遍查找。别在 `Compare` 里做昂贵计算。

## 跨版本提示

**所属文件 `ClanIncomeSortControllerVM.cs` 在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 五棵树里 19 个 public 成员签名完全一致、行数恒为 528 行。** 本类的 `SetSortMode` / `Compare` / `_isAcending` 三个成员跨版本零变化。

真正的跨版本风险在于**宿主类的私有字段布局**：三个比较器在 `ClanIncomeSortControllerVM` 里全是 `private readonly` 字段（第 303–324 行），外部在任何版本都拿不到句柄。想复用只能自己 `new` 一个新的实例并自己持有——这个策略在所有版本上都成立。

另外同族的 [ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM).`ItemComparerBase` 多了一个 `protected int ResolveEquality(ArmyManagementItemVM x, ArmyManagementItemVM y)` 作为并列时的二级排序键，而 `AlleyItemComparerBase` **没有**这个方法。所以两个家族的「稳定排序」程度不一样：军队那套在距离/费用/兵力相等时会继续比领袖名，暗巷这套不会。

## 依赖关系

- 宿主与调用者：[ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM) 在构造器里 `new` 三个暗巷比较器，并在 `ExecuteSortBy*` 里先 `SetSortMode` 再 `Sort`
- 被排序的元素：[ClanFinanceAlleyItemVM](../ClanFinanceAlleyItemVM) 提供 `Name` / `Income`（继承自 `ClanFinanceIncomeItemBaseVM`）、`Alley` / `Settlement`；基类见 [ClanFinanceIncomeItemBaseVM](../ClanFinanceIncomeItemBaseVM)
- 集合容器：[MBBindingList](../../core-extra/MBBindingList) 的 `Sort(IComparer<T>)` 是三个 `ExecuteSortBy*` 的实际执行点
- 方向枚举：[CampaignUIHelper](../CampaignUIHelper) 的嵌套 `SortState`（`Default` / `Ascending` / `Descending`）决定传入的布尔值
- 三个具体实现：[AlleyItemNameComparer](../AlleyItemNameComparer) · [AlleyItemLocationComparer](../AlleyItemLocationComparer) · [AlleyItemIncomeComparer](../AlleyItemIncomeComparer)
- 同族不同家：[ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM) 的 `ItemComparerBase` 形状几乎相同但多了二级排序
- 桶首页：[viewmodel API 分区](../)
