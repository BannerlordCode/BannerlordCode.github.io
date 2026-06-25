---
title: "InitializationArgs"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InitializationArgs`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InitializationArgs

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class InitializationArgs`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/LordPartyComponent.cs`

## Overview

`InitializationArgs` lives in `TaleWorlds.CampaignSystem.Party.PartyComponents` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Party.PartyComponents` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### InitializeLordPartyProperties
`public void InitializeLordPartyProperties(MobileParty mobileParty, Hero owner)`

**Purpose:** Initializes the state, resources, or bindings for `lord party properties`.

## Usage Example

```csharp
var value = new InitializationArgs();
value.InitializeLordPartyProperties(mobileParty, owner);
```

## See Also

- [Complete Class Catalog](../catalog)