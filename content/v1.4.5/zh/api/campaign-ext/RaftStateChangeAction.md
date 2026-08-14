---
title: "RaftStateChangeAction"
description: "切换移动队伍木筏状态的战役动作：同步处理军团脱离、AI、俘虏、靠岸移动与木筏状态事件。"
---
# RaftStateChangeAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class RaftStateChangeAction`（只提供静态入口）  
**Base:** `System.Object`  
**Source:** `TaleWorlds.CampaignSystem/Actions/RaftStateChangeAction.cs`

## 概述

`RaftStateChangeAction` 把没有船只的移动队伍切入或切出木筏状态。它处理的不是一个布尔显示开关：激活会让队伍脱离军团、移动到最近陆地、关闭 AI、释放英雄俘虏并清空俘虏名册；停用会重新启用 AI、重算短期行为并安排下一次 AI 更新。两条路径最后都派发移动队伍木筏状态变化事件。

## 心智模型

木筏状态是海战失败到重新靠岸之间的过渡生命周期。官方上游在海上遭遇结算时发现队伍已经没有船只后激活它；`MobileParty.FinishNavigationTransitionInternal` 完成导航面切换时再停用。虽然 `MobileParty.IsInRaftState` 有公开 setter，但 setter 只更新保存字段、重置锚点并标记队伍视觉为脏，不会执行 Action 的军团、AI、俘虏和事件级联。

因此，模组需要完整的木筏过渡时应调用本 Action；只写 `IsInRaftState` 会制造“存档里是木筏、运行时 AI 和俘虏仍是旧状态”的分裂状态。这个类可实例化但没有实例职责，不应创建或保存其实例。

## 实际入口与 `ApplyInternal` 契约

```csharp
public static void ActivateRaftStateForParty(MobileParty mobileParty)
public static void DeactivateRaftStateForParty(MobileParty mobileParty)
```

两个公开方法只把 `true` 或 `false` 传给私有同步入口 `ApplyInternal(MobileParty, bool)`。入口不检查 null、不检查当前值，也不验证调用阶段；重复激活或停用仍会执行相应级联并派发事件。调用者必须先确认队伍存在、遭遇或导航转换已经进入可修改阶段，并根据 `IsInRaftState` 去重。

## 谁调用、何时调用

- `PlayerEncounter` 在海战结果处理中发现主队没有船只时，先清理 `MapEventSide` 并结束遭遇，再对 `MobileParty.MainParty` 激活木筏状态。
- 同一结算循环会对失去全部船只、没有海上导航能力但仍有陆地导航能力的其他移动队伍激活木筏状态。
- `MobileParty.FinishNavigationTransitionInternal` 在导航转换完成、位置和锚点已经更新后检查 `IsInRaftState`，并调用停用入口恢复常规 AI。

这三个调用点都位于核心 `TaleWorlds.CampaignSystem`，不是 `Modules/SandBox` 的 UI 辅助逻辑。模组不应在 Mission tick、海战仍处于活动 `MapEvent` 时，或任意每日 tick 中照搬调用。

## 状态变更与事件级联

**设为木筏状态后的级联：**

1. 设置 `mobileParty.IsInRaftState = true`；该 setter 重置锚点并刷新地图视觉。
2. 若队伍属于军团，直接把 `Army` 设为 null。
3. `MovePartyToTheClosestLand()` 建立漂向最近陆地的移动目标，然后 `mobileParty.Ai.DisableAi()` 停止常规 AI 决策。
4. 对俘虏名册中的每个英雄调用 `EndCaptivityAction.ApplyByEscape`，随后清空全部俘虏，包括普通兵种。
5. 通过 `CampaignEventDispatcher.OnMobilePartyRaftStateChanged` 同步通知 `CampaignEvents.OnMobilePartyRaftStateChangedEvent` 监听者。

**清除木筏状态后的级联：**

1. 设置 `IsInRaftState = false`，并且无论当前军团状态如何都保持 `Army = null`。
2. 重新启用 AI，调用 `RecalculateShortTermBehavior()`，再把 `DefaultBehaviorNeedsUpdate` 与 `RethinkAtNextHourlyTick` 设为 true。
3. 派发同一个木筏状态变化事件；监听者需要读取 `mobileParty.IsInRaftState` 判断方向。

## 关键成员、副作用与调用时机

| 成员 | 典型时机 | 副作用边界 |
| --- | --- | --- |
| `ActivateRaftStateForParty` | 海上遭遇完成、队伍失去全部船只且即将漂向陆地之后 | 脱离军团、改移动目标、禁用 AI、释放英雄俘虏、清空全部俘虏并派发事件 |
| `DeactivateRaftStateForParty` | 木筏队伍完成靠岸或导航面转换之后 | 恢复 AI 和短期行为调度并派发事件；不会恢复先前军团或俘虏 |
| `ApplyInternal` | 只由两个公开包装器同步进入 | 无幂等和阶段检查，决定所有不可逆级联，模组不可直接访问 |

## 真实获取路径示例

这个例子使用官方调用链中的 `MobileParty.MainParty`，并把调用限制在遭遇已经结束、主队失去船只且具备陆地导航能力的情形。实际模组应从自己的遭遇完成回调调用它，而不是持续轮询。

```csharp
public static void EnterRaftStateAfterNavalEncounter()
{
    if (Campaign.Current == null)
    {
        return;
    }

    MobileParty party = MobileParty.MainParty;
    if (party == null || party.MapEvent != null || party.IsInRaftState)
    {
        return;
    }

    if (party.Ships.Count == 0 &&
        !party.HasNavalNavigationCapability &&
        party.HasLandNavigationCapability)
    {
        RaftStateChangeAction.ActivateRaftStateForParty(party);
    }
}
```

## 生命周期、存档与坏档风险

- `_isInRaftState` 是 `MobileParty` 的 `[SaveableField(1026)]`。错误激活后保存会永久保留过渡状态；仅在加载后把布尔值改回去又不会恢复被清空的俘虏、军团关系或旧 AI 目标。
- 激活会清空整个俘虏名册，英雄俘虏还会先触发逃脱 Action。把它当作“临时禁用船只图标”的开关会造成不可逆战役变化。
- 对仍在军团、围城、活动 `MapEvent` 或队伍集合枚举中的对象调用，可能让上游流程继续持有已经脱离军团或被改目标的队伍，产生顺序错误和坏档状态。
- 入口不做重复调用保护。重复激活会再次移动、禁用 AI 并发事件；重复停用会反复重算 AI。调用前检查当前值，并保证每次过渡只有一个所有者。
- 不要在 `SyncData`、加载早期或战役退出阶段调用。Action 需要可用的 `CampaignEventDispatcher`、`MobileParty.Ai`、`Party`、导航图和俘虏名册。

## 版本注记

v1.3.15 与 v1.4.5 保持相同的两个公开入口和同一状态级联。1.4.5 的反编译源码主要省略了若干默认参数，并未增加调用阶段校验；跨版本代码不能把这种签名稳定误解为可以在任意生命周期调用。

## 依赖关系与导航

- 上游：[MapEvent](../../campaign/MapEvent/) 与玩家遭遇结算决定何时失去船只；[MobileParty](../../campaign/MobileParty/) 的导航转换负责停用。
- 下游：[EndCaptivityAction](../EndCaptivityAction/) 处理英雄俘虏逃脱，[CampaignEvents](../CampaignEvents/) 暴露木筏状态变化通知；[Army](../Army/) 和队伍 AI 是同步修改对象。
- 存档边界：[SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) 注册 `MobileParty` 的可保存状态；木筏标志会跨读档保留，但事件和清理关系不会自动重放。
- Parent（父级）：[campaign-ext API](../)
- Sibling（同级）：[EndCaptivityAction](../EndCaptivityAction/) · [CampaignEvents](../CampaignEvents/)
- Children（子项）：无独立子页；两个公开入口的级联已在本页成员章节说明
- Related（相关）：[MobileParty](../../campaign/MobileParty/) · [MapEvent](../../campaign/MapEvent/) · [PartyBase](../../campaign/PartyBase/)
