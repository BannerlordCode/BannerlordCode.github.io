---
title: "HealMainHeroCheat"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HealMainHeroCheat`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HealMainHeroCheat

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class HealMainHeroCheat : GameplayCheatItem`
**Base:** `GameplayCheatItem`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/Sandbox/HealMainHeroCheat.cs`

## Overview

`HealMainHeroCheat` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ExecuteCheat
`public override void ExecuteCheat()`

**Purpose:** Executes the `cheat` operation or workflow.

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

## Usage Example

```csharp
var value = new HealMainHeroCheat();
value.ExecuteCheat();
```

## See Also

- [Complete Class Catalog](../catalog)