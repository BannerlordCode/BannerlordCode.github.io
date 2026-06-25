---
title: "CheatItemBaseVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CheatItemBaseVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CheatItemBaseVM

**Namespace:** SandBox.ViewModelCollection.Map.Cheat
**Module:** SandBox.ViewModelCollection
**Type:** `public abstract class CheatItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Map.Cheat/CheatItemBaseVM.cs`

## Overview

`CheatItemBaseVM` lives in `SandBox.ViewModelCollection.Map.Cheat` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Map.Cheat` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |

## Key Methods

### ExecuteAction
`public abstract void ExecuteAction()`

**Purpose:** Executes the `action` operation or workflow.

## Usage Example

```csharp
var implementation = new CustomCheatItemBaseVM();
```

## See Also

- [Complete Class Catalog](../catalog)