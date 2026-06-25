---
title: "DiamondClientApplication"
description: "Auto-generated class reference for DiamondClientApplication."
---
# DiamondClientApplication

**Namespace:** TaleWorlds.Diamond.ClientApplication
**Module:** TaleWorlds.Diamond
**Type:** `public class DiamondClientApplication`
**Base:** none
**File:** `TaleWorlds.Diamond/ClientApplication/DiamondClientApplication.cs`

## Overview

`DiamondClientApplication` lives in `TaleWorlds.Diamond.ClientApplication` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.ClientApplication` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ApplicationVersion` | `public ApplicationVersion ApplicationVersion { get; }` |
| `Parameters` | `public ParameterContainer Parameters { get; }` |
| `ProxyAddressMap` | `public IReadOnlyDictionary<string, string> ProxyAddressMap { get; }` |

## Key Methods

### GetObject
`public object GetObject(string name)`

**Purpose:** Reads and returns the `object` value held by the current object.

```csharp
// Obtain an instance of DiamondClientApplication from the subsystem API first
DiamondClientApplication diamondClientApplication = ...;
var result = diamondClientApplication.GetObject("example");
```

### AddObject
`public void AddObject(string name, DiamondClientApplicationObject applicationObject)`

**Purpose:** Adds `object` to the current collection or state.

```csharp
// Obtain an instance of DiamondClientApplication from the subsystem API first
DiamondClientApplication diamondClientApplication = ...;
diamondClientApplication.AddObject("example", applicationObject);
```

### Initialize
`public void Initialize(ClientApplicationConfiguration applicationConfiguration)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of DiamondClientApplication from the subsystem API first
DiamondClientApplication diamondClientApplication = ...;
diamondClientApplication.Initialize(applicationConfiguration);
```

### CreateClientSessionProvider
`public object CreateClientSessionProvider(string clientName, Type clientType, SessionProviderType sessionProviderType, ParameterContainer parameters)`

**Purpose:** Constructs a new `client session provider` entity and returns it to the caller.

```csharp
// Obtain an instance of DiamondClientApplication from the subsystem API first
DiamondClientApplication diamondClientApplication = ...;
var result = diamondClientApplication.CreateClientSessionProvider("example", clientType, sessionProviderType, parameters);
```

### Update
`public void Update()`

**Purpose:** Recalculates and stores the latest representation of the current object.

```csharp
// Obtain an instance of DiamondClientApplication from the subsystem API first
DiamondClientApplication diamondClientApplication = ...;
diamondClientApplication.Update();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DiamondClientApplication diamondClientApplication = ...;
diamondClientApplication.GetObject("example");
```

## See Also

- [Area Index](../)