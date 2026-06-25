---
title: "IConfigurationManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IConfigurationManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IConfigurationManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/IConfigurationManager.cs`

## Overview

`IConfigurationManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `IConfigurationManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IConfigurationManager implementation = GetConfigurationManagerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)