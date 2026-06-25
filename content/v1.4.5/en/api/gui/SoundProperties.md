---
title: "SoundProperties"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SoundProperties`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SoundProperties

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class SoundProperties`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/SoundProperties.cs`

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

### AddEventSound
`public void AddEventSound(string state, AudioProperty audioProperty)`

**Purpose:** Adds `event sound` to the current collection or state.

### FillFrom
`public void FillFrom(SoundProperties soundProperties)`

**Purpose:** Handles logic related to `fill from`.

### GetEventAudioProperty
`public AudioProperty GetEventAudioProperty(string eventName)`

**Purpose:** Gets the current value of `event audio property`.

### GetStateAudioProperty
`public AudioProperty GetStateAudioProperty(string stateName)`

**Purpose:** Gets the current value of `state audio property`.

## Usage Example

```csharp
var value = new SoundProperties();
value.AddStateSound("example", audioProperty);
```

## See Also

- [Complete Class Catalog](../catalog)