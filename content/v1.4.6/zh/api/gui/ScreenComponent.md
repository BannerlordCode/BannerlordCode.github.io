---
title: "ScreenComponent"
description: "非可视界面组件的标记基类：本身零成员，靠 AddComponent / FindComponent<T> 按类型在界面与 layer 之间共享模型对象。"
---
# ScreenComponent

**Namespace:** `TaleWorlds.ScreenSystem`
**Module:** `TaleWorlds.ScreenSystem`
**Type:** `public class ScreenComponent`
**Source:** `TaleWorlds.ScreenSystem/ScreenComponent.cs`

## 概述

`ScreenComponent` 的整个源码文件只有十行：命名空间声明、类声明、一对空的大括号。**它没有任何成员**——没有构造函数、没有字段、没有方法、没有接口。它存在的唯一理由是给「挂在界面上、但不负责画任何东西的那部分模型」提供一个共同的基类，好让 `ScreenBase` 的 `AddComponent` / `FindComponent<T>` 能按类型而不是按名字把它找回来。

把它和 `ScreenLayer` 并排看，区别就是可视与不可视：`ScreenLayer` 有名字、有层叠顺序、有输入上下文和十几个帧回调钩子；`ScreenComponent` 一条都没有。它不进绘制顺序表，不吃输入，也收不到 tick。你要挂上去的是一份共享状态——当前选中的行、过滤条件、滚动位置这类东西——由界面里的各个 layer 共同读写。

因为它是 `public class` 而非 `abstract class`，你**可以直接 `new`**，虽然官方代码里没人这么用；实践上它的价值完全体现在被登记进 `ScreenBase` 的组件表里之后。`ScreenBase` 的 `AddComponent` 不做 null 检查也不去重，登记同一个实例两次会在 `FindComponent<T>` 里拿到第一个匹配项，但语义上已经是脏数据。

## 心智模型

把一个界面想象成「一层可视摊位（layer）加一份账本（component）」。layer 各自独立绘制，账本只有一份，被所有摊位共享。典型的分法是：表格的**可视部分**做成 `GauntletLayer`，表格的**选中行与过滤条件**做成 `ScreenComponent` 的派生类，于是渲染层读账本、点击回调写账本，两边都持有同一个组件引用。

定位靠类型：`FindComponent<T>()` 在本界面的组件表里按类型取**第一个**匹配项，找不到返回 `default(T)`（引用类型即 null）。因为是按类型而非按名字，所以同一界面里不能登记两个同类型的组件——想挂两份就派生两个不同的类，或者直接在一份组件里装两个字段。

生命周期与界面绑定，不与 layer 绑定：`RemoveLayer` 会顺手 finalize 那一个 layer，但**不会**碰组件表。所以组件的生命周期严格等于界面的生命周期，在 `OnFinalize` 里释放它引用的资源是对的，在某个 layer 的 `OnFinalize` 里释放则是错的。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| （类体） | `public class ScreenComponent { }` | 类体为空，**零公开成员**。既没有无参构造函数的显式声明（编译器合成一个公有无参构造），也没有任何可重写的虚方法 |

这是本页唯一一条成员记录。写它不是因为这里有 API 可用，而是因为「它没有 API」正是使用时最需要知道的事实：想让它干活，要么继承它再加自己的成员，要么把它当纯标记类型用。

宿主侧的两个入口方法定义在 `ScreenBase` 上，不在本类里：

| 宿主方法 | 签名 | 作用 |
| --- | --- | --- |
| `AddComponent` | `public void AddComponent(ScreenComponent component)` | 把组件登记进本界面的组件表。**不做 null 检查、不去重**，传 null 也不会立刻报错 |
| `FindComponent<T>` | `public T FindComponent<T>() where T : ScreenComponent` | 按类型取第一个匹配的组件；找不到返回 `default(T)`。命中即返回，不看登记顺序以外的任何东西 |

## 怎么用

### 怎么拿到它

`ScreenComponent` 是 `TaleWorlds.ScreenSystem/ScreenComponent.cs:6` 的 `public class ScreenComponent`——**全文只有 9 行（一个 BOM + 三个 using/namespace 头），类体里只有一个 `{}`**。

**它是命名空间级的占位标记，不是一个能拿来继承或实例化的基类。** 在 1.4.6 的 `TaleWorlds.ScreenSystem` 工程里，你能看到它只有这一个文件，`ScreenBase`（`ScreenBase.cs:9`）和 `ScreenLayer`（`ScreenLayer.cs:10`）**都不继承它**。

它的实际用途是给 UI 代码做**分类标记**：接口型成员（`ScreenBase.OnLayerAddedEvent`、`ScreenBase.OnLayerRemovedEvent` 分别是 `ScreenBase.cs:14`、`ScreenBase.cs:19` 的事件委托类型）以及 `ScreenBase.OnAddLayer` / `ScreenBase.OnRemoveLayer` 两个事件的参数类型，都以它为命名锚点。模组侧如果要给某个自定义屏幕做「这是什么组件」的判定，惯例是写 `class MyThing : ScreenComponent`。

**它没有任何成员、没有生命周期钩子、没有构造器逻辑。** 想在屏幕上挂行为，你要么派生 `ScreenBase`，要么往 `ScreenBase.Layers`（`ScreenBase.cs:33`）里加一个 `ScreenLayer`。

### 典型用法

```csharp
using TaleWorlds.ScreenSystem;

// 它是个空标记类：继承它只是为了分类
public class MyTradePanel : ScreenComponent      // ScreenComponent.cs:6
{
    public string PanelId;
}

// 真正的 UI 行为仍然靠 ScreenBase / ScreenLayer
public class MyScreen : ScreenBase
{
    public override void OnInitialize()
    {
        base.OnInitialize();
        Layers.Add(new MyHudLayer("hud", localOrder: 0));    // ScreenBase.cs:33
    }
}

// 判定某个对象是不是这一族
bool isUiComponent = obj is ScreenComponent;       // 可用，但要注意它没有任何可调成员
```

### 最容易踩的坑

**把 `ScreenComponent` 当成「屏幕组件基类」，继承它然后指望能有 `OnInitialize` 之类的钩子被调用。** 它是空的——**一个字都没有**，不是「钩子是空的」，是「没有钩子」。你派生出来的类永远不会被任何生命周期调用，因为没有任何代码会去调它。后果是「我的组件写了初始化逻辑但永远不执行」，而编译器、运行时、界面都不会给你任何提示。

第二个坑是**把它和 `ScreenBase`（`ScreenBase.cs:9`）、`ScreenLayer`（`ScreenLayer.cs:10`）当成同一族做类型判断**。这三者之间**没有任何继承关系**。所以 `if (x is ScreenBase)` 和 `if (x is ScreenComponent)` 对同一个对象给出的答案毫无关联；如果你想判断「这是不是一个 UI 元素」，单独用 `ScreenComponent` 会漏掉所有真正的 `ScreenBase` 屏幕。

第三，`ScreenComponent` 是 `public class` 而非 `abstract`，所以你**可以** `new ScreenComponent()` 得到一个毫无用处的实例——这个 API 不会阻止你写无意义的代码。

## 真实示例

组件本身——这里演示它作为「共享选中状态」的用法，字段与方法都是读者侧自己声明的：

```csharp
// 读者侧演示组件，不是游戏 API；ScreenComponent 基类本身没有任何成员
public class RowSelectionComponent : ScreenComponent
{
    private readonly List<string> _visibleRows = new List<string>();
    private int _highlightedIndex = -1;

    public int HighlightedIndex => _highlightedIndex;

    public void ReplaceRows(IEnumerable<string> rows)
    {
        _visibleRows.Clear();
        _visibleRows.AddRange(rows);
        _highlightedIndex = -1;
    }

    public void MoveHighlight(int delta)
    {
        if (_visibleRows.Count == 0)
        {
            _highlightedIndex = -1;
            return;
        }

        _highlightedIndex = (_highlightedIndex + delta + _visibleRows.Count) % _visibleRows.Count;
    }

    public string HighlightedText =>
        _highlightedIndex >= 0 && _highlightedIndex < _visibleRows.Count
            ? _visibleRows[_highlightedIndex]
            : null;
}
```

界面负责登记与找回组件：

```csharp
// 读者侧演示界面，不是游戏 API
public class LedgerScreen : ScreenBase
{
    private RowSelectionComponent _selection;

    protected override void OnInitialize()
    {
        _selection = new RowSelectionComponent();
        AddComponent(_selection);
    }

    protected override void OnReady()
    {
        // 按类型找回：类型一致就拿到刚登记的那一份
        _selection = FindComponent<RowSelectionComponent>();
        _selection.ReplaceRows(new[] { "Payday", "Vagabond", "Prisoner" });
    }

    protected override void OnFrameTick(float dt)
    {
        if (_selection == null)
        {
            return;
        }

        if (Campaign.Current != null)
        {
            _selection.MoveHighlight(1);
        }
    }

    protected override void OnFinalize()
    {
        // 组件的生命周期等于界面，清理只在这里做一次
        _selection = null;
    }
}
```

渲染层读同一份账本：

```csharp
// 读者侧演示可视层，不是游戏 API；它不画东西，只读组件状态
public class LedgerRowsLayer : GauntletLayer
{
    public LedgerRowsLayer() : base("ledger_rows", 0) { }

    public RowSelectionComponent Selection { get; set; }

    // GauntletLayer 重写了 ScreenLayer 的这些 protected internal 钩子，
    // 派生类在同 protected internal 层面重写它们
    protected internal override void Tick(float dt)
    {
        // Selection 与界面登记的是同一个实例，这里只读不写
        int index = Selection == null ? -1 : Selection.HighlightedIndex;

        if (index >= 0)
        {
            Selection.MoveHighlight(1);
        }
    }
}
```

## 风险与边界

- **零成员，不要指望它提供任何东西。** 没有生命周期钩子、没有输入上下文、没有 tick。你派生它之后加的每个成员都是自己的责任，游戏不会替你调。
- **不接收帧回调。** 组件收不到 tick，也不会被绘制。数据变化必须靠界面或 layer 显式驱动刷新，否则界面上的显示不会跟着变。
- **不进绘制顺序表。** 它不在 `ScreenManager` 的 `SortedLayers` 里，也不参与命中测试。想显示什么，得由某个 layer 去做。
- **`AddComponent` 不校验也不去重。** 传 null 或重复登记都不会当场抛错，症状会推迟到 `FindComponent<T>` 返回 null 或拿到错误的那一份时才暴露。
- **`FindComponent<T>` 按类型取第一个匹配。** 同一界面登记两个同类型组件，后加的那个可能永远取不到。要两份就派生两个不同的类。
- **找不到时返回 null，不是抛异常。** 引用类型派生类的返回值必须判空；值类型派生类会得到 `default(T)`，那是一个「看起来合法但全为零」的实例。
- **生命周期跟着界面，不跟着 layer。** `ScreenBase.RemoveLayer` 只会 finalize 那一个 layer，组件表不受影响。把组件的清理写进某个 layer 的 `OnFinalize` 会让它活过本该销毁的时刻。
- **同名不同类不等于同一份数据。** 定位完全按类型走，没有任何按名字的查找路径。

## 跨版本提示

本机 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/ScreenComponent.cs` 存在且可读（`bannerlord-1.4.5/Bannerlord.Source/bin/` 下 `.cs` 文件共 6222 个）。逐条比对 1.4.5 与 1.4.6 的成员声明，**两者完全一致：都是零成员的空类**。这个类型从 1.4.5 到 1.4.6 没有增加任何字段、方法或接口，两个版本里 `ScreenBase` 的 `AddComponent` / `FindComponent<T>` 签名也都没变。也就是说这页描述的「纯标记基类」定位在两个版本上同样成立。

## 依赖关系

- 登记与查找：[ScreenBase](../ScreenBase) — `AddComponent` / `FindComponent<T>` 是本类唯一的入口与出口。
- 全局栈：[ScreenManager](../ScreenManager) — 组件本身不与它直接交互，但界面在栈里时组件才活着。
- 同层对照：[ScreenLayer](../ScreenLayer) — 同一命名空间里的可视层基类，`ScreenComponent` 的对照物。
- 模块归属：[gui API 目录导览](../)
- 分层说明：[模块地图](../../../architecture/module-map)

## 导航

- 同桶：[`../ScreenBase`](../ScreenBase) · [`../ScreenLayer`](../ScreenLayer) · [`../ScreenManager`](../ScreenManager)
- 父索引：[`../_index`](../_index)