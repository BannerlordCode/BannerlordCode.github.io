---
title: "FillCraftingStaminaCheat"
description: "Auto-generated class reference for FillCraftingStaminaCheat."
---
# FillCraftingStaminaCheat

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class FillCraftingStaminaCheat : GameplayCheatItem`
**Base:** `GameplayCheatItem`
**File:** `Modules.SandBox/SandBox/Sandbox/FillCraftingStaminaCheat.cs`

## Overview

`FillCraftingStaminaCheat` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ExecuteCheat
`public override void ExecuteCheat()`

**Purpose:** Runs the operation or workflow associated with cheat.

```csharp
// Obtain an instance of FillCraftingStaminaCheat from the subsystem API first
FillCraftingStaminaCheat fillCraftingStaminaCheat = ...;
fillCraftingStaminaCheat.ExecuteCheat();
```

### GetName
`public override TextObject GetName()`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of FillCraftingStaminaCheat from the subsystem API first
FillCraftingStaminaCheat fillCraftingStaminaCheat = ...;
var result = fillCraftingStaminaCheat.GetName();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FillCraftingStaminaCheat fillCraftingStaminaCheat = ...;
fillCraftingStaminaCheat.ExecuteCheat();
```

## See Also

- [Area Index](../)