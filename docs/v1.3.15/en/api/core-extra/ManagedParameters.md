<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedParameters`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedParameters

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class ManagedParameters : IManagedParametersInitializer`
**Base:** `IManagedParametersInitializer`
**Area:** core-extra

## Overview

`ManagedParameters` lives in `TaleWorlds.CampaignSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// First obtain a ManagedParameters instance from game state, then call one of its public methods
var value = new ManagedParameters();
value.Initialize("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
