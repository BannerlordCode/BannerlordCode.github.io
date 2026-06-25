---
title: "ICallbackManager"
description: "Auto-generated class reference for ICallbackManager."
---
# ICallbackManager

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public interface ICallbackManager`
**Base:** none
**File:** `TaleWorlds.DotNet/ICallbackManager.cs`

## Overview

`ICallbackManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ICallbackManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IICallbackManager service = ...;
```

## See Also

- [Area Index](../)