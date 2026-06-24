<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentVisualHolder`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AgentVisualHolder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentVisualHolder : IAgentVisual`
**Base:** `IAgentVisual`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVisualHolder.cs`

## 概述

`AgentVisualHolder` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetAction
`public void SetAction(in ActionIndexCache actionName, float startProgress = 0f, bool forceFaceMorphRestart = true)`

**用途 / Purpose:** 设置 `action` 的值或状态。

### GetEntity
`public GameEntity GetEntity()`

**用途 / Purpose:** 获取 `entity` 的当前值。

### GetVisuals
`public MBAgentVisuals GetVisuals()`

**用途 / Purpose:** 获取 `visuals` 的当前值。

### SetFrame
`public void SetFrame(ref MatrixFrame frame)`

**用途 / Purpose:** 设置 `frame` 的值或状态。

### GetFrame
`public MatrixFrame GetFrame()`

**用途 / Purpose:** 获取 `frame` 的当前值。

### GetBodyProperties
`public BodyProperties GetBodyProperties()`

**用途 / Purpose:** 获取 `body properties` 的当前值。

### SetBodyProperties
`public void SetBodyProperties(BodyProperties bodyProperties)`

**用途 / Purpose:** 设置 `body properties` 的值或状态。

### GetIsFemale
`public bool GetIsFemale()`

**用途 / Purpose:** 获取 `is female` 的当前值。

### GetCharacterObjectID
`public string GetCharacterObjectID()`

**用途 / Purpose:** 获取 `character object i d` 的当前值。

### SetCharacterObjectID
`public void SetCharacterObjectID(string id)`

**用途 / Purpose:** 设置 `character object i d` 的值或状态。

### GetEquipment
`public Equipment GetEquipment()`

**用途 / Purpose:** 获取 `equipment` 的当前值。

### RefreshWithNewEquipment
`public void RefreshWithNewEquipment(Equipment equipment)`

**用途 / Purpose:** 刷新 `with new equipment` 的显示或缓存。

### SetClothingColors
`public void SetClothingColors(uint color1, uint color2)`

**用途 / Purpose:** 设置 `clothing colors` 的值或状态。

### GetClothingColors
`public void GetClothingColors(out uint color1, out uint color2)`

**用途 / Purpose:** 获取 `clothing colors` 的当前值。

### GetCopyAgentVisualsData
`public AgentVisualsData GetCopyAgentVisualsData()`

**用途 / Purpose:** 获取 `copy agent visuals data` 的当前值。

### Refresh
`public void Refresh(bool needBatchedVersionForWeaponMeshes, AgentVisualsData data, bool forceUseFaceCache = false)`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

## 使用示例

```csharp
var value = new AgentVisualHolder();
value.SetAction(actionName, 0, false);
```

## 参见

- [完整类目录](../catalog)