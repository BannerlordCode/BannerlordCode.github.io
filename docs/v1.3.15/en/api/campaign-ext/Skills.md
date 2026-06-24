<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Skills`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Skills

**Namespace:** TaleWorlds.CampaignSystem.Extensions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Skills`
**Area:** campaign-ext

## Overview

`Skills` lives in `TaleWorlds.CampaignSystem.Extensions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Extensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `All` | `public static MBReadOnlyList<SkillObject> All { get; }` |

## Key Methods

### GetSkill
`public static SkillObject GetSkill(int i)`

**Purpose:** Gets the current value of `skill`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Skills.GetSkill(0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
