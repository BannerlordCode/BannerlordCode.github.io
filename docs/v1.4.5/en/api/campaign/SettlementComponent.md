<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementComponent`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementComponent

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementComponent : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/SettlementComponent.cs`

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

**Purpose:** Gets the current value of `prosperity level`.

### GetDefaultComponentBanner
`public virtual Banner GetDefaultComponentBanner()`

**Purpose:** Gets the current value of `default component banner`.

### OnPartyEntered
`public virtual void OnPartyEntered(MobileParty mobileParty)`

**Purpose:** Called when the `party entered` event is raised.

### OnPartyLeft
`public virtual void OnPartyLeft(MobileParty mobileParty)`

**Purpose:** Called when the `party left` event is raised.

### OnInit
`public virtual void OnInit()`

**Purpose:** Called when the `init` event is raised.

### OnSessionStart
`public virtual void OnSessionStart()`

**Purpose:** Called when the `session start` event is raised.

### ChangeGold
`public void ChangeGold(int changeAmount)`

**Purpose:** Handles logic related to `change gold`.

### GetNumberOfTroops
`public int GetNumberOfTroops()`

**Purpose:** Gets the current value of `number of troops`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### GetItemPrice
`public virtual int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)`

**Purpose:** Gets the current value of `item price`.

### GetItemPrice
`public virtual int GetItemPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false)`

**Purpose:** Gets the current value of `item price`.

### OnRelatedPartyRemoved
`public virtual void OnRelatedPartyRemoved(MobileParty mobileParty)`

**Purpose:** Called when the `related party removed` event is raised.

### GetPrisonerHeroes
`public List<CharacterObject> GetPrisonerHeroes()`

**Purpose:** Gets the current value of `prisoner heroes`.

## Usage Example

```csharp
var implementation = new CustomSettlementComponent();
```

## See Also

- [Complete Class Catalog](../catalog)