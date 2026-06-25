---
title: "IUdpNetworkHandler"
description: "Auto-generated class reference for IUdpNetworkHandler."
---
# IUdpNetworkHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IUdpNetworkHandler`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IUdpNetworkHandler.cs`

## Overview

`IUdpNetworkHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IUdpNetworkHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIUdpNetworkHandler service = ...;
```

## See Also

- [Area Index](../)