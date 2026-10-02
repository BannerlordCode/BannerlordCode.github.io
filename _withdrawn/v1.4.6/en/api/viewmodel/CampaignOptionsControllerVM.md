---
title: "CampaignOptionsControllerVM"
description: "CampaignOptionsControllerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 3 exposed members (1 methods, 1 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionsControllerVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CampaignOptionsControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CampaignOptionsControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionsControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

CampaignOptionsControllerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionsControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CampaignOptionsControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CampaignOptionsControllerVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection`, inheritance chain CampaignOptionsControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionsControllerVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CampaignOptionsControllerVM` | `public CampaignOptionsControllerVM(MBBindingList<CampaignOptionItemVM>options)` | constructor |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `MBBindingList` | `public MBBindingList<CampaignOptionItemVM>Options` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionCampaignOptionData](../ActionCampaignOptionData/)
- [same namespace BannerEditorVM](../BannerEditorVM/)
- [same namespace BooleanCampaignOptionData](../BooleanCampaignOptionData/)
- [same namespace CampaignOptionData](../CampaignOptionData/)
