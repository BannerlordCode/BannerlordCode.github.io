---
title: "AutoScrollParameters"
description: "ScrollablePanel.ScrollToChild 的可选参数袋：7 个公有 float 字段 + 一个全默认值的构造函数；HorizontalScrollTarget/VerticalScrollTarget 用 -1 表示「自动选边」，InterpolationTime 小于等于 1e-45 走直接赋值、否则走滚动条插值器——而且 ScrollToChild 会就地改写这个对象的两个 Target 字段。"
---

# AutoScrollParameters

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class AutoScrollParameters`
**Base:** 无（隐式 `System.Object`；是 [ScrollablePanel](../ScrollablePanel) 的 public **嵌套**类）
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollablePanel.cs`（类体在 `:809`-`:843`，宿主类共 845 行）

## 概述

`AutoScrollParameters` 只有两样东西：一个**七个参数全部带默认值**的构造函数，和七个公有 `float` **字段**（不是属性）。整个类没有任何方法——它是一张纯粹的可变参数卡。

字段语义（声明顺序即构造函数赋值顺序，`ScrollablePanel.cs:809` 起的构造函数在 `:812`）：

| 字段 | 构造参数 | 默认值 | 谁在读它 |
| --- | --- | --- | --- |
| `TopOffset` | `topOffset` | `0f` | `ScrollToChild` 判断目标是否溢出上边界：`targetWidget.GlobalPosition.Y - scrollParameters.TopOffset - ExtendCursorAreaTop < ClipRect.GlobalPosition.Y`（`ScrollablePanel.cs:459`） |
| `BottomOffset` | `bottomOffset` | `0f` | 同上，判断下边界溢出（`ScrollablePanel.cs:460`）；溢出时作为向下滚动的额外间距 |
| `LeftOffset` | `leftOffset` | `0f` | 水平方向的上边界判定（`ScrollablePanel.cs:477`） |
| `RightOffset` | `rightOffset` | `0f` | 水平方向的下边界判定（`ScrollablePanel.cs:478`） |
| `HorizontalScrollTarget` | `horizontalScrollTarget` | `-1f` | **哨兵值**：`-1f` 时被改写成「自动」，否则直接当作 `GetScrollXValueForWidget` 的边参数 |
| `VerticalScrollTarget` | `verticalScrollTarget` | `-1f` | 同上，垂直方向 |
| `InterpolationTime` | `interpolationTime` | `0f` | `<= 1E-45f` 时直接写 `Scrollbar.ValueFloat`，否则 `StartInterpolation(value, InterpolationTime)` |

因为是嵌套类，引用时写全名 `ScrollablePanel.AutoScrollParameters`。

## 心智模型

把它当成**「一次滚动请求的单据」**，而不是配置对象。`ScrollablePanel.ScrollToChild(Widget targetWidget, ScrollablePanel.AutoScrollParameters scrollParameters = null)`（`ScrollablePanel.cs:449`）是它唯一的消费者，而那个方法体把「单据怎么解释」讲得比任何文档都清楚。

**第一步：null 兜底成一个全默认单据。**

```csharp
if (scrollParameters == null)
{
    scrollParameters = new ScrollablePanel.AutoScrollParameters(0f, 0f, 0f, 0f, -1f, -1f, 0f);
}
```

这就是为什么传 `null` 等价于「零偏移 + 自动选边 + 瞬移到位」。`AnimatedDropdownWidget` 与 `DropdownWidget` 两处调用点（`AnimatedDropdownWidget.cs:237`、`DropdownWidget.cs:230`）传的都是 `null`。

**第二步：三个前置条件，任一不满足就什么都不做。** 条件是 `this.ClipRect != null && this.InnerPanel != null && base.CheckIsMyChildRecursive(targetWidget)`。注意第三条是**严格递归判定**：`targetWidget` 必须是这个面板的后代（含自身链上的祖先关系），否则连溢出计算都不做。所以「滚动到面板外的控件」是无声失败，不是异常。

**第三步：-1 这个哨兵才是这个类真正的设计核心。** 垂直方向的逻辑是：

```csharp
if (this.VerticalScrollbar != null)
{
    bool tooHigh = targetWidget.GlobalPosition.Y - scrollParameters.TopOffset - ExtendCursorAreaTop < ClipRect.GlobalPosition.Y;
    bool tooLow  = targetWidget.GlobalPosition.Y + targetWidget.Size.Y + scrollParameters.BottomOffset + ExtendCursorAreaBottom > ClipRect.GlobalPosition.Y + ClipRect.Size.Y;
    if (tooHigh || tooLow)
    {
        if (scrollParameters.VerticalScrollTarget == -1f)
        {
            scrollParameters.VerticalScrollTarget = (tooHigh ? 0f : 1f);
        }
        float scrollYValueForWidget = this.GetScrollYValueForWidget(targetWidget, scrollParameters.VerticalScrollTarget, tooHigh ? (-scrollParameters.TopOffset) : scrollParameters.BottomOffset);
        if (scrollParameters.InterpolationTime <= 1E-45f)
        {
            this.VerticalScrollbar.ValueFloat = scrollYValueForWidget;
        }
        else
        {
            this._verticalScrollbarInterpolationController.StartInterpolation(scrollYValueForWidget, scrollParameters.InterpolationTime);
        }
    }
}
```

三个要点：**一，只有 `VerticalScrollbar` 存在时才处理垂直方向**——没有滚动条的面板传什么都没用。**二，`VerticalScrollTarget` 是 `-1` 时会被就地改写**成 `0f`（目标在顶端之外）或 `1f`（在底端之外），然后作为边参数传给 `GetScrollYValueForWidget`。**三，`InterpolationTime` 的分界不是 0 而是 `1E-45f`**（float 的最小正规数量级），所以「瞬移」和「插值」之间没有可配置的缓冲带。

**关键副作用：这张单据会被消费方改写。** `VerticalScrollTarget` / `HorizontalScrollTarget` 在 `ScrollToChild` 里被直接赋值。这意味着**同一个 `AutoScrollParameters` 实例不可复用**——第二次调用时它不再是 `-1`，于是「自动选边」的行为被固化成第一次的结果。官方的两处调用点每次都传 `null`，正好绕开这个坑。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public AutoScrollParameters(float topOffset = 0f, float bottomOffset = 0f, float leftOffset = 0f, float rightOffset = 0f, float horizontalScrollTarget = -1f, float verticalScrollTarget = -1f, float interpolationTime = 0f)`（`ScrollablePanel.cs:812`） | 七个参数全部可选，按声明顺序赋给七个字段。`new AutoScrollParameters()` 等价于「零偏移 + 自动选边 + 瞬移」。注意它是**公有嵌套类里的普通构造函数**，没有重载。 |
| `TopOffset` | `public float TopOffset;`（`ScrollablePanel.cs:824`） | 目标上方需要留出的额外像素。往**下**滚到它时作为负边距传入 `GetScrollYValueForWidget`（`:467`），所以正负号方向和直觉相反。 |
| `BottomOffset` | `public float BottomOffset;`（`ScrollablePanel.cs:827`） | 目标下方留出的像素，往上滚时作为正边距传入。 |
| `LeftOffset` | `public float LeftOffset;`（`ScrollablePanel.cs:830`） | 水平方向上边界留白，与 `TopOffset` 对称。 |
| `RightOffset` | `public float RightOffset;`（`ScrollablePanel.cs:833`） | 水平方向下边界留白，与 `BottomOffset` 对称。 |
| `HorizontalScrollTarget` | `public float HorizontalScrollTarget;`（`ScrollablePanel.cs:836`） | 水平边参数。`-1f` = 尚未确定（由 `ScrollToChild` 写）；`0f`/`1f` = 指定边；其他值原样传给 `GetScrollXValueForWidget`。**会被消费方就地改写**（`:483`-`:484`）。 |
| `VerticalScrollTarget` | `public float VerticalScrollTarget;`（`ScrollablePanel.cs:839`） | 垂直边参数，语义同上，改写发生在 `ScrollablePanel.cs:464`-`:465`。**会被消费方就地改写。** |
| `InterpolationTime` | `public float InterpolationTime;`（`ScrollablePanel.cs:842`） | 插值时长（秒）。`<= 1E-45f`（`:468` 与 `:489`）→ 直接赋值；否则走 `ScrollbarInterpolationController.StartInterpolation`。分界值是 `1E-45f` 而不是 `0f`。 |

## 真实示例

把一个列表项滚到可见区，并且在顶部留 12 像素、底部留 20 像素的呼吸空间，动画 0.25 秒：

```csharp
private static void RevealRow(ScrollablePanel panel, Widget row)
{
    AutoScrollParameters parameters = new AutoScrollParameters(12f, 20f, 0f, 0f, -1f, -1f, 0.25f);
    panel.ScrollToChild(row, parameters);
}
```

用命名参数把「自动选边」和「瞬移」这两个默认值写出来，可读性更好：

```csharp
private static void SnapRowIntoView(ScrollablePanel panel, Widget row)
{
    panel.ScrollToChild(row, new AutoScrollParameters(
        topOffset: 0f,
        bottomOffset: 0f,
        leftOffset: 0f,
        rightOffset: 0f,
        horizontalScrollTarget: -1f,
        verticalScrollTarget: -1f,
        interpolationTime: 0f));
}
```

传 `null` 与传全默认值等价——这是官方两处调用点的写法：

```csharp
private static void SnapRowIntoViewOfficialStyle(ScrollablePanel panel, Widget row)
{
    panel.ScrollToChild(row, null);
}
```

## 风险与边界

- **实例不可复用。** `ScrollToChild` 会把 `HorizontalScrollTarget` / `VerticalScrollTarget` 从 `-1f` 改写成 `0f` 或 `1f`。缓存一个实例重复调用，第二次起「自动选边」就退化成第一次的固化方向。**每次调用都新建一个，或者传 `null`。**
- **`ScrollToChild` 会静默失败。** 三个前置条件（`ClipRect != null`、`InnerPanel != null`、`CheckIsMyChildRecursive(targetWidget)`）任一不满足就直接跳过整个方法体，不抛异常、不写日志。目标不在面板子树里是最常见的踩法。
- **没有对应滚动条就什么也不做。** `VerticalScrollbar == null` 时垂直分支整个跳过；`HorizontalScrollbar == null` 时水平分支跳过。`AutoHideScrollBars` 开启的面板在某些时刻可能滚动条对象存在但不可见——对象存在就会执行。
- **只滚动，不聚焦、不选中。** 这个类不碰 `IntValue`、不碰焦点、不触发任何事件。它只是把 `ScrollbarWidget.ValueFloat` 改成算出来的那个值（或启动一次插值）。想要「选中并滚过去」是两件事。
- **判定用的是 `GlobalPosition` 与 `ClipRect.GlobalPosition`，都在缩放后的坐标系里。** 所以这四个偏移量是**缩放后的像素**，不是设计分辨率下的像素。在动态缩放（`UIContext.IsDynamicScaleEnabled`，默认 true）开启时，同一份参数在不同分辨率下的视觉留白会不同。
- **`1E-45f` 的分界非常极端。** 传 `0.000001f` 也会走插值分支（时长 1 微秒，等于瞬时）。想要「几乎瞬时但仍走插值路径」是可以的，但那个插值器会被创建出来。
- **字段是公有字段而非属性。** 没有变更通知、没有脏检查。类本身也没有任何方法消费这些字段的变化——它们只在 `ScrollToChild` 被调用的那一刻被读一次。
- **参数顺序是位置式的。** 构造函数签名里 `top, bottom, left, right` 排在 `horizontal, vertical, interpolation` 之前。写成 `new AutoScrollParameters(0f, 0f, 0f, 0f, -1f, -1f, 0.25f)` 很容易把最后那个 `0.25f` 错看成某个 offset——**用命名参数**。

## 跨版本提示

`ScrollablePanel.cs` 在 `1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3` 五棵树上的 public/protected 签名集合比对：**52 条签名，增减均为 0**。嵌套的 `AutoScrollParameters` 的构造签名与七个 `float` 字段也在这 52 条里（提取器把嵌套类型的公有成员一并计入），同样零变化。

字节哈希四组互不相同（`851626e2` / `a2338bff` / `367a3716` / `bbeed8ac`），说明方法体在演进，但公开形状从 1.3 到 1.5 冻结。**结论：不需要为这个类写版本分支。**

（`1.4.5` 那棵树里只有 `Bannerlord.Source` 一个目录，没有 GauntletUI 的 C# 源文件，因此不参与本次比对。）

## 依赖关系

- 唯一宿主：[ScrollablePanel](../ScrollablePanel)，`ScrollToChild`（`ScrollablePanel.cs:449`）是它唯一的读点，内部还用到 `GetScrollXValueForWidget` / `GetScrollYValueForWidget`、`ExtendCursorArea*` 与 `CheckIsMyChildRecursive`（都在 [Widget](../Widget) 上）
- 插值执行者：`ScrollablePanel` 的两个 `_horizontalScrollbarInterpolationController` / `_verticalScrollbarInterpolationController`，类型与公开封装见 [ScrollbarInterpolationController](../ScrollbarInterpolationController)
- 真正被改值的对象：[ScrollbarWidget](../ScrollbarWidget) 的 `ValueFloat`
- 官方调用点（都传 `null`）：[AnimatedDropdownWidget](../AnimatedDropdownWidget) 的 `OnWidgetGainedNavigationFocus` 与 `DropdownWidget`
- 桶首页：[gui API 分区](../)