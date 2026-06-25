---
title: "TestScript"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TestScript`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TestScript

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TestScript : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TestScript.cs`

## Overview

`TestScript` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetIntegerFromStringEnd
`public static int GetIntegerFromStringEnd(string str)`

**Purpose:** Gets the current value of `integer from string end`.

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

## Usage Example

```csharp
TestScript.GetIntegerFromStringEnd("example");
```

## See Also

- [Complete Class Catalog](../catalog)