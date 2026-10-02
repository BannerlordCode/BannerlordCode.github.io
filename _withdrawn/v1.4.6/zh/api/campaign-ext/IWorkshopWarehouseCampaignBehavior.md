---
title: "IWorkshopWarehouseCampaignBehavior"
description: "IWorkshopWarehouseCampaignBehavior：TaleWorlds.CampaignSystem.CampaignBehaviors 的 public 接口；公开成员 10 个（方法 10、属性 0、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/IWorkshopWarehouseCampaignBehavior.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IWorkshopWarehouseCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IWorkshopWarehouseCampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IWorkshopWarehouseCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## 概述

IWorkshopWarehouseCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/IWorkshopWarehouseCampaignBehavior.cs。它是一个 public 接口，继承链为 IWorkshopWarehouseCampaignBehavior。public/protected 成员共 10 个：10 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IWorkshopWarehouseCampaignBehavior 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`），命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors`，继承链 IWorkshopWarehouseCampaignBehavior。成员构成以方法为主（方法 10/10，属性 0/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/IWorkshopWarehouseCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsGettingInputsFromWarehouse` | `bool IsGettingInputsFromWarehouse(Workshop workshop);` | 方法 |
| `SetIsGettingInputsFromWarehouse` | `void SetIsGettingInputsFromWarehouse(Workshop workshop, bool isActive);` | 方法 |
| `GetStockProductionInWarehouseRatio` | `float GetStockProductionInWarehouseRatio(Workshop workshop);` | 方法 |
| `SetStockProductionInWarehouseRatio` | `void SetStockProductionInWarehouseRatio(Workshop workshop, float percentage);` | 方法 |
| `GetWarehouseItemRosterWeight` | `float GetWarehouseItemRosterWeight(Settlement settlement);` | 方法 |
| `IsRawMaterialsSufficientInTownMarket` | `bool IsRawMaterialsSufficientInTownMarket(Workshop workshop);` | 方法 |
| `GetInputCount` | `int GetInputCount(Workshop workshop);` | 方法 |
| `GetOutputCount` | `int GetOutputCount(Workshop workshop);` | 方法 |
| `GetInputDailyChange` | `ExplainedNumber GetInputDailyChange(Workshop workshop);` | 方法 |
| `GetOutputDailyChange` | `ExplainedNumber GetOutputDailyChange(Workshop workshop);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior/)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)
