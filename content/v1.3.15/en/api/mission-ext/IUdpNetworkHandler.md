---
title: "IUdpNetworkHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IUdpNetworkHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IUdpNetworkHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IUdpNetworkHandler.cs`

## Overview

`IUdpNetworkHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IUdpNetworkHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IUdpNetworkHandler implementation = GetUdpNetworkHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)