<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Hideout`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Hideout

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Hideout : SettlementComponent, ISpottable`
**Base:** `SettlementComponent`
**File:** `TaleWorlds.CampaignSystem/Settlements/Hideout.cs`

## Overview

`Hideout` lives in `TaleWorlds.CampaignSystem.Settlements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NextPossibleAttackTime` | `public CampaignTime NextPossibleAttackTime { get; }` |
| `All` | `public static MBReadOnlyList<Hideout> All { get; }` |
| `IsInfested` | `public bool IsInfested { get; }` |
| `MapFaction` | `public override IFaction MapFaction { get; }` |
| `IsSpotted` | `public bool IsSpotted { get; set; }` |

## Key Methods

### SetNextPossibleAttackTime
`public void SetNextPossibleAttackTime(CampaignTime hiddenDurationFromNow)`

**Purpose:** Sets the value or state of `next possible attack time`.

### GetDefenderParties
`public IEnumerable<PartyBase> GetDefenderParties(MapEvent.BattleTypes battleType)`

**Purpose:** Gets the current value of `defender parties`.

### GetNextDefenderParty
`public PartyBase GetNextDefenderParty(ref int partyIndex, MapEvent.BattleTypes battleType)`

**Purpose:** Gets the current value of `next defender party`.

### OnPartyEntered
`public override void OnPartyEntered(MobileParty mobileParty)`

**Purpose:** Called when the `party entered` event is raised.

### OnPartyLeft
`public override void OnPartyLeft(MobileParty mobileParty)`

**Purpose:** Called when the `party left` event is raised.

### OnRelatedPartyRemoved
`public override void OnRelatedPartyRemoved(MobileParty mobileParty)`

**Purpose:** Called when the `related party removed` event is raised.

### OnInit
`public override void OnInit()`

**Purpose:** Called when the `init` event is raised.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
var value = new Hideout();
value.SetNextPossibleAttackTime(hiddenDurationFromNow);
```

## See Also

- [Complete Class Catalog](../catalog)