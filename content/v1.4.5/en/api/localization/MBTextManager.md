---
title: "MBTextManager"
description: "Auto-generated class reference for MBTextManager."
---
# MBTextManager

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public static class MBTextManager`
**Base:** none
**File:** `bin/TaleWorlds.Localization/TaleWorlds.Localization/MBTextManager.cs`

## Overview

`MBTextManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MBTextManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `LocalizationDebugMode` | `public static bool LocalizationDebugMode { get; set; }` |

## Key Methods

### LanguageExistsInCurrentConfiguration
`public static bool LanguageExistsInCurrentConfiguration(string language, bool developmentMode)`

**Purpose:** Executes the LanguageExistsInCurrentConfiguration logic.

```csharp
// Static call; no instance required
MBTextManager.LanguageExistsInCurrentConfiguration("example", false);
```

### ChangeLanguage
`public static bool ChangeLanguage(string language)`

**Purpose:** Executes the ChangeLanguage logic.

```csharp
// Static call; no instance required
MBTextManager.ChangeLanguage("example");
```

### GetActiveTextLanguageIndex
`public static int GetActiveTextLanguageIndex()`

**Purpose:** Reads and returns the active text language index value held by the this instance.

```csharp
// Static call; no instance required
MBTextManager.GetActiveTextLanguageIndex();
```

### TryChangeVoiceLanguage
`public static bool TryChangeVoiceLanguage(string language)`

**Purpose:** Attempts to retrieve change voice language, usually returning success through an out parameter.

```csharp
// Static call; no instance required
MBTextManager.TryChangeVoiceLanguage("example");
```

### ClearAll
`public static void ClearAll()`

**Purpose:** Removes all all from the this instance.

```csharp
// Static call; no instance required
MBTextManager.ClearAll();
```

### SetTextVariable
`public static void SetTextVariable(string variableName, string text, bool sendClients = false)`

**Purpose:** Assigns a new value to text variable and updates the object's internal state.

```csharp
// Static call; no instance required
MBTextManager.SetTextVariable("example", "example", false);
```

### SetTextVariable
`public static void SetTextVariable(string variableName, TextObject text, bool sendClients = false)`

**Purpose:** Assigns a new value to text variable and updates the object's internal state.

```csharp
// Static call; no instance required
MBTextManager.SetTextVariable("example", text, false);
```

### SetTextVariable
`public static void SetTextVariable(string variableName, int content)`

**Purpose:** Assigns a new value to text variable and updates the object's internal state.

```csharp
// Static call; no instance required
MBTextManager.SetTextVariable("example", 0);
```

### SetTextVariable
`public static void SetTextVariable(string variableName, float content, int decimalDigits = 2)`

**Purpose:** Assigns a new value to text variable and updates the object's internal state.

```csharp
// Static call; no instance required
MBTextManager.SetTextVariable("example", 0, 0);
```

### SetTextVariable
`public static void SetTextVariable(string variableName, object content)`

**Purpose:** Assigns a new value to text variable and updates the object's internal state.

```csharp
// Static call; no instance required
MBTextManager.SetTextVariable("example", content);
```

### SetTextVariable
`public static void SetTextVariable(string variableName, int arrayIndex, object content)`

**Purpose:** Assigns a new value to text variable and updates the object's internal state.

```csharp
// Static call; no instance required
MBTextManager.SetTextVariable("example", 0, content);
```

### SetFunction
`public static void SetFunction(string funcName, string functionBody)`

**Purpose:** Assigns a new value to function and updates the object's internal state.

```csharp
// Static call; no instance required
MBTextManager.SetFunction("example", "example");
```

### ResetFunctions
`public static void ResetFunctions()`

**Purpose:** Returns functions to its default or initial condition.

```csharp
// Static call; no instance required
MBTextManager.ResetFunctions();
```

### ThrowLocalizationError
`public static void ThrowLocalizationError(string message)`

**Purpose:** Executes the ThrowLocalizationError logic.

```csharp
// Static call; no instance required
MBTextManager.ThrowLocalizationError("example");
```

### DiscardAnimationTagsAndCheckAnimationTagPositions
`public static string DiscardAnimationTagsAndCheckAnimationTagPositions(string text)`

**Purpose:** Executes the DiscardAnimationTagsAndCheckAnimationTagPositions logic.

```csharp
// Static call; no instance required
MBTextManager.DiscardAnimationTagsAndCheckAnimationTagPositions("example");
```

### DiscardAnimationTags
`public static string DiscardAnimationTags(string text)`

**Purpose:** Executes the DiscardAnimationTags logic.

```csharp
// Static call; no instance required
MBTextManager.DiscardAnimationTags("example");
```

## Usage Example

```csharp
var manager = MBTextManager.Current;
```

## See Also

- [Area Index](../)