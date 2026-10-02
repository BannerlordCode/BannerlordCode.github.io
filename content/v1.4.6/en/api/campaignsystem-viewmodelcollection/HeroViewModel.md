---
title: "HeroViewModel"
description: "HeroViewModel: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting CharacterViewModel; 5 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroViewModel.cs."
---
# HeroViewModel

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class HeroViewModel : CharacterViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroViewModel.cs`

## Overview

HeroViewModel lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroViewModel.cs. It is a public class, implementing/inheriting CharacterViewModel; the inheritance chain is HeroViewModel → CharacterViewModel. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HeroViewModel is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace matching the module directory; inheritance chain HeroViewModel → CharacterViewModel. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. CharacterViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/HeroViewModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HeroViewModel` | `public HeroViewModel(CharacterViewModel.StanceTypes stance = CharacterViewModel.StanceTypes.None) : base(stance)` | constructor |
| `SetEquipment` | `public override void SetEquipment(Equipment equipment)` | method |
| `FillFrom` | `public void FillFrom(Hero hero, int seed = -1, bool useCivilian = false, bool useCharacteristicIdleAction = false)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `IsDead` | `public bool IsDead` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionCampaignOptionData](../ActionCampaignOptionData)
- [same namespace BannerEditorVM](../BannerEditorVM)
- [same namespace BooleanCampaignOptionData](../BooleanCampaignOptionData)
- [same namespace CampaignOptionData](../CampaignOptionData)
