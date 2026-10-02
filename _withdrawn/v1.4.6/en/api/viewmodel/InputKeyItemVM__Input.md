---
title: "InputKeyItemVM"
description: "InputKeyItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Input, inheriting ViewModel; 13 exposed members (8 methods, 5 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Input/InputKeyItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InputKeyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Input`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class InputKeyItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Input/InputKeyItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

InputKeyItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Input/InputKeyItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is InputKeyItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 13 public/protected members: 8 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InputKeyItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Input`, inheritance chain InputKeyItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 8/13, properties 5/13), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Input/InputKeyItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GameKey` | `public GameKey GameKey` | property |
| `HotKey` | `public HotKey HotKey` | property |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `SetForcedVisibility` | `public void SetForcedVisibility(bool? isVisible)` | method |
| `CreateFromGameKey` | `public static InputKeyItemVM CreateFromGameKey(GameKey gameKey, bool isConsoleOnly)` | method |
| `CreateFromHotKey` | `public static InputKeyItemVM CreateFromHotKey(HotKey hotKey, bool isConsoleOnly)` | method |
| `CreateFromHotKeyWithForcedName` | `public static InputKeyItemVM CreateFromHotKeyWithForcedName(HotKey hotKey, TextObject forcedName, bool isConsoleOnly)` | method |
| `CreateFromGameKeyWithForcedName` | `public static InputKeyItemVM CreateFromGameKeyWithForcedName(GameKey gameKey, TextObject forcedName, bool isConsoleOnly)` | method |
| `CreateFromForcedID` | `public static InputKeyItemVM CreateFromForcedID(string forcedID, TextObject forcedName, bool isConsoleOnly)` | method |
| `KeyID` | `public string KeyID` | property |
| `KeyName` | `public string KeyName` | property |
| `IsVisible` | `public bool IsVisible` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
