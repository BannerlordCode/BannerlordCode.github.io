<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionNameMarkerTargetVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionNameMarkerTargetVM

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker
**Module:** SandBox.ViewModelCollection
**Type:** `public abstract class MissionNameMarkerTargetVM<T> : MissionNameMarkerTargetBaseVM`
**Base:** `MissionNameMarkerTargetBaseVM`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerTargetVM.cs`

## 概述

`MissionNameMarkerTargetVM` 位于 `SandBox.ViewModelCollection.Missions.NameMarker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Missions.NameMarker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Target` | `public T Target { get; }` |

## 主要方法

### Equals
`public override bool Equals(MissionNameMarkerTargetBaseVM other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomMissionNameMarkerTargetVM();
```

## 参见

- [完整类目录](../catalog)