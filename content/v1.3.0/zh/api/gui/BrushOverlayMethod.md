---
title: "BrushOverlayMethod"
description: "两值覆盖合成枚举：None 与 CoverWithTexture。被 BrushLayer.OverlayMethod 持有，但真正决定它取值的是 OverlaySprite 的 setter —— 赋非 null 且当前为 None 时自动改成 CoverWithTexture，赋 null 时改回 None。"
---

# BrushOverlayMethod

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public enum BrushOverlayMethod`
**Base:** 无（`System.Enum`）
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushOverlayMethod.cs`（全文 13 行）

## 概述

这个枚举回答「图层上方那张覆盖图怎么合成」的问题。全文 13 行，两个成员：

| 成员 | 序号 | 含义 |
| --- | --- | --- |
| `None` | 0 | 不做覆盖。 |
| `CoverWithTexture` | 1 | 用一张纹理盖在主图上。 |

声明在 `BrushOverlayMethod.cs:6`，两个成员在 `:8` 与 `:10`。没有 `[Flags]`、没有 `[Editor]`、没有任何方法。

**它是 [BrushLayer](../BrushLayer) 的 `OverlayMethod` 属性的类型**（`BrushLayer.cs:503`）。构造时默认 `None`（`BrushLayer.cs` 构造函数里显式赋值）。

XML 里通过 `OverlayMethod` 属性写入，由 [BrushFactory](../BrushFactory) 的 `LoadBrushLayerInto` 解析——同样用 `Enum.Parse` 而非 `TryParse`：

```csharp
else if (key == "OverlayMethod") { brushLayer.OverlayMethod = (BrushOverlayMethod)Enum.Parse(typeof(BrushOverlayMethod), value2); }
```

## 心智模型

**把 `OverlayMethod` 理解为「`OverlaySprite` 的伴生开关」，而不是一个独立可选的功能。**

原因是 [BrushLayer](../BrushLayer) 的 `OverlaySprite` setter 强行维护这两个字段的一致性：

```csharp
set
{
    this._overlaySprite = value;
    uint version = this.Version;
    this.Version = version + 1U;
    if (this._overlaySprite != null)
    {
        if (this.OverlayMethod == BrushOverlayMethod.None)
        {
            this.OverlayMethod = BrushOverlayMethod.CoverWithTexture;
            return;
        }
    }
    else
    {
        this.OverlayMethod = BrushOverlayMethod.None;
    }
}
```

（`BrushLayer.cs:523` 起。）三个推论：

**一，`OverlaySprite` 赋非 null 会自动打开覆盖。** 你只写 `layer.OverlaySprite = sprite;` 就够了，不需要再写 `layer.OverlayMethod = CoverWithTexture;`。反过来，先设 `OverlayMethod = CoverWithTexture` 再设 `OverlaySprite = null`，`OverlayMethod` 会被**改回 `None`**。

**二，只有从 `None` 出发才会被自动改成 `CoverWithTexture`。** 因为有枚举只有两个值，这个「自动开」条件实际上等价于「总是会开」——但代码写成这样是为了表达意图：覆盖图存在时开启覆盖。

**三，`FillFrom` 的拷贝顺序让这份一致性可能被「修正」。** [BrushLayer](../BrushLayer) 的 `FillFrom` 先拷 `OverlayMethod` 后拷 `OverlaySprite`，所以复制一个「`OverlayMethod=None` 但 `OverlaySprite != null`」的不一致源，结果会变成 `CoverWithTexture`。**逐字复制一个非法状态是做不到的。**

渲染侧，[BrushRenderer](../BrushRenderer) 的 `Render` 里真正起作用的判断是**两个条件的合取**：

```csharp
if (layer.OverlayMethod == BrushOverlayMethod.CoverWithTexture && layer.OverlaySprite != null)
{
    Sprite overlaySprite = layer.OverlaySprite;
    Texture overlayTexture = overlaySprite.Texture;
    if (overlayTexture != null) { ... simpleMaterial.OverlayEnabled = true; ... }
}
```

**`OverlayMethod` 单独为 `CoverWithTexture` 不会有任何视觉变化**——没有 `OverlaySprite`（或它的 `Texture` 为 null）就什么都不做。所以这两个字段的真实关系是「`OverlaySprite` 是必要条件，`OverlayMethod` 只是被 setter 维护的伴生标记」。

覆盖打开后，[BrushRenderer](../BrushRenderer) 会用 `UseOverlayAlphaAsMask` 决定偏移与尺寸的来源：

- `UseOverlayAlphaAsMask == true` ⇒ 覆盖偏移改用**图层自身的** `XOffset` / `YOffset`，覆盖纹理宽高改用**目标矩形尺寸**（`vector2.X` / `vector2.Y`）；
- 否则 ⇒ 用图层自己的 `OverlayXOffset` / `OverlayYOffset`（除非 `Render` 的 `overlayOffset` 入参非 `default`），宽高用**覆盖 sprite 自身尺寸**。

再叠加 `UseRandomBaseOverlayXOffset` / `UseRandomBaseOverlayYOffset`——为真时各加一个 `new Random(_offsetSeed).Next(0, 2048)` 产生的随机基底（种子来自控件的 `_seed`，由 `SetSeed` 注入）。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `None` | `BrushOverlayMethod.None`（序号 0，`BrushOverlayMethod.cs:8`） | 不覆盖。[BrushLayer](../BrushLayer) 的构造默认值。**给 `OverlaySprite` 赋 null 会被强制设成这个值**，即便你显式写的是 `CoverWithTexture`。 |
| `CoverWithTexture` | `BrushOverlayMethod.CoverWithTexture`（序号 1，`BrushOverlayMethod.cs:10`） | 用 `OverlaySprite` 的纹理盖在主图上。**必须同时有非 null 的 `OverlaySprite` 且它的 `Texture` 非 null 才有视觉输出。** |

| 承载点 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `BrushLayer.OverlayMethod` | `[Editor(false)] public BrushOverlayMethod OverlayMethod { get; set; }`（`BrushLayer.cs:503`） | 覆盖开关。`[Editor(false)]` + XML 属性名 `OverlayMethod`（`Enum.Parse` 解析）。setter 与其它属性一样在值变化时 `Version++`。 |
| `BrushLayer.OverlaySprite` | `[Editor(false)] public Sprite OverlaySprite { get; set; }`（`BrushLayer.cs:523`） | **真正的决定者**。它的 setter 强制维护 `OverlayMethod`，且**无条件 `Version++`**（26 个属性里唯一一个不做相等判断的）。 |

## 真实示例

打开覆盖——只需设 `OverlaySprite`，setter 会替你把 `OverlayMethod` 补上：

```csharp
private static void AttachOverlay(BrushLayer layer, Sprite overlay)
{
    layer.OverlayXOffset = 2f;
    layer.OverlayYOffset = 2f;
    layer.OverlaySprite = overlay;

    if (layer.OverlayMethod != BrushOverlayMethod.CoverWithTexture)
    {
        layer.OverlayMethod = BrushOverlayMethod.CoverWithTexture;
    }
}
```

关闭覆盖——**只设 `OverlayMethod = None` 不够**，因为 `OverlaySprite` 还挂着、渲染仍会命中 `layer.OverlaySprite != null` 那一半。正确做法是把 sprite 也置空，让 setter 强制同步：

```csharp
private static void DetachOverlay(BrushLayer layer)
{
    layer.OverlaySprite = null;

    if (layer.OverlayMethod != BrushOverlayMethod.None)
    {
        layer.OverlayMethod = BrushOverlayMethod.None;
    }
}
```

用覆盖纹理的 alpha 当遮罩（改变偏移与尺寸的来源）：

```csharp
private static void UseOverlayAsMask(BrushLayer layer, Sprite mask)
{
    layer.OverlaySprite = mask;
    layer.UseOverlayAlphaAsMask = true;
    layer.OverlayXOffset = 0f;
    layer.OverlayYOffset = 0f;
}
```

安全解析 XML 里来的字符串（官方用的是会抛异常的 `Enum.Parse`）：

```csharp
private static bool TryParseOverlayMethod(string value, out BrushOverlayMethod method)
{
    return Enum.TryParse<BrushOverlayMethod>(value, out method);
}

private static void ApplyOverlayMethodFromString(BrushLayer layer, string value)
{
    BrushOverlayMethod method;
    if (TryParseOverlayMethod(value, out method))
    {
        layer.OverlayMethod = method;
    }
}
```

## 风险与边界

- **`OverlayMethod` 单独设置没有意义。** 渲染的合取条件里 `layer.OverlaySprite != null` 是必要条件；`OverlaySprite.Texture` 为 null 时连 `OverlayEnabled` 都不会打开。**真正的开关是 `OverlaySprite`。**
- **`OverlaySprite` 的 setter 会反向改写 `OverlayMethod`。** 赋 null → 强制 `None`；赋非 null 且当前为 `None` → 强制 `CoverWithTexture`。**「保留 sprite 引用但关掉覆盖」在 1.3.0 上做不到。**
- **`OverlaySprite` 无条件 `Version++`。** 重复赋同一个 sprite 也会触发重绘。这是 26 个图层属性里唯一一个没有 `if (value != this._x)` 判断的。
- **两个字段的拷贝顺序不对称。** [BrushLayer](../BrushLayer) 的 `FillFrom` 先 `OverlayMethod` 后 `OverlaySprite`，后者可能把前者改掉。复制一个手工构造的不一致对象时结果会被「修正」。
- **`Enum.Parse` 遇到非法字符串会抛。** [BrushFactory](../BrushFactory) 的解析路径是 `Enum.Parse`，拼错（`CoverWithTexture` 写成 `CoverTexture`、`coverWithTexture` 大小写错）会抛 `ArgumentException`，被 `LoadBrushFile` 的 catch 吞成一条 `FailedAssert`，**该 Brush 文件的剩余内容不再加载**。
- **不可动画。** [BrushAnimationPropertyType](../BrushAnimationPropertyType) 里的 `OverlayMethod` 与 `OverlaySprite` 都属于「无消费者」那一档（`OverlaySprite` 稍有不同：渲染器的 Sprite 组有它的 `case`，但 [BrushLayerState](../BrushLayerState) 的 `SetValueAsSprite` 只接受 `Sprite`，所以图层级动画里写 `OverlaySprite` 会一路算到落点然后被断言挡掉）。改这两个值只能靠直接赋值 + Version 链触发重绘。
- **`UseOverlayAlphaAsMask` 会改变偏移与尺寸的语义。** 为真时 `OverlayXOffset` / `OverlayYOffset` 被忽略（改用图层的 `XOffset` / `YOffset`），覆盖纹理宽高被忽略（改用目标矩形尺寸）。所以「配了 OverlayXOffset 却没生效」通常是因为同时开了这个开关。
- **随机基底偏移是每渲染器一份，不是每帧刷新。** `GetRandomXOffset()` 在 `_randomXOffset < 0f` 时才生成，生成后缓存在字段里。所以同一控件的同一层，覆盖图的随机偏移在整个生命周期内是**固定的**；种子来自 `SetSeed(int)`，而 [BrushListPanel](../BrushListPanel) 在 `OnConnectedToRoot` 里用控件的 `_seed`（未显式设种子时是 `GetSiblingIndex()`）调它——所以「同层不同控件」会得到不同的随机偏移，「同一控件重新连根」可能也会变。
- **只有两个值，`None` 是默认值。** 不写 `OverlayMethod` 的图层就是 `None`，而 `None` + 有 sprite 的组合会被 setter 强制修正，所以正常流程下不会出现「有覆盖图但没开覆盖」。

## 跨版本提示

五棵源码树（`1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3`）的 public/protected 签名集合比对：**1 条签名（两成员枚举声明），增减均为 0**。字节哈希**五棵树完全一致**（`b874825f`）——与 [BrushLayerSizePolicy](../BrushLayerSizePolicy) 并列为本批 20 个类型里仅有的两个「文件内容逐字节未变」的文件。

**结论：跨 1.3 → 1.5 零风险，不需要版本分支。** 需要留意的是宿主 [BrushLayer](../BrushLayer) 在 1.3.15 起新增了三个公有字段（`ImageFitType` / `ImageFitHorizontalAlignment` / `ImageFitVerticalAlignment`），那是另一件事，与覆盖合成无关。

## 依赖关系

- 宿主：[BrushLayer](../BrushLayer) 的 `OverlayMethod`（`BrushLayer.cs:503`）与 `OverlaySprite`（`:523`），后者持有前者的自动修正逻辑
- 配套的渲染期开关：[BrushLayer](../BrushLayer) 的 `UseOverlayAlphaAsMask`、`OverlayXOffset` / `OverlayYOffset`、`UseRandomBaseOverlayXOffset` / `UseRandomBaseOverlayYOffset`
- 实际执行：[BrushRenderer](../BrushRenderer) 的 `Render` 中 `layer.OverlayMethod == CoverWithTexture && layer.OverlaySprite != null` 那一段，以及私有 `GetRandomXOffset()` / `GetRandomYOffset()`
- 解析入口：[BrushFactory](../BrushFactory) 的 `LoadBrushLayerInto`，用 `Enum.Parse`（失败即抛）
- 不可动画的证据：[BrushAnimationPropertyType](../BrushAnimationPropertyType) 的 `OverlayMethod` 与 `OverlaySprite` 两个成员；落点在 [BrushLayerState](../BrushLayerState) 的 `SetValueAsSprite`
- 同组的另一个渲染期枚举：[BrushLayerSizePolicy](../BrushLayerSizePolicy)
- 桶首页：[gui API 分区](../)