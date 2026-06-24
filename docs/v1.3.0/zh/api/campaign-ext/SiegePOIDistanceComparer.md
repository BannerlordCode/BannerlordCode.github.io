<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegePOIDistanceComparer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SiegePOIDistanceComparer

**命名空间:** SandBox.ViewModelCollection.MapSiege
**模块:** SandBox.ViewModelCollection
**类型:** `public class SiegePOIDistanceComparer : IComparer<MapSiegePOIVM>`
**Base:** `IComparer<MapSiegePOIVM>`
**领域:** campaign-ext

## 概述

`SiegePOIDistanceComparer` 位于 `SandBox.ViewModelCollection.MapSiege`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnSelectionFromScene
`public void OnSelectionFromScene(MatrixFrame frameOfEngine)`

**用途 / Purpose:** 当 `selection from scene` 事件触发时调用此方法。

### Update
`public void Update(float mapCameraDistanceValue)`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### Compare
`public int Compare(MapSiegePOIVM x, MapSiegePOIVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 SiegePOIDistanceComparer 实例，再调用它的公开方法
var value = new SiegePOIDistanceComparer();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
