<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SoundProperties`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SoundProperties

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `SoundProperties` is a class in the `TaleWorlds.GauntletUI` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `RegisteredStateSounds` | `public IEnumerable<KeyValuePair<string, AudioProperty>> RegisteredStateSounds { get; }` |
| `RegisteredEventSounds` | `public IEnumerable<KeyValuePair<string, AudioProperty>> RegisteredEventSounds { get; }` |


## Key Methods

### AddStateSound

```csharp
public void AddStateSound(string state, AudioProperty audioProperty)
```

### AddEventSound

```csharp
public void AddEventSound(string state, AudioProperty audioProperty)
```

### FillFrom

```csharp
public void FillFrom(SoundProperties soundProperties)
```

### GetEventAudioProperty

```csharp
public AudioProperty GetEventAudioProperty(string eventName)
```

### GetStateAudioProperty

```csharp
public AudioProperty GetStateAudioProperty(string stateName)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)