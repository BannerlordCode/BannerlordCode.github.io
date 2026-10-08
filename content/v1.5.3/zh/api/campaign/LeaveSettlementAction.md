---
title: "LeaveSettlementAction"
description: "把队伍或单个英雄从聚落中撤出的静态 Action：清理驻留状态、处理军队随行队伍与海上锚点，并广播聚落离开事件。"
---

# LeaveSettlementAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class LeaveSettlementAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/LeaveSettlementAction.cs`

## 概述

这个静态类涉及把参与者从聚落中撤出时所发生的两类状态变更。一类面向队伍：当一支队伍离开聚落时，它涉及该队伍与聚落之间驻留关系的解除——队伍的当前聚落引用被清空；若队伍正在海上，其锚点位置会被重置；若这支队伍是一支军队的首领队伍，军队中附着的其他队伍也会被逐一处理，其中与玩家遭遇相关的部分会被结束。随后聚落一侧会收到队伍离开的通知，战役事件分发器也会广播这次离开。另一类面向单个英雄：当只需要把某个英雄从聚落中撤出时，涉及该英雄驻留聚落引用的清空，以及从聚落位置复合体中移除该英雄的位置记录。它的边界止于「离开」这一刻的状态清理与事件广播：它不涉及进入聚落，也不涉及队伍在野外的移动，更不管理聚落内部的驻留名单本身。

## 心智模型

这个类是静态的，两个公开入口都不需要实例。`ApplyForParty` 接收一个 `MobileParty`：从源码看，它先读出该队伍当前的聚落，若该队伍是军队的首领队伍，会遍历军队附着的其他队伍——遇到玩家主队伍且玩家遭遇正在进行时结束该遇到，遇到同处该聚落的队伍则递归调用自身；随后把队伍的当前聚落置空，若队伍在海上则重置锚点，最后触发聚落侧的离开通知与战役事件分发器的聚落离开事件。`ApplyForCharacterOnly` 接收一个 `Hero`：它读出英雄当前的聚落，把英雄的驻留聚落置空，再从聚落的位置复合体中查找该英雄所在的位置，若找到则把英雄从该位置移除，并在玩家位置遭遇存在时把英雄从随行角色中移除。两个入口的差别只能从参数描述看：一个以队伍为单位、会牵连军队与遭遇，另一个以英雄为单位、只清理位置记录。锚表里没有 private 内部实现——两个入口各自完成自己的全部逻辑，彼此不互相调用（`ApplyForParty` 内部对附着队伍的递归是它自己调自己）。

## 怎么用

### 怎么拿到它

静态类，直接 `LeaveSettlementAction.方法名(…)` 调用；不需要实例。

### 典型用法

1. 玩家队伍离开一座城镇或村庄时，调用 `ApplyForParty` 解除驻留关系。
2. 队伍作为军队首领离开聚落时，附着队伍会一并被处理。
3. 只需要某个英雄脱离聚落（例如英雄被单独移出队伍所在位置）时，调用 `ApplyForCharacterOnly`。
4. 队伍在海上离开聚落时，锚点位置会被重置。

### 最容易踩的坑

1. 两个入口的参数类型不同：传队伍用 `ApplyForParty`，传英雄用 `ApplyForCharacterOnly`，两者不能互换。
2. `ApplyForParty` 只处理传入的那一支队伍（以及它作为首领的军队附着队伍），不会自动处理玩家麾下的其他队伍。
3. `ApplyForCharacterOnly` 只清理驻留与位置记录，从源码看它不触发聚落离开事件广播。
4. 在海上调用 `ApplyForParty` 会重置队伍锚点——若你的 mod 依赖锚点位置，调用后需要重新设置。

## 关键成员

- **`LeaveSettlementAction`**（`LeaveSettlementAction.cs:10`）— 静态类，两个入口都是静态方法，直接以类名调用，不需要实例。
- **`ApplyForParty`**（`LeaveSettlementAction.cs:13`）— 公开入口，接收 `MobileParty`；解除队伍与聚落的驻留关系，牵连军队附着队伍与海上锚点，并广播聚落离开事件。
- **`ApplyForCharacterOnly`**（`LeaveSettlementAction.cs:40`）— 公开入口，接收 `Hero`；清空英雄驻留聚落引用，并从聚落位置复合体移除其位置记录。

## 真实示例

```csharp
// 场景一：玩家队伍离开当前聚落
public static void LeaveWithParty(MobileParty mobileParty)
{
    LeaveSettlementAction.ApplyForParty(mobileParty);
}

// 场景二：只把单个英雄从聚落中撤出
public static void LeaveWithCharacter(Hero hero)
{
    LeaveSettlementAction.ApplyForCharacterOnly(hero);
}
```

## 参见

- [Campaign](../Campaign) —— 战役层静态 Action 的入口页
- [CampaignEventDispatcher](../CampaignEventDispatcher) —— 聚落离开事件的广播方
- [SettlementHelper](../../core-extra/SettlementHelper) —— 聚落侧的辅助查询
- [MobilePartyHelper](../../core-extra/MobilePartyHelper) —— 队伍侧的辅助查询

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
