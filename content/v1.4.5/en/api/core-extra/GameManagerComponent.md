---
title: "GameManagerComponent"
description: "Auto-generated class reference for GameManagerComponent."
---
# GameManagerComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameManagerComponent : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/GameManagerComponent.cs`

## Overview

`GameManagerComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `GameManagerComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameManager` | `public GameManagerBase GameManager { get; set; }` |

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
GameManagerComponent instance = ...;
```

## See Also

- [Area Index](../)