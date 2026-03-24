# Scene / Scene

**Namespace**: TaleWorlds.Engine
**File**: `bannerlord-1.3.15/TaleWorlds.Engine/Scene.cs`
**Purpose**: 场景管理接口，处理地形、照明、物理、导航网格等操作 / Scene management interface handling terrain, lighting, physics, navmesh operations

## 概述 / Overview

`Scene` 是游戏引擎中用于管理场景的原生包装类。它继承自 `NativeObject`，通过 `[EngineClass("rglScene")]` 特性映射到 C++ 原生场景系统。Scene 是 Bannerlord 中最大的类之一，拥有 2000+ 行代码和大量功能。

`Scene` is a native wrapper class for scene management in the game engine. It inherits from `NativeObject` and is mapped to the C++ native scene system via the `[EngineClass("rglScene")]` attribute. Scene is one of the largest classes in Bannerlord with 2000+ lines of code and extensive functionality.

## 场景创建方法 / Scene Creation Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| CreateNewScene | `public static Scene CreateNewScene(bool initialize_physics = true, bool enable_decals = true, DecalAtlasGroup atlasGroup = DecalAtlasGroup.All, string sceneName = "mono_renderscene")` | 创建新场景 / Create a new scene |

## 地形方法 / Terrain Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| GetTerrainHeightData | `public float[] GetTerrainHeightData(int nodeXIndex, int nodeYIndex)` | 获取地形高度数据 / Get terrain height data |
| GetTerrainPhysicsMaterialIndexData | `public short[] GetTerrainPhysicsMaterialIndexData(int nodeXIndex, int nodeYIndex)` | 获取地形物理材质索引数据 / Get terrain physics material index data |
| GetTerrainData | `public void GetTerrainData(out Vec2i nodeDimension, out float nodeSize, out int layerCount, out int layerVersion)` | 获取地形数据 / Get terrain data |
| GetTerrainNodeData | `public void GetTerrainNodeData(int xIndex, int yIndex, out int vertexCountAlongAxis, out float quadLength, out float minHeight, out float maxHeight)` | 获取地形节点数据 / Get terrain node data |
| GetTerrainPhysicsMaterialAtLayer | `public PhysicsMaterial GetTerrainPhysicsMaterialAtLayer(int layerIndex)` | 获取指定图层的物理材质 / Get physics material at layer |
| GetTerrainHeightAndNormal | `public void GetTerrainHeightAndNormal(Vec2 position, out float height, out Vec3 normal)` | 获取地形高度和法线 / Get terrain height and normal |
| GetTerrainMemoryUsage | `public int GetTerrainMemoryUsage()` | 获取地形内存使用 / Get terrain memory usage |

## 水体方法 / Water Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| GetWaterLevel | `public float GetWaterLevel()` | 获取水位 / Get water level |
| GetWaterLevelAtPosition | `public float GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer, bool checkWaterBodyEntities)` | 获取指定位置的水位 / Get water level at position |
| GetWaterSpeedAtPosition | `public Vec3 GetWaterSpeedAtPosition(Vec2 position, bool doChoppinessCorrection)` | 获取指定位置的水速 / Get water speed at position |
| GetBulkWaterLevelAtPositions | `public void GetBulkWaterLevelAtPositions(Vec2[] waterHeightQueryArray, ref float[] waterHeightsAtVolumes, ref Vec3[] waterSurfaceNormals)` | 批量获取水位 / Bulk get water levels |
| SetWaterStrength | `public void SetWaterStrength(float newWaterStrength)` | 设置水强度 / Set water strength |
| GetWaterStrength | `public float GetWaterStrength()` | 获取水强度 / Get water strength |
| AddWaterWakeWithSphere | `public void AddWaterWakeWithSphere(Vec3 position, float radius, float wakeVisibility, float foamVisibility)` | 添加球体水尾迹 / Add water wake with sphere |
| AddWaterWakeWithCapsule | `public void AddWaterWakeWithCapsule(Vec3 positionA, float radiusA, Vec3 positionB, float radiusB, float wakeVisibility, float foamVisibility)` | 添加胶囊体水尾迹 / Add water wake with capsule |

## 导航网格方法 / Navigation Mesh Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| GetNavMeshFaceCount | `public int GetNavMeshFaceCount()` | 获取导航网格面数量 / Get navmesh face count |
| GetNavMeshCenterPosition | `public void GetNavMeshCenterPosition(int faceIndex, ref Vec3 centerPosition)` | 获取导航网格中心位置 / Get navmesh center position |
| GetNavMeshPathFaceRecord | `public PathFaceRecord GetNavMeshPathFaceRecord(int faceIndex)` | 获取路径面记录 / Get path face record |
| GetPathBetweenAIFaces | `public bool GetPathBetweenAIFaces(...)` | 获取 AI 面之间的路径（多个重载）/ Get path between AI faces (multiple overloads) |
| GetPathDistanceBetweenAIFaces | `public bool GetPathDistanceBetweenAIFaces(...)` | 获取 AI 面之间的距离 / Get distance between AI faces |
| GetNavmeshFaceIndex | `public void GetNavMeshFaceIndex(ref PathFaceRecord record, Vec2 position, bool isRegion1, bool checkIfDisabled, bool ignoreHeight = false)` | 获取导航网格面索引 / Get navmesh face index |
| ClearNavMesh | `public void ClearNavMesh()` | 清除导航网格 / Clear navmesh |
| IsPositionOnADynamicNavMesh | `public bool IsPositionOnADynamicNavMesh(Vec3 position)` | 检查位置是否在动态导航网格上 / Check if position is on dynamic navmesh |

## 实体查询方法 / Entity Query Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| GetEntityWithGuid | `public GameEntity GetEntityWithGuid(string guid)` | 通过 GUID 获取实体 / Get entity with GUID |
| GetFirstEntityWithName | `public GameEntity GetFirstEntityWithName(string name)` | 通过名称获取第一个实体 / Get first entity with name |
| GetCampaignEntityWithName | `public GameEntity GetCampaignEntityWithName(string name)` | 通过名称获取战役实体 / Get campaign entity with name |
| GetFirstEntityWithScriptComponent | `public GameEntity GetFirstEntityWithScriptComponent<T>() where T : ScriptComponentBehavior` | 通过脚本组件类型获取实体 / Get entity with script component type |
| GetAllEntitiesWithScriptComponent | `public void GetAllEntitiesWithScriptComponent<T>(ref List<GameEntity> entities) where T : ScriptComponentBehavior` | 获取所有带有指定脚本组件的实体 / Get all entities with script component |

## 路径方法 / Path Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| GetPathWithName | `public Path GetPathWithName(string name)` | 通过名称获取路径 / Get path with name |
| GetPathsWithNamePrefix | `public Path[] GetPathsWithNamePrefix(string prefix)` | 获取具有指定前缀的所有路径 / Get all paths with name prefix |
| AddPath | `public void AddPath(string name)` | 添加路径 / Add path |
| AddPathPoint | `public void AddPathPoint(string name, MatrixFrame frame)` | 添加路径点 / Add path point |
| DeletePathWithName | `public void DeletePathWithName(string name)` | 删除路径 / Delete path |

## 天空和大气方法 / Sky and Atmosphere Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| GetSkyboxMesh | `public Mesh GetSkyboxMesh()` | 获取天空盒网格 / Get skybox mesh |
| SetAtmosphereWithName | `public void SetAtmosphereWithName(string name)` | 通过名称设置大气 / Set atmosphere with name |
| SetPhotoAtmosphereViaTod | `public void SetPhotoAtmosphereViaTod(float tod, bool withStorm)` | 通过时间设置照片大气 / Set photo atmosphere via time of day |

## 可见性控制方法 / Visibility Control Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| SetActiveVisibilityLevels | `public void SetActiveVisibilityLevels(List<string> levelsToActivate)` | 设置激活的可见性级别 / Set active visibility levels |
| SetUpgradeLevelVisibility | `public void SetUpgradeLevelVisibility(uint mask)` | 设置升级级别可见性 / Set upgrade level visibility |
| SetDontLoadInvisibleEntities | `public void SetDontLoadInvisibleEntities(bool value)` | 设置不加载不可见实体 / Set don't load invisible entities |

## 物理方法 / Physics Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| GetEnginePhysicsEnabled | `public bool GetEnginePhysicsEnabled()` | 检查物理是否启用 / Check if physics enabled |
| FillEntityWithHardBorderPhysicsBarrier | `public void FillEntityWithHardBorderPhysicsBarrier(GameEntity entity)` | 用硬边界物理屏障填充实体 / Fill entity with hard border physics barrier |
| EnableInclusiveAsyncPhysx | `public void EnableInclusiveAsyncPhysx()` | 启用包容性异步 PhysX / Enable inclusive async PhysX |

## 场景信息方法 / Scene Information Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| GetName | `public string GetName()` | 获取场景名称 / Get scene name |
| SetName | `public void SetName(string name)` | 设置场景名称 / Set scene name |
| GetModulePath | `public string GetModulePath()` | 获取模块路径 / Get module path |
| GetBoundingBox | `public void GetBoundingBox(out Vec3 min, out Vec3 max)` | 获取包围盒 / Get bounding box |
| GetSceneLimits | `public void GetSceneLimits(out Vec3 min, out Vec3 max)` | 获取场景范围 / Get scene limits |
| IsMultiplayerScene | `public bool IsMultiplayerScene()` | 检查是否是多人场景 / Check if multiplayer scene |
| IsDefaultEditorScene | `public bool IsDefaultEditorScene()` | 检查是否是默认编辑器场景 / Check if default editor scene |

## 照片模式方法 / Photo Mode Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| GetPhotoModeOn | `public bool GetPhotoModeOn()` | 获取照片模式状态 / Get photo mode state |
| SetPhotoModeOn | `public void SetPhotoModeOn(bool on)` | 设置照片模式状态 / Set photo mode state |
| GetPhotoModeFov | `public float GetPhotoModeFov()` | 获取照片模式视野 / Get photo mode FOV |
| SetPhotoModeFov | `public void SetPhotoModeFov(float verticalFov)` | 设置照片模式视野 / Set photo mode FOV |
| GetPhotoModeRoll | `public float GetPhotoModeRoll()` | 获取照片模式旋转 / Get photo mode roll |
| SetPhotoModeRoll | `public void SetPhotoModeRoll(float roll)` | 设置照片模式旋转 / Set photo mode roll |

## 重要属性 / Important Properties

| Property | Type | Description |
|----------|------|-------------|
| TimeSpeed | `float` | 场景时间速度（getter/setter）/ Scene time speed (getter/setter) |

## 重要常量 / Important Constants

| Constant | Type | Value | Description |
|----------|------|-------|-------------|
| MaximumWindSpeed | `float` | 30f | 最大风速 / Maximum wind speed |
| AutoClimbHeight | `float` | 1.5f | 自动攀爬高度 / Auto climb height |
| NavMeshHeightLimit | `float` | 1.5f | 导航网格高度限制 / Nav mesh height limit |
| SunRise | `int` | 2 | 日出时间 / Sun rise time |
| SunSet | `int` | 22 | 日落时间 / Sun set time |

## 使用示例 / Usage Example

```csharp
// 创建新场景
// Create new scene
Scene scene = Scene.CreateNewScene(true, true);

// 获取地形高度
// Get terrain height
float height, normal;
scene.GetTerrainHeightAndNormal(position, out height, out normal);

// 查询实体
// Query entities
GameEntity entity = scene.GetFirstEntityWithName("my_entity");

// 获取导航网格面
// Get navmesh face
PathFaceRecord record = new PathFaceRecord();
scene.GetNavMeshFaceIndex(ref record, position, true, false);
```

## 注意事项 / Notes

- Scene 继承自 NativeObject，不可直接实例化
- Scene inherits from NativeObject and cannot be instantiated directly
- 所有方法都通过 `EngineApplicationInterface.IScene` 调用原生实现
- All methods call native implementation via `EngineApplicationInterface.IScene`
- Scene 包含大量重载方法，特别是导航网格和路径查询
- Scene contains many overloaded methods, especially for navmesh and path queries
- 物理和导航网格操作使用 `PhysicsAndRayCastLock` 互斥体保护
- Physics and navmesh operations are protected by `PhysicsAndRayCastLock` mutex
