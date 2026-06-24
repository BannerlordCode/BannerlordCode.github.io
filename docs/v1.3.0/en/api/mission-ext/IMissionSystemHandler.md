<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IMissionSystemHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IMissionSystemHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IMissionSystemHandler.cs`

## Overview

`IMissionSystemHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IMissionSystemHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IMissionSystemHandler implementation = GetMissionSystemHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)