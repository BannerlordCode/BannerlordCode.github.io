---
title: "OptionsDataType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OptionsDataType`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OptionsDataType

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum OptionsDataType`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/OptionsVM.cs`

## Overview

`OptionsDataType` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
OptionsDataType example = OptionsDataType.Value;
```

## See Also

- [Complete Class Catalog](../catalog)