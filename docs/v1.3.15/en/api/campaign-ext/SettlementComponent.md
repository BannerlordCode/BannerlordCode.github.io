<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementComponent

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementComponent : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Settlements/SettlementComponent.cs`

## Overview

`SettlementComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<SettlementComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `Gold` | `public int Gold { get; }` |
| `BackgroundCropPosition` | `public float BackgroundCropPosition { get; set; }` |
| `BackgroundMeshName` | `public string BackgroundMeshName { get; set; }` |
| `WaitMeshName` | `public string WaitMeshName { get; set; }` |
| `CastleBackgroundMeshName` | `public string CastleBackgroundMeshName { get; set; }` |
| `Owner` | `public PartyBase Owner { get; set; }` |
| `Settlement` | `public Settlement Settlement { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `MapFaction` | `public abstract IFaction MapFaction { get; }` |
| `Name` | `public TextObject Name { get; set; }` |
| `IsOwnerUnassigned` | `public bool IsOwnerUnassigned { get; set; }` |
| `IsTown` | `public virtual bool IsTown { get; }` |
| `IsCastle` | `public virtual bool IsCastle { get; }` |

## Key Methods

### GetProsperityLevel
```csharp
public virtual SettlementComponent.ProsperityLevel GetProsperityLevel()
```

### GetDefaultComponentBanner
```csharp
public virtual Banner GetDefaultComponentBanner()
```

### OnPartyEntered
```csharp
public virtual void OnPartyEntered(MobileParty mobileParty)
```

### OnPartyLeft
```csharp
public virtual void OnPartyLeft(MobileParty mobileParty)
```

### OnInit
```csharp
public virtual void OnInit()
```

### OnSessionStart
```csharp
public virtual void OnSessionStart()
```

### ChangeGold
```csharp
public void ChangeGold(int changeAmount)
```

### GetNumberOfTroops
```csharp
public int GetNumberOfTroops()
```

### Deserialize
```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

### GetItemPrice
```csharp
public virtual int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)
```

### GetItemPrice
```csharp
public virtual int GetItemPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false)
```

### OnRelatedPartyRemoved
```csharp
public virtual void OnRelatedPartyRemoved(MobileParty mobileParty)
```

### GetPrisonerHeroes
```csharp
public List<CharacterObject> GetPrisonerHeroes()
```

## Usage Example

```csharp
// Typical usage of SettlementComponent (Component)
agent.GetComponent<SettlementComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)