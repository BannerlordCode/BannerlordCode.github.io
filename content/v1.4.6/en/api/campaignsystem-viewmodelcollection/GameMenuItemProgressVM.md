---
title: "GameMenuItemProgressVM"
description: "GameMenuItemProgressVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 6 exposed members (3 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemProgressVM.cs."
---
# GameMenuItemProgressVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class GameMenuItemProgressVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemProgressVM.cs`

## Overview

GameMenuItemProgressVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemProgressVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameMenuItemProgressVM → ViewModel. It exposes 6 public/protected members: 3 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuItemProgressVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu) the module directory; inheritance chain GameMenuItemProgressVM → ViewModel. The surface is method-led (methods 3/6, properties 3/6), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemProgressVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InitializeWith` | `public void InitializeWith(MenuContext context, int virtualIndex)` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnTick` | `public void OnTick()` | method |
| `Text` | `public string Text` | property |
| `ProgressText` | `public string ProgressText` | property |
| `Progress` | `public float Progress` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GameMenuItemVM](../GameMenuItemVM)
- [same namespace GameMenuPlunderItemVM](../GameMenuPlunderItemVM)
- [same namespace GameMenuVM](../GameMenuVM)
