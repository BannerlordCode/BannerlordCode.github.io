---
title: "ICameraModeLogic"
description: "Auto-generated class reference for ICameraModeLogic."
---
# ICameraModeLogic

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public interface ICameraModeLogic`
**Base:** none
**File:** `TaleWorlds.Core/ICameraModeLogic.cs`

## Overview

`ICameraModeLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `ICameraModeLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IICameraModeLogic service = ...;
```

## See Also

- [Area Index](../)