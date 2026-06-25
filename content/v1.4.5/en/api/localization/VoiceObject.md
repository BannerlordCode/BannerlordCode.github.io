---
title: "VoiceObject"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VoiceObject`
- [← Area / Back to localization](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VoiceObject

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public class VoiceObject`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization/VoiceObject.cs`

## Overview

`VoiceObject` lives in `TaleWorlds.Localization` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddVoicePaths
`public void AddVoicePaths(XmlNode node, string modulePath)`

**Purpose:** Adds `voice paths` to the current collection or state.

### Deserialize
`public static VoiceObject Deserialize(XmlNode node, string modulePath)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
var value = new VoiceObject();
value.AddVoicePaths(node, "example");
```

## See Also

- [Complete Class Catalog](../catalog)