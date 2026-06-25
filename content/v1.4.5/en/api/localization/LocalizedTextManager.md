---
title: "LocalizedTextManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LocalizedTextManager`
- [← Area / Back to localization](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LocalizedTextManager

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public static class LocalizedTextManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization/LocalizedTextManager.cs`

## Overview

`LocalizedTextManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `LocalizedTextManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTranslatedText
`public static string GetTranslatedText(string languageId, string id)`

**Purpose:** Gets the current value of `translated text`.

### GetLanguageIds
`public static List<string> GetLanguageIds(bool developmentMode)`

**Purpose:** Gets the current value of `language ids`.

### GetLanguageTitle
`public static string GetLanguageTitle(string id)`

**Purpose:** Gets the current value of `language title`.

### CreateTextProcessorForLanguage
`public static LanguageSpecificTextProcessor CreateTextProcessorForLanguage(string id)`

**Purpose:** Creates a new `text processor for language` instance or object.

### AddLanguageTest
`public static void AddLanguageTest(string id, string processor)`

**Purpose:** Adds `language test` to the current collection or state.

### GetLanguageIndex
`public static int GetLanguageIndex(string id)`

**Purpose:** Gets the current value of `language index`.

### LoadLocalizationXmls
`public static void LoadLocalizationXmls(string loadedModules)`

**Purpose:** Loads `localization xmls` data.

### AddLocalizationXml
`public static void AddLocalizationXml(string newModule)`

**Purpose:** Adds `localization xml` to the current collection or state.

### GetDateFormattedByLanguage
`public static string GetDateFormattedByLanguage(string languageCode, DateTime dateTime)`

**Purpose:** Gets the current value of `date formatted by language`.

### GetTimeFormattedByLanguage
`public static string GetTimeFormattedByLanguage(string languageCode, DateTime dateTime)`

**Purpose:** Gets the current value of `time formatted by language`.

### GetSubtitleExtensionOfLanguage
`public static string GetSubtitleExtensionOfLanguage(string languageId)`

**Purpose:** Gets the current value of `subtitle extension of language`.

### GetLocalizationCodeOfISOLanguageCode
`public static string GetLocalizationCodeOfISOLanguageCode(string isoLanguageCode)`

**Purpose:** Gets the current value of `localization code of i s o language code`.

### ChangeLanguage
`public static string ChangeLanguage(List<string> strings)`

**Purpose:** Handles logic related to `change language`.

### ReloadTexts
`public static string ReloadTexts(List<string> strings)`

**Purpose:** Handles logic related to `reload texts`.

### CheckValidity
`public static string CheckValidity(List<string> strings)`

**Purpose:** Handles logic related to `check validity`.

### CheckValidity
`public static bool CheckValidity(string id, string text, out string errorLine)`

**Purpose:** Handles logic related to `check validity`.

## Usage Example

```csharp
var manager = LocalizedTextManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)