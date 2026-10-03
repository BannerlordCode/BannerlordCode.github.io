---
title: "BrushAnimationPropertyType"
description: "44 个成员的可动画属性枚举：只有 32 个在渲染器的 switch 里有分支，11 个（Name / IsHidden / WidthPolicy / Font 等）完全无人消费，FontSize 被解析器接受却被渲染器忽略；而且同一个值在 brush 级与图层级的可用性并不相同。"
---

# BrushAnimationPropertyType

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public enum BrushAnimationPropertyType`
**Base:** 无（`System.Enum`）
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimationProperty.cs`（嵌套声明在 `:111`；宿主类 203 行）

## 概述

这是 [BrushAnimationProperty](../BrushAnimationProperty) 的公有**字段** `PropertyType` 的类型，一个**嵌套在 [BrushAnimationProperty](../BrushAnimationProperty) 里的公有枚举**，共 **44 个成员**，声明序号 0→43。

它回答的问题是「这条动画轨道改哪一个属性」。值本身不含任何逻辑——全部行为在三个地方按它分派：

1. **[BrushFactory](../BrushFactory)** 的 `LoadBrushAnimationFrom`（`BrushFactory.cs:141` 起）——XML 的 `PropertyName` 属性经 `Enum.TryParse` 填进来，再用一个 `switch` 决定关键帧该用 `InitializeAsFloat` / `InitializeAsColor` / `InitializeAsSprite` 哪条路径构造。
2. **[BrushRenderer](../BrushRenderer)** 的 `AnimateBrushState`（`BrushRenderer.cs:522`）与 `AnimateBrushLayerState`（`BrushRenderer.cs:361`）——两个内容相同的 `switch`，决定插值结果往 `SetValueAsFloat` / `SetValueAsColor` / `SetValueAsSprite` 的哪个重载塞。
3. **[BrushState](../BrushState)**（`BrushState.cs:137` 起）与 [BrushLayerState](../BrushLayerState)（`BrushLayerState.cs:68` 起）——两个 `SetValueAs*` 的 `switch`，是真正的落地点。

**44 个成员里只有 32 个真的有分支。** 这就是为什么「XML 里写了一个合法枚举值的动画却不生效」是一个真实且高频的现象。

## 心智模型

**把 44 个成员分成四层来看，任何一个值都属于其中一层，而层与层之间是不可互换的。**

**第一层：被渲染器 switch 覆盖的 32 个。** 分三组：

- **float 组（26 个）**：`ColorFactor`、`AlphaFactor`、`HueFactor`、`SaturationFactor`、`ValueFactor`、`OverlayXOffset`、`OverlayYOffset`、`TextOutlineAmount`、`TextGlowRadius`、`TextBlur`、`TextShadowOffset`、`TextShadowAngle`、`TextColorFactor`、`TextAlphaFactor`、`TextHueFactor`、`TextSaturationFactor`、`TextValueFactor`、`XOffset`、`YOffset`、`Rotation`、`OverridenWidth`、`OverridenHeight`、`ExtendLeft`、`ExtendRight`、`ExtendTop`、`ExtendBottom`
- **Color 组（4 个）**：`Color`、`FontColor`、`TextGlowColor`、`TextOutlineColor`
- **Sprite 组（2 个）**：`Sprite`、`OverlaySprite`

**第二层：解析器认、渲染器不认的 1 个。** `FontSize` 在 [BrushFactory](../BrushFactory) 的 float 组里（所以关键帧会被正确 `InitializeAsFloat`），但两个 `Animate*` 的 `switch` **都没有 `FontSize` 分支**——插值算完了却无处可写，静默丢弃。

**第三层：解析器也不认的 11 个。** `Name`、`IsHidden`、`WidthPolicy`、`HeightPolicy`、`HorizontalFlip`、`VerticalFlip`、`OverlayMethod`、`Font`、`FontStyle`、`UseRandomBaseOverlayXOffset`、`UseRandomBaseOverlayYOffset`。这些值**非数值或非渲染期可变量**。[BrushFactory](../BrushFactory) 的 `switch` 会落空，关键帧对象被创建但**从未 Initialize**（于是 `Time` 恒 0、`_valueType` 恒为默认的 `Float`、值恒 0），然后照样 `AddKeyFrame` 加进列表。动画因此会朝 0 插值——**看起来「有轨道」，实际是往错误的方向拉。**

**第四层：被 switch 覆盖但落点拒绝的（这是最隐蔽的一层）。** 「有分支」不等于「能写进去」。落点有两个，它们的接受集合不一样：

| 落点 | 由谁使用 | `SetValueAsFloat` 接受 | `SetValueAsColor` 接受 | `SetValueAsSprite` 接受 |
| --- | --- | --- | --- | --- |
| [BrushState](../BrushState) | 轨道 `LayerName` 为空（brush 级，进 [BrushAnimation](../BrushAnimation) 的 `StyleAnimation`） | **仅 10 个文字项**：`TextOutlineAmount`、`TextGlowRadius`、`TextBlur`、`TextShadowOffset`、`TextShadowAngle`、`TextColorFactor`、`TextAlphaFactor`、`TextHueFactor`、`TextSaturationFactor`、`TextValueFactor` | 仅 `FontColor`、`TextGlowColor`、`TextOutlineColor` | **一个都不接受**（`BrushState.cs` 的 `SetValueAsSprite` 两条断言路径全通） |
| [BrushLayerState](../BrushLayerState) | 轨道 `LayerName` 非空（图层级，进 `_data`） | **仅 14 个图层项**：`ColorFactor`、`AlphaFactor`、`HueFactor`、`SaturationFactor`、`ValueFactor`、`OverlayXOffset`、`OverlayYOffset`、`XOffset`、`YOffset`、`Rotation`、`ExtendLeft`、`ExtendRight`、`ExtendTop`、`ExtendBottom` | **仅 `Color`**（其余三个 Color 项走 `Debug.FailedAssert("Invalid value type or property name for data source.")` 并返回 `Color.Black`） | **仅 `Sprite`**（`OverlaySprite` 同样断言后返回 `null`） |

所以结论很硬：

- **图层级的轨道写 `XOffset` ✔；brush 级的轨道写 `XOffset` ✘**（`BrushState.SetValueAsFloat` 落到末尾的 `Debug.FailedAssert("Invalid BrushState property.")`，什么都不写）。
- **brush 级的轨道写 `AlphaFactor` ✘**；图层级的轨道写 `AlphaFactor` ✔。
- **brush 级轨道写 `Sprite` ✘**（`BrushState.SetValueAsSprite` 无论什么值都断言）；图层级写 `Sprite` ✔、写 `OverlaySprite` ✘。
- **两层都写不了 `FontColor`**：brush 级写进 `BrushState.FontColor` ✔（`SetValueAsColor` 有分支），图层级写进 `BrushLayerState` ✘（`SetValueAsColor` 只接受 `Color`）。

也就是说，「XML 里这条轨道能不能生效」不是单看枚举值，而是**枚举值 × 轨道层级**的二元判定。

## 关键成员

44 个成员按声明顺序与所属分组列出。「落点」列的 ✅/❌ 分别表示 `LayerName` 空 / 非空两种情形：

| # | 成员 | 分组 | Brush 级 | 图层级 |
| --- | --- | --- | --- | --- |
| 0 | `Name` | 无消费者 | ❌ | ❌ |
| 1 | `ColorFactor` | float | ❌ | ✅ |
| 2 | `Color` | color | ❌ | ✅ |
| 3 | `AlphaFactor` | float | ❌ | ✅ |
| 4 | `HueFactor` | float | ❌ | ✅ |
| 5 | `SaturationFactor` | float | ❌ | ✅ |
| 6 | `ValueFactor` | float | ❌ | ✅ |
| 7 | `FontColor` | color | ✅ | ❌ |
| 8 | `OverlayXOffset` | float | ❌ | ✅ |
| 9 | `OverlayYOffset` | float | ❌ | ✅ |
| 10 | `TextGlowColor` | color | ✅ | ❌ |
| 11 | `TextOutlineColor` | color | ✅ | ❌ |
| 12 | `TextOutlineAmount` | float | ✅ | ❌ |
| 13 | `TextGlowRadius` | float | ✅ | ❌ |
| 14 | `TextBlur` | float | ✅ | ❌ |
| 15 | `TextShadowOffset` | float | ✅ | ❌ |
| 16 | `TextShadowAngle` | float | ✅ | ❌ |
| 17 | `TextColorFactor` | float | ✅ | ❌ |
| 18 | `TextAlphaFactor` | float | ✅ | ❌ |
| 19 | `TextHueFactor` | float | ✅ | ❌ |
| 20 | `TextSaturationFactor` | float | ✅ | ❌ |
| 21 | `TextValueFactor` | float | ✅ | ❌ |
| 22 | `Sprite` | sprite | ❌ | ✅ |
| 23 | `IsHidden` | 无消费者 | ❌ | ❌ |
| 24 | `XOffset` | float | ❌ | ✅ |
| 25 | `YOffset` | float | ❌ | ✅ |
| 26 | `Rotation` | float | ❌ | ✅ |
| 27 | `OverridenWidth` | float | ❌ | ✅ |
| 28 | `OverridenHeight` | float | ❌ | ✅ |
| 29 | `WidthPolicy` | 无消费者 | ❌ | ❌ |
| 30 | `HeightPolicy` | 无消费者 | ❌ | ❌ |
| 31 | `HorizontalFlip` | 无消费者 | ❌ | ❌ |
| 32 | `VerticalFlip` | 无消费者 | ❌ | ❌ |
| 33 | `OverlayMethod` | 无消费者 | ❌ | ❌ |
| 34 | `OverlaySprite` | sprite | ❌ | ❌ |
| 35 | `ExtendLeft` | float | ❌ | ✅ |
| 36 | `ExtendRight` | float | ❌ | ✅ |
| 37 | `ExtendTop` | float | ❌ | ✅ |
| 38 | `ExtendBottom` | float | ❌ | ✅ |
| 39 | `UseRandomBaseOverlayXOffset` | 无消费者 | ❌ | ❌ |
| 40 | `UseRandomBaseOverlayYOffset` | 无消费者 | ❌ | ❌ |
| 41 | `Font` | 无消费者 | ❌ | ❌ |
| 42 | `FontStyle` | 无消费者 | ❌ | ❌ |
| 43 | `FontSize` | 解析器认、渲染器不认 | ❌ | ❌ |

「Brush 级」列的判定依据是 [BrushState](../BrushState) 的 `SetValueAsFloat` / `SetValueAsColor` / `SetValueAsSprite` 三个方法的 `switch`；「图层级」的依据是 [BrushLayerState](../BrushLayerState) 的对应三个方法。

注意 `OverridenWidth` 与 `OverridenHeight` 这两行是特别容易被误判的：它们**在渲染器的 float 组里**（`BrushRenderer.cs` 的两个 `Animate*` 都为它们写了 `case`），插值结果也确实算出来了，但 `BrushLayerState.SetValueAsFloat` 的 `case` 列表里**没有它们**，于是结果被 `Debug.FailedAssert` 挡掉。表里已按实际行为记为 ❌。

## 真实示例

**一、枚举是公有字段，直接赋值，不需要构造函数：**

```csharp
private static BrushAnimationProperty BuildLayerAlphaTrack(string layerName)
{
    BrushAnimationProperty track = new BrushAnimationProperty();
    track.PropertyType = BrushAnimationProperty.BrushAnimationPropertyType.AlphaFactor;
    track.LayerName = layerName;

    BrushAnimationKeyFrame start = new BrushAnimationKeyFrame();
    start.InitializeAsFloat(0f, 0f);
    track.AddKeyFrame(start);

    BrushAnimationKeyFrame end = new BrushAnimationKeyFrame();
    end.InitializeAsFloat(0.3f, 1f);
    track.AddKeyFrame(end);
    return track;
}
```

**二、按枚举名解析（XML 加载器走的就是这条路），解析失败要自己判：**

```csharp
private static bool TryResolvePropertyType(string xmlName, out BrushAnimationProperty.BrushAnimationPropertyType type)
{
    return Enum.TryParse<BrushAnimationProperty.BrushAnimationPropertyType>(xmlName, out type);
}

private static void ApplyResolved(string xmlName, BrushAnimationProperty track)
{
    BrushAnimationProperty.BrushAnimationPropertyType resolved;
    if (!TryResolvePropertyType(xmlName, out resolved))
    {
        return;
    }
    track.PropertyType = resolved;
}
```

**三、把「这个值在该层级能不能用」当成自己的校验逻辑：**

```csharp
private static bool IsSupportedHere(BrushAnimationProperty.BrushAnimationPropertyType type, bool isBrushLevel)
{
    if (isBrushLevel)
    {
        // BrushState 侧只认文字相关的那几项
        return type == BrushAnimationProperty.BrushAnimationPropertyType.FontColor
            || type == BrushAnimationProperty.BrushAnimationPropertyType.TextGlowColor
            || type == BrushAnimationProperty.BrushAnimationPropertyType.TextOutlineColor
            || type == BrushAnimationProperty.BrushAnimationPropertyType.TextBlur
            || type == BrushAnimationProperty.BrushAnimationPropertyType.TextShadowOffset;
    }
    // 图层级只认颜色/尺寸/偏移那一族
    return type == BrushAnimationProperty.BrushAnimationPropertyType.Color
        || type == BrushAnimationProperty.BrushAnimationPropertyType.Sprite
        || type == BrushAnimationProperty.BrushAnimationPropertyType.AlphaFactor
        || type == BrushAnimationProperty.BrushAnimationPropertyType.XOffset;
}
```

## 风险与边界

- **44 个成员里只有 32 个被真正实现。** 其余 12 个（11 个无消费者 + `FontSize`）在 XML 里写出来「合法但不生效」。这是最常见的「我改了动画为什么没反应」的原因。
- **枚举值合法 ≠ 能生效。** 判定是「枚举值 × 轨道层级」二元函数：同一枚举值在 brush 级可用、在图层级不可用的情况占多数（反过来也有，如 `FontColor`）。
- **失败路径分两种，一种静默一种断言。** 落在 `BrushState` / `BrushLayerState` 的 `SetValueAs*` 里的非法值会走 `Debug.FailedAssert(...)`（开发构建会打断）；而渲染器 `Animate*` 的 `switch` 里没有分支的值则是**静默跳过**——它连 `SetValueAs*` 都调不到。
- **`Enum.TryParse` 成功 ≠ 该值被支持。** [BrushFactory](../BrushFactory) 的 `if (Enum.TryParse(...))` 只保证它是 44 个之一；`switch` 落空后关键帧「创建但不初始化」，轨道变成一条恒 0 的假轨道。
- **`BrushState.SetValueAsSprite` 一个值都不接受。** brush 级轨道上写 `Sprite` 或 `OverlaySprite` 一定断言。它的两条失败路径分别是 `"Invalid value type for BrushState."` 与 `"Invalid BrushState property."`。
- **`OverlaySprite` 在图层级也不可用。** `BrushRenderer` 的 Sprite 组把 `Sprite` 与 `OverlaySprite` 放在一起，但 `BrushLayerState.SetValueAsSprite` 只接受 `Sprite`，传 `OverlaySprite` 会断言并返回 `null`。
- **数值属性与渲染期属性被混在同一个枚举里。** `Name`、`Font`、`FontStyle`、`WidthPolicy`、`HorizontalFlip` 这些是「构造期」属性，把它们放进这个枚举是接口设计上的一处不一致——枚举名暗示「可动画」，实际只对渲染期数值属性成立。
- **值顺序不能依赖。** 枚举只保证「不新增时序号稳定」这一弱契约；[BrushState](../BrushState) 里就有一段 `propertyType - BrushAnimationPropertyType.TextGlowColor <= 11` 这样的**反编译出来的区间优化判断**（`BrushState.cs` 的 `SetValueAsSprite`）——它依赖序号连续。任何 cast 造出来的越界值都可能命中或错开这段判断。
- **拼写是 `Overriden` 不是 `Overridden`。** `OverridenWidth` / `OverridenHeight` 拼错但已成为公开契约，与 [BrushLayerSizePolicy](../BrushLayerSizePolicy) 里的 `Overriden` 成员保持一致。写代码时不要「顺手修正」。

## 跨版本提示

五棵源码树（`1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3`）的 public 签名集合比对：宿主 [BrushAnimationProperty](../BrushAnimationProperty) 的 12 条签名 **增减均为 0**，且嵌套枚举在这 12 条里，成员集合也逐条相同——**44 个成员、序号 0→43 完全一致，从 1.3 到 1.5 一个没加没删**。

字节哈希 `37fd7074` → `877a4965` → `22133312` → `fa189820` 四组互异，说明宿主类的方法体改过。**枚举本身是最稳定的一环：跨版本不需要重新解析序号，也不需要为新成员做兼容。**

需要留意的是**宿主 [BrushRenderer](../BrushRenderer) 的 `Render` 签名在 1.3.15 起新增了第六个参数 `Vector2 overlaySize`**。参数增加不改变本枚举，但会影响「哪些成员真正影响最终画面」的判断（例如覆盖绘制尺寸相关的成员可能因此开始生效）。

## 依赖关系

- 宿主：[BrushAnimationProperty](../BrushAnimationProperty) 的公有字段 `PropertyType` 就是本枚举
- 逐帧载体：[BrushAnimationKeyFrame](../BrushAnimationKeyFrame)，其构造方式（`InitializeAsFloat` / `Color` / `Sprite`）由本枚举在解析期决定
- 收编者：[BrushAnimation](../BrushAnimation) 与 [BrushLayerAnimation](../BrushLayerAnimation)，按 [BrushAnimationProperty](../BrushAnimationProperty) 的 `LayerName` 分派到 `StyleAnimation` 或 `_data`
- 解析入口：[BrushFactory](../BrushFactory) 的 `LoadBrushAnimationFrom`，用 `Enum.TryParse` + 三组 `switch` 决定关键帧类型
- 消费入口：[BrushRenderer](../BrushRenderer) 的 `AnimateBrushState` 与 `AnimateBrushLayerState`，两个方法体里是同一份 26/4/2 分组
- 落点：[BrushState](../BrushState) 与 [BrushLayerState](../BrushLayerState) 的 `SetValueAsFloat` / `SetValueAsColor` / `SetValueAsSprite`；[Style](../Style) 与 [StyleLayer](../StyleLayer) 实现 `IDataSource`、提供同名的读取口
- 相关枚举：[BrushLayerSizePolicy](../BrushLayerSizePolicy)（`WidthPolicy` / `HeightPolicy` 引用它但不可动画）、[BrushOverlayMethod](../BrushOverlayMethod)（`OverlayMethod` 引用它但不可动画）
- 桶首页：[gui API 分区](../)