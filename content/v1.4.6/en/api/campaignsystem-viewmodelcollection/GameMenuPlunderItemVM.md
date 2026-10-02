---
title: "GameMenuPlunderItemVM"
description: "GameMenuPlunderItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 5 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuPlunderItemVM.cs."
---
# GameMenuPlunderItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class GameMenuPlunderItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuPlunderItemVM.cs`

## Overview

GameMenuPlunderItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuPlunderItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameMenuPlunderItemVM → ViewModel. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuPlunderItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu) the module directory; inheritance chain GameMenuPlunderItemVM → ViewModel. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuPlunderItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameMenuPlunderItemVM` | `public GameMenuPlunderItemVM(EquipmentElement item, int amount = 1)` | constructor |
| `ExecuteBeginTooltip` | `public void ExecuteBeginTooltip()` | method |
| `ExecuteEndTooltip` | `public void ExecuteEndTooltip()` | method |
| `Visual` | `public ItemImageIdentifierVM Visual` | property |
| `Amount` | `public int Amount` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GameMenuItemProgressVM](../GameMenuItemProgressVM)
- [same namespace GameMenuItemVM](../GameMenuItemVM)
- [same namespace GameMenuVM](../GameMenuVM)
