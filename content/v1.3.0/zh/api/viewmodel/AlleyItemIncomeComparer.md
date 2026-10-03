---
title: "AlleyItemIncomeComparer"
description: "按每日收入给氏族财务页的暗巷列表排序：只比 ClanFinanceAlleyItemVM.Income 一个字段，升序时把 y.CompareTo(x) 取负，没有二级排序键。"
---

# AlleyItemIncomeComparer

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AlleyItemIncomeComparer : ClanIncomeSortControllerVM.AlleyItemComparerBase`
**Base:** `ClanIncomeSortControllerVM.AlleyItemComparerBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeSortControllerVM.cs`（全文 527 行；本类在第 513–525 行）

## 概述

**整个类只有六行代码和一个方法。** 它是三个暗巷比较器里最简单的一个：排序键只有一个整数 `Income`，没有任何二级键，没有任何前置判空。

```csharp
public class AlleyItemIncomeComparer : ClanIncomeSortControllerVM.AlleyItemComparerBase
{
    public override int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)
    {
        if (this._isAcending)
        {
            return y.Income.CompareTo(x.Income) * -1;
        }
        return y.Income.CompareTo(x.Income);
    }
}
```

它没有任何自己的字段，`_isAcending` 从基类继承（`protected`，所以能直接读）。**它也绝非 `ViewModel` 的派生类**——没有绑定属性、没有 `OnPropertyChanged`、不能被 Gauntlet 的 `BindingPath` 直接引用。它只是 `MBBindingList.Sort` 的一个参数。

## 心智模型

**把它想成「一个纯函数：给两个暗巷条目，返回谁排前面」。** 理解它只需要看清两件事。

**第一，默认方向是「高的在前」。** 非升序分支返回 `y.Income.CompareTo(x.Income)`。`x` 的收入 100、`y` 的收入 300 时 `300.CompareTo(100)` 返回正数 → `Sort` 认为 `y` 更大 → **`y` 在前**。所以默认就是降序（收入高的排上面）。

**第二，升序只是取负，不是换基准。** 升序分支返回 `y.Income.CompareTo(x.Income) * -1`，同样的输入得到负数 → `x` 在前。两个分支比较的是同一对操作数，差别只有尾部的 `* -1`。这是引擎里通用的一种写法（[AlleyItemNameComparer](../AlleyItemNameComparer) 一模一样）。

**谁在什么时候设方向？** [ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM) 的 `ExecuteSortByIncome`：

```csharp
this._alleyIncomeComparer.SetSortMode(this.IncomeState == 1);
this._alleyList.Sort(this._alleyIncomeComparer);
```

`IncomeState` 的取值来自同一个方法开头 `this.IncomeState = (incomeState + 1) % 3`，而 `CampaignUIHelper.SortState` 是 `Default=0 / Ascending=1 / Descending=2`。所以玩家每点一次「收入」表头，就在「降序 → 升序 → 降序」之间循环（源码里还额外处理了 `== 0` 的情况，跳过 `Default`）。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Compare` | `public override int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)` | **本类唯一的成员**。读取继承来的 `_isAcending`，返回 `int`：负数表示 `x` 在前，0 表示两者收入相同，正数表示 `y` 在前。**由 `MBBindingList.Sort` 在排序过程中反复调用，不是你手写的调用点。** 两个参数都不判 null——`x` 或 `y` 为 null 会直接 `NullReferenceException`。 |

继承来、不属于本页的：`SetSortMode(bool isAcending)` 与 `protected bool _isAcending`（见 [AlleyItemComparerBase](../AlleyItemComparerBase)）。

被比较的 `Income` 也不是本页的：它是 [ClanFinanceIncomeItemBaseVM](../ClanFinanceIncomeItemBaseVM) 上的 `public int Income { get; set; }`，由 [ClanFinanceAlleyItemVM](../ClanFinanceAlleyItemVM) 的 `RefreshValues()` 写入 `Campaign.Current.Models.AlleyModel.GetDailyIncomeOfAlley(this.Alley)`。

## 真实示例

官方持有这个比较器实例的字段是 `private readonly`，任何版本都拿不到。所以复用方式是**自己 new 一个并自己持有**——这在 1.3.0 到 1.5.3 都成立：

```csharp
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories;
using TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance;
using TaleWorlds.Core;
using TaleWorlds.Library;

public class MyAlleyIncomeSorter
{
    private readonly MBBindingList<ClanFinanceAlleyItemVM> _alleyList;

    // 实例必须自己 new 并长期持有：SetSortMode 是有状态的，
    // 每次排序都临时 new 一个会让方向设置丢失。
    private readonly AlleyItemIncomeComparer _comparer = new AlleyItemIncomeComparer();

    public MyAlleyIncomeSorter(MBBindingList<ClanFinanceAlleyItemVM> alleyList)
    {
        this._alleyList = alleyList;
    }

    // ascending = true 时收入低的在前；false / 不传时收入高的在前。
    public void Apply(bool ascending)
    {
        this._comparer.SetSortMode(ascending);
        this._alleyList.Sort(this._comparer);
    }
}
```

如果要换成自己的排序键，同样派生基类即可——基类的 `protected bool _isAcending` 会照常工作：

```csharp
// 按「驻地的领主队伍数」排序：直接读 Settlement 上的实时计数，而不是 VM 的快照字段。
// 这样即使 ClanFinanceAlleyItemVM.RefreshValues() 还没跑，顺序也是对的。
public class MyAlleyGarrisonComparer : ClanIncomeSortControllerVM.AlleyItemComparerBase
{
    public override int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)
    {
        int result = y.Alley.Settlement.NumberOfLordPartiesAt
            .CompareTo(x.Alley.Settlement.NumberOfLordPartiesAt);
        return this._isAcending ? result * -1 : result;
    }
}
```

`Alley : SettlementArea`，而 `Settlement` 是 [Alley](../../campaign/Alley) 上一个 **`override` 属性**，所以 `x.Alley.Settlement` 拿到的是宿主聚落对象，`NumberOfLordPartiesAt` 是它上面的 `public int { get; private set; }`——**读得到，改不了**，这正适合当排序键。

## 风险与边界

- **`Compare` 不判 `x` / `y` 为 null。** 传给 `Sort` 的列表里若混进 null 引用会直接 NRE。`MBBindingList.Sort` 本身也不做检查。
- **收入相同的两个暗巷返回 0，顺序不稳定。** 引擎在这三个比较器上**没有提供二级排序键**——这和军队那套（[ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM) 的 `ItemComparerBase.ResolveEquality`）不同。想要稳定排序就在派生类里自己补。
- **`Income` 是快照，不是实时值。** 它在 [ClanFinanceAlleyItemVM](../ClanFinanceAlleyItemVM) 的 `RefreshValues()` 里被写入，之后不再更新。排序前不刷新，排序的就是上次的数字。
- **默认方向是降序。** 不调 `SetSortMode` 直接 `Sort`，得到的是收入高的在前——`protected bool _isAcending` 的默认值是 `false`。
- **实例是有状态的。** 排序期间不能改方向；`Sort` 是一次性操作，结束后可以安全地再改。
- **不是 `ViewModel`。** 没有绑定属性、不发通知、不能被 XML 的 `BindingPath` 引用。想在界面上显示排序状态，看的是 [ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM) 上的 `IncomeState` / `IsIncomeSelected`。
- **类名不完整。** 本类声明在 `ClanIncomeSortControllerVM` 内部，外部写类型时必须用嵌套限定名 `ClanIncomeSortControllerVM.AlleyItemIncomeComparer`（`using` 掉命名空间后仍需带外层类名），光写 `AlleyItemIncomeComparer` 找不到类型。`..Base` 栏里写的 `ClanIncomeSortControllerVM.AlleyItemComparerBase` 就是同一个道理。

## 跨版本提示

**所属文件 `ClanIncomeSortControllerVM.cs` 在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 五棵树里逐字节等价**：19 个 public 成员签名一致，恒为 528 行（527 行内容 + 尾行）。本类的 `Compare` 实现体跨 1.3 → 1.5 **零变化**。

**跨版本风险只有一处：字段 `Income` 的来源模型。** 它来自 `Campaign.Current.Models.AlleyModel.GetDailyIncomeOfAlley(Alley)`（[AlleyModel](../../campaign/AlleyModel) 的抽象方法）。官方换模型实现时这个数值会变，但那不影响本类的编译与语义。**只要你不覆写 `AlleyModel`，本类在所有版本上行为一致。**

顺带一提：`AlleyItemIncomeComparer` 的兄弟 `SupporterItemIncomeComparer` 比的是 `TotalInfluenceBonus`、`WorkshopItemIncomeComparer` 比的是 `Workshop.ProfitMade`——三者共享同一个 `if (this._isAcending) ... * -1` 模板，把它们放在一起看就能确认这是引擎的通用排序写法。

## 依赖关系

- 基类与方向：[AlleyItemComparerBase](../AlleyItemComparerBase) 提供 `SetSortMode(bool isAcending)` 与 `protected bool _isAcending`
- 宿主与触发点：[ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM) 的 `ExecuteSortByIncome()` 写方向后调 `Sort`，其 `IncomeState` / `IsIncomeSelected` 是真正给 UI 用的绑定属性
- 被排序的元素：[ClanFinanceAlleyItemVM](../ClanFinanceAlleyItemVM)；排序键 `Income` 声明在基类 [ClanFinanceIncomeItemBaseVM](../ClanFinanceIncomeItemBaseVM)
- 集合容器：[MBBindingList](../../core-extra/MBBindingList) 的 `Sort(IComparer<T>)` 是本类 `Compare` 唯一的执行入口
- 方向枚举：[CampaignUIHelper](../CampaignUIHelper) 的嵌套 `SortState`
- 数值来源：[AlleyModel](../../campaign/AlleyModel) 的 `GetDailyIncomeOfAlley` 在 `ClanFinanceAlleyItemVM.RefreshValues()` 里被读
- 兄弟实现：[AlleyItemNameComparer](../AlleyItemNameComparer) · [AlleyItemLocationComparer](../AlleyItemLocationComparer)
- 桶首页：[viewmodel API 分区](../)
