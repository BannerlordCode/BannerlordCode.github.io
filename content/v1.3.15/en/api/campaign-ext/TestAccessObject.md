---
title: "TestAccessObject"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TestAccessObject`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TestAccessObject

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public class TestAccessObject : AccessObject`
**Base:** `AccessObject`
**File:** `TaleWorlds.Diamond/TestAccessObject.cs`

## Overview

`TestAccessObject` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UserName` | `public string UserName { get; }` |
| `Password` | `public string Password { get; }` |

## Usage Example

```csharp
var value = new TestAccessObject();
```

## See Also

- [Complete Class Catalog](../catalog)