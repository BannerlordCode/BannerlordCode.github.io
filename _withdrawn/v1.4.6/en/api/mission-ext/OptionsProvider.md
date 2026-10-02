---
title: "OptionsProvider"
description: "OptionsProvider: a public class in TaleWorlds.MountAndBlade.Options; 13 exposed members (13 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Options/OptionsProvider.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OptionsProvider

**Namespace:** `TaleWorlds.MountAndBlade.Options`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class OptionsProvider`
**File:** `TaleWorlds.MountAndBlade/Options/OptionsProvider.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

OptionsProvider lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Options/OptionsProvider.cs. It is a public class; the inheritance chain is OptionsProvider. It exposes 13 public/protected members: 13 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OptionsProvider lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Options`, inheritance chain OptionsProvider. The surface is method-led (methods 13/13, properties 0/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Options/OptionsProvider.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetVideoOptionCategory` | `public static OptionCategory GetVideoOptionCategory(bool isMainMenu, Action onBrightnessClick, Action onExposureClick, Action onBenchmarkClick)` | method |
| `GetPerformanceOptionCategory` | `public static OptionCategory GetPerformanceOptionCategory(bool isMultiplayer)` | method |
| `IEnumerable` | `public static IEnumerable<IOptionData>GetPerformanceGraphicsOptions(bool isMultiplayer)` | method |
| `IEnumerable` | `public static IEnumerable<IOptionData>GetPerformanceResolutionScalingOptions(bool isMultiplayer)` | method |
| `IEnumerable` | `public static IEnumerable<IOptionData>GetPerformanceGameplayOptions(bool isMultiplayer)` | method |
| `IEnumerable` | `public static IEnumerable<IOptionData>GetPerformanceAudioOptions()` | method |
| `GetAudioOptionCategory` | `public static OptionCategory GetAudioOptionCategory(bool isMultiplayer)` | method |
| `GetGameplayOptionCategory` | `public static OptionCategory GetGameplayOptionCategory(bool isMainMenu, bool isMultiplayer)` | method |
| `IEnumerable` | `public static IEnumerable<string>GetGameKeyCategoriesList(bool isMultiplayer)` | method |
| `IEnumerable` | `public static IEnumerable<int>GetHiddenGameKeys(bool isNavalModuleActive)` | method |
| `GetControllerOptionCategory` | `public static OptionCategory GetControllerOptionCategory()` | method |
| `float[]>GetDefaultNativeOptions` | `public static Dictionary<NativeOptions.NativeOptionsType, float[]>GetDefaultNativeOptions()` | method |
| `float[]>GetDefaultManagedOptions` | `public static Dictionary<ManagedOptions.ManagedOptionsType, float[]>GetDefaultManagedOptions()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionOptionData](../ActionOptionData/)
- [same namespace OptionCategory](../OptionCategory/)
- [same namespace OptionGroup](../OptionGroup/)
