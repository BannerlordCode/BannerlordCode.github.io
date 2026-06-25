---
title: "GenericImageIdentifierVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GenericImageIdentifierVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GenericImageIdentifierVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.ImageIdentifiers
**Module:** TaleWorlds.Core
**Type:** `public class GenericImageIdentifierVM : ImageIdentifierVM`
**Base:** `ImageIdentifierVM`
**File:** `TaleWorlds.Core.ViewModelCollection/ImageIdentifiers/GenericImageIdentifierVM.cs`

## Overview

`GenericImageIdentifierVM` lives in `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new GenericImageIdentifierVM();
```

## See Also

- [Complete Class Catalog](../catalog)