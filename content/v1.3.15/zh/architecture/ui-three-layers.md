---
title: "UI 三层架构 — ScreenManager / GauntletLayer / ViewModel"
description: "解释 Bannerlord 界面栈如何由 ScreenManager 统一驱动、Screen 通过 AddLayer 包含若干 Layer、GauntletLayer 再把 ViewModel 绑定到 Gauntlet 影片，并给出可编译的接入步骤与心智模型。"
---

# UI 三层架构

**Namespace:** `TaleWorlds.ScreenSystem` · `TaleWorlds.Engine.GauntletUI` · `TaleWorlds.Library`  
**Module:** `TaleWorlds.ScreenSystem` · `TaleWorlds.Engine.GauntletUI` · `TaleWorlds.Library`  
**Type:** 架构主题页 — 跨 `ScreenManager` / `ScreenBase` / `ScreenLayer` / `GauntletLayer` / `ViewModel`  
**源文件：** `TaleWorlds.ScreenSystem/ScreenManager.cs` · `TaleWorlds.ScreenSystem/ScreenBase.cs` · `TaleWorlds.ScreenSystem/ScreenLayer.cs` · `TaleWorlds.Engine.GauntletUI/GauntletLayer.cs` · `TaleWorlds.Library/ViewModel.cs`  
**行号口径：** 本页所有 `X.cs:N` 均指 **v1.3.15** 源码树（`bannerlord-1.3.15/`）。

> 节 schema：本页采用规范七节（概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航）。

## 概述

这套 UI 体系把「谁拥有界面」「谁负责画界面」「谁提供数据」拆成三层，三层之间是严格的单向依赖。最外层是屏幕栈：一个全局静态的栈管理器只认栈顶那一屏，每帧只问栈顶要一次更新，栈顶再把它名下的所有图层轮流问一遍，所以同一时刻真正参与更新的只有当前屏的图层集合，切屏就是一次压栈或弹栈。中间层是屏幕与图层：一屏是一个抽象基类，它自己不画任何东西，只持有一个有序的图层集合并提供挂载、摘除入口；图层才是真正被逐帧驱动的单位，游戏逻辑图层与影片图层都从同一个抽象基类派生。最内层是数据：一个可观察的视图模型只暴露属性和变更通知，它不认识任何控件，控件通过数据绑定订阅它。于是依赖方向只能是栈管理器 → 屏幕 → 图层 → 视图模型，反向一律不允许。理解这条主线后，写界面就退化成三件事：造一个屏幕、往里塞图层、给影片图层喂一个视图模型。

## 心智模型

**第一件事：这是包含关系，不是三个平级实现。** 屏幕栈、屏幕、图层听起来像三层并列的东西，实际上只有栈管理器是「管理者」，屏幕和图层是「被管理者」，而且屏幕与图层之间是整体与部分的关系。一个屏幕对象内部持有一个图层列表，图层必须通过 `ScreenBase.cs:333` 的 `AddLayer` 挂到某个屏幕上才有意义；脱离屏幕的图层不会被任何人驱动。反过来图层也不关心自己挂在哪个屏幕上，它只实现统一的逐帧接口。这种包含关系带来的直接好处是：切屏时不需要逐个注销监听器，只要把屏幕弹出栈，它连同整组图层一起失去被驱动的机会，生命周期天然跟随栈。

**第二件事：完整 Tick 链是固定的。** 每帧从 `ScreenManager.cs:318` 的 `Tick(float dt)` 开始，它只对栈顶那一屏调用帧更新；栈顶屏幕再遍历自己持有的图层，逐个调用图层的 `Tick`。也就是说更新顺序由「栈的纵向深度」和「图层在屏幕内的横向顺序」两个维度共同决定，前者优先级更高：栈顶屏的所有图层都跑完，才轮不到下面那屏的任何图层。渲染走的是同一套结构的渲染钩子，逻辑更新与画面更新因此天然分离。想插入自定义逻辑，正确做法是新建一个图层挂到屏幕上，而不是去改栈管理器。

**第三件事：三层各自的时机与禁忌。** 栈管理器层只在「整个界面要切走」时用，例如从大地图进战役、从战役退回主菜单；它管的是互斥的全局状态，不要拿它做同屏叠加的面板。屏幕层用于「一整套自洽的界面」，它拥有初始化和收尾两个受保护的虚方法，是放置一次性资源申请与释放的地方；图层层用于「界面里的一个可独立开关的部件」，比如小地图、任务提示、对话面板，需要频繁显隐时用图层而不是反复压栈。视图模型层用于「纯数据与状态」，它应当可以在没有界面的情况下被构造和测试。依赖方向上，栈管理器依赖屏幕抽象，屏幕依赖图层抽象，影片图层依赖视图模型接口；任何反向引用都会让切屏时的清理顺序变成泥潭。出错时的表现也很有辨识度：栈操作错误通常表现为界面卡死或重复叠加，图层挂载错误表现为该部件整帧不更新，绑定错误则表现为界面显示旧数据或空引用。

**第四件事：为什么视图模型不能反向持有控件。** 一旦视图模型持有控件引用，数据层就依赖了表现层，控件的生命周期（随屏幕弹出栈而失效）会反过来污染数据层，切屏时就会出现悬空引用和重复订阅。正确做法是视图模型只发变更通知，由绑定层把新值推给控件；`ViewModel.cs:249` 与 `ViewModel.cs:263` 提供的就是这个通知能力。这样视图模型可以被单元测试直接驱动，也可以在界面重建后重新绑定到一套全新控件上而不残留任何状态。

**最后必须纠正旧文档的三处错误。** 其一，栈管理器是静态类，不存在实例属性，因此 `ScreenManager.Instance.PushScreen(...)` 这种写法编译不过，正确写法是 `ScreenManager.PushScreen(...)`。其二，屏幕的初始化与收尾钩子是受保护的虚方法，外部不能直接调用，只能在派生类里重写。其三，影片图层没有设置视图模型的方法，视图模型是在加载影片时作为参数一起传进去的，加载即绑定。这三处错误是同一类误解的三个表现：把分层协作误读成了可以随意互调的平级工具。

## 怎么用

1. 从屏幕基类派生自己的屏幕类，重写受保护的初始化钩子 `ScreenBase.cs:264`，把一次性资源申请和图层搭建都放在这里；对应的收尾钩子在 `ScreenBase.cs:269`，成对释放。
2. 在初始化里构造一个影片图层，构造函数签名见 `GauntletLayer.cs:86`，需要给出图层名和它在屏幕内的排序值，排序值决定同一屏内多个图层的先后次序。
3. 构造自己的视图模型实例，把界面要显示的状态都放进去，视图模型的通知能力来自 `ViewModel.cs:249`。
4. 用 `GauntletLayer.cs:130` 的加载方法把影片名和视图模型一起交给图层，加载动作同时完成绑定，之后视图模型发出的变更会被推送到影片里的控件。
5. 用 `ScreenBase.cs:333` 把这个图层挂到当前屏幕上，挂载之后它才会进入每帧更新序列。
6. 用 `ScreenManager.cs:608` 把整个屏幕压入栈，它立刻成为栈顶并开始接收帧更新；退出时用 `ScreenManager.cs:633` 弹栈，控制权交回下一屏。
7. 屏幕收尾时用 `GauntletLayer.cs:154` 释放影片，解除绑定并回收影片资源；摘除图层则用 `ScreenBase.cs:361`。

## 关键成员

| 符号 | file:行号 | 它做什么 |
| --- | --- | --- |
| `ScreenManager` | `ScreenManager.cs:14` | 静态的屏幕栈持有者，全局唯一入口，所有切屏操作都经过它，因此不需要也不允许创建实例。 |
| `ScreenManager.TopScreen` | `ScreenManager.cs:124` | 暴露当前栈顶屏幕的只读属性，供外部查询「现在界面处于什么状态」，注意它只有 getter。 |
| `ScreenManager.Tick` | `ScreenManager.cs:318` | 每帧的总入口，只驱动栈顶屏幕，是整条更新链的起点。 |
| `ScreenManager.PushScreen` | `ScreenManager.cs:608` | 把一屏压入栈顶，原栈顶随即停止接收帧更新，新屏开始初始化。 |
| `ScreenManager.PopScreen` | `ScreenManager.cs:633` | 弹出栈顶，控制权交回下一屏，是退出当前界面的唯一正确姿势。 |
| `ScreenBase` | `ScreenBase.cs:9` | 屏幕抽象基类，定义图层容器与生命周期钩子，派生它才能接入屏幕栈。 |
| `ScreenBase.Layers` | `ScreenBase.cs:333` | 只读的图层集合，外部可查询当前屏挂了哪些图层，但增删要走专用方法。 |
| `ScreenBase.OnInitialize` | `ScreenBase.cs:264` | 受保护的初始化虚方法，屏幕入栈后调用，是搭建图层的标准位置。 |
| `ScreenBase.OnFinalize` | `ScreenBase.cs:269` | 受保护的收尾虚方法，与初始化成对，用于释放一次性资源。 |
| `ScreenBase.AddLayer` | `ScreenBase.cs:333` | 把一个图层挂到本屏，挂载后图层进入每帧更新序列。 |
| `ScreenBase.RemoveLayer` | `ScreenBase.cs:361` | 把图层从本屏摘除，用于界面运行中动态关闭某个部件。 |
| `ScreenLayer` | `ScreenLayer.cs:10` | 图层抽象基类，游戏逻辑图层与影片图层共同的父类，实现可比较接口以支持排序。 |
| `ScreenLayer.Name` | `ScreenLayer.cs:20` | 图层名，只读，用于调试与日志定位，不参与更新逻辑。 |
| `ScreenLayer.Tick` | `ScreenLayer.cs:107` | 受保护的逐帧逻辑钩子，自定义游戏逻辑图层时重写它。 |
| `ScreenLayer.RenderTick` | `ScreenLayer.cs:117` | 受保护的逐帧渲染钩子，与逻辑钩子分离，便于独立控制绘制时机。 |
| `ScreenLayer.Update` | `ScreenLayer.cs:122` | 受保护的输入处理钩子，接收上一帧的按键列表，是图层级输入拦截的入口。 |
| `GauntletLayer` | `GauntletLayer.cs:15` | 影片图层，把 Gauntlet 影片接入图层体系，是绝大多数界面实际使用的图层类型。 |
| `GauntletLayer..ctor` | `GauntletLayer.cs:86` | 构造影片图层，需要图层名、排序值与是否清屏三个参数。 |
| `GauntletLayer.LoadMovie` | `GauntletLayer.cs:130` | 按影片名加载影片并同时绑定视图模型，加载即绑定，没有单独的绑定步骤。 |
| `GauntletLayer.ReleaseMovie` | `GauntletLayer.cs:154` | 释放影片并解除绑定，必须在收尾阶段调用以避免资源泄漏。 |
| `ViewModel.OnPropertyChanged` | `ViewModel.cs:249` | 触发属性变更通知，可借助调用方成员名自动取属性名，是绑定推送的起点。 |
| `ViewModel.OnPropertyChangedWithValue` | `ViewModel.cs:263` | 带值的通知重载，值类型属性用它可避免装箱并直接推送新值。 |

## 真实示例

```csharp
using System.Collections.Generic;
using TaleWorlds.Engine.GauntletUI;
using TaleWorlds.Library;
using TaleWorlds.ScreenSystem;

// 视图模型：只放数据与通知，不引用任何控件
public class MyPanelViewModel : ViewModel
{
    private string _title = "未命名";

    public string Title
    {
        get => _title;
        set
        {
            if (_title == value) return;
            _title = value;
            OnPropertyChanged();                 // ViewModel.cs:249
        }
    }

    public void Refresh(string newTitle)
    {
        Title = newTitle;
    }
}

// 屏幕：拥有图层，负责搭建与释放
public class MyScreen : ScreenBase
{
    private GauntletLayer _layer;
    private MyPanelViewModel _viewModel;

    protected override void OnInitialize()               // ScreenBase.cs:264
    {
        base.OnInitialize();
        _viewModel = new MyPanelViewModel();
        _viewModel.Refresh("已就绪");

        _layer = new GauntletLayer("MyLayer", 100);      // GauntletLayer.cs:86
        _layer.LoadMovie("MyMovie", _viewModel);         // GauntletLayer.cs:130
        AddLayer(_layer);                                 // ScreenBase.cs:333
    }

    protected override void OnFinalize()                 // ScreenBase.cs:269
    {
        if (_layer != null)
        {
            _layer.ReleaseMovie();                        // GauntletLayer.cs:154
            RemoveLayer(_layer);                          // ScreenBase.cs:361
            _layer = null;
        }
        _viewModel = null;
        base.OnFinalize();
    }
}

// 入口：用静态方法压栈，不要写 ScreenManager.Instance
public static class MyScreenLauncher
{
    public static void Open()
    {
        ScreenManager.PushScreen(new MyScreen());         // ScreenManager.cs:608
    }

    public static void Close()
    {
        ScreenManager.PopScreen();                        // ScreenManager.cs:633
    }
}
```

## 参见

- [GameModel 装饰模式](../gamemodel-decorator)
- [Mission 生命周期](../mission-lifecycle)
- [ViewModel 类页](../../api/core-extra/ViewModel)
- [ScreenManager 类页](../../api/gui/ScreenManager)
- [GauntletLayer 类页](../../api/engine/GauntletLayer)

## 导航

- ↑ Parent: [..](../)
- ↔ Sibling: [GameModel 装饰模式](../gamemodel-decorator) | [存档对象图](../save-object-graph) | [Action 家族](../action-family)
- 相关类页: [ScreenBase](../../api/campaign-ext/ScreenBase) | [ScreenLayer](../../api/campaign-ext/ScreenLayer)
