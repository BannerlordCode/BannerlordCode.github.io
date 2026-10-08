---
title: "GauntletMovie"
description: "一份已加载的 XML prefab 界面实例：持有根视图与 ViewModel，负责绑定、尺寸跟随与热重载，构造入口只有一个静态 Load。"
---
# GauntletMovie

**Namespace:** `TaleWorlds.GauntletUI.Data`
**Module:** `TaleWorlds.GauntletUI.Data`
**Type:** `public class GauntletMovie : IGauntletMovie`
**Source:** `TaleWorlds.GauntletUI.Data/GauntletMovie.cs`

## 概述

`GauntletMovie` 是「一个 `.prefab` XML 界面定义被真正加载、实例化并绑上数据源之后」的那份运行时对象。它做四件事：把 `WidgetFactory` 找到的 `WidgetPrefab` 实例化成控件树；把这棵树挂到一个自己创建的根 `Widget` 上（这个根节点固定铺满整个 `TwoDimensionContext`，并且 `DoNotAcceptEvents = true`，自己不接事件）；把 `ViewModel` 作为绑定根驱动数据刷新；以及在 prefab 或画刷发生变化时按构造时传入的开关决定要不要自毁重建。

它的**构造函数是 private**，类里也没有任何公开的工厂方法之外的构造路径——想拿实例只有一条路：静态方法 `Load`。这条路径内部先试代码生成版的 prefab（`widgetFactory.GeneratedPrefabContext`），失败才回落到普通 prefab 解析，最终返回的静态类型是接口 `IGauntletMovie` 而非 `GauntletMovie`。也就是说正常情况下你手上拿到的引用类型是接口；想用 `RefreshDataSource` 或 `FindViewOf` 这两个只在本类上的方法，得先 cast 一次。

命名空间有个容易踩的错位：本类在 `TaleWorlds.GauntletUI.Data`，而 `GauntletLayer` 在 `TaleWorlds.Engine.GauntletUI`。真正在 mod 里加载界面的通常是后者——它的 `LoadMovie` 返回的是 `GauntletMovieIdentifier`，不是本类型。想直接操作 movie 实例本身，才需要 `using TaleWorlds.GauntletUI.Data;`。

## 心智模型

一次加载的完整链条是：`Load(context, widgetFactory, movieName, datasource, 跳过生成版, 开热重载)` → 私有构造函数（建根 `Widget`、挂到 `Context.Root`、订阅 `WidgetFactory.PrefabChange` 与 `BrushFactory.BrushChange` 两个热重载事件）→ 私有 `LoadMovie()` → `WidgetFactory.GetCustomType(movieName)` 拿到 `WidgetPrefab` → 用 `WidgetCreationData` 实例化，其中 `AddExtensionData(this)` 把 movie 自身塞进扩展数据表（`FindViewOf` 之类就靠这条链回溯）→ `GetGauntletView()` 得到 `RootView` → 挂为根节点的子控件 → `RefreshBindingWithChildren()` 拉一次绑定 → `Context.OnMovieLoaded(movieName)` 通知上层。

「每帧跟着屏幕长」这件事只有一行：公开的 `Update()` 把根节点的 `ScaledSuggestedWidth` / `ScaledSuggestedHeight` 各刷新成 `Context.TwoDimensionContext.Width` / `.Height`。所以窗口大小变化时你仍然得按帧调 `Update()`，否则根节点尺寸停在上一次的值上。

释放是单向且不可重复的：`Release()` 会解绑事件、退订热重载、通知 `Context.OnMovieReleased`、把 `IsLoaded` 置 false、`IsReleased` 置 true。**`Release()` 之后这个对象就不要再用了**，重新加载要再调一次 `Load`。

热重载是唯一会自动重建自己的路径：`PrefabChange` 或 `BrushChange` 触发 `OnResourceChanged`，仅当构造时传进来的热重载开关为真才继续，然后 `RefreshResources()` 清事件处理器、置空 `RootView`、清空子控件、通知 `OnMovieReleased`、`IsLoaded` 置 false，最后重新走一遍 `LoadMovie()`。注意这个重建**不重建根节点也不换 ViewModel**，只是把控件树重铺一遍。

## 关键成员

### 身份与依赖

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `MovieName` | `public string MovieName { get; private set; }` | 本 movie 的 prefab 名，也是 `Context.OnMovieLoaded` / `OnMovieReleased` 用的标识。构造时定死 |
| `WidgetFactory` | `public WidgetFactory WidgetFactory { get; private set; }` | 外部传进来的 prefab 工厂。`LoadMovie` 用它 `GetCustomType`，`Release` 用它 `OnUnload` |
| `BrushFactory` | `public BrushFactory BrushFactory { get; private set; }` | 构造时从 `context.BrushFactory` 取的画刷工厂。订阅它的 `BrushChange` 是热重载的另一半触发源 |
| `Context` | `public UIContext Context { get; private set; }` | 所属的二维 UI 上下文。根节点挂在 `Context.Root` 上，尺寸取自 `Context.TwoDimensionContext` |
| `ViewModel` | `public IViewModel ViewModel { get; }` | 当前绑定根。**只读**，换数据源要走 `RefreshDataSource` |

### 加载产物与状态

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `RootView` | `public GauntletView RootView { get; private set; }` | 实例化出来的视图根。prefab 找不到时它保持 null，`IsLoaded` 同时为 false |
| `RootWidget` | `public Widget RootWidget { get; }` | `RootView == null ? null : RootView.Target`。纯转发属性，不缓存 |
| `IsLoaded` | `public bool IsLoaded { get; private set; }` | 控件树是否已成功实例化。**构造函数把它置 false，只有 `LoadMovie` 拿到非空 prefab 后才置 true**；`RefreshResources` 与 `Release` 都会置回 false |
| `IsReleased` | `public bool IsReleased { get; private set; }` | 是否已释放。构造时 false，`LoadMovie` 每次成功会置回 false，`Release` 置 true |

### 创建与释放

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Load` | `public static IGauntletMovie Load(UIContext, WidgetFactory, string, IViewModel, bool, bool)` | **唯一的公开构造入口，返回接口类型**。两个布尔尾参依次是「跳过代码生成版 prefab」与「开热重载」，参数名在源码里较长，此处按类型标注。前者先试 `GeneratedPrefabContext.InstantiatePrefab`，把 `datasource` 放进名为 `DataSource` 的字典并用 `datasource.GetType().FullName` 或字面量 `Default` 当 key；命中就取 `GetExtensionData("Movie")` 返回。回落分支才 `new` 本类并调私有 `LoadMovie()` |
| `Release` | `public void Release()` | 解绑视图、退订两个热重载事件、`WidgetFactory.OnUnload(MovieName)`、通知 `Context.OnMovieReleased`、断掉父节点引用，置 `IsLoaded=false` / `IsReleased=true`。**不可重复调用**，第二次会在 `_moviePrefab.OnRelease()` 处炸 |

### 数据绑定与逐帧维护

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `RefreshDataSource` | `public void RefreshDataSource(IViewModel)` | 换绑定根并立刻 `RootView.RefreshBindingWithChildren()` 拉一次刷新。**`RootView` 为 null 时直接空引用崩溃（源码里没有判空） |
| `RefreshBindingWithChildren` | `public void RefreshBindingWithChildren()` | 不换数据源，只对现有 `RootView` 递归刷新绑定。同样对 null 的 `RootView` 不设防 |
| `Update` | `public void Update()` | 每帧调用，把根节点的 `ScaledSuggestedWidth` / `ScaledSuggestedHeight` 同步成当前 `TwoDimensionContext` 的宽高。**只管尺寸，不管数据** |
| `FindViewOf` | `public GauntletView FindViewOf(Widget widget)` | 反向查询：由控件拿回它的 `GauntletView`，实现是 `widget.GetComponent<GauntletView>()`。控件树里没有对应视图组件时返回 `default(GauntletView)` |

### 非公开但影响行为的成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `LoadMovie` | `private void LoadMovie()` | 真正的加载实现。`GetCustomType` 返回 null 时**直接 return，`IsLoaded` 留在 false**——这是「movie 加载了但没反应」最常见的成因 |
| `RefreshResources` | `private void RefreshResources()` | 清处理器、置空 `RootView`、清子控件、通知释放、再调 `LoadMovie()`。热重载的实际执行体 |
| `OnResourceChanged` | `private void OnResourceChanged()` | 两个热重载事件的共同处理器。构造时那个热重载开关为 false 时**立即返回，什么都不做** |
| `GetViewModelAtPath` | `internal object GetViewModelAtPath(BindingPath, bool)` | 绑定路径解析，尾参表示该路径是否应指向一个列表。路径为 null 或 `_viewModel` 为 null 时返回 null，否则先 `Simplify()` 再转发 |
| `OnItemRemoved` | `internal void OnItemRemoved(string type)` | 转发 `WidgetFactory.OnUnload(type)`。**internal，mod 调不到** |

## 怎么用

### 怎么拿到它

`GauntletMovie` 是 `TaleWorlds.GauntletUI.Data/GauntletMovie.cs:10` 的 `public class GauntletMovie : IGauntletMovie`——它实现接口，所以你在代码里面对的通常是 `IGauntletMovie`。

**构造器是 `private GauntletMovie(string movieName, UIContext context, WidgetFactory widgetFactory, IViewModel viewModel, bool hotReloadEnabled)`（`:74`）**——外部 new 不了。两条创建路径：

- **正式入口**：`public static IGauntletMovie Load(UIContext context, WidgetFactory widgetFactory, string movieName, IViewModel datasource, bool doNotUseGeneratedPrefabs, bool hotReloadEnabled)`（`:185`）。它先试生成式 prefab（`:189`），拿不到才 `new GauntletMovie(...)` 并紧接 `gauntletMovie2.LoadMovie();`（`:206-207`）。
- **模组侧包装**：`GauntletLayer.LoadMovie(string movieName, ViewModel dataSource)`（`GauntletLayer.cs:130`），返回 `GauntletMovieIdentifier`。引擎自己的用法就是这样（`BannerEditorView.cs:155`、`CharacterCreationCultureStageView.cs:39`）。

`private void LoadMovie()`（`:122`）才是真正加载的那一步：`_moviePrefab = this.WidgetFactory.GetCustomType(this.MovieName);`（`:124`），**为 null 就直接 `return`（`:126-128`）——此时 `IsLoaded` 保持 false**；成功才 `IsLoaded = true; IsReleased = false;`（`:129-130`）。

构造器本身（`:74-93`）做了六件你必须知道的事：存下 `WidgetFactory` / `BrushFactory`（`context.BrushFactory`）/ `Context`；**订阅两个热重载事件** `WidgetFactory.PrefabChange += this.OnResourceChanged;` 和 `BrushFactory.BrushChange += this.OnResourceChanged;`（`:79-80`）；`new Widget(this.Context)` 造 `_movieRootNode` 并 `this.Context.Root.AddChild(...)`（`:82-83`）；把它设成固定尺寸、铺满 `Context.TwoDimensionContext`（`:84-87`）；最后 `this.IsLoaded = false; this.IsReleased = false;`（`:91-92`）。

**注意 `IsLoaded` 和 `IsReleased` 刚构造完都是 `false`**（`:91-92`）——movie 要等 `LoadMovie()` 才 loaded，而 `LoadMovie` 在 prefab 找不到时**提前返回、永远不置 `IsLoaded`**。

### 典型用法

```csharp
using TaleWorlds.GauntletUI;
using TaleWorlds.GauntletUI.Data;

// 创建：构造器是 private（:74），走静态 Load 或模组包装的 GauntletLayer.LoadMovie
UIContext ctx = ...;
IGauntletMovie movie = GauntletMovie.Load(ctx, widgetFactory, "MyMovie", viewModel,
                                        doNotUseGeneratedPrefabs: false, hotReloadEnabled: false);   // :185
// 模组里更常见的写法（引擎自己也这么用）：
// var movie = this.GauntletLayer.LoadMovie("MyMovie", viewModel);   // GauntletLayer.cs:130

// 等 loaded 再动控件；IsLoaded 为 false 通常意味着 prefab 没找到（:126-128）
if (movie.IsLoaded)                                    // GauntletMovie.cs:64
{
    Widget root = movie.RootWidget;                    // :49，内部 RootView?.Target
    GauntletView view = movie.RootView;                // :45
    string name = movie.MovieName;                     // :40
}

// 换 ViewModel 并重绑
movie.RefreshDataSource(newViewModel);                 // :94，内部 RefreshBindingWithChildren()

// 必须释放：它订阅了 PrefabChange / BrushChange
movie.Release();                                       // :142，会 -= 两个事件并从 Context.Root 摘下节点
```

### 最容易踩的坑

**不调 `Release()`，或者重复调。** `Release()`（`:142-159`）是唯一会退订那两个热重载事件的代码：`this.WidgetFactory.PrefabChange -= this.OnResourceChanged;` 和 `this.BrushFactory.BrushChange -= this.OnResourceChanged;`（`:155-156`）。漏掉它，**你 release 掉的 movie 仍然挂在工厂的热重载事件上**，于是开发模式下改一次 prefab 就去操作一个已经释放的对象；正式模式下则是 `Context.Root` 里留下孤儿节点，`_movieRootNode.ParentWidget = null;`（`:158`）没被执行，整棵 UI 树泄漏。症状是「开一次界面涨一点内存，跑久了帧率崩」。

第二个坑是 `Release()` **不幂等**。它无条件执行 `this._moviePrefab.OnRelease();`（`:152`）和 `this.WidgetFactory.OnUnload(this.MovieName);`（`:153`），结束时把 `IsLoaded = false; IsReleased = true;`（`:159-160`）。所以第二次调用会在已释放的 `_moviePrefab` 上再调一次 `OnRelease()`。**用 `if (!movie.IsReleased) movie.Release();` 包一层。**

第三，`RootWidget`（`:49`）的 getter 是 `if (this.RootView == null) return null; return this.RootView.Target;`——**RootView 为 null 时返回 null 而不是抛异常**。在 `LoadMovie()` 之前或 `Release()` 之后读它都是 null（并且 prefab 缺失时 `IsLoaded` 也一直是 false，`RootWidget` 同样为 null），所以拿它做后续操作必须判空。

## 真实示例

直接加载并按帧维护尺寸：

```csharp
// 读者侧演示：这不是游戏 API 里的加载器，而是 mod 自己拼出的调用形状
public class PrefabMovieHost
{
    private readonly IGauntletMovie _movie;
    private readonly GauntletMovie _concrete;

    public PrefabMovieHost(UIContext context, WidgetFactory factory, ViewModel dataSource)
    {
        // 静态 Load 是唯一构造入口，返回的是接口
        _movie = GauntletMovie.Load(context, factory, "Prefabs/MyLedger", dataSource, false, false);
        _concrete = _movie as GauntletMovie;

        // 生成版 prefab 走的是另一条分支，上面这个 cast 可能拿到 null
        if (_concrete == null || !_movie.IsLoaded)
        {
            Debug.Print("prefabs/my_ledger 加载失败，检查 prefab 名与 Hot Reload", 0);
        }
    }

    public Widget RootWidget => _movie.RootWidget;

    public void Refresh()
    {
        _movie.RefreshBindingWithChildren();
    }

    public void Tick()
    {
        // 每帧同步根节点尺寸，否则窗口变化后布局停在旧值
        _movie.Update();
    }

    public void Dispose()
    {
        // 释放前务必确认 IsLoaded 为真，否则 Release 会在 prefab 上空引用
        if (_movie.IsLoaded)
        {
            _movie.Release();
        }
    }
}
```

换数据源必须先确认 `IsLoaded`，否则 `RootView` 为 null 会直接空引用：

```csharp
public class LedgerMovieWrapper
{
    public GauntletMovie Concrete { get; set; }

    public void Rebind(ViewModel nextSource)
    {
        if (Concrete == null || !Concrete.IsLoaded)
        {
            // RootView 为 null，RefreshDataSource 会空引用，直接返回
            return;
        }

        Concrete.RefreshDataSource(nextSource);
    }

    public GauntletView ResolveView(Widget widget)
    {
        return Concrete.FindViewOf(widget);
    }
}
```

从控件反查视图（`FindViewOf` 的用法）：

```csharp
public GauntletView Resolve(Widget clicked)
{
    return Concrete.FindViewOf(clicked);
}
```

## 风险与边界

- **构造函数是 private，只有一条路。** 想 `new` 编译不过。必须走静态 `Load`，且它返回 `IGauntletMovie` 接口。
- **返回值可能是 null。** `Load` 的两个分支都可能失败：生成版没命中时 `GetExtensionData("Movie")` 取出 null 会再落回普通分支；普通分支里 prefab 找不到则 `LoadMovie` 直接 return，`IsLoaded` 停在 false、`RootView` 是 null。**用之前先判 `IsLoaded`。**
- **`Release()` 在没加载成功时必然空引用。** 它无条件调 `_moviePrefab.OnRelease()`，而 prefab 找不到时 `_moviePrefab` 是 null。判 `IsLoaded` 再释放。
- **热重载默认是关的。** `Load` 的最后一个布尔参数决定热重载是否开启，为 false 时，`PrefabChange` 与 `BrushChange` 触发后 `OnResourceChanged` 第一行就 return。做 UI 热迭代调试时才开。
- **热重载只重建控件树。** `RefreshResources` 不换根 `Widget`、不换 `ViewModel`、不重新订阅事件（事件在构造时就订好了）。你在 `RefreshResources` 之外缓存的控件引用在重建后会失效。
- **`RefreshDataSource` 与 `RefreshBindingWithChildren` 都不判空。** 两者都直接摸 `RootView`，`RootView` 为 null 就是空引用崩溃。
- **`Update()` 只管尺寸。** 它不刷新数据绑定，也不做输入。数据变了要自己调 `RefreshBindingWithChildren`。
- **根节点不接事件。** 构造时把 `DoNotAcceptEvents` 置 true 且尺寸策略为 `Fixed`。命中测试要靠里面的子控件，不会命中根节点本身。
- **`IsReleased` 只被写不被读进逻辑。** 它是给你自己判断「这个对象还能不能用」的，`Release()` 之后任何调用都不安全。
- **`OnItemRemoved` 是 internal。** 想在 mod 里卸载某个 prefab 类型，得走 `GauntletLayer` 的 `ReleaseMovie`，或直接调 `WidgetFactory.OnUnload`。
- **命名空间错位。** 本类在 `TaleWorlds.GauntletUI.Data`，`GauntletLayer` 在 `TaleWorlds.Engine.GauntletUI`，`WidgetFactory` 在 `TaleWorlds.GauntletUI.PrefabSystem`。三个 `using` 缺一编译不过。

## 跨版本提示

本机 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.GauntletUI.Data/TaleWorlds.GauntletUI.Data/GauntletMovie.cs` 存在且可读（`bannerlord-1.4.5/Bannerlord.Source/bin/` 下 `.cs` 文件共 6222 个）。逐条比对 1.4.5 与 1.4.6 的成员声明，**公开面完全一致**，唯一差异是反编译产物的语法形态：1.4.5 把 `ViewModel` 写成表达式体（`=> _viewModel`），1.4.6 写成块体属性，`Get` 语义不变。私有成员 `LoadMovie` / `RefreshResources` / `OnResourceChanged` 与字段 `_moviePrefab` / `_viewModel` / 私有根控件字段 / 那个热重载开关 在两个版本里同名同型，`internal` 的 `GetViewModelAtPath` 与 `OnItemRemoved` 在两版里也都是 `internal`。也就是说这页描述的「静态 Load 单一入口 + IsLoaded 判空 + Release 前置条件」在 1.4.5 上同样成立。

## 依赖关系

- 常驻载体：[GauntletLayer](../../engine/GauntletLayer) — 跨模块（`TaleWorlds.Engine.GauntletUI`），实际挂在界面上的那一层，间接持有 movie。
- 屏幕栈侧：[ScreenLayer](../ScreenLayer) — 同属 gui 桶的屏幕层抽象，本类的控件树最终被它渲染。
- 组件类型：[ScreenComponent](../ScreenComponent) — 界面里的共享非可视状态，与本类的绑定数据是两回事。
- 模块归属：[gui API 目录导览](../)
- 分层说明：[模块地图](../../../architecture/module-map)

## 导航

- 同桶：[`../ScreenLayer`](../ScreenLayer) · [`../ScreenComponent`](../ScreenComponent) · [`../ScreenManager`](../ScreenManager)
- 父索引：[`../_index`](../_index)
