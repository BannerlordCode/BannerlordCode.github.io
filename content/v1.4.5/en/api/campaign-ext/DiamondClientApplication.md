---
title: "DiamondClientApplication"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DiamondClientApplication`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DiamondClientApplication

**Namespace:** TaleWorlds.Diamond.ClientApplication
**Module:** TaleWorlds.Diamond
**Type:** `public class DiamondClientApplication`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Diamond/TaleWorlds.Diamond.ClientApplication/DiamondClientApplication.cs`

## Overview

`DiamondClientApplication` lives in `TaleWorlds.Diamond.ClientApplication` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.ClientApplication` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ApplicationVersion` | `public ApplicationVersion ApplicationVersion { get; }` |
| `ProxyAddressMap` | `public IReadOnlyDictionary<string, string> ProxyAddressMap { get; }` |

## Key Methods

### GetObject
`public object GetObject(string name)`

**Purpose:** Gets the current value of `object`.

### AddObject
`public void AddObject(string name, DiamondClientApplicationObject applicationObject)`

**Purpose:** Adds `object` to the current collection or state.

### Initialize
`public void Initialize(ClientApplicationConfiguration applicationConfiguration)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### CreateClientSessionProvider
`public object CreateClientSessionProvider(string clientName, Type clientType, SessionProviderType sessionProviderType, ParameterContainer parameters)`

**Purpose:** Creates a new `client session provider` instance or object.

### Update
`public void Update()`

**Purpose:** Updates the state or data of `update`.

## Usage Example

```csharp
var value = new DiamondClientApplication();
value.GetObject("example");
```

## See Also

- [Complete Class Catalog](../catalog)