---
title: "GauntletView"
description: "GauntletView 的自动生成类参考。"
---
# GauntletView

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GauntletView : WidgetComponent`
**Base:** `WidgetComponent`
**File:** `TaleWorlds.GauntletUI.Data/GauntletView.cs`

## 概述

`GauntletView` 是 GauntletUI 界面树的**绑定节点**：它把界面预制件树里的一个 `Widget`（`base.Target`）和一个 `ViewModel` 路径缝在一起，负责数据下行（ViewModel 属性 → 控件属性）、事件上行（控件事件 → ViewModel 命令）以及列表项的按需实例化。它是 `TaleWorlds.GauntletUI.Data.GauntletView : WidgetComponent`（`GauntletView.cs:12`），不是自动生成的——代码生成器生成的类持有它，而不是继承它。

它不能被 mod 直接构造：构造函数是 `internal GauntletView(GauntletMovie gauntletMovie, GauntletView parent, Widget target, int childCount = 64)`（`GauntletView.cs:94`）。`GauntletMovie` 在预制件实例化时创建它们，你拿到的第一个实例通常是从 `GauntletMovie.FindViewOf(widget)` 反查回来的。

每个实例知道自己“在哪”：`ViewModelPath`（`GauntletView.cs:31`）是**逐层向上拼接**的——有父节点就 `Parent.ViewModelPath.Append(_viewModelPath)`，没有就直接用自己的。列表项的索引就是它自己的路径，插入或删除一行会让后面所有行的 `_viewModelPath` 整体重排。

## 心智模型

把它当成**一棵双向桥接树上的一个节点**，生命周期由两条命令控制：`RefreshBindingWithChildren()` 往上接，`ReleaseBindingWithChildren()` 往下拆。中间所有的属性推送都是事件驱动的，而不是每帧轮询。

几个非常具体、会直接造成“界面空白”的陷阱：

- **`RefreshBinding()` 和 `RefreshBindingWithChildren()` 对列表节点不是等价的。** `RefreshBinding()` 开头第一句就是 `this.ClearEventHandlersWithChildren()`（`GauntletView.cs:136`），而 `ClearEventHandlers` 在 `_bindingList != null` 时会调 `this.OnListReset()`（`GauntletView.cs:270`），后者把 `_items` 里所有行控件从 `Target` 上移除并调 `ClearEventHandlersWithChildren()`。也就是说：**对一个绑定了列表的节点单点调用 `RefreshBinding()`，等于把整个列表 UI 清空且不重建**。要重建列表，必须用 `RefreshBindingWithChildren()`（`GauntletView.cs:201`），它先调 `RefreshBinding()` 再递归子节点。
- **`BindData` 在 ViewModel 还没解析时只会登记，不会报错。** 它把绑定按 `path.Path` 存进字典，如果此时 `this._viewModel != null` 就立即推一次当前值（`GauntletView.cs:287` 起）。也就是说“先绑定、后 `RefreshBinding`”是安全的，“先 `RefreshBinding`、后绑定”也是安全的，但如果你在绑定之后再也不 `RefreshBinding`，控件上不会出现任何东西。
- **同一个 path 可以绑多次，两个都会留着。** `BindData` 发现 `path.Path` 已存在时是 `Add` 到列表而不是覆盖（`GauntletView.cs:287` 之后的 else 分支），刷新时会把一个值推到两个不同的控件属性上。
- **`BindCommand` 是 `internal`。** mod 不能直接注册命令绑定，只能让生成器写。这也是为什么命令参数转换（`ConvertCommandParameter`：控件 → 对应的 ViewModel）在业务代码里看不到。
- **下标越界是被夹紧而不是抛异常。** `ClampIndex` 用 `MBMath.ClampInt(index, 0, _items.Count)` 并在夹紧时 `Debug.FailedAssert("Invalid index for list")`（`GauntletView.cs:570`、`GauntletView.cs:573`）。列表变更事件带来的过期下标会被静默修正到合法行，于是你改的是**隔壁那一行**。
- **`SwapChildrenAtIndeces` 不校验参数是不是直接子节点。** 它用 `_children.IndexOf(child1)`（`GauntletView.cs:124`）拿下标，找不到就是 `-1`，紧接着 `this._children[num]` 直接抛 `ArgumentOutOfRangeException`。传一个孙子节点就会炸。
- **`RemoveChild` 不断开 `Parent`。** 它把控件从 `Target` 移除并 `child.ClearEventHandlersWithChildren()`（`GauntletView.cs:118`），但 `child.Parent` 这个 `{ get; private set; }` 字段仍是旧值。由于 `ViewModelPath` 是沿 `Parent` 链现算的（`GauntletView.cs:31`），已移除的节点依然报告旧的路径。
- **`ViewModelPathString` 用反斜杠拼接。** `WriteViewModelPathToStringBuilder` 在每层之间 `sb.Append<string>("\\")`（`GauntletView.cs:76`），而 `BindingPath` 自己用的是点号。拿这个字符串去做字符串比较或日志匹配时很容易对不上。

## 怎么用

### 怎么拿到它

不要 new（构造函数是 `internal`）。两条路：从 `GauntletMovie` 上按控件反查——`GauntletMovie.FindViewOf(widget)`；或者从根视图 `ViewModelPath` 为 null 的那个开始向下用 `AddChild`/`RefreshBindingWithChildren` 遍历。`DisplayName`（`GauntletView.cs:692`，格式是 `Id!Tag@Path`）是调试时最好用的标识。

### 典型用法

```csharp
using TaleWorlds.GauntletUI;
using TaleWorlds.GauntletUI.Data;

// 绑定：把控件属性绑到 ViewModel 路径。重复绑定同一 path 会累加，不会覆盖。
public static void BindTitle(GauntletView view)
{
    view.BindData("Text", new BindingPath("Title"));
    view.BindData("IsVisible", new BindingPath("IsVisible"));

    // 绑完必须刷新，否则控件上什么都不会出现。
    view.RefreshBindingWithChildren();
}

// 调试：按控件反查节点，而不是自己 new。
public static void DumpTree(Widget someWidget, GauntletMovie movie)
{
    GauntletView view = movie.FindViewOf(someWidget);
    if (view == null)
    {
        return;
    }

    // 格式："控件Id!Tag@ViewModel.Path"
    System.Console.WriteLine(view.DisplayName);

    // 反向推送：把控件上的值写回 ViewModel。
    view.ReleaseBindingWithChildren();
}
```

### 最容易踩的坑

对绑了列表的节点调 `RefreshBinding()` 而不是 `RefreshBindingWithChildren()`。`RefreshBinding()` 第一句 `ClearEventHandlersWithChildren()`（`GauntletView.cs:136`）会顺着子节点进去，而列表分支会执行 `OnListReset()`（`GauntletView.cs:270`）把每一行的控件从 `Target` 上摘掉；因为单点版不会回头重建子节点，你看到的就是“列表突然空了，而且没有报错”。只有带 Children 的那个方法会在刷新后递归重新绑定每一行。

## 主要属性

| Name | Signature |
|------|-----------|
| `GauntletMovie` | `public GauntletMovie GauntletMovie { get; }` |
| `ItemTemplateUsageWithData` | `public ItemTemplateUsageWithData ItemTemplateUsageWithData { get; set; }` |
| `ViewModelPath` | `public BindingPath ViewModelPath { get; }` |
| `ViewModelPathString` | `public string ViewModelPathString { get; }` |
| `Parent` | `public GauntletView Parent { get; }` |
| `DisplayName` | `public string DisplayName { get; }` |

## 主要方法

### AddChild
`public void AddChild(GauntletView child)`

**用途 / Purpose:** 将 child 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GauntletView 实例
GauntletView gauntletView = ...;
gauntletView.AddChild(child);
```

### RemoveChild
`public void RemoveChild(GauntletView child)`

**用途 / Purpose:** 从当前容器或状态中移除 child。

```csharp
// 先通过子系统 API 拿到 GauntletView 实例
GauntletView gauntletView = ...;
gauntletView.RemoveChild(child);
```

### SwapChildrenAtIndeces
`public void SwapChildrenAtIndeces(GauntletView child1, GauntletView child2)`

**用途 / Purpose:** 调用 SwapChildrenAtIndeces 对应的操作。

```csharp
// 先通过子系统 API 拿到 GauntletView 实例
GauntletView gauntletView = ...;
gauntletView.SwapChildrenAtIndeces(child1, child2);
```

### RefreshBinding
`public void RefreshBinding()`

**用途 / Purpose:** 使 binding 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GauntletView 实例
GauntletView gauntletView = ...;
gauntletView.RefreshBinding();
```

### RefreshBindingWithChildren
`public void RefreshBindingWithChildren()`

**用途 / Purpose:** 使 binding with children 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GauntletView 实例
GauntletView gauntletView = ...;
gauntletView.RefreshBindingWithChildren();
```

### ReleaseBindingWithChildren
`public void ReleaseBindingWithChildren()`

**用途 / Purpose:** 调用 ReleaseBindingWithChildren 对应的操作。

```csharp
// 先通过子系统 API 拿到 GauntletView 实例
GauntletView gauntletView = ...;
gauntletView.ReleaseBindingWithChildren();
```

### BindData
`public void BindData(string property, BindingPath path)`

**用途 / Purpose:** 调用 BindData 对应的操作。

```csharp
// 先通过子系统 API 拿到 GauntletView 实例
GauntletView gauntletView = ...;
gauntletView.BindData("example", path);
```

## 使用示例

```csharp
// 实例由预制件实例化时创建，构造函数是 internal，只能反查。
GauntletView view = gauntletMovie.FindViewOf(someWidget);

// 单点刷新会清空列表行；要连子节点一起刷新。
view.RefreshBindingWithChildren();
```

## 参见

- [本区域目录](../)
- [IGauntletMovie](../IGauntletMovie)
- [ItemTemplateUsageWithData](../ItemTemplateUsageWithData)
- [Widget](../Widget)