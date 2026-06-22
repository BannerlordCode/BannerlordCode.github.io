<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LocationCharacter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LocationCharacter

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Locations
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `LocationCharacter` is a class in the `TaleWorlds.CampaignSystem.Settlements.Locations` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Character` | `public CharacterObject Character { get; }` |
| `AgentOrigin` | `public IAgentOriginBase AgentOrigin { get; }` |
| `AgentData` | `public AgentData AgentData { get; set; }` |
| `UseCivilianEquipment` | `public bool UseCivilianEquipment { get; set; }` |
| `ActionSetCode` | `public string ActionSetCode { get; set; }` |
| `AlarmedActionSetCode` | `public string AlarmedActionSetCode { get; set; }` |
| `SpecialTargetTag` | `public string SpecialTargetTag { get; set; }` |
| `ForceSpawnInSpecialTargetTag` | `public bool ForceSpawnInSpecialTargetTag { get; set; }` |
| `AddBehaviors` | `public LocationCharacter.AddBehaviorsDelegate AddBehaviors { get; }` |
| `AfterAgentCreated` | `public LocationCharacter.AfterAgentCreatedDelegate AfterAgentCreated { get; }` |
| `FixedLocation` | `public bool FixedLocation { get; }` |
| `MemberOfAlley` | `public Alley MemberOfAlley { get; }` |
| `SpecialItem` | `public ItemObject SpecialItem { get; }` |


## Key Methods

### SetAlleyOfCharacter

```csharp
public void SetAlleyOfCharacter(Alley alley)
```

### CreateBodyguardHero

```csharp
public static LocationCharacter CreateBodyguardHero(Hero hero, MobileParty party, LocationCharacter.AddBehaviorsDelegate addBehaviorsDelegate)
```

### AddBehaviorsDelegate

```csharp
public delegate void AddBehaviorsDelegate(IAgent agent)
```

### AfterAgentCreatedDelegate

```csharp
public delegate void AfterAgentCreatedDelegate(IAgent agent)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)