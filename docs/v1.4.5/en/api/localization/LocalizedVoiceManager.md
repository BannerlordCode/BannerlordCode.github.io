<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LocalizedVoiceManager`
- [← Area / Back to localization](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LocalizedVoiceManager

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public static class LocalizedVoiceManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization/LocalizedVoiceManager.cs`

## Overview

`LocalizedVoiceManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `LocalizedVoiceManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetLocalizedVoice
`public static VoiceObject GetLocalizedVoice(string id)`

**Purpose:** Gets the current value of `localized voice`.

### GetVoiceLanguageIds
`public static List<string> GetVoiceLanguageIds()`

**Purpose:** Gets the current value of `voice language ids`.

## Usage Example

```csharp
var manager = LocalizedVoiceManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)