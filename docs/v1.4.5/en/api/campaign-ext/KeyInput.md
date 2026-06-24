<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KeyInput`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KeyInput

**Namespace:** StoryMode.ViewModelCollection.Missions
**Module:** StoryMode.ViewModelCollection
**Type:** `public struct KeyInput`
**Area:** campaign-ext

## Overview

`KeyInput` lives in `StoryMode.ViewModelCollection.Missions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// First obtain a KeyInput instance from game state, then call one of its public methods
var value = new KeyInput();
value.MouseAndClickInput(movementType, mouseClickType);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
