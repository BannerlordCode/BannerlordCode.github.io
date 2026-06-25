---
title: "StandaloneUIDomain"
description: "Auto-generated class reference for StandaloneUIDomain."
---
# StandaloneUIDomain

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StandaloneUIDomain : FrameworkDomain`
**Base:** `FrameworkDomain`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/StandaloneUIDomain.cs`

## Overview

`StandaloneUIDomain` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UserDataManager` | `public UserDataManager UserDataManager { get; }` |
| `AdditionalArgs` | `public string AdditionalArgs { get; }` |
| `HasUnofficialModulesSelected` | `public bool HasUnofficialModulesSelected { get; }` |

## Key Methods

### Update
`public override void Update()`

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of StandaloneUIDomain from the subsystem API first
StandaloneUIDomain standaloneUIDomain = ...;
standaloneUIDomain.Update();
```

### Destroy
`public override void Destroy()`

**Purpose:** Executes the Destroy logic.

```csharp
// Obtain an instance of StandaloneUIDomain from the subsystem API first
StandaloneUIDomain standaloneUIDomain = ...;
standaloneUIDomain.Destroy();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StandaloneUIDomain standaloneUIDomain = ...;
standaloneUIDomain.Update();
```

## See Also

- [Area Index](../)