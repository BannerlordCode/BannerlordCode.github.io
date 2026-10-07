---
title: "MBBindingList<T>"
description: "给 ViewModel 用的可观察列表：继承 Collection<T> 但自带 TaleWorlds 自己的 ListChanged 事件，删除分 ItemBeforeDeleted / ItemDeleted 两阶段派发，好让 UI 在元素还活着时先播退场动画。"
---

# MBBindingList\<T\>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBBindingList<T> : Collection<T>, IMBBindingList, IList, ICollection, IEnumerable`
**Base:** `System.Collections.ObjectModel.Collection<T>`
**File:** `TaleWorlds.Library/MBBindingList.cs`（全文 132 行 / 3686 字节）

## 概述

`MBBindingList<T>` 是 Bannerlord UI 层的**唯一列表容器**。凡是出现在 XML 绑定路径里的集合，ViewModel 里都必须是它——因为 UI 层是靠 `IMBBindingList` 接口上的 `ListChanged` 事件做增量刷新的，不发事件就等于界面不更新。

它和 [MBList](../MBList) 的分工是硬性的：`MBList<T>` 是引擎内部计算用的普通列表（继承 `List<T>`，无事件）；`MBBindingList<T>` 是给 UI 用的（继承 `Collection<T>`，有事件）。混用会直接编译失败，因为类型不匹配。

它**不是** `ObservableCollection<T>` 的替代品——它是同一件事的自研版本，事件类型完全不同。WPF 用 `System.Collections.Specialized.NotifyCollectionChangedAction`，这里用 `TaleWorlds.Library.ListChangedType`；WPF 的 `INotifyCollectionChanged` 只有 8 个动作，这里有 6 个但**把删除拆成了两个**。这个差异不是偷懒，是整套动画架构的硬需求。

## 心智模型

把它当成**「UI 订阅的写入日志」**。核心洞察在 `RemoveItem` 的六行上：

```csharp
protected override void RemoveItem(int index)
{
    this.FireListChanged(ListChangedType.ItemBeforeDeleted, index);
    base.RemoveItem(index);
    this.FireListChanged(ListChangedType.ItemDeleted, index);
}
```

事件在 `base.RemoveItem` **之前**和**之后**各发一次。为什么必须这样？看唯一的官方消费方 `TaleWorlds.GauntletUI.Data/GauntletView.cs`。它订阅的是 `this._bindingList.ListChanged += this.OnViewModelBindingListChanged;`，然后按 `e.ListChangedType` 分派：`ItemBeforeDeleted` → `OnBeforeItemRemovedFromList(e.NewIndex)` → `PreviewRemoveItemFromList` → 读 `this._items[index]` 拿到那个 widget 并调 `base.Target.OnBeforeRemovedChild(...)`；`ItemDeleted` → `OnItemRemovedFromList(e.NewIndex)` 才真正把 widget 从视觉树摘掉。**退场动画需要在元素还存在时启动**，所以必须有「删除前」这一个时刻。这就是 `ListChangedType` 存在的理由，也是本类与 `ObservableCollection<T>` 最实质的差别。

其余四个重写各发一个事件，注意**发事件的时机不对称**：`InsertItem` 和 `SetItem` 都是 `base.Xxx(...)` **之后**发（先改数据，再通知），只有 `RemoveItem` 是前后各发一次。`ClearItems` 发的是 `Reset` 且索引传 `-1`。

第二个关键点是**为什么要 `private readonly List<T> _list` 这个重复字段**。`Collection<T>` 的 `Items` 是 `protected IList<T>`，构造器里传的是 `new List<T>(64)`（预分配 64 个槽位），然后 `this._list = (List<T>)base.Items;` 把同一个对象强转回具体类型存一份。目的只有一个：**`Collection<T>` 没有 `Sort`**。`Sort()` 与 `Sort(IComparer<T>)` 靠的正是这个字段——`this._list.Sort(...)` 走的是 `List<T>` 的内排序（`introsort`，可原地、无额外分配），而如果退化成 `Items.Sort()` 就只能对 `IComparer` 接口做动态派发且无法利用 `List<T>` 的内部优化。

第三个关键点是 `Sort(IComparer<T>)` 的**早退**：

```csharp
public void Sort(IComparer<T> comparer)
{
    if (!this.IsOrdered(comparer))
    {
        this._list.Sort(comparer);
        this.FireListChanged(ListChangedType.Sorted, -1);
    }
}
```

已经有序就**完全不排序也不发事件**。这是刻意的优化——`IsOrdered` 是 O(n) 扫描，比 O(n log n) 排序便宜，UI 里反复对已排序集合调用 `Sort` 是常态。但它带来一个陷阱，见下面「风险与边界」里的 `IsOrdered` 那条。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public MBBindingList() : base(new List<T>(64))` | 唯一的构造函数。内部 `new List<T>(64)` 预分配 64 槽（UI 列表通常不满 64，省一次扩容），并把 `base.Items` 强转存进 `_list` |
| `ListChanged` | `public event ListChangedEventHandler ListChanged` | 通知入口。`add` 时懒创建 `this._eventHandlers`，`remove` 时判空。**不支持 `OnListChanged` 语法糖**（没有自定义 add/remove 之外的逻辑），也没有一次性清空订阅者的 API |
| `InsertItem` | `protected override void InsertItem(int index, T item)` | `base.InsertItem` 之后发 `ItemAdded`，索引即 `index`。这是 `Collection<T>.Add` 走的路径（`Add` 内部调 `InsertItem(Count, item)`） |
| `RemoveItem` | `protected override void RemoveItem(int index)` | **唯一前后双发的重写**：`ItemBeforeDeleted` → 真正删除 → `ItemDeleted`。UI 用前一个启动退场动画，用后一个摘 widget |
| `SetItem` | `protected override void SetItem(int index, T item)` | 索引器赋值 `list[i] = x` 走的路径，之后发 `ItemChanged` |
| `ClearItems` | `protected override void ClearItems()` | `base.ClearItems()` 之后发 `Reset`，索引 `-1`。UI 收到后整体重建列表 |
| `OnListChanged` | `protected virtual void OnListChanged(ListChangedEventArgs e)` | **protected virtual 的扩展点**。遍历 `_eventHandlers` 逐个 `handler(this, e)`。派生类可以 override 它做额外分发（例如同时发一个 WPF 事件给第三方库） |
| `FireListChanged` | `private void FireListChanged(ListChangedType type, int index)` | 内部便捷方法，等价于 `this.OnListChanged(new ListChangedEventArgs(type, index))`。private，外部不可调 |
| `Sort()` | `public void Sort()` | 用 `T` 自身默认比较器排序，**总是**执行，发 `Sorted` |
| `Sort(IComparer<T>)` | `public void Sort(IComparer<T> comparer)` | **先 `IsOrdered` 检查，已有序就跳过排序也不发事件** |
| `IsOrdered` | `public bool IsOrdered(IComparer<T> comparer)` | O(n) 扫描判断是否已升序。判定式是 `comparer.Compare(list[i-1], list[i]) == 1`，见「风险与边界」 |
| `ApplyActionOnAllItems` | `public void ApplyActionOnAllItems(Action<T> action)` | 遍历**底层 `_list`**（不是 `this.Items`）对每项调 `action`。不解包、不改结构，所以不会触发任何 `ListChanged`。UI 里用来批量改子项属性 |
| `_list` | `private readonly List<T> _list` | 与 `base.Items` 是同一个对象的强类型引用，唯一用途是拿到 `List<T>.Sort` |
| `_eventHandlers` | `private List<ListChangedEventHandler> _eventHandlers` | 订阅者列表。**是 `List` 不是委托数组**，事件多时每次派发都有接口派发开销 |

## 真实示例

ViewModel 里的标准写法，逐字照抄自 `SandBox.ViewModelCollection/GameOver/GameOverStatCategoryVM.cs`：

```csharp
public class GameOverStatCategoryVM : ViewModel
{
    public MBBindingList<GameOverStatItemVM> Items { get; private set; }

    public GameOverStatCategoryVM(StatCategory category, Action<GameOverStatCategoryVM> onSelect)
    {
        this.Items = new MBBindingList<GameOverStatItemVM>();
        this.RefreshValues();
    }

    public override void RefreshValues()
    {
        base.RefreshValues();
        this.Items.Clear();
        foreach (StatItem item in this._category.Items)
        {
            this.Items.Add(new GameOverStatItemVM(item));
        }
    }
}
```

`RefreshValues` 里 `Clear()` + 一串 `Add()` 是引擎的惯用刷新模式：`Clear` 发一次 `Reset`，每次 `Add` 发一次 `ItemAdded`。UI 会整体重建一次再逐个插入——比逐个 diff 简单，代价是列表大时有闪烁，所以 `RefreshValues` 不是每帧调用的。

批量改子项而不触发结构事件（`SandBox.ViewModelCollection/Map/Tracker/MapTrackerCollectionVM.cs:47` 的写法）：

```csharp
public class MapTrackerCollectionVM : ViewModel
{
    public MBBindingList<MapTrackerItemVM> Trackers { get; private set; }

    public void RefreshTrackers()
    {
        this.Trackers.ApplyActionOnAllItems(delegate(MapTrackerItemVM t)
        {
            t.RefreshValues();
            t.IsVisible = true;
        });
    }
}
```

`ApplyActionOnAllItems` 遍历的是私有 `_list`，所以**不会**发出任何 `ListChanged`。子项自己改属性时会发各自的 `OnPropertyChanged`，UI 照常刷新；如果换成 `foreach (var t in this.Trackers) t.RefreshValues();` 效果一样但走的是 `Collection<T>` 的枚举器而不是直接索引底层列表——功能等价，只是官方偏好前者。

手工订阅事件（模仿 `GauntletView` 的做法）：

```csharp
public class MyListHostVM : ViewModel
{
    public MBBindingList<MyRowVM> Rows { get; private set; }

    public MyListHostVM()
    {
        this.Rows = new MBBindingList<MyRowVM>();
        this.Rows.ListChanged += this.OnRowsChanged;
    }

    private void OnRowsChanged(object sender, ListChangedEventArgs e)
    {
        switch (e.ListChangedType)
        {
        case ListChangedType.Reset:
            this.Rows.ApplyActionOnAllItems(r => r.IsExpanded = false);
            break;
        case ListChangedType.Sorted:
            this.Rows.Sort(Comparer<MyRowVM>.Default);
            break;
        case ListChangedType.ItemAdded:
            this.Rows.IsOrdered(Comparer<MyRowVM>.Default);
            break;
        case ListChangedType.ItemBeforeDeleted:
            break;
            break;
        case ListChangedType.ItemDeleted:
            break;
            break;
        case ListChangedType.ItemChanged:
            break;
            break;
        }
    }
}
```

`ListChangedEventArgs` 有 `ListChangedType` / `NewIndex` / `OldIndex` 三个只读属性。注意 `OldIndex` **永远是 -1**——单参数构造函数 `ListChangedEventArgs(type, index)` 硬编码 `this.OldIndex = -1`，而本类只调用这个单参数版本。三参数那个构造函数在引擎里没有调用方。

派生类在 override 里做额外分发：

```csharp
public class AuditBindingList<T> : MBBindingList<T>
{
    // protected virtual void OnListChanged(ListChangedEventArgs e)  —— 本类唯一真正的扩展点
    protected override void OnListChanged(ListChangedEventArgs e)
    {
        base.OnListChanged(e);

        if (e.ListChangedType == ListChangedType.Sorted)
        {
            this.IsOrdered(Comparer<T>.Default);
        }
    }
}
```

`OnListChanged` 是 `protected virtual`，这是本类唯一真正的扩展点。要注意**它在 `base` 之后被调用**（本类实现是先遍历 `_eventHandlers`），所以派生类里 `base.OnListChanged(e)` 必须在最前面，否则订阅者收到事件的时机会晚于你的监听。

## 风险与边界

- **`IsOrdered` 用 `== 1` 而不是 `> 0`，这是一个真实的坑。** 循环体是 `if (comparer.Compare(this._list[i - 1], this._list[i]) == 1) return false;`。`IComparer<T>.Compare` 的契约只保证「大于时返回正数」，**不保证正好是 1**。`Comparer<string>.Default` 返回 -1/0/1 没问题，但自定义比较器常写 `(a.X > b.X) ? 1 : ((a.X < b.X) ? -1 : 0)` 之外的版本——例如 `(float)(a.X - b.X)`——返回 0.5 时这里会判定「未乱序」，`Sort` 于是**跳过排序也不发事件**，界面顺序错乱且没有任何异常。自己写比较器时确保返回值严格是 -1/0/1。
- **没有构造函数重载。** 只有一个无参构造，不能传初始集合、不能传 `IComparer<T>`。要初始化内容就在构造后 `AddRange`（`Collection<T>` 提供）——注意 `AddRange` 走 `InsertItem`，每个元素发一次 `ItemAdded`。
- **`Clear` 发 `Reset` 而不是 N 个 `ItemDeleted`。** UI 收到 `Reset` 会整体重建。如果你的 handler 只处理 `ItemChanged` / `ItemDeleted` 而漏了 `Reset`（官方 `GauntletView.OnViewModelBindingListChanged` 就有个 `default: return;` 兜底），`RefreshValues` 后界面会是空的。
- **退订必须对称。** `remove` 是 `this._eventHandlers.Remove(value)`，用委托的 `Equals`。如果你每次 `OnPropertyChanged` 都 `+= this.Handler`，会产生重复订阅且**永远退不掉**（因为委托实例不同，`List.Remove` 找不到）。ViewModel 里的惯例是构造时订阅一次、字段缓存委托。
- **`_eventHandlers` 没有线程安全保护。** 所有增删改都在 UI 线程上进行，引擎全树都是这样。但如果你在任务系统的 worker 线程上 `Add` 一个元素，`InsertItem` 会遍历 `_eventHandlers` 同时 UI 线程可能正在改它 → `InvalidOperationException` 或漏事件。跨线程更新 ViewModel 集合是这里最现实的数据竞争。
- **`ApplyActionOnAllItems` 不发事件，也不允许在回调里改结构。** 它的循环是 `for (int i = 0; i < this._list.Count; i++)`，`i < this._list.Count` 每轮重新求值。如果 `action` 里做了 `RemoveAt`，会跳过元素甚至越界（`i` 可能等于新的 `Count` 就退出，不会抛，但会漏处理）。要改结构就在回调外面改。
- **`MBBindingList<T>` 与 `MBList<T>` 完全不可互换。** 前者继承 `Collection<T>`，后者继承 `List<T>`。引擎签名写死了类型，混用编译不过。内部计算用 [MBList](../MBList)，UI 暴露用本类。
- **不是 `INotifyCollectionChanged`。** 它只发 `ListChangedEventHandler`。想接 WPF / XAML 绑定或者第三方 MVVM 库，需要在派生类里自己桥接。
- **`_list` 与 `base.Items` 指向同一对象。** 这是设计如此（构造函数里 `this._list = (List<T>)base.Items;`）。推论：**永远不要用 `base.Items` 装一个不是 `List<T>` 的 `IList<T>`**——构造器没给你这个机会，但如果你 override 了什么并改动 `Items` 的底层，会与 `_list` 的强转脱钩，`Sort()` 就会 `InvalidCastException` 之后的空引用或错位。

## 怎么用

**怎么拿到。** 本体在 `bannerlord-1.3.0/TaleWorlds.Library/MBBindingList.cs:9`，声明是 `public class MBBindingList<T> : Collection<T>, IMBBindingList, IList, ICollection, IEnumerable`。它的用途**只有一个场景：给 ViewModel 声明一个「界面会自己重新读」的集合属性**。

唯一构造函数是 `MBindingList() : base(new List<T>(64))`（`MBBindingList.cs:12`），构造体里第一件事是 `this._list = (List<T>)base.Items;` —— 把自己从 `Collection<T>` 的内部 `List<T>` 里把底层引用抓出来。**容量硬编码为 64**，这是引擎给的默认初始容量，不是你能在语法上改的参数（要改得派生后自己 `Add` 预热或传别的容器）。

所以标准的三步流程是固定的：先 `new MBBindingList<T>()`，再声明成 ViewModel 上的 `{ get; private set; }` 属性（引擎的全套 ViewModel 都这么写，因为绑定层需要在 set 时挂上变更通知），最后**靠集合自身的增删去驱动事件**。

**一段可直接跑的最小宿主**（基类是 `bannerlord-1.3.0/TaleWorlds.Library/ViewModel.cs:10` 的 `public abstract class ViewModel : IViewModel, INotifyPropertyChanged`）：

```csharp
public class MyListVM : ViewModel
{
    public MBBindingList<MyRowVM> Rows { get; private set; }
    public MyListVM() { this.Rows = new MBBindingList<MyRowVM>(); }
}
```

`{ get; private set; }` 的 `private set` 是有意选的 —— 业务层会写这个属性，但外部代码只该读。

**通知是自动的，不需要手动 refresh。** 本类覆写了 `Collection<T>` 的四个受保护钩子（`MBBindingList.cs:40/47/54/62` 的 `ClearItems` / `InsertItem` / `RemoveItem` / `SetItem`），它们各自转调私有的 `FireListChanged(type, index)` 触发 `ListChanged` 事件。**所以往 `Rows` 里 `Add` 一个元素，绑定层就会收到一次 `ListChanged`** —— 本类没有 `RefreshBinding()` 之类的成员，凭空写这个名字编译不过。

要改通知行为就派生覆写 `OnListChanged(ListChangedEventArgs e)`（`MBBindingList.cs:75`），它是本类**唯一真正的扩展点**。

**批量改内容用 `ApplyActionOnAllItems`，别写 foreach。** 它的方法体（`MBBindingList.cs:117`）是 `for` 循环逐个 `action(obj)`，**内部不发任何事件** —— 也就是「改了 T 的属性、但集合结构没变」这种情况，用它不会打扰绑定层：

```csharp
this.Rows.ApplyActionOnAllItems(row => row.Refresh());
```

反过来，`Sort(IComparer<T> comparer)`（`MBBindingList.cs:94`）**会**发 `ListChangedType.Sorted` 事件，但它先调 `IsOrdered(comparer)` 做短路判断。

**最常见的坑：`IsOrdered` 用 `== 1` 而不是 `> 0`。** 循环体是 `if (comparer.Compare(this._list[i - 1], this._list[i]) == 1) return false;`（`MBBindingList.cs:104`）。`IComparer<T>.Compare` 的契约只保证「大于时返回正数」，**不保证正好是 1**。自己写比较器时若返回 `(float)(a.X - b.X)` 这类非 -1/0/1 的值，这里会判定「未乱序」，`Sort` 于是跳过排序也不发事件 —— 界面顺序错乱且没有任何异常。

## 跨版本提示

`MBBindingList.cs` 在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五个源码树里都是 **3686 字节**，是本批十个文件里跨版本最稳定的一个。唯一的差异是格式化：`1.3.0` 写 `public MBBindingList() : base(new List<T>(64))` 单行，1.3.15+ 拆成构造函数体 + 独立的 `: base(new List<T>(64))` 行。**public/protected 成员集合逐字节等价**：还是那个 `base(new List<T>(64))` 预分配、还是 6 种 `ListChangedType`、还是 `RemoveItem` 前后双发、`IsOrdered` 的 `== 1` 也一个字没改。

配套的 `ListChangedType.cs`、`ListChangedEventArgs.cs`、`IMBBindingList.cs` 同样五版不变。所以这套 UI 绑定契约从 1.3 到 1.5 **没有任何破坏性变化**——你按 1.3 写的 ViewModel 数据绑定代码升级后不用动。

## 依赖关系

- 事件契约来源：[IMBBindingList](../IMBBindingList) 声明 `event ListChangedEventHandler ListChanged`，UI 层正是通过 `as IMBBindingList` 取到这个事件
- 事件参数与枚举：[ListChangedEventArgs](../ListChangedEventArgs)（三个只读属性，`OldIndex` 恒为 -1）与 [ListChangedType](../ListChangedType)（6 个值的枚举）
- 唯一官方消费方：`TaleWorlds.GauntletUI.Data/GauntletView` 订阅 `ListChanged` 并按类型分派到 widget 的增删改，`ItemBeforeDeleted` 那条路径就是退场动画的入口
- 与 [MBList](../MBList) 的分工：本类是 UI 容器（继承 `Collection<T>`），`MBList<T>` 是引擎计算容器（继承 `List<T>`），两者签名不可互换
- 基类行为依赖：`System.Collections.ObjectModel.Collection<T>` 提供 `Add`/`AddRange`/`Contains`/`IndexOf`/`CopyTo`/`Remove` 与索引器，本类只重写了四个 `*Items`/`*Item` 钩子
- 典型 ViewModel 宿主：`SandBox.ViewModelCollection` 下几十个 VM 的集合属性都是本类型
- 桶首页：[core-extra API 分区](../)
