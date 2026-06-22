<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerEncounter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerEncounter

**Namespace:** TaleWorlds.CampaignSystem.Encounters
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PlayerEncounter` is a class in the `TaleWorlds.CampaignSystem.Encounters` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static PlayerEncounter Current { get; set; }` |
| `LocationEncounter` | `public static LocationEncounter LocationEncounter { get; set; }` |
| `Battle` | `public static MapEvent Battle { get; }` |
| `EncounteredParty` | `public static PartyBase EncounteredParty { get; }` |
| `EncounteredMobileParty` | `public static MobileParty EncounteredMobileParty { get; }` |
| `EncounteredBattle` | `public static MapEvent EncounteredBattle { get; }` |
| `BattleState` | `public static BattleState BattleState { get; }` |
| `WinningSide` | `public static BattleSideEnum WinningSide { get; }` |
| `BattleChallenge` | `public static bool BattleChallenge { get; set; }` |
| `PlayerIsDefender` | `public static bool PlayerIsDefender { get; }` |
| `PlayerIsAttacker` | `public static bool PlayerIsAttacker { get; }` |
| `LeaveEncounter` | `public static bool LeaveEncounter { get; set; }` |
| `MeetingDone` | `public static bool MeetingDone { get; set; }` |
| `PlayerSurrender` | `public static bool PlayerSurrender { get; set; }` |
| `EnemySurrender` | `public static bool EnemySurrender { get; set; }` |
| `IsActive` | `public static bool IsActive { get; }` |
| `OpponentSide` | `public BattleSideEnum OpponentSide { get; }` |
| `PlayerSide` | `public BattleSideEnum PlayerSide { get; }` |
| `IsJoinedBattle` | `public bool IsJoinedBattle { get; }` |
| `InsideSettlement` | `public static bool InsideSettlement { get; }` |


## Key Methods

### OnLoad

```csharp
public void OnLoad()
```

### RestartPlayerEncounter

```csharp
public static void RestartPlayerEncounter(PartyBase defenderParty, PartyBase attackerParty, bool forcePlayerOutFromSettlement = true)
```

### Init

```csharp
public static void Init()
```

### SetupFields

```csharp
public void SetupFields(PartyBase attackerParty, PartyBase defenderParty)
```

### IsNavalEncounter

```csharp
public static bool IsNavalEncounter()
```

### StartBattle

```csharp
public static MapEvent StartBattle()
```

### JoinBattle

```csharp
public static void JoinBattle(BattleSideEnum side)
```

### Start

```csharp
public static void Start()
```

### ProtectPlayerSide

```csharp
public static void ProtectPlayerSide(float hoursToProtect = 1f)
```

### Finish

```csharp
public static void Finish(bool forcePlayerOutFromSettlement = true)
```

### EndBattleByCheat

```csharp
public static void EndBattleByCheat(bool playerWon)
```

### Update

```csharp
public static void Update()
```

### DoMeeting

```csharp
public static void DoMeeting()
```

### SetMeetingDone

```csharp
public static void SetMeetingDone()
```

### SetMeetingFalseForCompanion

```csharp
public void SetMeetingFalseForCompanion()
```

### CheckIfLeadingAvaliable

```csharp
public static bool CheckIfLeadingAvaliable()
```

### GetLeadingHero

```csharp
public static Hero GetLeadingHero()
```

### SetPlayerVictorious

```csharp
public static void SetPlayerVictorious()
```

### SetIsSallyOutAmbush

```csharp
public void SetIsSallyOutAmbush(bool value)
```

### SetIsBlockadeAttack

```csharp
public void SetIsBlockadeAttack(bool value)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)