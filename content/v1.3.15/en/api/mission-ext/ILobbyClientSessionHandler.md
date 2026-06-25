---
title: "ILobbyClientSessionHandler"
description: "Auto-generated class reference for ILobbyClientSessionHandler."
---
# ILobbyClientSessionHandler

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface ILobbyClientSessionHandler`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/ILobbyClientSessionHandler.cs`

## Overview

`ILobbyClientSessionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `ILobbyClientSessionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IILobbyClientSessionHandler service = ...;
```

## See Also

- [Area Index](../)