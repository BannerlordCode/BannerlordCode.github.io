---
title: "BrushAnimationKeyFrame"
description: "动画关键帧：一个 Time、一个 Index、三个并列的 backing 字段（float / Color / Sprite）加一个 ValueType 标签；三个 InitializeAsXxx 互不清理对方的字段，所以读错 getter 拿到的是残留值而不是报错，GetValueAsObject 是唯一按标签分派的读取口。"
---

# BrushAnimationKeyFrame

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushAnimationKeyFrame`
**Base:** 无（隐式 `System.Object`；不实现任何接口）
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimationKeyFrame.cs`（全文 121 行）

## 概述

`BrushAnimationKeyFrame` 是动画时间轴上的一个点：**某个时刻的某个值**。结构上是「两个只读坐标 + 一个三选一的值」：

- `Time`（`:13`）—— `public float Time { get; private set; }`，这一帧在动画里的秒数位置。**private set**，外部只能通过三个 `InitializeAsXxx` 设置。
- `Index`（`:18`）—— `public int Index { get; private set; }`，这一帧在所属 [BrushAnimationProperty](../BrushAnimationProperty) 里的序号。**private set**，只能靠 `InitializeIndex(int)` 写。
- 值——三个 private 字段 `_valueAsFloat`（`:102`）、`_valueAsColor`（`:105`）、`_valueAsSprite`（`:108`），加一个 private 的标签字段 `_valueType`（`:99`），类型是嵌套的 `public enum ValueType { Float, Color, Sprite }`（`:111`）。

三个 `Initialize` 方法各写一个字段 + 同一个 `Time`：

```csharp
public void InitializeAsFloat(float time, float value)  { this.Time = time; this._valueType = ValueType.Float;  this._valueAsFloat = value; }
public void InitializeAsColor(float time, Color value)  { this.Time = time; this._valueType = ValueType.Color;  this._valueAsColor = value; }
public void InitializeAsSprite(float time, Sprite value){ this.Time = time; this._valueType = ValueType.Sprite; this._valueAsSprite = value; }
```

`Index` 的写入是独立的第四个方法 `InitializeIndex(int index)`（`:45`），**它只写 `Index`、不碰 `Time` 也不碰值**。通常由 [BrushAnimationProperty](../BrushAnimationProperty).AddKeyFrame 在排序后统一调用。

## 心智模型

**把它当成一个「带 tag 的联合体（tagged union）」，而不是一个有类型约束的字段。** C# 没有 union，所以这个类用「三个并列字段 + 一个判别标签」手搓了一个。

三条规则决定一切：

**一，标签决定 `GetValueAsObject` 返回什么，其余 getter 不看标签。** `GetValueAsObject()`（`:69`）是唯一按 `_valueType` 分派的：

```csharp
switch (this._valueType)
{
case ValueType.Float:  return this._valueAsFloat;
case ValueType.Color:  return this._valueAsColor;
case ValueType.Sprite: return this._valueAsSprite;
default:               return null;
}
```

而 `GetValueAsFloat()`（`:51`）、`GetValueAsColor()`（`:57`）、`GetValueAsSprite()`（`:63`）全是裸 `return this._valueAsXxx;`——**不判标签、不判空、不报错**。读错了得到的是另一个字段的残留值（或者该字段的默认值 `0f` / `Color.Empty` / `null`）。

**二，三种 Initialize 互不清理对方的字段。** 对一个已经 `InitializeAsColor` 的帧再调 `InitializeAsFloat(t, 0.5f)`，`_valueAsColor` 里那个旧颜色**依然在**，`_valueType` 变成 `Float`，`GetValueAsColor()` 仍会返回那个旧颜色。要「重新利用」一个帧对象，**新建一个比清干净更安全**。

**三，谁决定 Time 与 Index 的配合。** 渲染器不按 `Time` 查表，而是先用 `BrushAnimationProperty.GetFrameAfter(float time)` 找到结束帧，再靠 `GetFrameAt(endFrame.Index - 1)` 反推起始帧。所以 **`Index` 是渲染器的寻址依据，`Time` 只是插值区间的计算依据**。`Index` 错了会取到完全无关的帧；`Time` 错了会让插值比例失真。

`Clone()`（`:85`）用对象初始化器语法逐字段复制，含 `Time` 与 `Index`：

```csharp
return new BrushAnimationKeyFrame
{
    _valueType = this._valueType, _valueAsFloat = this._valueAsFloat,
    _valueAsColor = this._valueAsColor, _valueAsSprite = this._valueAsSprite,
    Time = this.Time, Index = this.Index
};
```

**注意它会连 `_valueAs*` 三个字段全复制，包括当前标签用不到的那些残留值**——所以克隆体与原对象在「读错 getter」这件事上的行为完全一致。这其实是好事：深拷贝保真。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Time` | `public float Time { get; private set; }`（`:13`） | 帧在动画中的秒数位置。三种 `InitializeAsXxx` 都会写它。渲染器用 `(brushStateTimer - start.Time)` 算已过时间。**private set，外部无法直接改**。 |
| `Index` | `public int Index { get; private set; }`（`:18`） | 帧在 [BrushAnimationProperty](../BrushAnimationProperty) 里的序号。由 `InitializeIndex` 写。渲染器用它找前一帧：`GetFrameAt(endFrame.Index - 1)`。 |
| `InitializeAsFloat` | `public void InitializeAsFloat(float time, float value)`（`:21`） | 标记为 Float 帧。写 `Time`、`_valueType`、`_valueAsFloat`。**不清 `_valueAsColor` / `_valueAsSprite`。** |
| `InitializeAsColor` | `public void InitializeAsColor(float time, Color value)`（`:29`） | 标记为 Color 帧。写 `Time`、`_valueType`、`_valueAsColor`。**不清其它两个。** |
| `InitializeAsSprite` | `public void InitializeAsSprite(float time, Sprite value)`（`:37`） | 标记为 Sprite 帧。写 `Time`、`_valueType`、`_valueAsSprite`。**不清其它两个。** |
| `InitializeIndex` | `public void InitializeIndex(int index)`（`:45`） | 只写 `Index`。**不碰 `Time` 与值**，也不碰 `_valueType`。由 `BrushAnimationProperty.AddKeyFrame` 在排序后批量调用。 |
| `GetValueAsFloat` | `public float GetValueAsFloat()`（`:51`） | 返回 `_valueAsFloat`。**不判标签**——在 Color 帧上调它得到 `0f`（若从未赋过）或上一次残留的 float。 |
| `GetValueAsColor` | `public Color GetValueAsColor()`（`:57`） | 返回 `_valueAsColor`。**不判标签**，同理。 |
| `GetValueAsSprite` | `public Sprite GetValueAsSprite()`（`:63`） | 返回 `_valueAsSprite`。**不判标签**——可能是 `null`。 |
| `GetValueAsObject` | `public object GetValueAsObject()`（`:69`） | 唯一按 `_valueType` 分派的读取口，返回装箱后的 float / `Color` / `Sprite`。`_valueType` 是越界值时走 `default` 返回 `null`。 |
| `Clone` | `public BrushAnimationKeyFrame Clone()`（`:85`） | 全字段深拷贝（含三个值字段与 `Time` / `Index`），返回新实例。`BrushAnimationProperty.Clone` 与 [BrushAnimation](../BrushAnimation) 的深拷贝链都靠它。 |
| `ValueType` | `public enum ValueType { Float, Color, Sprite }`（`:111`） | 嵌套公有枚举，`Float` 是第 0 项——**一个全新且从未 Initialize 的帧对象，`_valueType` 默认就是 `Float`**。这一点在 [BrushFactory](../BrushFactory) 的解析器上有直接后果。 |

## 真实示例

三种关键帧各自的标准写法：

```csharp
private static BrushAnimationKeyFrame BuildFloat(float time, float value)
{
    BrushAnimationKeyFrame frame = new BrushAnimationKeyFrame();
    frame.InitializeAsFloat(time, value);
    return frame;
}

private static BrushAnimationKeyFrame BuildColor(float time, Color value)
{
    BrushAnimationKeyFrame frame = new BrushAnimationKeyFrame();
    frame.InitializeAsColor(time, value);
    return frame;
}

private static BrushAnimationKeyFrame BuildSprite(float time, Sprite value)
{
    BrushAnimationKeyFrame frame = new BrushAnimationKeyFrame();
    frame.InitializeAsSprite(time, value);
    return frame;
}
```

按标签安全地取值（不依赖「调用方一定用了对应的 Initialize」）：

```csharp
private static object ReadAny(BrushAnimationKeyFrame frame)
{
    if (frame == null) { return null; }
    return frame.GetValueAsObject();
}
```

深拷贝一段已经建好的关键帧列表——`Clone()` 会连 `Index` 一起带走：

```csharp
private static BrushAnimationProperty CloneAlphaTrack()
{
    BrushAnimationProperty source = new BrushAnimationProperty();
    source.PropertyType = BrushAnimationProperty.BrushAnimationPropertyType.AlphaFactor;
    source.AddKeyFrame(BuildFloat(0f, 0f));
    source.AddKeyFrame(BuildFloat(0.3f, 1f));

    BrushAnimationProperty copy = source.Clone();
    foreach (BrushAnimationKeyFrame frame in copy.KeyFrames)
    {
        if (frame.Time == 0f) { frame.GetValueAsFloat(); }
    }
    return copy;
}
```

## 风险与边界

- **读错 getter 静默返回残留值。** 这是本类最大的坑。`GetValueAsFloat` / `GetValueAsColor` / `GetValueAsSprite` 都不检查 `_valueType`。要安全就读 `GetValueAsObject()` 并按类型分派，或者调用前自己确认初始化方式。
- **重复 Initialize 不清字段。** 「复用帧对象」这个看似省内存的写法在这里是有害的。`Clone` 一个帧比重新 `Initialize` 更贵，但**更正确**。
- **全新未初始化的帧，`_valueType == ValueType.Float`（枚举第 0 项），`Time == 0f`，`_valueAsFloat == 0f`。** 这不是「无值」而是「值为 0 的 Float 帧」。[BrushFactory](../BrushFactory) 的 `LoadBrushAnimationFrom` 有一个 `switch` 只覆盖三组 PropertyType，**switch 之外的 PropertyType 会得到一个从未 Initialize 的帧**——`Time` 恒为 0，于是这个帧被 `AddKeyFrame` 加进列表后成为「时间 0 处的 0 值」，动画会朝 0 插值。典型受害者是 `IsHidden`、`WidthPolicy`、`HorizontalFlip`、`OverlayMethod`、`Font`、`FontStyle` 这些非数值属性。
- **`FontSize` 是一个半支持的特例。** 它在 [BrushFactory](../BrushFactory) 的 float 组里（所以关键帧会被正确初始化成 float），但 [BrushRenderer](../BrushRenderer) 的 `AnimateBrushState` / `AnimateBrushLayerState` 的 `switch` **没有 `FontSize` 分支**，所以插值结果无处可写——该动画被静默忽略。
- **`Index` 与 `Time` 各管一半。** 渲染器用 `Index - 1` 找前一帧，插值比例用 `Time` 算。**通过 `RemoveKeyFrame` 删帧会让 `Index` 失效**（它不重编号），随后渲染器会取到错误的起始帧。见 [BrushAnimationProperty](../BrushAnimationProperty)。
- **`InitializeIndex` 不碰任何东西。** 对一个没初始化过的帧调 `InitializeIndex(3)` 只会得到一个「Index=3、Time=0、Float 值 0」的帧。它不是「构造帧」的入口。
- **`GetValueAsObject` 返回装箱对象。** 每帧对每个被动画的属性调用会产生 GC 压力。渲染器内部**不用它**——三个专用 getter 都在 `Animate*` 里直接调。
- **没有 `SetTime` / `SetIndex`。** `Time` 与 `Index` 都是 `private set`，外部代码唯一能改 `Time` 的路径就是再调一次 `InitializeAsXxx`（会连带改标签和值），改 `Index` 的唯一路径是 `InitializeIndex`。
- **`Sprite` 帧不做插值。** 在 [BrushRenderer](../BrushRenderer) 里 Sprite 的处理是硬切换：`((double)num3 <= 0.9) ? sprite : sprite2`——进度到 0.9 之前一直显示起始图，之后瞬间换成结束图。所以「让两个 sprite 交叉淡入淡出」在这个系统里做不到。

## 跨版本提示

五棵源码树（`1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3`）的 public 签名集合比对：**13 条签名，增减均为 0**。字节哈希 `6eb92e18` → `f8faa8e1` → `411f6769` → `4c64ec60`，四组互异，说明实现体改过但公开形状冻结。

结论：跨 1.3 → 1.5 升级时，**构造关键帧与读取值的代码一个字都不用改**。要留意的方向性变化是宿主 [BrushRenderer](../BrushRenderer) 的 `Render` 签名在 1.3.15 起新增了第六个参数 `Vector2 overlaySize`——它会改变 Sprite 帧最终贴图的坐标计算，但不影响本类的读写方式。

## 依赖关系

- 宿主：[BrushAnimationProperty](../BrushAnimationProperty) 的 `AddKeyFrame` / `RemoveKeyFrame` / `GetFrameAt` / `GetFrameAfter` / `Count` 管理它们的顺序与 `Index` 编号，`Clone` 复制它们
- 再上一层：[BrushLayerAnimation](../BrushLayerAnimation) → [BrushAnimation](../BrushAnimation) → [Brush](../Brush) 的 `_brushAnimations`
- 生产者：[BrushFactory](../BrushFactory) 的 `LoadBrushAnimationFrom` 是唯一从 XML 建帧的地方，类型由 `PropertyName` 的 `switch` 决定
- 消费者：[BrushRenderer](../BrushRenderer) 的 `AnimateBrushState` / `AnimateBrushLayerState`，以及 [BrushLayerState](../BrushLayerState) 的静态方法 `SetValueAsLerpOfValues(ref BrushLayerState, in BrushAnimationKeyFrame, in BrushAnimationKeyFrame, BrushAnimationPropertyType, float)`
- 值类型来源：`TaleWorlds.TwoDimension.Color`、`TaleWorlds.TwoDimension.Sprite`、`TaleWorlds.Library.Debug`
- 桶首页：[gui API 分区](../)