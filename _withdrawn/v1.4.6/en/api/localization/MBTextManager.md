---
title: "MBTextManager"
description: "MBTextManager: a public class in TaleWorlds.Localization; 21 exposed members (18 methods, 2 properties, 1 fields). Canonical bucket localization. Source: TaleWorlds.Localization/MBTextManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBTextManager

**Namespace:** `TaleWorlds.Localization`
**Module:** `TaleWorlds.Localization`
**Type:** `public static class MBTextManager`
**File:** `TaleWorlds.Localization/MBTextManager.cs`
**Bucket:** `localization` (rule:TaleWorlds.Localization)

## Overview

MBTextManager lives in the TaleWorlds.Localization module, source file TaleWorlds.Localization/MBTextManager.cs. It is a public class; the inheritance chain is MBTextManager. It exposes 21 public/protected members: 18 methods, 2 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBTextManager lands in canonical bucket `localization` (matched rule `rule:TaleWorlds.Localization`), namespace `TaleWorlds.Localization`, inheritance chain MBTextManager. The surface is method-led (methods 18/21, properties 2/21), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Localization/MBTextManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ActiveTextLanguage` | `public static string ActiveTextLanguage` | property |
| `LocalizationDebugMode` | `public static bool LocalizationDebugMode` | property |
| `LanguageExistsInCurrentConfiguration` | `public static bool LanguageExistsInCurrentConfiguration(string language, bool developmentMode)` | method |
| `ChangeLanguage` | `public static bool ChangeLanguage(string language)` | method |
| `GetActiveTextLanguageIndex` | `public static int GetActiveTextLanguageIndex()` | method |
| `TryChangeVoiceLanguage` | `public static bool TryChangeVoiceLanguage(string language)` | method |
| `ClearAll` | `public static void ClearAll()` | method |
| `SetTextVariable` | `public static void SetTextVariable(string variableName, string text, bool sendClients = false)` | method |
| `SetTextVariable` | `public static void SetTextVariable(string variableName, TextObject text, bool sendClients = false)` | method |
| `SetTextVariable` | `public static void SetTextVariable(string variableName, int content)` | method |
| `SetTextVariable` | `public static void SetTextVariable(string variableName, float content, int decimalDigits = 2)` | method |
| `SetTextVariable` | `public static void SetTextVariable(string variableName, object content)` | method |
| `SetTextVariable` | `public static void SetTextVariable(string variableName, int arrayIndex, object content)` | method |
| `SetFunction` | `public static void SetFunction(string funcName, string functionBody)` | method |
| `ResetFunctions` | `public static void ResetFunctions()` | method |
| `ThrowLocalizationError` | `public static void ThrowLocalizationError(string message)` | method |
| `DiscardAnimationTagsAndCheckAnimationTagPositions` | `public static string DiscardAnimationTagsAndCheckAnimationTagPositions(string text)` | method |
| `DiscardAnimationTags` | `public static string DiscardAnimationTags(string text)` | method |
| `string[]GetConversationAnimations` | `public static string[]GetConversationAnimations(TextObject to)` | method |
| `TryGetVoiceObject` | `public static bool TryGetVoiceObject(TextObject to, out VoiceObject vo, out string vocalizationId)` | method |
| `LinkAttribute` | `public const string LinkAttribute` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DateRange](../DateRange/)
- [same namespace LocalizationException](../LocalizationException/)
- [same namespace LocalizedTextManager](../LocalizedTextManager/)
- [same namespace LocalizedVoiceManager](../LocalizedVoiceManager/)
