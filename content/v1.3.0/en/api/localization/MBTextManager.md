---
title: "MBTextManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBTextManager`
- [← Area / Back to localization](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBTextManager

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public static class MBTextManager`
**Base:** none
**File:** `TaleWorlds.Localization/MBTextManager.cs`

## Overview

`MBTextManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MBTextManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveTextLanguage` | `public static string ActiveTextLanguage { get; set; }` |
| `LocalizationDebugMode` | `public static bool LocalizationDebugMode { get; set; }` |

## Key Methods

### LanguageExistsInCurrentConfiguration
`public static bool LanguageExistsInCurrentConfiguration(string language, bool developmentMode)`

**Purpose:** Handles logic related to `language exists in current configuration`.

### ChangeLanguage
`public static bool ChangeLanguage(string language)`

**Purpose:** Handles logic related to `change language`.

### GetActiveTextLanguageIndex
`public static int GetActiveTextLanguageIndex()`

**Purpose:** Gets the current value of `active text language index`.

### TryChangeVoiceLanguage
`public static bool TryChangeVoiceLanguage(string language)`

**Purpose:** Attempts to get `change voice language`, usually returning the result in an out parameter.

### ClearAll
`public static void ClearAll()`

**Purpose:** Handles logic related to `clear all`.

### SetTextVariable
`public static void SetTextVariable(string variableName, string text, bool sendClients = false)`

**Purpose:** Sets the value or state of `text variable`.

### SetTextVariable
`public static void SetTextVariable(string variableName, TextObject text, bool sendClients = false)`

**Purpose:** Sets the value or state of `text variable`.

### SetTextVariable
`public static void SetTextVariable(string variableName, int content)`

**Purpose:** Sets the value or state of `text variable`.

### SetTextVariable
`public static void SetTextVariable(string variableName, float content, int decimalDigits = 2)`

**Purpose:** Sets the value or state of `text variable`.

### SetTextVariable
`public static void SetTextVariable(string variableName, object content)`

**Purpose:** Sets the value or state of `text variable`.

### SetTextVariable
`public static void SetTextVariable(string variableName, int arrayIndex, object content)`

**Purpose:** Sets the value or state of `text variable`.

### SetFunction
`public static void SetFunction(string funcName, string functionBody)`

**Purpose:** Sets the value or state of `function`.

### ResetFunctions
`public static void ResetFunctions()`

**Purpose:** Resets `functions` to its initial state.

### ThrowLocalizationError
`public static void ThrowLocalizationError(string message)`

**Purpose:** Handles logic related to `throw localization error`.

### DiscardAnimationTagsAndCheckAnimationTagPositions
`public static string DiscardAnimationTagsAndCheckAnimationTagPositions(string text)`

**Purpose:** Handles logic related to `discard animation tags and check animation tag positions`.

### DiscardAnimationTags
`public static string DiscardAnimationTags(string text)`

**Purpose:** Handles logic related to `discard animation tags`.

### GetConversationAnimations
`public static string GetConversationAnimations(TextObject to)`

**Purpose:** Gets the current value of `conversation animations`.

### TryGetVoiceObject
`public static bool TryGetVoiceObject(TextObject to, out VoiceObject vo, out string vocalizationId)`

**Purpose:** Attempts to get `get voice object`, usually returning the result in an out parameter.

## Usage Example

```csharp
var manager = MBTextManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)