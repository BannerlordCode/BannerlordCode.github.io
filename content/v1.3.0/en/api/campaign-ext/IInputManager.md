---
title: "IInputManager"
description: "Auto-generated class reference for IInputManager."
---
# IInputManager

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public interface IInputManager`
**Base:** none
**File:** `TaleWorlds.InputSystem/IInputManager.cs`

## Overview

`IInputManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `IInputManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIInputManager service = ...;
```

## See Also

- [Area Index](../)