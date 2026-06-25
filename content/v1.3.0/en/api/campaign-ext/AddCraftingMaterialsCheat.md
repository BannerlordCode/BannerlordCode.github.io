---
title: "AddCraftingMaterialsCheat"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AddCraftingMaterialsCheat`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AddCraftingMaterialsCheat

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class AddCraftingMaterialsCheat : GameplayCheatItem`
**Base:** `GameplayCheatItem`
**File:** `SandBox/AddCraftingMaterialsCheat.cs`

## Overview

`AddCraftingMaterialsCheat` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ExecuteCheat
`public override void ExecuteCheat()`

**Purpose:** Executes the `cheat` operation or workflow.

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

## Usage Example

```csharp
var value = new AddCraftingMaterialsCheat();
value.ExecuteCheat();
```

## See Also

- [Complete Class Catalog](../catalog)