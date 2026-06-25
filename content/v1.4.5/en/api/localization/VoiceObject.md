---
title: "VoiceObject"
description: "Auto-generated class reference for VoiceObject."
---
# VoiceObject

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public class VoiceObject`
**Base:** none
**File:** `bin/TaleWorlds.Localization/TaleWorlds.Localization/VoiceObject.cs`

## Overview

`VoiceObject` lives in `TaleWorlds.Localization` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddVoicePaths
`public void AddVoicePaths(XmlNode node, string modulePath)`

**Purpose:** Adds `voice paths` to the current collection or state.

```csharp
// Obtain an instance of VoiceObject from the subsystem API first
VoiceObject voiceObject = ...;
voiceObject.AddVoicePaths(node, "example");
```

### Deserialize
`public static VoiceObject Deserialize(XmlNode node, string modulePath)`

**Purpose:** Restores the current object from serialized data.

```csharp
// Static call; no instance required
VoiceObject.Deserialize(node, "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VoiceObject voiceObject = ...;
voiceObject.AddVoicePaths(node, "example");
```

## See Also

- [Area Index](../)