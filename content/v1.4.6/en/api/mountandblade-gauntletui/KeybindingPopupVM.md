---
title: "KeybindingPopupVM"
description: "KeybindingPopupVM: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting ViewModel; 5 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/KeybindingPopupVM.cs."
---
# KeybindingPopupVM

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class KeybindingPopupVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/KeybindingPopupVM.cs`

## Overview

KeybindingPopupVM lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/KeybindingPopupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is KeybindingPopupVM → ViewModel. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KeybindingPopupVM is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace matching the module directory; inheritance chain KeybindingPopupVM → ViewModel. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/KeybindingPopupVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KeybindingPopupVM` | `public KeybindingPopupVM(Action onCancel)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteCancel` | `public void ExecuteCancel()` | method |
| `PressKeyText` | `public string PressKeyText` | property |
| `CancelText` | `public string CancelText` | property |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ChatLogMessageManager](../ChatLogMessageManager)
- [same namespace GamepadCursorViewModel](../GamepadCursorViewModel)
- [same namespace GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen)
- [same namespace GauntletCameraFadeView](../GauntletCameraFadeView)
