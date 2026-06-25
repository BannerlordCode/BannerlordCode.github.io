---
title: "TokenType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TokenType`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TokenType

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public enum TokenType`
**Base:** none
**File:** `TaleWorlds.TwoDimension/TextToken.cs`

## Overview

`TokenType` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
TokenType example = TokenType.Value;
```

## See Also

- [Complete Class Catalog](../catalog)