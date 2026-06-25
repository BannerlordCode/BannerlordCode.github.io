---
title: "ManagedParameters"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedParameters`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ManagedParameters

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class ManagedParameters : IManagedParametersInitializer`
**Base:** `IManagedParametersInitializer`
**File:** `TaleWorlds.CampaignSystem/ManagedParameters.cs`

## Overview

`ManagedParameters` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static ManagedParameters Instance { get; }` |

## Key Methods

### Initialize
`public void Initialize(string relativeXmlPath)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### GetManagedParameter
`public bool GetManagedParameter(ManagedParametersEnum _managedParametersEnum)`

**Purpose:** Gets the current value of `managed parameter`.

### SetManagedParameter
`public bool SetManagedParameter(ManagedParametersEnum _managedParametersEnum, bool value)`

**Purpose:** Sets the value or state of `managed parameter`.

## Usage Example

```csharp
var value = new ManagedParameters();
value.Initialize("example");
```

## See Also

- [Complete Class Catalog](../catalog)