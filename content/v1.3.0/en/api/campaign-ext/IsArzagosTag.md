---
title: "IsArzagosTag"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IsArzagosTag`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IsArzagosTag

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class IsArzagosTag : ConversationTag`
**Base:** `ConversationTag`
**File:** `StoryMode/IsArzagosTag.cs`

## Overview

`IsArzagosTag` lives in `StoryMode` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringId` | `public override string StringId { get; }` |

## Key Methods

### IsApplicableTo
`public override bool IsApplicableTo(CharacterObject character)`

**Purpose:** Handles logic related to `is applicable to`.

## Usage Example

```csharp
var value = new IsArzagosTag();
value.IsApplicableTo(character);
```

## See Also

- [Complete Class Catalog](../catalog)