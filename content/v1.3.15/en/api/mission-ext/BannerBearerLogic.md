---
title: "BannerBearerLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerBearerLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerBearerLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** public class BannerBearerLogic : MissionLogic
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BannerBearerLogic.cs`

## Overview

`BannerBearerLogic` tracks formation banners — which agent carries each, whether a banner is on the ground, and lets you find the active banner for a formation (`GetActiveBanner`, `HasBannerOnGround`). Use it to query or manipulate banner-bearer state in siege/battle missions.

## Mental Model

Treat `BannerBearerLogic` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasBanner` | `public bool HasBanner { get { return this.BannerItem != null; }` |
| `NumberOfBanners` | `public int NumberOfBanners { get { return this._bannerInstances.Count; }` |
| `BannerSearchDistance` | `public static float BannerSearchDistance { get { return 9f; }` |
| `IsOnGround` | `public bool IsOnGround { get { return this.State == BannerBearerLogic.FormationBannerController.BannerState.OnGround; }` |
| `IsOnAgent` | `public bool IsOnAgent { get { return this.State == BannerBearerLogic.FormationBannerController.BannerState.OnAgent; }` |

## Key Methods

### IsFormationBanner
```csharp
public bool IsFormationBanner(Formation formation, SpawnedItemEntity spawnedItem)
```

### HasBannerOnGround
```csharp
public bool HasBannerOnGround(Formation formation)
```

### GetActiveBanner
```csharp
public BannerComponent GetActiveBanner(Formation formation)
```

### GetFormationBannerBearers
```csharp
public List<Agent> GetFormationBannerBearers(Formation formation)
```

### GetFormationBanner
```csharp
public ItemObject GetFormationBanner(Formation formation)
```

### IsBannerSearchingAgent
```csharp
public bool IsBannerSearchingAgent(Agent agent)
```

### GetMissingBannerCount
```csharp
public int GetMissingBannerCount(Formation formation)
```

### GetFormationFromBanner
```csharp
public Formation GetFormationFromBanner(SpawnedItemEntity spawnedItem)
```

### SetFormationBanner
```csharp
public void SetFormationBanner(Formation formation, ItemObject newBanner)
```

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### OnDeploymentFinished
```csharp
public override void OnDeploymentFinished()
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### OnItemPickup
```csharp
public void OnItemPickup(Agent agent, SpawnedItemEntity spawnedItem)
```

### OnItemDrop
```csharp
public void OnItemDrop(Agent agent, SpawnedItemEntity spawnedItem)
```

### OnAgentRemoved
```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
```

### OnAgentPanicked
```csharp
public override void OnAgentPanicked(Agent affectedAgent)
```

### UpdateAgent
```csharp
public void UpdateAgent(Agent agent, bool willBecomeBannerBearer)
```

### SpawnBannerBearer
```csharp
public Agent SpawnBannerBearer(IAgentOriginBase troopOrigin, bool isPlayerSide, Formation formation, bool spawnWithHorse, bool isReinforcement, int formationTroopCount, int formationTroopIndex, bool isAlarmed, bool wieldInitialWeapons, bool forceDismounted, Vec3? initialPosition, Vec2? initialDirection, string specialActionSetSuffix = null, bool useTroopClassForSpawn = false)
```

### IsBannerItem
```csharp
public static bool IsBannerItem(ItemObject item)
```

### SetBannerItem
```csharp
public void SetBannerItem(ItemObject bannerItem)
```

### HasBannerEntity
```csharp
public bool HasBannerEntity(GameEntity bannerEntity)
```

### HasBannerOnGround
```csharp
public bool HasBannerOnGround()
```

### HasActiveBannerBearers
```csharp
public bool HasActiveBannerBearers()
```

### IsBannerSearchingAgent
```csharp
public bool IsBannerSearchingAgent(Agent agent)
```

### GetNumberOfActiveBannerBearers
```csharp
public int GetNumberOfActiveBannerBearers()
```

### UpdateAgentStats
```csharp
public void UpdateAgentStats(bool forceUpdate = false)
```

### UpdateBannerSearchers
```csharp
public void UpdateBannerSearchers()
```

### UpdateBannerBearersForDeployment
```csharp
public void UpdateBannerBearersForDeployment()
```

### AddBannerEntity
```csharp
public void AddBannerEntity(GameEntity entity)
```

### RemoveBannerEntity
```csharp
public void RemoveBannerEntity(WeakGameEntity entity)
```

## Usage Example

```csharp
// Report each formation's banner status
var bearerLogic = Mission.Current.GetMissionBehavior<BannerBearerLogic>();
foreach (Formation f in Mission.Current.PlayerTeam.Formations)
{
    if (!bearerLogic.IsFormationBanner(f)) continue;
    bool onAgent = bearerLogic.IsOnAgent;
    bool onGround = bearerLogic.HasBannerOnGround(f);
    InformationManager.DisplayMessage(new InformationMessage(
        $"{f.CountOfUnits} units — banner {(onAgent ? "held" : onGround ? "on ground" : "none")}"));
}
```

## See Also

- [Complete Class Catalog](../catalog)