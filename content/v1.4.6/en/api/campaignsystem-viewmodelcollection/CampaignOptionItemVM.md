---
title: "CampaignOptionItemVM"
description: "CampaignOptionItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 20 exposed members (6 methods, 13 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionItemVM.cs."
---
# CampaignOptionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CampaignOptionItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionItemVM.cs`

## Overview

CampaignOptionItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CampaignOptionItemVM → ViewModel. It exposes 20 public/protected members: 6 methods, 13 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CampaignOptionItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace matching the module directory; inheritance chain CampaignOptionItemVM → ViewModel. The surface is property-led (properties 13/20, methods 6/20), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OptionData` | `public ICampaignOptionData OptionData` | property |
| `CampaignOptionItemVM` | `public CampaignOptionItemVM(ICampaignOptionData optionData)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RefreshDisabledStatus` | `public void RefreshDisabledStatus()` | method |
| `ExecuteAction` | `public void ExecuteAction()` | method |
| `OnSelectionOptionValueChanged` | `public void OnSelectionOptionValueChanged(SelectorVM<SelectorItemVM>selector)` | method |
| `SetValue` | `public void SetValue(float value)` | method |
| `SetOnValueChangedCallback` | `public void SetOnValueChangedCallback(Action<CampaignOptionItemVM>onValueChanged)` | method |
| `HideOptionName` | `public bool HideOptionName` | property |
| `Name` | `public string Name` | property |
| `Hint` | `public HintViewModel Hint` | property |
| `OptionType` | `public int OptionType` | property |
| `ValueAsBoolean` | `public bool ValueAsBoolean` | property |
| `IsDiscrete` | `public bool IsDiscrete` | property |
| `IsDisabled` | `public bool IsDisabled` | property |
| `MinRange` | `public float MinRange` | property |
| `MaxRange` | `public float MaxRange` | property |
| `ValueAsRange` | `public float ValueAsRange` | property |
| `ValueAsString` | `public string ValueAsString` | property |
| `SelectionSelector` | `public CampaignOptionSelectorVM SelectionSelector` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionCampaignOptionData](../ActionCampaignOptionData)
- [same namespace BannerEditorVM](../BannerEditorVM)
- [same namespace BooleanCampaignOptionData](../BooleanCampaignOptionData)
- [same namespace CampaignOptionData](../CampaignOptionData)
