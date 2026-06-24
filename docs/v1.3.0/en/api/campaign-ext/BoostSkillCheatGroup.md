<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoostSkillCheatGroup`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BoostSkillCheatGroup

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class BoostSkillCheatGroup : GameplayCheatGroup`
**Base:** `GameplayCheatGroup`
**File:** `SandBox/BoostSkillCheatGroup.cs`

## Overview

`BoostSkillCheatGroup` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
var value = new BoostSkillCheatGroup();
value.GetCheats();
```

## See Also

- [Complete Class Catalog](../catalog)