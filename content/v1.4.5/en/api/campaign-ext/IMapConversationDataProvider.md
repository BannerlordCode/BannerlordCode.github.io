---
title: "IMapConversationDataProvider"
description: "Auto-generated class reference for IMapConversationDataProvider."
---
# IMapConversationDataProvider

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public interface IMapConversationDataProvider`
**Base:** none
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/IMapConversationDataProvider.cs`

## Overview

`IMapConversationDataProvider` lives in `SandBox.View.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIMapConversationDataProvider service = ...;
```

## See Also

- [Area Index](../)