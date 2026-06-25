---
title: "SettlementComponent"
description: "Auto-generated class reference for SettlementComponent."
---
# SettlementComponent

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementComponent : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/SettlementComponent.cs`

## Overview

`SettlementComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `SettlementComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Gold` | `public int Gold { get; }` |
| `BackgroundCropPosition` | `public float BackgroundCropPosition { get; set; }` |
| `BackgroundMeshName` | `public string BackgroundMeshName { get; set; }` |
| `WaitMeshName` | `public string WaitMeshName { get; set; }` |
| `CastleBackgroundMeshName` | `public string CastleBackgroundMeshName { get; set; }` |
| `Owner` | `public PartyBase Owner { get; set; }` |
| `MapFaction` | `public abstract IFaction MapFaction { get; set; }` |
| `IsOwnerUnassigned` | `public bool IsOwnerUnassigned { get; set; }` |

## Key Methods

### GetProsperityLevel
`public virtual ProsperityLevel GetProsperityLevel()`

**Purpose:** Reads and returns the `prosperity level` value held by the current object.

```csharp
// Obtain an instance of SettlementComponent from the subsystem API first
SettlementComponent settlementComponent = ...;
var result = settlementComponent.GetProsperityLevel();
```

### GetDefaultComponentBanner
`public virtual Banner GetDefaultComponentBanner()`

**Purpose:** Reads and returns the `default component banner` value held by the current object.

```csharp
// Obtain an instance of SettlementComponent from the subsystem API first
SettlementComponent settlementComponent = ...;
var result = settlementComponent.GetDefaultComponentBanner();
```

### OnPartyEntered
`public virtual void OnPartyEntered(MobileParty mobileParty)`

**Purpose:** Invoked when the `party entered` event is raised.

```csharp
// Obtain an instance of SettlementComponent from the subsystem API first
SettlementComponent settlementComponent = ...;
settlementComponent.OnPartyEntered(mobileParty);
```

### OnPartyLeft
`public virtual void OnPartyLeft(MobileParty mobileParty)`

**Purpose:** Invoked when the `party left` event is raised.

```csharp
// Obtain an instance of SettlementComponent from the subsystem API first
SettlementComponent settlementComponent = ...;
settlementComponent.OnPartyLeft(mobileParty);
```

### OnInit
`public virtual void OnInit()`

**Purpose:** Invoked when the `init` event is raised.

```csharp
// Obtain an instance of SettlementComponent from the subsystem API first
SettlementComponent settlementComponent = ...;
settlementComponent.OnInit();
```

### OnSessionStart
`public virtual void OnSessionStart()`

**Purpose:** Invoked when the `session start` event is raised.

```csharp
// Obtain an instance of SettlementComponent from the subsystem API first
SettlementComponent settlementComponent = ...;
settlementComponent.OnSessionStart();
```

### ChangeGold
`public void ChangeGold(int changeAmount)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SettlementComponent from the subsystem API first
SettlementComponent settlementComponent = ...;
settlementComponent.ChangeGold(0);
```

### GetNumberOfTroops
`public int GetNumberOfTroops()`

**Purpose:** Reads and returns the `number of troops` value held by the current object.

```csharp
// Obtain an instance of SettlementComponent from the subsystem API first
SettlementComponent settlementComponent = ...;
var result = settlementComponent.GetNumberOfTroops();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the current object from serialized data.

```csharp
// Obtain an instance of SettlementComponent from the subsystem API first
SettlementComponent settlementComponent = ...;
settlementComponent.Deserialize(objectManager, node);
```

### GetItemPrice
`public virtual int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)`

**Purpose:** Reads and returns the `item price` value held by the current object.

```csharp
// Obtain an instance of SettlementComponent from the subsystem API first
SettlementComponent settlementComponent = ...;
var result = settlementComponent.GetItemPrice(item, null, false);
```

### GetItemPrice
`public virtual int GetItemPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false)`

**Purpose:** Reads and returns the `item price` value held by the current object.

```csharp
// Obtain an instance of SettlementComponent from the subsystem API first
SettlementComponent settlementComponent = ...;
var result = settlementComponent.GetItemPrice(itemRosterElement, null, false);
```

### OnRelatedPartyRemoved
`public virtual void OnRelatedPartyRemoved(MobileParty mobileParty)`

**Purpose:** Invoked when the `related party removed` event is raised.

```csharp
// Obtain an instance of SettlementComponent from the subsystem API first
SettlementComponent settlementComponent = ...;
settlementComponent.OnRelatedPartyRemoved(mobileParty);
```

### GetPrisonerHeroes
`public List<CharacterObject> GetPrisonerHeroes()`

**Purpose:** Reads and returns the `prisoner heroes` value held by the current object.

```csharp
// Obtain an instance of SettlementComponent from the subsystem API first
SettlementComponent settlementComponent = ...;
var result = settlementComponent.GetPrisonerHeroes();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SettlementComponent instance = ...;
```

## See Also

- [Area Index](../)