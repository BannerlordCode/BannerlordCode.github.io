<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConfigurationManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConfigurationManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class ConfigurationManager`
**Base:** none
**File:** `TaleWorlds.Library/ConfigurationManager.cs`

## Overview

`ConfigurationManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### SetConfigurationManager
```csharp
public static void SetConfigurationManager(IConfigurationManager configurationManager)
```

### GetAppSettings
```csharp
public static string GetAppSettings(string name)
```

## Usage Example

```csharp
// Typical usage of ConfigurationManager (Manager)
ConfigurationManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)