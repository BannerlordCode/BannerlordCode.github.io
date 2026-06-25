---
title: "AutoPinner"
description: "Auto-generated class reference for AutoPinner."
---
# AutoPinner

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native
**Module:** TaleWorlds.TwoDimension
**Type:** `internal class AutoPinner : IDisposable`
**Base:** `IDisposable`
**File:** `TaleWorlds.TwoDimension.Standalone/Native/AutoPinner.cs`

## Overview

`AutoPinner` lives in `TaleWorlds.TwoDimension.Standalone.Native` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone.Native` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IntPtr
`public static implicit operator IntPtr(AutoPinner autoPinner)`

**Purpose:** **Purpose:** Executes the IntPtr logic.

```csharp
// Static call; no instance required
AutoPinner.IntPtr(autoPinner);
```

### Dispose
`public void Dispose()`

**Purpose:** **Purpose:** Releases unmanaged resources held by the this instance.

```csharp
// Obtain an instance of AutoPinner from the subsystem API first
AutoPinner autoPinner = ...;
autoPinner.Dispose();
```

## Usage Example

```csharp
AutoPinner.IntPtr(autoPinner);
```

## See Also

- [Area Index](../)