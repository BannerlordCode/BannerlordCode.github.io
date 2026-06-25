---
title: "ILobbyStateHandler"
description: "Auto-generated class reference for ILobbyStateHandler."
---
# ILobbyStateHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface ILobbyStateHandler`
**Base:** none
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/ILobbyStateHandler.cs`

## Overview

`ILobbyStateHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `ILobbyStateHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IILobbyStateHandler service = ...;
```

## See Also

- [Area Index](../)