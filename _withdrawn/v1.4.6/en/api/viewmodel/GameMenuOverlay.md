---
title: "GameMenuOverlay"
description: "GameMenuOverlay: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay, inheriting ViewModel; 20 exposed members (11 methods, 7 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlay.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameMenuOverlay

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class GameMenuOverlay : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlay.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

GameMenuOverlay lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlay.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameMenuOverlay → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 20 public/protected members: 11 methods, 7 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuOverlay lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`, inheritance chain GameMenuOverlay → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 11/20, properties 7/20), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlay.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ArmyMenuOverlayVM](../ArmyMenuOverlayVM/)
- [same namespace EncounterMenuOverlayVM](../EncounterMenuOverlayVM/)
- [same namespace GameMenuOverlayActionVM](../GameMenuOverlayActionVM/)
- [same namespace GameMenuOverlayFactory](../GameMenuOverlayFactory/)
