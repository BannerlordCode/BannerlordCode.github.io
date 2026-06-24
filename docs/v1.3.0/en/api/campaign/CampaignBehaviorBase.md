<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignBehaviorBase`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
- [🔀 Cross-Version Compare /versions/CampaignBehaviorBase](/versions/CampaignBehaviorBase)
<!-- END BREADCRUMB -->
# CampaignBehaviorBase

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignBehaviorBase : ICampaignBehavior`
**Base:** `ICampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviorBase.cs`

## Overview

`CampaignBehaviorBase` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public abstract void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public abstract void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

## Usage Example

```csharp
var implementation = new CustomCampaignBehaviorBase();
```

## See Also

- [Complete Class Catalog](../catalog)