---
title: "AudioProperty"
description: "Auto-generated class reference for AudioProperty."
---
# AudioProperty

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class AudioProperty`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/AudioProperty.cs`

## Overview

`AudioProperty` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AudioName` | `public string AudioName { get; set; }` |
| `Delay` | `public bool Delay { get; set; }` |
| `DelaySeconds` | `public float DelaySeconds { get; set; }` |

## Key Methods

### FillFrom
`public void FillFrom(AudioProperty audioProperty)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AudioProperty from the subsystem API first
AudioProperty audioProperty = ...;
audioProperty.FillFrom(audioProperty);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AudioProperty audioProperty = ...;
audioProperty.FillFrom(audioProperty);
```

## See Also

- [Area Index](../)