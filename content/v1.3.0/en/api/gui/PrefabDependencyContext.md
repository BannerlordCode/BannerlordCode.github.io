---
title: "PrefabDependencyContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PrefabDependencyContext`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PrefabDependencyContext

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public class PrefabDependencyContext`
**Base:** none
**File:** `TaleWorlds.GauntletUI.CodeGenerator/PrefabDependencyContext.cs`

## Overview

`PrefabDependencyContext` lives in `TaleWorlds.GauntletUI.CodeGenerator` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.CodeGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RootClassName` | `public string RootClassName { get; }` |

## Key Methods

### GenerateDependencyName
`public string GenerateDependencyName()`

**Purpose:** Handles logic related to `generate dependency name`.

### AddDependentWidgetTemplateGenerateContext
`public void AddDependentWidgetTemplateGenerateContext(WidgetTemplateGenerateContext widgetTemplateGenerateContext)`

**Purpose:** Adds `dependent widget template generate context` to the current collection or state.

### GetDependendPrefab
`public PrefabDependency GetDependendPrefab(string type, Dictionary<string, WidgetAttributeTemplate> givenParameters, Dictionary<string, object> data, bool isRoot)`

**Purpose:** Gets the current value of `dependend prefab`.

### GenerateInto
`public void GenerateInto(NamespaceCode namespaceCode)`

**Purpose:** Handles logic related to `generate into`.

### ContainsDependency
`public bool ContainsDependency(string type, Dictionary<string, WidgetAttributeTemplate> givenParameters, Dictionary<string, object> data, bool isRoot)`

**Purpose:** Handles logic related to `contains dependency`.

## Usage Example

```csharp
var value = new PrefabDependencyContext();
value.GenerateDependencyName();
```

## See Also

- [Complete Class Catalog](../catalog)