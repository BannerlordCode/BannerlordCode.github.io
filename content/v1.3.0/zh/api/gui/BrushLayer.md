---
title: "BrushLayer"
description: "图层定义：26 个带 [Editor(false)] 的属性，每个 setter 在值变化时把 Version 加一，Version 是 StyleLayer.Version → Style.Version → BrushRenderer.IsUpdateNeeded() 这条失效链的起点；OverlaySprite 的 setter 还会自动改写 OverlayMethod。"
---

# BrushLayer

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushLayer : IBrushLayerData`
**Base:** 无（隐式 `System.Object`；实现 `IBrushLayerData`）
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushLayer.cs`（全文 869 行）

## 概述

`BrushLayer` 是「一张图层长什么样」的**定义**。它不是 [StyleLayer](../StyleLayer)——后者是某个具体 [Style](../Style) 里的**副本**。两者的区别是理解整个外观系统的关键：

- `BrushLayer` 活在 [Brush](../Brush) 的 `_layers` 字典里，是所有样式的共同底本。
- [StyleLayer](../StyleLayer) 活在某个 [Style](../Style) 的 `_layers` 里，`SourceLayer` 指回一个 `BrushLayer`。

`StyleLayer` 的每个属性 getter 都是「先看自己的覆盖值，没覆盖就读 `SourceLayer`」的形态。所以**改 `BrushLayer` 会影响这个 Brush 的所有样式；改 `StyleLayer` 只影响那一个样式。**

26 个属性全部带 `[Editor(false)]`（XML 名字与属性名一一对应，写在 `<Layers>` 的子节点上）。它们的 setter 形状统一到令人发指的地步——每个都是：

```csharp
[Editor(false)]
public Color Color
{
    get { return this._color; }
    set
    {
        if (value != this._color)
        {
            this._color = value;
            uint version = this.Version;
            this.Version = version + 1U;
        }
    }
}
```

**这就是本类存在的技术理由：版本号。** 26 个属性每一个都会在「值真的变了」时把 `Version` 加一，`Version` 是 `public uint Version { get; private set; }`（`:13`）。这条链通向：

`StyleLayer.Version` → `this._localVersion + this.SourceLayer.Version`（`StyleLayer.cs:22`）
→ `Style.Version` → `((long)_localVersion << 32 | 所有图层 Version 之和) + DefaultStyleVersion`（`Style.cs:38`-`:49`）
→ [BrushRenderer](../BrushRenderer) 的 `IsUpdateNeeded()` → `this._styleOfCurrentState.Version != this._latestStyleVersion`

**所以改图层属性不需要任何「标脏」调用，渲染器下一帧自己会发现。** 反过来，如果你 `new BrushLayer()` 出来却不调 [Brush](../Brush) 的 `AddLayer`，那份改动永远进不了画面——因为没有 StyleLayer 指向它。

## 心智模型

**把 `BrushLayer` 想成「样式的 CSS 类」，把 [StyleLayer](../StyleLayer) 想成「元素的 class 实例」。**

那么 `FillFrom` 的语义就清楚了（`:663`）——它是「把一个图层的全部 26 个属性拷过来」，是 [Brush](../Brush) 深拷贝时对每个图层做的事。逐条拷贝的顺序是 `Sprite, Color, ColorFactor, AlphaFactor, HueFactor, SaturationFactor, ValueFactor, XOffset, YOffset, Rotation, Name, IsHidden, WidthPolicy, HeightPolicy, OverridenWidth, OverridenHeight, HorizontalFlip, VerticalFlip, OverlayMethod, OverlaySprite, ExtendLeft, ExtendRight, ExtendTop, ExtendBottom, OverlayXOffset, OverlayYOffset, UseRandomBaseOverlayXOffset, UseRandomBaseOverlayYOffset, UseOverlayAlphaAsMask`。

**注意 `OverlayMethod` 在 `OverlaySprite` 之前被拷贝。** 而 `OverlaySprite` 的 setter 会在值非 null 且 `OverlayMethod == None` 时把它改成 `CoverWithTexture`（`:523`-`:551`）。所以 `FillFrom` 的结果可能是「源里 `OverlayMethod=None` 但 `OverlaySprite` 非 null」这种不一致状态被**修正**成 `CoverWithTexture`——拷贝行为并非纯数据搬运。

构造函数（`:634`）给出一组明确的默认值，其中两个值得单独记：

- `WidthPolicy = BrushLayerSizePolicy.StretchToTarget`，`HeightPolicy = BrushLayerSizePolicy.StretchToTarget`——**默认是拉伸到目标尺寸**，不是用原图尺寸。
- `HueFactor / SaturationFactor / ValueFactor = 0f`（不是 1f）——这三个是 HSV 加法修正量，0 表示「不修正」。
- `Color = new Color(1f,1f,1f,1f)`，`ColorFactor = AlphaFactor = 1f`。

**尺寸策略决定最终贴多大。** 三个取值（[BrushLayerSizePolicy](../BrushLayerSizePolicy)）在 [BrushRenderer](../BrushRenderer) 的 `Render` 里各占一段：

```csharp
if (layer.WidthPolicy == StretchToTarget) { w = targetW + (ExtendRight + ExtendLeft) * scale; x -= (HorizontalFlip ? ExtendRight : ExtendLeft) * scale; }
else if (layer.WidthPolicy == Original)       { w = (float)sprite.Width * scale; }
else if (layer.WidthPolicy == Overriden)      { w = layer.OverridenWidth * scale; }
```

**这些分支读的是 `layer.XxxPolicy`（即 [StyleLayer](../StyleLayer)），不是 `_currentBrushLayerState`。** 因为 [BrushLayerState](../BrushLayerState) 里根本没有 `WidthPolicy` / `HeightPolicy` / `HorizontalFlip` / `VerticalFlip` / `OverlayMethod` / `OverlaySprite` / `IsHidden` 这些字段——`BrushLayerState.FillFrom` 只搬 16 个。这是本子系统的一个硬性分层：**可插值的属性进动画状态，不可插值的属性直接读样式层。**

顺带一个真实的小怪癖：垂直方向那段用的是

```csharp
float num8 = layer.ExtendTop;
if (layer.HorizontalFlip) { num8 = layer.ExtendBottom; }
num6 = vector2.Y; num6 += (layer.ExtendTop + layer.ExtendBottom) * scale; num2 -= num8 * scale;
```

**判断条件是 `layer.HorizontalFlip` 而不是 `VerticalFlip`。** 这看起来是官方的一处笔误，但在 1.3.0 到 1.5.3 的所有版本里都原样保留。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public BrushLayer()`（`:634`） | 设 20 个默认值。关键：`Color/ColorFactor/AlphaFactor = 白/1/1`，`Hue/Saturation/Value = 0`，`Width/HeightPolicy = StretchToTarget`，`OverlayMethod = None`，四个 `Extend* = 0`，两个 `UseRandomBase* = false`，`UseOverlayAlphaAsMask = false`。`Sprite` 与 `OverlaySprite` 保持 null。 |
| `Version` | `public uint Version { get; private set; }`（`:13`） | **改动计数器**。除 `OverlaySprite` 外的 25 个属性在值变化时 +1（`OverlaySprite` 的 setter 无论值是否变化都 +1）。整个失效链的起点。 |
| `Name` | `[Editor(false)] public string Name { get; set; }`（`:19`） | 层名。**同时是 [Brush](../Brush) 的 `_layers` 字典键**——`AddLayer` 用 `layer.Name`，`GetLayer(name)` 用它查。[BrushFactory](../BrushFactory) 的 `LoadBrushLayerInto` 有一条特殊规则：`Name` 属性只在 `brushLayer.Name` 为空时才生效（`BrushFactory.cs` 的 `key == "Name" && string.IsNullOrEmpty(brushLayer.Name)`），所以往一个已有层上打补丁不会改名。 |
| `Sprite` | `[Editor(false)] public Sprite Sprite { get; set; }`（`:40`） | 主图。渲染时 `sprite == null` 或 `sprite.Texture == null` 会**整层跳过不画**。 |
| `Color` | `[Editor(false)] public Color Color { get; set; }`（`:61`） | 层颜色。渲染时 `material.Color = state.Color * Brush.GlobalColor`——**是乘不是替换**。 |
| `ColorFactor` / `AlphaFactor` / `HueFactor` / `SaturationFactor` / `ValueFactor` | 见 `:82` / `:103` / `:124` / `:145` / `:166` | 五个颜色因子。`ColorFactor`、`AlphaFactor` 与 [Brush](../Brush) 的全局因子相乘；H/S/V 是 HSV 加法修正量（默认 0）。 |
| `IsHidden` | `[Editor(false)] public bool IsHidden { get; set; }`（`:186`） | 整层不画。**渲染器读的是 [StyleLayer](../StyleLayer) 的这个属性，不是动画状态**——所以它不可动画。 |
| `UseOverlayAlphaAsMask` | `[Editor(false)] public bool UseOverlayAlphaAsMask { get; set; }`（`:206`） | 覆盖纹理的 alpha 当作遮罩用。为真时覆盖偏移改用层自身的 `XOffset`/`YOffset`，且覆盖纹理宽高改用目标矩形尺寸而非 sprite 自身尺寸。 |
| `XOffset` / `YOffset` | `[Editor(false)] public float XOffset { get; set; }`（`:229`）/ `:250` | 层的平移。渲染时 `x = rect.X + XOffset * scale`。**这两个是可动画的**（在 [BrushLayerState](../BrushLayerState) 里有同名字段）。 |
| `Rotation` | `[Editor(false)] public float Rotation { get; set; }`（`:271`） | 旋转角。最终经 `rectangle2D.AddVisualRotationOffset(brushLayerState.Rotation)` 应用。 |
| `ExtendLeft` / `ExtendRight` / `ExtendTop` / `ExtendBottom` | `:292` / `:313` / `:334` / `:355` | 九宫格拉伸量。仅在对应 policy 为 `StretchToTarget` 时参与尺寸计算。 |
| `OverridenWidth` / `OverridenHeight` | `[Editor(false)] public float OverridenWidth { get; set; }`（`:376`）/ `:397` | 仅在对应 policy 为 `Overriden` 时作为尺寸。**注意拼写是 `Overriden`（多一个 d）**，与 [BrushLayerSizePolicy](../BrushLayerSizePolicy) 一致。 |
| `WidthPolicy` / `HeightPolicy` | `[Editor(false)] public BrushLayerSizePolicy WidthPolicy { get; set; }`（`:418`）/ `:439` | 尺寸策略，默认 `StretchToTarget`。**不可动画**。 |
| `HorizontalFlip` / `VerticalFlip` | `[Editor(false)] public bool HorizontalFlip { get; set; }`（`:460`）/ `:481` | 翻转。渲染时 `w = HorizontalFlip ? -w : w`、`h = VerticalFlip ? -h : h`。**不可动画**。 |
| `OverlayMethod` | `[Editor(false)] public BrushOverlayMethod OverlayMethod { get; set; }`（`:503`） | 覆盖合成方式（[BrushOverlayMethod](../BrushOverlayMethod)）。`CoverWithTexture` 且 `OverlaySprite != null` 时才走覆盖分支。**不可动画**。 |
| `OverlaySprite` | `[Editor(false)] public Sprite OverlaySprite { get; set; }`（`:523`） | 覆盖图。**setter 有额外副作用**：无条件 `Version++`；若新值非 null 且 `OverlayMethod == None` 则把 `OverlayMethod` 改成 `CoverWithTexture`；若新值是 null 则把 `OverlayMethod` 改回 `None`。 |
| `OverlayXOffset` / `OverlayYOffset` | `[Editor(false)] public float OverlayXOffset { get; set; }`（`:553`）/ `:574` | 覆盖图偏移。`UseOverlayAlphaAsMask` 为真时被层自身的 `XOffset`/`YOffset` 取代。**可动画**（[BrushLayerState](../BrushLayerState) 里有）。 |
| `UseRandomBaseOverlayXOffset` / `UseRandomBaseOverlayYOffset` | `:593` / `:614` | 给覆盖偏移加一个随机基底。随机数由 [BrushRenderer](../BrushRenderer) 的 `new Random(_offsetSeed).Next(0, 2048)` 生成，种子来自控件的 `_seed`。 |
| `FillFrom` | `public void FillFrom(BrushLayer brushLayer)`（`:663`） | 拷贝全部 26 个属性。**参数不判空**。注意 `OverlayMethod` 先于 `OverlaySprite` 拷贝，所以可能把源的 `None` 修正成 `CoverWithTexture`。 |
| `GetValueAsFloat` | `public float GetValueAsFloat(BrushAnimationPropertyType propertyType)`（`:697`） | 按枚举取值。接受 18 个：`ColorFactor`、`AlphaFactor`、`HueFactor`、`SaturationFactor`、`ValueFactor`、`OverlayXOffset`、`OverlayYOffset`、`XOffset`、`YOffset`、`Rotation`、`OverridenWidth`、`OverridenHeight`、`ExtendLeft/Right/Top/Bottom`。**其余走 `Debug.FailedAssert` 后返回 `0f`。** |
| `GetValueAsColor` | `public Color GetValueAsColor(BrushAnimationPropertyType propertyType)`（`:747`） | **只接受 `Color`**。其余（含 `FontColor`）走 `FailedAssert` 后返回 `Color.Black`。 |
| `GetValueAsSprite` | `public Sprite GetValueAsSprite(BrushAnimationPropertyType propertyType)`（`:758`） | 接受 `Sprite` **和** `OverlaySprite`**两个**（与 `BrushLayerState.SetValueAsSprite` 只接受一个不同）。其余走 `FailedAssert` 后返回 `null`。 |
| `ToString` | `public override string ToString()`（`:773`） | `Name` 非空返回 `Name`，否则 `base.ToString()`。 |

## 真实示例

改图层定义（影响该 Brush 的所有样式）——因为 setter 会自动 `Version++`，不需要额外通知：

```csharp
private static void TweakLayerDefinition(Brush brush)
{
    BrushLayer layer = brush.GetLayer("Default");
    if (layer == null) { return; }

    layer.WidthPolicy = BrushLayerSizePolicy.Overriden;
    layer.OverridenWidth = 64f;
    layer.OverridenHeight = 64f;
    layer.Color = new Color(1f, 1f, 1f, 1f);
    layer.AlphaFactor = 0.6f;
}
```

只改一个样式的副本（不影响其它样式）——这就是 `BrushLayer` 与 [StyleLayer](../StyleLayer) 的分工：

```csharp
private static void TintOneStyle(Brush brush, string styleName)
{
    Style style = brush.GetStyleOrDefault(styleName);
    if (style == null) { return; }

    StyleLayer layer = style.GetLayer("Default");
    if (layer == null) { return; }

    layer.Color = new Color(1f, 0.6f, 0.2f, 1f);
    layer.AlphaFactor = 0.8f;
}
```

加一层带覆盖纹理（注意 `OverlaySprite` 的 setter 会替你把 `OverlayMethod` 补上）：

```csharp
private static void AddScrimLayer(Brush brush, Sprite scrim)
{
    BrushLayer scrimLayer = new BrushLayer();
    scrimLayer.Name = "Scrim";
    scrimLayer.Sprite = scrim;
    scrimLayer.WidthPolicy = BrushLayerSizePolicy.StretchToTarget;
    scrimLayer.HeightPolicy = BrushLayerSizePolicy.StretchToTarget;
    scrimLayer.ColorFactor = 0f;
    scrimLayer.AlphaFactor = 0.5f;
    scrimLayer.OverlaySprite = scrim;
    scrimLayer.OverlayXOffset = 4f;
    scrimLayer.OverlayYOffset = 4f;
    brush.AddLayer(scrimLayer);
}
```

按动画枚举值读一个图层属性（注意 `FontColor` 会命中断言并返回黑色）：

```csharp
private static float ReadLayerValue(BrushLayer layer, BrushAnimationProperty.BrushAnimationPropertyType type)
{
    return layer.GetValueAsFloat(type);
}
```

## 风险与边界

- **`Version` 在 `uint` 上累加，理论上会溢出。** 每一次「值真的变了」都 +1。长时间反复改同一个 Brush 的同一属性（比如每帧写 `Color`）约 42 亿次才回绕——不现实，但它确实是 `uint` 而非 `long`，而 [Style](../Style) 的 `Version` 是 `long`，把图层版本**求和**（`Style.Version` 的 getter 里那个 `num += ...`）——图层多了、版本各自很大时，求和的语义也不再是「唯一标识」。
- **`float` 的 `!=` 比较对 `NaN` 恒为真。** `set { if (value != this._x) { ...; Version++; } }`——若你写入 `float.NaN`，`NaN != NaN` 为真，于是每次写 NaN 都会 `Version++`。对渲染无影响（NaN 本身是 bug），但会让 `IsUpdateNeeded()` 永远返回 true。
- **`OverlaySprite` 的 setter 无条件 `Version++`。** 重复赋同一个 sprite 也会触发重绘。这是唯一一个不做相等判断的属性。
- **`OverlaySprite` 的 setter 会改写 `OverlayMethod`。** 把 `OverlaySprite` 从非 null 改回 null 会强制 `OverlayMethod = None`。**想只关覆盖而保留 sprite 引用是不可能的两件事。**
- **`Name` 参与 [Brush](../Brush) 的字典键。** 改 `Name` 之后 `_layers` 里的键与 `layer.Name` 不一致，`GetLayer(旧名)` 就找不到、`AddLayer` 同名会抛、`RemoveLayer(旧名)` 会从字典摘掉这个层但留下悬空。**层的名字建好就别改。**
- **`GetValueAsFloat` 不接受的枚举值是断言 + 0f，不是抛异常。** 问一个 `IsHidden` 之类的值会拿到 0。`GetValueAsColor` 的兜底是 `Color.Black`，`GetValueAsSprite` 的兜底是 `null`。
- **`GetValueAsSprite` 接受 `OverlaySprite`，但 [BrushLayerState](../BrushLayerState) 的对应方法不接受。** 两边不一致：图层级动画里写 `OverlaySprite` 会一路算到落点然后被断言挡掉。
- **`FillFrom` 会产生「源里不一致的状态被自动修正」。** 因为 `OverlayMethod` 先拷、`OverlaySprite` 后拷，后者可能把前者改掉。想逐字复制一个不一致的源，做不到。
- **不可动画的那 9 个属性没有对应的 `BrushLayerState` 字段。** `IsHidden`、`UseOverlayAlphaAsMask`、`WidthPolicy`、`HeightPolicy`、`HorizontalFlip`、`VerticalFlip`、`OverlayMethod`、`OverlaySprite`、`UseRandomBaseOverlayXOffset`、`UseRandomBaseOverlayYOffset` 全在渲染时直接读 [StyleLayer](../StyleLayer)。这意味着**改这些属性不受动画状态插值影响，但也一样能靠 Version 链被重绘**。
- **高度方向的翻转判断疑似笔误。** `Render` 里垂直那段用 `layer.HorizontalFlip` 决定读 `ExtendTop` 还是 `ExtendBottom`。在 `VerticalFlip = true, HorizontalFlip = false` 时，拉伸的补偿量会用错边——表现为翻转后偏移方向不对。这是 1.3.0 到 1.5.3 都存在的实现细节。
- **`ToString` 返回 `Name`，而 `Name` 可以是 null。** 大量 Brush 的层没有显式命名（`FillFrom` 会拷，但 `new BrushLayer()` 默认 null），日志里就会看到 `TaleWorlds.GauntletUI.BrushLayer`。

## 跨版本提示

**这是本批 20 个类型里唯一在 1.3.15 发生公开形状变化的一个。** 五棵源码树比对结果：

| 版本 | 相对 1.3.0 的公开成员变化 |
| --- | --- |
| `1.3.15` | **+3** `ImageFit.ImageFitTypes ImageFitType`、`ImageFit.ImageHorizontalAlignments ImageFitHorizontalAlignment`、`ImageFit.ImageVerticalAlignments ImageFitVerticalAlignment` |
| `1.4.6` / `1.4.7` | 同上 **+3** |
| `1.5.3` | 同上 **+3** |

字节哈希 `4d3df1e7` → `0dcaf5b5` → `e2ca56c6` → `cea35fa4`，四组互异。

**实际影响**：这三个新字段引入自 `ImageFit`（位于 `TaleWorlds.GauntletUI.Canvas` 之类的命名空间，不在本桶）。它们是**公有字段**而非属性，且不在 1.3.0 的 `BrushFactory.LoadBrushLayerInto` 解析列表里。写反射式代码遍历 `BrushLayer` 字段时，1.3.0 与 1.3.15+ 会得到不同结果；[BrushFactory](../BrushFactory) 的 `SaveBrushTo` / `AddAttributeTo`（`BrushFactory.cs:611` 与 `:826` 附近）用反射写回 XML，新版本可能因此多写出几个属性。

除此之外，`BrushLayer` 的 26 个属性签名、构造函数、`FillFrom` 与三个 `GetValueAs*` 在所有版本上完全一致。**属性名/类型层面不需要版本分支；只有反射遍历需要。**

## 依赖关系

- 被 [Brush](../Brush) 的 `_layers` 字典以 `Name` 为键持有；`AddLayer` / `RemoveLayer` / `GetLayer` / `Layers` 都是它的入口
- 被每个 [Style](../Style) 通过 [StyleLayer](../StyleLayer) 的 `SourceLayer` 引用；[StyleLayer](../StyleLayer) 是「可被单个样式覆盖」的副本
- 实现 `IBrushLayerData`（同名接口只声明 `GetValueAsFloat` / `GetValueAsColor` / `GetValueAsSprite`），因此能同时当动画的读取端与 `FillFrom` 的参数类型
- 值类型枚举：[BrushLayerSizePolicy](../BrushLayerSizePolicy)（尺寸策略）、[BrushOverlayMethod](../BrushOverlayMethod)（覆盖合成）
- 可动画的 18 项由 [BrushAnimationPropertyType](../BrushAnimationPropertyType) 枚举，经 [BrushAnimationProperty](../BrushAnimationProperty) 的 `PropertyType` 指定，插值结果写入 [BrushLayerState](../BrushLayerState)
- 生产者：[BrushFactory](../BrushFactory) 的 `LoadBrushLayerInto` 解析 26 个 XML 属性；被 [BrushFactory](../BrushFactory) 的 `FillFrom` 深拷贝路径调用
- 最终绘制：[BrushRenderer](../BrushRenderer) 的 `Render`——它是唯一读这些属性的地方
- 桶首页：[gui API 分区](../)