<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EducationCharacterProperties`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EducationCharacterProperties

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct EducationCharacterProperties`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/EducationCampaignBehavior.cs`

## Overview

`EducationCharacterProperties` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Equals
`public bool Equals(EducationCampaignBehavior.EducationCharacterProperties other)`

**Purpose:** Handles logic related to `equals`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### GetUsedHandBoneIndex
`public sbyte GetUsedHandBoneIndex()`

**Purpose:** Gets the current value of `used hand bone index`.

## Usage Example

```csharp
var value = new EducationCharacterProperties();
value.Equals(other);
```

## See Also

- [Complete Class Catalog](../catalog)