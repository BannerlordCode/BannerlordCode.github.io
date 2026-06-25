---
title: "BannerImageIdentifier"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerImageIdentifier`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerImageIdentifier

**Namespace:** TaleWorlds.Core.ImageIdentifiers
**Module:** TaleWorlds.Core
**Type:** `public class BannerImageIdentifier : ImageIdentifier`
**Base:** `ImageIdentifier`
**File:** `TaleWorlds.Core/ImageIdentifiers/BannerImageIdentifier.cs`

## Overview

`BannerImageIdentifier` lives in `TaleWorlds.Core.ImageIdentifiers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ImageIdentifiers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new BannerImageIdentifier();
```

## See Also

- [Complete Class Catalog](../catalog)