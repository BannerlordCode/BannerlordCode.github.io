---
title: "InitializeWorkshopAction"
description: "新开局流程里为一座工坊完成初始化：绑定主人与产线、生成并设置英雄姓名、广播初始化事件。"
---

# InitializeWorkshopAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class InitializeWorkshopAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/InitializeWorkshopAction.cs`

## 概述

这个静态 Action 类负责在新开局（new game）流程中为一座工坊完成初始化。它做三件事：让工坊绑定主人与生产类型（`workshop.InitializeWorkshop`）、用 `NameGenerator` 为主人生成姓名并写回英雄（`SetName`）、然后广播 `OnWorkshopInitialized` 事件。入口名 `ApplyByNewGame` 表明它面向开局流程，与同批的 `ChangeProductionTypeOfWorkshopAction`（改已有工坊的产线）分工不同。

## 心智模型

入口结构：只有一个公开入口 `ApplyByNewGame(Workshop workshop, Hero workshopOwner, WorkshopType workshopType)`。三个参数分别回答「初始化哪座工坊」「谁是主人」「什么产线」。方法体顺序：初始化工坊 → 生成英雄姓名 → 设置姓名 → 广播事件。

与第 1 页 `ChangeProductionTypeOfWorkshopAction` 的区别：那一页是「改已有工坊的生产类型」，会算转换价格并可能扣款；本页是「创建/初始化」工坊，不涉及价格与扣款，但多了一步英雄姓名生成（`NameGenerator.Current.GenerateHeroNameAndHeroFullName` 加 `SetName`）。

注意姓名生成这一步：`ApplyByNewGame` 会用 `NameGenerator` 为 `workshopOwner` 生成姓名与全名并写回英雄。如果 mod 在调用前已经手动设置过英雄姓名，这里会再生成一次。

mod 应该用这个语义化入口：工坊初始化、姓名生成、事件广播都封装在 `ApplyByNewGame` 内部。本页没有别的公开入口，文件里就只有这一个方法。

## 怎么用

### 怎么拿到它

静态类，直接 `InitializeWorkshopAction.ApplyByNewGame(workshop, owner, type)` 调用，不需要取实例。

### 典型用法

1. 新开局 mod：在开局流程中为玩家阵营的工坊完成初始化。
2. 自定义开局脚本：按配置为英雄分配工坊时调用。
3. 与 `ChangeProductionTypeOfWorkshopAction` 配合：先 `ApplyByNewGame` 初始化，之后改产线走 `Apply`。

### 最容易踩的坑

1. 入口名带 `ByNewGame`——它面向新开局流程；运行时改产线的场景该用 `ChangeProductionTypeOfWorkshopAction`。
2. 调用会用 `NameGenerator.Current.GenerateHeroNameAndHeroFullName` 为 `workshopOwner` 生成姓名并 `SetName` 写回——调用后英雄的姓名可能被改写。
3. 初始化会广播 `OnWorkshopInitialized`；这是本入口与直接调 `workshop.InitializeWorkshop` 的行为差异之一。
4. 本页只有 `ApplyByNewGame` 一个入口，没有 `Apply` 或 `ApplyInternal`。

## 关键成员

- **`ApplyByNewGame`**（`InitializeWorkshopAction.cs:11`）— 唯一公开入口。初始化工坊（绑定主人与产线）、为英雄生成并设置姓名、广播 `OnWorkshopInitialized`。
- **`InitializeWorkshopAction`**（`InitializeWorkshopAction.cs:8`）— 静态类声明本身；命名空间 `TaleWorlds.CampaignSystem.Actions`，无实例、无其他公开成员。

## 真实示例

```csharp
// 场景：新开局 mod 为主角初始化工坊。
// workshop 与 workshopType 由开局流程创建/配置后传入（本页不负责创建工坊实例）。
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements.Workshops;

static void SetupPlayerWorkshop(Workshop workshop, WorkshopType workshopType)
{
    Hero owner = Hero.MainHero;
    // 初始化：绑定主人与产线，为主角生成姓名，并广播 OnWorkshopInitialized
    InitializeWorkshopAction.ApplyByNewGame(workshop, owner, workshopType);
}
```

## 参见

- [ChangeProductionTypeOfWorkshopAction](../ChangeProductionTypeOfWorkshopAction) — 同批姊妹页：改已有工坊的生产类型
- [Campaign](../Campaign) — 同目录下的 Campaign 页
- [SettlementHelper](../../core-extra/SettlementHelper) — core-extra 桶的聚落辅助方法

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
