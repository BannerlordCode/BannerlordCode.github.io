---
title: "ProfitItemPropertyVM"
description: "ProfitItemPropertyVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 12 exposed members (1 methods, 9 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ProfitItemPropertyVM.cs."
---
# ProfitItemPropertyVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ProfitItemPropertyVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ProfitItemPropertyVM.cs`

## Overview

ProfitItemPropertyVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ProfitItemPropertyVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ProfitItemPropertyVM → ViewModel. It exposes 12 public/protected members: 1 methods, 9 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ProfitItemPropertyVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace matching the module directory; inheritance chain ProfitItemPropertyVM → ViewModel. The surface is property-led (properties 9/12, methods 1/12), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ProfitItemPropertyVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ProfitItemPropertyVM` | `public ProfitItemPropertyVM(string name, int value, ProfitItemPropertyVM.PropertyType type = ProfitItemPropertyVM.PropertyType.None, CharacterImageIdentifierVM governorVisual = null, BasicTooltipViewModel hint = null)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Type` | `public int Type` | property |
| `Name` | `public string Name` | property |
| `Value` | `public int Value` | property |
| `ValueString` | `public string ValueString` | property |
| `Hint` | `public BasicTooltipViewModel Hint` | property |
| `ColonText` | `public string ColonText` | property |
| `GovernorVisual` | `public CharacterImageIdentifierVM GovernorVisual` | property |
| `ShowGovernorPortrait` | `public bool ShowGovernorPortrait` | property |
| `PropertyType` | `public enum PropertyType` | property |
| `PropertyType` | `public enum PropertyType` | nested type |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionCampaignOptionData](../ActionCampaignOptionData)
- [same namespace BannerEditorVM](../BannerEditorVM)
- [same namespace BooleanCampaignOptionData](../BooleanCampaignOptionData)
- [same namespace CampaignOptionData](../CampaignOptionData)
