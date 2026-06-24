<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AIDifficulty`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AIDifficulty

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public enum AIDifficulty`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/BoardGameHelper.cs`

## Overview

`AIDifficulty` lives in `Helpers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Helpers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
AIDifficulty example = AIDifficulty.Value;
```

## See Also

- [Complete Class Catalog](../catalog)