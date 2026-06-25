---
title: "PartyComponent"
description: "Auto-generated class reference for PartyComponent."
---
# PartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyComponent`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/PartyComponent.cs`

## Overview

`PartyComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `PartyComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MobileParty` | `public MobileParty MobileParty { get; }` |
| `PartyOwner` | `public abstract Hero PartyOwner { get; }` |
| `Name` | `public abstract TextObject Name { get; }` |
| `HomeSettlement` | `public abstract Settlement HomeSettlement { get; }` |

## Key Methods

### OnPartyComponentCreatedDelegate
`public delegate void OnPartyComponentCreatedDelegate(MobileParty mobileParty)`

**Purpose:** Invoked when the `party component created delegate` event is raised.

```csharp
// Obtain an instance of PartyComponent from the subsystem API first
PartyComponent partyComponent = ...;
partyComponent.OnPartyComponentCreatedDelegate(mobileParty);
```

### SetWagePaymentLimit
`public virtual void SetWagePaymentLimit(int newLimit)`

**Purpose:** Assigns a new value to `wage payment limit` and updates the object's internal state.

```csharp
// Obtain an instance of PartyComponent from the subsystem API first
PartyComponent partyComponent = ...;
partyComponent.SetWagePaymentLimit(0);
```

### GetDefaultComponentBanner
`public abstract Banner GetDefaultComponentBanner()`

**Purpose:** Reads and returns the `default component banner` value held by the current object.

```csharp
// Obtain an instance of PartyComponent from the subsystem API first
PartyComponent partyComponent = ...;
var result = partyComponent.GetDefaultComponentBanner();
```

### ClearCachedName
`public virtual void ClearCachedName()`

**Purpose:** Removes all `cached name` from the current object.

```csharp
// Obtain an instance of PartyComponent from the subsystem API first
PartyComponent partyComponent = ...;
partyComponent.ClearCachedName();
```

### ChangePartyLeader
`public void ChangePartyLeader(Hero newLeader)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PartyComponent from the subsystem API first
PartyComponent partyComponent = ...;
partyComponent.ChangePartyLeader(newLeader);
```

### GetMountAndHarnessVisualIdsForPartyIcon
`public virtual void GetMountAndHarnessVisualIdsForPartyIcon(PartyBase party, out string mountStringId, out string harnessStringId)`

**Purpose:** Reads and returns the `mount and harness visual ids for party icon` value held by the current object.

```csharp
// Obtain an instance of PartyComponent from the subsystem API first
PartyComponent partyComponent = ...;
partyComponent.GetMountAndHarnessVisualIdsForPartyIcon(party, mountStringId, harnessStringId);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PartyComponent instance = ...;
```

## See Also

- [Area Index](../)