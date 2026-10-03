---
title: "BrushListPanel"
description: "自带 BrushRenderer 的 ListPanel：Brush getter 在首次读取时 Clone 一份给业务写、ReadOnlyBrush 给渲染器读，同一个字段两条路径语义不同；Sprite 属性用 new 遮蔽父类且 getter 读 ReadOnlyBrush、setter 写 Brush，方向不对称。"
---

# BrushListPanel

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushListPanel : ListPanel`
**Base:** `ListPanel`（→ [Container](../Container) → [Widget](../Widget)）
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushListPanel.cs`（全文 241 行）

## 概述

`BrushListPanel` 是一个「自己管一份 [BrushRenderer](../BrushRenderer) 的列表容器」。它相对裸 [ListPanel](../ListPanel) 多做的事有四件：

**第一，克隆一份 Brush 出来。** 这是本类全部设计的基础。两个私有字段：`_originalBrush`（`:233`）与 `_clonedBrush`（`:236`）。`Brush` 属性的 getter（`:16`）：

```csharp
public Brush Brush
{
    get
    {
        if (this._originalBrush == null)
        {
            this._originalBrush = base.Context.DefaultBrush;
            this._clonedBrush = this._originalBrush.Clone();
            if (this.BrushRenderer != null) { this.BrushRenderer.Brush = this.ReadOnlyBrush; }
        }
        else if (this._clonedBrush == null)
        {
            this._clonedBrush = this._originalBrush.Clone();
            if (this.BrushRenderer != null) { this.BrushRenderer.Brush = this.ReadOnlyBrush; }
        }
        return this._clonedBrush;
    }
    set { ... }
}
```

**getter 是带副作用的**：第一次读会（a）若没设过 Brush 就取 `Context.DefaultBrush` 兜底，（b）`Clone()` 一份，（c）把克隆体推给 `BrushRenderer`。**所以「读一下 Brush」这个动作会触发一次全量深拷贝。** 这个副作用是刻意的——它保证「谁来读 Brush 拿到的都是可安全修改的克隆体」。

**第二，双入口。** `ReadOnlyBrush`（`:53`）给渲染器用：

```csharp
public Brush ReadOnlyBrush
{
    get
    {
        if (this._clonedBrush != null) { return this._clonedBrush; }
        if (this._originalBrush == null) { this._originalBrush = base.Context.DefaultBrush; }
        return this._originalBrush;
    }
}
```

**没有克隆的那一路。** 两条路径的差别在「谁读到的是共享对象」：`ReadOnlyBrush` 在克隆体已存在时返回克隆体，否则返回**原始共享的 Brush**（可能是 `Context.DefaultBrush`）。

**第三，自己驱动渲染器。** `BrushRenderer`（`:88`，`{ get; private set; }`）在构造函数（`:91`）里 `new BrushRenderer()`。之后：

- `UpdateBrushes(float dt)`（`:111`，override）→ 调 `UpdateBrushRendererInternal(dt)`，若 `IsBrushUpdateNeeded()` 为假就 `UnRegisterUpdateBrushes()` 退订。
- `UpdateBrushRendererInternal`（`:121`）把 `ForcePixelPerfectRenderPlacement` → `ForcePixelPerfectPlacement`、`UseGlobalTimeForAnimation` 的取反 → `UseLocalTimer`、`ReadOnlyBrush` → `Brush`、`CurrentState` → `CurrentState`，然后 `Update(EventManager.LocalFrameNumber, TwoDimensionContext.Platform.ApplicationTime, dt)`。它还处理 `RestartAnimationFirstFrame`：首次进入时通过 `AddLateUpdateAction` 排一个帧序号为 5 的回调并置 `_animRestarted = true`。
- `OnRender`（`:181`，override）里若 `IsBrushUpdateNeeded()` 且本帧还没更新过，就现场补一次 `UpdateBrushRendererInternal(EventManager.CachedDt)`，然后无条件 `BrushRenderer.Render(...)`。

**第四，播音效。** 构造函数里 `base.EventFire += this.BrushWidget_EventFire;`（`:96`）。`BrushWidget_EventFire`（`:98`）拿事件名去 `Brush.SoundProperties.GetEventAudioProperty(eventName)`，非 null 且 `AudioName` 非空串就 `PlaySound`。另外 `SetState`（`:142`，override）也会查 `GetStateAudioProperty(stateName)` 播状态音——**注意 `SetState` 里空 `AudioName` 走 `Debug.FailedAssert`（`BrushListPanel.cs:157`-`:162`），而 `BrushWidget_EventFire` 里空串是静默跳过。**

## 心智模型

**把它当成「`ListPanel` + 一套自带的外观驱动」，并记住那个最容易踩的不对称：`Brush` 与 `ReadOnlyBrush` 不是同一个东西。**

`Sprite` 属性（`:73`）把这个不对称暴露得最清楚：

```csharp
[Editor(false)]
public new Sprite Sprite
{
    get { return this.ReadOnlyBrush.DefaultStyle.GetLayer("Default").Sprite; }
    set { this.Brush.DefaultStyle.GetLayer("Default").Sprite = value; }
}
```

**getter 走 `ReadOnlyBrush`（共享、不克隆），setter 走 `Brush`（克隆）。** 也就是说：在克隆尚未建立时读 `Sprite` 读到的是**原始共享 Brush** 的图；而写 `Sprite` 会先触发克隆再写克隆体。两边指向不同对象。

另外注意它用 `new` 遮蔽了 [ListPanel](../ListPanel)（→ [Container](../Container)）继承来的 `Sprite`——所以**持有 [ListPanel](../ListPanel) 或 [Container](../Container) 类型引用的代码看到的是基类那个 Sprite，不是这个**。这是一个真实的类型陷阱。

**再理解「注册-退订」的节流机制。** `RegisterUpdateBrushes()`（`:221`）是 `EventManager.RegisterWidgetForEvent(WidgetContainer.ContainerType.UpdateBrushes, this)`，`UnRegisterUpdateBrushes()`（`:227`）是对应的反向调用。触发注册的四个地方：`SetState`（状态变化）、`RefreshState`、`OnBrushChanged`（Brush 被换掉）、以及 `OnRender` 里的「发现需要更新」。而 `UpdateBrushes` 的末尾会在不需要时退订。

**结果是：动画结束或静止之后，这个控件不再收到 `UpdateBrushes` 事件。** 这是这个类的性能设计——大量静态控件不会为动画机制付出每帧代价。但它有一个后果：**「我改了某个属性，动画没动」有时是退订导致的**，此时 `OnBrushChanged()` 或一次 `SetState` 能把它重新拉进来。

`IsBrushUpdateNeeded()`（`:192`，protected）是这个节流的判据：

```csharp
return base.IsVisible && this.BrushRenderer.IsUpdateNeeded() && this.AreaRect.IsCollide(base.EventManager.AreaRectangle);
```

**三个条件同时成立才算需要**——控件可见、渲染器自己说需要、且**控件矩形与事件管理器的屏幕矩形相交**。所以「滚出屏幕的控件不更新动画」是刻意行为，不是 bug。

`OnConnectedToRoot`（`:198`）做一件小事：`BrushRenderer.SetSeed(this._seed)`。`_seed` 是 [Widget](../Widget) 上的 `protected int _seed`，在 `Widget.cs:2733` 处若无显式种子则取 `GetSiblingIndex()`。这就是 [BrushLayer](../BrushLayer) 那两个 `UseRandomBaseOverlay*` 随机偏移的来源。

`UpdateAnimationPropertiesSubTask(float alphaFactor)`（`:205`，override）是子树淡出的入口：

```csharp
public override void UpdateAnimationPropertiesSubTask(float alphaFactor)
{
    this.Brush.GlobalAlphaFactor = alphaFactor;
    foreach (Widget widget in base.Children) { widget.UpdateAnimationPropertiesSubTask(alphaFactor); }
}
```

注意它写的是 **`Brush.GlobalAlphaFactor`**，也就是克隆体上的全局乘数，且**递归到所有子控件**。所以「淡出一个面板」会一路传到它的每一个孩子。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public BrushListPanel(UIContext context) : base(context)`（`:91`） | `this.BrushRenderer = new BrushRenderer();` 然后 `base.EventFire += this.BrushWidget_EventFire;`。**事件订阅在构造时完成，不可退订**（没有对应的 `-=`）。 |
| `Brush` | `[Editor(false)] public Brush Brush { get; set; }`（`:16`） | **可写可改的克隆体**。getter 有副作用：懒克隆（首次）并把克隆体推给 `BrushRenderer`。setter 在 `_originalBrush != value` 时置 `_originalBrush`、`_clonedBrush = null`（**丢弃旧克隆**）、调 `OnBrushChanged()`、`base.OnPropertyChanged<Brush>(value, "Brush")`。 |
| `ReadOnlyBrush` | `public Brush ReadOnlyBrush { get; }`（`:53`） | **给渲染器读的入口**。克隆体存在就返回克隆体；否则返回原始 Brush（未设过则取 `Context.DefaultBrush`）。无副作用（除第一次会顺手填 `_originalBrush`）。 |
| `Sprite` | `[Editor(false)] public new Sprite Sprite { get; set; }`（`:73`） | **用 `new` 遮蔽基类**。getter 走 `ReadOnlyBrush.DefaultStyle.GetLayer("Default").Sprite`；setter 走 `Brush.DefaultStyle.GetLayer("Default").Sprite`。**两边可能指向不同对象**（克隆未建立时）。`GetLayer("Default")` 可能返回 null → 链式访问抛 `NullReferenceException`。 |
| `BrushRenderer` | `public BrushRenderer BrushRenderer { get; private set; }`（`:88`） | 自带的渲染器，构造时创建。`private set`，外部只能读。`UpdateBrushRendererInternal` 每帧同步它的 `Brush` / `CurrentState` / `UseLocalTimer` / `ForcePixelPerfectPlacement`。 |
| `UpdateBrushes` | `public override void UpdateBrushes(float dt)`（`:111`） | 动画推进入口。先 `UpdateBrushRendererInternal(dt)`，若 `IsBrushUpdateNeeded()` 为假则 `UnRegisterUpdateBrushes()`。**这是退订发生的唯一位置。** |
| `SetState` | `public override void SetState(string stateName)`（`:142`） | **换外观状态的入口**。若 `CurrentState != stateName` 且有 `EventManager` 且 `ReadOnlyBrush != null`：查状态音并播放（空 `AudioName` → `Debug.FailedAssert`），然后 `RegisterUpdateBrushes()`。最后照常 `base.SetState(stateName)`。 |
| `RefreshState` | `protected override void RefreshState()`（`:174`） | `base.RefreshState(); RegisterUpdateBrushes();`。**无条件注册**，不管状态是否真的变。 |
| `OnBrushChanged` | `public virtual void OnBrushChanged()`（`:215`） | **本类唯一的 `virtual` 钩子**，只有一行 `RegisterUpdateBrushes()`。派生类覆盖它来追加自己的刷新动作——这是给自定义面板的正式扩展点。 |
| `IsBrushUpdateNeeded` | `protected bool IsBrushUpdateNeeded()`（`:192`） | 三个条件合取：`IsVisible` && `BrushRenderer.IsUpdateNeeded()` && `AreaRect.IsCollide(EventManager.AreaRectangle)`。**屏幕外的控件返回 false**，于是动画停止推进。 |
| `OnRender` | `protected override void OnRender(TwoDimensionContext, TwoDimensionDrawContext)`（`:181`） | 若需要更新且本帧未更新过 → 现场补一次；然后**无条件** `BrushRenderer.Render(drawContext, AreaRect, base._scaleToUse, base.Context.ContextAlpha, default(Vector2))`。 |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()`（`:198`） | `base.OnConnectedToRoot(); BrushRenderer.SetSeed(this._seed);`。**这是 [BrushLayer](../BrushLayer) 随机覆盖偏移种子的注入点**——同一层在不同兄弟控件上会得到不同偏移。 |
| `UpdateAnimationPropertiesSubTask` | `public override void UpdateAnimationPropertiesSubTask(float alphaFactor)`（`:205`） | 写 `Brush.GlobalAlphaFactor = alphaFactor` 并递归全部子控件。这是「整棵子树淡入淡出」的唯一实现。**它会触发 `Brush` getter 的懒克隆。** |
| `BrushWidget_EventFire` | `private void BrushWidget_EventFire(Widget arg1, string eventName, object[] arg3)`（`:98`） | 订阅 `base.EventFire` 的私有处理器。查 `GetEventAudioProperty(eventName)`，非 null 且 `AudioName` 非空串就 `TwoDimensionContext.PlaySound`。**空串静默跳过**（与 `SetState` 不同）。参数 `arg1` 与 `arg3` 未使用。 |

## 真实示例

**一、给面板换一份外观，并读出可修改的克隆体**（读 `Brush` 会触发克隆，这是刻意的）：

```csharp
private static BrushListPanel ApplyPanelBrush(BrushListPanel panel, Brush source)
{
    panel.Brush = source;
    Brush editable = panel.Brush;

    editable.GlobalAlphaFactor = 0.9f;
    editable.Color = Color.White;

    panel.SetState("Selected");
    return panel;
}
```

**二、整棵子树淡出**——写的是克隆体上的全局乘数，且会递归：

```csharp
private static void FadePanel(BrushListPanel panel, float alpha)
{
    panel.UpdateAnimationPropertiesSubTask(alpha);
}
```

**三、派生一个带自定义刷新动作的列表面板**（`OnBrushChanged` 是本类唯一的 virtual 钩子）：

```csharp
public class HighlightListPanel : BrushListPanel
{
    public HighlightListPanel(UIContext context) : base(context)
    {
        this.BrushRenderer.UseLocalTimer = true;
    }

    public override void OnBrushChanged()
    {
        base.OnBrushChanged();
        this.BrushRenderer.RestartAnimation();
    }
}
```

**四、给面板挂上事件音与状态音**（注意先设 `Brush` 再改，否则改的是即将被丢弃的克隆体）：

```csharp
private static void AttachSounds(BrushListPanel panel)
{
    Brush brush = panel.Brush;

    AudioProperty onHover = new AudioProperty();
    onHover.AudioName = "checkbox";
    brush.SoundProperties.AddEventSound("MouseEnter", onHover);

    AudioProperty onSelected = new AudioProperty();
    onSelected.AudioName = "click";
    brush.SoundProperties.AddStateSound("Selected", onSelected);
}
```

## 风险与边界

- **读 `Brush` 会触发一次全量深拷贝。** getter 里的 `Clone()` → `FillFrom` 要复制所有图层、样式、动画、音效。**在每帧循环里读 `panel.Brush` 是严重的性能错误**——虽然 `_clonedBrush` 有缓存只在第一次真克隆，但每次读都要走一遍两层 `if` 并可能触发 `BrushRenderer.Brush` 的 setter（后者在 `_brush != value` 时会重置全部动画状态）。请把引用缓存成字段。
- **`Brush` 与 `ReadOnlyBrush` 可能不是同一个对象。** 克隆尚未建立时，`ReadOnlyBrush` 返回**原始共享 Brush**，而 `Brush` 返回新建的克隆体。**在建立克隆之前往 `ReadOnlyBrush` 拿到的对象上写东西 = 改全局资源。**
- **`Sprite` 的 getter 与 setter 方向不对称。** getter 走 `ReadOnlyBrush`，setter 走 `Brush`。第一次 `panel.Sprite = x` 会先建立克隆；此前后续读 `panel.Sprite` 读到的是克隆体的图，而**在克隆建立之前**读到的是原始 Brush 的图。
- **`Sprite` 用 `new` 遮蔽基类。** 持有 [ListPanel](../ListPanel) / [Container](../Container) / [Widget](../Widget) 引用的调用点看到的是基类的 Sprite。需要访问本类的必须先转成 `BrushListPanel`。
- **`Sprite` 的链式访问没有判空。** `ReadOnlyBrush.DefaultStyle.GetLayer("Default")` 在层被删过的情况下返回 null，紧接着 `.Sprite` 就是 `NullReferenceException`。
- **`Brush` 的 setter 会丢弃旧克隆体。** `_clonedBrush = null` 意味着之前通过 `Brush` getter 拿到的引用全部作废。缓存了 Brush 引用的代码在换 Brush 后必须重新取。
- **`IsBrushUpdateNeeded` 的第三个条件会让屏幕外的控件停止动画。** `AreaRect.IsCollide(EventManager.AreaRectangle)` 为假时不更新。控件滚出屏幕后动画时钟停走，滚回来时 `RestartAnimationFirstFrame` 的 `_animRestarted` 已经是 true（不重播），进度取决于 `UseLocalTimer` 的取值。
- **`UseLocalTimer` 由 `UseGlobalTimeForAnimation` 取反决定。** `UpdateBrushRendererInternal` 每帧 `this.BrushRenderer.UseLocalTimer = !base.UseGlobalTimeForAnimation;`。用全局时间时动画时钟由 `TwoDimensionContext.Platform.ApplicationTime` 提供，所有控件同步；用本地时间时各控件独立计时。
- **事件音效订阅不可退订。** `base.EventFire += this.BrushWidget_EventFire;` 在构造函数里，类里没有对应的 `-=`。这不影响正确性（控件生命周期与事件管理器一致），但派生类若想换处理器必须自己再加一个（叠加而非替换）。
- **`UpdateAnimationPropertiesSubTask` 无条件写 `GlobalAlphaFactor`。** 多次以不同 alpha 调用就是「最后一次赢」。而且它写的是 `GlobalAlphaFactor`，不是 `AlphaFactor`——前者是乘数，会与图层自身的 alpha 相乘。
- **`SetState` 的空 `AudioName` 会触发断言。** `BrushListPanel.cs:157`-`:162` 的断言文本形如 `Widget with id "<id>" has a sound having no audioName for event "<state>"!`。开发构建会被打断；`BrushWidget_EventFire` 那条路径（事件音）则是静默跳过。两条路径行为不一致。
- **`RefreshState` 无条件注册更新事件。** 即使状态没变也会把控件拉进 `UpdateBrushes` 队列。相比 `SetState` 的条件注册更激进。
- **`RestartAnimationFirstFrame` 只触发一次。** `_animRestarted` 一旦为 true 就不再排延迟回调。若控件被移除再加入树（`_animRestarted` 不复位），不会重新播。

## 跨版本提示

五棵源码树（`1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3`）的 public/protected 签名集合比对：**14 条签名，增减均为 0**——`Brush`、`ReadOnlyBrush`、`Sprite`、`BrushRenderer`、构造函数、`UpdateBrushes`、`SetState`、`RefreshState`、`OnRender`、`IsBrushUpdateNeeded`、`OnConnectedToRoot`、`UpdateAnimationPropertiesSubTask`、`OnBrushChanged`、类声明，逐条相同。字节哈希 `bb1362de` → `7b25cb92` → `7ef22498` → `ab96024f`，四组互异，说明方法体改过。

**结论：跨 1.3 → 1.5 不需要为本类改代码。** 需要留意的是宿主 [BrushRenderer](../BrushRenderer) 的 `Render` 签名在 **1.3.15 起新增第六个参数 `Vector2 overlaySize`**——本类在 `OnRender` 里是以 `default(Vector2)` 调的（第五个参数），由于新参数有默认值，**这段调用代码在 1.3.15+ 上依然能编译**；但渲染器内部是否开始使用那个尺寸、以及内部对 `_currentBrushLayerState` 的处理有没有变，属于行为变化，跨版本表现需实测。

## 依赖关系

- 基类：[ListPanel](../ListPanel)（自带 `StackLayout` 与完整拖放计算），再往上是 [Container](../Container) 与 [Widget](../Widget)
- 核心依赖：[BrushRenderer](../BrushRenderer)（`Brush` / `CurrentState` / `UseLocalTimer` / `ForcePixelPerfectPlacement` / `SetSeed` / `Update` / `IsUpdateNeeded` / `RestartAnimation` / `Render` 八个成员全部被本类驱动）
- 外观数据：[Brush](../Brush) / [BrushLayer](../BrushLayer) / [Style](../Style) / [SoundProperties](../SoundProperties) / [AudioProperty](../AudioProperty)
- 兄弟实现：`TaleWorlds.GauntletUI.BaseTypes.BrushWidget` 走同一套「克隆 + 渲染器」路线（`ExtraWidgets/Graph/GraphWidget.cs:235` 里就有 `textWidget.Brush = brush.Clone();` 这样的用法），区别是本类额外继承了 `ListPanel`
- 事件框架：[Widget](../Widget) 的 `EventFire` / `EventManager` / `RegisterWidgetForEvent` / `AddLateUpdateAction` / `LocalFrameNumber` / `CachedDt` / `AreaRectangle`
- 时间来源：`TwoDimensionContext.Platform.ApplicationTime` 与 [Widget](../Widget) 的 `UseGlobalTimeForAnimation` / `RestartAnimationFirstFrame` / `_seed`
- 上下文：[UIContext](../UIContext) 的 `DefaultBrush` / `TwoDimensionContext` / `ContextAlpha` / `EventManager`
- 桶首页：[gui API 分区](../)