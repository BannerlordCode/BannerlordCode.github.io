---
title: "ChangeGovernorAction"
description: "委任或解除城镇总督时同步驻地、忙碌状态、双向引用与总督变更事件的战役状态转换。"
---
# ChangeGovernorAction

**命名空间:** TaleWorlds.CampaignSystem.Actions
**模块:** TaleWorlds.CampaignSystem
**类型:** `public static class ChangeGovernorAction`
**源文件:** `TaleWorlds.CampaignSystem/Actions/ChangeGovernorAction.cs`

## 职责

通过一个同时协调 `Town.Governor`、`Hero.GovernorOf`、Hero 移动与总督生命周期事件的战役 Action，变更 [Town](.././Town) 的总督。

## 心智模型

总督委任不是简单属性赋值，因为总督必须与城镇绑定，并以正确的战役路径到达那里。`Apply(town, governor)` 先记住旧总督。传入 `null` 会解除该 Town 的总督。对于已经在目标 Settlement 且不是囚犯的 Hero，它设定 Town 总督并立即传送 Hero；其他非空 Hero 则先清空 Town 总督，再安排“作为总督”的延迟传送。之后它清掉旧总督的 `GovernorOf`，派发 `OnGovernorChanged`，并用 `BecomeGovernor` 把新的非空 Hero 标为忙碌。

仅在确定 `hero.GovernorOf` 非空时使用 `RemoveGovernorOf(hero)`；它会立刻解引用那个 Town。若要清理一个可能无总督的 Town，则用 `RemoveGovernorOfIfExists(town)`。原版城镇管理 UI 在取消选择时用后者；领地易主和移除 Hero 的流程则在先确认 Hero 是总督后使用前者。

## 依赖与执行顺序

| 角色 | 关联 | 原因 |
|---|---|---|
| 城镇状态 | [Town](.././Town) | `Governor` 是 Settlement 一侧的引用。 |
| Hero 状态 | [Hero](../../campaign/Hero) | `GovernorOf`、囚犯状态、当前位置与忙碌状态共同决定转换。 |
| 移动实现 | [TeleportHeroAction](.././TeleportHeroAction) | 仅当非囚犯已在目标驻地时立即传送；其他非空委任都进入延迟传送。 |
| 事件消费者 | [CampaignEventReceiver](.././CampaignEventReceiver) | 引用清理/设置后派发 `OnGovernorChanged`；对新总督紧接着派发 `OnHeroGetsBusy`。 |
| 易主流程 | [ChangeOwnerOfSettlementAction](.././ChangeOwnerOfSettlementAction) | 领地易主常是清除或替换总督的下游原因。 |

事件时序很重要：接收者看到的是旧总督已解除、而新总督已设置或已被安排总督旅行后的状态。若走延迟分支，接收者不能推断 Hero 已物理到达 Settlement。

## 成员与调用时机

`Apply` 是在已知 Town 和候选人后进行委任/解除的入口。必须在战役线程调用，不能在 Town 或 Hero 正被销毁时调用。`RemoveGovernorOf` 是面向“已知总督”的严格辅助方法。`RemoveGovernorOfIfExists` 是防御性的 Town 侧清理方法，适合菜单取消选择，或 Town 可能已经无总督的清理阶段。

## 风险边界

不要分别编辑 `Town.Governor` 与 `Hero.GovernorOf`。单边编辑会留下过期链接，随后生命周期代码会解引用它；Action 在解除时显式清理两边。不要只清 Hero 属性来替换总督，也不要在未检查 `GovernorOf` 前调用 `RemoveGovernorOf`，因为内部方法假定该引用存在。

不要把延迟分支当成立即委任。囚犯或不在目标地的 Hero 在该分支不会被写入 `Town.Governor`；需要等待传送流程完成。事件处理器也不应在 `OnGovernorChanged` 内同步安排另一位总督，因为原候选人紧接着还会收到忙碌事件。

## 真实获取路径示例

主角当前所在的 Settlement 同时提供真实 Hero 与城镇获取路径。仅当驻地实际拥有 Town 且主角不是囚犯时才委任。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Settlements;

Settlement currentSettlement = Hero.MainHero.CurrentSettlement;
if (Campaign.Current != null && currentSettlement?.Town != null && !Hero.MainHero.IsPrisoner)
{
    ChangeGovernorAction.Apply(currentSettlement.Town, Hero.MainHero);
}
```

## 导航

- ↑ [战役扩展 API](../)
- ↔ [ChangeClanInfluenceAction](.././ChangeClanInfluenceAction) · [ChangeClanLeaderAction](.././ChangeClanLeaderAction)
- 相关：[Town](.././Town) · [Hero](../../campaign/Hero) · [TeleportHeroAction](.././TeleportHeroAction) · [ChangeOwnerOfSettlementAction](.././ChangeOwnerOfSettlementAction)
