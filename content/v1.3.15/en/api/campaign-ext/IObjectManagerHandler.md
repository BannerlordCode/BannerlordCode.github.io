---
title: "IObjectManagerHandler"
description: "Auto-generated class reference for IObjectManagerHandler."
---
# IObjectManagerHandler

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public interface IObjectManagerHandler`
**Base:** none
**File:** `TaleWorlds.ObjectSystem/IObjectManagerHandler.cs`

## Overview

`IObjectManagerHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IObjectManagerHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIObjectManagerHandler service = ...;
```

## See Also

- [Area Index](../)