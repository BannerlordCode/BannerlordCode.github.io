<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ICommunityClientHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ICommunityClientHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/ICommunityClientHandler.cs`

## Overview

`ICommunityClientHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `ICommunityClientHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
ICommunityClientHandler implementation = GetCommunityClientHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)