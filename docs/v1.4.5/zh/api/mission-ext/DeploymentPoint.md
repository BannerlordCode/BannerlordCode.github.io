<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DeploymentPoint`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DeploymentPoint

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DeploymentPoint : SynchedMissionObject`
**Base:** `SynchedMissionObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DeploymentPoint.cs`

## 概述

`DeploymentPoint` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DeploymentTargetPosition` | `public Vec3 DeploymentTargetPosition { get; }` |
| `AssociatedWallSegment` | `public WallSegment AssociatedWallSegment { get; }` |
| `DeployedWeapon` | `public SynchedMissionObject DeployedWeapon { get; }` |
| `DisbandedWeapon` | `public SynchedMissionObject DisbandedWeapon { get; }` |

## 主要方法

### AfterMissionStart
`public override void AfterMissionStart()`

**用途 / Purpose:** 处理 `after mission start` 相关逻辑。

### GetDeploymentOrigin
`public Vec3 GetDeploymentOrigin()`

**用途 / Purpose:** 获取 `deployment origin` 的当前值。

### GetDeploymentPointState
`public DeploymentPointState GetDeploymentPointState()`

**用途 / Purpose:** 获取 `deployment point state` 的当前值。

### GetDeploymentPointType
`public DeploymentPointType GetDeploymentPointType()`

**用途 / Purpose:** 获取 `deployment point type` 的当前值。

### GetAssociatedSiegeLadders
`public List<SiegeLadder> GetAssociatedSiegeLadders()`

**用途 / Purpose:** 获取 `associated siege ladders` 的当前值。

### GetWeaponsUnder
`public MBList<SynchedMissionObject> GetWeaponsUnder()`

**用途 / Purpose:** 获取 `weapons under` 的当前值。

### GetSpawnersForEditor
`public IEnumerable<SpawnerBase> GetSpawnersForEditor()`

**用途 / Purpose:** 获取 `spawners for editor` 的当前值。

### Deploy
`public void Deploy(Type t)`

**用途 / Purpose:** 处理 `deploy` 相关逻辑。

### Deploy
`public void Deploy(SiegeWeapon s)`

**用途 / Purpose:** 处理 `deploy` 相关逻辑。

### Disband
`public ScriptComponentBehavior Disband()`

**用途 / Purpose:** 处理 `disband` 相关逻辑。

### Hide
`public void Hide()`

**用途 / Purpose:** 处理 `hide` 相关逻辑。

### Show
`public void Show()`

**用途 / Purpose:** 处理 `show` 相关逻辑。

### ToggleWeaponVisibility
`public void ToggleWeaponVisibility(bool visible, SynchedMissionObject weapon)`

**用途 / Purpose:** 处理 `toggle weapon visibility` 相关逻辑。

### HideAllWeapons
`public void HideAllWeapons()`

**用途 / Purpose:** 处理 `hide all weapons` 相关逻辑。

## 使用示例

```csharp
var value = new DeploymentPoint();
value.AfterMissionStart();
```

## 参见

- [完整类目录](../catalog)