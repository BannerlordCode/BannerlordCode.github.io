---
title: "BrushLayerSizePolicy"
description: "三值尺寸策略枚举：StretchToTarget / Original / Overriden，被 BrushLayer.WidthPolicy 与 HeightPolicy 各持一份；渲染时按这三段分支决定贴图尺寸与拉伸补偿，且判断用的都是 StyleLayer 上的属性，所以它不可动画。"
---

# BrushLayerSizePolicy

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public enum BrushLayerSizePolicy`
**Base:** 无（`System.Enum`）
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushLayerSizePolicy.cs`（全文 15 行）

## 概述

这个枚举回答一个问题：**一张图该按什么尺寸画出来？** 三个成员，声明序号 0→2：

| 成员 | 序号 | 渲染时的尺寸 |
| --- | --- | --- |
| `StretchToTarget` | 0 | 控件的目标宽度（再加 `ExtendLeft + ExtendRight`），并把起点向左挪一个补偿量 |
| `Original` | 1 | `sprite.Width * scale`，即图片自身尺寸 |
| `Overriden` | 2 | `layer.OverridenWidth * scale`，由图层的 `OverridenWidth` / `OverridenHeight` 显式指定 |

全文 15 行：三个 `using`、命名空间、枚举声明、三个成员、两组 Token 注释。**没有任何方法，没有 `[Flags]`，没有 `[Editor]`。**

它有两个宿主字段：[BrushLayer](../BrushLayer) 的 `WidthPolicy`（`BrushLayer.cs:418`）与 `HeightPolicy`（`BrushLayer.cs:439`），两个都是 `[Editor(false)]` 属性，默认值都是 `StretchToTarget`（`BrushLayer.cs` 构造函数里显式赋值）。

XML 里通过 `WidthPolicy` / `HeightPolicy` 两个属性名写入，由 [BrushFactory](../BrushFactory) 的 `LoadBrushLayerInto` 解析：

```csharp
else if (key == "WidthPolicy") { brushLayer.WidthPolicy = (BrushLayerSizePolicy)Enum.Parse(typeof(BrushLayerSizePolicy), value2); }
else if (key == "HeightPolicy") { brushLayer.HeightPolicy = (BrushLayerSizePolicy)Enum.Parse(typeof(BrushLayerSizePolicy), value2); }
```

**用的是 `Enum.Parse` 而不是 `Enum.TryParse`**——写错拼写会抛 `ArgumentException`，而 `LoadBrushFile` 会把它整个吞成一条 `FailedAssert`，结果是那个 Brush 文件半途失败。

## 心智模型

**把它当成「尺寸的三个档位」，并记住这个枚举的判定发生在渲染的最后一步，且读的是 [StyleLayer](../StyleLayer) 而不是动画状态。**

在 [BrushRenderer](../BrushRenderer) 的 `Render` 里，横向那段是：

```csharp
if (layer.WidthPolicy == BrushLayerSizePolicy.StretchToTarget)
{
    float head = layer.ExtendLeft;
    if (layer.HorizontalFlip) { head = layer.ExtendRight; }
    w = vector2.X;
    w += (layer.ExtendRight + layer.ExtendLeft) * scale;
    x -= head * scale;
}
else if (layer.WidthPolicy == BrushLayerSizePolicy.Original) { w = (float)sprite.Width * scale; }
else if (layer.WidthPolicy == BrushLayerSizePolicy.Overriden)  { w = layer.OverridenWidth * scale; }
```

三点必须记住：

**第一，`StretchToTarget` 不是「无脑拉伸」。** 它会把 `ExtendLeft + ExtendRight` 加进总宽，并把绘制起点左移 `ExtendLeft`（若 `HorizontalFlip` 则改用 `ExtendRight`）。这就是九宫格拉伸的补偿逻辑——**只有 `StretchToTarget` 会读那四个 `Extend*` 字段**。`Original` 与 `Overriden` 完全不看它们。

**第二，`Original` 用的 `sprite` 是动画状态里的那张。** 也就是说如果这一层的 `Sprite` 正在被动画换图，`Original` 算出来的尺寸会跟着变——但换图是硬切换（进度到 0.9 之前一直是起始图），所以尺寸会在 0.9 那一瞬间跳变。

**第三，这段代码读的是 `layer.WidthPolicy`，也就是 [StyleLayer](../StyleLayer) 上的值，不是 `_currentBrushLayerState`。** 原因是 [BrushLayerState](../BrushLayerState) 里**根本没有 `WidthPolicy` 这个字段**——`BrushLayerState.FillFrom` 只搬 16 个属性（颜色五项、偏移五项、`Extend*` 四项、`Sprite`）。所以：

- **这个枚举不可动画。** 想做「尺寸随时间变化」只能动画 `OverridenWidth` / `OverridenHeight`（在 [BrushAnimationPropertyType](../BrushAnimationPropertyType) 里它们确实在 float 组里），并把 policy 设成 `Overriden`。
- 但改 `WidthPolicy` **一样能被重绘**——因为它的 setter 会让 [BrushLayer](../BrushLayer) 的 `Version` 加一，走 `StyleLayer.Version → Style.Version → IsUpdateNeeded()` 那条失效链。**「不可动画」不等于「改了不生效」。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `StretchToTarget` | `BrushLayerSizePolicy.StretchToTarget`（序号 0） | 拉伸到控件的目标尺寸，并叠加 `Extend*` 补偿。**[BrushLayer](../BrushLayer) 的默认值。** 只有这一档会读那四个 `Extend*` 字段。九宫格背景图用它。 |
| `Original` | `BrushLayerSizePolicy.Original`（序号 1） | 用图片自身尺寸（`sprite.Width * scale`）。图标、光标这类「不随容器缩放」的元素用它。**忽略 `Extend*`，忽略控件尺寸。** |
| `Overriden` | `BrushLayerSizePolicy.Overriden`（序号 2） | 用 `layer.OverridenWidth` / `OverridenHeight` 显式指定。**拼写是 `Overriden` 而不是 `Overridden`**，与 [BrushLayer](../BrushLayer) 的 `OverridenWidth` / `OverridenHeight` 字段名保持一致——这是 1.3.0 到 1.5.3 全版本一致的公开拼写，不要「顺手修正」。 |

| 承载点 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `BrushLayer.WidthPolicy` | `[Editor(false)] public BrushLayerSizePolicy WidthPolicy { get; set; }`（`BrushLayer.cs:418`） | 横向档位，构造时默认 `StretchToTarget`。setter 在值变化时让 `Version++`。XML 属性名 `WidthPolicy`，`Enum.Parse` 解析。 |
| `BrushLayer.HeightPolicy` | `[Editor(false)] public BrushLayerSizePolicy HeightPolicy { get; set; }`（`BrushLayer.cs:439`） | 纵向档位，默认同上。XML 属性名 `HeightPolicy`。 |

## 真实示例

把一个图标层设成「按原图尺寸画」——这是 `Original` 唯一的实际用途：

```csharp
private static void PinIconToOriginalSize(Brush brush, string iconLayerName)
{
    BrushLayer layer = brush.GetLayer(iconLayerName);
    if (layer == null) { return; }

    layer.WidthPolicy = BrushLayerSizePolicy.Original;
    layer.HeightPolicy = BrushLayerSizePolicy.Original;
}
```

把一个层设成「显式尺寸」，这样它就能被动画驱动（`OverridenWidth` / `OverridenHeight` 是可动画的）：

```csharp
private static void UseExplicitSize(Brush brush, string layerName, float width, float height)
{
    BrushLayer layer = brush.GetLayer(layerName);
    if (layer == null) { return; }

    layer.WidthPolicy = BrushLayerSizePolicy.Overriden;
    layer.HeightPolicy = BrushLayerSizePolicy.Overriden;
    layer.OverridenWidth = width;
    layer.OverridenHeight = height;
}
```

安全解析 XML 里来的字符串（官方用的是会抛异常的 `Enum.Parse`，这里换成不会抛的）：

```csharp
private static bool TryParseSizePolicy(string value, out BrushLayerSizePolicy policy)
{
    return Enum.TryParse<BrushLayerSizePolicy>(value, out policy);
}

private static void ApplySizePolicyFromString(BrushLayer layer, string value)
{
    BrushLayerSizePolicy policy;
    if (TryParseSizePolicy(value, out policy))
    {
        layer.WidthPolicy = policy;
    }
}
```

## 风险与边界

- **`Overriden` 拼错且不可改。** 名字里的 `Overriden`（多一个 d）是 1.3 → 1.5 的稳定契约。写 `Overridden` 编译不过；写字符串 `"Overridden"` 交给 `Enum.Parse` 会抛。
- **`Overriden` 档位下 `OverridenWidth` / `OverridenHeight` 为 0 会画出零尺寸。** 构造函数的默认值是 `0f`（没有初始化），所以「设了 policy 却忘了设尺寸」的表现是**整层不可见**，不是回退到拉伸。
- **`StretchToTarget` 档位下 `Extend*` 生效，其余两档不生效。** 同一组 `Extend*` 在不同 policy 下表现完全不同——切 policy 时别指望原来的补偿还生效。
- **纵向分支里有一个疑似笔误。** [BrushRenderer](../BrushRenderer) 的 `Render` 在处理 `HeightPolicy == StretchToTarget` 时，判断读偏移量用哪个端点用的是 `layer.HorizontalFlip` 而不是 `layer.VerticalFlip`：

  ```csharp
  float head = layer.ExtendTop;
  if (layer.HorizontalFlip) { head = layer.ExtendBottom; }
  num6 = vector2.Y;
  num6 += (layer.ExtendTop + layer.ExtendBottom) * scale;
  num2 -= head * scale;
  ```

  横向那段用的确实是 `layer.HorizontalFlip`，纵向这段照抄了同一条件。**结果是：横向翻转 + 纵向非翻转时，纵向的拉伸补偿会用错端点。** 这在 1.3.0 到 1.5.3 的所有版本里原样保留，属于官方实现细节而不是你的配置错误。
- **不可动画，但可改。** [BrushAnimationPropertyType](../BrushAnimationPropertyType) 里虽然有 `WidthPolicy` / `HeightPolicy` 两个成员，但它们属于「无消费者」那一档——[BrushFactory](../BrushFactory) 的解析 `switch` 与 [BrushRenderer](../BrushRenderer) 的两个 `Animate*` 都没有分支，所以写了也不生效。想改尺寸请动画 `OverridenWidth` / `OverridenHeight`（但它们在 [BrushLayerState](../BrushLayerState) 的 `SetValueAsFloat` 里**没有** `case`，同样是断言 + 无效——详见 [BrushAnimationPropertyType](../BrushAnimationPropertyType) 的对照表）。
- **`Enum.Parse` 遇到非法字符串会抛。** [BrushFactory](../BrushFactory) 用的是 `Enum.Parse`，拼错时异常一路冒到 `LoadBrushFile` 的 try/catch，变成一条 `FailedAssert`，并且**那个 Brush 文件的其余内容也不会被加载**。自己解析时用 `Enum.TryParse`。
- **`sprite == null` 时整个尺寸计算不会发生。** [BrushRenderer](../BrushRenderer) 在 `Sprite` 或 `Sprite.Texture` 为 null 时直接跳过这一层，三个档位都不执行。所以 `Original` 也不会崩，只是层不画。
- **两个档位读的是 [StyleLayer](../StyleLayer)。** 在 [BrushLayer](../BrushLayer) 上设了 policy 但对应的 [Style](../Style) 副本没同步（正常情况下 `AddLayer` / `FillFrom` 会同步）时，实际生效的可能是旧值。

## 跨版本提示

五棵源码树（`1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3`）的 public/protected 签名集合比对：**1 条签名（三成员枚举声明），增减均为 0**。字节哈希更是**五棵树完全一致**（`9239baaf`）——这是本批 20 个类型里唯一一个**文件内容逐字节未变**的。

**结论：跨 1.3 → 1.5 完全零风险，不需要任何版本分支。** 相比之下同组的 [BrushOverlayMethod](../BrushOverlayMethod) 字节哈希也是五棵树一致；而 [BrushLayer](../BrushLayer) 在 1.3.15 起新增了三个 `ImageFit` 公有字段（与本枚举无关，但同属图层尺寸话题）。

## 依赖关系

- 两个宿主字段：[BrushLayer](../BrushLayer) 的 `WidthPolicy`（`BrushLayer.cs:418`）与 `HeightPolicy`（`:439`），XML 属性名同名
- 实际执行：[BrushRenderer](../BrushRenderer) 的 `Render` 里 `WidthPolicy` 与 `HeightPolicy` 各一段三分支的尺寸计算
- 依赖的同层字段：[BrushLayer](../BrushLayer) 的 `OverridenWidth` / `OverridenHeight` / `ExtendLeft` / `ExtendRight` / `ExtendTop` / `ExtendBottom` / `HorizontalFlip` / `VerticalFlip`
- 解析入口：[BrushFactory](../BrushFactory) 的 `LoadBrushLayerInto`，用 `Enum.Parse`（失败即抛）
- 与之并列的另一组渲染期枚举：[BrushOverlayMethod](../BrushOverlayMethod)（覆盖合成方式）；两者都**不可动画**
- 尺寸相关的动画入口：[BrushAnimationPropertyType](../BrushAnimationPropertyType) 里的 `OverridenWidth` / `OverridenHeight` / `Extend*`
- 桶首页：[gui API 分区](../)