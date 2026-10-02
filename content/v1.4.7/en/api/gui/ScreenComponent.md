---
title: "ScreenComponent"
description: "ScreenComponent — class in TaleWorlds.ScreenSystem. No public members of its own."
---

<!-- v147-skeleton -->
# ScreenComponent

**Namespace:** `TaleWorlds.ScreenSystem`  
**Module:** `TaleWorlds.ScreenSystem`  
**Type:** `public class ScreenComponent`  
**Source:** `TaleWorlds.ScreenSystem/ScreenComponent.cs`

## Overview

`ScreenComponent` is a component: a bundle of behaviour attached to an entity rather than a service in its own right. It exists to be added to something and then queried by the systems that need it.

## Mental Model

Components are how the engine keeps responsibilities separate: one component per concern, all of them hanging off the same entity. To use it, attach it to the entity during creation and query it back where the behaviour is needed.

Because components are created and destroyed with their entity, everything they cache should die with them.

Concretely, the surface breaks down like this:

- The type contributes no public members of its own; everything you use comes from the members it inherits or from the code that owns it.

## Key Members

No public members are declared on ScreenComponent itself in `TaleWorlds.ScreenSystem`; consumers use it through the subsystem that owns it.
## Usage Example

```csharp
// ScreenComponent exposes no public members in TaleWorlds.ScreenSystem.
```

## Risks and Boundaries

- Attaching a component twice silently duplicates its behaviour.
- Query order is not guaranteed; a system that needs an ordering must sort explicitly.
- Components created outside the entity lifecycle leak when the entity is replaced.
- The declaration in `TaleWorlds.ScreenSystem/ScreenComponent.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/gui/](../) — the other types in this bucket.
