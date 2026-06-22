<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerEncounter`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerEncounter

**命名空间:** TaleWorlds.CampaignSystem.Encounters
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PlayerEncounter` 是 `TaleWorlds.CampaignSystem.Encounters` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)