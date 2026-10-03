---
title: "BrushLayerState"
description: "渲染器真正绘制的那份图层快照：16 个公有字段的 struct，只搬可插值的属性（颜色五项 / 偏移五项 / Extend 四项 / Sprite），尺寸策略与翻转这些不可插值的属性一律不进来；SetValueAs* 三个方法各有严格的接受集合，越界走 FailedAssert 后返回默认值而非抛异常。"
---

# BrushLayerState

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public struct BrushLayerState : IBrushAnimationState, IDataSource`
**Base:** 无（值类型；`System.ValueType`，实现 `IBrushAnimationState` 与 `IDataSource`）
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushLayerState.cs`（全文 326 行）

## 概述

`BrushLayerState` 是 [BrushRenderer](../BrushRenderer) **每帧真正拿去画的那个值**。理解它只需要一句话：**它是 [BrushLayer](../BrushLayer) / [StyleLayer](../StyleLayer) 里「可插值的那一部分」的运行期副本。**

16 个公有字段，全部在 `:279`-`:324` 连续声明：

- 颜色五项：`Color`（`Color`）、`ColorFactor`、`AlphaFactor`、`HueFactor`、`SaturationFactor`、`ValueFactor`（四个 `float`）
- 偏移五项：`OverlayXOffset`、`OverlayYOffset`、`XOffset`、`YOffset`、`Rotation`（五个 `float`）
- 拉伸四项：`ExtendRight`、`ExtendTop`、`ExtendBottom`、`ExtendLeft`（四个 `float`）
- 图：`Sprite`

**没有 `WidthPolicy`、没有 `HeightPolicy`、没有 `HorizontalFlip` / `VerticalFlip`、没有 `OverlayMethod` / `OverlaySprite`、没有 `IsHidden` / `UseOverlayAlphaAsMask`、没有 `OverridenWidth` / `OverridenHeight`、没有那两个 `UseRandomBase*`。** 这些在渲染时被直接读 [StyleLayer](../StyleLayer)（`Render` 里的 `layer.WidthPolicy` 之类），不进状态。这个分层是硬性的，不是遗漏。

`FillFrom(IBrushLayerData styleLayer)`（`:11`）是唯一的构造入口，它逐项从 `IBrushLayerData`（[BrushLayer](../BrushLayer) 与 [StyleLayer](../StyleLayer) 都实现这个接口）搬那 16 项：

```csharp
this.ColorFactor = styleLayer.ColorFactor;  this.AlphaFactor = styleLayer.AlphaFactor;
this.HueFactor = styleLayer.HueFactor;      this.SaturationFactor = styleLayer.SaturationFactor;
this.ValueFactor = styleLayer.ValueFactor;  this.Color = styleLayer.Color;
this.OverlayXOffset = styleLayer.OverlayXOffset; this.OverlayYOffset = styleLayer.OverlayYOffset;
this.XOffset = styleLayer.XOffset;          this.YOffset = styleLayer.YOffset;
this.Rotation = styleLayer.Rotation;        this.ExtendRight = styleLayer.ExtendRight;
this.ExtendTop = styleLayer.ExtendTop;      this.ExtendBottom = styleLayer.ExtendBottom;
this.ExtendLeft = styleLayer.ExtendLeft;    this.Sprite = styleLayer.Sprite;
```

## 心智模型

**把它当成「图层这一帧的渲染输入」，理解四件事就够了。**

**一、它是 struct，所有传递都是拷贝。** 这有两个直接后果：一是赋值廉价（16 个字段，无堆分配）；二是**没有引用语义**——你不能靠「拿到一个 `BrushLayerState` 改它」来影响渲染器，必须用 `ref` 传回去。`SetValueAsLerpOfValues` 之所以签名带 `ref BrushLayerState currentState`，就是为了原地改。

**二、三个 `SetValueAs*` 各有一个封闭的接受集合，越界不是抛异常而是返回默认值。**

| 方法 | 接受 | 拒绝时 |
| --- | --- | --- |
| `SetValueAsFloat(type, value)`（`:68`） | 14 个：`ColorFactor`、`AlphaFactor`、`HueFactor`、`SaturationFactor`、`ValueFactor`、`OverlayXOffset`、`OverlayYOffset`、`XOffset`、`YOffset`、`Rotation`、`ExtendLeft`、`ExtendRight`、`ExtendTop`、`ExtendBottom` | `Debug.FailedAssert("Invalid value type or property name for data source.")` 后**无返回、字段不变** |
| `SetValueAsColor(type, in Color)`（`:132`） | **仅 `Color`** | 同一句 `FailedAssert`，**方法返回 `void`、字段保持原值** |
| `SetValueAsSprite(type, Sprite)`（`:143`） | **仅 `Sprite`** | 同一句 `FailedAssert`，**方法返回 `void`、字段保持原值** |
| `GetValueAsFloat(type)`（`:154`） | 与 `SetValueAsFloat` 同一组 14 个 | `FailedAssert` 后返回 **`0f`** |
| `GetValueAsColor(type)`（`:205`） | 仅 `Color` | `FailedAssert` 后返回 `Color.Black` |
| `GetValueAsSprite(type)`（`:216`） | 仅 `Sprite` | `FailedAssert` 后返回 **`null`** |

注意 `SetValueAsFloat` 里 `Color` 与 `FontColor` 被显式 `break` 掉落到断言路径（`:87`-`:89`），而 `GetValueAsFloat` 同样处理（`:176`-`:178`）。**这就是 [BrushAnimationPropertyType](../BrushAnimationPropertyType) 那张对照表里「图层级 ✘」的来源**：图层级轨道若写 `FontColor`，渲染器一路算到落点，然后被 `SetValueAsColor` 断言挡掉并塞进 `Color.Black`——**颜色会变成纯黑，而不是不变**。

**三、`Sprite` 不插值，是硬切换。** `LerpFrom`（`:47`）最后一行：

```csharp
this.Sprite = ((ratio > 0.9f) ? end.Sprite : start.Sprite);
```

[BrushRenderer](../BrushRenderer) 的 `AnimateBrushLayerState` 里也是 `((double)num3 <= 0.9) ? sprite : sprite2`。**进度到 0.9 之前一直是起始图，之后瞬间变成结束图。** 所以「让两张图交叉淡入」在这个系统里做不到。

**四、`LerpFrom` 是「起点状态 → 终点样式」的重载版，不是「起点状态 → 终点状态」。**

```csharp
public void LerpFrom(BrushLayerState start, IBrushLayerData end, float ratio)
{
    this.ColorFactor = Mathf.Lerp(start.ColorFactor, end.ColorFactor, ratio);
    ... // 14 个 float 全部照抄
    this.Color = Color.Lerp(start.Color, end.Color, ratio);
    this.Sprite = ((ratio > 0.9f) ? end.Sprite : start.Sprite);
}
```

**`end` 是 `IBrushLayerData`（样式层），不是 `BrushLayerState`。** 这正是「BasicTransition 模式下从旧状态插值到新样式」的实现。颜色走 `Color.Lerp`，其余 14 个 float 走 `Mathf.Lerp`——**注意这里用的是 `Mathf` 而不是 `MathF`**，而 [BrushRenderer](../BrushRenderer) 的动画路径里用的是 `MathF.Lerp(..., 1E-05f)` 带 epsilon 的四参重载。两条路径的数值行为不完全一致。

还有一个公开的静态方法 `SetValueAsLerpOfValues`（`:227`）：

```csharp
public static void SetValueAsLerpOfValues(ref BrushLayerState currentState, in BrushAnimationKeyFrame startValue, in BrushAnimationKeyFrame endValue, BrushAnimationPropertyType propertyType, float ratio)
```

它把 [BrushAnimationKeyFrame](../BrushAnimationKeyFrame) 的两个关键帧按 `ratio` 插值后写进 `currentState`。分组比三个实例方法**宽得多**：float 组含 26 个成员（比 `SetValueAsFloat` 的 14 个多出 `TextOutlineAmount`、`TextGlowRadius`、`TextBlur`、`TextShadowOffset`、`TextShadowAngle`、`Text*Factor` 这些**文字项**），Color 组含 4 个（`Color`、`FontColor`、`TextGlowColor`、`TextOutlineColor`），Sprite 组含 2 个（`Sprite`、`OverlaySprite`）。**但最终仍要落进 `SetValueAsFloat` / `SetValueAsColor` / `SetValueAsSprite`，所以那 12 个多出来的项在图层上下文里照样被断言挡掉。** `IsHidden` 被显式列出并 `break`（无操作），`default` 直接 `return`——所以 `Name` / `WidthPolicy` / `Font` 等在这里是无声跳过。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 16 个公有字段 | `Color`（`Color`）、`ColorFactor` / `AlphaFactor` / `HueFactor` / `SaturationFactor` / `ValueFactor`、`OverlayXOffset` / `OverlayYOffset` / `XOffset` / `YOffset` / `Rotation`、`ExtendRight` / `ExtendTop` / `ExtendBottom` / `ExtendLeft`、`Sprite`（见 `:279`-`:324`） | 渲染输入。**全是公有字段，无属性包装、无变更通知。** 直接改它们不会触发任何重绘机制——重绘由 `Style.Version` 那一套负责，不是这里。 |
| `FillFrom` | `public void FillFrom(IBrushLayerData styleLayer)`（`:11`） | 从任意 `IBrushLayerData`（[BrushLayer](../BrushLayer) 或 [StyleLayer](../StyleLayer)）搬那 16 项。**参数不判空**，传 null 立刻 `NullReferenceException`。[BrushRenderer](../BrushRenderer) 在 `Brush` setter、`Update` 的重新采样分支、`AnimateBrushLayerState` 开头都调它。 |
| `LerpFrom` | `public void LerpFrom(BrushLayerState start, IBrushLayerData end, float ratio)`（`:47`） | 从 `start` 插值到**样式层 `end`**，结果写进 `this`。14 个 float 用 `Mathf.Lerp`、`Color` 用 `Color.Lerp`、`Sprite` 在 `ratio > 0.9f` 时硬切到 `end.Sprite`。`ratio` 不做钳制。 |
| `SetValueAsFloat` | `public void SetValueAsFloat(BrushAnimationPropertyType propertyType, float value)`（`:68`） | 写单个 float 字段。**接受 14 个枚举值**；`Color` / `FontColor` 显式 break 到断言；其余全部落到末尾的 `Debug.FailedAssert("Invalid value type or property name for data source.")` 并**保持字段原值**。无返回值。 |
| `SetValueAsColor` | `public void SetValueAsColor(BrushAnimationPropertyType propertyType, in Color value)`（`:132`） | **只接受 `Color`**（`BrushLayerState.cs:135` 的单一 `if`）。其余走 `Debug.FailedAssert`；**方法返回 `void`，字段保持原值**。 |
| `SetValueAsSprite` | `public void SetValueAsSprite(BrushAnimationPropertyType propertyType, Sprite value)`（`:143`） | **只接受 `Sprite`**（`:146` 的单一 `if`）。其余走断言，**字段保持原值**。 |
| `GetValueAsFloat` | `public float GetValueAsFloat(BrushAnimationPropertyType propertyType)`（`:154`） | 读单个 float 字段，接受集合与 `SetValueAsFloat` 相同。越界 → `FailedAssert` → **`return 0f`**。 |
| `GetValueAsColor` | `public Color GetValueAsColor(BrushAnimationPropertyType propertyType)`（`:205`） | 读 `Color`。仅 `Color` 有效；其余 → `FailedAssert` → `Color.Black`。 |
| `GetValueAsSprite` | `public Sprite GetValueAsSprite(BrushAnimationPropertyType propertyType)`（`:216`） | 读 `Sprite`。仅 `Sprite` 有效；其余 → `FailedAssert` → `null`。 |
| `SetValueAsLerpOfValues` | `public static void SetValueAsLerpOfValues(ref BrushLayerState currentState, in BrushAnimationKeyFrame startValue, in BrushAnimationKeyFrame endValue, BrushAnimationPropertyType propertyType, float ratio)`（`:227`） | 静态辅助：把两个关键帧按 `ratio` 插值写进 `currentState`。float 用 `MathF.Lerp(from, to, ratio, 1E-05f)`（四参带 epsilon）、Color 用 `Color.Lerp`、Sprite 用 `((double)ratio > 0.9)` 硬切。**分组比三个实例方法宽**（float 26 / color 4 / sprite 2），`IsHidden` 显式 break，`default` 直接 return。`currentState` 是 `ref` 所以原地改。 |
| `IBrushAnimationState.FillFrom` | `void IBrushAnimationState.FillFrom(IDataSource source)`（显式实现，`:38`） | 桥接：把 `IDataSource` 强转成 `StyleLayer` 再调公有 `FillFrom`。**强转失败就是 `InvalidCastException`**（传一个不是 `StyleLayer` 的 `IDataSource` 进来就炸）。 |
| `IBrushAnimationState.LerpFrom` | `void IBrushAnimationState.LerpFrom(IBrushAnimationState start, IDataSource end, float ratio)`（显式实现，`:44`） | 桥接：`start` 强转成 `BrushLayerState`、`end` 强转成 `IBrushLayerData`，再调公有 `LerpFrom`。同样无类型校验。 |
| `IBrushAnimationState.SetValueAsColor` | `void IBrushAnimationState.SetValueAsColor(BrushAnimationPropertyType propertyType, in Color value)`（显式实现，`:271`） | 桥接到公有重载。注意接口版本的顺序是 `propertyType` 在前，与 `BrushRenderer` 里那个匿名委托 `void (BrushAnimationPropertyType, in Color)` 匹配。 |

## 真实示例

**一、从图层采样一份状态并按进度插值到目标样式**（`LerpFrom` 的标准用法）：

```csharp
private static BrushLayerState SampleState(StyleLayer layer, BrushLayerState previous, float ratio)
{
    BrushLayerState result = default(BrushLayerState);
    result.FillFrom(layer);
    BrushLayerState blend = default(BrushLayerState);
    blend.LerpFrom(previous, layer, ratio);
    return blend;
}
```

**二、按动画枚举值安全地写字段**——先判是否受支持，避免踩断言：

```csharp
private static bool IsFloatSupported(BrushAnimationProperty.BrushAnimationPropertyType type)
{
    return type == BrushAnimationProperty.BrushAnimationPropertyType.AlphaFactor
        || type == BrushAnimationProperty.BrushAnimationPropertyType.ColorFactor
        || type == BrushAnimationProperty.BrushAnimationPropertyType.XOffset
        || type == BrushAnimationProperty.BrushAnimationPropertyType.Rotation
        || type == BrushAnimationProperty.BrushAnimationPropertyType.ExtendLeft;
}

private static void ApplyFloat(BrushLayerState state, BrushAnimationProperty.BrushAnimationPropertyType type, float value)
{
    if (!IsFloatSupported(type)) { return; }
    state.SetValueAsFloat(type, value);
}
```

**三、用 `SetValueAsLerpOfValues` 在两个关键帧之间取值**——这是 [BrushAnimationProperty](../BrushAnimationProperty) 数据的直接消费者：

```csharp
private static BrushLayerState LerpBetweenFrames(BrushLayerState seed, BrushAnimationKeyFrame from, BrushAnimationKeyFrame to, BrushAnimationProperty.BrushAnimationPropertyType type, float ratio)
{
    BrushLayerState result = seed;
    BrushLayerState.SetValueAsLerpOfValues(ref result, from, to, type, ratio);
    return result;
}
```

**四、直接改公有字段做一次性覆盖**（struct 语义，改的是你的副本）：

```csharp
private static BrushLayerState FadeOut(BrushLayerState state, float factor)
{
    state.AlphaFactor = state.AlphaFactor * factor;
    return state;
}
```

## 风险与边界

- **struct，没有引用语义。** `BrushLayerState s = someState; s.AlphaFactor = 0f;` **不会**改到 `someState`。想改必须传 `ref`（`SetValueAsLerpOfValues` 就是这么做的）或接收返回值。这也是为什么渲染器把两个状态存在字典里（`Dictionary<string, BrushLayerState>`）而不是 `List<BrushLayerState>`——字典需要「取出来算、算完写回」两步。
- **`SetValueAsFloat` 的拒绝路径不改变任何字段。** 它和 `GetValueAsFloat` 的拒绝路径不同：前者无操作、后者返回 `0f`。**「读到 0」可能意味着「该属性不被支持」而不是「值就是 0」。**
- **`SetValueAsColor` / `SetValueAsSprite` 返回 `void`，拒绝时字段不变。** 它们的失败路径只有一句 `Debug.FailedAssert`（`BrushLayerState.cs:140` 与 `:153`），既不写字段也不返回值。所以图层级轨道写 `FontColor` 的真实表现是「颜色不变 + 一条断言」，而不是「变黑」。**（插值过程中算出的那个 `Color.Black` 只是 [BrushRenderer](../BrushRenderer) 局部变量里的中间值，写入动作被拒了。）** `Color.Black` / `null` 这两个兜底值属于 `GetValueAsColor`（`BrushLayerState.cs:215`）与 `GetValueAsSprite`（`:227`）。
- **`FillFrom` 不判空。** 传 null 的 `IBrushLayerData` 立刻崩。
- **`LerpFrom` 的 `ratio` 不钳制。** 传 1.5 就是真的外插 50%，没有任何保护。调用方（[BrushRenderer](../BrushRenderer) 的 `PlayingBasicTranisition` 分支）自己做了 `if (num2 > 1f) num2 = 1f;` 的钳制。
- **`LerpFrom` 用 `Mathf` 而 `SetValueAsLerpOfValues` 用 `MathF` 且带 `1E-05f` epsilon。** 同一份数据走两条路径会得到**略微不同**的浮点结果。若做回归对比，注意区分是「状态过渡」还是「关键帧动画」。
- **`Sprite` 永远是硬切换。** 阈值 `0.9` 在 `LerpFrom`（`ratio > 0.9f`）与 `SetValueAsLerpOfValues`（`(double)ratio > 0.9`）里一致，且 [BrushRenderer](../BrushRenderer) 里是 `<= 0.9` 取起始图。三处语义一致但写法不同（`float`/`double`、`>`/`<=`），改动任何一处都会造成跳帧时机偏移。
- **16 个字段之外的一切都读不到。** 想从状态里取 `WidthPolicy`、`IsHidden`、`HorizontalFlip`，必须直接访问 [StyleLayer](../StyleLayer)。这是本类最容易误解的地方。
- **两个显式接口实现都做裸强转。** `IBrushAnimationState.FillFrom` 把 `IDataSource` 转 `StyleLayer`，`LerpFrom` 把 `IBrushAnimationState` 转 `BrushLayerState`。传错类型不是断言而是 `InvalidCastException`。
- **没有 `Clone()`。** struct 本身可以直接复制：`BrushLayerState copy = state;` 就是深拷贝（全部字段都是值类型或引用引用，`Sprite` 是引用但不可变）。

## 跨版本提示

五棵源码树（`1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3`）的 public/protected 签名集合比对：**26 条签名，增减均为 0**（16 个字段 + 6 个 public 方法 + 静态方法 + 三个显式接口实现 + 类声明）。字节哈希 `680e025c` → `e1c7e965` → `b3a8c3c8` → `35efc1fa`，四组互异，说明实现体改过但公开形状从 1.3 到 1.5 一次没变。

**结论：不需要为这个类写版本分支。** 需要留意的是宿主 [BrushRenderer](../BrushRenderer)——它的 `Render` 签名在 **1.3.15 起新增第六个参数 `Vector2 overlaySize`**，且 `AnimateBrushLayerState` 是私有方法（签名不变但实现可能调整）。具体表现为「某些 [BrushAnimationPropertyType](../BrushAnimationPropertyType) 开始/停止被 `switch` 覆盖」这类静默行为变化，升级后值得重新抽读一遍那三个 `SetValueAs*` 的 `case` 列表。

## 依赖关系

- 被持有者：[BrushRenderer](../BrushRenderer) 的 `_startBrushLayerState` 与 `_currentBrushLayerState` 两个 `Dictionary<string, BrushLayerState>`，键是图层名
- 数据来源：`IBrushLayerData` 接口，由 [BrushLayer](../BrushLayer) 与 [StyleLayer](../StyleLayer) 实现；`IDataSource` 由 [Style](../Style) 与 [StyleLayer](../StyleLayer) 实现
- 接口身份：`IBrushAnimationState` —— 与之对偶的 brush 级对应物是 [BrushState](../BrushState)（同为 struct，但 `SetValueAsFloat` 只接受 10 个文字项、`SetValueAsSprite` 一个都不接受）
- 写入来源：[BrushAnimationProperty](../BrushAnimationProperty) 的关键帧，经 `SetValueAsLerpOfValues` 或 [BrushRenderer](../BrushRenderer) 的 `AnimateBrushLayerState` 写进来
- 属性枚举：[BrushAnimationPropertyType](../BrushAnimationPropertyType) —— 本类的 `SetValueAs*` / `GetValueAs*` 各有一套比它窄得多的接受集合
- 关键帧：[BrushAnimationKeyFrame](../BrushAnimationKeyFrame)（`SetValueAsLerpOfValues` 的入参）
- 数值工具：`TaleWorlds.Library.Mathf` / `MathF`（两条路径用了不同的一个）与 `TaleWorlds.TwoDimension.Color.Lerp`
- 最终消费：[BrushRenderer](../BrushRenderer) 的 `Render`（逐层 `drawContext.DrawSprite`）
- 桶首页：[gui API 分区](../)