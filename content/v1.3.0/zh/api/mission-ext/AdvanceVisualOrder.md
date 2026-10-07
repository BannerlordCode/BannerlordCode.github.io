---
title: "AdvanceVisualOrder"
description: "前进命令的 UI 命令对象：构造只收图标 id，GetName 返回硬编码 Engage 文案，ExecuteOrder 按是否带编队分成 SetOrderWithFormation / SetOrder 两条路。"
---

# AdvanceVisualOrder

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AdvanceVisualOrder : VisualOrder`
**Base:** `VisualOrder`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/ViewModelCollection/Order/Visual/Default/Orders/MovementOrders/AdvanceVisualOrder.cs`（全文 43 行）

## 概述

`AdvanceVisualOrder` 是命令面板上「前进」这一格的实现，全文 43 行，四个成员加一个构造：

```csharp
public class AdvanceVisualOrder : VisualOrder
{
    public AdvanceVisualOrder(string iconId) : base(iconId) { }

    public override TextObject GetName(OrderController orderController)
    {
        return new TextObject("{=A38xbjqm}Engage", null);
    }

    public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)
    {
        if (executionParameters.HasFormation)
        {
            orderController.SetOrderWithFormation(OrderType.Advance, executionParameters.Formation);
            return;
        }
        orderController.SetOrder(OrderType.Advance);
    }

    protected override bool? OnGetFormationHasOrder(Formation formation)
    {
        return new bool?(OrderController.GetActiveMovementOrderOf(formation) == OrderType.Advance);
    }

    public override bool IsTargeted() { return true; }
}
```

**重要前提：`VisualOrder` 基类和 `VisualOrderExecutionParameters` 类型在 1.3.0 的反编译源码树里不存在。** 我确认过：`grep -rn "class VisualOrder" --include=*.cs .` 零命中，`grep -rn "VisualOrderExecutionParameters"` 只在使用点出现、没有类型声明。也就是说 `TaleWorlds.MountAndBlade.ViewModelCollection` 这个程序集在 1.3.0 源码树里**只反编译出了默认命令实现的那一小部分**，基类契约要靠派生类的 override 形状反推。本页只写能从本文件读出的东西。

## 心智模型

把它当成**「命令面板一格 → 一次 `OrderController` 调用」的适配器**。它不含任何状态、不含任何逻辑分支以外的东西，职责就是三件事：给自己取个名字、把点击翻译成命令、告诉 UI 这一格是不是「选中目标型」。

心智模型分三块。

**第一块：`ExecuteOrder` 是唯一的分支点，而且分支依据不是「有没有选中部队」而是「执行参数里有没有编队」。** `executionParameters.HasFormation` 为真时走 `SetOrderWithFormation(OrderType.Advance, executionParameters.Formation)`，为假时走 `SetOrder(OrderType.Advance)`。两个方法都在 [OrderController](../OrderController) 上（`OrderController.cs:255` 的 `public unsafe virtual void SetOrder(OrderType)` 和 `OrderController.cs:1061` 的 `public virtual void SetOrderWithFormation(OrderType, Formation)`），内部都会先调 `BeforeSetOrder(orderType)`、结束时调 `AfterSetOrder(orderType)`。**注意分支里那个 `return`**——`HasFormation` 为真时直接返回，不会再执行无编队那条路径。

**第二块：`IsTargeted()` 返回 `true`，所以这一格会要求先选目标。** 这是 UI 层的行为约定，不是命令本身的语义。对比同桶的 [StopVisualOrder](../StopVisualOrder)：它没有覆写 `IsTargeted`，说明默认值不是 `true`。所以覆写这一项就是**显式选择「点下去之前先选目标」**。

**第三块：`OnGetFormationHasOrder` 决定命令面板上哪些编队的按钮被点亮。** 返回 `bool?` 而不是 `bool`——可空意味着「不知道」和「确定没有」是两回事。实现是 `OrderController.GetActiveMovementOrderOf(formation) == OrderType.Advance`。这个静态方法（`OrderController.cs:1460`）先把 `MovementOrder` 读出来，再按 `MovementStateEnum` 分派：`Charge` 直接返回 `OrderType.Charge`；`Hold` 时才读 `movementOrder.OrderType` 做细化比较。**所以「某个编队当前是不是在前进」这个问题，最终答案由 `OrderController` 的静态映射决定，不是简单比对字段。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `AdvanceVisualOrder(string iconId)` | `public AdvanceVisualOrder(string iconId) : base(iconId)` | 唯一构造，把图标 id 直接透传给基类。官方在 [DefaultVisualOrderProvider](../DefaultVisualOrderProvider) 的默认布局（`:42`）和 legacy 布局（`:103`）里各 `new` 一次，都传 `"order_movement_advance"`。**没有无参构造**——实例化必须给图标 id。 |
| `GetName` | `public override TextObject GetName(OrderController orderController)` | 返回命令显示名。硬编码 `new TextObject("{=A38xbjqm}Engage", null)`——本地化 key `{=A38xbjqm}` + 英文回退串 `Engage`，第二个参数（`null`）是 speaker/变体参数。**参数 `orderController` 完全没用到**，签名是接口要求的。 |
| `ExecuteOrder` | `public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | 点击时执行。按 `executionParameters.HasFormation` 二选一：带编队调 `SetOrderWithFormation(OrderType.Advance, executionParameters.Formation)`（走完就 `return`），否则调 `SetOrder(OrderType.Advance)`。两者都是 `void`，没有返回值可判断是否成功。 |
| `OnGetFormationHasOrder` | `protected override bool? OnGetFormationHasOrder(Formation formation)` | `protected` 覆写，供基类查询某个编队是否已有此命令。实现为 `new bool?(OrderController.GetActiveMovementOrderOf(formation) == OrderType.Advance)`——显式装箱成可空，因为基类签名要 `bool?`。返回 `false` 时该编队的按钮不高亮。 |
| `IsTargeted` | `public override bool IsTargeted()` | 返回 `true`，声明这一格属于「需要先选目标」的命令。不接受参数、不读任何状态，每次调用都返回常量 `true`。 |

## 真实示例

读命令名做 UI 定制——`GetName` 每次调用都 `new` 一个 `TextObject`，不是缓存字段：

```csharp
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade;

public static TextObject DescribeAdvanceCommand(OrderController controller)
{
    AdvanceVisualOrder order = new AdvanceVisualOrder("order_movement_advance");
    return order.GetName(controller);
}
```

查询某个编队当前是否已在前进中，这是 UI 高亮的完整判断：

```csharp
using TaleWorlds.MountAndBlade;

public static bool IsFormationAdvancing(AdvanceVisualOrder order, Formation formation)
{
    bool? hasOrder = order.OnGetFormationHasOrder(formation);
    if (!hasOrder.HasValue)
    {
        return false;
    }
    return hasOrder.Value;
}
```

`OnGetFormationHasOrder` 是 `protected`，**上面这段只在派生类里成立**；外部代码请直接用 `OrderController.GetActiveMovementOrderOf(formation) == OrderType.Advance`，那是 public 的：

```csharp
using TaleWorlds.MountAndBlade;

public static bool IsAdvancing(Formation formation)
{
    return OrderController.GetActiveMovementOrderOf(formation) == OrderType.Advance;
}
```

派生一个自己的前进命令，换名字、换图标（构造必须传 iconId，`ExecuteOrder` 复用官方的两条分支）：

```csharp
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade;

public class SlowAdvanceVisualOrder : AdvanceVisualOrder
{
    public SlowAdvanceVisualOrder() : base("order_movement_slow_advance") { }

    public override TextObject GetName(OrderController orderController)
    {
        return new TextObject("{=MyKey01}Advance (Slow)", null);
    }
}
```

## 风险与边界

- **基类 `VisualOrder` 与参数类型 `VisualOrderExecutionParameters` 不在 1.3.0 源码树里。** 上面写的签名都是从本文件的 override 声明里读出来的，字面正确；但基类还有哪些成员、这些 override 之外的调用时机如何，只能从同目录的其他 8 个 `*VisualOrder` 派生类反推。写代码前请先在 ILSpy 里打开 `TaleWorlds.MountAndBlade.ViewModelCollection.dll` 确认基类契约。
- **没有无参构造。** `AdvanceVisualOrder(string iconId)` 是唯一构造。想在集合里批量 new 就必须每次给同一个图标 id，官方就是这么做的。
- **`GetName` 每次都 `new TextObject`，而且忽略 `orderController` 参数。** 想按上下文返回不同名字（按编队类型区分「前进」和「接敌」）必须在派生类里自己覆写并用上那个参数。
- **`ExecuteOrder` 的 `HasFormation` 分支带早退。** 走 `SetOrderWithFormation` 之后那个 `return` 不能省——删掉会让两个命令连发。
- **`OrderType.Advance` 是硬编码的。** 想加「慢速前进」这类新命令，必须去 `OrderType` 里加枚举值并让 [OrderController](../OrderController) 的 `SetOrder` / `GetActiveMovementOrderOf` 都认识它，否则 `SetOrder` 内部会走到 `Debug.FailedAssert("[DEBUG]Invalid order type.")`（`OrderController.cs:612`）。
- **`OnGetFormationHasOrder` 是 `protected`。** 外部无法直接调用，只能派生。而 `OrderController.GetActiveMovementOrderOf` 是 `public unsafe static`，外部查询请直接用后者。
- **`bool?` 的 `null` 分支本类不会产生。** 实现永远装箱一个确定的 `true`/`false`。但基类签名是可空的，其他派生类可能返回 `null`；你自己的派生里返回 `null` 时 UI 的处理方式未知，别轻易这么写。
- **`IsTargeted()` 返回 `true` 意味着必须选目标。** 这是 UI 层的强约束。在没有可选目标的场合（部署阶段、任务刚开场）这一格会被禁用——但禁用逻辑在 UI 层，不在这个类里。
- **它属于 `ViewModelCollection` 程序集的 View 侧，不是任务逻辑。** 在 `TaleWorlds.MountAndBlade`（任务逻辑程序集）里引不到它。
- **命名空间极深**：`TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders`。8 个 `using` 才凑得齐官方 [DefaultVisualOrderProvider](../DefaultVisualOrderProvider) 那份引用列表。

## 怎么用

### 怎么拿到它

`public class AdvanceVisualOrder : VisualOrder`（`TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/ViewModelCollection/Order/Visual/Default/Orders/MovementOrders/AdvanceVisualOrder.cs:7`）。**没有无参构造**，实例化必须给图标 id；官方在 `DefaultVisualOrderProvider` 的默认布局与 legacy 布局里各 `new` 一次，都传 `"order_movement_advance"`。它不是全局单例——命令表里每格各有一个实例，你要拿就从自己的 `VisualOrderProvider` 里按格子取，而不是去全局找。

### 典型用法

下面「真实示例」两段都是在**读**这个命令（读名字、查编队高亮）。真正**下发**它走的是 `ExecuteOrder`，而它自己会在两种下法之间二选一：

```csharp
public static void IssueAdvance(OrderController controller, VisualOrderExecutionParameters parameters)
{
    AdvanceVisualOrder order = new AdvanceVisualOrder("order_movement_advance");

    // IsTargeted() 恒返回 true：它声明这一格要先选目标，UI 排布与指令优先级都按这个来
    if (!order.IsTargeted())
    {
        return;
    }

    // ExecuteOrder 自己分派：parameters.Formation 非空走 OrderController.SetOrderWithFormation
    // （OrderController.cs:1061），否则走 SetOrder（OrderController.cs:255）
    order.ExecuteOrder(controller, parameters);

    // 两个 SetOrder 都是 void，没有成功/失败返回值：下发之后无从判断对方是否接受了
    MBDebug.Print("[MyMod] advance 已下发，结果不可读回");
}
```

与上面「真实示例」的差别：那两段都是把实例当**只读查询器**用（`GetName`、OnGetFormationHasOrder），调用方都是 UI；这里是把同一个实例当**写入通道**用，调用方是 AI/脚本，且必须知道结果不可读回——所以要自己打日志。

### 最容易踩的坑

**基类 `VisualOrder` 与参数类型 `VisualOrderExecutionParameters` 不在 1.3.0 托管源码树里。** 上面的签名都是从本文件的 `override` 声明里读出来的，字面正确；但基类还有哪些成员、这些 override 之外的调用时机如何，只能从同目录的其他 8 个 `*VisualOrder` 派生类反推。写代码前先确认基类契约。

## 跨版本提示

`AdvanceVisualOrder` 的 43 行内容在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 里逐字一致，`{=A38xbjqm}Engage` 这个本地化 key 也一直用着（稳定 key 不保证稳定文案——改 key 会导致你的硬编码比较失效）。

真正会变的是**基类 `VisualOrder` 的契约**。1.3.15 及之后 `ViewModelCollection` 里新增了大量命令类型（比如把 `MoveVisualOrder` 拆成多档、把编队形状做成参数化构造），基类很可能追加了虚成员。对你的影响是：

- 你只覆写这四个成员的话，基类追加成员不会让你编译失败。
- 但如果你**继承了官方某个 `*VisualOrder` 并重写 `ExecuteOrder`**，新版改了该类的默认实现时你会跟着变——所以**优先继承 `VisualOrder` 基类而不是官方派生类**（本类的 `SlowAdvanceVisualOrder` 例子继承的是 `AdvanceVisualOrder`，如果官方 `ExecuteOrder` 逻辑变了你也会跟着变，这是有意的取舍，注释里写清楚）。

命令图标 id 字符串（`"order_movement_advance"`）是 View 层资源 key，重命名 View 资源时会静默丢图而不报编译错。

## 依赖关系

- 基类：`VisualOrder`（`TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`）—— **不在 1.3.0 反编译树内**，需查 DLL
- 参数类型：`VisualOrderExecutionParameters` —— 同样不在树内，由本文件 `executionParameters.HasFormation` / `executionParameters.Formation` 反推出至少有这两个成员
- 注册位置：[DefaultVisualOrderProvider](../DefaultVisualOrderProvider) 的 `GetDefaultOrders()`（`:42`）与 `GetLegacyOrders()`（`:103`）各注册一次，图标 id 都是 `"order_movement_advance"`
- 真正的执行对象：[OrderController](../OrderController) 的 `SetOrder` / `SetOrderWithFormation` / 静态 `GetActiveMovementOrderOf`
- 命令枚举与队伍：`OrderType.Advance` 与 [Formation](../../mission/Formation) 的编队上下文
- 集合容器：[GenericVisualOrderSet](../GenericVisualOrderSet) 负责把命令排进「Movement / Form / Toggle」三个分组
- 同族命令：[StopVisualOrder](../StopVisualOrder)（不覆写 `IsTargeted`）、[ChargeVisualOrder](../ChargeVisualOrder)（同一 Movement 组）
- 桶首页：[mission-ext API 分区](../)