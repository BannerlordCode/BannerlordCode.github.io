---
title: "PartyLeaderChangeNotification"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyLeaderChangeNotification`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyLeaderChangeNotification

**Namespace:** TaleWorlds.CampaignSystem.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyLeaderChangeNotification : InformationData`
**Base:** `InformationData`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapNotificationTypes/PartyLeaderChangeNotification.cs`

## Overview

`PartyLeaderChangeNotification` lives in `TaleWorlds.CampaignSystem.MapNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Party` | `public MobileParty Party { get; }` |

## Key Methods

### IsValid
`public override bool IsValid()`

**Purpose:** Handles logic related to `is valid`.

## Usage Example

```csharp
var value = new PartyLeaderChangeNotification();
value.IsValid();
```

## See Also

- [Complete Class Catalog](../catalog)