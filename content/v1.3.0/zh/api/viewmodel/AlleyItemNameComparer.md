---
title: "AlleyItemNameComparer"
description: "按暗巷名排序：只比 ClanFinanceAlleyItemVM.Name 一个字符串，用 y.Name.CompareTo(x.Name) 配 * -1 做方向翻转，是引擎里最常见的排序模板。"
---

# AlleyItemNameComparer

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AlleyItemNameComparer : ClanIncomeSortControllerVM.AlleyItemComparerBase`
**Base:** `ClanIncomeSortControllerVM.AlleyItemComparerBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeSortControllerVM.cs`（全文 527 行；本类在第 429–441 行）

## 概述

**整个类只有七行**，是三个暗巷比较器里最短的一个，也是引擎「名字排序」的标准写法：

```csharp
public class AlleyItemNameComparer : ClanIncomeSortControllerVM.AlleyItemComparerBase
{
    public override int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)
    {
        if (this._isAcending) { return y.Name.CompareTo(x.Name) * -1; }
        return y.Name.CompareTo(x.Name);
    }
}
```

它没有字段、没有私有方法、没有构造器——全靠基类的 `protected bool _isAcending` 与被比较对象上的 `public string Name`。**`Name` 也不是它自己的成员**，而是继承自 [ClanFinanceIncomeItemBaseVM](../ClanFinanceIncomeItemBaseVM) 的绑定属性，由 [ClanFinanceAlleyItemVM](../ClanFinanceAlleyItemVM) 的 `RefreshValues()` 写入 `this.Alley.Name.ToString()`。

## 心智模型

**把它想成「引擎的 `if (ascending) return y.CompareTo(x) * -1; return y.CompareTo(x);` 模板的一个实例」。**

这个模板在同一个文件里出现了三次——`WorkshopItemNameComparer`（第 402–413 行）、`SupporterItemNameComparer`（第 416–427 行）、本类——三处逐字相同，只换被比较的属性。放到全引擎范围看，[ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM) 的 `ItemNameComparer` 也是同一个形状（只是比 `LeaderNameText`）。**看懂这七行，就看懂了 Bannerlord 里所有「点表头排序」的实现。**

理解它的关键是**默认方向**。非升序分支返回 `y.Name.CompareTo(x.Name)`：`x` 叫 "Alpha"、`y` 叫 "Zeta" 时，`"Zeta".CompareTo("Alpha")` 返回正数 → `Sort` 把 `y` 排前面 → **默认是 Z→A 的降序**。升序分支只是在这个结果上乘 -1。

**这里有一个容易忽略的语义细节：`string.CompareTo` 是序数比较（culture-sensitive 但非 `StringComparison.Ordinal`），对大小写、变音符号的排序结果依赖运行时区域设置。** 中文环境下「按名排序」的实际观感可能和英文不同——这是引擎行为，不是本类的 bug，但值得在设计自己的排序时知道。

**没有二级排序键。** 两个同名暗巷返回 0，顺序取决于 `List.Sort` 的内部实现（1.3.0 的 `MBBindingList.Sort` 直接委托给 `Collection<T>.Sort`，也就是 `Array.Sort`，**不稳定**）。所以重名暗巷之间的相对位置每次可能不同。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Compare` | `public override int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)` | **本类唯一的成员**。读继承来的 `_isAcending`，返回 `y.Name.CompareTo(x.Name)` 或它的负数。**由 `MBBindingList.Sort` 在排序过程中反复调用，参数不做 null 检查**——`x` / `y` 为 null 会在 `.Name` 上直接 NRE。 |

继承来、不属于本页的：`SetSortMode(bool isAcending)` 与 `protected bool _isAcending`（见 [AlleyItemComparerBase](../AlleyItemComparerBase)）。

被比较的 `Name` 也不是本页的：声明在 [ClanFinanceIncomeItemBaseVM](../ClanFinanceIncomeItemBaseVM) 上（`public string Name { get; set; }`，setter 走 `OnPropertyChangedWithValue<string>`），值由 [ClanFinanceAlleyItemVM](../ClanFinanceAlleyItemVM) 的 `RefreshValues()` 从 `Alley.Name.ToString()` 灌入。

## 真实示例

要复用这个方向语义，最省事的做法是把它当基类再派生一个自己的排序键——`_isAcending` 照常工作：

```csharp
using TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories;
using TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance;
using TaleWorlds.Core;
using TaleWorlds.Library;

// 按「驻地名」排序：名字排序的孪生，但排序键换成 Settlement.Name
public class MyAlleySettlementNameComparer : ClanIncomeSortControllerVM.AlleyItemComparerBase
{
    public override int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)
    {
        // 直接读宿主聚落的名字，绕开 VM 的 Name 快照
        string xName = x.Alley.Settlement.Name.ToString();
        string yName = y.Alley.Settlement.Name.ToString();

        int result = yName.CompareTo(xName);
        return this._isAcending ? result * -1 : result;
    }
}

public class MyAlleyNameSorter
{
    private readonly MBBindingList<ClanFinanceAlleyItemVM> _alleyList;
    private readonly MyAlleySettlementNameComparer _comparer = new MyAlleySettlementNameComparer();

    public MyAlleyNameSorter(MBBindingList<ClanFinanceAlleyItemVM> alleyList)
    {
        this._alleyList = alleyList;
    }

    public void Apply(CampaignUIHelper.SortState state)
    {
        // SortState: Default=0 / Ascending=1 / Descending=2
        this._comparer.SetSortMode(state == CampaignUIHelper.SortState.Ascending);
        this._alleyList.Sort(this._comparer);
    }
}
```

想让重名的暗巷也有确定顺序，就在派生类里补一个二级键——这正是军队那套 [ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM) 的 `ItemComparerBase.ResolveEquality` 做的事，而三个官方暗巷比较器都没做：

```csharp
// 补上二级键：名字相同时按宿主聚落名再比一次
public class MyStableNameComparer : ClanIncomeSortControllerVM.AlleyItemComparerBase
{
    public override int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)
    {
        int primary = y.Name.CompareTo(x.Name);
        if (primary != 0)
        {
            return this._isAcending ? primary * -1 : primary;
        }

        int secondary = x.Alley.Settlement.Name.ToString()
            .CompareTo(y.Alley.Settlement.Name.ToString());
        return this._isAcending ? secondary : secondary * -1;
    }
}
```

注意二级键的方向要和一级键**一致**地翻转，否则就变成了「名字降序 + 聚落名升序」的混合序。

## 风险与边界

- **`Name` 是快照。** 它在 `ClanFinanceAlleyItemVM.RefreshValues()` 里从 `Alley.Name.ToString()` 灌入。**排序前不刷新，比的是上一次的字符串。**
- **重名返回 0，顺序不稳定。** `MBBindingList.Sort` → `Collection<T>.Sort(IComparer<T>)` → `Array.Sort`，非稳定排序。重名暗巷的相对位置每次刷新可能变。
- **`Name` 可能是 `null`。** 它是 `string` 且没在构造器里赋值；`y.Name.CompareTo(x.Name)` 遇 null 直接 NRE（`String.CompareTo` 是实例方法，不接受 null 的 `this`）。构造 `[ClanFinanceAlleyItemVM](../ClanFinanceAlleyItemVM)` 时若绕过了 `RefreshValues()`，`Name` 就是 null。
- **默认方向是降序（Z→A）。** `protected bool _isAcending` 的默认值是 `false`。
- **比较结果依赖区域设置的排序规则。** `string.CompareTo` 用当前文化的大小写与符号排序，中文环境下与英文观感不同。要严格序数比较得自己换成 `string.CompareOrdinal`。
- **`Compare` 不判空参。** `Sort` 一个含 null 元素的列表会 NRE。
- **不是 `ViewModel`。** 无绑定属性、无通知。UI 上表头的选中态来自 [ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM) 的 `NameState` / `IsNameSelected`。
- **类名需嵌套限定。** 声明在 `ClanIncomeSortControllerVM` 内部，外部写 `ClanIncomeSortControllerVM.AlleyItemNameComparer` 才找得到。

## 跨版本提示

**所属文件 `ClanIncomeSortControllerVM.cs` 在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 五棵树里逐字节等价**：19 个 public 成员签名一致，恒为 528 行。本类的 `Compare` 实现体跨 1.3 → 1.5 **零变化**。

**跨版本上唯一值得留意的是 `ClanFinanceIncomeItemBaseVM.Name` 的来源**：`this.Alley.Name.ToString()`。1.3.0 里 `Alley` 继承 `SettlementArea`，`Name` 是 `override TextObject Name`；官方若在后续版本改掉这层继承关系，返回的 `TextObject` 表现可能变化，但**本类读的仍然只是一个 `string`，编译与语义都不受影响。**

三个兄弟比较器 + 三个 workshop/supporter 比较器在五棵树里全部一致，所以「按名 / 按位置 / 按收入排序」这套模板可以放心当作稳定契约使用。

## 依赖关系

- 基类与方向：[AlleyItemComparerBase](../AlleyItemComparerBase) 提供 `SetSortMode(bool isAcending)` 与 `protected bool _isAcending`
- 宿主与触发点：[ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM) 的 `ExecuteSortByName()` 写方向后调 `Sort`，`NameState` / `IsNameSelected` 是给 UI 的绑定属性
- 被排序的元素：[ClanFinanceAlleyItemVM](../ClanFinanceAlleyItemVM)；排序键 `Name` 声明在基类 [ClanFinanceIncomeItemBaseVM](../ClanFinanceIncomeItemBaseVM)，值来自 [Alley](../../campaign/Alley).Name
- 集合容器：[MBBindingList](../../core-extra/MBBindingList) 的 `Sort(IComparer<T>)` 是 `Compare` 唯一的执行入口（内部走 `Collection<T>.Sort` → 非稳定）
- 方向枚举：[CampaignUIHelper](../CampaignUIHelper) 的嵌套 `SortState`
- 同模板兄弟：[AlleyItemLocationComparer](../AlleyItemLocationComparer) · [AlleyItemIncomeComparer](../AlleyItemIncomeComparer)；同文件的 `WorkshopItemNameComparer` / `SupporterItemNameComparer` 逐字相同
- 带二级键的对照：[ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM) 的 `ItemComparerBase.ResolveEquality`
- 桶首页：[viewmodel API 分区](../)
