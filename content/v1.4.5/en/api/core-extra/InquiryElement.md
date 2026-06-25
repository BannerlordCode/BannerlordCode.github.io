---
title: "InquiryElement"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InquiryElement`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InquiryElement

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class InquiryElement`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/InquiryElement.cs`

## Overview

`InquiryElement` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### HasSameContentWith
`public bool HasSameContentWith(object other)`

**Purpose:** Checks whether the current object has/contains `same content with`.

## Usage Example

```csharp
var value = new InquiryElement();
value.HasSameContentWith(other);
```

## See Also

- [Complete Class Catalog](../catalog)