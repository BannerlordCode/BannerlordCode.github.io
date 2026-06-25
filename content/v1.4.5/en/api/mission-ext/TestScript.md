---
title: "TestScript"
description: "Auto-generated class reference for TestScript."
---
# TestScript

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TestScript : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TestScript.cs`

## Overview

`TestScript` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetIntegerFromStringEnd
`public static int GetIntegerFromStringEnd(string str)`

**Purpose:** Reads and returns the `integer from string end` value held by the current object.

```csharp
// Static call; no instance required
TestScript.GetIntegerFromStringEnd("example");
```

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the `tick requirement` value held by the current object.

```csharp
// Obtain an instance of TestScript from the subsystem API first
TestScript testScript = ...;
var result = testScript.GetTickRequirement();
```

## Usage Example

```csharp
TestScript.GetIntegerFromStringEnd("example");
```

## See Also

- [Area Index](../)