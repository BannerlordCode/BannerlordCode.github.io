# Scene / Scene

**Namespace**: TaleWorlds.Engine
**File**: `bannerlord-1.3.15/TaleWorlds.Engine/Scene.cs`
**Purpose**: Scene management interface handling terrain, lighting, physics, navmesh operations / 场景管理接口，处理地形、照明、物理、导航网格等操作

## Overview / 概述

`Scene` is a native wrapper class for scene management in the game engine. It inherits from `NativeObject` and is mapped to the C++ native scene system via the `[EngineClass("rglScene")]` attribute. Scene is one of the largest classes in Bannerlord with 2000+ lines of code and extensive functionality.

`Scene` 是游戏引擎中用于管理场景的原生包装类。它继承自 `NativeObject`，通过 `[EngineClass("rglScene")]` 特性映射到 C++ 原生场景系统。Scene 是 Bannerlord 中最大的类之一，拥有 2000+ 行代码和大量功能。

## Scene Creation Methods / 场景创建方法

| Method | Signature | Description |
|--------|-----------|-------------|
| CreateNewScene | `public static Scene CreateNewScene(bool initialize_physics = true, bool enable_decals = true, DecalAtlasGroup atlasGroup = DecalAtlasGroup.All, string sceneName = "mono_renderscene")` | Create a new scene / 创建新场景 |

## Terrain Methods / 地形方法

| Method | Signature | Description |
|--------|-----------|-------------|
| GetTerrainHeightData | `public float[] GetTerrainHeightData(int nodeXIndex, int nodeYIndex)` | Get terrain height data / 获取地形高度数据 |
| GetTerrainPhysicsMaterialIndexData | `public short[] GetTerrainPhysicsMaterialIndexData(int nodeXIndex, int nodeYIndex)` | Get terrain physics material index data / 获取地形物理材质索引数据 |
| GetTerrainData | `public void GetTerrainData(out Vec2i nodeDimension, out float nodeSize, out int layerCount, out int layerVersion)` | Get terrain data / 获取地形数据 |
| GetTerrainNodeData | `public void GetTerrainNodeData(int xIndex, int yIndex, out int vertexCountAlongAxis, out float quadLength, out float minHeight, out float maxHeight)` | Get terrain node data / 获取地形节点数据 |
| GetTerrainPhysicsMaterialAtLayer | `public PhysicsMaterial GetTerrainPhysicsMaterialAtLayer(int layerIndex)` | Get physics material at layer / 获取指定图层的物理材质 |
| GetTerrainHeightAndNormal | `public void GetTerrainHeightAndNormal(Vec2 position, out float height, out Vec3 normal)` | Get terrain height and normal / 获取地形高度和法线 |
| GetTerrainMemoryUsage | `public int GetTerrainMemoryUsage()` | Get terrain memory usage / 获取地形内存使用 |

## Water Methods / 水体方法

| Method | Signature | Description |
|--------|-----------|-------------|
| GetWaterLevel | `public float GetWaterLevel()` | Get water level / 获取水位 |
| GetWaterLevelAtPosition | `public float GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer, bool checkWaterBodyEntities)` | Get water level at position / 获取指定位置的水位 |
| GetWaterSpeedAtPosition | `public Vec3 GetWaterSpeedAtPosition(Vec2 position, bool doChoppinessCorrection)` | Get water speed at position / 获取指定位置的水速 |
| GetBulkWaterLevelAtPositions | `public void GetBulkWaterLevelAtPositions(Vec2[] waterHeightQueryArray, ref float[] waterHeightsAtVolumes, ref Vec3[] waterSurfaceNormals)` | Bulk get water levels / 批量获取水位 |
| SetWaterStrength | `public void SetWaterStrength(float newWaterStrength)` | Set water strength / 设置水强度 |
| GetWaterStrength | `public float GetWaterStrength()` | Get water strength / 获取水强度 |
| AddWaterWakeWithSphere | `public void AddWaterWakeWithSphere(Vec3 position, float radius, float wakeVisibility, float foamVisibility)` | Add water wake with sphere / 添加球体水尾迹 |
| AddWaterWakeWithCapsule | `public void AddWaterWakeWithCapsule(Vec3 positionA, float radiusA, Vec3 positionB, float radiusB, float wakeVisibility, float foamVisibility)` | Add water wake with capsule / 添加胶囊体水尾迹 |

## Navigation Mesh Methods / 导航网格方法

| Method | Signature | Description |
|--------|-----------|-------------|
| GetNavMeshFaceCount | `public int GetNavMeshFaceCount()` | Get navmesh face count / 获取导航网格面数量 |
| GetNavMeshCenterPosition | `public void GetNavMeshCenterPosition(int faceIndex, ref Vec3 centerPosition)` | Get navmesh center position / 获取导航网格中心位置 |
| GetNavMeshPathFaceRecord | `public PathFaceRecord GetNavMeshPathFaceRecord(int faceIndex)` | Get path face record / 获取路径面记录 |
| GetPathBetweenAIFaces | `public bool GetPathBetweenAIFaces(...)` | Get path between AI faces (multiple overloads) / 获取 AI 面之间的路径（多个重载） |
| GetPathDistanceBetweenAIFaces | `public bool GetPathDistanceBetweenAIFaces(...)` | Get distance between AI faces / 获取 AI 面之间的距离 |
| GetNavmeshFaceIndex | `public void GetNavMeshFaceIndex(ref PathFaceRecord record, Vec2 position, bool isRegion1, bool checkIfDisabled, bool ignoreHeight = false)` | Get navmesh face index / 获取导航网格面索引 |
| ClearNavMesh | `public void ClearNavMesh()` | Clear navmesh / 清除导航网格 |
| IsPositionOnADynamicNavMesh | `public bool IsPositionOnADynamicNavMesh(Vec3 position)` | Check if position is on dynamic navmesh / 检查位置是否在动态导航网格上 |

## Entity Query Methods / 实体查询方法

| Method | Signature | Description |
|--------|-----------|-------------|
| GetEntityWithGuid | `public GameEntity GetEntityWithGuid(string guid)` | Get entity with GUID / 通过 GUID 获取实体 |
| GetFirstEntityWithName | `public GameEntity GetFirstEntityWithName(string name)` | Get first entity with name / 通过名称获取第一个实体 |
| GetCampaignEntityWithName | `public GameEntity GetCampaignEntityWithName(string name)` | Get campaign entity with name / 通过名称获取战役实体 |
| GetFirstEntityWithScriptComponent | `public GameEntity GetFirstEntityWithScriptComponent<T>() where T : ScriptComponentBehavior` | Get entity with script component type / 通过脚本组件类型获取实体 |
| GetAllEntitiesWithScriptComponent | `public void GetAllEntitiesWithScriptComponent<T>(ref List<GameEntity> entities) where T : ScriptComponentBehavior` | Get all entities with script component / 获取所有带有指定脚本组件的实体 |

## Path Methods / 路径方法

| Method | Signature | Description |
|--------|-----------|-------------|
| GetPathWithName | `public Path GetPathWithName(string name)` | Get path with name / 通过名称获取路径 |
| GetPathsWithNamePrefix | `public Path[] GetPathsWithNamePrefix(string prefix)` | Get all paths with name prefix / 获取具有指定前缀的所有路径 |
| AddPath | `public void AddPath(string name)` | Add path / 添加路径 |
| AddPathPoint | `public void AddPathPoint(string name, MatrixFrame frame)` | Add path point / 添加路径点 |
| DeletePathWithName | `public void DeletePathWithName(string name)` | Delete path / 删除路径 |

## Sky and Atmosphere Methods / 天空和大气方法

| Method | Signature | Description |
|--------|-----------|-------------|
| GetSkyboxMesh | `public Mesh GetSkyboxMesh()` | Get skybox mesh / 获取天空盒网格 |
| SetAtmosphereWithName | `public void SetAtmosphereWithName(string name)` | Set atmosphere with name / 通过名称设置大气 |
| SetPhotoAtmosphereViaTod | `public void SetPhotoAtmosphereViaTod(float tod, bool withStorm)` | Set photo atmosphere via time of day / 通过时间设置照片大气 |

## Visibility Control Methods / 可见性控制方法

| Method | Signature | Description |
|--------|-----------|-------------|
| SetActiveVisibilityLevels | `public void SetActiveVisibilityLevels(List<string> levelsToActivate)` | Set active visibility levels / 设置激活的可见性级别 |
| SetUpgradeLevelVisibility | `public void SetUpgradeLevelVisibility(uint mask)` | Set upgrade level visibility / 设置升级级别可见性 |
| SetDontLoadInvisibleEntities | `public void SetDontLoadInvisibleEntities(bool value)` | Set don't load invisible entities / 设置不加载不可见实体 |

## Physics Methods / 物理方法

| Method | Signature | Description |
|--------|-----------|-------------|
| GetEnginePhysicsEnabled | `public bool GetEnginePhysicsEnabled()` | Check if physics enabled / 检查物理是否启用 |
| FillEntityWithHardBorderPhysicsBarrier | `public void FillEntityWithHardBorderPhysicsBarrier(GameEntity entity)` | Fill entity with hard border physics barrier / 用硬边界物理屏障填充实体 |
| EnableInclusiveAsyncPhysx | `public void EnableInclusiveAsyncPhysx()` | Enable inclusive async PhysX / 启用包容性异步 PhysX |

## Scene Information Methods / 场景信息方法

| Method | Signature | Description |
|--------|-----------|-------------|
| GetName | `public string GetName()` | Get scene name / 获取场景名称 |
| SetName | `public void SetName(string name)` | Set scene name / 设置场景名称 |
| GetModulePath | `public string GetModulePath()` | Get module path / 获取模块路径 |
| GetBoundingBox | `public void GetBoundingBox(out Vec3 min, out Vec3 max)` | Get bounding box / 获取包围盒 |
| GetSceneLimits | `public void GetSceneLimits(out Vec3 min, out Vec3 max)` | Get scene limits / 获取场景范围 |
| IsMultiplayerScene | `public bool IsMultiplayerScene()` | Check if multiplayer scene / 检查是否是多人场景 |
| IsDefaultEditorScene | `public bool IsDefaultEditorScene()` | Check if default editor scene / 检查是否是默认编辑器场景 |

## Photo Mode Methods / 照片模式方法

| Method | Signature | Description |
|--------|-----------|-------------|
| GetPhotoModeOn | `public bool GetPhotoModeOn()` | Get photo mode state / 获取照片模式状态 |
| SetPhotoModeOn | `public void SetPhotoModeOn(bool on)` | Set photo mode state / 设置照片模式状态 |
| GetPhotoModeFov | `public float GetPhotoModeFov()` | Get photo mode FOV / 获取照片模式视野 |
| SetPhotoModeFov | `public void SetPhotoModeFov(float verticalFov)` | Set photo mode FOV / 设置照片模式视野 |
| GetPhotoModeRoll | `public float GetPhotoModeRoll()` | Get photo mode roll / 获取照片模式旋转 |
| SetPhotoModeRoll | `public void SetPhotoModeRoll(float roll)` | Set photo mode roll / 设置照片模式旋转 |

## Important Properties / 重要属性

| Property | Type | Description |
|----------|------|-------------|
| TimeSpeed | `float` | Scene time speed (getter/setter) / 场景时间速度（getter/setter） |

## Important Constants / 重要常量

| Constant | Type | Value | Description |
|----------|------|-------|-------------|
| MaximumWindSpeed | `float` | 30f | Maximum wind speed / 最大风速 |
| AutoClimbHeight | `float` | 1.5f | Auto climb height / 自动攀爬高度 |
| NavMeshHeightLimit | `float` | 1.5f | Nav mesh height limit / 导航网格高度限制 |
| SunRise | `int` | 2 | Sun rise time / 日出时间 |
| SunSet | `int` | 22 | Sun set time / 日落时间 |

## Usage Example / 使用示例

```csharp
// Create new scene
// 创建新场景
Scene scene = Scene.CreateNewScene(true, true);

// Get terrain height
// 获取地形高度
float height, normal;
scene.GetTerrainHeightAndNormal(position, out height, out normal);

// Query entities
// 查询实体
GameEntity entity = scene.GetFirstEntityWithName("my_entity");

// Get navmesh face
// 获取导航网格面
PathFaceRecord record = new PathFaceRecord();
scene.GetNavMeshFaceIndex(ref record, position, true, false);
```

## Notes / 注意事项

- Scene inherits from NativeObject and cannot be instantiated directly
- Scene 继承自 NativeObject，不可直接实例化
- All methods call native implementation via `EngineApplicationInterface.IScene`
- 所有方法都通过 `EngineApplicationInterface.IScene` 调用原生实现
- Scene contains many overloaded methods, especially for navmesh and path queries
- Scene 包含大量重载方法，特别是导航网格和路径查询
- Physics and navmesh operations are protected by `PhysicsAndRayCastLock` mutex
- 物理和导航网格操作使用 `PhysicsAndRayCastLock` 互斥体保护
