---
title: "LocalizedVoiceManager"
description: "Auto-generated class reference for LocalizedVoiceManager."
---
# LocalizedVoiceManager

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public static class LocalizedVoiceManager`
**Base:** none
**File:** `TaleWorlds.Localization/LocalizedVoiceManager.cs`

## Overview

`LocalizedVoiceManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `LocalizedVoiceManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetLocalizedVoice
`public static VoiceObject GetLocalizedVoice(string id)`

**Purpose:** Reads and returns the `localized voice` value held by the current object.

```csharp
// Static call; no instance required
LocalizedVoiceManager.GetLocalizedVoice("example");
```

### GetVoiceLanguageIds
`public static List<string> GetVoiceLanguageIds()`

**Purpose:** Reads and returns the `voice language ids` value held by the current object.

```csharp
// Static call; no instance required
LocalizedVoiceManager.GetVoiceLanguageIds();
```

## Usage Example

```csharp
var manager = LocalizedVoiceManager.Current;
```

## See Also

- [Area Index](../)