---
title: "SmithingMachine"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SmithingMachine`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SmithingMachine

**Namespace:** SandBox.Objects.Usables
**Module:** SandBox.Objects
**Type:** `public class SmithingMachine : UsableMachine`
**Base:** `UsableMachine`
**File:** `SandBox/Objects/Usables/SmithingMachine.cs`

## Overview

`SmithingMachine` lives in `SandBox.Objects.Usables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.Usables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `description text`.

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Gets the current value of `action text for standing point`.

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**Purpose:** Creates a new `a i behavior object` instance or object.

## Usage Example

```csharp
var value = new SmithingMachine();
value.GetDescriptionText(gameEntity);
```

## See Also

- [Complete Class Catalog](../catalog)