---
title: "UsableMissionObjectComponent"
description: "Auto-generated class reference for UsableMissionObjectComponent."
---
# UsableMissionObjectComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UsableMissionObjectComponent`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/UsableMissionObjectComponent.cs`

## Overview

`UsableMissionObjectComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `UsableMissionObjectComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsOnTickRequired
`public virtual bool IsOnTickRequired()`

**Purpose:** Determines whether the this instance is in the on tick required state or condition.

```csharp
// Obtain an instance of UsableMissionObjectComponent from the subsystem API first
UsableMissionObjectComponent usableMissionObjectComponent = ...;
var result = usableMissionObjectComponent.IsOnTickRequired();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
UsableMissionObjectComponent instance = ...;
```

## See Also

- [Area Index](../)