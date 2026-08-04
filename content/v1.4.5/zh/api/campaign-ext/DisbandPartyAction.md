---
title: "DisbandPartyAction"
description: "用 Campaign 的解散事件和等待流程启动或取消真实 MobileParty 的解散，而不是直接删除地图队伍。"
---
# DisbandPartyAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class DisbandPartyAction`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/DisbandPartyAction.cs`  
**版本说明：** 本页以 v1.4.5 的 Campaign 行为与 Action 实现为准。

## 一句话职责

把“这支地图队伍应该开始解散”通知给 Campaign，并提供取消入口；真正何时变成 `IsDisbanding`、移交部队或最终销毁，由事件监听的 Behavior 和后续 [DestroyPartyAction](../DestroyPartyAction) 流程完成。

## 心智模型

`DisbandPartyAction` 是一个**解散流程入口**，不是 `MobileParty` 的删除器。`StartDisband` 先处理几个必须立即结束的分支：已经在解散的队伍直接返回，成员为空时直接调用普通销毁 Action，正在等待解散的队伍不重复排队。其余情况下，它协调军团关系、设置临时队名，然后派发 `OnPartyDisbandStartedEvent`。

解散事件交给 [DisbandPartyCampaignBehavior](../../campaign/DisbandPartyCampaignBehavior) 后，Behavior 才会按队伍类型选择替补队长、等待一个 Campaign 时间、设置 `IsDisbanding`，并在合适的 settlement 中合并成员和俘虏。因而“调用成功”不等于“队伍已经从地图消失”。`CancelDisband` 只撤销仍由 Behavior 管理的等待状态；它派发取消事件、清除标记和临时名字，并让 AI 停在原地。

## 何时使用，何时不要使用

- 当你的系统已经判定一个真实、仍然 active 的 `MobileParty` 需要按原版解散规则收束时，调用 `StartDisband`。
- 当 owner 流程明确要撤回一项尚未完成的解散请求时，调用 `CancelDisband`；不要把它当作“恢复已销毁 party”的方法。
- 成员为空时不要期待 `OnPartyDisbandStartedEvent` 或延迟合并；源码直接走 `DestroyPartyAction.Apply(null, disbandParty)`。
- 不要通过设置 `IsDisbanding`、改队名、从 `MobileParty.All` 移除对象或清空 roster 来模拟解散。那些写法跳过事件、等待表、军团关系、settlement 合并、俘虏处理和最终 party 清理。

## 依赖与生命周期级联

```text
拥有解散决定的 Campaign Behavior
  -> DisbandPartyAction.StartDisband(MobileParty)
      -> CampaignEvents.OnPartyDisbandStartedEvent
          -> DisbandPartyCampaignBehavior 的等待/替补/合并逻辑
              -> DestroyPartyAction 或 settlement/garrison 合并
```

- [MobileParty](../../campaign/MobileParty) 提供成员 roster、army、当前 settlement、`IsDisbanding` 和 active 生命周期；Action 不替调用方判断 party 是否应该消失。
- [CampaignEvents](../../campaign/CampaignEvents) 的 `OnPartyDisbandStartedEvent` 和 `OnPartyDisbandCanceledEvent` 是 mod 应观察的公共事件；直接调用 [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) 会绕过通常的订阅边界。
- [DestroyPartyAction](../DestroyPartyAction) 负责最终地图 party 移除；[LeaveSettlementAction](../LeaveSettlementAction) 负责解散时先离开 settlement 的另一层生命周期。
- Behavior 可能调用 [TransferPrisonerAction](../TransferPrisonerAction) 和 [SellPrisonersAction](../SellPrisonersAction) 处理 disband party 的俘虏，不能在等待期间自行清空 `PrisonRoster`。

## 两个公开入口

### `StartDisband`

```csharp
public static void StartDisband(MobileParty disbandParty)
```

源码的顺序决定了几个可观察边界：

1. `IsDisbanding` 已为 `true` 时直接返回；这使重复通知无效，而不是重新派发事件。
2. `MemberRoster.TotalManCount == 0` 时直接调用 `DestroyPartyAction.Apply(null, disbandParty)` 并返回。这里的 `null` 是“没有 destroyer party”的真实系统分支。
3. 如果 `DisbandPartyCampaignBehavior` 报告该 party 已在等待解散，方法也返回。
4. 军团领队交给 `DisbandArmyAction.ApplyByUnknownReason`；军团中的非领队只解除 `Army` 关系。Action 不会替调用方完成整支 army 的游戏设计。
5. 普通路径按实际 clan 名称或 `CampaignData.NeutralFactionName` 设置临时队名，再通过 `CampaignEventDispatcher` 派发 `OnPartyDisbandStarted`。

`StartDisband` 本身没有把 `IsDisbanding` 直接写成 `true`。默认 Behavior 收到事件后会先把 party 加入等待表，之后在 hourly tick 中设置该属性；这也是为什么 mod 不应把属性变化当作 Action 的同步返回值。

### `CancelDisband`

```csharp
public static void CancelDisband(MobileParty disbandParty)
```

它按顺序派发 `OnPartyDisbandCanceled`，把 `IsDisbanding` 清为 `false`，用空 `TextObject` 清除自定义队名，然后调用 `SetMoveModeHold()`。取消事件会让 `DisbandPartyCampaignBehavior` 从自己的等待表移除该队伍；如果队伍已经被销毁，传入旧引用不会把它复活。

## 真实的当前 Campaign 示例

下面的对象来自当前 Campaign 的已注册 party 集合。示例只对仍有成员的非主队伍发起解散，因此不会意外走“空 roster 立即销毁”分支；具体玩法资格仍应由拥有该 party 的 Behavior 决定。

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

MobileParty party = null;
if (Campaign.Current != null)
{
    party = MobileParty.All.FirstOrDefault(candidate =>
        candidate != MobileParty.MainParty &&
        candidate.IsActive &&
        candidate.MemberRoster.TotalManCount > 0 &&
        !candidate.IsDisbanding);
}

if (party != null)
{
    DisbandPartyAction.StartDisband(party);
}
```

调用后应通过 `CampaignEvents.OnPartyDisbandStartedEvent` 或自己的 owner 状态观察流程，而不是立刻假设 `party.IsDisbanding` 已变化。若 owner 决定撤回仍在等待的请求，可以再次用同一个已验证的 party 调用 `CancelDisband`。

## 存档与崩溃边界

- `MobileParty.IsDisbanding`、队名、army 关系、roster 和等待时间共同描述流程。只保存一个布尔值或在 `SyncData` 中自行恢复它，会与 `DisbandPartyCampaignBehavior` 的等待表不一致。
- `StartDisband` 的非空路径依赖 `Campaign.Current`、`CampaignEventDispatcher` 和默认行为已经初始化；不要在 Campaign 建立前、读档尚未完成或模块卸载阶段调用。
- 事件监听器收到的 party 仍可能参加 MapEvent、army 或 settlement visit。监听器必须把它视为正在收束的对象，不要在回调里再次创建 army、加入新 roster 或把它当作普通可移动 party。
- 最终销毁之后由 [DestroyPartyAction](../DestroyPartyAction) 和 `MobileParty.RemoveParty()` 处理地图 locator、英雄俘虏、船只和 Campaign 集合；直接从列表删除会留下读档后仍被引用的对象。

## 导航

- **↑ Parent：** [Campaign extension API](../) · [Campaign system](../../campaign/)
- **↔ Siblings：** [LeaveSettlementAction](../LeaveSettlementAction) · [DestroyPartyAction](../DestroyPartyAction) · [TakePrisonerAction](../TakePrisonerAction)
- **Related：** [MobileParty](../../campaign/MobileParty) · [PartyBase](../../campaign/PartyBase) · [CampaignEvents](../../campaign/CampaignEvents) · [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) · [DisbandPartyCampaignBehavior](../../campaign/DisbandPartyCampaignBehavior) · [TransferPrisonerAction](../TransferPrisonerAction)
