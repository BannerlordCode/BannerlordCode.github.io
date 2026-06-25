---
title: "ConsolesModuleExtension"
description: "Auto-generated class reference for ConsolesModuleExtension."
---
# ConsolesModuleExtension

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConsolesModuleExtension : IPlatformModuleExtension`
**Base:** `IPlatformModuleExtension`
**File:** `TaleWorlds.MountAndBlade/ConsolesModuleExtension.cs`

## Overview

`ConsolesModuleExtension` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public void Initialize(List<string> args)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of ConsolesModuleExtension from the subsystem API first
ConsolesModuleExtension consolesModuleExtension = ...;
consolesModuleExtension.Initialize(args);
```

### GetModulePaths
`public string GetModulePaths()`

**Purpose:** **Purpose:** Reads and returns the module paths value held by the this instance.

```csharp
// Obtain an instance of ConsolesModuleExtension from the subsystem API first
ConsolesModuleExtension consolesModuleExtension = ...;
var result = consolesModuleExtension.GetModulePaths();
```

### Destroy
`public void Destroy()`

**Purpose:** **Purpose:** Executes the Destroy logic.

```csharp
// Obtain an instance of ConsolesModuleExtension from the subsystem API first
ConsolesModuleExtension consolesModuleExtension = ...;
consolesModuleExtension.Destroy();
```

### SetLauncherMode
`public void SetLauncherMode(bool isLauncherModeActive)`

**Purpose:** **Purpose:** Assigns a new value to launcher mode and updates the object's internal state.

```csharp
// Obtain an instance of ConsolesModuleExtension from the subsystem API first
ConsolesModuleExtension consolesModuleExtension = ...;
consolesModuleExtension.SetLauncherMode(false);
```

### CheckEntitlement
`public bool CheckEntitlement(string title)`

**Purpose:** **Purpose:** Verifies whether entitlement holds true for the this instance.

```csharp
// Obtain an instance of ConsolesModuleExtension from the subsystem API first
ConsolesModuleExtension consolesModuleExtension = ...;
var result = consolesModuleExtension.CheckEntitlement("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ConsolesModuleExtension consolesModuleExtension = ...;
consolesModuleExtension.Initialize(args);
```

## See Also

- [Area Index](../)