<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapConversationAgent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapConversationAgent

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MapConversationAgent` is a class in the `TaleWorlds.CampaignSystem.Conversation` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Character` | `public BasicCharacterObject Character { get; }` |
| `State` | `public AgentState State { get; }` |
| `Team` | `public IMissionTeam Team { get; }` |
| `Origin` | `public IAgentOriginBase Origin { get; set; }` |
| `Age` | `public float Age { get; set; }` |


## Key Methods

### IsEnemyOf

```csharp
public bool IsEnemyOf(IAgent agent)
```

### IsFriendOf

```csharp
public bool IsFriendOf(IAgent agent)
```

### IsActive

```csharp
public bool IsActive()
```

### SetAsConversationAgent

```csharp
public void SetAsConversationAgent(bool set)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)