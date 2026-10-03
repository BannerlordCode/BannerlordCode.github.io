---
title: "BasicContainer"
description: "最简容器：继承 Container 但只实现选中逻辑，OnChildSelected 是唯一的真实行为（线性扫子节点找下标写回 IntValue）；GetDropGizmoPosition 与 GetIndexForDrop 两个重写直接 throw new NotImplementedException()，IsDragHovering 是永不赋值的只读自动属性。"
---

# BasicContainer

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BasicContainer : Container`
**Base:** `Container`（→ [Widget](../Widget)）
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BasicContainer.cs`（全文 49 行）

## 概述

`BasicContainer` 是 GauntletUI 里「我只需要一个能装子控件、能记录选中下标的容器」时用的最小实现。全文 49 行，除去注释和空行之后只有七段声明，没有一个字段。

它是 `Container` 的四个抽象成员的填充版本，而**四个填充的质量完全不同**：

- `AcceptDropPredicate`（`BasicContainer.cs:17`）—— `public override Predicate<Widget> AcceptDropPredicate { get; set; }`，一个纯自动属性重写，能存能读。**但没有任何代码给它赋过默认值**，所以初始值是 `null`。
- `OnChildSelected(Widget widget)`（`:36`）—— 唯一有真实逻辑的方法，完整实现见下文。
- `IsDragHovering`（`:33`）—— `public override bool IsDragHovering { get; }`，**只读自动属性，类里没有任何一处给它赋值**。所以它恒为 `false`，永远。
- `GetDropGizmoPosition(Vector2)`（`:20`）与 `GetIndexForDrop(Vector2)`（`:26`）—— 两个方法体都是单行 `throw new NotImplementedException();`。

对比一下它的兄弟 [ListPanel](../ListPanel)：同一个基类、同样的四个抽象成员，但 [ListPanel](../ListPanel) 把 `GetIndexForDrop` / `GetDropGizmoPosition` / `IsDragHovering` 都实现成了「按子节点命中矩形算下标 / 算插入指示位置 / 记录悬停下标」的真实逻辑。**所以「BasicContainer 不支持拖放」不是设计缺陷，是字面意义上的 `NotImplementedException`。**

## 心智模型

**把它当成 `[Container](../Container) 的「只做选中」档位**，选型规则就一句话：**你要拖放排序就上 [ListPanel](../ListPanel)，只做选中就用 `BasicContainer`。** 因为两者唯一的差别就是拖放那三个成员的实现质量。

`OnChildSelected` 的实现是全文唯一值得逐行读的代码：

```csharp
public override void OnChildSelected(Widget widget)
{
    int intValue = -1;
    for (int i = 0; i < base.ChildCount; i++)
    {
        if (widget == base.GetChild(i))
        {
            intValue = i;
        }
    }
    base.IntValue = intValue;
}
```

三件事：**一**，线性扫描 `ChildCount` 个子节点，用**引用相等**（`==`，而 [Widget](../Widget) 没有重载 `==`，所以是引用比较）找出下标；**二**，初值 `-1`，找不到就保持 `-1` 并照样赋值；**三**，无论找没找到，最后都无条件 `base.IntValue = intValue`。

第三点是关键：它**无条件把算出的下标写回 `IntValue`**，包括 `-1`。而 [Container](../Container) 的 `IntValue` setter（`Container.cs:29`）自己有一层守卫：

```csharp
if (!this._currentlyChangingIntValue)
{
    this._currentlyChangingIntValue = true;
    if (value != this._intValue && value < base.ChildCount)
    {
        this._intValue = value;
        this.UpdateSelected();
        foreach (Action<Widget> action in this.SelectEventHandlers) { action(this); }
        base.EventFired("SelectedItemChange", Array.Empty<object>());
        base.OnPropertyChanged(value, "IntValue");
    }
    this._currentlyChangingIntValue = false;
}
```

三个后果：**一**，守卫是**重入保护**（`_currentlyChangingIntValue`），在 handler 里再写 `IntValue` 会被静默忽略；**二**，`value < base.ChildCount` 意味着**越界下标被静默丢弃**（不赋值、不通知、不报错）；**三**，写入 `-1` 是**合法的**（`-1 < ChildCount` 恒成立），所以「点到空白处取消选中」会真的走一遍 `UpdateSelected()` + 触发全部 `SelectEventHandlers` + 发 `SelectedItemChange` 事件。

什么时候会被调到：[Container](../Container) 内部在处理子控件的点击/选中时统一调 `OnChildSelected`。它的三个 handler 列表——`SelectEventHandlers`、`ItemAddEventHandlers`、`ItemRemoveEventHandlers`、`ItemAfterRemoveEventHandlers`（`Container.cs:253`-`:262`）——是公有 `List<Action<...>>` 字段，挂在**同一个 ListPanel 形状的容器**上才有意义，这也说明 `[BasicContainer](../BasicContainer)` 本质上就是 `[ListPanel](../ListPanel)` 的退化形态。

关于拖放：[Container](../Container) 的 `OnDrop` 是 `protected internal override`（`Container.cs:101`），内部会用到 `AcceptDropPredicate` 与 `GetDropGizmoPosition`。如果外部代码对一个 `BasicContainer` 触发拖放路径而 `AcceptDropPredicate` 又是 `null`，`OnDrop` 那一侧的行为取决于 [Container](../Container) 是否有判空；**无论哪一侧，最终只要走到 `GetIndexForDrop` 或 `GetDropGizmoPosition` 就是 `NotImplementedException`**。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public BasicContainer(UIContext context) : base(context)`（`:10`） | 纯转发，一行 `base(context)`。默认 `AcceptDropPredicate` 为 `null`、`IsDragHovering` 为 `false`、没有任何默认子项。 |
| `AcceptDropPredicate` | `public override Predicate<Widget> AcceptDropPredicate { get; set; }`（`:17`） | 拖放准入谓词。**有 setter 能存能读，但类内不赋默认值**，初始为 `null`。真要用拖放必须自己先赋一个委托。 |
| `GetDropGizmoPosition` | `public override Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition draggedWidgetPosition)`（`:20`） | 计算拖放指示光标应画在哪个坐标。**方法体是 `throw new NotImplementedException();`**——任何调用方都会拿到未实现异常，参数 `draggedWidgetPosition` 从未被使用。 |
| `GetIndexForDrop` | `public override int GetIndexForDrop(Vector2 draggedWidgetPosition)`（`:26`） | 计算应插入到哪个下标。**同样 `throw new NotImplementedException();`**，参数未被使用。 |
| `IsDragHovering` | `public override bool IsDragHovering { get; }`（`:33`） | 是否正在拖拽悬停。**只读自动属性且类内零赋值，恒为 `false`**。想让它反映真实状态只能自己 `new` 一个字段遮蔽——但那不是 override，基类读到的是原来的 `false`。 |
| `OnChildSelected` | `public override void OnChildSelected(Widget widget)`（`:36`） | 唯一有实现的方法。线性扫 `base.ChildCount` 个 `base.GetChild(i)` 做引用比较找下标，初值 `-1`，最后无条件 `base.IntValue = 下标`。参数 `widget` 为 null 时结果是 `IntValue = -1`。无返回值。 |

## 真实示例

用 `BasicContainer` 做一组只能单选、不能拖放排序的选项，并把选中下标读回来：

```csharp
private static BasicContainer BuildOptionRow(UIContext context, Widget host, string[] labels)
{
    BasicContainer row = new BasicContainer(context);
    host.AddChild(row);

    for (int i = 0; i < labels.Length; i++)
    {
        ButtonWidget option = new ButtonWidget(context);
        option.Id = labels[i];
        row.AddChild(option);
    }

    row.AcceptDropPredicate = delegate (Widget candidate) { return false; };
    row.SelectEventHandlers.Add(delegate (Widget sender) { ReadSelectedIndex(sender); });
    return row;
}

private static int ReadSelectedIndex(Widget sender)
{
    Container container = sender as Container;
    if (container == null) { return -1; }
    // OnChildSelected 找不到子项时写的就是 -1，这里同样把它当「未选中」
    return container.IntValue;
}
```

派生一个带索引语义的自定义容器——注意想支持拖放就必须覆盖那两个会抛异常的方法：

```csharp
public class ReadOnlyOptionRow : BasicContainer
{
    public ReadOnlyOptionRow(UIContext context) : base(context)
    {
        this.AcceptDropPredicate = delegate (Widget candidate) { return false; };
    }

    public override bool IsDragHovering
    {
        get { return false; }
    }
}
```

## 风险与边界

- **两个拖放方法是硬抛异常，不是返回默认值。** `GetDropGizmoPosition` 与 `GetIndexForDrop` 都 `throw new NotImplementedException()`。任何走拖放路径的代码（拖拽开始时的插入指示绘制、松手时的重排）都会炸。不要试图用 try/catch 兜住当正常路径——改用 [ListPanel](../ListPanel)。
- **`IsDragHovering` 恒为 `false`。** 它是只读自动属性（`{ get; }`，没有 setter），类内也没有任何赋值点。派生类**可以**覆盖它（基类声明为 `public abstract bool IsDragHovering { get; }`，[Container](../Container) 上确实有 `abstract`），但在派生类里给一个同名属性赋值是**遮蔽**不是**覆盖**——基类代码读到的仍然是 `false`。
- **`AcceptDropPredicate` 初始为 `null`。** 它是可写的自动属性，但 `BasicContainer` 不赋默认值。拖放路径里如果直接调用它委托而不判空，会 `NullReferenceException`。**用 `BasicContainer` 就应该主动赋一个恒返回 false 的委托**（或者干脆让任何拖放路径都不走到这里）。
- **没有布局。** `BasicContainer` 不持有 `StackLayout`（那是 [ListPanel](../ListPanel) 的 `StackLayout` 属性，[ListPanel](../ListPanel) 在构造器里创建并管理它）。所以子控件不会自动纵向排列——**必须自己设每个子项的 `PositionXOffset` / `PositionYOffset` 或 `HorizontalAlignment` / `VerticalAlignment` / 尺寸**，否则全部叠在 (0,0)。
- **没有项描述、没有模板。** [Container](../Container) 上有 `DefaultItemDescription`（`Container.cs:13`）与 `AddItemDescription` / `GetItemDescription`，`BasicContainer` 不做任何填充，它们的默认行为由 [Container](../Container) 决定。
- **`OnChildSelected` 是 O(n) 线性扫描。** 子项很多时每次选中都要走一遍。用引用比较（不是 `Equals`）所以传入的必须是同一个实例。
- **`OnChildSelected` 会把 `-1` 真的写进去。** 「点在容器空白处」→ `OnChildSelected(null 或不在列表里的控件)` → `IntValue = -1` → [Container](../Container) 的守卫放行 → 触发 `UpdateSelected()`、遍历全部 `SelectEventHandlers`、发 `SelectedItemChange`。**取消选中是有通知的事件，不是静默的。**
- **越界下标会被静默丢弃。** `Container.IntValue` 的 setter 要求 `value < base.ChildCount`。如果你在 [Container](../Container) 的 handler 里写一个超范围的下标，什么都不会发生——连异常都没有。
- **`IntValue` 的写入有重入保护。** `_currentlyChangingIntValue` 为真时赋值被静默忽略。在 `SelectEventHandlers` 里写 `IntValue` 是无效的，得先排队到下一帧。
- **`IsRecursivelyVisible` 之类的东西不归它管。** 可见性、裁剪、焦点全部是 [Widget](../Widget) 层面的事，这个类只加了一个「选中下标」。
- **命名容易骗人。** 「Basic」指的是「最少的成员」，不是「最简单的用法」。需要拖放/排序/模板时它是错误的选型。

## 跨版本提示

`BasicContainer.cs` 在 `1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3` 五棵树的 public/protected 签名集合比对：**7 条签名，增减均为 0**——构造器、四个 override、一个 `OnChildSelected` 一个不少、一个不多。1.5.3 也是 +0/-0。

字节哈希 `10a47eb5` → `5bc0bea0` → `a1d45327` → `ea5139b8` 四组不同，说明实现体在动（很可能只是反编译产物的格式差异），但公开形状从 1.3 到 1.5 一次都没变。**跨版本不需要条件编译，也不需要担心那两个 `NotImplementedException` 在某个版本被悄悄补上实现**——如果某天它们有了真实实现，那属于行为变更而不是 API 变更，届时以新版本源码为准。

（`1.4.5` 树只有 `Bannerlord.Source` 单一目录、无 GauntletUI C# 源文件，不参与本次比对。）

## 依赖关系

- 基类：[Container](../Container)（抽象容器，声明四个必须实现的成员），再往上是 [Widget](../Widget)
- 兄弟实现：[ListPanel](../ListPanel) 是同基类下功能完整的版本（自带 `StackLayout`、真实拖放计算、可用的 `IsDragHovering`）；`BasicContainer` 与它是「退化 vs 完整」的关系
- 拖放契约接口：[IDropContainer](../IDropContainer) 只要求 `AcceptDropPredicate` 与 `GetDropGizmoPosition` 两项——`BasicContainer` 实现了签名，但第二项抛异常
- 事件出口：[Container](../Container) 上的 `SelectEventHandlers` / `ItemAddEventHandlers` / `ItemRemoveEventHandlers` / `ItemAfterRemoveEventHandlers` 四个公有 `List<Action<...>>` 字段
- 选中态的实际迁移由 [Container](../Container) 的私有 `UpdateSelected()` 完成，通知出口是 `SelectEventHandlers` 列表、`SelectedItemChange` 事件与 `OnPropertyChanged(value, "IntValue")`
- 桶首页：[gui API 分区](../)