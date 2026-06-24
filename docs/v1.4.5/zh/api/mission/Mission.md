<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Mission`
- [← 本领域 / 返回 mission](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
- [🔀 跨版本对比 /versions/Mission](/versions/Mission)
<!-- END BREADCRUMB -->
# Mission

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Mission : DotNetObject, IMission`
**Base:** `DotNetObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Mission.cs`

## 概述

`Mission` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Keys` | `public ICollection<string> Keys { get; }` |
| `Values` | `public ICollection<ICollection<Vec2>> Values { get; }` |
| `this` | `public ICollection<Vec2> this { get; }` |
| `RequestedTimeSpeed` | `public float RequestedTimeSpeed { get; }` |
| `RequestID` | `public int RequestID { get; }` |
| `Entity` | `public GameEntity Entity { get; }` |
| `Weapon` | `public MissionWeapon Weapon { get; }` |
| `ShooterAgent` | `public Agent ShooterAgent { get; }` |
| `MissionObjectToIgnore` | `public MissionObject MissionObjectToIgnore { get; }` |
| `AlreadyHitEntityToIgnore` | `public GameEntity AlreadyHitEntityToIgnore { get; }` |
| `AgentToFollow` | `public Agent AgentToFollow { get; }` |
| `AgentVisualToFollow` | `public IAgentVisual AgentVisualToFollow { get; }` |
| `CameraType` | `public SpectatorCameraTypes CameraType { get; }` |
| `Attacker` | `public Team Attacker { get; }` |
| `Defender` | `public Team Defender { get; }` |
| `AttackerAlly` | `public Team AttackerAlly { get; }` |
| `DefenderAlly` | `public Team DefenderAlly { get; }` |
| `Player` | `public Team Player { get; }` |
| `PlayerEnemy` | `public Team PlayerEnemy { get; }` |
| `PlayerAlly` | `public Team PlayerAlly { get; }` |
| `Current` | `public static Mission Current { get; }` |
| `TerrainType` | `public TerrainType TerrainType { get; }` |
| `Scene` | `public Scene Scene { get; }` |
| `CustomCameraTargetLocalOffset` | `public Vec3 CustomCameraTargetLocalOffset { get; }` |
| `CustomCameraLocalOffset` | `public Vec3 CustomCameraLocalOffset { get; }` |
| `CustomCameraLocalOffset2` | `public Vec3 CustomCameraLocalOffset2 { get; }` |
| `CustomCameraGlobalOffset` | `public Vec3 CustomCameraGlobalOffset { get; }` |
| `CustomCameraLocalRotationalOffset` | `public Vec3 CustomCameraLocalRotationalOffset { get; }` |
| `CustomCameraIgnoreCollision` | `public bool CustomCameraIgnoreCollision { get; }` |
| `CustomCameraFovMultiplier` | `public float CustomCameraFovMultiplier { get; }` |
| `CustomCameraFixedDistance` | `public float CustomCameraFixedDistance { get; }` |
| `ListenerAndAttenuationPosBlendFactor` | `public float ListenerAndAttenuationPosBlendFactor { get; }` |
| `IgnoredEntityForCamera` | `public GameEntity IgnoredEntityForCamera { get; }` |
| `Boundaries` | `public MBBoundaryCollection Boundaries { get; }` |
| `IsMainAgentObjectInteractionEnabled` | `public bool IsMainAgentObjectInteractionEnabled { get; }` |
| `IsMainAgentItemInteractionEnabled` | `public bool IsMainAgentItemInteractionEnabled { get; }` |
| `IsTeleportingAgents` | `public bool IsTeleportingAgents { get; set; }` |
| `ForceTickOccasionally` | `public bool ForceTickOccasionally { get; set; }` |
| `CombatType` | `public MissionCombatType CombatType { get; set; }` |
| `PauseAITick` | `public bool PauseAITick { get; set; }` |
| `CameraIsFirstPerson` | `public bool CameraIsFirstPerson { get; set; }` |
| `CameraAddedDistance` | `public static float CameraAddedDistance { get; set; }` |
| `MissionEnded` | `public bool MissionEnded { get; }` |
| `MissionIsEnding` | `public bool MissionIsEnding { get; }` |
| `IsDeploymentFinished` | `public bool IsDeploymentFinished { get; }` |
| `RetreatSide` | `public BattleSideEnum RetreatSide { get; }` |
| `IsFastForward` | `public bool IsFastForward { get; }` |
| `FixedDeltaTimeMode` | `public bool FixedDeltaTimeMode { get; }` |
| `FixedDeltaTime` | `public float FixedDeltaTime { get; }` |
| `CurrentState` | `public State CurrentState { get; }` |
| `Teams` | `public TeamCollection Teams { get; }` |
| `PlayerTeam` | `public Team PlayerTeam { get; set; }` |
| `SpectatorTeam` | `public Team SpectatorTeam { get; set; }` |
| `IsMissionEnding` | `public bool IsMissionEnding { get; }` |
| `MissionLogics` | `public List<MissionLogic> MissionLogics { get; set; }` |
| `MissionBehaviors` | `public List<MissionBehavior> MissionBehaviors { get; }` |
| `InputManager` | `public IInputContext InputManager { get; }` |
| `NeedsMemoryCleanup` | `public bool NeedsMemoryCleanup { get; }` |
| `MainAgent` | `public Agent MainAgent { get; set; }` |
| `IsBattleSpawnPathSelectorInitialized` | `public bool IsBattleSpawnPathSelectorInitialized { get; }` |
| `MainAgentServer` | `public Agent MainAgentServer { get; set; }` |
| `IsInventoryAccessAllowed` | `public bool IsInventoryAccessAllowed { get; }` |
| `IsInventoryAccessible` | `public bool IsInventoryAccessible { get; }` |
| `MissionResult` | `public MissionResult MissionResult { get; }` |
| `FocusableObjectInformationProvider` | `public MissionFocusableObjectInformationProvider FocusableObjectInformationProvider { get; }` |
| `IsQuestScreenAccessible` | `public bool IsQuestScreenAccessible { get; set; }` |
| `IsQuestScreenAccessAllowed` | `public bool IsQuestScreenAccessAllowed { get; }` |
| `IsCharacterWindowAccessible` | `public bool IsCharacterWindowAccessible { get; set; }` |
| `IsCharacterWindowAccessAllowed` | `public bool IsCharacterWindowAccessAllowed { get; }` |
| `IsPartyWindowAccessible` | `public bool IsPartyWindowAccessible { get; set; }` |
| `IsPartyWindowAccessAllowed` | `public bool IsPartyWindowAccessAllowed { get; }` |
| `IsKingdomWindowAccessible` | `public bool IsKingdomWindowAccessible { get; set; }` |
| `IsKingdomWindowAccessAllowed` | `public bool IsKingdomWindowAccessAllowed { get; }` |
| `IsClanWindowAccessible` | `public bool IsClanWindowAccessible { get; set; }` |
| `IsClanWindowAccessAllowed` | `public bool IsClanWindowAccessAllowed { get; }` |
| `IsEncyclopediaWindowAccessible` | `public bool IsEncyclopediaWindowAccessible { get; set; }` |
| `IsEncyclopediaWindowAccessAllowed` | `public bool IsEncyclopediaWindowAccessAllowed { get; }` |
| `IsBannerWindowAccessible` | `public bool IsBannerWindowAccessible { get; set; }` |
| `IsBannerWindowAccessAllowed` | `public bool IsBannerWindowAccessAllowed { get; }` |
| `DoesMissionRequireCivilianEquipment` | `public bool DoesMissionRequireCivilianEquipment { get; set; }` |
| `MissionTeamAIType` | `public MissionTeamAITypeEnum MissionTeamAIType { get; set; }` |
| `MissionTimeTracker` | `public MissionTimeTracker MissionTimeTracker { get; }` |

## 主要方法

### GetEnumerator
`public IEnumerator<KeyValuePair<string, ICollection<Vec2>>> GetEnumerator()`

**用途 / Purpose:** 获取 `enumerator` 的当前值。

### GetBoundaryRadius
`public float GetBoundaryRadius(string name)`

**用途 / Purpose:** 获取 `boundary radius` 的当前值。

### GetOrientedBoundariesBox
`public void GetOrientedBoundariesBox(out Vec2 boxMinimum, out Vec2 boxMaximum, float rotationInRadians = 0f)`

**用途 / Purpose:** 获取 `oriented boundaries box` 的当前值。

### Add
`public void Add(KeyValuePair<string, ICollection<Vec2>> item)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### Contains
`public bool Contains(KeyValuePair<string, ICollection<Vec2>> item)`

**用途 / Purpose:** 处理 `contains` 相关逻辑。

### CopyTo
`public void CopyTo(KeyValuePair<string, ICollection<Vec2>> array, int arrayIndex)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### Remove
`public bool Remove(KeyValuePair<string, ICollection<Vec2>> item)`

**用途 / Purpose:** 从当前集合/状态中移除 `remove`。

### Add
`public void Add(string name, ICollection<Vec2> points)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Add
`public void Add(string name, ICollection<Vec2> points, bool isAllowanceInside)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### ContainsKey
`public bool ContainsKey(string name)`

**用途 / Purpose:** 处理 `contains key` 相关逻辑。

### Remove
`public bool Remove(string name)`

**用途 / Purpose:** 从当前集合/状态中移除 `remove`。

### TryGetValue
`public bool TryGetValue(string name, out ICollection<Vec2> points)`

**用途 / Purpose:** 尝试获取 `get value`，通常以 out 参数返回结果。

### GetAgentFromIndex
`public static Agent GetAgentFromIndex(int agentIndex, bool canBeNull = false)`

**用途 / Purpose:** 获取 `agent from index` 的当前值。

### GetMBTeamFromTeamIndex
`public static MBTeam GetMBTeamFromTeamIndex(int teamIndex)`

**用途 / Purpose:** 获取 `m b team from team index` 的当前值。

### GetTeamFromTeamIndex
`public static Team GetTeamFromTeamIndex(int teamIndex)`

**用途 / Purpose:** 获取 `team from team index` 的当前值。

### GetMissionObjectFromMissionObjectId
`public static MissionObject GetMissionObjectFromMissionObjectId(MissionObjectId missionObjectId)`

**用途 / Purpose:** 获取 `mission object from mission object id` 的当前值。

### GetCombatLogDataForCombatLogNetworkMessage
`public static CombatLogData GetCombatLogDataForCombatLogNetworkMessage(CombatLogNetworkMessage message)`

**用途 / Purpose:** 获取 `combat log data for combat log network message` 的当前值。

### CalculatePassbySoundParametersMT
`public void CalculatePassbySoundParametersMT(ref SoundEventParameter soundEventParameter)`

**用途 / Purpose:** 处理 `calculate passby sound parameters m t` 相关逻辑。

### CalculateBounceBackVelocity
`public void CalculateBounceBackVelocity(Vec3 rotationSpeed, AttackCollisionData collisionData, out Vec3 velocity, out Vec3 angularVelocity)`

**用途 / Purpose:** 处理 `calculate bounce back velocity` 相关逻辑。

### PassThroughEntity
`public void PassThroughEntity(GameEntity entity)`

**用途 / Purpose:** 处理 `pass through entity` 相关逻辑。

### OnBeforeAgentRemovedDelegate
`public delegate void OnBeforeAgentRemovedDelegate(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 当 `before agent removed delegate` 事件触发时调用此方法。

### OnAddSoundAlarmFactorToAgentsDelegate
`public delegate void OnAddSoundAlarmFactorToAgentsDelegate(Agent alarmCreatorAgent, in Vec3 soundPosition, float soundLevelSquareRoot)`

**用途 / Purpose:** 当 `add sound alarm factor to agents delegate` 事件触发时调用此方法。

### OnMainAgentChangedDelegate
`public delegate void OnMainAgentChangedDelegate(Agent oldAgent)`

**用途 / Purpose:** 当 `main agent changed delegate` 事件触发时调用此方法。

### OnCameraShakeTriggeredDelegate
`public delegate void OnCameraShakeTriggeredDelegate(in Vec3 position, float radius)`

**用途 / Purpose:** 当 `camera shake triggered delegate` 事件触发时调用此方法。

### ComputeTroopBodyPropertiesDelegate
`public delegate BodyProperties ComputeTroopBodyPropertiesDelegate(AgentBuildData agentBuildData, BasicCharacterObject characterObject, Equipment equipment, int seed)`

**用途 / Purpose:** 处理 `compute troop body properties delegate` 相关逻辑。

### Add
`public new void Add(Team t)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Add
`public Team Add(BattleSideEnum side, uint color = uint.MaxValue, uint color2 = uint.MaxValue, Banner banner = null, bool isPlayerGeneral = true, bool isPlayerSergeant = false, bool isSettingRelations = true)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Find
`public Team Find(MBTeam mbTeam)`

**用途 / Purpose:** 处理 `find` 相关逻辑。

### ClearResources
`public void ClearResources()`

**用途 / Purpose:** 处理 `clear resources` 相关逻辑。

### Clear
`public new void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### AddActiveMissionObject
`public void AddActiveMissionObject(MissionObject missionObject)`

**用途 / Purpose:** 向当前集合/状态中添加 `active mission object`。

### ActivateMissionObject
`public void ActivateMissionObject(MissionObject missionObject)`

**用途 / Purpose:** 处理 `activate mission object` 相关逻辑。

### DeactivateMissionObject
`public void DeactivateMissionObject(MissionObject missionObject)`

**用途 / Purpose:** 处理 `deactivate mission object` 相关逻辑。

### SetMissionCombatType
`public void SetMissionCombatType(MissionCombatType missionCombatType)`

**用途 / Purpose:** 设置 `mission combat type` 的值或状态。

### ConversationCharacterChanged
`public void ConversationCharacterChanged()`

**用途 / Purpose:** 处理 `conversation character changed` 相关逻辑。

### SetMissionMode
`public void SetMissionMode(MissionMode newMode, bool atStart)`

**用途 / Purpose:** 设置 `mission mode` 的值或状态。

### GetAverageFps
`public float GetAverageFps()`

**用途 / Purpose:** 获取 `average fps` 的当前值。

### GetFallAvoidSystemActive
`public bool GetFallAvoidSystemActive()`

**用途 / Purpose:** 获取 `fall avoid system active` 的当前值。

### SetFallAvoidSystemActive
`public void SetFallAvoidSystemActive(bool fallAvoidActive)`

**用途 / Purpose:** 设置 `fall avoid system active` 的值或状态。

### IsPositionInsideBoundaries
`public bool IsPositionInsideBoundaries(Vec2 position)`

**用途 / Purpose:** 处理 `is position inside boundaries` 相关逻辑。

### IsPositionInsideHardBoundaries
`public bool IsPositionInsideHardBoundaries(Vec2 position)`

**用途 / Purpose:** 处理 `is position inside hard boundaries` 相关逻辑。

### IsPositionInsideAnyBlockerNavMeshFace2D
`public bool IsPositionInsideAnyBlockerNavMeshFace2D(Vec2 position)`

**用途 / Purpose:** 处理 `is position inside any blocker nav mesh face2 d` 相关逻辑。

### IsPositionOnAnyBlockerNavMeshFace
`public bool IsPositionOnAnyBlockerNavMeshFace(Vec3 position)`

**用途 / Purpose:** 处理 `is position on any blocker nav mesh face` 相关逻辑。

### RayCastForClosestAgent
`public Agent RayCastForClosestAgent(Vec3 sourcePoint, Vec3 targetPoint, int excludedAgentIndex, float rayThickness, out float collisionDistance)`

**用途 / Purpose:** 处理 `ray cast for closest agent` 相关逻辑。

### RayCastForClosestAgentsLimbs
`public Agent RayCastForClosestAgentsLimbs(Vec3 sourcePoint, Vec3 targetPoint, int excludedAgentIndex, float rayThickness, out float collisionDistance, out sbyte boneIndex)`

**用途 / Purpose:** 处理 `ray cast for closest agents limbs` 相关逻辑。

### RayCastForGivenAgentsLimbs
`public bool RayCastForGivenAgentsLimbs(Vec3 sourcePoint, Vec3 rayFinishPoint, int givenAgentIndex, float rayThickness, out float collisionDistance, out sbyte boneIndex)`

**用途 / Purpose:** 处理 `ray cast for given agents limbs` 相关逻辑。

### GetBiggestAgentCollisionPadding
`public float GetBiggestAgentCollisionPadding()`

**用途 / Purpose:** 获取 `biggest agent collision padding` 的当前值。

### SetMissionCorpseFadeOutTimeInSeconds
`public void SetMissionCorpseFadeOutTimeInSeconds(float corpseFadeOutTimeInSeconds)`

**用途 / Purpose:** 设置 `mission corpse fade out time in seconds` 的值或状态。

### SetOverrideCorpseCount
`public void SetOverrideCorpseCount(int overrideCorpseCount)`

**用途 / Purpose:** 设置 `override corpse count` 的值或状态。

### SetReportStuckAgentsMode
`public void SetReportStuckAgentsMode(bool value)`

**用途 / Purpose:** 设置 `report stuck agents mode` 的值或状态。

### ResetMission
`public void ResetMission()`

**用途 / Purpose:** 将 `mission` 重置为初始状态。

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### TickAgentsAndTeamsAsync
`public void TickAgentsAndTeamsAsync(float dt)`

**用途 / Purpose:** 处理 `tick agents and teams async` 相关逻辑。

### MakeSound
`public void MakeSound(int soundIndex, Vec3 position, bool soundCanBePredicted, bool isReliable, int relatedAgent1, int relatedAgent2)`

**用途 / Purpose:** 处理 `make sound` 相关逻辑。

### MakeSound
`public void MakeSound(int soundIndex, Vec3 position, bool soundCanBePredicted, bool isReliable, int relatedAgent1, int relatedAgent2, ref SoundEventParameter parameter)`

**用途 / Purpose:** 处理 `make sound` 相关逻辑。

### MakeSoundOnlyOnRelatedPeer
`public void MakeSoundOnlyOnRelatedPeer(int soundIndex, Vec3 position, int relatedAgent)`

**用途 / Purpose:** 处理 `make sound only on related peer` 相关逻辑。

### AddDynamicallySpawnedMissionObjectInfo
`public void AddDynamicallySpawnedMissionObjectInfo(DynamicallyCreatedEntity entityInfo)`

**用途 / Purpose:** 向当前集合/状态中添加 `dynamically spawned mission object info`。

### GetMissileCollisionPoint
`public Vec3 GetMissileCollisionPoint(Vec3 missileStartingPosition, Vec3 missileDirection, float missileSpeed, in WeaponData weaponData)`

**用途 / Purpose:** 获取 `missile collision point` 的当前值。

### RemoveMissileAsClient
`public void RemoveMissileAsClient(int missileIndex)`

**用途 / Purpose:** 从当前集合/状态中移除 `missile as client`。

### GetMissileVerticalAimCorrection
`public static float GetMissileVerticalAimCorrection(Vec3 vecToTarget, float missileStartingSpeed, ref WeaponStatsData weaponStatsData, float airFrictionConstant)`

**用途 / Purpose:** 获取 `missile vertical aim correction` 的当前值。

### GetMissileRange
`public static float GetMissileRange(float missileStartingSpeed, float heightDifference)`

**用途 / Purpose:** 获取 `missile range` 的当前值。

### PrepareMissileWeaponForDrop
`public void PrepareMissileWeaponForDrop(int missileIndex)`

**用途 / Purpose:** 处理 `prepare missile weapon for drop` 相关逻辑。

### AddParticleSystemBurstByName
`public void AddParticleSystemBurstByName(string particleSystem, MatrixFrame frame, bool synchThroughNetwork)`

**用途 / Purpose:** 向当前集合/状态中添加 `particle system burst by name`。

### GetClosestBoundaryPosition
`public Vec2 GetClosestBoundaryPosition(Vec2 position)`

**用途 / Purpose:** 获取 `closest boundary position` 的当前值。

### GetFreeRuntimeMissionObjectId
`public int GetFreeRuntimeMissionObjectId()`

**用途 / Purpose:** 获取 `free runtime mission object id` 的当前值。

### GetFreeSceneMissionObjectId
`public int GetFreeSceneMissionObjectId()`

**用途 / Purpose:** 获取 `free scene mission object id` 的当前值。

### SetCameraFrame
`public void SetCameraFrame(ref MatrixFrame cameraFrame, float zoomFactor)`

**用途 / Purpose:** 设置 `camera frame` 的值或状态。

### SetCameraFrame
`public void SetCameraFrame(ref MatrixFrame cameraFrame, float zoomFactor, ref Vec3 attenuationPosition)`

**用途 / Purpose:** 设置 `camera frame` 的值或状态。

### GetCameraFrame
`public MatrixFrame GetCameraFrame()`

**用途 / Purpose:** 获取 `camera frame` 的当前值。

### ResetFirstThirdPersonView
`public void ResetFirstThirdPersonView()`

**用途 / Purpose:** 将 `first third person view` 重置为初始状态。

### SetCustomCameraLocalOffset
`public void SetCustomCameraLocalOffset(Vec3 newCameraOffset)`

**用途 / Purpose:** 设置 `custom camera local offset` 的值或状态。

### SetCustomCameraTargetLocalOffset
`public void SetCustomCameraTargetLocalOffset(Vec3 newTargetLocalOffset)`

**用途 / Purpose:** 设置 `custom camera target local offset` 的值或状态。

### SetCustomCameraLocalOffset2
`public void SetCustomCameraLocalOffset2(Vec3 newCameraOffset)`

**用途 / Purpose:** 设置 `custom camera local offset2` 的值或状态。

### SetCustomCameraLocalRotationalOffset
`public void SetCustomCameraLocalRotationalOffset(Vec3 newCameraRotationalOffset)`

**用途 / Purpose:** 设置 `custom camera local rotational offset` 的值或状态。

### SetCustomCameraGlobalOffset
`public void SetCustomCameraGlobalOffset(Vec3 newCameraOffset)`

**用途 / Purpose:** 设置 `custom camera global offset` 的值或状态。

### SetCustomCameraFovMultiplier
`public void SetCustomCameraFovMultiplier(float newFovMultiplier)`

**用途 / Purpose:** 设置 `custom camera fov multiplier` 的值或状态。

### SetCustomCameraFixedDistance
`public void SetCustomCameraFixedDistance(float distance)`

**用途 / Purpose:** 设置 `custom camera fixed distance` 的值或状态。

### SetIgnoredEntityForCamera
`public void SetIgnoredEntityForCamera(GameEntity ignoredEntity)`

**用途 / Purpose:** 设置 `ignored entity for camera` 的值或状态。

### SetCustomCameraIgnoreCollision
`public void SetCustomCameraIgnoreCollision(bool ignoreCollision)`

**用途 / Purpose:** 设置 `custom camera ignore collision` 的值或状态。

### SetListenerAndAttenuationPosBlendFactor
`public void SetListenerAndAttenuationPosBlendFactor(float factor)`

**用途 / Purpose:** 设置 `listener and attenuation pos blend factor` 的值或状态。

### AddTimeSpeedRequest
`public void AddTimeSpeedRequest(TimeSpeedRequest request)`

**用途 / Purpose:** 向当前集合/状态中添加 `time speed request`。

### RemoveTimeSpeedRequest
`public void RemoveTimeSpeedRequest(int timeSpeedRequestID)`

**用途 / Purpose:** 从当前集合/状态中移除 `time speed request`。

### GetRequestedTimeSpeed
`public bool GetRequestedTimeSpeed(int timeSpeedRequestID, out float requestedTime)`

**用途 / Purpose:** 获取 `requested time speed` 的当前值。

### ClearAgentActions
`public void ClearAgentActions()`

**用途 / Purpose:** 处理 `clear agent actions` 相关逻辑。

### ClearMissiles
`public void ClearMissiles()`

**用途 / Purpose:** 处理 `clear missiles` 相关逻辑。

### ClearCorpses
`public void ClearCorpses(bool isMissionReset)`

**用途 / Purpose:** 处理 `clear corpses` 相关逻辑。

### IsAgentInProximityMap
`public bool IsAgentInProximityMap(Agent agent)`

**用途 / Purpose:** 处理 `is agent in proximity map` 相关逻辑。

### OnMissionStateActivate
`public void OnMissionStateActivate()`

**用途 / Purpose:** 当 `mission state activate` 事件触发时调用此方法。

### OnMissionStateDeactivate
`public void OnMissionStateDeactivate()`

**用途 / Purpose:** 当 `mission state deactivate` 事件触发时调用此方法。

### OnMissionStateFinalize
`public void OnMissionStateFinalize(bool forceClearGPUResources)`

**用途 / Purpose:** 当 `mission state finalize` 事件触发时调用此方法。

### ClearUnreferencedResources
`public void ClearUnreferencedResources(bool forceClearGPUResources)`

**用途 / Purpose:** 处理 `clear unreferenced resources` 相关逻辑。

### GetMainAgentMaxCameraZoom
`public float GetMainAgentMaxCameraZoom()`

**用途 / Purpose:** 获取 `main agent max camera zoom` 的当前值。

### GetBestSlopeTowardsDirection
`public WorldPosition GetBestSlopeTowardsDirection(ref WorldPosition centerPosition, float halfSize, ref WorldPosition referencePosition)`

**用途 / Purpose:** 获取 `best slope towards direction` 的当前值。

### GetBestSlopeAngleHeightPosForDefending
`public WorldPosition GetBestSlopeAngleHeightPosForDefending(WorldPosition enemyPosition, WorldPosition defendingPosition, int sampleSize, float distanceRatioAllowedFromDefendedPos, float distanceSqrdAllowedFromBoundary, float cosinusOfBestSlope, float cosinusOfMaxAcceptedSlope, float minSlopeScore, float maxSlopeScore, float excessiveSlopePenalty, float nearConeCenterRatio, float nearConeCenterBonus, float heightDifferenceCeiling, float maxDisplacementPenalty)`

**用途 / Purpose:** 获取 `best slope angle height pos for defending` 的当前值。

### GetAveragePositionOfAgents
`public Vec2 GetAveragePositionOfAgents(List<Agent> agents)`

**用途 / Purpose:** 获取 `average position of agents` 的当前值。

### SetRandomDecideTimeOfAgentsWithIndices
`public void SetRandomDecideTimeOfAgentsWithIndices(int agentIndices, float? minAIReactionTime = null, float? maxAIReactionTime = null)`

**用途 / Purpose:** 设置 `random decide time of agents with indices` 的值或状态。

### SetBowMissileSpeedModifier
`public void SetBowMissileSpeedModifier(float modifier)`

**用途 / Purpose:** 设置 `bow missile speed modifier` 的值或状态。

### SetCrossbowMissileSpeedModifier
`public void SetCrossbowMissileSpeedModifier(float modifier)`

**用途 / Purpose:** 设置 `crossbow missile speed modifier` 的值或状态。

### SetThrowingMissileSpeedModifier
`public void SetThrowingMissileSpeedModifier(float modifier)`

**用途 / Purpose:** 设置 `throwing missile speed modifier` 的值或状态。

### SetMissileRangeModifier
`public void SetMissileRangeModifier(float modifier)`

**用途 / Purpose:** 设置 `missile range modifier` 的值或状态。

### SetLastMovementKeyPressed
`public void SetLastMovementKeyPressed(Agent.MovementControlFlag lastMovementKeyPressed)`

**用途 / Purpose:** 设置 `last movement key pressed` 的值或状态。

### GetWeightedPointOfEnemies
`public Vec2 GetWeightedPointOfEnemies(Agent agent, Vec2 basePoint)`

**用途 / Purpose:** 获取 `weighted point of enemies` 的当前值。

### GetPathBetweenPositions
`public bool GetPathBetweenPositions(ref NavigationData navData)`

**用途 / Purpose:** 获取 `path between positions` 的当前值。

### SetNavigationFaceCostWithIdAroundPosition
`public void SetNavigationFaceCostWithIdAroundPosition(int navigationFaceId, Vec3 position, float cost)`

**用途 / Purpose:** 设置 `navigation face cost with id around position` 的值或状态。

### GetStraightPathToTarget
`public WorldPosition GetStraightPathToTarget(Vec2 targetPosition, WorldPosition startingPosition, float samplingDistance = 1f, bool stopAtObstacle = true)`

**用途 / Purpose:** 获取 `straight path to target` 的当前值。

### SkipForwardMissionReplay
`public void SkipForwardMissionReplay(float startTime, float endTime)`

**用途 / Purpose:** 处理 `skip forward mission replay` 相关逻辑。

### GetDebugAgent
`public int GetDebugAgent()`

**用途 / Purpose:** 获取 `debug agent` 的当前值。

### AddAiDebugText
`public void AddAiDebugText(string str)`

**用途 / Purpose:** 向当前集合/状态中添加 `ai debug text`。

### SetDebugAgent
`public void SetDebugAgent(int index)`

**用途 / Purpose:** 设置 `debug agent` 的值或状态。

### GetFirstPersonFov
`public static float GetFirstPersonFov()`

**用途 / Purpose:** 获取 `first person fov` 的当前值。

### GetWaterLevelAtPosition
`public float GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer)`

**用途 / Purpose:** 获取 `water level at position` 的当前值。

### GetWaterLevelAtPositionMT
`public float GetWaterLevelAtPositionMT(Vec2 position, bool useWaterRenderer)`

**用途 / Purpose:** 获取 `water level at position m t` 的当前值。

### CanPhysicsCollideBetweenTwoEntities
`public bool CanPhysicsCollideBetweenTwoEntities(UIntPtr entity0Ptr, UIntPtr entity1Ptr)`

**用途 / Purpose:** 判断当前对象是否可以执行 `physics collide between two entities`。

### GetRemovedAgentRatioForSide
`public float GetRemovedAgentRatioForSide(BattleSideEnum side)`

**用途 / Purpose:** 获取 `removed agent ratio for side` 的当前值。

### GetAttackerWeaponsForFriendlyFirePreventing
`public ref readonly List<SiegeWeapon> GetAttackerWeaponsForFriendlyFirePreventing()`

**用途 / Purpose:** 获取 `attacker weapons for friendly fire preventing` 的当前值。

### OnDeploymentPlanMade
`public void OnDeploymentPlanMade(Team team, bool isFirstPlan)`

**用途 / Purpose:** 当 `deployment plan made` 事件触发时调用此方法。

### GetAlternatePositionForNavmeshlessOrOutOfBoundsPosition
`public WorldPosition GetAlternatePositionForNavmeshlessOrOutOfBoundsPosition(Vec2 directionTowards, WorldPosition originalPosition, ref float positionPenalty)`

**用途 / Purpose:** 获取 `alternate position for navmeshless or out of bounds position` 的当前值。

### GetNextDynamicNavMeshIdStart
`public int GetNextDynamicNavMeshIdStart()`

**用途 / Purpose:** 获取 `next dynamic nav mesh id start` 的当前值。

### GetAgentTroopClass
`public FormationClass GetAgentTroopClass(BattleSideEnum battleSide, BasicCharacterObject agentCharacter)`

**用途 / Purpose:** 获取 `agent troop class` 的当前值。

### GetClosestFleePositionForAgent
`public WorldPosition GetClosestFleePositionForAgent(Agent agent)`

**用途 / Purpose:** 获取 `closest flee position for agent` 的当前值。

### GetClosestFleePositionForFormation
`public WorldPosition GetClosestFleePositionForFormation(Formation formation)`

**用途 / Purpose:** 获取 `closest flee position for formation` 的当前值。

### GetFleePositionsForSide
`public MBReadOnlyList<FleePosition> GetFleePositionsForSide(BattleSideEnum side)`

**用途 / Purpose:** 获取 `flee positions for side` 的当前值。

### AddToWeaponListForFriendlyFirePreventing
`public void AddToWeaponListForFriendlyFirePreventing(SiegeWeapon weapon)`

**用途 / Purpose:** 向当前集合/状态中添加 `to weapon list for friendly fire preventing`。

### SetCloseProximityWaveSoundsEnabled
`public void SetCloseProximityWaveSoundsEnabled(bool value)`

**用途 / Purpose:** 设置 `close proximity wave sounds enabled` 的值或状态。

### ForceDisableOcclusion
`public void ForceDisableOcclusion(bool value)`

**用途 / Purpose:** 处理 `force disable occlusion` 相关逻辑。

### AddFleePosition
`public void AddFleePosition(FleePosition fleePosition)`

**用途 / Purpose:** 向当前集合/状态中添加 `flee position`。

### RetreatMission
`public void RetreatMission()`

**用途 / Purpose:** 处理 `retreat mission` 相关逻辑。

### SurrenderMission
`public void SurrenderMission()`

**用途 / Purpose:** 处理 `surrender mission` 相关逻辑。

### SpawnAttachedWeaponOnCorpse
`public SpawnedItemEntity SpawnAttachedWeaponOnCorpse(Agent agent, int attachedWeaponIndex, int forcedSpawnIndex)`

**用途 / Purpose:** 处理 `spawn attached weapon on corpse` 相关逻辑。

### AddMountWithoutRider
`public void AddMountWithoutRider(Agent mount)`

**用途 / Purpose:** 向当前集合/状态中添加 `mount without rider`。

### RemoveMountWithoutRider
`public void RemoveMountWithoutRider(Agent mount)`

**用途 / Purpose:** 从当前集合/状态中移除 `mount without rider`。

### UpdateMountReservationsAfterRiderMounts
`public void UpdateMountReservationsAfterRiderMounts(Agent rider, Agent mount)`

**用途 / Purpose:** 更新 `mount reservations after rider mounts` 的状态或数据。

### OnObjectDisabled
`public void OnObjectDisabled(DestructableComponent destructionComponent)`

**用途 / Purpose:** 当 `object disabled` 事件触发时调用此方法。

### TryGetMissileVelocityFromMissileIndex
`public bool TryGetMissileVelocityFromMissileIndex(int missileIndex, out Vec3 velocity)`

**用途 / Purpose:** 尝试获取 `get missile velocity from missile index`，通常以 out 参数返回结果。

### SpawnWeaponAsDropFromMissile
`public MissionObjectId SpawnWeaponAsDropFromMissile(int missileIndex, MissionObject attachedMissionObject, in MatrixFrame attachLocalFrame, WeaponSpawnFlags spawnFlags, in Vec3 velocity, in Vec3 angularVelocity, int forcedSpawnIndex)`

**用途 / Purpose:** 处理 `spawn weapon as drop from missile` 相关逻辑。

### SpawnWeaponAsDropFromAgentAux
`public void SpawnWeaponAsDropFromAgentAux(Agent agent, EquipmentIndex equipmentIndex, ref Vec3 globalVelocity, ref Vec3 globalAngularVelocity, WeaponSpawnFlags spawnFlags, int forcedSpawnIndex)`

**用途 / Purpose:** 处理 `spawn weapon as drop from agent aux` 相关逻辑。

### SpawnAttachedWeaponOnSpawnedWeapon
`public void SpawnAttachedWeaponOnSpawnedWeapon(SpawnedItemEntity spawnedWeapon, int attachmentIndex, int forcedSpawnIndex)`

**用途 / Purpose:** 处理 `spawn attached weapon on spawned weapon` 相关逻辑。

### SpawnWeaponWithNewEntity
`public GameEntity SpawnWeaponWithNewEntity(ref MissionWeapon weapon, WeaponSpawnFlags spawnFlags, MatrixFrame frame)`

**用途 / Purpose:** 处理 `spawn weapon with new entity` 相关逻辑。

### SpawnWeaponWithNewEntityAux
`public GameEntity SpawnWeaponWithNewEntityAux(MissionWeapon weapon, WeaponSpawnFlags spawnFlags, MatrixFrame frame, int forcedSpawnIndex, MissionObject attachedMissionObject, bool hasLifeTime, bool spawnedOnACorpse = false)`

**用途 / Purpose:** 处理 `spawn weapon with new entity aux` 相关逻辑。

### AttachWeaponWithNewEntityToSpawnedWeapon
`public void AttachWeaponWithNewEntityToSpawnedWeapon(MissionWeapon weapon, SpawnedItemEntity spawnedItem, MatrixFrame attachLocalFrame)`

**用途 / Purpose:** 处理 `attach weapon with new entity to spawned weapon` 相关逻辑。

### OnEquipItemsFromSpawnEquipmentBegin
`public void OnEquipItemsFromSpawnEquipmentBegin(Agent agent, Agent.CreationType creationType)`

**用途 / Purpose:** 当 `equip items from spawn equipment begin` 事件触发时调用此方法。

### OnEquipItemsFromSpawnEquipment
`public void OnEquipItemsFromSpawnEquipment(Agent agent, Agent.CreationType creationType)`

**用途 / Purpose:** 当 `equip items from spawn equipment` 事件触发时调用此方法。

### GetCurrentVolumeGeneratorVersion
`public static int GetCurrentVolumeGeneratorVersion()`

**用途 / Purpose:** 获取 `current volume generator version` 的当前值。

### MakeEnemiesFleeCheat
`public static string MakeEnemiesFleeCheat(List<string> strings)`

**用途 / Purpose:** 处理 `make enemies flee cheat` 相关逻辑。

### MakeTeamFleeCheat
`public static string MakeTeamFleeCheat(List<string> strings)`

**用途 / Purpose:** 处理 `make team flee cheat` 相关逻辑。

### RecalculateBody
`public void RecalculateBody(ref WeaponData weaponData, ItemComponent itemComponent, WeaponDesign craftedWeaponData, ref WeaponSpawnFlags spawnFlags)`

**用途 / Purpose:** 处理 `recalculate body` 相关逻辑。

### SetFacialAnimToAgent
`public static string SetFacialAnimToAgent(List<string> strings)`

**用途 / Purpose:** 设置 `facial anim to agent` 的值或状态。

### TickAgentsAndTeamsImp
`public void TickAgentsAndTeamsImp(float dt, bool tickPaused)`

**用途 / Purpose:** 处理 `tick agents and teams imp` 相关逻辑。

### EnableSpeedAdjustmentCommand
`public static string EnableSpeedAdjustmentCommand(List<string> strings)`

**用途 / Purpose:** 处理 `enable speed adjustment command` 相关逻辑。

### OnTick
`public void OnTick(float dt, float realDt, bool updateCamera, bool doAsyncAITick)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### AddTickAction
`public void AddTickAction(MissionTickAction action, Agent agent, int param1, int param2)`

**用途 / Purpose:** 向当前集合/状态中添加 `tick action`。

### AddTickActionMT
`public void AddTickActionMT(MissionTickAction action, Agent agent, int param1, int param2)`

**用途 / Purpose:** 向当前集合/状态中添加 `tick action m t`。

### RemoveSpawnedItemsAndMissiles
`public void RemoveSpawnedItemsAndMissiles()`

**用途 / Purpose:** 从当前集合/状态中移除 `spawned items and missiles`。

### AfterStart
`public void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnEndMissionRequest
`public void OnEndMissionRequest()`

**用途 / Purpose:** 当 `end mission request` 事件触发时调用此方法。

### GetMissionEndTimeInSeconds
`public float GetMissionEndTimeInSeconds()`

**用途 / Purpose:** 获取 `mission end time in seconds` 的当前值。

### GetMissionEndTimerValue
`public float GetMissionEndTimerValue()`

**用途 / Purpose:** 获取 `mission end timer value` 的当前值。

### GetMemberCountOfSide
`public int GetMemberCountOfSide(BattleSideEnum side)`

**用途 / Purpose:** 获取 `member count of side` 的当前值。

### GetInitialSpawnPath
`public Path GetInitialSpawnPath()`

**用途 / Purpose:** 获取 `initial spawn path` 的当前值。

### GetInitialSpawnPathData
`public SpawnPathData GetInitialSpawnPathData(BattleSideEnum battleSide)`

**用途 / Purpose:** 获取 `initial spawn path data` 的当前值。

### GetReinforcementPathsDataOfSide
`public MBReadOnlyList<SpawnPathData> GetReinforcementPathsDataOfSide(BattleSideEnum battleSide)`

**用途 / Purpose:** 获取 `reinforcement paths data of side` 的当前值。

### GetTroopSpawnFrameWithIndex
`public void GetTroopSpawnFrameWithIndex(AgentBuildData buildData, int troopSpawnIndex, int troopSpawnCount, out Vec3 troopSpawnPosition, out Vec2 troopSpawnDirection)`

**用途 / Purpose:** 获取 `troop spawn frame with index` 的当前值。

### GetFormationSpawnFrame
`public void GetFormationSpawnFrame(Team team, FormationClass formationClass, bool isReinforcement, out WorldPosition spawnPosition, out Vec2 spawnDirection, bool useDefaultClassIfNotFound = true)`

**用途 / Purpose:** 获取 `formation spawn frame` 的当前值。

### GetSpawnPathFrame
`public WorldFrame GetSpawnPathFrame(BattleSideEnum battleSide, float pathOffset = 0f, float targetOffset = 0f)`

**用途 / Purpose:** 获取 `spawn path frame` 的当前值。

### SetBattleAgentCount
`public void SetBattleAgentCount(int agentCount)`

**用途 / Purpose:** 设置 `battle agent count` 的值或状态。

### GetFormationSpawnPosition
`public Vec2 GetFormationSpawnPosition(Team team, FormationClass formationClass)`

**用途 / Purpose:** 获取 `formation spawn position` 的当前值。

### GetFormationSpawnClass
`public FormationClass GetFormationSpawnClass(Team team, FormationClass formationClass, bool isReinforcement = false)`

**用途 / Purpose:** 获取 `formation spawn class` 的当前值。

### SpawnAgent
`public Agent SpawnAgent(AgentBuildData agentBuildData, bool spawnFromAgentVisuals = false)`

**用途 / Purpose:** 处理 `spawn agent` 相关逻辑。

### SetInitialAgentCountForSide
`public void SetInitialAgentCountForSide(BattleSideEnum side, int agentCount)`

**用途 / Purpose:** 设置 `initial agent count for side` 的值或状态。

### SetFormationPositioningFromDeploymentPlan
`public void SetFormationPositioningFromDeploymentPlan(Formation formation)`

**用途 / Purpose:** 设置 `formation positioning from deployment plan` 的值或状态。

### SpawnMonster
`public Agent SpawnMonster(ItemRosterElement rosterElement, ItemRosterElement harnessRosterElement, in Vec3 initialPosition, in Vec2 initialDirection, int forcedAgentIndex = -1)`

**用途 / Purpose:** 处理 `spawn monster` 相关逻辑。

### SpawnMonster
`public Agent SpawnMonster(EquipmentElement equipmentElement, EquipmentElement harnessRosterElement, in Vec3 initialPosition, in Vec2 initialDirection, int forcedAgentIndex = -1)`

**用途 / Purpose:** 处理 `spawn monster` 相关逻辑。

### SpawnTroop
`public Agent SpawnTroop(IAgentOriginBase troopOrigin, bool isPlayerSide, bool hasFormation, bool spawnWithHorse, bool isReinforcement, int formationTroopCount, int formationTroopIndex, bool isAlarmed, bool wieldInitialWeapons, Vec3? initialPosition, Vec2? initialDirection, string specialActionSetSuffix = null, ItemObject bannerItem = null, FormationClass formationIndex = FormationClass.NumberOfAllFormations, bool useTroopClassForSpawn = false)`

**用途 / Purpose:** 处理 `spawn troop` 相关逻辑。

### ReplaceBotWithPlayer
`public Agent ReplaceBotWithPlayer(Agent botAgent, MissionPeer missionPeer)`

**用途 / Purpose:** 处理 `replace bot with player` 相关逻辑。

### OnAgentInteraction
`public void OnAgentInteraction(Agent requesterAgent, Agent targetAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** 当 `agent interaction` 事件触发时调用此方法。

### EndMission
`public void EndMission()`

**用途 / Purpose:** 处理 `end mission` 相关逻辑。

### AddMissionBehavior
`public void AddMissionBehavior(MissionBehavior missionBehavior)`

**用途 / Purpose:** 向当前集合/状态中添加 `mission behavior`。

### RemoveMissionBehavior
`public void RemoveMissionBehavior(MissionBehavior missionBehavior)`

**用途 / Purpose:** 从当前集合/状态中移除 `mission behavior`。

### JoinEnemyTeam
`public void JoinEnemyTeam()`

**用途 / Purpose:** 处理 `join enemy team` 相关逻辑。

### OnEndMissionResult
`public void OnEndMissionResult()`

**用途 / Purpose:** 当 `end mission result` 事件触发时调用此方法。

### IsAgentInteractionAllowed
`public bool IsAgentInteractionAllowed()`

**用途 / Purpose:** 处理 `is agent interaction allowed` 相关逻辑。

### IsOrderGesturesEnabled
`public bool IsOrderGesturesEnabled()`

**用途 / Purpose:** 处理 `is order gestures enabled` 相关逻辑。

### GetExtraEquipmentElementsForCharacter
`public List<EquipmentElement> GetExtraEquipmentElementsForCharacter(BasicCharacterObject character, bool getAllEquipments = false)`

**用途 / Purpose:** 获取 `extra equipment elements for character` 的当前值。

### IsPlayerCloseToAnEnemy
`public bool IsPlayerCloseToAnEnemy(float distance = 5f)`

**用途 / Purpose:** 处理 `is player close to an enemy` 相关逻辑。

### GetRandomPositionAroundPoint
`public Vec3 GetRandomPositionAroundPoint(Vec3 center, float minDistance, float maxDistance, bool nearFirst = false)`

**用途 / Purpose:** 获取 `random position around point` 的当前值。

### FindBestDefendingPosition
`public WorldPosition FindBestDefendingPosition(WorldPosition enemyPosition, WorldPosition defendedPosition)`

**用途 / Purpose:** 处理 `find best defending position` 相关逻辑。

### FindPositionWithBiggestSlopeTowardsDirectionInSquare
`public WorldPosition FindPositionWithBiggestSlopeTowardsDirectionInSquare(ref WorldPosition center, float halfSize, ref WorldPosition referencePosition)`

**用途 / Purpose:** 处理 `find position with biggest slope towards direction in square` 相关逻辑。

### AddCustomMissile
`public Missile AddCustomMissile(Agent shooterAgent, MissionWeapon missileWeapon, Vec3 position, Vec3 direction, Mat3 orientation, float baseSpeed, float speed, bool addRigidBody, MissionObject missionObjectToIgnore, int forcedMissileIndex = -1)`

**用途 / Purpose:** 向当前集合/状态中添加 `custom missile`。

### OnAgentMount
`public void OnAgentMount(Agent agent)`

**用途 / Purpose:** 当 `agent mount` 事件触发时调用此方法。

### OnAgentDismount
`public void OnAgentDismount(Agent agent)`

**用途 / Purpose:** 当 `agent dismount` 事件触发时调用此方法。

### OnObjectUsed
`public void OnObjectUsed(Agent userAgent, UsableMissionObject usableGameObject)`

**用途 / Purpose:** 当 `object used` 事件触发时调用此方法。

### OnObjectStoppedBeingUsed
`public void OnObjectStoppedBeingUsed(Agent userAgent, UsableMissionObject usableGameObject)`

**用途 / Purpose:** 当 `object stopped being used` 事件触发时调用此方法。

### InitializeStartingBehaviors
`public void InitializeStartingBehaviors(MissionLogic logicBehaviors, MissionBehavior otherBehaviors, MissionNetwork networkBehaviors)`

**用途 / Purpose:** 初始化 `starting behaviors` 的状态、资源或绑定。

### GetClosestEnemyAgent
`public Agent GetClosestEnemyAgent(Team team, Vec3 position, float radius)`

**用途 / Purpose:** 获取 `closest enemy agent` 的当前值。

### GetClosestAllyAgent
`public Agent GetClosestAllyAgent(Team team, Vec3 position, float radius)`

**用途 / Purpose:** 获取 `closest ally agent` 的当前值。

### GetNearbyEnemyAgentCount
`public int GetNearbyEnemyAgentCount(Team team, Vec2 position, float radius)`

**用途 / Purpose:** 获取 `nearby enemy agent count` 的当前值。

### HasAnyAgentsOfSideInRange
`public bool HasAnyAgentsOfSideInRange(Vec3 origin, float radius, BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `any agents of side in range`。

### AddSoundAlarmFactorToAgents
`public void AddSoundAlarmFactorToAgents(Agent alarmCreatorAgent, in Vec3 soundPosition, float soundLevelSquareRoot)`

**用途 / Purpose:** 向当前集合/状态中添加 `sound alarm factor to agents`。

### OnMissionObjectRemoved
`public bool OnMissionObjectRemoved(MissionObject missionObject, int removeReason)`

**用途 / Purpose:** 当 `mission object removed` 事件触发时调用此方法。

### AgentLookingAtAgent
`public bool AgentLookingAtAgent(Agent agent1, Agent agent2)`

**用途 / Purpose:** 处理 `agent looking at agent` 相关逻辑。

### FindAgentWithIndex
`public Agent FindAgentWithIndex(int agentId)`

**用途 / Purpose:** 处理 `find agent with index` 相关逻辑。

### GetUnderAttackTypeOfAgents
`public static Agent.UnderAttackType GetUnderAttackTypeOfAgents(IEnumerable<Agent> agents, float timeLimit = 3f)`

**用途 / Purpose:** 获取 `under attack type of agents` 的当前值。

### GetAgentTeam
`public static Team GetAgentTeam(IAgentOriginBase troopOrigin, bool isPlayerSide)`

**用途 / Purpose:** 获取 `agent team` 的当前值。

### GetTeam
`public static Team GetTeam(TeamSideEnum teamSide)`

**用途 / Purpose:** 获取 `team` 的当前值。

### GetTeamsOfSide
`public static IEnumerable<Team> GetTeamsOfSide(BattleSideEnum side)`

**用途 / Purpose:** 获取 `teams of side` 的当前值。

### ComputeSpawnPathDeploymentOffset
`public static float ComputeSpawnPathDeploymentOffset(int troopCount, Path path)`

**用途 / Purpose:** 处理 `compute spawn path deployment offset` 相关逻辑。

### OnRenderingStarted
`public void OnRenderingStarted()`

**用途 / Purpose:** 当 `rendering started` 事件触发时调用此方法。

### GetMovementTypeOfAgents
`public Agent.MovementBehaviorType GetMovementTypeOfAgents(IEnumerable<Agent> agents)`

**用途 / Purpose:** 获取 `movement type of agents` 的当前值。

### ShowInMissionLoadingScreen
`public void ShowInMissionLoadingScreen(int durationInSecond, Action onLoadingEndedAction)`

**用途 / Purpose:** 处理 `show in mission loading screen` 相关逻辑。

### CanAgentRout
`public bool CanAgentRout(Agent agent)`

**用途 / Purpose:** 判断当前对象是否可以执行 `agent rout`。

### HandleMissileCollisionReaction
`public void HandleMissileCollisionReaction(int missileIndex, MissileCollisionReaction collisionReaction, MatrixFrame attachLocalFrame, bool isAttachedFrameLocal, Agent attackerAgent, Agent attachedAgent, bool attachedToShield, sbyte attachedBoneIndex, MissionObject attachedMissionObject, Vec3 bounceBackVelocity, Vec3 bounceBackAngularVelocity, int forcedSpawnIndex)`

**用途 / Purpose:** 处理 `missile collision reaction` 事件或回调。

### KillAgentsOnEntity
`public void KillAgentsOnEntity(GameEntity entity, Agent destroyerAgent, bool burnAgents)`

**用途 / Purpose:** 处理 `kill agents on entity` 相关逻辑。

### KillAgentCheat
`public void KillAgentCheat(Agent agent)`

**用途 / Purpose:** 处理 `kill agent cheat` 相关逻辑。

### KillCheats
`public bool KillCheats(bool killAll, bool killEnemy, bool killHorse, bool killYourself)`

**用途 / Purpose:** 处理 `kill cheats` 相关逻辑。

### CanTakeControlOfAgent
`public bool CanTakeControlOfAgent(Agent agentToTakeControlOf)`

**用途 / Purpose:** 判断当前对象是否可以执行 `take control of agent`。

### SetPlayerCanTakeControlOfAnotherAgentWhenDead
`public void SetPlayerCanTakeControlOfAnotherAgentWhenDead()`

**用途 / Purpose:** 设置 `player can take control of another agent when dead` 的值或状态。

### TakeControlOfAgent
`public void TakeControlOfAgent(Agent agentToTakeControlOf)`

**用途 / Purpose:** 处理 `take control of agent` 相关逻辑。

### GetDamageMultiplierOfCombatDifficulty
`public float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)`

**用途 / Purpose:** 获取 `damage multiplier of combat difficulty` 的当前值。

### GetShootDifficulty
`public float GetShootDifficulty(Agent affectedAgent, Agent affectorAgent, bool isHeadShot)`

**用途 / Purpose:** 获取 `shoot difficulty` 的当前值。

### AddCombatLogSafe
`public void AddCombatLogSafe(Agent attackerAgent, Agent victimAgent, CombatLogData combatLog)`

**用途 / Purpose:** 向当前集合/状态中添加 `combat log safe`。

### CreateMissionObjectFromPrefab
`public MissionObject CreateMissionObjectFromPrefab(string prefab, MatrixFrame frame, bool hasCustomRestOffset, float restOffset, Action<GameEntity> actionAppliedBeforeScriptInitialization)`

**用途 / Purpose:** 创建一个 `mission object from prefab` 实例或对象。

### GetNearbyAllyAgentsCount
`public int GetNearbyAllyAgentsCount(Vec2 center, float radius, Team team)`

**用途 / Purpose:** 获取 `nearby ally agents count` 的当前值。

### GetNearbyAllyAgents
`public MBList<Agent> GetNearbyAllyAgents(Vec2 center, float radius, Team team, MBList<Agent> agents)`

**用途 / Purpose:** 获取 `nearby ally agents` 的当前值。

### GetNearbyEnemyAgents
`public MBList<Agent> GetNearbyEnemyAgents(Vec2 center, float radius, Team team, MBList<Agent> agents)`

**用途 / Purpose:** 获取 `nearby enemy agents` 的当前值。

### GetNearbyAgents
`public MBList<Agent> GetNearbyAgents(Vec2 center, float radius, MBList<Agent> agents)`

**用途 / Purpose:** 获取 `nearby agents` 的当前值。

### IsFormationUnitPositionAvailableMT
`public bool IsFormationUnitPositionAvailableMT(ref WorldPosition formationPosition, ref WorldPosition unitPosition, ref WorldPosition nearestAvailableUnitPosition, float manhattanDistance, Team team)`

**用途 / Purpose:** 处理 `is formation unit position available m t` 相关逻辑。

### IsOrderPositionAvailable
`public bool IsOrderPositionAvailable(in WorldPosition orderPosition, Team team)`

**用途 / Purpose:** 处理 `is order position available` 相关逻辑。

### IsFormationUnitPositionAvailable
`public bool IsFormationUnitPositionAvailable(ref WorldPosition unitPosition, Team team)`

**用途 / Purpose:** 处理 `is formation unit position available` 相关逻辑。

### HasSceneMapPatch
`public bool HasSceneMapPatch()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `scene map patch`。

### GetPatchSceneEncounterPosition
`public bool GetPatchSceneEncounterPosition(out Vec3 position)`

**用途 / Purpose:** 获取 `patch scene encounter position` 的当前值。

### GetPatchSceneEncounterDirection
`public bool GetPatchSceneEncounterDirection(out Vec2 direction)`

**用途 / Purpose:** 获取 `patch scene encounter direction` 的当前值。

### AddTimerToDynamicEntity
`public void AddTimerToDynamicEntity(GameEntity gameEntity, float timeToKill = 10f)`

**用途 / Purpose:** 向当前集合/状态中添加 `timer to dynamic entity`。

### AddListener
`public void AddListener(IMissionListener listener)`

**用途 / Purpose:** 向当前集合/状态中添加 `listener`。

### RemoveListener
`public void RemoveListener(IMissionListener listener)`

**用途 / Purpose:** 从当前集合/状态中移除 `listener`。

### OnAgentFleeing
`public void OnAgentFleeing(Agent agent)`

**用途 / Purpose:** 当 `agent fleeing` 事件触发时调用此方法。

### OnAgentPanicked
`public void OnAgentPanicked(Agent agent)`

**用途 / Purpose:** 当 `agent panicked` 事件触发时调用此方法。

### OnTeamDeployed
`public void OnTeamDeployed(Team team)`

**用途 / Purpose:** 当 `team deployed` 事件触发时调用此方法。

### OnBattleSideDeployed
`public void OnBattleSideDeployed(BattleSideEnum side)`

**用途 / Purpose:** 当 `battle side deployed` 事件触发时调用此方法。

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**用途 / Purpose:** 当 `deployment finished` 事件触发时调用此方法。

### OnAfterDeploymentFinished
`public void OnAfterDeploymentFinished()`

**用途 / Purpose:** 当 `after deployment finished` 事件触发时调用此方法。

### OnFormationCaptainChanged
`public void OnFormationCaptainChanged(Formation formation)`

**用途 / Purpose:** 当 `formation captain changed` 事件触发时调用此方法。

### SetFastForwardingFromUI
`public void SetFastForwardingFromUI(bool fastForwarding)`

**用途 / Purpose:** 设置 `fast forwarding from u i` 的值或状态。

### CheckIfBattleInRetreat
`public bool CheckIfBattleInRetreat()`

**用途 / Purpose:** 处理 `check if battle in retreat` 相关逻辑。

### AddSpawnedItemEntityCreatedAtRuntime
`public void AddSpawnedItemEntityCreatedAtRuntime(SpawnedItemEntity spawnedItemEntity)`

**用途 / Purpose:** 向当前集合/状态中添加 `spawned item entity created at runtime`。

### TriggerOnItemPickUpEvent
`public void TriggerOnItemPickUpEvent(Agent agent, SpawnedItemEntity spawnedItemEntity)`

**用途 / Purpose:** 处理 `trigger on item pick up event` 相关逻辑。

### KillNAllies
`public static string KillNAllies(List<string> strings)`

**用途 / Purpose:** 处理 `kill n allies` 相关逻辑。

### KillAllAllies
`public static string KillAllAllies(List<string> strings)`

**用途 / Purpose:** 处理 `kill all allies` 相关逻辑。

### ToggleDisableDying
`public static string ToggleDisableDying(List<string> strings)`

**用途 / Purpose:** 处理 `toggle disable dying` 相关逻辑。

### ToggleDisableDyingTeam
`public static string ToggleDisableDyingTeam(List<string> strings)`

**用途 / Purpose:** 处理 `toggle disable dying team` 相关逻辑。

### KillAgent
`public static string KillAgent(List<string> strings)`

**用途 / Purpose:** 处理 `kill agent` 相关逻辑。

### IncreaseBatteringRamSpeeds
`public static string IncreaseBatteringRamSpeeds(List<string> strings)`

**用途 / Purpose:** 处理 `increase battering ram speeds` 相关逻辑。

### IncreaseSiegeTowerSpeed
`public static string IncreaseSiegeTowerSpeed(List<string> strings)`

**用途 / Purpose:** 处理 `increase siege tower speed` 相关逻辑。

### LoadParamsDebug
`public static string LoadParamsDebug(List<string> strings)`

**用途 / Purpose:** 加载 `params debug` 数据。

## 使用示例

```csharp
var mission = Mission.Current;
mission.AddActiveMissionObject(missionObject);
```

## 参见

- [完整类目录](../catalog)