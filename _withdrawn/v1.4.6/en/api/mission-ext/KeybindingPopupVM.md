---
title: "KeybindingPopupVM"
description: "KeybindingPopupVM: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting ViewModel; 5 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/KeybindingPopupVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KeybindingPopupVM

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class KeybindingPopupVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/KeybindingPopupVM.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

KeybindingPopupVM lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/KeybindingPopupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is KeybindingPopupVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KeybindingPopupVM lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI`, inheritance chain KeybindingPopupVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/KeybindingPopupVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `KeybindingPopupVM` | `public KeybindingPopupVM(Action onCancel)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteCancel` | `public void ExecuteCancel()` | method |
| `PressKeyText` | `public string PressKeyText` | property |
| `CancelText` | `public string CancelText` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ChatLogMessageManager](../ChatLogMessageManager/)
- [same namespace GamepadCursorViewModel](../GamepadCursorViewModel/)
- [same namespace GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen/)
- [same namespace GauntletCameraFadeView](../GauntletCameraFadeView/)
