---
title: "IGameNetworkHandler"
description: "Auto-generated class reference for IGameNetworkHandler."
---
# IGameNetworkHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IGameNetworkHandler`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IGameNetworkHandler.cs`

## Overview

`IGameNetworkHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IGameNetworkHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIGameNetworkHandler service = ...;
```

## See Also

- [Area Index](../)