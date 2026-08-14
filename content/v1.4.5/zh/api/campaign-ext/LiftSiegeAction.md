---
title: "LiftSiegeAction"
description: "通过正常 SiegeEvent 生命周期移除当前围城中全部已登记攻城方的战役动作。"
---

# LiftSiegeAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class`  
**源码：** `TaleWorlds.CampaignSystem/Actions/LiftSiegeAction.cs`

## 实际作用

`LiftSiegeAction` 是攻城方营地清理路径的一个很小的公开包装器。它不会判定围城结果，不会选择某种围城原因，不会返回枚举，也没有另一个独立的“解除围城”计算。

它唯一的公开方法接收一个**正在围城的攻城方** [`MobileParty`](../../campaign/MobileParty/)，并沿着下面的引用链执行：

```text
side1Party
  -> side1Party.BesiegedSettlement
  -> settlement.SiegeEvent
  -> siegeEvent.BesiegerCamp
  -> RemoveAllSiegeParties()
```

源码等价于：

```csharp
private static void ApplyInternal(MobileParty side1Party, Settlement settlement)
{
    settlement.SiegeEvent.BesiegerCamp.RemoveAllSiegeParties();
}

public static void GetGameAction(MobileParty side1Party)
{
    ApplyInternal(side1Party, side1Party.BesiegedSettlement);
}
```

`GetGameAction` 这个名字容易误导：它返回 `void`，不是读取 game action 值。调用会立即改变战役地图上的围城状态。

## 公开 API

### `GetGameAction`

```csharp
public static void GetGameAction(MobileParty side1Party)
```

`side1Party` 只用于定位围城。它必须是当前攻城方营地中的一支 [`MobileParty`](../../campaign/MobileParty/)。`MobileParty.BesiegedSettlement` 是通过该 party 的 `BesiegerCamp` 反向得到的，因此传入的 party 必须仍在参与围城。

该方法没有返回值、没有 reason 参数、没有 settlement 参数、没有结果对象，也不涉及 [`SiegeAction`](../SiegeAction/) 枚举。

## 哪些攻城方会受影响？

传入的 party 不是唯一会被移除的对象。动作会找到该据点的 [`SiegeEvent`](../SiegeEvent/) 和 [`BesiegerCamp`](../BesiegerCamp/)，然后调用 `RemoveAllSiegeParties()`。该方法反复把营地内部攻城方列表中每一支 party 的 `BesiegerCamp` 清为 `null`。

因此它会影响：

- 攻城营地的 leader party。
- 已加入同一个攻城营地的其他移动 party。
- 由 `MobileParty.BesiegerCamp` setter 传播处理的 attached parties。
- 如果主 party 属于该攻城方，则影响玩家围城状态和相关界面。

它不会只移除 `side1Party`，也不会移除守军、驻军 party，或另一座据点围城中的攻城方。传入 party 只是用于定位它当前的一个 `BesiegedSettlement`。

当最后一支登记的攻城方被解除关联时，`BesiegerCamp.RemoveSiegePartyInternal` 会调用 `SiegeEvent.FinalizeSiegeEvent()`。最终处理会广播围城结束事件，结束两侧状态，清空 `Settlement.SiegeEvent`，在条件允许时结束 map event，并完成玩家围城/菜单清理。此时 `SiegeEvent.ReadyToBeRemoved` 变为 `true`，`SiegeEventManager` 会在下一次 tick 中将它从集合移除。

## 必须满足的生命周期

正常的对象关系是：

```text
Settlement.SiegeEvent
        ^
        | BesiegedSettlement
SiegeEvent <-> BesiegerCamp <-> MobileParty.BesiegerCamp
```

正常围城由 `SiegeEventManager.StartSiegeEvent(settlement, besiegerParty)` 创建。`SiegeEvent` 构造函数会写入 `settlement.SiegeEvent`，创建 `BesiegerCamp`，并把营地赋给第一支攻城 party。后续攻城方通过战役 encounter 流程加入同一个 `BesiegerCamp`。

只有在以下不变量仍然成立时才调用 `GetGameAction`：

1. `side1Party` 仍然有效，并且是攻城方 party。
2. `side1Party.BesiegedSettlement` 非 `null`。
3. 该据点的 `Settlement.SiegeEvent` 仍然非 `null`。
4. 当前没有尚未结束的 siege-assault `MapEvent` 正在拆除围城方。

该方法不会创建缺失的 `SiegeEvent`，不会修复已经没有营地的 party，也不会为内部引用链提供完整的空值保护。因此传入已经离开围城或不是攻城方的 party，可能导致 `NullReferenceException`。

## 如何取得输入 party

如果是玩家正在进攻，通常直接从主 party 获取：

```csharp
MobileParty besieger = MobileParty.MainParty;
if (besieger.BesiegedSettlement != null)
{
    LiftSiegeAction.GetGameAction(besieger);
}
```

如果从据点观察一场现存围城，应在真正调用前取得当前营地 leader：

```csharp
Settlement settlement = MobileParty.MainParty.BesiegedSettlement;
SiegeEvent siegeEvent = settlement.SiegeEvent;
MobileParty besieger = siegeEvent?.BesiegerCamp?.LeaderParty;

if (besieger != null && besieger.BesiegedSettlement == settlement)
{
    LiftSiegeAction.GetGameAction(besieger);
}
```

如果 leader 正在切换，可以从 `BesiegerCamp.GetInvolvedPartiesForEventType()` 取得当前参与的 `PartyBase`，再使用它的 `PartyBase.MobileParty`。这个值应在调用前重新解析；不要跨越战斗、占领、party 销毁或读档保存长期缓存。

1.4.5 源码中没有 vanilla 对 `LiftSiegeAction.GetGameAction` 的调用。引擎的真实直接调用点使用的是同一条底层清理方法：`KingdomManager` 的据点占领流程、`MapEvent` 的战斗结果处理，以及 `BesiegerCamp` 自身的拆营流程。mod 调用 `GetGameAction` 时，是通过公开动作包装器使用这条既有清理路径。

## 何时使用

当 mod 需要让攻城方放弃一场仍处于战役状态的围城，并希望正常执行事件、营地、据点、玩家围城、map event 和保存状态清理时，使用此动作。

典型场景包括：

- 自定义围城任务取消后，先结束围城再改变据点。
- 任务、外交结果或脚本条件要求 AI/玩家攻城方撤退。
- 移除、转移据点所有权或进行其他重大据点修改前，先结束围城。

## 何时不要使用

不要用它来：

- 选择或记录 `SiegeStrategyActionModel.SiegeAction` 值。那个枚举描述每一侧的造器械/部署等围城策略操作，与这个静态动作无关。
- 只移除一支攻城 party，同时保持围城继续。应通过合适的 party/encounter 流程改变该 party 的参战关系。
- 在 assault 或 sally-out 的 `MapEvent` 仍在运行时结束战斗。底层方法会在未结束的 siege-assault map event 存在时触发 failed assertion。
- 把守军、驻军、据点 party，或已经离开围城的 party 传入。
- 手动设置 `Settlement.SiegeEvent = null`，或直接把 `SiegeEvent.FinalizeSiegeEvent()` 当作快捷方式。这些做法会绕过 party/camp 的正确顺序，留下不一致状态。

## 依赖与副作用

该动作依赖：

- [`MobileParty`](../../campaign/MobileParty/)：提供 `BesiegedSettlement` 反向查找和 `BesiegerCamp` 关联。
- [`Settlement`](../../campaign/Settlement/)：提供当前 `SiegeEvent` 引用。
- [`SiegeEvent`](../SiegeEvent/)：维护单场围城的生命周期。
- [`BesiegerCamp`](../BesiegerCamp/)：维护登记的攻城方列表和移除循环。
- [`SiegeEventManager`](../SiegeEventManager/)：保存活动围城集合，并在下一次 tick 移除已结束事件。
- party、AI、map event、玩家围城和战役事件系统：由 party 移除/最终处理继续触发。

移除 party 可能使其进入 disorganized 状态、切换为 hold 移动模式、刷新玩家菜单/时间控制，停用海上封锁，结束玩家围城状态并广播战役事件。应把这个调用视为世界状态转换，而不是无副作用的查询。

## 崩溃与存档风险

- **空引用链：** 动作路径会直接解引用 `side1Party.BesiegedSettlement`、`settlement.SiegeEvent` 和 `SiegeEvent.BesiegerCamp`。调用前必须重新确认当前围城仍然有效。
- **正在进行的 assault：** `RemoveAllSiegeParties()` 会检查 `settlement.Party.MapEvent`。未结束的 siege-assault map event 存在时，提前清 party 会触发 failed assertion。
- **悬空引用：** 最后一支 party 离开后，`Settlement.SiegeEvent` 会在最终处理中清空。之后应重新读取 `settlement.SiegeEvent`，不要继续使用缓存的 `SiegeEvent`、`BesiegerCamp` 或 leader。
- **顺序错误：** 如果 camp 仍存在时就改所有权、销毁/移除据点，或直接编辑围城状态，保存对象图可能保留失效引用。应先解除围城，等待正常最终处理边界，再修改据点。
- **地图和菜单变化：** 最终处理可能结束符合条件的 map event 并切换玩家菜单。不要假设调用后当前菜单、encounter 或战役时间控制仍完全不变。

## 版本说明

本文位于 `v1.3.15` 文档树。用于核对的 1.4.5 权威源码与 1.3.15 源码副本具有相同的实现和签名：一个私有 `ApplyInternal` 辅助方法，以及一个公开的 `void GetGameAction(MobileParty)` 包装器。以上内容描述的是这段实际实现，而不是根据类名推测出的通用含义。

## 互相导航

- [`SiegeEvent`](../SiegeEvent/)：活动围城生命周期和最终处理边界。
- [`BesiegerCamp`](../BesiegerCamp/)：攻城方列表和移除操作。
- [`MobileParty`](../../campaign/MobileParty/)：`BesiegedSettlement` 与 `BesiegerCamp` 的来源。
- [`Settlement`](../../campaign/Settlement/)：`SiegeEvent` 与 `IsUnderSiege` 的来源。
- [`SiegeEventManager`](../SiegeEventManager/)：创建、tick、保存和移除围城事件。
- [`SiegeAction`](../SiegeAction/)：无关的策略枚举，不要与本动作混淆。
- [战役动作索引](../actions-index/)
