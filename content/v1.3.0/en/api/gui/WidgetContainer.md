---
title: "WidgetContainer"
description: "Auto-generated class reference for WidgetContainer."
---
# WidgetContainer

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `internal class WidgetContainer`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/WidgetContainer.cs`

## Overview

`WidgetContainer` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Clear
`public void Clear()`

**Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of WidgetContainer from the subsystem API first
WidgetContainer widgetContainer = ...;
widgetContainer.Clear();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WidgetContainer widgetContainer = ...;
widgetContainer.Clear();
```

## See Also

- [Area Index](../)