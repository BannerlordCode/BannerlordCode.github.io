---
title: "ICampaignOptionData"
description: "ICampaignOptionData: a public interface in TaleWorlds.CampaignSystem.ViewModelCollection; 11 exposed members (11 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ICampaignOptionData.cs."
---
# ICampaignOptionData

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public interface ICampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ICampaignOptionData.cs`

## Overview

ICampaignOptionData lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ICampaignOptionData.cs. It is a public interface; the inheritance chain is ICampaignOptionData. It exposes 11 public/protected members: 11 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ICampaignOptionData is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace matching the module directory; inheritance chain ICampaignOptionData. The surface is method-led (methods 11/11, properties 0/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ICampaignOptionData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetDataType` | `CampaignOptionDataType GetDataType();` | method |
| `GetPriorityIndex` | `int GetPriorityIndex();` | method |
| `IsRelatedToDifficultyPreset` | `bool IsRelatedToDifficultyPreset();` | method |
| `GetValueFromDifficultyPreset` | `float GetValueFromDifficultyPreset(CampaignOptionsDifficultyPresets preset);` | method |
| `GetIdentifier` | `string GetIdentifier();` | method |
| `GetEnableState` | `CampaignOptionEnableState GetEnableState();` | method |
| `GetName` | `string GetName();` | method |
| `GetDescription` | `string GetDescription();` | method |
| `GetValue` | `float GetValue();` | method |
| `SetValue` | `void SetValue(float value);` | method |
| `GetIsDisabledWithReason` | `CampaignOptionDisableStatus GetIsDisabledWithReason();` | method |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionCampaignOptionData](../ActionCampaignOptionData)
- [same namespace BannerEditorVM](../BannerEditorVM)
- [same namespace BooleanCampaignOptionData](../BooleanCampaignOptionData)
- [same namespace CampaignOptionData](../CampaignOptionData)
