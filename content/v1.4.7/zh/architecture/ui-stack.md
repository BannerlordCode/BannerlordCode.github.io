---
title: "界面栈 — ScreenSystem / Gauntlet / ViewModel 三层"
description: "v1.4.7 里 ScreenManager 如何维护屏幕栈，ScreenBase 与 ScreenLayer 的区别，GauntletLayer 如何把 ViewModel 绑到 XML，以及属性通知的正确写法。"
---
# 界面栈 — ScreenSystem / Gauntlet / ViewModel 三层

## 心智模型

界面在 v1.4.7 是**四个类型**叠出来的纵向管线，从上到下：

```text
ScreenManager      屏幕栈。Push / Pop / 替换栈顶，管全局图层与输入焦点
   └── ScreenBase  一个界面。生命周期 + 持有一组 ScreenLayer
         └── ScreenLayer   一层。命中测试、焦点、绘制顺序
               └── GauntletLayer   具体那一层。加载 XML 电影、绑定数据源、渲染
                     └── ViewModel  纯数据 + 命令。发通知，界面自动刷新
```

关键理解：**`ViewModel` 不认识 `ScreenBase`，`ScreenBase` 不认识 `GauntletLayer`。**
它们靠 `GauntletLayer` 这一层接起来。所以调试 UI 时要分清是哪一段断了：
数据没变 → ViewModel 没发通知；数据变了界面没变 → 绑定路径写错；界面整体不出现 → 栈或图层没挂上。

## ScreenManager：栈的唯一持有者

`TaleWorlds.ScreenSystem.ScreenManager` 是 `static class`，57 个 public 成员里真正需要记的是这些：

| 成员 | 作用 |
| --- | --- |
| `TopScreen` | 栈顶界面，绘制与输入的第一目标 |
| `FocusedLayer` / `FirstHitLayer` | 当前有焦点的图层 / 命中测试的第一个图层 |
| `SortedLayers` | 按顺序排好的全部图层 |
| `OnPushScreen` / `OnPopScreen` | 事件。想知道"谁进来了/走了"就订阅这两个 |
| `AddGlobalLayer(GlobalLayer, bool isFocusable)` / `RemoveGlobalLayer(GlobalLayer)` | 加一个跨界面常驻图层 |
| `PushScreen` / `PopScreen` / `ReplaceTopScreen(ScreenBase)` | 栈操作 |
| `SetAndActivateRootScreen(ScreenBase)` | 换根界面（慎用，影响全局） |
| `UsableArea` / `Scale` | 当前可用区域与缩放，做自适应布局用 |
| `OnGameWindowFocusChange(bool focusGained)` | 事件。窗口失焦时暂停循环动画 |

`PushScreen` 与 `PopScreen` **必须成对**。这是 Bannerlord UI 最常见的泄漏：
忘了 `PopScreen` 会让上一个界面继续接收输入，界面看起来"卡住点不动了"。

## ScreenBase：生命周期

`ScreenBase` 的 `protected virtual` 回调就是它的完整生命周期：

| 回调 | 什么时候 | 该做什么 |
| --- | --- | --- |
| `OnInitialize()` | 实例化后 | 建图层、加组件。**只调一次** |
| `OnFinalize()` | 永久销毁 | 释放非托管资源、取消事件订阅 |
| `OnActivate()` / `OnDeactivate()` | 进入/离开栈顶 | 启停循环动画、订阅/退订事件 |
| `OnPause()` / `OnResume()` | 被别的屏幕盖住/重新露出 | 暂停昂贵的每帧逻辑 |
| `OnReady()` | 资源加载完成 | 第一次可以安全访问 UI 树 |
| `OnFrameTick(float)` / `OnPostFrameTick(float)` / `OnIdleTick(float)` | 每帧 | 动画、轮询 |
| `OnFocusChangeOnGameWindow(bool)` | 窗口焦点变化 | 通常把 `base` 留着 |

公开成员里值得用的：`Layers`、`AddLayer` / `RemoveLayer` / `HasLayer`、
`FindLayer<T>()`（按类型找）、`FindLayer<T>(string name)`（按名字找）、
`AddComponent` / `FindComponent<T>`、`Activate` / `Deactivate` / `ActivateAllLayers`。

`OnFinalize` 里的清理和 `OnInitialize` 必须对称。这条规则适用整棵 UI 树，不只是屏幕。

## ScreenLayer 与 GauntletLayer

`ScreenLayer` 负责**逻辑**：排序（`RefreshGlobalOrder`）、命中测试（`HitTest(Vector2)`、
`HitTest()`）、焦点（`FocusTest()`、`IsFocusedOnInput()`）、绘制（`RenderTick`）。

`GauntletLayer`（`TaleWorlds.Engine.GauntletUI`）继承它，加上**渲染**能力：

| 成员 | 作用 |
| --- | --- |
| `LoadMovie(string movieName, ViewModel dataSource)` | 按名字加载 XML 电影并绑定数据源，返回 `GauntletMovieIdentifier` |
| `GetMovieIdentifier(string movieName)` | 查已加载的电影标识，不重新加载 |
| `ReleaseMovie(GauntletMovieIdentifier)` | 释放。**与 `LoadMovie` 成对** |
| `UIContext` | 底层渲染上下文 |
| `TwoDimensionView` / `TwoDimensionPlatform` | 2D 绘制目标 |
| 构造函数 `(string name, int localOrder, bool shouldClear)` | `localOrder` 决定同屏内的上下顺序 |
| `GamepadNavigationContext` | 手柄焦点导航 |

`OnResourceRefreshBegin/End` 是资源热重载钩子，模组一般不用碰。

## ViewModel：属性通知

`TaleWorlds.Library.ViewModel` 是 `abstract class`，实现了 `INotifyPropertyChanged`。
核心是 `SetField`：

```csharp
public class MyScreenVM : ViewModel
{
    private int _gold;
    private bool _isEnabled;

    // 读属性直接读字段，不要包一层 GetGold()
    public int Gold => _gold;
    public bool IsEnabled => _isEnabled;

    public void SetGold(int value) => SetField(ref _gold, value, nameof(Gold));
    public void Enable(bool value) => SetField(ref _isEnabled, value, nameof(IsEnabled));

    // 界面回调（XML 里的 Command="OnIncrementClicked"）
    public void OnIncrementClicked()
    {
        SetGold(Gold + 1);
    }

    public override void OnFinalize()
    {
        base.OnFinalize();
    }
}
```

写 ViewModel 的五条硬规则：

1. **属性名要和 XML 里的绑定路径一字不差。** 路径写错不会报错，只是界面不动。
2. **用 `SetField` / `OnPropertyChanged`，不要自己写 `PropertyChanged?.Invoke`。**
   前者会正确填 `[CallerMemberName]`。
3. **`OnPropertyChangedWithValue` 有 8 个重载**（`class` / `bool` / `int` / `float` / `uint` /
   `Color` / `double` / `Vec2`），选匹配的那个，重载本身就是在帮引擎决定怎么增量刷新。
4. **命令是 public 无参或简单参数方法**，名字直接写在 XML 的 `Command` 属性上。
   `ViewModel.ExecuteCommand(string, object[])` 负责分发。
5. **`RefreshValues()` / `RefreshPropertyAndMethodInfos()` 只在调试期用。**
   生产代码每帧调一次会明显掉帧。

## 端到端例子

```csharp
// 1) ViewModel：只有数据和命令
public class InventoryScreenVM : ViewModel
{
    private int _selectedSlot = -1;
    public int SelectedSlot => _selectedSlot;

    public void OnSlotClicked(int slot) => SetField(ref _selectedSlot, slot, nameof(SelectedSlot));
    public void OnSortClicked() { /* 重排底层列表，然后刷新 */ RefreshValues(); }
}

// 2) ScreenLayer：只管加载和生命周期
public class InventoryGauntletLayer : GauntletLayer
{
    public InventoryGauntletLayer(string name, int order)
        : base(name, order, shouldClear: true)
    {
        var vm = new InventoryScreenVM();
        var id = LoadMovie("InventoryScreen", vm);   // movie name 来自 XML 资源路径
        _movieId = id;
    }
    private GauntletMovieIdentifier _movieId;

    protected override void OnFinalize()
    {
        ReleaseMovie(_movieId);   // 与 LoadMovie 成对
        base.OnFinalize();
    }
}

// 3) ScreenBase：只管生命周期与图层集合
public class InventoryScreen : ScreenBase
{
    public InventoryScreen()
    {
        Layers.Add(new InventoryGauntletLayer("main", 0));
    }

    protected override void OnFinalize()
    {
        base.OnFinalize();
    }
}

// 4) 挂上去（从 SubModule 的战役回调里）
ScreenManager.PushScreen(new InventoryScreen());
// 用完
ScreenManager.PopScreen();
```

## 常见症状 → 病因

| 症状 | 先查 |
| --- | --- |
| 界面完全不出现 | `PushScreen` 没调到？`ScreenManager.TopScreen` 是不是你的？ |
| 界面出现但点不动 | 上一个屏幕没 `PopScreen`，还在吃输入 |
| 数据变了界面不变 | 绑定路径和属性名是否一致；`SetField` 的第三个参数是否传了 |
| 存档读回后界面错乱 | `ViewModel` 是不是被跨存档复用了。ViewModel 不进存档，每次进界面新建 |
| 切换界面后残留 | `OnFinalize` 没 `ReleaseMovie` / 没退订事件 |
| 高分辨率下错位 | 用 `ScreenManager.UsableArea` 和 `Scale`，别写死像素 |

## 参见

- ↔ [架构总览](../) · [模块系统](../module-system) —— 界面该在哪个回调里挂
- ↘ [SDK 总览](../sdk-overview) —— 为什么 `GauntletLayer` 在 `engine` 目录而 `ScreenManager` 在 `gui`
- ↑ [GUI](../../api/gui/) · [ViewModel](../../api/viewmodel/) · [Engine](../../api/engine/)