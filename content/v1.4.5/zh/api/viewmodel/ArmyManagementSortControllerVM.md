---
title: "ArmyManagementSortControllerVM"
description: "军队管理界面列表列头背后的视图模型。它为每一列持有一个可变比较器，为 widget 暴露每列的三态 int 与一个布尔 IsXSelected，并在每次点击时重置其他所有列，从而实现 Default → Ascending → Descending 的循环。"
---
# ArmyManagementSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class ArmyManagementSortControllerVM : ViewModel`  
**Base:** `ViewModel`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement/ArmyManagementSortControllerVM.cs`

## 概述

`ArmyManagementSortControllerVM` 是 Gauntlet 列表绑定列头时所用的 `ViewModel`。它不画任何东西、也不拥有数据：调用方把它想要排序的 `MBBindingList<ArmyManagementItemVM>` 传进构造函数，控制器就地重排那个列表。控制器真正拥有的是（a）每列一个长期存活的比较器实例，以及（b）列头 widget 所绑定的状态。

状态成对出现，全部标注 `[DataSourceProperty]`。六个 `int` 属性（`DistanceState`、`CostState`、`StrengthState`、`NameState`、`ClanState`、`ShipCountState`）编码列头的三态，六个 `bool` 属性（`IsDistanceSelected`、`IsCostSelected`、`IsStrengthSelected`、`IsNameSelected`、`IsClanSelected`、`IsShipCountSelected`）驱动高亮的列头外观。`CampaignUIHelper.SortState` 给出三个取值：`Default = 0`、`Ascending = 1`、`Descending = 2`。

每个 `ExecuteSortByX()` 方法都遵循完全相同的五步形态：读出当前状态；调用 `SetAllStates(CampaignUIHelper.SortState.Default)` 把所有列归零并清空所有 `IsXSelected`；把状态推进为 `(previous + 1) % 3`，并在结果为 `0` 时再加一，使循环永远不会停在 `Default`；用 `SetSortMode(State == 1)` 设置比较器方向；最后 `Sort` 这个列表。最后这一点正是控制器无法同时排序两个列表、也是比较器带有状态的原因——详见 [ItemComparerBase](../ItemComparerBase/)。

## 心智模型

把它读成**“覆盖六列的状态机，顺带拥有它所驱动的那些比较器”**：

- **它处在哪一层**：它是一个 `ViewModel`，既不是 `MvBase` 也不是 `ScreenBase`。它的生命周期就是军队管理界面的生命周期。它没有战役 tick、没有事件、不参与存档——它只做两件事：重排一个列表，并发出属性变更通知。
- **典型调用顺序**：某个 Screen 构建 `MBBindingList<ArmyManagementItemVM>` → 构造本控制器 → 在 prefab 中绑定每个 `DistanceState` / `IsDistanceSelected` / `ExecuteSortByDistance` → 玩家点击列头 → Gauntlet 调用 `ExecuteSortByDistance()` → 对每一个真正发生变化的 int 或 bool，`OnPropertyChangedWithValue` 被触发（属性 setter 会先比较再决定是否抛出）。
- **常见误用陷阱 —— 一个列表，一个控制器**。控制器持有构造函数传入的 `readonly MBBindingList<ArmyManagementItemVM> _listToControl`，且永不重新指向。用两个控制器排同一个列表，或把列表内容换成另一个集合，控制器排的仍是原来那个实例。
- **常见误用陷阱 —— `State` 不是排序方向**。`State == 1` 表示升序；`State == 2` 表示降序；`State == 0`（Default）由于 `if (State == 0) State++;` 这句修正，实际上永远不会在被点击的那一列上被观察到，但它是每次点击时其他所有列被重置成的值。把 `0` 当成“降序”渲染的 widget 会画错。
- **常见误用陷阱 —— `SetAllStates` 会为所有列触发通知**。每次点击最多抛出十二个属性变更事件。在大型军队列表里这很便宜（列表并没有被排十二次——只有被点击的那一列会排序），但若某个 widget 收到 `OnPropertyChanged` 就去重查列表，就会做多余的工作。
- **常见误用陷阱 —— 比较器是共享可变对象**。`_nameComparer` 等在构造函数里创建一次，之后每次排序都改写它们的 `_isAscending`。绝不要绕过对应的 `ExecuteSortByX`、直接从外部拿比较器去调 `_listToControl.Sort(...)`。

## 何时使用 / 何时不要用

**该用它的情况：**
- 你要构建军队管理界面（或列集合相同的界面），并希望白拿基础游戏的三态列头行为。
- 你要新增一列：实现一个比较器、加一个 `int` 状态属性和一个 `bool` 选中属性，再写一个模仿现有六个的 `ExecuteSortByX`。
- 你需要知道当前按哪一列排序、朝哪个方向——读那六个 `int` 属性即可。

**不该用它的情况：**
- 你需要另一种条目类型。`T` 固定为 `ArmyManagementItemVM`，比较器已按它定型，无法重定向。
- 你只需要排序而不要列头 UI。一个 lambda 比较器只要一行；本控制器要六个状态属性加六个方法。
- 你需要把排序持久化。排序只是表现层行为，与战役存档毫无关系。

## 主要成员

### `public ArmyManagementSortControllerVM(MBBindingList<ArmyManagementItemVM> listToControl)`

保存列表引用，并实例化全部六个比较器：`ItemDistanceComparer`、`ItemCostComparer`、`ItemStrengthComparer`、`ItemNameComparer`、`ItemClanComparer`、`ItemShipCountComparer`。
- **返回值**：不适用（构造函数）。
- **副作用**：除持有引用外没有——不执行任何排序，也不设置任何状态。六个 `State` 属性都从 `0` 起步，六个 `IsXSelected` 都从 `false` 起步。
- **陷阱**：不对 `listToControl` 做 null 检查。

### `public void ExecuteSortByDistance()` / `ExecuteSortByCost()` / `ExecuteSortByStrength()` / `ExecuteSortByName()` / `ExecuteSortByClan()` / `ExecuteSortByShipCount()`

六个供 widget 调用的入口。每个都对各自那一列执行上文描述的五步循环。
- **返回值**：无。
- **副作用**：就地重排 `_listToControl`，并为每一个发生变化的列抛出属性变更。
- **值得注意的顺序特性**：`SetAllStates` 先清空全部六个 `IsXSelected`，随后才把被点击那一列的标志设回 `true`，因此高亮的列头永远恰好是正在排序的那一列。

### `public int DistanceState { get; set; }` 及其五个兄弟

`[DataSourceProperty]` int 属性，各自按 `CampaignUIHelper.SortState` 取 `0` / `1` / `2`。setter 仅在值确实不同时才抛出 `OnPropertyChangedWithValue(value, "<Name>")`，因此对未变化状态的重复点击是静默的。
- **返回语义**：这是列头状态，不是方向。请自行把 `1` 映射为升序、`2` 映射为降序，或像控制器那样信任 `State == 1`。

### `public bool IsDistanceSelected { get; set; }` 及其五个兄弟

供 widget 绑定列头高亮的 `[DataSourceProperty]` bool 属性。`IsDistanceSelected` 的 setter 不做额外事情（`CampaignOptionItemVM.IsDisabled` 那种会向下推送到子选择器；这些不会）。

### `public abstract class ItemComparerBase : IComparer<ArmyManagementItemVM>`（嵌套）

嵌套抽象比较器，含 `protected bool _isAscending`、`public void SetSortMode(bool)`、`public abstract int Compare(...)` 以及返回 `x.LeaderNameText.CompareTo(y.LeaderNameText)` 的 `protected int ResolveEquality(...)`。完整说明见 [ItemComparerBase](../ItemComparerBase/)。

### 六个具体比较器

- `ItemDistanceComparer` —— 主键 `DistInTime`，兜底 `ResolveEquality`。
- `ItemCostComparer` —— 主键 `Cost`，兜底 `ResolveEquality`。
- `ItemStrengthComparer` —— 主键 `Strength`，随后是一个**次级** `ShipCount`（同样按方向缩放），最后 `ResolveEquality`。这是唯一带两个缩放键的比较器。
- `ItemNameComparer` —— 对 `_isAscending` 做了特判提前返回，基于 `LeaderNameText`；不调用 `ResolveEquality`，因为主键本身就是那个兜底字段。
- `ItemClanComparer` —— 主键 `Clan.Name.ToString()`，兜底 `ResolveEquality`。
- `ItemShipCountComparer` —— 主键 `ShipCount`，兜底 `ResolveEquality`。

### `private void SetAllStates(CampaignUIHelper.SortState state)`

把所有 `State` 属性赋为 `state`，所有 `IsXSelected` 属性赋为 `false`。它是私有的——不存在公开的“清除排序”API，因此想恢复默认顺序的界面要么去点某一列间接触发它，要么自己重新排列表。

## 使用示例

### 示例 1 —— 构造并绑定控制器

```csharp
using TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement;
using TaleWorlds.Library;

public class MyArmyScreen : ScreenBase
{
    private MBBindingList<ArmyManagementItemVM> _items;
    private ArmyManagementSortControllerVM _sortController;

    public override void OnScreenInitialize()
    {
        base.OnScreenInitialize();

        _items = new MBBindingList<ArmyManagementItemVM>();
        foreach (MobileParty party in Campaign.Current.CurrentParties)
        {
            _items.Add(new ArmyManagementItemVM(null, null, null, party));
        }

        _sortController = new ArmyManagementSortControllerVM(_items);

        // 在 prefab 中绑定这些：
        //   _sortController.CostState           -> 列头文本
        //   _sortController.IsCostSelected     -> 列头高亮
        //   _sortController.ExecuteSortByCost  -> 列头点击
        GauntletScreen = ...;
    }
}
```

### 示例 2 —— 用代码驱动排序，而不是靠点击列头

```csharp
public void SortByDefaultArmies()
{
    // 与列头点击完全相同的五步。
    _sortController.ExecuteSortByStrength();
    if (_sortController.StrengthState == 2)
    {
        _sortController.ExecuteSortByStrength();   // 再点一次翻成升序
    }
}
```

### 示例 3 —— 读取当前排序用于状态栏显示

```csharp
public string DescribeSort()
{
    int state = _sortController.StrengthState;
    if (state == 1)
    {
        return "Sorted by strength (ascending)";
    }

    if (state == 2)
    {
        return "Sorted by strength (descending)";
    }

    return "Unsorted";
}
```

## 风险与崩溃边界

- **存档序列化**：没有。控制器是没有 `SyncData`、不参与 `IDataStore` 的 `ViewModel`，永远不会被序列化。它排序的列表是一个临时的视图模型列表，而不是由存档支撑的集合。对 mod 的实际含义：玩家在军队界面排出的顺序**不会**被记住，既不跨存档/读档，甚至离开界面就丢失。如果你需要记住顺序，请自己在 `CampaignBehaviorBase` 里持久化 party id。
- **跨域依赖**：该类位于 ViewModelCollection 程序集，并完全针对视图模型定型（`ArmyManagementItemVM`、`ClanBannerImageIdentifierVM`、`LeaderNameText`）。比较器读的是条目 VM 上由 `MobileParty` 派生的计算属性，而不是直接的战役对象图。把排序留在视图层，正是同一套行为能在无头环境下运行、而无需实例化其中任何东西的原因。
- **加载时序**：控制器需要它的 `MBBindingList` 在玩家点击列头的那一刻已经填满，而不是在构造时——构造阶段不做任何排序。用尚未填充的列表创建的控制器会老老实实地排一个空列表或半满的列表；而由于 `MBBindingList.Sort` 是就地排序，之后追加的条目会落在末尾而不是有序位置。
- **ID 稳定性**：没有 id。真正稳定的契约是*列集合*——`DistanceState` / `CostState` / `StrengthState` / `NameState` / `ClanState` / `ShipCountState` 及其 `IsXSelected` 孪生属性，就是 prefab 按字符串绑定的属性名。改名或删除其中任何一个，都会在运行时让列头绑定失败，表现为一个空白 widget，而不是编译错误。这是改编本控制器时最常见的破坏方式。
- **UI 生命周期 vs VM 生命周期**：没有 `OnFinalize` 重写，因此不释放任何东西。控制器在整个生命周期内持有对列表的强引用；如果你把它缓存在静态字段或更长寿命的视图模型里，列表也会随之泄漏。请在 `OnScreenInitialize` 中创建，在 `OnScreenFinalize` 中丢弃。
- **共享的可变比较器**。每个 `ExecuteSortByX` 都会在排序前改写对应比较器的 `_isAscending`。在控制器正在排序时用同一个比较器去调 `_listToControl.Sort(...)`（或从两个线程排同一个列表），会产出可能违反传递性的顺序，在某些排序实现里会挂起或行为异常。

## 跨版本提示

- **v1.3.x → v1.4.5**：控制器保持同样的六列、同样的六个 `ExecuteSortByX` 方法，以及同样的三态循环。`ItemStrengthComparer` 的双键比较（先兵力再船只数）在两个版本中都已存在。
- **v1.4.5**：`CampaignUIHelper.SortState` 为 `{ Default = 0, Ascending = 1, Descending = 2 }`，各控制器通过 `(int)state` 强制转换赋值——这些 `int` 属性并没有以该枚举定型。
- **v1.4.5**：不存在公开的 `SetAllStates`、没有 `ResetSort`、也没有 `OnFinalize`。排序状态只能通过那六个 `ExecuteSortByX` 入口改变，而它们正是 widget 所绑定的同一批方法。

## 参见

- ↑ 父级目录：[ViewModel API 索引](../)
- ↔ 同级：[ItemComparerBase](../ItemComparerBase) —— 嵌套抽象比较器，完整说明
- ↔ 同级：[ArmyManagementItemVM](../ArmyManagementItemVM) —— 本控制器排序的 `T`
- ↔ 同级：[CampaignUIHelper](../CampaignUIHelper) —— `SortState` 枚举与列状态约定的来源
- ↔ 同级：[ArmyManagementVM](../ArmyManagementVM) —— 承载本控制器的界面视图模型
- ↑ VM 基类：[ViewModel](../../core-extra/ViewModel)
