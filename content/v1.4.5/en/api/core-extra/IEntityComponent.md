---
title: "IEntityComponent"
description: "Auto-generated class reference for IEntityComponent."
---
# IEntityComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public interface IEntityComponent`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/IEntityComponent.cs`

## Overview

`IEntityComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `IEntityComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIEntityComponent service = ...;
```

## See Also

- [Area Index](../)