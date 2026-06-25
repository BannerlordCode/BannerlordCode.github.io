---
title: "WidgetComponent"
description: "Auto-generated class reference for WidgetComponent."
---
# WidgetComponent

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class WidgetComponent`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/WidgetComponent.cs`

## Overview

`WidgetComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `WidgetComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Target` | `public Widget Target { get; }` |

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
WidgetComponent instance = ...;
```

## See Also

- [Area Index](../)