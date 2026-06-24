<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConfigurationManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConfigurationManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class ConfigurationManager`
**Base:** none
**File:** `TaleWorlds.Library/ConfigurationManager.cs`

## Overview

`ConfigurationManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ConfigurationManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetConfigurationManager
`public static void SetConfigurationManager(IConfigurationManager configurationManager)`

**Purpose:** Sets the value or state of `configuration manager`.

### GetAppSettings
`public static string GetAppSettings(string name)`

**Purpose:** Gets the current value of `app settings`.

## Usage Example

```csharp
var manager = ConfigurationManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)