---
title: "GamepadCursorViewModel"
description: "GamepadCursorViewModel: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting ViewModel; 4 exposed members (0 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/GamepadCursorViewModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GamepadCursorViewModel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GamepadCursorViewModel : ViewModel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GamepadCursorViewModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GamepadCursorViewModel lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/GamepadCursorViewModel.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GamepadCursorViewModel → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 4 public/protected members: 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GamepadCursorViewModel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI`, inheritance chain GamepadCursorViewModel → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/4, methods 0/4), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/GamepadCursorViewModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsConsoleMouseVisible` | `public bool IsConsoleMouseVisible` | property |
| `IsGamepadCursorVisible` | `public bool IsGamepadCursorVisible` | property |
| `CursorPositionX` | `public float CursorPositionX` | property |
| `CursorPositionY` | `public float CursorPositionY` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ChatLogMessageManager](../ChatLogMessageManager/)
- [same namespace GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen/)
- [same namespace GauntletCameraFadeView](../GauntletCameraFadeView/)
- [same namespace GauntletChatLogView](../GauntletChatLogView/)
