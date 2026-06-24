<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionNameMarkerProvider`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionNameMarkerProvider

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker
**Module:** SandBox.ViewModelCollection
**Type:** `public abstract class MissionNameMarkerProvider`
**Base:** 无
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.NameMarker/MissionNameMarkerProvider.cs`

## 概述

`MissionNameMarkerProvider` 位于 `SandBox.ViewModelCollection.Missions.NameMarker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Missions.NameMarker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateMarkers
`public abstract void CreateMarkers(List<MissionNameMarkerTargetBaseVM> markers)`

**用途 / Purpose:** 创建一个 `markers` 实例或对象。

### Initialize
`public void Initialize(Mission mission, Action onSetMarkersDirty)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Destroy
`public void Destroy(Mission mission)`

**用途 / Purpose:** 处理 `destroy` 相关逻辑。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomMissionNameMarkerProvider();
```

## 参见

- [完整类目录](../catalog)