---
title: "SelectableFiefItemPropertyVM"
description: "SelectableFiefItemPropertyVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting SelectableItemPropertyVM; 2 exposed members (0 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/SelectableFiefItemPropertyVM.cs."
---
# SelectableFiefItemPropertyVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SelectableFiefItemPropertyVM : SelectableItemPropertyVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/SelectableFiefItemPropertyVM.cs`

## Overview

SelectableFiefItemPropertyVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/SelectableFiefItemPropertyVM.cs. It is a public class, implementing/inheriting SelectableItemPropertyVM; the inheritance chain is SelectableFiefItemPropertyVM → SelectableItemPropertyVM → ViewModel. It exposes 2 public/protected members: 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SelectableFiefItemPropertyVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace matching the module directory; inheritance chain SelectableFiefItemPropertyVM → SelectableItemPropertyVM → ViewModel. The surface is property-led (properties 1/2, methods 0/2), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/SelectableFiefItemPropertyVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SelectableFiefItemPropertyVM` | `public SelectableFiefItemPropertyVM(string name, string value, int changeAmount, SelectableItemPropertyVM.PropertyType type, BasicTooltipViewModel hint = null, bool isWarning = false) : base(name, value, isWarning, hint)` | constructor |
| `ChangeAmount` | `public int ChangeAmount` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SelectableItemPropertyVM](../SelectableItemPropertyVM)
- [same namespace ActionCampaignOptionData](../ActionCampaignOptionData)
- [same namespace BannerEditorVM](../BannerEditorVM)
- [same namespace BooleanCampaignOptionData](../BooleanCampaignOptionData)
- [same namespace CampaignOptionData](../CampaignOptionData)
