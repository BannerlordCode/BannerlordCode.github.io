---
title: "BrushAnimation"
description: "Brush 级动画的时间轴容器：六个标量属性加两个存储槽（无 LayerName 的属性进 StyleAnimation，有 LayerName 的进私有字典 _data）；RemoveAnimationProperty 删空后会从 _data 里摘掉图层动画，但 StyleAnimation 永远不会被摘、也不会被置回 null。"
---

# BrushAnimation

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushAnimation`
**Base:** 无（隐式 `System.Object`；不实现任何接口）
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimation.cs`（全文 133 行）

## 概述

`BrushAnimation` 描述「某个 [Style](../Style) 上的一批属性，随时间按曲线变化」。它本身不做插值——插值发生在 [BrushRenderer](../BrushRenderer) 内部。这里只做**分组与存储**。

公开成员一共六组加两个存储槽：

| 成员 | 位置 | 作用 |
| --- | --- | --- |
| `Name` | `:12` | 动画名。[Brush](../Brush) 用它在 `_brushAnimations` 字典里索引，渲染器通过 `Style.AnimationToPlayOnBegin` 按名字取。 |
| `Duration` | `:17` | 一轮动画的秒数。非循环时 `BrushRenderer` 用它判结束；循环时 `brushStateTimer = _brushTimer % Duration`。 |
| `Loop` | `:22` | 是否循环。**它改变的是关键帧查找算法本身**（见下文），不是简单的时间取模。 |
| `InterpolationType` | `:27` | 缓动类型，[AnimationInterpolation.Type](../AnimationInterpolation)。 |
| `InterpolationFunction` | `:32` | 缓动曲线族。 |
| `StyleAnimation` | `:37` | 一个 `[BrushLayerAnimation](../BrushLayerAnimation)`，装「无 LayerName 的属性」。**它是 public 可写属性，不是只读的。** |

关键在于**属性被分成两处存储**，判据只有一个：`BrushAnimationProperty.LayerName` 是否为空。

```csharp
public void AddAnimationProperty(BrushAnimationProperty property)
{
    BrushLayerAnimation brushLayerAnimation = null;
    if (string.IsNullOrEmpty(property.LayerName))
    {
        if (this.StyleAnimation == null) { this.StyleAnimation = new BrushLayerAnimation(); }
        brushLayerAnimation = this.StyleAnimation;
    }
    else if (!this._data.TryGetValue(property.LayerName, out brushLayerAnimation))
    {
        brushLayerAnimation = new BrushLayerAnimation();
        brushLayerAnimation.LayerName = property.LayerName;
        this._data.Add(property.LayerName, brushLayerAnimation);
    }
    brushLayerAnimation.AddAnimationProperty(property);
}
```

`LayerName` 为 null 或空串 ⇒ 进 `StyleAnimation`；否则按名字进私有字典 `_data`（`:131`），并把 `LayerName` 同时写进新建的 `BrushLayerAnimation.LayerName`。字典里没有就新建（`TryGetValue` 返回 false 的分支）。

## 心智模型

**把它想成「一条时间轴 + 两个收件箱」，收件箱按 LayerName 分拣。** 理解三件事就够用了。

**第一，收件箱与渲染器是对偶的。** [BrushRenderer](../BrushRenderer) 的 `Update` 在 `PlayingAnimation` 分支里做的正是这里的镜像操作：

```csharp
string animationToPlayOnBegin = styleOfCurrentState.AnimationToPlayOnBegin;
BrushAnimation animation = this.Brush.GetAnimation(animationToPlayOnBegin);
BrushLayerAnimation styleAnimation = animation.StyleAnimation;      // ← 第一个收件箱
foreach (StyleLayer styleLayer3 in styleOfCurrentState.GetLayers())
{
    BrushLayerAnimation layerAnimation = animation.GetLayerAnimation(styleLayer3.Name);  // ← 第二个收件箱，逐层查
    ...
}
```

所以：**`StyleAnimation` 影响 brush 级别（文字、描边、发光等 [BrushState](../BrushState) 上的属性），`_data` 里的每个条目影响一个图层（[BrushLayerState](../BrushLayerState) 上的属性）。** 这个分工是硬编码的，XML 里不写 `LayerName` 属性就是走第一条路。

**第二，`Loop` 不只是时间取模。** 在 [BrushRenderer](../BrushRenderer) 的 `AnimateBrushState` / `AnimateBrushLayerState` 里，`animation.Loop` 为真时走的是这一套算法：

```csharp
BrushAnimationKeyFrame frameAt = brushAnimationProperty.GetFrameAt(0);
if (isFirstCycle && this._brushTimer < frameAt.Time) { end = frameAt; }
else {
    end = brushAnimationProperty.GetFrameAfter(brushStateTimer);
    if (end == null)                        { end = frameAt; start = GetFrameAt(Count - 1); }
    else if (end == frameAt)                { start = GetFrameAt(Count - 1); }
    else                                   { start = GetFrameAt(end.Index - 1); }
}
```

循环时多了一条「**首尾相接**」的处理：`end.Index == 0` 时区间长度算成 `end.Time + (Duration - start.Time)`，而不是 `end.Time - start.Time`——这样最后一个关键帧到第一个关键帧那段也能正确插值。非循环时则简单得多，`GetFrameAfter` 返回 null 就取最后一个帧。**结论：`Loop` 改变的不只是「要不要重复」，还改变了「最后一帧到第一帧之间怎么插值」。**

**第三，`FillFrom` 有一个不对称。** 深拷贝五个标量属性，然后：

```csharp
if (animation.StyleAnimation != null) { this.StyleAnimation = animation.StyleAnimation.Clone(); }
this._data = new Dictionary<string, BrushLayerAnimation>();
foreach (...) { ... _data.Add(key, value.Clone()); }
```

`_data` 是**无条件重建**的（源没有条目就是空字典），但 `StyleAnimation` **只在源非 null 时才覆盖**。所以对一个 `StyleAnimation == null` 的源做 `FillFrom`，目标的 `StyleAnimation` **保持原样不被清空**。`Brush.Clone` 走 `FillFrom` 时目标刚 `new BrushAnimation()`、`StyleAnimation` 本来就是 null，所以看不出问题；但如果你在一个已有动画的对象上复用同一个实例做 `FillFrom`，就会留下脏的 `StyleAnimation`。

`RemoveAnimationProperty`（`:67`）也有一个类似的不对称：

```csharp
brushLayerAnimation.RemoveAnimationProperty(property);
if (brushLayerAnimation.Collections.Count == 0) { this._data.Remove(property.LayerName); }
```

删完最后一条属性后会把对应的 `BrushLayerAnimation` 从 `_data` 摘掉。但当 `LayerName` 为空时走的是同一个清理语句 `this._data.Remove("")`——**字典里没有空串键，所以这行是纯无操作，而 `StyleAnimation` 那个空对象会永久留在字段里**（`BrushRenderer` 拿到一个空 `layerAnimation`，因为 `Collections.Count == 0` 的 `foreach` 什么也不做，等价于跳过）。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public BrushAnimation()`（`:40`） | 只做 `this._data = new Dictionary<string, BrushLayerAnimation>();`。`StyleAnimation` 保持 null，`Name` / `Duration` / `Loop` / 插值参数全为默认值。**新实例要显式填 `Name` 和 `Duration`，否则 [Brush](../Brush) 的 `AddAnimation` 会因 null 名字抛异常。** |
| `Name` | `public string Name { get; set; }`（`:12`） | 动画标识。[Brush](../Brush) 的 `AddAnimation` 用它做字典键，`GetAnimation(name)` 用它查。`FillFrom` 会复制它。 |
| `Duration` | `public float Duration { get; set; }`（`:17`） | 一轮秒数。渲染器用它判非循环动画结束（`!animation.Loop && _brushTimer >= animation.Duration` ⇒ `EndAnimation()`），以及循环时取模与首尾间隔。设 0 会让 `% Duration` 除零——**必须 > 0**。 |
| `Loop` | `public bool Loop { get; set; }`（`:22`） | 是否循环。改变关键帧查找算法（首尾相接）。见上文「第二」。 |
| `InterpolationType` | `public AnimationInterpolation.Type InterpolationType { get; set; }`（`:27`） | 缓动形状，由 [BrushFactory](../BrushFactory) 从 XML 属性 `InterpolationType` 用 `Enum.TryParse` 解析（`BrushFactory.cs:94`），解析失败走 `Debug.FailedAssert("Failed to resolve brush animation interpolation type: ...")` 并保留默认值。 |
| `InterpolationFunction` | `public AnimationInterpolation.Function InterpolationFunction { get; set; }`（`:32`） | 缓动曲线族，XML 属性 `InterpolationFunction`（`BrushFactory.cs:106`），失败同样 `FailedAssert`。 |
| `StyleAnimation` | `public BrushLayerAnimation StyleAnimation { get; set; }`（`:37`） | 无 `LayerName` 的属性的收件箱。**可写**，你在代码里可以直接塞一个进去，也可以置 null。渲染器读它时不做判空——`AnimateBrushState` 的 `if (layerAnimation != null)` 保护了 null，但**它是在调用点判的，不是这里**。 |
| `AddAnimationProperty` | `public void AddAnimationProperty(BrushAnimationProperty property)`（`:46`） | 按 `LayerName` 分拣并加进对应 `BrushLayerAnimation`。字典里没有该层时会 `new BrushLayerAnimation()` 并设它的 `LayerName`。**参数不做判空**，传 null 会在读 `property.LayerName` 时崩。 |
| `RemoveAnimationProperty` | `public void RemoveAnimationProperty(BrushAnimationProperty property)`（`:67`） | 同样按 `LayerName` 分拣后移除。**三条分支各有细节**：`LayerName` 为空时若 `StyleAnimation == null` 会**先 new 一个出来**再移除（不 new 就没地方删）；`LayerName` 非空且字典里没有该键时**提前 return**；移除后集合为空则从 `_data` 摘键（空串键时是无效摘除）。 |
| `FillFrom` | `public void FillFrom(BrushAnimation animation)`（`:94`） | 深拷贝。五个标量无条件复制；`StyleAnimation` **仅当源非 null** 才用源克隆体覆盖；`_data` 无条件重建为源各条目的克隆体。**不清空目标的 `StyleAnimation`。** |
| `GetLayerAnimation` | `public BrushLayerAnimation GetLayerAnimation(string name)`（`:115`） | `ContainsKey` 判定，返回条目或 **null**。渲染器每帧对每个图层调它，null 是正常路径（该层没动画）。**不做 null 入参防护。** |
| `GetLayerAnimations` | `public IEnumerable<BrushLayerAnimation> GetLayerAnimations()`（`:125`） | `_data.Values` 的只读视图。**不包含 `StyleAnimation`**——遍历它拿不到全部动画。 |

## 真实示例

在代码里手写一段 Brush 级动画：淡入 + 轻微横向偏移。这是「无 LayerName」的那一路，进 `StyleAnimation`：

```csharp
private static BrushAnimation BuildFadeIn()
{
    BrushAnimation animation = new BrushAnimation();
    animation.Name = "FadeIn";
    animation.Duration = 0.25f;
    animation.Loop = false;
    animation.InterpolationType = AnimationInterpolation.Type.EaseOut;
    animation.InterpolationFunction = AnimationInterpolation.Function.Quad;

    BrushAnimationProperty alpha = new BrushAnimationProperty();
    alpha.PropertyType = BrushAnimationProperty.BrushAnimationPropertyType.AlphaFactor;
    alpha.AddKeyFrame(BuildFloatFrame(0f, 0f));
    alpha.AddKeyFrame(BuildFloatFrame(0.25f, 1f));
    animation.AddAnimationProperty(alpha);

    return animation;
}

private static BrushAnimationKeyFrame BuildFloatFrame(float time, float value)
{
    BrushAnimationKeyFrame frame = new BrushAnimationKeyFrame();
    frame.InitializeAsFloat(time, value);
    return frame;
}
```

再加一段图层级动画：`LayerName` 指向某个图层名，走私有字典那一路：

```csharp
private static void AttachLayerAnimation(BrushAnimation animation, string layerName)
{
    BrushAnimationProperty offset = new BrushAnimationProperty();
    offset.PropertyType = BrushAnimationProperty.BrushAnimationPropertyType.XOffset;
    offset.LayerName = layerName;

    BrushAnimationKeyFrame start = new BrushAnimationKeyFrame();
    start.InitializeAsFloat(0f, -4f);
    offset.AddKeyFrame(start);

    BrushAnimationKeyFrame end = new BrushAnimationKeyFrame();
    end.InitializeAsFloat(0.3f, 0f);
    offset.AddKeyFrame(end);

    animation.AddAnimationProperty(offset);

    BrushLayerAnimation lookup = animation.GetLayerAnimation(layerName);
    if (lookup != null)
    {
        BrushAnimationProperty first = lookup.Collections[0];
        first.LayerName = layerName;
    }
}
```

挂到 Brush 上，并让某个样式在进入时播放它：

```csharp
private static void AttachFadeIn(Brush brush)
{
    BrushAnimation animation = BuildFadeIn();
    brush.AddAnimation(animation);

    Style style = brush.GetStyleOrDefault("Default");
    style.AnimationToPlayOnBegin = "FadeIn";
    style.AnimationMode = StyleAnimationMode.Animation;
}
```

## 风险与边界

- **`Duration` 必须大于 0。** 渲染器里有 `this._brushTimer % animation.Duration`（`PlayingAnimation` 分支）。`Duration = 0` 且 `Loop = true` 会整数除零 / NaN，不会崩但结果全错。
- **`AddAnimationProperty` 与 `RemoveAnimationProperty` 都不判空参数。** 传 null 立刻 `NullReferenceException`。
- **`RemoveAnimationProperty` 在 `StyleAnimation == null` 时会「凭空造一个再删」。** 调完之后 `StyleAnimation` 变成一个**空的、非 null 的** `BrushLayerAnimation`。这会改变渲染器行为吗？不会（空集合的 `foreach` 不执行），但它改变了 `if (animation.StyleAnimation != null)` 这类判断的真假——你自己的代码若也这么判，会得出相反结论。
- **`StyleAnimation` 删空后不会被回收。** `_data.Remove("")` 是无效操作，`StyleAnimation` 字段永久持有一个空对象。
- **`GetLayerAnimations()` 不含 `StyleAnimation`。** 想要全部动画必须两个来源都遍历。
- **`FillFrom` 不清空目标的 `StyleAnimation`。** 复用实例时会留下脏数据。
- **`GetLayerAnimation` 每层每帧被调用。** 它内部 `ContainsKey` + 索引器两次哈希查找。图层多、动画多的界面里这是热点之一，但它是官方实现，没有缓存。
- **`Loop` 的首尾相接要求最后一个关键帧的 `Time` 小于 `Duration`。** 如果你在 `Time == Duration` 处放帧，循环分支算出的区间长度可能为零 → `num2 * (1f / num)` 除零。
- **关键帧必须按 `Time` 升序插入才安全。** `BrushAnimationProperty.AddKeyFrame` 会重排序并重编号，但那是另一层的责任；如果你绕过它直接操作内部集合（不可行，`_keyFrames` 是 private）就无从谈起了。真正的坑在 `RemoveKeyFrame`——见 [BrushAnimationProperty](../BrushAnimationProperty) 的风险条目。
- **`BrushFactory` 对无法识别的 `PropertyName` 静默丢弃整个元素。** `LoadBrushAnimationFrom` 的 `Enum.TryParse<BrushAnimationPropertyType>(value3, out ...)` 外面套着整个 `if`，解析失败就**既不报错也不加任何属性**——注意这里**没有** `FailedAssert`，和插值类型解析不同。
- **XML 里 `PropertyName` 属性是必需的。** `xmlNode.Attributes["PropertyName"].Value` 没有判空，缺这个属性会 `NullReferenceException` 把整个 Brush 文件加载炸掉（然后被 `LoadBrushFile` 的 try/catch 吞成一条断言）。
- **`LayerName` 属性在 XML 里是可选的**（`xmlNode.Attributes["LayerName"]` 有判空，取不到就是 null），这正是「进 StyleAnimation」的那一路。

## 跨版本提示

五棵源码树（`1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3`）的 public 签名集合比对：**13 条签名，增减均为 0**。1.3.15 起没有加过任何成员。

字节哈希四组互异（`71fec1dc` → `1bbafaa8` → `dffbec1a` → `fd7f371a`），说明方法体有改动。**升级时不需要为这个类改代码。**

相关的方向性变化不在本类而在枚举：[BrushAnimationPropertyType](../BrushAnimationPropertyType) 在五棵树上同样是 44 个成员、零变化。真正变的是 [BrushRenderer](../BrushRenderer) 的 `Render` 签名在 1.3.15 起多了一个 `Vector2 overlaySize` 参数——它会影响你调 `Render` 的写法，但不影响本类。

## 依赖关系

- 组合：[BrushLayerAnimation](../BrushLayerAnimation)（两个存储槽的 value 类型）、[BrushAnimationProperty](../BrushAnimationProperty)（被分拣的条目）、[BrushAnimationKeyFrame](../BrushAnimationKeyFrame)（关键帧）
- 缓动：[AnimationInterpolation](../AnimationInterpolation) 的 `Type` 与 `Function` 两个枚举，渲染器每帧调 `Ease`
- 宿主：[Brush](../Brush) 的 `AddAnimation` / `GetAnimation` / `GetAnimations`，以及 `FillFrom` 里的深拷贝
- 生产者：[BrushFactory](../BrushFactory) 的私有 `LoadBrushAnimationFrom`（`BrushFactory.cs:67`）——**唯一**把 XML 变成 `BrushAnimation` 的地方
- 消费者：[BrushRenderer](../BrushRenderer) 的 `PlayingAnimation` 分支（`BrushRenderer.cs` 的 `Update`）与两个 `Animate*` 方法
- 结果落点：[BrushState](../BrushState)（无 LayerName）与 [BrushLayerState](../BrushLayerState)（有 LayerName）
- 桶首页：[gui API 分区](../)