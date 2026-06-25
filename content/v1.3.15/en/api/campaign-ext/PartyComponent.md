---
title: "PartyComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyComponent`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/PartyComponent.cs`

## Overview

`PartyComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `PartyComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MobileParty` | `public MobileParty MobileParty { get; }` |
| `Party` | `public PartyBase Party { get; }` |
| `PartyOwner` | `public abstract Hero PartyOwner { get; }` |
| `Name` | `public abstract TextObject Name { get; }` |
| `HomeSettlement` | `public abstract Settlement HomeSettlement { get; }` |
| `AvoidHostileActions` | `public virtual bool AvoidHostileActions { get; }` |
| `WagePaymentLimit` | `public virtual int WagePaymentLimit { get; }` |
| `Leader` | `public virtual Hero Leader { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `CanHaveNavalNavigationCapability` | `public virtual bool CanHaveNavalNavigationCapability { get; }` |
| `CanHaveLandNavigationCapability` | `public virtual bool CanHaveLandNavigationCapability { get; }` |

## Key Methods

### SetWagePaymentLimit
`public virtual void SetWagePaymentLimit(int newLimit)`

**Purpose:** Sets the value or state of `wage payment limit`.

### GetDefaultComponentBanner
`public abstract Banner GetDefaultComponentBanner()`

**Purpose:** Gets the current value of `default component banner`.

### ClearCachedName
`public virtual void ClearCachedName()`

**Purpose:** Handles logic related to `clear cached name`.

### ChangePartyLeader
`public void ChangePartyLeader(Hero newLeader)`

**Purpose:** Handles logic related to `change party leader`.

### GetMountAndHarnessVisualIdsForPartyIcon
`public virtual void GetMountAndHarnessVisualIdsForPartyIcon(PartyBase party, out string mountStringId, out string harnessStringId)`

**Purpose:** Gets the current value of `mount and harness visual ids for party icon`.

### OnPartyComponentCreatedDelegate
`public delegate void OnPartyComponentCreatedDelegate(MobileParty mobileParty)`

**Purpose:** Called when the `party component created delegate` event is raised.

## Usage Example

```csharp
var implementation = new CustomPartyComponent();
```

## See Also

- [Complete Class Catalog](../catalog)