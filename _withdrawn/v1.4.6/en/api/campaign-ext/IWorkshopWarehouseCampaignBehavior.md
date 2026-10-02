---
title: "IWorkshopWarehouseCampaignBehavior"
description: "IWorkshopWarehouseCampaignBehavior: a public interface in TaleWorlds.CampaignSystem.CampaignBehaviors; 10 exposed members (10 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/CampaignBehaviors/IWorkshopWarehouseCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IWorkshopWarehouseCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IWorkshopWarehouseCampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IWorkshopWarehouseCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## Overview

IWorkshopWarehouseCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/IWorkshopWarehouseCampaignBehavior.cs. It is a public interface; the inheritance chain is IWorkshopWarehouseCampaignBehavior. It exposes 10 public/protected members: 10 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IWorkshopWarehouseCampaignBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`), namespace `TaleWorlds.CampaignSystem.CampaignBehaviors`, inheritance chain IWorkshopWarehouseCampaignBehavior. The surface is method-led (methods 10/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/IWorkshopWarehouseCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsGettingInputsFromWarehouse` | `bool IsGettingInputsFromWarehouse(Workshop workshop);` | method |
| `SetIsGettingInputsFromWarehouse` | `void SetIsGettingInputsFromWarehouse(Workshop workshop, bool isActive);` | method |
| `GetStockProductionInWarehouseRatio` | `float GetStockProductionInWarehouseRatio(Workshop workshop);` | method |
| `SetStockProductionInWarehouseRatio` | `void SetStockProductionInWarehouseRatio(Workshop workshop, float percentage);` | method |
| `GetWarehouseItemRosterWeight` | `float GetWarehouseItemRosterWeight(Settlement settlement);` | method |
| `IsRawMaterialsSufficientInTownMarket` | `bool IsRawMaterialsSufficientInTownMarket(Workshop workshop);` | method |
| `GetInputCount` | `int GetInputCount(Workshop workshop);` | method |
| `GetOutputCount` | `int GetOutputCount(Workshop workshop);` | method |
| `GetInputDailyChange` | `ExplainedNumber GetInputDailyChange(Workshop workshop);` | method |
| `GetOutputDailyChange` | `ExplainedNumber GetOutputDailyChange(Workshop workshop);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior/)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)
