<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TrainingObjectiveKeyVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TrainingObjectiveKeyVM

**Namespace:** StoryMode.ViewModelCollection.Missions
**Module:** StoryMode.ViewModelCollection
**Type:** `public class TrainingObjectiveKeyVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode.ViewModelCollection/StoryMode.ViewModelCollection.Missions/TrainingObjectiveKeyVM.cs`

## Overview

`TrainingObjectiveKeyVM` lives in `StoryMode.ViewModelCollection.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.ViewModelCollection.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Key` | `public InputKeyItemVM Key { get; set; }` |
| `ForcedKeyId` | `public string ForcedKeyId { get; set; }` |
| `ForcedKeyName` | `public string ForcedKeyName { get; set; }` |
| `MovementType` | `public int MovementType { get; set; }` |
| `MouseClick` | `public int MouseClick { get; set; }` |
| `InputType` | `public int InputType { get; set; }` |

## Key Methods

### MouseAndClickInput
`public struct MouseAndClickInput(MovementTypes movementType, MouseClickTypes mouseClickType)`

**Purpose:** Handles logic related to `mouse and click input`.

### ControllerStickInput
`public struct ControllerStickInput(MovementTypes movementType, bool isLeftStick)`

**Purpose:** Handles logic related to `controller stick input`.

## Usage Example

```csharp
var value = new TrainingObjectiveKeyVM();
value.MouseAndClickInput(movementType, mouseClickType);
```

## See Also

- [Complete Class Catalog](../catalog)