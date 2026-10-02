---
title: "NativeConfig"
description: "NativeConfig: a public class in TaleWorlds.Engine; 20 exposed members (2 methods, 18 properties, 0 fields). Source: TaleWorlds.Engine/NativeConfig.cs."
---
# NativeConfig

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public static class NativeConfig`
**File:** `TaleWorlds.Engine/NativeConfig.cs`

## Overview

NativeConfig lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/NativeConfig.cs. It is a public class; the inheritance chain is NativeConfig. It exposes 20 public/protected members: 2 methods, 18 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NativeConfig is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain NativeConfig. The surface is property-led (properties 18/20, methods 2/20), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/NativeConfig.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CheatMode` | `public static bool CheatMode` | property |
| `IsDevelopmentMode` | `public static bool IsDevelopmentMode` | property |
| `LocalizationDebugMode` | `public static bool LocalizationDebugMode` | property |
| `GetUIDebugMode` | `public static bool GetUIDebugMode` | property |
| `DisableSound` | `public static bool DisableSound` | property |
| `EnableEditMode` | `public static bool EnableEditMode` | property |
| `OnConfigChanged` | `public static void OnConfigChanged()` | method |
| `TableauCacheEnabled` | `public static bool TableauCacheEnabled` | property |
| `DoLocalizationCheckAtStartup` | `public static bool DoLocalizationCheckAtStartup` | property |
| `EnableClothSimulation` | `public static bool EnableClothSimulation` | property |
| `CharacterDetail` | `public static int CharacterDetail` | property |
| `InvertMouse` | `public static bool InvertMouse` | property |
| `LastOpenedScene` | `public static string LastOpenedScene` | property |
| `AutoSaveInMinutes` | `public static int AutoSaveInMinutes` | property |
| `GetUIDoNotUseGeneratedPrefabs` | `public static bool GetUIDoNotUseGeneratedPrefabs` | property |
| `DebugLoginUsername` | `public static string DebugLoginUsername` | property |
| `DebugLogicPassword` | `public static string DebugLogicPassword` | property |
| `DisableGuiMessages` | `public static bool DisableGuiMessages` | property |
| `AutoGFXQuality` | `public static NativeOptions.ConfigQuality AutoGFXQuality` | property |
| `SetAutoConfigWrtHardware` | `public static void SetAutoConfigWrtHardware()` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
