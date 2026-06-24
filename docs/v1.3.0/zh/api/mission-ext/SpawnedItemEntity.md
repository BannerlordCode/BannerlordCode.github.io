<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SpawnedItemEntity`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SpawnedItemEntity

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnedItemEntity : UsableMissionObject`
**Base:** `UsableMissionObject`
**File:** `TaleWorlds.MountAndBlade/SpawnedItemEntity.cs`

## 概述

`SpawnedItemEntity` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `WeaponCopy` | `public MissionWeapon WeaponCopy { get; set; }` |
| `HasLifeTime` | `public bool HasLifeTime { get; set; }` |
| `IsRemoved` | `public bool IsRemoved { get; }` |
| `LockUserFrames` | `public override bool LockUserFrames { get; }` |
| `SpawnFlags` | `public Mission.WeaponSpawnFlags SpawnFlags { get; }` |

## 主要方法

### GetActionMessage
`public TextObject GetActionMessage(ItemObject weaponToReplaceWith, bool fillUp)`

**用途 / Purpose:** 获取 `action message` 的当前值。

### GetDescriptionMessage
`public TextObject GetDescriptionMessage(bool fillUp)`

**用途 / Purpose:** 获取 `description message` 的当前值。

### Initialize
`public void Initialize(MissionWeapon weapon, bool hasLifeTime, Mission.WeaponSpawnFlags spawnFlags, in Vec3 fakeSimulationVelocity)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

### AttachWeaponToWeapon
`public void AttachWeaponToWeapon(MissionWeapon attachedWeapon, ref MatrixFrame attachLocalFrame)`

**用途 / Purpose:** 处理 `attach weapon to weapon` 相关逻辑。

### IsReadyToBeDeleted
`public bool IsReadyToBeDeleted()`

**用途 / Purpose:** 处理 `is ready to be deleted` 相关逻辑。

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**用途 / Purpose:** 当 `use stopped` 事件触发时调用此方法。

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** 当 `use` 事件触发时调用此方法。

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**用途 / Purpose:** 处理 `is disabled for agent` 相关逻辑。

### IsStuckMissile
`public bool IsStuckMissile()`

**用途 / Purpose:** 处理 `is stuck missile` 相关逻辑。

### IsQuiverAndNotEmpty
`public bool IsQuiverAndNotEmpty()`

**用途 / Purpose:** 处理 `is quiver and not empty` 相关逻辑。

### IsBanner
`public bool IsBanner()`

**用途 / Purpose:** 处理 `is banner` 相关逻辑。

### GetInfoTextForBeingNotInteractable
`public override TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**用途 / Purpose:** 获取 `info text for being not interactable` 的当前值。

### StopPhysicsAndSetFrameForClient
`public void StopPhysicsAndSetFrameForClient(MatrixFrame frame, GameEntity parent)`

**用途 / Purpose:** 处理 `stop physics and set frame for client` 相关逻辑。

### ConsumeWeaponAmount
`public void ConsumeWeaponAmount(short consumedAmount)`

**用途 / Purpose:** 处理 `consume weapon amount` 相关逻辑。

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `description text` 的当前值。

### RequestDeletionOnNextTick
`public void RequestDeletionOnNextTick()`

**用途 / Purpose:** 处理 `request deletion on next tick` 相关逻辑。

## 使用示例

```csharp
var value = new SpawnedItemEntity();
value.GetActionMessage(weaponToReplaceWith, false);
```

## 参见

- [完整类目录](../catalog)