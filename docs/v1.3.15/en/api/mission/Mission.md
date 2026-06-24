<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Mission`
- [← Area / Back to mission](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
- [🔀 Cross-Version Compare /versions/Mission](/versions/Mission)
<!-- END BREADCRUMB -->
# Mission

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Mission : DotNetObject, IMission`
**Base:** `DotNetObject`
**File:** `TaleWorlds.MountAndBlade/Mission.cs`

## Overview

`Mission` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsFinalized` | `public bool IsFinalized { get; }` |
| `Current` | `public static Mission Current { get; }` |
| `SceneName` | `public string SceneName { get; }` |
| `SceneLevels` | `public string SceneLevels { get; }` |
| `DamageToPlayerMultiplier` | `public float DamageToPlayerMultiplier { get; }` |
| `DamageToFriendsMultiplier` | `public float DamageToFriendsMultiplier { get; }` |
| `DamageFromPlayerToFriendsMultiplier` | `public float DamageFromPlayerToFriendsMultiplier { get; }` |
| `HasValidTerrainType` | `public bool HasValidTerrainType { get; }` |
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
| `ActiveMissionObjects` | `public MBReadOnlyList<MissionObject> ActiveMissionObjects { get; }` |
| `MissionObjects` | `public MBReadOnlyList<MissionObject> MissionObjects { get; }` |
| `AddedEntitiesInfo` | `public MBReadOnlyList<Mission.DynamicallyCreatedEntity> AddedEntitiesInfo { get; }` |
| `Boundaries` | `public Mission.MBBoundaryCollection Boundaries { get; }` |
| `IsMainAgentObjectInteractionEnabled` | `public bool IsMainAgentObjectInteractionEnabled { get; }` |
| `IsMainAgentItemInteractionEnabled` | `public bool IsMainAgentItemInteractionEnabled { get; }` |
| `IsTeleportingAgents` | `public bool IsTeleportingAgents { get; set; }` |
| `ForceTickOccasionally` | `public bool ForceTickOccasionally { get; set; }` |
| `CombatType` | `public Mission.MissionCombatType CombatType { get; set; }` |
| `Mode` | `public MissionMode Mode { get; }` |
| `CurrentTime` | `public float CurrentTime { get; set; }` |
| `PauseAITick` | `public bool PauseAITick { get; set; }` |
| `IsLoadingFinished` | `public bool IsLoadingFinished { get; }` |
| `CameraIsFirstPerson` | `public bool CameraIsFirstPerson { get; set; }` |
| `CameraAddedDistance` | `public static float CameraAddedDistance { get; set; }` |
| `ClearSceneTimerElapsedTime` | `public float ClearSceneTimerElapsedTime { get; }` |
| `MissilesList` | `public MBReadOnlyList<Mission.Missile> MissilesList { get; }` |
| `MissionEnded` | `public bool MissionEnded { get; }` |
| `MountsWithoutRiders` | `public MBReadOnlyList<KeyValuePair<Agent, MissionTime>> MountsWithoutRiders { get; }` |
| `MissionIsEnding` | `public bool MissionIsEnding { get; }` |
| `IsDeploymentFinished` | `public bool IsDeploymentFinished { get; }` |
| `RetreatSide` | `public BattleSideEnum RetreatSide { get; }` |
| `IsFastForward` | `public bool IsFastForward { get; }` |
| `FixedDeltaTimeMode` | `public bool FixedDeltaTimeMode { get; }` |
| `FixedDeltaTime` | `public float FixedDeltaTime { get; }` |
| `CurrentState` | `public Mission.State CurrentState { get; }` |
| `Teams` | `public Mission.TeamCollection Teams { get; }` |
| `AttackerTeam` | `public Team AttackerTeam { get; }` |
| `DefenderTeam` | `public Team DefenderTeam { get; }` |
| `AttackerAllyTeam` | `public Team AttackerAllyTeam { get; }` |
| `DefenderAllyTeam` | `public Team DefenderAllyTeam { get; set; }` |
| `PlayerTeam` | `public Team PlayerTeam { get; set; }` |
| `PlayerEnemyTeam` | `public Team PlayerEnemyTeam { get; set; }` |
| `PlayerAllyTeam` | `public Team PlayerAllyTeam { get; set; }` |
| `SpectatorTeam` | `public Team SpectatorTeam { get; set; }` |
| `IsMissionEnding` | `public bool IsMissionEnding { get; }` |
| `MissionLogics` | `public List<MissionLogic> MissionLogics { get; set; }` |
| `MissionBehaviors` | `public List<MissionBehavior> MissionBehaviors { get; }` |
| `InputManager` | `public IInputContext InputManager { get; }` |
| `NeedsMemoryCleanup` | `public bool NeedsMemoryCleanup { get; }` |
| `MainAgent` | `public Agent MainAgent { get; set; }` |
| `DeploymentPlan` | `public IMissionDeploymentPlan DeploymentPlan { get; }` |
| `IsBattleSpawnPathSelectorInitialized` | `public bool IsBattleSpawnPathSelectorInitialized { get; }` |
| `MainAgentServer` | `public Agent MainAgentServer { get; set; }` |
| `HasSpawnPath` | `public bool HasSpawnPath { get; }` |
| `IsFieldBattle` | `public bool IsFieldBattle { get; }` |
| `IsSiegeBattle` | `public bool IsSiegeBattle { get; }` |
| `IsSallyOutBattle` | `public bool IsSallyOutBattle { get; }` |
| `IsNavalBattle` | `public bool IsNavalBattle { get; }` |
| `AllAgents` | `public AgentReadOnlyList AllAgents { get; }` |
| `Agents` | `public AgentReadOnlyList Agents { get; }` |
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
| `MissionTeamAIType` | `public Mission.MissionTeamAITypeEnum MissionTeamAIType { get; set; }` |
| `Recorder` | `public MissionRecorder Recorder { get; }` |
| `CanPlayerTakeControlOfAnotherAgentWhenDead` | `public bool CanPlayerTakeControlOfAnotherAgentWhenDead { get; }` |
| `MissionTimeTracker` | `public MissionTimeTracker MissionTimeTracker { get; }` |
| `Count` | `public int Count { get; }` |
| `IsReadOnly` | `public bool IsReadOnly { get; }` |
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
| `Player` | `public Team Player { get; set; }` |
| `PlayerEnemy` | `public Team PlayerEnemy { get; }` |
| `PlayerAlly` | `public Team PlayerAlly { get; }` |

## Key Methods

### AddActiveMissionObject
`public void AddActiveMissionObject(MissionObject missionObject)`

**Purpose:** Adds `active mission object` to the current collection or state.

### ActivateMissionObject
`public void ActivateMissionObject(MissionObject missionObject)`

**Purpose:** Handles logic related to `activate mission object`.

### DeactivateMissionObject
`public void DeactivateMissionObject(MissionObject missionObject)`

**Purpose:** Handles logic related to `deactivate mission object`.

### SetMissionCombatType
`public void SetMissionCombatType(Mission.MissionCombatType missionCombatType)`

**Purpose:** Sets the value or state of `mission combat type`.

### ConversationCharacterChanged
`public void ConversationCharacterChanged()`

**Purpose:** Handles logic related to `conversation character changed`.

### SetMissionMode
`public void SetMissionMode(MissionMode newMode, bool atStart)`

**Purpose:** Sets the value or state of `mission mode`.

### GetAverageFps
`public float GetAverageFps()`

**Purpose:** Gets the current value of `average fps`.

### GetFallAvoidSystemActive
`public bool GetFallAvoidSystemActive()`

**Purpose:** Gets the current value of `fall avoid system active`.

### SetFallAvoidSystemActive
`public void SetFallAvoidSystemActive(bool fallAvoidActive)`

**Purpose:** Sets the value or state of `fall avoid system active`.

### IsPositionInsideBoundaries
`public bool IsPositionInsideBoundaries(Vec2 position)`

**Purpose:** Handles logic related to `is position inside boundaries`.

### IsPositionInsideHardBoundaries
`public bool IsPositionInsideHardBoundaries(Vec2 position)`

**Purpose:** Handles logic related to `is position inside hard boundaries`.

### IsPositionInsideAnyBlockerNavMeshFace2D
`public bool IsPositionInsideAnyBlockerNavMeshFace2D(Vec2 position)`

**Purpose:** Handles logic related to `is position inside any blocker nav mesh face2 d`.

### IsPositionOnAnyBlockerNavMeshFace
`public bool IsPositionOnAnyBlockerNavMeshFace(Vec3 position)`

**Purpose:** Handles logic related to `is position on any blocker nav mesh face`.

### RayCastForClosestAgent
`public Agent RayCastForClosestAgent(Vec3 sourcePoint, Vec3 targetPoint, int excludedAgentIndex, float rayThickness, out float collisionDistance)`

**Purpose:** Handles logic related to `ray cast for closest agent`.

### RayCastForClosestAgentsLimbs
`public Agent RayCastForClosestAgentsLimbs(Vec3 sourcePoint, Vec3 targetPoint, int excludedAgentIndex, float rayThickness, out float collisionDistance, out sbyte boneIndex)`

**Purpose:** Handles logic related to `ray cast for closest agents limbs`.

### RayCastForGivenAgentsLimbs
`public bool RayCastForGivenAgentsLimbs(Vec3 sourcePoint, Vec3 rayFinishPoint, int givenAgentIndex, float rayThickness, out float collisionDistance, out sbyte boneIndex)`

**Purpose:** Handles logic related to `ray cast for given agents limbs`.

### GetBiggestAgentCollisionPadding
`public float GetBiggestAgentCollisionPadding()`

**Purpose:** Gets the current value of `biggest agent collision padding`.

### SetMissionCorpseFadeOutTimeInSeconds
`public void SetMissionCorpseFadeOutTimeInSeconds(float corpseFadeOutTimeInSeconds)`

**Purpose:** Sets the value or state of `mission corpse fade out time in seconds`.

### SetOverrideCorpseCount
`public void SetOverrideCorpseCount(int overrideCorpseCount)`

**Purpose:** Sets the value or state of `override corpse count`.

### SetReportStuckAgentsMode
`public void SetReportStuckAgentsMode(bool value)`

**Purpose:** Sets the value or state of `report stuck agents mode`.

### ResetMission
`public void ResetMission()`

**Purpose:** Resets `mission` to its initial state.

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### TickAgentsAndTeamsAsync
`public void TickAgentsAndTeamsAsync(float dt)`

**Purpose:** Handles logic related to `tick agents and teams async`.

### MakeSound
`public void MakeSound(int soundIndex, Vec3 position, bool soundCanBePredicted, bool isReliable, int relatedAgent1, int relatedAgent2)`

**Purpose:** Handles logic related to `make sound`.

### MakeSound
`public void MakeSound(int soundIndex, Vec3 position, bool soundCanBePredicted, bool isReliable, int relatedAgent1, int relatedAgent2, ref SoundEventParameter parameter)`

**Purpose:** Handles logic related to `make sound`.

### MakeSoundOnlyOnRelatedPeer
`public void MakeSoundOnlyOnRelatedPeer(int soundIndex, Vec3 position, int relatedAgent)`

**Purpose:** Handles logic related to `make sound only on related peer`.

### AddDynamicallySpawnedMissionObjectInfo
`public void AddDynamicallySpawnedMissionObjectInfo(Mission.DynamicallyCreatedEntity entityInfo)`

**Purpose:** Adds `dynamically spawned mission object info` to the current collection or state.

### GetMissileCollisionPoint
`public Vec3 GetMissileCollisionPoint(Vec3 missileStartingPosition, Vec3 missileDirection, float missileSpeed, in WeaponData weaponData)`

**Purpose:** Gets the current value of `missile collision point`.

### RemoveMissileAsClient
`public void RemoveMissileAsClient(int missileIndex)`

**Purpose:** Removes `missile as client` from the current collection or state.

### GetMissileVerticalAimCorrection
`public static float GetMissileVerticalAimCorrection(Vec3 vecToTarget, float missileStartingSpeed, ref WeaponStatsData weaponStatsData, float airFrictionConstant)`

**Purpose:** Gets the current value of `missile vertical aim correction`.

### GetMissileRange
`public static float GetMissileRange(float missileStartingSpeed, float heightDifference)`

**Purpose:** Gets the current value of `missile range`.

### PrepareMissileWeaponForDrop
`public void PrepareMissileWeaponForDrop(int missileIndex)`

**Purpose:** Handles logic related to `prepare missile weapon for drop`.

### AddParticleSystemBurstByName
`public void AddParticleSystemBurstByName(string particleSystem, MatrixFrame frame, bool synchThroughNetwork)`

**Purpose:** Adds `particle system burst by name` to the current collection or state.

### GetClosestBoundaryPosition
`public Vec2 GetClosestBoundaryPosition(Vec2 position)`

**Purpose:** Gets the current value of `closest boundary position`.

### GetFreeRuntimeMissionObjectId
`public int GetFreeRuntimeMissionObjectId()`

**Purpose:** Gets the current value of `free runtime mission object id`.

### GetFreeSceneMissionObjectId
`public int GetFreeSceneMissionObjectId()`

**Purpose:** Gets the current value of `free scene mission object id`.

### SetCameraFrame
`public void SetCameraFrame(ref MatrixFrame cameraFrame, float zoomFactor)`

**Purpose:** Sets the value or state of `camera frame`.

### SetCameraFrame
`public void SetCameraFrame(ref MatrixFrame cameraFrame, float zoomFactor, ref Vec3 attenuationPosition)`

**Purpose:** Sets the value or state of `camera frame`.

### GetCameraFrame
`public MatrixFrame GetCameraFrame()`

**Purpose:** Gets the current value of `camera frame`.

### ResetFirstThirdPersonView
`public void ResetFirstThirdPersonView()`

**Purpose:** Resets `first third person view` to its initial state.

### SetCustomCameraLocalOffset
`public void SetCustomCameraLocalOffset(Vec3 newCameraOffset)`

**Purpose:** Sets the value or state of `custom camera local offset`.

### SetCustomCameraTargetLocalOffset
`public void SetCustomCameraTargetLocalOffset(Vec3 newTargetLocalOffset)`

**Purpose:** Sets the value or state of `custom camera target local offset`.

### SetCustomCameraLocalOffset2
`public void SetCustomCameraLocalOffset2(Vec3 newCameraOffset)`

**Purpose:** Sets the value or state of `custom camera local offset2`.

### SetCustomCameraLocalRotationalOffset
`public void SetCustomCameraLocalRotationalOffset(Vec3 newCameraRotationalOffset)`

**Purpose:** Sets the value or state of `custom camera local rotational offset`.

### SetCustomCameraGlobalOffset
`public void SetCustomCameraGlobalOffset(Vec3 newCameraOffset)`

**Purpose:** Sets the value or state of `custom camera global offset`.

### SetCustomCameraFovMultiplier
`public void SetCustomCameraFovMultiplier(float newFovMultiplier)`

**Purpose:** Sets the value or state of `custom camera fov multiplier`.

### SetCustomCameraFixedDistance
`public void SetCustomCameraFixedDistance(float distance)`

**Purpose:** Sets the value or state of `custom camera fixed distance`.

### SetIgnoredEntityForCamera
`public void SetIgnoredEntityForCamera(GameEntity ignoredEntity)`

**Purpose:** Sets the value or state of `ignored entity for camera`.

### SetCustomCameraIgnoreCollision
`public void SetCustomCameraIgnoreCollision(bool ignoreCollision)`

**Purpose:** Sets the value or state of `custom camera ignore collision`.

### SetListenerAndAttenuationPosBlendFactor
`public void SetListenerAndAttenuationPosBlendFactor(float factor)`

**Purpose:** Sets the value or state of `listener and attenuation pos blend factor`.

### AddTimeSpeedRequest
`public void AddTimeSpeedRequest(Mission.TimeSpeedRequest request)`

**Purpose:** Adds `time speed request` to the current collection or state.

### RemoveTimeSpeedRequest
`public void RemoveTimeSpeedRequest(int timeSpeedRequestID)`

**Purpose:** Removes `time speed request` from the current collection or state.

### GetRequestedTimeSpeed
`public bool GetRequestedTimeSpeed(int timeSpeedRequestID, out float requestedTime)`

**Purpose:** Gets the current value of `requested time speed`.

### ClearAgentActions
`public void ClearAgentActions()`

**Purpose:** Handles logic related to `clear agent actions`.

### ClearMissiles
`public void ClearMissiles()`

**Purpose:** Handles logic related to `clear missiles`.

### ClearCorpses
`public void ClearCorpses(bool isMissionReset)`

**Purpose:** Handles logic related to `clear corpses`.

### IsAgentInProximityMap
`public bool IsAgentInProximityMap(Agent agent)`

**Purpose:** Handles logic related to `is agent in proximity map`.

### OnMissionStateActivate
`public void OnMissionStateActivate()`

**Purpose:** Called when the `mission state activate` event is raised.

### OnMissionStateDeactivate
`public void OnMissionStateDeactivate()`

**Purpose:** Called when the `mission state deactivate` event is raised.

### OnMissionStateFinalize
`public void OnMissionStateFinalize(bool forceClearGPUResources)`

**Purpose:** Called when the `mission state finalize` event is raised.

### ClearUnreferencedResources
`public void ClearUnreferencedResources(bool forceClearGPUResources)`

**Purpose:** Handles logic related to `clear unreferenced resources`.

### GetMainAgentMaxCameraZoom
`public float GetMainAgentMaxCameraZoom()`

**Purpose:** Gets the current value of `main agent max camera zoom`.

### GetBestSlopeTowardsDirection
`public WorldPosition GetBestSlopeTowardsDirection(ref WorldPosition centerPosition, float halfSize, ref WorldPosition referencePosition)`

**Purpose:** Gets the current value of `best slope towards direction`.

### GetBestSlopeAngleHeightPosForDefending
`public WorldPosition GetBestSlopeAngleHeightPosForDefending(WorldPosition enemyPosition, WorldPosition defendingPosition, int sampleSize, float distanceRatioAllowedFromDefendedPos, float distanceSqrdAllowedFromBoundary, float cosinusOfBestSlope, float cosinusOfMaxAcceptedSlope, float minSlopeScore, float maxSlopeScore, float excessiveSlopePenalty, float nearConeCenterRatio, float nearConeCenterBonus, float heightDifferenceCeiling, float maxDisplacementPenalty)`

**Purpose:** Gets the current value of `best slope angle height pos for defending`.

### GetAveragePositionOfAgents
`public Vec2 GetAveragePositionOfAgents(List<Agent> agents)`

**Purpose:** Gets the current value of `average position of agents`.

### SetRandomDecideTimeOfAgentsWithIndices
`public void SetRandomDecideTimeOfAgentsWithIndices(int agentIndices, float? minAIReactionTime = null, float? maxAIReactionTime = null)`

**Purpose:** Sets the value or state of `random decide time of agents with indices`.

### SetBowMissileSpeedModifier
`public void SetBowMissileSpeedModifier(float modifier)`

**Purpose:** Sets the value or state of `bow missile speed modifier`.

### SetCrossbowMissileSpeedModifier
`public void SetCrossbowMissileSpeedModifier(float modifier)`

**Purpose:** Sets the value or state of `crossbow missile speed modifier`.

### SetThrowingMissileSpeedModifier
`public void SetThrowingMissileSpeedModifier(float modifier)`

**Purpose:** Sets the value or state of `throwing missile speed modifier`.

### SetMissileRangeModifier
`public void SetMissileRangeModifier(float modifier)`

**Purpose:** Sets the value or state of `missile range modifier`.

### SetLastMovementKeyPressed
`public void SetLastMovementKeyPressed(Agent.MovementControlFlag lastMovementKeyPressed)`

**Purpose:** Sets the value or state of `last movement key pressed`.

### GetWeightedPointOfEnemies
`public Vec2 GetWeightedPointOfEnemies(Agent agent, Vec2 basePoint)`

**Purpose:** Gets the current value of `weighted point of enemies`.

### GetPathBetweenPositions
`public bool GetPathBetweenPositions(ref NavigationData navData)`

**Purpose:** Gets the current value of `path between positions`.

### SetNavigationFaceCostWithIdAroundPosition
`public void SetNavigationFaceCostWithIdAroundPosition(int navigationFaceId, Vec3 position, float cost)`

**Purpose:** Sets the value or state of `navigation face cost with id around position`.

### GetStraightPathToTarget
`public WorldPosition GetStraightPathToTarget(Vec2 targetPosition, WorldPosition startingPosition, float samplingDistance = 1f, bool stopAtObstacle = true)`

**Purpose:** Gets the current value of `straight path to target`.

### SkipForwardMissionReplay
`public void SkipForwardMissionReplay(float startTime, float endTime)`

**Purpose:** Handles logic related to `skip forward mission replay`.

### GetDebugAgent
`public int GetDebugAgent()`

**Purpose:** Gets the current value of `debug agent`.

### AddAiDebugText
`public void AddAiDebugText(string str)`

**Purpose:** Adds `ai debug text` to the current collection or state.

### SetDebugAgent
`public void SetDebugAgent(int index)`

**Purpose:** Sets the value or state of `debug agent`.

### GetFirstPersonFov
`public static float GetFirstPersonFov()`

**Purpose:** Gets the current value of `first person fov`.

### GetWaterLevelAtPosition
`public float GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer)`

**Purpose:** Gets the current value of `water level at position`.

### GetWaterLevelAtPositionMT
`public float GetWaterLevelAtPositionMT(Vec2 position, bool useWaterRenderer)`

**Purpose:** Gets the current value of `water level at position m t`.

### CanPhysicsCollideBetweenTwoEntities
`public bool CanPhysicsCollideBetweenTwoEntities(UIntPtr entity0Ptr, UIntPtr entity1Ptr)`

**Purpose:** Checks whether the current object can `physics collide between two entities`.

### GetRemovedAgentRatioForSide
`public float GetRemovedAgentRatioForSide(BattleSideEnum side)`

**Purpose:** Gets the current value of `removed agent ratio for side`.

### GetAttackerWeaponsForFriendlyFirePreventing
`public readonly ref List<SiegeWeapon> GetAttackerWeaponsForFriendlyFirePreventing()`

**Purpose:** Gets the current value of `attacker weapons for friendly fire preventing`.

### OnDeploymentPlanMade
`public void OnDeploymentPlanMade(Team team, bool isFirstPlan)`

**Purpose:** Called when the `deployment plan made` event is raised.

### GetAlternatePositionForNavmeshlessOrOutOfBoundsPosition
`public WorldPosition GetAlternatePositionForNavmeshlessOrOutOfBoundsPosition(Vec2 directionTowards, WorldPosition originalPosition, ref float positionPenalty)`

**Purpose:** Gets the current value of `alternate position for navmeshless or out of bounds position`.

### GetNextDynamicNavMeshIdStart
`public int GetNextDynamicNavMeshIdStart()`

**Purpose:** Gets the current value of `next dynamic nav mesh id start`.

### GetAgentTroopClass
`public FormationClass GetAgentTroopClass(BattleSideEnum battleSide, BasicCharacterObject agentCharacter)`

**Purpose:** Gets the current value of `agent troop class`.

### GetClosestFleePositionForAgent
`public WorldPosition GetClosestFleePositionForAgent(Agent agent)`

**Purpose:** Gets the current value of `closest flee position for agent`.

### GetClosestFleePositionForFormation
`public WorldPosition GetClosestFleePositionForFormation(Formation formation)`

**Purpose:** Gets the current value of `closest flee position for formation`.

### GetFleePositionsForSide
`public MBReadOnlyList<FleePosition> GetFleePositionsForSide(BattleSideEnum side)`

**Purpose:** Gets the current value of `flee positions for side`.

### AddToWeaponListForFriendlyFirePreventing
`public void AddToWeaponListForFriendlyFirePreventing(SiegeWeapon weapon)`

**Purpose:** Adds `to weapon list for friendly fire preventing` to the current collection or state.

### SetCloseProximityWaveSoundsEnabled
`public void SetCloseProximityWaveSoundsEnabled(bool value)`

**Purpose:** Sets the value or state of `close proximity wave sounds enabled`.

### ForceDisableOcclusion
`public void ForceDisableOcclusion(bool value)`

**Purpose:** Handles logic related to `force disable occlusion`.

### AddFleePosition
`public void AddFleePosition(FleePosition fleePosition)`

**Purpose:** Adds `flee position` to the current collection or state.

### RetreatMission
`public void RetreatMission()`

**Purpose:** Handles logic related to `retreat mission`.

### SurrenderMission
`public void SurrenderMission()`

**Purpose:** Handles logic related to `surrender mission`.

### SpawnAttachedWeaponOnCorpse
`public SpawnedItemEntity SpawnAttachedWeaponOnCorpse(Agent agent, int attachedWeaponIndex, int forcedSpawnIndex)`

**Purpose:** Handles logic related to `spawn attached weapon on corpse`.

### AddMountWithoutRider
`public void AddMountWithoutRider(Agent mount)`

**Purpose:** Adds `mount without rider` to the current collection or state.

### RemoveMountWithoutRider
`public void RemoveMountWithoutRider(Agent mount)`

**Purpose:** Removes `mount without rider` from the current collection or state.

### UpdateMountReservationsAfterRiderMounts
`public void UpdateMountReservationsAfterRiderMounts(Agent rider, Agent mount)`

**Purpose:** Updates the state or data of `mount reservations after rider mounts`.

### OnObjectDisabled
`public void OnObjectDisabled(DestructableComponent destructionComponent)`

**Purpose:** Called when the `object disabled` event is raised.

### SpawnWeaponAsDropFromMissile
`public MissionObjectId SpawnWeaponAsDropFromMissile(int missileIndex, MissionObject attachedMissionObject, in MatrixFrame attachLocalFrame, Mission.WeaponSpawnFlags spawnFlags, in Vec3 velocity, in Vec3 angularVelocity, int forcedSpawnIndex)`

**Purpose:** Handles logic related to `spawn weapon as drop from missile`.

### SpawnWeaponAsDropFromAgentAux
`public void SpawnWeaponAsDropFromAgentAux(Agent agent, EquipmentIndex equipmentIndex, ref Vec3 globalVelocity, ref Vec3 globalAngularVelocity, Mission.WeaponSpawnFlags spawnFlags, int forcedSpawnIndex)`

**Purpose:** Handles logic related to `spawn weapon as drop from agent aux`.

### SpawnAttachedWeaponOnSpawnedWeapon
`public void SpawnAttachedWeaponOnSpawnedWeapon(SpawnedItemEntity spawnedWeapon, int attachmentIndex, int forcedSpawnIndex)`

**Purpose:** Handles logic related to `spawn attached weapon on spawned weapon`.

### SpawnWeaponWithNewEntity
`public GameEntity SpawnWeaponWithNewEntity(ref MissionWeapon weapon, Mission.WeaponSpawnFlags spawnFlags, MatrixFrame frame)`

**Purpose:** Handles logic related to `spawn weapon with new entity`.

### SpawnWeaponWithNewEntityAux
`public GameEntity SpawnWeaponWithNewEntityAux(MissionWeapon weapon, Mission.WeaponSpawnFlags spawnFlags, MatrixFrame frame, int forcedSpawnIndex, MissionObject attachedMissionObject, bool hasLifeTime, bool spawnedOnACorpse = false)`

**Purpose:** Handles logic related to `spawn weapon with new entity aux`.

### AttachWeaponWithNewEntityToSpawnedWeapon
`public void AttachWeaponWithNewEntityToSpawnedWeapon(MissionWeapon weapon, SpawnedItemEntity spawnedItem, MatrixFrame attachLocalFrame)`

**Purpose:** Handles logic related to `attach weapon with new entity to spawned weapon`.

### OnEquipItemsFromSpawnEquipmentBegin
`public void OnEquipItemsFromSpawnEquipmentBegin(Agent agent, Agent.CreationType creationType)`

**Purpose:** Called when the `equip items from spawn equipment begin` event is raised.

### OnEquipItemsFromSpawnEquipment
`public void OnEquipItemsFromSpawnEquipment(Agent agent, Agent.CreationType creationType)`

**Purpose:** Called when the `equip items from spawn equipment` event is raised.

### GetCurrentVolumeGeneratorVersion
`public static int GetCurrentVolumeGeneratorVersion()`

**Purpose:** Gets the current value of `current volume generator version`.

### MakeEnemiesFleeCheat
`public static string MakeEnemiesFleeCheat(List<string> strings)`

**Purpose:** Handles logic related to `make enemies flee cheat`.

### MakeTeamFleeCheat
`public static string MakeTeamFleeCheat(List<string> strings)`

**Purpose:** Handles logic related to `make team flee cheat`.

### RecalculateBody
`public void RecalculateBody(ref WeaponData weaponData, ItemComponent itemComponent, WeaponDesign craftedWeaponData, ref Mission.WeaponSpawnFlags spawnFlags)`

**Purpose:** Handles logic related to `recalculate body`.

### SetFacialAnimToAgent
`public static string SetFacialAnimToAgent(List<string> strings)`

**Purpose:** Sets the value or state of `facial anim to agent`.

### TickAgentsAndTeamsImp
`public void TickAgentsAndTeamsImp(float dt, bool tickPaused)`

**Purpose:** Handles logic related to `tick agents and teams imp`.

### EnableSpeedAdjustmentCommand
`public static string EnableSpeedAdjustmentCommand(List<string> strings)`

**Purpose:** Handles logic related to `enable speed adjustment command`.

### OnTick
`public void OnTick(float dt, float realDt, bool updateCamera, bool doAsyncAITick)`

**Purpose:** Called when the `tick` event is raised.

### AddTickAction
`public void AddTickAction(Mission.MissionTickAction action, Agent agent, int param1, int param2)`

**Purpose:** Adds `tick action` to the current collection or state.

### AddTickActionMT
`public void AddTickActionMT(Mission.MissionTickAction action, Agent agent, int param1, int param2)`

**Purpose:** Adds `tick action m t` to the current collection or state.

### RemoveSpawnedItemsAndMissiles
`public void RemoveSpawnedItemsAndMissiles()`

**Purpose:** Removes `spawned items and missiles` from the current collection or state.

### AfterStart
`public void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnEndMissionRequest
`public void OnEndMissionRequest()`

**Purpose:** Called when the `end mission request` event is raised.

### GetMissionEndTimeInSeconds
`public float GetMissionEndTimeInSeconds()`

**Purpose:** Gets the current value of `mission end time in seconds`.

### GetMissionEndTimerValue
`public float GetMissionEndTimerValue()`

**Purpose:** Gets the current value of `mission end timer value`.

### GetMemberCountOfSide
`public int GetMemberCountOfSide(BattleSideEnum side)`

**Purpose:** Gets the current value of `member count of side`.

### GetInitialSpawnPath
`public Path GetInitialSpawnPath()`

**Purpose:** Gets the current value of `initial spawn path`.

### GetInitialSpawnPathData
`public SpawnPathData GetInitialSpawnPathData(BattleSideEnum battleSide)`

**Purpose:** Gets the current value of `initial spawn path data`.

### GetReinforcementPathsDataOfSide
`public MBReadOnlyList<SpawnPathData> GetReinforcementPathsDataOfSide(BattleSideEnum battleSide)`

**Purpose:** Gets the current value of `reinforcement paths data of side`.

### GetTroopSpawnFrameWithIndex
`public void GetTroopSpawnFrameWithIndex(AgentBuildData buildData, int troopSpawnIndex, int troopSpawnCount, out Vec3 troopSpawnPosition, out Vec2 troopSpawnDirection)`

**Purpose:** Gets the current value of `troop spawn frame with index`.

### GetFormationSpawnFrame
`public void GetFormationSpawnFrame(Team team, FormationClass formationClass, bool isReinforcement, out WorldPosition spawnPosition, out Vec2 spawnDirection)`

**Purpose:** Gets the current value of `formation spawn frame`.

### GetSpawnPathFrame
`public WorldFrame GetSpawnPathFrame(BattleSideEnum battleSide, float pathOffset = 0f, float targetOffset = 0f)`

**Purpose:** Gets the current value of `spawn path frame`.

### SetBattleAgentCount
`public void SetBattleAgentCount(int agentCount)`

**Purpose:** Sets the value or state of `battle agent count`.

### GetFormationSpawnPosition
`public Vec2 GetFormationSpawnPosition(Team team, FormationClass formationClass)`

**Purpose:** Gets the current value of `formation spawn position`.

### GetFormationSpawnClass
`public FormationClass GetFormationSpawnClass(Team team, FormationClass formationClass, bool isReinforcement = false)`

**Purpose:** Gets the current value of `formation spawn class`.

### SpawnAgent
`public Agent SpawnAgent(AgentBuildData agentBuildData, bool spawnFromAgentVisuals = false)`

**Purpose:** Handles logic related to `spawn agent`.

### SetInitialAgentCountForSide
`public void SetInitialAgentCountForSide(BattleSideEnum side, int agentCount)`

**Purpose:** Sets the value or state of `initial agent count for side`.

### SetFormationPositioningFromDeploymentPlan
`public void SetFormationPositioningFromDeploymentPlan(Formation formation)`

**Purpose:** Sets the value or state of `formation positioning from deployment plan`.

### SpawnMonster
`public Agent SpawnMonster(ItemRosterElement rosterElement, ItemRosterElement harnessRosterElement, in Vec3 initialPosition, in Vec2 initialDirection, int forcedAgentIndex = -1)`

**Purpose:** Handles logic related to `spawn monster`.

### SpawnMonster
`public Agent SpawnMonster(EquipmentElement equipmentElement, EquipmentElement harnessRosterElement, in Vec3 initialPosition, in Vec2 initialDirection, int forcedAgentIndex = -1)`

**Purpose:** Handles logic related to `spawn monster`.

### SpawnTroop
`public Agent SpawnTroop(IAgentOriginBase troopOrigin, bool isPlayerSide, bool hasFormation, bool spawnWithHorse, bool isReinforcement, int formationTroopCount, int formationTroopIndex, bool isAlarmed, bool wieldInitialWeapons, bool forceDismounted, Vec3? initialPosition, Vec2? initialDirection, string specialActionSetSuffix = null, ItemObject bannerItem = null, FormationClass formationIndex = FormationClass.NumberOfAllFormations, bool useTroopClassForSpawn = false)`

**Purpose:** Handles logic related to `spawn troop`.

### ReplaceBotWithPlayer
`public Agent ReplaceBotWithPlayer(Agent botAgent, MissionPeer missionPeer)`

**Purpose:** Handles logic related to `replace bot with player`.

### OnAgentInteraction
`public void OnAgentInteraction(Agent requesterAgent, Agent targetAgent, sbyte agentBoneIndex)`

**Purpose:** Called when the `agent interaction` event is raised.

### EndMission
`public void EndMission()`

**Purpose:** Handles logic related to `end mission`.

### AddMissionBehavior
`public void AddMissionBehavior(MissionBehavior missionBehavior)`

**Purpose:** Adds `mission behavior` to the current collection or state.

### RemoveMissionBehavior
`public void RemoveMissionBehavior(MissionBehavior missionBehavior)`

**Purpose:** Removes `mission behavior` from the current collection or state.

### JoinEnemyTeam
`public void JoinEnemyTeam()`

**Purpose:** Handles logic related to `join enemy team`.

### OnEndMissionResult
`public void OnEndMissionResult()`

**Purpose:** Called when the `end mission result` event is raised.

### IsAgentInteractionAllowed
`public bool IsAgentInteractionAllowed()`

**Purpose:** Handles logic related to `is agent interaction allowed`.

### IsOrderGesturesEnabled
`public bool IsOrderGesturesEnabled()`

**Purpose:** Handles logic related to `is order gestures enabled`.

### GetExtraEquipmentElementsForCharacter
`public List<EquipmentElement> GetExtraEquipmentElementsForCharacter(BasicCharacterObject character, bool getAllEquipments = false)`

**Purpose:** Gets the current value of `extra equipment elements for character`.

### IsPlayerCloseToAnEnemy
`public bool IsPlayerCloseToAnEnemy(float distance = 5f)`

**Purpose:** Handles logic related to `is player close to an enemy`.

### GetRandomPositionAroundPoint
`public Vec3 GetRandomPositionAroundPoint(Vec3 center, float minDistance, float maxDistance, bool nearFirst = false)`

**Purpose:** Gets the current value of `random position around point`.

### FindBestDefendingPosition
`public WorldPosition FindBestDefendingPosition(WorldPosition enemyPosition, WorldPosition defendedPosition)`

**Purpose:** Handles logic related to `find best defending position`.

### FindPositionWithBiggestSlopeTowardsDirectionInSquare
`public WorldPosition FindPositionWithBiggestSlopeTowardsDirectionInSquare(ref WorldPosition center, float halfSize, ref WorldPosition referencePosition)`

**Purpose:** Handles logic related to `find position with biggest slope towards direction in square`.

### AddCustomMissile
`public Mission.Missile AddCustomMissile(Agent shooterAgent, MissionWeapon missileWeapon, Vec3 position, Vec3 direction, Mat3 orientation, float baseSpeed, float speed, bool addRigidBody, MissionObject missionObjectToIgnore, int forcedMissileIndex = -1)`

**Purpose:** Adds `custom missile` to the current collection or state.

### OnAgentMount
`public void OnAgentMount(Agent agent)`

**Purpose:** Called when the `agent mount` event is raised.

### OnAgentDismount
`public void OnAgentDismount(Agent agent)`

**Purpose:** Called when the `agent dismount` event is raised.

### OnObjectUsed
`public void OnObjectUsed(Agent userAgent, UsableMissionObject usableGameObject)`

**Purpose:** Called when the `object used` event is raised.

### OnObjectStoppedBeingUsed
`public void OnObjectStoppedBeingUsed(Agent userAgent, UsableMissionObject usableGameObject)`

**Purpose:** Called when the `object stopped being used` event is raised.

### InitializeStartingBehaviors
`public void InitializeStartingBehaviors(MissionLogic logicBehaviors, MissionBehavior otherBehaviors, MissionNetwork networkBehaviors)`

**Purpose:** Initializes the state, resources, or bindings for `starting behaviors`.

### GetClosestEnemyAgent
`public Agent GetClosestEnemyAgent(Team team, Vec3 position, float radius)`

**Purpose:** Gets the current value of `closest enemy agent`.

### GetClosestAllyAgent
`public Agent GetClosestAllyAgent(Team team, Vec3 position, float radius)`

**Purpose:** Gets the current value of `closest ally agent`.

### GetNearbyEnemyAgentCount
`public int GetNearbyEnemyAgentCount(Team team, Vec2 position, float radius)`

**Purpose:** Gets the current value of `nearby enemy agent count`.

### HasAnyAgentsOfSideInRange
`public bool HasAnyAgentsOfSideInRange(Vec3 origin, float radius, BattleSideEnum side)`

**Purpose:** Checks whether the current object has/contains `any agents of side in range`.

### AddSoundAlarmFactorToAgents
`public void AddSoundAlarmFactorToAgents(Agent alarmCreatorAgent, in Vec3 soundPosition, float soundLevelSquareRoot)`

**Purpose:** Adds `sound alarm factor to agents` to the current collection or state.

### OnMissionObjectRemoved
`public bool OnMissionObjectRemoved(MissionObject missionObject, int removeReason)`

**Purpose:** Called when the `mission object removed` event is raised.

### AgentLookingAtAgent
`public bool AgentLookingAtAgent(Agent agent1, Agent agent2)`

**Purpose:** Handles logic related to `agent looking at agent`.

### FindAgentWithIndex
`public Agent FindAgentWithIndex(int agentId)`

**Purpose:** Handles logic related to `find agent with index`.

### GetUnderAttackTypeOfAgents
`public static Agent.UnderAttackType GetUnderAttackTypeOfAgents(IEnumerable<Agent> agents, float timeLimit = 3f)`

**Purpose:** Gets the current value of `under attack type of agents`.

### GetAgentTeam
`public static Team GetAgentTeam(IAgentOriginBase troopOrigin, bool isPlayerSide)`

**Purpose:** Gets the current value of `agent team`.

### GetTeam
`public static Team GetTeam(TeamSideEnum teamSide)`

**Purpose:** Gets the current value of `team`.

### GetTeamsOfSide
`public static IEnumerable<Team> GetTeamsOfSide(BattleSideEnum side)`

**Purpose:** Gets the current value of `teams of side`.

### GetBattleSizeOffset
`public static float GetBattleSizeOffset(int battleSize, Path path)`

**Purpose:** Gets the current value of `battle size offset`.

### GetPathOffsetFromDistance
`public static float GetPathOffsetFromDistance(float distance, Path path)`

**Purpose:** Gets the current value of `path offset from distance`.

### OnRenderingStarted
`public void OnRenderingStarted()`

**Purpose:** Called when the `rendering started` event is raised.

### GetBattleSizeFactor
`public static float GetBattleSizeFactor(int battleSize, float normalizationFactor)`

**Purpose:** Gets the current value of `battle size factor`.

### GetMovementTypeOfAgents
`public unsafe Agent.MovementBehaviorType GetMovementTypeOfAgents(IEnumerable<Agent> agents)`

**Purpose:** Gets the current value of `movement type of agents`.

### ShowInMissionLoadingScreen
`public void ShowInMissionLoadingScreen(int durationInSecond, Action onLoadingEndedAction)`

**Purpose:** Handles logic related to `show in mission loading screen`.

### CanAgentRout
`public bool CanAgentRout(Agent agent)`

**Purpose:** Checks whether the current object can `agent rout`.

### HandleMissileCollisionReaction
`public void HandleMissileCollisionReaction(int missileIndex, Mission.MissileCollisionReaction collisionReaction, MatrixFrame attachLocalFrame, bool isAttachedFrameLocal, Agent attackerAgent, Agent attachedAgent, bool attachedToShield, sbyte attachedBoneIndex, MissionObject attachedMissionObject, Vec3 bounceBackVelocity, Vec3 bounceBackAngularVelocity, int forcedSpawnIndex)`

**Purpose:** Handles the `missile collision reaction` event or callback.

### KillAgentsOnEntity
`public void KillAgentsOnEntity(GameEntity entity, Agent destroyerAgent, bool burnAgents)`

**Purpose:** Handles logic related to `kill agents on entity`.

### KillAgentCheat
`public void KillAgentCheat(Agent agent)`

**Purpose:** Handles logic related to `kill agent cheat`.

### KillCheats
`public bool KillCheats(bool killAll, bool killEnemy, bool killHorse, bool killYourself)`

**Purpose:** Handles logic related to `kill cheats`.

### CanTakeControlOfAgent
`public bool CanTakeControlOfAgent(Agent agentToTakeControlOf)`

**Purpose:** Checks whether the current object can `take control of agent`.

### SetPlayerCanTakeControlOfAnotherAgentWhenDead
`public void SetPlayerCanTakeControlOfAnotherAgentWhenDead()`

**Purpose:** Sets the value or state of `player can take control of another agent when dead`.

### TakeControlOfAgent
`public void TakeControlOfAgent(Agent agentToTakeControlOf)`

**Purpose:** Handles logic related to `take control of agent`.

### GetDamageMultiplierOfCombatDifficulty
`public float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)`

**Purpose:** Gets the current value of `damage multiplier of combat difficulty`.

### GetShootDifficulty
`public float GetShootDifficulty(Agent affectedAgent, Agent affectorAgent, bool isHeadShot)`

**Purpose:** Gets the current value of `shoot difficulty`.

### AddCombatLogSafe
`public void AddCombatLogSafe(Agent attackerAgent, Agent victimAgent, CombatLogData combatLog)`

**Purpose:** Adds `combat log safe` to the current collection or state.

### CreateMissionObjectFromPrefab
`public MissionObject CreateMissionObjectFromPrefab(string prefab, MatrixFrame frame, Action<GameEntity> actionAppliedBeforeScriptInitialization)`

**Purpose:** Creates a new `mission object from prefab` instance or object.

### GetNearbyAllyAgentsCount
`public int GetNearbyAllyAgentsCount(Vec2 center, float radius, Team team)`

**Purpose:** Gets the current value of `nearby ally agents count`.

### GetNearbyAllyAgents
`public MBList<Agent> GetNearbyAllyAgents(Vec2 center, float radius, Team team, MBList<Agent> agents)`

**Purpose:** Gets the current value of `nearby ally agents`.

### GetNearbyEnemyAgents
`public MBList<Agent> GetNearbyEnemyAgents(Vec2 center, float radius, Team team, MBList<Agent> agents)`

**Purpose:** Gets the current value of `nearby enemy agents`.

### GetNearbyAgents
`public MBList<Agent> GetNearbyAgents(Vec2 center, float radius, MBList<Agent> agents)`

**Purpose:** Gets the current value of `nearby agents`.

### IsFormationUnitPositionAvailableMT
`public bool IsFormationUnitPositionAvailableMT(ref WorldPosition formationPosition, ref WorldPosition unitPosition, ref WorldPosition nearestAvailableUnitPosition, float manhattanDistance, Team team)`

**Purpose:** Handles logic related to `is formation unit position available m t`.

### IsOrderPositionAvailable
`public bool IsOrderPositionAvailable(in WorldPosition orderPosition, Team team)`

**Purpose:** Handles logic related to `is order position available`.

### IsFormationUnitPositionAvailable
`public bool IsFormationUnitPositionAvailable(ref WorldPosition unitPosition, Team team)`

**Purpose:** Handles logic related to `is formation unit position available`.

### HasSceneMapPatch
`public bool HasSceneMapPatch()`

**Purpose:** Checks whether the current object has/contains `scene map patch`.

### GetPatchSceneEncounterPosition
`public bool GetPatchSceneEncounterPosition(out Vec3 position)`

**Purpose:** Gets the current value of `patch scene encounter position`.

### GetPatchSceneEncounterDirection
`public bool GetPatchSceneEncounterDirection(out Vec2 direction)`

**Purpose:** Gets the current value of `patch scene encounter direction`.

### AddTimerToDynamicEntity
`public void AddTimerToDynamicEntity(GameEntity gameEntity, float timeToKill = 10f)`

**Purpose:** Adds `timer to dynamic entity` to the current collection or state.

### AddListener
`public void AddListener(IMissionListener listener)`

**Purpose:** Adds `listener` to the current collection or state.

### RemoveListener
`public void RemoveListener(IMissionListener listener)`

**Purpose:** Removes `listener` from the current collection or state.

### OnAgentFleeing
`public void OnAgentFleeing(Agent agent)`

**Purpose:** Called when the `agent fleeing` event is raised.

### OnAgentPanicked
`public void OnAgentPanicked(Agent agent)`

**Purpose:** Called when the `agent panicked` event is raised.

### OnTeamDeployed
`public void OnTeamDeployed(Team team)`

**Purpose:** Called when the `team deployed` event is raised.

### OnBattleSideDeployed
`public void OnBattleSideDeployed(BattleSideEnum side)`

**Purpose:** Called when the `battle side deployed` event is raised.

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

### OnAfterDeploymentFinished
`public void OnAfterDeploymentFinished()`

**Purpose:** Called when the `after deployment finished` event is raised.

### OnFormationCaptainChanged
`public void OnFormationCaptainChanged(Formation formation)`

**Purpose:** Called when the `formation captain changed` event is raised.

### SetFastForwardingFromUI
`public void SetFastForwardingFromUI(bool fastForwarding)`

**Purpose:** Sets the value or state of `fast forwarding from u i`.

### CheckIfBattleInRetreat
`public bool CheckIfBattleInRetreat()`

**Purpose:** Handles logic related to `check if battle in retreat`.

### AddSpawnedItemEntityCreatedAtRuntime
`public void AddSpawnedItemEntityCreatedAtRuntime(SpawnedItemEntity spawnedItemEntity)`

**Purpose:** Adds `spawned item entity created at runtime` to the current collection or state.

### TriggerOnItemPickUpEvent
`public void TriggerOnItemPickUpEvent(Agent agent, SpawnedItemEntity spawnedItemEntity)`

**Purpose:** Handles logic related to `trigger on item pick up event`.

### KillNAllies
`public static string KillNAllies(List<string> strings)`

**Purpose:** Handles logic related to `kill n allies`.

### KillAllAllies
`public static string KillAllAllies(List<string> strings)`

**Purpose:** Handles logic related to `kill all allies`.

### ToggleDisableDying
`public static string ToggleDisableDying(List<string> strings)`

**Purpose:** Handles logic related to `toggle disable dying`.

### ToggleDisableDyingTeam
`public static string ToggleDisableDyingTeam(List<string> strings)`

**Purpose:** Handles logic related to `toggle disable dying team`.

### KillAgent
`public static string KillAgent(List<string> strings)`

**Purpose:** Handles logic related to `kill agent`.

### IncreaseBatteringRamSpeeds
`public static string IncreaseBatteringRamSpeeds(List<string> strings)`

**Purpose:** Handles logic related to `increase battering ram speeds`.

### IncreaseSiegeTowerSpeed
`public static string IncreaseSiegeTowerSpeed(List<string> strings)`

**Purpose:** Handles logic related to `increase siege tower speed`.

### LoadParamsDebug
`public static string LoadParamsDebug(List<string> strings)`

**Purpose:** Loads `params debug` data.

### GetEnumerator
`public IEnumerator<KeyValuePair<string, ICollection<Vec2>>> GetEnumerator()`

**Purpose:** Gets the current value of `enumerator`.

### GetBoundaryRadius
`public float GetBoundaryRadius(string name)`

**Purpose:** Gets the current value of `boundary radius`.

### GetOrientedBoundariesBox
`public void GetOrientedBoundariesBox(out Vec2 boxMinimum, out Vec2 boxMaximum, float rotationInRadians = 0f)`

**Purpose:** Gets the current value of `oriented boundaries box`.

### Add
`public void Add(KeyValuePair<string, ICollection<Vec2>> item)`

**Purpose:** Adds `add` to the current collection or state.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### Contains
`public bool Contains(KeyValuePair<string, ICollection<Vec2>> item)`

**Purpose:** Handles logic related to `contains`.

### CopyTo
`public void CopyTo(KeyValuePair<string, ICollection<Vec2>> array, int arrayIndex)`

**Purpose:** Handles logic related to `copy to`.

### Remove
`public bool Remove(KeyValuePair<string, ICollection<Vec2>> item)`

**Purpose:** Removes `remove` from the current collection or state.

### Add
`public void Add(string name, ICollection<Vec2> points)`

**Purpose:** Adds `add` to the current collection or state.

### Add
`public void Add(string name, ICollection<Vec2> points, bool isAllowanceInside)`

**Purpose:** Adds `add` to the current collection or state.

### ContainsKey
`public bool ContainsKey(string name)`

**Purpose:** Handles logic related to `contains key`.

### Remove
`public bool Remove(string name)`

**Purpose:** Removes `remove` from the current collection or state.

### TryGetValue
`public bool TryGetValue(string name, out ICollection<Vec2> points)`

**Purpose:** Attempts to get `get value`, usually returning the result in an out parameter.

### GetAgentFromIndex
`public static Agent GetAgentFromIndex(int agentIndex, bool canBeNull = false)`

**Purpose:** Gets the current value of `agent from index`.

### GetMBTeamFromTeamIndex
`public static MBTeam GetMBTeamFromTeamIndex(int teamIndex)`

**Purpose:** Gets the current value of `m b team from team index`.

### GetTeamFromTeamIndex
`public static Team GetTeamFromTeamIndex(int teamIndex)`

**Purpose:** Gets the current value of `team from team index`.

### GetMissionObjectFromMissionObjectId
`public static MissionObject GetMissionObjectFromMissionObjectId(MissionObjectId missionObjectId)`

**Purpose:** Gets the current value of `mission object from mission object id`.

### GetCombatLogDataForCombatLogNetworkMessage
`public static CombatLogData GetCombatLogDataForCombatLogNetworkMessage(CombatLogNetworkMessage message)`

**Purpose:** Gets the current value of `combat log data for combat log network message`.

### CalculatePassbySoundParametersMT
`public void CalculatePassbySoundParametersMT(ref SoundEventParameter soundEventParameter)`

**Purpose:** Handles logic related to `calculate passby sound parameters m t`.

### CalculateBounceBackVelocity
`public void CalculateBounceBackVelocity(Vec3 rotationSpeed, AttackCollisionData collisionData, out Vec3 velocity, out Vec3 angularVelocity)`

**Purpose:** Handles logic related to `calculate bounce back velocity`.

### PassThroughEntity
`public void PassThroughEntity(GameEntity entity)`

**Purpose:** Handles logic related to `pass through entity`.

### OnBeforeAgentRemovedDelegate
`public delegate void OnBeforeAgentRemovedDelegate(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `before agent removed delegate` event is raised.

### OnAddSoundAlarmFactorToAgentsDelegate
`public delegate void OnAddSoundAlarmFactorToAgentsDelegate(Agent alarmCreatorAgent, in Vec3 soundPosition, float soundLevelSquareRoot)`

**Purpose:** Called when the `add sound alarm factor to agents delegate` event is raised.

### OnMainAgentChangedDelegate
`public delegate void OnMainAgentChangedDelegate(Agent oldAgent)`

**Purpose:** Called when the `main agent changed delegate` event is raised.

### ComputeTroopBodyPropertiesDelegate
`public delegate BodyProperties ComputeTroopBodyPropertiesDelegate(AgentBuildData agentBuildData, BasicCharacterObject characterObject, Equipment equipment, int seed)`

**Purpose:** Handles logic related to `compute troop body properties delegate`.

### Add
`public new void Add(Team t)`

**Purpose:** Adds `add` to the current collection or state.

### Add
`public Team Add(BattleSideEnum side, uint color = 4294967295U, uint color2 = 4294967295U, Banner banner = null, bool isPlayerGeneral = true, bool isPlayerSergeant = false, bool isSettingRelations = true)`

**Purpose:** Adds `add` to the current collection or state.

### Find
`public Team Find(MBTeam mbTeam)`

**Purpose:** Handles logic related to `find`.

### ClearResources
`public void ClearResources()`

**Purpose:** Handles logic related to `clear resources`.

### Clear
`public new void Clear()`

**Purpose:** Handles logic related to `clear`.

## Usage Example

```csharp
var mission = Mission.Current;
mission.AddActiveMissionObject(missionObject);
```

## See Also

- [Complete Class Catalog](../catalog)