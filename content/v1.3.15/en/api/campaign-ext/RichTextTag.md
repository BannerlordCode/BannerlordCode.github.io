---
title: "RichTextTag"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RichTextTag`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RichTextTag

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class RichTextTag`
**Base:** none
**File:** `TaleWorlds.TwoDimension/RichTextTag.cs`

## Overview

`RichTextTag` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Type` | `public RichTextTagType Type { get; set; }` |

## Key Methods

### AddAtrribute
`public void AddAtrribute(string key, string value)`

**Purpose:** Adds `atrribute` to the current collection or state.

### GetAttribute
`public string GetAttribute(string key)`

**Purpose:** Gets the current value of `attribute`.

## Usage Example

```csharp
var value = new RichTextTag();
value.AddAtrribute("example", "example");
```

## See Also

- [Complete Class Catalog](../catalog)