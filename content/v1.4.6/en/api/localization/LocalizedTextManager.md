---
title: "LocalizedTextManager"
description: "LocalizedTextManager: a public class in TaleWorlds.Localization; 18 exposed members (16 methods, 0 properties, 2 fields). Source: TaleWorlds.Localization/LocalizedTextManager.cs."
---
# LocalizedTextManager

**Namespace:** `TaleWorlds.Localization`
**Module:** `TaleWorlds.Localization`
**Type:** `public static class LocalizedTextManager`
**File:** `TaleWorlds.Localization/LocalizedTextManager.cs`

## Overview

LocalizedTextManager lives in the TaleWorlds.Localization module, source file TaleWorlds.Localization/LocalizedTextManager.cs. It is a public class; the inheritance chain is LocalizedTextManager. It exposes 18 public/protected members: 16 methods, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LocalizedTextManager is a top-level type in TaleWorlds.Localization, namespace matching the module directory; inheritance chain LocalizedTextManager. The surface is method-led (methods 16/18, properties 0/18), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Localization/LocalizedTextManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetTranslatedText` | `public static string GetTranslatedText(string languageId, string id)` | method |
| `List` | `public static List<string>GetLanguageIds(bool developmentMode)` | method |
| `GetLanguageTitle` | `public static string GetLanguageTitle(string id)` | method |
| `CreateTextProcessorForLanguage` | `public static LanguageSpecificTextProcessor CreateTextProcessorForLanguage(string id)` | method |
| `AddLanguageTest` | `public static void AddLanguageTest(string id, string processor)` | method |
| `GetLanguageIndex` | `public static int GetLanguageIndex(string id)` | method |
| `LoadLocalizationXmls` | `public static void LoadLocalizationXmls(string[]loadedModules)` | method |
| `AddLocalizationXml` | `public static void AddLocalizationXml(string newModule)` | method |
| `GetDateFormattedByLanguage` | `public static string GetDateFormattedByLanguage(string languageCode, DateTime dateTime)` | method |
| `GetTimeFormattedByLanguage` | `public static string GetTimeFormattedByLanguage(string languageCode, DateTime dateTime)` | method |
| `GetSubtitleExtensionOfLanguage` | `public static string GetSubtitleExtensionOfLanguage(string languageId)` | method |
| `GetLocalizationCodeOfISOLanguageCode` | `public static string GetLocalizationCodeOfISOLanguageCode(string isoLanguageCode)` | method |
| `ChangeLanguage` | `public static string ChangeLanguage(List<string>strings)` | method |
| `ReloadTexts` | `public static string ReloadTexts(List<string>strings)` | method |
| `CheckValidity` | `public static string CheckValidity(List<string>strings)` | method |
| `CheckValidity` | `public static bool CheckValidity(string id, string text, out string errorLine)` | method |
| `LanguageDataFileName` | `public const string LanguageDataFileName` | field |
| `DefaultEnglishLanguageId` | `public const string DefaultEnglishLanguageId` | field |

## See Also

- [↑ localization module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DateRange](../DateRange)
- [same namespace LocalizationException](../LocalizationException)
- [same namespace LocalizedVoiceManager](../LocalizedVoiceManager)
- [same namespace MBTextManager](../MBTextManager)
