---
title: "MapSiegeVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapSiegeVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapSiegeVM

**Namespace:** SandBox.ViewModelCollection.MapSiege
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapSiegeVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.MapSiege/MapSiegeVM.cs`

## 概述

`MapSiegeVM` 位于 `SandBox.ViewModelCollection.MapSiege`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.MapSiege` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PreparationProgress` | `public float PreparationProgress { get; set; }` |
| `IsPreparationsCompleted` | `public bool IsPreparationsCompleted { get; set; }` |
| `PreparationTitleText` | `public string PreparationTitleText { get; set; }` |
| `ProductionController` | `public MapSiegeProductionVM ProductionController { get; set; }` |
| `PointsOfInterest` | `public MBBindingList<MapSiegePOIVM> PointsOfInterest { get; set; }` |

## 主要方法

### Compare
`public int Compare(MapSiegePOIVM x, MapSiegePOIVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnSelectionFromScene
`public void OnSelectionFromScene(MatrixFrame frameOfEngine)`

**用途 / Purpose:** 当 `selection from scene` 事件触发时调用此方法。

### Update
`public void Update(float mapCameraDistanceValue)`

**用途 / Purpose:** 更新 `update` 的状态或数据。

## 使用示例

```csharp
var value = new MapSiegeVM();
value.Compare(x, y);
```

## 参见

- [完整类目录](../catalog)