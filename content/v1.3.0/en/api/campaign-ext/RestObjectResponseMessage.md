---
title: "RestObjectResponseMessage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RestObjectResponseMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RestObjectResponseMessage

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public class RestObjectResponseMessage : RestResponseMessage`
**Base:** `RestResponseMessage`
**File:** `TaleWorlds.Diamond/Rest/RestObjectResponseMessage.cs`

## Overview

`RestObjectResponseMessage` lives in `TaleWorlds.Diamond.Rest` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.Rest` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetMessage
`public override Message GetMessage()`

**Purpose:** Gets the current value of `message`.

## Usage Example

```csharp
var value = new RestObjectResponseMessage();
value.GetMessage();
```

## See Also

- [Complete Class Catalog](../catalog)