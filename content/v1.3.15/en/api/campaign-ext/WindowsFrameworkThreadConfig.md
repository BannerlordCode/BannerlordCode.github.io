---
title: "WindowsFrameworkThreadConfig"
description: "Auto-generated class reference for WindowsFrameworkThreadConfig."
---
# WindowsFrameworkThreadConfig

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public enum WindowsFrameworkThreadConfig`
**Base:** none
**File:** `TaleWorlds.TwoDimension.Standalone/WindowsFrameworkThreadConfig.cs`

## Overview

`WindowsFrameworkThreadConfig` lives in `TaleWorlds.TwoDimension.Standalone` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
WindowsFrameworkThreadConfig instance = ...;
```

## See Also

- [Area Index](../)