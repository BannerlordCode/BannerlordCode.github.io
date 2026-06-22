<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapState`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapState

**命名空间:** TaleWorlds.CampaignSystem.GameState
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`MapState` 是 `TaleWorlds.CampaignSystem.GameState` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `NextIncident` | `public Incident NextIncident { get; }` |
| `MenuContext` | `public MenuContext MenuContext { get; }` |
| `GameMenuId` | `public string GameMenuId { get; set; }` |
| `AtMenu` | `public bool AtMenu { get; }` |
| `MapConversationActive` | `public bool MapConversationActive { get; set; }` |
| `Handler` | `public IMapStateHandler Handler { get; set; }` |
| `IsSimulationActive` | `public bool IsSimulationActive { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)