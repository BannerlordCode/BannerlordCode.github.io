---
title: "GameMenuOverlay"
description: "GameMenuOverlay: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 20 exposed members (11 methods, 7 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlay.cs."
---
# GameMenuOverlay

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class GameMenuOverlay : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlay.cs`

## Overview

GameMenuOverlay lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlay.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameMenuOverlay → ViewModel. It exposes 20 public/protected members: 11 methods, 7 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuOverlay is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay) the module directory; inheritance chain GameMenuOverlay → ViewModel. The surface is method-led (methods 11/20, properties 7/20), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlay.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameMenuOverlay` | `public GameMenuOverlay()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteOnSetAsActiveContextMenuItem` | `protected virtual void ExecuteOnSetAsActiveContextMenuItem(GameMenuPartyItemVM troop)` | method |
| `ExecuteOnOverlayClosed` | `public virtual void ExecuteOnOverlayClosed()` | method |
| `ExecuteOnOverlayOpened` | `public virtual void ExecuteOnOverlayOpened()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `ExecuteTroopAction` | `protected void ExecuteTroopAction(object o)` | method |
| `Refresh` | `public virtual void Refresh()` | method |
| `UpdateOverlayType` | `public virtual void UpdateOverlayType(GameMenu.MenuOverlayType newType)` | method |
| `OnFrameTick` | `public virtual void OnFrameTick(float dt)` | method |
| `HourlyTick` | `public void HourlyTick()` | method |
| `IsContextMenuEnabled` | `public bool IsContextMenuEnabled` | property |
| `IsInitializationOver` | `public bool IsInitializationOver` | property |
| `IsInfoBarExtended` | `public bool IsInfoBarExtended` | property |
| `MBBindingList` | `public MBBindingList<StringItemWithEnabledAndHintVM>ContextList` | property |
| `CurrentOverlayType` | `public int CurrentOverlayType` | property |
| `SetExitInputKey` | `public void SetExitInputKey(HotKey hotKey)` | method |
| `ExitInputKey` | `public InputKeyItemVM ExitInputKey` | property |
| `MenuOverlayContextList` | `protected internal enum MenuOverlayContextList` | property |
| `MenuOverlayContextList` | `protected internal enum MenuOverlayContextList` | nested type |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyMenuOverlayVM](../ArmyMenuOverlayVM)
- [same namespace EncounterMenuOverlayVM](../EncounterMenuOverlayVM)
- [same namespace GameMenuOverlayActionVM](../GameMenuOverlayActionVM)
- [same namespace GameMenuOverlayFactory](../GameMenuOverlayFactory)
