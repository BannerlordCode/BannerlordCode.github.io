---
title: "LoadingWindowViewModel"
description: "LoadingWindowViewModel: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting ViewModel; 15 exposed members (3 methods, 9 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/LoadingWindowViewModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LoadingWindowViewModel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class LoadingWindowViewModel : ViewModel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/LoadingWindowViewModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

LoadingWindowViewModel lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/LoadingWindowViewModel.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is LoadingWindowViewModel → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 15 public/protected members: 3 methods, 9 properties, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LoadingWindowViewModel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI`, inheritance chain LoadingWindowViewModel → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 9/15, methods 3/15), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/LoadingWindowViewModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CurrentlyShowingMultiplayer` | `public bool CurrentlyShowingMultiplayer` | property |
| `LoadingWindowViewModel` | `public LoadingWindowViewModel(LoadingWindowViewModel.LoadImageDelegate loadImageDelegate, LoadingWindowViewModel.UnloadImageDelegate unloadImageDelegate)` | constructor |
| `SetTotalGenericImageCount` | `public void SetTotalGenericImageCount(int totalGenericImageCount)` | method |
| `Enabled` | `public bool Enabled` | property |
| `IsDevelopmentMode` | `public bool IsDevelopmentMode` | property |
| `TitleText` | `public string TitleText` | property |
| `GameModeText` | `public string GameModeText` | property |
| `DescriptionText` | `public string DescriptionText` | property |
| `IsMultiplayer` | `public bool IsMultiplayer` | property |
| `IsNavalDLCEnabled` | `public bool IsNavalDLCEnabled` | property |
| `LoadingImageName` | `public string LoadingImageName` | property |
| `UnloadImageDelegate` | `public delegate void UnloadImageDelegate(int index);` | method |
| `LoadImageDelegate` | `public delegate void LoadImageDelegate(int index, out string imageName);` | method |
| `UnloadImageDelegate` | `public delegate void UnloadImageDelegate(int index)` | nested type |
| `LoadImageDelegate` | `public delegate void LoadImageDelegate(int index, out string imageName)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ChatLogMessageManager](../ChatLogMessageManager/)
- [same namespace GamepadCursorViewModel](../GamepadCursorViewModel/)
- [same namespace GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen/)
- [same namespace GauntletCameraFadeView](../GauntletCameraFadeView/)
