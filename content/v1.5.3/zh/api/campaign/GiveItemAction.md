---
title: "GiveItemAction"
description: "在两名英雄或两支队伍之间转移一件物品清单条目的静态 Action，是物品赠予与战利品分配的唯一正规入口。"
---

# GiveItemAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class GiveItemAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/GiveItemAction.cs`

## 概述

`GiveItemAction` 负责在游戏世界内把一件物品从一方转移到另一方。它处理的是「物品归属」这一世界状态变更：物品从给予方的物品清单中移除，并出现在接收方的物品清单里，同时触发与物品流转相关的事件与通知。为什么必须走它而不是直接改字段：物品在《骑马与砍杀 II：霸主》里不是简单的数据行，它同时挂在英雄或队伍的物品清单上，并且与任务、交易、战利品分配等系统存在联动。直接修改底层字段会绕过这些联动，导致状态不一致。这个静态类把「转移一件物品」这件事收敛成两个语义化入口，让调用方用意图而不是底层操作来表达。

## 心智模型

这个类的结构非常薄：两个公开入口按「谁给谁」划分——`ApplyForHeroes` 处理英雄对英雄的转移，`ApplyForParties` 处理队伍对队伍的转移。两个入口都接收一个 `in ItemRosterElement` 参数，`in` 表示只读引用传递，调用方把物品清单条目交进来，类内部负责把它从一方摘下来、挂到另一方。两个入口最终都收敛到同一个私有方法 `ApplyInternal`，由它执行实际的清单变更与后续处理。对 mod 开发者来说，心智模型就是：先想清楚这次转移发生在哪两个主体之间，再选对应的入口，把物品条目作为 `in` 参数传进去。两个入口的分工让调用方可以按主体类型选择语义最贴近的那个，而不必关心清单内部如何组织。不需要、也不应该自己操作物品清单的内部结构。

## 怎么用

### 怎么拿到它

`GiveItemAction` 是静态类，没有实例，直接以 `GiveItemAction.ApplyForHeroes(...)` 或 `GiveItemAction.ApplyForParties(...)` 的形式调用。

### 典型用法

- 任务奖励：玩家完成任务后，把一件装备从任务给予方转到玩家英雄身上。
- 战利品分配：战斗结束后把战利品物品在队伍之间重新分配。
- 剧情赠予：某个 NPC 英雄把一件信物交给玩家英雄，推动剧情。
- 队伍间调拨：把物资从补给队转移到前线部队。

### 最容易踩的坑

- 把 `in ItemRosterElement` 当成普通值参数，试图在调用后继续依赖原持有方的清单状态——`in` 只是只读引用，转移完成后原持有方的清单已经变了。
- 在英雄与队伍之间混用入口：英雄持有和队伍持有是两种不同的清单，选错入口会导致物品「消失」在错误的清单里。
- 直接去改 `ItemRoster` 的内部集合来模拟赠予，绕过了 `ApplyInternal` 里的联动逻辑。
- 忘记检查物品当前归属，把一件已经不在预期持有方手里的物品传进来。

## 关键成员

- **`ApplyInternal`**（`GiveItemAction.cs:12`）— 私有实现，两个公开入口的实际落点，执行物品在双方清单间的转移与后续处理。
- **`ApplyForHeroes`**（`GiveItemAction.cs:50`）— 公开入口，处理英雄对英雄的物品转移，接收给予方英雄、接收方英雄与物品条目。
- **`ApplyForParties`**（`GiveItemAction.cs:56`）— 公开入口，处理队伍对队伍的物品转移，接收给予方队伍、接收方队伍与物品条目。

## 真实示例

```csharp
public static void GiveItemToMainHero(Hero giver, in ItemRosterElement item)
{
    GiveItemAction.ApplyForHeroes(giver, Hero.MainHero, item);
}

public static void GiveItemFromMainHero(Hero receiver, in ItemRosterElement item)
{
    GiveItemAction.ApplyForHeroes(Hero.MainHero, receiver, item);
}

public static void GiveItemBetweenParties(PartyBase giverParty, PartyBase receiverParty, in ItemRosterElement item)
{
    GiveItemAction.ApplyForParties(giverParty, receiverParty, item);
}
```

## 参见

- [MakeHeroFugitiveAction](../MakeHeroFugitiveAction) —— 同批的另一个英雄状态 Action
- [Campaign](../Campaign) —— 战役层入口
- [ItemHelper](../../core-extra/ItemHelper) —— 物品相关辅助方法

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
