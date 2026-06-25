---
title: "HealMainHeroCheat"
description: "Auto-generated class reference for HealMainHeroCheat."
---
# HealMainHeroCheat

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class HealMainHeroCheat : GameplayCheatItem`
**Base:** `GameplayCheatItem`
**File:** `SandBox/HealMainHeroCheat.cs`

## Overview

`HealMainHeroCheat` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ExecuteCheat
`public override void ExecuteCheat()`

**Purpose:** Runs the operation or workflow associated with cheat.

```csharp
// Obtain an instance of HealMainHeroCheat from the subsystem API first
HealMainHeroCheat healMainHeroCheat = ...;
healMainHeroCheat.ExecuteCheat();
```

### GetName
`public override TextObject GetName()`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of HealMainHeroCheat from the subsystem API first
HealMainHeroCheat healMainHeroCheat = ...;
var result = healMainHeroCheat.GetName();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HealMainHeroCheat healMainHeroCheat = ...;
healMainHeroCheat.ExecuteCheat();
```

## See Also

- [Area Index](../)