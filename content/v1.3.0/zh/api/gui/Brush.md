---
title: "Brush"
description: "UI 外观资源的根对象：三个字典（_styles / _layers / _brushAnimations）加四个 Global* 乘数，绝大多数属性都是转发到 DefaultStyle 或 DefaultStyleLayer 的代理；构造函数自带一个名为 Default 的层与样式，FillFrom 硬依赖源必须存在 Default 样式，Clone 会把名字加上 (Clone) 后缀。"
---

# Brush

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class Brush`
**Base:** 无（隐式 `System.Object`；不实现任何接口）
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Brush.cs`（全文 586 行）

## 概述

`Brush` 是 GauntletUI 里「一个可复用外观」的容器。它自己不画任何东西——它只**持有**外观的定义：若干 [Style](../Style)（一整套外观快照）、若干 [BrushLayer](../BrushLayer)（图层定义）、若干 [BrushAnimation](../BrushAnimation)（动画），外加三个全局乘数。真正的绘制由 [BrushRenderer](../BrushRenderer) 完成。

**最该先理解的一点：`Brush` 上绝大多数属性都是转发，不是存储。** 50 条公开成员里只有这些是自己的字段（带 `[Editor(false)]` 的自动属性或普通自动属性）：

- `Name`（`Brush.cs:25`）、`TransitionDuration`（`:31`）
- `TextHorizontalAlignment`（`:87`）、`TextVerticalAlignment`（`:93`）
- `GlobalColorFactor`（`:99`）、`GlobalAlphaFactor`（`:105`）、`GlobalColor`（`:111`）
- `SoundProperties`（`:116`）

而下面这**两组合转发属性必须背下来**，因为它们指向不同的层：

| 属性 | 转发到 | 源码 |
| --- | --- | --- |
| `Sprite` / `VerticalFlip` / `HorizontalFlip` / `Color` / `ColorFactor` / `AlphaFactor` / `HueFactor` / `SaturationFactor` / `ValueFactor` | `this.DefaultStyleLayer`（= `DefaultStyle.DefaultLayer`） | `:121`、`:137`、`:153`、`:168`、`:183`、`:198`、`:213`、`:228`、`:243` |
| `Font` / `FontStyle` / `FontSize` / `FontColor` / `TextColorFactor` / `TextAlphaFactor` / `TextHueFactor` / `TextSaturationFactor` / `TextValueFactor` | `this.DefaultStyle` | `:41`、`:56`、`:71`、`:258`、`:273`、`:288`、`:303`、`:318`、`:333` |

也就是说 `brush.Color = Color.Red` 改的不是那个叫 `"Default"` 的 [BrushLayer](../BrushLayer)，而是 `DefaultStyle` 里那个同名图层的 [StyleLayer](../StyleLayer) 副本。这个区别在动画系统里非常要紧（见「心智模型」）。

## 心智模型

**把 `Brush` 想成「外观模板的深拷贝源」，把渲染想成它的一次快照。** 整条链路是这样串起来的：

**第一步，构造函数已经造好了一个最小可用形状。** `Brush()`（`:377`）不是空构造器，它建了三个字典、`new SoundProperties()`、把文本对齐设成双向 Center，然后造一个 [BrushLayer](../BrushLayer)，**把它的 `Name` 设为 `"Default"`**，加进 `_layers`，再造一个 `Style` 包住它，设 `Name = "Default"`、`SetAsDefaultStyle()`，最后 `AddStyle(DefaultStyle)`。所以 `new Brush()` 出来的东西**立刻就是合法的**——有一个层、一个样式、没有图。

**第二步，`Global*` 是乘数不是替换。** `BrushRenderer.Render` 最终写进材质的是：

```csharp
simpleMaterial.Color       = state.Color * this.Brush.GlobalColor;
simpleMaterial.ColorFactor = state.ColorFactor * this.Brush.GlobalColorFactor;
simpleMaterial.AlphaFactor = state.AlphaFactor * this.Brush.GlobalAlphaFactor * contextAlpha;
```

（`BrushRenderer.cs` 的 `Render` 方法内。）所以把 `GlobalAlphaFactor` 设成 0.5f 是「整体半透明」，不是「改成半透明的白色」。三个字段的构造默认值分别是 `1f` / `1f` / `Color.White`。`BrushListPanel.UpdateAnimationPropertiesSubTask(float alphaFactor)` 就是靠写 `Brush.GlobalAlphaFactor` 实现整棵子树淡出的。

**第三步，改图层属性会通过 Version 链自动让渲染器重画。** 这条链是这个子系统最漂亮的设计：

`BrushLayer` 的**每个** setter 都在值变化时把 `Version` 加一（见 [BrushLayer](../BrushLayer)）。`StyleLayer.Version` 的 getter 是 `this._localVersion + this.SourceLayer.Version`（`StyleLayer.cs:22`）——直接引用源图层的版本号。`Style.Version` 的 getter 把 `_localVersion << 32`、所有图层 Version 之和、以及 `DefaultStyleVersion` 三段拼成一个 `long`（`Style.cs:38`-`:49`）。而 [BrushRenderer](../BrushRenderer) 的 `IsUpdateNeeded()` 就是 `this._styleOfCurrentState.Version != this._latestStyleVersion`。

**结论：改 `BrushLayer` 或 `StyleLayer` 的任何属性 → Version 变 → `IsUpdateNeeded()` 变 true → 渲染器下一帧重新采样。你不需要手写任何「标脏」调用。** 反过来，如果你新建了一个 `BrushLayer` 却没把它挂进 `Style`，那份改动永远不会进画面。

**第四步，`Clone` 是「唯一安全的改法」。** `Clone()`（`:526`）的实现是：新建一个空 `Brush` → `FillFrom(this)` → `Name = this.Name + "(Clone)"` → `ClonedFrom = this` → 返回。`FillFrom` 是**彻底的深拷贝**：`_layers` 整个重建（每个 [BrushLayer](../BrushLayer) 都 `new` + `FillFrom`），`_styles` 整个重建（每个 [Style](../Style) 都 `new Style(this._layers.Values)` + `FillFrom`），`_brushAnimations` 整个重建（每个 [BrushAnimation](../BrushAnimation) 都 `new` + `FillFrom`），`SoundProperties` 也是 `new` + `FillFrom`。

所以 `Clone()` 之后两个 Brush **没有任何共享的可变状态**。这就是为什么 [BrushListPanel](../BrushListPanel) 与 [BrushWidget](../BrushWidget) 都在「第一次用到时克隆一次并缓存」：`ReadOnlyBrush` 给渲染器读（共享），`Brush` getter 给业务写（克隆体）。

`ClonedFrom` / `IsCloneRelated` 就是为了在克隆体之间找回「同源」关系——`IsCloneRelated(Brush brush)` 判 `this.ClonedFrom == brush || brush.ClonedFrom == this || brush.ClonedFrom == this.ClonedFrom`（`:571`）。但要注意：**这两个成员在整个 1.3.0 源码树里没有任何外部调用点**，只有 `Clone` 自己写 `ClonedFrom`。它们是给外部（未来）用的钩子。

**第五步，Override 机制是 Brush 唯一的外来注入口。** [BrushFactory](../BrushFactory) 解析 XML 时遇到 `OverrideBrush="X"` 属性，不会立刻生效，而是把这条覆盖请求存进 `_overriddenBrushes`；等被覆盖的 `X` 真正被加载之后，才调 `overrideBrush.FillForOverride(originalBrush)`（`:474`），而 `FillForOverride` 的实现只有两行：

```csharp
internal void FillForOverride(Brush originalBrush)
{
    this.OverriddenBrush = originalBrush;
    this.FillFrom(this.OverriddenBrush);
}
```

所以 `OverriddenBrush` 是一条「我覆盖了谁」的回链，赋值后立刻深拷贝。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public Brush()`（`:377`） | 非空。建三个字典、建 `SoundProperties`、文本对齐设 Center、造并注册名为 `"Default"` 的层与样式、`SetAsDefaultStyle()`、`AddStyle(DefaultStyle)`、`ClonedFrom = null`、`TransitionDuration = 0.05f`、`GlobalColorFactor = 1f`、`GlobalAlphaFactor = 1f`、`GlobalColor = Color.White`。**出来即可用，不需要任何额外初始化。** |
| `Name` | `[Editor(false)] public string Name { get; set; }`（`:25`） | Brush 标识。`ToString()` 在非空时直接返回它。`Clone()` 会把它改成 `原名 + "(Clone)"`。 |
| `TransitionDuration` | `[Editor(false)] public float TransitionDuration { get; set; }`（`:31`） | **BasicTransition 模式下**状态切换动画的总时长（秒），默认 `0.05f`。被 [BrushRenderer](../BrushRenderer) 的 `PlayingBasicTranisition` 分支读作除数。设 0 会让 `EndAnimation` 把状态直接落到 `None`。 |
| `DefaultStyle` | `public Style DefaultStyle { get; private set; }`（`:36`） | 基准样式。**setter 是 private**，只有构造函数与 `FillFrom` 会写。所有 `Font*` / `Text*Factor` 转发属性都打到这里。 |
| `DefaultStyleLayer` | `public StyleLayer DefaultStyleLayer { get; }`（`:358`） | `DefaultStyle.DefaultLayer`，而后者是 `_layers["Default"]`（`Style.cs:80`）。**间接依赖名为 `"Default"` 的层存在**，删掉它就炸。 |
| `DefaultLayer` | `public BrushLayer DefaultLayer { get; }`（`:368`） | `_layers["Default"]`。**没有判空、没有兜底**，`RemoveLayer("Default")` 之后读它直接 `KeyNotFoundException`。 |
| `Layers` | `[Editor(false)] public Dictionary<string, BrushLayer>.ValueCollection Layers { get; }`（`:348`） | 图层定义的**值集合**（只读视图，底层字典改动会反映进来）。要按键取用 `GetLayer(name)`。 |
| `Styles` | `[Editor(false)] public Dictionary<string, Style>.ValueCollection Styles { get; }`（`:413`） | 样式集合的只读视图。`AddLayer` / `RemoveLayer` 内部就是遍历它给每个样式同步图层。 |
| `GlobalColorFactor` | `[Editor(false)] public float GlobalColorFactor { get; set; }`（`:99`） | 全局颜色乘数，默认 `1f`。渲染时与 `state.ColorFactor` 相乘。 |
| `GlobalAlphaFactor` | `[Editor(false)] public float GlobalAlphaFactor { get; set; }`（`:105`） | 全局透明度乘数，默认 `1f`。渲染时 `state.AlphaFactor * 本值 * contextAlpha`。 |
| `GlobalColor` | `[Editor(false)] public Color GlobalColor { get; set; }`（`:111`） | 全局颜色乘数，默认 `Color.White`。渲染时 `state.Color * 本值`。 |
| `SoundProperties` | `public SoundProperties SoundProperties { get; set; }`（`:116`） | 状态音 / 事件音表。构造函数已 `new`，`FillFrom` 时会**再 new 一个**并从源拷贝内容（不共享实例）。 |
| `GetStyle` | `public Style GetStyle(string name)`（`:403`） | 按名取样式，**找不到返回 `null`**（`TryGetValue` 的 out 值）。 |
| `GetStyleOrDefault` | `public Style GetStyleOrDefault(string name)`（`:422`） | 同上，但 null 时回退到 `DefaultStyle`。这是渲染器用的那个（见 [BrushRenderer](../BrushRenderer) 的 `CurrentState` setter）。 |
| `AddStyle` | `public void AddStyle(Style style)`（`:430`） | `_styles.Add(style.Name, style)`。**重名直接 `ArgumentException`**，没有覆盖语义。要覆盖就先 `RemoveStyle`。 |
| `RemoveStyle` | `public void RemoveStyle(string styleName)`（`:437`） | `_styles.Remove(styleName)`，**键不存在时静默无操作**。但 `RemoveStyle("Default")` 会让 `DefaultStyle` 字段指向一个已不在字典里的孤儿对象。 |
| `AddLayer` | `public void AddLayer(BrushLayer layer)`（`:443`） | `_layers.Add(layer.Name, layer)`，然后**遍历全部 `Styles` 给每个 `new StyleLayer(layer)` 加进去**。重名同样 `ArgumentException`。这一步是 Version 链能生效的关键：新层进了所有样式。 |
| `RemoveLayer` | `public void RemoveLayer(string layerName)`（`:453`） | `_layers.Remove(layerName)` + 遍历 `Styles` 调 `style.RemoveLayer(layerName)`。**注意 `Style.RemoveLayer` 内部是 `this._layersWithIndex.Remove(this._layers[layerName])`（`Style.cs:558`）——样式里没有同名层就 `KeyNotFoundException`。** |
| `GetLayer` | `public BrushLayer GetLayer(string name)`（`:463`） | 按名取图层定义，**找不到返回 `null`**。 |
| `FillForOverride` | `internal void FillForOverride(Brush originalBrush)`（`:474`） | `internal`，外部调不到。`OverriddenBrush = originalBrush; FillFrom(OverriddenBrush);`。唯一调用点是 [BrushFactory](../BrushFactory) 的 `LoadBrushFromFileAux`。 |
| `FillFrom` | `public void FillFrom(Brush brush)`（`:481`） | 彻底深拷贝。**硬依赖 `brush._styles["Default"]` 存在**（`Brush.cs:498` 是裸索引器，不是 `TryGetValue`），源没有名为 `"Default"` 的样式就 `KeyNotFoundException`。不拷贝 `ClonedFrom` 与 `OverriddenBrush`；`SoundProperties` 换成新实例（`Brush.cs:521`-`:522`）。 |
| `Clone` | `public Brush Clone()`（`:526`） | `new Brush()` + `FillFrom(this)` + 改名加 `(Clone)` 后缀 + `ClonedFrom = this`。返回**与本对象无共享可变状态**的新 Brush。 |
| `AddAnimation` | `public void AddAnimation(BrushAnimation animation)`（`:536`） | `_brushAnimations.Add(animation.Name, animation)`。**重名 `ArgumentException`**；且 `animation.Name` 为 null 会抛。 |
| `GetAnimation` | `public BrushAnimation GetAnimation(string name)`（`:542`） | `if (name != null && TryGetValue(...))`——**对 null 显式防护**，找不到返回 `null`。 |
| `GetAnimations` | `public IEnumerable<BrushAnimation> GetAnimations()`（`:553`） | 全部动画的值集合视图。 |
| `ToString` | `public override string ToString()`（`:559`） | `Name` 非空就返回 `Name`，否则 `base.ToString()`。日志与调试输出里最常看到的那个字符串。 |
| `IsCloneRelated` | `public bool IsCloneRelated(Brush brush)`（`:569`） | 判「两个 Brush 是否同源」：`ClonedFrom` 互指，或两者的 `ClonedFrom` 相同。**注意第三个条件在两边 `ClonedFrom` 都是 null 时为真**——两个从未克隆过的 Brush 会「相关」。整个 1.3.0 树里没有任何外部调用点。 |

## 真实示例

克隆一份基础外观，在克隆体上改颜色与尺寸——原 Brush 完全不受影响：

```csharp
private static Brush BuildTintedBrush(UIContext context, string sourceBrushName)
{
    Brush brush = context.GetBrush(sourceBrushName).Clone();
    brush.Color = Color.White;
    brush.AlphaFactor = 0.85f;
    brush.GlobalAlphaFactor = 1f;
    return brush;
}
```

加一个新的图层（不只是改 Default 层）。顺序很重要：必须先 `AddLayer` 进 Brush，它才会被自动装进每一个 [Style](../Style)：

```csharp
private static void AddHighlightLayer(Brush brush)
{
    BrushLayer highlight = new BrushLayer();
    highlight.Name = "Highlight";
    highlight.WidthPolicy = BrushLayerSizePolicy.StretchToTarget;
    highlight.HeightPolicy = BrushLayerSizePolicy.StretchToTarget;
    highlight.Color = new Color(1f, 0.8f, 0.2f, 1f);
    brush.AddLayer(highlight);

    // 改 style 层上的值，这才是真正被渲染器读到的那一份
    Style style = brush.GetStyleOrDefault("Default");
    StyleLayer layer = style.GetLayer("Highlight");
    if (layer != null)
    {
        layer.AlphaFactor = 0.5f;
    }
}
```

挂一段动画并让渲染器按名字取用：

```csharp
private static void AttachPulseAnimation(Brush brush)
{
    BrushAnimation animation = new BrushAnimation();
    animation.Name = "Pulse";
    animation.Duration = 0.6f;
    animation.Loop = true;
    animation.InterpolationType = AnimationInterpolation.Type.EaseInOut;
    animation.InterpolationFunction = AnimationInterpolation.Function.Sine;
    brush.AddAnimation(animation);

    BrushAnimation lookup = brush.GetAnimation("Pulse");
    if (lookup != null)
    {
        lookup.Duration = 0.8f;
    }
}
```

## 风险与边界

- **`FillFrom` 硬依赖源的 `"Default"` 样式。** `Brush.cs:498` 是 `Style style = brush._styles["Default"];`，**索引器不是 `TryGetValue`**。对一个被 `RemoveStyle("Default")` 过的 Brush 调 `FillFrom`（包括间接的 `Clone()`）会 `KeyNotFoundException`。
- **`AddStyle` / `AddLayer` / `AddAnimation` 都是 `Dictionary.Add`，重名即抛。** 三者都没有「覆盖」版本。想覆盖先 `Remove*` 再 `Add*`——但 `RemoveLayer` 在样式不同步时会先炸（见下条）。
- **`RemoveLayer` 可能二次抛出。** `Brush.RemoveLayer` 遍历 `Styles` 调 `Style.RemoveLayer(name)`，而后者第一行是 `this._layersWithIndex.Remove(this._layers[layerName])`——索引器。如果某个样式里没有这个层（例如你先 `AddLayer` 再手工从某个 Style 里删过），就会 `KeyNotFoundException`。
- **删掉 `"Default"` 层会毒化整个对象。** 之后 `Brush.DefaultLayer`（`_layers["Default"]`）、`Brush.DefaultStyleLayer`（→ `Style.DefaultLayer` → `_layers["Default"]`）、以及几乎所有转发属性（`Sprite` / `Color` / `ColorFactor` …）全部抛异常。
- **`RemoveStyle("Default")` 留下孤儿。** `DefaultStyle` 字段仍然指向那个对象，`DefaultStyleLayer` 仍能用，但 `GetStyleOrDefault("任意名")` 的兜底路径返回的是一个已不在字典里的样式；下一次 `FillFrom` 会 `KeyNotFoundException`。
- **`AddAnimation` 遇到 null 名字会抛。** `Dictionary.Add(null, value)` 是 `ArgumentNullException`。`GetAnimation` 有 null 防护，`AddAnimation` 没有——这个不对称很容易踩。
- **`IsCloneRelated` 在两个未克隆的 Brush 之间返回 true。** 因为 `this.ClonedFrom == this.ClonedFrom` 为 `null == null`。想用它判断「是否同一个原始模板」必须额外判 `ClonedFrom != null`。而且它在 1.3.0 全树无调用者。
- **`DefaultTransitionDuration` 常量是死的。** 它在 `Brush.cs:575` 声明为 `private const float DefaultTransitionDuration = 0.05f`，但构造函数 `:396` 写的是字面量 `0.05f`。改这个常量不会有任何效果。
- **`TransitionDuration` 只管 BasicTransition。** 走 `StyleAnimationMode.Animation`（关键帧动画）时时长由 [BrushAnimation](../BrushAnimation) 的 `Duration` 决定，`TransitionDuration` 完全不参与。
- **全局乘数与图层颜色是乘不是叠。** `material.Color = state.Color * Brush.GlobalColor`，所以 `GlobalColor = Color.Black` 会把整个 Brush 变成纯黑而不是「乘一个黑色」以外的任何效果。想做「变暗」要用 `GlobalColorFactor` 或 `GlobalAlphaFactor`。
- **`SoundProperties` 不共享实例。** `FillFrom` 会 `this.SoundProperties = new SoundProperties();` 再填（`Brush.cs:521`-`:522`）。所以克隆之后往克隆体的 `SoundProperties` 里加音效不会影响原 Brush——这正是想要的语义，但反过来也意味着「先往源 Brush 加音效、再 Clone」是可行路径，「先 Clone 再改源」不会传播过来。
- **转发属性改的是 StyleLayer 副本。** `brush.Color = X` 打的是 `DefaultStyle.DefaultLayer`（一个 [StyleLayer](../StyleLayer)），**不是** `DefaultLayer`（那个 [BrushLayer](../BrushLayer) 定义）。很多人以为改的是图层定义，实际上改的是当前 `DefaultStyle` 的那份样式副本。想改定义要用 `brush.GetLayer("Default").Color = X`。
- **`StyleLayer.Name` 的 setter 是空实现。** `StyleLayer.cs:36`-`:38` 的 `set { }` 意味着 StyleLayer 的名字**不可改**，永远镜像 `SourceLayer.Name`。想改层名只能改 [BrushLayer](../BrushLayer) 的 `Name`。

## 跨版本提示

五棵源码树（`1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3`）的 public/protected 签名集合比对：**50 条签名，增减均为 0**。1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 全都与 1.3.0 逐条相同。

字节哈希是四组互异值（`ac709f1c` → `51dacb54` → `78bf4a03` → `ddbb69ac`），说明实现体有改动但从未触及公开形状。

因此：**跨 1.3 → 1.5，`Brush` 的 API 是稳定的。** 唯一需要留意的方向性变化是它内部持有的 [BrushLayer](../BrushLayer) 在 1.3.15 起新增了 `ImageFitType` / `ImageFitHorizontalAlignment` / `ImageFitVerticalAlignment` 三个公有字段——如果你在遍历 `Brush.Layers` 时反射枚举字段，那个形状在 1.3.0 与 1.3.15 之间变过一次。

## 依赖关系

- 组合的三份数据：[Style](../Style)（含 [StyleLayer](../StyleLayer)）、[BrushLayer](../BrushLayer)、[BrushAnimation](../BrushAnimation) / [BrushLayerAnimation](../BrushLayerAnimation) / [BrushAnimationProperty](../BrushAnimationProperty)
- 数据接口：[BrushLayer](../BrushLayer) 与 [StyleLayer](../StyleLayer) 都实现 `IBrushLayerData`；[Style](../Style) 与 [StyleLayer](../StyleLayer) 都实现 `IDataSource`
- 音频：[AudioProperty](../AudioProperty) 经由 [SoundProperties](../SoundProperties) 挂在 `SoundProperties` 属性上
- 插值曲线：[AnimationInterpolation](../AnimationInterpolation) 被动画系统调用，缓动参数由 [BrushAnimation](../BrushAnimation) 提供
- 创建与加载：[BrushFactory](../BrushFactory) 是全树唯一的生产入口（`LoadBrushFrom` 内部就是 `new Brush()` + `FillFrom` + `ApplyBrushAttributesFrom`），`internal FillForOverride` 也只被它调用
- 消费方：[BrushRenderer](../BrushRenderer) 持有 `Brush` 并按 `CurrentState` 取 `GetStyleOrDefault`；[BrushListPanel](../BrushListPanel) 与 [BrushWidget](../BrushWidget) 负责「克隆一份给每个控件实例用」
- 上下文入口：[UIContext](../UIContext) 的 `GetBrush(string)` 与 `Brushes` / `DefaultBrush` 属性
- 桶首页：[gui API 分区](../)