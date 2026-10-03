---
title: "BattleSimulationMapView"
description: "9 行的空壳视图类：整个文件只有一句 `public class BattleSimulationMapView : MapView {}`。它唯一的作用是给 [OverrideView(typeof(...))] 当类型标识，让 SandBoxViewCreator 能反射找到真正的 Gauntlet 实现类。"
---

# BattleSimulationMapView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class BattleSimulationMapView : MapView`
**Base:** `MapView`
**File:** `SandBox.View/Map/BattleSimulationMapView.cs`

## 概述

全文 8 行（含 BOM 与命名空间），**类体里一个花括号内是空的**：

```csharp
public class BattleSimulationMapView : MapView
{
}
```

`grep -c` 一下，这个文件里 `public` 声明只有类声明本身，**零字段、零方法、零属性、零特性**。

**它是做什么用的？** 它是一张「类型名片」。整个 TaleWorlds 视图层用一套「空壳视图 + Gauntlet 实现类 + `[OverrideView]` 特性」的三段式约定，这个类就是三段式里的第一段。

## 心智模型

**三段式的三段分别落在哪。**

**第一段（本类）：空壳。** 声明在 `SandBox.View`（纯视图工程，没有 Gauntlet 依赖），**只继承 `MapView` 什么都不做**。存在的唯一目的是「有一个具体的、可作为泛型参数的 `MapView` 类型」。

**第二段：Gauntlet 实现类。** `SandBox.GauntletUI/Map/GauntletMapBattleSimulationView.cs:13-26`：

```csharp
[OverrideView(typeof(BattleSimulationMapView))]
public class GauntletMapBattleSimulationView : MapView
{
    private readonly SPScoreboardVM _dataSource;

    public GauntletMapBattleSimulationView(SPScoreboardVM dataSource)
    {
        this._dataSource = dataSource;
        ...
        this._dataSource.Initialize(null, null, new Action(base.MapState.EndBattleSimulation), null);
        ...
    }
}
```

**注意基类也是 `MapView`，不是 `BattleSimulationMapView`。** 两个类是完全平级的兄弟，`GauntletMapBattleSimulationView` **不继承**本类。**唯一把它们绑在一起的是 `[OverrideView(typeof(BattleSimulationMapView))]` 这个特性。**

**第三段：特性驱动的反射替换。** 泛型方法 `MapScreen.AddMapView<T>`（`:475-492`）：

```csharp
public MapView AddMapView<T>(params object[] parameters) where T : MapView, new()
{
    T mapViewWithType = this._mapViewsContainer.GetMapViewWithType<T>();
    if (mapViewWithType != null)
    {
        Debug.FailedAssert("Map view already added to the list", ..., "AddMapView", 581);
        Debug.Print("Map view already added to the list: " + typeof(T).Name + ". Returning existing view instead of creating new one.", ...);
        return mapViewWithType;
    }
    MapView mapView = SandBoxViewCreator.CreateMapView<T>(parameters);
    mapView.MapScreen = this;
    mapView.MapState = this.MapState;
    this._mapViewsContainer.Add(mapView);
    mapView.CreateLayout();
    return mapView;
}
```

**关键在 `SandBoxViewCreator.CreateMapView<T>(parameters)` 那一行**：它接受空壳类型 `T`，反射找出带 `[OverrideView(typeof(T))]` 的那个实现类，然后 **`new` 实现类并把 `parameters` 转发给实现类的构造函数**。所以：

- `T` 上的 `new()` 约束要求空壳类**必须有 public 无参构造函数**——本类靠编译器生成的隐式无参 ctor 满足；
- `parameters` 是给**实现类**的 ctor 用的，不是给空壳类的；
- 拿回来的 `MapView` 实例**类型是 `GauntletMapBattleSimulationView`，不是 `BattleSimulationMapView`**。**所以 `AddMapView<BattleSimulationMapView>(...)` 的返回值不能直接 `as BattleSimulationMapView`——那会得到 null。**

**谁在什么时候创建它。** 只有一处，`MapScreen` 实现 `IMapStateHandler.OnBattleSimulationStarted`（`:1857-1865`）：

```csharp
void IMapStateHandler.OnBattleSimulationStarted(BattleSimulation battleSimulation)
{
    this.IsInBattleSimulation = true;
    this._battleSimulationView = this.AddMapView<BattleSimulationMapView>(new object[]
    {
        this.CreateSimulationScoreboardDatasource(battleSimulation)
    });
}
```

**参数数组只有一个元素**，它直接喂给实现类 `GauntletMapBattleSimulationView(SPScoreboardVM dataSource)` 的那个参数。数据源由 `protected virtual SPScoreboardVM CreateSimulationScoreboardDatasource(BattleSimulation battleSimulation)` 生产——**这个方法是 `protected virtual`，所以 mod 可以继承 `MapScreen` 换掉整个计分板 VM**。

销毁在 `OnBattleSimulationEnded`（`:1873-1878`）：`RemoveMapView(this._battleSimulationView)` 再 `_battleSimulationView = null`。而 `RemoveMapView`（`:496-501`）会 `OnDeactivate()` + `OnFinalize()` + 从容器移除。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| （类本身） | `public class BattleSimulationMapView : MapView` | **零成员。** 它的全部信息量就是「类型名 `BattleSimulationMapView`」这一个字符串——这个字符串同时是三样东西的键：`[OverrideView(typeof(...))]` 的实参、`AddMapView<T>` 的泛型实参、以及 `_mapViewsContainer` 里 `GetMapViewWithType<T>()` 的查找键。**改名 = 断链。** |

从基类 `MapView`（`SandBox.View/Map/MapView.cs:10`）继承下来的、与生命周期相关的四个虚方法：

| 基类成员 | 签名 | 谁真的实现了它 |
| --- | --- | --- |
| `CreateLayout` | `protected internal virtual void CreateLayout()` | `GauntletMapBattleSimulationView` 覆写——建 `GauntletLayer`、注册热键、`LoadMovie`、加进 `MapScreen` 的 layer 栈。`AddMapView` 在 `Create` 之后立刻调它。 |
| `OnResume` | `protected internal virtual void OnResume()` | 由地图状态机在恢复时调。 |
| `OnDeactivate` / `OnFinalize` | 同族 | 由 `MapScreen.RemoveMapView` 依次调用（先 `OnDeactivate` 再 `OnFinalize`，顺序固定）。 |

## 真实示例

**用法一：拿到它并读状态（唯一安全的读法）。**

```csharp
using SandBox.View.Map;
using TaleWorlds.MountAndBlade.View;

// BattleSimulationMapView 类型上没有任何成员可读 —— 正确做法是问 MapScreen 状态：
public static bool IsSimulating(MapScreen mapScreen)
{
    return mapScreen.IsInBattleSimulation;   // public bool { get; private set; }
}

// 要拿到底层视图实例，用 MapScreen.GetMapView<T>() 而不是 AddMapView 的返回值：
BattleSimulationMapView shell = mapScreen.GetMapView<BattleSimulationMapView>();
if (shell != null)
{
    // 注意 shell 实际是 GauntletMapBattleSimulationView 的实例，
    // 它身上只有 SPScoreboardVM 这个 private 字段 —— 读不到，只能通过 IsInBattleSimulation 判断。
    bool running = mapScreen.IsInBattleSimulation;
}
```

**用法二：mod 加一个自己的空壳视图（这是本类唯一值得学的用法）。**

```csharp
using SandBox.GauntletUI.Map;
using SandBox.View.Map;
using TaleWorlds.MountAndBlade.View;

// 第 1 步：在 SandBox.View 侧（无 Gauntlet 依赖的工程）声明空壳
namespace MyMod.View.Map
{
    public class MyDebugOverlayMapView : MapView
    {
    }
}
```

```csharp
// 第 2 步：在 SandBox.GauntletUI 侧声明实现类，挂 [OverrideView] 指向空壳
namespace MyMod.GauntletUI.Map
{
    [OverrideView(typeof(MyDebugOverlayMapView))]
    public class GauntletMyDebugOverlayMapView : MapView
    {
        public GauntletMyDebugOverlayMapView(MyDebugVM dataSource)
        {
            this.Layer = new GauntletLayer(4600, "MyDebugOverlayLayer", false);
            this.Layer.LoadMovie("MyDebugOverlay", dataSource);
            this.MapScreen.AddLayer(this.Layer);
        }
    }
}
```

```csharp
// 第 3 步：在自己的 MapScreen 派生类里创建
public class MyModMapScreen : MapScreen
{
    public void OpenMyDebugOverlay()
    {
        // 参数数组直接对应实现类构造函数
        this.AddMapView<MyDebugOverlayMapView>(new object[] { new MyDebugVM() });
    }
}
```

**这条路径能成立的前提是 `[OverrideView]` 的实现类被反射扫到了。** 它扫的是已加载程序集，所以 mod 的两个工程都得在 mod 加载时已经加载。

## 风险与边界

- **`AddMapView<T>` 返回的对象类型不是 `T`。** 反射替换发生在 `SandBoxViewCreator.CreateMapView<T>` 里，`new` 的是 `[OverrideView]` 标注的实现类。**`AddMapView<BattleSimulationMapView>(...)` 的返回值 `as BattleSimulationMapView` 恒为 null**，必须按 `MapView` 用或按实现类 `as`。这是这套三段式约定最容易踩的一处。
- **重复添加会静默复用而不报错。** `AddMapView<T>` 开头是 `if (mapViewWithType != null) { Debug.FailedAssert(...); Debug.Print(...); return mapViewWithType; }`——**`FailedAssert` 之后没有 return 新实例，而是返回已存在的那一个**。在 release 构建里 assert 可能被编译掉，于是重复调用变成幂等操作，**不会创建第二个视图、也不会抛异常**。官方所有调用点（如 `MapScreen.cs:1860` 的战斗模拟、`：2279` 的作弊菜单）都在事件回调里，**理论上不会重复触发**；但如果 mod 在自己的代码里重复调，就会拿到共享实例。
- **本类上没有 `[OverrideView]`，所以反射替换是单向的。** 如果某个程序集里**不存在**带 `[OverrideView(typeof(BattleSimulationMapView))]` 的类，`SandBoxViewCreator` 就 fallback 到直接 `new T()`——**得到一个永远什么都不画的空视图**（因为 `MapView.CreateLayout` 是空实现）。表现是「战斗模拟界面打开了但是空白」。**空的 `[OverrideView]` 是静默失败，不报错。**
- **改名会同时断三处。** 类型名 `BattleSimulationMapView` 是 `[OverrideView]` 的实参、`AddMapView<T>` 的实参、`_mapViewsContainer.GetMapViewWithType<T>()` 的查找键。**不要为了「更清楚」而重命名。**
- **空壳类必须有 public 无参构造函数。** `AddMapView<T>` 的泛型约束 `where T : MapView, new()` 要求它。本类靠隐式无参 ctor 满足——**一旦你给它加了带参数的构造函数又没有显式补一个无参的，`AddMapView<它>` 编译不过。**
- **`IsInBattleSimulation` 会影响一大票地图交互。** `MapScreen.cs:1211` 那个巨型 `if` 里它是八个否定条件之一——战斗模拟期间所有地图操作（右键菜单、军团界面、婚姻提议弹窗、地图事件、百科界面）都被禁用。**`OnBattleSimulationStarted` 一置 true 就把整张地图锁住**，`:1873-1878` 的 `OnBattleSimulationEnded` 才解锁。
- **本类在 1.4.6 及之后仍然存在且仍然是空壳**，所以这不是一个被淘汰的历史遗留。但它也没有任何可扩展的公开面——**想改战斗模拟界面，唯一杠杆是 `CreateSimulationScoreboardDatasource` 这个 `protected virtual`（换成自己的 `SPScoreboardVM` 派生），而不是往这个空壳类里加成员。**

## 跨版本提示

`BattleSimulationMapView.cs` 在 `bannerlord-1.3.0` / `1.4.6` / `1.4.7` / `1.5.3` 四棵树里**逐字节一致**：都是 8 行、都是 `public class BattleSimulationMapView : MapView {}`、都是零成员。**跨 1.3 → 1.5 三个大版本，这个文件一个字节都没变。**

三段式的另两端也未变：

- `SandBox.GauntletUI/Map/GauntletMapBattleSimulationView.cs` 的 `[OverrideView(typeof(BattleSimulationMapView))]` 与 `GauntletMapBattleSimulationView(SPScoreboardVM dataSource)` 构造函数逐字一致；
- `MapScreen.AddMapView<T>` 的 `where T : MapView, new()` 约束、`SandBoxViewCreator.CreateMapView<T>(parameters)` 调用、`CreateLayout()` 时序，以及重复添加时 `FailedAssert` + 返回已存在实例的行为，四棵树里都一样；
- `MapScreen.OnBattleSimulationStarted` / `OnBattleSimulationEnded`（`IMapStateHandler` 显式实现）与 `protected virtual SPScoreboardVM CreateSimulationScoreboardDatasource(BattleSimulation)` 也未变。

1.3.15 与 1.4.5 两棵树不含 `SandBox.View` 工程，无法作为中间版本对照。

**结论：mod 里的空壳视图写法从 1.3.0 抄到 1.5.3 一行都不用改，`[OverrideView]` 这套约定在三个大版本间是稳定的。** 需要单独警惕的是**实现类缺失时的静默 fallback**——那个行为也三版本一致，所以「自定义空壳但忘了写实现类」在任何版本上都会得到一个空白界面。

## 依赖关系

- 基类：[MapView](../MapView)（`SandBox.View/Map/MapView.cs:10`，`public abstract class MapView : SandboxView`），提供 `MapScreen` / `MapState` 两个 `{ get; internal set; }` 属性与四个 `protected internal virtual` 生命周期方法
- 配对实现类：`SandBox.GauntletUI/Map/GauntletMapBattleSimulationView.cs` 的 `[OverrideView(typeof(BattleSimulationMapView))] public class GauntletMapBattleSimulationView : MapView`，构造函数吃一个 `SPScoreboardVM`
- 数据源：[SPScoreboardVM](../SPScoreboardVM)（`SandBox.ViewModelCollection/SPScoreboardVM.cs:37`，构造函数吃一个 `BattleSimulation`）
- 创建方：[MapScreen](../MapScreen) 的 `AddMapView<T>(params object[])`（`:475`）与 `IMapStateHandler.OnBattleSimulationStarted`（`:1857`）；销毁方 `OnBattleSimulationEnded`（`:1873`）→ `RemoveMapView`（`:496`）
- 反射替换器：`SandBox.View` 侧的 `SandBoxViewCreator.CreateMapView<T>`，依赖 `[OverrideView]` 特性扫描已加载程序集
- 触发的领域对象：`TaleWorlds.CampaignSystem/BattleSimulation`（战斗模拟本体，实现 `IBattleObserver`）
- 同桶同形态的兄弟：`SandBox.View/Map/MapCheatsView.cs` 也是同样的空壳，配对 `SandBox.GauntletUI/Map/GauntletMapCheatsView.cs`；`MapOverlayView` / `MapCameraView` / `MapBarView` 同理
- 桶首页：[campaign-ext API 分区](../)