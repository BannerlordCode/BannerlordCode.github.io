---
title: "InquiryElement"
description: "Auto-generated class reference for InquiryElement."
---
# InquiryElement

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class InquiryElement`
**Base:** none
**File:** `TaleWorlds.Core/InquiryElement.cs`

## Overview

`InquiryElement` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### HasSameContentWith
`public bool HasSameContentWith(object other)`

**Purpose:** **Purpose:** Determines whether the this instance already holds same content with.

```csharp
// Obtain an instance of InquiryElement from the subsystem API first
InquiryElement inquiryElement = ...;
var result = inquiryElement.HasSameContentWith(other);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
InquiryElement inquiryElement = ...;
inquiryElement.HasSameContentWith(other);
```

## See Also

- [Area Index](../)