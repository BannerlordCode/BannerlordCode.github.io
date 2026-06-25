---
title: "BoostSkillCheeat"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoostSkillCheeat`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BoostSkillCheeat

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class BoostSkillCheeat : GameplayCheatItem`
**Base:** `GameplayCheatItem`
**Area:** campaign-ext

## Overview

`BoostSkillCheeat` lives in `SandBox`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetCheats
`public override IEnumerable<GameplayCheatBase> GetCheats()`

**Purpose:** Gets the current value of `cheats`.

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

### ExecuteCheat
`public override void ExecuteCheat()`

**Purpose:** Executes the `cheat` operation or workflow.

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

## Usage Example

```csharp
// First obtain a BoostSkillCheeat instance from game state, then call one of its public methods
var value = new BoostSkillCheeat();
value.GetCheats();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
