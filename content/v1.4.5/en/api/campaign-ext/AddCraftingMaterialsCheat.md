---
title: "AddCraftingMaterialsCheat"
description: "Auto-generated class reference for AddCraftingMaterialsCheat."
---
# AddCraftingMaterialsCheat

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class AddCraftingMaterialsCheat : GameplayCheatItem`
**Base:** `GameplayCheatItem`
**File:** `Modules.SandBox/SandBox/Sandbox/AddCraftingMaterialsCheat.cs`

## Overview

`AddCraftingMaterialsCheat` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ExecuteCheat
`public override void ExecuteCheat()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with cheat.

```csharp
// Obtain an instance of AddCraftingMaterialsCheat from the subsystem API first
AddCraftingMaterialsCheat addCraftingMaterialsCheat = ...;
addCraftingMaterialsCheat.ExecuteCheat();
```

### GetName
`public override TextObject GetName()`

**Purpose:** **Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of AddCraftingMaterialsCheat from the subsystem API first
AddCraftingMaterialsCheat addCraftingMaterialsCheat = ...;
var result = addCraftingMaterialsCheat.GetName();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AddCraftingMaterialsCheat addCraftingMaterialsCheat = ...;
addCraftingMaterialsCheat.ExecuteCheat();
```

## See Also

- [Area Index](../)