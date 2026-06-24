<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Key`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Key

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public class Key`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.InputSystem/TaleWorlds.InputSystem/Key.cs`

## Overview

`Key` lives in `TaleWorlds.InputSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.InputSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsKeyboardInput` | `public bool IsKeyboardInput { get; }` |
| `IsMouseButtonInput` | `public bool IsMouseButtonInput { get; }` |
| `IsMouseWheelInput` | `public bool IsMouseWheelInput { get; }` |
| `IsControllerInput` | `public bool IsControllerInput { get; }` |
| `InputKey` | `public InputKey InputKey { get; }` |

## Key Methods

### ChangeKey
`public void ChangeKey(InputKey key)`

**Purpose:** Handles logic related to `change key`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### IsLeftAnalogInput
`public static bool IsLeftAnalogInput(InputKey key)`

**Purpose:** Handles logic related to `is left analog input`.

### IsLeftBumperOrTriggerInput
`public static bool IsLeftBumperOrTriggerInput(InputKey key)`

**Purpose:** Handles logic related to `is left bumper or trigger input`.

### IsRightBumperOrTriggerInput
`public static bool IsRightBumperOrTriggerInput(InputKey key)`

**Purpose:** Handles logic related to `is right bumper or trigger input`.

### IsFaceKeyInput
`public static bool IsFaceKeyInput(InputKey key)`

**Purpose:** Handles logic related to `is face key input`.

### IsRightAnalogInput
`public static bool IsRightAnalogInput(InputKey key)`

**Purpose:** Handles logic related to `is right analog input`.

### IsDpadInput
`public static bool IsDpadInput(InputKey key)`

**Purpose:** Handles logic related to `is dpad input`.

### GetInputType
`public static InputType GetInputType(InputKey key)`

**Purpose:** Gets the current value of `input type`.

## Usage Example

```csharp
var value = new Key();
value.ChangeKey(key);
```

## See Also

- [Complete Class Catalog](../catalog)