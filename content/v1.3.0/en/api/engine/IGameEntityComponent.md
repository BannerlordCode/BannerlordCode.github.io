---
title: "IGameEntityComponent"
description: "Auto-generated class reference for IGameEntityComponent."
---
# IGameEntityComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `internal interface IGameEntityComponent`
**Base:** none
**File:** `TaleWorlds.Engine/IGameEntityComponent.cs`

## Overview

`IGameEntityComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `IGameEntityComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIGameEntityComponent service = ...;
```

## See Also

- [Area Index](../)