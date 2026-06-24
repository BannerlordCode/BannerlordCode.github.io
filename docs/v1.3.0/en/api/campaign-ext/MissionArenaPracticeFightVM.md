<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionArenaPracticeFightVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionArenaPracticeFightVM

**Namespace:** SandBox.ViewModelCollection.Missions
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionArenaPracticeFightVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MissionArenaPracticeFightVM.cs`

## Overview

`MissionArenaPracticeFightVM` lives in `SandBox.ViewModelCollection.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OpponentsBeatenText` | `public string OpponentsBeatenText { get; set; }` |
| `PrizeText` | `public string PrizeText { get; set; }` |
| `OpponentsRemainingText` | `public string OpponentsRemainingText { get; set; }` |
| `IsPlayerPracticing` | `public bool IsPlayerPracticing { get; set; }` |

## Key Methods

### Tick
`public void Tick()`

**Purpose:** Handles logic related to `tick`.

### UpdatePrizeText
`public void UpdatePrizeText()`

**Purpose:** Updates the state or data of `prize text`.

## Usage Example

```csharp
var value = new MissionArenaPracticeFightVM();
value.Tick();
```

## See Also

- [Complete Class Catalog](../catalog)