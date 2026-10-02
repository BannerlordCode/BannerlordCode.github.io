---
title: "BooleanCampaignOptionData"
description: "BooleanCampaignOptionData: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting CampaignOptionData; 2 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/BooleanCampaignOptionData.cs."
---
# BooleanCampaignOptionData

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class BooleanCampaignOptionData : CampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/BooleanCampaignOptionData.cs`

## Overview

BooleanCampaignOptionData lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/BooleanCampaignOptionData.cs. It is a public class, implementing/inheriting CampaignOptionData; the inheritance chain is BooleanCampaignOptionData → CampaignOptionData → ICampaignOptionData. It exposes 2 public/protected members: 1 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BooleanCampaignOptionData is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace matching the module directory; inheritance chain BooleanCampaignOptionData → CampaignOptionData → ICampaignOptionData. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/BooleanCampaignOptionData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BooleanCampaignOptionData` | `public BooleanCampaignOptionData(string identifier, int priorityIndex, CampaignOptionEnableState enableState, Func<float>getValue, Action<float>setValue, Func<CampaignOptionDisableStatus>getIsDisabledWithReason = null, bool isRelatedToDifficultyPreset = false, Func<float, CampaignOptionsDifficultyPresets>onGetDifficultyPresetFromValue = null, Func<CampaignOptionsDifficultyPresets, float>onGetValueFromDifficultyPreset = null) : base(identifier, priorityIndex, enableState, getValue, setValue, getIsDisabledWithReason, isRelatedToDifficultyPreset, onGetDifficultyPresetFromValue, onGetValueFromDifficultyPreset)` | constructor |
| `GetDataType` | `public override CampaignOptionDataType GetDataType()` | method |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface CampaignOptionData](../CampaignOptionData)
- [same namespace ActionCampaignOptionData](../ActionCampaignOptionData)
- [same namespace BannerEditorVM](../BannerEditorVM)
- [same namespace CampaignOptionData](../CampaignOptionData)
- [same namespace CampaignOptionDataType](../CampaignOptionDataType)
