---
title: "DestroyPartyAction"
description: "通过受控的 Campaign 生命周期销毁一个真实 MobileParty，派发销毁事件并完成 roster、俘虏、地图交互点和追踪清理。"
---
# DestroyPartyAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class DestroyPartyAction`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/DestroyPartyAction.cs`  
**版本说明：** 本页描述随 v1.4.5 发布的实现。

## 一句话职责

把一支已经由上层流程判定为应当消失的真实 `MobileParty` 从 Campaign 中销毁，先派发销毁/地图交互事件，再调用 party 自己的终结清理；它还负责把 roster、俘虏、船只、地图追踪和 Campaign 集合中的生命周期一起收束，避免留下不可见但仍被系统引用的 party。

## 心智模型

`DestroyPartyAction` 是**地图 party 生命周期的终点**，不是“把 `IsActive` 改成 false”的快捷方法。队伍可能正参与 `MapEvent`、army、siege、settlement visit、disband 或任务；决定它何时消失、先结束哪一层状态，是 [DisbandPartyAction](../DisbandPartyAction)、战斗结算、任务或其他 owner 流程的责任。

v1.4.5 没有 public `DestroyPartyActionDetail` 或原因枚举，只有两个公开入口：`Apply(PartyBase, MobileParty)` 用于普通销毁，`ApplyForDisbanding(MobileParty, Settlement)` 用于已经进入解散流程的 party。两者都最终进入同一个内部清理路径；区别在于解散入口会先离开 settlement 并发布 disband 事件。

`MobileParty.MainParty` 受保护，不会被普通 `Apply` 销毁。对其他 party，Action 期望它在调用时仍为 active；对 inactive party，v1.4.5 走 failed assertion，而不是替调用者恢复状态或安全返回。

## 依赖与生命周期级联

```text
当前 Campaign owner / battle / disband flow
  -> 真实 MobileParty（已完成上层结束条件）
      -> DestroyPartyAction.Apply(destroyerParty, destroyedParty)
          -> CampaignEventDispatcher.OnMobilePartyDestroyed
              -> CampaignEvents.MobilePartyDestroyed
          -> CampaignEventDispatcher.OnMapInteractableDestroyed
              -> CampaignEvents.MapInteractableDestroyed
          -> MobileParty.RemoveParty()
              -> roster/items/prisoners/ships/tracking cleanup
              -> Campaign party collection removal
```

- [MobileParty](../../campaign/MobileParty) 持有 party 的地图位置、roster、prisoners、army/map-event 关系和生命周期；[PartyBase](../../campaign/PartyBase) 是销毁事件的 destroyer 参数和地图交互点身份。
- `ApplyForDisbanding` 额外调用 [LeaveSettlementAction](../LeaveSettlementAction)，再派发 `CampaignEvents.OnPartyDisbandedEvent`，最后复用普通销毁链。
- [CampaignEvents](../../campaign/CampaignEvents) 的 `MobilePartyDestroyed`、`MapInteractableDestroyed` 和 `OnPartyDisbandedEvent` 监听器会在各自状态边界观察到对象；监听器不能在 party 已被移除后继续使用它作为可活动 party。
- [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) 只负责把这些回调转发给 behavior；它不会替 owner 结束 `MapEvent`、army 或 siege。

## 两个公开入口

```csharp
public static void Apply(PartyBase destroyerParty, MobileParty destroyedParty)

public static void ApplyForDisbanding(
    MobileParty disbandedParty,
    Settlement relatedSettlement)
```

### `Apply`

普通入口先检查目标是否为 `MobileParty.MainParty`。如果是，整个内部路径不执行。否则它要求目标仍 active；若目标是 caravan 且 owner 拥有 Insurance Plans perk，销毁前先通过 `GiveGoldAction` 发放保险金额。然后按事件顺序发布 `MobilePartyDestroyed`、`MapInteractableDestroyed`，最后调用 `RemoveParty`。

`destroyerParty` 可以为 `null`，例如来自没有攻击方的系统清理；它仍必须是调用方对销毁原因的真实描述，而不是用一个假的 `PartyBase` 代替。

当前 Campaign 的 owner 可以把它持有的真实目标传给普通入口：

```csharp
public static void DestroyPartyAfterOwnerResolved(
    MobileParty destroyedParty)
{
    if (Campaign.Current == null || destroyedParty == null ||
        destroyedParty == MobileParty.MainParty || !destroyedParty.IsActive)
    {
        return;
    }

    PartyBase destroyer = PartyBase.MainParty;
    if (destroyer == null)
    {
        return;
    }

    DestroyPartyAction.Apply(destroyer, destroyedParty);
}
```

### `ApplyForDisbanding`

解散入口不接受 destroyer。若 party 当前在 settlement，先调用 [LeaveSettlementAction](../LeaveSettlementAction)。接着派发 `CampaignEvents.OnPartyDisbandedEvent`，把调用方提供的 `relatedSettlement` 交给监听器，再以 `null` destroyer 调用同一内部销毁路径。

不要把 `ApplyForDisbanding` 当成普通“删除 party”入口：它表达的是 disband owner 已经做出解散决定，并且需要让 settlement 离开和 disband 监听器先看到这条语义。

当 owner 确实拥有与 party 的 settlement 关系时，应先从当前 Campaign 状态解析 `Settlement`，再进入这个入口：

```csharp
public static void DestroyDisbandingPartyAtOwnerSettlement(
    MobileParty disbandedParty)
{
    if (Campaign.Current == null || disbandedParty == null ||
        disbandedParty == MobileParty.MainParty || !disbandedParty.IsActive ||
        !disbandedParty.IsDisbanding)
    {
        return;
    }

    Settlement relatedSettlement =
        MobilePartyHelper.GetCurrentSettlementOfMobilePartyForAICalculation(
            disbandedParty);
    if (relatedSettlement == null)
    {
        return;
    }

    DestroyPartyAction.ApplyForDisbanding(disbandedParty, relatedSettlement);
}
```

## 调用方前置条件

两个入口都返回 `void`，没有可供 mod 读取的成功结果。调用前，拥有 party 生命周期的流程应确认：

1. `Campaign.Current`、目标 party 和事件分发器已经初始化；目标不是旧存档对象、已经被移除的引用或正在销毁的主 party。
2. 对普通 `Apply`，目标是 active、非 `MobileParty.MainParty` 的真实 party；对 `ApplyForDisbanding`，目标确实处于 owner 管理的 disband 流程，并且 `relatedSettlement` 与该流程对应。`IsDisbanding` 本身不能决定入口；应看 owner 流程，以及是否存在需要发布的 related settlement/disband 语义。
3. 目标不再被 `MapEvent`、army、siege、任务或 encounter 作为仍需处理的活动对象引用。先使用相应的战斗结算、army dispersion、[DisbandPartyAction](../DisbandPartyAction) 或任务清理路径。
4. 调用方已经决定如何处理 roster、hero prisoners、ships、caravan 保险和任务状态。Action 会执行系统清理，但不替调用方判断玩法是否合法。
5. 调用完成后把目标引用视为终结对象，不再把它加入 army、移动、存档或重新注册地图追踪。

## 正常销毁的状态顺序

v1.4.5 `ApplyInternal` 的顺序是可观察契约：

1. 如果目标是 `MobileParty.MainParty`，直接不做任何销毁动作。
2. 如果目标 inactive，打印诊断并触发 failed assertion；这不是可依赖的恢复分支。
3. 若目标是有 Insurance Plans 的 caravan，先给其 owner 发放 perk 规定的保险金币。
4. 派发 `CampaignEventDispatcher.Instance.OnMobilePartyDestroyed(destroyedParty, destroyerParty)`。
5. 派发 `OnMapInteractableDestroyed(destroyedParty.Party)`，让地图交互点监听器先处理 party 的消失。
6. 调用 `destroyedParty.RemoveParty()`，进入 roster、物品、prisoner、ship、locator、tracking 和 Campaign collection 的实际清理。

这意味着 `MobilePartyDestroyed` 监听器收到的是仍可读的 party 引用，但不能把事件当作“可以再次销毁”的信号；`RemoveParty` 之后该引用已不再是可活动 Campaign party。

## 解散入口的状态顺序

`ApplyForDisbanding` 在普通销毁前增加三层语义：

1. 如果 `disbandedParty.CurrentSettlement` 不为空，先用 `LeaveSettlementAction.ApplyForParty` 离开 settlement。
2. 调用 `CampaignEventDispatcher.Instance.OnPartyDisbanded(disbandedParty, relatedSettlement)`，对应公共的 `CampaignEvents.OnPartyDisbandedEvent`。
3. 调用内部销毁路径，销毁事件的 destroyer 为 `null`，并继续执行普通的保险、销毁事件与 `RemoveParty` 顺序。

所以需要让行为响应“party 被解散”的 mod 应监听 `OnPartyDisbandedEvent`；需要响应任何 party 从地图上消失的 mod 才监听 `MobilePartyDestroyed`。两者不是同一个事件，也不能用移除列表来替代。

## 安全的当前 Campaign 示例

下面两个 helper 都接收当前 Campaign owner 流程取得的真实对象，不随机挑选或新建地图 party。入口选择取决于 owner 的生命周期语义，不能只看 `IsDisbanding`。

### owner 完成普通销毁结算后

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public static void DestroyPartyAfterOwnerResolved(
    MobileParty destroyedParty)
{
    if (Campaign.Current == null || destroyedParty == null)
    {
        return;
    }

    PartyBase destroyer = PartyBase.MainParty;
    if (destroyer == null || destroyedParty == MobileParty.MainParty ||
        !destroyedParty.IsActive)
    {
        return;
    }

    DestroyPartyAction.Apply(destroyer, destroyedParty);
}
```

`destroyedParty` 应来自当前 owner 的真实结果，例如战斗结算传入的 depleted party，而不是由 mod 新建。原版 `DisbandPartyCampaignBehavior` 在 member roster 为空，或等待后仍没有 related settlement 时，也会调用普通的 `Apply(null, disbandParty)`。所以即使 `IsDisbanding` 为 true，也不能据此禁止 `Apply`；当 owner 已经完成普通销毁语义、没有要发布的解散/settlement 边界时，普通入口就是正确分支。

### 有真实 related settlement 的解散流程

当 owner 需要保留解散语义，并能从 Campaign 状态解析出真实 related settlement 时，使用解散入口：

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Settlements;

public static void DestroyDisbandingPartyAtOwnerSettlement(
    MobileParty disbandedParty)
{
    if (Campaign.Current == null || disbandedParty == null ||
        disbandedParty == MobileParty.MainParty || !disbandedParty.IsActive ||
        !disbandedParty.IsDisbanding)
    {
        return;
    }

    Settlement relatedSettlement =
        MobilePartyHelper.GetCurrentSettlementOfMobilePartyForAICalculation(
            disbandedParty);
    if (relatedSettlement == null)
    {
        return;
    }

    DestroyPartyAction.ApplyForDisbanding(disbandedParty, relatedSettlement);
}
```

`MobilePartyHelper.GetCurrentSettlementOfMobilePartyForAICalculation` 会返回 party 当前所在的 settlement；如果当前属性为空，也可能在 party 与上次访问的 settlement 足够接近时返回它。这正是 `DisbandPartyCampaignBehavior` 调用 `ApplyForDisbanding` 前使用的获取路径；若结果为 `null`，该行为会在完成自己的 disband 清理后走普通 `Apply` fallback。

## `RemoveParty` 的清理边界

`RemoveParty` 不是一个单纯的 collection remove。它会清空或处理 member/prisoner roster 与 party items，释放 hero prisoners，处理 ships，移除地图 locator/tracking，派发 party removed 相关回调，并把 party 从 Campaign 的 MobileParty 管理集合中移除。调用后，party 可能仍被已执行的事件参数引用，但它不再是可以移动或加入 army 的活动对象。

这也是为什么 [KillCharacterAction](../KillCharacterAction)、战斗结算、[DisbandPartyAction](../DisbandPartyAction) 等高层流程必须按自己的 owner 语义先做清理，再委托这个 Action。它们负责决定谁应消失、是否需要把 leader 变为 fugitive、如何结束 MapEvent 或处理 army；`DestroyPartyAction` 只负责最终 party 生命周期收束。

## 直接修改与存档风险

不要把 `MobileParty.IsActive` 设为 `false`，不要从 `MobileParty.All` 或 army 列表移除一个元素，也不要只清空 `MemberRoster`/`PrisonRoster` 来模拟销毁。这些写法会跳过 `MobilePartyDestroyed`、地图交互点销毁、hero prisoner 释放、ship/tracking 清理和 Campaign collection 同步，读档后可能出现不可见但仍被 army/map event 引用的 party。

不要在 party 仍参加 active `MapEvent`、siege 或 army tick 时直接调用，除非相应 owner 已经完成了该阶段的结算。不要在 `RemoveParty` 之后继续读取 leader、roster 或调用 AI 方法。若 behavior 保存了 party ID 或引用，监听销毁/解散事件后应清除自己的持久状态，并在新 Campaign 或读档阶段重新解析当前对象；不要把已终结对象写回存档。

## 导航

- **↑ Parent：** [Campaign extension API index](../) · [Campaign system](../../campaign/)
- **↔ Siblings：** [DisbandPartyAction](../DisbandPartyAction) · [LeaveSettlementAction](../LeaveSettlementAction) · [KillCharacterAction](../KillCharacterAction) · [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction)
- **Related：** [MobileParty](../../campaign/MobileParty) · [PartyBase](../../campaign/PartyBase) · [Settlement](../../campaign/Settlement) · [MapEvent](../../campaign/MapEvent) · [Army](../../campaign/Army) · [CampaignEvents](../../campaign/CampaignEvents) · [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher)
