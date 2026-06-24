<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyTemplateObject`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyTemplateObject

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class PartyTemplateObject : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Party/PartyTemplateObject.cs`

## Overview

`PartyTemplateObject` lives in `TaleWorlds.CampaignSystem.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### GetUpperTroopLimit
`public int GetUpperTroopLimit()`

**Purpose:** Gets the current value of `upper troop limit`.

### GetLowerTroopLimit
`public int GetLowerTroopLimit()`

**Purpose:** Gets the current value of `lower troop limit`.

## Usage Example

```csharp
var value = new PartyTemplateObject();
value.Deserialize(objectManager, node);
```

## See Also

- [Complete Class Catalog](../catalog)