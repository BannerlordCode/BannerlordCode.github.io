---
title: "HeroViewModel"
description: "HeroViewModel: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting CharacterViewModel; 5 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroViewModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HeroViewModel

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class HeroViewModel : CharacterViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroViewModel.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

HeroViewModel lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroViewModel.cs. It is a public class, implementing/inheriting CharacterViewModel; the inheritance chain is HeroViewModel → CharacterViewModel → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HeroViewModel lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection`, inheritance chain HeroViewModel → CharacterViewModel → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroViewModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `HeroViewModel` | `public HeroViewModel(CharacterViewModel.StanceTypes stance = CharacterViewModel.StanceTypes.None) : base(stance)` | constructor |
| `SetEquipment` | `public override void SetEquipment(Equipment equipment)` | method |
| `FillFrom` | `public void FillFrom(Hero hero, int seed = -1, bool useCivilian = false, bool useCharacteristicIdleAction = false)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `IsDead` | `public bool IsDead` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface CharacterViewModel](../CharacterViewModel/)
- [same namespace ActionCampaignOptionData](../ActionCampaignOptionData/)
- [same namespace BannerEditorVM](../BannerEditorVM/)
- [same namespace BooleanCampaignOptionData](../BooleanCampaignOptionData/)
- [same namespace CampaignOptionData](../CampaignOptionData/)
