---
title: "SaddleComponent"
description: "Auto-generated class reference for SaddleComponent."
---
# SaddleComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class SaddleComponent : ItemComponent`
**Base:** `ItemComponent`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/SaddleComponent.cs`

## Overview

`SaddleComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `SaddleComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCopy
`public override ItemComponent GetCopy()`

**Purpose:** Reads and returns the `copy` value held by the current object.

```csharp
// Obtain an instance of SaddleComponent from the subsystem API first
SaddleComponent saddleComponent = ...;
var result = saddleComponent.GetCopy();
```

## Usage Example

```csharp
var component = agent.GetComponent<SaddleComponent>();
```

## See Also

- [Area Index](../)