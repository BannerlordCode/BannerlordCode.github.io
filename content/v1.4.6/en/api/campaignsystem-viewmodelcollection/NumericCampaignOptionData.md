---
title: "NumericCampaignOptionData"
description: "NumericCampaignOptionData: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting CampaignOptionData; 5 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/NumericCampaignOptionData.cs."
---
# NumericCampaignOptionData

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class NumericCampaignOptionData : CampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/NumericCampaignOptionData.cs`

## Overview

NumericCampaignOptionData lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/NumericCampaignOptionData.cs. It is a public class, implementing/inheriting CampaignOptionData; the inheritance chain is NumericCampaignOptionData → CampaignOptionData → ICampaignOptionData. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NumericCampaignOptionData is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace matching the module directory; inheritance chain NumericCampaignOptionData → CampaignOptionData → ICampaignOptionData. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/NumericCampaignOptionData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MinValue` | `public float MinValue` | property |
| `MaxValue` | `public float MaxValue` | property |
| `IsDiscrete` | `public bool IsDiscrete` | property |
| `NumericCampaignOptionData` | `public NumericCampaignOptionData(string identifier, int priorityIndex, CampaignOptionEnableState enableState, Func<float>getValue, Action<float>setValue, float minValue, float maxValue, bool isDiscrete, Func<CampaignOptionDisableStatus>getIsDisabledWithReason = null, bool isRelatedToDifficultyPreset = false, Func<float, CampaignOptionsDifficultyPresets>onGetDifficultyPresetFromValue = null, Func<CampaignOptionsDifficultyPresets, float>onGetValueFromDifficultyPreset = null) : base(identifier, priorityIndex, enableState, getValue, setValue, getIsDisabledWithReason, isRelatedToDifficultyPreset, onGetDifficultyPresetFromValue, onGetValueFromDifficultyPreset)` | constructor |
| `GetDataType` | `public override CampaignOptionDataType GetDataType()` | method |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface CampaignOptionData](../CampaignOptionData)
- [same namespace ActionCampaignOptionData](../ActionCampaignOptionData)
- [same namespace BannerEditorVM](../BannerEditorVM)
- [same namespace BooleanCampaignOptionData](../BooleanCampaignOptionData)
- [same namespace CampaignOptionData](../CampaignOptionData)
