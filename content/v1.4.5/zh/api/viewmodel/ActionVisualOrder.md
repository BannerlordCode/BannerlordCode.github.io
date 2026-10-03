---
title: "ActionVisualOrder"
description: "把一段任意 C# 委托包装成战场命令条上一个条目的适配器。它是 sealed 的，只有 39 行，全树没有任何内部调用点——纯扩展点：想给自己的玩法加一个命令按钮，就构造它并把行为塞进 OrderActionDelegate。"
---
# ActionVisualOrder

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual  
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection  
**Type:** `public sealed class ActionVisualOrder : VisualOrder`  
**Base:** `VisualOrder`  
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual/ActionVisualOrder.cs`

## 概述

战场命令条（order bar）上的每一个按钮，背后都是一个 `VisualOrder`。原版为移动、冲锋、齐射等写了一批具体的 `VisualOrder` 子类。但那些子类每加一个命令就要写一个新文件、重写四个抽象成员——对模组来说太重。

`ActionVisualOrder` 就是为此准备的**适配器**：它把你的一段委托直接当成命令。文件只有 39 行，类被标成 `sealed`（不能继承），内部只做四件事：

```csharp
public delegate void OrderActionDelegate(OrderController orderController, VisualOrderExecutionParameters executionParameters);
```

这个嵌套委托类型是全部的接口约定——它同时把 `OrderController` 和 `VisualOrderExecutionParameters` 交给你，所以你既能读到当前选中的编队，也能拿到执行参数。

四个覆写全部是直白的转发：

| 覆写 | 实现 | 含义 |
| --- | --- | --- |
| `GetName(OrderController)` | `return _name;` | 显示名完全由构造时传入的 `TextObject` 决定，**忽略** `orderController`。 |
| `IsTargeted()` | `return false;` | 声明"本命令不需要玩家再指定目标"。命令条据此不会进入瞄准/选目标流程。 |
| `ExecuteOrder(OrderController, VisualOrderExecutionParameters)` | `_orderAction?.Invoke(orderController, executionParameters);` | 唯一的实际行为。两个参数原样传给你的委托。 |
| `OnGetFormationHasOrder(Formation)` | `return false;` | 声明"本命令在编队层面不构成'已下达的命令'"。 |

## 心智模型

把它读成**"命令条上的一个无状态按钮适配器：把四个必须回答的问题预先答死，把唯一的自由（做什么）留给调用方"**：

- **谁 new 它**：**原版一个都没有**。全树检索 6,222 个 `.cs` 文件（`Bannerlord.Source/bin/**`）后，`ActionVisualOrder` 这个名字只出现在它自己的文件里——`ActionVisualOrder.cs:5`（类声明）、`:13`（构造函数）、`:7`（嵌套委托）——**没有一处 `new`**。它 100% 是给模组用的扩展点——这也意味着**你写的第一个 `new ActionVisualOrder(...)` 就会是这份源码树里的第一个调用点**，没有可参照的内部先例。
- **谁持引用**：你的命令条容器——通常是持有 `OrderController` 并维护一个 `VisualOrder` 列表的那一层。原版把命令列表挂在 `OrderController` / 战术菜单体系里，具体由 `MissionAgentHandler` 与相关 VM 装配。
- **绑到哪个 View 属性**：它自己一个 `[DataSourceProperty]` 都没有。命令条 widget 读的是基类的 `IconId`（→ `StringId`）、`GetName(...)`，以及 `GetActiveState(orderController)` 返回的 `OrderState`。**这些全部是虚方法/property，prefab 无法直接绑定**——命令条不是普通 VM 列表，它自己会调这些方法取数据。
- **什么时候 Dispose**：**没有 `OnFinalize`，没有事件注册，不持有任何资源**。`sealed` + 三个 readonly 字段（一个委托、一个 `TextObject`），构造完就是纯值对象。生命周期 = 你的列表里放多久就多久。
- **一个真正反直觉的后果：这个按钮永远不会高亮。** 基类 `VisualOrder.GetActiveStateAux` 的算法是：遍历所有选中编队，`num` 统计"有答案"的编队数（`flag.HasValue`），`num2` 统计 `flag == true` 的编队数；`num2 == 0` → `OrderState.Default`，`num2 < num` → `PartiallyActive`，`num2 == num` → `Active`。`ActionVisualOrder` 恒返回 `false`（不是 `null`），所以 `num2` 永远是 0，**无论你执行过多少次，返回值永远是 `Default`**。若你需要"按下后置灰/高亮"的效果，必须自己实现一个 `VisualOrder` 子类并让 `OnGetFormationHasOrder` 返回 `true`。
- **`GetName` 忽略 `orderController`**。不能做"根据当前选中的兵种换个名字"这类动态显示；需要动态名就得自己写子类。
- **`IsTargeted() == false` 是硬约束**。你的委托收到的 `executionParameters` 里不会有你要求的"玩家点选的目标"。要带目标交互的按钮不该用这个类。
- **常见误用一**：拿它当"命令状态"的载体。它是**无状态**的——没有已下达/未下达的概念，没有冷却，没有可用性判断。可用性检查得在委托内部自己做，或者在外层容器做。
- **常见误用二**：以为 `sealed` 意味着不能用。`sealed` 挡的是**继承**（防止子类破坏这个适配器的语义），不挡构造。想扩展行为就往委托里塞，别继承。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `OrderActionDelegate`（嵌套委托） | `public delegate void OrderActionDelegate(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | 本类全部的对外接口。命令被执行时以这两个参数回调，顺序与 `ExecuteOrder` 完全一致。 |
| 构造函数 | `public ActionVisualOrder(string iconId, OrderActionDelegate orderAction, TextObject name)` | 三个必填项：图标/字符串 id、行为委托、显示名。注意形参叫 `iconId`，而基类构造的形参叫 `stringId`——它们指向同一个 `StringId` 属性，只是命名不一致。 |
| `GetName` | `public override TextObject GetName(OrderController orderController)` | 直接返回构造时存下的 `_name`，**完全不使用**传入的 `orderController`。命令条因此无法显示动态标题。 |
| `IsTargeted` | `public override bool IsTargeted()` | 恒返回 `false`。命令条据此跳过选目标流程；这也意味着你的委托拿不到目标点选结果。 |
| `ExecuteOrder` | `public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | 唯一的行为：`_orderAction?.Invoke(orderController, executionParameters)`。用了空传播，所以委托为 null 时静默无操作而不是崩。 |
| `OnGetFormationHasOrder` | `protected override bool? OnGetFormationHasOrder(Formation formation)` | 恒返回 `false`。直接后果是 `GetActiveState` 永远给 `OrderState.Default`，按钮永不显示为 Active/PartiallyActive。 |

## 真实示例

构造一个命令条目——这是本类型唯一的实际用法：

```csharp
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual;

public class MyOrderList
{
    private readonly System.Collections.Generic.List<VisualOrder> _orders = new System.Collections.Generic.List<VisualOrder>();

    public void AddGatherOrdersCommand()
    {
        VisualOrder gather = new ActionVisualOrder(
            "my_gather_icon",
            ExecuteGather,
            new TextObject("{=MyGather}Gather"));

        _orders.Add(gather);
    }

    private void ExecuteGather(OrderController orderController, VisualOrderExecutionParameters executionParameters)
    {
        for (int i = 0; i < orderController.SelectedFormations.Count; i++)
        {
            Formation formation = orderController.SelectedFormations[i];

            // 把这个编队交还给 AI，让它自己重新组织
            formation.SetControlledByAI(true);
        }
    }
}
```

确认它永远不高亮，并把这个结论用于 UI 决策（`OnGetFormationHasOrder` 返回 `false` 而非 `null` 的直接后果）：

```csharp
using TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual;

public bool ShouldDimAfterUse(VisualOrder order, OrderController controller)
{
    // ActionVisualOrder 的 OnGetFormationHasOrder 恒为 false，
    // 因此 num2 恒为 0，GetActiveStateAux 只会返回 Default。
    return order.GetActiveState(controller) == OrderState.Active;
}
```

在委托内部自己做可用性判断——因为这一层完全不管状态：

```csharp
public void AddToggleShieldWallCommand()
{
    VisualOrder toggle = new ActionVisualOrder(
        "my_shield_wall_icon",
        (controller, parameters) =>
        {
            if (controller.SelectedFormations == null || controller.SelectedFormations.Count == 0)
            {
                MBInformationManager.ShowHint("Select a formation first.");
                return;
            }

            for (int i = 0; i < controller.SelectedFormations.Count; i++)
            {
                Formation formation = controller.SelectedFormations[i];
                bool anyMounted = formation.HasUnitsWithCondition(a => a.IsMounted);

                MBInformationManager.ShowHint(
                    "Formation " + i + ": units=" + formation.CountOfUnits + ", mounted=" + anyMounted);
            }
        },
        new TextObject("{=MyShieldWall}Toggle Shield Wall"));

    _orders.Add(toggle);
}
```

## 风险与边界

- **无状态，因此无法表达"已执行/不可再执行"**。`OnGetFormationHasOrder` 恒 `false` 是最直接的证据。冷却、每场战斗一次、消耗资源这类语义必须写在委托内部或外层容器里，命令条本身不会替你渲染任何禁用态。
- **`IsTargeted() == false` 不可绕过**。`sealed` 意味着你不能改这个返回值。任何需要"玩家再点一个目标"的命令，用 `ActionVisualOrder` 都做不到。
- **没有异常隔离**。`_orderAction?.Invoke(...)` 是裸调用。委托里抛出的异常会直接穿过 `ExecuteOrder` 冒到命令条的调用栈。命令处理器应自行 try/catch，否则一个 mod 命令的崩溃会带崩整个战斗 UI。
- **`sealed`**。不能继承来加行为。想加状态就写自己的 `VisualOrder` 子类。
- **无生命周期、无释放**。没有 `OnFinalize`、没有事件订阅、没有 native 句柄。把实例长期缓存在静态字段里也**不会**泄漏任何东西（三个 readonly 字段都是普通引用）。这与本桶绝大多数视图模型相反。
- **序列化**：无。没有 `SyncData`、不参与 `IDataStore`。命令列表是纯表现层。
- **`TextObject` 的引用捕获**：`_name` 存的是 `TextObject` 而不是快照字符串，这与 `ActionOptionDataVM` 把文案转成 string 的做法不同。语言切换后 `TextObject` 本身会被重新求值，但**已经取过一次字符串的缓存会陈旧**——如果你的命令条把 `GetName()` 的结果缓存成字符串，需要在语言切换后重建缓存。
- **native 边界**：无。纯托管。但它活在任务系统语境里，`OrderController` / `VisualOrderExecutionParameters` 的下游会触及 `Bannerlord.Native`——那是委托内部的事，本类本身不碰。
- **跨版本**：`OrderActionDelegate` 的两个参数类型、`OrderState` 的三个取值（`Default` / `PartiallyActive` / `Active`）与基类 `GetActiveStateAux` 的计数算法都是 v1.4.5 的形状。上游若改动 `VisualOrder` 的抽象成员集合，本类会编译失败。

## 依赖关系

- ↑ 父类：[VisualOrder](../VisualOrder) —— 提供 `StringId`、`IconId`、`GetActiveState` 以及四个抽象成员的契约
- ↔ 同级：[VisualOrderExecutionParameters](../VisualOrderExecutionParameters) —— 委托的第二个参数，命令执行时的上下文
- ↔ 同级：[OrderState](../OrderState) —— `Default` / `PartiallyActive` / `Active`，命令条据此画高亮
- → 命令上下文：`OrderController`（zh: [../../mission-ext/OrderController](../../mission-ext/OrderController)）——委托的第一个参数，提供 `SelectedFormations`
- → 编队：[Formation](../../mission/Formation) —— `OnGetFormationHasOrder` 的参数类型
- → 文本：[GameTextManager](../../core-extra/GameTextManager)
