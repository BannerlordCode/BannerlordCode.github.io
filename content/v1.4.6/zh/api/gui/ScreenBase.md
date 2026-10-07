---
title: "ScreenBase"
description: "所有界面的抽象基类：持有一组 ScreenLayer 与 ScreenComponent，并把引擎的推送/暂停/帧循环翻译成 OnXxx 虚方法。"
---
# ScreenBase

**Namespace:** `TaleWorlds.ScreenSystem`
**Module:** `TaleWorlds.ScreenSystem`
**Type:** `public abstract class ScreenBase`
**Source:** `TaleWorlds.ScreenSystem/ScreenBase.cs`

## 概述

`ScreenBase` 是 Bannerlord 全部界面的根类型——地图界面、对话、菜单、任务结算、加载画面都是它的派生类。它自己不做任何渲染，只做三件事：维护一个有序的 `ScreenLayer` 列表；维护一个 `ScreenComponent` 列表用于跨层查找；把引擎侧的 `HandleInitialize` / `HandleActivate` / `HandlePause` / `FrameTick` 等内部调用转发成 `protected virtual` 钩子，让派生类只重写自己关心的那几个。

注意所有 `HandleXxx` 与 `FrameTick` / `IdleTick` / `Update` 都是 `internal`，mod 无法手动调用它们。正确做法是用 `ScreenManager.PushScreen(this)` 让引擎来驱动。类里的两个公开转发方法 `Activate()` 与 `Deactivate()` 是给「已在栈中但需要临时开关」的场合用的，它们最终还是落到同一批 `HandleXxx`。

## 心智模型

一个界面从进栈到出栈会经历这条固定链：`PushScreen` → `HandleInitialize`（`IsInitialized = true`，调 `OnInitialize`）→ `HandleActivate`（`IsActive = true`，倒序激活各 layer，再调 `OnActivate`，并把 `_onReadyPending` 置真）→ 若干次 `FrameTick`（第一次 tick 时 `OnReady` 会被调一次，之后每帧 `OnFrameTick`）→ 弹出上层界面时 `HandleDeactivate` / `HandlePause` → `PopScreen` 时 `HandleFinalize`（`IsFinalized = true`，并把 `OnAddLayer` / `OnRemoveLayer` 两个事件置 null）。

`OnReady` 与 `OnInitialize` 的差别是 mod 最容易踩的坑：`OnInitialize` 时 layer 可能还没被 `AddLayer` 加进来，`OnReady` 则保证在第一次帧更新时执行，此时 `AddLayer` 已经完成。若派生类在 `OnInitialize` 里就调 `FindLayer<T>()`，拿到的是 null。

另一个常见误用是在 `OnDeactivate` 里释放资源、在 `OnResume` 里再申请——`Deactivate` 与 `Pause` 是两条不同路径（前者是界面失去激活，后者是被上层界面盖住），两者可能只走其一。清理资源应该只放在 `OnFinalize`，它保证只跑一次。

## 关键成员

### 状态与容器

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `IsInitialized` | `public bool IsInitialized { get; private set; }` | `OnInitialize` 是否已跑过。`HandleFinalize` 会把它置回 false，所以同一实例可以被复用（但复用前要确认已 finalize） |
| `IsActive` | `public bool IsActive { get; private set; }` | 界面是否处于激活态。构造函数里初始为 false；`FrameTick` 只在 `IsActive` 时调 `OnFrameTick` |
| `IsPaused` | `public bool IsPaused { get; private set; }` | 是否被上层界面遮挡而暂停。构造函数里初值为 **true**，即未激活前默认视为暂停 |
| `IsFinalized` | `public bool IsFinalized { get; private set; }` | 是否已经 finalize 过一次。给这个实例再加 layer 会触发断言失败 |
| `Layers` | `public MBReadOnlyList<ScreenLayer> Layers { get; }` | 本界面的 layer 列表，只读视图。内部实际是会在 `AddLayer` 后重新排序的 `MBList` |
| `MouseVisible` | `public virtual bool MouseVisible { get; set; }` | 界面激活时鼠标光标是否可见。基类只是一个可写的自动属性，真正的应用由引擎每帧读取；派生类可重写 |
| `DebugInput` | `public IInputContext DebugInput { get; }` | 转发到 `Input.DebugInput`，调试用的按键记录上下文。非 null 时 `FrameTick` 会顺带维护按下键表 |
| `OnAddLayer` | `public event OnLayerAddedEvent OnAddLayer` | 每次 `AddLayer` 成功后触发，参数是新加的 layer。`HandleFinalize` 会把这个事件置 null，所以只能在活跃期订阅 |
| `OnRemoveLayer` | `public event OnLayerRemovedEvent OnRemoveLayer` | 每次 `RemoveLayer` 后触发。同样会在 finalize 时被置 null |

### Layer 管理

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `AddLayer` | `public void AddLayer(ScreenLayer layer)` | 追加一个 layer 并重排顺序。传入 null 或已 finalize 的 layer 会触发 `Debug.FailedAssert` 后静默返回；重复添加同一 layer 同样断言失败。界面已 active 时新 layer 会立即 `HandleActivate` |
| `RemoveLayer` | `public void RemoveLayer(ScreenLayer layer)` | 移除并 **finalize** 该 layer（无论它是否 active），然后刷新全局 layer 顺序。移除后不要再用这个引用 |
| `HasLayer` | `public bool HasLayer(ScreenLayer layer)` | 引用相等判断该 layer 是否属于本界面 |
| `FindLayer<T>` | `public T FindLayer<T>() where T : ScreenLayer` | 按类型取第一个匹配的 layer；找不到返回 `default(T)`。这是 `OnInitialize` 里查不到、要在 `OnReady` 里查的原因 |
| `FindLayer<T>` | `public T FindLayer<T>(string name) where T : ScreenLayer` | 在类型匹配的基础上再要求 `layer.Name` 等于给定名字；两个条件都满足才返回，否则 null |
| `ActivateAllLayers` | `public void ActivateAllLayers()` | 逐个激活尚未激活的 layer，返回 void |
| `DeactivateAllLayers` | `public void DeactivateAllLayers()` | 逐个停用仍然激活的 layer。停用不等于 finalize，layer 之后还能再激活 |
| `SetLayerCategoriesState` | `public void SetLayerCategoriesState(string[] categoryIds, bool isActive)` | 把 `categoryIds` 里按 layer 名字匹配的 layer 统一切到指定状态，其它 layer 不动 |
| `SetLayerCategoriesStateAndToggleOthers` | `public void SetLayerCategoriesStateAndToggleOthers(string[] categoryIds, bool isActive)` | 匹配项切到 `isActive`，**不匹配的取反**。用于「只显示某一类」的模式 |
| `SetLayerCategoriesStateAndDeactivateOthers` | `public void SetLayerCategoriesStateAndDeactivateOthers(string[] categoryIds, bool isActive)` | 匹配项切到 `isActive`，不匹配的强制停用（不会反向激活） |
| `UpdateLayout` | `public virtual void UpdateLayout()` | 向所有未 finalize 的 layer 广播布局更新。分辨率变化或 UI 缩放改变时由引擎调用 |

### Component 与手动开关

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `AddComponent` | `public void AddComponent(ScreenComponent component)` | 登记一个非可视组件，供 `FindComponent<T>` 按类型找回。不做 null 检查也没有去重 |
| `FindComponent<T>` | `public T FindComponent<T>() where T : ScreenComponent` | 按类型返回第一个匹配的组件；没有则 `default(T)`。适合存跨 layer 共享的模型对象 |
| `Activate` | `public void Activate()` | 手动激活（内部走 `HandleActivate`）。已激活时不重复执行 |
| `Deactivate` | `public void Deactivate()` | 手动停用（内部走 `HandleDeactivate`）。这只改激活态，**不会**把界面从 `ScreenManager` 栈里弹出来 |

### 派生类可重写的钩子

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `OnInitialize` | `protected virtual void OnInitialize()` | 首次初始化。此时 layer 尚未添加完，需要 layer 的代码应放到 `OnReady` |
| `OnReady` | `protected virtual void OnReady()` | 第一次 `FrameTick` 时被调一次，此时所有 `AddLayer` 已完成。是绑定 layer 回调的推荐位置 |
| `OnActivate` | `protected virtual void OnActivate()` | 界面变为激活。订阅全局事件（如 `CampaignEvents`）放这里 |
| `OnDeactivate` | `protected virtual void OnDeactivate()` | 界面失去激活。与 `OnPause` 是不同路径，不要在这里做唯一的清理 |
| `OnPause` | `protected virtual void OnPause()` | 被上层界面盖住导致暂停 |
| `OnResume` | `protected virtual void OnResume()` | 从暂停恢复。恢复时各 layer 会被重新 `HandleActivate` |
| `OnFrameTick` | `protected virtual void OnFrameTick(float dt)` | 每帧调用，仅在 `IsActive` 时。`dt` 是引擎传入的秒数 |
| `OnPostFrameTick` | `protected virtual void OnPostFrameTick(float dt)` | 帧末调用，同样只在 `IsActive` 时。做「本帧收集、帧末统一提交」的事 |
| `OnIdleTick` | `protected virtual void OnIdleTick(float dt)` | 空闲 tick（无输入时）调用，**不受 `IsActive` 约束**，这是它与 `OnFrameTick` 的关键差别 |
| `OnFinalize` | `protected virtual void OnFinalize()` | 界面销毁前调用一次。只在这里做不可逆的资源释放 |
| `OnFocusChangeOnGameWindow` | `public virtual void OnFocusChangeOnGameWindow(bool focusGained)` | 游戏窗口获得或失去系统焦点。公开而非 protected，引擎直接调用 |
| 构造函数 | `protected ScreenBase()` | 初始化组件与 layer 列表，并把 `IsPaused` 置 true、`IsActive` 置 false。protected 意味着只能在派生类里构造 |

### 嵌套委托

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `OnLayerAddedEvent` | `public delegate void OnLayerAddedEvent(ScreenLayer addedLayer)` | `OnAddLayer` 事件的委托签名 |
| `OnLayerRemovedEvent` | `public delegate void OnLayerRemovedEvent(ScreenLayer removedLayer)` | `OnRemoveLayer` 事件的委托签名 |

## 怎么用

### 怎么拿到它

`ScreenBase` 是 `TaleWorlds.ScreenSystem/ScreenBase.cs:9` 的 `public abstract class ScreenBase`，541 行、39 个公开成员——**模组做界面的主基类**。

它**不继承 `ScreenComponent`**（那一页已经说过，那是个空标记类）。它的实例由 [ScreenManager](../ScreenManager) 压栈持有：`public static ScreenBase TopScreen { get; private set; }`（`ScreenManager.cs:124`）。`ScreenManager` 自己也发两个事件告诉你栈变了：`OnPushScreen`（`ScreenManager.cs:68`）、`OnPopScreen`（`:73`）。

公开状态是四个 `{ get; private set; }`：`IsActive`（`:44`）、`IsPaused`（`:49`）、`IsInitialized`（`:54`）、`IsFinalized`（`:59`）——**setter 全部 private，只能由内部的 `Handle*` 方法改**。两个公开的层操作方法 `ActivateAllLayers()`（`:208`）与 `DeactivateAllLayers()`（`:220`），以及 `Activate()`（`:242`）/`Deactivate()`（`:232`）。

层集合是 `public MBReadOnlyList<ScreenLayer> Layers`（`:33`）——**只读**，要往里加层得走 `OnAddLayer`（`:14`）这条路径，见下方。

### 典型用法

```csharp
using TaleWorlds.ScreenSystem;
using System.Collections.Generic;

public class MyScreen : ScreenBase                      // ScreenBase.cs:9
{
    private readonly List<ScreenLayer> _new = new List<ScreenLayer>();

    protected override void OnInitialize()              // :270
    {
        base.OnInitialize();
        // Layers 是 MBReadOnlyList（:33），只能通过 OnAddLayer 事件挂
        OnAddLayer += (layer) => Debug.Print("added " + layer.Name, 0);   // :14
        _new.Add(new MyHudLayer("hud", localOrder: 0));
    }

    protected override void OnFinalize()                // :275
    {
        OnAddLayer -= ...;                              // 退订同一个委托实例
        base.OnFinalize();
    }

    protected override void OnFrameTick(float dt)       // :300
    {
        base.OnFrameTick(dt);
    }

    public override void UpdateLayout()                 // :252，基类会遍历未 finalized 的层调它们的 UpdateLayout
    {
        base.UpdateLayout();
    }
}

// 压栈
ScreenManager.PushScreen(myScreen);                                   // ScreenManager.cs:606
ScreenManager.CleanAndPushScreen(myScreen);                           // :541，清栈后压
```

### 最容易踩的坑

**直接 `Layers.Add(...)`，然后发现新层既没初始化也没布局。** `Layers`（`:33`）的 getter 返回 `MBReadOnlyList<ScreenLayer>`——**编译期就不允许 Add**，这挡住了这个错法。但它引出了真正的陷阱：挂层必须走 `OnAddLayer` 事件（`:14`），而 `ScreenManager` 是在 `TopScreen` 变化时订阅/退订这两个事件的（见 `ScreenManager.cs:1087`、`:1093`、`:1101` 那一串 `ScreenManager.TopScreen.OnAddLayer -= ...` / `+= ...`）。**如果你在自己的 `OnInitialize` 里 `OnAddLayer += handler`，那这个订阅只对你这一个 screen 有效**；等到 `TopScreen` 被另一个 screen 顶替，事件就断了。正确做法是在 `OnInitialize` 里把层放进自己的待挂列表，并在基类已建立的流程里挂上去。

第二个坑是覆写钩子时不调 `base`。`UpdateLayout()`（`:252`）的基类实现会 `for (int i = 0; i < this._layers.Count; i++) if (!this._layers[i].IsFinalized) this._layers[i].UpdateLayout();`（`:254-259`）——你覆盖它却不调 base，**所有子层的布局计算就一次都不会跑**，表现是控件全部叠在 (0,0) 或尺寸为零。（`UpdateLayout` 本身定义在 `ScreenLayer.cs:306`，`public virtual void UpdateLayout()`。）`OnInitialize`（`:270`）、`OnFinalize`（`:275`）、`OnFrameTick`（`:300`）同理。

第三，`Activate()`（`:242-249`）和 `Deactivate()`（`:232-240`）都是**幂等**的：`if (!this.IsActive) { this.HandleActivate(); this.IsActive = true; }`——已经在 active 状态时直接什么都不做。所以「手动调 Activate 强制刷新界面」是无效的，得先 `Deactivate()` 再 `Activate()`。

## 真实示例

```csharp
// 读者侧演示 layer：不是游戏 API，只示意如何拿到 ScreenLayer 并转发调用
public class MyLedgerLayer : GauntletLayer
{
    public MyLedgerLayer() : base("my_ledger_layer", 0) { }

    public bool IsDirty { get; set; }

    public void BindModel(object model) { }

    public void RebuildRows() { }
}

public class MyLedgerScreen : ScreenBase
{
    private MyLedgerLayer _layer;

    // OnInitialize 时 layer 还没加进来，所以这里只做最小的构造
    protected override void OnInitialize()
    {
        _layer = new MyLedgerLayer();
        AddLayer(_layer);
    }

    // OnReady 保证 AddLayer 已完成，FindLayer 才拿得到东西
    protected override void OnReady()
    {
        _layer = FindLayer<MyLedgerLayer>();
        _layer.BindModel(Campaign.Current);
    }

    protected override void OnActivate()
    {
        CampaignEvents.HourlyTickEvent += OnHourly;
    }

    protected override void OnDeactivate()
    {
        CampaignEvents.HourlyTickEvent -= OnHourly;
    }

    protected override void OnFrameTick(float dt)
    {
        if (_layer != null && _layer.IsDirty)
        {
            _layer.RebuildRows();
        }
    }

    // 只在 OnFinalize 里做一次性清理
    protected override void OnFinalize()
    {
        _layer = null;
    }

    private void OnHourly()
    {
        if (_layer != null)
        {
            _layer.IsDirty = true;
        }
    }
}
```

推送与弹出：

```csharp
ScreenManager.PushScreen(new MyLedgerScreen());
// 玩家在界面上点关闭
ScreenManager.PopScreen();
```

## 风险与边界

- **`OnReady` 只在第一帧调一次**：如果界面在 `IsActive == false` 的状态下停了很久再恢复，`_onReadyPending` 不会重新置真，不要指望每次激活都能重新绑定 layer 回调。
- **`OnIdleTick` 不看激活态**：它在 `IdleTick` 里被无条件转发，即使界面已被 deactivate 也可能收到调用。凡是触碰 layer 的代码都要判空。
- **finalize 不可重复**：`HandleFinalize` 在已 finalize 时会触发 `Debug.FailedAssert` 并直接返回。给已 finalize 的实例 `AddLayer` 同样断言失败。
- **事件在 finalize 时被清空**：`HandleFinalize` 把 `OnAddLayer` / `OnRemoveLayer` 置 null。持有这些事件的外部订阅者不会收到通知，也不会被泄漏（因为置 null 断开了引用）。
- **layer 生命周期比界面短**：`RemoveLayer` 会顺手 `HandleFinalize` 掉那个 layer。把 layer 引用缓存到界面字段里是允许的，但移除后必须置空，否则 `OnFrameTick` 里会碰到已 finalize 的对象。
- **`SetLayerCategoriesState*` 靠名字匹配**：`categoryIds.IndexOf(screenLayer.Name) >= 0`，改 layer 的 `Name` 会让这些调用静默失配。
- **`FindLayer<T>` 返回 null**：三种情况都会返回 null——类型不匹配、尚未 `AddLayer`、layer 已被移除。必须判空。
- **`Pause` 与 `Deactivate` 不是一回事**：弹出上层界面走 pause，切换到别的栈顶界面走 deactivate。只在 `OnDeactivate` 里退订事件，会在「暂停后再恢复」时重复订阅。
- **没有线程安全**：所有钩子都在渲染主线程；不要在 `OnFrameTick` 里启动会回调进游戏状态的后台任务。

## 跨版本提示

1.4.6 相对 1.4.5 的参考源（`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.ScreenSystem/`）在 `ScreenBase` 上新增/保留的公开面一致，核心成员 `IsActive` / `IsPaused` / `IsInitialized` / `IsFinalized` / `Layers` / `MouseVisible` 与 `AddLayer` / `RemoveLayer` / `FindLayer<T>` / `AddComponent` / `FindComponent<T>` 跨版本稳定。1.4.6 里 `ScreenBase` 的 `ScreenManager.RefreshGlobalOrder()` 是内部静态，mod 无法主动触发全局重排——需要时通过 `RemoveLayer` 间接引发。

## 依赖关系

- 栈管理：[ScreenManager](../ScreenManager) — 负责 `PushScreen` / `PopScreen` 与帧循环驱动。
- 渲染层实现：`ScreenLayer` 定义在同一个命名空间，是本类 `Layers` 的元素类型。
- 可视层基类：[GauntletLayer](../../engine/GauntletLayer) — 最常见的 `ScreenLayer` 实现，`TaleWorlds.Engine.GauntletUI` 命名空间。
- 组件类型：`ScreenComponent` 与本类同命名空间，是 `AddComponent` / `FindComponent<T>` 的约束类型。
- 战役侧：被 `SandBox` 与 `StoryMode` 的大量界面继承，用到 `Campaign.Current` 的钩子里需要参考 [Campaign](../../campaign/Campaign)。
- 父级：[gui API 目录导览](../)