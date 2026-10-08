---
title: "ChangeGovernorAction"
description: "静态 Action 类，提供任命、按英雄卸任、按城镇安全卸任 3 个公开入口，由 ApplyInternal 与 ApplyGiveUpInternal 两个内部实现收敛。"
---

# ChangeGovernorAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class ChangeGovernorAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeGovernorAction.cs`

## 概述

`ChangeGovernorAction` 是战役层负责总督（Governor）任免的静态 Action 类。城镇（Town）可以任命一名英雄作为总督，也可以把总督卸任。这个类把任免逻辑收敛到两个私有实现：`ApplyInternal` 负责任命——它处理新总督为 null、新总督已是该定居点居民且非俘虏、新总督需要传送三种分支，随后清空旧总督的 `GovernorOf` 引用，派发 `OnGovernorChanged` 事件，并在新总督非空时派发 `OnHeroGetsBusy`（原因 `BecomeGovernor`）；`ApplyGiveUpInternal` 负责卸任——清空城镇的 `Governor` 与英雄的 `GovernorOf`，派发 `OnGovernorChanged`。3 个公开入口都是这两个实现的薄封装。

## 心智模型

这个类的结构是「2 个内部实现 × 3 个公开入口」。任命侧：`Apply` 转发到 `ApplyInternal`，后者先缓存城镇当前总督 `governor2`，再按三条分支处理——新总督为 null 时把城镇总督置空；新总督的 `CurrentSettlement` 已是该城镇定居点且不是俘虏时，直接任命并调用 `TeleportHeroAction.ApplyImmediateTeleportToSettlement` 立即传送；其余情况先置空再调用 `TeleportHeroAction.ApplyDelayedTeleportToSettlementAsGovernor` 延迟传送。三条分支之后统一收尾：旧总督非空则清其 `GovernorOf`，派发 `OnGovernorChanged`，新总督非空则派发 `OnHeroGetsBusy`。

卸任侧：`RemoveGovernorOf` 与 `RemoveGovernorOfIfExists` 都转发到 `ApplyGiveUpInternal`，区别只在入口是否先判存在性——后者先检查 `town.Governor != null`。`ApplyGiveUpInternal` 从 `governor.GovernorOf` 取出城镇，清空城镇的 `Governor` 与英雄的 `GovernorOf`，派发 `OnGovernorChanged`。对 mod 而言，正确的心智模型是：任命用 `Apply`（可以传 null 表达"撤掉总督"），卸任按对象选择——手里有英雄引用用 `RemoveGovernorOf`，手里只有城镇引用用 `RemoveGovernorOfIfExists`。

## 怎么用

### 怎么拿到它

静态类，没有实例。直接以 `ChangeGovernorAction.Apply(…)` / `RemoveGovernorOf(…)` / `RemoveGovernorOfIfExists(…)` 形式调用。

### 典型用法

1. 任命主英雄为某城镇总督：`ChangeGovernorAction.Apply(town, Hero.MainHero)`。
2. 撤掉某城镇的总督（传 null）：`ChangeGovernorAction.Apply(town, null)`。
3. 按英雄引用卸任：`ChangeGovernorAction.RemoveGovernorOf(hero)`。
4. 按城镇引用安全卸任（无总督时什么都不做）：`ChangeGovernorAction.RemoveGovernorOfIfExists(town)`。
5. 换总督：先 `RemoveGovernorOfIfExists(town)` 再 `Apply(town, newGovernor)`。

### 最容易踩的坑

1. **`RemoveGovernorOfIfExists` 与 `RemoveGovernorOf` 的区别**：前者先判 `town.Governor != null` 再转发，后者直接转发。对可能没有总督的城镇，用前者。
2. **`Apply(town, null)` 是合法的撤职用法**：`ApplyInternal` 的第一条分支就是新总督为 null 时把城镇总督置空，不需要先卸任再任命。
3. **任命不保证英雄立即进城**：只有英雄已在该定居点且非俘虏时走立即传送，否则走延迟传送，不要假设调用后英雄一定在城里。
4. **`ApplyGiveUpInternal` 直接读 `governor.GovernorOf`**：对从未担任过总督的英雄调用 `RemoveGovernorOf` 会踩空，因为 `GovernorOf` 为 null。
5. **旧总督的 `GovernorOf` 在分支之后无条件清空**：只要 `governor2` 非空就会被清，即使新任命走了置空分支。

## 关键成员

- **ChangeGovernorAction**（`ChangeGovernorAction.cs:7`）— 静态类声明，3 个公开入口与 2 个内部实现的宿主。
- **ApplyInternal**（`ChangeGovernorAction.cs:10`）— 任命内部实现：三条分支处理新总督（null / 已在定居点且非俘虏 / 需延迟传送），收尾清空旧总督 `GovernorOf` 并派发 `OnGovernorChanged` 与 `OnHeroGetsBusy`。
- **ApplyGiveUpInternal**（`ChangeGovernorAction.cs:39`）— 卸任内部实现：清空城镇 `Governor` 与英雄 `GovernorOf`，派发 `OnGovernorChanged`。
- **Apply**（`ChangeGovernorAction.cs:48`）— 公开任命入口，转发到 `ApplyInternal`；第二参数传 null 即撤职。
- **RemoveGovernorOf**（`ChangeGovernorAction.cs:54`）— 按英雄引用卸任，直接转发到 `ApplyGiveUpInternal`，不判存在性。
- **RemoveGovernorOfIfExists**（`ChangeGovernorAction.cs:60`）— 按城镇引用安全卸任，先判 `town.Governor != null` 再转发。

## 真实示例

```csharp
// 把主英雄任命为当前定居点的总督
Town fortification = Hero.MainHero.CurrentSettlement as Town;
if (fortification != null)
{
    ChangeGovernorAction.Apply(fortification, Hero.MainHero);
}

// 安全卸任：没有总督时什么也不做
Town sameTown = Hero.MainHero.CurrentSettlement as Town;
if (sameTown != null)
{
    ChangeGovernorAction.RemoveGovernorOfIfExists(sameTown);
}
```

## 参见

- [ChangeVillageStateAction](../ChangeVillageStateAction) — 同批的另一个战役 Action 静态类，负责村庄状态切换
- [Campaign](../Campaign) — 战役静态入口
- [TownHelpers](../../core-extra/TownHelpers) — 城镇辅助工具
- [SettlementHelper](../../core-extra/SettlementHelper) — 定居点辅助工具

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
