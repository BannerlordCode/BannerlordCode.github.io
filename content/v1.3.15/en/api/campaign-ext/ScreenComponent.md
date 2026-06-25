---
title: "ScreenComponent"
description: "Auto-generated class reference for ScreenComponent."
---
# ScreenComponent

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public class ScreenComponent`
**Base:** none
**File:** `TaleWorlds.ScreenSystem/ScreenComponent.cs`

## Overview

`ScreenComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `ScreenComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var component = agent.GetComponent<ScreenComponent>();
```

## See Also

- [Area Index](../)