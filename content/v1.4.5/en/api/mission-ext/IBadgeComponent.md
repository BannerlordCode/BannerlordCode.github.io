---
title: "IBadgeComponent"
description: "Auto-generated class reference for IBadgeComponent."
---
# IBadgeComponent

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IBadgeComponent`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/IBadgeComponent.cs`

## Overview

`IBadgeComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `IBadgeComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIBadgeComponent service = ...;
```

## See Also

- [Area Index](../)