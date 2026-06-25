---
title: "UISoundsHelper"
description: "Auto-generated class reference for UISoundsHelper."
---
# UISoundsHelper

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class UISoundsHelper`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/UISoundsHelper.cs`

## Overview

`UISoundsHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `UISoundsHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### PlayUISound
`public static void PlayUISound(string soundName)`

**Purpose:** Executes the PlayUISound logic.

```csharp
// Static call; no instance required
UISoundsHelper.PlayUISound("example");
```

## Usage Example

```csharp
UISoundsHelper.Initialize();
```

## See Also

- [Area Index](../)