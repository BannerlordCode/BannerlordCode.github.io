---
title: "ILoadingWindowHandler"
description: "Auto-generated class reference for ILoadingWindowHandler."
---
# ILoadingWindowHandler

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `internal interface ILoadingWindowHandler`
**Base:** none
**File:** `TaleWorlds.Engine/ILoadingWindowHandler.cs`

## Overview

`ILoadingWindowHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `ILoadingWindowHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IILoadingWindowHandler service = ...;
```

## See Also

- [Area Index](../)