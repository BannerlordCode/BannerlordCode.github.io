---
title: "CharacterImageIdentifierVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterImageIdentifierVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterImageIdentifierVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.ImageIdentifiers
**Module:** TaleWorlds.Core
**Type:** `public class CharacterImageIdentifierVM : ImageIdentifierVM`
**Base:** `ImageIdentifierVM`
**File:** `TaleWorlds.Core.ViewModelCollection/ImageIdentifiers/CharacterImageIdentifierVM.cs`

## Overview

`CharacterImageIdentifierVM` lives in `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new CharacterImageIdentifierVM();
```

## See Also

- [Complete Class Catalog](../catalog)