---
title: "LocalizedTextManager"
description: "Auto-generated class reference for LocalizedTextManager."
---
# LocalizedTextManager

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public static class LocalizedTextManager`
**Base:** none
**File:** `bin/TaleWorlds.Localization/TaleWorlds.Localization/LocalizedTextManager.cs`

## Overview

`LocalizedTextManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `LocalizedTextManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTranslatedText
`public static string GetTranslatedText(string languageId, string id)`

**Purpose:** Reads and returns the translated text value held by the this instance.

```csharp
// Static call; no instance required
LocalizedTextManager.GetTranslatedText("example", "example");
```

### GetLanguageIds
`public static List<string> GetLanguageIds(bool developmentMode)`

**Purpose:** Reads and returns the language ids value held by the this instance.

```csharp
// Static call; no instance required
LocalizedTextManager.GetLanguageIds(false);
```

### GetLanguageTitle
`public static string GetLanguageTitle(string id)`

**Purpose:** Reads and returns the language title value held by the this instance.

```csharp
// Static call; no instance required
LocalizedTextManager.GetLanguageTitle("example");
```

### CreateTextProcessorForLanguage
`public static LanguageSpecificTextProcessor CreateTextProcessorForLanguage(string id)`

**Purpose:** Constructs a new text processor for language entity and returns it to the caller.

```csharp
// Static call; no instance required
LocalizedTextManager.CreateTextProcessorForLanguage("example");
```

### AddLanguageTest
`public static void AddLanguageTest(string id, string processor)`

**Purpose:** Adds language test to the current collection or state.

```csharp
// Static call; no instance required
LocalizedTextManager.AddLanguageTest("example", "example");
```

### GetLanguageIndex
`public static int GetLanguageIndex(string id)`

**Purpose:** Reads and returns the language index value held by the this instance.

```csharp
// Static call; no instance required
LocalizedTextManager.GetLanguageIndex("example");
```

### LoadLocalizationXmls
`public static void LoadLocalizationXmls(string loadedModules)`

**Purpose:** Reads localization xmls from persistent storage or a stream.

```csharp
// Static call; no instance required
LocalizedTextManager.LoadLocalizationXmls("example");
```

### AddLocalizationXml
`public static void AddLocalizationXml(string newModule)`

**Purpose:** Adds localization xml to the current collection or state.

```csharp
// Static call; no instance required
LocalizedTextManager.AddLocalizationXml("example");
```

### GetDateFormattedByLanguage
`public static string GetDateFormattedByLanguage(string languageCode, DateTime dateTime)`

**Purpose:** Reads and returns the date formatted by language value held by the this instance.

```csharp
// Static call; no instance required
LocalizedTextManager.GetDateFormattedByLanguage("example", dateTime);
```

### GetTimeFormattedByLanguage
`public static string GetTimeFormattedByLanguage(string languageCode, DateTime dateTime)`

**Purpose:** Reads and returns the time formatted by language value held by the this instance.

```csharp
// Static call; no instance required
LocalizedTextManager.GetTimeFormattedByLanguage("example", dateTime);
```

### GetSubtitleExtensionOfLanguage
`public static string GetSubtitleExtensionOfLanguage(string languageId)`

**Purpose:** Reads and returns the subtitle extension of language value held by the this instance.

```csharp
// Static call; no instance required
LocalizedTextManager.GetSubtitleExtensionOfLanguage("example");
```

### GetLocalizationCodeOfISOLanguageCode
`public static string GetLocalizationCodeOfISOLanguageCode(string isoLanguageCode)`

**Purpose:** Reads and returns the localization code of i s o language code value held by the this instance.

```csharp
// Static call; no instance required
LocalizedTextManager.GetLocalizationCodeOfISOLanguageCode("example");
```

### ChangeLanguage
`public static string ChangeLanguage(List<string> strings)`

**Purpose:** Executes the ChangeLanguage logic.

```csharp
// Static call; no instance required
LocalizedTextManager.ChangeLanguage(strings);
```

### ReloadTexts
`public static string ReloadTexts(List<string> strings)`

**Purpose:** Executes the ReloadTexts logic.

```csharp
// Static call; no instance required
LocalizedTextManager.ReloadTexts(strings);
```

### CheckValidity
`public static string CheckValidity(List<string> strings)`

**Purpose:** Verifies whether validity holds true for the this instance.

```csharp
// Static call; no instance required
LocalizedTextManager.CheckValidity(strings);
```

### CheckValidity
`public static bool CheckValidity(string id, string text, out string errorLine)`

**Purpose:** Verifies whether validity holds true for the this instance.

```csharp
// Static call; no instance required
LocalizedTextManager.CheckValidity("example", "example", errorLine);
```

## Usage Example

```csharp
var manager = LocalizedTextManager.Current;
```

## See Also

- [Area Index](../)