---
title: "ScreenLayer"
description: "可视层的抽象基类：承载一个有序绘制位置、一份输入上下文与一组引擎回调钩子；不带任何具体渲染实现。"
---
# ScreenLayer

**Namespace:** `TaleWorlds.ScreenSystem`
**Module:** `TaleWorlds.ScreenSystem`
**Type:** `public abstract class ScreenLayer : IComparable`
**Source:** `TaleWorlds.ScreenSystem/ScreenLayer.cs`

## 概述

`ScreenLayer` 是「一段有独立绘制顺序与输入权限的界面内容」的抽象形状。地图界面、任务结算、加载画面都是它的派生类；[ScreenBase](../ScreenBase) 的 `Layers` 集合装的元素类型就是它。这个基类本身**不画任何一个像素**——它提供的全部内容是三样东西：一个构造期就定死的 `Name`（全局重排与 `SetLayerCategoriesState` 系列都靠名字匹配）、一个 `InputRestrictions`（构造时用 `localOrder` 生成，层叠顺序由它决定）、以及一组 `protected internal virtual` 的帧回调钩子。真正往屏幕上填内容的实现是跨模块的 [GauntletLayer](../../engine/GauntletLayer)（命名空间 `TaleWorlds.Engine.GauntletUI`），它才是加载 XML prefab 的那一层。

派生类与 `ScreenManager` 之间没有直接调用关系：`HandleActivate` / `HandleDeactivate` / `HandleFinalize` / `HandleGainFocus` / `HandleLoseFocus` 全是 `internal`，只能由引擎侧的栈逻辑驱动。mod 能直接调用的公开方法只有 `DrawDebugInfo` / `EarlyProcessEvents` / `ProcessEvents` / `HitTest` / `FocusTest` / `IsFocusedOnInput` / `UpdateLayout` / `CompareTo`，其余一切都要通过推屏来触发。

## 心智模型

把一个 layer 想成「一段挂在屏幕上、有自己排队号的摊位」。构造时给它一个 `name` 和一个 `localOrder`（同 `localOrder` 的层靠 `InputRestrictions.Id` 这个 `Guid` 再排先后），此后 `Name` 永不变——这是全局重排和按类名开关层能成立的前提。

生命周期完全由 `ScreenManager` 的栈驱动，顺序是：界面 `AddLayer` 收进列表 → 界面激活时倒序 `HandleActivate`（置 `IsActive = true`，调 `OnActivate`，广播静态事件 `OnLayerActiveStateChanged`）→ 每帧依次 `Tick` / `LateUpdate` / `RenderTick` / `Update`（接键号列表的那个重载）→ 焦点变化时 `HandleGainFocus` / `HandleLoseFocus`（两者都先 `Input.ResetLastDownKeys()`）→ 失活走 `HandleDeactivate`（`OnDeactivate` → `IsActive = false` → `ScreenManager.TryLoseFocus(this)` → 广播同一静态事件）→ 移除或界面销毁时 `HandleFinalize`。

输入屏蔽是三段式的，这条链最容易看漏：`EarlyProcessEvents(handledInputs)` 先把本帧上层声称吞掉的输入类型记进 `_usedInputs`，`ProcessEvents()` 再据此改写 `Input` 上的 `IsKeysAllowed` / `IsMouseButtonAllowed` / `IsMouseWheelAllowed`。也就是说这三个开关不是你设的，是上一层算出来的；`ScreenManager` 用它们决定要不要把键盘 / 鼠标事件往这个 layer 上送。

最关键的一点：**基类的 `HitTest` / `FocusTest` / `IsFocusedOnInput` 全部 `return false`。** 不重写它们，layer 在鼠标命中测试里等于空气，画得再好看也点不到。

## 关键成员

### 构造与身份

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| 构造函数 | `protected ScreenLayer(string name, int localOrder)` | 唯一入口。`name` 赋给 `Name` 且此后不可改；`localOrder` 交给 `new InputRestrictions(localOrder)` 决定层叠顺序。同时建好 `Input = new InputContext()`，把 `LastActiveState` 置 true、`IsActive` 置 false、`IsFocusLayer` 置 false、`ActiveCursor` 置 `CursorType.Default`、`_usedInputs` 置 `InputType.None` |
| `Name` | `public string Name { get; private set; }` | 构造期定死的层名。[ScreenBase](../ScreenBase) 的 `SetLayerCategoriesState*` 系列就是拿它做字符串匹配，所以别指望运行时改名 |
| `OnLayerActiveStateChanged` | `public static event Action<ScreenLayer>` | **静态**事件，任何 layer 激活或失活都会带参数触发一次。做「全屏遮罩随任意层开合而淡入淡出」这类联动时订阅它，而不是去遍历 `ScreenManager.SortedLayers` |

### 状态

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `IsActive` | `public bool IsActive { get; private set; }` | 是否已激活。由 `HandleActivate` / `HandleDeactivate` 维护，私有 setter 说明 mod 改不了 |
| `IsFinalized` | `public bool IsFinalized { get; private set; }` | 是否已 finalize。**注意 `OnActivate` 的默认实现会把它置回 false**，所以「已 finalize」不是永久状态；真正的单调标记是 `HandleFinalize` 内部那一句重复 finalize 断言 |
| `LastActiveState` | `public bool LastActiveState { get; set; }` | 上一帧的激活态，构造函数里初值为 **true**。给需要对比帧间变化的自定义层用 |
| `IsFocusLayer` | `public bool IsFocusLayer { get; set; }` | 该层是否允许接收输入焦点。是 `public set`，但最终聚焦由 `ScreenManager.TrySetFocus` 决定 |
| `ActiveCursor` | `public CursorType ActiveCursor { get; set; }` | 鼠标悬停该层时显示的光标类型，默认 `CursorType.Default` |
| `ScreenOrderInLastFrame` | `public int ScreenOrderInLastFrame { get; internal set; }` | 上一帧的全局绘制序号，**setter 是 internal**，只能读 |
| `IsHitThisFrame` | `public bool IsHitThisFrame { get; internal set; }` | 本帧是否被命中测试命中，**setter 是 internal**。`GauntletLayer` 这类实现依赖它判断「鼠标是否在自己身上」 |

### 输入与顺序

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Input` | `public InputContext Input { get; private set; }` | 本层的输入上下文。`IsKeysAllowed` / `IsMouseButtonAllowed` / `IsMouseWheelAllowed` / `IsControllerAllowed` 会被 `ProcessEvents` 改写，mod 只该读 |
| `InputRestrictions` | `public InputRestrictions InputRestrictions { get; private set; }` | 构造期生成的层叠顺序记录。`Order` 相同则用 `Id`（一个 `Guid`）破平 |
| `InputUsageMask` | `public InputUsageMask InputUsageMask` | 只读转发到 `InputRestrictions.InputUsageMask`。手柄 / 键鼠的粗粒度屏蔽声明 |
| `Scale` | `public float Scale` | 只读转发到 `ScreenManager.Scale`，即全局 UI 缩放。所有像素尺寸都该乘它 |
| `UsableArea` | `public Vec2 UsableArea` | 只读转发到 `ScreenManager.UsableArea`，可用的二维绘制区域。布局定位以它为基准 |

### 输入处理三段式

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `EarlyProcessEvents` | `public virtual void EarlyProcessEvents(InputType handledInputs)` | 帧内**早期**由 `ScreenManager` 调用，把上层声明已处理的输入类型存进 `_usedInputs`。重写时记得调基类，否则屏蔽链断掉 |
| `ProcessEvents` | `public virtual void ProcessEvents()` | 帧内**稍后**调用，把 `_usedInputs` 拆成三个 `Is*Allowed` 布尔写回 `Input`。**它不设置 `IsControllerAllowed`**——手柄权限另有来源 |
| `_usedInputs` | `protected InputType _usedInputs { get; set; }` | 上一段的暂存。`protected`，派生类可读可写，但 `ProcessEvents` 是唯一消费者 |

### 命中测试与焦点

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `HitTest` | `public virtual bool HitTest(Vector2 position)` | 带坐标的命中测试。**基类 `return false`**，不重写就永远不接收鼠标 |
| `HitTest` | `public virtual bool HitTest()` | 无参重载，基类同样 `return false`。给只关心「有没有被点到」的粗粒度实现用 |
| `FocusTest` | `public virtual bool FocusTest()` | 判断本层能否在当前输入模式下成为焦点层，基类 `return false` |
| `IsFocusedOnInput` | `public virtual bool IsFocusedOnInput()` | 判断焦点是否**已经**落在本层的某个输入元素上，基类 `return false` |

### 派生类可重写的帧钩子

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Tick` | `protected internal virtual void Tick(float dt)` | 帧更新第一步 |
| `LateUpdate` | `protected internal virtual void LateUpdate(float dt)` | 帧更新第二步，在 `Tick` 之后 |
| `RenderTick` | `protected internal virtual void RenderTick(float dt)` | 渲染阶段，提交绘制指令 |
| `Update` | `protected internal virtual void Update(IReadOnlyList<int>)` | 帧末，按参数给的上帧键号列表更新可见状态。参数名在源码里是「最后按下键」的复数形式，此处按类型标注 |
| `OnActivate` | `protected virtual void OnActivate()` | 激活。**基类实现含一条实际副作用：把 `IsFinalized` 置 false** |
| `OnDeactivate` | `protected virtual void OnDeactivate()` | 失活。基类空实现 |
| `OnGainFocus` | `protected internal virtual void OnGainFocus()` | 获得输入焦点。基类空实现；`Input.ResetLastDownKeys()` 已由 `HandleGainFocus` 先执行 |
| `OnLoseFocus` | `protected internal virtual void OnLoseFocus()` | 失去输入焦点 |
| `OnFinalize` | `protected virtual void OnFinalize()` | 销毁前调一次。资源释放放这里 |
| `RefreshGlobalOrder` | `protected internal virtual void RefreshGlobalOrder(ref int currentOrder)` | 全局重排时由引擎回调，`ref` 出参是当前游标 |

### 其余公开面

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `UpdateLayout` | `public virtual void UpdateLayout()` | 分辨率或 UI 缩放变化时的布局重算。基类空实现 |
| `DrawDebugInfo` | `public virtual void DrawDebugInfo()` | 把顺序、是否可聚焦、是否已聚焦、键鼠轮各自是否放行这几行画到屏幕上。调试输入屏蔽问题时的第一手工具 |
| `OnOnScreenKeyboardDone` | `public virtual void OnOnScreenKeyboardDone(string inputText)` | 屏幕键盘输入完成后的回调，基类空实现 |
| `OnOnScreenKeyboardCanceled` | `public virtual void OnOnScreenKeyboardCanceled()` | 屏幕键盘被取消后的回调 |
| `CompareTo` | `public int CompareTo(object obj)` | 实现非泛型 `IComparable`。先比 `InputRestrictions.Order`，相等再比 `InputRestrictions.Id`。参数不是 `ScreenLayer` 时返回 **1**（不是抛异常），调用方排序时会拿到无意义结果 |

## 怎么用

### 怎么拿到它

`ScreenLayer` 是 `TaleWorlds.ScreenSystem/ScreenLayer.cs:10` 的 `public abstract class ScreenLayer : IComparable`——**实现 `IComparable` 是因为层叠顺序靠排序决定**。

构造器是 `protected ScreenLayer(string name, int localOrder)`（`:93`），**外部不能 new 抽象类**。它一次性建好了三样东西：`this.InputRestrictions = new InputRestrictions(localOrder);`、`this.Input = new InputContext();`、`this.Name = name;`，并把所有状态位初始化为安全的默认值（`IsFinalized = false`、`IsActive = false`、`IsFocusLayer = false`、`_usedInputs = InputType.None`、`ActiveCursor = CursorType.Default`，`:94-102`）。

层实例的归属是 **Screen**：`ScreenBase.Layers`。取当前栈顶用 `ScreenManager.TopScreen`（`ScreenManager.cs:124`），排序结果在 `ScreenManager.SortedLayers`（`ScreenManager.cs:82`）。全局层是另一条路：`ScreenManager.AddGlobalLayer(GlobalLayer layer, bool isFocusable)`（`ScreenManager.cs:208`）与 `RemoveGlobalLayer`（`:199`）。

你要覆写的钩子分两类：`protected internal virtual` 的 `Tick(float dt)`（`:107`）、`LateUpdate(float dt)`（`:112`）、`RenderTick(float dt)`（`:117`）、`Update(IReadOnlyList<int> lastKeysPressed)`（`:122`）、`OnGainFocus()`（`:169`）、`OnLoseFocus()`（`:173`）；以及 `protected virtual` 的 `OnActivate()`（`:153`）、`OnDeactivate()`（`:159`）。

### 典型用法

```csharp
using TaleWorlds.ScreenSystem;

// 派生一个 HUD 层
public class MyHudLayer : ScreenLayer              // ScreenLayer.cs:10
{
    public MyHudLayer(string name, int localOrder) : base(name, localOrder) { }

    protected internal override void Tick(float dt)      // :107
    {
        // 每帧输入；Input 是构造器建好的（:95），类型是 TaleWorlds.InputSystem.InputContext
        if (Input.IsKeyDown(InputKey.T)) { /* ... */ }                // InputSystem/InputContext.cs:504
        bool tapped = Input.IsKeyPressed(InputKey.Enter);              // :521
    }

    protected internal override void Update(IReadOnlyList<int> lastKeysPressed)   // :122
    {
        base.Update(lastKeysPressed);
    }

    protected override void OnActivate()                  // :153，注意基类会重置 IsFinalized=false
    {
        base.OnActivate();                               // :154-155
    }

    protected override void OnDeactivate() { }           // :159
}

// 挂到当前 Screen 的 Layers；层序由 ctor 的 localOrder 决定
ScreenBase top = ScreenManager.TopScreen;                // ScreenManager.cs:124
var layer = new MyHudLayer("my_hud", localOrder: 0);
top.Layers.Add(layer);

// 全局层（跨 Screen）
ScreenManager.AddGlobalLayer(globalLayer, isFocusable: false);   // ScreenManager.cs:208

// 读全局状态
ScreenLayer focused = ScreenManager.FocusedLayer;        // ScreenManager.cs:129
bool hit = layer.IsHitThisFrame;                         // ScreenLayer.cs:70，setter 是 internal
```

### 最容易踩的坑

**覆写 `OnActivate()` / `OnDeactivate()` 时不调 `base`。** `OnActivate()`（`:153-156`）的基类实现不是空的——它做 `this.IsFinalized = false;`。你的子类里如果直接写 `protected override void OnActivate() { /* 自己的逻辑 */ }`，那 `IsFinalized` 就永远停在 `HandleFinalize()`（`:165`）设的 true 上。后果是这个层的所有输入被当作「已关闭」处理，`Input`/`InputRestrictions` 完全不响应——现象是「这个 HUD 层显示了但点不动」。

第二个坑是那几个 tick 钩子的可见性是 **`protected internal`**，不是纯 `protected` 也不是 `public`。你的子类能覆写，但**外部代码无法从你这里直接调用它们**（`Tick` 由 `ScreenManager.Tick(float dt)`（`ScreenManager.cs:312`）驱动、`LateTick` 由 `ScreenManager.LateTick`（`:369`）驱动）。不要在别处写 `myLayer.Tick(dt)`，编译不过是对的。

第三，`IsHitThisFrame`（`:70`）的 setter 是 **internal**——每帧的命中状态由输入系统写入，你只能读。而 `IsActive`（`:65`）、`IsFinalized`（`:60`）的 setter 是 private，只有 `HandleActivate` / `HandleDeactivate` / `HandleFinalize` 这几个 internal 方法会改。**不要用这些布尔量推断「我的层现在可见」**——层是否真的在渲染栈里，看 `ScreenManager.SortedLayers`（`ScreenManager.cs:82`）。

## 真实示例

最小可视层——它只负责顺序、命中与一个演示用的命中区域：

```csharp
// 读者侧演示层，不是游戏 API；只示意 ScreenLayer 派生类必须自己实现的东西
public class TrimBandLayer : ScreenLayer
{
    private readonly Vec2 _size;

    public TrimBandLayer() : base("trim_band", 12)
    {
        _size = new Vec2(400f, 28f);
    }

    public bool Visible { get; set; }

    // 基类返回 false，不重写就永远收不到鼠标
    public override bool HitTest(Vector2 position)
    {
        return Visible && position.X >= 0f && position.Y >= 0f &&
               position.X <= _size.X && position.Y <= _size.Y;
    }

    public override bool FocusTest()
    {
        return Visible;
    }

    public override void UpdateLayout()
    {
        _size.X = UsableArea.X;
    }

    protected override void OnFinalize()
    {
        Visible = false;
    }
}
```

挂进界面并读它的输入屏蔽状态：

```csharp
// 读者侧演示界面，不是游戏 API
public class ProvisionScreen : ScreenBase
{
    private TrimBandLayer _band;

    protected override void OnInitialize()
    {
        _band = new TrimBandLayer();
        AddLayer(_band);
    }

    protected override void OnReady()
    {
        _band = FindLayer<TrimBandLayer>();
        _band.Visible = true;
    }

    protected override void OnFrameTick(float dt)
    {
        if (_band == null)
        {
            return;
        }

        // 输入屏蔽状态由 ScreenManager 经 ProcessEvents 写好，这里只读
        bool typingBlocked = !_band.Input.IsKeysAllowed;
        bool wheelBlocked = !_band.Input.IsMouseWheelAllowed;

        if (typingBlocked && wheelBlocked)
        {
            _band.Visible = false;
        }
    }
}
```

跟随任意层的开合做联动，靠的是那个静态事件：

```csharp
// 读者侧演示监听器，不是游戏 API
public class OverlayFadeWatcher
{
    private int _activeLayerCount;

    // ScreenLayer.OnLayerActiveStateChanged 是静态事件，任何层开合都会触发
    public void Watch()
    {
        ScreenLayer.OnLayerActiveStateChanged += CountLayer;
    }

    public void Unwatch()
    {
        ScreenLayer.OnLayerActiveStateChanged -= CountLayer;
    }

    public int ActiveLayerCount => _activeLayerCount;

    private void CountLayer(ScreenLayer layer)
    {
        if (layer.IsActive)
        {
            _activeLayerCount++;
        }
        else
        {
            _activeLayerCount--;
        }
    }
}
```

## 风险与边界

- **基类的三个命中测试都返回 false。** `HitTest(Vector2)` / `HitTest()` / `FocusTest()` / `IsFocusedOnInput` 全是空壳。不重写 `HitTest`，鼠标永远穿过去；不重写 `FocusTest`，键盘输入到不了。
- **`IsFinalized` 不是单调的。** `HandleFinalize` 把它置 true，但 `OnActivate` 的默认实现又置回 false。别拿它当「这个对象还活着吗」的判据。
- **重复 finalize 会断言。** `HandleFinalize` 在已 finalize 时 `Debug.FailedAssert` 后**静默 return**，不会抛异常也不会重跑 `OnFinalize`。表现为清理代码「莫名其妙没执行」。
- **`Name` 构造后不可变。** [ScreenBase](../ScreenBase) 的 `SetLayerCategoriesState` / `SetLayerCategoriesStateAndToggleOthers` / `SetLayerCategoriesStateAndDeactivateOthers` 靠 `IndexOf(layer.Name) >= 0` 匹配，改名会让这些调用静默失配——而 `Name` 的 setter 本身就是 private。
- **输入开关不是你设的。** `Input.IsKeysAllowed` 等三个布尔由 `ProcessEvents` 从 `_usedInputs` 覆写，`IsControllerAllowed` 则完全不在这条链上。想控制输入，声明 `InputRestrictions` / `InputUsageMask`，别直接写 `Input` 的属性。
- **`CompareTo` 不做类型校验。** 参数不是 `ScreenLayer` 时返回 1 而不是抛异常，`IComparable` 的契约被打破；只在引擎内部的排序里用它是安全的，拿它给别的类型排序会得到错序。
- **`ScreenOrderInLastFrame` 与 `IsHitThisFrame` 只读。** setter 是 `internal`，mod 侧无法写入，任何依赖它们的逻辑都要能容忍它们不更新。
- **`Scale` 与 `UsableArea` 是全局单值。** 它们转发到 [ScreenManager](../ScreenManager) 的静态属性，不是本层私有的缩放；两个分辨率不同的 layer 拿到的是同一个数。
- **所有帧钩子都在渲染主线程。** `Tick` / `LateUpdate` / `RenderTick` / `Update` 里不要启动会回调进游戏状态的后台任务。
- **静态事件不随界面销毁而清。** `OnLayerActiveStateChanged` 是静态的，界面 pop 掉不会替你退订。持有 mod 单例的监听器必须自己在 `OnFinalize` 里 `-=`。
- **实现类在别的模块。** [GauntletLayer](../../engine/GauntletLayer) 的命名空间是 `TaleWorlds.Engine.GauntletUI`，不是 `TaleWorlds.ScreenSystem`。`using` 缺一个就编译不过。

## 跨版本提示

本机 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/ScreenLayer.cs` 存在且可读（该目录下 `.cs` 文件共 6222 个，分布在 `bannerlord-1.4.5/Bannerlord.Source/bin/` 各程序集子目录）。逐条比对 1.4.5 与 1.4.6 的公开成员签名，**两者完全一致**：唯一的差异是反编译产物的语法形态——1.4.5 把 `Scale` / `UsableArea` / `InputUsageMask` 写成表达式体（`=> ScreenManager.Scale`），1.4.6 写成带 `get { return ...; }` 的块体，语义一致。`HandleActivate` / `HandleDeactivate` / `HandleFinalize` / `HandleGainFocus` / `HandleLoseFocus` 在两个版本里都是 `internal`，`Tick` / `LateUpdate` / `RenderTick` / `Update` / `OnGainFocus` / `OnLoseFocus` / `RefreshGlobalOrder` 在两个版本里都是 `protected internal`。也就是说这页描述的输入屏蔽三段式与生命周期顺序在 1.4.5 上同样成立。

## 依赖关系

- 栈与帧循环：[ScreenManager](../ScreenManager) — 全局静态栈，提供 `Scale` / `UsableArea` / `TryLoseFocus` / `FocusedLayer`，是本类所有钩子的实际调用方。
- 宿主容器：[ScreenBase](../ScreenBase) — 通过 `AddLayer` / `RemoveLayer` / `FindLayer<T>` 持有本类实例，`Layers` 的元素类型。
- 常见实现：[GauntletLayer](../../engine/GauntletLayer) — 跨模块（`TaleWorlds.Engine.GauntletUI`），加载 XML prefab 的那一层实现。
- 模块归属：[gui API 目录导览](../)
- 分层说明：[模块地图](../../../architecture/module-map)