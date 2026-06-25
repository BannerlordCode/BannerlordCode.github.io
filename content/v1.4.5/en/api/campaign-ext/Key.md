---
title: "Key"
description: "Auto-generated class reference for Key."
---
# Key

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public class Key`
**Base:** none
**File:** `bin/TaleWorlds.InputSystem/TaleWorlds.InputSystem/Key.cs`

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

**Purpose:** Executes the ChangeKey logic.

```csharp
// Obtain an instance of Key from the subsystem API first
Key key = ...;
key.ChangeKey(key);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Key from the subsystem API first
Key key = ...;
var result = key.ToString();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of Key from the subsystem API first
Key key = ...;
var result = key.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of Key from the subsystem API first
Key key = ...;
var result = key.GetHashCode();
```

### IsLeftAnalogInput
`public static bool IsLeftAnalogInput(InputKey key)`

**Purpose:** Determines whether the this instance is in the left analog input state or condition.

```csharp
// Static call; no instance required
Key.IsLeftAnalogInput(key);
```

### IsLeftBumperOrTriggerInput
`public static bool IsLeftBumperOrTriggerInput(InputKey key)`

**Purpose:** Determines whether the this instance is in the left bumper or trigger input state or condition.

```csharp
// Static call; no instance required
Key.IsLeftBumperOrTriggerInput(key);
```

### IsRightBumperOrTriggerInput
`public static bool IsRightBumperOrTriggerInput(InputKey key)`

**Purpose:** Determines whether the this instance is in the right bumper or trigger input state or condition.

```csharp
// Static call; no instance required
Key.IsRightBumperOrTriggerInput(key);
```

### IsFaceKeyInput
`public static bool IsFaceKeyInput(InputKey key)`

**Purpose:** Determines whether the this instance is in the face key input state or condition.

```csharp
// Static call; no instance required
Key.IsFaceKeyInput(key);
```

### IsRightAnalogInput
`public static bool IsRightAnalogInput(InputKey key)`

**Purpose:** Determines whether the this instance is in the right analog input state or condition.

```csharp
// Static call; no instance required
Key.IsRightAnalogInput(key);
```

### IsDpadInput
`public static bool IsDpadInput(InputKey key)`

**Purpose:** Determines whether the this instance is in the dpad input state or condition.

```csharp
// Static call; no instance required
Key.IsDpadInput(key);
```

### GetInputType
`public static InputType GetInputType(InputKey key)`

**Purpose:** Reads and returns the input type value held by the this instance.

```csharp
// Static call; no instance required
Key.GetInputType(key);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Key key = ...;
key.ChangeKey(key);
```

## See Also

- [Area Index](../)