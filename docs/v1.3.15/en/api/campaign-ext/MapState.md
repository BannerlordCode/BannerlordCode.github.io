<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapState`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MapState` is a class in the `TaleWorlds.CampaignSystem.GameState` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `NextIncident` | `public Incident NextIncident { get; }` |
| `MenuContext` | `public MenuContext MenuContext { get; }` |
| `GameMenuId` | `public string GameMenuId { get; set; }` |
| `AtMenu` | `public bool AtMenu { get; }` |
| `MapConversationActive` | `public bool MapConversationActive { get; set; }` |
| `Handler` | `public IMapStateHandler Handler { get; set; }` |
| `IsSimulationActive` | `public bool IsSimulationActive { get; }` |


## Key Methods

### OnJoinArmy

```csharp
public void OnJoinArmy()
```

### OnLeaveArmy

```csharp
public void OnLeaveArmy()
```

### OnFadeInAndOut

```csharp
public void OnFadeInAndOut(float fadeOutTime, float blackTime, float fadeInTime)
```

### OnDispersePlayerLeadedArmy

```csharp
public void OnDispersePlayerLeadedArmy()
```

### OnArmyCreated

```csharp
public void OnArmyCreated(MobileParty mobileParty)
```

### StartIncident

```csharp
public void StartIncident(Incident incident)
```

### OnMainPartyEncounter

```csharp
public void OnMainPartyEncounter()
```

### ProcessTravel

```csharp
public void ProcessTravel(CampaignVec2 moveTargetPoint)
```

### OnLoadingFinished

```csharp
public void OnLoadingFinished()
```

### OnMapConversationStarts

```csharp
public void OnMapConversationStarts(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData)
```

### OnMapConversationOver

```csharp
public void OnMapConversationOver()
```

### EnterMenuMode

```csharp
public void EnterMenuMode()
```

### ExitMenuMode

```csharp
public void ExitMenuMode()
```

### StartBattleSimulation

```csharp
public void StartBattleSimulation()
```

### EndBattleSimulation

```csharp
public void EndBattleSimulation()
```

### OnPlayerSiegeActivated

```csharp
public void OnPlayerSiegeActivated()
```

### OnPlayerSiegeDeactivated

```csharp
public void OnPlayerSiegeDeactivated()
```

### OnSiegeEngineClick

```csharp
public void OnSiegeEngineClick(MatrixFrame siegeEngineFrame)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)