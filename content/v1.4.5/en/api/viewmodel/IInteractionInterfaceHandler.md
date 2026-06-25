---
title: "IInteractionInterfaceHandler"
description: "Auto-generated class reference for IInteractionInterfaceHandler."
---
# IInteractionInterfaceHandler

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IInteractionInterfaceHandler`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction/IInteractionInterfaceHandler.cs`

## Overview

`IInteractionInterfaceHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IInteractionInterfaceHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIInteractionInterfaceHandler service = ...;
```

## See Also

- [Area Index](../)