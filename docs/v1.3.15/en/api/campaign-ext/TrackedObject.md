<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TrackedObject`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TrackedObject

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TrackedObject`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/TrackedObject.cs`

## Overview

`TrackedObject` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Position` | `public Vec3 Position { get; }` |

## Key Methods

### Compare
`public bool Compare(TrackedObject obj)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new TrackedObject();
value.Compare(obj);
```

## See Also

- [Complete Class Catalog](../catalog)