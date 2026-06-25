---
title: "IManagedComponent"
description: "Auto-generated class reference for IManagedComponent."
---
# IManagedComponent

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public interface IManagedComponent`
**Base:** none
**File:** `TaleWorlds.DotNet/IManagedComponent.cs`

## Overview

`IManagedComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `IManagedComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIManagedComponent service = ...;
```

## See Also

- [Area Index](../)