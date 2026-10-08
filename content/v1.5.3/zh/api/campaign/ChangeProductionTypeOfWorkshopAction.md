---
title: "ChangeProductionTypeOfWorkshopAction"
description: "把一座已有工坊的生产类型安全切换到新产线：内部完成定价、扣款与事件广播，mod 不应直接改工坊字段。"
---

# ChangeProductionTypeOfWorkshopAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class ChangeProductionTypeOfWorkshopAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeProductionTypeOfWorkshopAction.cs`

## 概述

这个静态 Action 类负责把一座已有工坊（`Workshop`）的生产类型切换到另一个 `WorkshopType`。它把「改产线」收拢成单一入口：先向 `WorkshopModel` 询问转换价格，再让工坊切换生产类型，然后在需要时通过 `GiveGoldAction` 从工坊主人那里扣除费用，最后广播 `OnWorkshopTypeChanged` 事件让订阅方同步。mod 应该用这个语义化入口，而不是直接改工坊字段——价格、扣款与事件通知都封装在 `Apply` 内部，直接改字段会绕过这些步骤。

## 心智模型

入口结构：只有一个公开入口 `Apply(Workshop workshop, WorkshopType newWorkshopType, bool ignoreCost = false)`。三个参数分别回答「改哪座工坊」「改成什么产线」「要不要付钱」。方法体很短，执行顺序是：算价 → 切换产线 → 扣款 → 广播事件。

与同批 `InitializeWorkshopAction` 的分工：那一页负责「新开局时创建并初始化工坊」，本页负责「对已存在的工坊改产线」。两者都会触发 `CampaignEventDispatcher` 上的工坊事件，但事件不同（`OnWorkshopTypeChanged` 对 `OnWorkshopInitialized`）。

mod 应该用这个语义化入口。价格来自 `Campaign.Current.Models.WorkshopModel.GetConvertProductionCost`，扣款走 `GiveGoldAction.ApplyBetweenCharacters`，事件走 `CampaignEventDispatcher.Instance.OnWorkshopTypeChanged`——这三件事都在 `Apply` 内部串好，调用方不需要自己拼。

注意形态：本页没有 `ApplyInternal` 之类的第二个入口，文件里就只有这一个公开方法，别处找不到别的调用面。

## 怎么用

### 怎么拿到它

静态类，没有实例。直接 `ChangeProductionTypeOfWorkshopAction.Apply(workshop, newType)` 调用，不需要从 `Campaign.Current` 或任何地方取实例。

### 典型用法

1. mod 给玩家一个「转产」决策或交互：选定工坊与目标产线后调用 `Apply`，默认付费。
2. 剧情或政策奖励免费转产：显式传 `ignoreCost: true` 跳过扣款。
3. 读档后重建工坊状态：按存档里记录的类型调用 `Apply` 恢复产线。
4. 批量调整：遍历主角名下工坊，按条件逐个转产。

### 最容易踩的坑

1. 第三个参数 `ignoreCost` 默认 `false`——默认**要**付钱改产线。忘记定价会让玩家意外扣款；想免费转产必须显式传 `true`。
2. 价格来自 `Campaign.Current.Models.WorkshopModel.GetConvertProductionCost(newWorkshopType)`，与目标产线相关，不是固定值。
3. 扣款走 `GiveGoldAction.ApplyBetweenCharacters(workshop.Owner, null, num, false)`，从工坊主人（`workshop.Owner`）扣，不是从调用者扣。
4. 切换后广播 `OnWorkshopTypeChanged`；mod 若自己直接改工坊字段，就会绕过这次广播。
5. 本页只有 `Apply` 一个入口，没有 `ApplyInternal`；别在别处找第二个方法。

## 关键成员

- **`Apply`**（`ChangeProductionTypeOfWorkshopAction.cs:10`）— 唯一公开入口。按 `WorkshopModel` 定价、切换产线、必要时经 `GiveGoldAction` 扣款，并广播 `OnWorkshopTypeChanged`。`ignoreCost` 默认 `false`（要付钱）。
- **`ChangeProductionTypeOfWorkshopAction`**（`ChangeProductionTypeOfWorkshopAction.cs:7`）— 静态类声明本身；命名空间 `TaleWorlds.CampaignSystem.Actions`，无实例、无其他公开成员。

## 真实示例

```csharp
// 场景：mod 的「转产」决策——把主角名下第一座工坊换成另一种产线。
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements.Workshops;

Workshop workshop = Hero.MainHero.OwnedWorkshops.FirstOrDefault();
if (workshop != null)
{
    WorkshopType targetType = WorkshopType.All.FirstOrDefault();
    // 付费转换：ignoreCost 默认 false，按 WorkshopModel 定价扣主角金币
    ChangeProductionTypeOfWorkshopAction.Apply(workshop, targetType);
    // 免费转换（剧情奖励 / 调试）：显式传 true 跳过扣款
    ChangeProductionTypeOfWorkshopAction.Apply(workshop, targetType, true);
}
```

## 参见

- [InitializeWorkshopAction](../InitializeWorkshopAction) — 同批姊妹页：新开局创建/初始化工坊
- [Campaign](../Campaign) — 同目录下的 Campaign 页
- [TownHelpers](../../core-extra/TownHelpers) — core-extra 桶的城镇辅助方法

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
