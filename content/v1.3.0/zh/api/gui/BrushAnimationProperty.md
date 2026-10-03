---
title: "BrushAnimationProperty"
description: "一条被动画的属性轨道：公有字段 PropertyType（非属性！）、可空 LayerName、一个按 Time 升序并带 Index 的关键帧列表；AddKeyFrame 每次都全量重排序并重新编号，而 RemoveKeyFrame 只删除不重编号——两者不对称是本类最危险的地方。"
---

# BrushAnimationProperty

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushAnimationProperty`
**Base:** 无（隐式 `System.Object`；不实现任何接口）
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimationProperty.cs`（全文 203 行）

## 概述

`BrushAnimationProperty` 是「一条轨道」：**我要动画 `AlphaFactor` 这个属性，在时间 0 是 0.2、0.15 秒后是 1.0」** 里，除 `AlphaFactor` 以外的全部内容。

公开面七条：

| 成员 | 位置 | 关键点 |
| --- | --- | --- |
| `PropertyType` | `:105` | **公有字段，不是属性**：`public BrushAnimationProperty.BrushAnimationPropertyType PropertyType;` |
| `LayerName` | `:13` | 可为 null/空串。null ⇒ 这条轨道进 [BrushAnimation](../BrushAnimation) 的 `StyleAnimation`；非空 ⇒ 进 `_data` 的对应图层槽。 |
| `KeyFrames` | `:17` | `IEnumerable<BrushAnimationKeyFrame>` 只读视图，每次 getter 都 `return this._keyFrames.AsReadOnly();` 新建一个包装。 |
| `Count` | `:27` | `_keyFrames.Count`。**返回的是帧数，不是轨道数。** |
| `AddKeyFrame` | `:86` | 追加一帧，然后**全量排序 + 全量重编号**。 |
| `RemoveKeyFrame` | `:99` | `this._keyFrames.Remove(keyFrame);` —— **就这一行**。不重排序，不重编号。 |
| `GetFrameAfter` | `:42` | 第一个 `Time > time` 的帧；没有则返回 null。 |
| `GetFrameAt` | `:56` | 按下标取；越界返回 null。 |
| `Clone` | `:66` | `new BrushAnimationProperty()` + 私有 `FillFrom`。 |

`PropertyType` 是**字段**这一点值得强调：它没有变更通知，`FillFrom` 里也只是 `this.PropertyType = collection.PropertyType;` 直接赋值。写轨道类型的唯一途径就是直接写字段，没有 setter 的存在。

## 心智模型

**把每条轨道想成一张「时间 → 值」的表，而渲染器用两列索引法读这张表。** 具体算法在 [BrushRenderer](../BrushRenderer) 里，两种模式：

**非循环：**

```csharp
end   = brushAnimationProperty.GetFrameAfter(brushStateTimer);
start = (end != null) ? brushAnimationProperty.GetFrameAt(end.Index - 1)
                       : brushAnimationProperty.GetFrameAt(brushAnimationProperty.Count - 1);
```

**循环（含首尾相接）：**

```csharp
BrushAnimationKeyFrame frameAt = brushAnimationProperty.GetFrameAt(0);
if (isFirstCycle && this._brushTimer < frameAt.Time) { end = frameAt; }
else {
    end = brushAnimationProperty.GetFrameAfter(brushStateTimer);
    if (end == null)               { end = frameAt; start = GetFrameAt(Count - 1); }
    else if (end == frameAt)       { start = GetFrameAt(Count - 1); }
    else                           { start = GetFrameAt(end.Index - 1); }
}
```

**注意两处都用了 `end.Index - 1`，一次都没用到「按 Time 找前一帧」。** 这就是为什么 `Index` 必须始终和列表位置一致。

`AddKeyFrame` 就是维护这个不变量的地方：

```csharp
public void AddKeyFrame(BrushAnimationKeyFrame keyFrame)
{
    this._keyFrames.Add(keyFrame);
    this._keyFrames = (from k in this._keyFrames orderby k.Time select k).ToList<BrushAnimationKeyFrame>();
    for (int i = 0; i < this._keyFrames.Count; i++) { this._keyFrames[i].InitializeIndex(i); }
}
```

三步：**追加 → LINQ `orderby Time` 稳定重排（每次都重建整个 List）→ 遍历全部帧重写 `Index`。** 注意 `orderby` 在 LINQ 里是**稳定排序**，所以 `Time` 相同的帧之间保持插入顺序——这让「第 0 帧与第 1 帧时间相同」的退化情况至少不会随机翻转。

然后 `RemoveKeyFrame` 只有一行 `this._keyFrames.Remove(keyFrame);`。这就是那个不对称：**加帧会重新编号，删帧不会。** 删掉中间一帧之后，后面所有帧的 `Index` 都比它们的真实位置大 1，渲染器的 `GetFrameAt(end.Index - 1)` 于是取到了错误的那一帧（或者在最后一帧时取到 `Count` 越界 → null）。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public BrushAnimationProperty()`（`:36`） | 只做 `this._keyFrames = new List<BrushAnimationKeyFrame>();`。**`PropertyType` 保持枚举第 0 项 `Name`**，`LayerName` 保持 null。所以 `new BrushAnimationProperty()` 是一个「动画 `Name` 属性、作用在 brush 级别」的合法（但没意义的）轨道。 |
| `PropertyType` | `public BrushAnimationProperty.BrushAnimationPropertyType PropertyType;`（`:105`） | **公有字段**。决定这条轨道改哪个属性、以及关键帧应该按 float / Color / Sprite 哪条 `InitializeAsXxx` 路径构造。`FillFrom` 复制它。**无变更通知。** |
| `LayerName` | `public string LayerName { get; set; }`（`:13`） | null/空串 ⇒ brush 级（进 [BrushAnimation](../BrushAnimation) 的 `StyleAnimation`）；非空 ⇒ 图层级（进 `_data`）。**`FillFrom` 不复制它**——私有 `FillFrom`（`:74`）只复制 `PropertyType` 与关键帧列表。 |
| `KeyFrames` | `public IEnumerable<BrushAnimationKeyFrame> KeyFrames`（`:17`） | 只读视图。getter 每次 `this._keyFrames.AsReadOnly()` **新建一个包装对象**——不要在热路径里反复枚举它，也不要试图通过它改内部列表。 |
| `Count` | `public int Count`（`:27`） | 当前帧数。渲染器用它取最后一帧：`GetFrameAt(Count - 1)`。空轨道上返回 0，渲染器据此得到 `GetFrameAt(-1)` → null。 |
| `AddKeyFrame` | `public void AddKeyFrame(BrushAnimationKeyFrame keyFrame)`（`:86`） | 追加 + **稳定重排（`orderby Time`）+ 全量 `InitializeIndex(i)`**。参数不做判空，传 null 会进列表然后在下一行 `orderby k.Time` 上抛 `NullReferenceException`。 |
| `RemoveKeyFrame` | `public void RemoveKeyFrame(BrushAnimationKeyFrame keyFrame)`（`:99`） | **只有 `this._keyFrames.Remove(keyFrame);` 一行**。不重排序、不重编号。按**引用**删除（`List<T>.Remove` 用 `EqualityComparer<T>.Default`，`BrushAnimationKeyFrame` 没重写 `Equals`，所以等价于引用比较）。传一个不在列表里的帧是静默无操作。 |
| `GetFrameAfter` | `public BrushAnimationKeyFrame GetFrameAfter(float time)`（`:42`） | 线性扫描，返回**第一个 `Time > time`** 的帧（严格大于，相等不算）。全都不满足则返回 null。因为 `AddKeyFrame` 保证升序，可以早返回。 |
| `GetFrameAt` | `public BrushAnimationKeyFrame GetFrameAt(int i)`（`:56`） | `if (i >= 0 && i < this._keyFrames.Count)` 则返回，否则 **null**。负下标安全。 |
| `Clone` | `public BrushAnimationProperty Clone()`（`:66`） | `new BrushAnimationProperty()` + 私有 `FillFrom(this)`。深拷贝每一帧（`BrushAnimationKeyFrame.Clone()`），**但不复制 `LayerName`**（见上）。 |
| `FillFrom` | `private void FillFrom(BrushAnimationProperty collection)`（`:74`） | 私有，只被 `Clone` 调。复制 `PropertyType` 与逐帧 `Clone`；**不碰 `LayerName`**。 |
| `BrushAnimationPropertyType` | `public enum BrushAnimationPropertyType`（`:111`） | 嵌套公有枚举，**44 个成员**。详见 [BrushAnimationPropertyType](../BrushAnimationPropertyType)。 |

## 真实示例

建一条两帧的透明度轨道（`LayerName` 留空 ⇒ brush 级）：

```csharp
private static BrushAnimationProperty BuildAlphaTrack()
{
    BrushAnimationProperty track = new BrushAnimationProperty();
    track.PropertyType = BrushAnimationProperty.BrushAnimationPropertyType.AlphaFactor;

    BrushAnimationKeyFrame start = new BrushAnimationKeyFrame();
    start.InitializeAsFloat(0f, 0f);
    track.AddKeyFrame(start);

    BrushAnimationKeyFrame end = new BrushAnimationKeyFrame();
    end.InitializeAsFloat(0.2f, 1f);
    track.AddKeyFrame(end);

    return track;
}
```

**乱序插入也能得到正确结果**，因为 `AddKeyFrame` 每次都重排并重编号——这是这个 API 的一个真实优点：

```csharp
private static BrushAnimationProperty BuildOutOfOrderTrack()
{
    BrushAnimationProperty track = new BrushAnimationProperty();
    track.PropertyType = BrushAnimationProperty.BrushAnimationPropertyType.XOffset;
    track.LayerName = "Highlight";

    BrushAnimationKeyFrame late = new BrushAnimationKeyFrame();
    late.InitializeAsFloat(0.5f, 10f);
    track.AddKeyFrame(late);

    BrushAnimationKeyFrame early = new BrushAnimationKeyFrame();
    early.InitializeAsFloat(0.1f, 0f);
    track.AddKeyFrame(early);

    return track;
}
```

**但删帧之后必须自己重建 `Index`，否则渲染器会取错帧。** 这是唯一正确的删帧写法：

```csharp
private static void RemoveFrameSafely(BrushAnimationProperty track, BrushAnimationKeyFrame frame)
{
    track.RemoveKeyFrame(frame);

    int index = 0;
    foreach (BrushAnimationKeyFrame remaining in track.KeyFrames)
    {
        remaining.InitializeIndex(index);
        index++;
    }
}
```

## 风险与边界

- **`RemoveKeyFrame` 不重编号——本类最危险的坑。** 删掉中间一帧后，后续所有帧的 `Index` 都偏大 1。渲染器随后 `GetFrameAt(end.Index - 1)` 会取到错误的起始帧；当偏到 `Count` 之外时 `GetFrameAt` 返回 null，代码里的三元退化成用 `startState` 或 `source`，动画结果就是突跳。**删帧后必须自己遍历 `KeyFrames` 重写 `Index`。**
- **`RemoveKeyFrame` 也不重排序。** 正常情况下 `AddKeyFrame` 已经保证升序，所以删帧不破坏顺序；但如果你先删再 `AddKeyFrame` 一个更早的时间，`AddKeyFrame` 会重新排序并全量重编号，把问题掩盖掉。**顺序本身没问题，问题只在删除那一瞬间的 `Index`。**
- **`Clone` 不复制 `LayerName`。** 克隆一条图层轨道，`LayerName` 变成 null。下次 `AddAnimationProperty` 时它就会被当成 brush 级轨道收进 `StyleAnimation`。**克隆之后必须自己补 `LayerName`。**
- **`PropertyType` 是字段不是属性。** 没有变更通知，也没有「只能设一次」的保护。写错类型不会报错，只会让动画作用到错误的属性上——而多数属性在渲染器的 `switch` 里根本没有分支，于是静默无效。
- **`AddKeyFrame` 是 O(n log n) 且每次重建 List。** 关键帧多、逐帧添加的加载路径上会明显慢。批量构建时先排好序再一次性 `Add`，仍是 O(n² log n)——但关键帧通常只有两三个，无所谓。
- **`AddKeyFrame` 不判空。** 传 null 会在 `orderby k.Time` 处 `NullReferenceException`。
- **`KeyFrames` 每次返回新的 `ReadOnlyCollection` 包装。** `foreach` 它很安全，但别在每帧循环里反复取——会持续分配。
- **`GetFrameAfter` 是严格大于。** `Time` 恰好等于 `time` 的帧会被跳过，落到下一帧。渲染器随后用 `end.Index - 1` 把它找回来当起始帧，所以逻辑自洽——但如果你自己算「t 时刻的值」而不走这个约定，会得到错误的片段。
- **空轨道是合法的但没有意义。** `Count == 0` 时渲染器算出的 `start` 与 `end` 都是 null，那一轮循环直接跳过这条轨道。所有轨道都空 ⇒ 动画照跑（`Loop` / 时钟都在推进）但画面毫无变化。
- **从 XML 解析的轨道可能是「空壳」。** [BrushFactory](../BrushFactory) 的 `LoadBrushAnimationFrom` 里，若 `PropertyName` 解析出的枚举值不在那三组 `switch` 里，关键帧对象会被 `AddKeyFrame` 加进来但**从未 Initialize**（`Time` 恒 0）。这类轨道看起来「有帧」，实际永远插值到 0。典型是 `IsHidden` / `WidthPolicy` / `Font` 等非数值属性。

## 跨版本提示

五棵源码树（`1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3`）的 public 签名集合比对：**12 条签名，增减均为 0**。字节哈希 `37fd7074` → `877a4965` → `22133312` → `fa189820`，四组互异，说明方法体有改动但公开形状从 1.3 到 1.5 一次都没变。

**结论：不需要为这个类写版本分支。** 升级时唯一需要重新验证的是宿主 [BrushRenderer](../BrushRenderer)——它的 `Render` 签名在 1.3.15 起新增 `Vector2 overlaySize` 参数，而 `AnimateBrushState` / `AnimateBrushLayerState` 属于私有方法，签名不变但实现细节可能调整过；具体表现为「某些 PropertyType 开始/停止被 `switch` 覆盖」这类静默行为变化。

## 依赖关系

- 组合：[BrushAnimationKeyFrame](../BrushAnimationKeyFrame) 构成帧列表；`PropertyType` 的枚举是嵌套的 [BrushAnimationPropertyType](../BrushAnimationPropertyType)（44 个成员）
- 宿主：[BrushAnimation](../BrushAnimation) 的 `AddAnimationProperty` / `RemoveAnimationProperty` 按 `LayerName` 把本对象分派到 `StyleAnimation` 或 `_data`；[BrushLayerAnimation](../BrushLayerAnimation) 用 `Collections`（`MBReadOnlyList<BrushAnimationProperty>`）持有它
- 生产者：[BrushFactory](../BrushFactory) 的 `LoadBrushAnimationFrom` —— `PropertyName` XML 属性经 `Enum.TryParse` 填进公有字段 `PropertyType`
- 消费者：[BrushRenderer](../BrushRenderer) 的 `AnimateBrushState` / `AnimateBrushLayerState`，两者都用 `GetFrameAfter` + `GetFrameAt(Index - 1)` 的两列索引法
- 落点：[BrushState](../BrushState) 与 [BrushLayerState](../BrushLayerState) 的 `SetValueAsFloat` / `SetValueAsColor` / `SetValueAsSprite`
- 桶首页：[gui API 分区](../)