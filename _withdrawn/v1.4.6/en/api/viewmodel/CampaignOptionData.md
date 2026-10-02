---
title: "CampaignOptionData"
description: "CampaignOptionData: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ICampaignOptionData; 14 exposed members (13 methods, 0 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CampaignOptionData

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public abstract class CampaignOptionData : ICampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionData.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

CampaignOptionData lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionData.cs. It is a public class (abstract), implementing/inheriting ICampaignOptionData; the inheritance chain is CampaignOptionData → ICampaignOptionData. It exposes 14 public/protected members: 13 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CampaignOptionData lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection`, inheritance chain CampaignOptionData → ICampaignOptionData. The surface is method-led (methods 13/14, properties 0/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CampaignOptionData` | `public CampaignOptionData(string identifier, int priorityIndex, CampaignOptionEnableState enableState, Func<float>getValue, Action<float>setValue, Func<CampaignOptionDisableStatus>getIsDisabledWithReason = null, bool isRelatedToDifficultyPreset = false, Func<float, CampaignOptionsDifficultyPresets>onGetDifficultyPresetFromValue = null, Func<CampaignOptionsDifficultyPresets, float>onGetValueFromDifficultyPreset = null)` | constructor |
| `GetNameOfOption` | `public static TextObject GetNameOfOption(string optionIdentifier)` | method |
| `GetDescriptionOfOption` | `public static TextObject GetDescriptionOfOption(string optionIdentifier)` | method |
| `GetPriorityIndex` | `public int GetPriorityIndex()` | method |
| `GetDataType` | `public abstract CampaignOptionDataType GetDataType();` | method |
| `IsRelatedToDifficultyPreset` | `public bool IsRelatedToDifficultyPreset()` | method |
| `GetValueFromDifficultyPreset` | `public float GetValueFromDifficultyPreset(CampaignOptionsDifficultyPresets preset)` | method |
| `GetIsDisabledWithReason` | `public CampaignOptionDisableStatus GetIsDisabledWithReason()` | method |
| `GetIdentifier` | `public string GetIdentifier()` | method |
| `GetEnableState` | `public CampaignOptionEnableState GetEnableState()` | method |
| `GetName` | `public string GetName()` | method |
| `GetDescription` | `public string GetDescription()` | method |
| `GetValue` | `public float GetValue()` | method |
| `SetValue` | `public void SetValue(float value)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ICampaignOptionData](../ICampaignOptionData/)
- [same namespace ActionCampaignOptionData](../ActionCampaignOptionData/)
- [same namespace BannerEditorVM](../BannerEditorVM/)
- [same namespace BooleanCampaignOptionData](../BooleanCampaignOptionData/)
- [same namespace CampaignOptionDataType](../CampaignOptionDataType/)
