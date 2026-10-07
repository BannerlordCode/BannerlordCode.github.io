---
title: "ScreenLayer"
description: "屏幕上的一个图层：处理绘制顺序、输入、命中测试与焦点。一个界面由若干层叠成，ScreenLayer 决定了「谁在上面、谁先收到输入」。所有自定义 UI 层都从它派生。"
---
# ScreenLayer

**命名空间：** `TaleWorlds.ScreenSystem`
**模块：** `TaleWorlds.ScreenSystem`
**类型：** `public abstract class ScreenLayer : IComparable`
**基类：** 无，实现 `System.IComparable`
**源文件：** `bannerlord-1.4.7/TaleWorlds.ScreenSystem/ScreenLayer.cs`（声明见第 10 行）

## 概述

`ScreenLayer` 是界面上的**一层**。一个 [ScreenBase](../ScreenBase) 由若干层叠成，每层负责一块内容与一块输入区域。它决定了三件事：**绘制顺序**（`localOrder` 构造参数 + `RefreshGlobalOrder` 决定全局次序）、**输入归属**（`EarlyProcessEvents(InputType handledInputs)` 声明已处理哪些输入）、以及**命中测试**（`HitTest(Vector2 position)` / `HitTest()` / `FocusTest()`）。

它实现 `IComparable`——这个比较器是绘制与输入分发顺序的依据。`localOrder` 越大越靠上（越晚绘制、越先收到输入）。全局顺序由 `RefreshGlobalOrder(ref int currentOrder)` 在所有层之间重新分配，跨屏幕的层（全局 HUD）也参与这次分配。

输入分发的关键规则是**「声明已处理」**：`EarlyProcessEvents(InputType handledInputs)` 告诉引擎「我已消费了这些输入」，引擎不会再传给更下层的层。**不调用它，你的层和它下面的层会同时响应同一个按键**——这是自定义 UI 双重触发的头号原因。

## 心智模型

把 `ScreenLayer` 想成**「带 z 序的透明输入面板」**。设计时的三个心智要点：

1. **顺序即优先级。** `localOrder` 大的层在上面，先拿到输入。构造时给的 `localOrder` 只是初值，最终次序由 `RefreshGlobalOrder` 在每次布局时重算。跨屏幕共享的层要传足够大的 `localOrder`。
2. **输入是「消费制」而非「广播制」。** 在 `Update(IReadOnlyList<int> lastKeysPressed)` 里处理按键后，**必须**调用 `EarlyProcessEvents(InputType)` 报告处理了什么，否则下层也会收到。`Update` 在处理之前调用 `EarlyProcessEvents` 还是之后，取决于你要不要让下层也知道。
3. **焦点是独立于激活态的概念。** `IsActive` 表示这层可见且激活，`IsFocusedOnInput` 表示它正接收键盘 / 手柄输入。一个层可以 active 但没焦点（比如输入被上层的对话框抢走了）。`OnGainFocus` / `OnLoseFocus` 是焦点变化的钩子。

**常见错误**：`Update` 里不调用 `EarlyProcessEvents`（按键双触发）；`HitTest` 返回恒 true（鼠标点击被下面的元素也吃掉）；以及在 `Tick` 里做重活（每层每帧都跑）。

## 何时使用 / 何时不要使用

- **使用**：实现自定义 UI 层（覆写 `OnActivate` / `Tick` / `RenderTick` / `Update` / `HitTest`）。
- **使用**：处理输入并声明消费（`EarlyProcessEvents`）。
- **使用**：管理焦点（`OnGainFocus` / `OnLoseFocus` / `IsFocusedOnInput`）。
- **使用**：作为全局 HUD 层通过 [ScreenManager](../ScreenManager) 的 `AddGlobalLayer` 注册。
- **不要**：在 `Update` 里处理按键却忘记 `EarlyProcessEvents`。
- **不要**：让 `HitTest` 恒返回 true——那会让这层吞掉整屏鼠标事件。
- **不要**：在 `Tick` 里做重活——所有活动层每帧都会跑。

## 成员说明

### 一、身份与状态

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `protected ScreenLayer(string name, int localOrder)` | 构造函数。`name` 用于跨层查找与调试；`localOrder` 越大越靠上。**必须调 base**。 |
| `string Name { get; private set; }` | 层名。跨屏共享层靠名字被找到。 |
| `bool IsActive { get; private set; }` | 是否激活（可见且参与输入分发）。 |
| `bool IsFinalized { get; private set; }` | 是否已 `OnFinalize`。为 true 后不要再用。 |
| `bool IsHitThisFrame { get; internal set; }` | 本帧鼠标是否命中过这一层。 |
| `bool LastActiveState { get; set; }` | 上一次的激活状态。用于检测激活状态跳变。 |
| `int ScreenOrderInLastFrame { get; internal set; }` | 上一帧的全局顺序。诊断层叠问题时用。 |
| `bool IsFocusLayer { get; set; }` | 是否参与焦点链。**设为 false 的层永远不会获得键盘焦点**。 |
| `CursorType ActiveCursor { get; set; }` | 鼠标悬停时显示的光标类型。 |
| `InputContext Input { get; private set; }` | 输入上下文（手柄 / 键鼠）。 |
| `InputRestrictions InputRestrictions { get; private set; }` | 输入限制。 |
| `protected InputType _usedInputs { get; set; }` | 本层已消费的输入集合（受保护）。`EarlyProcessEvents` 会更新它。 |
| `static event Action<ScreenLayer> OnLayerActiveStateChanged` | **静态**事件：任意层的激活状态变化时触发。做全局 UI 联动时用它，但**必须解除订阅**。 |
| `int CompareTo(object obj)` | `IComparable` 实现——绘制与输入分发顺序的比较依据。 |

### 二、生命周期与 tick

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `protected virtual void OnActivate()` | 层被激活。准备显示态。可多次运行。 |
| `protected virtual void OnDeactivate()` | 层被停用。 |
| `protected internal virtual void OnGainFocus()` / `OnLoseFocus()` | 获得 / 失去焦点。**键盘输入只进聚焦的层**。 |
| `protected virtual void OnFinalize()` | 一次性销毁。解除订阅的正确位置。 |
| `protected internal virtual void Tick(float dt)` | 每逻辑帧。**所有活动层都会跑**。 |
| `protected internal virtual void LateUpdate(float dt)` | 帧末更新。 |
| `protected internal virtual void RenderTick(float dt)` | 绘制帧。**不要在这里改逻辑状态**。 |
| `protected internal virtual void Update(IReadOnlyList<int> lastKeysPressed)` | **输入分发**。参数是本帧按下的键。**处理完必须调 `EarlyProcessEvents`。** |
| `protected virtual void RefreshGlobalOrder(ref int currentOrder)` | 重算全局绘制 / 输入顺序。**覆写时必须调 `base`**，否则会破坏排序。 |
| `public virtual void UpdateLayout()` | 重新布局。内容或分辨率变化后调用。 |

### 三、输入与命中

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `public virtual void EarlyProcessEvents(InputType handledInputs)` | **声明本层已消费的输入**。不调用它，下层会重复响应。 |
| `public virtual void ProcessEvents()` | 事件处理（在 `Update` 之后）。 |
| `public virtual bool HitTest(Vector2 position)` | 指定位置的命中测试。**覆写它实现精确点击区域**；恒返回 true 会吞掉整屏鼠标事件。 |
| `public virtual bool HitTest()` | 无参数的命中测试（整体命中判断）。 |
| `public virtual bool FocusTest()` | 是否可获得焦点。返回 false 的层不进入焦点链。 |
| `public virtual bool IsFocusedOnInput()` | 当前是否正接收输入。**用它门控键盘处理**。 |
| `public virtual void OnOnScreenKeyboardDone(string inputText)` | 平台软键盘输入完成。 |
| `public virtual void OnOnScreenKeyboardCanceled()` | 平台软键盘取消。 |
| `public virtual void DrawDebugInfo()` | 绘制调试信息。配合 [ScreenManager](../ScreenManager) 的调试开关使用。 |

## 示例

### 示例 1：一个正确声明输入消费的层

不调用 `EarlyProcessEvents`，按键会被这一层和它下面的层同时处理。

```csharp
using TaleWorlds.Localization;
using TaleWorlds.ScreenSystem;

public class MyInputLayer : ScreenLayer
{
    private bool _pendingConfirm;

    public MyInputLayer() : base("MyInputLayer", 100)
    {
    }

    protected override void OnActivate()
    {
        base.OnActivate();
        IsFocusLayer = true;     // 参与焦点链
    }

    protected internal override void Update(IReadOnlyList<int> lastKeysPressed)
    {
        base.Update(lastKeysPressed);

        // 只有聚焦时才处理键盘
        if (!IsFocusedOnInput()) return;

        foreach (int key in lastKeysPressed)
        {
            if (key == (int)TaleWorlds.InputSystem.InputKey.Enter)
            {
                _pendingConfirm = true;

                // 关键：声明「我消费了 Enter」，否则下层也会收到
                EarlyProcessEvents(InputType.Touch);
            }
        }
    }

    protected internal override void Tick(float dt)
    {
        base.Tick(dt);
    }

    protected override void OnFinalize()
    {
        base.OnFinalize();
    }
}
```

### 示例 2：精确的鼠标命中区域

`HitTest` 恒 true 会吞掉整屏鼠标事件，必须按实际区域返回。

```csharp
using TaleWorlds.ScreenSystem;

public class ClickableBanner : ScreenLayer
{
    private readonly int _x, _y, _width, _height;

    public ClickableBanner(int x, int y, int width, int height)
        : base("ClickableBanner", 50)
    {
        _x = x; _y = y; _width = width; _height = height;
    }

    public override bool HitTest(Vector2 position)
    {
        // 只在自己的矩形区域内命中，其余位置放行给下面的层
        return position.x >= _x && position.x <= _x + _width
            && position.y >= _y && position.y <= _y + _height;
    }

    public override bool FocusTest()
    {
        return IsActive;   // 只有激活时才进焦点链
    }
}
```

### 示例 3：全局层与激活状态联动

`OnLayerActiveStateChanged` 是静态事件，不解除订阅会一直持有已销毁的层。

```csharp
using TaleWorlds.ScreenSystem;

public class HudWatcher : ScreenLayer
{
    public HudWatcher() : base("HudWatcher", 900) { }

    protected override void OnActivate()
    {
        base.OnActivate();
        // 静态事件：订阅时用 owner 语义的对象，销毁时务必解除
        ScreenLayer.OnLayerActiveStateChanged += OnAnyLayerChanged;
    }

    protected override void OnFinalize()
    {
        base.OnFinalize();
        ScreenLayer.OnLayerActiveStateChanged -= OnAnyLayerChanged;
    }

    private void OnAnyLayerChanged(ScreenLayer layer)
    {
        if (layer == this) return;
        // 全局联动逻辑
    }
}
```

## 风险与边界

- **忘记 `EarlyProcessEvents`**。这是自定义 UI 里最常见的 bug：按键被本层和下层同时处理，表现为「关闭按钮要按两次」或「列表滚动一次跳两格」。
- **`HitTest` 恒 true**。会让这一层吞掉整屏鼠标事件，下层的按钮全部点不到。覆写它实现精确区域。
- **`Tick` 的性能**。所有活动层每帧都会跑 Tick，层多时代价线性增长。`RenderTick` 里更不要改逻辑状态。
- **`RefreshGlobalOrder` 覆写不调 base**。它参与全局排序，跳过 `base` 会让层的次序错乱，表现为「HUD 被对话框盖住」。
- **`OnLayerActiveStateChanged` 是静态事件**。跨层、跨界面存活。不在 `OnFinalize` 解除会持有已销毁的层。
- **`IsFocusLayer = false` 的层永远没有焦点**。键盘输入只进聚焦的层——不设它，「界面显示了但按任何键都没反应」。
- **`IsActive` 与 `IsFocusedOnInput` 是两件事**。层可以 active 但没焦点（输入被上层抢走）。用 `IsFocusedOnInput()` 门控键盘处理，而不是 `IsActive`。
- **`OnFinalize` 之后不可再用**。`ScreenManager.CleanScreens()` 会触发它。
- **单线程 + 原生互操作**：绘制与输入处理穿透到 native，全部在主线程 UI 循环执行。不能从后台线程触碰层。

## 依赖关系

- 上游 / 提供者：
  - [ScreenBase](../ScreenBase) 持有并驱动本类（`AddLayer` / `RemoveLayer` / `ActivateAllLayers`）。
  - [ScreenManager](../ScreenManager) 分配全局顺序、分发输入、维护焦点与全局层。
- 相互 / 下游：
  - [GauntletLayer](../../engine/GauntletLayer) 是最常用的具体层实现，继承本类。
  - [ViewModel](../../core-extra/ViewModel) 提供层内 UI 元素的数据绑定。

## 参见

- ↑ 父级：[gui 索引](../)
- ↔ 相关：[ScreenBase](../ScreenBase) · [ScreenManager](../ScreenManager) · [GauntletLayer](../../engine/GauntletLayer) · [ViewModel](../../core-extra/ViewModel)