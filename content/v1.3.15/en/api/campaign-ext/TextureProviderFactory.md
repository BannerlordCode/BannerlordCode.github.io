---
title: "TextureProviderFactory"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextureProviderFactory`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextureProviderFactory

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class TextureProviderFactory`
**Area:** campaign-ext

## Overview

`TextureProviderFactory` lives in `TaleWorlds.GauntletUI`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateInstance
`public static TextureProvider CreateInstance(string textureProviderName)`

**Purpose:** Creates a new `instance` instance or object.

### RefreshProviderTypes
`public static void RefreshProviderTypes()`

**Purpose:** Refreshes the display or cache of `provider types`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
TextureProviderFactory.CreateInstance("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
