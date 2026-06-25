---
title: "SoundProperties"
description: "Auto-generated class reference for SoundProperties."
---
# SoundProperties

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class SoundProperties`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/SoundProperties.cs`

## Overview

`SoundProperties` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RegisteredStateSounds` | `public IEnumerable<KeyValuePair<string, AudioProperty>> RegisteredStateSounds { get; }` |
| `RegisteredEventSounds` | `public IEnumerable<KeyValuePair<string, AudioProperty>> RegisteredEventSounds { get; }` |

## Key Methods

### AddStateSound
`public void AddStateSound(string state, AudioProperty audioProperty)`

**Purpose:** Adds `state sound` to the current collection or state.

```csharp
// Obtain an instance of SoundProperties from the subsystem API first
SoundProperties soundProperties = ...;
soundProperties.AddStateSound("example", audioProperty);
```

### AddEventSound
`public void AddEventSound(string state, AudioProperty audioProperty)`

**Purpose:** Adds `event sound` to the current collection or state.

```csharp
// Obtain an instance of SoundProperties from the subsystem API first
SoundProperties soundProperties = ...;
soundProperties.AddEventSound("example", audioProperty);
```

### FillFrom
`public void FillFrom(SoundProperties soundProperties)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SoundProperties from the subsystem API first
SoundProperties soundProperties = ...;
soundProperties.FillFrom(soundProperties);
```

### GetEventAudioProperty
`public AudioProperty GetEventAudioProperty(string eventName)`

**Purpose:** Reads and returns the `event audio property` value held by the current object.

```csharp
// Obtain an instance of SoundProperties from the subsystem API first
SoundProperties soundProperties = ...;
var result = soundProperties.GetEventAudioProperty("example");
```

### GetStateAudioProperty
`public AudioProperty GetStateAudioProperty(string stateName)`

**Purpose:** Reads and returns the `state audio property` value held by the current object.

```csharp
// Obtain an instance of SoundProperties from the subsystem API first
SoundProperties soundProperties = ...;
var result = soundProperties.GetStateAudioProperty("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SoundProperties soundProperties = ...;
soundProperties.AddStateSound("example", audioProperty);
```

## See Also

- [Area Index](../)