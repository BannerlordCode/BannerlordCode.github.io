---
title: "ILobbyClientSessionHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ILobbyClientSessionHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ILobbyClientSessionHandler

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/ILobbyClientSessionHandler.cs`

## Overview

`ILobbyClientSessionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `ILobbyClientSessionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
ILobbyClientSessionHandler implementation = GetLobbyClientSessionHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)