---
title: "ConfigurationManager"
description: "Auto-generated class reference for ConfigurationManager."
---
# ConfigurationManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class ConfigurationManager`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/ConfigurationManager.cs`

## Overview

`ConfigurationManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ConfigurationManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetConfigurationManager
`public static void SetConfigurationManager(IConfigurationManager configurationManager)`

**Purpose:** Assigns a new value to `configuration manager` and updates the object's internal state.

```csharp
// Static call; no instance required
ConfigurationManager.SetConfigurationManager(configurationManager);
```

### GetAppSettings
`public static string GetAppSettings(string name)`

**Purpose:** Reads and returns the `app settings` value held by the current object.

```csharp
// Static call; no instance required
ConfigurationManager.GetAppSettings("example");
```

## Usage Example

```csharp
var manager = ConfigurationManager.Current;
```

## See Also

- [Area Index](../)