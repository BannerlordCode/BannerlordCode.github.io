---
title: "JsonLoadSettings"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonLoadSettings`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonLoadSettings

**Namespace:** Newtonsoft.Json.Linq
**Module:** Newtonsoft.Json
**Type:** `public class JsonLoadSettings`
**Base:** none
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Linq/JsonLoadSettings.cs`

## Overview

`JsonLoadSettings` lives in `Newtonsoft.Json.Linq` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Linq` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CommentHandling` | `public CommentHandling CommentHandling { get; set; }` |
| `LineInfoHandling` | `public LineInfoHandling LineInfoHandling { get; set; }` |
| `DuplicatePropertyNameHandling` | `public DuplicatePropertyNameHandling DuplicatePropertyNameHandling { get; set; }` |

## Usage Example

```csharp
var example = new JsonLoadSettings();
```

## See Also

- [Complete Class Catalog](../catalog)