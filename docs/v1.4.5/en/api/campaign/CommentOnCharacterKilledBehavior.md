<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CommentOnCharacterKilledBehavior`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CommentOnCharacterKilledBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors.CommentBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CommentOnCharacterKilledBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.CommentBehaviors/CommentOnCharacterKilledBehavior.cs`

## Overview

`CommentOnCharacterKilledBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors.CommentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors.CommentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

## Usage Example

```csharp
var value = new CommentOnCharacterKilledBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)