---
title: "ClientApplicationConfiguration"
description: "Auto-generated class reference for ClientApplicationConfiguration."
---
# ClientApplicationConfiguration

**Namespace:** TaleWorlds.Diamond.ClientApplication
**Module:** TaleWorlds.Diamond
**Type:** `public class ClientApplicationConfiguration`
**Base:** none
**File:** `TaleWorlds.Diamond/ClientApplication/ClientApplicationConfiguration.cs`

## Overview

`ClientApplicationConfiguration` lives in `TaleWorlds.Diamond.ClientApplication` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.ClientApplication` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `InheritFrom` | `public string InheritFrom { get; set; }` |
| `Clients` | `public string Clients { get; set; }` |
| `SessionProviderType` | `public SessionProviderType SessionProviderType { get; set; }` |
| `Parameters` | `public ParameterContainer Parameters { get; set; }` |

## Key Methods

### GetDefaultConfigurationFromFile
`public static string GetDefaultConfigurationFromFile()`

**Purpose:** Reads and returns the `default configuration from file` value held by the current object.

```csharp
// Static call; no instance required
ClientApplicationConfiguration.GetDefaultConfigurationFromFile();
```

### SetDefaultConfigurationCategory
`public static void SetDefaultConfigurationCategory(string category)`

**Purpose:** Assigns a new value to `default configuration category` and updates the object's internal state.

```csharp
// Static call; no instance required
ClientApplicationConfiguration.SetDefaultConfigurationCategory("example");
```

### FillFrom
`public void FillFrom(string configurationName)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ClientApplicationConfiguration from the subsystem API first
ClientApplicationConfiguration clientApplicationConfiguration = ...;
clientApplicationConfiguration.FillFrom("example");
```

### FillFrom
`public void FillFrom(string configurationCategory, string configurationName)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ClientApplicationConfiguration from the subsystem API first
ClientApplicationConfiguration clientApplicationConfiguration = ...;
clientApplicationConfiguration.FillFrom("example", "example");
```

## Usage Example

```csharp
ClientApplicationConfiguration.GetDefaultConfigurationFromFile();
```

## See Also

- [Area Index](../)