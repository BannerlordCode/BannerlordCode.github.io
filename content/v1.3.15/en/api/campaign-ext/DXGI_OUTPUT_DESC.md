---
title: "DXGI_OUTPUT_DESC"
description: "Auto-generated class reference for DXGI_OUTPUT_DESC."
---
# DXGI_OUTPUT_DESC

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct DXGI_OUTPUT_DESC`
**Base:** none
**File:** `TaleWorlds.TwoDimension.Standalone/Native/Windows/DXGI.cs`

## Overview

`DXGI_OUTPUT_DESC` lives in `TaleWorlds.TwoDimension.Standalone.Native.Windows` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone.Native.Windows` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
DXGI_OUTPUT_DESC instance = ...;
```

## See Also

- [Area Index](../)