---
title: "ItemImageIdentifierVM"
description: "Auto-generated class reference for ItemImageIdentifierVM."
---
# ItemImageIdentifierVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.ImageIdentifiers
**Module:** TaleWorlds.Core
**Type:** `public class ItemImageIdentifierVM : ImageIdentifierVM`
**Base:** `ImageIdentifierVM`
**File:** `TaleWorlds.Core.ViewModelCollection/ImageIdentifiers/ItemImageIdentifierVM.cs`

## Overview

`ItemImageIdentifierVM` lives in `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Clone
`public ItemImageIdentifierVM Clone()`

**Purpose:** Duplicates the this instance's state and returns a new instance.

```csharp
// Obtain an instance of ItemImageIdentifierVM from the subsystem API first
ItemImageIdentifierVM itemImageIdentifierVM = ...;
var result = itemImageIdentifierVM.Clone();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemImageIdentifierVM itemImageIdentifierVM = ...;
itemImageIdentifierVM.Clone();
```

## See Also

- [Area Index](../)