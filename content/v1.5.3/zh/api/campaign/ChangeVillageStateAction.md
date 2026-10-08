---
title: "ChangeVillageStateAction"
description: "静态 Action 类，提供恢复正常、被劫掠、被强征补给、被强征志愿兵、被掠夺 5 个语义化入口，统一收敛到 ApplyInternal 写入村庄状态。"
---

# ChangeVillageStateAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class ChangeVillageStateAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeVillageStateAction.cs`

## 概述

`ChangeVillageStateAction` 是战役层负责村庄（Village）状态切换的静态 Action 类。村庄在游戏里会处于多种状态：正常（`Normal`）、正在被劫掠（`BeingRaided`）、被强征补给（`ForcedForSupplies`）、被强征志愿兵（`ForcedForVolunteers`）、已被掠夺（`Looted`）。这个类把所有状态变更收敛到唯一的私有实现 `ApplyInternal`：先读取村庄当前状态，只有当新状态与旧状态不同时才写入 `Village.VillageState`，随后通过 `CampaignEventDispatcher.Instance.OnVillageStateChanged` 派发状态变化事件（携带旧状态、新状态与劫掠方部队），并调用 `village.Settlement.Party.SetLevelMaskIsDirty()` 标记等级掩码需要重算。5 个公开入口都是这一结构的薄封装，mod 开发者应当用语义化入口表达意图，而不是自己直接写状态字段。

## 心智模型

这个类的结构是「5 个语义化入口 → 1 个私有收敛点」。5 个 `ApplyBySettingToXxx` 静态方法各自对应一种玩法场景：`ApplyBySettingToNormal` 用于劫掠结束、村庄恢复平静；`ApplyBySettingToBeingRaided` 用于一支部队开始劫掠村庄；`ApplyBySettingToBeingForcedForSupplies` 用于部队强征补给；`ApplyBySettingToBeingForcedForVolunteers` 用于部队强征志愿兵；`ApplyBySettingToLooted` 用于村庄被掠夺完毕。每个入口只做一件事：把 `Settlement` 参数转成内部的 `Village`，连同目标状态与劫掠方部队一起转发给 `ApplyInternal`。

`ApplyInternal` 是唯一的实际写入点，遵循固定的收敛结构：先缓存旧状态 `village.VillageState`，比较新旧状态；不同才写入新状态、派发 `OnVillageStateChanged` 事件、标记 `SetLevelMaskIsDirty`；相同则整段跳过。注意入口参数收的是 `Settlement` 而不是 `Village`，内部再取 `settlement.Village`——调用方传的是定居点，收敛点操作的是村庄。对 mod 而言，正确的心智模型是：永远通过 5 个语义化入口表达意图（"这个村庄正在被劫掠"），让 `ApplyInternal` 去处理比较、事件与掩码刷新，而不是自己直接写 `Village.VillageState`。

## 怎么用

### 怎么拿到它

静态类，没有实例。直接以 `ChangeVillageStateAction.ApplyBySettingToXxx(…)` 形式调用，5 个入口都是 `public static`。

### 典型用法

1. 劫掠结束后恢复村庄：`ChangeVillageStateAction.ApplyBySettingToNormal(settlement)`。
2. 部队开始劫掠某村庄：`ApplyBySettingToBeingRaided(settlement, raiderParty)`。
3. 部队强征补给：`ApplyBySettingToBeingForcedForSupplies(settlement, raiderParty)`。
4. 部队强征志愿兵：`ApplyBySettingToBeingForcedForVolunteers(settlement, raiderParty)`。
5. 村庄被掠夺完毕：`ApplyBySettingToLooted(settlement, raiderParty)`。

### 最容易踩的坑

1. **入口收的是 `Settlement` 不是 `Village`**：5 个入口的第一个参数都是 `Settlement`，内部再取 `settlement.Village`。传错类型编译不过；而若传入的定居点没有村庄（`Village` 为 null），`ApplyInternal` 内部会踩空。
2. **`ApplyBySettingToNormal` 的劫掠方是 `null`**：恢复入口硬编码传 `null` 作为 raiderParty，事件监听方拿到的劫掠方参数为 null，下游逻辑要能处理这种情况。
3. **状态没变化时是静默无操作**：`ApplyInternal` 在 `newState == villageState` 时既不派发事件也不标记 dirty，重复设置同一状态不会有任何效果，不要假设每次调用都会收到 `OnVillageStateChanged`。
4. **状态值来自 `Village.VillageStates` 枚举**：5 个入口分别对应 `Normal`、`BeingRaided`、`ForcedForSupplies`、`ForcedForVolunteers`、`Looted`，不要自己造状态值。
5. **事件只在真正变化时派发**：`OnVillageStateChanged` 携带旧状态、新状态与劫掠方部队三个参数，但只在状态实际改变的分支里触发。

## 关键成员

- **ChangeVillageStateAction**（`ChangeVillageStateAction.cs:8`）— 静态类声明，5 个语义化入口与私有收敛点的宿主。
- **ApplyInternal**（`ChangeVillageStateAction.cs:11`）— 私有收敛点：缓存旧 `VillageState`，仅在状态不同时写入新状态、派发 `OnVillageStateChanged` 并标记 `SetLevelMaskIsDirty`。
- **ApplyBySettingToNormal**（`ChangeVillageStateAction.cs:23`）— 把村庄恢复为 `Normal`，raiderParty 传 `null`。
- **ApplyBySettingToBeingRaided**（`ChangeVillageStateAction.cs:29`）— 把村庄标记为 `BeingRaided`，携带劫掠方部队。
- **ApplyBySettingToBeingForcedForSupplies**（`ChangeVillageStateAction.cs:35`）— 把村庄标记为 `ForcedForSupplies`，携带劫掠方部队。
- **ApplyBySettingToBeingForcedForVolunteers**（`ChangeVillageStateAction.cs:41`）— 把村庄标记为 `ForcedForVolunteers`，携带劫掠方部队。
- **ApplyBySettingToLooted**（`ChangeVillageStateAction.cs:47`）— 把村庄标记为 `Looted`，携带劫掠方部队。

## 真实示例

```csharp
// 用主英雄当前所在的定居点演示恢复与劫掠两种入口
Settlement here = Hero.MainHero.CurrentSettlement;

// 1) 把村庄恢复正常（劫掠结束）
if (here != null)
{
    ChangeVillageStateAction.ApplyBySettingToNormal(here);
}

// 2) 用主英雄的部队把村庄标记为"正在被劫掠"
if (here != null)
{
    ChangeVillageStateAction.ApplyBySettingToBeingRaided(here, Hero.MainHero.PartyBelongedTo);
}
```

## 参见

- [ChangeGovernorAction](../ChangeGovernorAction) — 同批的另一个战役 Action 静态类，负责总督任免
- [Campaign](../Campaign) — 战役静态入口
- [CampaignEventDispatcher](../CampaignEventDispatcher) — `OnVillageStateChanged` 事件的派发方
- [SettlementHelper](../../core-extra/SettlementHelper) — 定居点辅助工具

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
