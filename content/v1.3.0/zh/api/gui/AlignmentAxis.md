---
title: "AlignmentAxis"
description: "GauntletUI 的轴向二值枚举：只有 Horizontal / Vertical 两个值、没有 [Flags]，全源码树里被 ScrollbarWidget.AlignmentAxis、SliderWidget.AlignmentAxis、ScrollablePanel.MouseScrollAxis 三个 public 成员消费，StackLayout 在内部把它当 MeasureLinear 的方向参数传。"
---

# AlignmentAxis

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public enum AlignmentAxis`
**Base:** 无（`System.Enum`）
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AlignmentAxis.cs`（全文 13 行）

## 概述

`AlignmentAxis` 是一个**只有两个成员**的方向枚举：`Horizontal`（值为 0，声明在 `AlignmentAxis.cs:8`）与 `Vertical`（值为 1，`AlignmentAxis.cs:10`）。整个文件除了 `using System;` 和命名空间声明之外没有别的内容——没有方法、没有 `[Flags]`、没有 `[Editor]` 之类的标注。

它存在的理由只有一条：**GauntletUI 里凡是需要「沿哪个轴取值」的控件，共用同一个类型而不是各自定义枚举**。在 1.3.0 源码树里，能查到的三个公开落点全部是「public 属性或字段」，没有任何一个是方法参数：

- `ScrollbarWidget.AlignmentAxis`（`BaseTypes/ScrollbarWidget.cs:55`）——滚动条自身的朝向。它的私有方法 `GetValue(Vector2 value, AlignmentAxis alignmentAxis)`（`BaseTypes/ScrollbarWidget.cs:259`）在 `alignmentAxis == AlignmentAxis.Horizontal` 时取 X 分量（`ScrollbarWidget.cs:261`），随后 `:274`、`:277`、`:317`、`:322`、`:351` 这一串代码全靠它决定读哪一边。
- `SliderWidget.AlignmentAxis`（`BaseTypes/SliderWidget.cs:461`）——滑块朝向，判断逻辑在 `SliderWidget.cs:145`、`:251`、`:311`、`:344`、`:349` 与私有 `GetValue`（`SliderWidget.cs:357`）。
- `ScrollablePanel.MouseScrollAxis`（`BaseTypes/ScrollablePanel.cs:670`）——**公有字段**而不是属性，鼠标滚轮驱动哪个方向。它没有任何初始化器，所以默认值就是枚举的第 0 项 `Horizontal`。

第四个落点是内部的：`Layout/StackLayout.cs:51` 与 `:59` 把 `AlignmentAxis.Horizontal` / `AlignmentAxis.Vertical` 直接传给私有方法 `MeasureLinear`，用来决定 `StackLayout` 沿主轴还是副轴排布。这是唯一一处「方法参数用它」的地方，而且方法本身是 private，外部调不到。

## 心智模型

把它当成**「一维量的方向标签」**，而不是当成某种对齐方式（那件事由 [HorizontalAlignment](../HorizontalAlignment) / [VerticalAlignment](../VerticalAlignment) 负责）。判断某个控件该怎么用它，只问一句：**这个控件是在一条轴上取值，还是在两条轴上分别取值？**

**取值型（沿一条轴读一个数）**——[ScrollbarWidget](../ScrollbarWidget) 与 [SliderWidget](../SliderWidget) 属于这一类。滚轮/拖拽给出的是 `Vector2` 指针位置，但进度条只有一个标量进度，所以必须知道「进度沿 X 还是沿 Y」。它们的 `AlignmentAxis` 决定了拖拽命中、值换算、绘制朝向、滑块摆放这四件事全都用同一条轴。**改这个属性会同时改这四件事**，这是它最重要的行为特征。

**驱动型（决定一次输入作用在哪个方向）**——[ScrollablePanel](../ScrollablePanel) 属于这一类。它的 `HorizontalScrollbar` 与 `VerticalScrollbar` 是两个独立对象，`MouseScrollAxis` 只回答「鼠标滚轮这一下算给谁」，不影响面板内部已有的滚动位置。

有一个容易踩的细节：`ScrollablePanel.MouseScrollAxis` 是**字段**（不是属性），赋值不会触发任何通知；而 `ScrollbarWidget.AlignmentAxis` 与 `SliderWidget.AlignmentAxis` 是自动属性。运行期改 `MouseScrollAxis` 会在下一帧的滚轮处理里立即生效，而改 `ScrollbarWidget.AlignmentAxis` 会让控件自身的命中与绘制方向在下一次布局/更新时整体翻转——视觉上像是「控件转了个身」。

最后记住它**没有 `[Flags]`**。不要写 `AlignmentAxis.Horizontal | AlignmentAxis.Vertical`——C# 允许你这么写（得到值 1，也就是 `Vertical`），不会报错，但语义完全是巧合。任何需要「两个方向都要」的场景（双轴面板、圆形选择器）都是**两个独立成员各自一份值**，不是一个组合值。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Horizontal` | `AlignmentAxis.Horizontal`（枚举值 0，`AlignmentAxis.cs:8`） | 「沿 X 轴」。`ScrollbarWidget.GetValue` 命中这个分支时返回指针的 X 分量；也是 `ScrollablePanel.MouseScrollAxis` 的默认值（字段无初始化器 ⇒ 取枚举第 0 项）。 |
| `Vertical` | `AlignmentAxis.Vertical`（枚举值 1，`AlignmentAxis.cs:10`） | 「沿 Y 轴」。绝大多数滚动条/滑块要的就是它。`StackLayout.MeasureLinear` 收到它时改走副轴测量。 |

| 承载点 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ScrollbarWidget.AlignmentAxis` | `public AlignmentAxis AlignmentAxis { get; set; }`（`BaseTypes/ScrollbarWidget.cs:55`） | 滚动条朝向。私有 `GetValue` 与四处命中判断全按它分叉。改它等价于把滚动条整体旋转 90°。 |
| `SliderWidget.AlignmentAxis` | `public AlignmentAxis AlignmentAxis { get; set; }`（`BaseTypes/SliderWidget.cs:461`） | 滑块朝向，与上面同构但独立实现（`SliderWidget.cs:357` 有自己的 `GetValue`）。 |
| `ScrollablePanel.MouseScrollAxis` | `public AlignmentAxis MouseScrollAxis;`（`BaseTypes/ScrollablePanel.cs:670`） | 鼠标滚轮作用方向。公有字段、无 setter 通知、默认 `Horizontal`。 |

## 真实示例

把一条竖直列表的滚动条与鼠标滚轮都对齐到 Y 轴——这两处必须一起改，只改一处会让滚动条画在水平方向而滚轮仍推动 Y 轴。`ScrollablePanel` 的 `HorizontalScrollbar` / `VerticalScrollbar`（`ScrollablePanel.cs:615` / `:636`）与 `MouseScrollAxis`（`:670`）都是 public：

```csharp
// panel 来自你自己的 screen/movie 字段绑定
private static void AlignScrollbarsToVertical(ScrollablePanel panel, Widget firstItem)
{
    panel.VerticalScrollbar.AlignmentAxis = AlignmentAxis.Vertical;
    panel.HorizontalScrollbar.AlignmentAxis = AlignmentAxis.Horizontal;
    panel.MouseScrollAxis = AlignmentAxis.Vertical;
    panel.ScrollToChild(firstItem, null);
}
```

滑块同理，[SliderWidget](../SliderWidget) 持有的是自己一份 `AlignmentAxis`（`SliderWidget.cs:461`），与上面两个滚动条互不相关：

```csharp
private static void RotateSlider(SliderWidget slider)
{
    slider.AlignmentAxis = AlignmentAxis.Vertical;
}
```

## 风险与边界

- **只有两个值，没有第三种。** 没有 `Both`、没有 `None`。需要双向的场景一律是两个成员各存一份。
- **没有 `[Flags]`，位运算无意义。** `Horizontal | Vertical` 编译通过但结果等于 `Vertical`，是纯粹的巧合而非设计。任何按位组合的写法都是 bug 而不是捷径。
- **改 `ScrollbarWidget.AlignmentAxis` 会翻转命中判定。** 该属性的 getter/setter 本身没有副作用，但消费它的 `GetValue`（`ScrollbarWidget.cs:259`）与命中分支在每一帧生效；运行期翻转会让拖拽方向与画面方向短暂不一致，直到下一次完整布局。不要在每帧里赋值——它是自动属性但没有脏标记，等于每帧都改。
- **`ScrollablePanel.MouseScrollAxis` 不会通知任何人。** 它是公有字段，改了不会有 `OnPropertyChanged` 事件；想让 UI 刷新必须自己触发重算。
- **默认值不对称。** 枚举第 0 项是 `Horizontal`，所以 `ScrollablePanel.MouseScrollAxis` 天然是「横向滚轮驱动」——对于以竖排为主的游戏界面来说这是反直觉的默认值，新建面板时**必须显式赋值**。
- **别拿它当对齐用。** 控件的对齐是 [HorizontalAlignment](../HorizontalAlignment) / [VerticalAlignment](../VerticalAlignment)，`AlignmentAxis` 只描述「沿哪条轴读标量」，两者名字相近但作用完全不同。
- **类型不在 `TaleWorlds.GauntletUI.BaseTypes` 命名空间。** 文件路径在 `BaseTypes/` 下的 [ScrollbarWidget](../ScrollbarWidget)、[SliderWidget](../SliderWidget)、[ScrollablePanel](../ScrollablePanel) 声明的是 `TaleWorlds.GauntletUI`，而 `AlignmentAxis` 本体也在 `TaleWorlds.GauntletUI`。`using` 只需要 `TaleWorlds.GauntletUI` 一个。

## 跨版本提示

`AlignmentAxis.cs` 在 `bannerlord-1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3` 五棵源码树里的 **public 成员集合完全一致**：都是 1 条枚举声明，成员恒为 `Horizontal` / `Vertical`，公开成员数 0（枚举体不算成员）。逐文件字节比对也确认 1.3.0、1.3.15、1.4.6、1.4.7、1.5.3 的哈希相同（1.4.5 那棵树只有 `Bannerlord.Source` 单一目录，没有 GauntletUI 的 C# 源文件，不参与比对）。

换句话说，这个枚举从 1.3 到 1.5 **一个字都没改**。mod 侧引用它的代码不需要任何条件编译。

变的是**消费面**：`AlignmentAxis` 的下游控件（`ScrollbarWidget`、`SliderWidget`、`ScrollablePanel`）在这几个版本里公开成员集合也没变，但它们内部的绘制/命中实现随渲染管线一起迭代。结论是：依赖 `AlignmentAxis` 本身的代码跨版本安全，依赖「设置了这个属性之后控件具体怎么表现」的代码不保证。

## 依赖关系

- 取值型消费者：[ScrollbarWidget](../ScrollbarWidget) 与 [SliderWidget](../SliderWidget) 各自持有一份 `AlignmentAxis` 并用它分叉命中判定与值换算
- 驱动型消费者：[ScrollablePanel](../ScrollablePanel) 的 `MouseScrollAxis` 公有字段决定滚轮输入分配
- 内部消费者：`Layout/StackLayout.cs` 用它给私有 `MeasureLinear` 选主轴/副轴（该方法为 private，外部不可调用）
- 概念对照：控件自身的对齐方向是 [HorizontalAlignment](../HorizontalAlignment) 与 [VerticalAlignment](../VerticalAlignment)，不要与本枚举混用
- 桶首页：[gui API 分区](../)
- 架构背景：[native-interop](../../../architecture/native-interop) 说明滚动条命中与最终绘制分别落在哪一层