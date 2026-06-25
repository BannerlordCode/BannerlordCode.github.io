---
title: "BasicCharacterTableau"
description: "Auto-generated class reference for BasicCharacterTableau."
---
# BasicCharacterTableau

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BasicCharacterTableau`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BasicCharacterTableau.cs`

## Overview

`BasicCharacterTableau` lives in `TaleWorlds.MountAndBlade.View.Tableaus` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; }` |
| `IsVersionCompatible` | `public bool IsVersionCompatible { get; }` |

## Key Methods

### OnTick
`public void OnTick(float dt)`

**Purpose:** Invoked when the `tick` event is raised.

```csharp
// Obtain an instance of BasicCharacterTableau from the subsystem API first
BasicCharacterTableau basicCharacterTableau = ...;
basicCharacterTableau.OnTick(0);
```

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**Purpose:** Assigns a new value to `target size` and updates the object's internal state.

```csharp
// Obtain an instance of BasicCharacterTableau from the subsystem API first
BasicCharacterTableau basicCharacterTableau = ...;
basicCharacterTableau.SetTargetSize(0, 0);
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of BasicCharacterTableau from the subsystem API first
BasicCharacterTableau basicCharacterTableau = ...;
basicCharacterTableau.OnFinalize();
```

### DeserializeCharacterCode
`public void DeserializeCharacterCode(string code)`

**Purpose:** Restores `character code` from serialized data.

```csharp
// Obtain an instance of BasicCharacterTableau from the subsystem API first
BasicCharacterTableau basicCharacterTableau = ...;
basicCharacterTableau.DeserializeCharacterCode("example");
```

### RotateCharacter
`public void RotateCharacter(bool value)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BasicCharacterTableau from the subsystem API first
BasicCharacterTableau basicCharacterTableau = ...;
basicCharacterTableau.RotateCharacter(false);
```

### SetBannerCode
`public void SetBannerCode(string value)`

**Purpose:** Assigns a new value to `banner code` and updates the object's internal state.

```csharp
// Obtain an instance of BasicCharacterTableau from the subsystem API first
BasicCharacterTableau basicCharacterTableau = ...;
basicCharacterTableau.SetBannerCode("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BasicCharacterTableau basicCharacterTableau = ...;
basicCharacterTableau.OnTick(0);
```

## See Also

- [Area Index](../)