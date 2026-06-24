<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IMusicHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IMusicHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IMusicHandler.cs`

## Overview

`IMusicHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IMusicHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IMusicHandler implementation = GetMusicHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)