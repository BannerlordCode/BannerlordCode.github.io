<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerBearerLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerBearerLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** public class BannerBearerLogic : MissionLogic
**Base:** 

`MissionLogic

`
**File:** 

`TaleWorlds.MountAndBlade/BannerBearerLogic.cs

`

## 概述

`BannerBearerLogic

` 跟踪队形旗帜——哪?agent 扛旗、旗是否在地上，并能查找某队形的活动旗帜（`GetActiveBanner

`、`HasBannerOnGround

`）。用于在攻城/战斗任务中查询或操作旗手状态?
## 
## 心智模型

先把 `BannerBearerLogic` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。
主要属?
\| Name \| Signature \|
\|------\|-----------\|
\| 

`HasBanner

` \| 

`public bool HasBanner { get { return this.BannerItem != null; }

` \|
\| 

`NumberOfBanners

` \| 

`public int NumberOfBanners { get { return this._bannerInstances.Count; }

` \|
\| 

`BannerSearchDistance

` \| 

`public static float BannerSearchDistance { get { return 9f; }

` \|
\| 

`IsOnGround

` \| 

`public bool IsOnGround { get { return this.State == BannerBearerLogic.FormationBannerController.BannerState.OnGround; }

` \|
\| 

`IsOnAgent

` \| 

`public bool IsOnAgent { get { return this.State == BannerBearerLogic.FormationBannerController.BannerState.OnAgent; }

` \|

## 主要方法

### IsFormationBanner
`

`

`csharp
public bool IsFormationBanner(Formation formation, SpawnedItemEntity spawnedItem)
`

`

`

### HasBannerOnGround
`

`

`csharp
public bool HasBannerOnGround(Formation formation)
`

`

`

### GetActiveBanner
`

`

`csharp
public BannerComponent GetActiveBanner(Formation formation)
`

`

`

### GetFormationBannerBearers
`

`

`csharp
public List&lt;Agent&gt; GetFormationBannerBearers(Formation formation)
`

`

`

### GetFormationBanner
`

`

`csharp
public ItemObject GetFormationBanner(Formation formation)
`

`

`

### IsBannerSearchingAgent
`

`

`csharp
public bool IsBannerSearchingAgent(Agent agent)
`

`

`

### GetMissingBannerCount
`

`

`csharp
public int GetMissingBannerCount(Formation formation)
`

`

`

### GetFormationFromBanner
`

`

`csharp
public Formation GetFormationFromBanner(SpawnedItemEntity spawnedItem)
`

`

`

### SetFormationBanner
`

`

`csharp
public void SetFormationBanner(Formation formation, ItemObject newBanner)
`

`

`

### OnBehaviorInitialize
`

`

`csharp
public override void OnBehaviorInitialize()
`

`

`

### OnDeploymentFinished
`

`

`csharp
public override void OnDeploymentFinished()
`

`

`

### OnMissionTick
`

`

`csharp
public override void OnMissionTick(float dt)
`

`

`

### OnItemPickup
`

`

`csharp
public void OnItemPickup(Agent agent, SpawnedItemEntity spawnedItem)
`

`

`

### OnItemDrop
`

`

`csharp
public void OnItemDrop(Agent agent, SpawnedItemEntity spawnedItem)
`

`

`

### OnAgentRemoved
`

`

`csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
`

`

`

### OnAgentPanicked
`

`

`csharp
public override void OnAgentPanicked(Agent affectedAgent)
`

`

`

### UpdateAgent
`

`

`csharp
public void UpdateAgent(Agent agent, bool willBecomeBannerBearer)
`

`

`

### SpawnBannerBearer
`

`

`csharp
public Agent SpawnBannerBearer(IAgentOriginBase troopOrigin, bool isPlayerSide, Formation formation, bool spawnWithHorse, bool isReinforcement, int formationTroopCount, int formationTroopIndex, bool isAlarmed, bool wieldInitialWeapons, bool forceDismounted, Vec3? initialPosition, Vec2? initialDirection, string specialActionSetSuffix = null, bool useTroopClassForSpawn = false)
`

`

`

### IsBannerItem
`

`

`csharp
public static bool IsBannerItem(ItemObject item)
`

`

`

### SetBannerItem
`

`

`csharp
public void SetBannerItem(ItemObject bannerItem)
`

`

`

### HasBannerEntity
`

`

`csharp
public bool HasBannerEntity(GameEntity bannerEntity)
`

`

`

### HasBannerOnGround
`

`

`csharp
public bool HasBannerOnGround()
`

`

`

### HasActiveBannerBearers
`

`

`csharp
public bool HasActiveBannerBearers()
`

`

`

### IsBannerSearchingAgent
`

`

`csharp
public bool IsBannerSearchingAgent(Agent agent)
`

`

`

### GetNumberOfActiveBannerBearers
`

`

`csharp
public int GetNumberOfActiveBannerBearers()
`

`

`

### UpdateAgentStats
`

`

`csharp
public void UpdateAgentStats(bool forceUpdate = false)
`

`

`

### UpdateBannerSearchers
`

`

`csharp
public void UpdateBannerSearchers()
`

`

`

### UpdateBannerBearersForDeployment
`

`

`csharp
public void UpdateBannerBearersForDeployment()
`

`

`

### AddBannerEntity
`

`

`csharp
public void AddBannerEntity(GameEntity entity)
`

`

`

### RemoveBannerEntity
`

`

`csharp
public void RemoveBannerEntity(WeakGameEntity entity)
`

`

`

## 使用示例

`

`

`csharp
// 报告每个队形的旗帜状?var bearerLogic = Mission.Current.GetMissionBehavior&lt;BannerBearerLogic&gt;();
foreach (Formation f in Mission.Current.PlayerTeam.Formations)
{
    if (!bearerLogic.IsFormationBanner(f)) continue;
    bool onAgent = bearerLogic.IsOnAgent;
    bool onGround = bearerLogic.HasBannerOnGround(f);
    InformationManager.DisplayMessage(new InformationMessage(
        $"{f.CountOfUnits} ??旗帜 {(onAgent ? "扛着" : onGround ? "在地? : "?)}"));
}
`

`

`

## 参见

- [完整类目录](../catalog)