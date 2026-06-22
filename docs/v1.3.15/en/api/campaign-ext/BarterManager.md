<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BarterManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BarterManager

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BarterManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/BarterSystem/BarterManager.cs`

## Overview

`BarterManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static BarterManager Instance { get; set; }` |
| `LastBarterIsAccepted` | `public bool LastBarterIsAccepted { get; set; }` |

## Key Methods

### BeginPlayerBarter
```csharp
public void BeginPlayerBarter(BarterData args)
```

### StartBarterOffer
```csharp
public void StartBarterOffer(Hero offerer, Hero other, PartyBase offererParty, PartyBase otherParty, Hero beneficiaryOfOtherHero = null, BarterManager.BarterContextInitializer InitContext = null, int persuasionCostReduction = 0, bool isAIBarter = false, IEnumerable<Barterable> defaultBarterables = null)
```

### ExecuteAiBarter
```csharp
public void ExecuteAiBarter(IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero, Barterable barterable)
```

### ExecuteAiBarter
```csharp
public void ExecuteAiBarter(IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero, IEnumerable<Barterable> baseBarterables)
```

### ExecuteAIBarter
```csharp
public void ExecuteAIBarter(BarterData barterData, IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero)
```

### Close
```csharp
public void Close()
```

### IsOfferAcceptable
```csharp
public bool IsOfferAcceptable(BarterData args, Hero hero, PartyBase party)
```

### GetOfferValueForFaction
```csharp
public float GetOfferValueForFaction(BarterData barterData, IFaction faction)
```

### GetOfferValue
```csharp
public float GetOfferValue(Hero selfHero, PartyBase selfParty, PartyBase offererParty, IEnumerable<Barterable> offeredBarters)
```

### ApplyAndFinalizePlayerBarter
```csharp
public void ApplyAndFinalizePlayerBarter(Hero offererHero, Hero otherHero, BarterData barterData)
```

### CancelAndFinalizePlayerBarter
```csharp
public void CancelAndFinalizePlayerBarter(Hero offererHero, Hero otherHero, BarterData barterData)
```

### CanPlayerBarterWithHero
```csharp
public bool CanPlayerBarterWithHero(Hero hero)
```

### InitializeMarriageBarterContext
```csharp
public bool InitializeMarriageBarterContext(Barterable barterable, BarterData args, object obj)
```

### InitializeJoinFactionBarterContext
```csharp
public bool InitializeJoinFactionBarterContext(Barterable barterable, BarterData args, object obj)
```

### InitializeMakePeaceBarterContext
```csharp
public bool InitializeMakePeaceBarterContext(Barterable barterable, BarterData args, object obj)
```

### InitializeSafePassageBarterContext
```csharp
public bool InitializeSafePassageBarterContext(Barterable barterable, BarterData args, object obj)
```

### BarterContextInitializer
```csharp
public delegate bool BarterContextInitializer(Barterable barterable, BarterData args, object obj = null)
```

### BarterCloseEventDelegate
```csharp
public delegate void BarterCloseEventDelegate()
```

### BarterBeginEventDelegate
```csharp
public delegate void BarterBeginEventDelegate(BarterData args)
```

## Usage Example

```csharp
// Typical usage of BarterManager (Manager)
BarterManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)