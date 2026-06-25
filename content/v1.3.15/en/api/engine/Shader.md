---
title: "Shader"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Shader`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Shader

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Shader : Resource`
**Base:** `Resource`
**Area:** engine

## Overview

`Shader` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |

## Key Methods

### GetFromResource
`public static Shader GetFromResource(string shaderName)`

**Purpose:** Gets the current value of `from resource`.

### GetMaterialShaderFlagMask
`public ulong GetMaterialShaderFlagMask(string flagName, bool showErrors = true)`

**Purpose:** Gets the current value of `material shader flag mask`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Shader.GetFromResource("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
