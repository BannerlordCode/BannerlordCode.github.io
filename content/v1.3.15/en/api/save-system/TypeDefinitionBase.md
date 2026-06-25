---
title: "TypeDefinitionBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TypeDefinitionBase`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TypeDefinitionBase

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class TypeDefinitionBase`
**Area:** save-system

## Overview

`TypeDefinitionBase` lives in `TaleWorlds.SaveSystem.Definition`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SaveId` | `public SaveId SaveId { get; }` |
| `Type` | `public Type Type { get; }` |
| `TypeLevel` | `public byte TypeLevel { get; }` |

## Key Methods

### GetClassLevel
`public static byte GetClassLevel(Type type)`

**Purpose:** Gets the current value of `class level`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
TypeDefinitionBase.GetClassLevel(type);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
