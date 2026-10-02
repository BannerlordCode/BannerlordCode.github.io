---
title: "CampaignOptionSelectorVM"
description: "CampaignOptionSelectorVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting SelectorVM<SelectorItemVM>; 4 exposed members (0 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionSelectorVM.cs."
---
# CampaignOptionSelectorVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CampaignOptionSelectorVM : SelectorVM<SelectorItemVM>`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionSelectorVM.cs`

## Overview

CampaignOptionSelectorVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionSelectorVM.cs. It is a public class, implementing/inheriting SelectorVM<SelectorItemVM>; the inheritance chain is CampaignOptionSelectorVM → SelectorVM. It exposes 4 public/protected members: 1 properties, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CampaignOptionSelectorVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace matching the module directory; inheritance chain CampaignOptionSelectorVM → SelectorVM. The surface is property-led (properties 1/4, methods 0/4), so it mostly exposes state for reading. SelectorVM on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionSelectorVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CampaignOptionSelectorVM` | `public CampaignOptionSelectorVM(int selectedIndex, Action<SelectorVM<SelectorItemVM>>onChange) : base(selectedIndex, onChange)` | constructor |
| `CampaignOptionSelectorVM` | `public CampaignOptionSelectorVM(IEnumerable<string>list, int selectedIndex, Action<SelectorVM<SelectorItemVM>>onChange) : base(list, selectedIndex, onChange)` | constructor |
| `CampaignOptionSelectorVM` | `public CampaignOptionSelectorVM(IEnumerable<TextObject>list, int selectedIndex, Action<SelectorVM<SelectorItemVM>>onChange) : base(list, selectedIndex, onChange)` | constructor |
| `IsEnabled` | `public bool IsEnabled` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionCampaignOptionData](../ActionCampaignOptionData)
- [same namespace BannerEditorVM](../BannerEditorVM)
- [same namespace BooleanCampaignOptionData](../BooleanCampaignOptionData)
- [same namespace CampaignOptionData](../CampaignOptionData)
