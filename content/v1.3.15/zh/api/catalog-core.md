---
title: 核心 Core 类目录 / Class Catalog
extra:
  sidebar: auto
---
# 核心 Core 类目录

## 心智模型

先把 `核心 Core 类目录` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

本页列出 1.3.15 源码中该领域全部公开类型，按命名空间分组。共 **321** 个类型，其中 **309** 个已有深度文档页（带链接）。由 `tools/gen-class-catalog.mjs` 从源码自动生成。

> 图例：C=class S=struct I=interface E=enum。带 🔗 的已有深度文档页。

## TaleWorlds.Core (268)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ActionSetCode](./core-extra/ActionSetCode) | 🔗 |
| E | [AgentAttackType](./core-extra/AgentAttackType) | 🔗 |
| E | [AgentControllerType](./core-extra/AgentControllerType) | 🔗 |
| C | [AgentData](./core-extra/AgentData) | 🔗 |
| E | [AgentFlag](./core-extra/AgentFlag) | 🔗 |
| E | [AgentMovementMode](./core-extra/AgentMovementMode) | 🔗 |
| C | [AgentOriginUtilities](./core-extra/AgentOriginUtilities) | 🔗 |
| S | [AgentSaveData](./core-extra/AgentSaveData) | 🔗 |
| E | [AgentState](./core-extra/AgentState) | 🔗 |
| C | ArmorComponent | — |
| E | [ArmorMaterialTypes](./core-extra/ArmorMaterialTypes) | 🔗 |
| C | [AtmosphereState](./core-extra/AtmosphereState) | 🔗 |
| C | [Banner](./core-extra/Banner) | 🔗 |
| S | [BannerColor](./core-extra/BannerColor) | 🔗 |
| C | [BannerComponent](./core-extra/BannerComponent) | 🔗 |
| C | [BannerData](./core-extra/BannerData) | 🔗 |
| C | [BannerEffect](./core-extra/BannerEffect) | 🔗 |
| C | [BannerExtensions](./core-extra/BannerExtensions) | 🔗 |
| S | [BannerIconData](./core-extra/BannerIconData) | 🔗 |
| C | [BannerIconGroup](./core-extra/BannerIconGroup) | 🔗 |
| C | [BannerManager](./core-extra/BannerManager) | 🔗 |
| C | [BasicCharacterObject](./core-extra/BasicCharacterObject) | 🔗 |
| C | [BasicCultureObject](./core-extra/BasicCultureObject) | 🔗 |
| C | [BasicGameModels](./core-extra/BasicGameModels) | 🔗 |
| E | [BattleSideEnum](./core-extra/BattleSideEnum) | 🔗 |
| C | [BattleSideEnumExtensions](./core-extra/BattleSideEnumExtensions) | 🔗 |
| E | [BattleState](./core-extra/BattleState) | 🔗 |
| E | [BeardCoverTypes](./core-extra/BeardCoverTypes) | 🔗 |
| C | [BladeData](./core-extra/BladeData) | 🔗 |
| E | [BodyDeformTypes](./core-extra/BodyDeformTypes) | 🔗 |
| E | [BodyMeshMaturityType](./core-extra/BodyMeshMaturityType) | 🔗 |
| E | [BodyMeshTypes](./core-extra/BodyMeshTypes) | 🔗 |
| S | [BodyProperties](./core-extra/BodyProperties) | 🔗 |
| C | [BodyPropertiesJsonConverter](./core-extra/BodyPropertiesJsonConverter) | 🔗 |
| C | [CharacterAttribute](./core-extra/CharacterAttribute) | 🔗 |
| C | [CharacterCode](./core-extra/CharacterCode) | 🔗 |
| S | [ChoiceTag](./core-extra/ChoiceTag) | 🔗 |
| C | [CombatStatCalculator](./core-extra/CombatStatCalculator) | 🔗 |
| C | [Crafting](./core-extra/Crafting) | 🔗 |
| E | [CraftingMaterials](./core-extra/CraftingMaterials) | 🔗 |
| C | [CraftingPiece](./core-extra/CraftingPiece) | 🔗 |
| S | [CraftingStatData](./core-extra/CraftingStatData) | 🔗 |
| E | [CraftingStatTypes](./core-extra/CraftingStatTypes) | 🔗 |
| C | [CraftingTemplate](./core-extra/CraftingTemplate) | 🔗 |
| E | [DamageTypes](./core-extra/DamageTypes) | 🔗 |
| C | [DefaultBannerEffects](./core-extra/DefaultBannerEffects) | 🔗 |
| C | [DefaultCharacterAttributes](./core-extra/DefaultCharacterAttributes) | 🔗 |
| C | [DefaultItemCategories](./core-extra/DefaultItemCategories) | 🔗 |
| C | [DefaultItemCategorySelector](./core-extra/DefaultItemCategorySelector) | 🔗 |
| C | [DefaultItemValueModel](./core-extra/DefaultItemValueModel) | 🔗 |
| C | [DefaultRidingModel](./core-extra/DefaultRidingModel) | 🔗 |
| C | [DefaultSiegeEngineTypes](./core-extra/DefaultSiegeEngineTypes) | 🔗 |
| C | [DefaultSkills](./core-extra/DefaultSkills) | 🔗 |
| E | [DeploymentFormationClass](./core-extra/DeploymentFormationClass) | 🔗 |
| C | [DialogNotificationHandle](./core-extra/DialogNotificationHandle) | 🔗 |
| E | [DrivenProperty](./core-extra/DrivenProperty) | 🔗 |
| C | [DummyCommunicator](./core-extra/DummyCommunicator) | 🔗 |
| S | [DynamicBodyProperties](./core-extra/DynamicBodyProperties) | 🔗 |
| E | [EffectIncrementType](./core-extra/EffectIncrementType) | 🔗 |
| C | [EntitySystem](./core-extra/EntitySystem) | 🔗 |
| C | Equipment | — |
| S | [EquipmentElement](./core-extra/EquipmentElement) | 🔗 |
| E | [EquipmentFlags](./core-extra/EquipmentFlags) | 🔗 |
| E | [EquipmentIndex](./core-extra/EquipmentIndex) | 🔗 |
| E | [EquipmentType](./core-extra/EquipmentType) | 🔗 |
| C | [Extensions](./core-extra/Extensions) | 🔗 |
| C | [FaceGen](./core-extra/FaceGen) | 🔗 |
| E | [FaceGeneratorStage](./core-extra/FaceGeneratorStage) | 🔗 |
| C | [FaceGenHistory](./core-extra/FaceGenHistory) | 🔗 |
| C | [FilePaths](./core-extra/FilePaths) | 🔗 |
| E | [ForestDensity](./core-extra/ForestDensity) | 🔗 |
| E | [FormationClass](./core-extra/FormationClass) | 🔗 |
| C | [FormationClassExtensions](./core-extra/FormationClassExtensions) | 🔗 |
| E | [FormationFilterType](./core-extra/FormationFilterType) | 🔗 |
| E | [FormationPositionPreference](./core-extra/FormationPositionPreference) | 🔗 |
| C | Game | — |
| C | [GameHandler](./core-extra/GameHandler) | 🔗 |
| C | [GameManagerBase](./core-extra/GameManagerBase) | 🔗 |
| C | [GameManagerComponent](./core-extra/GameManagerComponent) | 🔗 |
| E | [GameManagerLoadingSteps](./core-extra/GameManagerLoadingSteps) | 🔗 |
| C | [GameModel](./core-extra/GameModel) | 🔗 |
| C | [GameModelsManager](./core-extra/GameModelsManager) | 🔗 |
| C | [GameState](./core-extra/GameState) | 🔗 |
| C | [GameStateManager](./core-extra/GameStateManager) | 🔗 |
| E | [GameStateManagerType](./core-extra/GameStateManagerType) | 🔗 |
| C | [GameText](./core-extra/GameText) | 🔗 |
| C | [GameTextHelper](./core-extra/GameTextHelper) | 🔗 |
| C | [GameTextManager](./core-extra/GameTextManager) | 🔗 |
| C | [GameTexts](./core-extra/GameTexts) | 🔗 |
| S | [GameTextVariation](./core-extra/GameTextVariation) | 🔗 |
| C | [GameType](./core-extra/GameType) | 🔗 |
| E | [GameTypeLoadingStates](./core-extra/GameTypeLoadingStates) | 🔗 |
| E | [HairCoverTypes](./core-extra/HairCoverTypes) | 🔗 |
| C | HorseComponent | — |
| E | [HorseHarnessCoverTypes](./core-extra/HorseHarnessCoverTypes) | 🔗 |
| E | [HorseTailCoverTypes](./core-extra/HorseTailCoverTypes) | 🔗 |
| E | [HumanBone](./core-extra/HumanBone) | 🔗 |
| C | [HyperlinkTexts](./core-extra/HyperlinkTexts) | 🔗 |
| I | [IAgent](./core-extra/IAgent) | 🔗 |
| I | [IAgentOriginBase](./core-extra/IAgentOriginBase) | 🔗 |
| I | [IBannerVisual](./core-extra/IBannerVisual) | 🔗 |
| I | [IBannerVisualCreator](./core-extra/IBannerVisualCreator) | 🔗 |
| I | [IBattleCombatant](./core-extra/IBattleCombatant) | 🔗 |
| I | [IBattleObserver](./core-extra/IBattleObserver) | 🔗 |
| I | [ICameraModeLogic](./core-extra/ICameraModeLogic) | 🔗 |
| I | [ICharacterData](./core-extra/ICharacterData) | 🔗 |
| I | [ICommunicator](./core-extra/ICommunicator) | 🔗 |
| I | [IEntityComponent](./core-extra/IEntityComponent) | 🔗 |
| I | [IFaceGen](./core-extra/IFaceGen) | 🔗 |
| I | [IFaceGeneratorCustomFilter](./core-extra/IFaceGeneratorCustomFilter) | 🔗 |
| I | [IGameStarter](./core-extra/IGameStarter) | 🔗 |
| I | [IGameStateListener](./core-extra/IGameStateListener) | 🔗 |
| I | [IGameStateManagerListener](./core-extra/IGameStateManagerListener) | 🔗 |
| I | [IGameStateManagerOwner](./core-extra/IGameStateManagerOwner) | 🔗 |
| I | [IInformationDataHolder](./core-extra/IInformationDataHolder) | 🔗 |
| I | [IManagedParametersInitializer](./core-extra/IManagedParametersInitializer) | 🔗 |
| I | [IMission](./core-extra/IMission) | 🔗 |
| I | [IMissionSiegeWeapon](./core-extra/IMissionSiegeWeapon) | 🔗 |
| I | [IMissionTeam](./core-extra/IMissionTeam) | 🔗 |
| I | [IMissionTroopSupplier](./core-extra/IMissionTroopSupplier) | 🔗 |
| I | [IMonsterMissionData](./core-extra/IMonsterMissionData) | 🔗 |
| I | [IMonsterMissionDataCreator](./core-extra/IMonsterMissionDataCreator) | 🔗 |
| S | [IndexEntry](./core-extra/IndexEntry) | 🔗 |
| I | [INetworkCommunication](./core-extra/INetworkCommunication) | 🔗 |
| C | [InformationData](./core-extra/InformationData) | 🔗 |
| E | [InitialWeaponEquipPreference](./core-extra/InitialWeaponEquipPreference) | 🔗 |
| C | [InquiryElement](./core-extra/InquiryElement) | 🔗 |
| I | [IReadOnlyPropertyOwner](./core-extra/IReadOnlyPropertyOwner) | 🔗 |
| I | [IReadOnlyPropertyOwnerF](./core-extra/IReadOnlyPropertyOwnerF) | 🔗 |
| I | [ISceneNotificationContextProvider](./core-extra/ISceneNotificationContextProvider) | 🔗 |
| I | [IShipOrigin](./core-extra/IShipOrigin) | 🔗 |
| C | [ItemCategory](./core-extra/ItemCategory) | 🔗 |
| C | [ItemCategorySelector](./core-extra/ItemCategorySelector) | 🔗 |
| C | [ItemComponent](./core-extra/ItemComponent) | 🔗 |
| E | [ItemFlags](./core-extra/ItemFlags) | 🔗 |
| C | ItemModifier | — |
| C | [ItemModifierGroup](./core-extra/ItemModifierGroup) | 🔗 |
| C | ItemObject | — |
| E | [ItemQuality](./core-extra/ItemQuality) | 🔗 |
| S | [ItemRosterElement](./core-extra/ItemRosterElement) | 🔗 |
| E | [ItemTiers](./core-extra/ItemTiers) | 🔗 |
| E | [ItemTypeEnum](./core-extra/ItemTypeEnum) | 🔗 |
| E | [ItemUsageSetFlags](./core-extra/ItemUsageSetFlags) | 🔗 |
| C | [ItemValueModel](./core-extra/ItemValueModel) | 🔗 |
| I | [ITrackableBase](./core-extra/ITrackableBase) | 🔗 |
| E | [JobType](./core-extra/JobType) | 🔗 |
| S | [LinearFrictionTerm](./core-extra/LinearFrictionTerm) | 🔗 |
| C | ManagedParameters | — |
| E | ManagedParametersEnum | — |
| S | [MaterialProperty](./core-extra/MaterialProperty) | 🔗 |
| C | [MBBodyProperty](./core-extra/MBBodyProperty) | 🔗 |
| C | [MBCharacterSkills](./core-extra/MBCharacterSkills) | 🔗 |
| C | [MBEquipmentRoster](./core-extra/MBEquipmentRoster) | 🔗 |
| C | [MBException](./core-extra/MBException) | 🔗 |
| C | [MBFastRandom](./core-extra/MBFastRandom) | 🔗 |
| C | [MBFastRandomSelector](./core-extra/MBFastRandomSelector) | 🔗 |
| C | [MBGameModel](./core-extra/MBGameModel) | 🔗 |
| C | [MBHaltonColorGenerator](./core-extra/MBHaltonColorGenerator) | 🔗 |
| C | [MBIllegalValueException](./core-extra/MBIllegalValueException) | 🔗 |
| C | [MBInformationManager](./core-extra/MBInformationManager) | 🔗 |
| C | [MBInvalidParameterException](./core-extra/MBInvalidParameterException) | 🔗 |
| C | [MBMethodNameNotFoundException](./core-extra/MBMethodNameNotFoundException) | 🔗 |
| C | [MBMisuseException](./core-extra/MBMisuseException) | 🔗 |
| C | [MBNetwork](./core-extra/MBNetwork) | 🔗 |
| C | [MBNetworkBitException](./core-extra/MBNetworkBitException) | 🔗 |
| C | [MBNotFoundException](./core-extra/MBNotFoundException) | 🔗 |
| C | [MBNotNullParameterException](./core-extra/MBNotNullParameterException) | 🔗 |
| C | [MBNullParameterException](./core-extra/MBNullParameterException) | 🔗 |
| C | [MBObjectManagerExtensions](./core-extra/MBObjectManagerExtensions) | 🔗 |
| C | [MBOutOfRangeException](./core-extra/MBOutOfRangeException) | 🔗 |
| C | [MBPerlin](./core-extra/MBPerlin) | 🔗 |
| C | [MBRandom](./core-extra/MBRandom) | 🔗 |
| C | [MBSaveLoad](./core-extra/MBSaveLoad) | 🔗 |
| C | [MBTypeMismatchException](./core-extra/MBTypeMismatchException) | 🔗 |
| C | [MBUnderFlowException](./core-extra/MBUnderFlowException) | 🔗 |
| C | [MBUnknownTypeException](./core-extra/MBUnknownTypeException) | 🔗 |
| C | MetaDataExtensions | — |
| S | [MissionInitializerRecord](./core-extra/MissionInitializerRecord) | 🔗 |
| E | [MissionMode](./core-extra/MissionMode) | 🔗 |
| C | [MissionResult](./core-extra/MissionResult) | 🔗 |
| C | [MissionShipObject](./core-extra/MissionShipObject) | 🔗 |
| C | [MissionSiegeWeapon](./core-extra/MissionSiegeWeapon) | 🔗 |
| E | [ModuleCheckResultType](./core-extra/ModuleCheckResultType) | 🔗 |
| C | [Monster](./core-extra/Monster) | 🔗 |
| C | [MountCreationKey](./core-extra/MountCreationKey) | 🔗 |
| C | [MultiSelectionInquiryData](./core-extra/MultiSelectionInquiryData) | 🔗 |
| E | [NotificationPriority](./core-extra/NotificationPriority) | 🔗 |
| S | [NotificationSceneProperties](./core-extra/NotificationSceneProperties) | 🔗 |
| E | [NotificationStatus](./core-extra/NotificationStatus) | 🔗 |
| C | [PeerComponent](./core-extra/PeerComponent) | 🔗 |
| S | [PieceData](./core-extra/PieceData) | 🔗 |
| E | [PieceTypes](./core-extra/PieceTypes) | 🔗 |
| C | [PlayerGameState](./core-extra/PlayerGameState) | 🔗 |
| E | [Property](./core-extra/Property) | 🔗 |
| C | [PropertyObject](./core-extra/PropertyObject) | 🔗 |
| C | [PropertyOwner](./core-extra/PropertyOwner) | 🔗 |
| C | [PropertyOwnerF](./core-extra/PropertyOwnerF) | 🔗 |
| C | [RefiningFormula](./core-extra/RefiningFormula) | 🔗 |
| E | [RelevantContextType](./core-extra/RelevantContextType) | 🔗 |
| C | [ResetAllTutorialsEvent](./core-extra/ResetAllTutorialsEvent) | 🔗 |
| C | [RidingModel](./core-extra/RidingModel) | 🔗 |
| C | [SaddleComponent](./core-extra/SaddleComponent) | 🔗 |
| E | [SailType](./core-extra/SailType) | 🔗 |
| C | [SaveableCoreTypeDefiner](./core-extra/SaveableCoreTypeDefiner) | 🔗 |
| C | [SceneNotificationData](./core-extra/SceneNotificationData) | 🔗 |
| C | [ShipHull](./core-extra/ShipHull) | 🔗 |
| C | [ShipPhysicsReference](./core-extra/ShipPhysicsReference) | 🔗 |
| C | [ShipSail](./core-extra/ShipSail) | 🔗 |
| C | [ShipSlot](./core-extra/ShipSlot) | 🔗 |
| S | [ShipSlotAndPieceName](./core-extra/ShipSlotAndPieceName) | 🔗 |
| E | [ShipType](./core-extra/ShipType) | 🔗 |
| C | [ShipUpgradePiece](./core-extra/ShipUpgradePiece) | 🔗 |
| S | [ShipVisualSlotInfo](./core-extra/ShipVisualSlotInfo) | 🔗 |
| C | [SiegeEngineType](./core-extra/SiegeEngineType) | 🔗 |
| C | [SkeletonScale](./core-extra/SkeletonScale) | 🔗 |
| C | [SkillObject](./core-extra/SkillObject) | 🔗 |
| E | [SkillType](./core-extra/SkillType) | 🔗 |
| E | [SkinMask](./core-extra/SkinMask) | 🔗 |
| E | [SpectatorCameraTypes](./core-extra/SpectatorCameraTypes) | 🔗 |
| C | [StackArray](./core-extra/StackArray) | 🔗 |
| S | [StackArray10FloatFloatTuple](./core-extra/StackArray10FloatFloatTuple) | 🔗 |
| S | [StackArray2Bool](./core-extra/StackArray2Bool) | 🔗 |
| S | [StackArray32Bool](./core-extra/StackArray32Bool) | 🔗 |
| S | [StackArray3Bool](./core-extra/StackArray3Bool) | 🔗 |
| S | [StackArray3Float](./core-extra/StackArray3Float) | 🔗 |
| S | [StackArray3Int](./core-extra/StackArray3Int) | 🔗 |
| S | [StackArray4Bool](./core-extra/StackArray4Bool) | 🔗 |
| S | [StackArray4Int](./core-extra/StackArray4Int) | 🔗 |
| S | [StackArray5Bool](./core-extra/StackArray5Bool) | 🔗 |
| S | [StackArray5Float](./core-extra/StackArray5Float) | 🔗 |
| S | [StackArray6Bool](./core-extra/StackArray6Bool) | 🔗 |
| S | [StackArray7Bool](./core-extra/StackArray7Bool) | 🔗 |
| S | [StackArray8Bool](./core-extra/StackArray8Bool) | 🔗 |
| S | [StackArray8Int](./core-extra/StackArray8Int) | 🔗 |
| E | [State](./core-extra/State) | 🔗 |
| S | [StaticBodyProperties](./core-extra/StaticBodyProperties) | 🔗 |
| E | [StrikeType](./core-extra/StrikeType) | 🔗 |
| C | [TauntUsage](./core-extra/TauntUsage) | 🔗 |
| E | [TauntUsageFlag](./core-extra/TauntUsageFlag) | 🔗 |
| C | [TauntUsageManager](./core-extra/TauntUsageManager) | 🔗 |
| C | [TauntUsageSet](./core-extra/TauntUsageSet) | 🔗 |
| E | [TeamSideEnum](./core-extra/TeamSideEnum) | 🔗 |
| C | [TeamSideEnumExtensions](./core-extra/TeamSideEnumExtensions) | 🔗 |
| E | [TerrainType](./core-extra/TerrainType) | 🔗 |
| C | [Timer](./core-extra/Timer) | 🔗 |
| C | [TradeItemComponent](./core-extra/TradeItemComponent) | 🔗 |
| C | [TroopClassExtensions](./core-extra/TroopClassExtensions) | 🔗 |
| E | [TroopTraitsMask](./core-extra/TroopTraitsMask) | 🔗 |
| C | [TroopTraitsMaskExtensions](./core-extra/TroopTraitsMaskExtensions) | 🔗 |
| E | [TroopType](./core-extra/TroopType) | 🔗 |
| E | [TroopUsageFlags](./core-extra/TroopUsageFlags) | 🔗 |
| C | [TutorialContextChangedEvent](./core-extra/TutorialContextChangedEvent) | 🔗 |
| E | [TutorialContexts](./core-extra/TutorialContexts) | 🔗 |
| E | [UnderwearTypes](./core-extra/UnderwearTypes) | 🔗 |
| S | [UniqueTroopDescriptor](./core-extra/UniqueTroopDescriptor) | 🔗 |
| E | [UnitSpawnPrioritizations](./core-extra/UnitSpawnPrioritizations) | 🔗 |
| C | [VirtualPlayer](./core-extra/VirtualPlayer) | 🔗 |
| C | [WaitForGameState](./core-extra/WaitForGameState) | 🔗 |
| E | [WeaponClass](./core-extra/WeaponClass) | 🔗 |
| C | WeaponComponent | — |
| C | [WeaponComponentData](./core-extra/WeaponComponentData) | 🔗 |
| C | [WeaponComponentDataExtensions](./core-extra/WeaponComponentDataExtensions) | 🔗 |
| C | [WeaponDescription](./core-extra/WeaponDescription) | 🔗 |
| C | [WeaponDesign](./core-extra/WeaponDesign) | 🔗 |
| C | [WeaponDesignElement](./core-extra/WeaponDesignElement) | 🔗 |
| E | [WeaponFlags](./core-extra/WeaponFlags) | 🔗 |
| E | [WeaponTiers](./core-extra/WeaponTiers) | 🔗 |
| C | [XmlHelper](./core-extra/XmlHelper) | 🔗 |

## TaleWorlds.Core.ImageIdentifiers (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BannerImageIdentifier](./core-extra/BannerImageIdentifier) | 🔗 |
| C | [CharacterImageIdentifier](./core-extra/CharacterImageIdentifier) | 🔗 |
| C | [CraftingPieceImageIdentifier](./core-extra/CraftingPieceImageIdentifier) | 🔗 |
| C | [EmptyImageIdentifier](./core-extra/EmptyImageIdentifier) | 🔗 |
| C | [ImageIdentifier](./core-extra/ImageIdentifier) | 🔗 |
| C | [ItemImageIdentifier](./core-extra/ItemImageIdentifier) | 🔗 |
| C | [PlayerAvatarImageIdentifier](./core-extra/PlayerAvatarImageIdentifier) | 🔗 |

## TaleWorlds.Core.SaveCompability (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CharacterSkillsResolver](./core-extra/CharacterSkillsResolver) | 🔗 |

## TaleWorlds.Core.ViewModelCollection (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BattleResultVM](./core-extra/BattleResultVM) | 🔗 |
| C | [CharacterEquipmentItemVM](./core-extra/CharacterEquipmentItemVM) | 🔗 |
| C | CharacterViewModel | — |
| C | [CharacterWithActionViewModel](./core-extra/CharacterWithActionViewModel) | 🔗 |
| C | [CraftingItemViewModel](./core-extra/CraftingItemViewModel) | 🔗 |
| C | [ItemCollectionElementViewModel](./core-extra/ItemCollectionElementViewModel) | 🔗 |
| C | [ItemVM](./core-extra/ItemVM) | 🔗 |
| C | [PowerLevelComparer](./core-extra/PowerLevelComparer) | 🔗 |
| E | [StanceTypes](./core-extra/StanceTypes) | 🔗 |

## TaleWorlds.Core.ViewModelCollection.BannerEditor (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BannerColorVM](./core-extra/BannerColorVM) | 🔗 |
| C | [BannerIconVM](./core-extra/BannerIconVM) | 🔗 |
| C | [BannerViewModel](./core-extra/BannerViewModel) | 🔗 |

## TaleWorlds.Core.ViewModelCollection.Generic (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BindingListFloatItem](./core-extra/BindingListFloatItem) | 🔗 |
| C | [BindingListStringItem](./core-extra/BindingListStringItem) | 🔗 |
| C | [BoolItemWithActionVM](./core-extra/BoolItemWithActionVM) | 🔗 |
| C | [StringItemWithActionVM](./core-extra/StringItemWithActionVM) | 🔗 |
| C | [StringItemWithEnabledAndHintVM](./core-extra/StringItemWithEnabledAndHintVM) | 🔗 |
| C | [StringItemWithHintVM](./core-extra/StringItemWithHintVM) | 🔗 |
| C | [StringPairItemVM](./core-extra/StringPairItemVM) | 🔗 |
| C | [StringPairItemWithActionVM](./core-extra/StringPairItemWithActionVM) | 🔗 |

## TaleWorlds.Core.ViewModelCollection.ImageIdentifiers (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BannerImageIdentifierVM](./core-extra/BannerImageIdentifierVM) | 🔗 |
| C | [CharacterImageIdentifierVM](./core-extra/CharacterImageIdentifierVM) | 🔗 |
| C | [CraftingPieceImageIdentifierVM](./core-extra/CraftingPieceImageIdentifierVM) | 🔗 |
| C | [GenericImageIdentifierVM](./core-extra/GenericImageIdentifierVM) | 🔗 |
| C | [ImageIdentifierVM](./core-extra/ImageIdentifierVM) | 🔗 |
| C | [ItemImageIdentifierVM](./core-extra/ItemImageIdentifierVM) | 🔗 |
| C | [PlayerAvatarImageIdentifierVM](./core-extra/PlayerAvatarImageIdentifierVM) | 🔗 |

## TaleWorlds.Core.ViewModelCollection.Information (11)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BasicTooltipViewModel](./core-extra/BasicTooltipViewModel) | 🔗 |
| C | [GameNotificationItemVM](./core-extra/GameNotificationItemVM) | 🔗 |
| C | [GameNotificationVM](./core-extra/GameNotificationVM) | 🔗 |
| C | HintViewModel | — |
| C | [HintVM](./core-extra/HintVM) | 🔗 |
| C | [InquiryElementVM](./core-extra/InquiryElementVM) | 🔗 |
| C | [PropertyBasedTooltipVM](./core-extra/PropertyBasedTooltipVM) | 🔗 |
| C | [SceneNotificationVM](./core-extra/SceneNotificationVM) | 🔗 |
| E | [TooltipMode](./core-extra/TooltipMode) | 🔗 |
| C | [TooltipProperty](./core-extra/TooltipProperty) | 🔗 |
| E | [TooltipPropertyFlags](./core-extra/TooltipPropertyFlags) | 🔗 |

## TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [RundownLineVM](./core-extra/RundownLineVM) | 🔗 |
| C | [RundownTooltipVM](./core-extra/RundownTooltipVM) | 🔗 |
| E | [ValueCategorization](./core-extra/ValueCategorization) | 🔗 |

## TaleWorlds.Core.ViewModelCollection.Selector (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [SelectorItemVM](./core-extra/SelectorItemVM) | 🔗 |
| C | [SelectorVM](./core-extra/SelectorVM) | 🔗 |

## TaleWorlds.Core.ViewModelCollection.Tutorial (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ElementNotificationVM](./core-extra/ElementNotificationVM) | 🔗 |
| C | [TutorialNotificationElementChangeEvent](./core-extra/TutorialNotificationElementChangeEvent) | 🔗 |
