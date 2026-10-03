---
title: "ArmyManagementSortControllerVM"
description: "军队管理界面六个表头的排序状态机：每个 ExecuteSortByX 把 (state+1)%3 循环、跳过 0、给对应比较器 SetSortMode 再 Sort，最后把对应 IsXSelected 置 true —— 与暗巷那套 ClanIncomeSortControllerVM 结构完全同构。"
---

# ArmyManagementSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyManagementSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementSortControllerVM.cs`（全文 548 行）

## 概述

它持有**一个**列表引用和**六个**比较器实例，对外暴露**六个 `ExecuteSortBy*` 方法**、**六个 `XxxState` int 属性**、**六个 `IsXxxSelected` bool 属性**——十二个绑定属性对应六个表头。加上六个比较器内部的实现，本类连同嵌套类一共 14 个 public 成员。

构造器只有六行有效内容：

```csharp
public ArmyManagementSortControllerVM(MBBindingList<ArmyManagementItemVM> listToControl)
{
    this._listToControl = listToControl;
    this._distanceComparer = new ArmyManagementSortControllerVM.ItemDistanceComparer();
    this._costComparer = new ArmyManagementSortControllerVM.ItemCostComparer();
    this._strengthComparer = new ArmyManagementSortControllerVM.ItemStrengthComparer();
    this._nameComparer = new ArmyManagementSortControllerVM.ItemNameComparer();
    this._clanComparer = new ArmyManagementSortControllerVM.ItemClanComparer();
    this._shipCountComparer = new ArmyManagementSortControllerVM.ItemShipCountComparer();
}
```

**它不创建列表，只拿引用。** 宿主 [ArmyManagementVM](../ArmyManagementVM) 在构造器末尾 `this.SortControllerVM = new ArmyManagementSortControllerVM(this._partyList);`——注意传的是**私有字段** `_partyList`，不是 `PartyList` 属性。两者指向同一个 `MBBindingList<ArmyManagementItemVM>` 实例。

## 心智模型

**把它想成「六个表头各自维护一个三态循环器 + 六个一次性持有的比较器」，而不是一个通用的排序服务。**

**六个 `ExecuteSortBy*` 的形状完全一致**（以距离为例，第 23–36 行）：

```csharp
public void ExecuteSortByDistance()
{
    int distanceState = this.DistanceState;             // 1) 记下旧态
    this.SetAllStates(CampaignUIHelper.SortState.Default); // 2) 六个表头全回 Default
    this.DistanceState = (distanceState + 1) % 3;      // 3) 自己前进一格
    if (this.DistanceState == 0) { this.DistanceState = this.DistanceState + 1; } // 4) 跳过 0
    this._distanceComparer.SetSortMode(this.DistanceState == 1);  // 5) 写方向
    this._listToControl.Sort(this._distanceComparer);   // 6) 真的排
    this.IsDistanceSelected = true;                    // 7) 标记选中
}
```

第 4 步是关键：**`(state + 1) % 3` 本来会回到 0（`Default`），源码用一行 `if` 把 0 顶成 1。** 于是实际循环是 **1 → 2 → 1 → 2**，永远不出现 0。`CampaignUIHelper.SortState` 的 `Default=0 / Ascending=1 / Descending=2`（[CampaignUIHelper](../CampaignUIHelper) 第 3748 行）。所以「升序 / 降序」两态轮转，`Default` 只在初始化和 `SetAllStates` 里出现。

第 5 步的映射是 **`XxxState == 1` → 升序（`SetSortMode(true)`）**，与六个比较器里 `_isAscending` 的语义一一对上。

**六个比较器不是同一形状，这是本类最值得注意的地方：**

| 比较器 | 主键 | 次键 | 并列时回落到 |
| --- | --- | --- | --- |
| `ItemDistanceComparer` | `DistInTime` | — | `ResolveEquality` |
| `ItemCostComparer` | `Cost` | — | `ResolveEquality` |
| `ItemStrengthComparer` | `Strength` | `ShipCount` | `ResolveEquality` |
| `ItemNameComparer` | `LeaderNameText` | — | **无**（直接返回） |
| `ItemClanComparer` | `Clan.Name.ToString()` | — | `ResolveEquality` |
| `ItemShipCountComparer` | `ShipCount` | — | `ResolveEquality` |

`ResolveEquality` 是基类 `ItemComparerBase` 上的 `protected int ResolveEquality(ArmyManagementItemVM x, ArmyManagementItemVM y)`，实现只有一行 `return x.LeaderNameText.CompareTo(y.LeaderNameText);`——**注意它的方向不随 `_isAscending` 翻转**，所以并列时的次级排序恒为「领袖名升序」。而 `ItemNameComparer` 是唯一不调用它的，它自己就把 `LeaderNameText` 排完了，没有下一层。

**这与暗巷那套 [AlleyItemComparerBase](../AlleyItemComparerBase) 是本类最大的结构差异：暗巷的三个比较器都没有 `ResolveEquality`，并列时顺序不稳定；军队这套有。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造 | `public ArmyManagementSortControllerVM(MBBindingList<ArmyManagementItemVM> listToControl)` | 存列表引用 + new 出六个比较器。**列表不在本类创建**；传 null 会在第一次 `Sort` 时 NRE。 |
| `ExecuteSortByDistance` | `public void ExecuteSortByDistance()` | 按 `DistInTime` 排。**无返回值**，方向由 `DistanceState` 决定。 |
| `ExecuteSortByCost` | `public void ExecuteSortByCost()` | 按 `Cost` 排（注意 `Cost` 可能是 `-1`，见 [ArmyManagementItemVM](../ArmyManagementItemVM)）。 |
| `ExecuteSortByStrength` | `public void ExecuteSortByStrength()` | 按 `Strength` 排，**相等时接着比 `ShipCount`**（三级键）。 |
| `ExecuteSortByName` | `public void ExecuteSortByName()` | 按 `LeaderNameText` 排。**唯一一个不调用 `ResolveEquality` 的。** |
| `ExecuteSortByClan` | `public void ExecuteSortByClan()` | 按 `Clan.Name.ToString()` 排。**`Clan` 为 null 会 NRE**——源码是 `y.Clan.Name.ToString().CompareTo(x.Clan.Name.ToString())`，无判空。 |
| `ExecuteSortByShipCount` | `public void ExecuteSortByShipCount()` | 按 `ShipCount` 排。 |
| `DistanceState` / `CostState` / `StrengthState` / `NameState` / `ClanState` / `ShipCountState` | `public int XxxState { get; set; }` | 六个三态循环器，值域实际只用到 1 和 2。**setter 是 public，写什么都收，不校验范围**——手改成 0 会让下一轮点击的循环算错。 |
| `IsNameSelected` / `IsCostSelected` / `IsStrengthSelected` / `IsDistanceSelected` / `IsClanSelected` / `IsShipCountSelected` | `public bool IsXxxSelected { get; set; }` | 六个互斥的「当前按哪列排」标记。**`SetAllStates` 会把六个全置 false，然后被点的那个置 true。** |
| `ItemComparerBase` | `public abstract class ItemComparerBase : IComparer<ArmyManagementItemVM>` | 嵌套抽象基类。三个成员：`public void SetSortMode(bool isAscending)`（**这次拼写是对的**）、`public abstract int Compare(...)`、`protected int ResolveEquality(...)` + `protected bool _isAscending`。 |
| 六个 `Item*Comparer` | `public class ItemDistanceComparer : ArmyManagementSortControllerVM.ItemComparerBase` 等 | 六个具体比较器，各自只覆写 `Compare`。**完整类型名需要嵌套限定**。 |

私有成员：`SetAllStates(CampaignUIHelper.SortState state)`（第 119–133 行，把 12 个属性一次性重置）、`_listToControl` 与六个 `readonly` 比较器字段、六个 `XxxState` / `IsXxxSelected` 的 backing field。**`SetAllStates` 是 `private`，没有 public 的 `ResetAllStates()`**——这与暗巷那套 [ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM) 有 `public void ResetAllStates()` 不同。

## 真实示例

本类本身是可直接复用的：构造一个、绑到自己的界面上、点表头时调 `ExecuteSortBy*`。下面这个例子展示怎么读当前排序状态并复用宿主的列表：

```csharp
using TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement;
using TaleWorlds.Core;
using TaleWorlds.Library;

public class MyPartySortPanel
{
    private readonly MBBindingList<ArmyManagementItemVM> _list;
    private readonly ArmyManagementSortControllerVM _sort;

    public MyPartySortPanel(MBBindingList<ArmyManagementItemVM> list)
    {
        this._list = list;
        // 和 ArmyManagementVM 一样：传列表给控制器，由控制器 new 六个比较器
        this._sort = new ArmyManagementSortControllerVM(list);
    }

    public void OnDistanceHeaderClicked()
    {
        this._sort.ExecuteSortByDistance();
        // 状态可以反查：1 = 升序，2 = 降序（Default=0 永远不会出现在
        // ExecuteSortByX 之后，因为源码里那一行 if 会把它顶成 1）
        MBDebug.Print("距离排序方向 state=" + this._sort.DistanceState
            + " 选中=" + this._sort.IsDistanceSelected);
    }

    public void OnNameHeaderClicked()
    {
        // 点了名字表头，其余五个 IsXxxSelected 会被 SetAllStates 全部清 false
        this._sort.ExecuteSortByName();
        MBDebug.Print("名字排序 state=" + this._sort.NameState);
    }

    public int Count()
    {
        return this._list.Count;
    }
}
```

## 风险与边界

- **`SetAllStates` 是 private，没有 public 的重置入口。** 暗巷那套有 `public void ResetAllStates()`，本类没有——**要手动复位只能把 12 个属性逐个写回 `0` / `false`**（写回后第一次点击的循环才会正常）。
- **十二个属性都是可写的，setter 不校验。** 手写 `sortController.CostState = 7` 会被接受，下一次 `ExecuteSortByCost` 的 `(7 + 1) % 3 = 2` 会得到一个看起来正常但语义错乱的结果。
- **`ExecuteSortByClan` 不判 `Clan` null。** `ArmyManagementItemVM.Clan` 由构造器从 `LeaderHero.Clan` 取——**无领袖的队伍在构造时就已经 NRE 了**，所以这个风险实际上在更早的地方爆发。
- **`ItemCostComparer` 把 `-1` 当正常值排。** `ArmyManagementItemVM` 的 `Cost` 初值是 `-1`，不可达队伍（玩家在海上而目标无航海能力）就一直是 `-1`。**排序结果里这些行会聚在最便宜的一端。**
- **`ResolveEquality` 的方向不随 `_isAscending` 翻转。** 并列行的领袖名恒为升序。**所以「降序」不是真正的全降序。**
- **`ItemNameComparer` 并列时直接返回比较结果，没有三级键。** 同名领袖的两支队伍顺序不稳定。
- **六个比较器字段是 `private readonly`。** 外部拿不到句柄，要复用只能自己 `new` 一套并自己持有（构造器已经这么做了，代价是每个控制器自带六个实例）。
- **列表引用是构造时快照。** 宿主后来换了 `PartyList` 的实例，本类排的还是旧的那个。1.3.0 官方没换，但这是个隐含前提。
- **每次点击都全量重排。** 没有增量排序，长列表反复点表头是 O(n log n) 每次。
- **嵌套类型需要限定名。** `ArmyManagementSortControllerVM.ItemComparerBase` / `.ItemDistanceComparer` 等在 `using` 掉命名空间后仍需带外层类名。

## 跨版本提示

**所属文件在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 五棵树里完全等价**：549 行，14 个 public 签名逐字相同，行数一模一样。**跨 1.3 → 1.5 零变化。**

**唯一的跨版本隐患在被比较的字段上**：`ArmyManagementItemVM` 在 1.3.0 是 685 行、其余四棵是 680 行，public 面不变但私有实现有排版差异。**`DistInTime` / `Cost` / `Strength` / `ShipCount` / `LeaderNameText` / `Clan` 六个排序键跨版本全部保留**，所以本类的比较逻辑在任何版本上都能编译并正确工作。

**如果要对齐暗巷那套，两个方向都行**：给 [AlleyItemComparerBase](../AlleyItemComparerBase) 补一个 `ResolveEquality`（军队这套的形状），或者给本类去掉它。**但不要指望官方替你做——1.3.0 到 1.5.3 都是现在这个形状。**

## 依赖关系

- UI 底座：[ViewModel](../../core-extra/ViewModel) 提供 12 个属性的通知与 `ExecuteCommand` 派发
- 宿主与唯一持有者：[ArmyManagementVM](../ArmyManagementVM) 在构造器末尾 `new ArmyManagementSortControllerVM(this._partyList)` 并把它作为 `SortControllerVM` 属性暴露给界面
- 被排序的行：[ArmyManagementItemVM](../ArmyManagementItemVM) 提供 `DistInTime` / `Cost` / `Strength` / `ShipCount` / `LeaderNameText` / `Clan`
- 集合容器：[MBBindingList](../../core-extra/MBBindingList) 的 `Sort(IComparer<T>)` 是六个 `ExecuteSortBy*` 的实际执行点
- 方向枚举与总闸：[CampaignUIHelper](../CampaignUIHelper) 的嵌套 `SortState`（`Default=0 / Ascending=1 / Descending=2`）与 `GetMapScreenActionIsEnabledWithReason`
- 同构实现：[ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM)（三个表头、有 `public ResetAllStates()`、无 `ResolveEquality`）
- 桶首页：[viewmodel API 分区](../)
