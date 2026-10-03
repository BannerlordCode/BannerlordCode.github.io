---
title: "BrushRenderer"
description: "Brush 的运行期播放器：持有 start/current 两份 BrushState 与两份图层状态字典，Update 推进时钟并采样，Render 按 StyleLayerCount 逐层画；CurrentState 的 setter 是整套状态机的唯一决策点，而 IsUpdateNeeded 是调用方（BrushWidget / BrushListPanel）决定是否继续推帧的依据。"
---

# BrushRenderer

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushRenderer`
**Base:** 无（隐式 `System.Object`；不实现任何接口）
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushRenderer.cs`（全文 859 行）

## 概述

`BrushRenderer` 是 [Brush](../Brush) 的运行期播放器。三个公开阶段分得很清楚：

- **喂数据**：`Brush`（`:49`）与 `CurrentState`（`:98`）两个属性是全部输入。
- **推时间**：`Update(ulong frameNumber, float globalAnimTime, float dt)`（`:176`）。
- **出画面**：`Render(TwoDimensionDrawContext, in Rectangle2D, float scale, float contextAlpha, Vector2 overlayOffset = default)`（`:604`）与 `CreateTextMaterial(TwoDimensionDrawContext)`（`:760`）。

它自己持有四份状态：`_startBrushState` / `_currentBrushState`（两个 [BrushState](../BrushState)）与 `_startBrushLayerState` / `_currentBrushLayerState`（两个 `Dictionary<string, [BrushLayerState](../BrushLayerState)>`）。**「起点 + 当前」两份**是整个状态机的核心：所有插值都是 `_start → 当前时间点` 的结果，起点只在状态切换时更新。

还有个公有字段 `UseLocalTimer`（`:814`，**字段不是属性**）决定时钟来源：

```csharp
private float _brushTimer
{
    get { if (!this.UseLocalTimer) { return this._globalTime; } return this._brushLocalTimer; }
}
```

**`UseLocalTimer == false` 时动画时钟就是平台的全局应用时间**——所有用同一个时钟的控件天然同步。这是「全局脉冲」类动画的实现方式。

## 心智模型

**把四个状态枚举看懂，`BrushRenderer` 就没什么神秘的了。** 嵌套枚举 `BrushRendererAnimationState`（`:847`）有四个值——注意第三个的拼写是官方的 `PlayingBasicTranisition`（**Transi + sition，字母 s 多了一个**），照抄即可：

| 值 | 含义 |
| --- | --- |
| `None` | 静止。当前状态就是最终状态。 |
| `PlayingAnimation` | 正在跑关键帧动画（`Style.AnimationMode == Animation`）。 |
| `PlayingBasicTranisition` | 正在跑状态过渡（`Style.AnimationMode == BasicTransition`），时长取 `Brush.TransitionDuration`。 |
| `Ended` | 动画刚结束一帧。视觉上等同 `None`，但允许下一次 `Update` 重新采样。 |

**状态迁移只有两个入口：`CurrentState` 的 setter 与 `RestartAnimation()`。**

`CurrentState` 的 setter（`:98`）是完整的决策点：

```csharp
if (this._currentState != value)
{
    string currentState = this._currentState;
    this._brushLocalTimer = 0f;                       // 时钟归零
    this._currentState = value;
    this._startBrushState = this._currentBrushState;  // 旧状态成为新起点
    foreach (var pair in this._currentBrushLayerState) { this._startBrushLayerState[pair.Key] = pair.Value; }
    if (this.Brush != null)
    {
        Style target = this.Brush.GetStyleOrDefault(this.CurrentState);
        this._styleOfCurrentState = target;
        this._brushRendererAnimationState = BrushRendererAnimationState.None;
        if (target.AnimationMode == StyleAnimationMode.BasicTransition)
        {
            if (!string.IsNullOrEmpty(currentState)) { this._brushRendererAnimationState = PlayingBasicTranisition; return; }
        }
        else if (target.AnimationMode == StyleAnimationMode.Animation && (!string.IsNullOrEmpty(currentState) || !string.IsNullOrEmpty(target.AnimationToPlayOnBegin)))
        {
            this._brushRendererAnimationState = PlayingAnimation;
        }
    }
}
```

**关键在于「旧状态非空」这个门槛。** 第一次进入某个状态时 `currentState` 是空串，`BasicTransition` 分支不会启动过渡；`Animation` 分支则只在 `AnimationToPlayOnBegin` 非空时才启动。**所以「第一次显示一个控件」不会有动画，只有「从别的状态切过来」才有。** 这是引擎里所有按钮 hover/press 效果首次出现时不播动画的原因。

`Update`（`:176`）则按三段分派：

**第一段，「无动画但有变化就重采样」：**

```csharp
if ((状态 == None || 状态 == Ended) && (!string.IsNullOrEmpty(style.AnimationToPlayOnBegin) || style.Version != this._latestStyleVersion))
{
    this._latestStyleVersion = style.Version;
    重新 FillFrom 一遍 start 与 current；
    return;
}
```

**`style.Version != _latestStyleVersion` 这就是「谁改了图层属性我什么时候知道」的答案**——每个 [BrushLayer](../BrushLayer) 属性变化 → `StyleLayer.Version` → `Style.Version` 变 → 这一段的 `if` 成立 → 重采样。见 [BrushLayer](../BrushLayer) 的 Version 链。

**第二段，`PlayingBasicTranisition`：** 时钟 `num`（本地或全局）>= `Brush.TransitionDuration` 就 `EndAnimation()`；否则按 `num / TransitionDuration` 在 `_startBrushState` 与目标 `Style` 之间插值，钳到 1。

**第三段，`PlayingAnimation`：** 取 `Brush.GetAnimation(style.AnimationToPlayOnBegin)`；为 null 或（非循环且时钟超 `Duration`）就 `EndAnimation()`；否则 `brushStateTimer = _brushTimer % Duration`、`isFirstCycle = _brushTimer < Duration`，然后分别用 `AnimateBrushState` 与 `AnimateBrushLayerState` 算出新状态。

**`Render` 的结构比想象简单。** 它遍历 `style.LayerCount` 层，每层：

1. `if (layer.IsHidden) continue;` —— 读的是 [StyleLayer](../StyleLayer)，不是状态。
2. 从 `_currentBrushLayerState` 取状态（**若字典只有一项就直接取那一项，不按名查**）。
3. `Sprite` 或 `Sprite.Texture` 为 null 就跳过。
4. 建 `SimpleMaterial`，处理覆盖纹理，然后按 `WidthPolicy` / `HeightPolicy` 三分支算 `w` / `h`，按翻转取负，最后 `rectangle2D.AddVisualOffset` / `AddVisualScale` / `AddVisualRotationOffset` 再 `drawContext.DrawSprite`。

**颜色合成是三层相乘**：

```csharp
simpleMaterial.Color       = state.Color * this.Brush.GlobalColor;
simpleMaterial.ColorFactor = state.ColorFactor * this.Brush.GlobalColorFactor;
simpleMaterial.AlphaFactor = state.AlphaFactor * this.Brush.GlobalAlphaFactor * contextAlpha;
```

`CreateTextMaterial` 则是 `_currentBrushState.CreateTextMaterial(drawContext)` 之后再乘上三个 `Global*`。**所以文字和图层的透明度来源不同：图层走 `Render`，文字走 `CreateTextMaterial`。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public BrushRenderer()`（`:139`） | 初始化两个 `BrushState`（`default`）、两个空字典、`_brushLocalTimer = 0`、状态 `None`、`_randomXOffset = -1f` / `_randomYOffset = -1f`（-1 是「尚未生成」的哨兵）。**`Brush` 为 null，`CurrentStyle` 为 null。** |
| `Brush` | `public Brush Brush { get; set; }`（`:49`） | 换外观。setter 在引用变化时：`_brushLocalTimer = 0`；按 `Layers.Count` 准备两个字典（首次 new，否则 `Clear()`）；若非 null 则把 `_styleOfCurrentState` 设为 `DefaultStyle` 或 `GetStyleOrDefault(CurrentState)`，并把 `BrushState` 与所有图层的 `BrushLayerState` **同时**写入 start 与 current。**这是「不进动画、直接落位」的赋值。** |
| `CurrentState` | `public string CurrentState { get; set; }`（`:98`） | **整套状态机的唯一决策入口**。setter 在值变化时清零本地时钟、把旧状态存为新起点、按目标样式的 `AnimationMode` 决定是否进 `PlayingBasicTranisition` / `PlayingAnimation`。**门槛是「旧状态非空」**——首次进入不播动画。 |
| `CurrentStyle` | `public Style CurrentStyle { get; }`（`:38`） | 只读，当前状态解析出的 [Style](../Style)。**`Brush == null` 时是 null**，此时 `Render` / `Update` 里的 `styleOfCurrentState.Version` 等访问会抛。 |
| `LastUpdatedFrameNumber` | `public ulong LastUpdatedFrameNumber { get; private set; }`（`:29`） | 最后一次 `Update` 的 `frameNumber`。[BrushListPanel](../BrushListPanel) 的 `OnRender` 用它判断「本帧是否已更新过」，避免同一帧跑两次 `Update`。 |
| `ForcePixelPerfectPlacement` | `public bool ForcePixelPerfectPlacement { get; set; }`（`:34`） | `Render` 里对 `rect.LocalPosition` 做 `MathF.Round`。由 [BrushListPanel](../BrushListPanel) 从 `Widget.ForcePixelPerfectRenderPlacement` 逐帧同步。 |
| `UseLocalTimer` | `public bool UseLocalTimer;`（`:814`） | **公有字段，不是属性**。`false` ⇒ 动画时钟 = `globalAnimTime`（全局同步）；`true` ⇒ 用自己的 `_brushLocalTimer`（逐控件独立）。由 `BrushListPanel` 从 `!Widget.UseGlobalTimeForAnimation` 逐帧同步。 |
| `Update` | `public void Update(ulong frameNumber, float globalAnimTime, float dt)`（`:176`） | 推进一帧。记 `_globalTime`、`LastUpdatedFrameNumber`，累加 `_brushLocalTimer`；若 `Brush != null` 则按三段分派（无变化重采样 / 过渡插值 / 关键帧动画）。**`Brush == null` 时只更新时钟不做任何事。** 无返回值。 |
| `IsUpdateNeeded` | `public bool IsUpdateNeeded()`（`:416`） | `状态 == PlayingBasicTranisition || 状态 == PlayingAnimation || (_styleOfCurrentState != null && _styleOfCurrentState.Version != _latestStyleVersion)`。**这是调用方决定「还要不要继续给我派帧」的依据。** |
| `Render` | `public void Render(TwoDimensionDrawContext drawContext, in Rectangle2D rect, float scale, float contextAlpha, Vector2 overlayOffset = default(Vector2))`（`:604`） | 逐层绘制。`Brush == null` 时整体跳过。逐层判 `layer.IsHidden`、取状态、判 sprite/texture、按 policy 算尺寸、按覆盖方式算偏移与尺寸、三层相乘颜色与透明度、翻转取负、`AddVisualOffset` / `AddVisualScale` / `AddVisualRotationOffset` / `ValidateVisuals`，最后 `drawContext.DrawSprite`。**`overlayOffset` 非 `default` 时会顶掉图层的 `OverlayXOffset` / `OverlayYOffset`。** |
| `CreateTextMaterial` | `public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)`（`:760`） | 文字材质。`this._currentBrushState.CreateTextMaterial(drawContext)` 之后再 `*= GlobalColorFactor`、`*= GlobalAlphaFactor`、`*= GlobalColor`。**`Brush == null` 时只返回未乘全局值的那份。** |
| `RestartAnimation` | `public void RestartAnimation()`（`:773`） | 强制重播。`_brushLocalTimer = 0`、状态置 `None`，然后按当前样式的 `AnimationMode` 立刻改成 `PlayingBasicTranisition` 或 `PlayingAnimation`。**注意它不看 `CurrentState` 是否刚变——无条件重播。** |
| `SetSeed` | `public void SetSeed(int seed)`（`:796`） | 只写 `_offsetSeed`。它决定 `GetRandomXOffset()` / `GetRandomYOffset()` 里 `new Random(seed).Next(0, 2048)` 的结果，即 [BrushLayer](../BrushLayer) 的 `UseRandomBaseOverlay*` 效果。**在第一次访问随机偏移之前调用才有效。** |
| `BrushRendererAnimationState` | `public enum { None, PlayingAnimation, PlayingBasicTranisition, Ended }`（`:847`） | 嵌套公有枚举。**`PlayingBasicTranisition` 是官方拼写（多一个 s），不要「修正」。** 详见 [BrushRendererAnimationState](.) 那页。 |

## 真实示例

**一、最小驱动循环**：喂 Brush、定状态、每帧 `Update` + `Render`。这正是 [BrushListPanel](../BrushListPanel) 内部做的事：

```csharp
private static BrushRenderer BuildRenderer(UIContext context, string brushName, string startState)
{
    BrushRenderer renderer = new BrushRenderer();
    renderer.Brush = context.GetBrush(brushName);
    renderer.CurrentState = startState;
    renderer.SetSeed(1234);
    renderer.Update(0UL, 0f, 0f);
    return renderer;
}

private static bool Advance(BrushRenderer renderer, ulong frameNumber, float appTime, float dt)
{
    renderer.Update(frameNumber, appTime, dt);
    return renderer.IsUpdateNeeded();
}
```

**二、切状态触发过渡**——`CurrentState` 是唯一入口，且 `TransitionDuration` 决定过渡长度：

```csharp
private static void SetHovered(BrushRenderer renderer, string brushName, bool hovered)
{
    Brush brush = renderer.Brush;
    if (brush == null) { return; }

    brush.TransitionDuration = 0.12f;
    renderer.CurrentState = hovered ? "Hovered" : "Default";
}
```

**三、改图层属性后靠 `IsUpdateNeeded` 自我发现**（不需要任何手动通知）：

```csharp
private static bool RetintLayer(BrushRenderer renderer, string layerName, Color tint)
{
    BrushLayer layer = renderer.Brush.GetLayer(layerName);
    if (layer == null) { return false; }

    layer.Color = tint;
    return renderer.IsUpdateNeeded();
}
```

**四、手动重播一段关键帧动画**：

```csharp
private static void ReplayLoop(BrushRenderer renderer, string animationName, string styleName)
{
    Style style = renderer.Brush.GetStyleOrDefault(styleName);
    if (style == null) { return; }

    style.AnimationMode = StyleAnimationMode.Animation;
    style.AnimationToPlayOnBegin = animationName;
    renderer.RestartAnimation();
}
```

**五、文字材质**——透明度来源与图层不同，走 `_currentBrushState` 再乘全局：

```csharp
private static TextMaterial BuildLabelMaterial(BrushRenderer renderer, TwoDimensionDrawContext drawContext)
{
    renderer.Update(1UL, 0.5f, 0f);
    return renderer.CreateTextMaterial(drawContext);
}
```

## 风险与边界

- **`CurrentStyle` 在 `Brush == null` 时是 null。** `Update` 的第一段重采样条件里有 `_styleOfCurrentState.Version` 的访问（`styleOfCurrentState` 在 `if (this.Brush != null)` 之内，但 `IsUpdateNeeded()` 的第三个条件**没有**这个保护——它显式判了 `_styleOfCurrentState != null`，所以是安全的）。真正会炸的是直接读 `renderer.CurrentStyle.LayerCount`。
- **`CurrentState` 首次赋值不播动画。** 门槛 `!string.IsNullOrEmpty(currentState)` 是「旧状态非空」。**这解释了为什么控件第一次出现时没有淡入。** 想让它第一次也播，得先设一次别的状态再设回来。
- **`RestartAnimation` 无条件重播。** 它不看状态是否刚变。所以在 `OnLateUpdate` / 每帧调用它会让动画永远从头开始。**它属于「一次性事件」而不是「每帧动作」。**
- **`SetSeed` 只在随机偏移首次生成之前有效。** `GetRandomXOffset()` 的判据是 `_randomXOffset < 0f`，一旦生成过就永久缓存在字段里。**之后再 `SetSeed` 不会改变已有偏移。**
- **随机偏移是「每渲染器一份、生成一次」。** `new Random(_offsetSeed).Next(0, 2048)` 的值范围是 **0–2047 像素**，并且**同一个 `_offsetSeed` 会同时决定 X 和 Y**——两个 getter 都调用同一个 `Random(seed)` 并各取一个 `Next`。所以「X 用种子 1、Y 用种子 2」是做不到的。
- **`Render` 的第五个参数会顶掉图层的覆盖偏移。** 条件是 `else if (overlayOffset == default(Vector2))` —— 传 `default` 时用 `OverlayXOffset` / `OverlayYOffset`，传非 `default` 时用传入值。`Vector2` 的 `==` 是逐分量比较，所以只有恰好 `(0,0)` 才算 default。[BrushListPanel](../BrushListPanel) 恒传 `default(Vector2)`。
- **`UseLocalTimer` 是公有字段。** 没有变更通知，但它每帧被 `BrushListPanel` 覆写一次，所以手动设置会在下一帧被冲掉——除非你自己驱动。
- **尺寸策略里有一个疑似笔误。** 纵向 `StretchToTarget` 分支判断读哪个 `Extend` 端点用的是 `layer.HorizontalFlip` 而不是 `layer.VerticalFlip`（[BrushLayer](../BrushLayer) 与 [BrushLayerSizePolicy](../BrushLayerSizePolicy) 两页都有详细说明）。这在 1.3.0 到 1.5.3 全版本一致。
- **`Sprite` 帧是硬切换。** `AnimateBrushLayerState` / `AnimateBrushState` 里是 `((double)num3 <= 0.9) ? sprite : sprite2`——进度 0.9 之前一直是起始图，之后瞬间换。**图像无法交叉淡入。**
- **`Update` 的 `dt` 不参与 `PlayingBasicTranisition` 的计时**，那一段用的是 `num = UseLocalTimer ? _brushLocalTimer : globalAnimTime`。所以用全局时间时钟时，传入的 `dt` 只会累加 `_brushLocalTimer`（被忽略），过渡长度由 `globalAnimTime` 的绝对值决定——**`dt` 只影响 `PlayingAnimation`。**
- **不会裁剪到父矩形。** `Render` 只判 `IsHidden` 与 sprite 是否为 null，**不做视口剔除**。剔除由调用方做——[BrushListPanel](../BrushListPanel) 的 `IsBrushUpdateNeeded` 里的 `AreaRect.IsCollide(EventManager.AreaRectangle)`。
- **没有 `Dispose`。** 持有两个字典和若干引用，生命周期跟随控件。
- **`Brush` setter 会丢弃动画状态。** 换 Brush 等于「重新开始」，`_startBrushState` 与 `_currentBrushState` 都被重置。所以「先设 Brush 再设 CurrentState」的顺序很关键——反过来第二次设 `CurrentState` 时 `_currentState` 已非空，会真的触发过渡。

## 跨版本提示

**这是本批 20 个类型里第二个在 1.3.15 发生公开形状变化的类型。**

| 版本 | 相对 1.3.0 的公开成员变化 |
| --- | --- |
| `1.3.15` | **+1 / -1**：`Render` 多出第六个参数 `Vector2 overlaySize = default(Vector2)` |
| `1.4.6` / `1.4.7` | 同上 **+1 / -1** |
| `1.5.3` | 同上 **+1 / -1** |

字节哈希 `ca1b3430` → `255c77db` → `d233592b` → `156deccf`，四组互异。

**实际影响**：`Render` 的新参数有默认值，所以 1.3.0 写法的五参调用在 1.3.15+ 上**照样能编译**（[BrushListPanel](../BrushListPanel) 就是这么调的）。但**渲染结果会变**——`overlaySize` 存在的意义就是让调用方能把覆盖纹理按调用方指定的尺寸绘制，所以 1.3.15+ 上覆盖相关表现与 1.3.0 不同。想要版本一致的外观，自己驱动 `Render` 时显式传入 `default(Vector2)` 或按新版语义传尺寸。

其余 14 条签名（`Brush` / `CurrentState` / `CurrentStyle` / `LastUpdatedFrameNumber` / `ForcePixelPerfectPlacement` / `UseLocalTimer` / `Update` / `IsUpdateNeeded` / `CreateTextMaterial` / `RestartAnimation` / `SetSeed` / 构造函数 / 嵌套枚举 / 类声明）在所有版本上逐条相同。

## 依赖关系

- 输入：[Brush](../Brush)（`DefaultStyle` / `GetStyleOrDefault` / `GetAnimation` / `GlobalColor` / `GlobalColorFactor` / `GlobalAlphaFactor` / `TransitionDuration`）、[Style](../Style)（`AnimationMode` / `AnimationToPlayOnBegin` / `Version` / `LayerCount` / `GetLayer` / `GetLayers`）与 [StyleLayer](../StyleLayer]
- 状态载体：[BrushState](../BrushState) 与 [BrushLayerState](../BrushLayerState) —— 两个内容相近但**接受属性集合不同**的 struct，见各自那页
- 尺寸与合成策略：[BrushLayerSizePolicy](../BrushLayerSizePolicy) 与 [BrushOverlayMethod](../BrushOverlayMethod)
- 动画数据：[BrushAnimation](../BrushAnimation) / [BrushLayerAnimation](../BrushLayerAnimation) / [BrushAnimationProperty](../BrushAnimationProperty) / [BrushAnimationKeyFrame](../BrushAnimationKeyFrame)，属性枚举是 [BrushAnimationPropertyType](../BrushAnimationPropertyType)
- 缓动：[AnimationInterpolation](../AnimationInterpolation)（`AnimateBrushLayerState` 与 `AnimateBrushState` 各调一次 `Ease`）
- 图层定义：[BrushLayer](../BrushLayer)（只读 policy / flip / overlay 这些不可动画的项）
- 绘制：`TaleWorlds.Library.TwoDimensionDrawContext` 的 `CreateSimpleMaterial` / `DrawSprite` / `CreateTextMaterial`，以及 `SimpleMaterial` / `TextMaterial` / `Texture` / `Sprite`
- 驱动方：[BrushListPanel](../BrushListPanel) 与 `TaleWorlds.GauntletUI.BaseTypes.BrushWidget`（两者结构几乎相同）
- 状态枚举：[BrushRendererAnimationState](.)；动画模式枚举是 [StyleAnimationMode](../StyleAnimationMode)
- 桶首页：[gui API 分区](../)