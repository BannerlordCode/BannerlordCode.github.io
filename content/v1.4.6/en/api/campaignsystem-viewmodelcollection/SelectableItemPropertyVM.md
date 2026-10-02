---
title: "SelectableItemPropertyVM"
description: "SelectableItemPropertyVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 10 exposed members (1 methods, 7 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/SelectableItemPropertyVM.cs."
---
# SelectableItemPropertyVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SelectableItemPropertyVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/SelectableItemPropertyVM.cs`

## Overview

SelectableItemPropertyVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/SelectableItemPropertyVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SelectableItemPropertyVM → ViewModel. It exposes 10 public/protected members: 1 methods, 7 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SelectableItemPropertyVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace matching the module directory; inheritance chain SelectableItemPropertyVM → ViewModel. The surface is property-led (properties 7/10, methods 1/10), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/SelectableItemPropertyVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SelectableItemPropertyVM` | `public SelectableItemPropertyVM(string name, string value, bool isWarning = false, BasicTooltipViewModel hint = null)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Type` | `public int Type` | property |
| `IsWarning` | `public bool IsWarning` | property |
| `Name` | `public string Name` | property |
| `Value` | `public string Value` | property |
| `Hint` | `public BasicTooltipViewModel Hint` | property |
| `ColonText` | `public string ColonText` | property |
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
