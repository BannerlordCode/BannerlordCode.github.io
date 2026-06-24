<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ILobbyStateHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ILobbyStateHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/ILobbyStateHandler.cs`

## Overview

`ILobbyStateHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `ILobbyStateHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
ILobbyStateHandler implementation = GetLobbyStateHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)