---
title: "PrefabExtensionContext"
description: "Auto-generated class reference for PrefabExtensionContext."
---
# PrefabExtensionContext

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class PrefabExtensionContext`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/PrefabExtensionContext.cs`

## Overview

`PrefabExtensionContext` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddExtension
`public void AddExtension(PrefabExtension prefabExtension)`

**Purpose:** Adds extension to the current collection or state.

```csharp
// Obtain an instance of PrefabExtensionContext from the subsystem API first
PrefabExtensionContext prefabExtensionContext = ...;
prefabExtensionContext.AddExtension(prefabExtension);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PrefabExtensionContext prefabExtensionContext = ...;
prefabExtensionContext.AddExtension(prefabExtension);
```

## See Also

- [Area Index](../)