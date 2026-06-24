<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NamespaceCode`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NamespaceCode

**Namespace:** TaleWorlds.Library.CodeGeneration
**Module:** TaleWorlds.Library
**Type:** `public class NamespaceCode`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library.CodeGeneration/NamespaceCode.cs`

## Overview

`NamespaceCode` lives in `TaleWorlds.Library.CodeGeneration` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.CodeGeneration` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Classes` | `public List<ClassCode> Classes { get; }` |

## Key Methods

### GenerateInto
`public void GenerateInto(CodeGenerationFile codeGenerationFile)`

**Purpose:** Handles logic related to `generate into`.

### AddClass
`public void AddClass(ClassCode clasCode)`

**Purpose:** Adds `class` to the current collection or state.

## Usage Example

```csharp
var value = new NamespaceCode();
value.GenerateInto(codeGenerationFile);
```

## See Also

- [Complete Class Catalog](../catalog)