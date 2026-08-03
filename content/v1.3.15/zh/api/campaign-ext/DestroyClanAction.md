---
title: "DestroyClanAction"
description: "通过官方的部队、英雄、领地、战争与事件级联，不可逆地注销一个战役氏族。"
---
# DestroyClanAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public static class DestroyClanAction`
**源码：** `TaleWorlds.CampaignSystem/Actions/DestroyClanAction.cs`

## 核心定位

将氏族作为战役势力注销，并按引擎预期顺序拆除其部队、在世成员、领地、外交关系和王国归属。

## 概述

氏族的消灭不是单个布尔标记，而是对战役对象图的不可逆收束：持有者的战团会被删除，在世成员进入角色移除流程，城镇与城堡会被交给继承氏族，战争关系和王国成员关系也必须一起清理。`DestroyClanAction` 将这些会相互修改集合的步骤放进固定顺序，并给 Behavior 留下统一的事件边界。

## 心智模型

这是一笔**灭亡事务**，不是移除一个领主的快捷方式。`Apply*` 先将氏族标记为已消灭，再对战团、在世英雄和据点建立快照逐一处理；原因是后续 Action 会修改这些集合。通常游戏流程中它不可逆：手中还留着 `Clan` 对象引用，不代表该对象仍可作为政治势力使用。

仅在整个氏族已到达战役终局时调用，例如内置的势力终止行为判定一个独立氏族无法继续存在时。不要用它遣散一支部队、流放一个英雄、移交一个领地，或让仍存活的氏族退出王国；这些操作各有更窄的官方入口。

## 级联与依赖

```text
Clan
  -> 每个 WarPartyComponent 走 DestroyPartyAction
  -> 在世氏族英雄走 KillCharacterAction
  -> 城镇和城堡走 ChangeOwnerOfSettlementAction
  -> 从战役战争关系中移除
  -> 属于 Kingdom 时走 ChangeKingdomAction
  -> 以 OnClanDestroyed 通知 Behavior 与 UI
```

| 方向 | 类型与作用 |
|---|---|
| 上游 | [`Clan`](../../campaign/Clan) 是目标；`WarPartyComponent` 提供每支地图部队；战斗中的 `MapEvent` 可能提供交给 `DestroyPartyAction` 的敌方 `PartyBase`。 |
| 下游 | [`DestroyPartyAction`](../DestroyPartyAction) 删除战团；[`KillCharacterAction`](../KillCharacterAction) 移除在世英雄；[`ChangeOwnerOfSettlementAction`](../ChangeOwnerOfSettlementAction) 将每座城镇/城堡交给继承氏族的一名成年领主。 |
| 政治清理 | [`ChangeKingdomAction`](../ChangeKingdomAction) 完成氏族因灭亡离开王国的路径，`FactionManager` 清除战役战争条目。 |
| 观察者与存档 | `CampaignEventDispatcher.OnClanDestroyed` 是 Behavior 与 UI 同步点。1.3.15 在清理后派发；1.4.5 实现在注销前派发，跨版本订阅者不可假定事件顺序。 |

叛乱氏族在 1.3.15 还有一条额外分支：清理后由战役对象管理器移除。普通被消灭氏族仍可能出现在战役集合中，因此应检查 `IsEliminated`，不能把“对象还在”当成“仍存活”。

## 原因入口

| 入口 | 何时使用 | 成员处理时机 |
|---|---|---|
| `Apply` | 普通终止。1.4.5 的 `FactionDiscontinuationCampaignBehavior` 在独立氏族不再符合继续存在条件时使用它。 | 所有在世成员，包括领袖，都进入移除角色路径。 |
| `ApplyByFailedRebellion` | 叛乱氏族的叛乱已经确定失败。当前清理机制与默认相同，但调用点保留了原因语义。 | 与默认相同；应保留专名，避免未来实现或你的日志失去原因。 |
| `ApplyByClanLeaderDeath` | 调用方已经处理了领袖死亡，需要在不重复移除领袖的情况下解体氏族。`DestroyKingdomAction.ApplyByKingdomLeaderDeath` 会走此路径。 | 其余在世英雄被移除；目标氏族领袖被刻意跳过。 |

## 风险边界

- 不要在遍历 `Clan.All`、`destroyedClan.Heroes`、`Settlements` 或王国实时氏族列表时调用。引擎会自行快照；模组代码也应在破坏性循环前 `ToList()`。
- 调用后不要继续把领袖、部队、领地当作有效缓存。部队/英雄删除、领地转移、战争清理和离开王国都会让本 tick 早先的假设失效。
- 不要分别写 `IsEliminated`、`Hero.Clan`、`Settlement.OwnerClan` 或 `Clan.Kingdom` 来模仿它。那会漏掉 Action 副作用，留下陈旧存档引用、战争姿态或 Behavior 缓存。
- 持有城镇或城堡的氏族需要可用继承氏族与成年继承领主。这是全局政治手术，应放在确定的战役生命周期回调中，不能在读档或战斗边迭代期间执行。

## 真实获取路径示例

1.4.5 的 `FactionDiscontinuationCampaignBehavior` 会对独立氏族调用默认路径。自定义 Behavior 只有在已经建立等价终局规则后，才能沿用同样的真实查找路径：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public void RemoveDefeatedRebelClan()
{
    Clan rebel = Clan.FindFirst(clan =>
        clan.IsRebelClan && !clan.IsEliminated && clan.Settlements.Count == 0);

    if (rebel != null)
    {
        DestroyClanAction.ApplyByFailedRebellion(rebel);
    }
}
```

谓词从战役对象列表取得真实 `Clan`。条件刻意严格：失去一座据点并不是抹除氏族的一般理由。

## 该用更窄 Action 的情况

| 目标 | 应使用 |
|---|---|
| 删除一支地图部队 | [`DestroyPartyAction`](../DestroyPartyAction) |
| 杀死、退役或变更一个英雄 | [`KillCharacterAction`](../KillCharacterAction) 或对应继承 Action |
| 转移指定领地 | [`ChangeOwnerOfSettlementAction`](../ChangeOwnerOfSettlementAction) |
| 氏族存活但退出/加入王国 | [`ChangeKingdomAction`](../ChangeKingdomAction) |
| 删除整个政治联盟 | [`DestroyKingdomAction`](../DestroyKingdomAction) |

## 导航

- ↑ [战役 Actions](./) · [API](../)
- ↔ [Clan](../../campaign/Clan) · [Kingdom](../../campaign/Kingdom) · [Army](../Army)
- 相关：[DestroyKingdomAction](../DestroyKingdomAction) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [崩溃边界](../../../architecture/crash-boundaries)
