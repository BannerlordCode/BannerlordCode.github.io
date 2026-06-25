---
title: "EquipmentCategories"
description: "Auto-generated class reference for EquipmentCategories."
---
# EquipmentCategories

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public enum EquipmentCategories : uint`
**Base:** `uint`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/EquipmentCategories.cs`

## Overview

`EquipmentCategories` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
EquipmentCategories instance = ...;
```

## See Also

- [Area Index](../)