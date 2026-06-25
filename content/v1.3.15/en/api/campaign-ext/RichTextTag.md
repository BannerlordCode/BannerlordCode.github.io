---
title: "RichTextTag"
description: "Auto-generated class reference for RichTextTag."
---
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

**Purpose:** **Purpose:** Adds atrribute to the current collection or state.

```csharp
// Obtain an instance of RichTextTag from the subsystem API first
RichTextTag richTextTag = ...;
richTextTag.AddAtrribute("example", "example");
```

### GetAttribute
`public string GetAttribute(string key)`

**Purpose:** **Purpose:** Reads and returns the attribute value held by the this instance.

```csharp
// Obtain an instance of RichTextTag from the subsystem API first
RichTextTag richTextTag = ...;
var result = richTextTag.GetAttribute("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RichTextTag richTextTag = ...;
richTextTag.AddAtrribute("example", "example");
```

## See Also

- [Area Index](../)