---
title: "GameMenuItemProgressVM"
description: "GameMenuItemProgressVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu, inheriting ViewModel; 6 exposed members (3 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemProgressVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameMenuItemProgressVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class GameMenuItemProgressVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemProgressVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

GameMenuItemProgressVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemProgressVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameMenuItemProgressVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 3 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuItemProgressVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu`, inheritance chain GameMenuItemProgressVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 3/6, properties 3/6), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemProgressVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `InitializeWith` | `public void InitializeWith(MenuContext context, int virtualIndex)` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnTick` | `public void OnTick()` | method |
| `Text` | `public string Text` | property |
| `ProgressText` | `public string ProgressText` | property |
| `Progress` | `public float Progress` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GameMenuItemVM](../GameMenuItemVM/)
- [same namespace GameMenuPlunderItemVM](../GameMenuPlunderItemVM/)
- [same namespace GameMenuVM](../GameMenuVM/)
