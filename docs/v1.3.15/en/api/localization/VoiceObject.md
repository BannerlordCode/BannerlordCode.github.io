<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VoiceObject`
- [← Area / Back to localization](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VoiceObject

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public class VoiceObject`
**Area:** localization

## Overview

`VoiceObject` lives in `TaleWorlds.Localization`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Localization` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `VoicePaths` | `public MBReadOnlyList<string> VoicePaths { get; }` |

## Key Methods

### AddVoicePaths
`public void AddVoicePaths(XmlNode node, string modulePath)`

**Purpose:** Adds `voice paths` to the current collection or state.

### Deserialize
`public static VoiceObject Deserialize(XmlNode node, string modulePath)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
// First obtain a VoiceObject instance from game state, then call one of its public methods
var value = new VoiceObject();
value.AddVoicePaths(node, "example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-localization)
