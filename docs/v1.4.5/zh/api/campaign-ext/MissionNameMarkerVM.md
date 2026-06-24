<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionNameMarkerVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionNameMarkerVM

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionNameMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.NameMarker/MissionNameMarkerVM.cs`

## 概述

`MissionNameMarkerVM` 位于 `SandBox.ViewModelCollection.Missions.NameMarker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Missions.NameMarker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsTargetsAdded` | `public bool IsTargetsAdded { get; }` |
| `Targets` | `public MBBindingList<MissionNameMarkerTargetBaseVM> Targets { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |

## 主要方法

### Compare
`public int Compare(MissionNameMarkerTargetBaseVM x, MissionNameMarkerTargetBaseVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### SetTargetsDirty
`public void SetTargetsDirty()`

**用途 / Purpose:** 设置 `targets dirty` 的值或状态。

## 使用示例

```csharp
var value = new MissionNameMarkerVM();
value.Compare(x, y);
```

## 参见

- [完整类目录](../catalog)