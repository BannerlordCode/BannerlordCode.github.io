<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameEntity`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameEntity

**命名空间:** TaleWorlds.Engine  
**模块:** TaleWorlds.Engine  
**类型:** sealed class（继承 `NativeObject`）  
**文件:** `bannerlord-1.3.15/TaleWorlds.Engine/GameEntity.cs`

`GameEntity` 是场景中的核心实体——场景对象树的节点，承载变换（位置/旋转/缩放）、网格、组件、脚本、标签与子实体。mod 在任务中生成/操控场景物体时几乎都绕不开它。

## 概述

每个 `GameEntity` 属于一个 `Scene`，自身有本地帧（`GetFrame`/`SetFrame`）与全局帧（`GetGlobalFrame`/`SetGlobalFrame`），可挂载子实体形成层级（`Parent`、`AddChild`、`GetChildren`）。行为通过两类挂载物扩展：`GameEntityComponent`（组件）与 `ScriptComponentBehavior`（脚本，mod 常用泛型方法 `GetFirstScriptOfType<T>` 查询）。

mod 通常不 `new GameEntity`，而是用静态工厂创建或实例化预制件（prefab）。

## 静态工厂

```csharp
public static GameEntity CreateEmpty(Scene scene, bool isModifiableFromEditor = true, bool createPhysics = true, bool callScriptCallbacks = true)
public static GameEntity CreateEmptyDynamic(Scene scene, bool isModifiableFromEditor = true)
public static GameEntity CreateEmptyWithoutScene()

public static GameEntity CopyFrom(Scene scene, GameEntity entity, bool createPhysics = true, bool callScriptCallbacks = true)
public static GameEntity CopyFromPrefab(GameEntity prefab)

public static GameEntity Instantiate(Scene scene, string prefabName, bool callScriptCallbacks, bool createPhysics = true, string scriptInclusingTag = "")
public static GameEntity Instantiate(Scene scene, string prefabName, MatrixFrame frame, bool callScriptCallbacks = true, string scriptInclusingTag = "")
public static bool PrefabExists(string name)
```

`Instantiate` 按 prefab 名从资源加载并放到指定帧；`PrefabExists` 用于先检查预制件是否存在。

## 主要属性

| 名称 | 类型 | 描述 |
|------|------|------|
| Scene | Scene | 所属场景（仅 get） |
| Parent | GameEntity | 父实体（仅 get） |
| GlobalPosition | `Vec3` | 全局位置（仅 get） |
| Name | string | 实体名 |
| Tags | `string[]` | 标签数组 |
| WeakEntity | WeakGameEntity | 弱引用句柄 |

## 变换 / Transform

```csharp
public MatrixFrame GetFrame()
public void SetFrame(ref MatrixFrame frame, bool isTeleportation = true)
public MatrixFrame GetGlobalFrame()
public void SetGlobalFrame(in MatrixFrame frame, bool isTeleportation = true)
public void SetLocalPosition(Vec3 position)
public Vec3 GetGlobalScale()
public Vec3 GetLocalScale()
public void RecomputeBoundingBox()
```

`isTeleportation = true` 表示瞬移（不产生物理插值）。结合 `MatrixFrame` 可精确放置实体。

## 层级 / Hierarchy

```csharp
public void AddChild(GameEntity gameEntity, bool autoLocalizeFrame = false)
public void RemoveChild(GameEntity childEntity, bool keepPhysics, bool keepScenePointer, bool callScriptCallbacks, int removeReason)
public IEnumerable<GameEntity> GetChildren()
public void GetChildrenRecursive(ref List<GameEntity> children)
public GameEntity GetFirstChildEntityWithTag(string tag)
public GameEntity GetFirstChildEntityWithTagRecursive(string tag)
```

## 组件与脚本 / Components & Scripts

```csharp
public void AddComponent(GameEntityComponent component)
public bool RemoveComponent(GameEntityComponent component)
public bool HasComponent(GameEntityComponent component)
public void ClearComponents()

public IEnumerable<ScriptComponentBehavior> GetScriptComponents()
public IEnumerable<T> GetScriptComponents<T>() where T : ScriptComponentBehavior
public T GetFirstScriptOfType<T>() where T : ScriptComponentBehavior
public T GetFirstScriptOfTypeRecursive<T>() where T : ScriptComponentBehavior
public T GetFirstScriptOfTypeInFamily<T>() where T : ScriptComponentBehavior
public bool HasScriptOfType<T>() where T : ScriptComponentBehavior
public int GetScriptCountOfTypeRecursive<T>() where T : ScriptComponentBehavior
public bool HasScriptComponent(string scName)
public void CreateAndAddScriptComponent(string name, bool callScriptCallbacks)
```

mod 最常用 `GetFirstScriptOfType<T>()` 读取实体上挂的脚本行为（如同步器、触发器）。

## 标签 / Tags

```csharp
public void AddTag(string tag)
public void RemoveTag(string tag)
public bool HasTag(string tag)
public GameEntity GetFirstChildEntityWithTag(string tag)
```

## 可见性 / Visibility

```csharp
public void SetVisibilityExcludeParents(bool visible)
public bool GetVisibilityExcludeParents()
public bool IsVisibleIncludeParents()
public void SetAlpha(float alpha)
public void SetReadyToRender(bool ready)
```

## 生命周期 / Lifecycle

```csharp
public void Remove(int removeReason)
public void ClearEntityComponents(bool resetAll, bool removeScripts, bool deleteChildEntities)
public void ClearComponents()
public bool CheckResources(bool addToQueue, bool checkFaceResources)
public void SetMobility(GameEntity.Mobility mobility)
public GameEntity.Mobility GetMobility()
```

`Remove` 从场景移除并释放；`removeReason` 是引擎定义的移除原因码。

## 使用示例

```csharp
// 在任务中按 prefab 在指定位置生成实体
public override void OnMissionBehaviourInitialize()
{
    Scene scene = Mission.Current.Scene;
    if (GameEntity.PrefabExists("my_prefab"))
    {
        MatrixFrame frame = MatrixFrame.Identity;
        frame.origin = new Vec3(100f, 50f, 0f);  // x, y, z
        GameEntity ent = GameEntity.Instantiate(scene, "my_prefab", frame);
        // 给实体打标签，便于后续查找
        ent.AddTag("my_spawned");
    }
}

// 查找场景中带标签的子实体
GameEntity found = scene.FindEntityWithTag("my_spawned");
// 读取其上的脚本行为
var script = found.GetFirstScriptOfType<MyScriptBehavior>();
if (script != null) { /* ... */ }

// 移动既有实体（瞬移到新帧）
MatrixFrame f = ent.GetGlobalFrame();
f.origin += new Vec3(0f, 0f, 5f);
ent.SetGlobalFrame(in f, isTeleportation: true);

// 从场景移除
ent.Remove(0);
```

## 参见

- [Scene](./Scene.md)
- [NativeObject](./NativeObject.md)
- [Skeleton](./Skeleton.md)
- [Utilities](./Utilities.md)
