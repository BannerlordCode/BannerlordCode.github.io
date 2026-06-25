---
title: "ParameterLoader"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ParameterLoader`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ParameterLoader

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ParameterLoader`
**Area:** core-extra

## Overview

`ParameterLoader` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### LoadParametersFromClientProfile
`public static ParameterContainer LoadParametersFromClientProfile(string configurationName)`

**Purpose:** Loads `parameters from client profile` data.

### LoadParametersInto
`public static void LoadParametersInto(string fileFullName, ParameterContainer parameters)`

**Purpose:** Loads `parameters into` data.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
ParameterLoader.LoadParametersFromClientProfile("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
