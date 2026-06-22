<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Key`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Key

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Key` is a class in the `TaleWorlds.InputSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public void ChangeKey(InputKey key)
```

### ToString

```csharp
public override string ToString()
```

### Equals

```csharp
public override bool Equals(object obj)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### IsLeftAnalogInput

```csharp
public static bool IsLeftAnalogInput(InputKey key)
```

### IsLeftBumperOrTriggerInput

```csharp
public static bool IsLeftBumperOrTriggerInput(InputKey key)
```

### IsRightBumperOrTriggerInput

```csharp
public static bool IsRightBumperOrTriggerInput(InputKey key)
```

### IsFaceKeyInput

```csharp
public static bool IsFaceKeyInput(InputKey key)
```

### IsRightAnalogInput

```csharp
public static bool IsRightAnalogInput(InputKey key)
```

### IsDpadInput

```csharp
public static bool IsDpadInput(InputKey key)
```

### GetInputType

```csharp
public static Key.InputType GetInputType(InputKey key)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)