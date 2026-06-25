---
title: "MultiplayerPlayerHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerPlayerHelper`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerPlayerHelper

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerPlayerHelper`
**Base:** none
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerPlayerHelper.cs`

## Overview

`MultiplayerPlayerHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MultiplayerPlayerHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsBlocked
`public static bool IsBlocked(PlayerId playerID)`

**Purpose:** Handles logic related to `is blocked`.

## Usage Example

```csharp
MultiplayerPlayerHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)