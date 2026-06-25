---
title: "LegacyGameDataDeserializer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LegacyGameDataDeserializer`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LegacyGameDataDeserializer

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public static class LegacyGameDataDeserializer`
**Area:** save-system

## Overview

`LegacyGameDataDeserializer` lives in `TaleWorlds.SaveSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Deserialize
`public static GameData Deserialize(Stream stream)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
LegacyGameDataDeserializer.Deserialize(stream);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
