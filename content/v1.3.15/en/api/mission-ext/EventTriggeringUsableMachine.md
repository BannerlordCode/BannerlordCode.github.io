---
title: "EventTriggeringUsableMachine"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EventTriggeringUsableMachine`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EventTriggeringUsableMachine

**Namespace:** TaleWorlds.MountAndBlade.Objects.Usables
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EventTriggeringUsableMachine : UsableMachine`
**Base:** `UsableMachine`
**File:** `TaleWorlds.MountAndBlade/Objects/Usables/EventTriggeringUsableMachine.cs`

## Overview

`EventTriggeringUsableMachine` lives in `TaleWorlds.MountAndBlade.Objects.Usables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects.Usables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActionText` | `public TextObject ActionText { get; }` |
| `DescriptionText` | `public TextObject DescriptionText { get; }` |

## Key Methods

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Gets the current value of `action text for standing point`.

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `description text`.

## Usage Example

```csharp
var value = new EventTriggeringUsableMachine();
value.GetActionTextForStandingPoint(usableGameObject);
```

## See Also

- [Complete Class Catalog](../catalog)